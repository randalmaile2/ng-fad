import { FadNgPage } from './app.po';

describe('fad-ng App', function() {
  let page: FadNgPage;

  beforeEach(() => {
    page = new FadNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
