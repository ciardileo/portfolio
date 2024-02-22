var menuTeste = document.getElementById("menu")
var menuIcon = document.getElementById("burger")

function clickMenu(){
    console.log(menu.style.display)
    if (menu.style.display == 'block'){
        menuIcon.innerHTML = 'menu'
        menu.style.display = 'none'
    } else{
        menuIcon.innerHTML = 'close'
        menu.style.display = 'block'
    }
}