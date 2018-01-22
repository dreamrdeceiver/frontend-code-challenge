import { Component, OnInit } from '@angular/core';
import {AdvertisementsService} from '../services/advertisements.service';
import {AdModel} from '../ad.model';
import {NgProgress} from 'ngx-progressbar';


@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.scss']
})

export class AdvertisementsComponent implements OnInit {
  //Component Variable Declaration
  public ads: AdModel[] = [];

  //inject service and progress bar
  constructor(public adservice: AdvertisementsService, public progress: NgProgress) {  }

  ngOnInit() {

    this.progress.start(); //start progress bar loading, call the service and subscribe
    this.adservice.getAdvertisements().subscribe(
      (ads: AdModel[]) =>{
        this.ads = ads; //assign ads to component variable
        this.progress.done(); //stop progress bar loading
      });
  }

}
