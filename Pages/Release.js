import { WaitHelper } from '../utils/waithelper';
import { ReportHelper } from '../utils/ReportHelper';
import { expect } from '@playwright/test';
export class Release {
    constructor(page) {
       this.page = page;
       this.neworganisation=page.locator("//td[text()='ScrumReader021']");
       this.newproject=page.locator("//td[text()='Scrum01233']");
       this.orgmodcode=page.locator("//button[text()='v28.1']");
       this.createnewrelease = page.locator("//span[text()='Create Release']");
       this.releaseName = page.locator("//input[@placeholder='Release Name']");
       this.startDate = page.locator("//label[text()='Start Date']/following::input[@type='date'][1]");
       this.endDate =page.locator("//label[text()='End Date']//following::input[@type='date']");
       this.releasebutton = page.locator("//button[text()='Create Release']");
    }
    async createrelease(releaseName, startDate, endDate) {
        await this.neworganisation.click();
        await this.newproject.click();
        await this.orgmodcode.click();
        await this.createnewrelease.click();
        await this.releaseName.fill(releaseName);
        await this.startDate.fill(startDate);
        await this.endDate.fill(endDate);
        await this.releasebutton.click();
        
    }  

}

