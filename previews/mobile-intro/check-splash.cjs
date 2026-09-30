const {chromium}=require('C:/Users/vidar/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--autoplay-policy=user-gesture-required','--use-angle=swiftshader','--enable-unsafe-swiftshader']});try{
 const p=await b.newPage({viewport:{width:390,height:844}});p.setDefaultTimeout(12000);const errors=[];p.on('pageerror',e=>{errors.push(e.message);console.error('PAGE',e.message)});
 await p.route('https://**/*',route=>route.abort());
 const url='http://127.0.0.1:8779/site/?lang=no';
 await p.goto(url,{waitUntil: 'domcontentloaded'});const f=p.frameLocator('#courseSplash');await f.locator('#skip').waitFor();
 await p.waitForTimeout(1400);const frame=p.frames().find(f=>f.url().includes('embed=1'));
 if(!await frame.evaluate(()=>introPreview.state.position>.5))throw Error('No automatic animation');
 if(await f.locator('#play').isVisible())throw Error('Play button on splash');
 const bounds=await f.locator('.splashbar').boundingBox();if(bounds.y+bounds.height>845)throw Error('Controls below viewport');
 await p.screenshot({path:'previews/mobile-intro/review-splash.png'});
 await f.locator('#hideNext').check();await f.locator('#skip').click();await p.locator('#courseSplash').waitFor({state:'detached'});
 await p.reload({waitUntil: 'domcontentloaded'});await p.waitForTimeout(2500);if(await p.locator('#courseSplash').count())throw Error('Hide next time not saved');
 await p.locator('#top h1').click();await p.locator('#introTour').click();await f.locator('#skip').waitFor();
 await f.locator('#hideNext').uncheck();await f.locator('.mobileLang [data-lang=en]').click();
 if(await f.locator('#hideLabel').innerText()!=='Hide next time')throw Error('English label');
 await p.locator('#courseSplash').waitFor({state:'detached',timeout:26000});
 if(!await p.locator('#top h1').isVisible())throw Error('Did not finish on map');
 await p.reload({waitUntil: 'domcontentloaded'});await f.locator('#skip').waitFor();await f.locator('#skip').click();
 if(errors.length)throw Error(errors.join('\n'));
 console.log('PASS: autoplay under restrictive audio policy, no Play, visible mobile controls, skip, persistent checkbox, replay/unhide, both languages, automatic finish.');
 }finally{await b.close()}})().catch(e=>{console.error(e);process.exitCode=1});


