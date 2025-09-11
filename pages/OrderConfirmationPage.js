const { expect } = require('@playwright/test');
const locators = require('./locators');

class OrderConfirmationPage {
  constructor(page) {
    this.page = page;
  }

  //Verify the success of the order
  async verifySuccess() {
    await expect(this.page.getByText(locators.order.notice)).toBeVisible();
    await expect(this.page.locator(locators.order.orderNumber)).toBeVisible();
  }
}

module.exports = { OrderConfirmationPage };
