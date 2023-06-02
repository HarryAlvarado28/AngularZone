import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';



@Pipe({
  name: 'videoYouTube'
})
export class VideoYouTubePipe implements PipeTransform {

  constructor(private domSanitizer:DomSanitizer){

  }

  transform(value: string): any {
    let url = "https://www.youtube.com/embed/";
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
