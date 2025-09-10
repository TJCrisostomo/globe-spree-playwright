# Spree Commerce E2E Tests (Playwright, JavaScript)

End-to-end UI tests for the [Spree Commerce demo store](https://demo.spreecommerce.org/).

## ✅ Features
- Full E2E flow: Register → Login → Browse Product → Add to Cart → Checkout → Order Confirmation
- Centralized selectors in `pages/locators.js`
- Page Object Model for reusability
- Test data utilities in `utils/data.js`
- GitHub Actions CI workflow included

## 🚀 Quick Start
```bash
npm install
npx playwright install
npm test
```

View HTML report:
```bash
npm run test:report
```

## ⚙️ Environment Variables
Copy `.env.example` to `.env` and adjust if needed.

## 🤖 CI/CD
The workflow `.github/workflows/playwright.yml` runs the tests on every push/PR in GitHub Actions.

---
