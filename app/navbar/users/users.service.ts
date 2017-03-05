import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from './user';

@Injectable()
export class UsersService{

private users="https://jsonplaceholder.typicode.com/users";

constructor( private _http:Http ){}

getUsers(){
    return this._http.get(this.users)
                     .map(users=>users.json());
}

addUser(user){
    return this._http.post(this.users,JSON.stringify(user))
              .map(user=>user.json());
}   

getUser(id){
    return this._http.get(this.users+"/"+id)
                     .map(user=>user.json());
}

updateUser(user){
    return this._http.put(this.users+"/"+user.id,JSON.stringify(user))
                     .map(user=>user.json());
}


deleteUser(id){
    return this._http.delete(this.users+"/"+id)
                     .map(user=>user.json());
}


}