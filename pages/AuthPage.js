const locators = require('./locators');

class AuthPage {
  constructor(page) {
    this.page = page;
  }

  async openSignUpFromSideMenu() {
    /*await this.page
      .getByRole(locators.auth.signUpLink.role, { name: locators.auth.signUpLink.name })
      .first()
      .click();
      await this.page
      .getByRole(locators.auth.signUpLink.role, { name: locators.auth.signUpLink.name })
      .first()
      .click();*/
      await this.page.getByRole('link', { name: 'My Account' }).click();
      await this.page.getByRole('link', { name: 'Sign Up' }).click();

    await this.page.waitForLoadState('domcontentloaded');
  }

  async register(email, password) {
    await this.page.getByRole('textbox', { name: 'Password Confirmation' }).fill(password);
    await this.page.getByRole('textbox', { name: 'Email', exact: true }).fill(email);
    await this.page.getByRole('textbox', { name: 'Password', exact: true }).fill(password);
    await this.page.getByRole('button', { name: 'Sign Up' }).click({ force: true });;
    await this.page.waitForLoadState();
    /*await this.page.getByRole('textbox', { name: 'Email', exact: true }).fill(email);
    await this.page.locator(locators.auth.registerPassword).first().fill(password);
    if (await this.page.locator(locators.auth.registerPasswordConfirm).count()) {
      await this.page.locator(locators.auth.registerPasswordConfirm).fill(password);
    }
    await this.page
      .getByRole(locators.auth.registerSubmit.role, { name: locators.auth.registerSubmit.name })
      .click();*/
  }

  async login(email, password) {
    await this.page.locator(locators.auth.loginEmail).fill(email);
    await this.page.locator(locators.auth.loginPassword).first().fill(password);
    await this.page
      .getByRole(locators.auth.loginSubmit.role, { name: locators.auth.loginSubmit.name })
      .click();
  }

  async logoutIfLoggedIn() {
    if (
      await this.page.getByRole(locators.auth.logoutLink.role, { name: locators.auth.logoutLink.name }).count()
    ) {
      await this.page
        .getByRole(locators.auth.logoutLink.role, { name: locators.auth.logoutLink.name })
        .first()
        .click();
    }
  }
}

module.exports = { AuthPage };
