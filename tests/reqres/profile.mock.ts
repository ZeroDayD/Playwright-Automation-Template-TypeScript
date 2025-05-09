import { Page } from '@playwright/test';
import {fulfillJson} from "../../utils/api-mock.helper";


export async function mockUser2(page: Page) {
    await page.route('**/api/users/2', async route => {
        await fulfillJson(route, {
            data: {
                email: 'mocked@reqres.in',
                first_name: 'John',
                last_name: 'Doe',
                avatar: 'https://reqres.in/img/faces/2-image.jpg'
            }
        });
    });
}
