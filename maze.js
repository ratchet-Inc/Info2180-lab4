// JavaScript source code
/////////////////// enables strict mode
"use struct";

///////////////////////// global variable
var startValue = 0;
var boundaryList = undefined;
var loopLimit = undefined;
//////////////////////////////////////////////

////////////////////////// function declarations
function addFailClass(obj) {
    obj.className += " youlose";
}

function addWallListneers(obj) {
    console.log(loopLimit);
    for (var i = 0; i < loopLimit; i++) {
        console.log(i);
        obj[i].addEventListener("mouseover", function () {
            if (startValue == 1) {
                addFailClass(this);
            }
            completionCheck();
        });
    }
}

function restartMaze() {
    console.log("restart Maze sequence");
    startValue = 1;
    var lst = document.querySelectorAll(".youlose");
    if(lst.length > 0)
    {
        for (var i = 0; i < lst.length; i++) {
            lst[i].className = "boundary";
        }
    }
    addAntiCheat();
    changeStatus("Now Playing, GOOD LUCK!!");
}

function completionCheck() {
    console.log("completion sequence");
    if(startValue == 1){
        var lst = document.querySelectorAll(".youlose");
        if (lst.length > 0) {
            console.log("failed.");
            changeStatus("HAHA!!! You LOSE! Better Luck Next Time.");
        } else {
            console.log("completed.");
            changeStatus("HOORAY!!! You Win Good Game.");
        }
        startValue = 0;
    }
}

function changeStatus(newText) {
    document.getElementById("status").textContent = newText;
}

function addAntiCheat(){
    var X = event.clientX;
    var Y = event.clientY;
    var limit = document.getElementById("start").offsetWidth;
    console.log("coord X: " + X + " coord Y: " + Y + " start block left offset value: " + limit);
    document.addEventListener("mousemove", function () {
        if(startValue == 1 && event.clientX < (X - limit))
        {
            console.log("Cheating Caught");
            for (var i = 0; i < loopLimit; i++){
                addFailClass(boundaryList[i]);
            }
            completionCheck();
            changeStatus("CHEATING CAUGHT! Automatic Lose.");
        }
    });
}
//////////////////////////////////////////////////////////////////////////////

//////////////////////////// main execution
document.addEventListener("DOMContentLoaded", function () {
    console.log("Page loaded.(efficency version)");
    /*document.getElementById("boundary1").addEventListener("mouseover", function () {
        this.className += " youlose";
    });*/
    changeStatus("CLICK the \'S\' button to start playing.");
    boundaryList = document.querySelectorAll(".boundary");
    loopLimit = boundaryList.length - 1;
    addWallListneers(boundaryList);
    document.getElementById("start").addEventListener("click", function () { restartMaze(); });
    document.getElementById("end").addEventListener("mouseover", completionCheck);
});