// SCROLL REVEAL
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(r => {
    const top = r.getBoundingClientRect().top;
    if(top < window.innerHeight - 80){
      r.classList.add('active');
    }
  });
});

// COUNTDOWN
const target = new Date("April 18, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = target - now;

  document.getElementById('day').innerText = Math.floor(diff / (1000*60*60*24));
  document.getElementById('hour').innerText = Math.floor((diff/(1000*60*60))%24);
  document.getElementById('minute').innerText = Math.floor((diff/(1000*60))%60);
  document.getElementById('second').innerText = Math.floor((diff/1000)%60);
},1000);
// CURSOR GLOW (DESKTOP)
const cursor = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// TAP / CLICK GLOW (ALL DEVICE)
document.addEventListener('click', (e) => {
  const glow = document.createElement('div');
  glow.className = 'tap-glow';
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
  document.body.appendChild(glow);

  setTimeout(() => {
    glow.remove();
  }, 600);
});
// REMOVE INTRO AFTER ANIMATION
window.addEventListener("load", () => {
  setTimeout(() => {
    const intro = document.getElementById("intro");
    if (intro) intro.remove();
  }, 4700);
});
