import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-listealbum',
  templateUrl: './listealbum.component.html',
  styleUrls: ['./listealbum.component.css']
})
export class ListealbumComponent implements OnInit {

  albums: any[];

  constructor(private spotService: SpotifyService) { }

  ngOnInit() {
    
  }

  chercherAlbums(motcle: string) {
    this.spotService.getAlbums(motcle).subscribe(

      (resultat) => {
        console.log(resultat);
        this.albums = resultat['albums']['items'];
      })
  }

}
