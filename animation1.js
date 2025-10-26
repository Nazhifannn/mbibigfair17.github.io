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
