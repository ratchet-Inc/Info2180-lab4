"use strict";

console.log("test");

//////////////////////////// global variables

var startedSignal = 0;

////////////////////////////////////////////////

//////////////////////////// function declarations
var addFailureClass = function (obj) {
    obj.className += " youlose";
};

var addFailListeners = function () {
    var lst = document.querySelectorAll(".boundary");
    console.log("length check: " + lst.length);
    for (var i = 0; i < lst.length - 1; i++) {
        lst[i].addEventListener("mouseover", function () { addFailureClass(lst[i]); });
        console.log("div class name[" +i+"]: " + lst[i].className);
    }
}

function completioncheck() {
    if(startedSignal == 1)
    {
        var lst = document.querySelectorAll(".youlose");
        console.log("list length: " + lst.length);
        if (lst.length > 0) {
            console.log("challenge failed.");
        }
        startedSignal = 0;
    }
}

function restartMaze() {
    restartMaze = 1;
    var lst = document.querySelectorAll(".youlose");
    console.log("restartMaze list lenght: " + lst.length);
    if(lst.length > 0)
    {
        for(var i = 0; i < (lst.length); i++)
        {
            lst[i].className = "boundary";
        }
    }
}
//////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
    /*console.log("here");
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
    restartMaze();*/
    var startingClick = document.getElementById("start");
    startingClick.addEventListener("click", function () { restartMaze(); });
    addFailListeners();
    //console.log("variable data check: " + walls[0]);
    var endingPosition = document.getElementById("end");
    endingPosition.addEventListener("mouseover", function () { completioncheck(); });
});