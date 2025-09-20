function addText(){
    console.log("Saudação")
    window.document.getElementById("paragrafo").innerHTML = "Bem-vindo!"
    window.document.getElementById("paragrafo").style.color = "black"
    window.document.getElementById("botao").style.background = "rgb(76, 124, 76)"
}

function addTextAlert(){
    window.document.getElementById("paragrafo").innerHTML = "Você clicou duas vezes!"
    window.document.getElementById("paragrafo").style.color = "red"
    window.document.getElementById("botao").style.background = "blue"
}