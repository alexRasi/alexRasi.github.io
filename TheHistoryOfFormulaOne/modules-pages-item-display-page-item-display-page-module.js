(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-pages-item-display-page-item-display-page-module"],{

/***/ "./src/app/modules/pages/item-display-page/item-display-page-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/pages/item-display-page/item-display-page-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ItemDisplayRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDisplayRoutingModule", function() { return ItemDisplayRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ui_components_item_display_page_item_display_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../ui/components/item-display-page/item-display-page.component */ "./src/app/modules/ui/components/item-display-page/item-display-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var routes = [
    {
        path: '',
        component: _ui_components_item_display_page_item_display_page_component__WEBPACK_IMPORTED_MODULE_1__["ItemDisplayPageComponent"]
    }
];
var ItemDisplayRoutingModule = /** @class */ (function () {
    function ItemDisplayRoutingModule() {
    }
    ItemDisplayRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ItemDisplayRoutingModule);
    return ItemDisplayRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/pages/item-display-page/item-display-page.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/pages/item-display-page/item-display-page.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ItemDisplayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDisplayPageModule", function() { return ItemDisplayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../ui/ui.module */ "./src/app/modules/ui/ui.module.ts");
/* harmony import */ var _item_display_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item-display-page-routing.module */ "./src/app/modules/pages/item-display-page/item-display-page-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var ItemDisplayPageModule = /** @class */ (function () {
    function ItemDisplayPageModule() {
    }
    ItemDisplayPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _item_display_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["ItemDisplayRoutingModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_1__["UiModule"]
            ]
        })
    ], ItemDisplayPageModule);
    return ItemDisplayPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-pages-item-display-page-item-display-page-module.js.map