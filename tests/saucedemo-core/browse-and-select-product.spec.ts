// spec: TEST_PLAN.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Core end-user shopping operations', () => {
  test('User browses, sorts, views, and selects a product', async ({ page }) => {
    // 1. Sign in as standard_user with password secret_sauce.
    await page.goto('https://www.saucedemo.com');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // expect: The six-product catalog is visible with product names, descriptions, prices, and Add to cart controls.
    await expect(page.locator('.inventory_item')).toHaveCount(6);
    await expect(page.locator('.inventory_item_name')).toHaveCount(6);
    await expect(page.locator('.inventory_item_desc')).toHaveCount(6);
    await expect(page.locator('.inventory_item_price')).toHaveCount(6);
    await expect(page.locator('button:has-text("Add to cart")')).toHaveCount(6);

    // 2. Change Sort products to Price (low to high).
    await page.locator('[data-test="product-sort-container"]').selectOption('lohi');

    // expect: Products are reordered from the lowest displayed price ($7.99) to the highest displayed price ($49.99).
    const prices = await page.locator('.inventory_item_price').allTextContents();
    expect(prices).toEqual(['$7.99', '$9.99', '$15.99', '$15.99', '$29.99', '$49.99']);

    // 3. Open the Sauce Labs Backpack product details, verify its name, description, and $29.99 price, then add it to the cart.
    await page.getByRole('button', { name: 'View details for Sauce Labs Backpack' }).click();

    // expect: The product detail view shows the selected product information.
    await expect(page.locator('.inventory_details_name')).toHaveText('Sauce Labs Backpack');
    await expect(page.locator('.inventory_details_desc')).toContainText('carry.allTheThings()');
    await expect(page.locator('.inventory_details_price')).toHaveText('$29.99');

    await page.getByRole('button', { name: 'Add to cart' }).click();

    // expect: The cart indicator changes to 1 item.
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
  });
});
