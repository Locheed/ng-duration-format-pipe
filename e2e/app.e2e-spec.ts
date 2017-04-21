import { DurationFormatPage } from './app.po';

describe('duration-format App', function() {
  let page: DurationFormatPage;

  beforeEach(() => {
    page = new DurationFormatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
