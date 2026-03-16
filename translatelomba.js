// ========= LANGUAGE SWITCHER YANG 100% BERHASIL =========
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("langToggle");
  const options = document.getElementById("langOptions");
  const flagIcon = document.getElementById("flagIcon");
  const langText = document.getElementById("langText");
  const arrow = document.querySelector(".arrow");

  // Buka/tutup dropdown
  toggle.addEventListener("click", function (e) {
    e.stopPropagation();
    options.classList.toggle("show");
    arrow.style.transform = options.classList.contains("show")
      ? "rotate(180deg)"
      : "rotate(0deg)";
  });

  // Pilih bahasa
  document.querySelectorAll(".lang-item").forEach((item) => {
    item.addEventListener("click", function () {
      const lang = this.getAttribute("data-lang");
      const img = this.querySelector("img").src;
      const text = this.querySelector("span").textContent;

      // Update tombol utama
      flagIcon.src = img;
      langText.textContent = lang.toUpperCase();

      // Ganti bahasa di seluruh halaman
      setLanguage(lang);
      localStorage.setItem("lang", lang);

      // Tutup dropdown
      options.classList.remove("show");
      arrow.style.transform = "rotate(0deg)";
    });
  });

  // Tutup kalau klik di luar
  document.addEventListener("click", function () {
    options.classList.remove("show");
    arrow.style.transform = "rotate(0deg)";
  });

  // Muat bahasa terakhir saat halaman dibuka
  const saved = localStorage.getItem("lang") || "en";
  setLanguage(saved);

  // Update tampilan tombol sesuai bahasa yang tersimpan
  const flagUrl =
    saved === "id"
      ? "https://flagcdn.com/w40/id.png"
      : "https://flagcdn.com/w40/us.png";
  flagIcon.src = flagUrl;
  langText.textContent = saved.toUpperCase();
});

const translations = {
  i: {
    home: `Beranda`,
    comp: `Kompetisi`,
    evnt: `Seminar`,
    ocians: "Olimpiade Social & sains",
    ociansis:
      "OCIANS merupakan salah satu cabang lomba dalam rangka sweet seventeen MBI BIG FAIR yang menguji kemampuan siswa dan siswi SMP/MTs sederajat dalam bidang IPA, Matematika, dan IPS dengan cakupan mata pelajaran Matematika, Fisika, Biologi, Kimia, Geografi, Ekonomi, dan Sejarah.Yuk, bergabung dalam 17ᵗʰ MBI BIG FAIR dan buktikan bahwa kamu adalah sang juara! ",
    part: "Bagian dari MBI BIG FAIR 17",
    whatocians: "Apa itu OCIANS ?",
    next:`Bintang Tamu Selanjutnya!`,
    alexa:`Alexa Salsabila merupakan Duta SMA Nasional yang dikenal sebagai sosok inspiratif, berprestasi, dan berwawasan luas. Ia aktif berperan sebagai representasi pelajar Indonesia yang unggul tidak hanya dalam akademik, tetapi juga dalam kepemimpinan, komunikasi, dan pengembangan diri. Dengan kepribadian yang percaya diri serta kemampuan public speaking yang baik, Alexa Salsabila menjadi figur teladan bagi generasi muda untuk berani bermimpi, berkontribusi positif, dan membawa perubahan di lingkungan sekolah maupun masyarakat.`, 
    preveous:`Bintang Tamu Sebelumnya`,
    nembelas:`Hadir Pada MBF ke-16.`,
    limolas:`Hadir Pada MBF ke-15.`,
    patbelas:`Hadir Pada MBF ke-14.`,
    juara1: "Juara 1",
    juara2: "Juara 2",
    juara3: "Juara 3",
    harapan1: "Juara Harapan 1",
    harapan2: "Juara Harapan 2",
    champion: "🏆 Hadiah",
    yuwilget: "Kamu Akan Mendapatkan:",
    score: "Skor Terbanyak",
    y0: "🥇 Medali",
    yuang11:"💵 Uang Pembinaan Rp1.000.000,00-",
    yuang00:"💵 Uang Pembinaan Rp750.000,00-",
    yuang22:"💵 Uang Pembinaan Rp500.000,00-",
    duekfesban1:"💵 Uang Pembinaan Rp2.500.000,00-",
    duekfesban2:"💵 Uang Pembinaan Rp2.000.000,00-",
    duekfesban3:"💵 Uang Pembinaan Rp1.500.000,00-",
    yuang01: "💵 Uang Pembinaan Rp1.000.000,00-",
    yuang0: "💵 Uang Pembinaan Rp750.000,00-",
    yuang1: "💵 Uang Pembinaan Rp1.500.000,00-",
    yuang2: "💵 Uang Pembinaan Rp1.250.000,00-",
    yuang3: "💵 Uang Pembinaan Rp1.000.000,00-",
    yuang4: "💵 Uang Pembinaan Rp750.000,00-",
    yuang5: "💵 Uang Pembinaan Rp500.000,00-",
    yuang6: "💵 Uang Pembinaan Rp500.000,00-",
    yuang7: "💵 Uang Pembinaan Rp1.500.000,00-",
    y3: "🎓 Sertifikat",
    y4: "🎁 Merchandise",
    allinfo: "SEMUA INFORMASI TENTANG LOMBA INI",
    guideline: "Panduan Teknis",
    guideline2: "lihat Teknis",
    twibon: "Dapatkan Twibbon",
    chat: "Hubungi Sekarang",
    fasilitas: "🎁 Fasilitas",
    f1: "✅ Sertifikat Peserta",
    f2: "✅ ID Card",
    f3: "✅ Goodie Bag",
    f4: "✅ Gantungan Kunci",
    f5: "✅ Note Book",
    f6: "✅ Stiker",
    f7: "✅ ATK 17TH MBF",
    f8: "✅ Jajanan Dan Sejenisnya",
    regis: "📅 Pembukaan Pendaftaran",
    regis2: "01 Desember 2025 - 04 April 2026",
    regis3: "Daftar Secepatnya Sebelum Pendaftaran Ditutup  !",
    regis4: "Daftar Sekarang !",
    lokasi: "📍 Lokasi Perlombaan",
    kontak: "Kontak",
    sosmed: "Sosial Media",
    mbf: "MBI Big Fair (MBF) adalah acara tahunan yang diselenggarakan oleh MBI Amanatul Ummah yang berlokasi di Pacet, Mojokerto. Selama hampir 16 tahun, MBI Big Fair secara konsisten menyajikan berbagai kompetisi dan acara spektakuler setiap tahunnya. Acara ini juga dimeriahkan oleh penampilan dan kreasi menakjubkan dari siswa-siswi MBI, yang tak pernah gagal untuk mengesankan.",
    olimislam: "Olimpiade Islam",
    whatisirhamna: "Apa itu IRHAMNA ?",
    irhamna2:
      "IRHAMNA adalah olimpiade PAI pada perlombaan 17th MBI BIG FAIR yang menguji pengetahuan peserta dalam bidang-bidang ilmu pengetahuan agama Islam seperti Al-Quran, fiqih, sejarah Islam, bahasa Arab, dan lain lain. IRHAMNA terdiri dari 3 babak, yaitu penyisihan, semifinal, dan final. Mari bergabung bersama MBI BIG FAIR 17 dan jadilah juara!",
    erudite: "OLIMPIADE BAHASA INGGRIS",
    erudite2:
      "ERUDITE adalah salah satu cabang lomba dalam rangkaian acara 17th MBI BIG FAIR yang menghadirkan kompetisi Bahasa Inggris dalam bentuk turnamen seru dan menantang. Di ajang ini, peserta akan diuji dalam empat aspek kemampuan utama: listening, reading, grammar, dan speaking. Melalui tiga babak yang penuh pengalaman berkesan, yaitu penyisihan dengan ujian tertulis, semifinal dengan fun games interaktif, hingga final berupa prestigious English debate. Mari bergabung bersama 17th MBI BIG FAIR dan jadilah juara!",
    eruditeis: "Apa itu ERUDITE ?",
    storm: "BERCERITA BAHASA INGGRIS",
    storm2:
      "STORM (Story Telling Competition of Nurul Ummah) adalah salah satu perlombaan di MBI BIG FAIR 17 berupa bercerita dalam bahasa inggris. Lomba ini terdiri dari 2 babak, yaitu Babak Penyisihan dan Babak Final. STORM menguji kecakapan peserta dalam menyampaikan cerita berbahasa inggris dengan kriteria penilaian seperti Pronounciatiton, Grammar, Performance, dan Costume.",
    stormis: "Apa itu STORM ?",
    escimo: "PIDATO BAHASA INGGRIS",
    escimo2:
      "ESCIMO adalah salah satu perlombaan di 17th MBI BIG FAIR berupa pidato Bahasa Inggris. Lomba ini terdiri dari 2 babak, yaitu penyisihan dan final. ESCIMO menguji kecakapan peserta dalam menyampaikan pidato berbahasa Inggris dengan kriteria penilaian seperti pronounciation, grammar, content, performance, dan comprehension. Mari bergabung bersama 17th MBI BIG FAIR dan jadilah juara!",
    escimois: "Apa itu ESCIMO ?",
    barikna: "BACA KITAB KUNING",
    bariknais: "Apa itu BARIKNA ?",
    barikna2:
      "BARIKNA merupakan salah satu cabang lomba yang diselenggarakan dalam perhelatan MBI Big Fair 17 berupa Musabaqoh Qiroatul Kutub. Lomba ini terdiri dari 2 babak yaitu penyisihan dan final. Lomba BARIKNA menguji kemampuan para peserta dalam membaca kitab Matan Taqrib sesuai kaidah gramatika bahasa Arab (Nahwu dan Shorof) serta aspek lain yang meliputi ketepatan membaca, penjelasan, dan fiqih pengembangan. Mari bergabung dengan MBI Big Fair 17 dan jadilah juara!  ",
    mutaqina: "MEMBACA AL-QURAN",
    mutaqinais: "Apa itu MUTTAQINA ?",
    mutaqina2:
      "MUTTAQINA adalah salah satu perlombaan di 17th MBI Big Fair berupa MTQ. Lomba ini terdiri dari 2 babak, yaitu penyisihan dan final. MUTTAQINA menguji kemampuan peserta dalam tilawah ayat Al-Qur’an dengan pedoman seperti nada, fashohah, dan tajwid. Mari bergabung bersama 17th MBI BIG FAIR dan jadilah juara!",
    qorona: "BERNYANYI BAHASA ARAB",
    qoronais: "Apa itu QORONA ?",
    qorona2:
      "QORONA adalah salah satu perlombaan di 17th MBI BIG FAIR berupa lomb bernyanyi dalam bahasa Arab. Lomba ini terdiri dari 2 babak, yaitu penyisihan dan final. QORONA menguji kemampuan peserta dalam bernyanyi berbahasa Arab dengan kriteria penilaian seperti pronounciation, melody, dan expression. Mari bergabung bersama MBI BIG FAIR 17 dan jadilah juara!",
    fesban: "Kompetisi Kepemimpinan Indonesia",
    fesbanis: "Apa itu ILC ?",
    fesban2:
      "Indonesian Leadership Competition (ILC) Merupakan Kompetisi Kepemimpinan pada MBI BIG FAIR ke-17 dengan Mengundang Pembicara yang Berpengalaman di Bidang Kepemimpinan yang Ditujukan Kepada Organisator-organisator Sekolah Tingkat SMP/MTs untuk Menguji Kecakapan dalam Berorganisasi, Mari Bergabung Bersama MBI BIG FAIR ke-17 dan Jadilah Juara!",
    qabilna: "LOMBA KALIGRAFI",
    qabilnais: "Apa itu QABILNA ?",
    qabilna2:
      "QABILNA Salah satu perlombaan berupa kaligrafi kontemporer. Lomba ini hanya terdiri dari satu babak. Qobilna menguji kemahiran peserta dalam menulis indah ayat Al-Qur’an dan kaidah-kaidah seperti kebenaran lafadz, kerapian, keindahan dan kreativitas. Karya lebih fleksibel dibanding jenis kaligrafi yang lain karena peserta dibebaskan berkreasi sesuka hati.",
    fesbani: "Apa itu Fesban?",
    fesban1:
      "FESBAN adalah salah satu perlombaan di MBI BIG FAIR XVII. Lomba ini hanya terdiri dari satu babak. FESBAN menguji kemahiran peserta dalam menyenandungkan sholawat diiringi dengan musik banjari sesuai dengan kriteria penilaian vocal, music banjari, adab dan syair, serta lagu jingle. Mari bergabung bersama MBI BIG FAIR XVII dan jadilah juara!",
  },
  e: {
    home: `Home`,
    comp: `Competitions`,
    evnt: `Event`,
    ocians: "Social & science olympiad",
    ociansis:
      "OCIANS is one of the competition branches in the sweet seventeen MBI BIG FAIR which tests the abilities of junior high school students/equivalent in the fields of science, mathematics, and social studies covering subjects of Mathematics, Physics, Biology, Chemistry, Geography, Economics, and History. Come on, join the 17ᵗʰ MBI BIG FAIR and prove that you are the champion! ",
    part: "Part of MBI BIG FAIR 17",
    whatocians: "What Is OCIANS ?",
    next:`Next Guest Star!`,
    alexa:`Alexa Salsabila is a National High School Ambassador known as an inspiring, accomplished, and insightful figure. She actively represents Indonesian students who excel not only in academics but also in leadership, communication, and self-development. With her confident personality and excellent public speaking skills, Alexa Salsabila is a role model for the younger generation, encouraging them to dream boldly, contribute positively, and bring about change in their schools and communities.`,
    preveous:`Preveous Guest Star`,
    nembelas:`Present at the 16th MBF.`,
    limolas:`Present at the 15th MBF.`,
    patbelas:`Present at the 14th MBF.`,
    juara1: "1st Rank",
    juara2: "2nd Rank",
    juara3: "3rd Rank",
    harapan1: "1st Runner Up",
    harapan2: "2nd Runner Up",
    champion: "🏆 Champion Prize",
    yuwilget: "You Will Get:",
    score: "Top Scorer",
    y0: "🥇 Trophy",
    yuang11:"💵 Uang Pembinaan Rp1.000.000,00-",
    yuang00:"💵 Uang Pembinaan Rp750.000,00-",
    yuang22:"💵 Uang Pembinaan Rp500.000,00-",
    duekfesban1:"💵 Uang Pembinaan Rp2.500.000,00-",
    duekfesban2:"💵 Uang Pembinaan Rp2.000.000,00-",
    duekfesban3:"💵 Uang Pembinaan Rp1.500.000,00-",
    yuang01: "💵 Choaching Money Rp1.000.000,00-",
    yuang0: "💵 Choaching Money Rp750.000,00-",
    yuang1: "💵 Choaching Money Rp1.500.000,00-",
    yuang2: "💵 Choaching Money Rp1.250.000,00-",
    yuang3: "💵 Choaching Money Rp1.000.000,00-",
    yuang4: "💵 Choaching Money Rp750.000,00-",
    yuang5: "💵 Choaching Money Rp500.000,00-",
    yuang6: "💵 Choaching Money Rp500.000,00-",
    yuang7: "💵 Choaching Money Rp1.500.000,00-",
    y3: "🎓 Sertificate",
    y4: "🎁 Merchandise",
    allinfo: "ALL INFORMATION ABOUT THIS COMPETITION",
    guideline: "Technical Guidelines",
    guideline2: "View Guidelines",
    twibon: "Get Twibbon",
    chat: "Chat Now",
    fasilitas: "🎁 Facilities",
    f1: "✅ Participant Sertificate",
    f2: "✅ ID Card",
    f3: "✅ Goodie Bag",
    f4: "✅ Key Chain",
    f5: "✅ Note Book",
    f6: "✅ Sticker",
    f7: "✅ Writing Tools 17TH MBF",
    f8: "✅ Snack And Beverage",
    regis: "📅 Open Registation",
    regis2: "01 Desember 2025 - 04 April 2026",
    regis3: "Register immediately, before registration closes  !",
    regis4: "Register Now !",
    lokasi: "📍 Competition Venue",
    kontak: "Contact",
    sosmed: "Social Media",
    mbf: "MBI Big Fair (MBF) is an annual event organized by MBI Amanatul Ummah located in Pacet, Mojokerto. For nearly 16 years, MBI Big Fair has consistently presented a variety of competitions and spectacular events each year. The event is also enlivened by amazing performances and creations from MBI students, which never fail to impress.",
    olimislam: "Islamic Olympiad",
    whatisirhamna: "What Is IRHAMNA ?",
    irhamna2:
      "IRHAMNA is an Islamic PAI olympiad in the 17th MBI BIG FAIR competition that tests participants' knowledge in the fields of Islamic religious sciences such as the Quran, fiqh, Islamic history, Arabic language, and others. IRHAMNA consists of 3 rounds, namely preliminary, semifinal, and final. Let's join MBI BIG FAIR 17 and be the champion!",
    erudite: "ENGLISH OLYMPIAD",
    erudite2:
      "ERUDITE is one of the competition branches in the 17th MBI BIG FAIR event that presents an English competition in the form of an exciting and challenging tournament. In this event, participants will be tested in four main skills: listening, reading, grammar, and speaking. Through three memorable rounds, namely the preliminary round with a written exam, the semifinal with interactive fun games, and the final in the form of a prestigious English debate. Let's join the 17th MBI BIG FAIR and be the champion!",
    eruditeis: "What Is ERUDITE ?",
    storm: "ENGLISH STORY TELLING",
    storm2:
      "STORM (Story Telling Competition of Nurul Ummah) is one of the competitions in MBI BIG FAIR 17 in the form of storytelling in English. This competition consists of 2 rounds, namely the Preliminary Round and the Final Round. STORM tests the participants' ability to deliver stories in English with assessment criteria such as Pronunciation, Grammar, Performance, and Costume.",
    stormis: "What Is STORM ?",
    escimo: "ENGLISH SPEECH",
    escimo2:
      "ESCIMO is one of the competitions in the 17th MBI BIG FAIR in the form of English speeches. This competition consists of 2 rounds, namely the preliminary and final rounds. ESCIMO tests the participants' ability to deliver speeches in English with assessment criteria such as pronunciation, grammar, content, performance, and comprehension. Let's join the 17th MBI BIG FAIR and be the champion!",
    escimois: "What Is ESCIMO ?",
    barikna: "READ THE YELLOW BOOK",
    bariknais: "What Is BARIKNA ?",
    barikna2:
      "BARIKNA is one of the competition branches held in the MBI Big Fair 17 event in the form of Musabaqoh Qiroatul Kutub. This competition consists of 2 rounds, namely preliminary and final. The BARIKNA competition tests the participants' ability to read the Matan Taqrib book according to the grammatical rules of the Arabic language (Nahwu and Shorof) as well as other aspects including reading accuracy, explanation, and fiqh development. Let's join MBI Big Fair 17 and be the champion!  ",
    mutaqina: "READING THE ISLAMIC SCRIPTURES",
    mutaqinais: "What Is MUTTAQINA ?",
    mutaqina2:
      "MUTTAQINA is one of the competitions in the 17th MBI BIG FAIR in the form of MTQ. This competition consists of 2 rounds, namely preliminary and final. MUTTAQINA tests the participants' ability in reciting verses of the Quran with guidelines such as tone, fashohah, and tajwid. Let's join the 17th MBI BIG FAIR and be the champion!",
    qorona: "ARABIC SINGING",
    qoronais: "What Is QORONA ?",
    qorona2:
      "QORONA is one of the competitions in the 17th MBI BIG FAIR in the form of singing in Arabic. This competition consists of 2 rounds, namely preliminary and final. QORONA tests the participants' ability to sing in Arabic with assessment criteria such as pronunciation, melody, and expression. Let's join the 17th MBI BIG FAIR and be the champion!",
    fesban: "Indonesian Leadership Competition",
    fesbanis: "What Is ILC ?",
    fesban2:
      "Indonesian Leadership Competition (ILC) is a Leadership Competition at the 17th MBI BIG FAIR by inviting experienced speakers in the field of leadership aimed at junior high school/Islamic junior high school school organizers to test their organizational skills. Let's join the 17th MBI BIG FAIR and be a champion!",
    qabilna: "CALLIGRAPHY COMPETITION",
    qabilnais: "What Is QABILNA ?",
    qabilna2:
      "QABILNA is a contemporary calligraphy competition. This competition consists of one round. QABILNA tests the participants' proficiency in beautifully writing verses from the Quran and rules such as correct pronunciation, neatness, beauty, and creativity. The works are more flexible compared to other types of calligraphy because participants are free to create as they wish.",
    fesbani: "What is Fesban?",
    fesban1:
      "FESBAN is one of the competitions in MBI BIG FAIR XVII. This competition consists of one round. FESBAN tests the participants' proficiency in chanting sholawat accompanied by banjari music according to assessment criteria such as vocals, banjari music, manners and lyrics, and jingles. Let's join MBI BIG FAIR XVII and be the champion!",
  },
};

// === SET LANGUAGE FUNCTION ===
function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  document.querySelectorAll("[data-lang]").forEach((el) => {
    const key = el.getAttribute("data-lang");
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });

  document.getElementById("id-btn").classList.toggle("active", lang === "id");
  document.getElementById("en-btn").classList.toggle("active", lang === "en");
}

window.onload = function () {
  const savedLang = localStorage.getItem("lang") || "en";
  setLanguage(savedLang);
};

/*animasi zoom in*/
document.addEventListener("DOMContentLoaded", () => {
  const zoomTexts = document.querySelectorAll(".zoom-text");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.3 }
  );

  zoomTexts.forEach((text) => observer.observe(text));
});
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("promo-popup");

  setTimeout(() => {
    popup.classList.add("active");
  }, 4000);

  popup.addEventListener("click", () => {
    popup.classList.remove("active");
  });
});

/*animasi set 1 */
// Set awal
const cards = document.querySelectorAll(".card");
const overlay = document.getElementById("cardOverlay");
const cardTitle = document.getElementById("cardTitle");
const cardImage = document.getElementById("cardImage");
const cardDesc = document.getElementById("cardDesc");
const closeBtn = document.querySelector("#cardOverlay .close-btn");

let currentLang = localStorage.getItem("lang") || "id";

// === Fungsi Buka Card ===
cards.forEach((card) => {
  card.addEventListener("click", () => {
    const imgSrc = card.querySelector("img").src;
    const title = card.getAttribute(`data-title-${currentLang}`);
    const desc = card.getAttribute(`data-desc-${currentLang}`);

    cardTitle.textContent = title;
    cardImage.src = imgSrc;
    cardDesc.textContent = desc;

    overlay.dataset.cardType = card.classList.contains("left")
      ? "left"
      : card.classList.contains("right")
      ? "right"
      : "middle";

    overlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  });
});

// === Fungsi Tutup Card ===
closeBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
  document.body.style.overflow = "auto";
});

// === Fungsi Ganti Bahasa ===
window.setLanguage = function (lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);

  document.getElementById("id-btn").classList.toggle("active", lang === "id");
  document.getElementById("en-btn").classList.toggle("active", lang === "en");

  updateLanguage(lang);

  // Jika overlay sedang terbuka, update teksnya
  const openCardType = overlay.dataset.cardType;
  if (!overlay.classList.contains("hidden") && openCardType) {
    const card = document.querySelector(`.card.${openCardType}`);
    if (card) {
      cardTitle.textContent = card.getAttribute(`data-title-${lang}`);
      cardDesc.textContent = card.getAttribute(`data-desc-${lang}`);
    }
  }

  if (window.restartTypingAnimation) restartTypingAnimation(lang);
};
// === Atur Tombol Aktif Saat Load Awal ===
window.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("id-btn")
    .classList.toggle("active", currentLang === "id");
  document
    .getElementById("en-btn")
    .classList.toggle("active", currentLang === "en");
});

document.addEventListener("DOMContentLoaded", () => {
  const letters = "0123456789";

  function hackerEffect(element) {
    const originalText = element.innerText;
    let iteration = 0;
    clearInterval(element._interval); // biar gak tumpang tindih

    element._interval = setInterval(() => {
      element.innerText = originalText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return originalText[index];
          }
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iteration >= originalText.length) {
        clearInterval(element._interval);
        element.innerText = originalText; // balikin ke normal
      }
      iteration += 1 / 2; // atur kecepatan (semakin kecil semakin lambat)
    }, 50);
  }

  // pakai IntersectionObserver biar jalan saat di-scroll masuk layar
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          hackerEffect(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  ); // minimal 50% elemen kelihatan

  document.querySelectorAll(".box h3").forEach((h3) => {
    observer.observe(h3);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.querySelector(".timeline");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          timeline.classList.add("active");
          observer.unobserve(timeline); // jalankan sekali saja
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(timeline);
});
// Data hadiah (Prizepool) untuk SEMUA LOMBA dengan hadiah yang berbeda
const allPrizepools = {
  // 1. MATEMATIKA (Hadiah Paling Besar)
  matematika: [
    { rank: "Juara 1 (1st Place)", amount: "Rp. 1.500.000" },
    { rank: "Juara 2 (2nd Place)", amount: "Rp. 1.250.000" },
    { rank: "Juara 3 (3rd Place)", amount: "Rp. 1.000.000" },
    { rank: "1st Runner Up", amount: "Rp. 750.000" },
    { rank: "2nd Runner Up", amount: "Rp. 500.000" },
  ],
  // 2. FISIKA (Hadiah Menengah)
  fisika: [
    { rank: "Juara 1 (1st Place)", amount: "Rp. 1.000.000" },
    { rank: "Juara 2 (2nd Place)", amount: "Rp. 750.000" },
    { rank: "Juara 3 (3rd Place)", amount: "Rp. 500.000" },
    { rank: "1st Runner Up", amount: "Rp. 250.000" },
  ],
  // 3. KIMIA (Hadiah Agak Kecil)
  kimia: [
    { rank: "Juara 1 (1st Place)", amount: "Rp. 1.000.000" },
    { rank: "Juara 2 (2nd Place)", amount: "Rp. 750.000" },
    { rank: "Juara 3 (3rd Place)", amount: "Rp. 500.000" },
    { rank: "1st Runner Up", amount: "Rp. 250.000" },
    { rank: "2nd Runner Up", amount: "Rp. 150.000" },
  ],
  // 4. BIOLOGI (Hadiah Sama dengan Kimia)
  biologi: [
    { rank: "Juara 1 (1st Place)", amount: "Rp. 2.500.000" },
    { rank: "Juara 2 (2nd Place)", amount: "Rp. 2.000.000" },
    { rank: "Juara 3 (3rd Place)", amount: "Rp. 1.500.000" },
    { rank: "1st Runner Up", amount: "Rp. 250.000" },
    { rank: "2nd Runner Up", amount: "Rp. 150.000" },
  ],
};

// Urutan Lomba dan Kunci Data
const eventKeys = ["matematika", "fisika", "kimia", "biologi"];
const totalEvents = eventKeys.length;

// Inisialisasi index rank saat ini untuk setiap event (array)
// Kita buat 4 elemen, semuanya dimulai dari index 0 (Juara 1)
const currentRankIndices = [0, 0, 0, 0];

// --- FUNGSI NAVIGASI RANK (DI DALAM KARTU) ---

/**
 * Fungsi untuk menampilkan hadiah lomba tertentu
 * @param {number} eventId - Index lomba (0, 1, 2, atau 3)
 */
function displayCurrentRank(eventId) {
  const eventKey = eventKeys[eventId]; // Dapatkan kunci data (misal: 'matematika')
  const prizeStructure = allPrizepools[eventKey]; // Dapatkan data prizepool untuk lomba ini
  const currentRankIndex = currentRankIndices[eventId];
  const currentPrize = prizeStructure[currentRankIndex];

  // Ambil elemen spesifik menggunakan ID unik (contoh: rank-text-0, prize-amount-1)
  const rankTextElement = document.getElementById(`rank-text-${eventId}`);
  const prizeAmountElement = document.getElementById(`prize-amount-${eventId}`);

  if (rankTextElement && prizeAmountElement) {
    rankTextElement.textContent = currentPrize.rank;
    prizeAmountElement.textContent = currentPrize.amount;

    // Tambahkan animasi visual
    prizeAmountElement.classList.add("fade-in");
    setTimeout(() => {
      prizeAmountElement.classList.remove("fade-in");
    }, 500);
  }
}

// Tambahkan event listener untuk semua tombol panah rank
document.querySelectorAll(".nav-btn").forEach((button) => {
  button.addEventListener("click", (e) => {
    const eventId = parseInt(e.currentTarget.getAttribute("data-event-id"));
    const isNext = e.currentTarget.classList.contains("next-btn");

    // Dapatkan struktur hadiah untuk event ini
    const eventKey = eventKeys[eventId];
    const prizeStructure = allPrizepools[eventKey];
    const totalRanks = prizeStructure.length;

    let newIndex = currentRankIndices[eventId];

    if (isNext) {
      // Geser ke depan
      newIndex = (newIndex + 1) % totalRanks;
    } else {
      // Geser ke belakang
      newIndex = (newIndex - 1 + totalRanks) % totalRanks;
    }

    // Simpan index baru
    currentRankIndices[eventId] = newIndex;

    // Tampilkan rank yang baru
    displayCurrentRank(eventId);
  });
});

// --- INISIALISASI ---

document.addEventListener("DOMContentLoaded", () => {
  // Tampilkan rank awal (Juara 1) untuk semua event saat dimuat
  for (let i = 0; i < totalEvents; i++) {
    displayCurrentRank(i);
  }

  // Tambahkan style animasi (dari kode sebelumnya)
  const style = document.createElement("style");
  style.textContent = `
        .fade-in {
            animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
            from { opacity: 0.5; transform: translateY(5px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
  document.head.appendChild(style);
});