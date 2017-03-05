import { NgModule }            from '@angular/core';
import { HttpModule }          from '@angular/http';
import { UsersService }        from './users.service';
import { UsersComponent }      from './users.component';
import { BrowserModule }       from '@angular/platform-browser';
import { AddUserComponent }    from './adduser.component';
import { usersrouting }        from './users.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { CandeactivateAdduser } from './candeactivate.adduser';



@NgModule({
    imports:[
        HttpModule,
        BrowserModule,
        ReactiveFormsModule,
        usersrouting
    ],
    declarations:[
        UsersComponent,
        AddUserComponent
    ],
    exports:[
        UsersComponent
    ],
    providers:[
        UsersService,
        CandeactivateAdduser,
    ]
})

export class UsersModule{}
