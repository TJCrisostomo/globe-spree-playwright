//const locators = require('./locators');

class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstNameField = this.page.locator('input[name*="firstname"], input[name*="first_name"]').first();
    this.lastNameField = this.page.locator('input[name*="lastname"], input[name*="last_name"]').first();
    this.address1Field = this.page.locator('input[name*="address1"]').first();
    this.cityField = this.page.getByRole('textbox', { name: 'City' });
    this.zipCodeField = this.page.locator('input[name*="zipcode"], input[name*="zip"]').first();
    this.phoneField = this.page.locator('input[name*="phone"]').first();
    this.stateField = this.page.locator('select[name*="state"]');
    this.saveButton = this.page.getByRole('button', { name: 'Save and Continue' }).first();
    this.shippingMethods = this.page.locator('input[type="radio"][name*="shipping_method"], input[type="radio"][name*="shipment"]').first();
    this.paymentMethod = this.page.locator('input[type="radio"][name*="payment_method"]');
    this.creditCard = this.page.locator('iframe[title="Secure payment input frame"]').contentFrame().getByRole('textbox', { name: 'Card number' });
    this.expiryDate = this.page.locator('iframe[title="Secure payment input frame"]').contentFrame().getByRole('textbox', { name: 'Expiration date MM / YY' });
    this.securityCode = this.page.locator('iframe[title="Secure payment input frame"]').contentFrame().getByRole('textbox', { name: 'Security code' });
    this.payNowButton = this.page.getByRole('button', { name: 'Pay now' });
    //this.goToComplete= this.page.waitForURL('/complete');
  }

  // Fill the address fields
  async fillAddress(address) {
    await this.firstNameField.fill(address.firstName);
    await this.lastNameField.fill(address.lastName);
    await this.address1Field.fill(address.address1);
    await this.cityField.click();
    await this.cityField.fill(address.city);
    await this.zipCodeField.fill(address.zip);
    await this.phoneField.fill(address.phone);
    if (await this.stateField.count()) {
      await this.stateField.first().selectOption({ label: address.state });
    }
    await this.saveButton.click();
  }

  //Select Shipping Method
  async chooseFirstShippingMethod() {
    await this.shippingMethods.check();
    await this.saveButton.click();
  }

  //Select Payment
  async selectFirstPaymentAndPay(creditCardInfo) {
    if (await this.paymentMethod.count()) {
      await this.paymentMethod.first().click();
    }
  await this.creditCard.fill('5555555555554444');
  await this.expiryDate.fill('05 / 31');
  await this.securityCode.fill('172');
  await this.payNowButton.click();
  }
}

module.exports = { CheckoutPage };
