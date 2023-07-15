class Node {
  constructor(value, min) {
    this.value = value; // valor del nodo
    this.min = min; // valor mínimo en el stack hasta este nodo
  }
}

class MinStack {
  constructor() {
    this.stack = []; // arreglo para almacenar los nodos del stack
  }

  push(value) {
    let min = value; // el valor mínimo inicialmente es el mismo que el valor añadido

    if (this.stack.length > 0) {
      // si el stack no está vacío
      const currentMin = this.stack[this.stack.length - 1].min;
      min = Math.min(currentMin, value); // se actualiza el valor mínimo si es necesario
    }

    const node = new Node(value, min); // se crea un nuevo nodo con el valor y el valor mínimo
    this.stack.push(node); // se añade el nodo al stack
  }

  pop() {
    if (this.stack.length === 0) {
      // si el stack está vacío, no se puede hacer pop
      throw new Error('Stack is empty');
    }

    const node = this.stack.pop(); // se elimina el nodo en la parte superior del stack
    return node.value; // se devuelve el valor del nodo eliminado
  }

  min() {
    if (this.stack.length === 0) {
      // si el stack está vacío, no hay valor mínimo
      throw new Error('Stack is empty');
    }

    return this.stack[this.stack.length - 1].min; // se devuelve el valor mínimo en el stack
  }

  peek() {
    if (this.stack.length === 0) {
      // si el stack está vacío, no hay elemento para ver
      throw new Error('Stack is empty');
    }

    return this.stack[this.stack.length - 1].value; // se devuelve el valor del nodo en la parte superior del stack
  }
}

module.exports = {
  Node,
  MinStack
};
