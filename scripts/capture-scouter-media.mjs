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
  if (options.waitMs) await page.waitForTimeout(options.waitMs);
  if (options.scrollY) {
    await page.evaluate((y) => window.scrollTo(0, y), options.scrollY);
    await page.waitForTimeout(650);
  }
  await page.screenshot({ path: `${outDir}/${path}`, fullPage: false });
  await page.close();
}

try {
  await capture("http://localhost:3201/scan", "scouter-scan-raw.png", { waitMs: 2200 });
  await capture("http://localhost:3201/scan", "scouter-scan-flow-raw.png", {
    waitMs: 2200,
    scrollY: 680
  });
  await capture("http://localhost:3201/shortlist", "scouter-shortlist-raw.png", { waitMs: 2200 });
  await capture("http://localhost:3201/network", "scouter-network-raw.png", { waitMs: 2200 });
  await capture("http://localhost:3201/insights", "scouter-insights-raw.png", { waitMs: 2200 });
} finally {
  await browser.close();
}
