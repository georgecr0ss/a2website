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
        this.jbtHeading = 'Lorem Ipsum!'
        this.jbtTxt = `Eлементарен примерен текст, използван в печатарската и типографската индустрия. Lorem Ipsum е индустриален стандарт от около 1500 година, когато неизвестен печатар взема няколко печатарски букви и ги разбърква, за да напечата с тях книга с примерни шрифтове. Този начин не само е оцелял повече от 5 века, но е навлязъл и в публикуването на електронни издания като е запазен почти без промяна. Популяризиран е през 60те години на 20ти век със издаването на Letraset листи, съдържащи Lorem Ipsum пасажи, популярен е и в наши дни във софтуер за печатни издания като Aldus PageMaker, който включва различни версии на Lorem Ipsum.`;
        this.jbtBtnTxt = 'Angular routes »'
        this.jbtBtnUrl = 'https://angular.io/docs/ts/latest/guide/router.html'
    }
}
