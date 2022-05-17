import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { Note } from 'src/app/shared/note/note.model';
import { NoteService } from 'src/app/shared/note/note.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {
  note: Note
  showValidationErrors: boolean = false;


  constructor(private route: ActivatedRoute, private noteService: NoteService, private router: Router, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const idParam = paramMap.get('id')
      this.note = this.noteService.getNote(idParam)!;
    })
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return this.showValidationErrors = true;
    else {
      this.noteService.updateNote(this.note.id!, form.value)
      this.router.navigateByUrl("/notes")

      this.notificationService.show('Note updated !')

      return this.showValidationErrors = false
    }
  }

  deleteNote() {
    this.noteService.deleteNote(this.note.id!);
    this.router.navigateByUrl("/notes")

    this.notificationService.show('Note deleted !')
  }

}
