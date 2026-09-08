import { chromium } from "playwright";

const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const outDir = "/Users/jade/Documents/New project/personal-brand-site/public/project-media";
const browser = await chromium.launch({
  headless: true,
  executablePath: chromePath
});

async function capture(url, path, options = {}) {
  const page = await browser.newPage({
    viewport: options.viewport ?? { width: 1440, height: 1000 },
    deviceScaleFactor: 1
  });
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  if (options.waitMs) {
    await page.waitForTimeout(options.waitMs);
  }
  if (options.scrollY) {
    await page.evaluate((y) => window.scrollTo(0, y), options.scrollY);
    await page.waitForTimeout(600);
  }
  await page.screenshot({ path: `${outDir}/${path}`, fullPage: false });
  await page.close();
}

try {
  await capture(
    "file:///private/tmp/jade-ai-projects/feishu-hire-dashboard/dist/hire-dashboard.html",
    "feishu-dashboard-raw.png",
    { waitMs: 1800 }
  );
  await capture("http://localhost:3200/scan", "social-radar-scan-raw.png", { waitMs: 1800 });
  await capture("http://localhost:3300/scan", "talentpilot-scan-raw.png", { waitMs: 1800 });
  await capture("http://localhost:3300/scan", "talentpilot-flow-raw.png", {
    waitMs: 1800,
    scrollY: 780
  });
  await capture("http://localhost:3300/candidates", "talentpilot-candidates-raw.png", {
    waitMs: 1800
  });
} finally {
  await browser.close();
}
