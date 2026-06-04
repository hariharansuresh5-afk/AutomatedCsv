import { test, expect } from '@playwright/test';
import { Login } from '../Pages/Login';
import { Release } from '../Pages/Release';
import { ReportHelper } from '../utils/ReportHelper.js';
import { WaitHelper } from '../utils/waithelper';
test('user can create Release', async ({ page }) => {
    const log = new Login(page);
    const releasenew = new Release(page);
    await page.goto('https://qa-csv.infiligence.com/login');
    await page.waitForLoadState("domcontentloaded")
    await log.login('admin', 'password');
    await page.locator('select').selectOption('25');
    await releasenew.createrelease('v22.1','2025-07-03','2026-09-14');
    
}
);