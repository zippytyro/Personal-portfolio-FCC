/* Opening navigation*/
function openNav() {
    document.addEventListener("click", function () {
        document.getElementById("navbar").style.width = "400px";
        document.getElementById("closeNav").style.display = "inline";
    });
}

/* Closing navigation */
function closeNav() {
    document.addEventListener("click", function () {
        document.getElementById("navbar").style.width = "0px";
        document.getElementById("closeNav").style.display = "none";
    });
}

openNav();
closeNav();