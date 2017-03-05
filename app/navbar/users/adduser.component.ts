import { Component, OnInit }       from '@angular/core';
import { FormGroup, 
         FormControl, 
         FormBuilder, 
         Validators}       from '@angular/forms';
import { EmailValidators } from './email.validators';
import { FormComponent }   from './candeactivate.adduser';
import { CanActivate, Router, ActivatedRoute }     from '@angular/router';
import { UsersService } from './users.service';
import { User } from './user';

@Component({
    selector:'add-user',
    templateUrl:'./app/navbar/users/adduser.component.html'
})

export class AddUserComponent implements FormComponent,OnInit{

    user = new User();
    form :FormGroup;
    title:string;
    id;

    constructor(
        fb:FormBuilder, 
        private _router:Router, 
        private _userservice:UsersService, 
        private _route:ActivatedRoute){
        this.form=fb.group({
            name:['',Validators.required],
            email:['',EmailValidators.validEmail],
            phone:'',
            address: fb.group({
                street:'',
                suite:'',
                city:'',
                zipcode:''
            })  
        });
    }



    ngOnInit(){
        this._route.params.subscribe(params =>{
            this.id = +params["id"];

        this.title = this.id ? "Edit User" : "Add User";

        if(!this.id){
            return;
        }

        this._userservice.getUser(this.id)
            .subscribe(user => {
                this.user = user;
        },
        res=>{
            if(res.status==404){
                this._router.navigate(['not-found'])
            }
        });

        });
    }



    onSubmit(){
        var result;

        if(!this.user.id)
            result = this._userservice.addUser(this.user);
        else
            result = this._userservice.updateUser(this.user);    

        result.subscribe(x=>{
            console.log(this.form.value);
        },
        null,
        ()=>{
            console.log
            this._router.navigate(['users']);
        });                 
        
        
    }

}