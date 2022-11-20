let numeroAleatorio = aleatorio(1,3)
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let seleccionar = document.getElementById('boton-seleccionar')
    seleccionar.addEventListener('click', seleccionarMascotaJugador)
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
    mascotaEnemigo = document.getElementById('mascota-enemigo-elegido')

    if (numeroAleatorio == 1) {
        mascotaEnemigo.innerHTML='Hipodoge'
    } else if (numeroAleatorio == 2) {
        mascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        mascotaEnemigo.innerHTML = 'Ratigueya'
    }
    seleccionarAtaqueJugador()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
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
    if (aleatorio == 1) {
        ataqueEnemigo = 'agua'
    } else if (aleatorio == 2) {
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

function crearMensajeFinal(resultado) {
    let seccionMensajes = document.getElementById('mensajes')
    let mensajeFinal = document.createElement('p')
    mensajeFinal.innerHTML = resultado
    seccionMensajes.appendChild(mensajeFinal)
}

function crearMensaje(resultado) {
    let seccionMensajes = document.getElementById('mensajes')
    let mensaje = document.createElement('p')
    mensaje.innerHTML = 'Tu mascota atacó con '+ataqueJugador+' y la mascota del enemigo atacó con '+ataqueEnemigo+ resultado
    seccionMensajes.appendChild(mensaje)
}
window.addEventListener('load', iniciarJuego)