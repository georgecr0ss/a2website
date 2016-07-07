import { Component } from '@angular/core';
import { TreeComponent } from 'angular2-tree-component'

@Component({
    moduleId: module.id,
    selector: 'tree-component',
    templateUrl: 'tree.component.html',
    directives: [TreeComponent] 
})
export class TreeTagComponent {  
    nodes = [
    {
      name: 'root1',
      children: [
        { name: 'child1' },
        { name: 'child2' }
      ]
    },
    {
      name: 'root2',
      children: [
        { name: 'child2.1' },
        {
          name: 'child2.2',
          children: [
            { name: 'subsub' }
          ]
        }
      ]
    },
    {
      name: 'root3',
      children: [
        { name: 'child1' },
        { name: 'child2' }
      ]
    },
    {
      name: 'root4',
      children: [
        { name: 'child2.1' },
        {
          name: 'child2.2',
          children: [
            { name: 'subsub' }
          ]
        }
      ]
    }
  ];
}
