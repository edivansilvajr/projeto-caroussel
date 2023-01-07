// Declare as variáveis
let images = document.querySelectorAll('div#caroussel > img')
let btnNext = document.querySelector('button#next')
let btnPrev = document.querySelector('button#prev')
let containerIndicators = document.querySelector('div#containerIndicators')
let imageIndex = 0
let slideInterval

// Cria os botões de indicação das imagens
function createIndicatorButtons() {
    for (let i = 0; i < images.length; i++) {
        let radio = document.createElement('input')
        radio.type = 'radio'
        radio.name = 'indicador'
        radio.value = i
        radio.id = `indicador-${i}`
        radio.style.diplay = 'inline-block'
        radio.style.marginRight = '10px'
        radio.style.verticalAlign = 'middle'
        containerIndicators.appendChild(radio)

        radio.addEventListener('change', () => {
            imageIndex = i
            displayCurrentImage()
        })
    }
}

// Exibe a imagem atual
function displayCurrentImage() {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none'
        radioButtons[i].checked = false
    }
    radioButtons[imageIndex].checked = true
    images[imageIndex].style.display = 'block'
}

// Exibe a próxima imagem
function displayNextImage() {
    imageIndex = (imageIndex + 1) % images.length
    displayCurrentImage()
}

// Exibe a imagem anterior
function displayPrevImage() {
    imageIndex--
    if (imageIndex < 0) {
        imageIndex = images.length - 1
    }
    displayCurrentImage()
}

// Pausa o slide
function stopSlide() {
    clearInterval(slideInterval)
}

// Configura o evento de clique nos botões
btnNext.onclick = function () {
    displayNextImage()
}

btnPrev.onclick = function () {
    displayPrevImage()
}

// Configura os eventos de mouseover e mouseout nas imagens
for(let i = 0; i < images.length; i++) {
    images[i].onmouseover = function () {
        stopSlide()
    }

    images[i].onmouseout = () => {
        slideInterval = setInterval(displayNextImage, 2000)
    }
}

// Configura os eventos de mouseover e mouseout nos botões
btnNext.onmouseover = function () {
    stopSlide()
}

btnNext.onmouseout = function () {
    slideInterval = setInterval(() => {
        displayNextImage()
    }, 2000)
}

btnPrev.onmouseover = function () {
    stopSlide()
}

btnPrev.onmouseout = function () {
    slideInterval = setInterval(() => {
        displayNextImage()
    }, 2000)
}

// Configura os eventos de mouseover e mouseout nos botões de indicação
containerIndicators.onmouseover = function () {
    stopSlide()
}

containerIndicators.onmouseout = function () {
    slideInterval = setInterval(() => {
        displayNextImage()
    }, 2000)
}

// Cria os botões de indicação das imagens
createIndicatorButtons()

// Armazena os botões de indicação em uma variável
let radioButtons = document.querySelectorAll('div#containerIndicators > input[type=radio]')

// Inicia o slide automático
slideInterval = setInterval(() => {
    displayNextImage()
}, 2000)

// Exibe a primeira imagem
displayCurrentImage()

