import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Ahorcado acceptance tests suite', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('debe mostrar Ahorcado en el titulo', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Ahorcado');
  });

  it('debe poder iniciarse la partida', () => {
    page.navigateTo();
    page.fillNameInput('Bruno');
    page.selectDifficulty('FACIL');
    page.clickBtnIniciar();
    expect(page.getPalabraText()).toContain('*');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
