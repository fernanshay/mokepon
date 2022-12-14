let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let seleccionar = document.getElementById('boton-seleccionar')
    seleccionar.addEventListener('click', seleccionarMascotaJugador)

    let botonReiniciarJuego = document.getElementById('reiniciar-juego')
    botonReiniciarJuego.addEventListener('click',reiniciarJuego)

    let seccionElegirAtaque = document.getElementById('elegir-ataque')
    seccionElegirAtaque.style.display = 'none'
    let seccionAtaque = document.getElementById('ataque')
    seccionAtaque.style.display = 'none'
    let seccionMensajes = document.getElementById('mensajes')
    seccionMensajes.style.display = 'none'
    let seccionReiniciar = document.getElementById('reiniciar')
    seccionReiniciar.style.display = 'none'
}

function seleccionarMascotaJugador() {
    let hipodoge = document.getElementById('mascota-hipodoge')
    let capipepo = document.getElementById('mascota-capipepo')
    let ratigueya = document.getElementById('mascota-ratigueya')
    let mascotaJugador = document.getElementById('mascota-jugador-elegida')

    if (hipodoge.checked == true) {
        mascotaJugador.innerHTML = 'Hipodoge'
    } else if (capipepo.checked == true) {
        mascotaJugador.innerHTML='Capipepo'
    } else if (ratigueya.checked == true) {
        mascotaJugador.innerHTML='Ratigueya'
    } else {
        alert('¡Elige una mascota!')
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaEnemigo = document.getElementById('mascota-enemigo-elegido')
    let mascotaAleatoria = aleatorio(1,3)

    if (mascotaAleatoria == 1) {
        mascotaEnemigo.innerHTML='Hipodoge'
    } else if (mascotaAleatoria == 2) {
        mascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        mascotaEnemigo.innerHTML = 'Ratigueya'
    }
    seleccionarAtaqueJugador()

    let seccionElegirAtaque = document.getElementById('elegir-ataque')
    seccionElegirAtaque.style.display = 'block'
    let seccionAtaque = document.getElementById('ataque')
    seccionAtaque.style.display = 'block'
    let seccionMensajes = document.getElementById('mensajes')
    seccionMensajes.style.display = 'block'
    let seccionElegirMascota = document.getElementById('elegir-mascota')
    seccionElegirMascota.style.display = 'none'
}

function seleccionarAtaqueJugador() {
    let agua = document.getElementById('boton-agua')
    agua.addEventListener('click', ataqueAgua)
   let tierra = document.getElementById('boton-tierra')
    tierra.addEventListener('click', ataqueTierra)
    let fuego = document.getElementById('boton-fuego')
    fuego.addEventListener('click', ataqueFuego)
}

function ataqueAgua() {
    ataqueJugador = 'agua'
    seleccionarAtaqueEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'tierra'
    seleccionarAtaqueEnemigo()
}
function ataqueFuego() {
    ataqueJugador = 'fuego'
    seleccionarAtaqueEnemigo()
}
function seleccionarAtaqueEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'agua'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo='tierra'
    } else {
        ataqueEnemigo='fuego'
    }
    batalla()
}
function batalla() {
    let spanVidasJugador = document.getElementById('mascota-jugador-vida')
    let spanVidasEnemigo = document.getElementById('mascota-enemigo-vida')
    
    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje(' : Empataste :|')
    } else if (ataqueJugador == 'fuego' && ataqueEnemigo == 'tierra' ) {
        crearMensaje(' : Ganaste')
        vidasEnemigo=vidasEnemigo-1
    } else if (ataqueJugador == 'agua' && ataqueEnemigo == 'fuego' ) {
        crearMensaje(' : Ganaste')
        vidasEnemigo=vidasEnemigo-1
    } else if (ataqueJugador == 'tierra' && ataqueEnemigo == 'agua' ) {
        crearMensaje(' : Ganaste')
        vidasEnemigo=vidasEnemigo-1
    } else {
        crearMensaje(' : Perdiste :(')
        vidasJugador=vidasJugador-1
    }
    spanVidasJugador.innerHTML = vidasJugador
    spanVidasEnemigo.innerHTML = vidasEnemigo

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal('¡GANASTE!')
    } else if (vidasJugador == 0) {
        crearMensajeFinal('Ups, has perdido :/')
    }
}

function crearMensaje(resultado) {
    let seccionMensajes = document.getElementById('mensajes')
    let mensaje = document.createElement('p')
    mensaje.innerHTML = 'Tu mascota atacó con '+ataqueJugador+' y la mascota del enemigo atacó con '+ataqueEnemigo+ resultado
    seccionMensajes.appendChild(mensaje)
}

function crearMensajeFinal(resultado) {
    let seccionMensajes = document.getElementById('mensajes')
    let mensajeFinal = document.createElement('p')
    mensajeFinal.innerHTML = resultado
    seccionMensajes.appendChild(mensajeFinal)

    let agua = document.getElementById('boton-agua')
    agua.disabled = true
   let tierra = document.getElementById('boton-tierra')
    tierra.disabled = true
    let fuego = document.getElementById('boton-fuego')
    fuego.disabled = true

    let seccionReiniciar = document.getElementById('reiniciar')
    seccionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

window.addEventListener('load', iniciarJuego)