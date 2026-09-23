// spec: TEST_PLAN.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Core end-user shopping operations', () => {
  test('User completes checkout and receives order confirmation', async ({ page }) => {
    // 1. Sign in, add Sauce Labs Backpack, open Cart, and click Checkout.
    await page.goto('https://www.saucedemo.com');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();

    // expect: The Checkout: Your Information form displays First Name, Last Name, and Zip/Postal Code fields.
    await expect(page.getByText('Checkout: Your Information')).toBeVisible();
    await expect(page.locator('[data-test="firstName"]')).toBeVisible();
    await expect(page.locator('[data-test="lastName"]')).toBeVisible();
    await expect(page.locator('[data-test="postalCode"]')).toBeVisible();

    // 2. Enter Ada, Lovelace, and 12345, then click Continue.
    await page.locator('[data-test="firstName"]').fill('Ada');
    await page.locator('[data-test="lastName"]').fill('Lovelace');
    await page.locator('[data-test="postalCode"]').fill('12345');
    await page.locator('[data-test="continue"]').click();

    // expect: The Checkout: Overview page shows the selected item, SauceCard #31337 payment information, Free Pony Express Delivery, item total $29.99, tax $2.40, and total $32.39.
    await expect(page.getByText('Checkout: Overview')).toBeVisible();
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    await expect(page.getByText('SauceCard #31337')).toBeVisible();
    await expect(page.getByText('Free Pony Express Delivery')).toBeVisible();
    await expect(page.locator('.summary_subtotal_label')).toHaveText(/Item total: \$29\.99/);
    await expect(page.locator('.summary_tax_label')).toHaveText(/Tax: \$2\.40/);
    await expect(page.locator('.summary_total_label')).toHaveText(/Total: \$32\.39/);

    // 3. Click Finish.
    await page.locator('[data-test="finish"]').click();
                    
    // expect: The Checkout: Complete page shows Thank you for your order! and the dispatch message.
    await expect(page.getByText('Thank you for your order!')).toBeVisible();
    await expect(page.getByText('Your order has been dispatched, and will arrive just as fast as the pony can get there!')).toBeVisible();

    // expect: The cart is empty.
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveCount(0);
  });
});
