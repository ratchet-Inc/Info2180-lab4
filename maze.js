// JavaScript source code
/////////////////// enables strict mode
"use struct";

///////////////////////// global variable
var startValue = 0;

////////////////////////// function declarations
function addWallListneers(obj) {
    console.log(obj.length);
    for (var i = 0; i < obj.length - 1; i++) {
        console.log(i);
        obj[i].addEventListener("mouseover", function () {
            if (startValue == 1) {
                this.className += " youlose";
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
        }
    });
}

//////////////////////////// main execution
document.addEventListener("DOMContentLoaded", function () {
    console.log("Page loaded.");
    /*document.getElementById("boundary1").addEventListener("mouseover", function () {
        this.className += " youlose";
    });*/
    changeStatus("CLICK the \'S\' button to start playing.");
    var myLst = document.querySelectorAll(".boundary");
    addWallListneers(myLst);
    document.getElementById("start").addEventListener("click", function () { restartMaze(); });
    document.getElementById("end").addEventListener("mouseover", completionCheck);
});