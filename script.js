function showHideProjectInfo(id) {
    const id = document.getElementById(id);
    if (id.style.display === "none") {
        id.style.display = "block";
        
    } else {
        id.style.display = "none";
    }
}

document.getElementById("BhideLMS").addEventListener("click", showHideProjectInfo("hideLMS"));
document.body.style.backgroundColor = red;