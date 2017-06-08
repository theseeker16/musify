import { MusifyCliPage } from './app.po';

describe('musify-cli App', function() {
  let page: MusifyCliPage;

  beforeEach(() => {
    page = new MusifyCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
