document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("slider");
    const obrazek = document.getElementById("amaz");

    slider.addEventListener("input", function () {
        if (slider.value >= 70) {
            obrazek.style.display = "block";
        } else {
            obrazek.style.display = "none";
        }
    });
});
