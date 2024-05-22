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

function validationArea() {
   let baseValue = parseFloat(document.getElementById("base").value);
   let heightValue = parseFloat(document.getElementById("height").value);
 
   console.log(baseValue);
   console.log(heightValue);
 
   if (baseValue != "" && heightValue != "" && !isNaN(baseValue) && !isNaN(heightValue)) {
     console.log("Validation Succeed");
     let area = (baseValue * heightValue) / 2;
     console.log(area);
     document.getElementById("displayFormulaArea").textContent = `Area of Triangle: 0.5 x base x height`;
     document.getElementById("displayValueArea").textContent = `Area of Triangle: 0.5 x ${baseValue} x ${heightValue}`;
     document.getElementById("displayArea").textContent = `Area of Triangle: ${area}`;
   } else {
     console.log("Validation Failed");
     alert("Input Must be Filled Out");
   }
 }

function validationPerimeter() {
   let aValue = parseFloat(document.getElementById("side-a").value);
   let bValue = parseFloat(document.getElementById("side-b").value);
   let cValue = parseFloat(document.getElementById("side-c").value);
 
   console.log(aValue);
   console.log(bValue);
   console.log(cValue);
 
   if (aValue != "" && bValue != "" && cValue != "" && !isNaN(aValue) && !isNaN(bValue) && !isNaN(cValue)) {
     console.log("Validation Succeed");
     let perimeter = (aValue + bValue + cValue);
     console.log(perimeter);
     document.getElementById("displayFormulaPerimeter").textContent = `Perimeter of Triangle: a + b + c`;
     document.getElementById("displayValuePerimeter").textContent = `Perimeter of Triangle: ${aValue} + ${bValue} + ${cValue}`;
     document.getElementById("displayPerimeter").textContent = `Perimeter of Triangle: ${perimeter}`;
   } else {
     console.log("Validation Failed");
     alert("Input Must be Filled Out");
   }
 }
 
document.getElementById("base").addEventListener('input', function displayChange() {
  console.log(this.value);
  let e = this.value;
  
  let chars = /^[0-9]+$/;

  if (chars.test(e)) {
     console.log("digits");
  } else {
     console.log("not digits");
     alert("Not Digits, Value Must be Positive!");
   }
})

document.getElementById("height").addEventListener('input', function displayChange() {
   console.log(this.value);
   let e = this.value;
   
   let chars = /^[0-9]+$/;
   
   if (chars.test(e)) {
      console.log("digits");
   } else {
      console.log("not digits");
      alert("Not Digits, Value Must be Positive!");
   }
})

document.getElementById("side-a").addEventListener('input', function displayChange() {
   console.log(this.value);
   let e = this.value;
   
   let chars = /^[0-9]+$/;
   
   if (chars.test(e)) {
      console.log("digits");
   } else {
      console.log("not digits");
      alert("Not Digits, Value Must be Positive!");
   }
})

document.getElementById("side-b").addEventListener('input', function displayChange() {
   console.log(this.value);
   let e = this.value;
   
   let chars = /^[0-9]+$/;
   
   if (chars.test(e)) {
      console.log("digits");
   } else {
      console.log("not digits");
      alert("Not Digits, Value Must be Positive!");
   }
})

document.getElementById("side-c").addEventListener('input', function displayChange() {
   console.log(this.value);
   let e = this.value;
   
   let chars = /^[0-9]+$/;
   
   if (chars.test(e)) {
      console.log("digits");
   } else {
      console.log("not digits");
      alert("Not Digits, Value Must be Positive!");
   }
})