import { test, expect } from "@playwright/test";

test("User logs in", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link", { name: "Sign in" }).click();

  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill("maxsepultura2@gmail.com");
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("123angular4");
  await page.getByRole("button", { name: "Sign in" }).click();

  await expect(page.getByRole("link", { name: "leandrog" })).toBeVisible();
});
