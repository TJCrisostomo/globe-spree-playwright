const locators = require('./locators');

class AuthPage {
  constructor(page) {
    this.page = page;
  }

  //Opens the My Account Page
  async openSignUpFromSideMenu() {
      await this.page.getByRole('link', { name: 'My Account' }).click();
      await this.page.getByRole('link', { name: 'Sign Up' }).click();

    await this.page.waitForLoadState('domcontentloaded');
  }

  //Register Account
  async register(email, password) {
    await this.page.getByRole('textbox', { name: 'Password Confirmation' }).fill(password);
    await this.page.getByRole('textbox', { name: 'Email', exact: true }).fill(email);
    await this.page.getByRole('textbox', { name: 'Password', exact: true }).fill(password);
    await this.page.getByRole('button', { name: 'Sign Up' }).click({ force: true });;
    await this.page.waitForLoadState();
  }

  //Login the Created Account
  async login(email, password) {
    await this.page.locator(locators.auth.loginEmail).fill(email);
    await this.page.locator(locators.auth.loginPassword).first().fill(password);
    await this.page
      .getByRole(locators.auth.loginSubmit.role, { name: locators.auth.loginSubmit.name })
      .click();
  }

  //Logout if account is logged in
  async logoutIfLoggedIn() {
    if (
      await this.page.getByRole(locators.auth.logoutLink.role, { name: locators.auth.logoutLink.name }).count()
    ) {
      await this.page.getByRole(locators.auth.logoutLink.role, { name: locators.auth.logoutLink.name }).first().click();
    }
  }
}

module.exports = { AuthPage };
