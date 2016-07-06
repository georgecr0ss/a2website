import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'jumbotron',
    templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent { 
    private jbtHeading: string;
    private jbtTxt: string;
    private jbtBtnTxt: string;
    private jbtBtnUrl: string;
    
    constructor(){
        this.jbtHeading = 'Hello, world!'
        this.jbtTxt = `This is a template for a 
                simple marketing or informational website. 
                It includes a large callout called a jumbotron 
                and three supporting pieces of content. Use it as a 
                starting point to create something more unique.`;
        this.jbtBtnTxt = 'Angular routes »'
        this.jbtBtnUrl = 'https://angular.io/docs/ts/latest/guide/router.html'
    }
}
