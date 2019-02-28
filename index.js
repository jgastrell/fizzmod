/**
 * 3) Crear una función que reemplace de manera provisoria la funcionalidad obtenia por el método map() del prototipo de Array que pueda pasar los siguientes tests :
*/
let numeros = [1,2,3,4]
const mapCustomizado = (arr, fn) => {
    let newArr = []
    arr.forEach(element => {
        newArr.push(fn(element, arr.indexOf(element)))
    });
    return newArr
}
//mapCustomizado => representa la funcion que ustedes tendrían que crear
console.log(mapCustomizado(numeros,numero=>numero+1)) //[2,3,4,5]
console.log(mapCustomizado(numeros,(numero,indice)=>numero+indice)) //[1,3,5,7]
console.log(mapCustomizado(numeros,numero=>{})) //[undefined,undefined,undefined,undefined]
