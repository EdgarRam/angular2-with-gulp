import {Component, Input} from '@angular/core';


@Component({
    selector: 'navigation',
    templateUrl: '/components/nav.html'
})

export class Navigation {

    @Input()
    title: string;

}
