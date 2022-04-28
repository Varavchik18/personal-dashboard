import { Injectable } from '@angular/core';
import { ToDo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: ToDo[] = [
    new ToDo('This is a text'),
    new ToDo('This is a text1'),
    new ToDo('This is a text2'),
    new ToDo('This is a text3')
  ]

  constructor() {

  }

  getTodos() {
    return this.todos
  }

  getTodo(id: string) {
    return this.todos.find(t => t.id === id)
  }

  addTodo(todo: ToDo) {
    this.todos.push(todo)
  }

  updateTodo(id: string, updatedFields: Partial<ToDo>) {
    const todo = this.getTodo(id)
    Object.assign(todo, updatedFields)
  }

  deleteTodo(id: string) {
    const index = this.todos.findIndex(t => t.id === id)
    if (index == -1) return

    this.todos.splice(index, 1)
  }


}
