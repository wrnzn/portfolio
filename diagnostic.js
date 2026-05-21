import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  let hasErrors = false;

  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.error('BROWSER ERROR:', msg.text());
      hasErrors = true;
    } else {
      console.log('BROWSER LOG:', msg.text());
    }
  });

  page.on('pageerror', err => {
    console.error('PAGE EXCEPTION:', err.message);
    hasErrors = true;
  });

  // Since Vite might be on 5173 or 5174, let's try 5174 first based on the logs
  try {
    await page.goto('http://localhost:5174', { waitUntil: 'networkidle', timeout: 10000 });
  } catch (e) {
    try {
      await page.goto('http://localhost:5173', { waitUntil: 'networkidle', timeout: 10000 });
    } catch (e2) {
      console.error('Failed to connect to dev server on both 5173 and 5174');
      hasErrors = true;
    }
  }

  // Wait a moment for R3F to initialize and compile shaders
  await page.waitForTimeout(3000);

  await browser.close();

  if (hasErrors) {
    process.exit(1);
  } else {
    console.log('SUCCESS: No WebGL or Console Errors Detected!');
    process.exit(0);
  }
})();
