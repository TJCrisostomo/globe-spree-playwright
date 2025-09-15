class ProductPage {
  constructor(page) {
    this.page = page;
    this.shopAll = page.getByLabel('Top').getByRole('link', { name: 'Shop All' });
    this.getShirt = page.getByRole('link', { name: 'Sale Ripped T-Shirt $55.99 $' });
    this.getSize = page.locator('#product-variant-picker').getByRole('button', { name: 'Please choose Size' });
    this.getLarge = page.locator('#product-variant-picker label').filter({ hasText: 'L' });
    this.addItem = this.page.getByRole('button', { name: 'Add To Cart' });
    this.viewCart = this.page.getByRole('link', { name: /cart|bag/i });
  }

  //Select Product
  async openFirstProduct() {
    await this.shopAll.click();
    await this.getShirt.click();
    await this.getSize.click();
    await this.getLarge.click();
  }

  //Add Product to Cart
  async addToCart() { 
    if (await this.addItem.count()) {
      await this.addItem.first().click();
    } 
  }

  //View the Cart
  async goToCart() {
    if (await this.viewCart.count()) {
      await this.viewCart.first().click();
    } else {
      await this.page.goto('/cart');
    }
  }
}

module.exports = { ProductPage };
