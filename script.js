// This is a simple JavaScript function to toggle the display of a menu
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function superposition(sw) {
  var pic;
  if (sw == 0) {
    pic = "images/superp_rolling.gif"
  }
  if  (sw == 1) {
    pic = "images/superp_translation.gif"
  }
  if (sw == 2) {
    pic = "images/superp_rotation.gif"
  }
  if (sw == 3) {
    pic = "https://www.acs.psu.edu/drussell/Demos/superposition/interference.gif"
  }
  document.getElementById('superp').src = pic;
}