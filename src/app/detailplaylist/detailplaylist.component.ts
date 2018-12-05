import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-detailplaylist',
  templateUrl: './detailplaylist.component.html',
  styleUrls: ['./detailplaylist.component.css']
})
export class DetailplaylistComponent implements OnInit {

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

  delete(uri, position){
    this.spotService.deleteChanson(this.idplaylist, uri, position).subscribe(
      (resultat) => {
        console.log(resultat);
        window.location.reload()
      },
      (error) => console.log(error)
    )
  }

  changeOrder(start:number, position:number, total:number){

    let posEnd = start + position ;
    if(posEnd == -1) {
      posEnd = 0
    }

    if(posEnd > total){
      posEnd = total;
    }

    var order = {
      'range_start': start,
      'range_length': 1,
      'insert_before': posEnd
    }

    console.log(order);

    this.spotService.reorderChanson(this.idplaylist, order).subscribe(
      (resultat) => {
        console.log(resultat);
        window.location.reload()
      },
      (error) => console.log(error)
    )
  }
}
