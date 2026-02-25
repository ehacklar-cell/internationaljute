// ========================================
// International Jute — Script
// ========================================

(function () {
  "use strict";

  // --- Language Toggle ---
  let currentLang = "en";
  const langToggle = document.getElementById("langToggle");

  function setLanguage(lang) {
    currentLang = lang;
    langToggle.textContent = lang === "fr" ? "EN" : "FR";
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-fr][data-en]").forEach((el) => {
      const text = el.getAttribute(`data-${lang}`);
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = text;
      } else {
        el.innerHTML = text;
      }
    });
  }

  langToggle.addEventListener("click", () => {
    setLanguage(currentLang === "fr" ? "en" : "fr");
  });

  setLanguage("en");

  // --- Mobile Navigation ---
  const burger = document.getElementById("navBurger");
  const navLinks = document.getElementById("navLinks");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navLinks.classList.toggle("open");
    document.body.style.overflow = navLinks.classList.contains("open") ? "hidden" : "";
  });

  navLinks.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("active");
      navLinks.classList.remove("open");
      document.body.style.overflow = "";
    });
  });

  // --- Header scroll effect ---
  const header = document.getElementById("header");

  function onScroll() {
    if (window.scrollY > 10) {
      header.classList.add("header--scrolled");
    } else {
      header.classList.remove("header--scrolled");
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // --- Scroll reveal ---
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add stagger delay for sibling elements
          const parent = entry.target.parentElement;
          const siblings = parent ? parent.querySelectorAll(":scope > .reveal") : [];
          const index = Array.from(siblings).indexOf(entry.target);
          const delay = index >= 0 ? index * 100 : 0;

          setTimeout(() => {
            entry.target.classList.add("visible");
          }, delay);

          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // --- Parallax ---
  const heroImg = document.querySelector('.hero__image');
  const breakImg = document.querySelector('.image-break__img');

  function onParallax() {
    const scrollY = window.scrollY;
    if (heroImg) {
      heroImg.style.transform = `translateY(${scrollY * 0.28}px)`;
    }
    if (breakImg) {
      const rect = breakImg.parentElement.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        breakImg.style.transform = `translateY(${(progress - 0.5) * -80}px)`;
      }
    }
  }

  window.addEventListener('scroll', onParallax, { passive: true });
  onParallax();

  // --- Contact Form ---
  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("formSuccess");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => {
        successMsg.classList.add("visible");
        form.reset();
        setTimeout(() => {
          successMsg.classList.remove("visible");
        }, 5000);
      })
      .catch(() => {});
  });
})();
