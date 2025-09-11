const locators = require('./locators');

class HomePage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async openAccountMenu() {
    const userIcon = this.page.getByRole(locators.home.userIcon.role, { name: locators.home.userIcon.name }).first();

    if (await userIcon.isVisible()) {
      await userIcon.click();
    } else {
      await this.page.getByRole(locators.home.accountLink.role, { name: locators.home.accountLink.name }).first().click();
    }
  }
}

module.exports = { HomePage };
