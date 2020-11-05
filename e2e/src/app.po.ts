import { $, $$, browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.id('title')).getText() as Promise<string>;
  }

  getBtnText(): Promise<string> {
    return element(by.id('btn')).getText() as Promise<string>;
  }

  clickBtn(): Promise<unknown> {
    return element(by.id('btn')).click() as Promise<unknown>;
  }

  getPalabraText(): Promise<string> {
    return $$('.palabra').getText() as Promise<string>;
  }
}
