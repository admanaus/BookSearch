import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from "@angular/forms";
import {ApiHelperService} from "../api-helper.service";

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent {

  //add ApiHelperService to the constructor
  constructor(private apiHelperService: ApiHelperService) { }

  value: string | undefined;

  //search for a book based on the title
  search() {
    if (!this.value)
      return
    this.apiHelperService.searchBook(this.value)
      .subscribe((data: any) => {
        console.log(data)
      });
  }

}
