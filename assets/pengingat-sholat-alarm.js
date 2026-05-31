(function(){
  if(window.__NS_SHOLAT_ALARM__) return;
  window.__NS_SHOLAT_ALARM__ = true;

  const STORE = {
    duration: 'nsSholatAlarmDuration',
    snooze: 'nsSholatAlarmSnooze',
    tone: 'nsSholatAlarmTone'
  };

  let audioCtx = null;
  let alarmTimer = null;
  let repeatTimer = null;
  let snoozeTimer = null;
  let activePrayer = null;
  let originalFire = null;

  function getDuration(){ return parseInt(localStorage.getItem(STORE.duration) || '60', 10); }
  function getSnooze(){ return parseInt(localStorage.getItem(STORE.snooze) || '5', 10); }
  function getTone(){ return localStorage.getItem(STORE.tone) || 'lembut'; }
  function saveSetting(key, val){ localStorage.setItem(key, String(val)); }

  function ensureAudio(){
    if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if(audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
  }

  function playChime(){
    try{
      const ctx = ensureAudio();
      const now = ctx.currentTime;
      const gain = ctx.createGain();
      const main = ctx.createOscillator();
      const high = ctx.createOscillator();
      const mode = getTone();
      main.type = 'sine';
      high.type = 'sine';
      main.frequency.value = mode === 'tegas' ? 520 : 392;
      high.frequency.value = mode === 'tegas' ? 780 : 588;
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(mode === 'tegas' ? 0.18 : 0.09, now + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.65);
      main.connect(gain); high.connect(gain); gain.connect(ctx.destination);
      main.start(now); high.start(now + 0.08);
      main.stop(now + 1.7); high.stop(now + 1.5);
    }catch(e){}
  }

  function speak(text){
    if(!('speechSynthesis' in window)) return;
    try{
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'id-ID';
      u.rate = 0.82;
      u.pitch = 0.88;
      u.volume = 0.95;
      speechSynthesis.speak(u);
    }catch(e){}
  }

  function vibrate(){ if(navigator.vibrate) navigator.vibrate([240,120,240,180,360]); }

  function css(){
    if(document.getElementById('nsSholatAlarmStyle')) return;
    const s = document.createElement('style');
    s.id = 'nsSholatAlarmStyle';
    s.textContent = `
      .alarm-settings{border-radius:30px;background:rgba(255,248,234,.9);border:1px solid var(--rs-line);box-shadow:var(--rs-shadow);padding:20px;margin:12px 0}
      .alarm-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
      .alarm-settings label{display:grid;gap:7px;color:#6f5b48;font-weight:900;font-size:13px}
      .alarm-settings select,.alarm-settings button{border:1px solid var(--rs-line);border-radius:18px;min-height:50px;padding:12px;background:rgba(255,248,234,.86);font:inherit;font-weight:850;color:var(--rs-arang)}
      .alarm-settings .primary{background:linear-gradient(145deg,#f4d88a,#b9822b);color:#211a15}
      .alarm-overlay{position:fixed;inset:0;z-index:20000;display:none;place-items:center;padding:18px;background:radial-gradient(circle at 50% 35%,rgba(244,216,138,.25),transparent 36%),rgba(33,26,21,.58);backdrop-filter:blur(10px)}
      .alarm-overlay.on{display:grid}
      .alarm-box{width:min(100%,460px);border-radius:34px;background:rgba(255,248,234,.96);border:1px solid rgba(185,130,43,.35);box-shadow:0 30px 90px rgba(0,0,0,.28);padding:24px;text-align:center;color:#211a15}
      .alarm-kicker{display:inline-flex;border-radius:999px;padding:8px 12px;background:rgba(185,130,43,.13);color:#8f3a2f;font-size:11px;font-weight:950;letter-spacing:.08em;text-transform:uppercase}
      .alarm-title{font-family:Georgia,serif;font-size:38px;line-height:1.05;color:#4b2e1f;margin:12px 0 8px}
      .alarm-orb{width:120px;height:120px;border-radius:50%;margin:16px auto;background:radial-gradient(circle at 35% 28%,#fff,#f4d88a 44%,#4f7657);box-shadow:0 0 0 16px rgba(185,130,43,.11),0 0 80px rgba(109,154,164,.25);animation:alarmPulse 2.8s ease-in-out infinite}
      .alarm-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:14px}
      .alarm-actions button{border:0;border-radius:18px;min-height:54px;font-weight:950;font:inherit}.alarm-stop{background:#8f3a2f;color:white}.alarm-snooze{background:#f4d88a;color:#211a15}
      @keyframes alarmPulse{0%,100%{transform:scale(.94)}50%{transform:scale(1.08);box-shadow:0 0 0 30px rgba(185,130,43,.08),0 0 95px rgba(109,154,164,.30)}}
      @media(max-width:620px){.alarm-grid,.alarm-actions{grid-template-columns:1fr}.alarm-title{font-size:32px}}
      @media(prefers-reduced-motion:reduce){.alarm-orb{animation:none!important}}
    `;
    document.head.appendChild(s);
  }

  function buildControls(){
    css();
    if(!document.querySelector('.alarm-settings')){
      const card = document.createElement('section');
      card.className = 'alarm-settings';
      card.innerHTML = `
        <h2 style="font-family:Georgia,serif;color:var(--rs-tanah);margin-top:0">Mode alarm aktif</h2>
        <p class="soft-note">Alarm berbunyi berulang lembut saat waktu sholat masuk sampai dihentikan, atau otomatis berhenti sesuai durasi. Bisa ditunda dengan Snooze.</p>
        <div class="alarm-grid">
          <label>Durasi alarm<select id="alarmDuration"><option value="30">30 detik</option><option value="60">1 menit</option><option value="120">2 menit</option><option value="300">5 menit</option></select></label>
          <label>Tunda alarm<select id="alarmSnooze"><option value="5">5 menit</option><option value="10">10 menit</option><option value="15">15 menit</option></select></label>
          <label>Nada alarm<select id="alarmTone"><option value="lembut">Lembut</option><option value="tegas">Lebih tegas</option></select></label>
        </div>
        <div class="btnrow"><button class="primary" id="testAlarmBtn">Tes Alarm</button><button id="unlockAudioBtn">Siapkan Audio</button></div>
        <p class="small">Agar alarm bersuara di HP, tekan “Siapkan Audio” atau “Tes Alarm” minimal sekali setelah membuka aplikasi.</p>
      `;
      const cards = document.querySelectorAll('.reminder-card');
      if(cards[1]) cards[1].after(card); else document.querySelector('main').appendChild(card);
    }

    if(!document.getElementById('nsAlarmOverlay')){
      const o = document.createElement('div');
      o.id = 'nsAlarmOverlay';
      o.className = 'alarm-overlay';
      o.innerHTML = `
        <div class="alarm-box" role="dialog" aria-modal="true" aria-label="Alarm sholat aktif">
          <span class="alarm-kicker">Alarm Sholat Sadar</span>
          <div class="alarm-orb"></div>
          <h2 class="alarm-title" id="alarmPrayerName">Waktu Sholat</h2>
          <p class="soft-note" id="alarmMessage">Waktu memanggil, batin kembali.</p>
          <div class="alarm-actions"><button class="alarm-stop" id="stopAlarmBtn">Stop Alarm</button><button class="alarm-snooze" id="snoozeAlarmBtn">Tunda</button></div>
        </div>`;
      document.body.appendChild(o);
    }

    const duration = document.getElementById('alarmDuration');
    const snooze = document.getElementById('alarmSnooze');
    const tone = document.getElementById('alarmTone');
    duration.value = String(getDuration());
    snooze.value = String(getSnooze());
    tone.value = getTone();
    duration.onchange = () => saveSetting(STORE.duration, duration.value);
    snooze.onchange = () => saveSetting(STORE.snooze, snooze.value);
    tone.onchange = () => saveSetting(STORE.tone, tone.value);
    document.getElementById('testAlarmBtn').onclick = () => startAlarm({name:'Tes Alarm',msg:'Ini contoh alarm Sholat Sadar. Waktu memanggil, batin kembali.'}, true);
    document.getElementById('unlockAudioBtn').onclick = () => { ensureAudio(); playChime(); alert('Audio alarm sudah disiapkan.'); };
    document.getElementById('stopAlarmBtn').onclick = stopAlarm;
    document.getElementById('snoozeAlarmBtn').onclick = snoozeAlarm;
  }

  function startAlarm(prayer, isTest){
    stopAlarm(false);
    activePrayer = prayer;
    const overlay = document.getElementById('nsAlarmOverlay');
    const name = document.getElementById('alarmPrayerName');
    const msg = document.getElementById('alarmMessage');
    if(name) name.textContent = prayer.name || 'Waktu Sholat';
    if(msg) msg.textContent = prayer.msg || prayer.message || 'Waktu memanggil, batin kembali.';
    if(overlay) overlay.classList.add('on');
    const text = (isTest ? '' : 'Alarm sholat aktif. ') + (prayer.name || 'Waktu sholat') + '. ' + (prayer.msg || prayer.message || 'Berhenti, hadir, tunduk, pasrah, kembali dengan damai.');
    playChime(); vibrate(); speak(text);
    repeatTimer = setInterval(function(){ playChime(); vibrate(); }, getTone()==='tegas' ? 2200 : 3200);
    alarmTimer = setTimeout(function(){ stopAlarm(); }, getDuration() * 1000);
  }

  function stopAlarm(cancelSpeech=true){
    if(repeatTimer) clearInterval(repeatTimer);
    if(alarmTimer) clearTimeout(alarmTimer);
    repeatTimer = null; alarmTimer = null;
    if(navigator.vibrate) navigator.vibrate(0);
    if(cancelSpeech && 'speechSynthesis' in window) speechSynthesis.cancel();
    const overlay = document.getElementById('nsAlarmOverlay');
    if(overlay) overlay.classList.remove('on');
  }

  function snoozeAlarm(){
    const prayer = activePrayer || {name:'Sholat',msg:'Waktu memanggil, batin kembali.'};
    stopAlarm();
    const minutes = getSnooze();
    if(snoozeTimer) clearTimeout(snoozeTimer);
    snoozeTimer = setTimeout(function(){ startAlarm(prayer, false); }, minutes * 60000);
    alert('Alarm ditunda '+minutes+' menit.');
  }

  function patchFireReminder(){
    if(typeof window.fireReminder !== 'function') return false;
    if(window.fireReminder.__alarmPatched) return true;
    originalFire = window.fireReminder;
    window.fireReminder = function(n,type){
      try{ originalFire.apply(this, arguments); }catch(e){}
      if(type === 'alarm') startAlarm(n, false);
    };
    window.fireReminder.__alarmPatched = true;
    return true;
  }

  function init(){
    buildControls();
    window.nsStartSholatAlarm = startAlarm;
    window.nsStopSholatAlarm = stopAlarm;
    if(!patchFireReminder()){
      let tries = 0;
      const t = setInterval(function(){
        tries++;
        if(patchFireReminder() || tries > 20) clearInterval(t);
      }, 150);
    }
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded',init);
  else init();
})();
