export class WaitHelper {
  static async wait(page, ms) {
    await page.waitForTimeout(ms);
  }
}