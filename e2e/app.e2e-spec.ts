import { QuoteRankAppPage } from './app.po';

describe('quote-rank-app App', () => {
  let page: QuoteRankAppPage;

  beforeEach(() => {
    page = new QuoteRankAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
