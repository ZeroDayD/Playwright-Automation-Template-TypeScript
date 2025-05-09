import { Route } from '@playwright/test';

export async function fulfillJson(route: Route, body: any, status = 200) {
    await route.fulfill({
        status,
        contentType: 'application/json',
        body: JSON.stringify(body),
    });
}
