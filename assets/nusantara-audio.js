(function(){
  if(window.__NUSANTARA_AUDIO__) return;
  window.__NUSANTARA_AUDIO__ = true;

  const PREF_KEY = 'nsMusicPreference';
  const AUDIO_SRC = 'assets/audio/naik-sadar-bg.mp3';
  let audio = null;
  let ready = false;

  function pref(){ return localStorage.getItem(PREF_KEY) || 'off'; }
  function setPref(v){ localStorage.setItem(PREF_KEY,v); }

  function makeButton(){
    if(document.getElementById('nsMusicToggle')) return;
    const b=document.createElement('button');
    b.id='nsMusicToggle';
    b.type='button';
    b.textContent=buttonText();
    b.style.cssText='position:fixed;left:14px;bottom:88px;z-index:10000;border:0;border-radius:999px;padding:10px 13px;font-weight:900;background:rgba(255,250,242,.92);color:#24170f;box-shadow:0 12px 30px rgba(92,53,25,.18)';
    b.onclick=function(){
      if(pref()==='on'){
        setPref('off');
        stopAudio();
      }else{
        setPref('on');
        startAudio(true);
      }
      updateButton();
    };
    document.body.appendChild(b);
  }

  function buttonText(){
    return pref()==='on' ? 'Hening' : 'Musik';
  }

  function updateButton(){
    const b=document.getElementById('nsMusicToggle');
    if(b) b.textContent=buttonText();
  }

  function ensureAudio(){
    if(audio) return audio;
    audio=document.createElement('audio');
    audio.id='nsLocalMusic';
    audio.src=AUDIO_SRC;
    audio.loop=true;
    audio.preload='auto';
    audio.volume=0.55;
    audio.style.display='none';
    audio.addEventListener('canplaythrough',function(){ ready=true; });
    audio.addEventListener('error',function(){
      setPref('off');
      updateButton();
      console.warn('Naik-Sadar: file musik belum tersedia di '+AUDIO_SRC);
    });
    document.body.appendChild(audio);
    return audio;
  }

  function startAudio(fromUser){
    const a=ensureAudio();
    if(pref()!=='on' && !fromUser) return;
    const p=a.play();
    if(p && p.catch){
      p.catch(function(){
        updateButton();
      });
    }
  }

  function stopAudio(){
    if(!audio) return;
    audio.pause();
  }

  function enableAfterGesture(){
    if(pref()==='on') startAudio(true);
    window.removeEventListener('pointerdown',enableAfterGesture);
    window.removeEventListener('keydown',enableAfterGesture);
    window.removeEventListener('touchstart',enableAfterGesture);
  }

  document.addEventListener('DOMContentLoaded',function(){
    makeButton();
    ensureAudio();
    if(pref()==='on') startAudio(false);
    window.addEventListener('pointerdown',enableAfterGesture,{once:true});
    window.addEventListener('keydown',enableAfterGesture,{once:true});
    window.addEventListener('touchstart',enableAfterGesture,{once:true});
  });
})();
