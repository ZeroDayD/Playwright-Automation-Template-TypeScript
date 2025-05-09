import { Page, Locator } from '@playwright/test';

export class ProfilePage {
    readonly page: Page;
    readonly name: Locator;
    readonly email: Locator;

    constructor(page: Page) {
        this.page = page;
        this.name = page.locator('[data-testid="name"]');
        this.email = page.locator('[data-testid="email"]');
    }

    async open() {
        await this.page.setContent(`
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
    }
}
