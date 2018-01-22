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

  public ads: AdModel[] = [];

  constructor(public adservice: AdvertisementsService, public progress: NgProgress) {  }

  ngOnInit() {

    this.progress.start();
    this.adservice.getAdvertisements().subscribe(
      (ads: AdModel[]) =>{
        this.ads = ads;
        this.progress.done();
      });
  }

}
