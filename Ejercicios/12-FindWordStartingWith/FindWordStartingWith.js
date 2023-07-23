<<<<<<< HEAD
// function FindWordStartingWith(book, query) {
//   // Your code here:

//   const separators = {
//     " ": true,
//     ".": true,
//     ",": true,
//   };

//   const text = book.text.toLowerCase();
//   let result = [];

//   for (let i = 0; i < text.length; i++) {
//     if (i !== 0 && !separators[text[i - 1]]) continue;

//     for (let j = 0; j < query.length; j++) {
//       if (query[j] !== text[i + j]) {
//         i += j;
//         break;
//       }
//       if (j === query.length - 1) {
//         result.push(i);
//         i += j;
//       }
//     }
//   }
//   return result;
// }

//ALGORITMO DE KPM implementado por chatGPT

function FindWordStartingWith(book, query) {
  // Preprocesar el patrón para calcular el arreglo de prefijos
  function computePrefixArray(pattern) {
    const prefixArray = Array(pattern.length).fill(0);
    let j = 0;

    for (let i = 1; i < pattern.length; i++) {
      if (pattern[i] === pattern[j]) {
        j++;
        prefixArray[i] = j;
      } else {
        if (j > 0) {
          j = prefixArray[j - 1];
          i--; // Mantener i en su posición actual para comparar nuevamente.
        }
      }
    }
    return prefixArray;
  }

  const text = book.text.toLowerCase();
  const pattern = query.toLowerCase();
  const prefixArray = computePrefixArray(pattern);
  const result = [];

  let i = 0; // Puntero para el texto
  let j = 0; // Puntero para el patrón

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++;
      j++;
      if (j === pattern.length) {
        result.push(i - j); // Coincidencia encontrada, guardar el índice de inicio
        j = prefixArray[j - 1]; // Retroceder para buscar más coincidencias
      }
    } else {
      if (j > 0) {
        j = prefixArray[j - 1];
      } else {
        i++;
      }
=======
function FindWordStartingWith(book, query) {
  const { text } = book; // obtener el texto del libro
  const words = text.split(/\s+/); // dividir el texto en palabras utilizando espacios como separadores
  const result = []; // arreglo para almacenar los índices de las palabras encontradas

  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase(); // convertir la palabra actual a minúsculas para compararla con el query

    if (word.startsWith(query.toLowerCase())) {
      // si la palabra comienza con el query (ignorando mayúsculas/minúsculas)
      result.push(i); // añadir el índice de la palabra al resultado
>>>>>>> e2f94fba9f42d1b15e8f4dda53d76383a0c9797c
    }
  }

  return result;
}

const book = {
  id: 1,
<<<<<<< HEAD
  text: "Erase una vez un libro de palabras que era un poco aburrido pero tenia mucho aunque algunas palabras locas, y Gama lo leia todo el tiempo por que estaba mas loco aun",
};
console.log(FindWordStartingWith(book, "de")); //([23])
console.log(FindWordStartingWith(book, "un")); //([6, 14, 43])
console.log(FindWordStartingWith(book, "franco")); //([])
console.log(FindWordStartingWith(book, "era")); //([0, 39])

module.exports = FindWordStartingWith;




// function FindWordStartingWith(book, query) {
//   const { text } = book; // obtener el texto del libro
//   const words = text.split(/\s+/); // dividir el texto en palabras utilizando espacios como separadores
//   const result = []; // arreglo para almacenar los índices de las palabras encontradas

//   for (let i = 0; i < words.length; i++) {
//     const word = words[i].toLowerCase(); // convertir la palabra actual a minúsculas para compararla con el query

//     if (word.startsWith(query.toLowerCase())) {
//       // si la palabra comienza con el query (ignorando mayúsculas/minúsculas)
//       result.push(i); // añadir el índice de la palabra al resultado
//     }
//   }

//   return result;
// }

// const book = {
//   id: 1,
//   text: 'Erase una vez un libro de palabras que era un poco aburrido pero tenia mucho aunque algunas palabras locas'
// };

// console.log(FindWordStartingWith(book, 'de')); // Output: [23]
// console.log(FindWordStartingWith(book, 'un')); // Output: [6, 14, 43]


// module.exports = FindWordStartingWith;
=======
  text: 'Erase una vez un libro de palabras que era un poco aburrido pero tenia mucho aunque algunas palabras locas'
};

console.log(FindWordStartingWith(book, 'de')); // Output: [23]
console.log(FindWordStartingWith(book, 'un')); // Output: [6, 14, 43]


module.exports = FindWordStartingWith;
>>>>>>> e2f94fba9f42d1b15e8f4dda53d76383a0c9797c
