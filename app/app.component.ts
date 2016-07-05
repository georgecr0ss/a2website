import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component'

@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <h1>My First Angular 2 App</h1>
       
    `,
    directives:[NavbarComponent] 
})
export class AppComponent { }
