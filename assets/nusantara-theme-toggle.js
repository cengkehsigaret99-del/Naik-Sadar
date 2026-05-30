(function(){
  if(window.__NUSANTARA_THEME_TOGGLE__) return;
  window.__NUSANTARA_THEME_TOGGLE__=true;

  const KEY='nsThemePreference';
  const modes=['auto','light','dark'];

  function getPref(){ return localStorage.getItem(KEY)||'auto'; }
  function prefersDark(){ return window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches; }
  function activeMode(){ const p=getPref(); return p==='auto' ? (prefersDark()?'dark':'light') : p; }

  function apply(){
    const p=getPref();
    document.documentElement.setAttribute('data-theme-pref',p);
    document.documentElement.setAttribute('data-theme',activeMode());
    syncFrames();
  }

  function setPref(v){ localStorage.setItem(KEY,v); apply(); updateButton(); }

  function label(){
    const p=getPref();
    if(p==='dark') return 'Gelap';
    if(p==='light') return 'Terang';
    return 'Auto';
  }

  function icon(){
    const p=getPref();
    if(p==='dark') return '☾';
    if(p==='light') return '☀';
    return '◐';
  }

  function next(){
    const p=getPref();
    const i=modes.indexOf(p);
    return modes[(i+1)%modes.length];
  }

  function updateButton(){
    const b=document.getElementById('nsThemeToggle');
    if(!b) return;
    b.textContent=icon()+' Tema: '+label();
    b.setAttribute('aria-label','Ganti tema tampilan. Mode sekarang: '+label());
    b.title='Klik untuk ganti tema: Auto → Terang → Gelap';
  }

  function syncFrames(){
    document.querySelectorAll('iframe').forEach(function(frame){
      try{
        if(frame.contentWindow){
          frame.contentWindow.postMessage({type:'ns-theme',pref:getPref(),theme:activeMode()},'*');
          const doc=frame.contentDocument;
          if(doc&&doc.documentElement){
            doc.documentElement.setAttribute('data-theme-pref',getPref());
            doc.documentElement.setAttribute('data-theme',activeMode());
          }
        }
      }catch(e){}
    });
  }

  function makeButton(){
    if(window.top!==window.self) return;
    if(document.getElementById('nsThemeToggle')) return;
    const b=document.createElement('button');
    b.id='nsThemeToggle';
    b.type='button';
    b.onclick=function(){ setPref(next()); };
    document.body.appendChild(b);
    updateButton();
  }

  window.addEventListener('message',function(ev){
    const d=ev.data||{};
    if(d.type==='ns-theme'){
      document.documentElement.setAttribute('data-theme-pref',d.pref||'auto');
      document.documentElement.setAttribute('data-theme',d.theme||activeMode());
    }
  });

  apply();
  document.addEventListener('DOMContentLoaded',function(){ apply(); makeButton(); syncFrames(); });
  window.addEventListener('load',syncFrames);
  if(window.matchMedia){
    const m=window.matchMedia('(prefers-color-scheme: dark)');
    if(m.addEventListener) m.addEventListener('change',function(){ apply(); updateButton(); });
    else if(m.addListener) m.addListener(function(){ apply(); updateButton(); });
  }
})();
