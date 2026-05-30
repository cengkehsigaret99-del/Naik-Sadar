(function(){
  if(window.__NUSANTARA_AUDIO__) return;
  window.__NUSANTARA_AUDIO__ = true;

  // Musik hanya aktif di halaman induk. Jika halaman dibuka di dalam iframe app-shell,
  // audio di halaman anak tidak dibuat agar tidak dobel.
  if(window.top !== window.self) return;

  const PREF_KEY = 'nsMusicPreference';
  const AUDIO_SRC = 'assets/audio/naik-sadar-bg.mp3?v=28';
  let audio = null;
  let audioAvailable = true;

  function pref(){ return localStorage.getItem(PREF_KEY) || 'off'; }
  function setPref(v){ localStorage.setItem(PREF_KEY,v); }

  function makeButton(){
    if(document.getElementById('nsMusicToggle')) return;
    const b=document.createElement('button');
    b.id='nsMusicToggle';
    b.type='button';
    b.textContent=buttonText();
    b.style.cssText='position:fixed;left:14px;bottom:88px;z-index:10000;border:0;border-radius:999px;padding:10px 13px;font-weight:900;background:rgba(255,250,242,.94);color:#24170f;box-shadow:0 12px 30px rgba(92,53,25,.18)';
    b.onclick=function(){
      if(!audioAvailable){
        b.textContent='Musik belum siap';
        b.title='File musik belum tersedia atau belum valid.';
        return;
      }
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
    if(!audioAvailable) return 'Musik belum siap';
    return pref()==='on' ? 'Hening' : 'Musik';
  }

  function updateButton(){
    const b=document.getElementById('nsMusicToggle');
    if(!b) return;
    b.textContent=buttonText();
    if(!audioAvailable){
      b.disabled=false;
      b.setAttribute('aria-disabled','true');
      b.title='File musik belum tersedia atau belum valid.';
    }else{
      b.removeAttribute('aria-disabled');
      b.title=pref()==='on'?'Matikan musik':'Nyalakan musik';
    }
  }

  function markUnavailable(){
    audioAvailable=false;
    setPref('off');
    updateButton();
    console.warn('Naik-Sadar: file musik belum tersedia atau belum valid di '+AUDIO_SRC);
  }

  function ensureAudio(){
    if(audio) return audio;
    audio=document.createElement('audio');
    audio.id='nsLocalMusic';
    audio.src=AUDIO_SRC;
    audio.loop=true;
    audio.preload='metadata';
    audio.volume=0.55;
    audio.style.display='none';
    audio.addEventListener('error',markUnavailable);
    audio.addEventListener('loadedmetadata',function(){
      if(!Number.isFinite(audio.duration) || audio.duration===0) markUnavailable();
    });
    document.body.appendChild(audio);
    return audio;
  }

  function startAudio(fromUser){
    if(!audioAvailable) return;
    const a=ensureAudio();
    if(pref()!=='on' && !fromUser) return;
    const p=a.play();
    if(p && p.catch){
      p.catch(function(){ updateButton(); });
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
