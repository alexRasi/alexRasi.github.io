(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-pages-page-not-found-page-not-found-module"],{

/***/ "./src/app/modules/pages/page-not-found/page-not-found-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/pages/page-not-found/page-not-found-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: PageNotFoundRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundRoutingModule", function() { return PageNotFoundRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ui_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../ui/components/page-not-found/page-not-found.component */ "./src/app/modules/ui/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    {
        path: '',
        component: _ui_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__["PageNotFoundComponent"]
    }
];
var PageNotFoundRoutingModule = /** @class */ (function () {
    function PageNotFoundRoutingModule() {
    }
    PageNotFoundRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], PageNotFoundRoutingModule);
    return PageNotFoundRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/pages/page-not-found/page-not-found.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/pages/page-not-found/page-not-found.module.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundModule", function() { return PageNotFoundModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-not-found-routing.module */ "./src/app/modules/pages/page-not-found/page-not-found-routing.module.ts");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../ui/ui.module */ "./src/app/modules/ui/ui.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var PageNotFoundModule = /** @class */ (function () {
    function PageNotFoundModule() {
    }
    PageNotFoundModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_2__["UiModule"],
                _page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_1__["PageNotFoundRoutingModule"]
            ]
        })
    ], PageNotFoundModule);
    return PageNotFoundModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-pages-page-not-found-page-not-found-module.js.map