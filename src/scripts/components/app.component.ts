import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: '/components/app.html',
    styles: [`
        .active{
            background: #DFDFDF;
            text-decorate: underline;
        }
    `]
})

export class AppComponent {
}
