import { Component } from '@angular/core';
import { APP_SHELL_DIRECTIVES } from '@angular/app-shell';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdSpinner } from '@angular2-material/progress-circle';

@Component({
  moduleId: module.id,
  selector: 'hello-mobile-app',
  template: `
    <md-toolbar>
      {{title}}
    </md-toolbar>
    <md-spinner *shellRender></md-spinner>
    <h1 *shellNoRender>App is Fully Rendered</h1>
  `,
  styles: [`
    md-spinner {
      margin: 24px auto 0;
    }
  `],
  directives: [APP_SHELL_DIRECTIVES, MdToolbar, MdSpinner]
})
export class HelloMobileAppComponent {
  title = 'Hello Mobile';
}
