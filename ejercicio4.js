/**
 * 4) Modificar el prototipo de la funcion constructora Array para que admita como nuevo método la funcion customizada del paso anterior para que cumpla los siguientes tests :
 */

let numeros = [1,2,3,4]
Array.prototype.mapCustomizado = function(fn) {
    let newArr = []
    this.forEach(element => {
        newArr.push(fn(element, this.indexOf(element)))
    });
    return newArr
}

console.log(numeros.mapCustomizado(numero=>numero+1)) //[2,3,4,5]
console.log(numeros.mapCustomizado((numero,indice)=>numero+indice)) //[1,3,5,7]
console.log(numeros.mapCustomizado(numero=>{})) //[undefined,undefined,undefined,undefined]
console.log(numeros.hasOwnProperty("mapCustomizado")) //false
console.log("mapCustomizado" in numeros) //true