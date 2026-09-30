const {chromium}=require('C:/Users/vidar/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const path=require('path');
(async()=>{const b=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});try{
const p=await b.newPage({viewport:{width:390,height:844}}),audio=[];p.on('request',r=>{if(/\.(wav|mp3|ogg)(?:\?|$)/.test(r.url()))audio.push(r.url())});
await p.goto('http://127.0.0.1:8779/previews/mobile-intro/?review=1');await p.evaluate(()=>introPreview.seek(4.25));
const state=await p.evaluate(()=>({transforms:[...document.querySelectorAll('.screen')].slice(0,3).map(x=>x.style.transform),visible:[...document.querySelectorAll('.scene')].filter(x=>x.style.opacity==='1').length,mutebutton:!!document.getElementById('mute')}));
if(state.visible!==2||!state.mutebutton||state.transforms.some(x=>/scale|rotate/.test(x)))throw Error(JSON.stringify(state));
for(const t of [0,4.5,4.999,5,5.001,7.599,7.6,10.2,12.8,15.4]){await p.evaluate(t=>introPreview.seek(t),t);const stable=await p.evaluate(()=>{const i=Math.min(5,sceneStarts.findIndex((t,j)=>j>0&&t>introPreview.state.position)-1);return [...document.querySelectorAll('.screen')].every((x,j)=>j===i||x.style.transform==='translateX(0px)'||x.style.transform==='translateX(0)')});if(!stable)throw Error('Underlying card moved at '+t);}await p.evaluate(()=>introPreview.seek(4.25));
await p.screenshot({path:path.join(__dirname,'review-deck.png')});
await p.locator('#play').click();await p.waitForTimeout(1000);if(audio.some(x=>x.includes('original-intro')))throw Error('Cancelled audio requested');if(!audio.some(x=>x.includes('bushwick-tarantella-20s')))throw Error('Licensed audio missing');await p.locator('#play').click();
await p.emulateMedia({reducedMotion:'reduce'});await p.reload();await p.evaluate(()=>introPreview.seek(4.25));if(!await p.locator('.screen').first().evaluate(x=>x.style.transform.includes('translateX(0%')))throw Error('Reduced motion');
console.log('PASS: aligned upright cards, slide without scale or rotation, reduced motion, licensed soundtrack, no cancelled audio.');
}finally{await b.close()}})().catch(e=>{console.error(e);process.exitCode=1});


