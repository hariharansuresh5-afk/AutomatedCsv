// spec: TEST_PLAN.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Core end-user shopping operations', () => {
  test('User reviews and manages the shopping cart', async ({ page }) => {
    // 1. Sign in, add Sauce Labs Backpack and Sauce Labs Bike Light, and open Cart.
    await page.goto('https://www.saucedemo.com');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();

    // expect: The cart page lists both selected products with quantity, descriptions, prices, and Remove controls.
    await expect(page.locator('.cart_item')).toHaveCount(2);
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    await expect(page.getByText('Sauce Labs Bike Light')).toBeVisible();
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
    await expect(page.locator('[data-test="remove-sauce-labs-bike-light"]')).toBeVisible();

    // expect: The cart indicator shows 2 items.
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('2');

    // 2. Remove Sauce Labs Bike Light.
    await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();

    // expect: The bike light is removed from the cart.
    await expect(page.locator('.cart_item')).toHaveCount(1);
    await expect(page.getByText('Sauce Labs Bike Light')).not.toBeVisible();

    // expect: Only Sauce Labs Backpack remains and the cart indicator shows 1 item.
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');

    // 3. Click Continue Shopping.
    await page.getByRole('button', { name: 'Continue Shopping' }).click();

    // expect: The user returns to the Products page with the remaining cart state preserved.
    await expect(page).toHaveURL(/\/inventory\.html$/);
    await expect(page.locator('.inventory_item')).toHaveCount(6);
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
  });
});
