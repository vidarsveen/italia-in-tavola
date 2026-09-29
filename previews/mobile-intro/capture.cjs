// Capture the actual course without changing its source or the owner's browser profile.
const {chromium} = require(process.env.PLAYWRIGHT_MODULE || 'C:/Users/vidar/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs = require('fs');
const path = require('path');
const server = require('./server.cjs');
(async()=>{
  await new Promise(resolve=>server.listen(8778,'127.0.0.1',resolve));
  const browser = await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--use-angle=swiftshader','--enable-unsafe-swiftshader']});
  try {
    fs.mkdirSync(path.join(__dirname,'screens'),{recursive:true});
    const page = await browser.newPage({viewport:{width:390,height:844},deviceScaleFactor:2,isMobile:true});
    for(const lang of ['en','no']) {
      await page.goto(`http://127.0.0.1:8778/italia-course.html?instant&lang=${lang}`);
      await page.waitForTimeout(4500);
      const shot = async name => {await page.screenshot({path:path.join(__dirname,'screens',`${lang}-${name}.jpg`),type:'jpeg',quality:90}); console.log(lang,name);};
      await shot('map');
      await page.evaluate(()=>location.hash='#/IT-45/4');
      await page.waitForTimeout(900);
      await shot('article');
      await page.locator('#reader .quiz').scrollIntoViewIfNeeded();
      await shot('quiz');
      await page.locator('#reader .q').first().evaluate(li=>li.querySelector(`[data-k="${li.dataset.c}"]`).click());
      await shot('answer');
      await page.evaluate(()=>location.hash='#/recipes/bistecca-fiorentina');
      await page.waitForTimeout(800);
      await shot('recipe');
      await page.evaluate(()=>location.hash='#/audiobook');
      await page.waitForTimeout(800);
      await shot('audio');
      await page.evaluate(()=>location.hash='#/recipes');
      await page.waitForTimeout(800);
      await shot('recipes');
    }
  } finally {await browser.close();server.close();}
})().catch(e=>{console.error(e);server.close();process.exitCode=1;});

