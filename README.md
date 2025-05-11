# 🎭 Playwright Automation Template

A minimal and extensible starter for Playwright + TypeScript with:

- ✅ UI and API tests
- ✅ Mocking (with route.fulfill)
- ✅ PageObject structure
- ✅ GitHub Actions integration

---

## 🚀 Getting Started

```bash
npm install
npx playwright install
npx playwright test
```

---

## 📁 Folder Structure

```
/tests
  └── reqres/
      ├── profile.spec.ts       # E2E test using mock + PageObject
      ├── profile.page.ts       # PageObject abstraction
      └── profile.mock.ts       # API mock for reqres.in

/utils
  └── apiMockHelper.ts         # reusable mock fulfillment helper
```

---

## 🧪 Example Test

```ts
await page.route('**/api/users/2', async route => {
  await route.fulfill({ body: JSON.stringify({ ... }) });
});
```

```ts
await page.setContent('<script>fetch(...) → render to DOM</script>');
```

---

## 🤖 Run in CI

GitHub Actions config is included in:

```
.github/workflows/test.yml
```

It runs Playwright tests automatically on pull requests or pushes to `main`.

---

## 💡 Tip

Use this repo as a **template** to quickly scaffold new automation projects:  
→ Click **"Use this template"** on GitHub.

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ZeroDayD_playwright-automation&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ZeroDayD_playwright-automation)
