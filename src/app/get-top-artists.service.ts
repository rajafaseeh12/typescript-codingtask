import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GetTopArtistsService {

  constructor(private http: HttpClient) { }
  getTopArtist(){
    let url ="http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=56fee809d0e06200a3a3fed107f69587&format=json&limit=10"
    return this.http.get(url);
  }
  getArtistInfo(data:string){
    let url ="http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist="+data+"&api_key=56fee809d0e06200a3a3fed107f69587&format=json"
    return this.http.get(url);
  }
  getArtistTopAlbum(data:string){
    let url ="http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist="+data+"&api_key=56fee809d0e06200a3a3fed107f69587&format=json&limit=5"
    return this.http.get(url);
  }
  getArtistTopTracks(data:string){
    let url ="http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist="+data+"&api_key=56fee809d0e06200a3a3fed107f69587&format=json&limit=5"
    return this.http.get(url);
  }
  searchArtist(data:string){
    let url ="http://ws.audioscrobbler.com/2.0/?method=artist.search&artist="+data+"&api_key=56fee809d0e06200a3a3fed107f69587&format=json&limit=5"
    return this.http.get(url);
  }
}
