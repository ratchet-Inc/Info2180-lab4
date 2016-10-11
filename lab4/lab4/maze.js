console.log("test");

var addFailureClass = function (obj) {
    obj.className += " youlose";
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
});