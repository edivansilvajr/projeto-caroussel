let carousel = document.querySelector('div#carousel')
let img = document.querySelectorAll('img')
let btnNext = document.querySelector('button#next')
let btnPrev = document.querySelector('button#prev')
let imagemAtual = 0
let indicadores = document.querySelector('div#indicadores')
let nextImage


function exibeImagemAtual() {
    for (let i = 0; i < img.length; i++) {
        img[i].style.display = 'none'
    }
    img[imagemAtual].style.display = 'block'
}

btnNext.onclick = function () {
    imagemAtual++
    if (imagemAtual == img.length) {
        imagemAtual = 0
    }
    exibeImagemAtual()
}

btnPrev.onclick = function () {
    imagemAtual--
    if (imagemAtual < 0) {
        imagemAtual = img.length - 1
    }
    exibeImagemAtual()
}

nextImage = setInterval(function () {
    // esse código comentado abaixo substitui o que não esta comentado abaixo
    // imagemAtual = (imagemAtual + 1) % img.length
    imagemAtual++
    if (imagemAtual == img.length) {
        imagemAtual = 0
    }
    exibeImagemAtual()
}, 2000)

for (let i = 0; i < img.length; i++) {
    // O código abaixo pode ser inserido na primeira estrutura de repetição, coloquei aqui para ficar mais explicito.
    img[i].onmouseover = function () {
        clearInterval(nextImage)
    }

    img[i].onmouseout = function () {
        nextImage = setInterval(function () {
            imagemAtual = (imagemAtual + 1) % img.length
            exibeImagemAtual()
        }, 2000)
    }
}

btnNext.onmouseover = function () {
    clearInterval(nextImage)
}

btnNext.onmouseout = function () {
    nextImage = setInterval(function () {
        imagemAtual = (imagemAtual + 1) % img.length
        exibeImagemAtual()
    }, 2000)
}

btnPrev.onmouseover = function () {
    clearInterval(nextImage)
}

btnPrev.onmouseout = function () {
    nextImage = setInterval(function () {
        imagemAtual = (imagemAtual + 1) % img.length
        exibeImagemAtual()
    }, 2000)
}

indicadores.onmouseover = function () {
    clearInterval(nextImage)
}

indicadores.onmouseout = function () {
    nextImage = setInterval(function () {
        imagemAtual = (imagemAtual + 1) % img.length
        exibeImagemAtual()
    }, 2000)
}

for (let i = 0; i < img.length; i++) {
    let radio = document.createElement('input')
    radio.type = 'radio'
    radio.name = 'indicador'
    radio.value = i
    radio.id = 'indicador-' + i
    radio.style.display = 'inline-block'
    radio.style.marginRight = '10px'
    radio.style.verticalAlign = 'middle'
    indicadores.appendChild(radio)

    // adiciona o evento change a cada elemento de radio criado
    radio.addEventListener('change', function () {
        imagemAtual = Number(this.value)
        exibeImagemAtual()
    })
}

let radioButtons = document.querySelectorAll('input[name=indicador]')

function exibeImagemAtual() {
    for (let i = 0; i < img.length; i++) {
        img[i].style.display = 'none'
        radioButtons[i].checked = false
    }
    img[imagemAtual].style.display = 'block'
    radioButtons[imagemAtual].checked = true
}


exibeImagemAtual()
