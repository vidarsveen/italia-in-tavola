const {chromium}=require('C:/Users/vidar/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const path=require('path');
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 try{
  const page=await browser.newPage({viewport:{width:390,height:844},deviceScaleFactor:2,isMobile:true});
  for(const lang of ['en','no']){
   await page.goto(`http://127.0.0.1:8779/italia-course.html?instant&lang=${lang}#/recipes/bistecca-fiorentina`);
   await page.waitForTimeout(4500);
   await page.screenshot({path:path.join(__dirname,'screens',`${lang}-recipe.jpg`),type:'jpeg',quality:90});
   console.log(lang,'recipe captured');
  }
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
