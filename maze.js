// JavaScript source code

function addWallListneers(obj) {
    console.log(obj.length);
    for (var i = 0; i < obj.length - 1; i++) {
        console.log(i);
        obj[i].addEventListener("mouseover", function () {
            this.className += " youlose";
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("Page loaded.");
    /*document.getElementById("boundary1").addEventListener("mouseover", function () {
        this.className += " youlose";
    });*/
    var myLst = document.querySelectorAll(".boundary");
    addWallListneers(myLst);
});