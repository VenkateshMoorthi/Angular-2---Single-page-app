import { NgModule }       from '@angular/core';
import { PostsComponent } from './posts.component';
import { PostsService }   from './posts.service';
import { BrowserModule }  from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports:[
        BrowserModule,
        SharedModule
    ],
    declarations:[
        PostsComponent
    ],
    providers:[
        PostsService
    ],
    exports:[
        PostsComponent
    ]
})

export class PostsModule{

}