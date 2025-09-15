class HomePage {
  constructor(page) {
    this.page = page;
    this.userIcon = this.page.getByRole('button', { name: /account/i }).first();
    this.myAccount = this.page.getByRole('link', { name: /account|sign in/i }).first()
  }

  //Go to home page
  async goto() {
    await this.page.goto('/');
    await this.page.waitForLoadState('domcontentloaded');
  }

  //Go to Open Account Page
  async openAccountMenu() {
    if (await this.userIcon.isVisible()) {
      await this.userIcon.click();
    } else {
      await this.myAccount.click();
    }
  }
}

module.exports = { HomePage };
