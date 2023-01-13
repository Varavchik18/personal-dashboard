import { Injectable, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { ToDo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService implements OnDestroy {

  todos: ToDo[] = [

  ]
  storageListenSub: Subscription
  constructor() {
    this.loadState()

    this.storageListenSub = fromEvent<StorageEvent>(window, "storage")
      .subscribe((event: StorageEvent) => {
        if (event.key === 'todos')
          this.loadState()
      })
  }

  ngOnDestroy(): void {
    if (this.storageListenSub) this.storageListenSub.unsubscribe()
  }

  getTodos() {
    return this.todos
  }

  getTodo(id: string) {
    return this.todos.find(t => t.id === id)
  }

  addTodo(todo: ToDo) {
    this.todos.push(todo)

    this.saveState()
  }

  updateTodo(id: string, updatedFields: Partial<ToDo>) {
    const todo = this.getTodo(id)
    Object.assign(todo, updatedFields)

    this.saveState()
  }

  deleteTodo(id: string) {
    const index = this.todos.findIndex(t => t.id === id)
    if (index == -1) return

    this.todos.splice(index, 1)

    this.saveState()
  }

  saveState() {
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  loadState() {
    try {
      const todosInStorage = JSON.parse(localStorage.getItem('todos')!)

      if (!todosInStorage) return

      this.todos.length = 0
      this.todos.push(...todosInStorage)
    } catch (e) {
      console.log("error retrieveing the todos from local storage")
      console.log(e);
    }

  }


}
