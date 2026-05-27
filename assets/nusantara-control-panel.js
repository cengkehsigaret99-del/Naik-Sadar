(function(){
  if(window.__NUSANTARA_CONTROL_PANEL__) return;
  window.__NUSANTARA_CONTROL_PANEL__=true;

  function q(s){return document.querySelector(s)}
  function hideOld(){
    ['#nsThemeToggle','#nsMusicToggle','.helpfloat','.float','.back'].forEach(function(sel){
      document.querySelectorAll(sel).forEach(function(el){el.style.display='none'});
    });
  }
  function getTheme(){return localStorage.getItem('nsThemePreference')||'auto'}
  function setTheme(v){localStorage.setItem('nsThemePreference',v);document.documentElement.setAttribute('data-theme-pref',v);var dark=false;if(v==='dark')dark=true;else if(v==='auto'&&window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches)dark=true;document.documentElement.setAttribute('data-theme',dark?'dark':'light')}
  function nextTheme(){var p=getTheme();return p==='auto'?'light':p==='light'?'dark':'auto'}
  function labelTheme(){var p=getTheme();return p==='auto'?'Auto':p==='light'?'Terang':'Gelap'}
  function musicButton(){return document.getElementById('nsMusicToggle')}
  function toggleMusic(){var b=musicButton();if(b)b.click()}
  function musicLabel(){var b=musicButton();return b&&b.textContent?b.textContent:'Musik'}
  function linkFor(sel,fallback){var el=q(sel);return el&&el.getAttribute('href')?el.getAttribute('href'):fallback}
  function make(){
    if(document.getElementById('nsControlButton'))return;
    hideOld();
    var btn=document.createElement('button');btn.id='nsControlButton';btn.type='button';btn.textContent='Kontrol';
    btn.style.cssText='position:fixed;right:14px;bottom:var(--ns-float-bottom,96px);z-index:12000;border:0;border-radius:999px;padding:12px 15px;font-weight:900;background:#9b2f20;color:white;box-shadow:0 18px 42px rgba(92,53,25,.25)';
    var panel=document.createElement('div');panel.id='nsControlPanel';
    panel.style.cssText='display:none;position:fixed;right:14px;bottom:calc(var(--ns-float-bottom,96px) + 54px);z-index:12000;width:min(260px,calc(100vw - 28px));padding:12px;border-radius:22px;background:rgba(255,250,242,.96);color:#24170f;box-shadow:0 22px 70px rgba(0,0,0,.22);border:1px solid rgba(217,164,65,.25)';
    function render(){
      panel.innerHTML='<b style="display:block;margin:0 0 8px">Panel Kontrol</b>'+
      '<button id="nsPanelTheme" style="width:100%;margin:5px 0;padding:12px;border-radius:14px;border:0;font-weight:900">Tema: '+labelTheme()+'</button>'+
      '<button id="nsPanelMusic" style="width:100%;margin:5px 0;padding:12px;border-radius:14px;border:0;font-weight:900">'+musicLabel()+'</button>'+
      '<a id="nsPanelHelp" style="display:block;text-align:center;text-decoration:none;margin:5px 0;padding:12px;border-radius:14px;font-weight:900;background:#9b2f20;color:white" href="'+linkFor('.helpfloat,.float','safety/index.html?v=17')+'">Bantuan</a>'+
      '<a id="nsPanelGate" style="display:block;text-align:center;text-decoration:none;margin:5px 0;padding:12px;border-radius:14px;font-weight:900;background:rgba(217,164,65,.35);color:#24170f" href="'+linkFor('.back','gerbang-10.html?v=17')+'">Gerbang</a>';
      panel.querySelector('#nsPanelTheme').onclick=function(){setTheme(nextTheme());render()};
      panel.querySelector('#nsPanelMusic').onclick=function(){toggleMusic();setTimeout(render,80)};
      if(document.documentElement.getAttribute('data-theme')==='dark'){
        panel.style.background='rgba(43,31,25,.96)';panel.style.color='#f6ead7';
      }else{panel.style.background='rgba(255,250,242,.96)';panel.style.color='#24170f'}
    }
    btn.onclick=function(){hideOld();render();panel.style.display=panel.style.display==='none'?'block':'none'};
    document.body.appendChild(panel);document.body.appendChild(btn);
    setInterval(hideOld,1200);
  }
  document.addEventListener('DOMContentLoaded',function(){setTimeout(make,250)});
})();
