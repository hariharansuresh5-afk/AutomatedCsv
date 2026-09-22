import { test,expect} from '@playwright/test';
import {ShoppersstackMenuitems} from '../Pages/ShoppersstackMenuitems.js';
test('user can create Publish', async ({ page }) => {
const mensitem = new ShoppersstackMenuitems(page);
await page.goto("https://www.shoppersstack.com/");
await mensitem.ShopperstackMenuitems();
}
);
