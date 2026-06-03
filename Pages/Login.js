import { ReportHelper } from '../utils/ReportHelper.js';
import { WaitHelper } from '../utils/WaitHelper.js';

export class Login {
  constructor(page) {
    this.page = page;
    this.username = page.getByPlaceholder('Enter your username');
    this.password = page.getByPlaceholder('••••••••');
    this.loginButton = page.locator("//button[@type='submit']");
  }

  async login(username, password) {
    await this.username.fill(username);
   // await ReportHelper.takeDesktopScreenshot('Username Entered');

    await this.password.fill(password);
   // await ReportHelper.takeDesktopScreenshot('Password Entered');

    await WaitHelper.wait(this.page, 2000);
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: 'networkidle' }),
      this.loginButton.click()
    ]);

    await WaitHelper.wait(this.page, 2000);
    await ReportHelper.takeDesktopScreenshot('Evidence_Step_2');
    //await ReportHelper.takeDesktopScreenshot('Login Successful');
  }
}
