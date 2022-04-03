import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PersonStateModel} from './user.state';

const getProfileEP = 'https://mocki.io/v1/611a3036-4420-48a5-b8da-9b461853cdd2';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) {
  }

  getProfile() {
    return this._http.get<PersonStateModel>(getProfileEP);
  }

}
