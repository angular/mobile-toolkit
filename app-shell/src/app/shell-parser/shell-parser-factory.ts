import {Parse5TemplateParser} from './template-parser';
import {ShellParserImpl} from './shell-parser';
import {cssNodeMatcherFactory} from './node-matcher';
import {StylesheetResourceInlineVisitor, InlineStyleResourceInlineVisitor, TemplateStripVisitor, NodeVisitor} from './node-visitor';
import {BrowserWorkerScope} from './context';
import {ShellParserConfig, SHELL_PARSER_DEFAULT_CONFIG} from './config';

export const normalizeConfig = (config: ShellParserConfig) => {
  return Object.assign(Object.assign({}, SHELL_PARSER_DEFAULT_CONFIG), config);
};

export const shellParserFactory = (config: ShellParserConfig = {}) => {
  const parserConfig = normalizeConfig(config);
  const scope = new BrowserWorkerScope();
  const visitors: NodeVisitor[] = [];
  if (config.INLINE_IMAGES) {
    visitors.push(new TemplateStripVisitor(cssNodeMatcherFactory(parserConfig.NO_RENDER_CSS_SELECTOR)));
    visitors.push(new StylesheetResourceInlineVisitor(scope, config.INLINE_IMAGES));
    visitors.push(new InlineStyleResourceInlineVisitor(scope, config.INLINE_IMAGES));
  }
  return new ShellParserImpl(
      parserConfig,
      new Parse5TemplateParser(),
      visitors,
      scope);
};

