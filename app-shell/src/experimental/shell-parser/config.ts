export type RouteDefinition = string;

const SHELL_PARSER_CACHE_NAME = 'mobile-toolkit:app-shell';
const APP_SHELL_URL = './app_shell.html';
const NO_RENDER_CSS_SELECTOR = '[shellNoRender]';
const RENDER_MARKER = 'shellRender';
const ROUTE_DEFINITIONS: RouteDefinition[] = [];
const INLINE_IMAGES: string[] = ['png', 'svg', 'jpg'];

// TODO(mgechev): use if we decide to include @angular/core
// export const SHELL_PARSER_CONFIG = new OpaqueToken('ShellRuntimeParserConfig');

export interface ShellParserConfig {
  APP_SHELL_URL?: string;
  SHELL_PARSER_CACHE_NAME?: string;
  NO_RENDER_CSS_SELECTOR?: string;
  RENDER_MARKER?: string;
  ROUTE_DEFINITIONS?: RouteDefinition[];
  INLINE_IMAGES?: string[];
}

export const SHELL_PARSER_DEFAULT_CONFIG: ShellParserConfig = {
  SHELL_PARSER_CACHE_NAME,
  APP_SHELL_URL,
  NO_RENDER_CSS_SELECTOR,
  RENDER_MARKER,
  ROUTE_DEFINITIONS,
  INLINE_IMAGES
};

