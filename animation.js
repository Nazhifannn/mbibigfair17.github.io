window.addEventListener("scroll", reveal);

function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
const translations = {
  id: {
    glow: "Acara terbesar di",
    highlight: "Madrasah Bertaraf Internasional",
    "zoom-text1": "LOGO & MASKOT",
    "zoom-text2": "RESMI KAMI",
    text: "LOGO MBF",
    left: "LUKY",
    mid: "LOGO MBF 17",
    right: "LUCY",
    mbf: "APA ITU MBF?",
    mbft: `MBI Big Fair (MBF) adalah acara tahunan dari MBI Amanatul Ummah
              yang berlokasi di Pacet, Mojokerto. Selama hampir 16 tahun
              terakhir, MBI Big Fair selalu berhasil menyuguhkan berbagai lomba
              dan acara spektakuler setiap tahunnya. Acara ini juga diramaikan
              oleh kreasi para santri MBI yang memukau dan luar biasa.`,
    galcer: "APA ITU GALANG CERIA?",
    galcert: `Galang Ceria (Gebyar Penggalang Cerdas, Terampil, dan Atraktif) merupakan acara tahunan berupa lomba pramuka yang diselenggarakan oleh Ambalan Nurul Ummah Pangkalan MBI Amanatul Ummah yang berlokasi di Pacet, Mojokerto. Selama 16 tahun terakhir, Galang Ceria selalu berhasil menyuguhkan berbagai pengalaman menarik bagi pesertanya.`,
    pamflet: "Pamflet Utama",
    guidebook: "Buku Panduan",
    daftar: `PENDAFTAR MBI BIG FAIR XVI`,
    dibuka: `pendaftaran dibuka`,
    ditutup: `pendaftaran di tutup`,
    meeting: `pertemuan teknis`,
    acara1: `pembukaan acara`,
    acara2: `penutupan acara`,
    timeline: `garis waktu `,
    compe: `kompetisi`,
    pr: `kumpulan hadiah`,
    compe: `kategori lomba`,
    upto: `HINGGA`,
    olim: `OLIMPIADE`,
    eng: `INGGRIS`,
    arab: `ARAB`,
    sp: `SPESIAL`,
    media: `MEDIA PARTNER`,
    transfoot: `MBI BIG FAIR 17`,
    mbf2025: `© MBF 17 2025 · MBI Amanatul Ummah`,
    created: `Dibuat oleh Tim IT MBF 17 · Hak cipta dilindungi`,
    contact: `Kontak Kami`,
    email: `Email Kami`,
  },
  en: {
    glow: "The biggest events in",
    highlight: "Madrasah Bertaraf International",
    "zoom-text1": "OUR OFFICIAL",
    "zoom-text2": "LOGO & MASCOT",
    text: "MBF LOGO",
    left: "LUKY",
    mid: "MBF 17 LOGO",
    right: "LUCY",
    mbf: "WHAT IS MBF?",
    mbft: `The MBI Big Fair (MBF) is an annual event organized by MBI Amanatul Ummah, located in Pacet, Mojokerto. For nearly 16 years, the MBI Big Fair has consistently presented a variety of spectacular competitions and events. The event is also enlivened by the stunning and extraordinary creations of MBI students.`,
    galcer: "WHAT IS GALANG CERIA",
    galcert: `Galang Ceria (Gebyar Penggalang Cerdas, Terampil, dan Atraktif) is an annual Scouting competition organized by the Nurul Ummah Scout Movement (Ambalan Nurul Ummah) in Pacet, Mojokerto. Over the past 16 years, Galang Ceria has consistently provided a variety of engaging experiences for its participants.`,
    pamflet: "Main Pamphlet",
    guidebook: "Guidebook",
    daftar: `MBI BIG FAIR XVI REGISTRATION`,
    dibuka: `registration is open`,
    ditutup: `registration is close`,
    meeting: `technical meeting`,
    acara1: `opening event`,
    acara2: `closing event`,
    timeline: `timeline`,
    compe: `competition category`,
    pr: `prizepool`,
    upto: `UP TO:`,
    olim: `OLYMPIC`,
    eng: `ENGLISH`,
    arab: `ARABIC`,
    sp: `SPECIAL`,
    media: `OUR MEDIA PARTNER`,
    transfoot: `17th MBI BIG FAIR`,
    mbf2025: `© 2025 MBF 17 · MBI Amanatul Ummah`,
    created: `Created by IT Team of MBF 17 · All rights reserved`,
    contact: `Contact Us`,
    email: `Email Us`,
  },
};

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  updateLanguage(lang);
}

function updateLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach((el) => {
    const key = el.getAttribute("data-lang");
    el.textContent = translations[lang][key];
  });

  document.getElementById("id-btn").classList.toggle("active", lang === "id");
  document.getElementById("en-btn").classList.toggle("active", lang === "en");
}

// Set bahasa default
const savedLang = localStorage.getItem("lang") || "id";
updateLanguage(savedLang);
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

/*animasi event*/
const slider = document.querySelector(".slider");
const items = document.querySelectorAll(".item");
const totalItems = items.length;

const itemStyle = getComputedStyle(items[0]);
const itemWidth =
  items[0].offsetWidth +
  parseInt(itemStyle.marginLeft) +
  parseInt(itemStyle.marginRight);

let currentIndex = 0;

// Gandakan item untuk efek infinite
items.forEach((item) => {
  const clone = item.cloneNode(true);
  slider.appendChild(clone);
});

slider.style.transition = "transform 0.5s ease-in-out";

function updateActiveItem() {
  // Reset semua dulu
  items.forEach((el) => el.classList.remove("active"));

  // Tentukan index aktif (hanya di item asli)
  let activeIndex = currentIndex % totalItems;
  items[activeIndex].classList.add("active");
}

function slide() {
  currentIndex++;
  slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

  updateActiveItem();

  if (currentIndex >= totalItems) {
    setTimeout(() => {
      slider.style.transition = "none";
      currentIndex = 0;
      slider.style.transform = `translateX(0px)`;
      updateActiveItem();

      setTimeout(() => {
        slider.style.transition = "transform 0.5s ease-in-out";
      }, 20);
    }, 500);
  }
}

setInterval(slide, 3000);
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
