import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {AdModel} from '../ad.model';

@Injectable()
export class AdvertisementsService {

  public advertisements: AdModel[] = [];

  constructor(private http: HttpClient) { }

  /********Method to retrieve data from public api********/
  getAdvertisements()
  {
    return this.http.get('/v1/advertisements')
      .map((response: any) => {
        const tenAds = response.data.splice(0, 10); //splice content to retrieve only the first ten ads.
        for(const oneAd of tenAds)
        {
          this.advertisements.push(
            new AdModel(
              oneAd.advertisementAssets["0"].advertisementThumbnails.inventory_m.url,
              oneAd.title,
              oneAd.realestateSummary.address.city,
              oneAd.realestateSummary.address.postalCode,
              oneAd.realestateSummary.numberOfRooms,
              oneAd.realestateSummary.space,
              oneAd.userWishes.visibleAddress,
              oneAd.advertisementPrice.sellPrice,
              oneAd.advertisementPrice.baseRent
              )
          );
        }
        return this.advertisements;
      })
      .catch((error) => Observable.throw(error));
  }
}
