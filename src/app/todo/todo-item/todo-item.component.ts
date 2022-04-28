import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from 'src/app/shared/todo/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: ToDo

  constructor() { }

  ngOnInit(): void {
  }

}
