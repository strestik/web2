// document.addEventListener("DOMContentLoaded", function () {
//     const slider = document.getElementById("slider");
//     const obrazek = document.getElementById("amaz");

//     slider.addEventListener("input", function () {
//         if (slider.value >= 70) {
//             obrazek.style.display = "block";
//         } else {
//             obrazek.style.display = "none";
//         }
//     });
// });


// const menuButton = document.getElementById('menu-button');
// const sideMenu = document.getElementById('side-menu');
// const closeButton = document.getElementById('close-button');

// menuButton.addEventListener('click', () => {
//     sideMenu.classList.add('open');
// });

// closeButton.addEventListener('click', () => {
//     sideMenu.classList.remove('open');
// });

// // volitelně: kliknutí mimo menu ho taky zavře
// document.addEventListener('click', (e) => {
//     if (!sideMenu.contains(e.target) && !menuButton.contains(e.target)) {
//         sideMenu.classList.remove('open');
//     }
// });

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}