// fungsi slider
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

// fungsi set timer interval slider
setInterval(() => {
  moveSlide(1);
}, 7000);


// fungsi validasi luas
function validationArea() {
   // ambil dan konversi nilai base dan height
   let baseValue = parseFloat(document.getElementById("base").value);
   let heightValue = parseFloat(document.getElementById("height").value);
 
   console.log(baseValue);
   console.log(heightValue);
 
   // validasi nilai base dan height jika kosong
   if (baseValue != "" && heightValue != "" && !isNaN(baseValue) && !isNaN(heightValue)) {
     console.log("Validation Succeed");

     // perhitungan luas segitiga
     let area = (baseValue * heightValue) / 2;
     console.log(area);

     // display hasil luas
     document.getElementById("display-formula-area").textContent = `Area of Triangle: 0.5 x base x height`;
     document.getElementById("display-value-area").textContent = `Area of Triangle: 0.5 x ${baseValue} x ${heightValue}`;
     document.getElementById("display-area").textContent = `Area of Triangle: ${area}`;
   } else {
      // validasi gagal
     console.log("Validation Failed");
     alert("Input Must be Filled Out");
   }
 }

// fungsi reset inputan luas segitiga
function resetArea() {
   document.getElementById("display-formula-area").textContent = ``;
   document.getElementById("display-value-area").textContent = ``;
   document.getElementById("display-area").textContent = ``;
}

// fungsi validasi keliling
function validationPerimeter() {
   // ambil dan konversi nilai side a, b, dan c
   let aValue = parseFloat(document.getElementById("side-a").value);
   let bValue = parseFloat(document.getElementById("side-b").value);
   let cValue = parseFloat(document.getElementById("side-c").value);
 
   console.log(aValue);
   console.log(bValue);
   console.log(cValue);
 
   // validasi nilai side a, b, dan c jika kosong
   if (aValue != "" && bValue != "" && cValue != "" && !isNaN(aValue) && !isNaN(bValue) && !isNaN(cValue)) {
     console.log("Validation Succeed");

     // perhitungan keliling segitiga
     let perimeter = (aValue + bValue + cValue);
     console.log(perimeter);

     // display hasil keliling
     document.getElementById("display-formula-perimeter").textContent = `Perimeter of Triangle: a + b + c`;
     document.getElementById("display-value-perimeter").textContent = `Perimeter of Triangle: ${aValue} + ${bValue} + ${cValue}`;
     document.getElementById("display-perimeter").textContent = `Perimeter of Triangle: ${perimeter}`;
   } else {
      // validasi gagal
     console.log("Validation Failed");
     alert("Input Must be Filled Out");
   }
 }

//fungsi reset inputan keliling segitiga
function resetPerimeter() {
   document.getElementById("display-formula-perimeter").textContent = ``;
   document.getElementById("display-value-perimeter").textContent = ``;
   document.getElementById("display-perimeter").textContent = ``;
}
 
// validasi digit input base
document.getElementById("base").addEventListener('input', function displayChange() {
  console.log(this.value);
  let e = this.value;
  
  // regex nilai yang bukan berada di rentang 0-9
  let chars = /^[0-9]+$/;

  if (chars.test(e)) {
     console.log("digits");
  } else {
     // validasi gagal
     console.log("not digits");
     alert("Not Digits, Value Must be Positive!");
   }
})

// validasi digit input height
document.getElementById("height").addEventListener('input', function displayChange() {
   console.log(this.value);
   let e = this.value;
   
   // regex nilai yang bukan berada di rentang 0-9
   let chars = /^[0-9]+$/;
   
   if (chars.test(e)) {
      console.log("digits");
   } else {
      // validasi gagal
      console.log("not digits");
      alert("Not Digits, Value Must be Positive!");
   }
})

// validasi digit input side-a
document.getElementById("side-a").addEventListener('input', function displayChange() {
   console.log(this.value);
   let e = this.value;
   
   // regex nilai yang bukan berada di rentang 0-9
   let chars = /^[0-9]+$/;
   
   if (chars.test(e)) {
      console.log("digits");
   } else {
      // validasi gagal
      console.log("not digits");
      alert("Not Digits, Value Must be Positive!");
   }
})

// validasi digit input side-b
document.getElementById("side-b").addEventListener('input', function displayChange() {
   console.log(this.value);
   let e = this.value;
   
   // regex nilai yang bukan berada di rentang 0-9
   let chars = /^[0-9]+$/;
   
   if (chars.test(e)) {
      console.log("digits");
   } else {
      // validasi gagal
      console.log("not digits");
      alert("Not Digits, Value Must be Positive!");
   }
})

// validasi digit input side-c
document.getElementById("side-c").addEventListener('input', function displayChange() {
   console.log(this.value);
   let e = this.value;
   
   // regex nilai yang bukan berada di rentang 0-9
   let chars = /^[0-9]+$/;
   
   if (chars.test(e)) {
      console.log("digits");
   } else {
      // validasi gagal
      console.log("not digits");
      alert("Not Digits, Value Must be Positive!");
   }
})