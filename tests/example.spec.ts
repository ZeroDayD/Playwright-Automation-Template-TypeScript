import {test} from '../support/fixtures/fixtures';

test.describe('navigation', () => {
    test.beforeEach(async ({homePage}) => {
        await homePage.open();
    });

    test('main navigation', async ({homePage, docPage}) => {
        await homePage.assertIsHome();
        await homePage.clickDocLink();
        await docPage.assertDocsOpened();
        await docPage.assertHeaderText('Installation');
    });
});
