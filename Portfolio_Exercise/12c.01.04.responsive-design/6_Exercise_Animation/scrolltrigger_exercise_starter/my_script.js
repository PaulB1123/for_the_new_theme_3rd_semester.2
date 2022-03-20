"use strict";
gsap.registerPlugin(ScrollTrigger);
gsap.to("#the_div", { x: "45vw", dutation: 5, scrollTrigger: { trigger: "#the_div", markers: true, start: "top 75%", end: "bottom 25%", toggleActions: "play pause resume reset" } });
