import {RouterModule, Routes} from '@angular/router';
import {AdvertisementsComponent} from '../advertisements/advertisements.component';
import {NotFoundComponent} from '../not-found/not-found.component';
import {AboutComponent} from '../about/about.component';


const APP_ROUTES: Routes = [

  { path: '', redirectTo:'/adverts', pathMatch: 'full'},
  { path: 'adverts', component: AdvertisementsComponent},
  { path: 'about', component: AboutComponent},
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo:'/404'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
