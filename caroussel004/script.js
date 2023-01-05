let carousel = document.querySelector('div#carousel')
let img = document.querySelectorAll('img')
let btnNext = document.querySelector('button#next')
let btnPrev = document.querySelector('button#prev')
let imagemAtual = 0

function exibeImagemAtual () {
    for(let i = 0; i < img.length; i++) {
        img[i].style.display = 'none'
    }
    img[imagemAtual].style.display = 'block'
}

btnNext.onclick = function () {
    imagemAtual++
    if(imagemAtual == img.length) {
        imagemAtual = 0
    }    
    exibeImagemAtual()
}

btnPrev.onclick = function () {
    imagemAtual--
    if(imagemAtual < 0) {
        imagemAtual = img.length -1
    }
    exibeImagemAtual()    
}

function nextImage() {
    // esse código comentado abaixo substitui o que não esta comentado abaixo
    // imagemAtual = (imagemAtual + 1) % img.length
    imagemAtual++
    if(imagemAtual == img.length) {
        imagemAtual = 0
    }    
    
    exibeImagemAtual()
}


exibeImagemAtual()
setInterval(nextImage, 2000)