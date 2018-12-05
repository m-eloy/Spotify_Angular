import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListealbumComponent } from './listealbum/listealbum.component';
import { ListechanteursComponent } from './listechanteurs/listechanteurs.component';
import { DetailalbumComponent } from './detailalbum/detailalbum.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { DetailplaylistComponent } from './detailplaylist/detailplaylist.component';
import { AjoutplaylistComponent } from './ajoutplaylist/ajoutplaylist.component';
import { ModificationplaylistComponent } from './modificationplaylist/modificationplaylist.component';

export const appRoutes: Routes = [
    { path: 'accueil', component: AccueilComponent },
    { path: '', component: AccueilComponent },
    { path: 'albums', component: ListealbumComponent },
    { path: 'chanteurs', component: ListechanteursComponent },
    { path: 'album/:id', component: DetailalbumComponent },
    { path: 'ajoutplaylist/:id', component: AjoutplaylistComponent },
    { path: 'playlist', component: PlaylistComponent },
    { path: 'playlist/:id', component: DetailplaylistComponent },
    { path: 'modificationplaylist/:id', component: ModificationplaylistComponent },
   ]