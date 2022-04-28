import { Component, OnInit } from '@angular/core';
import { ToDo } from '../shared/todo/todo.model';
import { TodoService } from '../shared/todo/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: ToDo[]

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos()
  }

  toggleCompleted(todo: ToDo) {
    this.todoService.updateTodo(todo.id, { completed: !todo.completed })
  }

}
