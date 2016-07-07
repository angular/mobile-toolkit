import {ASTNode} from '../../ast';
import {NodeVisitor} from '../node-visitor';
import {WorkerScope} from '../../context';

const URL_REGEXP = /:\s+url\(['"]?(.*?)['"]?\)/gmi;

export abstract class ResourceInlineVisitor extends NodeVisitor {

  constructor(private scope: WorkerScope, private inlineExtensions: string[]) {
    super();
  }

  inlineAssets(style: string) {
    let urls = this.getImagesUrls(style);
    urls = urls.filter((url: string, idx: number) => urls.indexOf(url) === idx);
    return this.processInline(urls, style)
      .then((content: string) => content);
  }

  protected getImagesUrls(styles: string): string[] {
    URL_REGEXP.lastIndex = 0;
    let match: string[];
    const result: string[] = [];
    while ((match = URL_REGEXP.exec(styles)) !== null) {
      const url = match[1];
      if (this.supportedExtension(url)) {
        result.push(url);
      }
    }
    return result;
  }

  private supportedExtension(url: string) {
    return this.inlineExtensions.some((ext: string) => new RegExp(`${ext}$`).test(url));
  }

  protected processInline(urls: string[], styles: string): Promise<string> {
    const processResponse = (response: Response): Promise<string[]> => {
      if (response && response.ok) {
        return response.arrayBuffer()
          .then((arr: ArrayBuffer) => [
            btoa(String.fromCharCode.apply(null, new Uint8Array(arr))),
            response.headers.get('content-type')
          ]);
      } else {
        return null;
      }
    };
    return Promise.all(urls.map((url: string) => this.scope.fetch(url).catch(() => null)))
      .then((responses: any[]) => <any>Promise.all(responses.map(processResponse)))
      .then((images: string[][]) => {
        return images.map((img: string[]) => img ? `data:${img[1]};base64,${img[0]}` : null)
        .reduce((content: string, img: string, idx: number) =>
          img ? content.replace(new RegExp(urls[idx], 'g'), img) : content, styles);
      });
  }

}

