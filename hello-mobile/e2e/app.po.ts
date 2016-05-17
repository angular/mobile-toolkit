export class HelloMobilePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hello-mobile-app h1')).getText();
  }
}
