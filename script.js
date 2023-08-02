
// Ejercicio 4 : Estructuras de control: FOR.

//1. Crea un programa que imprima en consola los números impares del 1 al 50.
let inicio = 0;
let fin = 50
    // Recorre los números desde el inicio hasta el fin
    for (let i = inicio; i <= fin; i++) {
      // Si el número es impar, lo imprime en la consola
      if (i % 2 !== 0) {
        console.log(i);
      }
    }

// 2. Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons
let numero = 0;
numero = prompt("Ejercicio 2. Por favor ingresar un numero: ");
var pokemons = 
[ 'bulbasaur',
  'ivysaur',
  'venusaur',
  'charmander',
  'charmeleon',
  'charizard',
  'squirtle',
  'wartortle',
  'blastoise',
  'caterpie',
  'metapod',
  'butterfree',
  'weedle',
  'kakuna',
  'beedrill',
  'pidgey',
  'pidgeotto',
  'pidgeot',
  'rattata',
  'raticate',
  'spearow',
  'fearow',
  'ekans',
  'arbok',
  'pikachu',
  'raichu',
  'sandshrew',
  'sandslash',
  'nidoran-f',
  'nidorina',
  'nidoqueen',
  'nidoran-m',
  'nidorino',
  'nidoking',
  'clefairy',
  'clefable',
  'vulpix',
  'ninetales',
  'jigglypuff',
  'wigglytuff',
  'zubat',
  'golbat',
  'oddish',
  'gloom',
  'vileplume',
  'paras',
  'parasect',
  'venonat',
  'venomoth',
  'diglett',
  'dugtrio',
  'meowth',
  'persian',
  'psyduck',
  'golduck',
  'mankey',
  'primeape',
  'growlithe',
  'arcanine',
  'poliwag',
  'poliwhirl',
  'poliwrath',
  'abra',
  'kadabra',
  'alakazam',
  'machop',
  'machoke',
  'machamp',
  'bellsprout',
  'weepinbell',
  'victreebel',
  'tentacool',
  'tentacruel',
  'geodude',
  'graveler',
  'golem',
  'ponyta',
  'rapidash',
  'slowpoke',
  'slowbro',
  'magnemite',
  'magneton',
  'farfetchd',
  'doduo',
  'dodrio',
  'seel',
  'dewgong',
  'grimer',
  'muk',
  'shellder',
  'cloyster',
  'gastly',
  'haunter',
  'gengar',
  'onix',
  'drowzee',
  'hypno',
  'krabby',
  'kingler',
  'voltorb' ]

for(let i = 1; i <= numero; i++)
{
    // Si el número es impar, lo imprime en la consola
    if (i % 5 == 0) 
    {
        console.log(pokemons[i]);
    }  
}
  



// 3. Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] 
// y muestre en consola solo los elementos que son tipo número.

// Crea una función que recorra un arreglo y muestre solo los números
function mostrarNumeros(arreglo) {
  // Recorre el arreglo con un bucle for-of
  for (let elemento of arreglo) {
    // Si el elemento es de tipo número, lo muestra en la consola
    if (typeof elemento === "number") {
      console.log(elemento);
    }
  }
}

// Crea el arreglo con los elementos dados
let arreglo = [4, "dos", 8, "tres", 5, 9, 1, "cero"];

// Llama a la función con el arreglo
mostrarNumeros(arreglo);