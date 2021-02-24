document.addEventListener('DOMContentLoaded', () => {
  let response;
  let list = [];
  const initQuestion = 'What would you like to do?';

  const todoList = () => {
    response = prompt(initQuestion).toLowerCase();
    while (response !== 'quit') {
      console.log('Top of while loop');
      if (response === 'new') {
        // addATodo();
      }
    }
  };

  todoList();
});
