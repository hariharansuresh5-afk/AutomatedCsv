// spec: TEST_PLAN.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Core end-user shopping operations', () => {
  test('User logs out and is returned to the login page', async ({ page }) => {
    // 1. Sign in with standard_user and secret_sauce, open the side menu, and click Logout.
    await page.goto('https://www.saucedemo.com');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByText('Logout').click();

    // expect: The session ends and the user is returned to the Swag Labs login page.
    await expect(page).toHaveURL('https://www.saucedemo.com/');

    // expect: Username and Password fields and the Login button are visible.
    await expect(page.locator('[data-test="username"]')).toBeVisible();
    await expect(page.locator('[data-test="password"]')).toBeVisible();
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();

    // expect: Authenticated catalog content is no longer displayed.
    await expect(page.locator('.inventory_list')).toHaveCount(0);
    await expect(page.getByText('Products')).toHaveCount(0);
  });
});
