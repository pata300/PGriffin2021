var bodyTag = document.getElementById('bodyTag');
var darkButton = document.getElementById('darkBtn');
var darkModeEnabled = true;

function backgroundChange(){
    if(darkModeEnabled){
        darkModeEnabled = false;
        bodyTag.className = "d-flex h-100 text-dark bg-light";
        darkButton.className = "nav-link bg-dark"
        darkButton.innerHTML = "Dark Mode";
    } else {
        darkModeEnabled = true;
        bodyTag.className = "d-flex h-100 text-white bg-dark";
        darkButton.className = "nav-link bg-light text-dark"
        darkButton.innerHTML = "Light Mode";
    }
        
}