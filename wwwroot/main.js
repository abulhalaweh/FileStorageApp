(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account/account.css":
/*!*************************************!*\
  !*** ./src/app/account/account.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-content{\r\n    background-color: rgba(162, 211, 240, 0.849);\r\n    border-radius: 60px;\r\n}\r\n\r\n.modal-lg{\r\n    width: 400px;\r\n}\r\n\r\n#titleRegist, #titleLog{\r\n    font-family: Helvetica;\r\n    font-size: 30px;\r\n    color: #ffffff;\r\n}\r\n\r\n#titleRegist{\r\n    margin-left: 35%;\r\n}\r\n\r\n#titleLog{\r\n    margin-left: 40%;\r\n}\r\n\r\n.GooglePlus{\r\n\ttext-align: center;\r\n    color: #ffffff;\r\n    margin-bottom: 10px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.GooglePlus button{\r\n\tbackground: none;\r\n\tborder: none;\r\n\tcolor: rgb(73, 70, 70);\r\n\toutline:none;\r\n    transition: 1s;\r\n    cursor: pointer;\r\n}\r\n\r\n.GooglePlus button:hover{\r\n    color: whitesmoke;\r\n    transition: 1s;\r\n}\r\n\r\n.GooglePlus button:active{\r\n    color: rgb(73, 70, 70);\r\n    transition: 1s;\r\n}\r\n\r\n.form-control {\r\n    font-size: 15px;\r\n    box-shadow: inset 0 0 25px rgba(153, 153, 207, 0.50);\r\n    width: 350px;\r\n    border-radius: 8px;\r\n    background-color: none;\r\n}\r\n\r\n.danger-alert{\r\n    min-height: 35px;\r\n    box-shadow: inset 0 0 25px rgba(199, 45, 45, 0.616);\r\n    margin-top: 5px;\r\n}\r\n\r\n.checkbox{\r\n    width: 15px;\r\n    height: 15px;\r\n    display: inline-block;\r\n    margin-right: 5px;\r\n}\r\n\r\n.label {\r\n    font-size: 20px;\r\n    color: whitesmoke;\r\n}\r\n\r\n#reg-link {\r\n    font-size: 20px;\r\n    color: whitesmoke;\r\n    text-decoration: none;\r\n    transition: 0.8s;\r\n    width: 230px;\r\n    cursor: pointer;\r\n}\r\n\r\n#reg-link:hover {\r\n    color: rgba(46, 59, 58, 0.884);\r\n    transition: 0.8s;\r\n}"

/***/ }),

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmation/confirmation.component */ "./src/app/account/confirmation/confirmation.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/account/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/account/login/login.component.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/account.service */ "./src/services/account.service.ts");
/* harmony import */ var _services_requestBuilder_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/requestBuilder.service */ "./src/services/requestBuilder.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _services_errorHandler_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/errorHandler.service */ "./src/services/errorHandler.service.ts");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _socialloginConfig__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./socialloginConfig */ "./src/app/account/socialloginConfig.ts");
/* harmony import */ var _directives_validators_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../directives/validators.module */ "./src/directives/validators.module.ts");
/* harmony import */ var _directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../directives/equal.validator.directive */ "./src/directives/equal.validator.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angular_6_social_login__WEBPACK_IMPORTED_MODULE_10__["SocialLoginModule"],
                _directives_validators_module__WEBPACK_IMPORTED_MODULE_12__["ValidatorsModule"]
            ],
            declarations: [
                _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_0__["ConfirmationComponent"],
                _directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_13__["EqualValidator"]
            ],
            exports: [],
            providers: [
                _services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"],
                _services_requestBuilder_service__WEBPACK_IMPORTED_MODULE_7__["RequestBuilderService"],
                _services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"],
                _services_errorHandler_service__WEBPACK_IMPORTED_MODULE_9__["ErrorHandlerService"],
                {
                    provide: angular_6_social_login__WEBPACK_IMPORTED_MODULE_10__["AuthServiceConfig"],
                    useFactory: _socialloginConfig__WEBPACK_IMPORTED_MODULE_11__["getAuthServiceConfigs"]
                }
            ]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/account/confirmation/confirmation.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/account/confirmation/confirmation.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#confirmation{\r\n    /* display: none; */\r\n}\r\n\r\n.modal-sm{\r\n    width: 250px;\r\n}\r\n\r\n#ConfirmModal input{\r\n    display: block;\r\n    margin: auto;\r\n    width: 120px;\r\n    border-radius: 10px;\r\n    margin-bottom: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n#cancelBtn{\r\n    margin: auto;\r\n    width: 120px;\r\n}\r\n\r\n#titleConfirm{\r\n    font-family: Helvetica;\r\n    font-size: 20px;\r\n    color: #ffffff;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/account/confirmation/confirmation.component.html":
/*!******************************************************************!*\
  !*** ./src/app/account/confirmation/confirmation.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a #confirmation id=\"confirmation\" data-toggle=\"modal\" data-target=\"#ConfirmModal\" href=\"#\"></a>\r\n\r\n<div id=\"ConfirmModal\" class=\"modal fade\" data-backdrop=\"static\" data-keyboard=\"false\" tabindex=\"-1\" role=\"combobox\" aria-labelledby=\"confirmModalCenterTitle\" aria-hidden=\"true\">\r\n    \r\n    <div class=\"modal-dialog modal-dialog-centered modal-sm\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"titleConfirm\">You don't have an account, choose the register type</h5>\r\n            </div>\r\n\r\n            <div class=\"modal-body\">\r\n\r\n                <div class=\"form-group\">\r\n                    <input type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"externalSignIn.proceedWithLogin($event.target.value)\" value=\"Patient\">\r\n                    <input type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"externalSignIn.proceedWithLogin($event.target.value)\" value=\"Doctor\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <div class=\"modal-footer\">\r\n                        <button type=\"button\" id=\"cancelBtn\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"externalSignIn.proceedWithLogin($event.target.value)\" value=\"Cancel\">Cancel</button>\r\n                    </div>\r\n                </div>\r\n                \r\n            </div>\r\n    \r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/account/confirmation/confirmation.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/account/confirmation/confirmation.component.ts ***!
  \****************************************************************/
/*! exports provided: ConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function() { return ConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _socialLogin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../socialLogin */ "./src/app/account/socialLogin.ts");
/* harmony import */ var ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-rx-componentdestroyed */ "./node_modules/ng2-rx-componentdestroyed/dist/index.js");
/* harmony import */ var ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfirmationComponent = /** @class */ (function () {
    function ConfirmationComponent() {
    }
    ConfirmationComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.externalSignIn.callConfirmOption
            .pipe(Object(ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_2__["untilComponentDestroyed"])(this))
            .subscribe(function () {
            _this.confirmModal.nativeElement.click();
        });
    };
    ConfirmationComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _socialLogin__WEBPACK_IMPORTED_MODULE_1__["SocialLogin"])
    ], ConfirmationComponent.prototype, "externalSignIn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('confirmation'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ConfirmationComponent.prototype, "confirmModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeBtn'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ConfirmationComponent.prototype, "closeBtn", void 0);
    ConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirmation-cmp',
            template: __webpack_require__(/*! ./confirmation.component.html */ "./src/app/account/confirmation/confirmation.component.html"),
            styles: [__webpack_require__(/*! ../account.css */ "./src/app/account/account.css"), __webpack_require__(/*! ./confirmation.component.css */ "./src/app/account/confirmation/confirmation.component.css")]
        })
    ], ConfirmationComponent);
    return ConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/account/login/login.component.html":
/*!****************************************************!*\
  !*** ./src/app/account/login/login.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #LoginModal id=\"LoginModal\" class=\"modal fade\" data-backdrop=\"static\" data-keyboard=\"false\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"logModalCenterTitle\" aria-hidden=\"true\">\r\n    \r\n    <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"titleLog\">Login</h5>\r\n            </div>\r\n\r\n            <div class=\"modal-body\">\r\n\r\n                <div class=\"GooglePlus\">\r\n                    <button type=\"submit\" (click)=\"externalSignIn.googleSignIn()\" name=\"provider\" value=\"\">\r\n                        <i class=\"fab fa-google-plus fa-4x\"></i>\r\n                    </button>\r\n                </div>\r\n\r\n                <form #logForm=\"ngForm\" userExists=\"true\" novalidate (ngSubmit)=\"onSubmit(logForm.value)\">\r\n                    \r\n                    <div class=\"form-group\">\r\n                        <div *ngIf=\"logForm.invalid && logForm.errors?.server\" class=\"form-control danger-alert\">\r\n                            <div>\r\n                                {{logForm.errors.server}}\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <input class=\"form-control\" type=\"email\" name=\"email\" ngModel #email=\"ngModel\" \r\n                        required email placeholder=\"Email\" />\r\n                \r\n                        <div *ngIf=\"email.invalid && email.dirty\"\r\n                        class=\"form-control danger-alert\">\r\n                \r\n                            <div *ngIf=\"email.errors.required\">\r\n                                Email is required.\r\n                            </div>\r\n                            <div *ngIf=\"email.errors.email\">\r\n                                Incorrect email input.\r\n                            </div>\r\n                            <div *ngIf=\"email.errors?.userExists\">\r\n                                {{email.errors.userExists}}\r\n                            </div>\r\n                            <div *ngIf=\"email.errors?.server\">\r\n                                {{email.errors.server}}\r\n                            </div>\r\n                \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <input class=\"form-control\" type=\"password\" name=\"password\" ngModel #password=\"ngModel\" \r\n                        required minlength=\"6\" maxlength=\"25\" placeholder=\"Password\" />\r\n                \r\n                        <div *ngIf=\"password.invalid && password.dirty\"\r\n                        class=\"form-control danger-alert\">\r\n                \r\n                            <div *ngIf=\"password.errors.required\">\r\n                                Password is required.\r\n                            </div>\r\n                            <div *ngIf=\"password.errors.minlength\">\r\n                                Password must be between 6 and 25 characters.\r\n                            </div>\r\n                            <div *ngIf=\"password.errors?.server\">\r\n                                {{password.errors.server}}\r\n                            </div>\r\n                \r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <a (click)=\"goToRegister()\" id=\"reg-link\" class=\"nav-link\">Register as a new user</a>\r\n\r\n                    <div class=\"form-group\">\r\n                        <div class=\"modal-footer\">\r\n                            <button type=\"button\" #closeBtn (click)=\"formReset()\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                            <button type=\"submit\" [disabled]=\"logForm.invalid || logForm.disabled\" class=\"btn btn-primary\">Login</button>\r\n                        </div>\r\n                    </div>\r\n\r\n                </form>\r\n                \r\n            </div>\r\n    \r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<app-confirmation-cmp [externalSignIn]=\"externalSignIn\"></app-confirmation-cmp>"

/***/ }),

/***/ "./src/app/account/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/account/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _socialLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../socialLogin */ "./src/app/account/socialLogin.ts");
/* harmony import */ var ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-rx-componentdestroyed */ "./node_modules/ng2-rx-componentdestroyed/dist/index.js");
/* harmony import */ var ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_errorHandler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/errorHandler.service */ "./src/services/errorHandler.service.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/account.service */ "./src/services/account.service.ts");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = /** @class */ (function () {
    function LoginComponent(accountSrc, errorHandler, socialAuthSrc, route, router) {
        var _this = this;
        this.accountSrc = accountSrc;
        this.errorHandler = errorHandler;
        this.socialAuthSrc = socialAuthSrc;
        this.route = route;
        this.router = router;
        route.queryParams
            .pipe(Object(ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_4__["untilComponentDestroyed"])(this))
            .subscribe(function (params) { return _this.autoOpen(params); });
        this.configSocialLogin();
    }
    LoginComponent.prototype.configSocialLogin = function () {
        var _this = this;
        this.externalSignIn = new _socialLogin__WEBPACK_IMPORTED_MODULE_3__["SocialLogin"](this.socialAuthSrc, this.accountSrc);
        this.externalSignIn.callSuccess
            .pipe(Object(ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_4__["untilComponentDestroyed"])(this))
            .subscribe(function () {
            _this.closeBtn.nativeElement.click();
            _this.form.form.enable();
        });
        this.externalSignIn.callFailure
            .pipe(Object(ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_4__["untilComponentDestroyed"])(this))
            .subscribe(function (errRes) {
            _this.errorHandler.setServerErrors(errRes, {}, _this.form);
        });
        this.externalSignIn.callFormFreeze
            .pipe(Object(ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_4__["untilComponentDestroyed"])(this))
            .subscribe(function (freeze) {
            _this.changeFormState(freeze);
        });
    };
    LoginComponent.prototype.changeFormState = function (freeze) {
        if (freeze === true) {
            this.form.form.disable();
        }
        else {
            this.form.form.enable();
        }
    };
    LoginComponent.prototype.autoOpen = function (params) {
        if (params['redirect'] === 'true') {
            setTimeout(function () {
                document.getElementById('logLink').click();
            }, 200);
        }
    };
    LoginComponent.prototype.onSubmit = function (model) {
        var _this = this;
        this.form.form.disable();
        this.accountSrc.getPasswordTokens(model)
            .pipe(Object(ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_4__["untilComponentDestroyed"])(this))
            .subscribe(function (res) {
            _this.formReset();
            _this.proccessOnSuccess(res);
        }, function (errRes) {
            _this.form.form.enable();
            _this.errorHandler.setServerErrors(errRes, model, _this.form);
        });
    };
    LoginComponent.prototype.proccessOnSuccess = function (model) {
        this.accountSrc.configureTokens(model);
        this.closeBtn.nativeElement.click();
        this.form.form.enable();
    };
    LoginComponent.prototype.formReset = function () {
        this.form.reset();
        this.router.navigate(['/']);
    };
    LoginComponent.prototype.goToRegister = function () {
        this.closeBtn.nativeElement.click();
        this.router.navigate(['/account/register'], {
            queryParams: { 'redirect': true },
            skipLocationChange: true
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('logForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], LoginComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeBtn'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LoginComponent.prototype, "closeBtn", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-log-cmp',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/account/login/login.component.html"),
            styles: [__webpack_require__(/*! ../account.css */ "./src/app/account/account.css")]
        }),
        __metadata("design:paramtypes", [_services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"],
            _services_errorHandler_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlerService"],
            angular_6_social_login__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/account/register/register.component.html":
/*!**********************************************************!*\
  !*** ./src/app/account/register/register.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"RegisterModal\" data-backdrop=\"static\" data-keyboard=\"false\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n    \r\n    <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"titleRegist\">Register</h5>\r\n            </div>\r\n\r\n            <div class=\"modal-body\">\r\n\r\n                <div class=\"GooglePlus\">\r\n                    <button type=\"submit\" (click)=\"externalSignIn.googleSignIn()\" name=\"provider\" value=\"\">\r\n                        <i class=\"fab fa-google-plus fa-4x\"></i>\r\n                    </button>\r\n                </div>\r\n\r\n                <form #regForm=\"ngForm\" userExists=\"false\" novalidate (ngSubmit)=\"onSubmit(regForm.value)\">\r\n                    \r\n                    <div class=\"form-group\">\r\n                        <div *ngIf=\"regForm.invalid && regForm.errors?.server\" class=\"form-control danger-alert\">\r\n                            <div>\r\n                                {{regForm.errors.server}}\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <input class=\"form-control\" name=\"lastName\" ngModel #lastName=\"ngModel\" \r\n                        required validateEmpty minlength=\"2\" maxlength=\"15\" placeholder=\"Last name\" />\r\n                \r\n                        <div *ngIf=\"lastName.invalid && lastName.dirty\"\r\n                        class=\"form-control danger-alert\">\r\n                \r\n                            <div *ngIf=\"lastName.errors.required\">\r\n                                Last name is required.\r\n                            </div>\r\n                            <div *ngIf=\"lastName.errors.minlength\">\r\n                                Last name must be at least 2 characters long.\r\n                            </div>\r\n                            <div *ngIf=\"lastName.errors.validateEmpty\">\r\n                                Last name cannot have white spaces.\r\n                            </div>\r\n                            <div *ngIf=\"lastName.errors?.server\">\r\n                                {{lastName.errors.server}}\r\n                            </div>\r\n                \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <input class=\"form-control\" name=\"firstName\" ngModel #firstName=\"ngModel\" \r\n                        required validateEmpty minlength=\"2\" maxlength=\"15\" placeholder=\"First name\" />\r\n                \r\n                        <div *ngIf=\"firstName.invalid && firstName.dirty\"\r\n                        class=\"form-control danger-alert\">\r\n                \r\n                            <div *ngIf=\"firstName.errors.required\">\r\n                                First name is required.\r\n                            </div>\r\n                            <div *ngIf=\"firstName.errors.minlength\">\r\n                                First name must be at least 2 characters long.\r\n                            </div>\r\n                            <div *ngIf=\"firstName.errors.validateEmpty\">\r\n                                First name cannot have white spaces.\r\n                            </div>\r\n                            <div *ngIf=\"firstName.errors?.server\">\r\n                                {{firstName.errors.server}}\r\n                            </div>\r\n                \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <input class=\"form-control\" name=\"email\" ngModel #email=\"ngModel\"\r\n                        required email placeholder=\"Email\" />\r\n                \r\n                        <div *ngIf=\"email.invalid && email.dirty\"\r\n                        class=\"form-control danger-alert\">\r\n                \r\n                            <div *ngIf=\"email.errors.required\">\r\n                                Email is required.\r\n                            </div>\r\n                            <div *ngIf=\"email.errors.email\">\r\n                                Incorrect email input.\r\n                            </div>\r\n                            <div *ngIf=\"email.errors.userExists\">\r\n                                {{email.errors.userExists}}\r\n                            </div>\r\n                            <div *ngIf=\"email.errors?.server\">\r\n                                {{email.errors.server}}\r\n                            </div>\r\n                \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <input class=\"form-control\" type=\"password\" name=\"password\" ngModel #password=\"ngModel\" \r\n                        required minlength=\"6\" maxlength=\"25\" placeholder=\"Password\" />\r\n                \r\n                        <div *ngIf=\"password.invalid && password.dirty\"\r\n                        class=\"form-control danger-alert\">\r\n                \r\n                            <div *ngIf=\"password.errors.required\">\r\n                                Password is required.\r\n                            </div>\r\n                            <div *ngIf=\"password.errors.minlength\">\r\n                                Password must be between 6 and 25 characters.\r\n                            </div>\r\n                            <div *ngIf=\"password.errors?.server\">\r\n                                {{password.errors.server}}\r\n                            </div>\r\n                \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <input class=\"form-control\" type=\"password\" name=\"confirmPassword\" ngModel #confirmPassword=\"ngModel\" \r\n                        validateEqual=\"password\" maxlength=\"25\" placeholder=\"Password confirmation\" />\r\n                \r\n                        <div *ngIf=\"confirmPassword.invalid && !confirmPassword.pristine\" \r\n                        class=\"form-control danger-alert\">\r\n\r\n                            <div *ngIf=\"confirmPassword.errors.validateEqual === false\">\r\n                                Password confirmation doesn't match password.\r\n                            </div>\r\n                \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <input class=\"form-control checkbox\" type=\"checkbox\" name=\"registerAsDoctor\" ngModel>\r\n                        <label class=\"label\" for=\"\">Register as a doctor</label>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <div class=\"modal-footer\">\r\n                            <button type=\"button\" #closeBtn (click)=\"formReset()\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                            <button type=\"submit\" [disabled]=\"regForm.invalid || regForm.disabled\" class=\"btn btn-primary\">Register</button>\r\n                        </div>\r\n                    </div>\r\n\r\n                </form>\r\n                \r\n            </div>\r\n    \r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<app-confirmation-cmp [externalSignIn]=\"externalSignIn\"></app-confirmation-cmp>"

/***/ }),

/***/ "./src/app/account/register/register.component.ts":
/*!********************************************************!*\
  !*** ./src/app/account/register/register.component.ts ***!
  \********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/account.service */ "./src/services/account.service.ts");
/* harmony import */ var _services_errorHandler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/errorHandler.service */ "./src/services/errorHandler.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _socialLogin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../socialLogin */ "./src/app/account/socialLogin.ts");
/* harmony import */ var _node_modules_angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var _node_modules_angular_6_social_login__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-rx-componentdestroyed */ "./node_modules/ng2-rx-componentdestroyed/dist/index.js");
/* harmony import */ var ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(accountSrc, errorHandler, socialAuthSrc, route, router) {
        var _this = this;
        this.accountSrc = accountSrc;
        this.errorHandler = errorHandler;
        this.socialAuthSrc = socialAuthSrc;
        this.route = route;
        this.router = router;
        route.queryParams
            .pipe(Object(ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_7__["untilComponentDestroyed"])(this))
            .subscribe(function (params) { return _this.autoOpen(params); });
        this.configSocialLogin();
    }
    RegisterComponent.prototype.configSocialLogin = function () {
        var _this = this;
        this.externalSignIn = new _socialLogin__WEBPACK_IMPORTED_MODULE_5__["SocialLogin"](this.socialAuthSrc, this.accountSrc);
        this.externalSignIn.callSuccess
            .pipe(Object(ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_7__["untilComponentDestroyed"])(this))
            .subscribe(function () {
            _this.closeBtn.nativeElement.click();
            _this.form.form.enable();
        });
        this.externalSignIn.callFailure
            .pipe(Object(ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_7__["untilComponentDestroyed"])(this))
            .subscribe(function (errRes) {
            _this.errorHandler.setServerErrors(errRes, {}, _this.form);
        });
        this.externalSignIn.callFormFreeze
            .pipe(Object(ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_7__["untilComponentDestroyed"])(this))
            .subscribe(function (freeze) {
            _this.changeFormState(freeze);
        });
    };
    RegisterComponent.prototype.changeFormState = function (freeze) {
        if (freeze === true) {
            this.form.form.disable();
        }
        else {
            this.form.form.enable();
        }
    };
    RegisterComponent.prototype.autoOpen = function (params) {
        if (params['redirect'] === 'true') {
            setTimeout(function () {
                document.getElementById('regLink').click();
            }, 200);
        }
    };
    RegisterComponent.prototype.onSubmit = function (model) {
        var _this = this;
        model.registerAsDoctor = model.registerAsDoctor !== '';
        delete model['confirmPassword'];
        this.form.form.disable();
        this.accountSrc.register(model)
            .pipe(Object(ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_7__["untilComponentDestroyed"])(this))
            .subscribe(function (regRes) {
            _this.accountSrc.getPasswordTokens(model)
                .pipe(Object(ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_7__["untilComponentDestroyed"])(_this))
                .subscribe(function (res) {
                _this.formReset();
                _this.accountSrc.configureTokens(res);
                _this.closeBtn.nativeElement.click();
                _this.form.form.enable();
            }, function (errRes) {
                _this.processErrors(errRes, model);
            });
        }, function (errRes) {
            _this.processErrors(errRes, model);
        });
    };
    RegisterComponent.prototype.processErrors = function (errRes, model) {
        this.form.form.enable();
        this.errorHandler.setServerErrors(errRes, model, this.form);
    };
    RegisterComponent.prototype.formReset = function () {
        this.form.reset();
        this.router.navigate(['/']);
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('regForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], RegisterComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeBtn'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RegisterComponent.prototype, "closeBtn", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reg-cmp',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/account/register/register.component.html"),
            styles: [__webpack_require__(/*! ../account.css */ "./src/app/account/account.css")]
        }),
        __metadata("design:paramtypes", [_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"],
            _services_errorHandler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerService"],
            _node_modules_angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/account/socialLogin.ts":
/*!****************************************!*\
  !*** ./src/app/account/socialLogin.ts ***!
  \****************************************/
/*! exports provided: SocialLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLogin", function() { return SocialLogin; });
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_google_response_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/google.response.model */ "./src/models/google.response.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocialLogin = /** @class */ (function () {
    function SocialLogin(socialAuthService, accountSrc) {
        this.socialAuthService = socialAuthService;
        this.accountSrc = accountSrc;
        this.callConfirmOption = new _node_modules_angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.callFormFreeze = new _node_modules_angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.callSuccess = new _node_modules_angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.callFailure = new _node_modules_angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SocialLogin.prototype.googleSignIn = function () {
        var _this = this;
        var socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__["GoogleLoginProvider"].PROVIDER_ID;
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            _this.googleResponse = new _models_google_response_model__WEBPACK_IMPORTED_MODULE_2__["GoogleResponse"](userData.idToken);
            _this.userExists(userData.email);
        });
    };
    SocialLogin.prototype.userExists = function (email) {
        var _this = this;
        this.accountSrc.userExists(email).subscribe(function (ex) {
            if (ex === false) {
                _this.callConfirmOption.emit();
            }
            else {
                _this.proceedWithLogin('');
            }
        });
    };
    SocialLogin.prototype.proceedWithLogin = function (value) {
        var _this = this;
        if (value !== 'Cancel') {
            this.googleResponse.RegisterAsDoctor = value === 'Doctor';
            this.callFormFreeze.emit(true);
            this.accountSrc.getAuthorizationCode(this.googleResponse).subscribe(function (res) {
                var url = String(res.url);
                var index = url.indexOf('=');
                var code = url.substring(index + 1);
                _this.accountSrc.getAuthorizationTokens(code).subscribe(function (res1) {
                    _this.proceedOnSuccess(res1);
                }, function (errRes) {
                    _this.callFormFreeze.emit(false);
                    _this.callFailure.emit(errRes);
                });
            });
        }
    };
    SocialLogin.prototype.proceedOnSuccess = function (model) {
        this.accountSrc.configureTokens(model);
        this.callSuccess.emit();
    };
    __decorate([
        Object(_node_modules_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], SocialLogin.prototype, "callConfirmOption", void 0);
    __decorate([
        Object(_node_modules_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], SocialLogin.prototype, "callFormFreeze", void 0);
    __decorate([
        Object(_node_modules_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], SocialLogin.prototype, "callSuccess", void 0);
    __decorate([
        Object(_node_modules_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], SocialLogin.prototype, "callFailure", void 0);
    return SocialLogin;
}());



/***/ }),

/***/ "./src/app/account/socialloginConfig.ts":
/*!**********************************************!*\
  !*** ./src/app/account/socialloginConfig.ts ***!
  \**********************************************/
/*! exports provided: getAuthServiceConfigs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__);

function getAuthServiceConfigs() {
    return new angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__["AuthServiceConfig"]([
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__["GoogleLoginProvider"]('719762341905-nsgda0ahgf2loco1mte1jrtbgpu5gg0d.apps.googleusercontent.com')
        }
    ]);
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _account_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account/login/login.component */ "./src/app/account/login/login.component.ts");
/* harmony import */ var _account_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account/register/register.component */ "./src/app/account/register/register.component.ts");
/* harmony import */ var _profile_userInfo_user_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/userInfo/user.info.component */ "./src/app/profile/userInfo/user.info.component.ts");
/* harmony import */ var _profile_users_data_users_data_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/users.data/users.data.component */ "./src/app/profile/users.data/users.data.component.ts");
/* harmony import */ var _profile_change_login_change_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/change.login/change.login.component */ "./src/app/profile/change.login/change.login.component.ts");
/* harmony import */ var _profile_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/change.password/change.password.component */ "./src/app/profile/change.password/change.password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { UploadComponent } from './UploadFile/upload.component';
//import { UploadFileComponent } from './UploadFile/upload.file.component';



var accountRoutes = [
    { path: 'login', component: _account_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _account_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: '**', redirectTo: '/' }
];
var profileRoutes = [
    { path: 'info', component: _profile_userInfo_user_info_component__WEBPACK_IMPORTED_MODULE_6__["UserInfoComponent"] },
    { path: 'data', component: _profile_users_data_users_data_component__WEBPACK_IMPORTED_MODULE_7__["UsersDataComponent"] },
    { path: 'changeLogin', component: _profile_change_login_change_login_component__WEBPACK_IMPORTED_MODULE_8__["ChangeLoginComponent"] },
    { path: 'changePassword', component: _profile_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__["ChangePasswordComponent"] },
    { path: '**', redirectTo: '/' }
];
//const uploadRoutes: Routes = [
//  { path: 'uploadFile', component: UploadComponent },
//  { path: '**', redirectTo: '/' }
//];
var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'account', children: accountRoutes },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"], children: profileRoutes },
    //{ path: 'upload', component: ProfileComponent, children: profileRoutes },
    //{ path: 'upload', component: UploadFileComponent, children: uploadRoutes },
    { path: '**', redirectTo: '/' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n\tfont-family: Helvetica;\r\n}\r\n\r\n.logo{\r\n\tfloat:left;\r\n\tfont-size: 44px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.logo a, .logo a:hover{\r\n\tcolor:#333333;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.nova, .clinic{\r\n\tdisplay: inline-block;\r\n\tcolor: #ff8919;\r\n}\r\n\r\n.clinic{\r\n\tcolor: #333333;\r\n}\r\n\r\n.navbar{\r\n\tpadding-left: 60px;\r\n\theight: 80px;\r\n\tmargin-bottom: 10px;\r\n\tbackground-color: #C4E7FF;\r\n}\r\n\r\n.custom{\r\n\tborder: none;\r\n}\r\n\r\n.nav-item{\r\n\tfont-size: 23px;\r\n\tmargin-left: 23px;\r\n\topacity: 1;\r\n\ttransition: opacity 1s;\r\n\tcursor: pointer;\r\n}\r\n\r\n#body-container{\r\n\theight: 370px;\r\n\tbackground: url('medicineWithLove.jpg') no-repeat center/cover #8ddbdf;\r\n}\r\n\r\n.footer{\r\n\tbackground-color: #C4E7FF;\r\n\ttext-align: center;\r\n\tmargin-top: 25px;\r\n\tpadding: 40px 0px;\r\n\theight: 100px;\r\n}\r\n\r\n.footer > .container{\r\n\theight: 70px;\r\n\tmargin-top: -2%;\r\n}\r\n\r\n.socialnet a{\r\n\tpadding: 0px 20px;\r\n\tcolor: #333333;\r\n}\r\n\r\n.socialnet i:hover{\r\n\tcolor: #ff8919;\r\n}\r\n\r\n.hide {\r\n\topacity: 0;\r\n\ttransition: opacity 1s;\r\n }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light\">\r\n\r\n  <div class=\"logo\" routerLink=\"/\" skipLocationChange>\r\n    <i class=\"fa fa-medkit\" aria-hidden=\"true\"></i>\r\n    <div class=\"nova\">File Storage</div>\r\n    <div class=\"clinic\"></div>\r\n  </div>\r\n\r\n  <button class=\"navbar-toggler hidden-lg-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavId\" aria-controls=\"collapsibleNavId\"\r\n          aria-expanded=\"false\" aria-label=\"Toggle navigation\"></button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavId\">\r\n\r\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n      <li class=\"nav-item active\" routerLink=\"/\" skipLocationChange>\r\n        <a class=\"nav-link\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\" (click)=\"isLoggedIn()\">\r\n        <a class=\"nav-link\">My Profile</a>\r\n      </li>\r\n      <li class=\"nav-item\" (click)=\"isLoggedIn()\">\r\n        <a class=\"nav-link\">My Files</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLink=\"/account/register\" skipLocationChange>\r\n        <a id=\"regLink\"\r\n           class=\"nav-link\"\r\n           data-toggle=\"modal\"\r\n           data-target=\"#RegisterModal\">\r\n          Register\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLink=\"/account/login\" skipLocationChange>\r\n        <a id=\"logLink\"\r\n           class=\"nav-link\"\r\n           data-toggle=\"modal\"\r\n           data-target=\"#LoginModal\">\r\n          Login\r\n        </a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\" [ngClass]=\"{hide: !loggedIn}\">\r\n        <div *ngIf=\"loggedIn === true\">\r\n          <a class=\"nav-link\" href=\"#\" (click)=\"hasLoggedOut()\">Logout</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n\r\n  </div>\r\n\r\n</nav>\r\n\r\n<div id=\"body-container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n<div class=\"footer\">\r\n\r\n  <div class=\"container\">\r\n\r\n    <div class=\"mail\">abulhalaweh@gmail.com</div>\r\n\r\n    <div class=\"socialnet\">\r\n      <a href=\"#\"><i class=\"fab fa-facebook fa-2x\" aria-hidden=\"true\"></i></a>\r\n      <a href=\"#\"><i class=\"fab fa-twitter fa-2x\" aria-hidden=\"true\"></i></a>\r\n      <a href=\"#\"><i class=\"fab fa-instagram fa-2x\" aria-hidden=\"true\"></i></a>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/account.service */ "./src/services/account.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(accountService, router) {
        var _this = this;
        this.accountService = accountService;
        this.router = router;
        this.loggedIn = false;
        this.signedIn = accountService.isLoggedIn.subscribe(function () { return _this.hasLoggedIn(); });
        this.signedOut = accountService.isLoggedOut.subscribe(function () { return _this.hasLoggedOut(); });
    }
    AppComponent.prototype.isLoggedIn = function () {
        if (this.loggedIn === true) {
            this.router.navigate(['/profile/info'], { skipLocationChange: true });
        }
        else {
            this.router.navigate(['/account/login'], {
                queryParams: { 'redirect': true },
                skipLocationChange: true
            });
        }
    };
    //public isLoggedInToMyStorage(): void {
    //  if (this.loggedIn === true) {
    //    this.router.navigate(['/profile/info'], { skipLocationChange: true });
    //    //this.router.navigate(['/upload/uploadFile'], { skipLocationChange: true });
    //  } else {
    //    this.router.navigate(['/account/login'],
    //      {
    //        queryParams: { 'redirect': true },
    //        skipLocationChange: true
    //      });
    //  }
    //}
    AppComponent.prototype.hasLoggedIn = function () {
        this.loggedIn = true;
    };
    AppComponent.prototype.hasLoggedOut = function () {
        if (this.loggedIn === true) {
            this.accountService.logout();
            this.loggedIn = false;
            this.router.navigate(['/']);
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_hub_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/hub.service */ "./src/services/hub.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _account_account_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account/account.module */ "./src/app/account/account.module.ts");
/* harmony import */ var _profile_profile_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.module */ "./src/app/profile/profile.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _account_account_module__WEBPACK_IMPORTED_MODULE_6__["AccountModule"],
                _profile_profile_module__WEBPACK_IMPORTED_MODULE_7__["ProfileModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [_services_hub_service__WEBPACK_IMPORTED_MODULE_0__["HubService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron-fluid{\r\n\theight: 335px;\r\n\ttext-shadow: grey 1.5px 1.5px 3px;\r\n\tcolor: whitesmoke;\r\n}\r\n\r\n.slider h1{\r\n\tmargin: -1px;\r\n\tpadding: 0;\r\n\ttext-align: center;\r\n\tpadding-top: 80px;\r\n\tfont-size: 54px;\r\n\tcolor:#333333;\r\n}\r\n\r\n.slider p{\r\n\ttext-align: center;\r\n\tpadding-top: 40px;\r\n\tfont-size: 54px;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron-fluid\">\r\n    <div class=\"container slider\">\r\n      <h1 class=\"display-3\">Your Cloud Files Storage</h1>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-cmp',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/profile/change.login/change.login.component.html":
/*!******************************************************************!*\
  !*** ./src/app/profile/change.login/change.login.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #changeLogForm=\"ngForm\" userExists=\"false\" novalidate (ngSubmit)=\"onChange(changeLogForm, email.value)\">\r\n\r\n    <div class=\"form-group\">\r\n        <input class=\"form-control\" name=\"currentEmail\" (change)=\"checkUsername(currentEmail)\" type=\"email\" ngModel #currentEmail=\"ngModel\" \r\n        required email placeholder=\"Current email\" />\r\n\r\n        <div *ngIf=\"currentEmail.invalid && currentEmail.dirty\"\r\n        class=\"form-control danger-alert\">\r\n\r\n            <div *ngIf=\"currentEmail.errors.required\">\r\n                Current email field is required.\r\n            </div>\r\n            <div *ngIf=\"currentEmail.errors.email\">\r\n                Incorrect email input.\r\n            </div>\r\n            <div *ngIf=\"currentEmail.errors?.userExists\">\r\n                {{currentEmail.errors.userExists}}\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <input class=\"form-control\" name=\"email\" type=\"email\" ngModel #email=\"ngModel\" \r\n        required email placeholder=\"New email\" />\r\n\r\n        <div *ngIf=\"email.invalid && email.dirty\"\r\n        class=\"form-control danger-alert\">\r\n\r\n            <div *ngIf=\"email.errors.required\">\r\n                New email field is required.\r\n            </div>\r\n            <div *ngIf=\"email.errors.email\">\r\n                Incorrect email input.\r\n            </div>\r\n            <div *ngIf=\"email.errors?.userExists\">\r\n                {{email.errors.userExists}}\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <button type=\"submit\"\r\n            [disabled]=\"changeLogForm.invalid || btnBlock\"\r\n            class=\"btn btn-success btn-sm\">\r\n            Change\r\n        </button>\r\n    </div>\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/profile/change.login/change.login.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/profile/change.login/change.login.component.ts ***!
  \****************************************************************/
/*! exports provided: ChangeLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeLoginComponent", function() { return ChangeLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-rx-componentdestroyed */ "./node_modules/ng2-rx-componentdestroyed/dist/index.js");
/* harmony import */ var ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/account.service */ "./src/services/account.service.ts");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/profile.service */ "./src/services/profile.service.ts");
/* harmony import */ var _services_errorHandler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/errorHandler.service */ "./src/services/errorHandler.service.ts");
/* harmony import */ var _models_email_post_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/email.post.model */ "./src/models/email.post.model.ts");
/* harmony import */ var _enums_enum_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../enums/enum.models */ "./src/enums/enum.models.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChangeLoginComponent = /** @class */ (function () {
    function ChangeLoginComponent(profileSrc, accounrSrc, errorHandler) {
        this.profileSrc = profileSrc;
        this.accounrSrc = accounrSrc;
        this.errorHandler = errorHandler;
        this.userName = this.profileSrc.get(_enums_enum_models__WEBPACK_IMPORTED_MODULE_6__["Profile"].username);
    }
    ChangeLoginComponent.prototype.checkUsername = function (model) {
        if (model.value !== this.userName) {
            model.control.setErrors({ userExists: 'The email is incorrect!' });
        }
    };
    ChangeLoginComponent.prototype.onChange = function (form, email) {
        var _this = this;
        form.form.disable();
        this.btnBlock = true;
        var model = new _models_email_post_model__WEBPACK_IMPORTED_MODULE_5__["EmailModel"](email);
        this.profileSrc.postData(_enums_enum_models__WEBPACK_IMPORTED_MODULE_6__["ControllerType"].manage, _enums_enum_models__WEBPACK_IMPORTED_MODULE_6__["PostMethod"].changeLogin, model)
            .pipe(Object(ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_1__["untilComponentDestroyed"])(this))
            .subscribe(function () {
            alert('The email has been successfully changed!');
            form.reset();
            _this.enableForm(form);
            _this.accounrSrc.checkAccountAuth();
        }, function (err) {
            _this.enableForm(form);
            _this.errorHandler.setServerErrors(err, model, form);
        });
    };
    ChangeLoginComponent.prototype.enableForm = function (form) {
        this.btnBlock = false;
        form.form.enable();
    };
    ChangeLoginComponent.prototype.ngOnDestroy = function () {
    };
    ChangeLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-log-cmp',
            template: __webpack_require__(/*! ./change.login.component.html */ "./src/app/profile/change.login/change.login.component.html"),
            styles: [__webpack_require__(/*! ../shared.profile.css */ "./src/app/profile/shared.profile.css")]
        }),
        __metadata("design:paramtypes", [_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"],
            _services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"],
            _services_errorHandler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlerService"]])
    ], ChangeLoginComponent);
    return ChangeLoginComponent;
}());



/***/ }),

/***/ "./src/app/profile/change.password/change.password.component.html":
/*!************************************************************************!*\
  !*** ./src/app/profile/change.password/change.password.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #changePassForm=\"ngForm\" novalidate (ngSubmit)=\"onChange(changePassForm)\">\r\n\r\n    <div class=\"form-group\">\r\n        <input class=\"form-control\" \r\n        type=\"password\" \r\n        name=\"CurrentPassword\" \r\n        ngModel #CurrentPassword=\"ngModel\" \r\n        required minlength=\"6\" maxlength=\"25\" \r\n        placeholder=\"Current password\" />\r\n\r\n        <div *ngIf=\"CurrentPassword.invalid && CurrentPassword.dirty\"\r\n        class=\"form-control danger-alert\">\r\n\r\n            <div *ngIf=\"CurrentPassword.errors.required\">\r\n                Current password field is required.\r\n            </div>\r\n            <div *ngIf=\"CurrentPassword.errors.minlength\">\r\n                Password must be between 6 and 25 characters.\r\n            </div>\r\n            <div *ngIf=\"CurrentPassword.errors?.server\">\r\n                {{CurrentPassword.errors.server}}\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <input class=\"form-control\" \r\n        type=\"password\" \r\n        name=\"NewPassword\" \r\n        ngModel #NewPassword=\"ngModel\" \r\n        required minlength=\"6\" maxlength=\"25\" \r\n        placeholder=\"New password\" />\r\n\r\n        <div *ngIf=\"NewPassword.invalid && NewPassword.dirty\"\r\n        class=\"form-control danger-alert\">\r\n\r\n            <div *ngIf=\"NewPassword.errors.required\">\r\n                New password field is required.\r\n            </div>\r\n            <div *ngIf=\"NewPassword.errors.minlength\">\r\n                Password must be between 6 and 25 characters.\r\n            </div>\r\n            <div *ngIf=\"NewPassword.errors?.server\">\r\n                {{NewPassword.errors.server}}\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <button type=\"submit\"\r\n            [disabled]=\"changePassForm.invalid || btnBlock\"\r\n            class=\"btn btn-success btn-sm\">\r\n            Change\r\n        </button>\r\n    </div>\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/profile/change.password/change.password.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/profile/change.password/change.password.component.ts ***!
  \**********************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-rx-componentdestroyed */ "./node_modules/ng2-rx-componentdestroyed/dist/index.js");
/* harmony import */ var ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/account.service */ "./src/services/account.service.ts");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/profile.service */ "./src/services/profile.service.ts");
/* harmony import */ var _services_errorHandler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/errorHandler.service */ "./src/services/errorHandler.service.ts");
/* harmony import */ var _models_change_password_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/change.password.model */ "./src/models/change.password.model.ts");
/* harmony import */ var _enums_enum_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../enums/enum.models */ "./src/enums/enum.models.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(profileSrc, accounrSrc, errorHandler) {
        this.profileSrc = profileSrc;
        this.accounrSrc = accounrSrc;
        this.errorHandler = errorHandler;
        this.btnBlock = false;
    }
    ChangePasswordComponent.prototype.onChange = function (form) {
        var _this = this;
        var model = new _models_change_password_model__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordModel"](String(form.value.CurrentPassword), String(form.value.NewPassword));
        form.form.disable();
        this.btnBlock = true;
        this.profileSrc.postData(_enums_enum_models__WEBPACK_IMPORTED_MODULE_6__["ControllerType"].manage, _enums_enum_models__WEBPACK_IMPORTED_MODULE_6__["PostMethod"].changePassword, model)
            .pipe(Object(ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_1__["untilComponentDestroyed"])(this))
            .subscribe(function () {
            alert('The password has been successfully changed!');
            form.reset();
            _this.enableForm(form);
            _this.accounrSrc.checkAccountAuth();
        }, function (err) {
            _this.enableForm(form);
            _this.errorHandler.setServerErrors(err, model, form);
        });
    };
    ChangePasswordComponent.prototype.enableForm = function (form) {
        this.btnBlock = false;
        form.form.enable();
    };
    ChangePasswordComponent.prototype.ngOnDestroy = function () {
    };
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-pass-cmp',
            template: __webpack_require__(/*! ./change.password.component.html */ "./src/app/profile/change.password/change.password.component.html"),
            styles: [__webpack_require__(/*! ../shared.profile.css */ "./src/app/profile/shared.profile.css")]
        }),
        __metadata("design:paramtypes", [_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"],
            _services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"],
            _services_errorHandler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlerService"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sideBar{\r\n    margin-left: 30px;\r\n    padding-top: 20px;\r\n}\r\n\r\n#profileTabs{\r\n    display: inline-block;\r\n    margin-top: 1%;\r\n}\r\n\r\n.nav a{\r\n    color: #FFFCF8;\r\n    text-decoration: none;\r\n    transition: 0.8s;\r\n}\r\n\r\n.custom-color .active,\r\n.custom-color .active:hover {\r\n    background-color: rgba(81, 159, 211, 0.829);\r\n}\r\n\r\n#profileContent{\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    margin-left: 10%;\r\n    width: 600px;\r\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"sideBar\">\r\n  <div class=\"nav flex-column nav-pills custom-color\" id=\"profileTabs\" role=\"tablist\" aria-orientation=\"vertical\">\r\n    <a routerLink=\"/profile/data\" skipLocationChange class=\"nav-link\" id=\"outPut-tab\" data-toggle=\"pill\" href=\"#outPut\" role=\"tab\" aria-controls=\"v-pills-profile\" aria-selected=\"false\">Find File</a>\r\n    <a routerLink=\"/profile/data\" [queryParams]=\"{'addedOnes': true}\" skipLocationChange class=\"nav-link\" id=\"outPut-tab\" data-toggle=\"pill\" href=\"#outPut\" role=\"tab\" aria-controls=\"v-pills-messages\" aria-selected=\"false\">Upload File</a>\r\n    <a routerLink=\"/profile/data\" [queryParams]=\"{'addedOnes': true}\" skipLocationChange class=\"nav-link\" id=\"outPut-tab\" data-toggle=\"pill\" href=\"#outPut\" role=\"tab\" aria-controls=\"v-pills-messages\" aria-selected=\"false\">My Files</a>\r\n    <a routerLink=\"info\" skipLocationChange class=\"nav-link active\" id=\"outPut-tab\" data-toggle=\"pill\" href=\"#outPut\" role=\"tab\" aria-controls=\"v-pills-home\" aria-selected=\"true\">Profile</a>\r\n    <a routerLink=\"/profile/changeLogin\" skipLocationChange class=\"nav-link\" id=\"outPut-tab\" data-toggle=\"pill\" href=\"#outPut\" role=\"tab\" aria-controls=\"v-pills-settings\" aria-selected=\"false\">Change Login</a>\r\n    <a routerLink=\"/profile/changePassword\" skipLocationChange class=\"nav-link\" id=\"outPut-tab\" data-toggle=\"pill\" href=\"#outPut\" role=\"tab\" aria-controls=\"v-pills-settings\" aria-selected=\"false\">Change Password</a>\r\n  </div>\r\n    <div class=\"tab-content\" id=\"profileContent\">\r\n        <div class=\"tab-pane fade show active\" id=\"outPut\" role=\"tabpanel\" aria-labelledby=\"outPut-tab\"><router-outlet></router-outlet></div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/profile.service */ "./src/services/profile.service.ts");
/* harmony import */ var _services_mapping_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/mapping.service */ "./src/services/mapping.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(profileSrc) {
        this.profileSrc = profileSrc;
        this.configUserOption();
    }
    ProfileComponent.prototype.configUserOption = function () {
        var userRole = this.profileSrc.UserRole;
        this.relatedUser = userRole === 'patient' ? 'doctors' : 'patients';
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-cmp',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")],
            providers: [_services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"], _services_mapping_service__WEBPACK_IMPORTED_MODULE_2__["MappingService"]]
        }),
        __metadata("design:paramtypes", [_services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _userInfo_user_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userInfo/user.info.component */ "./src/app/profile/userInfo/user.info.component.ts");
/* harmony import */ var _users_data_users_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users.data/users.data.component */ "./src/app/profile/users.data/users.data.component.ts");
/* harmony import */ var _change_login_change_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change.login/change.login.component */ "./src/app/profile/change.login/change.login.component.ts");
/* harmony import */ var _directives_min_validator_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directives/min.validator.directive */ "./src/directives/min.validator.directive.ts");
/* harmony import */ var _directives_max_validator_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../directives/max.validator.directive */ "./src/directives/max.validator.directive.ts");
/* harmony import */ var _directives_validators_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../directives/validators.module */ "./src/directives/validators.module.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./change.password/change.password.component */ "./src/app/profile/change.password/change.password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([]),
                _directives_validators_module__WEBPACK_IMPORTED_MODULE_9__["ValidatorsModule"]
            ],
            declarations: [
                _userInfo_user_info_component__WEBPACK_IMPORTED_MODULE_4__["UserInfoComponent"],
                _users_data_users_data_component__WEBPACK_IMPORTED_MODULE_5__["UsersDataComponent"],
                _change_login_change_login_component__WEBPACK_IMPORTED_MODULE_6__["ChangeLoginComponent"],
                _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_10__["ChangePasswordComponent"],
                _directives_min_validator_directive__WEBPACK_IMPORTED_MODULE_7__["MinValidator"],
                _directives_max_validator_directive__WEBPACK_IMPORTED_MODULE_8__["MaxValidator"]
            ]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "./src/app/profile/shared.profile.css":
/*!********************************************!*\
  !*** ./src/app/profile/shared.profile.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control {\r\n    font-size: 15px;\r\n    box-shadow: inset 0 0 25px rgba(153, 153, 207, 0.50);\r\n    width: 220px;\r\n    border-radius: 8px;\r\n}\r\n\r\n.danger-alert{\r\n    min-height: 35px;\r\n    box-shadow: inset 0 0 25px rgba(199, 45, 45, 0.616);\r\n    margin-top: 5px;\r\n}"

/***/ }),

/***/ "./src/app/profile/userInfo/user-info.component.css":
/*!**********************************************************!*\
  !*** ./src/app/profile/userInfo/user-info.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#userProfile{\r\n    box-shadow: inset 0px 0px 20px 15px rgb(220, 232, 233);\r\n    width: 270px;\r\n    height: 280px;\r\n    padding-top: 1%;\r\n    padding-left: 4%;\r\n    border-radius: 5px;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.invisible{\r\n    display: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/profile/userInfo/user-info.component.html":
/*!***********************************************************!*\
  !*** ./src/app/profile/userInfo/user-info.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form id=\"userProfile\"\r\n    (change)=\"onChnage()\" \r\n    #profileForm=\"ngForm\" \r\n    novalidate \r\n    (ngSubmit)=\"onSaveChanges()\">\r\n\r\n    <div class=\"form-group\">\r\n        <div *ngIf=\"profileForm.invalid && profileForm.errors?.server\" class=\"form-control danger-alert\">\r\n            <div>\r\n                {{profileForm.errors.server}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <input class=\"form-control\" type=\"text\" name=\"lastName\" ngModel #lastName=\"ngModel\" \r\n        required validateEmpty minlength=\"2\" maxlength=\"15\" placeholder=\"Last name\" />\r\n    \r\n        <div *ngIf=\"lastName.invalid && lastName.dirty\"\r\n        class=\"form-control danger-alert\">\r\n\r\n            <div *ngIf=\"lastName.errors.required\">\r\n                Last name is required.\r\n            </div>\r\n            <div *ngIf=\"lastName.errors.minlength\">\r\n                Last name must be at least 2 characters long.\r\n            </div>\r\n            <div *ngIf=\"lastName.errors.validateEmpty\">\r\n                Last name cannot have white spaces.\r\n            </div>\r\n            <div *ngIf=\"lastName.errors?.server\">\r\n                {{lastName.errors.server}}\r\n            </div>\r\n    \r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"form-group\">\r\n        <input class=\"form-control\" name=\"firstName\" ngModel #firstName=\"ngModel\" \r\n        required validateEmpty minlength=\"2\" maxlength=\"15\" placeholder=\"First name\" />\r\n    \r\n        <div *ngIf=\"firstName.invalid && firstName.dirty\"\r\n        class=\"form-control danger-alert\">\r\n\r\n            <div *ngIf=\"firstName.errors.required\">\r\n                First name  is required.\r\n            </div>\r\n            <div *ngIf=\"firstName.errors.minlength\">\r\n                First name must be at least 2 characters long.\r\n            </div>\r\n            <div *ngIf=\"firstName.errors.validateEmpty\">\r\n                First name cannot have white spaces.\r\n            </div>\r\n            <div *ngIf=\"firstName.errors?.server\">\r\n                {{firstName.errors.server}}\r\n            </div>\r\n    \r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"form-group\">\r\n        <input class=\"form-control\" disabled=\"disabled\" name=\"email\" ngModel #email=\"ngModel\"\r\n        placeholder=\"Email\" />\r\n    </div>\r\n    \r\n    <div class=\"form-group\">\r\n        <input class=\"form-control\" name=\"age\" type=\"number\" ngModel #age=\"ngModel\"\r\n        min=\"18\" max=\"99\" placeholder=\"Age\" />\r\n    \r\n        <div *ngIf=\"age.invalid && age.dirty\"\r\n        class=\"form-control danger-alert\">\r\n    \r\n            <div *ngIf=\"age.errors.min\">\r\n                You have to be at least 18 years old.\r\n            </div>\r\n            <div *ngIf=\"age.errors.max\">\r\n                You can't be more than 99 years old.\r\n            </div>\r\n            <div *ngIf=\"age.errors?.server\">\r\n                {{age.errors.server}}\r\n            </div>\r\n    \r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\" [ngClass]=\"{invisible: userType === 'Doctor'}\">\r\n        <input class=\"form-control\" disabled=\"disabled\" name=\"registryDate\" ngModel type=\"text\"/>\r\n    </div>\r\n\r\n    <div class=\"form-group\" [ngClass]=\"{invisible: userType === 'Patient'}\">\r\n        <input class=\"form-control\" name=\"specialization\" ngModel #spc=\"ngModel\"\r\n        validateEmpty minlength=\"3\" maxlength=\"15\" placeholder=\"Specialization\" />\r\n    \r\n        <div *ngIf=\"spc.invalid && spc.dirty\" class=\"form-control danger-alert\">\r\n    \r\n            <div *ngIf=\"spc.errors.validateEmpty\">\r\n                Specialization cannot have white spaces.\r\n            </div>\r\n            <div *ngIf=\"spc.errors.minlength\">\r\n                Specialization must be at least 3 characters long.\r\n            </div>\r\n            <div *ngIf=\"spc.errors?.server\">\r\n                {{spc.errors.server}}\r\n            </div>\r\n    \r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"form-group\" [ngClass]=\"{invisible: userType === 'Patient'}\">\r\n        <input class=\"form-control\" name=\"yearsOfExperience\" type=\"number\" ngModel #exp=\"ngModel\"\r\n        min=\"1\" max=\"45\" placeholder=\"Experience\" />\r\n    \r\n        <div *ngIf=\"exp.invalid && exp.dirty\"\r\n        class=\"form-control danger-alert\">\r\n    \r\n            <div *ngIf=\"exp.errors.min\">\r\n                Experience have to be at least 1 year.\r\n            </div>\r\n            <div *ngIf=\"exp.errors.max\">\r\n                Experience can't be more than 45 years.\r\n            </div>\r\n            <div *ngIf=\"exp.errors?.server\">\r\n                {{exp.errors.server}}\r\n            </div>\r\n    \r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <button type=\"submit\"\r\n            [disabled]=\"profileForm.invalid || isModelEqual\"\r\n            class=\"btn btn-success btn-sm\">\r\n            Save changes\r\n        </button>\r\n    </div>\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/profile/userInfo/user.info.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/profile/userInfo/user.info.component.ts ***!
  \*********************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-rx-componentdestroyed */ "./node_modules/ng2-rx-componentdestroyed/dist/index.js");
/* harmony import */ var ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/profile.service */ "./src/services/profile.service.ts");
/* harmony import */ var _services_errorHandler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/errorHandler.service */ "./src/services/errorHandler.service.ts");
/* harmony import */ var _enums_enum_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../enums/enum.models */ "./src/enums/enum.models.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent(profileSrc, errorHandler) {
        this.profileSrc = profileSrc;
        this.errorHandler = errorHandler;
        this.isModelEqual = true;
        this.userType = _enums_enum_models__WEBPACK_IMPORTED_MODULE_5__["UserType"][this.profileSrc.UserType];
    }
    UserInfoComponent.prototype.ngAfterViewInit = function () {
        this.getUserProfile();
    };
    UserInfoComponent.prototype.getUserProfile = function () {
        var _this = this;
        if (this.profileSrc.User === undefined) {
            this.profileSrc.getData(_enums_enum_models__WEBPACK_IMPORTED_MODULE_5__["ControllerType"].profile, _enums_enum_models__WEBPACK_IMPORTED_MODULE_5__["GetMethod"].info).subscribe(function (res) {
                _this.profileSrc.User = res;
                _this.setUserProfile();
            });
        }
        else {
            setTimeout(function () {
                _this.setUserProfile();
            }, 20);
        }
    };
    UserInfoComponent.prototype.setUserProfile = function () {
        var _this = this;
        this.actionOnModel(function (modelValue, cntrlValue, prop) {
            return _this.setFormControl(modelValue, cntrlValue, prop);
        });
    };
    UserInfoComponent.prototype.setFormControl = function (modelValue, cntrlValue, prop) {
        if (modelValue !== null) {
            this.form.controls[prop].setValue(modelValue);
        }
        return false;
    };
    UserInfoComponent.prototype.onChnage = function () {
        var _this = this;
        this.actionOnModel(function (modelValue, cntrlValue, prop) {
            return _this.compareControlModelValue(modelValue, cntrlValue, prop);
        });
    };
    UserInfoComponent.prototype.compareControlModelValue = function (modelValue, cntrlValue, prop) {
        if (cntrlValue === modelValue) {
            return !(this.isModelEqual = true);
        }
        else {
            return !(this.isModelEqual = false);
        }
    };
    UserInfoComponent.prototype.actionOnModel = function (action) {
        var props = Object.keys(this.profileSrc.User);
        var controls = this.form.controls;
        for (var i = 0; i < props.length; i++) {
            var prop = props[i] === 'userName' ? 'email' : props[i];
            var modelValue = this.profileSrc.User[props[i]];
            var cntrlValue = controls[prop].value;
            var res = action(modelValue, cntrlValue, prop);
            if (res) {
                return;
            }
        }
    };
    UserInfoComponent.prototype.onSaveChanges = function () {
        var _this = this;
        this.actionOnModel(function (modelValue, cntrlValue, prop) {
            return _this.reassignValues(modelValue, cntrlValue, prop);
        });
        this.profileSrc.postData(_enums_enum_models__WEBPACK_IMPORTED_MODULE_5__["ControllerType"].profile, _enums_enum_models__WEBPACK_IMPORTED_MODULE_5__["PostMethod"].editProfile, this.profileSrc.User)
            .pipe(Object(ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_2__["untilComponentDestroyed"])(this))
            .subscribe(function () {
            alert('Profile changed!');
            _this.isModelEqual = true;
        }, function (err) {
            _this.errorHandler.setServerErrors(err, _this.profileSrc.User, _this.form);
        });
    };
    UserInfoComponent.prototype.reassignValues = function (modelValue, cntrlValue, prop) {
        this.profileSrc.User[prop] = cntrlValue;
        return false;
    };
    UserInfoComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('profileForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], UserInfoComponent.prototype, "form", void 0);
    UserInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-info-cmp',
            template: __webpack_require__(/*! ./user-info.component.html */ "./src/app/profile/userInfo/user-info.component.html"),
            styles: [__webpack_require__(/*! ./user-info.component.css */ "./src/app/profile/userInfo/user-info.component.css"), __webpack_require__(/*! ../shared.profile.css */ "./src/app/profile/shared.profile.css")]
        }),
        __metadata("design:paramtypes", [_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"],
            _services_errorHandler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlerService"]])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "./src/app/profile/users.data/users-data.component.css":
/*!*************************************************************!*\
  !*** ./src/app/profile/users.data/users-data.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table td{\r\n    box-shadow: inset 0px 0px 15px 5px rgb(220, 232, 233);\r\n    color: rgb(92, 86, 78);\r\n}\r\n\r\n.dataCell {\r\n    box-shadow: inset 0px 0px 15px 5px rgb(220, 232, 233);\r\n    color: rgb(92, 86, 78);\r\n}\r\n\r\n.table th{\r\n    color: rgb(117, 110, 100);\r\n    font-size: 18px;\r\n}\r\n\r\n.table th {\r\n    vertical-align: top;\r\n}\r\n\r\n.table th, td {\r\n    text-align: center;\r\n    padding-top: 3%;\r\n}\r\n\r\n.editBtn, .deleteBtn, .addBtn {\r\n    width: 80px;\r\n}\r\n\r\n.btnsCell{\r\n    padding-top: 1.5%;\r\n}\r\n\r\n.invisible{\r\n    display: none;\r\n}\r\n\r\n#NoContent{\r\n    width: 280px;\r\n    margin-left: 100%;\r\n}\r\n\r\n#NoContent p {\r\n    font-style: italic;\r\n    color: rgb(117, 110, 100);\r\n    font-size: 18px;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/profile/users.data/users-data.component.html":
/*!**************************************************************!*\
  !*** ./src/app/profile/users.data/users-data.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover table-inverse table-responsive\">\r\n  <thead class=\"thead-default\">\r\n      <tr id=\"tableHeader\">\r\n        <th *ngFor=\"let h of profileSrc.Headers\">{{h}}</th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody id=\"tableBody\">\r\n      <tr *ngFor=\"let it of items\" class=\"tableRow\">\r\n        <td *ngFor=\"let v of it\" scope=\"row\">{{v}}</td>\r\n        <td class=\"btnsCell\">\r\n          <button\r\n          type=\"button\"\r\n          name=\"addUser\"\r\n          (click)=\"actionOnClick($event)\"\r\n          [ngClass]=\"{invisible: addedUsers}\"\r\n          class=\"btn btn-success addBtn\">Add</button>\r\n          \r\n          <!--     (click)=\"actionOnClick($event)\" -->\r\n          <button\r\n          type=\"button\"\r\n          name=\"editUser\"\r\n      \r\n          [ngClass]=\"{invisible: !addedUsers ||\r\n          profileSrc.UserType === 0}\"\r\n          data-toggle=\"modal\"\r\n          data-target=\"#exampleModal\"\r\n          class=\"btn btn-primary editBtn\">Edit</button>\r\n\r\n          <button\r\n          type=\"button\"\r\n          name=\"deleteUser\"\r\n          (click)=\"actionOnClick($event)\"\r\n          [ngClass]=\"{invisible: !addedUsers}\"\r\n          class=\"btn btn-secondary deleteBtn\">Delete</button>\r\n        </td>\r\n      </tr>\r\n      <div id=\"NoContent\" [ngClass]=\"{invisible: items.length !== 0}\">\r\n        <p>No data here yet!</p>\r\n      </div>\r\n    </tbody>\r\n</table>\r\n  \r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit item</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"item-name\" class=\"col-form-label\">Name:</label>\r\n              <input [(ngModel)]=\"editName\" type=\"text\" class=\"form-control\" id=\"item-name\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"item-type\" class=\"col-form-label\">Type:</label>\r\n              <input [(ngModel)]=\"editType\" type=\"text\" class=\"form-control\" id=\"item-type\">\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n          <button type=\"button\" (click)=\"saveOnClick($event)\" class=\"btn btn-primary\">Save changes</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/profile/users.data/users.data.component.ts":
/*!************************************************************!*\
  !*** ./src/app/profile/users.data/users.data.component.ts ***!
  \************************************************************/
/*! exports provided: UsersDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersDataComponent", function() { return UsersDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-rx-componentdestroyed */ "./node_modules/ng2-rx-componentdestroyed/dist/index.js");
/* harmony import */ var ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/profile.service */ "./src/services/profile.service.ts");
/* harmony import */ var _models_email_post_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/email.post.model */ "./src/models/email.post.model.ts");
/* harmony import */ var _enums_enum_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../enums/enum.models */ "./src/enums/enum.models.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UsersDataComponent = /** @class */ (function () {
    function UsersDataComponent(http, profileSrc, route) {
        var _this = this;
        this.http = http;
        this.profileSrc = profileSrc;
        this.route = route;
        this.items = [];
        route.queryParams
            .pipe(Object(ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_5__["untilComponentDestroyed"])(this))
            .subscribe(function (params) {
            _this.addedUsers = params['addedOnes'] === 'true';
            _this.processParam(params['addedOnes']);
        });
    }
    UsersDataComponent.prototype.processParam = function (addedOnes) {
        var _this = this;
        var getMethod = addedOnes === 'true' ?
            _enums_enum_models__WEBPACK_IMPORTED_MODULE_8__["GetMethod"].getMyUsers : _enums_enum_models__WEBPACK_IMPORTED_MODULE_8__["GetMethod"].getUsers;
        if (getMethod === _enums_enum_models__WEBPACK_IMPORTED_MODULE_8__["GetMethod"].getUsers) {
            if (this.profileSrc.AllUsers.length === 0) {
                this.getData(getMethod)
                    .subscribe(function () {
                    _this.profileSrc.AllUsers = _this.items;
                });
            }
            else {
                this.setDataTable(this.profileSrc.AllUsers, false);
            }
        }
        else if (getMethod === _enums_enum_models__WEBPACK_IMPORTED_MODULE_8__["GetMethod"].getMyUsers) {
            if (this.profileSrc.RelatedUsers.length === 0) {
                this.getData(getMethod)
                    .subscribe(function () {
                    _this.profileSrc.RelatedUsers = _this.items;
                });
            }
            else {
                this.setDataTable(this.profileSrc.RelatedUsers, false);
            }
        }
    };
    UsersDataComponent.prototype.getData = function (getMethod) {
        var _this = this;
        return this.profileSrc.getData(_enums_enum_models__WEBPACK_IMPORTED_MODULE_8__["ControllerType"][this.profileSrc.UserRole], getMethod).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            _this.setDataTable(data);
        }), Object(ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_5__["untilComponentDestroyed"])(this));
    };
    UsersDataComponent.prototype.setDataTable = function (data, receivedFromServer) {
        if (receivedFromServer === void 0) { receivedFromServer = true; }
        this.profileSrc.setHeaders();
        this.items = this.profileSrc.setValues(data, receivedFromServer);
    };
    UsersDataComponent.prototype.actionOnClick = function (event) {
        var _this = this;
        var email = this.getEmail(event);
        var model = new _models_email_post_model__WEBPACK_IMPORTED_MODULE_7__["EmailModel"](email);
        var btnName = String(jquery__WEBPACK_IMPORTED_MODULE_4__(event.target).attr('name'));
        jquery__WEBPACK_IMPORTED_MODULE_4__(event.target).attr('disabled', true);
        if (_enums_enum_models__WEBPACK_IMPORTED_MODULE_8__["PostMethod"][btnName] !== undefined) {
            this.profileSrc.postData(_enums_enum_models__WEBPACK_IMPORTED_MODULE_8__["ControllerType"][this.profileSrc.UserRole], _enums_enum_models__WEBPACK_IMPORTED_MODULE_8__["PostMethod"][btnName], model)
                .pipe(Object(ng2_rx_componentdestroyed__WEBPACK_IMPORTED_MODULE_5__["untilComponentDestroyed"])(this))
                .subscribe(function () {
                alert('Success!');
                jquery__WEBPACK_IMPORTED_MODULE_4__(event.target).attr('disabled', false);
                _this.onSuccess(btnName, email);
            }, function (err) {
                jquery__WEBPACK_IMPORTED_MODULE_4__(event.target).attr('disabled', false);
                _this.actionErrorResult(err);
            });
        }
    };
    UsersDataComponent.prototype.onSuccess = function (btnName, email) {
        if (btnName === 'addUser') {
            this.addOnClicked(email);
        }
        else if (btnName === 'deleteUser') {
            this.deleteOnCLicked(email);
        }
    };
    UsersDataComponent.prototype.addOnClicked = function (email) {
        var user = this.findUser(email);
        if (user !== null) {
            var exists = this.profileSrc.RelatedUsers.includes(user);
            if (exists === false) {
                this.profileSrc.RelatedUsers.push(user);
            }
            else {
                alert('This user is already added!');
            }
        }
    };
    UsersDataComponent.prototype.deleteOnCLicked = function (email) {
        var user = this.findUser(email);
        var index = this.profileSrc.RelatedUsers.indexOf(user);
        this.profileSrc.RelatedUsers.splice(index, 1);
    };
    UsersDataComponent.prototype.findUser = function (email) {
        for (var i = 0; i < this.profileSrc.AllUsers.length; i++) {
            var userProperties = this.profileSrc.AllUsers[i];
            for (var j = 0; j < userProperties.length; j++) {
                if (userProperties[j] === email) {
                    return userProperties;
                }
            }
        }
    };
    UsersDataComponent.prototype.getEmail = function (event) {
        return jquery__WEBPACK_IMPORTED_MODULE_4__(event.target).closest('.tableRow').children()[3].innerText;
    };
    UsersDataComponent.prototype.actionErrorResult = function (err) {
        if (err.text() !== '') {
            alert(err.text());
        }
        else {
            alert('Unexpected server error, try againg later, please');
        }
    };
    UsersDataComponent.prototype.ngOnDestroy = function () {
    };
    UsersDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users-data-cmp',
            template: __webpack_require__(/*! ./users-data.component.html */ "./src/app/profile/users.data/users-data.component.html"),
            styles: [__webpack_require__(/*! ./users-data.component.css */ "./src/app/profile/users.data/users-data.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UsersDataComponent);
    return UsersDataComponent;
}());



/***/ }),

/***/ "./src/directives/empty.validator.directive.ts":
/*!*****************************************************!*\
  !*** ./src/directives/empty.validator.directive.ts ***!
  \*****************************************************/
/*! exports provided: EmptyValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyValidator", function() { return EmptyValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var EmptyValidator = /** @class */ (function () {
    function EmptyValidator() {
    }
    EmptyValidator_1 = EmptyValidator;
    EmptyValidator.prototype.validate = function (c) {
        if (c.value !== null) {
            var str = String(c.value);
            if (str !== '' && str.trim().length === 0) {
                return { validateEmpty: true };
            }
        }
        return null;
    };
    EmptyValidator = EmptyValidator_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            // tslint:disable-next-line:directive-selector
            selector: '[validateEmpty]',
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: EmptyValidator_1, multi: true }
            ]
        })
    ], EmptyValidator);
    return EmptyValidator;
    var EmptyValidator_1;
}());



/***/ }),

/***/ "./src/directives/equal.validator.directive.ts":
/*!*****************************************************!*\
  !*** ./src/directives/equal.validator.directive.ts ***!
  \*****************************************************/
/*! exports provided: EqualValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqualValidator", function() { return EqualValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidator = /** @class */ (function () {
    function EqualValidator(validateEqual) {
        this.validateEqual = validateEqual;
    }
    EqualValidator_1 = EqualValidator;
    EqualValidator.prototype.validate = function (c) {
        this.subscribeToPasswordControlEvents(c);
        var confirmPass = c.value;
        var initialPass = c.root.get(this.validateEqual).value;
        if (initialPass !== confirmPass) {
            return { validateEqual: false };
        }
        return null;
    };
    EqualValidator.prototype.subscribeToPasswordControlEvents = function (c) {
        var _this = this;
        if (this.currentControl === undefined) {
            this.currentControl = c;
            var passwordControl = c.root.get(this.validateEqual);
            passwordControl.valueChanges.subscribe(function () { return _this.recheckComparison(); });
        }
    };
    EqualValidator.prototype.recheckComparison = function () {
        this.currentControl.setValue(this.currentControl.value);
    };
    EqualValidator = EqualValidator_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            // tslint:disable-next-line:directive-selector
            selector: '[validateEqual]',
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: EqualValidator_1, multi: true }
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('validateEqual')),
        __metadata("design:paramtypes", [String])
    ], EqualValidator);
    return EqualValidator;
    var EqualValidator_1;
}());



/***/ }),

/***/ "./src/directives/max.validator.directive.ts":
/*!***************************************************!*\
  !*** ./src/directives/max.validator.directive.ts ***!
  \***************************************************/
/*! exports provided: MaxValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxValidator", function() { return MaxValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MaxValidator = /** @class */ (function () {
    function MaxValidator(maxValue) {
        this.maxValue = maxValue;
        this.maxValue = Number(this.maxValue);
    }
    MaxValidator_1 = MaxValidator;
    MaxValidator.prototype.validate = function (c) {
        var currentValue = Number(c.value);
        if (currentValue > this.maxValue) {
            return { max: true };
        }
        return null;
    };
    MaxValidator = MaxValidator_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            // tslint:disable-next-line:directive-selector
            selector: '[max]',
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: MaxValidator_1, multi: true }
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('max')),
        __metadata("design:paramtypes", [Object])
    ], MaxValidator);
    return MaxValidator;
    var MaxValidator_1;
}());



/***/ }),

/***/ "./src/directives/min.validator.directive.ts":
/*!***************************************************!*\
  !*** ./src/directives/min.validator.directive.ts ***!
  \***************************************************/
/*! exports provided: MinValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinValidator", function() { return MinValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MinValidator = /** @class */ (function () {
    function MinValidator(minValue) {
        this.minValue = minValue;
        this.minValue = Number(this.minValue);
    }
    MinValidator_1 = MinValidator;
    MinValidator.prototype.validate = function (c) {
        if (c.value !== null && c.value !== '') {
            var currentValue = Number(c.value);
            if (currentValue < this.minValue) {
                return { min: true };
            }
        }
        return null;
    };
    MinValidator = MinValidator_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            // tslint:disable-next-line:directive-selector
            selector: '[min]',
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: MinValidator_1, multi: true }
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('min')),
        __metadata("design:paramtypes", [Object])
    ], MinValidator);
    return MinValidator;
    var MinValidator_1;
}());



/***/ }),

/***/ "./src/directives/user-existence.validator.ts":
/*!****************************************************!*\
  !*** ./src/directives/user-existence.validator.ts ***!
  \****************************************************/
/*! exports provided: UserExistenceValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserExistenceValidator", function() { return UserExistenceValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var UserExistenceValidator = /** @class */ (function () {
    function UserExistenceValidator(expectation, apiService) {
        this.expectation = expectation;
        this.apiService = apiService;
        this.expectation = this.expectation === 'true';
    }
    UserExistenceValidator_1 = UserExistenceValidator;
    UserExistenceValidator.prototype.validate = function (form) {
        var _this = this;
        var emailControl = form.controls['email'];
        if (emailControl !== undefined) {
            if (emailControl.valid) {
                this.apiService.userExists(emailControl.value).subscribe(function (res) {
                    _this.checkResponse(res, emailControl);
                });
            }
        }
        return null;
    };
    UserExistenceValidator.prototype.checkResponse = function (res, emailControl) {
        if (this.expectation === true) {
            if (res === false) {
                emailControl.setErrors({ userExists: 'There is no such a user.' });
            }
        }
        else if (res === true) {
            emailControl.setErrors({ userExists: 'A user with such an email already exists.' });
        }
    };
    UserExistenceValidator = UserExistenceValidator_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            // tslint:disable-next-line:directive-selector
            selector: '[userExists]',
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: UserExistenceValidator_1, multi: true }
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('userExists')),
        __metadata("design:paramtypes", [Object, _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], UserExistenceValidator);
    return UserExistenceValidator;
    var UserExistenceValidator_1;
}());



/***/ }),

/***/ "./src/directives/validators.module.ts":
/*!*********************************************!*\
  !*** ./src/directives/validators.module.ts ***!
  \*********************************************/
/*! exports provided: ValidatorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidatorsModule", function() { return ValidatorsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _empty_validator_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty.validator.directive */ "./src/directives/empty.validator.directive.ts");
/* harmony import */ var _user_existence_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-existence.validator */ "./src/directives/user-existence.validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ValidatorsModule = /** @class */ (function () {
    function ValidatorsModule() {
    }
    ValidatorsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [],
            declarations: [
                _empty_validator_directive__WEBPACK_IMPORTED_MODULE_1__["EmptyValidator"],
                _user_existence_validator__WEBPACK_IMPORTED_MODULE_2__["UserExistenceValidator"]
            ],
            exports: [
                _empty_validator_directive__WEBPACK_IMPORTED_MODULE_1__["EmptyValidator"],
                _user_existence_validator__WEBPACK_IMPORTED_MODULE_2__["UserExistenceValidator"]
            ]
        })
    ], ValidatorsModule);
    return ValidatorsModule;
}());



/***/ }),

/***/ "./src/enums/enum.models.ts":
/*!**********************************!*\
  !*** ./src/enums/enum.models.ts ***!
  \**********************************/
/*! exports provided: PostMethod, GetMethod, ControllerType, UserType, Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostMethod", function() { return PostMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMethod", function() { return GetMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerType", function() { return ControllerType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserType", function() { return UserType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
var PostMethod;
(function (PostMethod) {
    PostMethod[PostMethod["addFile"] = 0] = "addFile";
    PostMethod[PostMethod["deleteFile"] = 1] = "deleteFile";
    PostMethod[PostMethod["updateFile"] = 2] = "updateFile";
    PostMethod[PostMethod["addUser"] = 3] = "addUser";
    PostMethod[PostMethod["deleteUser"] = 4] = "deleteUser";
    PostMethod[PostMethod["editUser"] = 5] = "editUser";
    PostMethod[PostMethod["editProfile"] = 6] = "editProfile";
    PostMethod[PostMethod["changeLogin"] = 7] = "changeLogin";
    PostMethod[PostMethod["changePassword"] = 8] = "changePassword";
})(PostMethod || (PostMethod = {}));
var GetMethod;
(function (GetMethod) {
    GetMethod[GetMethod["getAllFiles"] = 0] = "getAllFiles";
    GetMethod[GetMethod["getUserFiles"] = 1] = "getUserFiles";
    GetMethod[GetMethod["getUsers"] = 2] = "getUsers";
    GetMethod[GetMethod["getMyUsers"] = 3] = "getMyUsers";
    GetMethod[GetMethod["info"] = 4] = "info";
})(GetMethod || (GetMethod = {}));
var ControllerType;
(function (ControllerType) {
    ControllerType[ControllerType["filedbs"] = 0] = "filedbs";
    ControllerType[ControllerType["patient"] = 1] = "patient";
    ControllerType[ControllerType["doctor"] = 2] = "doctor";
    ControllerType[ControllerType["profile"] = 3] = "profile";
    ControllerType[ControllerType["manage"] = 4] = "manage";
})(ControllerType || (ControllerType = {}));
var UserType;
(function (UserType) {
    UserType[UserType["Patient"] = 0] = "Patient";
    UserType[UserType["Doctor"] = 1] = "Doctor";
    UserType[UserType["Admin"] = 2] = "Admin";
})(UserType || (UserType = {}));
var Profile;
(function (Profile) {
    Profile[Profile["username"] = 0] = "username";
    Profile[Profile["role"] = 1] = "role";
    Profile[Profile["sub"] = 2] = "sub";
})(Profile || (Profile = {}));


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/models/change.password.model.ts":
/*!*********************************************!*\
  !*** ./src/models/change.password.model.ts ***!
  \*********************************************/
/*! exports provided: ChangePasswordModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordModel", function() { return ChangePasswordModel; });
var ChangePasswordModel = /** @class */ (function () {
    function ChangePasswordModel(currentPass, newPass) {
        this.CurrentPassword = currentPass;
        this.NewPassword = newPass;
    }
    return ChangePasswordModel;
}());



/***/ }),

/***/ "./src/models/doctor.model.ts":
/*!************************************!*\
  !*** ./src/models/doctor.model.ts ***!
  \************************************/
/*! exports provided: DoctorModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorModel", function() { return DoctorModel; });
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.model */ "./src/models/user.model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var DoctorModel = /** @class */ (function (_super) {
    __extends(DoctorModel, _super);
    function DoctorModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Specialization = undefined;
        _this.YearsOfExperience = undefined;
        return _this;
    }
    return DoctorModel;
}(_user_model__WEBPACK_IMPORTED_MODULE_0__["UserModel"]));



/***/ }),

/***/ "./src/models/email.post.model.ts":
/*!****************************************!*\
  !*** ./src/models/email.post.model.ts ***!
  \****************************************/
/*! exports provided: EmailModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailModel", function() { return EmailModel; });
var EmailModel = /** @class */ (function () {
    function EmailModel(email) {
        this.Email = email;
    }
    return EmailModel;
}());



/***/ }),

/***/ "./src/models/error.model.ts":
/*!***********************************!*\
  !*** ./src/models/error.model.ts ***!
  \***********************************/
/*! exports provided: ErrorModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModel", function() { return ErrorModel; });
var ErrorModel = /** @class */ (function () {
    function ErrorModel(field, message) {
        this.Field = field;
        this.Message = message;
    }
    return ErrorModel;
}());



/***/ }),

/***/ "./src/models/google.response.model.ts":
/*!*********************************************!*\
  !*** ./src/models/google.response.model.ts ***!
  \*********************************************/
/*! exports provided: GoogleResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleResponse", function() { return GoogleResponse; });
var GoogleResponse = /** @class */ (function () {
    function GoogleResponse(idToken) {
        this.IdToken = idToken;
    }
    return GoogleResponse;
}());



/***/ }),

/***/ "./src/models/patient.model.ts":
/*!*************************************!*\
  !*** ./src/models/patient.model.ts ***!
  \*************************************/
/*! exports provided: PatientModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientModel", function() { return PatientModel; });
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.model */ "./src/models/user.model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PatientModel = /** @class */ (function (_super) {
    __extends(PatientModel, _super);
    function PatientModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.RegistryDate = undefined;
        return _this;
    }
    return PatientModel;
}(_user_model__WEBPACK_IMPORTED_MODULE_0__["UserModel"]));



/***/ }),

/***/ "./src/models/user.model.ts":
/*!**********************************!*\
  !*** ./src/models/user.model.ts ***!
  \**********************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
var UserModel = /** @class */ (function () {
    function UserModel() {
        this.LastName = undefined;
        this.FirstName = undefined;
        this.Age = undefined;
        this.UserName = undefined;
    }
    return UserModel;
}());



/***/ }),

/***/ "./src/services/account.service.ts":
/*!*****************************************!*\
  !*** ./src/services/account.service.ts ***!
  \*****************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hub.service */ "./src/services/hub.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api.service */ "./src/services/api.service.ts");
/* harmony import */ var _requestBuilder_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./requestBuilder.service */ "./src/services/requestBuilder.service.ts");
/* harmony import */ var _enums_enum_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../enums/enum.models */ "./src/enums/enum.models.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AccountService = /** @class */ (function (_super) {
    __extends(AccountService, _super);
    function AccountService(http, authService, hubSerivce) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.authService = authService;
        _this.hubSerivce = hubSerivce;
        _this.isLoggedOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.isLoggedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.checkAccountAuth();
        return _this;
    }
    AccountService.prototype.configureTokens = function (data) {
        this.authService.setTokens(data);
        this.setTokensRefreshTime();
        this.isLoggedIn.emit();
        this.configHub();
    };
    AccountService.prototype.configHub = function () {
        var _this = this;
        this.hubSerivce.initHubConnection().then(function () {
            _this.connect();
        });
    };
    AccountService.prototype.connect = function () {
        if (this.hubSerivce._hubConnection) {
            var role = this.get(_enums_enum_models__WEBPACK_IMPORTED_MODULE_7__["Profile"].role);
            var group = this.getGroup(role);
            if (group !== null) {
                this.hubSerivce._hubConnection.send('OnConnectedAsync', group);
            }
        }
    };
    AccountService.prototype.disconnect = function () {
        if (this.hubSerivce._hubConnection) {
            var role = this.get(_enums_enum_models__WEBPACK_IMPORTED_MODULE_7__["Profile"].role);
            var group = this.getGroup(role);
            if (group !== null) {
                this.hubSerivce._hubConnection.send('OnDisconnectedAsync', group);
            }
        }
    };
    AccountService.prototype.getGroup = function (role) {
        switch (role) {
            case 'patient':
                return 'PatientsGroup';
            case 'doctor':
                return 'DoctorsGroup';
            default:
                return null;
        }
    };
    AccountService.prototype.checkAccountAuth = function () {
        var _this = this;
        var refreshToken = localStorage.getItem('refresh_token');
        if (refreshToken !== null) {
            this.checkSubsc = this.getRefreshTokens()
                .subscribe(function (res) {
                _this.authService.updateTokens(res);
                _this.isLoggedIn.emit();
                _this.setTokensRefreshTime();
                _this.configHub();
            }, function (errRes) {
                _this.isLoggedOut.emit();
            });
        }
    };
    AccountService.prototype.register = function (model) {
        return this.http.post("/api/account/register", model);
    };
    AccountService.prototype.getAuthorizationCode = function (model) {
        return this.http.get("/external/authorize", {
            headers: this.authService.authHeaders(),
            params: this.authService.externalAuthBody(model.IdToken, model.RegisterAsDoctor)
        });
    };
    AccountService.prototype.getAuthorizationTokens = function (code) {
        return this.http.post("/connect/token", this.authService.authCodeGrantBody(code), { headers: this.authService.authHeaders() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    AccountService.prototype.getPasswordTokens = function (model) {
        return this.http.post("/connect/token", this.authService.passwordGrantBody(model), { headers: this.authService.authHeaders() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    AccountService.prototype.setTokensRefreshTime = function () {
        var _this = this;
        this.refreshSubsc = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(this.authService.getExpMilliseconds())
            .subscribe(function () {
            _this.getRefreshTokens()
                .subscribe(function (res) {
                _this.authService.updateTokens(res);
            }, function (errRes) {
                _this.isLoggedOut.emit();
                _this.hubSerivce._hubConnection.stop();
            });
        });
    };
    AccountService.prototype.getRefreshTokens = function () {
        return this.http.post("/connect/token", this.authService.refreshGrantBody(), { headers: this.authService.authHeaders() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    AccountService.prototype.logout = function () {
        if (this.refreshSubsc) {
            this.refreshSubsc.unsubscribe();
        }
        this.authService.removeTokens();
        this.disconnect();
        this.hubSerivce._hubConnection.stop();
    };
    AccountService.prototype.ngOnDestroy = function () {
        if (this.refreshSubsc) {
            this.refreshSubsc.unsubscribe();
        }
        if (this.checkSubsc) {
            this.checkSubsc.unsubscribe();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AccountService.prototype, "isLoggedOut", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AccountService.prototype, "isLoggedIn", void 0);
    AccountService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _requestBuilder_service__WEBPACK_IMPORTED_MODULE_6__["RequestBuilderService"],
            _hub_service__WEBPACK_IMPORTED_MODULE_4__["HubService"]])
    ], AccountService);
    return AccountService;
}(_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]));



/***/ }),

/***/ "./src/services/api.service.ts":
/*!*************************************!*\
  !*** ./src/services/api.service.ts ***!
  \*************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _enums_enum_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enums/enum.models */ "./src/enums/enum.models.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.userExists = function (email) {
        return this.http.get("/api/account/checkUser?Email=" + email)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ApiService.prototype.get = function (prop) {
        var token = localStorage.getItem('id_token');
        try {
            return jwt_decode__WEBPACK_IMPORTED_MODULE_3__(token)[_enums_enum_models__WEBPACK_IMPORTED_MODULE_4__["Profile"][prop]].toLowerCase();
        }
        catch (Error) {
            return null;
        }
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/services/errorHandler.service.ts":
/*!**********************************************!*\
  !*** ./src/services/errorHandler.service.ts ***!
  \**********************************************/
/*! exports provided: ErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerService", function() { return ErrorHandlerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_error_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/error.model */ "./src/models/error.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ErrorHandlerService = /** @class */ (function () {
    function ErrorHandlerService() {
    }
    ErrorHandlerService.prototype.setServerErrors = function (res, model, formControl) {
        var errors = this.handleErrorResponse(res, model);
        errors.forEach(function (err) {
            if (err.Field !== '') {
                formControl.controls[err.Field].setErrors({ server: err.Message });
            }
            else {
                formControl.control.setErrors({ server: err.Message });
            }
        });
    };
    ErrorHandlerService.prototype.handleErrorResponse = function (res, model) {
        var _this = this;
        var data = res.json();
        var props = Object.keys(model);
        var customizedErros = [];
        if (data.errors !== undefined) {
            data.errors.forEach(function (err) {
                customizedErros.push(_this.wrapError(props, err));
            });
        }
        else {
            customizedErros.push(this.wrapError(props, data));
        }
        return customizedErros;
    };
    ErrorHandlerService.prototype.wrapError = function (props, err) {
        var currentError;
        var index = props.indexOf(String(err.field));
        if (index > -1) {
            currentError = new _models_error_model__WEBPACK_IMPORTED_MODULE_1__["ErrorModel"](props[index], err.message);
        }
        else {
            currentError = new _models_error_model__WEBPACK_IMPORTED_MODULE_1__["ErrorModel"]('', err.message);
        }
        return currentError;
    };
    ErrorHandlerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ErrorHandlerService);
    return ErrorHandlerService;
}());



/***/ }),

/***/ "./src/services/hub.service.ts":
/*!*************************************!*\
  !*** ./src/services/hub.service.ts ***!
  \*************************************/
/*! exports provided: HubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubService", function() { return HubService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aspnet/signalr */ "./node_modules/@aspnet/signalr/dist/esm/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HubService = /** @class */ (function () {
    function HubService() {
    }
    HubService.prototype.initHubConnection = function () {
        this._hubConnection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["HubConnectionBuilder"]()
            .withUrl('https://localhost:44386/connectionHub?access_token=' + localStorage.getItem('access_token'))
            .configureLogging(_aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Information)
            .build();
        this.initHubMethods();
        return this._hubConnection.start();
    };
    HubService.prototype.initHubMethods = function () {
        this._hubConnection.on('OnConnectedAsync', function (group) { });
        this._hubConnection.on('OnDisconnectedAsync', function (group) { });
    };
    HubService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], HubService);
    return HubService;
}());



/***/ }),

/***/ "./src/services/mapping.service.ts":
/*!*****************************************!*\
  !*** ./src/services/mapping.service.ts ***!
  \*****************************************/
/*! exports provided: MappingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MappingService", function() { return MappingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_patient_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/patient.model */ "./src/models/patient.model.ts");
/* harmony import */ var _models_doctor_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/doctor.model */ "./src/models/doctor.model.ts");
/* harmony import */ var _enums_enum_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums/enum.models */ "./src/enums/enum.models.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MappingService = /** @class */ (function () {
    function MappingService() {
    }
    MappingService.prototype.getProps = function (userType) {
        var props = Object.keys(this.getRelatedUser(userType));
        var replaceIndex = props.indexOf('UserName');
        props.splice(replaceIndex, 1, 'Email');
        return this.parseProps(props);
    };
    MappingService.prototype.getRelatedUser = function (userType) {
        var relatedUser;
        if (userType === _enums_enum_models__WEBPACK_IMPORTED_MODULE_3__["UserType"].Patient) {
            relatedUser = new _models_doctor_model__WEBPACK_IMPORTED_MODULE_2__["DoctorModel"]();
        }
        else {
            relatedUser = new _models_patient_model__WEBPACK_IMPORTED_MODULE_1__["PatientModel"]();
        }
        return relatedUser;
    };
    MappingService.prototype.parseProps = function (props) {
        var parsedArray = [];
        for (var i = 0; i < props.length; i++) {
            var strArray = props[i].split('');
            var word = '';
            for (var j = 1; j < strArray.length; j++) {
                var upCase = this.IsUpCase(strArray[j]);
                if (upCase) {
                    word += strArray[j - 1] + ' ' +
                        strArray[j].toLocaleLowerCase();
                    j++;
                }
                else if (j === strArray.length - 1) {
                    word += strArray[j - 1] + strArray[j];
                }
                else {
                    word += strArray[j - 1];
                }
            }
            parsedArray.push(word);
        }
        return parsedArray;
    };
    MappingService.prototype.IsUpCase = function (ch1) {
        return ch1 === ch1.toUpperCase();
    };
    MappingService.prototype.parseObjects = function (objectsArray, userType) {
        var _this = this;
        var props = Object.keys(this.getRelatedUser(userType));
        var valuesArray = new Array();
        objectsArray.forEach(function (obj, index) {
            valuesArray[index] = new Array();
            for (var j = 0; j < props.length; j++) {
                var prop = props[j];
                prop = _this.firstLetterToLower(prop);
                valuesArray[index].push(obj[prop]);
            }
        });
        return valuesArray;
    };
    MappingService.prototype.ParseObject = function (object, userType) {
        var props = Object.keys(this.getRelatedUser(userType));
        var valuesArray = new Array();
        for (var i = 0; i < props.length; i++) {
            var prop = props[i];
            prop = this.firstLetterToLower(prop);
            valuesArray.push(object[prop]);
        }
        return valuesArray;
    };
    MappingService.prototype.firstLetterToLower = function (str) {
        return str.split('')[0].toLocaleLowerCase() + str.substr(1, str.length);
    };
    MappingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MappingService);
    return MappingService;
}());



/***/ }),

/***/ "./src/services/profile.service.ts":
/*!*****************************************!*\
  !*** ./src/services/profile.service.ts ***!
  \*****************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/services/api.service.ts");
/* harmony import */ var _requestBuilder_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./requestBuilder.service */ "./src/services/requestBuilder.service.ts");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hub.service */ "./src/services/hub.service.ts");
/* harmony import */ var _mapping_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mapping.service */ "./src/services/mapping.service.ts");
/* harmony import */ var _enums_enum_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../enums/enum.models */ "./src/enums/enum.models.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProfileService = /** @class */ (function (_super) {
    __extends(ProfileService, _super);
    function ProfileService(http, authSrc, hubSrc, mappingSrc) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.authSrc = authSrc;
        _this.hubSrc = hubSrc;
        _this.mappingSrc = mappingSrc;
        _this.UserRole = _this.get(_enums_enum_models__WEBPACK_IMPORTED_MODULE_7__["Profile"].role);
        _this.UserType = _this.getUserType();
        _this.AllUsers = [];
        _this.RelatedUsers = [];
        _this.Headers = [];
        _this.initHubMethods();
        return _this;
    }
    ProfileService.prototype.initHubMethods = function () {
        var _this = this;
        this.hubSrc._hubConnection.on('OnNewUserAdded', function (user) {
            _this.addUser(user);
        });
    };
    ProfileService.prototype.addUser = function (user) {
        var valuesArray = this.mappingSrc.ParseObject(user, this.UserType);
        if (this.AllUsers.length !== 0) {
            this.AllUsers.push(valuesArray);
        }
    };
    ProfileService.prototype.setHeaders = function () {
        if (this.Headers.length === 0) {
            this.Headers = this.mappingSrc.getProps(this.UserType);
        }
    };
    ProfileService.prototype.setValues = function (data, receivedFromServer) {
        if (data.length !== 0) {
            if (receivedFromServer === true) {
                return this.mappingSrc.parseObjects(data, this.UserType);
            }
            else {
                return data;
            }
        }
        else {
            return [];
        }
    };
    ProfileService.prototype.getData = function (controller, getMethod) {
        return this.http.get("/api/" +
            _enums_enum_models__WEBPACK_IMPORTED_MODULE_7__["ControllerType"][controller] + '/' +
            _enums_enum_models__WEBPACK_IMPORTED_MODULE_7__["GetMethod"][getMethod], { headers: this.authSrc.authFormHeaders() })
            .pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ProfileService.prototype.postData = function (controller, postType, model) {
        return this.http
            .post("/api/" +
            _enums_enum_models__WEBPACK_IMPORTED_MODULE_7__["ControllerType"][controller] + '/' +
            _enums_enum_models__WEBPACK_IMPORTED_MODULE_7__["PostMethod"][postType], model, { headers: this.authSrc.authJsonHeaders() });
    };
    ProfileService.prototype.getUserType = function () {
        switch (this.UserRole) {
            case 'patient':
                return _enums_enum_models__WEBPACK_IMPORTED_MODULE_7__["UserType"].Patient;
            case 'doctor':
                return _enums_enum_models__WEBPACK_IMPORTED_MODULE_7__["UserType"].Doctor;
            default:
                return _enums_enum_models__WEBPACK_IMPORTED_MODULE_7__["UserType"].Admin;
        }
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _requestBuilder_service__WEBPACK_IMPORTED_MODULE_4__["RequestBuilderService"],
            _hub_service__WEBPACK_IMPORTED_MODULE_5__["HubService"],
            _mapping_service__WEBPACK_IMPORTED_MODULE_6__["MappingService"]])
    ], ProfileService);
    return ProfileService;
}(_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]));



/***/ }),

/***/ "./src/services/requestBuilder.service.ts":
/*!************************************************!*\
  !*** ./src/services/requestBuilder.service.ts ***!
  \************************************************/
/*! exports provided: RequestBuilderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestBuilderService", function() { return RequestBuilderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestBuilderService = /** @class */ (function () {
    function RequestBuilderService(http) {
        this.http = http;
        this.client_id = '6839ef20b75817b79109';
    }
    // for requesting secure data using json
    RequestBuilderService.prototype.authJsonHeaders = function () {
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');
        header.append('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
        return header;
    };
    RequestBuilderService.prototype.authFormHeaders = function () {
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        header.append('Accept', 'application/json');
        header.append('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
        return header;
    };
    RequestBuilderService.prototype.authHeaders = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        return headers;
    };
    RequestBuilderService.prototype.passwordGrantBody = function (model) {
        var body = '';
        body += 'client_id=' + this.client_id + '&';
        body += 'grant_type=password&';
        body += 'username=' + model.email + '&';
        body += 'password=' + model.password + '&';
        body += 'scopes=openid profile offline_access roles';
        return body;
    };
    RequestBuilderService.prototype.externalAuthBody = function (id_token, registerAsDoctor) {
        var body = '';
        body += 'client_id=' + this.client_id + '&';
        body += 'response_type=code&';
        body += 'state=' + Math.random().toString(36).substring(3) + '&';
        body += 'scopes=openid profile offline_access roles&';
        body += 'redirect_uri=https://localhost:44386&';
        body += 'id_token=' + id_token + '&';
        body += 'registerAsDoctor=' + registerAsDoctor;
        return body;
    };
    RequestBuilderService.prototype.authCodeGrantBody = function (code) {
        var body = '';
        body += 'client_id=' + this.client_id + '&';
        body += 'grant_type=authorization_code&';
        body += 'redirect_uri=https://localhost:44386&';
        body += 'code=' + code + '&';
        body += 'scopes=openid profile offline_access roles&';
        return body;
    };
    RequestBuilderService.prototype.refreshGrantBody = function () {
        var body = '';
        body += 'client_id=' + this.client_id + '&';
        body += 'grant_type=refresh_token&';
        body += 'refresh_token=' + localStorage.getItem('refresh_token') + '&';
        return body;
    };
    RequestBuilderService.prototype.setTokens = function (resData) {
        localStorage.setItem('access_token', resData.access_token);
        localStorage.setItem('id_token', resData.id_token);
        localStorage.setItem('refresh_token', resData.refresh_token);
        localStorage.setItem('expires_in', resData.expires_in.toString());
    };
    RequestBuilderService.prototype.updateTokens = function (resData) {
        localStorage.setItem('access_token', resData.access_token);
        localStorage.setItem('id_token', resData.id_token);
        localStorage.setItem('expires_in', resData.expires_in);
        if (resData.refresh_token !== undefined) {
            localStorage.setItem('refresh_token', resData.refresh_token);
        }
    };
    RequestBuilderService.prototype.getExpMilliseconds = function () {
        return Number(localStorage.getItem('expires_in')) * 1000;
    };
    RequestBuilderService.prototype.removeTokens = function () {
        localStorage.clear();
    };
    RequestBuilderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], RequestBuilderService);
    return RequestBuilderService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\FileStorage\Client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map