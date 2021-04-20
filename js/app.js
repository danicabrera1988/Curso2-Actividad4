window.addEventListener('scroll', animacionTarifa);

function animacionTarifa() {
    const animacionTarifa = document.querySelector('.animacion-tarifa');
    const posicionTarifa = animacionTarifa.getBoundingClientRect().top;
    const tamañoPantalla = window.innerHeight/3;
    if(posicionTarifa < tamañoPantalla){
        animacionTarifa.style.animation = 'mover 0.5s ease-out';
    }
}

window.addEventListener('scroll', animacionActividades);

function animacionActividades() {
    const animacionActividades = document.querySelectorAll('.animacion-actividades');
    const posicionCard = document.documentElement.scrollTop;
    for(let i = 0; i < animacionActividades.length; i++){
        const tamañoPantalla= animacionActividades[i].offsetTop;
        if(tamañoPantalla -500 < posicionCard ){          
            animacionActividades[i].style.opacity = 1;
        }    

    }
}

const header = document.getElementById("animacionNav");
const btns = header.getElementsByClassName("nav-link");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        const current = document.getElementsByClassName("text-warning");
        current[0].className = current[0].className.replace(" text-warning", " text-white");
        this.classList.remove("text-white");
        this.classList.add("text-warning");
    });
}


