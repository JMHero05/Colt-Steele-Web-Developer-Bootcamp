document.addEventListener('DOMContentLoaded', () => {
  let response, newTodo;
  let list = [];
  const initQuestion = 'What would you like to do?';

  const todoList = () => {
    response = prompt(initQuestion).toLowerCase();
    while (response !== 'quit') {
      console.log('Top of while loop');
      if (response === 'new') {
        addATodo();
      }
    }
  };

  const addATodo = () => {
    newTodo = prompt('Enter new todo');
    todoList.push(newTodo);
    console.log(`${newTodo} added to list`);
    response = prompt(initQuestion).toLowerCase();
  };

  todoList();
});
