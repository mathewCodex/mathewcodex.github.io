"use strict";

const newDate = new Date();
const getyear = newDate.getFullYear();
console.log(getyear);

const text1 = ["my name is mathew Emmanuel,"];

let count = -0;
let index = 0;
let currentText = "";
let letter = " ";

// (function type() {
//   if (count === texts.length) {
//     count = 30;
//   }
//   currentText = texts[count];
//   letter = currentText.slice(-0, ++index);

//   document.querySelector(".typing").textContent = letter;
//   if (letter.length === currentText.length) {
//     count++;
//     index = 0;
//   }
//   setTimeout(type, 400);

// })();
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
//multple
wait(1).then(() => {
  console.log("1 second Passed");
  (function type() {
    if (count === text1.length) {
      count = 30;
    }
    currentText = text1[count];
    letter = currentText.slice(-0, ++index);

    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentText.length) {
      count++;
      index = 0;
    }
    setTimeout(type, 100);
  })();
  return wait(1);
});
wait(5).then(() => {
  console.log("2 second Passed");
  (function type() {
    const textopacity = document.querySelector(".typing1");
    console.log(textopacity);
    textopacity.style.opacity = 1;
    //Passing "arguments" into handler...
  })();
  return wait(1);
  /////////////////////
});
wait(15).then(() => {
  // console.log("2 second Passed");
  (function type() {
    const sectionOpacity = document.querySelector(".my-Sec");
    const teamView = document.querySelector(".team-section");
    // const transit = document.getElementById("transit");
    // transit.style.transition = "0.5s ease in";
    sectionOpacity.style.display = "block";
    teamView.style.display = "none";

    //Passing "arguments" into handler...
  })();
  return wait(15);
  /////////////////////
});

// Reveal sections making the opacity 1;
const allSections = document.querySelector(".my-Sec");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");

  const x = window.matchMedia("(min-width: 1500px)");
  if (x.matches) {
    expandImg.parentElement.style.display = "none";
    bigscreen.style.display = "block ";
  } else {
    expandImg.parentElement.style.display = "block";
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
  }
  // Show the container element (hidden with CSS)
}

// function myFunction(x) {
//   if (x.matches) {
//     // If media query matches
//     var bigscreen = document.querySelector(".container");
//     bigscreen.style.display = "block ";
//     alert("matches");
//   } else {
//     var expandImg = document.getElementById("expandedImg");
//     expandImg.style.display = "block";
//     bigscreen.style.display = "block";
//     alert("blocks");
//   }
// }

// myFunction(x); // Call listener function at run time
//x.addListener(myFunction) // Attach listener function on state changes
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgba(${randomInt(0, 255)} ,${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector(".nav__item").addEventListener("click", function (e) {
  this.style.color = randomColor();
});
document.querySelector(".colors").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
});

//////text color

// // PART 1
// const loadNPause = async function () {
//   try {
//     // Load image 1
//     let img = await createImage("img/img-1.jpg");
//     console.log("Image 1 loaded");
//     await wait(2);
//     img.style.display = "none";

//     // Load image 1
//     img = await createImage("img/img-2.jpg");
//     console.log("Image 2 loaded");
//     await wait(2);
//     img.style.display = "none";
//   } catch (err) {
//     console.error(err);
//   }
// };
/////////////////////////////////////////////////Portfolio page javascript..

const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");

//add fixed class to navbar

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
    console.log("ok");
  }
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  console.log("ok1");
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  console.log("ok");
}
