import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-listechanteurs',
  templateUrl: './listechanteurs.component.html',
  styleUrls: ['./listechanteurs.component.css']
})
export class ListechanteursComponent implements OnInit {

  chanteurs: any[];

  constructor(private spotService: SpotifyService) { }

  ngOnInit() {
  }

  chercherChanteurs(motcle: string) {
    this.spotService.getChanteurs(motcle).subscribe(

      (resultat) => {
        console.log(resultat);
        this.chanteurs = resultat['artists']['items'];
      })
  }
}