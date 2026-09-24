import { test,expect} from '@playwright/test';
import {ShoppersstackMensitems} from '../Pages/ShoppersstackMensitems.js';
test('user can create Publish', async ({ page }) => {
const mensitem = new ShoppersstackMensitems(page);
await page.goto("https://www.shoppersstack.com/");
await mensitem.shopperstackMensItems();
}
);  

