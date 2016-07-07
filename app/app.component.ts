import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component'
import { JumbotronComponent } from './components/jumbotron/jumbotron.component'
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DragulaComponent } from './pages/dragula/dragula-app.component';
import { AlbumComponent } from './pages/album/album.component';
import { TreeTagComponent } from './pages/tree/tree.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>   
        <router-outlet></router-outlet> 
       
    `,
    directives:[ROUTER_DIRECTIVES, DragulaComponent, TreeTagComponent,AlbumComponent, NavbarComponent, JumbotronComponent,
        HomeComponent,AboutComponent] 
})
export class AppComponent { 
            
}
