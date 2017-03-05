import { Router, RouterModule } from '@angular/router';

import { HomeComponent }        from './home/home.component';
import { UsersComponent }       from './users/users.component';
import { PostsComponent }       from './posts/posts.component';
import { NotfoundComponent } from './users/notfound.component';

export const navbarRouting = RouterModule.forRoot([
    { path: 'users', component: UsersComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent },
    { path: 'not-found', component: NotfoundComponent },
    { path: '**', redirectTo:'not-found'}
    
]);