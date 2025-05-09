import { test, expect } from '@playwright/test';
import { mockUser2 } from './profile.mock';
import { ProfilePage } from './profile.page';

test('renders mocked reqres.in user', async ({ page }) => {
    await mockUser2(page);

    const profile = new ProfilePage(page);
    await profile.open();

    await expect(profile.name).toHaveText('John Doe');
    await expect(profile.email).toHaveText('mocked@reqres.in');
});
