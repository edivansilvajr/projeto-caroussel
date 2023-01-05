let carousel = document.querySelector('div#carousel')
let img = document.querySelectorAll('img')
let imagemAtual = 0
let proximaImagem

function exibeImagemAtual() {
    for (let i = 0; i < img.length; i++) {
        img[i].style.display = 'none'
        img[imagemAtual].style.display = 'block'
    }
}



proximaImagem = setInterval(function () {
    imagemAtual = (imagemAtual + 1) % img.length
    exibeImagemAtual()
}, 2000)

exibeImagemAtual()


