import { ReportHelper } from '../utils/ReportHelper.js';
import { WaitHelper } from '../utils/WaitHelper.js';
export class Organization {
  constructor(page) {
    this.page = page;
    this.newOrganization = page.locator('//button[contains(@class,"bg-black")]');
    this.organizationName = page.getByPlaceholder('Acme Corp');
    this.organizationCode = page.locator("//input[@placeholder='ACME']");
    this.create = page.locator('button[type="submit"]');
  }

  async createOrganization(organizationName, organizationCode) {
    await this.newOrganization.click();
    await this.organizationName.fill(organizationName);
   //await ReportHelper.takeDesktopScreenshot('Organization Name');
    await this.organizationCode.fill(organizationCode);
   //await ReportHelper.takeDesktopScreenshot('Organization Code');
   await ReportHelper.takeDesktopScreenshot('Evidence_Step_4');
    await this.create.click();
    await ReportHelper.takeDesktopScreenshot('Evidence_Step_4');
    await WaitHelper.wait(this.page, 2000);
    //await ReportHelper.takeDesktopScreenshot('Create Organization');
    
  }
}