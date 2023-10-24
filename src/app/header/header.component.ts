import { Component } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchQuery: string = '';

  constructor(private searchService: SearchService) {}

  searchVideos() {
    this.searchService.setSearchQuery(this.searchQuery);
  }
}
