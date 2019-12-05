function changeHamburger(x) {
    x.classList.toggle("change");
    let current_div=document.getElementById("mobile-navlink");
    if (current_div.className==="mobile-navlink") {
        current_div.className="mobile-navlink-expand";
    }
    else {
        current_div.className="mobile-navlink";
    }
}
