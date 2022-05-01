import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDo } from 'src/app/shared/todo/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: ToDo

  @Output() editClick: EventEmitter<void> = new EventEmitter
  @Output() deleteClick: EventEmitter<void> = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  onEditClick() {
    this.editClick.emit()
  }

  onDeleteClick() {
    this.deleteClick.emit()
  }

}
