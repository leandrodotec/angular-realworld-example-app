import { test, expect } from "@playwright/test";

test("User logs in and adds a comment", async ({ page }) => {
  await page.goto("/");

  const signInButton = page.getByRole("link", { name: "Sign in" });
  if (await signInButton.isVisible()) {
    await signInButton.click();

    await page.getByPlaceholder("Email").click();
    await page.getByPlaceholder("Email").fill("maxsepultura2@gmail.com");
    await page.getByPlaceholder("Password").click();
    await page.getByPlaceholder("Password").fill("123angular4");
    await page.getByRole("button", { name: "Sign in" }).click();
    await expect(page.getByRole("link", { name: "leandrog" })).toBeVisible();
  }

  await page
    .getByRole("link", { name: "Ill override the digital ADP" })
    .click();
  await page.getByPlaceholder("Write a comment...").click();
  await page.getByPlaceholder("Write a comment...").fill("Some comment here.");
  await page.getByRole("button", { name: "Post Comment" }).click();

  await expect(page.getByText("Some comment here.")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "leandrog" }).nth(1),
  ).toBeVisible();
});
