const { count } = require('console');

class AuthPage {
  constructor(page) {
    this.page = page;
    this.myAccount = this.page.getByRole('link', { name: 'My Account' });
    this.signUp = this.page.getByRole('link', { name: 'Sign Up' });
    this.passWordConfirmationField = this.page.getByRole('textbox', { name: 'Password Confirmation' });
    this.emailField = this.page.getByRole('textbox', { name: 'Email', exact: true });
    this.passwordField = this.page.getByRole('textbox', { name: 'Password', exact: true });
    this.signUpButton = this.page.getByRole('button', { name: 'Sign Up' });
    this.goToAccount = this.page.waitForURL('/account/orders');
    this.loginAccount = this.page.getByRole('button', { name: 'Login' });
    this.logoutAccount = this.page.getByRole('button', { name: 'Log out' });  
  }

  //Opens the My Account Page
  async openSignUpFromSideMenu() {
      await this.myAccount.click();
      await this.signUp.click();
  }

  //Register Account
  async register(email, password) {
    await this.passWordConfirmationField.fill(password);
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.signUpButton.click();
    await this.goToAccount;
  }

  //Login the Created Account
  async login(email, password) {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.loginAccount.click();
  }

  //Logout if account is logged in
  async logoutIfLoggedIn() {
    if (
      await this.logoutAccount.count()
    ) {
      await this.logoutAccount.first().click();
    }
  }
}

module.exports = { AuthPage };
