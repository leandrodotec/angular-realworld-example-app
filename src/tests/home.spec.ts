import { test, expect } from "@playwright/test";
import { setArticlesMockApi } from "./stubs/articles";

test("User opens home page - with real APIs", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "conduit" })).toBeVisible();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "conduit" })
    .click();
  await expect(page.locator("app-article-meta").count()).toEqual(10);
  await expect(
    page.getByRole("link", { name: "Ill override the digital ADP" }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Sign in" })).toBeVisible();
});

test("User opens home page - with mocked API", async ({ page }) => {
  await setArticlesMockApi(page);

  await page.goto("/");

  await expect(page.getByRole("heading", { name: "conduit" })).toBeVisible();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "conduit" })
    .click();
  await expect(page.locator("app-article-meta")).toHaveCount(5);
  await expect(
    page.getByRole("link", { name: "Ill override the digital ADP" }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Sign in" })).toBeVisible();
});

test("User reads an article - with mocked API", async ({ page }) => {
  await setArticlesMockApi(page);

  await page.goto("/");
  await expect(page.getByRole("heading", { name: "conduit" })).toBeVisible();

  await page
    .getByRole("link", { name: "Ill program the back-end THX" })
    .getByText("Read more...")
    .click();

  await expect(
    page.getByRole("heading", { name: "Ill program the back-end THX" }),
  ).toBeVisible();
});
