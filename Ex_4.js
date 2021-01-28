/* Calcular número ao quadrado */
function calculaImc(peso, altura) {
    
    return peso / (altura * altura)
}

let resultadoImc = (calculaImc(95, 1.8))

console.log(resultadoImc)