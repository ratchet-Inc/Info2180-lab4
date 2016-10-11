console.log("test");

document.addEventListener("DOMContentLoaded", function () {
    console.log("here");
    var walls = document.getElementById("boundary1");
    console.log(walls);
    walls.className += " youlose";
});