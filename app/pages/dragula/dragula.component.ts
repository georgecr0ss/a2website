import { Component } from '@angular/core'; 
import { Dragula, DragulaService } from 'ng2-dragula/ng2-dragula'

@Component({
  moduleId: module.id,
  selector: 'dragula-cs',
  directives: [Dragula],
  viewProviders: [DragulaService], 
  templateUrl: 'dragula.component.html',
})
export class DragulaComponent {
    
}