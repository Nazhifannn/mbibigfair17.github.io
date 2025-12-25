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
  en: {
    "speakers-title": `Presenting Special Guests to Bring Inspiration, New Insights, and Valuable Experiences at the 2026 Event`,
    mbfl: `MBI Big Fair (MBF) is an annual event hosted by MBI Amanatul Ummah located in Pacet, Mojokerto. For nearly 16 years, MBI Big Fair has consistently delivered a variety of competitions and spectacular events each year. The event is also enlivened by amazing performances and creations from MBI students, which never fail to impress.`,
    lokasi: `📍 Competition Venue`,
  },
  id: {
    "speakers-title": `Hadir Spesial untuk Menghadirkan Inspirasi, Wawasan Baru, dan Pengalaman Berharga di Event Tahun 2026`,
    mbfl: `MBI Big Fair (MBF) adalah acara tahunan yang diselenggarakan oleh MBI Amanatul Ummah yang berlokasi di Pacet, Mojokerto. Selama hampir 16 tahun, MBI Big Fair secara konsisten menyajikan berbagai kompetisi dan acara spektakuler setiap tahunnya. Acara ini juga dimeriahkan oleh penampilan dan kreasi menakjubkan dari para siswa MBI, yang selalu berhasil memukau.`,
    lokasi: `📍 Lokasi Perlombaan`,
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