import { NordsensePage } from './app.po';

describe('nordsense App', () => {
  let page: NordsensePage;

  beforeEach(() => {
    page = new NordsensePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
