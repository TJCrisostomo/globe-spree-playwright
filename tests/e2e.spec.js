const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { AuthPage } = require('../pages/AuthPage');
const { ProductPage } = require('../pages/ProductPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { OrderConfirmationPage } = require('../pages/OrderConfirmationPage');
const { uniqueEmail, getDefaultPassword, exampleAddress } = require('../utils/data');

test.describe('Spree Commerce E2E', () => {
  test('Register, login, checkout full flow', async ({ page }) => {
    const email = uniqueEmail();
    const password = getDefaultPassword();
    const address = exampleAddress();

    const home = new HomePage(page);
    const auth = new AuthPage(page);
    const product = new ProductPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);
    const confirm = new OrderConfirmationPage(page);

    await home.goto();
    await home.openAccountMenu();
    await auth.logoutIfLoggedIn();
    await auth.openSignUpFromSideMenu();
    await auth.register(email, password);
    //await expect(page.getByText(/success|account/i)).toBeVisible();

    await auth.logoutIfLoggedIn();
    await home.openAccountMenu();
    await page.getByRole('link', { name: /log in|sign in/i }).first().click();
    await auth.login(email, password);
    await expect(page.getByText(/my account|success/i)).toBeVisible();

    await home.goto();
    await product.openFirstProduct();
    await expect(page.locator('h1')).toBeVisible();

    await product.addToCart();
    await product.goToCart();
    await cart.assertHasItem();

    await cart.proceedToCheckout();
    await checkout.fillAddress(address);
    await checkout.chooseFirstShippingMethod();
    await checkout.selectFirstPaymentAndPay();

    await confirm.verifySuccess();
  });
});
