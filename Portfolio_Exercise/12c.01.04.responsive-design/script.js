"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  document.getElementById("logo_black").classList.add("hidden");
  document.getElementById("logo_black_2").classList.add("hidden");
}

let theme = localStorage.getItem("data-theme");
const changeThemeToDark = () => {
  document.documentElement.setAttribute("data-theme", "dark"); // set theme to dark
  localStorage.setItem("data-theme", "dark"); // save theme to local storage
};

const changeThemeToLight = () => {
  document.documentElement.setAttribute("data-theme", "light"); // set theme light
  localStorage.setItem("data-theme", "light"); // save theme to local storage
};

// Get the element based on ID
const checkbox = document.getElementById("switch");
// Apply retrived them to the website
checkbox.addEventListener("change", () => {
  let theme = localStorage.getItem("data-theme"); // Retrieve saved them from local storage
  if (theme === "dark") {
    document.getElementById("logo_black").classList.add("hidden");
    document.getElementById("logo_black_2").classList.add("hidden");
    document.getElementById("logo_white").classList.remove("hidden");
    document.getElementById("logo_white_2").classList.remove("hidden");
    changeThemeToLight();
  } else {
    document.getElementById("logo_white").classList.add("hidden");
    document.getElementById("logo_white_2").classList.add("hidden");
    document.getElementById("logo_black").classList.remove("hidden");
    document.getElementById("logo_black_2").classList.remove("hidden");
    changeThemeToDark();
  }
});

loaded();

// animating the text

function loaded() {
  let h1Pointer = document.getElementById("header_text_main");
  console.log(h1Pointer.textContent);
  h1Pointer.innerHTML = prepareText(h1Pointer.textContent);
  gsap.from("span", {
    x: 400,
    opacity: 0,
    duration: 0.5,
    stagger: { amount: 1 },
    repeat: 0,
  });
}

function prepareText(txt) {
  const txtArr = txt.split(" ");
  txtArr.forEach((elm, i, arr) => {
    arr[i] = `<span>${elm}</span>`;
  });
  return txtArr.join(" ");
}

gsap.registerPlugin(ScrollTrigger);
gsap.to("header", { y: "10vw", dutation: 5, scrollTrigger: { trigger: "header", start: "top 75%", end: "bottom 25%", toggleActions: "play pause resume" } });
gsap.to("#advantages", { y: "-10vw", dutation: 5, scrollTrigger: { trigger: "#advantages", start: "top 75%", end: "bottom 25%", toggleActions: "play pause resume " } });
gsap.to("highlight", { y: "-10vw", dutation: 5, scrollTrigger: { trigger: "highlight", start: "top 75%", end: "bottom 25%", toggleActions: "play pause resume " } });
