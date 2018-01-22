/**********Angular Modules**********/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {routing} from './routing/app.routing';

/**********Components**********/
import { AppComponent } from './app.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

/**********Services and 3rd-party lib**********/
import {AdvertisementsService} from './services/advertisements.service';
import {NgProgressModule} from 'ngx-progressbar';


@NgModule({
  declarations: [
    AppComponent,
    AdvertisementsComponent,
    AboutComponent
    NotFoundComponent,
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
