import { test,expect} from '@playwright/test';
import { Shoppersstacklogin } from '../Pages/Shoppersstacklogin';
const ShoppersstackLoginData = require('../testData/ShoppersstackLoginData.js');
test('user can create Publish', async ({ browser }) => {
const log = new Shoppersstacklogin(page);
await page.goto("https://www.shoppersstack.com/signup");
await log.Shopperstacklogin(
ShoppersstackLoginData.Shopperlogin.username,
ShoppersstackLoginData.Shopperlogin.lastname,
ShoppersstackLoginData.Shopperlogin.phonenumber,
ShoppersstackLoginData.Shopperlogin.email,
ShoppersstackLoginData.Shopperlogin.password,
ShoppersstackLoginData.ShopperLogin.confirmpassword
);
}
);