// ===============================
// 1. TYPING TEXT EFFECT (HEADER)
// ===============================

const texts = [
  "Pempek Asli Palembang",
  "Gurih • Tanpa Pengawet",
  "Ikan Tenggiri Berkualitas"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) count = 0;

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  const typingElement = document.getElementById("typing");
  if (typingElement) typingElement.textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(() => index = 0, 1500);
    count++;
  }

  setTimeout(type, 400);
})();


// ===============================
// 2. SCROLL REVEAL ANIMATION
// ===============================

const reveals = document.querySelectorAll(".card, section");

function revealOnScroll() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// ===============================
// 3. POPUP PROMO (MUNCUL 1x)
// ===============================

window.addEventListener("load", () => {
  if (!localStorage.getItem("promoShown")) {
    setTimeout(() => {
      alert("🎉 Promo Hari Ini!\nGratis Cuko untuk pembelian 10 pcs!");
      localStorage.setItem("promoShown", "yes");
    }, 2000);
  }
});
