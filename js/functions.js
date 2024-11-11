"use strict";

const getYear = document.getElementById("getYear");
const newDate = new Date();
const getyear = newDate.getFullYear();
// console.log(getyear);
getYear.textContent = getyear;
const text1 = ["my name is Mathew Emmanuel,"];
const local = document.getElementById("getDate");
const local1 = document.getElementById("getDate1");
const local2 = document.getElementById("getDate2");
const local3 = document.getElementById("getDate3");
let count = -0;
let index = 0;
let currentText = "";
let letter = " ";
let opts = {
  day: "numeric",
  year: "numeric",
  month: "short",
};
let localDate = Intl.DateTimeFormat("en-US", opts).format(newDate);
local.textContent = localDate;
local1.textContent = localDate;
local2.textContent = localDate;
local3.textContent = localDate;

// Hamburger jquery
$(".hamburger").on("click", function (e) {
  e.preventDefault();
  $(this).toggleClass("navicon--active");
  $(".toggle").toggleClass("toggle--active");
});
///
// // Find all sections with the "date-section" class
// const dateSections = document.getElementById('getDate');

// // Loop through each section and display the date
// for (const section of dateSections) {
//     // Create a new paragraph element to display the date
//     const paragraph = document.createElement('h5');
//     paragraph.textContent = ${dateString};

//     // Append the paragraph element to the section
//     section.appendChild(paragraph);
// }

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
  // console.log("1 second Passed");
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
  // console.log("2 second Passed");
  (function type() {
    const textopacity = document.querySelector(".typing1");
    // console.log(textopacity);
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

// swiper
var swiper = new Swiper(".blog-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: ".blog-slider__pagination",
    clickable: true,
  },
});
// hamburger js
var paperMenu = {
  $window: $("#paper-window"),
  $paperFront: $("#paper-front"),
  $hamburger: $(".hamburger"),
  offset: 1800,
  pageHeight: $("#paper-front").outerHeight(),

  open: function () {
    this.$window.addClass("tilt");
    this.$hamburger.off("click");
    $("#container, .hamburger").on("click", this.close.bind(this));
    this.hamburgerFix(true);
    console.log("opening...");
  },
  close: function () {
    this.$window.removeClass("tilt");
    $("#container, .hamburger").off("click");
    this.$hamburger.on("click", this.open.bind(this));
    this.hamburgerFix(false);
    console.log("closing...");
  },
  updateTransformOrigin: function () {
    scrollTop = this.$window.scrollTop();
    equation = ((scrollTop + this.offset) / this.pageHeight) * 100;
    this.$paperFront.css("transform-origin", "center " + equation + "%");
  },
  //hamburger icon fix to keep its position
  hamburgerFix: function (opening) {
    if (opening) {
      $(".hamburger").css({
        position: "absolute",
        top: this.$window.scrollTop() + 30 + "px",
      });
    } else {
      setTimeout(function () {
        $(".hamburger").css({
          position: "fixed",
          top: "30px",
        });
      }, 300);
    }
  },
  bindEvents: function () {
    this.$hamburger.on("click", this.open.bind(this));
    $(".close").on("click", this.close.bind(this));
    this.$window.on("scroll", this.updateTransformOrigin.bind(this));
  },
  init: function () {
    this.bindEvents();
    this.updateTransformOrigin();
  },
};

paperMenu.init();
