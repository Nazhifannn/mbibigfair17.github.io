// ========= LANGUAGE SWITCHER YANG 100% BERHASIL =========

const translations = {
  id: {
    hadirspesial: "Hadir Spesial untuk Menghadirkan Inspirasi, Wawasan Baru, dan Pengalaman Berharga di Event Tahun 2026",
    mbf: "MBI Big Fair (MBF) adalah acara tahunan yang diselenggarakan oleh MBI Amanatul Ummah located in Pacet, Mojokerto. For nearly 16 years, MBI Big Fair has consistently delivered a variety of competitions and spectacular events each year.",
    lokasi: "📍 Lokasi Kompetisi",
    alexa: "Alexa Salsabila adalah siswi berprestasi dari SMAN 1 Sooko, aktif sebagai Duta Sekolah Nasional dan sering tampil memberikan inspirasi bagi pelajar muda.",
    gusiqdam: "GUS IQDAM adalah seorang seniman muda berbakat yang dikenal dengan penampilan memukau dan kehadirannya yang menginspirasi di industri hiburan.",
    briankrisna: "Brian Krisna adalah seorang musisi muda berbakat yang telah mencuri perhatian dengan karya-karyanya yang orisinal dan penampilannya yang memukau di berbagai panggung.",
    nowback1: "Kembali lagi di MBF XVII, sebuah sub event yang menghadirkan tokoh-tokoh publik inspiratif yang kisah hidupnya membentuk generasi emas Indonesia 2045.",
    explor: "Eksplorasi Lebih Lanjut",
    explor2: "Eksplorasi Lebih Lanjut",
    nowback2: "Kembali lagi di MBF XVII, sebuah sub event yang menghadirkan tokoh-tokoh publik inspiratif yang kisah hidupnya membentuk generasi emas Indonesia 2045.",
    seminar: "Seminar Kepemimpinan",
    seminar2: "Kegiatan Seminar yang Diperuntukkan Pada Para Pelajar dengan Tujuan Melatih Leadership dan Kecakapan dalam Berorganisasi.",
    part: "Bagian dari ILC",
    kontak: "Kontak",
    sosmed: "Sosial Media",
  },
  en: {
    hadirspesial: "Special Guests Bringing Inspiration, New Insights, and Valuable Experiences to the 2026 Event",
    mbf: "MBI Big Fair (MBF) is an annual event hosted by MBI Amanatul Ummah located in Pacet, Mojokerto. For nearly 16 years, MBI Big Fair has consistently delivered a variety of competitions and spectacular events each year.",
    lokasi: "📍 Competition Venue",
    alexa: "Alexa Salsabila is an accomplished student from SMAN 1 Sooko, actively serving as a National School Ambassador and frequently inspiring young learners.",
    gusiqdam: "GUS IQDAM is a talented young artist known for his captivating performances and inspiring presence in the entertainment industry.",
    briankrisna: "Brian Krisna is a talented young musician who has captured attention with his original works and stunning performances on various stages.",
    nowback1: "Now back at MBF XVII, a sub event that presents inspiring public figures whose life stories shape the golden generation of Indonesia 2045.",
    explor: "Explore Event",
    explor2: "Explore Event",
    nowback2: "Now back at MBF XVII, a sub event that presents inspiring public figures whose life stories shape the golden generation of Indonesia 2045.",
    seminar: "Leadership Seminar",
    seminar2: "A seminar activity designed for students to develop leadership skills and organizational competencies.",
    part: "Part of ILC",   
    kontak: "Contact",
    sosmed: "Social Media", 
  }
};

function setLanguage(lang) {
  if (!translations[lang]) {
    console.warn("Language not found:", lang);
    return;
  }
  
  document.querySelectorAll("[data-lang]").forEach((element) => {
    const key = element.getAttribute("data-lang");
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  localStorage.setItem("savedLanguage", lang);
  document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", function () {
  // Language Switcher
  const toggle = document.getElementById("langToggle");
  const options = document.getElementById("langOptions");
  const flagIcon = document.getElementById("flagIcon");
  const arrow = document.querySelector(".arrow");

  if (toggle && options) {
    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      options.classList.toggle("show");
      if (arrow) arrow.classList.toggle("rotate");
    });

    document.querySelectorAll(".lang-item").forEach((item) => {
      item.addEventListener("click", function (e) {
        e.stopPropagation();
        const lang = this.getAttribute("data-lang");
        const img = this.querySelector("img");
        
        if (img && flagIcon) {
          flagIcon.src = img.src;
        }
        
        setLanguage(lang);
        options.classList.remove("show");
        if (arrow) arrow.classList.remove("rotate");
      });
    });

    document.addEventListener("click", function (e) {
      if (e.target !== toggle && !options.contains(e.target)) {
        options.classList.remove("show");
        if (arrow) arrow.classList.remove("rotate");
      }
    });
  }

  // Load saved language
  const savedLang = localStorage.getItem("savedLanguage") || "en";
  setLanguage(savedLang);
  
  if (flagIcon) {
    const src = savedLang === "id" 
      ? "https://flagcdn.com/w40/id.png" 
      : "https://flagcdn.com/w40/us.png";
    flagIcon.src = src;
  }
});

// Navigation
document.querySelectorAll(".nav-btn").forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log("Navigation clicked");
  });
});
