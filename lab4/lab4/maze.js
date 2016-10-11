"use strict";

console.log("test");

//////////////////////////// global variables

var startedSignal = 0;

////////////////////////////////////////////////

//////////////////////////// function declarations
var addFailureClass = function (obj) {
    obj.className += " youlose";
};

var completioncheck = function () {
    if(startedSignal == 1)
    {
        var lst = document.querySelectorAll(".youlose");
        console.log("list length: " + lst.length);
        if (lst.length > 0) {
            console.log("challenge failed.");
        }
    }
};

var restartMaze = function () {
    restartMaze = 1;
    var lst = document.querySelectorAll(".boundry");
    if(lst.length != 0)
    {
        for(var i = 0; i < (lst.length - 1); i++)
        {
            lst[i].className = "boundry";
        }
    }
};
//////////////////////////////////////////////////////////

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
    var x = document.getElementById("end");
    x.addEventListener("mouseover", function () { completioncheck(); });
});