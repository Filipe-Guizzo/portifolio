function irPara(event, x, y){
    window.scroll(x,y)
    event.preventDefault();
}

function sidebar(){
    let sidebar = document.getElementById("sidebar");
    let sidebarBtn = document.getElementById("sidebar-btn");
    let sidebarInput = document.getElementById("sidebar-input");
    let sidebarIcon = document.getElementById("sidebar-icon");
    
    if(sidebarInput.checked){
        sidebar.style.display = "None";
        sidebarBtn.style.left = "0px";
        sidebarIcon.classList.remove("fa-arrow-left");
        sidebarIcon.classList.add("fa-arrow-right");
    }else{
        sidebar.style.display = "block";
        sidebarBtn.style.left = "270px";
        sidebarIcon.classList.remove("fa-arrow-right");
        sidebarIcon.classList.add("fa-arrow-left");
    }
}