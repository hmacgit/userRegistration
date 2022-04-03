import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {
  AuthenticationStateModel,
} from './auth.state';

const getAuthEP = 'https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d';


@Injectable()
export class AuthService {

  constructor(private _http: HttpClient) {
  }

  getAuth() {
    return this._http.get<AuthenticationStateModel>(getAuthEP);
  }

}
