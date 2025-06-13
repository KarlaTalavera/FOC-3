const { Calculadora } = require('./clases/calculadora.js'); // importacion de un archivo local
const { Pokemon } = require('./clases/pokemon.js'); // importacion de un archivo local

let nombre = "Karla";
var apellido = "Talavera";
const edad = 25;
let sueldo = 100.50;
let carreras ={
    tsu: "informática",
    ing: "sistemas computacionales",
    lcd: "ciencias de datos"
}

if(edad == 18){
    console.log("Eres mayor de edad");
}else if(edad >= 20 && edad <= 30){
    console.log(`Eres joven, estudia mucho, ademas tienes varias carreras: ${carreras.tsu} ${carreras.ing} y una maestria en ${carreras.maestria}`);
} else if (edad >= 31 && edad <= 50){
    console.log("Eres adulto tirando a viejo");
} else if (edad >= 51 && edad <= 100){
    console.log("Eres un viejo, jubilese ya");
} else {
    console.log("o eres un bebe o eres un vegetal");
}

const calculadora = new Calculadora();
console.log("la suma es: ",calculadora.suma(10, 20));
console.log("la resta es: ",calculadora.resta(20, 10));
const {a, b, resultado} = calculadora.multiplicacion(10, 20); //desestructuracion con objects
console.log(`la multiplicacion es de ${a} y ${b} es: ${resultado}`)

console.log("Resultados de las operaciones: ")
console.log(calculadora.getResultados())

//busqueda de elementos
console.log("buscando elemento")
let lista = calculadora.getResultados();
let busqueda = lista.find((x)=>{
    if (x.id == 4) {
        return true;
    }   
})
console.log(busqueda)

//busqueda de indice
let indice = lista.findIndex((x)=>{
    if (x.id == 4) {
        return true;
    }   
})
console.log("Indice del elemento buscado: ", indice);

//actualizar datos
lista[indice]={
    id: 4,
    operacion: "division",
    valora: 200,
    valorb: 100,
    resultado: 200 / 100
}
console.log("indice de la busqueda:", indice, lista)

//eliminar elemento
let eliminado = lista.splice(indice, 1);
console.log("Elemento eliminado: ", eliminado);
console.log("Lista actualizada: ", lista);

//reestucturar arreglop
let newLista = lista.map((x)=>{
    return {
        id: x.id,
        operacion: x.operacion,
        resultado: x.resultado
    }
})
console.log("Lista reestructurada: ", newLista);

//instancia de pokemon
let pok = new Pokemon();
pok.getOne("pikachu")