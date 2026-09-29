const {chromium}=require('C:/Users/vidar/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs=require('fs'),path=require('path');
(async()=>{const b=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});try{const p=await b.newPage({viewport:{width:390,height:844}});await p.goto('http://127.0.0.1:8779/previews/mobile-intro/');await p.waitForFunction(()=>Math.abs(introPreview.state.duration-20)<.2);const state=()=>p.evaluate(()=>introPreview.state);
await p.locator('#play').click();await p.waitForTimeout(1100);let s=await state();if(!s.playing||s.audioTime<.7||Math.abs(s.position-s.audioTime)>.12)throw Error('Playback/sync');
await p.locator('.mobileLang [data-lang=en]').click();let t=await state();if(!t.playing||t.audioTime<s.audioTime||t.lang!=='en')throw Error('Language interrupted audio');
await p.locator('#mute').click();if(!(await state()).muted)throw Error('Mute');await p.locator('#mute').click();if((await state()).muted)throw Error('Unmute');
await p.locator('#play').click();s=await state();await p.waitForTimeout(400);t=await state();if(t.playing||Math.abs(t.audioTime-s.audioTime)>.02)throw Error('Pause');
await p.locator('#seek').evaluate(el=>{el.value=11;el.dispatchEvent(new Event('input'));});s=await state();if(s.playing||Math.abs(s.audioTime-11)>.05)throw Error('Scrub');
await p.locator('#replay').click();await p.waitForTimeout(400);s=await state();if(!s.playing||s.audioTime>1)throw Error('Replay');
await p.evaluate(()=>introPreview.seek(19));await p.locator('#play').click();await p.waitForTimeout(1400);s=await state();if(s.playing||s.position!==20)throw Error('End');
console.log(JSON.stringify({result:'PASS',duration:20,checks:['browser playback advances','audio/visual sync','language continuity','mute/unmute','pause','scrub','replay','end']},null,2));
}finally{await b.close();}})().catch(e=>{console.error(e);process.exitCode=1});

