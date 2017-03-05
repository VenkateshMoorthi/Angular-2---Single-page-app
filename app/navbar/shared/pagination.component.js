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
var PaginationComponent = (function () {
    function PaginationComponent() {
        this.items = [];
        this.pagesize = 10;
        this.pagechanged = new core_1.EventEmitter();
    }
    PaginationComponent.prototype.ngOnChanges = function () {
        this.currentpage = 1;
        var pagecount = this.items.length / this.pagesize;
        this.pages = [];
        for (var i = 1; i <= pagecount; i++) {
            this.pages.push(i);
        }
    };
    PaginationComponent.prototype.emitPageno = function (page) {
        this.currentpage = page;
        this.pagechanged.emit(page);
    };
    PaginationComponent.prototype.previous = function () {
        if (this.currentpage == 1) {
            return;
        }
        this.currentpage--;
        this.pagechanged.emit(this.currentpage);
    };
    PaginationComponent.prototype.next = function () {
        if (this.currentpage == this.pages.length) {
            return;
        }
        this.currentpage++;
        this.pagechanged.emit(this.currentpage);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PaginationComponent.prototype, "items", void 0);
    __decorate([
        core_1.Input('page-size'), 
        __metadata('design:type', Object)
    ], PaginationComponent.prototype, "pagesize", void 0);
    __decorate([
        core_1.Output('page-changed'), 
        __metadata('design:type', Object)
    ], PaginationComponent.prototype, "pagechanged", void 0);
    PaginationComponent = __decorate([
        core_1.Component({
            selector: 'pagination',
            template: "\n    <nav aria-label=\"Page navigation\">\n        <ul class=\"pagination\">\n            <li [class.disabled]=\"currentpage==1\">\n                <a (click)=\"previous()\" aria-label=\"Previous\">\n                    <span aria-hidden=\"true\">&laquo;</span>\n                </a>\n            </li>\n            <li *ngFor=\"let page of pages\" \n                (click)=\"emitPageno(page)\"\n                [class.active]=\"currentpage==page\"><a>{{page}}</a></li>\n            <li [class.disabled]=\"currentpage==pages.length\">\n                <a (click)=\"next()\"aria-label=\"Next\">\n                    <span aria-hidden=\"true\">&raquo;</span>\n                </a>\n            </li>\n        </ul>\n    </nav>\n\n\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=pagination.component.js.map