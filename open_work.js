const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');

(async function openLocalFile() {
  try {
    console.log("🚀 Starting Selenium...");

    // Path to your work.html file
    let filePath = 'D:\\html_demo\\work.html';
    console.log("📁 File path:", filePath);

    // Create a Chrome driver instance
    let driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(new chrome.Options())
      .build();

    console.log("✅ ChromeDriver started successfully.");

    // Open the HTML file
    await driver.get('file:///' + filePath);
    console.log("🎉 work.html opened successfully in Chrome!");

  } catch (err) {
    console.error("❌ Error occurred:", err);
  }
})();
