import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { TodoComponent } from './todo/todo.component';
import { NotesComponent } from './notes/notes.component';
import { BookmarkTileComponent } from './bookmarks/bookmark-tile/bookmark-tile.component';
import { AddNoteComponent } from './notes/add-note/add-note.component';
import { NoteCardComponent } from './notes/note-card/note-card.component';
import { EditNoteComponent } from './notes/edit-note/edit-note.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    BookmarksComponent,
    TodoComponent,
    NotesComponent,
    BookmarkTileComponent,
    AddNoteComponent,
    NoteCardComponent,
    EditNoteComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
