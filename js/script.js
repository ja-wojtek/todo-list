let todoInput;   // Wpisywanie
let errorInfo;   // Infirmacja o braku zadań
let addBtn;      // Przycisk Add
let uList;       // Lista zadań, tagi UL
let newTodo;     // nowo dodane zadanie

const main = () => {
  prepareDOMEelements();
  prepareDOMEvents();
}

const prepareDOMEelements = () => {
  todoInput = document.querySelector('.todo-input');
  errorInfo = document.querySelector('.error-info');
  addBtn = document.querySelector('.btn-add');
  uList = document.querySelector('.todolist ul');
}

const prepareDOMEvents = () => {
  addBtn.addEventListener('click', addNewTodo)
}

const addNewTodo = () => {
  if (todoInput.value !== '') {
    newTodo = document.createElement('li');
    newTodo.textContent = todoInput.value;

    createToolsArea();
    uList.append(newTodo);

    errorInfo.textContent = '';
    todoInput.value = '';
  } else {
    errorInfo.textContent = 'Wpisz treść zadania';
  }
}

const createToolsArea = () => {
  const toolsPanel = document.createElement('div');
  toolsPanel.classList.add('tools');
  newTodo.append(toolsPanel);

  const completeBtn = document.createElement('button');
  completeBtn.classList.add('complete')
  completeBtn.textContent = 'V'

  const editBtn = document.createElement('button');
  editBtn.classList.add('edit')
  editBtn.textContent = 'EDIT'

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete')
  deleteBtn.textContent = 'X'

  toolsPanel.append(completeBtn, editBtn, deleteBtn);
}

document.addEventListener('DOMContentLoaded', main);