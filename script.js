const nav = document.querySelector("nav");
function navBarAnimation() {
  nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();

    tl.to("#border-bottom", {
      height: "22vh",
      duration: 0.2,
    });

    tl.to(".nav-2 h5 ", {
      display: "block",
    });

    tl.to(".nav-2 h5 span", {
      y: 1,
      stagger: {
        amount: 0.1,
      },
    });
  });

  nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline();

    tl.to(".nav-2 h5 span", {
      y: 20,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to("#border-bottom", {
      height: "0",
      duration: 0.3,
    });
    tl.to(".nav-2 h5", {
      display: "none",
      duration: 0.2,
    });
  });
}

const relem = document.querySelectorAll(".right-elem");
const relmimg = document.querySelectorAll(".right-elem img");

function imageHover() {
  relem.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      gsap.to(element.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });

    element.addEventListener("mouseleave", function () {
      gsap.to(element.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });
    element.addEventListener("mousemove", function (dets) {
      gsap.to(element.childNodes[3], {
        x: dets.x - element.getBoundingClientRect().x - 60,
        y: dets.y - element.getBoundingClientRect().y - 160,
      });
    });
  });
}

function showWatchReel() {
  const play = document.querySelector(".play");
  const pageContent = document.querySelector(".page3-content");
  const video = document.querySelector("#page3 video");

  pageContent.addEventListener("click", function () {
    video.play();
    gsap.to(video, {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
      borderRadius: 0,
    });
  });

  video.addEventListener("click", () => {
    video.load();
    gsap.to(video, {
      x: 20,
      transform: "scaleX(0.7) scaleY(0)",
      opacity: 0,
      borderRadius: "30px",
    });
  });

  play.addEventListener("mouseenter", function () {
    gsap.to(".page3-content h5", {
      y: -5,
      opacity: 1,
      duration: 0.2,
    });
  });
  play.addEventListener("mouseleave", function () {
    gsap.to(".page3-content h5", {
      opacity: 0,
      y: 0,
      duration: 0.2,
    });
  });
}

function playVideo7() {
  const sections = document.querySelectorAll(".sec-right");
  sections.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      elem.childNodes[3].style.opacity = "1";
      elem.childNodes[3].play();
    });
    elem.addEventListener("mouseleave", () => {
      elem.childNodes[3].style.opacity = "0";
      elem.childNodes[3].load();
    });
  });
}

function matasqq() {
  const cards = document.querySelectorAll(".card-left , .card-right");
  cards.forEach((elem) => {
    elem.addEventListener("mouseenter", function () {
      elem.childNodes[7].style.opacity = "1";
      elem.childNodes[7].play();
    });
    elem.addEventListener("mouseleave", function () {
      elem.childNodes[7].style.opacity = "0";
      elem.childNodes[7].load();
    });
  });
  cards.forEach((elem) => {
    elem.addEventListener("mouseenter", function () {
      elem.childNodes[7].style.opacity = "1";
      elem.childNodes[7].play();
    });
    elem.addEventListener("mouseleave", function () {
      elem.childNodes[7].style.opacity = "0";
      elem.childNodes[7].load();
    });
  });
}
navBarAnimation();
imageHover();
showWatchReel();
playVideo7();
matasqq();
