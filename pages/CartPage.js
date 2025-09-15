const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;
    this.getShirt = this.page.getByRole('link', { name: 'Ripped T-Shirt' });
    this.getPrice = this.page.getByText('$55.99 $');
    this.checkoutBtn = this.page.getByRole('link', { name: 'Checkout' });
  }

  //Check the availability of item
  async assertHasItem() {
    await expect(this.getShirt).toBeVisible();
    await expect(this.getPrice).toBeVisible();
  }

  //Procedd to checkout
  async proceedToCheckout() {
    if (await this.checkoutBtn.count()) {
      await this.checkoutBtn.first().click();
    } else {
      await this.page.goto('/checkout');
    }
    await this.page.waitForLoadState('domcontentloaded');
  }
}

module.exports = { CartPage };
