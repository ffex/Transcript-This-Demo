import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MenubarModule} from 'primeng/menubar';
import {TabViewModule} from 'primeng/tabview';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

import { YouTubePlayerModule } from '@angular/youtube-player';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { AboutComponent } from './about/about.component';
import { TabYoutubeComponent } from './video/tab-youtube/tab-youtube.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoComponent,
    AboutComponent,
    TabYoutubeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    TabViewModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    YouTubePlayerModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
