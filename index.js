var setaesquerda = window.document.getElementById("setaesquerda")
var Bruna = window.document.getElementById("Bruna")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var setadireita = window.document.getElementById("setadireita")


function rolarparadireita() {
    Bruna.style ="display:none" 
    Samantha.style ="display:flex"
    setaesquerda.style="display:flex; margin-top: 25%"
    setadireita.style="display:none"

}

function rolarparaesquerda() {
    Samantha.style="display:none"
    Bruna.style="display:flex"
    setaesquerda.style="display:none"
    setadireita.style="display:flex; margin-top: 25%"
}