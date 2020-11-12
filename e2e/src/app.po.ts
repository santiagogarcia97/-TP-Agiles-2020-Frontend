import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('.title')).getText() as Promise<string>;
  }

  fillNameInput(nombre: string): Promise<unknown> {
    return element(by.css('.name-input')).sendKeys(nombre) as Promise<unknown>;
  }

  clickBtnIniciar(): Promise<unknown> {
    return element(by.css('.btn-iniciar')).click() as Promise<unknown>;
  }

  getPalabraText(): Promise<string> {
    return element(by.css('.palabra')).getText() as Promise<string>;
  }

  selectDifficulty(diff: string): Promise<unknown> {
    const select = element(by.css('.difficulty-input'));
    return select.$(`[value="${diff}"]`).click() as Promise<unknown>;
  }

  clickBtnVerRanking(): Promise<unknown> {
    return element(by.css('.btn-ranking')).click() as Promise<unknown>;
  }

  getRankingTable(): Promise<string> {
    return element(by.css('.ranking-table')).getText() as Promise<string>;
  }

  getPartidaStats(): Promise<string> {
    return element(by.css('.partida-stats')).getText() as Promise<string>;
  }

  clickBtnLetra(letra: string): Promise<unknown> {
    return element.all(by.css('.btn-tecla')).filter((elem, index) => {
      return elem.getText()
      .then(text => text === letra);
    }).first().click() as Promise<unknown>;
  }

  getImagen(): Promise<string> {
    return element(by.css('.imagen')).getAttribute('src') as Promise<string>;
  }
}
