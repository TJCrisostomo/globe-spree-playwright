const locators = require('./locators');

class ProductPage {
  constructor(page) {
    this.page = page;
  }

  //Select Product
  async openFirstProduct() {
    await this.page.getByLabel('Top').getByRole('link', { name: 'Shop All' }).click();
    await this.page.getByRole('link', { name: 'Sale Ripped T-Shirt $55.99 $' }).click();
    await this.page.locator('#product-variant-picker').getByRole('button', { name: 'Please choose Size' }).click();
    await this.page.locator('#product-variant-picker label').filter({ hasText: 'L' }).click();
  }

  //Add Product to Cart
  async addToCart() { 
    const addToCart = this.page.getByRole('button', { name: 'Add To Cart' });
    if (await addToCart.count()) {
      await addToCart.first().click();
    } 
  }

  //View the Cart
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
