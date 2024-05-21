let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelector(".slides");
  const totalSlides = slides.children.length;
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  const offset = -currentIndex * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
  moveSlide(1);
}, 7000);

document.getElementById("base").addEventListener('input', function displayChange() {
  console.log(this.value)
  let e = this.value
  
  let chars = /^[0-9]+$/

  if (chars.test(e)) {
     console.log("digits")
  } else {
     console.log("not digits")
  }
})

document.getElementById("height").addEventListener('input', function displayChange() {
  console.log(this.value)
  let e = this.value
  
  let chars = /^[0-9]+$/

  if (chars.test(e)) {
     console.log("digits")
  } else {
     console.log("not digits")
  }
})

document.getElementById("side-a").addEventListener('input', function displayChange() {
  console.log(this.value)
  let e = this.value
  
  let chars = /^[0-9]+$/

  if (chars.test(e)) {
     console.log("digits")
  } else {
     console.log("not digits")
  }
})

document.getElementById("side-b").addEventListener('input', function displayChange() {
  console.log(this.value)
  let e = this.value
  
  let chars = /^[0-9]+$/

  if (chars.test(e)) {
     console.log("digits")
  } else {
     console.log("not digits")
  }
})

document.getElementById("side-c").addEventListener('input', function displayChange() {
  console.log(this.value)
  let e = this.value
  
  let chars = /^[0-9]+$/

  if (chars.test(e)) {
     console.log("digits")
  } else {
     console.log("not digits")
  }
})