import { test, expect } from '@playwright/test';

test('mock reqres.in user and render to page', async ({ page }) => {
    await page.route('**/api/users/2', async route => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({
                data: {
                    email: 'mocked@reqres.in',
                    first_name: 'John',
                    last_name: 'Doe',
                    avatar: 'https://reqres.in/img/faces/2-image.jpg'
                }
            })
        });
    });

    await page.setContent(`
    <html>
      <body>
        <div id="user"></div>
        <script>
          fetch("https://reqres.in/api/users/2")
            .then(res => res.json())
            .then(data => {
              document.getElementById("user").innerHTML = 
                '<div data-testid="name">' + data.data.first_name + ' ' + data.data.last_name + '</div>' +
                '<div data-testid="email">' + data.data.email + '</div>';
            });
        </script>
      </body>
    </html>
  `);

    await expect(page.locator('[data-testid="name"]')).toHaveText('John Doe');
    await expect(page.locator('[data-testid="email"]')).toHaveText('mocked@reqres.in');
});
