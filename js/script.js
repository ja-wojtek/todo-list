let todoInput;   // Wpisywanie
let errorInfo;   // Informacja o braku zadań
let addBtn;      // Przycisk Add
let uList;       // Lista zadań, tagi UL
let newTodo;     // nowo dodane zadanie

let popup;
let popupInfo;
let todoToEdit;
let popupInput;
let popupAddBtn;
let popupCloseBtn;

const main = () => {
  prepareDOMEelements();
  prepareDOMEvents();
}

const prepareDOMEelements = () => {
  todoInput = document.querySelector('.todo-input');
  errorInfo = document.querySelector('.error-info');
  addBtn = document.querySelector('.btn-add');
  uList = document.querySelector('.todolist ul');

  popup = document.querySelector('.popup');
  popupInfo = document.querySelector('.popup-info');
  popupInput = document.querySelector('.popup-input');
  popupAddBtn = document.querySelector('.accept');
  popupCloseBtn = document.querySelector('.cancel');
}


function prepareDOMEvents() {
  addBtn.addEventListener('click', addNewTodo);
  uList.addEventListener('click', checkClick);
  popupCloseBtn.addEventListener('click', closePopup);
  popupAddBtn.addEventListener('click', changeTodoText);
  todoInput.addEventListener('keyup', enterKeyCheck);
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
    errorInfo.textContent = 'Wpisz treść zadania.';
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


const checkClick = (e) => {
  if (e.target.matches('.complete')) {
    e.target.closest('li').classList.toggle('completed');
    e.target.classList.toggle('completed');
  } else if (e.target.matches('.edit')) {
    editTodo(e);
  } else if (e.target.matches('.delete')) {
    deleteTodo(e);
  }
}

const editTodo = (e) => {
  popup.style.display = 'flex';
  todoToEdit = e.target.closest('li');
  popupInput.value = todoToEdit.firstChild.textContent;
}

const closePopup = () => {
  popup.style.display = 'none';
  popupInfo.textContent = ''
}

const changeTodoText = () => {
  if (popupInput.value !== '') {
    todoToEdit.firstChild.textContent = popupInput.value;
    closePopup();
  } else {
    popupInfo.textContent = 'Musisz wprowadzić jakąś treść...'
  }
}

const deleteTodo = (e) => {
  e.target.closest('li').remove();

  const allTodos = uList.querySelectorAll('li');
  if (allTodos.length === 0) {
    errorInfo.textContent = 'Brak zadań na liście.'
  }
}

const enterKeyCheck = (e) => {
  if (e.key === 'Enter') {
    addNewTodo();
    console.log('enter');
  }
}

document.addEventListener('DOMContentLoaded', main);