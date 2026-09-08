import { chromium } from "playwright";

const browser = await chromium.launch({
  headless: true,
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
});

try {
  const desktop = await browser.newPage({
    viewport: { width: 1440, height: 1100 },
    deviceScaleFactor: 1
  });
  await desktop.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await desktop.screenshot({ path: "preview-desktop.png", fullPage: true });

  const mobile = await browser.newPage({
    viewport: { width: 390, height: 1000 },
    isMobile: true,
    deviceScaleFactor: 2
  });
  await mobile.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await mobile.screenshot({ path: "preview-mobile-top.png", fullPage: false });
  await mobile.locator("#resume").scrollIntoViewIfNeeded();
  await mobile.waitForTimeout(500);
  await mobile.screenshot({ path: "preview-mobile-resume.png", fullPage: false });
  await mobile.locator("#ai-lab").scrollIntoViewIfNeeded();
  await mobile.waitForTimeout(500);
  await mobile.screenshot({ path: "preview-mobile-ai.png", fullPage: false });
  await mobile.locator("#contact").scrollIntoViewIfNeeded();
  await mobile.waitForTimeout(500);
  await mobile.screenshot({ path: "preview-mobile-contact.png", fullPage: false });
} finally {
  await browser.close();
}
