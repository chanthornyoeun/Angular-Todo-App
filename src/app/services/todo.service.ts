import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[];

  constructor() { 
    this.todos = [];
  }

  public getAllTodo(): Todo[] {
    return this.todos;
  }

  public getTodById(id: number): Todo {
    return this.todos.find(todo => todo.id === id);
  }

  public addTodo(todo: Todo) {
    todo.id = this.getNextId();
    this.todos.push(todo);
  }

  public updateTodo(id: number, todo: Todo) {
    const indexToUpdate = this.findTodoIndexById(id);
    this.todos[indexToUpdate] = todo;
  }

  public deleteTodoById(id: number) {
    this.todos.splice(this.findTodoIndexById(id), 1);
  }

  private findTodoIndexById(id: number): number {
    return this.todos.findIndex(todo => todo.id === id);
  }

  private getLastRecord() {
    return this.todos.sort((itemA, itemB) => itemB.id - itemA.id)[0];
  }

  private getNextId(): number {
    const lastTodo = this.getLastRecord();
    return lastTodo ? lastTodo.id + 1 : 1;
  }

}
