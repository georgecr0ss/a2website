import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'car',
    templateUrl: 'car.component.html'
})
export class CarComponent {  

    @Input() car: {id: number, name: string};

    constructor() { }
     
}
