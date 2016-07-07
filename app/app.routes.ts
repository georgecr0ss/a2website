import { provideRouter, RouterConfig } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { AboutComponent } from './pages/about/about.component'
import { BindComponent } from './pages/bind/bind.component'
import { AlbumComponent } from './pages/album/album.component'
import { TreeTagComponent } from './pages/tree/tree.component'
import { DragulaComponent } from './pages/dragula/dragula-app.component'


export const routes: RouterConfig = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent},
    { path: 'album', component: AlbumComponent },
    { path: 'binds', component: BindComponent},
    { path: 'tree', component: TreeTagComponent},
    { path: 'dragula', component: DragulaComponent},   
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];