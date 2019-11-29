window.onscroll=function () { myFunction(); };

function myFunction() {
    let navbar=document.getElementById("site-navbar");
    if (window.pageYOffset>0) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}