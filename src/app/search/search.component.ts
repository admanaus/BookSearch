import { Component } from '@angular/core';
import { SearchInputComponent } from "../search-input/search-input.component";
import { SearchResultsComponent } from "../search-results/search-results.component";


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SearchInputComponent, SearchResultsComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

}
