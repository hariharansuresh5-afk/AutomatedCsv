import { test,expect} from '@playwright/test';
import {ShoppersstackLogin} from '../Pages/Shoppersstacklogin.js';
const ShoppersstackloginData = require('../testData/ShoppersstackLoginData.js');
test('user can create Publish', async ({ page }) => {
const log = new ShoppersstackLogin(page);
await page.goto("https://www.shoppersstack.com/user-signin");
await log.ShopperstackLogin(
ShoppersstackloginData.Shopperlogin.email,
ShoppersstackloginData.Shopperlogin.password,
ShoppersstackloginData.Shopperlogin.loginbutton
);
}
);