import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
	navigateTo() {
		return browser.get(browser.baseUrl) as Promise<any>;
	}

	getTitleText() {
		return element(by.css('app-root h1')).getText() as Promise<string>;
	}

	getNum1Input(): ElementFinder {
		return element(by.id("num1"));
	}

	getNum2Input(): ElementFinder {
		return element(by.id('num2'));
	}

	getOperatorSelect(): ElementFinder {
		return element(by.id('operator'));
	}

	getOperatorOptionsProduct(): ElementFinder {
		return this.getOperatorSelect().element(by.cssContainingText('option', '*'));
	}

	getCalculateButton(): ElementFinder {
		return element(by.id('calculate'));
	}

	getResultValue(): Promise<string> {
		return element(by.id('result')).getAttribute('value') as Promise<string>;
	}
}
