const {chromium}=require('C:/Users/vidar/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const path=require('path');
(async()=>{const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
try{const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
for(const width of [360,390]){await page.setViewportSize({width,height:844});await page.goto('http://127.0.0.1:8779/previews/mobile-intro/?review=1');
for(const lang of ['en','no']){await page.locator(`.mobileLang [data-lang=${lang}]`).click();await page.waitForTimeout(300);
for(const t of [0,5.5,8,11,13.5,16,19]){await page.evaluate(t=>introPreview.seek(t),t);await page.waitForTimeout(550);const ok=await page.evaluate(()=>[...document.images].every(i=>i.complete&&i.naturalWidth>0)&&document.documentElement.scrollWidth<=innerWidth);if(!ok)throw Error(`Assets/overflow ${width} ${lang} ${t}`);}
}
await page.evaluate(()=>introPreview.seek(0));await page.waitForTimeout(550);await page.screenshot({path:path.join(__dirname,`review-${width}.png`)});
}await page.locator('#play').click();await page.waitForTimeout(1200);if(!(await page.evaluate(()=>introPreview.state.position>0.8)))throw Error('Playback did not advance');await page.locator('#play').click();const before=await page.evaluate(()=>introPreview.state.position);await page.waitForTimeout(400);if(await page.evaluate(()=>introPreview.state.position)!==before)throw Error('Pause failed');
await page.evaluate(()=>introPreview.seek(19));await page.locator('#play').click();await page.waitForTimeout(1300);if(!(await page.evaluate(()=>introPreview.state.position===20&&!introPreview.state.playing)))throw Error('End did not stop');
await page.emulateMedia({reducedMotion:'reduce'});await page.reload();if(await page.evaluate(()=>introPreview.state.playing))throw Error('Unexpected autoplay');if(errors.length)throw Error(errors.join('\n'));console.log('PASS: both languages, seven scenes, 360/390px, assets, overflow, playback, pause, end and reduced-motion start.');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});

