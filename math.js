const a = 4
const b = 2

function soma(a, b) {
    let resultado = a + b 
    return resultado
}
function subtracao(a, b) {
    let resultado = a - b 
    return resultado
}

function divisao(a, b) {
    let resultado = a / b 
    return resultado
}

function multiplicacao(a, b) {
    let resultado = a * b 
    return resultado
}

module.exports = {
    soma,
    subtracao,
    divisao,
    multiplicacao
};