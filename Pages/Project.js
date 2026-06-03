import { ReportHelper } from '../utils/ReportHelper.js';
import { WaitHelper } from '../utils/WaitHelper.js';
import { expect } from '@playwright/test';
export class Project {
    constructor(page) {
        this.page = page;
        this.orgmodcode=page.locator("//td[text()='ScrumReader']");
        this.createnewproject = page.locator("//button[normalize-space()='Create Project']");
        this.projectcode = page.locator("//input[@id='projectCode']");
        this.projectName = page.locator("//input[@id='projectName']");
        this.systemName = page.locator("//input[@id='systemName']");
        this.gxpRelevant = page.locator("//select[@id='gxpRelevant']");
        this.releaseName = page.locator("//input[@id='releaseName']");
        this.startDate = page.locator("//input[@id='startDate']");
        this.endDate = page.locator("//input[@id='endDate']");
        this.newprojectbutton = page.locator("//button[@type='submit']");
    }
    async createproject(projectcode, projectName, systemName, gxpValue, releaseName, startDate, endDate) {
        await this.createnewproject.click();
        await this.projectcode.fill(projectcode);
        await this.projectName.fill(projectName);
        await this.systemName.fill(systemName);
        await this.gxpRelevant.selectOption({ label: gxpValue });
        await this.releaseName.fill(releaseName);
        await this.startDate.fill(startDate);
        await this.endDate.fill(endDate);
        //await ReportHelper.takeDesktopScreenshot('Project Details Entered');
        await ReportHelper.takeDesktopScreenshot('Evidence_Step_7');
        await this.newprojectbutton.click();
        await WaitHelper.wait(this.page, 2000);
        //await ReportHelper.takeDesktopScreenshot('Project Created');
        await ReportHelper.takeDesktopScreenshot('Evidence_Step_7');
    }
    async formatDate(date) {
    const [mm, dd, yyyy] = date.split('/');
    return `${yyyy}-${mm}-${dd}`;
}
}
