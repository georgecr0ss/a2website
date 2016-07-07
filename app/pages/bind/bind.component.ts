import { Component } from '@angular/core';
import { CarComponent } from './car/car.component';

@Component({
    moduleId: module.id,
    selector: 'bind',
    templateUrl: 'bind.component.html',
    directives: [CarComponent]
})
export class BindComponent {  
    cars = [
        {id:1, name:"Ferrari"},
        {id:1, name:"Lamborghini"},
        {id:1, name:"Porsche"},
        {id:1, name:"Mercedes"},
        {id:1, name:"Bentley"},
        {id:1, name:"Mercedes G Klass"},
    ];
}
