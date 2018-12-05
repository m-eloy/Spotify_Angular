import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule, MatListModule, MatToolbarModule, MatIconModule, MatGridListModule, MatCardModule, MatFormFieldModule, MatInputModule, MatRadioModule, 
  MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { SpotifyService } from './spotify.service';
import { ListealbumComponent } from './listealbum/listealbum.component';
import { AccueilComponent } from './accueil/accueil.component';
import { appRoutes } from './app.routing';
import { ListechanteursComponent } from './listechanteurs/listechanteurs.component';
import { DetailalbumComponent } from './detailalbum/detailalbum.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { DetailplaylistComponent } from './detailplaylist/detailplaylist.component';
import { AjoutplaylistComponent } from './ajoutplaylist/ajoutplaylist.component';
import { ModificationplaylistComponent } from './modificationplaylist/modificationplaylist.component';

@NgModule({
  declarations: [
    AppComponent,
    ListealbumComponent,
    AccueilComponent,
    ListechanteursComponent,
    DetailalbumComponent,
    PlaylistComponent,
    DetailplaylistComponent,
    AjoutplaylistComponent,
    ModificationplaylistComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    HttpClientModule,
    MatRadioModule,
    MatButtonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
