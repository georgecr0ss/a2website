import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component'
import { JumbotronComponent } from './components/jumbotron/jumbotron.component'
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <jumbotron></jumbotron> 
        <div class="container">   
            <a [routerLink]="['/home']" style="color:white">Home</a>
            <a [routerLink]="['/about']" style="color:white">About</a>
            <router-outlet></router-outlet>
        </div>
       
    `,
    directives:[ROUTER_DIRECTIVES, NavbarComponent, JumbotronComponent,
        HomeComponent,AboutComponent] 
})
export class AppComponent { 
            
}
