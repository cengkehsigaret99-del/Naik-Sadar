(function(){
  if(window.__NUSANTARA_AUDIO__) return;
  window.__NUSANTARA_AUDIO__ = true;

  let ctx, master, running=false, timer=null, step=0;
  const notes=[261.63,293.66,329.63,392.00,440.00,523.25];

  function makeButton(){
    if(document.getElementById('nsMusicToggle')) return;
    const b=document.createElement('button');
    b.id='nsMusicToggle';
    b.type='button';
    b.textContent='Musik';
    b.style.cssText='position:fixed;left:14px;bottom:88px;z-index:10000;border:0;border-radius:999px;padding:10px 13px;font-weight:900;background:rgba(255,250,242,.92);color:#24170f;box-shadow:0 12px 30px rgba(92,53,25,.18)';
    b.onclick=function(){ if(running){stopMusic();b.textContent='Musik';}else{startMusic(true);b.textContent='Hening';} };
    document.body.appendChild(b);
  }

  function init(){
    if(ctx) return;
    const AC=window.AudioContext||window.webkitAudioContext;
    if(!AC) return;
    ctx=new AC();
    master=ctx.createGain();
    master.gain.value=0.045;
    master.connect(ctx.destination);
  }

  function bell(freq,delay,dur,gain){
    if(!ctx||!master) return;
    const now=ctx.currentTime+delay;
    const osc=ctx.createOscillator();
    const g=ctx.createGain();
    const f=ctx.createBiquadFilter();
    osc.type='sine';
    osc.frequency.setValueAtTime(freq,now);
    f.type='bandpass';
    f.frequency.setValueAtTime(freq*2.01,now);
    f.Q.value=8;
    g.gain.setValueAtTime(0,now);
    g.gain.linearRampToValueAtTime(gain,now+0.015);
    g.gain.exponentialRampToValueAtTime(0.0001,now+dur);
    osc.connect(f); f.connect(g); g.connect(master);
    osc.start(now); osc.stop(now+dur+0.05);
  }

  function pulse(){
    if(!running) return;
    const a=notes[step%notes.length];
    const b=notes[(step+2)%notes.length];
    bell(a,0,1.9,0.22);
    bell(b,0.38,1.5,0.13);
    if(step%4===0) bell(a/2,0.05,2.6,0.10);
    step++;
  }

  function startMusic(fromUser){
    init();
    if(!ctx) return;
    const resume=ctx.resume ? ctx.resume() : Promise.resolve();
    resume.then(function(){
      if(running) return;
      running=true;
      pulse();
      timer=setInterval(pulse,1650);
      const b=document.getElementById('nsMusicToggle');
      if(b) b.textContent='Hening';
    }).catch(function(){ if(!fromUser) makeButton(); });
  }

  function stopMusic(){
    running=false;
    if(timer) clearInterval(timer);
    timer=null;
    if(master) master.gain.setTargetAtTime(0.0001,ctx.currentTime,0.15);
    setTimeout(function(){ if(master) master.gain.value=0.045; },400);
  }

  function enableAfterGesture(){
    startMusic(true);
    window.removeEventListener('pointerdown',enableAfterGesture);
    window.removeEventListener('keydown',enableAfterGesture);
    window.removeEventListener('touchstart',enableAfterGesture);
  }

  document.addEventListener('DOMContentLoaded',function(){
    makeButton();
    startMusic(false);
    window.addEventListener('pointerdown',enableAfterGesture,{once:true});
    window.addEventListener('keydown',enableAfterGesture,{once:true});
    window.addEventListener('touchstart',enableAfterGesture,{once:true});
  });
})();
