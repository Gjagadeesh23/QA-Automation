import { test, expect } from '@playwright/test';

test('Public API Automation Flow', async ({ request }) => {

  // -----------------------------
  // CREATE POST
  // -----------------------------
  const createResponse = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      json: {
        title: 'Jaggu Test',
        body: 'Playwright API Automation',
        userId: 1
      }
    }
  );

  expect(createResponse.status()).toBe(201);

  const createData = await createResponse.json();
  console.log("Created Post ID:", createData.id);

  // -----------------------------
  // GET POST
  // -----------------------------
  const getResponse = await request.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  expect(getResponse.status()).toBe(200);

  const getData = await getResponse.json();
  console.log("Fetched Title:", getData.title);

  // -----------------------------
  // UPDATE POST
  // -----------------------------
  const updateResponse = await request.put(
    'https://jsonplaceholder.typicode.com/posts/1',
    {
      json: {
        id: 1,
        title: 'Updated Title',
        body: 'Updated Body',
        userId: 1
      }
    }
  );

  expect(updateResponse.status()).toBe(200);

  const updateData = await updateResponse.json();
  console.log("Updated Title:", updateData.title);
});