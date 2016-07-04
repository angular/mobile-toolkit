import {RouteDefinition, ShellParserConfig} from './config';
import {ASTNode} from './ast';
import {NodeVisitor} from './node-visitor';
import {NodeMatcher} from './node-matcher';
import {TemplateParser} from './template-parser';
import {WorkerScope} from './context';

export interface ShellParser {
  fetchDoc(url?: string): Promise<Response>;
  parseDoc(res: Response): Promise<Response>;
  match(req: Request): Promise<Response>;
}

export class ShellParserImpl implements ShellParser {
  constructor(private config: ShellParserConfig,
      private parser: TemplateParser,
      private visitors: NodeVisitor[],
      private scope: WorkerScope) {}

  fetchDoc(url: string = this.config.APP_SHELL_URL): Promise<Response> {
    return this.scope.fetch(url);
  }

  parseDoc(res: Response): Promise<Response> {
    return res.text()
      .then((template: string) => {
        const headers: any = {
          'content-type': 'text/html'
        };
        return this.processDoc(template)
          .then((template: string) => {
            return this.scope.newResponse(template, {
              status: 200,
              headers
            });
          });
      });
  }

  match(req: Request): Promise<Response> {
    if (req.method !== 'GET') {
      return Promise.resolve(null);
    }
    const matchedRoute = this.routeMatcher(this.config.ROUTE_DEFINITIONS, req.url).pop();
    if (!matchedRoute) {
      return Promise.resolve(null);
    }
    return this.scope.caches.open(this.config.SHELL_PARSER_CACHE_NAME)
      .then((cache: Cache) =>
         cache.match(this.scope.newRequest(this.config.APP_SHELL_URL)));
  }

  private processDoc(template: string): Promise<string> {
    const root = this.parser.parse(template);
    return this.visitTemplate(root)
      .then((root: ASTNode) => {
        return this.parser.serialize(root);
      });
  }

  private visitTemplate(node: ASTNode, visitorIdx: number = 0): Promise<ASTNode> {
    if (visitorIdx >= this.visitors.length) {
      return Promise.resolve(node);
    }
    return this.visitors[visitorIdx].visit(node)
      .then((node: ASTNode) => {
        return this.visitTemplate(node, visitorIdx + 1);
      });
  }

  private routeMatcher(definitions: RouteDefinition[], url: string) {
    const urlParts = url.split('/');
    let definitionsParts = definitions.map(def => this.scope.newRequest(def).url.split('/'))
      .filter(def => urlParts.length === def.length);
    let currentIdx = 0;
    while (definitionsParts.length > 0 && urlParts.length > currentIdx) {
      definitionsParts = definitionsParts.filter(defParts => {
        if (defParts[currentIdx][0] === ':') {
          return true;
        }
        return defParts[currentIdx] === urlParts[currentIdx];
      });
      currentIdx += 1;
    }
    return definitionsParts.map(parts => parts.join('/'));
  }
}

