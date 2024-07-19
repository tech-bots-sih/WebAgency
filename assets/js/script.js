"use strict";

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
};

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
};

addEventOnElem(navbarLinks, "click", closeNavbar);

/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**
 * Popup Project Details
 */

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn-primary");
  const popups = document.querySelectorAll(".popup");
  const closeButtons = document.querySelectorAll(".close-popup");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const popup = document.getElementById(targetId);
      popup.style.display = "flex";
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.closest(".popup").style.display = "none";
    });
  });

  window.addEventListener("click", (event) => {
    if (event.target.classList.contains("popup")) {
      event.target.style.display = "none";
    }
  });
});
