import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from 'src/app/shared/note.model';
import { NoteService } from 'src/app/shared/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  showValidationErrors: boolean = false;

  constructor(private noteService: NoteService, private router: Router) { }

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
      return this.showValidationErrors = false
    }
  }

}
