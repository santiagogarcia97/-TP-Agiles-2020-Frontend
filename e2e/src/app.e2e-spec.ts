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

  it('debe poderse ver el ranking', () => {
    page.navigateTo();
    page.clickBtnVerRanking();
    expect(page.getRankingTable()).toContain('Nombre');
  });

  it('debe setearse la dificultad correctamente', () => {
    page.navigateTo();
    page.fillNameInput('Bruno');
    page.selectDifficulty('DIFICIL');
    page.clickBtnIniciar();
    expect(page.getPartidaStats()).toContain('DIFICIL');
  });

/*
  it('debe arriesgar la letra correcta ', () => {
    page.navigateTo();
    page.fillNameInput('Bruno');
    page.selectDifficulty('DIFICIL');
    page.clickBtnIniciar();
    browser.sleep(5000);
    browser.manage().getCookies().then(cookies => console.log(cookies));
    page.clickBtnLetra('F');
    browser.sleep(60000);
    expect(page.getPartidaStats()).toContain('DIFICIL');
  });
*/

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
