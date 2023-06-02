import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// services
import { YoutubeService } from './services/youtube.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideoYouTubePipe } from './pipes/video-you-tube.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    VideoYouTubePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    YoutubeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
