import { Component, OnInit } from '@angular/core';
import { Book } from './model/Book';
import { BooksService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  booksService: BooksService
  books: Array<Book> = []

  constructor(booksService: BooksService) {
    this.booksService = booksService
  }

  ngOnInit(): void {

    this.booksService.getBooks().subscribe({
      next: books => this.books = books,
      error: err => console.log(err)
    })
  }

}
