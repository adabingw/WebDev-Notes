// document.body.innerHTML = "W";
var headingEl = document.getElementById("table");
console.log(headingEl);
headingEl.innerHTML = "table of continents";

var countdown = 27;
var s = "javascript web development.";
// Step 2. What function will change it each time?
var heading = document.getElementById("title2");
heading.innerHTML = "";
heading.style.color = "black";
var i = 0;
var countItDown = function() {
  if (countdown > 0) {
    countdown = countdown - 1;  
    heading.innerHTML+=s[i];
    i++;
  } else if (countdown == 0) {
    window.clearInterval(timer);
  }
};
// Step 3: Call that on an interval
var timer = window.setInterval(countItDown, 200);

//   var slideShow = function(container) {
//     this.images = [];
//     this.curImage = 0;
//     for (i = 0; i < container.childElementCount; i++) {
//         this.images.push(container.children[i]);
//         this.images[i].style.display = "none";
//     }
    
//     // Handle going to to the next slide
//     var nextSlide = function() {
//         for (var i = 0; i < this.images.length; i++) {
//             this.images[i].style.display = "none";
//         }
//         this.images[this.curImage].style.display = "block";
//         this.curImage++;
//         if (this.curImage >= this.images.length) {
//             this.curImage = 0;
//         }
//         window.setTimeout(nextSlide.bind(this), 1000);
//     };
    
//     nextSlide.call(this);
// };
// slideShow(document.getElementById("slideshow"));

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}