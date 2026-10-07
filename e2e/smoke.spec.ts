import { test, expect } from '@playwright/test';

test('smoke renders a page', async ({ page }) => {
  await page.setContent('<h1>SGWS PR validation</h1>');
  await expect(page.locator('h1')).toHaveText('SGWS PR validation');
});
