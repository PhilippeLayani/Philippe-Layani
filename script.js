import gsap from "./node_modules/gsap/index.js";
import { ScrollTrigger } from "./node_modules/gsap/ScrollTrigger.js";
import Lenis from "./node_modules/@studio-freight/lenis/dist/lenis.mjs";

gsap.registerPlugin(ScrollTrigger);

const lenisJs = () => {
  const lenis = new Lenis();
  lenis.on("scroll", (e) => {});

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 800);
  });

  gsap.ticker.lagSmoothing(0);
};
lenisJs();

const clutterAnimation = (element) => {
  const htmlTag = document.querySelector(element);
  let clutter = "";

  // Splitting the text content into individual letters and wrapping each in a span with a class
  htmlTag.textContent.split("").forEach((word) => {
    clutter += `<span>${word}</span>`;
  });

  // Updating the HTML content of the element with the animated spans
  htmlTag.innerHTML = clutter;
};

