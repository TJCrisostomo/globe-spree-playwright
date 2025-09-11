const locators = require('./locators');

class ProductPage {
  constructor(page) {
    this.page = page;
  }

  async openFirstProduct() {
    const card = this.page.locator(locators.product.firstProductCard).first();
    await card.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async addToCart() {
    await this.page.getByRole(locators.product.addToCartBtn.role, { name: locators.product.addToCartBtn.name }).first().click();
  }

  async goToCart() {
    const viewCart = this.page.getByRole(locators.product.cartLink.role, { name: locators.product.cartLink.name });
    if (await viewCart.count()) {
      await viewCart.first().click();
    } else {
      await this.page.goto('/cart');
    }
  }
}

module.exports = { ProductPage };
