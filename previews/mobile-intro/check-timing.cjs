const {chromium}=require('C:/Users/vidar/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const exe='C:/Program Files/Google/Chrome/Application/chrome.exe';
(async()=>{
for(const allowed of [false,true]){
 const b=await chromium.launch({executablePath:exe,headless:true,args:[`--autoplay-policy=${allowed?'no-user-gesture-required':'document-user-activation-required'}`,'--disable-features=PreloadMediaEngagementData,MediaEngagementBypassAutoplayPolicies','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 try{const p=await b.newPage({viewport:{width:390,height:844}});await p.route('https://**/*',r=>r.abort());
 if(!allowed)await p.addInitScript(()=>{const play=HTMLMediaElement.prototype.play;let calls=0;HTMLMediaElement.prototype.play=function(){return calls++>0?play.call(this):Promise.reject(new DOMException('Autoplay blocked for test','NotAllowedError'));};});
 await p.goto('http://127.0.0.1:8779/site/?lang=no',{waitUntil:'domcontentloaded'});
 await p.frameLocator('#courseSplash').locator('#skip').waitFor();await p.waitForTimeout(900);
 const f=p.frames().find(f=>f.url().includes('embed=1'));
 const audio=await f.evaluate(()=>({muted:music.muted,paused:music.paused,position}));
 if(audio.muted||audio.paused===allowed||audio.position<.4)throw Error('Autoplay policy '+JSON.stringify({allowed,audio}));
 if(!allowed){await f.locator('#sound').click();await p.waitForTimeout(300);if(await f.evaluate(()=>music.paused||music.muted))throw Error('Sound enable failed');}
 await f.locator('#skip').click();
 await p.goto('http://127.0.0.1:8779/previews/mobile-intro/?review=1');
 for(const lang of ['no','en']){
 await p.locator(`.mobileLang [data-lang=${lang}]`).click();
 for(const t of [1,3,3.65,4,4.5,4.8,4.999,5,5.001,7.599,7.6,10.199,10.2,12.799,12.8,15.399,15.4,17.999,18,19.9]){
 const state=await p.evaluate(t=>{introPreview.seek(t);return [...document.querySelectorAll('.scene')].map(s=>({opacity:+s.style.opacity,copy:+(s.querySelector('.copy')?.style.opacity||0),transform:s.querySelector('.screen')?.style.transform}));},t);
 if(state.some(s=>s.transform&&/rotate|scale/.test(s.transform)))throw Error('Card transformed');
 if(state.reduce((sum,s)=>sum+s.copy*s.opacity,0)>1.001)throw Error('Headings overlap '+t);
 if(t===3&&state[0].transform!=='translateX(0%)')throw Error('Opening too short');
 if([5,7.6,10.2,12.8,15.4].includes(t)&&!state.some(s=>s.opacity===1&&s.copy>.999))throw Error('Heading missing at boundary '+t);
 }
 }
 console.log('PASS: '+(allowed?'audible autoplay allowed':'simulated blocked autoplay + user enables sound')+', longer opening, heading fades, upright cards, both languages');
 }finally{await b.close();}
}
})().catch(e=>{console.error(e);process.exitCode=1});



