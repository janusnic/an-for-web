import { An4AppPage } from './app.po';

describe('an4-app App', () => {
  let page: An4AppPage;

  beforeEach(() => {
    page = new An4AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
