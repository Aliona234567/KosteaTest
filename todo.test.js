import { TodoList } from './todo.js';

describe('TodoList', () => {
  let todoList;

  beforeEach(() => {
    todoList = new TodoList();
  });

  test('Добавляет новую задачу', () => {
    const todo = todoList.addTodo(' Покупка машины ');
    
    expect(todo).toHaveProperty('id');
    expect(todo).toHaveProperty('text');
    expect(todo).toHaveProperty('completed');
    
    expect(todo.text).toBe('Покупка машины');
    expect(todo.completed).toBe(false);
    
    expect(todoList.getAllTodos()).toHaveLength(1);
    expect(todoList.getAllTodos()[0].text).toBe('Покупка машины');
  });

  test('Удаляет задачу по id', () => {
    const todo1 = todoList.addTodo('задача 1');
    const todo2 = todoList.addTodo('задача 2');
    
    expect(todoList.getAllTodos()).toHaveLength(2);

    const removed = todoList.removeTodo(todo1.id);
    
    expect(removed.text).toBe('задача 1');
    
    expect(todoList.getAllTodos()).toHaveLength(1);
    expect(todoList.getAllTodos()[0].text).toBe('задача 2');
  });

  test('Изменяет текст задачи', () => {
    const todo = todoList.addTodo('Покупка машины');
        const updated = todoList.updateTodo(todo.id, 'Купил машину');
    
    expect(updated.text).toBe('Купил машину');
    
    expect(todoList.getAllTodos()[0].text).toBe('Купил машину');
  });

  test('Отмечает задачу как выполненную', () => {
    const todo = todoList.addTodo('Купить машину');
    
    expect(todo.completed).toBe(false);
    expect(todoList.getCompletedTodos()).toHaveLength(0);
    expect(todoList.getActiveTodos()).toHaveLength(1);
    
    const toggled = todoList.toggleTodo(todo.id);
    
    expect(toggled.completed).toBe(true);
    expect(todoList.getCompletedTodos()).toHaveLength(1);
    expect(todoList.getActiveTodos()).toHaveLength(0);
    
    todoList.toggleTodo(todo.id);
    expect(todoList.getAllTodos()[0].completed).toBe(false);
  });
});