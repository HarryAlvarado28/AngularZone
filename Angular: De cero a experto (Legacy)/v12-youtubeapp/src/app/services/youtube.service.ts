import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl:string = "https://www.googleapis.com/youtube/v3";
  private apiKey:string = "YOUR_API_KEY";
  private playlist:string = "UUuaPTYj15JSkETGnEseaFFg";

  private nextPageToken:string = "";

  constructor(private http:HttpClient) { }

  getQuery(query:string, params:HttpParams){
    const url = `${this.youtubeUrl}${query}`;
    return this.http.get(url,{params});
  }

  getVideos(){

    const query = '/playlistItems';
    const params = new HttpParams()
      .set('part','snippet')
      .set('maxResults','10')
      .set('playlistId', this.playlist)
      .set('key', this.apiKey)
      .set('pageToken', this.nextPageToken);

    return this.getQuery(query,params).pipe(
      map(res => {
        console.log(res);
        this.nextPageToken = res['nextPageToken'];
        let videos: any[]=[];
        for(let video of res['items']){
          let snippet = video.snippet;
          videos.push(snippet);
        }
        return videos;
      })
    );

  }
}
