import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/notification.service';
import { ToDo } from 'src/app/shared/todo/todo.model';
import { TodoService } from 'src/app/shared/todo/todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {
  showValidationErrors: boolean = false;
  todo: ToDo

  constructor(private route: ActivatedRoute, private todoService: TodoService, private router: Router, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const todoId = paramMap.get('id') || ''
      this.todo = this.todoService.getTodo(todoId)!
    })
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return this.showValidationErrors = true

    this.todoService.updateTodo(this.todo.id, form.value)
    this.router.navigateByUrl('/todo')

    this.notificationService.show('Task updated !')
    return
  }


}
