
var isShowing = false

document.getElementById("menuButton").addEventListener("click", function(){
    if (!isShowing) {
        document.getElementById("panel").style.width="50%";
        document.getElementById("panelul").style.display="flex";
        isShowing = true
    } else if (isShowing) {
        document.getElementById("panel").style.width="0%";
        document.getElementById("panelul").style.display="none";
        isShowing = false
    }
});