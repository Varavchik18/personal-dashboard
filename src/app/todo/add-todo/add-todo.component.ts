import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToDo } from 'src/app/shared/todo/todo.model';
import { TodoService } from 'src/app/shared/todo/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})

export class AddTodoComponent implements OnInit {

  showValidationErrors: boolean = false;

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return this.showValidationErrors = true

    const createdTodo = new ToDo(form.value.text)
    this.todoService.addTodo(createdTodo)

    this.router.navigateByUrl('/todo')
    return
  }

}
