import { ApmPage } from './app.po';

describe('apm App', () => {
  let page: ApmPage;

  beforeEach(() => {
    page = new ApmPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
