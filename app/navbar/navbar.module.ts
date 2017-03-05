import { NgModule }          from '@angular/core';
import { UsersModule }       from './users/users.module';

import { NavbarComponent }   from './navbar.component';
import { navbarRouting }     from './navbar.routing';
import { HomeComponent }     from './home/home.component';
import { NotfoundComponent } from './users/notfound.component';
import { PostsModule }       from './posts/posts.module';

@NgModule({
    imports:[
        navbarRouting,
        UsersModule,
        PostsModule
    ],
    declarations: [
        NavbarComponent,
        HomeComponent,
        NotfoundComponent
    ],
    exports:[
        NavbarComponent
    ]
})

export class NavbarModule {

} 