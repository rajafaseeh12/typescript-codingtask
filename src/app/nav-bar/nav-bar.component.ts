import { Component, OnInit } from '@angular/core';
import { GetTopArtistsService } from '../get-top-artists.service'
import { ModalComponent } from '../modal/modal.component'
import {MatDialog ,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  name:any= '';
  searchResult:any=[]
  searchedArtist:any=[]

  constructor( private searchArtist:GetTopArtistsService,public dialog: MatDialog) { }
  search(data:any){
    this.searchArtist.searchArtist(data).subscribe(data=>{
      this.searchResult =  data;
      Object.keys(this.searchResult).forEach((key)=>{
        this.searchedArtist = this.searchResult[key].artistmatches.artist;
      });
    })

  }
  getSearchArtistInfo(data:any){
    this.name = data;
      const dialogRef = this.dialog.open(ModalComponent, {
        data: {name: this.name}
      });

  }

  ngOnInit(): void {
  }

}
