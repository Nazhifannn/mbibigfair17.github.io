const translations = {
  en: {
    our: `This is Our Competitions`,
    thmbf: `17th MBF`,
    kategori: `Competition Category`,
    olim: `Olympic`,
    kompetisi: `Competition`,
    mbfth: `17th MBI BIG FAIR`,
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
    eng: `English`,
    kompetisi1: `Competition`,
    arab: `Arabic`,
    kompetisi2: `Competition`,
    spes: `Specials`,
    kompetisi3: `Competition`,
    mbf: `17th MBI BIG FAIR`,
    tmbfh: `17th MBI BIG FAIR`,
    ththmbf: `17th MBI BIG FAIR`,
    irhamna: `Islamic Olympiad`,
    erudite: `English Olympiad`,
    storm: `Story Telling`,
    escimo: `English Speech`,
    akrimna: `Arabic Speech`,
    muttaqina: `Read Arabic News`,
    barikna: `Read The Yellow Book`,
    qorona: `Calligraphy Creation Competition`,
  },
  id: {
    our: `Ini Kompetisi-kompetisi Kita`,
    thmbf: `MBF 17`,
    kategori: `Kategori Kompetisi`,
    olim: `Kompetisi`,
    kompetisi: `Olimpiade`,
    mbfth: `MBI BIG FAIR 17`,
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
    eng: `Kompetisi`,
    kompetisi1: `Bahasa Inggris`,
    arab: `Kompetisi`,
    kompetisi2: `Bahasa Arab`,
    spes: `kompetisi`,
    kompetisi3: `Spesial`,
    mbf: `MBI BIG FAIR 17`,
    tmbfh: `MBI BIG FAIR 17`,
    ththmbf: `MBI BIG FAIR 17`,
    irhamna: `Oimpiade PAI`,
    erudite: `Olimpiade Bahasa Inggris`,
    storm: `Bercerita`,
    escimo: `Pidato Bahasa Inggris`,
    akrimna: `Pidato Bahasa Arab`,
    muttaqina: `Membaca Berita Berbahasa Arab`,
    barikna: `Membaca Kitab Kuning`,
    qorona: `Kompetisi Kreasi Kaligrafi`,
  },
};

function setLanguage(lang) {
  // Simpan bahasa ke localStorage agar tetap tersimpan
  localStorage.setItem("lang", lang);

  // Ambil semua elemen yang punya data-lang
  document.querySelectorAll("[data-lang]").forEach((el) => {
    const key = el.getAttribute("data-lang");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update tampilan tombol aktif
  document.getElementById("id-btn").classList.toggle("active", lang === "id");
  document.getElementById("en-btn").classList.toggle("active", lang === "en");
}

// Saat halaman dibuka ulang, baca bahasa terakhir dari localStorage
window.onload = function () {
  const savedLang = localStorage.getItem("lang") || "en";
  setLanguage(savedLang);
};

// Ambil semua tumpukan kartu
const stacks = document.querySelectorAll(".card-stack");

stacks.forEach((stack) => {
  // mouse enter -> tambahkan class flipped
  stack.addEventListener("mouseenter", () => {
    stack.classList.add("flipped");
  });

  // mouse leave -> hapus class flipped
  stack.addEventListener("mouseleave", () => {
    stack.classList.remove("flipped");
  });

  // juga dukung keyboard: fokus (tab) -> flip, blur -> kembali
  // agar bisa diakses, set tabindex pada card-inner
  const inner = stack.querySelector(".card-inner");
  if (inner) {
    inner.setAttribute("tabindex", "0");
    inner.addEventListener("focus", () => stack.classList.add("flipped"));
    inner.addEventListener("blur", () => stack.classList.remove("flipped"));

    // dan dukung toggle lewat Enter / Space
    inner.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        stack.classList.toggle("flipped");
      }
    });
  }
});
// Untuk efek tambahan (opsional) misalnya buka/tutup halus saat keluar cursor
document.querySelectorAll(".card-stack").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("open");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("open");
  });
});

const stack = document.getElementById("cardStack");
const cardA = stack.querySelector(".card-a");
const cardB = stack.querySelector(".card-b");

let swapped = false;

stack.addEventListener("mouseenter", () => {
  if (swapped) return;
  swapped = true;

  // Tahap 1: kartu menyebar, A ke kanan, B ke kiri (tidak terlalu dalam)
  cardA.style.transform =
    "translateX(240px) translateY(-10px) translateZ(-60px) rotateY(12deg) scale(0.95)";
  cardB.style.transform =
    "translateX(-240px) translateY(10px) translateZ(40px) rotateY(-12deg) scale(1.05)";

  // Tahap 2: mereka kembali ke tengah dan tukar posisi
  setTimeout(() => {
    cardA.style.transform =
      "translateX(0) translateZ(-110px) rotateY(0) scale(0.9)";
    cardA.style.zIndex = "1";

    cardB.style.transform = "translateX(0) translateZ(0) rotateY(0) scale(1)";
    cardB.style.zIndex = "2";
  }, 900);
});

stack.addEventListener("mouseleave", () => {
  if (!swapped) return;
  swapped = false;

  // Tahap 1: menyebar kembali, arah berlawanan
  cardA.style.transform =
    "translateX(-240px) translateY(10px) translateZ(-60px) rotateY(-12deg) scale(0.95)";
  cardB.style.transform =
    "translateX(240px) translateY(-10px) translateZ(40px) rotateY(12deg) scale(1.05)";

  // Tahap 2: kembali ke posisi awal
  setTimeout(() => {
    cardA.style.transform = "translateZ(0) scale(1)";
    cardA.style.zIndex = "2";

    cardB.style.transform = "translateZ(-100px) scale(0.9)";
    cardB.style.zIndex = "1";
  }, 900);
});
