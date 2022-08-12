let contador = 0;
let sidebar_menu = document.getElementById("sidebar_menu")
let menu = document.getElementById("menu")
function abrirMenu(){
    if(contador == 0){
        sidebar_menu.style.left = "0"
        contador++
    }else if(contador == 1){
        sidebar_menu.style.left = "-500px"
        contador--
    }
}