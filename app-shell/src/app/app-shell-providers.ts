import { Provider} from '@angular/core';

import { IS_PRERENDER } from './is-prerender.service';
import { TemplateVisibilityStrategy } from './template-visibility-strategy';
import { TemplateCommentStrategy } from './template-comment-strategy';

export const APP_SHELL_RUNTIME_PROVIDERS: Provider[] = [
  {
    provide: IS_PRERENDER,
    useValue: false
  },
  {
    provide: TemplateVisibilityStrategy,
    useClass: TemplateCommentStrategy
  }
];

export const APP_SHELL_BUILD_PROVIDERS: Provider[] = [
  {
    provide: IS_PRERENDER,
    useValue: true
  },
  {
    provide: TemplateVisibilityStrategy,
    useClass: TemplateCommentStrategy
  }
];
