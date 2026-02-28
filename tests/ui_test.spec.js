import { test, expect } from '@playwright/test';
import fs from 'fs';

test('DemoQA Full UI Flow', async ({ page, request }) => {

  test.setTimeout(60000);

  // ----------------------------
  // Open Login Page
  // ----------------------------
  await page.goto('https://demoqa.com/login', {
    waitUntil: 'domcontentloaded'
  });

  await page.waitForSelector('#userName');

  // Scroll (important for Firefox/Webkit)
  await page.evaluate(() => window.scrollBy(0, 400));

  // ----------------------------
  // Login
  // ----------------------------
  await page.fill('#userName', 'GANGAJAGADEESH');
  await page.fill('#password', 'Dhiya@28');

  const loginBtn = page.locator('#login');
  await expect(loginBtn).toBeVisible();
  await loginBtn.scrollIntoViewIfNeeded();
  await loginBtn.click();

  // Wait for profile username to appear
  await page.waitForSelector('#userName-value', { timeout: 15000 });

  await expect(page.locator('#userName-value'))
    .toHaveText('GANGAJAGADEESH');

  // ----------------------------
  // Go To Book Store
  // ----------------------------
  const storeBtn = page.locator('#gotoStore');
  await storeBtn.scrollIntoViewIfNeeded();
  await storeBtn.click();

  await page.waitForSelector('#searchBox');

  // ----------------------------
  // Search Book
  // ----------------------------
  const bookName = 'Learning JavaScript Design Patterns';

  await page.fill('#searchBox', bookName);

  const bookLink = page.locator(`a:has-text("${bookName}")`);
  await expect(bookLink).toBeVisible({ timeout: 15000 });

  // ----------------------------
  // Backend API Call
  // ----------------------------
  const isbn = '9781449331818';

  const response = await request.get(
    `https://demoqa.com/BookStore/v1/Book?ISBN=${isbn}`
  );

  expect(response.status()).toBe(200);

  const data = await response.json();

  fs.writeFileSync(
    'book_details.txt',
    `Title: ${data.title}\nAuthor: ${data.author}\nPublisher: ${data.publisher}`
  );

  console.log('Book details saved successfully.');

  // ----------------------------
  // Logout
  // ----------------------------
  await page.evaluate(() => window.scrollBy(0, -600));

  const logoutButton = page.getByRole('button', { name: 'Log out' });
  await expect(logoutButton).toBeVisible();
  await logoutButton.click();

  await expect(page.locator('#login')).toBeVisible();
});