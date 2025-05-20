import {BasePage} from './base.page';
import {expect, Page} from '@playwright/test';

export class DocPage extends BasePage {
    public static readonly url = '/docs/intro';

    constructor(page: Page) {
        super(page, DocPage.url);
    }

    private locator = {
        header: this.page.locator('h1')
    } as const;

    async assertDocsOpened(): Promise<void> {
        await expect(this.page).toHaveURL(this.url);
    }

    async assertHeaderText(expected: string) {
        await expect(this.locator.header).toHaveText(expected);
    }
}
