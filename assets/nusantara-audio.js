(function(){
  if(window.__NUSANTARA_AUDIO__) return;
  window.__NUSANTARA_AUDIO__ = true;

  const VIDEO_ID = 'gR3nlpwRTRA';
  const PREF_KEY = 'nsMusicPreference';
  let frame = null;
  let muted = true;

  function pref(){ return localStorage.getItem(PREF_KEY) || 'on'; }
  function setPref(v){ localStorage.setItem(PREF_KEY,v); }

  function makeButton(){
    if(document.getElementById('nsMusicToggle')) return;
    const b=document.createElement('button');
    b.id='nsMusicToggle';
    b.type='button';
    b.textContent=buttonText();
    b.style.cssText='position:fixed;left:14px;bottom:88px;z-index:10000;border:0;border-radius:999px;padding:10px 13px;font-weight:900;background:rgba(255,250,242,.92);color:#24170f;box-shadow:0 12px 30px rgba(92,53,25,.18)';
    b.onclick=function(){
      if(pref()==='off'){
        setPref('on');
        muted=true;
        ensurePlayer();
        updateButton();
        return;
      }
      if(muted){
        setPref('sound');
        ensurePlayer();
        unmutePlayer();
      }else{
        setPref('on');
        mutePlayer();
      }
      updateButton();
    };
    document.body.appendChild(b);
  }

  function buttonText(){
    if(pref()==='off') return 'Musik';
    return muted ? 'Suara' : 'Hening';
  }

  function updateButton(){
    const b=document.getElementById('nsMusicToggle');
    if(b) b.textContent=buttonText();
  }

  function ensurePlayer(){
    if(pref()==='off') return;
    if(frame) return;
    frame=document.createElement('iframe');
    frame.id='nsYoutubeMusic';
    frame.title='Musik latar Naik-Sadar';
    frame.allow='autoplay; encrypted-media';
    frame.referrerPolicy='strict-origin-when-cross-origin';
    frame.src='https://www.youtube.com/embed/'+VIDEO_ID+'?autoplay=1&mute=1&loop=1&playlist='+VIDEO_ID+'&controls=0&disablekb=1&playsinline=1&rel=0&modestbranding=1&enablejsapi=1&origin='+encodeURIComponent(location.origin);
    frame.style.cssText='position:fixed;left:-2px;bottom:-2px;width:1px;height:1px;opacity:.01;pointer-events:none;border:0;z-index:-1';
    document.body.appendChild(frame);
    muted=true;
    setTimeout(function(){
      command('playVideo');
      command('mute');
      if(pref()==='sound') unmutePlayer();
    },1600);
  }

  function command(func,args){
    if(!frame || !frame.contentWindow) return;
    frame.contentWindow.postMessage(JSON.stringify({event:'command',func:func,args:args||[]}), '*');
  }

  function mutePlayer(){
    muted=true;
    command('mute');
    updateButton();
  }

  function unmutePlayer(){
    muted=false;
    command('setVolume',[70]);
    command('unMute');
    command('playVideo');
    updateButton();
  }

  function enableAfterGesture(){
    ensurePlayer();
    if(pref()==='sound') unmutePlayer();
    window.removeEventListener('pointerdown',enableAfterGesture);
    window.removeEventListener('keydown',enableAfterGesture);
    window.removeEventListener('touchstart',enableAfterGesture);
  }

  document.addEventListener('DOMContentLoaded',function(){
    makeButton();
    ensurePlayer();
    window.addEventListener('pointerdown',enableAfterGesture,{once:true});
    window.addEventListener('keydown',enableAfterGesture,{once:true});
    window.addEventListener('touchstart',enableAfterGesture,{once:true});
  });
})();
