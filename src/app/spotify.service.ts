import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private spotifyUrlSearchAlbum = 'https://api.spotify.com/v1/search?type=album&market=FR&limit=10&q=';
  private spotifyUrlSearchChanteur = 'https://api.spotify.com/v1/search?type=artist&market=FR&limit=10&q=';
  private spotifyUrlAlbum = 'https://api.spotify.com/v1/albums/';
  private spotifyUrlPlaylist= 'https://api.spotify.com/v1/me/playlists';
  private spotifyUrlChansonsPlaylist= 'https://api.spotify.com/v1/playlists/';
  private token = 'BQDWDTNQ-10s-xlyhpLI9JJ95cEPTYhLqGVXws2-j2W3p8sN_8zPPsMndBvLcJrLdgdMlMCNfwBu_LbzxHS4hc4SQ5DqvHONva_4H3FkhNqN4tzIQGwOCsRvwXCYsANAOrZD_0Fl0lmDan3y0J-h-pnZOFzrX8xcPAFzQBBQrrz_1T2HYhX_U9dg2rk1_FGM8zi49eh3NNLpA9BCvciVjOVpdkmigEU';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });

  constructor(private http: HttpClient) { }

  // Liste des Albums en fonction d'un mot clé
  getAlbums(mot: string): Observable<any[]> {
    return this.http.get<any[]>(this.spotifyUrlSearchAlbum + mot, { headers: this.headers });
  }

  // Détail d'un album avec extrait des chansons disponibles
  getAlbum(id: string): Observable<any[]> {
    return this.http.get<any[]>(this.spotifyUrlAlbum + id, { headers: this.headers });
  }

  // Liste des Chanteur en fonction d'un mot clé
  getChanteurs(mot: string): Observable<any[]> {
    return this.http.get<any[]>(this.spotifyUrlSearchChanteur + mot, { headers: this.headers });
  }

  // Liste des Playlist d'un utilisateur
  getPlaylist(): Observable<any[]>{
    return this.http.get<any[]>(this.spotifyUrlPlaylist, { headers: this.headers });
  }

  // Ajouter une nouvelle playlist
  addPlaylist(playlist) {
    return this.http.post(this.spotifyUrlPlaylist, playlist, { headers: this.headers });
  }

  // Modifier détails playlist
  updatePlaylist(id: string, playlist) {
    return this.http.put(this.spotifyUrlChansonsPlaylist + id, playlist, { headers: this.headers });
  }

  // Détail d'une playlist avec les chansons et extraits des chansons disponibles
  getChansonsPlaylist(id: string): Observable<any[]> {
    return this.http.get<any[]>(this.spotifyUrlChansonsPlaylist + id, { headers: this.headers })
  }

  // Ajouter une chanson d'une playlist
  addChansonToPlaylist(id:string, chanson){
    return this.http.post(this.spotifyUrlChansonsPlaylist + id + '/tracks', chanson, { headers: this.headers });
  }

  // Supprimer une chanson d'une playlist
  deleteChanson(id:string, uri, position){
    return this.http.request(
      'delete',
      this.spotifyUrlChansonsPlaylist + id + '/tracks', {
        'body' : {
          'tracks' : [{
              uri: uri, positions: [position]
            }]},
        'headers' : this.headers
    });
  }

  // Changer l'ordre d'une chanson
  reorderChanson(id:string, order){
    return this.http.put(this.spotifyUrlChansonsPlaylist + id + '/tracks', order, { headers: this.headers })
  }
}
