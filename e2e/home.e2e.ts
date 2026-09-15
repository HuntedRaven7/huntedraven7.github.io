import { expect, test } from '@playwright/test';

test('homepage renders shell and dashboard', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByText('Activities')).toBeVisible();
	await expect(page.getByTestId('theme-toggle')).toBeVisible();
	await expect(page.getByText("Hey, I'm Robin.")).toBeVisible();
	await expect(page.getByTestId('terminal')).toBeVisible();
	await expect(page.getByText('nautilus — ~/projects')).toBeVisible();
});

test('laravel-style connectors and stack strip render', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByTestId('connector-art')).toBeAttached();
	const strip = page.getByTestId('stack-strip');
	await expect(strip).toBeVisible();
	await expect(strip).toContainText('SvelteKit');
});

test('theme toggle flips', async ({ page }) => {
	await page.goto('/');
	const btn = page.getByTestId('theme-toggle');
	await expect(btn).toBeVisible();
	await btn.click();
	await expect(btn).toContainText(/Light|Dark/);
});

test('terminal responds to help', async ({ page }) => {
	await page.goto('/');
	const input = page.getByTestId('terminal-input');
	await input.fill('help');
	await input.press('Enter');
	await expect(page.getByTestId('terminal')).toContainText('whoami');
});
