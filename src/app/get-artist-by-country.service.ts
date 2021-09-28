import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GetArtistByCountryService {

  constructor(private http: HttpClient) { }
  getArtistByCountry(data:string){
    let url ="http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country="+data+"&api_key=56fee809d0e06200a3a3fed107f69587&limit=10&format=json"
    return this.http.get(url);
  }
}
