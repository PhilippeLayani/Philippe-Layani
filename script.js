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

const navAnimation = () => {
  const navElem1 = document.querySelector(".nav-elem1");

  clutterAnimation(".nav-elem1>h3");
  clutterAnimation(".nav-elem1>a");
  navElem1.addEventListener("mouseenter", () => {
    gsap.to(".nav-elem1>a", {
      opacity: 1,
      duration: 1.5,
      delay: 0.6,
    });

    gsap.to(".nav-elem1>h3>span", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 0.5,
        from: "random",
      },
      onComplete: () => {
        const tl = gsap.timeline();
        tl.to(".nav-elem1>h3>span", {
          y: 0,
          opacity: 0,
          duration: 0.1,
        });
        tl.to(".nav-elem1>h3>span", {
          opacity: 1,
          duration: 0.3,
        });
        tl.to(".nav-elem1>a", {
          duration: 0.3,
          opacity: 0,
        });
      },
    });
  });

  const navElem2 = document.querySelector(".nav-elem2");

  clutterAnimation(".nav-elem2>h3");
  clutterAnimation(".nav-elem2>a");
  navElem2.addEventListener("mouseenter", () => {
    gsap.to(".nav-elem2>a", {
      opacity: 1,
      duration: 1.5,
      delay: 0.6,
    });

    gsap.to(".nav-elem2>h3>span", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 0.5,
        from: "random",
      },
      onComplete: () => {
        const tl = gsap.timeline();
        tl.to(".nav-elem2>h3>span", {
          y: 0,
          opacity: 0,
          duration: 0.1,
        });
        tl.to(".nav-elem2>h3>span", {
          opacity: 1,
          duration: 0.3,
        });
        tl.to(".nav-elem2>a", {
          duration: 0.3,
          opacity: 0,
        });
      },
    });
  });
};

navAnimation();

const menuAnimation = () => {
  const menu = document.querySelector(".nav-elem1");

  menu.addEventListener("click", () => {
    const tl = gsap.timeline();
    tl.to(".nav-menu", {
      opacity: 1,
      pointerEvents: "all",
    });
    tl.to(".anime-text", {
      delay: -0.3,
      rotate: "-90deg",
      duration: 1,
      scale: 3,
    });
    tl.to(
      ".anime-text>h1",
      {
        x: "1500",
        stagger: {
          amount: 1,
          from: "center",
        },
      },
      "a"
    );
    tl.to(
      ".anime-text",
      {
        top: "-100%",
      },
      "a"
    );
    tl.to(
      ".nav-menu-top>div",
      {
        scale: 1,
        opacity: 1,
        y: 50,
      },
      "b"
    );

    tl.to(
      ".nav-menu-bottom a",
      {
        scale: 1,
        opacity: 1,
        y: 50,
      },
      "b"
    );
  });

  const menuClose = document.querySelector(".menu-close");

  menuClose.addEventListener("click", () => {
    const tl = gsap.timeline();
    tl.to(
      ".nav-menu-top>div",
      {
        scale: 0.6,
        opacity: 0,
        y: 0,
      },
      "a"
    );

    tl.to(
      ".nav-menu-bottom a",
      {
        scale: 0.6,
        opacity: 0,
        y: 0,
      },
      "a"
    );

    tl.to(
      ".anime-text",
      {
        top: "-100%",
      },
      "a"
    );
    tl.to(
      ".anime-text>h1",
      {
        x: "0",
        stagger: {
          amount: 1,
          from: "center",
        },
      },
      "a"
    );

    tl.to(".anime-text", {
      delay: -0.3,
      rotate: "0deg",
      duration: 1,
      scale: 1.2,
    });

    tl.to(".nav-menu", {
      opacity: 0,
      pointerEvents: "none",
    });
  });
};

menuAnimation();

const page2Animation = () => {
  clutterAnimation(".page2-title > h1");
  gsap.from(".page2-title > h1>span", {
    y: 200,
    opacity: 0,
    // rotate: 180,
    stagger: {
      amount: 2,
      from: "random",
    },
    scrollTrigger: {
      scroller: "body",
      trigger: ".page2-title>h1",
      start: "top 60%",
      end: "top 10%",
      scrub: 1,
      // markers: true,
    },
  });

  const page2PartsTl = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: ".page2",
      start: "top 0%",
      end: "top -1200%",
      pin: true,
      scrub: 1,
      // markers: true,
    },
  });

  gsap.from(".page2-right,.page2-rotation", {
    opacity: 0,
    scrollTrigger: {
      scroller: "body",
      trigger: ".page2",
      start: "top 0%",
      end: "top -100%",
      scrub: 1,
      // markers: true,
    },
  });

  page2PartsTl.to(
    ".parts-counter",
    {
      onUpdate: () => {
        document.querySelector(".parts-counter").textContent = "01";
        const allNavigation = document.querySelectorAll(
          ".page2-navigation-circle"
        );
        allNavigation.forEach((item, index) => {
          if (index === 0) {
            gsap.to(item, {
              backgroundColor: "#000",
            });
          } else {
            gsap.to(item, {
              backgroundColor: "#fff",
            });
          }
        });
      },
    },
    "same"
  );

  // page2PartsTl.to(
  //   ".page2-title > h1 ",
  //   {
  //     color: "transparent",
  //   },
  //   "same"
  // );

  page2PartsTl.to(
    ".page2",
    {
      backgroundColor: "#DB4D1A",
    },
    "same"
  );

  page2PartsTl.to(
    ".page2-part1",
    {
      top: "-100%",
    },
    "same"
  );

  page2PartsTl.to(
    ".part1-text",
    {
      left: "-100%",
    },
    "same"
  );

  page2PartsTl.to(
    ".parts-counter",
    {
      onUpdate: () => {
        document.querySelector(".parts-counter").textContent = "02";
        const allNavigation = document.querySelectorAll(
          ".page2-navigation-circle"
        );
        allNavigation.forEach((item, index) => {
          if (index === 1) {
            gsap.to(item, {
              backgroundColor: "#000",
            });
          } else {
            gsap.to(item, {
              backgroundColor: "#fff",
            });
          }
        });
      },
    },
    "same1"
  );

  page2PartsTl.to(
    ".page2",
    {
      backgroundColor: "#B3B3B3",
    },
    "same1"
  );

  page2PartsTl.to(
    ".page2-part2",
    {
      top: "-100%",
    },
    "same1"
  );

  page2PartsTl.to(
    ".part2-text",
    {
      left: "-100%",
    },
    "same1"
  );

  page2PartsTl.to(
    ".parts-counter",
    {
      onUpdate: () => {
        document.querySelector(".parts-counter").textContent = "03";
        const allNavigation = document.querySelectorAll(
          ".page2-navigation-circle"
        );
        allNavigation.forEach((item, index) => {
          if (index === 2) {
            gsap.to(item, {
              backgroundColor: "#000",
            });
          } else {
            gsap.to(item, {
              backgroundColor: "#fff",
            });
          }
        });
      },
    },
    "same2"
  );

  page2PartsTl.to(
    ".page2",
    {
      backgroundColor: "#3E8DCE",
    },
    "same2"
  );

  page2PartsTl.to(
    ".page2-part3",
    {
      top: "-100%",
    },
    "same2"
  );

  page2PartsTl.to(
    ".part3-text",
    {
      left: "-100%",
    },
    "same2"
  );

  page2PartsTl.to(
    ".parts-counter",
    {
      onUpdate: () => {
        document.querySelector(".parts-counter").textContent = "04";
        const allNavigation = document.querySelectorAll(
          ".page2-navigation-circle"
        );
        allNavigation.forEach((item, index) => {
          if (index === 3) {
            gsap.to(item, {
              backgroundColor: "#000",
            });
          } else {
            gsap.to(item, {
              backgroundColor: "#fff",
            });
          }
        });
      },
    },
    "same3"
  );

  page2PartsTl.to(
    ".page2",
    {
      backgroundColor: "#A031FF",
    },
    "same3"
  );

  page2PartsTl.to(
    ".page2-part4",
    {
      top: "-100%",
    },
    "same3"
  );

  page2PartsTl.to(
    ".part4-text",
    {
      left: "-100%",
    },
    "same3"
  );

  page2PartsTl.to(
    ".parts-counter",
    {
      onUpdate: () => {
        document.querySelector(".parts-counter").textContent = "05";
        const allNavigation = document.querySelectorAll(
          ".page2-navigation-circle"
        );
        allNavigation.forEach((item, index) => {
          if (index === 4) {
            gsap.to(item, {
              backgroundColor: "#000",
            });
          } else {
            gsap.to(item, {
              backgroundColor: "#fff",
            });
          }
        });
      },
    },
    "same4"
  );

  page2PartsTl.to(
    ".page2",
    {
      backgroundColor: "#3B7977",
    },
    "same4"
  );

  page2PartsTl.to(
    ".page2-part5",
    {
      top: "-100%",
    },
    "same4"
  );

  page2PartsTl.to(
    ".part5-text",
    {
      left: "-100%",
    },
    "same4"
  );

  page2PartsTl.to(
    ".parts-counter",
    {
      onUpdate: () => {
        document.querySelector(".parts-counter").textContent = "06";
        const allNavigation = document.querySelectorAll(
          ".page2-navigation-circle"
        );
        allNavigation.forEach((item, index) => {
          if (index === 5) {
            gsap.to(item, {
              backgroundColor: "#000",
            });
          } else {
            gsap.to(item, {
              backgroundColor: "#fff",
            });
          }
        });
      },
    },
    "same5"
  );

  page2PartsTl.to(
    ".page2",
    {
      backgroundColor: "#1477FB",
    },
    "same5"
  );

  page2PartsTl.to(
    ".page2-part6",
    {
      top: "-100%",
    },
    "same5"
  );

  page2PartsTl.to(
    ".part6-text",
    {
      left: "-100%",
    },
    "same5"
  );

  page2PartsTl.to(
    ".parts-counter",
    {
      onUpdate: () => {
        document.querySelector(".parts-counter").textContent = "07";
        const allNavigation = document.querySelectorAll(
          ".page2-navigation-circle"
        );
        allNavigation.forEach((item, index) => {
          if (index === 6) {
            gsap.to(item, {
              backgroundColor: "#000",
            });
          } else {
            gsap.to(item, {
              backgroundColor: "#fff",
            });
          }
        });
      },
    },
    "same6"
  );

  page2PartsTl.to(
    ".page2",
    {
      backgroundColor: "#AE928D",
    },
    "same6"
  );

  page2PartsTl.to(
    ".page2-part7",
    {
      top: "-100%",
    },
    "same6"
  );

  page2PartsTl.to(
    ".part7-text",
    {
      left: "-100%",
    },
    "same6"
  );
  page2PartsTl.to(".page2", {
    backgroundColor: "#EBE4DF",
  });
};
page2Animation();

clutterAnimation(".page5-title-box > h1");
function page5Animation() {
  gsap.to(".main", {
    backgroundColor: "#000",
    scrollTrigger: {
      scroller: "body",
      trigger: ".page5",
      start: "top 30%",
      end: "top 0%",
      scrub: 1,
      // markers: true,
    },
  });

  gsap.from(".page5-title-box > h1>span", {
    x: 200,
    opacity: 0,
    // rotate: 180,
    scale: 0.5,
    stagger: {
      amount: 2,
    },
    scrollTrigger: {
      scroller: "body",
      trigger: ".page5-title-box",
      start: "top 20%",
      end: "top 0%",
      scrub: 1,
      // markers: true,
    },
  });

  // const page5AnimationTl = gsap.timeline({
  //   scrollTrigger: {
  //     scroller: "body",
  //     trigger: ".page5-box",
  //     start: "top 0",
  //     end: "top -1200%",
  //     scrub: 1,
  //     pin: true,
  //   },
  // });

  // page5AnimationTl.to(
  //   ".page5-left-part1",
  //   {
  //     top: "-30%",
  //   },
  //   "p5-p1"
  // );

  // page5AnimationTl.to(
  //   ".page5-circle > .video1",
  //   {
  //     top: "-100%",
  //   },
  //   "p5-p1"
  // );

  // page5AnimationTl.to(
  //   ".page5-left-part2",
  //   {
  //     top: "-50%",
  //   },
  //   "p5-p2"
  // );

  // page5AnimationTl.to(
  //   ".page5-circle > .video2",
  //   {
  //     top: "-210%",
  //   },
  //   "p5-p2"
  // );

  // page5AnimationTl.to(
  //   ".page5-left-part3",
  //   {
  //     top: "-65%",
  //   },
  //   "p5-p3"
  // );

  // page5AnimationTl.to(
  //   ".page5-circle > .video3",
  //   {
  //     top: "-310%",
  //   },
  //   "p5-p3"
  // );

  // page5AnimationTl.to(
  //   ".page5-left-part4",
  //   {
  //     top: "-80%",
  //   },
  //   "p5-p4"
  // );
  // page5AnimationTl.to(
  //   ".page5-circle > .video4",
  //   {
  //     top: "-510%",
  //   },
  //   "p5-p4"
  // );

  // page5AnimationTl.to(
  //   ".page5-left-part5",
  //   {
  //     top: "-80%",
  //   },
  //   "p5-p5"
  // );

  // page5AnimationTl.to(
  //   ".page5-left-part6",
  //   {
  //     top: "-100%",
  //   },
  //   "p5-p6"
  // );

  // page5AnimationTl.to(
  //   ".page5-left-part7",
  //   {
  //     top: "-110%",
  //   },
  //   "p5-p7"
  // );

  // page5AnimationTl.to(
  //   ".page5-left-part8",
  //   {
  //     top: "-130%",
  //   },
  //   "p5-p8"
  // );

  // page5AnimationTl.to(
  //   ".page5-left-part9",
  //   {
  //     top: "-140%",
  //   },
  //   "p5-p9"
  // );

  // page5AnimationTl.to(
  //   ".page5-left-part10",
  //   {
  //     top: "-70%",
  //   },
  //   "p5-p10"
  // );
}

page5Animation();

const page5AllSvg = document.querySelectorAll(".page5-all-svg");
const page5AllTitles = document.querySelectorAll(".page5-all-titles");

let flag = 0;
page5AllSvg.forEach((svg, index) => {
  svg.addEventListener("click", () => {
    if (flag === 0) {
      gsap.to(svg, {
        rotate: "45deg",
      });
      for (let i = 0; i < page5AllTitles.length; i++) {
        if (i === index) {
          if (index === 3 || index === 7) {
            gsap.to(page5AllTitles[i], {
              height: "34vw",
            });
          } else if (index === 5) {
            gsap.to(page5AllTitles[i], {
              height: "28vw",
            });
          } else {
            gsap.to(page5AllTitles[i], {
              height: "22vw",
            });
          }
        } else {
          gsap.to(page5AllTitles[i], {
            height: "6vw",
          });
          gsap.to(page5AllSvg[i], {
            rotate: "0deg",
          });
        }
      }
      flag = 1;
    } else {
      gsap.to(svg, {
        rotate: "0deg",
      });

      gsap.to(page5AllTitles[index], {
        height: "6vw",
      });

      flag = 0;
    }
  });
});
