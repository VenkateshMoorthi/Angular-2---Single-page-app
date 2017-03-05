import { Component,OnInit } from '@angular/core';
import { PostsService }     from './posts.service';

 
@Component({
    selector: 'posts',
    templateUrl:'./app/navbar/posts/posts.component.html',
    styles:[`
     li{	
        cursor:	default;
    }
     li:hover{
    	background: #f8f5f0;
    }	
    .list-group-item.active,	
    .list-group-item.active:hover,	
    .list-group-item.active:focus{	
	 background-color:	#f8f5f0;
	 border-color:	#f8f5f0;	
	 color:	#2c3e50;
    }
`
]
})

export class PostsComponent implements OnInit{

users;
posts=[];  
postsloading;
currentpost;
currentcomments;
commentsloading;
allposts;
pagesize=10;
showpagination=true;
pagedposts;

constructor(private _postsservice:PostsService){}

ngOnInit(){
    this.postsloading = true;
    this._postsservice.getPosts()
                      .subscribe(posts=>{
                          this.posts=posts;
                          this.allposts=posts;
                          this.pagedposts=this.getPostsInPage(1);
                      },
                      null,
                      ()=>this.postsloading = false);

    this._postsservice.getUsers()
                      .subscribe(users=>{
                          this.users=users;
                      });                  
}

showBody(post){
        this.currentpost = post;
        this.commentsloading = true;
        this._postsservice.getComments(post.id)
                          .subscribe(comments=>{
                              this.currentcomments=comments; 
                          },null,
                          ()=>this.commentsloading=false);
}

changePost(value){
    this.currentcomments=null;
    this.currentpost=null;
    this.postsloading=true;
    if(value=="Select a user..."){
        this.posts=this.allposts;
        this.postsloading=false;
        this.showpagination=true;
    }
    else{    
        this._postsservice.getuserPosts(value)
                          .subscribe(posts=>{
                              this.posts=posts;
                        },null,
                        ()=>this.postsloading=false);
        this.showpagination=false;                   
    }  
}

currentpageno(page){
    console.log(page);
    this.pagedposts=this.getPostsInPage(page);
}

getPostsInPage(page){
    var startingpost=(page-1)*this.pagesize;
    console.log(startingpost);
    var endingpost=Math.min((startingpost+this.pagesize),this.allposts.length);    
    var result:any[]=[];
    for(var i=startingpost;i<endingpost;i++){
        result.push(this.allposts[i]);
    }
    return result;
}

}