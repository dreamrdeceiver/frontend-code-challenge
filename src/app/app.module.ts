import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {routing} from './routing/app.routing';

import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {AdvertisementsService} from './services/advertisements.service';
import {HttpClientModule} from '@angular/common/http';
import {NgProgressModule} from 'ngx-progressbar';



@NgModule({
  declarations: [
    AppComponent,
    AdvertisementsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    NgProgressModule
  ],
  providers: [AdvertisementsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
