const { expect } = require('@playwright/test');
const locators = require('./locators');

class CartPage {
  constructor(page) {
    this.page = page;
  }

  //Check the availability of item
  async assertHasItem() {
    const lineItem = this.page.locator(locators.cart.lineItem).first();
    await expect(lineItem).toBeVisible();
    await expect(lineItem.locator(locators.cart.itemName)).toBeVisible();
    await expect(lineItem.locator(locators.cart.itemQty)).toBeVisible();
    await expect(lineItem.locator(locators.cart.itemPrice)).toBeVisible();
  }

  //Procedd to checkout
  async proceedToCheckout() {
    const checkoutBtn = this.page.getByRole(locators.cart.checkoutBtn.role, {
      name: locators.cart.checkoutBtn.name
    });
    if (await checkoutBtn.count()) {
      await checkoutBtn.first().click();
    } else {
      await this.page.goto('/checkout');
    }
    await this.page.waitForLoadState('domcontentloaded');
  }
}

module.exports = { CartPage };
