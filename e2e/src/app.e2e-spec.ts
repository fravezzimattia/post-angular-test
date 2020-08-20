import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
	let page: AppPage;

	beforeEach(() => {
		page = new AppPage();
	});

	it('should display welcome message', () => {
		page.navigateTo();
		expect(page.getTitleText()).toEqual('La mia calcolatrice');
	});

	it('should display result value', () => {
		page.navigateTo();
		page.getNum1Input().clear()
			.then(() =>
				page.getNum1Input().sendKeys('52')
			)
		page.getNum2Input().clear()
			.then(() =>
				page.getNum2Input().sendKeys('3')
			)

		page.getOperatorOptionsProduct().click();
		page.getCalculateButton().click();

		expect(page.getResultValue()).toEqual('156');
	});

	afterEach(async () => {
		// Assert that there are no errors emitted from the browser
		const logs = await browser.manage().logs().get(logging.Type.BROWSER);
		expect(logs).not.toContain(jasmine.objectContaining({
			level: logging.Level.SEVERE,
		} as logging.Entry));
	});
});
