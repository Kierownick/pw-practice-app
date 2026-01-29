import { test } from '@playwright/test';



test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
});

test('Locator Syntax Rules', async ({ page }) => {
//by Tag Name
    await page.locator('input').first().click();

//by ID
    await page.locator('#inputEmail1').first().click();

//by Class Value
    await page.locator('.shape-rectangle').click();

//by Attribute Name
    page.locator('[placeholder="Email"]');

//by Class value (full)
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

//by Combination
    page.locator('input[placeholder="Email"]');

//by Xpath
    page.locator('//*[@id="inputEmail1"]');

//by Partial Text
    page.locator(':text("Using")');

//by Exact Text Match
    page.locator('text="Using the Grid"');


});

test.only('User facing locators', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Email' }).first().click();
    await page.getByRole('button', { name: 'Sign in' }).first().click();
    await page.getByLabel('Email').first().click();
    await page.getByPlaceholder('Jane Doe').click();

});