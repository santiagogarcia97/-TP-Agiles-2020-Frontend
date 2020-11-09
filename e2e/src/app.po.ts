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

  selectDropdownByNumber(elementCss, index): void {
    element(by.css(elementCss)).element(by.tagName('option'))
      .then(options => options[index].click());
    browser.sleep(500);
  }
}
