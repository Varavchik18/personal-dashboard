import { Component, OnInit } from '@angular/core';
import { Note } from '../shared/note/note.model';
import { NoteService } from '../shared/note/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes!: Note[]

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.notes = this.noteService.getNotes();
  }

}
