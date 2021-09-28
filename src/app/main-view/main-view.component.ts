import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { GetTopArtistsService } from '../get-top-artists.service'
import { GetArtistByCountryService } from '../get-artist-by-country.service'
import { ModalComponent } from '../modal/modal.component'
import {MatDialog ,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'main-view',
  templateUrl: './main-view.component.html',
  styleUrls: [
              './main-view.component.css'
            ]
})
export class MainViewComponent implements OnInit {
  name:any= '';
  topArtists: any=[]
  artistByCountry:any =[]
  artistDetail: any=[]
  artistAlbum:any=[]
  artistTracks:any=[]

  countries = [
    {id: 'spain', name: 'Spain (+34)'},
    {id: 'germany', name: 'Germany (+49)'},
    {id: 'turkey', name: 'Turkey (+90)'}
  ];
  selectedCountry = this.countries[0]; 

  constructor(private get :GetTopArtistsService,private getArtistInfo :GetTopArtistsService,private getArtistTopAlbum :GetTopArtistsService,private getArtistTopTrack :GetTopArtistsService, private getArtistByCountry : GetArtistByCountryService,public dialog: MatDialog){

    this.get.getTopArtist().subscribe(data=>{
      this.topArtists = data;
      console.log(this.topArtists)
    });
  }

  artistModal(data:any){
    this.name = data;
      const dialogRef = this.dialog.open(ModalComponent, {
        data: {name: this.name}
      });
  }

  getByCountry(data:string){
    this.artistByCountry = this.getArtistByCountry.getArtistByCountry(data).subscribe((data)=>{
      this.artistByCountry = data;
    })
  }
  ngOnInit(): void {
    this.getByCountry(this.selectedCountry.id)
  }

}
