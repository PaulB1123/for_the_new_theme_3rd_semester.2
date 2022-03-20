"use strict";

const ball = document.querySelector("#ball");
let animationZoom;
let animation;

// Create keyframes and properties for falling and zoom

const propertiesFalling = {
  duration: 5000,
  iterations: Infinity,
  direction: "normal",
  easing: "ease-in-out",
};

const keyframesFalling = [
  {
    transform: "translateY(-20vw)",
  },
  {
    transform: "translateY(65vw)",
  },
];

const propertiesZoom = {
  duration: 500,
  // iterations: 1,
  fill: "forwards",
  easing: "ease-in-out",
  composite: "add",
};

const keyframesZoom = [
  {
    transform: "scale(1)",
  },
  {
    transform: "scale(0)",
  },
];
// register click
ball.addEventListener("click", ballClicked);

// start falling animation
animation = ball.animate(keyframesFalling, propertiesFalling);

function ballClicked() {
  console.log("Ball clicked!");
  // pause falling animation
  animation.pause();
  // start zoom-animation
  animationZoom = ball.animate(keyframesZoom, propertiesZoom);
  animationZoom.onfinish = function () {
    console.log("it goes here");
    animation.cancel();
    animationZoom.cancel();
    // animationZoom.cancel();
    animation.play();
  };
}
