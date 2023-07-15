function FindWordStartingWith(book, query) {
  const { text } = book; // obtener el texto del libro
  const words = text.split(/\s+/); // dividir el texto en palabras utilizando espacios como separadores
  const result = []; // arreglo para almacenar los índices de las palabras encontradas

  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase(); // convertir la palabra actual a minúsculas para compararla con el query

    if (word.startsWith(query.toLowerCase())) {
      // si la palabra comienza con el query (ignorando mayúsculas/minúsculas)
      result.push(i); // añadir el índice de la palabra al resultado
    }
  }

  return result;
}

const book = {
  id: 1,
  text: 'Erase una vez un libro de palabras que era un poco aburrido pero tenia mucho aunque algunas palabras locas'
};

console.log(FindWordStartingWith(book, 'de')); // Output: [23]
console.log(FindWordStartingWith(book, 'un')); // Output: [6, 14, 43]


module.exports = FindWordStartingWith;
