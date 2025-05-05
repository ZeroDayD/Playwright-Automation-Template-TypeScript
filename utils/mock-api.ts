import {Page} from '@playwright/test';

export async function mockUserProfile(page: Page) {
    await page.route('**/api/profile', async route => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({
                username: 'mocked_user',
                email: 'mock@example.com'
            })
        });
    });
}
