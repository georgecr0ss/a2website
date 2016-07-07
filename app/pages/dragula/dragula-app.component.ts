import {Component, ViewEncapsulation} from '@angular/core';
import {EXAMPLES} from './dragula.component';

@Component({
    moduleId: module.id,
  selector: 'example-app',
  templateUrl: './dragula.component.html',
  encapsulation: ViewEncapsulation.None,
  directives: [EXAMPLES]
})
export class DragulaComponent {}
