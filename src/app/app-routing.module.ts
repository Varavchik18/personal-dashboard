import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookmarkComponent } from './bookmarks/add-bookmark/add-bookmark.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { EditBookmarkComponent } from './bookmarks/edit-bookmark/edit-bookmark.component';
import { ManageBookmarksComponent } from './bookmarks/manage-bookmarks/manage-bookmarks.component';
import { AddNoteComponent } from './notes/add-note/add-note.component';
import { EditNoteComponent } from './notes/edit-note/edit-note.component';
import { NotesComponent } from './notes/notes.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { EditTodoComponent } from './todo/edit-todo/edit-todo.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: 'bookmarks', component: BookmarksComponent, data: { tabNumber: 1 } },
  { path: 'bookmarks/add', component: AddBookmarkComponent },
  {
    path: 'bookmarks/manage', component: ManageBookmarksComponent, children: [
      { path: ':id', component: EditBookmarkComponent }
    ]
  },
  { path: 'todo', component: TodoComponent, data: { tabNumber: 2 } },
  { path: 'todo/add', component: AddTodoComponent },
  { path: 'todo/:id', component: EditTodoComponent },
  { path: 'notes', component: NotesComponent, data: { tabNumber: 3 } },
  { path: 'notes/add', component: AddNoteComponent },
  { path: 'notes/:id', component: EditNoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
