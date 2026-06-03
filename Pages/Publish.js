import { WaitHelper } from '../utils/waithelper';
import { ReportHelper } from '../utils/ReportHelper';
export class Publish {
    constructor(page){
        this.page=page;
        this.publishbutton=page.locator("//button[@aria-label='Publish']");
        this.requirementstemplate = page.locator("//div[contains(@class,'rounded-full') and contains(@class,'border-gray-400')]");
        this.nextbutton = page.locator("//button[text()='Next']");
        this.testcasetemplate=page.locator("//div[contains(@class, 'w-4') and contains(@class, 'h-4') and contains(@class, 'rounded-full')]");
        this.nextbutton = page.locator("//button[text()='Next']");
        this.testexecutiontemplate = page.locator("//div[contains(@class, 'w-4') and contains(@class, 'h-4') and contains(@class, 'rounded-full')]");
        this.nextbutton = page.locator("//button[text()='Next']");
        this.defecttemplate = page.locator("//div[contains(@class, 'w-4') and contains(@class, 'h-4') and contains(@class, 'rounded-full')]");
        this.nextbutton = page.locator("//button[text()='Next']");
        this.confirmselection = page.locator("//button[text()='Generate Traceability Matrix']");
        this.documentmanagement=page.locator("//td[text()='v1.0']");
    }  
    async Publishpage(){
        await WaitHelper.wait(this.page, 2000);
        await ReportHelper.takeDesktopScreenshot('Evidence_Step_9');
  //  await ReportHelper.takeDesktopScreenshot('Publishing Traceability Matrix');
    await this.publishbutton.click();
     await this.requirementstemplate.click();
     await this.nextbutton.click();
     await this.testcasetemplate.click();
     await this.nextbutton.click();
     await this.testexecutiontemplate.click();
     await this.nextbutton.click();
     await this.defecttemplate.click();
     await this.nextbutton.click();
     await this.confirmselection.click();
     await this.documentmanagement.click();
     //await ReportHelper.takeDesktopScreenshot('Matrix Generated Successfully');
     await ReportHelper.takeDesktopScreenshot('Evidence_Step_10');
     await WaitHelper.wait(this.page, 2000);
     
      
    }

}