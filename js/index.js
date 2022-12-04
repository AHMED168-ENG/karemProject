var uppingbuttonnn = document.querySelector(".upping-button");
// part 1 about nave bar
var uppernave = window.document.querySelector(".upper-nave"),
  navbar = document.querySelector(".navbar"),
  navebarli = document.querySelectorAll(".navbar .nav-item");
var about = document.getElementById("about");
var menue = document.getElementById("services");
var spechils = document.getElementById("ourNews");
var event = document.getElementById("consultation");
var chefs = document.getElementById("callUs");

window.onscroll = function () {
  "use strict";
  if (document.documentElement.scrollTop <= 600) {
    uppingbuttonnn.style.opacity = "0";
    uppingbuttonnn.style.visibility = "heddin";
  } else {
    uppingbuttonnn.style.opacity = "1";
    uppingbuttonnn.style.visibility = "visible";
  }
  if (window.pageYOffset >= 200) {
    uppernave.style.display = "none";
    navbar.classList.add("scrold");
  } else {
    uppernave.style.display = "block";
    navbar.classList.remove("scrold");
  }
  for (var qq = 0; qq < navebarli.length; qq++) {
    navebarli[qq].firstElementChild.classList.remove("active");
  }
  if (window.scrollY >= contact.offsetTop) {
    navebarli[7].firstElementChild.classList.add("active");
  } else if (window.scrollY >= galary.offsetTop) {
    navebarli[6].firstElementChild.classList.add("active");
  } else if (window.scrollY >= chefs.offsetTop) {
    navebarli[5].firstElementChild.classList.add("active");
  } else if (window.scrollY >= event.offsetTop) {
    navebarli[4].firstElementChild.classList.add("active");
  } else if (window.scrollY >= spechils.offsetTop) {
    navebarli[3].firstElementChild.classList.add("active");
  } else if (window.scrollY >= menue.offsetTop) {
    navebarli[2].firstElementChild.classList.add("active");
  } else if (window.scrollY >= about.offsetTop) {
    navebarli[1].firstElementChild.classList.add("active");
  } else {
    navebarli[0].firstElementChild.classList.add("active");
  }
};
uppingbuttonnn.onclick = function () {
  "use strict";
  var cleringss = setInterval(function () {
    window.scrollBy(0, -100);
    if (window.pageYOffset == 0) {
      clearInterval(cleringss);
    }
  }, 30);
};
