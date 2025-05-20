import {test as base} from '@playwright/test';
import {HomePage} from "../pages/home.page";
import {DocPage} from "../pages/doc.page";


type Fixtures = {
    homePage: HomePage;
    docPage: DocPage;
};

export const test = base.extend<Fixtures>({
    homePage: async ({page}, use) => {
        const home = new HomePage(page);
        await use(home);
    },
    docPage: async ({page}, use) => {
        const doc = new DocPage(page);
        await use(doc);
    },
});
