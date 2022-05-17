import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Bookmark } from 'src/app/shared/bookmarks/bookmark.model';
import { BookmarkService } from 'src/app/shared/bookmarks/bookmark.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent implements OnInit {

  constructor(private bookmarkService: BookmarkService, private router: Router, private notificationService: NotificationService) { }

  ngOnInit(): void {
  }


  onFormSubmit(form: NgForm) {
    const { name, url } = form.value
    const bookmark = new Bookmark(
      form.value.name,
      form.value.url
    )

    this.bookmarkService.addBookmark(bookmark)
    this.router.navigateByUrl("/bookmarks")
    this.notificationService.show('Created bookmark !')
  }
}
