/*import { test, expect } from '@playwright/test';
import { AutomobiliaPage } from '../pages/Automobiliainformation';

test('Automobilia Page Test', async ({ page }) => {

  await page.goto('https://staging-bjz7qr.barrett-jackson.com/automobilia');
  const automobilia = new AutomobiliaPage(page);

  await automobilia.playVideo();
  await automobilia.pauseVideo();

  await automobilia.clickRegisterToBid();

  /*const faqs = [
    'If I am registered to bid on',
    'Is there a registration fee',
    'Is the bidder registration',
    'What does registering as an',
    'What items do I need to',
    'What if my bank will not',
    'Can I bid on Automobilia items online or absentee?',
    'Can I place bids before the',
    'Is there a buyer’s premium on',
  ];
*/
  /*for (const faq of faqs) {
    await automobilia.openFaq(faq);
  }*/

 /* const pastResults = await automobilia.openPastResults();
  await expect(pastResults).toHaveURL(/past/i);

  const privacyPolicy = await automobilia.openPrivacyPolicy();
  await expect(privacyPolicy).toHaveURL(/privacy/i);

});

*/
import { test, expect } from '@playwright/test';
import { AutomobiliaPage } from '../pages/Automobiliainformation';

test('Automobilia Page Test', async ({ page }) => {
  const automobilia = new AutomobiliaPage(page);
  await page.goto('https://staging-bjz7qr.barrett-jackson.com/automobilia');

  // Video controls
  await automobilia.playVideo();
  await automobilia.pauseVideo();

  // 1. Register to Bid -> same tab -> comes back via goBack()
  await automobilia.clickRegisterToBid();
  await expect(page).toHaveURL(/automobilia\/.*\/packages/i);

  await page.goBack();
  await expect(page).toHaveURL(/automobilia\/?$/i);

  // 2. View Past Results -> new tab -> comes back via close() + bringToFront()
  const popup = await automobilia.openPastResults();
  await expect(popup).toHaveURL(/results\?type=automobilia&page=1/i);

  await popup.close();
  await page.bringToFront();
  await expect(page).toHaveURL(/automobilia\/?$/i);
});