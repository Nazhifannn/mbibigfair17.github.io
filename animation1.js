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

// === TRANSLATION SYSTEM ===
const translations = {
  E: {
    open: `Open the competition card to see further details or register directly!`,
    ready: `Ready to Compete?`,
    mbfth: `Register now and be part of this challenge.
Open the competition card to see details and register!`,
    olim: `OLYMPIC`,
    inggris: "ENGLISH",
    arab: "Arabic",
    kompetisi: `COMPETITIONS`,
    regis: `Register Now`,
    ocians: `Olimpiad of Social & Science`,
    regis1: `Register Now`,
    regis2: `Register Now`,
    regis3: `Register Now`,
    regis4: `Register Now`,
    regis5: `Register Now`,
    regis6: `Register Now`,
    regis7: `Register Now`,
    regis8: `Register Now`,
    regis9: `Register Now`,
    more: `More Info`,
    more1: `More Info`,
    more2: `More Info`,
    more3: `More Info`,
    more4: `More Info`,
    more5: `More Info`,
    more6: `More Info`,
    more7: `More Info`,
    more8: `More Info`,
    more9: `More Info`,
    eng: `ENGLISH`,
    kompetisi1: `COMPETITIONS`,
    arab: `ARABIC`,
    kompetisi2: `COMPETITIONS`,
    spes: `SPECIALS`,
    kompetisi3: `COMPETITIONS`,
    mbf: `17ᵗʰ MBI BIG FAIR`,
    tmbfh: `17ᵗʰ MBI BIG FAIR`,
    ththmbf: `17ᵗʰ MBI BIG FAIR`,
    irhamna: `Islamic Olympiad`,
    erudite: `English Olympiad`,
    storm: `Story Telling`,
    escimo: `English Speech`,
    akrimna: `Arabic Speech`,
    muttaqina: `Recite the holy Qur'an`,
    barikna: `Read The Yellow Book`,
    qorona: `Sing in Arabic`,
    ocians: "Social And Science Olympiad",
    ocians2: "Olimpiad Of Social And Science",
    register: "Register Now",
    info: "More Info",
    islam: "Islamic Olimpiad",
    english: "English Olimpiad",
    storytel: "Story Telling",
    qobilna: "Calligraphy Creation",
    ket: "© 2025 MBF XVII · MBI Amanatul Ummah Created by IT Team of MBF XVII · All rights reserved",
    kontak: "contact",
    sosmed: "Social Media",
    olimislam: "ISLAMIC OLYMPIAD",
    leader: `Organizational Leadership    `,
    komleader: `COMPETITION`,
    ilc: `Organizational Leadership`,
    titleilc: `Organization Competition`,
    mbf: "MBI Big Fair (MBF) is an annual event organized by MBI Amanatul Ummah located in Pacet, Mojokerto. For nearly 16 years, MBI Big Fair has consistently presented a variety of competitions and spectacular events each year. The event is also enlivened by amazing performances and creations from MBI students, which never fail to impress.",
    mbfl: "MBI Big Fair (MBF) is an annual event hosted by MBI Amanatul Ummah located in Pacet, Mojokerto. For nearly 16 years, MBI Big Fair has consistently delivered a variety of competitions and spectacular events each year. The event is also enlivened by amazing performances and creations from MBI students, which never fail to impress.",
    lokasi: "📍 Competition Venue",
  },
  I: {
    open: `Buka kartu kompetisi untuk melihat detail lebih lanjut atau langsung mendaftar!`,
    ready: `Siap Berkompetisi?`,
    mbfth: `Daftarkan dirimu sekarang dan jadilah bagian dari tantangan ini.
Buka kartu kompetisi untuk melihat detail dan mendaftar!`,
    olim: `KOMPETISI`,
    inggris: "KOMPETISI",
    arab: "Kompetisi",
    kompetisi: `OLIMPIADE`,
    thmbf: "!! Pilih cabang kompetisi yang sesuai dengan bakat dan minatmu !!",
    regis: `Daftar Sekarang`,
    ocians: `Olimpiade Sosial & Sains`,
    regis1: `Daftar Sekarang`,
    regis2: `Daftar Sekarang`,
    regis3: `Daftar Sekarang`,
    regis4: `Daftar Sekarang`,
    regis5: `Daftar Sekarang`,
    regis6: `Daftar Sekarang`,
    regis7: `Daftar Sekarang`,
    regis8: `Daftar Sekarang`,
    regis9: `Daftar Sekarang`,
    more: `Info Lebih`,
    more1: `Info Lebih`,
    more2: `Info Lebih`,
    more3: `Info Lebih`,
    more4: `Info Lebih`,
    more5: `Info Lebih`,
    more6: `Info Lebih`,
    more7: `Info Lebih`,
    more8: `Info Lebih`,
    more9: `Info Lebih`,
    eng: `KOMPETISI`,
    kompetisi1: `BAHASA INGGRIS`,
    arab: `KOMPETISI`,
    kompetisi2: `BAHASA ARAB`,
    spes: `KOMPETISI`,
    kompetisi3: `SPESIAL`,
    mbf: `MBI BIG FAIR 17`,
    tmbfh: `MBI BIG FAIR 17`,
    ththmbf: `MBI BIG FAIR 17`,
    irhamna: `Olimpiade PAI`,
    erudite: `Olimpiade Bahasa Inggris`,
    storm: `Bercerita`,
    escimo: `Pidato Bahasa Inggris`,
    akrimna: `Pidato Bahasa Arab`,
    muttaqina: `Membaca Al Qur'an`,
    barikna: `Membaca Kitab Kuning`,
    qorona: `Bernyanyi Bahasa Arab`,
    ocians: "Olimpiade Sosial Dan Sains",
    ocians2: "Olimpiade Sosial Dan Sains",
    register: "Daftar Sekarang",
    info: "Info Lebih Banyak",
    islam: "Olimpiade Islam",
    english: "Olimpiade Bahasa Inggris",
    storytel: "Bercerita Bahasa Inggris",
    qobilna: "Kreasi kaligrafi",
    ket: "© 2025 MBF XVII · MBI Amanatul Ummah Dibuat Oleh Tim IT MBF XVII · All rights reserved",
    kontak: "Kontak",
    sosmed: "Sosial Media",
    olimislam: "OLIMPIADE ISLAM",
    leader: `KOMPETISI`,
    ilc: `Kepemimpinan Berorganisasi`,
    komleader: `Kepemimpinan Berorganisasi`,
    titleilc: `Kompetisi Berorganisasi`,
    mbf: "MBI Big Fair (MBF) is an annual event organized by MBI Amanatul Ummah located in Pacet, Mojokerto. For nearly 16 years, MBI Big Fair has consistently presented a variety of competitions and spectacular events each year. The event is also enlivened by amazing performances and creations from MBI students, which never fail to impress.",
    mbfl: "MBI Big Fair (MBF) adalah acara tahunan yang diselenggarakan oleh MBI Amanatul Ummah yang berlokasi di Pacet, Mojokerto. Selama hampir 16 tahun, MBI Big Fair secara konsisten menyajikan berbagai kompetisi dan acara spektakuler setiap tahunnya. Acara ini juga dimeriahkan oleh penampilan dan kreasi menakjubkan dari para siswa MBI, yang selalu berhasil memukau.",
    lokasi: "📍 Lokasi Perlombaan",
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

// === CARD ANIMATION ===
const stacks = document.querySelectorAll(".card-stack");

stacks.forEach((stack) => {
  const cardA = stack.querySelector(".card-a");
  const cardB = stack.querySelector(".card-b");
  const inner = stack.querySelector(".card-inner");

  let swapped = false;
  let isAnimating = false;

  // Efek hover kecil
  stack.addEventListener("mouseenter", () => {
    stack.classList.add("flipped");
  });
  stack.addEventListener("mouseleave", () => {
    stack.classList.remove("flipped");
  });

  // Efek animasi utama
  stack.addEventListener("mouseenter", () => {
    if (swapped || isAnimating) return;
    swapped = true;
    isAnimating = true;

    cardA.style.transform =
      "translateX(240px) translateY(-10px) translateZ(-60px) rotateY(12deg) scale(0.95)";
    cardB.style.transform =
      "translateX(-240px) translateY(10px) translateZ(40px) rotateY(-12deg) scale(1.05)";

    setTimeout(() => {
      cardA.style.transform =
        "translateX(-0px) translateZ(-110px) rotateY(0) scale(0.9)";
      cardA.style.zIndex = "1";
      cardB.style.transform =
        "translateX(0px) translateZ(0) rotateY(0) scale(1)";
      cardB.style.zIndex = "2";
      isAnimating = false;
    }, 300);
  });

  stack.addEventListener("mouseleave", () => {
    if (!swapped || isAnimating) return;
    swapped = false;
    isAnimating = true;

    cardA.style.transform =
      "translateX(-220px) translateY(10px) translateZ(-60px) rotateY(-12deg) scale(0.95)";
    cardB.style.transform =
      "translateX(220px) translateY(-10px) translateZ(40px) rotateY(12deg) scale(1.05)";

    setTimeout(() => {
      cardA.style.transform = "translateZ(0) scale(1)";
      cardA.style.zIndex = "2";
      cardB.style.transform = "translateZ(-100px) scale(0.9)";
      cardB.style.zIndex = "1";
      isAnimating = false;
    }, 300);
  });

  // Aksesibilitas keyboard (opsional)
  if (inner) {
    inner.setAttribute("tabindex", "0");
    inner.addEventListener("focus", () => stack.classList.add("flipped"));
    inner.addEventListener("blur", () => stack.classList.remove("flipped"));
  }
});
