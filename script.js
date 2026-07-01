/*==========================================
      CARRUSEL AUTOMÁTICO
==========================================*/

let slides = document.querySelectorAll(".slide");

let indice = 0;

function cambiarSlide(){

    slides[indice].classList.remove("activo");

    indice++;

    if(indice >= slides.length){

        indice = 0;

    }

    slides[indice].classList.add("activo");

}

setInterval(cambiarSlide, 4000);


/*==========================================
      MOSTRAR INFORMACIÓN PRODUCTO
==========================================*/

function mostrar(boton){

    let informacion = boton.nextElementSibling;

    if(informacion.style.display == "block"){

        informacion.style.display = "none";

        boton.innerHTML = "Ver información";

    }

    else{

        informacion.style.display = "block";

        boton.innerHTML = "Ocultar información";

    }

}


/*==========================================
      EFECTO DEL MENÚ AL HACER SCROLL
==========================================*/

window.addEventListener("scroll", function(){

    let header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.background = "#1b120d";

        header.style.transition = ".5s";

        header.style.boxShadow = "0 6px 18px rgba(0,0,0,.5)";

    }

    else{

        header.style.background = "#2c1b12";

        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.4)";

    }

});


/*==========================================
      EFECTO DE ENTRADA DE LOS PRODUCTOS
==========================================*/

const tarjetas = document.querySelectorAll(".producto");

const observador = new IntersectionObserver(function(entradas){

    entradas.forEach(function(entrada){

        if(entrada.isIntersecting){

            entrada.target.style.opacity = "1";

            entrada.target.style.transform = "translateY(0px)";

        }

    });

});

tarjetas.forEach(function(tarjeta){

    tarjeta.style.opacity = "0";

    tarjeta.style.transform = "translateY(40px)";

    tarjeta.style.transition = ".8s";

    observador.observe(tarjeta);

});