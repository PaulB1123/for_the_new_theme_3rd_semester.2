"use strict";
let h3 = document.querySelector("h3");

window.addEventListener("DOMContentLoaded", loaded);
function loaded() {
  const array = document.querySelector(".product_text h3").textContent;
  let dataArray = array.split(" ");
  dataArray.forEach((elm, i, arr) => {
    arr[i] = `<span>${elm}</span`;
  });
  let textArrayWithSpan = dataArray.join(" ");
  
  return textArrayWithSpan;
}


function spanWrapper(word) {
    let wordArr = word.split(" ").map((word) => {
        return `<span>${word}</span>`;
    });
    return wordArr.join(" ");
}



function spanWrapper() {}
