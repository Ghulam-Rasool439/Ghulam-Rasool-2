let dropMenu = document.getElementById('language-drop');
let img = document.getElementById('eng-img');
let language = document.getElementById('eng-btn');
let Urdu = document.querySelector('.Urdu')
let Arbi = document.querySelector('.Arbi')
let English = document.querySelector('.English')

img.addEventListener("click", () =>{
    dropMenu.style.display = "block"
})
// img.addEventListener("click", () =>{
//   if (dropMenu === block) {
//     dropMenu.style.display = "none";
//   }else{
//     dropMenu.style.display = "block"
//   }
// })

Urdu.addEventListener("click", () =>{
  language.textContent = "Ur"
} )

Arbi.addEventListener("click", ()=>{
  language.textContent = "Ar"
})

// English.addEventListener("clcik", ()=>{
//   language.textContent = "ky"
// })

dropMenu.addEventListener("click", () =>{
      dropMenu.style.display = 'none';
})

// ----------------------------------section----------------------

const sections = ['description', 'specification', 'reviews', ]

function showSection(SectionId) {
  sections.forEach(id => {
    document.getElementById(id).style.display = (id === SectionId) ? 'block' : 'None' ;
  })
}

document.getElementById('description-li').addEventListener("click", () => showSection('description'));
document.getElementById('Specification-li').addEventListener("click", () => showSection('specification'));
document.getElementById('review-li').addEventListener("click", () => showSection('reviews'));

showSection('description');

// -------------------------------------imgcbhang-----------------------



  let decrease = document.getElementById('decrease');
  let increase = document.getElementById('increase');
  let valueElement = document.querySelector('.value')
  let addTocart = document.querySelector('.add-to-cart-value')
  let total = 0;

  let gr = 0;

  decrease.addEventListener("click", () =>{
    if (gr > 0) {
      gr--
      valueElement.textContent = gr;      
      total--
      addTocart.textContent= total;
    }
  })

  increase.addEventListener("click", () =>{
    gr++
    valueElement.textContent= gr;
    total++
    addTocart.textContent = total;
  })

  let mainImg = document.getElementById('man-img')
  let smallingImg = document.getElementsByClassName('small-img')

  smallingImg[0].onclick = function(){
    mainImg.src = smallingImg[0].src;
  }
  smallingImg[1].onclick = function(){
    mainImg.src = smallingImg[1].src;
  }
  smallingImg[2].onclick = function(){
    mainImg.src = smallingImg[2].src;
  }
  smallingImg[3].onclick = function(){
    mainImg.src = smallingImg[3].src;
  }

  let addtocartButton = document.querySelectorAll('.add-cart-button')

  addtocartButton.forEach((allbuttons) =>{
    allbuttons.addEventListener("click", () =>{
      total++
      addTocart.textContent = total;
    })
  })