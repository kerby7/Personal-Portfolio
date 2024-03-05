
let menuIcon = document.querySelector("#bar");
let navbar = document.querySelector(".navbar");
const projectsTitle = document.querySelector(".projectsTitle");
const laptops = document.querySelectorAll(".laptop");
//Adding bar and close for responsive navbar menu
menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-x");
  navbar.classList.toggle("active");
};

// Active links on each sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  let top = window.scrollY; 
  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
      });
      document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100); 

  menuIcon.classList.remove("fa-x");
  navbar.classList.remove("active");
};


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

/* Animation for scroll on project section */
window.addEventListener("scroll", () => {
  let offsetY = window.scrollY;

  laptops[0].style.transform = `translateX(calc(395vh - ${offsetY}px))`;
  laptops[1].style.transform = `translateX(calc(545vh - ${offsetY}px))`;
  laptops[2].style.transform = `translateX(calc(690vh - ${offsetY}px))`;
  laptops[3].style.transform = `translateX(calc(830vh - ${offsetY}px))`;
});

