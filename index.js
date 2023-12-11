const pageright = document.querySelectorAll(".page1-right")
var count = 0;
var btn1 = document.querySelector(".btn1")
var btn2 = document.querySelector(".btn2")


var signin = () => {

  count = (currentSlides - 1 + pageright.length);
  showSlide(count)
}

var joinin = () => {
  count = (count + 1 + pageright.length) % pageright.length
  showSlide(count)
}

showSlide(count)


function showSlide(index) {
  pageright.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    if (i === 0) {

      btn2.style.color = "black"
      btn1.style.color = "#8064A2"
      btn1.style.textDecoration = "underline"
      btn2.style.textDecoration = "none"
    } else {
      btn1.style.color = "black"
      btn2.style.color = "#8064A2"
      btn2.style.textDecoration = "underline"
      btn1.style.textDecoration = "none"
    }

  })
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


var goFirst = () => {
  window.scrollTo(0, 0)
}