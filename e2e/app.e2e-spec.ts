import { VolunteerPage } from './app.po';

describe('volunteer App', () => {
  let page: VolunteerPage;

  beforeEach(() => {
    page = new VolunteerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
