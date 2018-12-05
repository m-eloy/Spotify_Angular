import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-ajoutplaylist',
  templateUrl: './ajoutplaylist.component.html',
  styleUrls: ['./ajoutplaylist.component.css']
})
export class AjoutplaylistComponent implements OnInit {
  
  private uriChanson : string;
  playlists: any[];

  constructor(private route:ActivatedRoute, private spotService: SpotifyService) { }

  ngOnInit() {
    this.uriChanson = this.route.snapshot.params['id'];
    this.spotService.getPlaylist().subscribe(
      (resultat) => {
        console.log(resultat);
        this.playlists = resultat['items'];
      })
  }

  ajoutChanson(playlist) {
    var chanson = {
      'uris' : [this.uriChanson], 
      'position': playlist.tracks.total
    }

    this.spotService.addChansonToPlaylist(playlist.id,chanson).subscribe(
      (resultat) => {
        console.log(resultat);
        console.log("Chanson ajouté à la playlist, vous allez être redirigé");
        window.location.href = '/albums';
      }
    );
  }

}
