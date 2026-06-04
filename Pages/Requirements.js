import { WaitHelper } from '../utils/waithelper';
import { ReportHelper } from '../utils/ReportHelper';
export class Requirements {
    constructor(page) {
        this.page=page;
        this.projectcodeclick = page.locator("//td[text()='ScrumYUII01']");
        this.uploadButton = page.locator("//button[@aria-label='Upload file']");
        this.fileInput = page.locator('input[type="file"]');
        this.fileuploads = page.locator('//button[text()="Upload"]');
        this.testcaseicon = page.locator("//button[@title='Test Cases']");
        this.testcasetemplate = page.locator("//div[@class='w-80 border-r border-gray-300 flex flex-col']//button[@title='Upload file']");
        this.fileuploadtestcasetemplatedraganddrop = page.locator('input[type="file"]');
        this.testcasetemplateupload = page.locator("//button[text()='Upload']");
        this.testexecutionicon = page.locator("//button[@title='Test Executions']");
        this.testexecutiontemplate = page.locator("//button[@title='Upload file']");
        this.fileuploadtestexecutiontemplatedraganddrop = page.locator('input[type="file"]');
        this.testexecutiontemplateupload = page.locator("//button[text()='Upload']");
        this.defectsreporticon = page.locator("//button[@title='Defects']");
        this.defectreporttemplate = page.locator("//button[@title='Upload file']");
        this.defectreportdraganddrop = page.locator('input[type="file"]');
        this.defectreporttemplateupload = page.locator("//button[text()='Upload']");
    }

    async requirementup() {
        await this.projectcodeclick.click();
        await this.uploadButton.click();
        await this.fileInput.setInputFiles(
            '../requirements-template (1).xlsx'
        );
        await this.fileuploads.click();
        await this.testcaseicon.click();
        await this.testcasetemplate.click();
        await this.fileuploadtestcasetemplatedraganddrop.setInputFiles(
            '../testcases-template (1).xlsx'
        );
        await this.testcasetemplateupload.click();
        await this.testexecutionicon.click();
        await this.testexecutiontemplate.click();
        await this.fileuploadtestexecutiontemplatedraganddrop.setInputFiles
            (
                '../testexecutions-template (1).xlsx'
            );
        await this.testexecutiontemplateupload.click();
        await this.defectsreporticon.click();
        await this.defectreporttemplate.click();
        await this.defectreportdraganddrop.setInputFiles
            (
                '../defects-template.xlsx'
            )
        await this.defectreporttemplateupload.click();
        

    }
}