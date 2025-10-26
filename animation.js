const translations = {
  id: {
    title: "Selamat Datang",
    desc: "Ini adalah contoh website dengan fitur ganti bahasa.",
    button: "Pelajari Lebih Lanjut",
  },
  en: {
    title: "Welcome",
    desc: "This is an example website with language switch feature.",
    button: "Learn More",
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
  const closeBtnPromo = document.getElementById("close-promo"); // pakai id baru

  // Tampilkan popup saat halaman dibuka
  setTimeout(() => {
    popup.classList.add("active");
  }, 500);

  // Tombol close → tutup popup
  closeBtnPromo.addEventListener("click", () => {
    popup.classList.remove("active");
  });
});
const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    // hapus class active dari semua tombol
    buttons.forEach((b) => b.classList.remove("active"));
    // tambahkan class active ke tombol yang diklik
    this.classList.add("active");
  });
});
/*animasi teks tulis hapus */
document.addEventListener("DOMContentLoaded", function () {
  const texts = [
    "WELCOME TO 17ᵗʰ MBI BIG FAIR!",
    "JOIN THE EPIC CHALLENGES!",
    "HAVE FUN AND EXPLORE!",
  ];

  const typingSpeed = 25;
  const erasingSpeed = 25;
  const delayBetweenTexts = 1000;

  let textIndex = 0;
  let charIndex = 0;

  const typingTextElement = document.getElementById("typing-text");

  function type() {
    if (charIndex < texts[textIndex].length) {
      typingTextElement.textContent += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, delayBetweenTexts);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingTextElement.textContent = texts[textIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(type, typingSpeed);
    }
  }

  setTimeout(type, delayBetweenTexts);
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
const closeBtn = document.querySelector("#cardOverlay .close-btn"); // lebih spesifik

const cardInfo = {
  left: { title: "maskot PA", desc: "deskripsi maskot PA." },
  middle: { title: "logo MBF 17", desc: "deskripsi logo MBF 17." },
  right: { title: "maskot PI", desc: "deskripsi maskot PI." },
};

cards.forEach((card) => {
  card.addEventListener("click", () => {
    let type = "middle";
    if (card.classList.contains("left")) type = "left";
    if (card.classList.contains("right")) type = "right";

    const imgSrc = card.querySelector("img").src;
    cardTitle.textContent = cardInfo[type].title;
    cardImage.src = imgSrc;
    cardDesc.textContent = cardInfo[type].desc;

    overlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  });
});

closeBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
  document.body.style.overflow = "auto";
});

document.addEventListener("DOMContentLoaded", () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+-*/><=";

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
