import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyvideosService {
 data:any = []
  searchMe: string = ""

  private apiUrl = "https://www.googleapis.com/youtube/v3/search"
  private apiKey = "AIzaSyA-9ORQqjg4C8b3gydIiavGT_oIxeXNWJ0"

  constructor(private http: HttpClient) { }
  private searchQuery: string = '';

  send(search: string){
    this.searchQuery = search
  }





  searchVideos(): Observable <any>{
    // return this.http.get('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC9IFOtmDZ9bouTV4jd6YWNA&key=AIzaSyA-9ORQqjg4C8b3gydIiavGT_oIxeXNWJ0')
    // return this.http.get('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&forUsername=manognareddy&key=AIzaSyA-9ORQqjg4C8b3gydIiavGT_oIxeXNWJ0')
    //return this.http.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyA-9ORQqjg4C8b3gydIiavGT_oIxeXNWJ0&type=video&part=snippet&q=${this.searchQuery}&maxResults=20')

    return this.http.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyA8-l2e4n2cV0R-ykQ6WGmSxSGgQEkgcmc&type=video&part=snippet&q=${this.searchQuery}&maxResults=20`)

  }



}







