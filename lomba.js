document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  const text = document.querySelector(".text-container");
  const image = document.querySelector(".image-container img");

  // Animasi zoom masuk saat halaman muncul
  hero.style.opacity = "0";
  hero.style.transform = "scale(0.9)";
  setTimeout(() => {
    hero.style.transition = "all 0.8s ease";
    hero.style.opacity = "1";
    hero.style.transform = "scale(1)";
  }, 150);

  // Efek interaktif hover pada teks dan gambar
  [text, image].forEach((el) => {
    el.addEventListener("mouseenter", () => {
      el.style.transition = "transform 0.4s ease, filter 0.4s ease";
      el.style.transform = "scale(1.05)";
      el.style.filter = "brightness(1.1)";
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "scale(1)";
      el.style.filter = "brightness(1)";
    });
  });
});
