import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {

  //add HttpClient to the constructor
  constructor(private http: HttpClient) { }

  getApiUrl(): string {
    return 'https://openlibrary.org/search.json?q=';
  }

  getApiUrlWithQuery(query: string): string {
    return this.getApiUrl() + query;
  }

  //search for a book based on the title using Angular HTTP GET
  searchBook(title: string) {
    return this.http.get(this.getApiUrlWithQuery(title));
  }

}
