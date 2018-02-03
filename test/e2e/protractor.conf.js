'use strict';

module.exports.config = {
	directConnect: true,
	capabilities: {
		'browserName': 'chrome'
	},
	specs: ['specs/*.spec.js'],
	baseUrl: 'http://200.150.73.74:43387/env/test/',
	onPrepare(){
		browser.get('senac-portal-web/#/login');
		element(by.css('[formcontrolname="email"]')).sendKeys("jonathan.araujo@ms.senac.br");
		element(by.css('[formcontrolname="senha"]')).sendKeys("secret");
		return browser.wait(() => {
			element(by.css('[type="submit"]')).click();
			browser.sleep(3000);
			return browser.wait( () => {
				return true;
			});
		});
	},
};