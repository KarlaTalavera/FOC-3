const {resultados} = require('../bd/resultados.js');

class Calculadora{

constructor() {
 this.resultados = resultados;
}

 suma = (a, b) => {
    let resultado = {
        id: this.resultados.length + 1,
        operacion: "suma",
        valora: a,
        valorb: b,
        resultado: a + b
    };
    this.resultados.push(resultado);
    return a + b;
 }
    resta = (a, b) => {
        let resultado = {
            id: this.resultados.length + 1,
            operacion: "resta",
            valora: a,
            valorb: b,
            resultado: a - b
        };
        this.resultados.push(resultado);
        return a - b;
    }

    multiplicacion = (a, b) => {
    let resultado = {
        id: this.resultados.length + 1,
        operacion: "multiplicacion",
        valora: a,
        valorb: b,
        resultado: a * b
    };
    this.resultados.push(resultado);
        return{
        a,
        b,
        resultado: a * b
        }
    }

    getResultados = () => {
        return this.resultados;
    }
}

module.exports = {
    Calculadora
}