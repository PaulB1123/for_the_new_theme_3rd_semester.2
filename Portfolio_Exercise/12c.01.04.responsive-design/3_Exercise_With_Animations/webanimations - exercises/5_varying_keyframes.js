"use strict";

const ball = document.querySelector("#ball");

const keyframes = [
  {
    transform: "translate(42vw,0vw)",
  },

  {
    transform: "translate(85vw,20vw)",
  },

  {
    transform: "translate(42vw,41vw)",
  },

  {
    transform: "translate(0vw,20vw)",
  },
  {
    transform: "translate(42vw,0vw)",
  },
];

const rect = ball.getBoundingClientRect();
const stage = document.querySelector("#stage").getBoundingClientRect();
console.log(rect);
const centerBall = rect.height / 2;
console.log(centerBall);

const CenterX = stage.width / 2 - rect.width / 2;
const RightX = stage.width - rect.width;
const RightY = stage.height / 2 - rect.height / 2;
const BottomY = stage.height - rect.height;

console.log(CenterX, RightX, RightY, BottomY);

const keyframes2 = [
  {
    transform: `translate(${CenterX}px,0px)`,
  },
  {
    transform: `translate(${RightX}px,${RightY}px)`,
  },
  {
    transform: `translate(${CenterX}px,${BottomY}px)`,
  },
  {
    transform: `translate(0px,${RightY}px)`,
  },
  {
    transform: `translate(${CenterX}px,0px)`,
  },
];

const properties = {
  duration: 3000,
  iterations: Infinity,
};

const animation = ball.animate(keyframes2, properties);
