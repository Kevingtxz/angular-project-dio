import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './model/Book';

@Injectable()

export class BooksService implements OnInit {

  private url: string = 'http://localhost:3000/api/books';
  private httpOptions: {} = {
    Headers: new HttpHeaders({'content-type': 'application/json'})
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {}

  getBooks() {
    return this.http.get<Book[]>('/api/books');
  }
}
