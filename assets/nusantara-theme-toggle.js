(function(){
  if(window.__NUSANTARA_THEME_TOGGLE__) return;
  window.__NUSANTARA_THEME_TOGGLE__=true;

  const KEY='nsThemePreference';
  const modes=['auto','light','dark'];

  function getPref(){ return localStorage.getItem(KEY)||'auto'; }
  function setPref(v){ localStorage.setItem(KEY,v); apply(); updateButton(); }
  function prefersDark(){ return window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches; }
  function activeMode(){ const p=getPref(); return p==='auto' ? (prefersDark()?'dark':'light') : p; }

  function apply(){
    const p=getPref();
    document.documentElement.setAttribute('data-theme-pref',p);
    document.documentElement.setAttribute('data-theme',activeMode());
  }

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

  function makeButton(){
    if(document.getElementById('nsThemeToggle')) return;
    const b=document.createElement('button');
    b.id='nsThemeToggle';
    b.type='button';
    b.style.cssText='position:fixed;left:14px;top:14px;z-index:10000;border-radius:999px;padding:10px 13px;font-weight:900;font-size:12px;letter-spacing:.01em;backdrop-filter:blur(10px)';
    b.onclick=function(){ setPref(next()); };
    document.body.appendChild(b);
    updateButton();
  }

  apply();
  document.addEventListener('DOMContentLoaded',function(){ apply(); makeButton(); });
  if(window.matchMedia){
    const m=window.matchMedia('(prefers-color-scheme: dark)');
    if(m.addEventListener) m.addEventListener('change',function(){ apply(); updateButton(); });
    else if(m.addListener) m.addListener(function(){ apply(); updateButton(); });
  }
})();