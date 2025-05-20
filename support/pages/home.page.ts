import {BasePage} from './base.page';
import {expect, Page} from '@playwright/test';

export class HomePage extends BasePage {
    private static readonly url = '/';

    constructor(page: Page) {
        super(page, HomePage.url);
    }

    private locator = {
        docLink: this.page.getByRole('link', { name: 'Docs' })
    } as const;

    async clickDocLink() {
        await this.locator.docLink.click();
    }

    async assertIsHome(): Promise<void> {
        await expect(this.page).toHaveURL('https://playwright.dev/');
    }
}
