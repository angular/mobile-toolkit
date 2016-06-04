import {Parse5TemplateParser} from './template-parser';
import {ShellParserImpl} from './shell-parser';
import {cssNodeMatcherFactory} from './node-matcher';
import {BrowserWorkerScope} from './context';
import {ShellParserConfig, SHELL_PARSER_DEFAULT_CONFIG} from './config';

export const normalizeConfig = (config: ShellParserConfig) => {
  return Object.assign(Object.assign({}, SHELL_PARSER_DEFAULT_CONFIG), config);
};

export const shellParserFactory = (config: ShellParserConfig = {}) => {
  const parserConfig = normalizeConfig(config);
  return new ShellParserImpl(
      parserConfig,
      new Parse5TemplateParser(),
      cssNodeMatcherFactory(parserConfig.NO_RENDER_CSS_SELECTOR),
      new BrowserWorkerScope());
};

