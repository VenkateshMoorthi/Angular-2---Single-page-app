"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var posts_service_1 = require('./posts.service');
var PostsComponent = (function () {
    function PostsComponent(_postsservice) {
        this._postsservice = _postsservice;
        this.posts = [];
        this.pagesize = 10;
        this.showpagination = true;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postsloading = true;
        this._postsservice.getPosts()
            .subscribe(function (posts) {
            _this.posts = posts;
            _this.allposts = posts;
            _this.pagedposts = _this.getPostsInPage(1);
        }, null, function () { return _this.postsloading = false; });
        this._postsservice.getUsers()
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    PostsComponent.prototype.showBody = function (post) {
        var _this = this;
        this.currentpost = post;
        this.commentsloading = true;
        this._postsservice.getComments(post.id)
            .subscribe(function (comments) {
            _this.currentcomments = comments;
        }, null, function () { return _this.commentsloading = false; });
    };
    PostsComponent.prototype.changePost = function (value) {
        var _this = this;
        this.currentcomments = null;
        this.currentpost = null;
        this.postsloading = true;
        if (value == "Select a user...") {
            this.posts = this.allposts;
            this.postsloading = false;
            this.showpagination = true;
        }
        else {
            this._postsservice.getuserPosts(value)
                .subscribe(function (posts) {
                _this.posts = posts;
            }, null, function () { return _this.postsloading = false; });
            this.showpagination = false;
        }
    };
    PostsComponent.prototype.currentpageno = function (page) {
        console.log(page);
        this.pagedposts = this.getPostsInPage(page);
    };
    PostsComponent.prototype.getPostsInPage = function (page) {
        var startingpost = (page - 1) * this.pagesize;
        console.log(startingpost);
        var endingpost = Math.min((startingpost + this.pagesize), this.allposts.length);
        var result = [];
        for (var i = startingpost; i < endingpost; i++) {
            result.push(this.allposts[i]);
        }
        return result;
    };
    PostsComponent = __decorate([
        core_1.Component({
            selector: 'posts',
            templateUrl: './app/navbar/posts/posts.component.html',
            styles: ["\n     li{\t\n        cursor:\tdefault;\n    }\n     li:hover{\n    \tbackground: #f8f5f0;\n    }\t\n    .list-group-item.active,\t\n    .list-group-item.active:hover,\t\n    .list-group-item.active:focus{\t\n\t background-color:\t#f8f5f0;\n\t border-color:\t#f8f5f0;\t\n\t color:\t#2c3e50;\n    }\n"
            ]
        }), 
        __metadata('design:paramtypes', [posts_service_1.PostsService])
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map