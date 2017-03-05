"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var users_component_1 = require('./users/users.component');
var posts_component_1 = require('./posts/posts.component');
var notfound_component_1 = require('./users/notfound.component');
exports.navbarRouting = router_1.RouterModule.forRoot([
    { path: 'users', component: users_component_1.UsersComponent },
    { path: 'posts', component: posts_component_1.PostsComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: '', component: home_component_1.HomeComponent },
    { path: 'not-found', component: notfound_component_1.NotfoundComponent },
    { path: '**', redirectTo: 'not-found' }
]);
//# sourceMappingURL=navbar.routing.js.map