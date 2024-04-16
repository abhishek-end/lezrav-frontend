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
navBarAnimation();

const relem = document.querySelectorAll(".right-elem");
const relmimg = document.querySelectorAll(".right-elem img");

function imageHover() {
  relem.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      gsap.to(element.childNodes[3], {
        borderColor: "green",
        borderWidth: "1px",
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
imageHover();
