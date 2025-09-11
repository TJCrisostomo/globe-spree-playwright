const locators = require('./locators');

class CheckoutPage {
  constructor(page) {
    this.page = page;
  }

  // Fill the address fields
  async fillAddress(address) {
    await this.page.locator(locators.checkout.firstName).first().fill(address.firstName);
    await this.page.locator(locators.checkout.lastName).first().fill(address.lastName);
    await this.page.locator(locators.checkout.address1).first().fill(address.address1);
    await this.page.getByRole('textbox', { name: 'City' }).click();
    await this.page.getByRole('textbox', { name: 'City' }).fill(address.city);
    await this.page.locator(locators.checkout.zip).first().fill(address.zip);
    await this.page.locator(locators.checkout.phone).first().fill(address.phone);
    if (await this.page.locator(locators.checkout.stateSelect).count()) {
      await this.page.locator(locators.checkout.stateSelect).first().selectOption({ label: address.state });
    }
    await this.page.getByRole(locators.checkout.saveAndContinue.role, { name: locators.checkout.saveAndContinue.name }).first().click();
  }

  //Select Shipping Method
  async chooseFirstShippingMethod() {
    await this.page.locator(locators.checkout.shippingMethods).first().check();
    await this.page.getByRole(locators.checkout.saveAndContinue.role, { name: locators.checkout.saveAndContinue.name }).first().click();
  }

  //Select Payment
  async selectFirstPaymentAndPay() {
    if (await this.page.locator(locators.checkout.paymentMethods).count()) {
      await this.page.locator(locators.checkout.paymentMethods).first().check();
    }
  await this.page.getByRole('textbox', { name: 'Expiration date MM / YY' }).click();
  await this.page.getByRole('textbox', { name: 'Expiration date MM / YY' }).fill('07 / 31');
  await this.page.getByRole('textbox', { name: 'Security code' }).click();
  await this.page.getByRole('textbox', { name: 'Security code' }).fill('172');  
  await this.page.getByRole('textbox', { name: 'Card number' }).click();
  await this.page.getByRole('textbox', { name: 'Card number' }).fill('5555555555554444');
  await this.page.getByRole('button', { name: 'Pay now' }).click();
  //await this.page.getByRole('button', { name: 'Save and Continue' }).first().click();
  }
}

module.exports = { CheckoutPage };
