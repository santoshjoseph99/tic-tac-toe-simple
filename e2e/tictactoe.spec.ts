import {test, expect} from '@playwright/test';

test('player 1 wins', async ({page}) => {
  await page.goto('http://localhost:5173');

  await page.click('[data-testid="cell-0"]');
  await page.click('[data-testid="cell-3"]');
  await page.click('[data-testid="cell-1"]');
  await page.click('[data-testid="cell-4"]');
  await page.click('[data-testid="cell-2"]');

  const locator = page.locator('[data-testid="message"]');
  await expect(locator).toContainText('Player 1 Wins!');
});

test('player 2 wins', async ({page}) => {
  await page.goto('http://localhost:5173');

  await page.click('[data-testid="cell-0"]');
  await page.click('[data-testid="cell-3"]');
  await page.click('[data-testid="cell-1"]');
  await page.click('[data-testid="cell-4"]');
  await page.click('[data-testid="cell-6"]');
  await page.click('[data-testid="cell-5"]');

  const locator = page.locator('[data-testid="message"]');
  await expect(locator).toContainText('Player 2 Wins!');
});

test('game tied', async ({page}) => {
  await page.goto('http://localhost:5173');

  await page.click('[data-testid="cell-0"]');
  await page.click('[data-testid="cell-1"]');
  await page.click('[data-testid="cell-2"]');
  await page.click('[data-testid="cell-3"]');
  await page.click('[data-testid="cell-5"]');
  await page.click('[data-testid="cell-4"]');
  await page.click('[data-testid="cell-6"]');
  await page.click('[data-testid="cell-8"]');
  await page.click('[data-testid="cell-7"]');

  const locator = page.locator('[data-testid="message"]');
  await expect(locator).toContainText('Game Tied');
});
