console.log(`It's nice to say hello.`)

let todoInput;  // Wpisywanie
let errorInfo;  // Infirmacja o braku zadań
let addBtn;     // Przycisk Add
let uList;      // Lista zadań, tagi UL

const main = () => {
  prepareDOMEelements();
  prepareDOMEvents();
}

const prepareDOMEvenets = () => {

}

document.addEventListener('DOMContentLoaded', main);