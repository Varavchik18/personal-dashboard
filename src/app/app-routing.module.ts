import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { NotesComponent } from './notes/notes.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: 'bookmarks', component: BookmarksComponent, data: { tabNumber: 0 } },
  { path: 'todo', component: TodoComponent, data: { tabNumber: 1 } },
  { path: 'notes', component: NotesComponent, data: { tabNumber: 2 } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
