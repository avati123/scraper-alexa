const puppeteer = require('puppeteer');
const password = ("Indie876");
const cheerio = require('cheerio');
const p2 = "hi";

// use npm install puppeteer & cheerio to install node dependencies

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://login.microsoftonline.com/23a3863a-4bd3-44ea-9329-af3ee8bc6153/oauth2/v2.0/authorize?client_id=9f07b17c-c95d-4790-9aa2-c320fab6de0a&scope=openid%20email%20User.Read%20profile%20offline_access%20Directory.AccessAsUser.All%20User.Read.All&redirect_uri=https%3A%2F%2Flife-api.caulfieldlife.com.au%2FMsGraph%2Fauth%2Fopenid%2Freturn&client-request-id=b2b54bf7-2db5-4e20-9b19-53659b7cc6af&response_mode=query&response_type=code&x-client-SKU=msal.js.node&x-client-VER=1.8.0&x-client-OS=linux&x-client-CPU=x64&client_info=1');
    await page.waitForTimeout(4000);
    await page.screenshot({ path: 'screenshots/example.png' });
    console.log("\nReached sign in...")
    await page.waitForSelector('#i0116');
    await page.type('#i0116', '98320@caulfieldgs.vic.edu.au');
    console.log("\nFilled email...")
    await page.screenshot({ path: 'screenshots/filled.png' });
    await page.click('#idSIButton9');
    await page.waitForTimeout(4000);
    console.log("\nReached CGS login...")
    await page.screenshot({path: 'screenshots/clicked.png'});
    await page.type('#passwordInput', `${password}`);
    await page.click('#submitButton');
    await page.waitForTimeout(9000);
    await page.click('#idBtn_Back');
    await page.waitForTimeout(10000);
    console.log("\nReached CGS life...")
    await page.screenshot({path: 'screenshots/final1.png'});

    // now on cgs life:

    //getting html to transfer to cheerio:

    const pageData = await page.evaluate(() => {
        return{
            html: document.documentElement.innerHTML,
            
        }
    })

    const $ = cheerio.load(pageData.html);
    const element = $(".sc-RWGNv eYkZqg");
    console.log(pageData)
    console.log(element.text());


    await browser.close();
})();

// get info then create alexa announcement in the morning
// contact ifttt api to use code in applet