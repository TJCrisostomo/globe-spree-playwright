const { expect } = require('@playwright/test');
const locators = require('./locators');

class OrderConfirmationPage {
  constructor(page) {
    this.page = page;
  }

  //Verify the success of the order
  async verifySuccess() {
    await expect(page.getByRole('heading', { name: 'Thanks John for your order!' })).toBeVisible();
  }
}

module.exports = { OrderConfirmationPage };
