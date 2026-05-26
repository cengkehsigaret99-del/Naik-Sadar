(function(){
  if(window.__NUSANTARA_THEME_TOGGLE__) return;
  window.__NUSANTARA_THEME_TOGGLE__=true;

  const KEY='nsThemePreference';
  const modes=['auto','light','dark'];

  function getPref(){ return localStorage.getItem(KEY)||'auto'; }
  function setPref(v){ localStorage.setItem(KEY,v); apply(v); updateButton(); }
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
  function next(){
    const p=getPref();
    const i=modes.indexOf(p);
    return modes[(i+1)%modes.length];
  }
  function updateButton(){
    const b=document.getElementById('nsThemeToggle');
    if(b) b.textContent='Tema: '+label();
  }
  function makeButton(){
    if(document.getElementById('nsThemeToggle')) return;
    const b=document.createElement('button');
    b.id='nsThemeToggle';
    b.type='button';
    b.textContent='Tema: '+label();
    b.style.cssText='position:fixed;left:14px;top:58px;z-index:10000;border:0;border-radius:999px;padding:10px 13px;font-weight:900;background:rgba(255,250,242,.92);color:#24170f;box-shadow:0 12px 30px rgba(92,53,25,.18)';
    b.onclick=function(){ setPref(next()); };
    document.body.appendChild(b);
  }

  apply();
  document.addEventListener('DOMContentLoaded',function(){ apply(); makeButton(); });
  if(window.matchMedia){
    const m=window.matchMedia('(prefers-color-scheme: dark)');
    if(m.addEventListener) m.addEventListener('change',apply);
    else if(m.addListener) m.addListener(apply);
  }
})();
