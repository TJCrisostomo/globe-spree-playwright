const { expect } = require('@playwright/test');

class OrderConfirmationPage {
  constructor(page) {
    this.page = page;
    this.orderConfirmation = this.page.getByRole('heading', { name: 'Checkout Guide' });
  }

  //Verify the success of the order
  async verifySuccess() {
    await expect(this.orderConfirmation).toBeVisible();
  }
}

module.exports = { OrderConfirmationPage };
