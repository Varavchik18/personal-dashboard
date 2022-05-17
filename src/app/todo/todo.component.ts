import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/notification.service';
import { ToDo } from '../shared/todo/todo.model';
import { TodoService } from '../shared/todo/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  animations: [
    trigger('todoItemAnim', [
      transition(':leave', [
        animate(200, style({
          opacity: 0,
          height: 0,
          marginBottom: 0
        }))
      ])
    ])
  ]
})
export class TodoComponent implements OnInit {

  todos: ToDo[]

  constructor(private todoService: TodoService, private router: Router, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos()
  }

  toggleCompleted(todo: ToDo) {
    this.todoService.updateTodo(todo.id, { completed: !todo.completed })
  }

  onEditClick(todo: ToDo) {
    this.router.navigate([
      '/todo', todo.id
    ])
  }

  onDeleteClick(todo: ToDo) {
    this.todoService.deleteTodo(todo.id)
    this.notificationService.show('Task deleted ! ')
  }

  trackById(item: ToDo) {
    return item.id
  }
}
