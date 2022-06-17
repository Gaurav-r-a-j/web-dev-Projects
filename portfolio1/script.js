console.log("This is portfolio");

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navList = document.querySelector(".navList");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navList.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navList.classList.remove("active");
};

// ----------Using scrollreveal here------

const sr = ScrollReveal({
  distance: "45px",
  duration: 2700,
  reset: true,
});

sr.reveal(".home-text", { delay: 350, origin: "left" });
sr.reveal(".home-img", { delay: 350, origin: "right" });

sr.reveal(".sub-service, .about, .portfolio, .service, .cta, .contact", {
  delay: 200,
  origin: "bottom",
});

////Adding Dark theme to the website

let darkBtn = document.getElementById("darkBtn");
let home = document.getElementById("home");
let darkThemeDot = document.getElementById('darkThemeDot');

darkBtn.onclick = function () {
  darkBtn.classList.toggle("darkBtn");
//   darkThemeDot.style.left = '49px';
  document.body.classList.toggle("dark-theme");
  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
    darkThemeDot.style.left = '48px';
    // darkBtn.innerText = 'Switch to Light mode';
    home.style.background = "none";
  } else {
    localStorage.setItem("theme", "light");
    darkThemeDot.style.left = '0px';

    // darkBtn.innerText = 'Switch to Dark mode';
  }
};

if (localStorage.getItem("theme") == "light") {
  darkBtn.classList.remove("darkBtn");
  document.body.classList.remove("dark-theme");
  darkThemeDot.style.left = '0px';

} else if (localStorage.getItem("theme") == "dark") {
  darkBtn.classList.add("darkBtn");
  document.body.classList.add("dark-theme");
  home.style.background = "none";
  darkThemeDot.style.left = '48px';
  
} else {
  localStorage.setItem("theme", "light");
}

// localStorage.setItem("theme", "light");
// localStorage.getItem("theme");
