function openMenu() {
    document.getElementById("sidenav").style.display = "flex";
}

function closeMenu() {
    document.getElementById("sidenav").style.display = "none";
}

// Toggle content visibility in sidebar for small screens
function toggleSidebarContent(id) {
    var content = document.getElementById(id);
    content.classList.toggle("visible");
}