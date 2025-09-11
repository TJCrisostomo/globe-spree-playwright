const { expect } = require('@playwright/test');
const locators = require('./locators');

class CartPage {
  constructor(page) {
    this.page = page;
  }

  //Check the availability of item
  async assertHasItem() {
    await expect(this.page.getByRole('link', { name: 'Ripped T-Shirt' })).toBeVisible();
    await expect(this.page.getByText('$55.99 $')).toBeVisible();
  }

  //Procedd to checkout
  async proceedToCheckout() {
    const checkoutBtn = this.page.getByRole('link', { name: 'Checkout' });
    if (await checkoutBtn.count()) {
      await checkoutBtn.first().click();
    } else {
      await this.page.goto('/checkout');
    }
    await this.page.waitForLoadState('domcontentloaded');
  }
}

module.exports = { CartPage };
