import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-modificationplaylist',
  templateUrl: './modificationplaylist.component.html',
  styleUrls: ['./modificationplaylist.component.css']
})
export class ModificationplaylistComponent implements OnInit {

  private idplaylist : string;
  playlist: any;

  constructor(private route:ActivatedRoute, private spotService: SpotifyService) { }

  ngOnInit() {
    this.idplaylist = this.route.snapshot.params["id"];
    this.afficherDetailPlaylist();
  }

  afficherDetailPlaylist() {
    this.spotService.getChansonsPlaylist(this.idplaylist).subscribe(
      (resultat) => {
        console.log(resultat);
        this.playlist = resultat;
      })
  }

  modifierPlaylist(name: string, desc: string, isPublic: string) {

    let bool:boolean;
    if (isPublic="true") {
      bool = true
    } else {
      bool = false
    }

    var playlist = {
      'name': name,
      'description': desc,
      'public': bool
    }

    this.spotService.updatePlaylist(this.idplaylist, playlist).subscribe(
      (resultat) => {
        console.log(resultat);
        console.log("Chanson ajouté à la playlist, vous allez être redirigé");
        window.location.href = '/playlist/' + this.idplaylist;
      })
  }
}
