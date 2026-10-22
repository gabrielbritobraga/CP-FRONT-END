/* Gabriel Brito Braga — Portfólio (edição editorial)
   Interações: reveals no scroll, parallax sutil, navbar dinâmica e menu mobile. */

const header = document.getElementById("header");
const navToggle = document.getElementById("nav-toggle");
const navList = document.getElementById("nav-list");

/* ---------- Navbar: fundo ao rolar + esconde ao descer ---------- */
let lastScrollY = window.scrollY;
let ticking = false;

function onScroll() {
  const currentY = window.scrollY;

  header.classList.toggle("header--scrolled", currentY > 40);

  if (currentY > 500 && currentY > lastScrollY) {
    header.classList.add("header--hidden");
  } else {
    header.classList.remove("header--hidden");
  }

  parallax(currentY);
  lastScrollY = currentY;
  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(onScroll);
    ticking = true;
  }
}, { passive: true });

/* ---------- Parallax sutil na foto do hero ---------- */
const heroImg = document.getElementById("hero-img");

function parallax(currentY) {
  if (heroImg && currentY < window.innerHeight * 1.2) {
    heroImg.style.transform = `translateY(${currentY * 0.22}px)`;
  }
}

/* ---------- Menu mobile ---------- */
navToggle.addEventListener("click", () => {
  const isOpen = navList.classList.toggle("nav__list--open");
  header.classList.toggle("header--menu-open", isOpen);
  navToggle.classList.toggle("nav__toggle--open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  document.body.style.overflow = isOpen ? "hidden" : "";
});

// Fecha o menu ao clicar em um link
navList.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("nav__list--open");
    header.classList.remove("header--menu-open");
    navToggle.classList.remove("nav__toggle--open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  });
});

/* ---------- Reveal on scroll ---------- */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* ---------- Ano automático no rodapé ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
