/*
Safety Engine v2
Tujuan:
- Menghadapi user kalibrasi rendah: bingung, panik, impulsif, salah klik.
- Aplikasi berkalibrasi tinggi: tidak langsung percaya klaim "aman" jika ada riwayat tanda bahaya.
- Ini bukan alat diagnosis klinis.
*/

const SafetyEngine = (() => {
  const patterns = {
    red: [
      /bunuh diri/i,
      /ingin mati/i,
      /pengen mati/i,
      /mau mati/i,
      /akhiri hidup/i,
      /mengakhiri hidup/i,
      /menyakiti diri/i,
      /melukai diri/i,
      /tidak aman/i,
      /mau mukul/i,
      /pengen mukul/i,
      /mau menyakiti orang/i,
      /pengen menyakiti orang/i
    ],
    orange: [
      /pengen hilang/i,
      /ingin hilang/i,
      /nggak ada/i,
      /tidak ada/i,
      /gak kuat hidup/i,
      /tidak kuat hidup/i,
      /tidak sanggup/i,
      /gak sanggup/i,
      /capek hidup/i,
      /transfer semua uang/i,
      /habiskan uang/i,
      /belanja semua/i,
      /jawab iya aja/i,
      /ngawasin/i,
      /diawasi/i,
      /dikejar/i,
      /mereka semua/i,
      /datangi mereka/i,
      /lawan sekarang/i,
      /konfrontasi/i,
      /kabur sekarang/i
    ],
    yellow: [
      /panik/i,
      /cemas/i,
      /takut/i,
      /gemetar/i,
      /sesak/i,
      /pusing/i,
      /bingung/i,
      /nggak ngerti/i,
      /gak ngerti/i,
      /jangan panjang/i,
      /tidak kuat baca/i,
      /gak kuat baca/i,
      /capek/i,
      /sedih/i,
      /sendirian/i
    ],
    bigDecision: [
      /transfer/i,
      /uang/i,
      /resign/i,
      /putus/i,
      /cerai/i,
      /keluar rumah/i,
      /balas wa/i,
      /chat kasar/i,
      /datangi/i,
      /lawan/i,
      /beli/i,
      /belanja/i
    ]
  };

  function matchAny(text, list){
    return list.some(rx => rx.test(text));
  }

  function assess(text, context = {}){
    const normalized = String(text || "").trim();
    const previous = context.previousRisk;
    const inCrisis = Boolean(context.crisisActive);

    let level = "GREEN";
    let label = "stabil ringan";
    let action = "Boleh lanjut journaling ringan.";
    let reason = "Tidak ada sinyal risiko tinggi yang jelas.";
    let safeMessage = "Silakan tulis pelan-pelan. Tidak perlu sempurna.";

    const hasRed = matchAny(normalized, patterns.red);
    const hasOrange = matchAny(normalized, patterns.orange);
    const hasYellow = matchAny(normalized, patterns.yellow);
    const hasBigDecision = matchAny(normalized, patterns.bigDecision);

    if(hasRed){
      level = "RED";
      label = "risiko tinggi";
      action = "Aktifkan Mode Krisis dan arahkan ke bantuan manusia.";
      reason = "Ada sinyal menyakiti diri/orang lain atau rasa tidak aman.";
      safeMessage = [
        "Kamu sedang dalam kondisi berat.",
        "Jangan sendirian dulu.",
        "Jauhkan benda berbahaya.",
        "Hubungi orang terdekat atau bantuan darurat sekarang."
      ].join("\n");
    } else if(hasOrange){
      level = "ORANGE";
      label = "risiko sedang-tinggi";
      action = "Aktifkan Mode Krisis Ringan.";
      reason = "Ada sinyal putus asa, impuls besar, paranoid, atau tindakan berisiko.";
      safeMessage = [
        "Duduk dulu.",
        "Jangan ambil keputusan besar.",
        "Hubungi satu orang nyata.",
        "Kita tenangkan 2 menit dulu."
      ].join("\n");
    } else if(hasYellow){
      level = "YELLOW";
      label = "perlu ditenangkan";
      action = "Masuk Mode Tenang.";
      reason = "Ada sinyal panik, bingung, cemas, atau tidak kuat membaca panjang.";
      safeMessage = [
        "Pelan dulu.",
        "Tarik napas.",
        "Tidak perlu jawab banyak.",
        "Pilih satu langkah kecil."
      ].join("\n");
    }

    if((inCrisis || previous?.level === "ORANGE" || previous?.level === "RED") && /aman|lanjut aja|jangan ribet|udah/i.test(normalized)){
      level = "ORANGE";
      label = "cek aman ulang";
      action = "Tahan di Mode Krisis sampai safety check lulus.";
      reason = "User mengaku aman setelah riwayat tanda bahaya; perlu verifikasi ulang.";
      safeMessage = [
        "Baik.",
        "Tapi tadi ada tanda bahaya.",
        "Kita cek aman dulu sebentar.",
        "Pilih kondisi yang paling benar."
      ].join("\n");
    }

    if(hasBigDecision && (level === "YELLOW" || level === "ORANGE" || level === "RED")){
      safeMessage += "\n\nAturan aman: keputusan uang, konflik, hubungan, kerja, atau keluar rumah ditunda dulu.";
    }

    return { level, label, action, reason, safeMessage };
  }

  function exitCrisisCheck(answer, lastRisk){
    if(answer === "with_person" && lastRisk && lastRisk.level !== "RED"){
      return {
        canExit: true,
        message: "Baik. Kamu boleh turun ke Mode Tenang. Tetap tunda keputusan besar dan hubungi bantuan jika tanda bahaya muncul lagi."
      };
    }

    if(answer === "alone"){
      return {
        canExit: false,
        message: "Kamu masih sendirian. Tetap di Mode Krisis. Kirim pesan ke satu orang terdekat atau cari tempat yang lebih aman."
      };
    }

    return {
      canExit: false,
      message: "Kalau kamu tidak yakin, kita tetap di Mode Krisis dulu. Pilih langkah kecil: duduk, napas, hubungi orang."
    };
  }

  return { assess, exitCrisisCheck };
})();
