import { Component, OnInit } from '@angular/core';
import { MyvideosService } from '../myvideos.service';
import { SearchService } from '../search.service';
import { query } from 'express';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos: any[] = [];

  constructor(private myvideoservice: MyvideosService, private searchService: SearchService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.searchService.searchQuery$.subscribe(query => {
      if (query) {
        this.myvideoservice.send(query);
        this.fetchData();
      }
    });
  }

  fetchData() {
    this.myvideoservice.searchVideos().subscribe(data => {
      this.videos = data.items;
      console.log(this.videos);

    });
  }
  getVideoUrl(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
  }
}
