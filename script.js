
const projectsTitle = document.querySelector(".projectsTitle");
const phone = document.querySelector(".phone");
const laptops = document.querySelectorAll(".laptop");

const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

/* Hamburger click function */
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

/* Closing the hamburger */
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// Adding scroll effect for every section.
window.addEventListener("scroll", reveal);

function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", () => {
  let offsetY = window.scrollY;
 
  phone.style.transform = `translateX(calc(310vh - ${offsetY}px))`;
  laptops[0].style.transform = `translateX(calc(425vh - ${offsetY}px))`;
  laptops[1].style.transform = `translateX(calc(560vh - ${offsetY}px))`;
  laptops[2].style.transform = `translateX(calc(680vh - ${offsetY}px))`;
  laptops[3].style.transform = `translateX(calc(820vh - ${offsetY}px))`;
});
