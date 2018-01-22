import { AdvertisementsComponent } from './advertisements.component';
import {AdvertisementsService} from '../services/advertisements.service';
import {async, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {NgProgress} from 'ngx-progressbar';
import {AppComponent} from '../app.component';


describe('a advertisement service', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations:[AdvertisementsComponent, NgProgress],
    imports: [HttpClientTestingModule, NgProgress],
    providers: [AdvertisementsService]
  }));

  it('should list the ads', () => {
    const adService = TestBed.get(AdvertisementsService);
    const http = TestBed.get(HttpTestingController);
    // fake response
    const expected = [{
      url: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/573c7c608ffd7c0b2a8b45b6_variant_asset57ffa0ced86b1_inventoryM.jpg',
      title: '+++ +++ FLATSCREEN ZUM EINZUG! +++ Moderne, frisch sanierte 3 Zi-Wohnung mit herrlichem Ausblick',
      stadt: 'Duisburg',
      plz: '47259',
      zimmer: '3',
      space: 78.71,
      visibility: true,
      sellPrice: 374,
      baseRent: 457}];
    let actual = [];
    adService.getAdvertisements().subscribe( data => {
      expect(data).toEqual(expected);
    });
    http.expectOne('/v1/advertisements').flush(expected);
  });
});

