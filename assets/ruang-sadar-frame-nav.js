(function(){
  if(window.__RUANG_SADAR_FRAME_NAV__) return;
  window.__RUANG_SADAR_FRAME_NAV__ = true;

  const items = [
    ['Gerbang','ruang-sadar.html?v=1','ruang-sadar.html'],
    ['Cermin','cermin-diri.html?v=1','cermin-diri.html'],
    ['Napas','ruang-napas.html?v=1','ruang-napas.html'],
    ['999','ritme-super-999-panduan.html?v=4','ritme-super-999-panduan.html'],
    ['Waktu','pengingat-sholat.html?v=1','pengingat-sholat.html'],
    ['Tanya','ruang-tanya.html?v=1','ruang-tanya.html'],
    ['Progres','dashboard-kesadaran.html?v=1','dashboard-kesadaran.html'],
    ['Sholat','sholat-tangga-kesadaran.html?v=rs1','sholat-tangga-kesadaran.html'],
    ['Peta','peta-laku-harian.html?v=1','peta-laku-harian.html'],
    ['Lontar','pusat-lontar-sadar.html?v=1','pusat-lontar-sadar.html'],
    ['Rapi','ruang-rapi.html?v=1','ruang-rapi.html']
  ];

  function inject(){
    const frame = document.getElementById('naikSadarFrame');
    if(!frame) return;
    let doc;
    try{ doc = frame.contentDocument || frame.contentWindow.document; }catch(e){ return; }
    if(!doc || !doc.body) return;

    if(!doc.getElementById('rsFrameNavStyle')){
      const style = doc.createElement('style');
      style.id = 'rsFrameNavStyle';
      style.textContent = `
        body{padding-bottom:134px!important}
        .ns-cultural-shell{padding-bottom:150px!important}
        .rs-frame-nav{position:fixed;left:50%;bottom:calc(10px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);z-index:9998;width:min(780px,calc(100% - 14px));display:grid;grid-template-columns:repeat(11,1fr);gap:3px;padding:7px;border-radius:24px;background:rgba(255,248,234,.92);border:1px solid rgba(75,46,31,.16);box-shadow:0 18px 44px rgba(75,46,31,.18);backdrop-filter:blur(10px)}
        .rs-frame-nav a{min-height:44px;display:flex;align-items:center;justify-content:center;text-align:center;border-radius:16px;text-decoration:none;color:#6f5b48;font-size:9px;font-weight:950;letter-spacing:.01em;line-height:1.05}
        .rs-frame-nav a[aria-current="page"]{background:linear-gradient(145deg,#f4d88a,#b9822b);color:#211a15;box-shadow:0 8px 18px rgba(185,130,43,.18)}
        html[data-theme="dark"] body.rs-body{color:#fff8ea!important;background:radial-gradient(circle at 16% 8%,rgba(185,130,43,.13),transparent 26%),radial-gradient(circle at 88% 14%,rgba(109,154,164,.10),transparent 30%),linear-gradient(150deg,#15100d,#241910 60%,#0d0a08)!important}
        html[data-theme="dark"] .ns-gapura-hero,html[data-theme="dark"] .ns-gunungan-panel,html[data-theme="dark"] .ns-lontar-card,html[data-theme="dark"] .ns-sajadah-card,html[data-theme="dark"] .ns-ritual-step,html[data-theme="dark"] .ns-batin-note,html[data-theme="dark"] .mirror-card,html[data-theme="dark"] .napas-panel,html[data-theme="dark"] .rapi-card,html[data-theme="dark"] .release-card,html[data-theme="dark"] .check-card,html[data-theme="dark"] .reminder-card,html[data-theme="dark"] .next-box,html[data-theme="dark"] .dash-card,html[data-theme="dark"] .tanya-card{background:rgba(36,25,18,.90)!important;border-color:rgba(244,216,138,.18)!important;box-shadow:0 18px 48px rgba(0,0,0,.32)!important;color:#fff8ea!important}
        html[data-theme="dark"] .rs-title,html[data-theme="dark"] h1,html[data-theme="dark"] h2,html[data-theme="dark"] h3,html[data-theme="dark"] b{color:#f4d88a!important}
        html[data-theme="dark"] .rs-sub,html[data-theme="dark"] p,html[data-theme="dark"] span,html[data-theme="dark"] li,html[data-theme="dark"] label{color:rgba(255,248,234,.78)!important}
        html[data-theme="dark"] .rs-card-link,html[data-theme="dark"] .lontar-link,html[data-theme="dark"] .laku-card,html[data-theme="dark"] .release-link,html[data-theme="dark"] .check-row,html[data-theme="dark"] .journal,html[data-theme="dark"] .ritual-step,html[data-theme="dark"] .check,html[data-theme="dark"] .time-row,html[data-theme="dark"] .voice-item,html[data-theme="dark"] .item,html[data-theme="dark"] .empty,html[data-theme="dark"] .history-item,html[data-theme="dark"] .prompt-box{background:rgba(255,248,234,.07)!important;border-color:rgba(244,216,138,.16)!important;color:#fff8ea!important}
        html[data-theme="dark"] textarea,html[data-theme="dark"] input,html[data-theme="dark"] select,html[data-theme="dark"] button{background:rgba(255,248,234,.08)!important;color:#fff8ea!important;border-color:rgba(244,216,138,.18)!important}
        html[data-theme="dark"] .rs-frame-nav{background:rgba(33,26,21,.94);border-color:rgba(244,216,138,.18);box-shadow:0 18px 44px rgba(0,0,0,.34)}
        html[data-theme="dark"] .rs-frame-nav a{color:rgba(255,248,234,.76)!important}
        html[data-theme="dark"] .rs-frame-nav a[aria-current="page"]{color:#211a15!important;background:linear-gradient(145deg,#f4d88a,#b9822b)!important}
        @media(max-width:430px){.rs-frame-nav a{font-size:8px;min-height:40px}.rs-frame-nav{gap:2px;padding:6px;border-radius:22px}}
        @media(max-width:390px){.rs-frame-nav{grid-template-columns:repeat(6,1fr)}body{padding-bottom:178px!important}.ns-cultural-shell{padding-bottom:198px!important}}
        @media(prefers-reduced-motion:reduce){.rs-frame-nav,.rs-frame-nav *{transition:none!important;animation:none!important}}
      `;
      doc.head.appendChild(style);
    }

    const path = (frame.contentWindow.location.pathname || '').split('/').pop() || 'ruang-sadar.html';
    let nav = doc.getElementById('rsFrameNav');
    if(!nav){
      nav = doc.createElement('nav');
      nav.id = 'rsFrameNav';
      nav.className = 'rs-frame-nav';
      nav.setAttribute('aria-label','Navigasi Ruang Sadar Nusantara');
      doc.body.appendChild(nav);
    }
    nav.innerHTML = items.map(([label,href,file]) => {
      const current = path === file ? ' aria-current="page"' : '';
      return `<a href="${href}"${current}>${label}</a>`;
    }).join('');
  }

  function setup(){
    const frame = document.getElementById('naikSadarFrame');
    if(!frame) return;
    frame.addEventListener('load',function(){ setTimeout(inject,80); });
    setTimeout(inject,200);
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded',setup);
  else setup();
})();