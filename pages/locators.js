module.exports = {
  home: {
    userIcon: { role: 'button', name: /account/i },
    accountLink: { role: 'link', name: /account|sign in/i },
    menuSignIn: { role: 'link', name: /sign in/i },
    menuRegister: { role: 'link', name: /sign up|register/i },
    products: '[data-test*="product"]',
    search: 'input[type="search"]'
  },
  auth: {
    registerEmail: "'textbox', { name: 'Email', exact: true }",
    registerPassword: 'input[name="spree_user[password]"], input[type="password"]',
    registerPasswordConfirm: 'input[name="spree_user[password_confirmation]"], input[name="password_confirmation"]',
    registerSubmit: { role: 'button', name: /sign up|register|create/i },
    loginEmail: 'input[name="spree_user[email]"], input[type="email"]',
    loginPassword: 'input[name="spree_user[password]"], input[type="password"]',
    loginSubmit: { role: 'button', name: /log in|sign in/i },
    logoutLink: { role: 'link', name: /logout|sign out/i },
    signUpLink: { role: 'link', name: /sign up|register/i },
    signInLink: { role: 'link', name: /log in|sign in/i }
  },
  product: {
    firstProductCard: '[data-test*="product"], [data-qa="product-card"]',
    productTitle: 'h1, [data-test="product-title"]',
    productPrice: '[data-test="price"], .price.selling',
    addToCartBtn: { role: 'button', name: /add to cart|add to bag|add/i },
    cartLink: { role: 'link', name: /cart|bag/i }
  },
  cart: {
    lineItem: '[data-hook="cart_item"], .line-item',
    itemName: 'a, strong, .item-name',
    itemQty: 'input[type="number"], input[name*="quantity"]',
    itemPrice: '.price, [data-hook="item_price"]',
    checkoutBtn: { role: 'button', name: /checkout/i }
  },
  checkout: {
    firstName: 'input[name*="firstname"], input[name*="first_name"]',
    lastName: 'input[name*="lastname"], input[name*="last_name"]',
    address1: 'input[name*="address1"]',
    city: 'input[name*="city"]',
    zip: 'input[name*="zipcode"], input[name*="zip"]',
    phone: 'input[name*="phone"]',
    countrySelect: 'select[name*="country"]',
    stateSelect: 'select[name*="state"]',
    saveAndContinue: { role: 'button', name: /save and continue|continue|next/i },
    shippingMethods: 'input[type="radio"][name*="shipping_method"], input[type="radio"][name*="shipment"]',
    deliveryOptions: '[data-hook*="delivery_options"], .delivery, .summary',
    paymentMethods: 'input[type="radio"][name*="payment_method"]',
    placeOrder: { role: 'button', name: /place order|complete|confirm/i }
  },
  order: {
    notice: /order number|order has been processed|thank you/i,
    orderNumber: '[data-hook*="order_number"], .order-number, .thank-you'
  }
};
