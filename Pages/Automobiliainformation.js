/*import { ReportHelper } from '../utils/ReportHelper.js';
import { WaitHelper } from '../utils/WaitHelper.js';

export class AutomobiliaPage {
  constructor(page) {
    this.page = page;

    // Video
    this.videoFrame = page
      .locator('iframe[title="YouTube video player"]')
      .contentFrame();

    // Links
    this.registerToBid = page.getByRole('link', {
      name: 'Register to Bid',
      exact: true,
    });

    this.pastResults = page.getByRole('link', {
      name: 'View Past Results',
    });

    this.privacyPolicy = page
      .getByRole('link', { name: 'Privacy Policy' })
      .first();
  }

  async playVideo() {
    await this.videoFrame
      .getByRole('button', { name: 'Play video' })
      .click();

    await WaitHelper.wait(this.page, 2000);
    await ReportHelper.takeDesktopScreenshot('Video Played');
  }

  async pauseVideo() {
    await this.videoFrame
      .getByRole('button', { name: 'Pause video' })
      .click();

    await WaitHelper.wait(this.page, 2000);
    await ReportHelper.takeDesktopScreenshot('Video Paused');
  }

  async clickRegisterToBid() {
    await this.registerToBid.click();

    await WaitHelper.wait(this.page, 2000);
    await ReportHelper.takeDesktopScreenshot('Register To Bid');
  }

  

  async openPastResults() {
    const popupPromise = this.page.waitForEvent('popup');

    await this.pastResults.click();

    const popup = await popupPromise;
    await popup.waitForLoadState();

    await ReportHelper.takeDesktopScreenshot('Past Results');

    return popup;
  }

  async openPrivacyPolicy() {
    const popupPromise = this.page.waitForEvent('popup');

    await this.privacyPolicy.click();

    const popup = await popupPromise;
    await popup.waitForLoadState();

    await ReportHelper.takeDesktopScreenshot('Privacy Policy');

    return popup;
  }
}
  */
export class AutomobiliaPage {
  constructor(page) {
    this.page = page;

    // YouTube Frame
    this.videoFrame = page
      .locator('iframe[title="YouTube video player"]')
      .contentFrame();

    // Links
    this.registerToBid = page.getByRole('link', {
      name: 'Register to Bid',
      exact: true,
    });

    this.viewPastResults = page.getByRole('link', {
      name: 'View Past Results',
    });
  }

  async playVideo() {
    await this.videoFrame.locator('cued-overlay').click();
  }

  async pauseVideo() {
    await this.videoFrame
      .getByRole('button', { name: 'Pause video' })
      .click();
  }

  // Same-tab navigation -> /automobilia/{year-location}/packages
  async clickRegisterToBid() {
    await Promise.all([
      this.page.waitForURL(/automobilia\/.*\/packages/i),
      this.registerToBid.click(),
    ]);
  }

  // New-tab navigation -> /results?type=automobilia&page=1
  async openPastResults() {
    const [popup] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.viewPastResults.click(),
    ]);
    await popup.waitForLoadState();
    return popup;
  }
}