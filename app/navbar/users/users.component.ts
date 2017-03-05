import { Component, OnInit } from '@angular/core';
import { UsersService }      from './users.service';
import { Router }            from '@angular/router';

@Component({
    selector: 'users',
    templateUrl:"./app/navbar/users/users.component.html"
})

export class UsersComponent implements OnInit{

users;

constructor(private _userservice:UsersService){

}

ngOnInit(){
    this._userservice.getUsers()
                    .subscribe(users=>this.users=users);

}


deletingUser(user){
    var deleteuser = this.users.indexOf(user);
    
    var deleteduser = this.users.splice(deleteuser,1);

    console.log(deleteduser[0].id);
    this._userservice.deleteUser(user.id)
                     .subscribe(null,
                     err=>{
                         alert("cannot delete the user");

                         this.users.splice(deleteuser,0,user);
                     });   
}

}