document.addEventListener('DOMContentLoaded', () => {
  let response, newTodo;
  let list = [];
  const initQuestion = 'What would you like to do?';
  const pageBreak = '********************************';

  const todoList = () => {
    response = prompt(initQuestion).toLowerCase();
    while (response !== 'quit') {
      console.log('Top of while loop');
      if (response === 'new') {
        addATodo();
      } else if (response === 'list') {
        listTodos();
      } else if (response === 'delete') {
        removeTodo();
      } else {
        response = prompt(initQuestion).toLowerCase();
      }
    }
  };

  const addATodo = () => {
    newTodo = prompt('Enter new todo');
    list.push(newTodo);
    console.log(`${newTodo} added to list`);
    response = prompt(initQuestion).toLowerCase();
  };

  const listTodos = () => {
    console.log(pageBreak);
    for (let [i, todo] of list.entries()) {
      console.log(`%d: %s`, i, todo);
    }
    console.log(pageBreak);
    response = prompt(initQuestion).toLowerCase();
  };

  const removeTodo = () => {
    todoIndex = parseInt(prompt('Enter index of todo to delete'));
    while (
      (!(todoIndex === 0) && !todoIndex) ||
      todoIndex >= list.length ||
      todoIndex < 0
    ) {
      todoIndex = parseInt(prompt('Enter index of todo to delete'));
    }
    list.splice(todoIndex, 1);
    console.log('Todo Removed');
    response = prompt(initQuestion).toLowerCase();
  };

  todoList();
});
