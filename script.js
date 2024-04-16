const nav = document.querySelector("nav");
function navBarAnimation(params) {
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
