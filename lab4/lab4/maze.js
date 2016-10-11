"use strict";

console.log("test");

var addFailureClass = function (obj) {
    obj.className += " youlose";
};

var completioncheck = function () {
    var lst = document.querySelectorAll(".youlose");
    console.log("list length: " + lst.length);
    var checker = undefined;
    for(var i = 0; i < lst.length; i++)
    {
        checker = lst[i].className;
        console.log("checker value["+i+"]: " + checker);
        if(checker == "boundary youlose")
        {
            console.log("boundary matched.");
        }
    }
};

document.addEventListener("DOMContentLoaded", function () {
    console.log("here");
    var firstWall = document.getElementById("boundary1");
    console.log(firstWall);
    addFailureClass(firstWall);
    var walls = document.querySelectorAll(".boundary");
    console.log("Query length returned: " + walls.length);
    for(var i = 1; i < (walls.length) - 1; i++)
    {
        addFailureClass(walls[i]);
        if(i >= walls.length)
        {
            console.log("loop error for boundries");
            break;
        }
    }
    completioncheck();
});