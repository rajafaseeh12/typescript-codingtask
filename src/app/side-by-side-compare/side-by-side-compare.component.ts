import { Component, OnInit } from '@angular/core';
import { GetTopArtistsService } from '../get-top-artists.service'
@Component({
  selector: 'app-side-by-side-compare',
  templateUrl: './side-by-side-compare.component.html',
  styleUrls: ['./side-by-side-compare.component.css']
})
export class SideBySideCompareComponent implements OnInit {

  constructor(private searchArtist1:GetTopArtistsService,private searchArtist2:GetTopArtistsService,private getArtistInfo :GetTopArtistsService,) { }

  searchResult1:any=[]
  searchedArtist1:any=[]
  artistDetail1:any =[]

  searchResult2:any=[]
  searchedArtist2:any=[]
  artistDetail2:any =[]


  search1(searchValue:any){
    this.searchArtist1.searchArtist(searchValue).subscribe(data=>{
      this.searchResult1 =  data;
      Object.keys(this.searchResult1).forEach((key)=>{
        this.searchedArtist1 = this.searchResult1[key].artistmatches.artist;
      });
    })

  }

  search2(searchValue:any){
    this.searchArtist2.searchArtist(searchValue).subscribe(data=>{
      this.searchResult2 =  data;
      Object.keys(this.searchResult2).forEach((key)=>{
        this.searchedArtist2 = this.searchResult2[key].artistmatches.artist;
      });
    })
  }

  getFirstSearchArtistInfo(artistName:any){
    this.getArtistInfo.getArtistInfo(artistName).subscribe(data=>{
      this.artistDetail1 =  data;
    })
  }

  getSecondSearchArtistInfo(artistName:any){
    this.getArtistInfo.getArtistInfo(artistName).subscribe(data=>{
      this.artistDetail2 =  data;
    })
  }

  ngOnInit(): void {
  }

}
