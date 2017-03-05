import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { PaginationComponent} from './pagination.component';
import { SpinnerComponent }   from './spinner.component';

@NgModule({
    imports:[
        BrowserModule
    ],
    declarations:[
        SpinnerComponent,
        PaginationComponent
    ],
    exports:[
    SpinnerComponent,
    PaginationComponent
    ]

})

export class SharedModule{

}