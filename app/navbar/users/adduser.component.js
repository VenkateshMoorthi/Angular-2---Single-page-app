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
var forms_1 = require('@angular/forms');
var email_validators_1 = require('./email.validators');
var router_1 = require('@angular/router');
var users_service_1 = require('./users.service');
var user_1 = require('./user');
var AddUserComponent = (function () {
    function AddUserComponent(fb, _router, _userservice, _route) {
        this._router = _router;
        this._userservice = _userservice;
        this._route = _route;
        this.user = new user_1.User();
        this.form = fb.group({
            name: ['', forms_1.Validators.required],
            email: ['', email_validators_1.EmailValidators.validEmail],
            phone: '',
            address: fb.group({
                street: '',
                suite: '',
                city: '',
                zipcode: ''
            })
        });
    }
    AddUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.id = +params["id"];
            _this.title = _this.id ? "Edit User" : "Add User";
            if (!_this.id) {
                return;
            }
            _this._userservice.getUser(_this.id)
                .subscribe(function (user) {
                _this.user = user;
            }, function (res) {
                if (res.status == 404) {
                    _this._router.navigate(['not-found']);
                }
            });
        });
    };
    AddUserComponent.prototype.onSubmit = function () {
        var _this = this;
        var result;
        if (!this.user.id)
            result = this._userservice.addUser(this.user);
        else
            result = this._userservice.updateUser(this.user);
        result.subscribe(function (x) {
            console.log(_this.form.value);
        }, null, function () {
            console.log;
            _this._router.navigate(['users']);
        });
    };
    AddUserComponent = __decorate([
        core_1.Component({
            selector: 'add-user',
            templateUrl: './app/navbar/users/adduser.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.Router, users_service_1.UsersService, router_1.ActivatedRoute])
    ], AddUserComponent);
    return AddUserComponent;
}());
exports.AddUserComponent = AddUserComponent;
//# sourceMappingURL=adduser.component.js.map