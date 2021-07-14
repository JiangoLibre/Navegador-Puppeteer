const puppeteer = require("puppeteer");

const getInfo = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(
    "https://www.google.com/search?q=unialcance&sxsrf=ALeKk01pCMFJcZ4GC5je3azk2YFWL5n6zg%3A1626185826798&ei=YqDtYOebMIXY5OUP-euzoAU&oq=unialcance&gs_lcp=Cgdnd3Mtd2l6EAxKBAhBGABQAFgAYIMCaABwAngAgAEAiAEAkgEAmAEAqgEHZ3dzLXdpesABAQ&sclient=gws-wiz&ved=0ahUKEwjn1K2knuDxAhUFLLkGHfn1DFQQ4dUDCA4"
  );
  const arrayDeDados = await pageEvaluate(() => {
    //Toda funçao será executada no browser

    const nodeList = document.querySelectorAll(".yuRUbf > a");

    const siteArray = [...nodeList];

    const list = siteArray.map((item) => {
      return {
        link: item.href,
        title: item.querySelector("h3.LC20lb DKV0Md").innerText,
      };
    });

    return list;
  });
  return arrayDeDados
  
};
console.log( await getInfo )