import { test,expect} from '@playwright/test';
import {ShoppersstackCreateAccount} from '../Pages/ShoppersstackCreateAccount.js';
const ShoppersstackCreateAccountData = require('../testData/ShoppersstackCreateAccountData.js');
test('user can create Publish', async ({ page }) => {
const log = new ShoppersstackCreateAccount(page);
await page.goto("https://www.shoppersstack.com/signup");
await log.ShopperstackCreateAccount(
ShoppersstackCreateAccountData.Shopperlogin.username,
ShoppersstackCreateAccountData.Shopperlogin.lastname,
ShoppersstackCreateAccountData.Shopperlogin.phonenumber,
ShoppersstackCreateAccountData.Shopperlogin.email,
ShoppersstackCreateAccountData.Shopperlogin.password,
ShoppersstackCreateAccountData.Shopperlogin.confirmpassword
);
}
);