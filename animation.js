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
/*animasi teks tulis hapus */
document.addEventListener("DOMContentLoaded", function () {
  const texts = [
    "WELCOME TO MBI BIG FAIR 17!",
    "TAKE PART IN VARIOUS EXCITING COMPETITIONS!",
    "ENJOY THE EVENT AND OTHER FUN!",
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
updateActiveItem();
const cards = document.querySelectorAll(".card");
const overlay = document.getElementById("cardOverlay");
const cardTitle = document.getElementById("cardTitle");
const cardImage = document.getElementById("cardImage");
const cardDesc = document.getElementById("cardDesc");
const closeBtn = document.querySelector(".close-btn");

const cardInfo = {
  left: {
    title: "makot PA",
    desc: "deskripsi maskot PA.",
  },
  middle: {
    title: "logo MBF 17",
    desc: "deskripsi logo MBF 17.",
  },
  right: {
    title: "maskot PI",
    desc: "deskripsi maskot PI.",
  },
};
/*animasi kartu ke 2 */
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
    document.body.style.overflow = "hidden"; // lock scroll
  });
});

closeBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
  document.body.style.overflow = "auto"; // unlock scroll
});
/*pamflet dan guidebook */
const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
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
