window.addEventListener("resize", function() {
    const overlay = document.getElementById("overlay")
    if (
        document.body.clientWidth >= 601 ||
        !document.getElementById("openSidebarMenu").checked
    ) {
        overlay.style.display = "none";
    }
    else if (
        document.body.clientWidth < 601 &&
        document.getElementById("openSidebarMenu").checked
    ) {
        overlay.style.display = "inline";
    }
})

function addOverlay() {
    const overlay = document.getElementById("overlay")
    if (document.getElementById("openSidebarMenu").checked) {
        overlay.style.display = "inline";
    }   
    else {
        overlay.style.display = "none";
    }
}

function hideOverlay() {
    document.getElementById("openSidebarMenu").checked = false;
    document.getElementById("overlay").style.display = "none";
}
