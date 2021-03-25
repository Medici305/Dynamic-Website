let controller;
let slideScene;

const animateSlide = () => {
  controller = new ScrollMagic.Controller();
  const slider = document.querySelectorAll(".slide");
  const nav = document.querySelector(".nav-header");
  slider.forEach((slide) => {
    const revealImg = slide.querySelector(".reveal-img");
    const img = slide.querySelector("img");
    const revealText = slide.querySelector(".reveal-text");
    let slideTl = gsap.timeline({ default: { duration: 2, ease: "power2" } });
    slideTl.fromTo(revealImg, { x: "0%" }, { x: "100%" });
    slideTl.fromTo(img, { scale: 2 }, { scale: 1 }, "-=1");
    slideTl.fromTo(revealText, { x: "0%" }, { x: "100%" }, "-=.75");
    slideTl.fromTo(nav, { y: "-100%" }, { y: "0%" }, "-=.5");

  });
};

animateSlide();
