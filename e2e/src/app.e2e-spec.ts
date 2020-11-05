import { AppPage } from './app.po';
import { browser, logging, by, element, $$, $ } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Ahorcado');
  });

  it('input should work', () => {
    page.navigateTo();
    $$('input').sendKeys('Bruno');
    page.clickBtn();
    page.getPalabraText()
      .then(text => expect(text[0]).toContain('*'));
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
