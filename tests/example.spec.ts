import { test, expect } from '@playwright/test';

test.describe('navigation', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('main navigation', async ({ page }) => {
        await expect(page).toHaveURL('https://playwright.dev/');
        await page.getByRole('link', { name: 'Docs' }).click();
        await expect(page).toHaveURL(/.*docs/);
        await expect(page.locator('h1')).toContainText('Woooooooooooow');
    });
});
