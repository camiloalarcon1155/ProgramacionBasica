let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3




function iniciarJuego() {
    botonReiniciarJuego = document.getElementById('boton-reiniciar')
    botonReiniciarJuego.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'


    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
        botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
        botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
    let botonAire = document.getElementById('boton-aire')
    botonAire.addEventListener('click', ataqueAire)
    let botonRayo = document.getElementById('boton-rayo')
    botonRayo.addEventListener('click', ataqueRayo)
    
    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
    

}

function seleccionarMascotaJugador() {
    

    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'

    let imputlizeth = document.getElementById('lizeth')
    let imputdanilo = document.getElementById('danilo')
    let imputeylin = document.getElementById('eylin')
    let imputisabel = document.getElementById('isabel')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (imputlizeth.checked) {
        //alert('Elegiste como mascota a Lizeth')
        spanMascotaJugador.innerHTML = 'Lizeth'
    } else if (imputdanilo.checked) {
        //alert('Elegiste como mascota a danilo')
        spanMascotaJugador.innerHTML = 'Danilo'
    } else if (imputeylin.checked) {
        //alert('Elegiste como mascota a eylin')
        spanMascotaJugador.innerHTML = 'Eylin'
    } else if (imputisabel.checked) {
        //alert('Elegiste como mascota a isabel')
        spanMascotaJugador.innerHTML = 'isabel'
    } else  {
        alert('Error!!! Primero debes seleccionar una mascota')
    }

    //if (spanMascotaJugador.checked === true) {
    seleccionarMascotaEnemigo() 
    
    //}

}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1, 4)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")
    
    if (mascotaAleatorio == 1) {
        //lizeth
        spanMascotaEnemigo.innerHTML = 'lizeth'
    } else if (mascotaAleatorio == 2) {
        //danilo
        spanMascotaEnemigo.innerHTML = 'danilo'
    } else if (mascotaAleatorio == 3) {
        //eylin
        spanMascotaEnemigo.innerHTML = 'eylin'
    } else { 
        //isabel
        spanMascotaEnemigo.innerHTML = 'isabel'
    }   
    
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO' 
    //alert("Tu mascota ha atacado con "+ataqueJugador)
    ataqueAleatEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'AGUA' 
   //alert("Tu mascota ha atacado con "+ataqueJugador)
    ataqueAleatEnemigo()
}

function ataqueTierra() {
    ataqueJugador = 'TIERRA' 
    //alert("Tu mascota ha atacado con "+ataqueJugador)
    ataqueAleatEnemigo()
}

function ataqueAire() {
    ataqueJugador = 'AIRE'
    //alert("Tu mascota ha atacado con "+ataqueJugador)
    ataqueAleatEnemigo()
}

function ataqueRayo() {
    ataqueJugador = 'RAYO'
    //alert("Tu mascota ha atacado con "+ataqueJugador)
    ataqueAleatEnemigo()
}

function aleatorio(min, max) {
                    return Math.floor(Math.random() * (max - min + 1) + min)
}
     
function ataqueAleatEnemigo() {
    let ataqueAleatorio = aleatorio(1, 5)
   
    
    if (ataqueAleatorio == 1) {
        //fuego
        ataqueEnemigo = 'FUEGO'
        //alert("La mascota del enemigo atacó con " + ataqueEnemigo)
    } else if (ataqueAleatorio == 2) {
        //agua
        ataqueEnemigo = 'AGUA'
        //alert("La mascota del enemigo atacó con " + ataqueEnemigo)
    } else if (ataqueAleatorio == 3) {
        //tierra
        ataqueEnemigo = 'TIERRA'
        //alert("La mascota del enemigo atacó con " + ataqueEnemigo)
    } else if (ataqueAleatorio == 4) {
        //tierra
        ataqueEnemigo = 'AIRE'
        //alert("La mascota del enemigo atacó con " + ataqueEnemigo)
    }else { ataqueAleatorio == 5
        //Rayo
        ataqueEnemigo = 'RAYO'
        //alert("La mascota del enemigo atacó con " + ataqueEnemigo)

    }

    combate()

} 

function combate() {
    spanVidasJugador = document.getElementById('vidas-jugador') 
    spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if(ataqueJugador == ataqueEnemigo) {
         crearMensaje("EMPATE")
    }else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA' ||ataqueJugador == 'FUEGO' && ataqueEnemigo == 'AIRE' ||ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO' || ataqueJugador == 'AGUA' && ataqueEnemigo == 'RAYO' || ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA' ||ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AIRE' || ataqueJugador == 'AIRE' && ataqueEnemigo == 'RAYO' || ataqueJugador == 'AIRE' && ataqueEnemigo == 'AGUA' || ataqueJugador == 'RAYO' && ataqueEnemigo == 'TIERRA' || ataqueJugador == 'RAYO' && ataqueEnemigo == 'FUEGO') {
     //alert("GANASTE MY PERR")
        crearMensaje('GANASTE')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo

   
    } else {
        crearMensaje('PERDISTE')
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador

    //perdidas = perdidas + 1
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        //ganamos
        crearMensajeFinal("Felicitaciones!!! GANASTE EL JUEGO")
    }else if(vidasJugador == 0) {
        //perdimos
        crearMensajeFinal("PERDISTE TUS 3 VIDAS! Vuelve a intentarlo...")

    }

}

function crearMensaje(result) {
        let sectionMensajes = document.getElementById('mensajes')

        let parrafo = document.createElement('p')
        parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + ' Resultado: '+ result
    

    sectionMensajes.appendChild(parrafo)
    
}
    
function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    

    sectionMensajes.appendChild(parrafo)
    
    let botonFuego = document.getElementById('boton-fuego')
        botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
        botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true
    let botonAire = document.getElementById('boton-aire')
    botonAire.disabled = true
    let botonRayo = document.getElementById('boton-rayo')
    botonRayo.disabled = true

    botonReiniciarJuego = document.getElementById('boton-reiniciar')
    botonReiniciarJuego.style.display = 'block'
}

function reiniciarJuego() {
   location.reload() 
}

window.addEventListener('load', iniciarJuego)//cuando se hay acargado el juego, entonces se activan las funciiones

