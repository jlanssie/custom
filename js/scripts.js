//Menu toggle

function menuToggle() {
    var x = document.getElementById("primary-menu"); 
    if (x.className === "hidden") {
        x.className = "visible";
        document.getElementById("menuToggle-btn").innerHTML = "X";
    } else {
        x.className = "hidden";
        document.getElementById("menuToggle-btn").innerHTML = "&#9776;";
    }
};