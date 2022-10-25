import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MenubarModule} from 'primeng/menubar';
import {TabViewModule} from 'primeng/tabview';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { TtTabViewComponent } from './tt-tab-view/tt-tab-view.component';
import { TtYoutubeComponent } from './tt-tab-view/tt-youtube/tt-youtube.component';


@NgModule({
  declarations: [
    AppComponent,
    TtTabViewComponent,
    TtYoutubeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    TabViewModule,
    CardModule,
    InputTextModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
