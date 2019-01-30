// Puppeteer kütüphanesini uygulamamıza dahil ediyoruz.
const puppeteer = require('puppeteer');

(async () => {
  // Tarayıcımızı oluşturuyoruz.
  const browser = await puppeteer.launch({
    headless: false // Tarayıcının arkaplanda değil normal şekilde başlamasını belirtiyoruz.
  });

  // Tarayıcımız üzerinde yeni bir sayfa(tab) oluşturuyoruz.
  const page = await browser.newPage();

  // Tarayıcının genişliğini ve yüksekliğini ayarlıyoruz.
  page.setViewport({
    width: 1500,
    height: 1080
  });

  // Oluşturduğumuz yeni sayfa üzerinde ekran görüntüsünü alacağımız siteye gidiyoruz.
  await page.goto('https://duganci.com');

  // Websitesine gittikten sonra screenshot method'u ile ekran görüntüsünü alıyoruz.
  await page.screenshot({
    path: 'ekran-goruntusu.png', // Ekran görüntüsünün kaydedileceği path.
    fullPage: true // Tam sayfa ekran görüntüsü almasını belirtiyoruz.
  });

  // Tarayıcımızı kapatıyoruz.
  await browser.close();
})();