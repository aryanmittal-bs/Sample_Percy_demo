const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const percySnapshot = require('@percy/selenium-webdriver');
const httpServer = require('http-server');
const server = httpServer.createServer();

const PORT = process.env.PORT_NUMBER || 8000;
const TEST_URL = `http://localhost:${PORT}`;

const websites = [
  'https://www.google.com',
  'https://www.wikipedia.org',
  'https://www.github.com',
  'https://www.reddit.com',
  'https://www.stackoverflow.com',
  'https://www.amazon.com',
  'https://www.bbc.com',
  'https://www.dev.to',
  'https://www.tutorialspoint.com',
  'https://www.justinmccandless.com',
  'https://www.caniuse.com',
  'https://www.sitepoint.com',
  'https://www.codepen.io',
  'https://www.hackernoon.com',
  'https://www.smashingmagazine.com',
  'https://www.quora.com',
  'https://www.stackoverflow.com',
  'https://www.medium.com',
  'https://www.reddit.com',
  'https://www.producthunt.com',
  'https://www.linkedin.com',
  'https://www.tumblr.com',
  'https://www.hubspot.com',
  'https://www.codewars.com',
];

server.listen(PORT, () => {
  console.log(`Server is listening on ${TEST_URL}`);
});

async function cleanup({ driver, server, isError = 0 }) {
  driver && (await driver.quit());
  server && server.close();
  process.exit(isError);
}

(async function() {
  let driver;

  try {
    const options = new chrome.Options().headless();

    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();

    for (let i = 0; i < websites.length; i++) {
      const website = websites[i];
      console.log(`Navigating to ${website}`);

      await driver.get(website);
      try {
        await driver.wait(until.elementLocated(By.tagName('body')), 50000); // Wait for body to load
        await percySnapshot(driver, `Snapshot ${i + 1} - ${website}`);
      } catch (error) {
        console.log(`Error capturing snapshot for ${website}: ${error.message}`);
      }
    }

  } catch (error) {
    console.log(error);
    await cleanup({ driver, server, isError: 1 });
  } finally {
    await cleanup({ driver, server });
  }
})();
