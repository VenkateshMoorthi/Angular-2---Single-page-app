import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostsService{


    private _postsurl="https://jsonplaceholder.typicode.com/posts";
    private _userurl="https://jsonplaceholder.typicode.com/users";

    constructor(private _http:Http){}


    getPosts(){
       return this._http.get(this._postsurl)
                  .map(posts=>posts.json());  
    }

    getComments(id){
        return this._http.get(this._postsurl+"/"+id+"/comments")
                         .map(comments=>comments.json());
    }

    getUsers(){
        return this._http.get(this._userurl)
                          .map(users=>users.json());  
    }

    getuserPosts(id){
        return this._http.get(this._postsurl+"/?userId="+id)
                         .map(posts=>posts.json());   
    }



}