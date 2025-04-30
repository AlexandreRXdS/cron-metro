const minutosElemento = document.getElementById("minutos");
const segundosElemento = document.getElementById("segundos");
const botaoIniciar = document.getElementById("iniciar");

const botaoParaIniciar = () => botaoIniciar.textContent = "Iniciar";
const botaoParaContinuar = () => botaoIniciar.textContent = "Continuar";

let milissegundos = 0;
let segundos = 0;
let minutos = 0;

let intervalo = null;

function iniciar() {
    botaoParaIniciar();

    if(!intervalo) {
        intervalo = setInterval(() => {
            if(milissegundos < 1000) {
                milissegundos += 10;
            } else {
                milissegundos = 0;
                segundos++;
            }

            if(segundos == 60) {
                segundos = 0;
                minutos++;
            }

            minutosElemento.textContent = String(minutos).padStart(2, "0");
            segundosElemento.textContent = String(segundos).padStart(2, "0");
        }, 10);
    }
}

function pausar() {
    botaoParaContinuar();
    clearInterval(intervalo);
    intervalo = null;

}

function reiniciar() {
    botaoParaIniciar();
    clearInterval(intervalo);
    intervalo = null;

    milissegundos = 0;
    segundos = 0;
    minutos = 0;

    minutosElemento.textContent = "00";
    segundosElemento.textContent = "00";
}
