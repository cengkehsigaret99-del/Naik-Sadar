/* Panel kontrol lama dinonaktifkan.
   Alasan: pada mobile panel ini dapat menutup konten halaman.
   File dipertahankan sebagai no-op agar halaman lama yang masih memanggilnya tidak error. */
(function(){
  window.__NUSANTARA_CONTROL_PANEL_DISABLED__ = true;
  function removeOldPanel(){
    ['#nsControlPanel','#nsControlButton','#nsPanelTheme','#nsPanelMusic','.helpfloat','.float','[data-control-panel]'].forEach(function(sel){
      document.querySelectorAll(sel).forEach(function(el){ el.remove(); });
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', removeOldPanel);
  else removeOldPanel();
  setInterval(removeOldPanel, 1000);
})();