import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { GetTopArtistsService } from '../get-top-artists.service'
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {name: string},private getArtistInfo :GetTopArtistsService,private getArtistTopAlbum :GetTopArtistsService,private getArtistTopTrack :GetTopArtistsService,public dialog: MatDialog) { }
  artistDetail:any=[]
  artistAlbum:any=[]
  artistTracks:any=[]
  open(artistName:any) {
    console.log(artistName);
    this.getArtistInfo.getArtistInfo(artistName).subscribe(data=>{
      this.artistDetail =  data;
      console.log("this.artistDetail",this.artistDetail);
    })
    this.getArtistTopAlbum.getArtistTopAlbum(artistName).subscribe(data=>{
      this.artistAlbum =  data;
      console.log("this.artistAlbum ",this.artistAlbum );
    })
    this.getArtistTopTrack.getArtistTopTracks(artistName).subscribe(data=>{
      this.artistTracks =  data;
      console.log("this.artistTracks",this.artistTracks);
    })
  }

  ngOnInit(): void {
    this.open(this.data.name)
  
  }

}
