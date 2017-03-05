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
var posts_component_1 = require('./posts.component');
var posts_service_1 = require('./posts.service');
var platform_browser_1 = require('@angular/platform-browser');
var shared_module_1 = require('../shared/shared.module');
var PostsModule = (function () {
    function PostsModule() {
    }
    PostsModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                posts_component_1.PostsComponent
            ],
            providers: [
                posts_service_1.PostsService
            ],
            exports: [
                posts_component_1.PostsComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PostsModule);
    return PostsModule;
}());
exports.PostsModule = PostsModule;
//# sourceMappingURL=posts.module.js.map