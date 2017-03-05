import { Component, Input} from '@angular/core';

@Component({
    selector:'spinner',
    template:`
    <i *ngIf="isloading" class="fa fa-spinner fa-spin 3x"></i>
    `
})

export class SpinnerComponent{

@Input() isloading:boolean;

}