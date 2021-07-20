const puppeteer = require("puppeteer");

(async () => {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com/search?q=unialcance')

  const retorno = await page.evaluate(() => {

    const nodeList = document.querySelectorAll(".yuRUbf > a");
    const siteArray = [...nodeList];

    const list = siteArray.map((item) => {
      return {
        link: item.href,
        title: item.querySelector("h3.LC20lb.DKV0Md").innerText
      }
    })

    return list;

  })

  console.log( await retorno );

  await browser.close()

})()