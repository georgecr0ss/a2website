import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: 'navbar.html',
    directives: [ROUTER_DIRECTIVES] 
})
export class NavbarComponent { 
    private projectName: string;
    private url:string;
    
    constructor(){
        this.projectName = 'Moose inc.'
        this.url = "http://www.clipartkid.com/images/390/1330620618-a171-05-cute-cartoon-moose-jpg-images-frompo-7LqHT4-clipart.jpg";
    }
}
