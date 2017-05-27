import { LabPipesPage } from './app.po';

describe('lab-pipes App', () => {
  let page: LabPipesPage;

  beforeEach(() => {
    page = new LabPipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
