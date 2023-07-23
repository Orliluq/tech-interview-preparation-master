// class Node {
//   constructor(value, min) {
//     this.value = value; // valor del nodo
//     this.min = min; // valor mínimo en el stack hasta este nodo
//   }
// }

// class MinStack {
//   constructor() {
//     this.stack = []; // arreglo para almacenar los nodos del stack
//   }

//   push(value) {
//     let min = value; // el valor mínimo inicialmente es el mismo que el valor añadido

//     if (this.stack.length > 0) {
//       // si el stack no está vacío
//       const currentMin = this.stack[this.stack.length - 1].min;
//       min = Math.min(currentMin, value); // se actualiza el valor mínimo si es necesario
//     }

//     const node = new Node(value, min); // se crea un nuevo nodo con el valor y el valor mínimo
//     this.stack.push(node); // se añade el nodo al stack
//   }

//   pop() {
//     if (this.stack.length === 0) {
//       // si el stack está vacío, no se puede hacer pop
//       throw new Error('Stack is empty');
//     }

//     const node = this.stack.pop(); // se elimina el nodo en la parte superior del stack
//     return node.value; // se devuelve el valor del nodo eliminado
//   }

//   min() {
//     if (this.stack.length === 0) {
//       // si el stack está vacío, no hay valor mínimo
//       throw new Error('Stack is empty');
//     }

//     return this.stack[this.stack.length - 1].min; // se devuelve el valor mínimo en el stack
//   }

//   peek() {
//     if (this.stack.length === 0) {
//       // si el stack está vacío, no hay elemento para ver
//       throw new Error('Stack is empty');
//     }

//     return this.stack[this.stack.length - 1].value; // se devuelve el valor del nodo en la parte superior del stack
//   }
// }

// module.exports = {
//   Node,
//   MinStack
// };

function Node(value){ // 
  this.min = Infinity
  this.value = value // 
  this.next = null
}
// {value: 2, next: null}
function MinStack(){
  this.top = null
}
// {top:{min: 2, value: 5, next: {min: 2, value: 2, next: null}}}

MinStack.prototype.push = (value) => { // 7
  const previousTop = this.top // {min: 1, value: 1, next: {min: 2, value: 5, next: {min: 2, value: 2, next: null}}}
  this.top = new Node(value) // {min: Infinity, value: 7, next: null}
  this.top.next = previousTop // {min: 1, value: 7, next: {min: 1, value: 1, next: {min: 2, value: 5, next: {min: 2, value: 2, next: null}}}}

  if(!previousTop) this.top.min = value
  else if(value < previousTop.min) this.top.min = value
  else this.top.min = previousTop.min
}

MinStack.prototype.pop = () => {
  const popped = this.top // {value: 1, next: {value: 5, next: {value: 2, next: null}}}
  this.top = this.top.next // top: {value: 5, next: {value: 2, next: null}}
  return popped.value // 1
}

MinStack.prototype.peek = () => {
  return this.top.value // 5
}

MinStack.prototype.min = () => {
  return this.top.min
}


let miStack = new MinStack()
miStack.push(2)
miStack.push(5)
miStack.push(1)
miStack.pop()

module.exports = {
  Node,
  MinStack
}
