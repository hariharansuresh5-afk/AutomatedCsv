import { test, expect } from '@playwright/test';
import { Login } from '../Pages/Login';
import { Organization } from '../Pages/Organization';
import { Project } from '../Pages/Project';
import { Requirements } from '../Pages/Requirements';
import { Publish } from '../Pages/Publish';
import { ReportHelper } from '../utils/ReportHelper.js';
import { BrowserHelper } from '../utils/BrowserHelper.js';

const LoginData = require('../testData/logindata.js');
const projectData = require('../testData/projectData.js');
const OrganizationData = require('../testData/OrganizationData.js');

test('user can create Publish', async ({ browser }) => {
  
  ReportHelper.resetScreenshotCounter();
  
  ReportHelper.setImageSize([700, 420]);  

  const page = await browser.newPage();
  await BrowserHelper.maximize(page);

  const log = new Login(page);
  const org = new Organization(page);
  const proj = new Project(page);
  const requirementsupload = new Requirements(page);
  const publishreq = new Publish(page);

  await page.goto("https://qa-csv.infiligence.com/login");
  await log.login(LoginData.login.username, LoginData.login.password);
  await page.waitForLoadState('domcontentloaded');
  await page.waitForLoadState('networkidle');

  await page.locator('select').selectOption('25');

  await org.createOrganization(
    OrganizationData.Organizations.OrganizationName,
    OrganizationData.Organizations.organizationCode
  );

  await proj.createproject(
    projectData.project.projectCode,
    projectData.project.projectName,
    projectData.project.systemName,
    projectData.project.gxpValue,
    projectData.project.releaseName,
    projectData.project.startDate,
    projectData.project.endDate
  );

  await requirementsupload.requirementup();
  await publishreq.Publishpage();

  await ReportHelper.generateWordReport();
});