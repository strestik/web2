// This is a simple JavaScript function to toggle the display of a menu
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Dynamické nastavení šířky <hr> podle délky textu v <h2>
// document.addEventListener("DOMContentLoaded", () => {
//   const textElement = document.querySelector('#home-text h2'); // Najde <h2> uvnitř sekce
//   const hrElement = document.getElementById('dynamic-hr');

//   if (textElement && hrElement) {
//     const textLength = 2 * textElement.innerText.length; // Získá délku textu
//     const hrWidth = Math.min(textLength); 
//     hrElement.style.width = hrWidth * 1.75 + '%'; // Nastaví šířku
//   }
// });