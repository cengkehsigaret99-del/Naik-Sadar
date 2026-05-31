(function(){
  if(window.__RUANG_SADAR_FRAME_NAV__) return;
  window.__RUANG_SADAR_FRAME_NAV__ = true;

  const items = [
    ['Gerbang','ruang-sadar.html?v=1','ruang-sadar.html'],
    ['Cermin','cermin-diri.html?v=1','cermin-diri.html'],
    ['Napas','ruang-napas.html?v=1','ruang-napas.html'],
    ['Peta','peta-laku-harian.html?v=1','peta-laku-harian.html'],
    ['Lontar','pusat-lontar-sadar.html?v=1','pusat-lontar-sadar.html'],
    ['Rapi','ruang-rapi.html?v=1','ruang-rapi.html']
  ];

  function inject(){
    const frame = document.getElementById('naikSadarFrame');
    if(!frame) return;
    let doc;
    try{ doc = frame.contentDocument || frame.contentWindow.document; }catch(e){ return; }
    if(!doc || !doc.body || doc.getElementById('rsFrameNav')) return;

    const style = doc.createElement('style');
    style.id = 'rsFrameNavStyle';
    style.textContent = `
      body{padding-bottom:92px!important}
      .rs-frame-nav{position:fixed;left:50%;bottom:calc(10px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);z-index:9998;width:min(560px,calc(100% - 18px));display:grid;grid-template-columns:repeat(6,1fr);gap:5px;padding:7px;border-radius:24px;background:rgba(255,248,234,.91);border:1px solid rgba(75,46,31,.16);box-shadow:0 18px 44px rgba(75,46,31,.18);backdrop-filter:blur(10px)}
      .rs-frame-nav a{min-height:46px;display:flex;align-items:center;justify-content:center;text-align:center;border-radius:17px;text-decoration:none;color:#6f5b48;font-size:11px;font-weight:950;letter-spacing:.01em}
      .rs-frame-nav a[aria-current="page"]{background:linear-gradient(145deg,#f4d88a,#b9822b);color:#211a15;box-shadow:0 8px 18px rgba(185,130,43,.18)}
      html[data-theme="dark"] .rs-frame-nav{background:rgba(33,26,21,.92);border-color:rgba(244,216,138,.18);box-shadow:0 18px 44px rgba(0,0,0,.32)}
      html[data-theme="dark"] .rs-frame-nav a{color:rgba(255,248,234,.76)}
      html[data-theme="dark"] .rs-frame-nav a[aria-current="page"]{color:#211a15}
      @media(max-width:380px){.rs-frame-nav a{font-size:10px;min-height:42px}.rs-frame-nav{gap:4px;padding:6px}}
      @media(prefers-reduced-motion:reduce){.rs-frame-nav,.rs-frame-nav *{transition:none!important;animation:none!important}}
    `;
    doc.head.appendChild(style);

    const path = (frame.contentWindow.location.pathname || '').split('/').pop() || 'ruang-sadar.html';
    const nav = doc.createElement('nav');
    nav.id = 'rsFrameNav';
    nav.className = 'rs-frame-nav';
    nav.setAttribute('aria-label','Navigasi Ruang Sadar Nusantara');
    nav.innerHTML = items.map(([label,href,file]) => {
      const current = path === file ? ' aria-current="page"' : '';
      return `<a href="${href}"${current}>${label}</a>`;
    }).join('');
    doc.body.appendChild(nav);
  }

  function setup(){
    const frame = document.getElementById('naikSadarFrame');
    if(!frame) return;
    frame.addEventListener('load',function(){ setTimeout(inject,60); });
    setTimeout(inject,180);
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded',setup);
  else setup();
})();
