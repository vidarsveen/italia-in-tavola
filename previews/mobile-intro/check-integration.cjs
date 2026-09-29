const {chromium}=require('C:/Users/vidar/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--use-angle=swiftshader','--enable-unsafe-swiftshader']});try{
const p=await b.newPage({viewport:{width:390,height:844}});
await p.goto('http://127.0.0.1:8779/site/?intro&lang=no');
await p.locator('#introTour').waitFor({state:'visible'});
if(!(await p.locator('#introTour').innerText()).includes('20 sekunder'))throw Error('Norwegian intro link');
await p.locator('#introTour').click();
await p.locator('#play').click();await p.waitForTimeout(1100);
if(!await p.evaluate(()=>introPreview.state.position>.5))throw Error('Published MP3 playback');
await p.locator('#play').click();await p.locator('.mobileLang [data-lang=en]').click();
if(!(await p.locator('#enter').innerText()).includes('Open the map'))throw Error('Language');
await p.locator('#enter').click();await p.locator('#top h1').waitFor({state:'visible'});
if(await p.locator('#intro').isVisible())throw Error('Return did not dismiss welcome');
console.log('PASS: built site welcome link, NO/EN, MP3 playback, return to map.');
}finally{await b.close()}})().catch(e=>{console.error(e);process.exitCode=1});
