const seccionElegirMascota = document.getElementById('elegir-mascota')
const seccionElegirAtaque = document.getElementById('elegir-ataque')
const seccionAtaque = document.getElementById('ataque')
const seccionMensajes = document.getElementById('mensajes')
const seccionReiniciar = document.getElementById('reiniciar')

const botonReiniciarJuego = document.getElementById('boton-reiniciar')
const seleccionar = document.getElementById('boton-seleccionar-mascota')

const spanMascotaJugador = document.getElementById('mascota-jugador-elegida')
const mascotaEnemigo = document.getElementById('mascota-enemigo-elegido')

const spanVidasJugador = document.getElementById('mascota-jugador-vida')
const spanVidasEnemigo = document.getElementById('mascota-enemigo-vida')

const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedor-ataques')

const seccionVerMapa = document.getElementById('ver-mapa')

let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []

let opcionDeMokepones
let ataquesMokepon
let ataquesMokeponEnemigo
let agua
let tierra
let fuego
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3
let hipodoge
let capipepo
let ratigueya
let langostelvis
let pydos
let tucapalma
let mascotaJugador
let lienzo = mapa.getContext('2d')


class Mokepon {
    constructor(nombre, foto, vida, tipo) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = [ ]
        this.tipo = tipo
        this.x = 20
        this.y = 30
        this.ancho = 80
        this.alto = 80
        this.mapaFoto = new Image()
        this.mapaFoto.src = foto
    }
}

let mascotaHipodoge = new Mokepon('Hipodoge', './images/hipodoge.png', 5, 'agua')
let mascotaCapipepo = new Mokepon('Capipepo', './images/capipepo.png', 5, 'tierra')
let mascotaRatigueya = new Mokepon('Ratigueya', './images/ratigueya.png', 5, 'fuego')
let mascotaLangostelvis = new Mokepon('Langostelvis', './images/langostelvis.png', 5, 'fuego')
let mascotaPydos = new Mokepon('Pydos', './images/pydos.png', 5, 'tierra')
let mascotaTucapalma = new Mokepon('Tucapalma', './images/tucapalma.png', 5, 'agua')

mascotaHipodoge.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' }
)

mascotaCapipepo.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' }
)

mascotaRatigueya.ataques.push(
    { nombre: '🔥', id: '   boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' }
)

mascotaLangostelvis.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌱', id: 'boton-tierra'}
)

mascotaPydos.ataques.push(
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'}
)

mascotaTucapalma.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'}
)

mokepones.push(mascotaHipodoge, mascotaCapipepo, mascotaRatigueya)

function iniciarJuego() {
    seccionElegirAtaque.style.display = 'none'
    seccionAtaque.style.display = 'none'
    seccionMensajes.style.display = 'none'
    seccionVerMapa.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type = 'radio' name = 'mascota-item' id = ${mokepon.nombre}>
        <label class='tarjeta-de-mokepones' for = ${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src = ${mokepon.foto} alt = ${mokepon.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML+=opcionDeMokepones

        hipodoge = document.getElementById('Hipodoge')
        capipepo = document.getElementById('Capipepo')
        ratigueya = document.getElementById('Ratigueya')
        tucapalma = document.getElementById('Tucapalma')
        pydos = document.getElementById('Pydos')
        langostelvis = document.getElementById('Langostelvis')
    })

    seleccionar.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    /* seccionElegirAtaque.style.display = 'flex' */
    seccionElegirMascota.style.display = 'none'
    seccionVerMapa.style.display = 'flex'

    if (hipodoge.checked == true) {
        spanMascotaJugador.innerHTML = hipodoge.id
        mascotaJugador = hipodoge.id
    } else if (capipepo.checked == true) {
        spanMascotaJugador.innerHTML = capipepo.id
        mascotaJugador = capipepo.id
    } else if (ratigueya.checked == true) {
        spanMascotaJugador.innerHTML = ratigueya.id
        mascotaJugador = ratigueya.id
    } else if (langostelvis.checked == true) {
        spanMascotaJugador.innerHTML = langostelvis.id
        mascotaJugador = langostelvis.id
    } else if (pydos.checked == true) {
        spanMascotaJugador.innerHTML = pydos.id
        mascotaJugador = pydos.id
    } else if (tucapalma.checked == true) {
        spanMascotaJugador.innerHTML = tucapalma.id
        mascotaJugador = tucapalma.id
    } else {
        alert('¡Elige una mascota!')
    }
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques (mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques    
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class='boton-de-ataque BAtaque'>${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML+= ataquesMokepon
    })
    agua = document.getElementById('boton-agua')
    tierra = document.getElementById('boton-tierra')
    fuego = document.getElementById('boton-fuego')
    botones = document.querySelectorAll(' .BAtaque')
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#134552'
                boton.disabled = true
            } else if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#134552'
                boton.disabled = true
            } else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#134552'
                boton.disabled = true
            }
            seleccionarAtaqueEnemigo()
        })
    })
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, mokepones.length - 1)

    mascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques

    seccionElegirMascota.style.display = 'none'
    seccionAtaque.style.display = 'block'
    seccionMensajes.style.display = 'flex'

    secuenciaAtaque()
}

function seleccionarAtaqueEnemigo() {
    let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length - 1)
    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push('FUEGO')
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('AGUA')
    } else {
        ataqueEnemigo.push('TIERRA')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.length === 6) {
        batalla()
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function batalla() {
    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje('EMPATASTE :|')
        } else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA' || ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'FUEGO' || ataqueJugador[index] === '🌱' && ataqueEnemigo[index] === '💧') {
            indexAmbosOponentes(index, index)
            crearMensaje('GANASTE')
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponentes(index, index)
            crearMensaje('PERDISTE')
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }
    revisarVidas()
}

function revisarVidas() {
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal('EMPATASTE :|')
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal('GANASTE MIERDA!!!!')
    } else {
        crearMensajeFinal('Perdiste.')
    }
}

function crearMensaje(resultado) {
    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')

    seccionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    seccionMensajes.innerHTML = resultadoFinal
    botonReiniciarJuego.addEventListener('click', reiniciarJuego)
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function pintarPersonaje() {
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        capipepo.mapaFoto,
        capipepo.x,
        capipepo.y,
        capipepo.ancho,
        capipepo.alto
    )
}

function moverCapipepo() {
    capipepo.x = capipepo.x + 5
    pintarPersonaje()
}

window.addEventListener('load', iniciarJuego)
