import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from 'src/app/shared/note/note.model';
import { NoteService } from 'src/app/shared/note/note.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  showValidationErrors: boolean = false;

  constructor(private noteService: NoteService, private router: Router, private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm) {
    console.log(form)
    if (form.invalid) return this.showValidationErrors = true;
    else {

      const note = new Note(form.value.title, form.value.content)
      console.log(note)

      this.noteService.addNote(note);
      this.router.navigateByUrl("/notes")

      this.notificationService.show('Created note !')
      return this.showValidationErrors = false
    }
  }

}
