let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeigth - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = documen.getElementsByClassName("proceso");
        habilidades[0].classList.add("javascript");
        babilidades[1].classList.add("htmlcss");
       
    }
}
 
window.onscroll = function(){
    efectoHabilidades();
}