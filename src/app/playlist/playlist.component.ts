import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  playlists: any[];

  constructor(private spotService: SpotifyService) { }

  ngOnInit() {
    this.afficherPlaylists()
  }

  afficherPlaylists() {
    this.spotService.getPlaylist().subscribe(
      (resultat) => {
        console.log(resultat);
        this.playlists = resultat['items'];
      })
  }

  creerPlaylist(name: string, desc: string, isPublic: boolean) {
    var newPlaylist = {
      'name': name,
      'description': desc,
      'public': isPublic
    }

    this.spotService.addPlaylist(newPlaylist).subscribe(
      (resultat) => {
        console.log(resultat);
        window.location.reload();
      })
  }

}
