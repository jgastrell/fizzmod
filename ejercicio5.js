
/**
 * 5) Los miembros de trabajo especificados en el siguiente objeto usan su nombre como indice y su edad como valor. 
 * Separa los miembros mayores de 40 años y menores de 25 años en un array y todo el resto en un segundo array. 
 * Ambos arrays tienen que estar compuestos únicamente por los nombres de las personas. 
 * Por último cada array tiene que estar ordenado alfabeticamente.
 */

let miembros = { pedro : 35 , ana : 18 , carlos : 43 , juan : 21 , maria : 29 , angela : 31 , jose : 23 , mariana : 41 , eugenio : 19 }

let arrMayores40Menores25 = []
let resto = []
Object.keys(miembros).forEach((key) => {
     (miembros[key] > 40 || miembros[key] < 25) ?
    arrMayores40Menores25.push(key) :
    resto.push(key)
})
console.log(arrMayores40Menores25.sort((a, b) => a > b))
console.log(resto.sort((a, b) => a > b))