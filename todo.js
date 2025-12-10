export class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo(text) {
    const todo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
    };
    this.todos.push(todo);
    return todo;
  }

  removeTodo(id) {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      return this.todos.splice(index, 1)[0];
    }
    return null;
  }

  updateTodo(id, newText) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.text = newText.trim();
      return todo;
    }
    return null;
  }

  toggleTodo(id) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      return todo;
    }
    return null;
  }

  getAllTodos() {
    return this.todos;
  }

  getCompletedTodos() {
    return this.todos.filter(todo => todo.completed);
  }

  getActiveTodos() {
    return this.todos.filter(todo => !todo.completed);
  }
}