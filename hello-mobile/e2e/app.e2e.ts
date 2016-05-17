import { HelloMobilePage } from './app.po';

describe('hello-mobile App', function() {
  let page: HelloMobilePage;

  beforeEach(() => {
    page = new HelloMobilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hello-mobile works!');
  });
});
