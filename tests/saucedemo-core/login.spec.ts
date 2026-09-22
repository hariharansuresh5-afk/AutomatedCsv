// spec: TEST_PLAN.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Core end-user shopping operations', () => {
  test('User signs in with valid demo credentials', async ({ page }) => {
    // 1. Navigate to https://www.saucedemo.com and enter standard_user in Username and secret_sauce in Password.
    await page.goto('https://www.saucedemo.com');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');

    // expect: The login form accepts both values.
    await expect(page.locator('[data-test="username"]')).toHaveValue('standard_user');
    await expect(page.locator('[data-test="password"]')).toHaveValue('secret_sauce');

    // 2. Click Login.
    await page.locator('[data-test="login-button"]').click();

    // expect: The user is taken to /inventory.html.
    await expect(page).toHaveURL(/\/inventory\.html$/);

    // expect: The Products page displays the catalog and a Cart control showing zero items.
    await expect(page.locator('.inventory_item')).toHaveCount(6);
    await expect(page.locator('[data-test="shopping-cart-link"]')).toHaveAttribute('aria-label', 'Cart, empty');
    await expect(page.getByText('Products')).toBeVisible();
  });
});
