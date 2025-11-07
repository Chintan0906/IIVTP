const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function openGoogle() {
  try {
    console.log("🚀 Launching Chrome...");
    let driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(new chrome.Options())
      .build();

    await driver.get('https://www.google.com');
    console.log("✅ Google opened successfully!");

  } catch (err) {
    console.error("❌ Error:", err);
  }
})();
