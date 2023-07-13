"use strict";
(self["webpackChunkswiggy"] = self["webpackChunkswiggy"] || []).push([[592],{

/***/ 8149:
/*!*********************************************!*\
  !*** ./src/app/accounts/accounts.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountsModule": () => (/* binding */ AccountsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-profile/user-profile.component */ 9513);
/* harmony import */ var _user_auth_user_auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-auth/user-auth.component */ 6032);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ 4179);
/* harmony import */ var _user_signup_user_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-signup/user-signup.component */ 835);
/* harmony import */ var _restaurant_signup_restaurant_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./restaurant-signup/restaurant-signup.component */ 9425);
/* harmony import */ var _delivery_signup_delivery_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delivery-signup/delivery-signup.component */ 7141);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4650);









class AccountsModule {}
AccountsModule.ɵfac = function AccountsModule_Factory(t) {
  return new (t || AccountsModule)();
};
AccountsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: AccountsModule
});
AccountsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AccountsModule, {
    declarations: [_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_0__.UserProfileComponent, _user_auth_user_auth_component__WEBPACK_IMPORTED_MODULE_1__.UserAuthComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _user_signup_user_signup_component__WEBPACK_IMPORTED_MODULE_3__.UserSignupComponent, _restaurant_signup_restaurant_signup_component__WEBPACK_IMPORTED_MODULE_4__.RestaurantSignupComponent, _delivery_signup_delivery_signup_component__WEBPACK_IMPORTED_MODULE_5__.DeliverySignupComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule],
    exports: [_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_0__.UserProfileComponent, _user_auth_user_auth_component__WEBPACK_IMPORTED_MODULE_1__.UserAuthComponent, _user_signup_user_signup_component__WEBPACK_IMPORTED_MODULE_3__.UserSignupComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _user_signup_user_signup_component__WEBPACK_IMPORTED_MODULE_3__.UserSignupComponent]
  });
})();

/***/ }),

/***/ 7141:
/*!***********************************************************************!*\
  !*** ./src/app/accounts/delivery-signup/delivery-signup.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliverySignupComponent": () => (/* binding */ DeliverySignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class DeliverySignupComponent {}
DeliverySignupComponent.ɵfac = function DeliverySignupComponent_Factory(t) {
  return new (t || DeliverySignupComponent)();
};
DeliverySignupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DeliverySignupComponent,
  selectors: [["app-delivery-signup"]],
  decls: 2,
  vars: 0,
  template: function DeliverySignupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "delivery-signup works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  }
});

/***/ }),

/***/ 9425:
/*!***************************************************************************!*\
  !*** ./src/app/accounts/restaurant-signup/restaurant-signup.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestaurantSignupComponent": () => (/* binding */ RestaurantSignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class RestaurantSignupComponent {}
RestaurantSignupComponent.ɵfac = function RestaurantSignupComponent_Factory(t) {
  return new (t || RestaurantSignupComponent)();
};
RestaurantSignupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: RestaurantSignupComponent,
  selectors: [["app-restaurant-signup"]],
  decls: 2,
  vars: 0,
  template: function RestaurantSignupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "restaurant-signup works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  }
});

/***/ })

}]);