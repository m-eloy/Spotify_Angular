import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-detailalbum',
  templateUrl: './detailalbum.component.html',
  styleUrls: ['./detailalbum.component.css']
})
export class DetailalbumComponent implements OnInit {

  private idalbum : string;
  album: any;

  constructor(private route:ActivatedRoute, private spotService: SpotifyService) { }

  ngOnInit() {
    this.idalbum = this.route.snapshot.params['id'];
    this.chercherAlbum();
  }

  chercherAlbum() {
    this.spotService.getAlbum(this.idalbum).subscribe(
      (resultat) => {
        console.log(resultat);
        this.album = resultat;
      })
  }
}
