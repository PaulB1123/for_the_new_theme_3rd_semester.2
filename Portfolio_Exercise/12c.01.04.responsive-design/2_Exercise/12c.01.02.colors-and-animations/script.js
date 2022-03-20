"use strict";

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
    changeThemeToLight();
  } else {
    changeThemeToDark();
  }
});

loaded();

// animating the text

function loaded() {
  let h1Pointer = document.getElementById("Header_h1");
  console.log(h1Pointer.textContent);
  h1Pointer.innerHTML = prepareText(h1Pointer.textContent);
  gsap.from("span", {
    x: 400,
    opacity: 0,
    duration: 0.5,
    stagger: { amount: 1 },
    repeat: -1,
  });
}

function prepareText(txt) {
  const txtArr = txt.split(" ");
  txtArr.forEach((elm, i, arr) => {
    arr[i] = `<span>${elm}</span>`;
  });
  return txtArr.join(" ");
}
