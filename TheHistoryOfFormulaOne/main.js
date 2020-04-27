(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../card-display-page/card-display-page.module": [
		"./src/app/modules/pages/card-display-page/card-display-page.module.ts",
		"card-display-page-card-display-page-module"
	],
	"./modules/pages/card-display-page/card-display-page.module": [
		"./src/app/modules/pages/card-display-page/card-display-page.module.ts",
		"card-display-page-card-display-page-module"
	],
	"./modules/pages/home-page/home-page.module": [
		"./src/app/modules/pages/home-page/home-page.module.ts",
		"modules-pages-home-page-home-page-module"
	],
	"./modules/pages/item-display-page/item-display-page.module": [
		"./src/app/modules/pages/item-display-page/item-display-page.module.ts",
		"modules-pages-item-display-page-item-display-page-module"
	],
	"./modules/pages/page-not-found/page-not-found.module": [
		"./src/app/modules/pages/page-not-found/page-not-found.module.ts",
		"modules-pages-page-not-found-page-not-found-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _modules_data_fetching_services_constructor_item_fetching_service_constructor_item_fetching_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/data-fetching/services/constructor-item-fetching-service/constructor-item-fetching.service */ "./src/app/modules/data-fetching/services/constructor-item-fetching-service/constructor-item-fetching.service.ts");
/* harmony import */ var _modules_data_fetching_services_driver_item_fetching_service_driver_item_fetching_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/data-fetching/services/driver-item-fetching-service/driver-item-fetching.service */ "./src/app/modules/data-fetching/services/driver-item-fetching-service/driver-item-fetching.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_data_fetching_services_seasons_fetching_service_seasons_fetching_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/data-fetching/services/seasons-fetching-service/seasons-fetching.service */ "./src/app/modules/data-fetching/services/seasons-fetching-service/seasons-fetching.service.ts");
/* harmony import */ var _modules_data_fetching_services_drivers_fetching_service_drivers_fetching_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/data-fetching/services/drivers-fetching-service/drivers-fetching.service */ "./src/app/modules/data-fetching/services/drivers-fetching-service/drivers-fetching.service.ts");
/* harmony import */ var _modules_data_fetching_services_constructors_fetching_service_constructors_fetching_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/data-fetching/services/constructors-fetching-service/constructors-fetching.service */ "./src/app/modules/data-fetching/services/constructors-fetching-service/constructors-fetching.service.ts");








var SEASONS_SERVICE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]("Seasons");
var DRIVERS_SERVICE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]("Drivers");
var DRIVER_ITEM_SERVICE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]("DriverItem");
var CONSTRUCTORS_SERVICE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]("Constructors");
var CONSTRUCTOR_ITEM_SERVICE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]("ConstructorItem");
var routes = [
    {
        path: 'home',
        loadChildren: './modules/pages/home-page/home-page.module#HomePageModule'
    },
    {
        path: 'seasons',
        data: {
            requiredServiceToken: SEASONS_SERVICE_TOKEN
        },
        loadChildren: './modules/pages/card-display-page/card-display-page.module#CardDisplayPageModule'
    },
    {
        path: 'drivers',
        data: {
            requiredServiceToken: DRIVERS_SERVICE_TOKEN
        },
        loadChildren: './modules/pages/card-display-page/card-display-page.module#CardDisplayPageModule'
    },
    {
        path: 'constructors',
        data: {
            requiredServiceToken: CONSTRUCTORS_SERVICE_TOKEN
        },
        loadChildren: './modules/pages/card-display-page/card-display-page.module#CardDisplayPageModule'
    },
    {
        path: 'drivers/:id',
        data: {
            requiredServiceToken: DRIVER_ITEM_SERVICE_TOKEN
        },
        loadChildren: './modules/pages/item-display-page/item-display-page.module#ItemDisplayPageModule'
    },
    {
        path: 'constructors/:id',
        data: {
            requiredServiceToken: CONSTRUCTOR_ITEM_SERVICE_TOKEN
        },
        loadChildren: './modules/pages/item-display-page/item-display-page.module#ItemDisplayPageModule'
    },
    {
        path: 'page-not-found',
        loadChildren: './modules/pages/page-not-found/page-not-found.module#PageNotFoundModule'
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            providers: [
                {
                    provide: SEASONS_SERVICE_TOKEN,
                    useClass: _modules_data_fetching_services_seasons_fetching_service_seasons_fetching_service__WEBPACK_IMPORTED_MODULE_5__["SeasonsFetchingService"]
                },
                {
                    provide: DRIVERS_SERVICE_TOKEN,
                    useClass: _modules_data_fetching_services_drivers_fetching_service_drivers_fetching_service__WEBPACK_IMPORTED_MODULE_6__["DriversFetchingService"]
                },
                {
                    provide: CONSTRUCTORS_SERVICE_TOKEN,
                    useClass: _modules_data_fetching_services_constructors_fetching_service_constructors_fetching_service__WEBPACK_IMPORTED_MODULE_7__["ConstructorsFetchingService"]
                },
                {
                    provide: DRIVER_ITEM_SERVICE_TOKEN,
                    useClass: _modules_data_fetching_services_driver_item_fetching_service_driver_item_fetching_service__WEBPACK_IMPORTED_MODULE_2__["DriverItemFetchingService"]
                },
                {
                    provide: CONSTRUCTOR_ITEM_SERVICE_TOKEN,
                    useClass: _modules_data_fetching_services_constructor_item_fetching_service_constructor_item_fetching_service__WEBPACK_IMPORTED_MODULE_1__["ConstructorItemFetchingService"]
                }
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content d-flex justify-content-end flex-column\">\r\n  <router-outlet></router-outlet>\r\n  <app-footer class=\"page-footer\"></app-footer>\r\n</div>\r\n<app-spin-loader></app-spin-loader>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  border: none;\n  height: 2px;\n  /* Set the hr color */\n  color: #333;\n  /* old IE */\n  background-color: #333;\n  /* Modern Browsers */ }\n\nhtml, body {\n  overflow-x: hidden !important;\n  width: 100vw;\n  height: 100vh; }\n\na {\n  color: gray; }\n\n:host {\n  font-family: 'Roboto', sans-serif;\n  min-height: 100vh;\n  background-color: red; }\n\n.content {\n  min-height: 85vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxhLnJhc2lkYWtpc1xcRG9jdW1lbnRzXFxUaGUtSGlzdG9yeS1vZi1Gb3JtdWxhLU9uZVxcVGhlSGlzdG9yeU9mRm9ybXVsYU9uZS9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9DOlxcVXNlcnNcXGEucmFzaWRha2lzXFxEb2N1bWVudHNcXFRoZS1IaXN0b3J5LW9mLUZvcm11bGEtT25lXFxUaGVIaXN0b3J5T2ZGb3JtdWxhT25lL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHFCQUFBO0VBQ0EsV0FBVztFQUFFLFdBQUE7RUFDYixzQkFBc0I7RUFBRSxvQkFBQSxFQUFxQjs7QUFHL0M7RUFDRSw2QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFdBQVcsRUFBQTs7QUN4QmI7RUFDRSxpQ0FBaUM7RUFDakMsaUJBQWlCO0VBQ2pCLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHBhZ2Utc2lkZS1wYWRkaW5nOiAxNXZ3O1xyXG5cclxuJGxpZ2h0LWdyYXktY29sb3I6IHJnYmEoMTg3LCAxODcsIDE4NywgMC41KTtcclxuXHJcbiRib3JkZXItY29sb3I6ICRsaWdodC1ncmF5LWNvbG9yO1xyXG5cclxuJHNtYWxsLXRpdGxlLWZvbnQtc2l6ZTogMjBweDtcclxuJGJpZy10aXRsZS1mb250LXNpemU6IDcwcHg7XHJcblxyXG4kbGV0dGVyLWNvbG9yOiAjMTAxNzJDO1xyXG5cclxuaHIge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBoZWlnaHQ6IDJweDtcclxuICAvKiBTZXQgdGhlIGhyIGNvbG9yICovXHJcbiAgY29sb3I6ICMzMzM7IC8qIG9sZCBJRSAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7IC8qIE1vZGVybiBCcm93c2VycyAqL1xyXG59XHJcblxyXG5odG1sLCBib2R5IHtcclxuICBvdmVyZmxvdy14OiBoaWRkZW4haW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogZ3JheTtcclxufVxyXG4iLCJAaW1wb3J0IFwifnNyYy9zdHlsZXMuc2Nzc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBtaW4taGVpZ2h0OiA4NXZoO1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ui/ui.module */ "./src/app/modules/ui/ui.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_data_fetching_data_fetching_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/data-fetching/data-fetching.module */ "./src/app/modules/data-fetching/data-fetching.module.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                _modules_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__["UiModule"],
                _modules_data_fetching_data_fetching_module__WEBPACK_IMPORTED_MODULE_7__["DataFetchingModule"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/modules/cache/cache.service.ts":
/*!************************************************!*\
  !*** ./src/app/modules/cache/cache.service.ts ***!
  \************************************************/
/*! exports provided: CacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheService", function() { return CacheService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CacheService = /** @class */ (function () {
    function CacheService() {
        this.cachesStore = [];
    }
    CacheService.prototype.getCache = function (key) {
        return this.cachesStore[key];
    };
    CacheService.prototype.newCache = function (key) {
        return this.cachesStore[key] = {};
    };
    CacheService.prototype.getFromCache = function (cache, limit, offset) {
        return cache.slice(offset, offset + limit);
    };
    CacheService.prototype.cache = function (cache, limit, offset, data) {
        this.expandCacheIfNeeded(cache, limit, offset);
        cache.splice.apply(cache, [offset, data.length].concat(data));
    };
    CacheService.prototype.expandCacheIfNeeded = function (cache, limit, offset) {
        if (cache.length < offset) {
            for (var i = cache.length; i < offset + limit; i++) {
                cache.push({});
            }
        }
    };
    CacheService.prototype.clearCache = function (cache) {
        cache = [];
    };
    CacheService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CacheService);
    return CacheService;
}());



/***/ }),

/***/ "./src/app/modules/data-fetching/data-fetching.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/data-fetching/data-fetching.module.ts ***!
  \***************************************************************/
/*! exports provided: DataFetchingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFetchingModule", function() { return DataFetchingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var DataFetchingModule = /** @class */ (function () {
    function DataFetchingModule() {
    }
    DataFetchingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ]
        })
    ], DataFetchingModule);
    return DataFetchingModule;
}());



/***/ }),

/***/ "./src/app/modules/data-fetching/services/constructor-item-fetching-service/constructor-item-fetching.service.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/data-fetching/services/constructor-item-fetching-service/constructor-item-fetching.service.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ConstructorItemFetchingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstructorItemFetchingService", function() { return ConstructorItemFetchingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_fetching_base_service_data_fetching_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-fetching-base-service/data-fetching.service */ "./src/app/modules/data-fetching/services/data-fetching-base-service/data-fetching.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ConstructorItemFetchingService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ConstructorItemFetchingService, _super);
    function ConstructorItemFetchingService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.url = 'http://ergast.com/api/f1/constructors';
        return _this;
    }
    ConstructorItemFetchingService.prototype.getData = function (constructorId) {
        return this.http.get(this.url + '/' + constructorId + '.json');
    };
    ConstructorItemFetchingService.prototype.getTransformedData = function (constructorId) {
        var _this = this;
        return this.getData(constructorId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return _this.mapToItemDisplayPageGenericData(data); }));
    };
    ConstructorItemFetchingService.prototype.mapToItemDisplayPageGenericData = function (driverResponse) {
        var itemDisplayPageGenericData = {};
        itemDisplayPageGenericData.details = [];
        var constructor = driverResponse.MRData.ConstructorTable.Constructors[0];
        itemDisplayPageGenericData.title = constructor.name;
        itemDisplayPageGenericData.titleAbove = 'Constructor details';
        itemDisplayPageGenericData.description = constructor.url;
        itemDisplayPageGenericData.titleBelow = constructor.nationality;
        itemDisplayPageGenericData.details.push({ attribute: 'Nationality', value: constructor.nationality });
        return itemDisplayPageGenericData;
    };
    ConstructorItemFetchingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ConstructorItemFetchingService);
    return ConstructorItemFetchingService;
}(_data_fetching_base_service_data_fetching_service__WEBPACK_IMPORTED_MODULE_2__["DataFetchingService"]));



/***/ }),

/***/ "./src/app/modules/data-fetching/services/constructors-fetching-service/constructors-fetching.service.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/data-fetching/services/constructors-fetching-service/constructors-fetching.service.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ConstructorsFetchingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstructorsFetchingService", function() { return ConstructorsFetchingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_fetching_base_service_data_fetching_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-fetching-base-service/data-fetching.service */ "./src/app/modules/data-fetching/services/data-fetching-base-service/data-fetching.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ConstructorsFetchingService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ConstructorsFetchingService, _super);
    function ConstructorsFetchingService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.url = 'http://ergast.com/api/f1/constructors.json';
        return _this;
    }
    ConstructorsFetchingService.prototype.getData = function (parameter, limit, offset) {
        return this.http.get(this.url + "?limit=" + limit + "&offset=" + offset);
    };
    ConstructorsFetchingService.prototype.getTransformedData = function (parameter, limit, offset) {
        var _this = this;
        return this.getData(parameter, limit, offset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return _this.mapToCardDisplayPageGenericData(data); }));
    };
    ConstructorsFetchingService.prototype.mapToCardDisplayPageGenericData = function (constructorsResponse) {
        var cardGenericData = [];
        var totalData = +constructorsResponse.MRData.total;
        constructorsResponse.MRData.ConstructorTable.Constructors.forEach(function (constructor) {
            cardGenericData.push({
                label: constructor.name,
                description: constructor.url,
                moreInfoLink: constructor.constructorId
            });
        });
        return { cards: cardGenericData, title: 'Constructors', totalData: totalData };
    };
    ConstructorsFetchingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ConstructorsFetchingService);
    return ConstructorsFetchingService;
}(_data_fetching_base_service_data_fetching_service__WEBPACK_IMPORTED_MODULE_2__["DataFetchingService"]));



/***/ }),

/***/ "./src/app/modules/data-fetching/services/data-fetching-base-service/data-fetching.service.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/data-fetching/services/data-fetching-base-service/data-fetching.service.ts ***!
  \****************************************************************************************************/
/*! exports provided: DataFetchingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFetchingService", function() { return DataFetchingService; });
var DataFetchingService = /** @class */ (function () {
    function DataFetchingService() {
        this.CACHE = [];
    }
    return DataFetchingService;
}());



/***/ }),

/***/ "./src/app/modules/data-fetching/services/driver-item-fetching-service/driver-item-fetching.service.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/data-fetching/services/driver-item-fetching-service/driver-item-fetching.service.ts ***!
  \*************************************************************************************************************/
/*! exports provided: DriverItemFetchingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverItemFetchingService", function() { return DriverItemFetchingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_fetching_base_service_data_fetching_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-fetching-base-service/data-fetching.service */ "./src/app/modules/data-fetching/services/data-fetching-base-service/data-fetching.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var DriverItemFetchingService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DriverItemFetchingService, _super);
    function DriverItemFetchingService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.url = 'http://ergast.com/api/f1/drivers';
        return _this;
    }
    DriverItemFetchingService.prototype.getData = function (driverId) {
        return this.http.get(this.url + '/' + driverId + '.json');
    };
    DriverItemFetchingService.prototype.getTransformedData = function (driverId) {
        var _this = this;
        return this.getData(driverId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return _this.mapToItemDisplayPageGenericData(data); }));
    };
    DriverItemFetchingService.prototype.mapToItemDisplayPageGenericData = function (driverResponse) {
        var itemDisplayPageGenericData = {};
        itemDisplayPageGenericData.details = [];
        var driver = driverResponse.MRData.DriverTable.Drivers[0];
        itemDisplayPageGenericData.title = driver.familyName + ' ' + driver.givenName;
        itemDisplayPageGenericData.titleAbove = 'Driver details';
        itemDisplayPageGenericData.description = driver.url;
        itemDisplayPageGenericData.titleBelow = driver.nationality;
        itemDisplayPageGenericData.details.push({ attribute: 'Date of Birth', value: driver.dateOfBirth });
        itemDisplayPageGenericData.details.push({ attribute: 'Nationality', value: driver.nationality });
        return itemDisplayPageGenericData;
    };
    DriverItemFetchingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DriverItemFetchingService);
    return DriverItemFetchingService;
}(_data_fetching_base_service_data_fetching_service__WEBPACK_IMPORTED_MODULE_2__["DataFetchingService"]));



/***/ }),

/***/ "./src/app/modules/data-fetching/services/drivers-fetching-service/drivers-fetching.service.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/data-fetching/services/drivers-fetching-service/drivers-fetching.service.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DriversFetchingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversFetchingService", function() { return DriversFetchingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_fetching_base_service_data_fetching_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-fetching-base-service/data-fetching.service */ "./src/app/modules/data-fetching/services/data-fetching-base-service/data-fetching.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var DriversFetchingService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DriversFetchingService, _super);
    function DriversFetchingService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.url = 'http://ergast.com/api/f1/drivers.json';
        return _this;
    }
    DriversFetchingService.prototype.getData = function (parameter, limit, offset) {
        return this.http.get(this.url + "?limit=" + limit + "&offset=" + offset);
    };
    DriversFetchingService.prototype.getTransformedData = function (parameter, limit, offset) {
        var _this = this;
        return this.getData(parameter, limit, offset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return _this.mapToCardGenericData(data); }));
    };
    DriversFetchingService.prototype.mapToCardGenericData = function (driversResponse) {
        var cardGenericData = [];
        var totalData = +driversResponse.MRData.total;
        driversResponse.MRData.DriverTable.Drivers.forEach(function (driver) {
            cardGenericData.push({
                label: driver.familyName + ' ' + driver.givenName,
                description: driver.url,
                moreInfoLink: '/drivers/' + driver.driverId
            });
        });
        return { cards: cardGenericData, title: 'Drivers', totalData: totalData };
    };
    DriversFetchingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DriversFetchingService);
    return DriversFetchingService;
}(_data_fetching_base_service_data_fetching_service__WEBPACK_IMPORTED_MODULE_2__["DataFetchingService"]));



/***/ }),

/***/ "./src/app/modules/data-fetching/services/seasons-fetching-service/seasons-fetching.service.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/data-fetching/services/seasons-fetching-service/seasons-fetching.service.ts ***!
  \*****************************************************************************************************/
/*! exports provided: SeasonsFetchingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeasonsFetchingService", function() { return SeasonsFetchingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_fetching_base_service_data_fetching_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-fetching-base-service/data-fetching.service */ "./src/app/modules/data-fetching/services/data-fetching-base-service/data-fetching.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var SeasonsFetchingService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SeasonsFetchingService, _super);
    function SeasonsFetchingService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.url = 'http://ergast.com/api/f1/seasons.json';
        return _this;
    }
    SeasonsFetchingService.prototype.getData = function (parameter, limit, offset) {
        return this.http.get(this.url + "?limit=" + limit + "&offset=" + offset);
    };
    SeasonsFetchingService.prototype.getTransformedData = function (parameter, limit, offset) {
        var _this = this;
        return this.getData(parameter, limit, offset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return _this.mapToCardGenericData(data); }));
    };
    SeasonsFetchingService.prototype.mapToCardGenericData = function (seasonsResponse) {
        var cardGenericData = [];
        var totalData = +seasonsResponse.MRData.total;
        seasonsResponse.MRData.SeasonTable.Seasons.forEach(function (season) {
            cardGenericData.push({
                label: season.season,
                description: season.url,
                moreInfoLink: 'season-standings/' + season.season
            });
        });
        return { cards: cardGenericData, title: 'Seasons', totalData: totalData };
    };
    SeasonsFetchingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SeasonsFetchingService);
    return SeasonsFetchingService;
}(_data_fetching_base_service_data_fetching_service__WEBPACK_IMPORTED_MODULE_2__["DataFetchingService"]));



/***/ }),

/***/ "./src/app/modules/ui/components/card-display-page/card-display-page.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/ui/components/card-display-page/card-display-page.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"pageData\">\r\n  <app-title-component [mainTitle]=\"pageData.title\" [titleAbove]=\"pageData.aboveTitle\" [titleBelow]=\"pageData.belowTitle\" ></app-title-component>\r\n  <div class=\"container display-card-grid d-flex\">\r\n    <app-display-card *ngFor=\"let card of dataSource\"\r\n    [altImageTitle]=\"card.altImageTitle\"\r\n    [description]=\"card.description\"\r\n    [label]=\"card.label\"\r\n    [moreInfoLink]=\"card.moreInfoLink\"\r\n    class=\"col-xs-12 col-sm-12 col-md-6 col-lg-4 pb-5\">\r\n  </app-display-card>\r\n  <div class=\"paginator w-100\">\r\n    <app-paginator *ngIf=\"displayPaginator()\" [totalPages]=\"totalPages\" (pageClickedEvent)=\"paginatorClicked($event)\"></app-paginator>\r\n  </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/ui/components/card-display-page/card-display-page.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/ui/components/card-display-page/card-display-page.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  border: none;\n  height: 2px;\n  /* Set the hr color */\n  color: #333;\n  /* old IE */\n  background-color: #333;\n  /* Modern Browsers */ }\n\nhtml, body {\n  overflow-x: hidden !important;\n  width: 100vw;\n  height: 100vh; }\n\na {\n  color: gray; }\n\n.display-card-grid {\n  width: 100vw;\n  margin-top: 3%;\n  padding-left: 15vw;\n  padding-right: 15vw;\n  max-width: 100vw;\n  flex-wrap: wrap; }\n\n.paginator {\n  display: flex;\n  justify-content: flex-end;\n  margin-right: 1%; }\n\n@media screen and (max-width: 768px) {\n  .display-card-grid {\n    padding: 2px; }\n  .paginator {\n    display: flex;\n    justify-content: center;\n    font-size: 20px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91aS9jb21wb25lbnRzL2NhcmQtZGlzcGxheS1wYWdlL0M6XFxVc2Vyc1xcYS5yYXNpZGFraXNcXERvY3VtZW50c1xcVGhlLUhpc3Rvcnktb2YtRm9ybXVsYS1PbmVcXFRoZUhpc3RvcnlPZkZvcm11bGFPbmUvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy91aS9jb21wb25lbnRzL2NhcmQtZGlzcGxheS1wYWdlL0M6XFxVc2Vyc1xcYS5yYXNpZGFraXNcXERvY3VtZW50c1xcVGhlLUhpc3Rvcnktb2YtRm9ybXVsYS1PbmVcXFRoZUhpc3RvcnlPZkZvcm11bGFPbmUvc3JjXFxhcHBcXG1vZHVsZXNcXHVpXFxjb21wb25lbnRzXFxjYXJkLWRpc3BsYXktcGFnZVxcY2FyZC1kaXNwbGF5LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHFCQUFBO0VBQ0EsV0FBVztFQUFFLFdBQUE7RUFDYixzQkFBc0I7RUFBRSxvQkFBQSxFQUFxQjs7QUFHL0M7RUFDRSw2QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFdBQVcsRUFBQTs7QUN4QmI7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGtCRExzQjtFQ010QixtQkROc0I7RUNRdEIsZ0JBQWdCO0VBRWhCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFO0lBQ0UsWUFBVyxFQUFBO0VBR2I7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWUsRUFBQSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWkvY29tcG9uZW50cy9jYXJkLWRpc3BsYXktcGFnZS9jYXJkLWRpc3BsYXktcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwYWdlLXNpZGUtcGFkZGluZzogMTV2dztcclxuXHJcbiRsaWdodC1ncmF5LWNvbG9yOiByZ2JhKDE4NywgMTg3LCAxODcsIDAuNSk7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAkbGlnaHQtZ3JheS1jb2xvcjtcclxuXHJcbiRzbWFsbC10aXRsZS1mb250LXNpemU6IDIwcHg7XHJcbiRiaWctdGl0bGUtZm9udC1zaXplOiA3MHB4O1xyXG5cclxuJGxldHRlci1jb2xvcjogIzEwMTcyQztcclxuXHJcbmhyIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgLyogU2V0IHRoZSBociBjb2xvciAqL1xyXG4gIGNvbG9yOiAjMzMzOyAvKiBvbGQgSUUgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzOyAvKiBNb2Rlcm4gQnJvd3NlcnMgKi9cclxufVxyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6IGdyYXk7XHJcbn1cclxuIiwiQGltcG9ydCBcIn5zcmMvc3R5bGVzLnNjc3NcIjtcclxuXHJcbi5kaXNwbGF5LWNhcmQtZ3JpZCB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG4gIHBhZGRpbmctbGVmdDogJHBhZ2Utc2lkZS1wYWRkaW5nO1xyXG4gIHBhZGRpbmctcmlnaHQ6ICRwYWdlLXNpZGUtcGFkZGluZztcclxuXHJcbiAgbWF4LXdpZHRoOiAxMDB2dztcclxuXHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4ucGFnaW5hdG9yIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuZGlzcGxheS1jYXJkLWdyaWQge1xyXG4gICAgcGFkZGluZzoycHg7XHJcbiAgfVxyXG5cclxuICAucGFnaW5hdG9yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/ui/components/card-display-page/card-display-page.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/ui/components/card-display-page/card-display-page.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CardDisplayPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDisplayPageComponent", function() { return CardDisplayPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../environments/config */ "./src/environments/config.ts");
/* harmony import */ var _cache_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../cache/cache.service */ "./src/app/modules/cache/cache.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_loading_spinner_service_loading_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/loading-spinner-service/loading-spinner.service */ "./src/app/modules/ui/services/loading-spinner-service/loading-spinner.service.ts");






var CardDisplayPageComponent = /** @class */ (function () {
    function CardDisplayPageComponent(router, route, injector, loadingSpinnerService, cacheService) {
        this.router = router;
        this.route = route;
        this.loadingSpinnerService = loadingSpinnerService;
        this.cacheService = cacheService;
        this.pageData = {};
        this.paginationLimit = _environments_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].paginationSize;
        this.queryParameter = this.route.snapshot.paramMap.get('id');
        // Injecting the data subclass fetching service provided during routing
        this.serviceToken = route.snapshot.data['requiredServiceToken'];
        this.dataFetchingService = injector.get(this.serviceToken);
    }
    CardDisplayPageComponent.prototype.ngOnInit = function () {
        this.scrollOnTop();
        // create a unique cache id with the service's token name and the queryParameter
        var cacheName = this.queryParameter ? (this.serviceToken['_desc'] + this.queryParameter) : this.serviceToken['_desc'];
        this.cache = this.cacheService.getCache(cacheName); // serviceToken = entity name
        if (!this.cache) {
            this.cache = this.cacheService.newCache(cacheName);
            this.cache.cards = [];
        }
        this.loadData(this.queryParameter, this.paginationLimit, 0);
    };
    CardDisplayPageComponent.prototype.loadData = function (parameter, limit, offset) {
        this.loadingSpinnerService.showSpinner();
        var cachedData = this.cacheService.getFromCache(this.cache.cards, limit, offset);
        if (this.cacheExists(cachedData)) {
            this.handleCachedData(cachedData);
        }
        else {
            this.handleUncachedData(parameter, limit, offset);
        }
    };
    CardDisplayPageComponent.prototype.handleCachedData = function (cachedData) {
        this.loadDataFromCache();
        this.dataSource = this.filterUndefinedData(cachedData);
        this.totalPages = Math.ceil(this.pageData.totalData / this.paginationLimit);
    };
    CardDisplayPageComponent.prototype.handleUncachedData = function (parameter, limit, offset) {
        var _this = this;
        this.dataFetchingService.getTransformedData(parameter, limit, offset).subscribe(function (pageData) {
            _this.pageData = pageData;
            _this.dataSource = pageData.cards;
            _this.saveDataToCache(limit, offset, pageData);
            _this.totalPages = Math.ceil(pageData.totalData / _this.paginationLimit);
            _this.loadingSpinnerService.hideSpinner();
        }, function (error) {
            _this.navigateOnPageNotFound();
            _this.loadingSpinnerService.hideSpinner();
        });
    };
    CardDisplayPageComponent.prototype.loadDataFromCache = function () {
        this.pageData.title = this.cache.title;
        this.pageData.totalData = this.cache.totalData;
        this.pageData.belowTitle = this.cache.belowTitle;
        this.pageData.aboveTitle = this.cache.aboveTitle;
        this.loadingSpinnerService.hideSpinner();
    };
    CardDisplayPageComponent.prototype.saveDataToCache = function (limit, offset, data) {
        this.cache.totalData = data.totalData;
        this.cache.title = data.title;
        this.cache.belowTitle = data.belowTitle;
        this.cache.aboveTitle = data.aboveTitle;
        this.cacheService.cache(this.cache.cards, limit, offset, data.cards);
    };
    CardDisplayPageComponent.prototype.paginatorClicked = function (page) {
        this.scrollOnTop();
        this.loadData(this.queryParameter, this.paginationLimit, (page - 1) * this.paginationLimit);
    };
    CardDisplayPageComponent.prototype.scrollOnTop = function () {
        document.body.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };
    CardDisplayPageComponent.prototype.navigateOnPageNotFound = function () {
        this.router.navigateByUrl('/page-not-found');
    };
    CardDisplayPageComponent.prototype.cacheExists = function (cachedData) {
        return cachedData[0] && !this.isEmptyObject(cachedData[0]);
    };
    CardDisplayPageComponent.prototype.filterUndefinedData = function (array) {
        var _this = this;
        return array.filter(function (val) { return !_this.isEmptyObject(val); });
    };
    CardDisplayPageComponent.prototype.isEmptyObject = function (obj) {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    };
    CardDisplayPageComponent.prototype.displayPaginator = function () {
        return this.totalPages > 1;
    };
    CardDisplayPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-card-display-page',
            template: __webpack_require__(/*! ./card-display-page.component.html */ "./src/app/modules/ui/components/card-display-page/card-display-page.component.html"),
            styles: [__webpack_require__(/*! ./card-display-page.component.scss */ "./src/app/modules/ui/components/card-display-page/card-display-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"],
            _services_loading_spinner_service_loading_spinner_service__WEBPACK_IMPORTED_MODULE_5__["LoadingSpinnerService"],
            _cache_cache_service__WEBPACK_IMPORTED_MODULE_2__["CacheService"]])
    ], CardDisplayPageComponent);
    return CardDisplayPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/ui/components/display-card/display-card.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/ui/components/display-card/display-card.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"display-card container\">\r\n  <div class=\"card-image\">\r\n    <div class=\" w-100 h-100 d-flex align-items-center justify-content-center\">\r\n      <div>\r\n        <i  class=\"image fa fa-picture-o\" aria-hidden=\"true\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-info\">\r\n    <div class=\"col-12 card-row\">\r\n      <h5 class=\"card-title\">{{label}}</h5>\r\n    </div>\r\n    <div class=\"col-12 card-row card-content\">\r\n     <span class=\"description\" *ngIf=\"isUrl()\"><a [href]=\"description\">{{description}}</a></span>\r\n     <span class=\"description\" *ngIf=\"!isUrl()\" >{{description}}</span>\r\n    </div>\r\n    <div class=\"col-12 card-row\">\r\n      <a [routerLink]=\"moreInfoLink\" class=\"card-more-info\">More Info</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/ui/components/display-card/display-card.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/ui/components/display-card/display-card.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  border: none;\n  height: 2px;\n  /* Set the hr color */\n  color: #333;\n  /* old IE */\n  background-color: #333;\n  /* Modern Browsers */ }\n\nhtml, body {\n  overflow-x: hidden !important;\n  width: 100vw;\n  height: 100vh; }\n\na {\n  color: gray; }\n\n.display-card {\n  height: 49vh;\n  width: 23vw;\n  min-width: 300px; }\n\n.card-image {\n  height: 65%;\n  width: 100;\n  font-size: 70px;\n  text-align: center;\n  color: rgba(187, 187, 187, 0.5);\n  border: 1px solid rgba(187, 187, 187, 0.5); }\n\n.card-info {\n  height: 35%;\n  width: 100%;\n  background-color: rgba(187, 187, 187, 0.245); }\n\n.card-row {\n  height: 30%;\n  padding-top: 4%; }\n\n.card-title {\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 25px;\n  letter-spacing: 0px;\n  color: #10172C; }\n\n.card-content {\n  text-align: left;\n  font-size: 11px;\n  line-height: 14px;\n  letter-spacing: 0px;\n  color: #10172C; }\n\n.card-more-info {\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 14px;\n  color: #10172C; }\n\n.description {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 100%;\n  display: block;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91aS9jb21wb25lbnRzL2Rpc3BsYXktY2FyZC9DOlxcVXNlcnNcXGEucmFzaWRha2lzXFxEb2N1bWVudHNcXFRoZS1IaXN0b3J5LW9mLUZvcm11bGEtT25lXFxUaGVIaXN0b3J5T2ZGb3JtdWxhT25lL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvdWkvY29tcG9uZW50cy9kaXNwbGF5LWNhcmQvQzpcXFVzZXJzXFxhLnJhc2lkYWtpc1xcRG9jdW1lbnRzXFxUaGUtSGlzdG9yeS1vZi1Gb3JtdWxhLU9uZVxcVGhlSGlzdG9yeU9mRm9ybXVsYU9uZS9zcmNcXGFwcFxcbW9kdWxlc1xcdWlcXGNvbXBvbmVudHNcXGRpc3BsYXktY2FyZFxcZGlzcGxheS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxxQkFBQTtFQUNBLFdBQVc7RUFBRSxXQUFBO0VBQ2Isc0JBQXNCO0VBQUUsb0JBQUEsRUFBcUI7O0FBRy9DO0VBQ0UsNkJBQTRCO0VBQzVCLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxXQUFXLEVBQUE7O0FDeEJiO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxXQUFXO0VBQ1gsVUFBUztFQUNULGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsK0JEWHlDO0VDWXpDLDBDRFp5QyxFQUFBOztBQ2dCM0M7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLDRDQUE0QyxFQUFBOztBQUc5QztFQUNFLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNEekJvQixFQUFBOztBQzRCdEI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0RqQ29CLEVBQUE7O0FDb0N0QjtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNEeENvQixFQUFBOztBQzJDdEI7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0JBQ0YsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWkvY29tcG9uZW50cy9kaXNwbGF5LWNhcmQvZGlzcGxheS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHBhZ2Utc2lkZS1wYWRkaW5nOiAxNXZ3O1xyXG5cclxuJGxpZ2h0LWdyYXktY29sb3I6IHJnYmEoMTg3LCAxODcsIDE4NywgMC41KTtcclxuXHJcbiRib3JkZXItY29sb3I6ICRsaWdodC1ncmF5LWNvbG9yO1xyXG5cclxuJHNtYWxsLXRpdGxlLWZvbnQtc2l6ZTogMjBweDtcclxuJGJpZy10aXRsZS1mb250LXNpemU6IDcwcHg7XHJcblxyXG4kbGV0dGVyLWNvbG9yOiAjMTAxNzJDO1xyXG5cclxuaHIge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBoZWlnaHQ6IDJweDtcclxuICAvKiBTZXQgdGhlIGhyIGNvbG9yICovXHJcbiAgY29sb3I6ICMzMzM7IC8qIG9sZCBJRSAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7IC8qIE1vZGVybiBCcm93c2VycyAqL1xyXG59XHJcblxyXG5odG1sLCBib2R5IHtcclxuICBvdmVyZmxvdy14OiBoaWRkZW4haW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogZ3JheTtcclxufVxyXG4iLCJAaW1wb3J0IFwifnNyYy9zdHlsZXMuc2Nzc1wiO1xyXG5cclxuLmRpc3BsYXktY2FyZCB7XHJcbiAgaGVpZ2h0OiA0OXZoO1xyXG4gIHdpZHRoOiAyM3Z3O1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWltYWdlIHtcclxuICBoZWlnaHQ6IDY1JTtcclxuICB3aWR0aDoxMDA7XHJcbiAgZm9udC1zaXplOiA3MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogJGxpZ2h0LWdyYXktY29sb3I7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGxpZ2h0LWdyYXktY29sb3I7XHJcbn1cclxuXHJcblxyXG4uY2FyZC1pbmZvIHtcclxuICBoZWlnaHQ6IDM1JTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NywgMTg3LCAxODcsIDAuMjQ1KTtcclxufVxyXG5cclxuLmNhcmQtcm93IHtcclxuICBoZWlnaHQ6IDMwJTtcclxuICBwYWRkaW5nLXRvcDogNCU7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICBjb2xvcjogJGxldHRlci1jb2xvcjtcclxufVxyXG5cclxuLmNhcmQtY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICBjb2xvcjogJGxldHRlci1jb2xvcjtcclxufVxyXG5cclxuLmNhcmQtbW9yZS1pbmZvIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgY29sb3I6ICRsZXR0ZXItY29sb3I7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/ui/components/display-card/display-card.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/ui/components/display-card/display-card.component.ts ***!
  \******************************************************************************/
/*! exports provided: DisplayCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayCardComponent", function() { return DisplayCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DisplayCardComponent = /** @class */ (function () {
    function DisplayCardComponent() {
    }
    DisplayCardComponent.prototype.isUrl = function () {
        var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        var regex = new RegExp(expression);
        if (this.description) {
            return this.description.match(regex);
        }
        else {
            return false;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DisplayCardComponent.prototype, "imageLink", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DisplayCardComponent.prototype, "altImageTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DisplayCardComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DisplayCardComponent.prototype, "description", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DisplayCardComponent.prototype, "moreInfoLink", void 0);
    DisplayCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-display-card',
            template: __webpack_require__(/*! ./display-card.component.html */ "./src/app/modules/ui/components/display-card/display-card.component.html"),
            styles: [__webpack_require__(/*! ./display-card.component.scss */ "./src/app/modules/ui/components/display-card/display-card.component.scss")]
        })
    ], DisplayCardComponent);
    return DisplayCardComponent;
}());



/***/ }),

/***/ "./src/app/modules/ui/components/footer/footer.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/ui/components/footer/footer.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer d-flex align-items-center\">\r\n  <div class=\"footer-content\">\r\n    <i class=\"fa fa-github giticon\" aria-hidden=\"true\"></i> &nbsp;\r\n    <a href=\"https://github.com/alexRasi/The-History-of-Formula-One\">https://github.com/alexRasi/The-History-of-Formula-One</a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/ui/components/footer/footer.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/ui/components/footer/footer.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  border: none;\n  height: 2px;\n  /* Set the hr color */\n  color: #333;\n  /* old IE */\n  background-color: #333;\n  /* Modern Browsers */ }\n\nhtml, body {\n  overflow-x: hidden !important;\n  width: 100vw;\n  height: 100vh; }\n\na {\n  color: gray; }\n\n.footer {\n  background-color: white;\n  width: 100%;\n  padding-left: 15vw;\n  font-size: 10px;\n  font-weight: bold;\n  height: 8vh;\n  border-top: 1px solid rgba(187, 187, 187, 0.5); }\n\n.footer a {\n    color: gray; }\n\n.footer .giticon {\n    font-size: 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91aS9jb21wb25lbnRzL2Zvb3Rlci9DOlxcVXNlcnNcXGEucmFzaWRha2lzXFxEb2N1bWVudHNcXFRoZS1IaXN0b3J5LW9mLUZvcm11bGEtT25lXFxUaGVIaXN0b3J5T2ZGb3JtdWxhT25lL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvdWkvY29tcG9uZW50cy9mb290ZXIvQzpcXFVzZXJzXFxhLnJhc2lkYWtpc1xcRG9jdW1lbnRzXFxUaGUtSGlzdG9yeS1vZi1Gb3JtdWxhLU9uZVxcVGhlSGlzdG9yeU9mRm9ybXVsYU9uZS9zcmNcXGFwcFxcbW9kdWxlc1xcdWlcXGNvbXBvbmVudHNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxxQkFBQTtFQUNBLFdBQVc7RUFBRSxXQUFBO0VBQ2Isc0JBQXNCO0VBQUUsb0JBQUEsRUFBcUI7O0FBRy9DO0VBQ0UsNkJBQTRCO0VBQzVCLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxXQUFXLEVBQUE7O0FDeEJiO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxrQkRMc0I7RUNNdEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsOENEUHlDLEVBQUE7O0FDQTNDO0lBU0ksV0FBVyxFQUFBOztBQVRmO0lBYUksY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91aS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcGFnZS1zaWRlLXBhZGRpbmc6IDE1dnc7XHJcblxyXG4kbGlnaHQtZ3JheS1jb2xvcjogcmdiYSgxODcsIDE4NywgMTg3LCAwLjUpO1xyXG5cclxuJGJvcmRlci1jb2xvcjogJGxpZ2h0LWdyYXktY29sb3I7XHJcblxyXG4kc21hbGwtdGl0bGUtZm9udC1zaXplOiAyMHB4O1xyXG4kYmlnLXRpdGxlLWZvbnQtc2l6ZTogNzBweDtcclxuXHJcbiRsZXR0ZXItY29sb3I6ICMxMDE3MkM7XHJcblxyXG5ociB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIC8qIFNldCB0aGUgaHIgY29sb3IgKi9cclxuICBjb2xvcjogIzMzMzsgLyogb2xkIElFICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzsgLyogTW9kZXJuIEJyb3dzZXJzICovXHJcbn1cclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbiFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcbiIsIkBpbXBvcnQgXCJ+c3JjL3N0eWxlcy5zY3NzXCI7XHJcblxyXG4uZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLWxlZnQ6ICRwYWdlLXNpZGUtcGFkZGluZztcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgaGVpZ2h0OiA4dmg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRsaWdodC1ncmF5LWNvbG9yO1xyXG4gIGEge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgfVxyXG5cclxuICAuZ2l0aWNvbiB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/ui/components/footer/footer.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/ui/components/footer/footer.component.ts ***!
  \******************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/modules/ui/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/modules/ui/components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/modules/ui/components/home-page/home-page.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/ui/components/home-page/home-page.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"image\"></div>\r\n"

/***/ }),

/***/ "./src/app/modules/ui/components/home-page/home-page.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/ui/components/home-page/home-page.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image {\n  background-image: url('home-image.jpg');\n  height: 85vh;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91aS9jb21wb25lbnRzL2hvbWUtcGFnZS9DOlxcVXNlcnNcXGEucmFzaWRha2lzXFxEb2N1bWVudHNcXFRoZS1IaXN0b3J5LW9mLUZvcm11bGEtT25lXFxUaGVIaXN0b3J5T2ZGb3JtdWxhT25lL3NyY1xcYXBwXFxtb2R1bGVzXFx1aVxcY29tcG9uZW50c1xcaG9tZS1wYWdlXFxob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBbUQ7RUFFbkQsWUFBWTtFQUVaLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3VpL2NvbXBvbmVudHMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwifnNyYy9hc3NldHMvaG9tZS1pbWFnZS5qcGdcIik7XHJcblxyXG4gIGhlaWdodDogODV2aDtcclxuXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/ui/components/home-page/home-page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/ui/components/home-page/home-page.component.ts ***!
  \************************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/modules/ui/components/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/modules/ui/components/home-page/home-page.component.scss")]
        })
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/modules/ui/components/item-display-page/item-display-page.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/ui/components/item-display-page/item-display-page.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"pageData\">\r\n  <app-title-component [mainTitle]=\"pageData?.title\" [titleAbove]=\"pageData?.titleAbove\"\r\n    [titleBelow]=\"pageData?.titleBelow\"></app-title-component>\r\n  <div class=\"container item-display d-flex\">\r\n    <div class=\"col-sm-12 col-md-6 item-details\">\r\n      <h3 class=\"details-title\">Details:</h3>\r\n      <div class=\"d-flex detail\" *ngFor=\"let detail of pageData?.details\">\r\n        <div class=\"details-attribute\">{{detail?.attribute}}</div>\r\n        :&nbsp;\r\n        <div class=\"details-value\">{{detail?.value}}</div>\r\n      </div>\r\n      <p class=\"mt-4 description-container\">\r\n        <span class=\"description\" *ngIf=\"isUrl()\"><a [href]=\"pageData?.description\">{{pageData?.description}}</a></span>\r\n        <span class=\"description\" *ngIf=\"!isUrl()\">{{pageData?.description}}</span>\r\n      </p>\r\n    </div>\r\n    <div class=\"col-sm-12 col-md-6 item-image d-flex justify-content-center align-items-center\">\r\n      <div>\r\n        <i class=\"image fa fa-picture-o\" aria-hidden=\"true\"></i>\r\n      </div>\r\n    </div>\r\n    <div>\r\n\r\n\r\n\r\n\r\n\r\n      <!-- MODAL UI MOCKS NEED REFACTOR -->\r\n      <!-- TODO: Generic form component should be created and given as ng-contend inside the modal -->\r\n      <!-- ################################################################################################# -->\r\n      <div class=\"more-info pt-5\">\r\n        <h5><strong>Mocked input form 1</strong></h5>\r\n        <div class=\"d-flex\">\r\n          <div class=\"more-info-box mr-4\">\r\n            Lorem\r\n          </div>\r\n          <div class=\"more-info-box mr-4\">\r\n            Ipsum\r\n          </div>\r\n          <div class=\"more-info-box mr-4\">\r\n            Dolor\r\n          </div>\r\n          <div class=\"more-info-box mr-4\" (click)=\"modalMockVisibility=!modalMockVisibility\">\r\n            ...\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"more-info pt-5 mb-5\">\r\n        <h5><strong>Mocked input form 2</strong></h5>\r\n        <div class=\"d-flex\">\r\n          <div class=\"more-info-box mr-4\">\r\n            Lorem\r\n          </div>\r\n          <div class=\"more-info-box mr-4\">\r\n            Ipsum\r\n          </div>\r\n          <div class=\"more-info-box mr-4\">\r\n            Dolor\r\n          </div>\r\n          <div class=\"more-info-box mr-4\" (click)=\"modalMock2Visibility=!modalMock2Visibility\">\r\n            ...\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-modal *ngIf=\"modalMockVisibility\">\r\n    <div class=\"item-form pt-5 pl-5 pr-5 pb-2\">\r\n      <div class=\"item-form-title mt-2 mb-4\">\r\n        <h5><strong>Add Driver</strong></h5>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-12 mb-3\">\r\n          <label class=\"item-input-label col-12 p-0\">Name</label>\r\n          <input class=\"item-form-input col-12\" placeholder=\"Name\">\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 mb-3\">\r\n          <label class=\"item-input-label col-12 p-0\">Height</label>\r\n          <input class=\"item-form-input\" placeholder=\"Meters\">\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 mb-3\">\r\n          <label class=\"item-input-label col-12 p-0\">Weight</label>\r\n          <input class=\"item-form-input\" placeholder=\"Kg\">\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 mb-3\">\r\n          <label class=\"item-input-label col-12 p-0\">Hair Color</label>\r\n          <input class=\"item-form-input\" placeholder=\"Hair Color\">\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 mb-3\">\r\n          <label class=\"item-input-label col-12 p-0\">Nationality</label>\r\n          <select class=\"form-control item-form-input\">\r\n            <option>Nationality 1</option>\r\n            <option>Nationality 2</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 mb-3\">\r\n          <label class=\"item-input-label col-12 p-0\">Year of Birth</label>\r\n          <input class=\"item-form-input\" placeholder=\"YYYY\">\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 mb-3\">\r\n          <label class=\"item-input-label col-12 p-0\">Gender</label>\r\n          <select class=\"form-control item-form-input\">\r\n            <option>Male</option>\r\n            <option>Female</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-12 mb-3 row d-flex p-0 flex-row-reverse mt-3\">\r\n          <div (click)=\"modalMockVisibility=!modalMockVisibility\"\r\n            class=\"item-form-confirm-button d-flex justify-content-center align-items-center\">\r\n            Confirm\r\n          </div>\r\n          <div (click)=\"modalMockVisibility=!modalMockVisibility\"\r\n            class=\"item-form-cancel-button d-flex justify-content-center align-items-center mr-4\">\r\n            Cancel</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </app-modal>\r\n  <app-modal *ngIf=\"modalMock2Visibility\">\r\n    <div class=\"item-form pt-5 pl-5 pr-5 pb-2\">\r\n      <div class=\"item-form-title mt-2 mb-4\">\r\n        <h5><strong>Add Constructor</strong></h5>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-12 mb-3\">\r\n          <label class=\"item-input-label col-12 p-0\">Name</label>\r\n          <input class=\"item-form-input col-12\" placeholder=\"Name\">\r\n        </div>\r\n        <div class=\"col-12 mb-3\">\r\n          <label class=\"item-input-label col-12 p-0\">Type</label>\r\n          <select class=\"form-control item-form-input\">\r\n            <option>Type 1</option>\r\n            <option>Type 2</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-12 mb-3\">\r\n          <label class=\"item-input-label col-12 p-0\">Year started</label>\r\n          <select class=\"form-control item-form-input\">\r\n            <option>1970</option>\r\n            <option>1971</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 mb-3\">\r\n          <label class=\"item-input-label col-12 p-0\">Founder</label>\r\n          <input class=\"item-form-input\" placeholder=\"Full Name\">\r\n        </div>\r\n        <div class=\"col-12 mb-3\">\r\n          <label class=\"item-input-label col-12 p-0\">Description</label>\r\n          <input class=\"item-form-input textarea\" placeholder=\"Write a description\">\r\n        </div>\r\n        <div class=\"col-12 mb-3 row d-flex p-0 flex-row-reverse mt-3\">\r\n          <div (click)=\"modalMock2Visibility=!modalMock2Visibility\"\r\n            class=\"item-form-confirm-button d-flex justify-content-center align-items-center\">\r\n            Confirm\r\n          </div>\r\n          <div (click)=\"modalMock2Visibility=!modalMock2Visibility\"\r\n            class=\"item-form-cancel-button d-flex justify-content-center align-items-center mr-4\">\r\n            Cancel</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </app-modal>\r\n</div>\r\n<!-- ################################################################################################# -->\r\n"

/***/ }),

/***/ "./src/app/modules/ui/components/item-display-page/item-display-page.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/ui/components/item-display-page/item-display-page.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  border: none;\n  height: 2px;\n  /* Set the hr color */\n  color: #333;\n  /* old IE */\n  background-color: #333;\n  /* Modern Browsers */ }\n\nhtml, body {\n  overflow-x: hidden !important;\n  width: 100vw;\n  height: 100vh; }\n\na {\n  color: gray; }\n\n:host {\n  min-height: 85vh; }\n\n.item-display {\n  width: 100vw;\n  margin-top: 3%;\n  padding-left: 15vw;\n  padding-right: 15vw;\n  max-width: 100vw;\n  flex-wrap: wrap; }\n\n.details-attribute {\n  font-weight: bold;\n  font-size: 15px; }\n\n.details-value {\n  font-size: 15px; }\n\n.details-title {\n  font-size: 19px;\n  font-weight: bold;\n  letter-spacing: 0px;\n  color: #10172C; }\n\n.description-container {\n  font-size: 14px; }\n\n.description {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 100%;\n  display: block;\n  overflow: hidden; }\n\n.more-info-box {\n  background-color: rgba(238, 238, 238, 0.502);\n  padding: 15px;\n  font-weight: bold;\n  font-size: 12px;\n  cursor: pointer; }\n\n.item-image {\n  background-color: black;\n  height: 35vh;\n  font-size: 100px;\n  color: white;\n  opacity: 0.8; }\n\n.item-form-confirm-button {\n  background-color: #10172C;\n  color: white;\n  border-radius: 2px;\n  height: 5vh;\n  width: 10vw;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0px;\n  cursor: pointer; }\n\n.item-form-cancel-button {\n  background-color: #F1F1F1;\n  border-radius: 2px;\n  height: 5vh;\n  width: 7vw;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0px;\n  color: #00305A;\n  cursor: pointer; }\n\n.item-form {\n  width: 31vw;\n  background-color: white;\n  box-shadow: 2px 6px 12px #00000059;\n  margin-bottom: 5%;\n  overflow: auto; }\n\n.item-form input, .item-form select {\n    width: 100%;\n    letter-spacing: 0px;\n    color: #969696;\n    font-size: 12px;\n    padding-left: 10px; }\n\n.item-form select {\n    background-color: white;\n    color: #00305A; }\n\n.item-form-title {\n  text-align: center;\n  font-weight: 900; }\n\n.item-form-input {\n  border: 1px solid #D0D0D080;\n  background-color: #F1F1F180;\n  height: 5vh; }\n\n.item-input-label {\n  letter-spacing: 0px;\n  color: #00305A;\n  font-size: 12px;\n  font-weight: bold;\n  margin-right: 10px; }\n\n.textarea {\n  height: 12vh;\n  padding-top: 2%;\n  padding-bottom: 10%; }\n\n@media screen and (max-width: 768px) {\n  .item-display {\n    padding: 2px; }\n  .more-info {\n    padding-left: 5px; }\n  .item-form-confirm-button {\n    width: 20vw; }\n  .item-form-cancel-button {\n    width: 20vw; }\n  .item-form-input {\n    border: 1px solid #D0D0D080;\n    background-color: #F1F1F180;\n    height: 5vh;\n    width: 100%; }\n  .item-form {\n    height: 97vh;\n    width: 95vw;\n    margin: 0;\n    padding: 15px !important; } }\n\n@media screen and (max-width: 1280px) {\n  .item-form {\n    height: 80vh;\n    width: 70vw;\n    margin: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91aS9jb21wb25lbnRzL2l0ZW0tZGlzcGxheS1wYWdlL0M6XFxVc2Vyc1xcYS5yYXNpZGFraXNcXERvY3VtZW50c1xcVGhlLUhpc3Rvcnktb2YtRm9ybXVsYS1PbmVcXFRoZUhpc3RvcnlPZkZvcm11bGFPbmUvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy91aS9jb21wb25lbnRzL2l0ZW0tZGlzcGxheS1wYWdlL0M6XFxVc2Vyc1xcYS5yYXNpZGFraXNcXERvY3VtZW50c1xcVGhlLUhpc3Rvcnktb2YtRm9ybXVsYS1PbmVcXFRoZUhpc3RvcnlPZkZvcm11bGFPbmUvc3JjXFxhcHBcXG1vZHVsZXNcXHVpXFxjb21wb25lbnRzXFxpdGVtLWRpc3BsYXktcGFnZVxcaXRlbS1kaXNwbGF5LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHFCQUFBO0VBQ0EsV0FBVztFQUFFLFdBQUE7RUFDYixzQkFBc0I7RUFBRSxvQkFBQSxFQUFxQjs7QUFHL0M7RUFDRSw2QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFdBQVcsRUFBQTs7QUN4QmI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGtCRFRzQjtFQ1V0QixtQkRWc0I7RUNZdEIsZ0JBQWdCO0VBRWhCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixjRHJCb0IsRUFBQTs7QUN3QnRCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFDRixFQUFBOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFHakI7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUdkO0VBQ0UseUJBQTBCO0VBQzFCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UseUJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFMaEI7SUFPSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCLEVBQUE7O0FBWHRCO0lBZUksdUJBQXVCO0lBQ3ZCLGNBQWMsRUFBQTs7QUFJbEI7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsMkJBQTJCO0VBQzNCLDJCQUEyQjtFQUMzQixXQUFXLEVBQUE7O0FBR2I7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRTtJQUNFLFlBQVcsRUFBQTtFQUdiO0lBQ0UsaUJBQWlCLEVBQUE7RUFHbkI7SUFDRSxXQUFXLEVBQUE7RUFHYjtJQUNFLFdBQVcsRUFBQTtFQUdiO0lBQ0UsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsV0FDRixFQUFBO0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVE7SUFDUix3QkFBdUIsRUFBQSxFQUN4Qjs7QUFHSDtFQUNFO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFRLEVBQUEsRUFDVCIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWkvY29tcG9uZW50cy9pdGVtLWRpc3BsYXktcGFnZS9pdGVtLWRpc3BsYXktcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwYWdlLXNpZGUtcGFkZGluZzogMTV2dztcclxuXHJcbiRsaWdodC1ncmF5LWNvbG9yOiByZ2JhKDE4NywgMTg3LCAxODcsIDAuNSk7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAkbGlnaHQtZ3JheS1jb2xvcjtcclxuXHJcbiRzbWFsbC10aXRsZS1mb250LXNpemU6IDIwcHg7XHJcbiRiaWctdGl0bGUtZm9udC1zaXplOiA3MHB4O1xyXG5cclxuJGxldHRlci1jb2xvcjogIzEwMTcyQztcclxuXHJcbmhyIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgLyogU2V0IHRoZSBociBjb2xvciAqL1xyXG4gIGNvbG9yOiAjMzMzOyAvKiBvbGQgSUUgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzOyAvKiBNb2Rlcm4gQnJvd3NlcnMgKi9cclxufVxyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6IGdyYXk7XHJcbn1cclxuIiwiQGltcG9ydCBcIn5zcmMvc3R5bGVzLnNjc3NcIjtcclxuXHJcbjpob3N0IHtcclxuICBtaW4taGVpZ2h0OiA4NXZoO1xyXG59XHJcblxyXG4uaXRlbS1kaXNwbGF5IHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgbWFyZ2luLXRvcDogMyU7XHJcbiAgcGFkZGluZy1sZWZ0OiAkcGFnZS1zaWRlLXBhZGRpbmc7XHJcbiAgcGFkZGluZy1yaWdodDogJHBhZ2Utc2lkZS1wYWRkaW5nO1xyXG5cclxuICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG5cclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5kZXRhaWxzLWF0dHJpYnV0ZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4uZGV0YWlscy12YWx1ZSB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4uZGV0YWlscy10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgY29sb3I6ICRsZXR0ZXItY29sb3I7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi1jb250YWluZXIge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG92ZXJmbG93OiBoaWRkZW5cclxufVxyXG5cclxuLm1vcmUtaW5mby1ib3gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM4LCAyMzgsIDIzOCwgMC41MDIpO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLml0ZW0taW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGhlaWdodDogMzV2aDtcclxuICBmb250LXNpemU6IDEwMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5pdGVtLWZvcm0tY29uZmlybS1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDE3MkMgO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgaGVpZ2h0OiA1dmg7XHJcbiAgd2lkdGg6IDEwdnc7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaXRlbS1mb3JtLWNhbmNlbC1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUYxRjEgO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBoZWlnaHQ6IDV2aDtcclxuICB3aWR0aDogN3Z3O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gIGNvbG9yOiAjMDAzMDVBO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLml0ZW0tZm9ybSB7XHJcbiAgd2lkdGg6IDMxdnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMnB4IDZweCAxMnB4ICMwMDAwMDA1OTtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBpbnB1dCwgc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIGNvbG9yOiAjOTY5Njk2O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6ICMwMDMwNUE7XHJcbiAgfVxyXG59XHJcblxyXG4uaXRlbS1mb3JtLXRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuLml0ZW0tZm9ybS1pbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0QwRDBEMDgwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUYxRjE4MDtcclxuICBoZWlnaHQ6IDV2aDtcclxufVxyXG5cclxuLml0ZW0taW5wdXQtbGFiZWwge1xyXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgY29sb3I6ICMwMDMwNUE7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnRleHRhcmVhIHtcclxuICBoZWlnaHQ6IDEydmg7XHJcbiAgcGFkZGluZy10b3A6IDIlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLml0ZW0tZGlzcGxheSB7XHJcbiAgICBwYWRkaW5nOjJweDtcclxuICB9XHJcblxyXG4gIC5tb3JlLWluZm8ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgfVxyXG5cclxuICAuaXRlbS1mb3JtLWNvbmZpcm0tYnV0dG9uIHtcclxuICAgIHdpZHRoOiAyMHZ3O1xyXG4gIH1cclxuXHJcbiAgLml0ZW0tZm9ybS1jYW5jZWwtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAyMHZ3O1xyXG4gIH1cclxuXHJcbiAgLml0ZW0tZm9ybS1pbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDBEMEQwODA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMUYxODA7XHJcbiAgICBoZWlnaHQ6IDV2aDtcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgfVxyXG5cclxuICAuaXRlbS1mb3JtIHtcclxuICAgIGhlaWdodDogOTd2aDtcclxuICAgIHdpZHRoOiA5NXZ3O1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBwYWRkaW5nOiAxNXB4IWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gIC5pdGVtLWZvcm0ge1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgd2lkdGg6IDcwdnc7XHJcbiAgICBtYXJnaW46MDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/ui/components/item-display-page/item-display-page.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/ui/components/item-display-page/item-display-page.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ItemDisplayPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDisplayPageComponent", function() { return ItemDisplayPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_loading_spinner_service_loading_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/loading-spinner-service/loading-spinner.service */ "./src/app/modules/ui/services/loading-spinner-service/loading-spinner.service.ts");
/* harmony import */ var src_app_modules_cache_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/cache/cache.service */ "./src/app/modules/cache/cache.service.ts");





var ItemDisplayPageComponent = /** @class */ (function () {
    function ItemDisplayPageComponent(route, injector, loadingSpinnerService, cacheService, router) {
        this.route = route;
        this.loadingSpinnerService = loadingSpinnerService;
        this.cacheService = cacheService;
        this.router = router;
        this.queryParameter = this.route.snapshot.paramMap.get('id');
        this.modalMockVisibility = false;
        this.modalMock2Visibility = false;
        // Injecting the data subclass fetching service provided during routing
        this.serviceToken = route.snapshot.data['requiredServiceToken'];
        this.dataFetchingService = injector.get(this.serviceToken);
    }
    ItemDisplayPageComponent.prototype.ngOnInit = function () {
        this.scrollOnTop();
        var cacheName = this.queryParameter ? (this.serviceToken['_desc'] + this.queryParameter) : this.serviceToken['_desc'];
        this.cache = this.cacheService.getCache(cacheName); // serviceToken = entity name
        if (!this.cache) {
            this.cache = this.cacheService.newCache(cacheName);
        }
        if (this.isEmptyObject(this.cache)) {
            this.loadData();
        }
        else {
            this.pageData = this.cache;
        }
    };
    ItemDisplayPageComponent.prototype.loadData = function () {
        var _this = this;
        this.loadingSpinnerService.showSpinner();
        this.dataFetchingService.getTransformedData(this.route.snapshot.paramMap.get('id')).subscribe(function (data) {
            _this.pageData = data;
            Object.assign(_this.cache, data);
            _this.loadingSpinnerService.hideSpinner();
        }, function (error) {
            _this.navigateOnPageNotFound();
            _this.loadingSpinnerService.hideSpinner();
        });
    };
    ItemDisplayPageComponent.prototype.isUrl = function () {
        var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        var regex = new RegExp(expression);
        if (this.pageData && this.pageData.description) {
            return this.pageData.description.match(regex);
        }
        else {
            return false;
        }
    };
    ItemDisplayPageComponent.prototype.navigateOnPageNotFound = function () {
        this.router.navigateByUrl('/page-not-found');
    };
    ItemDisplayPageComponent.prototype.scrollOnTop = function () {
        document.body.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };
    ItemDisplayPageComponent.prototype.isEmptyObject = function (obj) {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    };
    ItemDisplayPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-display-page',
            template: __webpack_require__(/*! ./item-display-page.component.html */ "./src/app/modules/ui/components/item-display-page/item-display-page.component.html"),
            styles: [__webpack_require__(/*! ./item-display-page.component.scss */ "./src/app/modules/ui/components/item-display-page/item-display-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _services_loading_spinner_service_loading_spinner_service__WEBPACK_IMPORTED_MODULE_3__["LoadingSpinnerService"],
            src_app_modules_cache_cache_service__WEBPACK_IMPORTED_MODULE_4__["CacheService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ItemDisplayPageComponent);
    return ItemDisplayPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/ui/components/modal/modal.component.html":
/*!******************************************************************!*\
  !*** ./src/app/modules/ui/components/modal/modal.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"modal-overlay\">\r\n    <ng-content></ng-content>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/ui/components/modal/modal.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/modules/ui/components/modal/modal.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-overlay {\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: auto;\n  /* Enable scroll if needed */\n  backdrop-filter: blur(30px);\n  -webkit-backdrop-filter: blur(30px);\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91aS9jb21wb25lbnRzL21vZGFsL0M6XFxVc2Vyc1xcYS5yYXNpZGFraXNcXERvY3VtZW50c1xcVGhlLUhpc3Rvcnktb2YtRm9ybXVsYS1PbmVcXFRoZUhpc3RvcnlPZkZvcm11bGFPbmUvc3JjXFxhcHBcXG1vZHVsZXNcXHVpXFxjb21wb25lbnRzXFxtb2RhbFxcbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLE9BQU87RUFDUCxNQUFNO0VBQ04sWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQUUsNEJBQUE7RUFDaEIsMkJBQTJCO0VBQzNCLG1DQUFtQztFQUNuQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91aS9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMHB4KTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigzMHB4KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/ui/components/modal/modal.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/ui/components/modal/modal.component.ts ***!
  \****************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
    }
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/modules/ui/components/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/modules/ui/components/modal/modal.component.scss")]
        })
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/ui/components/nav-item/nav-item.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/ui/components/nav-item/nav-item.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"link\" [ngClass]=\"{'active': isActive}\">{{title}}</a>\r\n"

/***/ }),

/***/ "./src/app/modules/ui/components/nav-item/nav-item.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/ui/components/nav-item/nav-item.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  font-family: 'Roboto';\n  font-size: 12px;\n  line-height: 26px;\n  letter-spacing: 0px;\n  color: #10172C;\n  text-decoration: none;\n  cursor: pointer; }\n\n.active {\n  border-bottom: 1px solid #10172C;\n  padding-bottom: 2px; }\n\n@media screen and (max-width: 600px) {\n  a {\n    font-size: 24px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91aS9jb21wb25lbnRzL25hdi1pdGVtL0M6XFxVc2Vyc1xcYS5yYXNpZGFraXNcXERvY3VtZW50c1xcVGhlLUhpc3Rvcnktb2YtRm9ybXVsYS1PbmVcXFRoZUhpc3RvcnlPZkZvcm11bGFPbmUvc3JjXFxhcHBcXG1vZHVsZXNcXHVpXFxjb21wb25lbnRzXFxuYXYtaXRlbVxcbmF2LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZ0NBQWdDO0VBQ2hDLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFO0lBQ0UsMEJBQXlCLEVBQUEsRUFDMUIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3VpL2NvbXBvbmVudHMvbmF2LWl0ZW0vbmF2LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgY29sb3I6ICMxMDE3MkM7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxMDE3MkM7XHJcbiAgcGFkZGluZy1ib3R0b206IDJweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICBhIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/ui/components/nav-item/nav-item.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/ui/components/nav-item/nav-item.component.ts ***!
  \**********************************************************************/
/*! exports provided: NavItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItemComponent", function() { return NavItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var NavItemComponent = /** @class */ (function () {
    function NavItemComponent(router) {
        this.router = router;
    }
    NavItemComponent.prototype.ngOnInit = function () {
        this.checkRouteAndSetAsActive();
    };
    NavItemComponent.prototype.checkRouteAndSetAsActive = function () {
        var _this = this;
        this.router.events.subscribe(function (val) {
            if (val['url']) {
                var url = val['url'];
                _this.isActive = url.includes(_this.title.toLocaleLowerCase()) ? true : false;
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NavItemComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NavItemComponent.prototype, "link", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NavItemComponent.prototype, "isActive", void 0);
    NavItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-nav-item',
            template: __webpack_require__(/*! ./nav-item.component.html */ "./src/app/modules/ui/components/nav-item/nav-item.component.html"),
            styles: [__webpack_require__(/*! ./nav-item.component.scss */ "./src/app/modules/ui/components/nav-item/nav-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavItemComponent);
    return NavItemComponent;
}());



/***/ }),

/***/ "./src/app/modules/ui/components/navbar/navbar.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/ui/components/navbar/navbar.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-light nav-padding \">\r\n  <a class=\"navbar-brand pr-4\" [routerLink]=\"'/home'\" >\r\n   <i style=\"font-size: 2rem\" class=\"fa fa-car\" aria-hidden=\"true\"></i> F1 History\r\n  </a>\r\n  <button type=\"button\" class=\"navbar-toggle collapsed\" (click)=\"isCollapsed = !isCollapsed\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"navbar-collapse collapse no-transition\" [attr.aria-expanded]=\"!isCollapsed\" [ngClass]=\"{collapse: isCollapsed}\" id=\"navbarContent\">\r\n    <div class=\"col-6 d-flex p-0\">\r\n      <ul class=\"navbar-nav col-12\">\r\n        <li *ngFor=\"let item of navItems\" class=\"mr-3 ml-3\">\r\n          <app-nav-item\r\n            [title]=item.title\r\n            [link]=item.link\r\n            [isActive]=isNavItemActive(item.id)\r\n            (click)=\"isCollapsed = !isCollapsed\"\r\n        ></app-nav-item>\r\n    </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"nav-search col-md-6 col-sm-12 d-flex justify-content-center\">\r\n      <app-search-input></app-search-input>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/modules/ui/components/navbar/navbar.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/ui/components/navbar/navbar.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  border: none;\n  height: 2px;\n  /* Set the hr color */\n  color: #333;\n  /* old IE */\n  background-color: #333;\n  /* Modern Browsers */ }\n\nhtml, body {\n  overflow-x: hidden !important;\n  width: 100vw;\n  height: 100vh; }\n\na {\n  color: gray; }\n\n.nav-padding {\n  padding-left: 15vw; }\n\n.navbar {\n  height: 12vh;\n  border-bottom: 1px solid rgba(187, 187, 187, 0.5);\n  margin: 1%; }\n\n.navbar-collapse {\n  background-color: white;\n  z-index: 1; }\n\n.navbar-toggle {\n  display: none; }\n\n@media screen and (max-width: 600px) {\n  li {\n    font-size: 24px !important;\n    font-weight: bold;\n    margin-top: 10px;\n    margin-bottom: 10px; }\n  .navbar {\n    border-bottom: 1px solid rgba(187, 187, 187, 0.5);\n    margin: 1%; }\n  .navbar-collapse {\n    border: 1px solid rgba(187, 187, 187, 0.5); }\n  .navbar-toggle {\n    display: block; }\n  .nav-search {\n    margin-top: 15px;\n    margin-bottom: 15px; } }\n\n.li {\n  position: relative; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91aS9jb21wb25lbnRzL25hdmJhci9DOlxcVXNlcnNcXGEucmFzaWRha2lzXFxEb2N1bWVudHNcXFRoZS1IaXN0b3J5LW9mLUZvcm11bGEtT25lXFxUaGVIaXN0b3J5T2ZGb3JtdWxhT25lL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvdWkvY29tcG9uZW50cy9uYXZiYXIvQzpcXFVzZXJzXFxhLnJhc2lkYWtpc1xcRG9jdW1lbnRzXFxUaGUtSGlzdG9yeS1vZi1Gb3JtdWxhLU9uZVxcVGhlSGlzdG9yeU9mRm9ybXVsYU9uZS9zcmNcXGFwcFxcbW9kdWxlc1xcdWlcXGNvbXBvbmVudHNcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxxQkFBQTtFQUNBLFdBQVc7RUFBRSxXQUFBO0VBQ2Isc0JBQXNCO0VBQUUsb0JBQUEsRUFBcUI7O0FBRy9DO0VBQ0UsNkJBQTRCO0VBQzVCLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxXQUFXLEVBQUE7O0FDeEJiO0VBQ0Usa0JESHNCLEVBQUE7O0FDTXhCO0VBQ0UsWUFBWTtFQUNaLGlERE55QztFQ096QyxVQUFVLEVBQUE7O0FBR1o7RUFDRSx1QkFBdUI7RUFDdkIsVUFBVSxFQUFBOztBQUdaO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0U7SUFDRSwwQkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBQTtFQUVyQjtJQUNFLGlERDNCdUM7SUM0QnZDLFVBQVUsRUFBQTtFQUdaO0lBQ0UsMENEaEN1QyxFQUFBO0VDbUN6QztJQUNFLGNBQWMsRUFBQTtFQUdoQjtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBQSxFQUNwQjs7QUFHSDtFQUNFLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91aS9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcGFnZS1zaWRlLXBhZGRpbmc6IDE1dnc7XHJcblxyXG4kbGlnaHQtZ3JheS1jb2xvcjogcmdiYSgxODcsIDE4NywgMTg3LCAwLjUpO1xyXG5cclxuJGJvcmRlci1jb2xvcjogJGxpZ2h0LWdyYXktY29sb3I7XHJcblxyXG4kc21hbGwtdGl0bGUtZm9udC1zaXplOiAyMHB4O1xyXG4kYmlnLXRpdGxlLWZvbnQtc2l6ZTogNzBweDtcclxuXHJcbiRsZXR0ZXItY29sb3I6ICMxMDE3MkM7XHJcblxyXG5ociB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIC8qIFNldCB0aGUgaHIgY29sb3IgKi9cclxuICBjb2xvcjogIzMzMzsgLyogb2xkIElFICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzsgLyogTW9kZXJuIEJyb3dzZXJzICovXHJcbn1cclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbiFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcbiIsIkBpbXBvcnQgXCJ+c3JjL3N0eWxlcy5zY3NzXCI7XHJcblxyXG4ubmF2LXBhZGRpbmcge1xyXG4gIHBhZGRpbmctbGVmdDogJHBhZ2Utc2lkZS1wYWRkaW5nO1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICBoZWlnaHQ6IDEydmg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgbWFyZ2luOiAxJTtcclxufVxyXG5cclxuLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLm5hdmJhci10b2dnbGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgbGkge1xyXG4gICAgZm9udC1zaXplOiAyNHB4IWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIC5uYXZiYXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci10b2dnbGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAubmF2LXNlYXJjaCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbi5saSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/ui/components/navbar/navbar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/ui/components/navbar/navbar.component.ts ***!
  \******************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../environments/config */ "./src/environments/config.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.navItems = _environments_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].navItems;
        this.isCollapsed = true;
    }
    NavbarComponent.prototype.isNavItemActive = function (itemID) {
        return itemID === this.activeNavItemID;
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/modules/ui/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/modules/ui/components/navbar/navbar.component.scss")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/modules/ui/components/page-not-found/page-not-found.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/ui/components/page-not-found/page-not-found.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-title-component [mainTitle]=\"title\" [titleAbove]=\"aboveTitle\"></app-title-component>\r\n<div class=\"content d-flex justify-content-center\">\r\n    <div>\r\n      <a [routerLink]=\"['/home']\">Return to Home</a>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/ui/components/page-not-found/page-not-found.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/ui/components/page-not-found/page-not-found.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  height: 78vh;\n  width: 100vw; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91aS9jb21wb25lbnRzL3BhZ2Utbm90LWZvdW5kL0M6XFxVc2Vyc1xcYS5yYXNpZGFraXNcXERvY3VtZW50c1xcVGhlLUhpc3Rvcnktb2YtRm9ybXVsYS1PbmVcXFRoZUhpc3RvcnlPZkZvcm11bGFPbmUvc3JjXFxhcHBcXG1vZHVsZXNcXHVpXFxjb21wb25lbnRzXFxwYWdlLW5vdC1mb3VuZFxccGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91aS9jb21wb25lbnRzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gIGhlaWdodDogNzh2aDtcclxuICB3aWR0aDogMTAwdnc7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/ui/components/page-not-found/page-not-found.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/ui/components/page-not-found/page-not-found.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
        this.title = 'This page does not exist yet';
        this.aboveTitle = 'Oops!';
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/modules/ui/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/modules/ui/components/page-not-found/page-not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/modules/ui/components/paginator/paginator.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/ui/components/paginator/paginator.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"Page navigation\">\r\n  <ul class=\"pagination\">\r\n    <li class=\"page-item\" title=\"First page\">\r\n      <a class=\"page-link\" (click)=\"goToFirstPage()\">\r\n        <i class=\"fa fa-step-backward\" aria-hidden=\"true\"></i>\r\n      </a>\r\n    </li>\r\n    <li class=\"page-item\"><a class=\"page-link\" (click)=\"previous()\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i></a></li>\r\n    <li class=\"page-item\" ><input class=\"page-link page-input w-10\" [(ngModel)]=\"currentPage\" (keyup.enter)=\"emitPageChangeByEnter()\"></li>\r\n    <li class=\"page-item\"><a class=\"page-link total-pages\">of {{totalPages}} </a></li>\r\n    <li class=\"page-item\" title=\"Next\"><a class=\"page-link next-page\" (click)=\"next()\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></a></li>\r\n    <li class=\"page-item\" title=\"Last page\">\r\n      <a class=\"page-link\" (click)=\"goToLastPage()\">\r\n        <i class=\"fa fa-step-forward\" aria-hidden=\"true\"></i>\r\n      </a></li>\r\n  </ul>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/modules/ui/components/paginator/paginator.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/ui/components/paginator/paginator.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  border: none;\n  height: 2px;\n  /* Set the hr color */\n  color: #333;\n  /* old IE */\n  background-color: #333;\n  /* Modern Browsers */ }\n\nhtml, body {\n  overflow-x: hidden !important;\n  width: 100vw;\n  height: 100vh; }\n\na {\n  color: gray; }\n\n.page-link {\n  color: #10172C !important;\n  cursor: pointer; }\n\n.page-input {\n  width: 55px !important;\n  text-align: right;\n  cursor: text; }\n\n.total-pages {\n  border-left: none;\n  word-spacing: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91aS9jb21wb25lbnRzL3BhZ2luYXRvci9DOlxcVXNlcnNcXGEucmFzaWRha2lzXFxEb2N1bWVudHNcXFRoZS1IaXN0b3J5LW9mLUZvcm11bGEtT25lXFxUaGVIaXN0b3J5T2ZGb3JtdWxhT25lL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvdWkvY29tcG9uZW50cy9wYWdpbmF0b3IvQzpcXFVzZXJzXFxhLnJhc2lkYWtpc1xcRG9jdW1lbnRzXFxUaGUtSGlzdG9yeS1vZi1Gb3JtdWxhLU9uZVxcVGhlSGlzdG9yeU9mRm9ybXVsYU9uZS9zcmNcXGFwcFxcbW9kdWxlc1xcdWlcXGNvbXBvbmVudHNcXHBhZ2luYXRvclxccGFnaW5hdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxxQkFBQTtFQUNBLFdBQVc7RUFBRSxXQUFBO0VBQ2Isc0JBQXNCO0VBQUUsb0JBQUEsRUFBcUI7O0FBRy9DO0VBQ0UsNkJBQTRCO0VBQzVCLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxXQUFXLEVBQUE7O0FDeEJiO0VBQ0UseUJBQThCO0VBQzlCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFlBQVksRUFBQTs7QUFHZDtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWkvY29tcG9uZW50cy9wYWdpbmF0b3IvcGFnaW5hdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHBhZ2Utc2lkZS1wYWRkaW5nOiAxNXZ3O1xyXG5cclxuJGxpZ2h0LWdyYXktY29sb3I6IHJnYmEoMTg3LCAxODcsIDE4NywgMC41KTtcclxuXHJcbiRib3JkZXItY29sb3I6ICRsaWdodC1ncmF5LWNvbG9yO1xyXG5cclxuJHNtYWxsLXRpdGxlLWZvbnQtc2l6ZTogMjBweDtcclxuJGJpZy10aXRsZS1mb250LXNpemU6IDcwcHg7XHJcblxyXG4kbGV0dGVyLWNvbG9yOiAjMTAxNzJDO1xyXG5cclxuaHIge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBoZWlnaHQ6IDJweDtcclxuICAvKiBTZXQgdGhlIGhyIGNvbG9yICovXHJcbiAgY29sb3I6ICMzMzM7IC8qIG9sZCBJRSAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7IC8qIE1vZGVybiBCcm93c2VycyAqL1xyXG59XHJcblxyXG5odG1sLCBib2R5IHtcclxuICBvdmVyZmxvdy14OiBoaWRkZW4haW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogZ3JheTtcclxufVxyXG4iLCJAaW1wb3J0IFwifnNyYy9zdHlsZXMuc2Nzc1wiO1xyXG5cclxuLnBhZ2UtbGluayB7XHJcbiAgY29sb3I6ICRsZXR0ZXItY29sb3IhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBhZ2UtaW5wdXQge1xyXG4gIHdpZHRoOiA1NXB4ICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgY3Vyc29yOiB0ZXh0O1xyXG59XHJcblxyXG4udG90YWwtcGFnZXMge1xyXG4gIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gIHdvcmQtc3BhY2luZzogNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/ui/components/paginator/paginator.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/ui/components/paginator/paginator.component.ts ***!
  \************************************************************************/
/*! exports provided: PaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function() { return PaginatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginatorComponent = /** @class */ (function () {
    function PaginatorComponent() {
        this.pageClickedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.currentPage = 1;
    }
    PaginatorComponent.prototype.next = function () {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
        }
        this.pageClickedEvent.emit(this.currentPage);
    };
    PaginatorComponent.prototype.previous = function () {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
        this.pageClickedEvent.emit(this.currentPage);
    };
    PaginatorComponent.prototype.goToLastPage = function () {
        this.currentPage = this.totalPages;
        this.pageClickedEvent.emit(this.currentPage);
    };
    PaginatorComponent.prototype.goToFirstPage = function () {
        this.currentPage = 1;
        this.pageClickedEvent.emit(this.currentPage);
    };
    PaginatorComponent.prototype.emitPageChangeByEnter = function () {
        if (this.currentPage > this.totalPages) {
            this.currentPage = this.totalPages;
        }
        this.pageClickedEvent.emit(this.currentPage);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PaginatorComponent.prototype, "totalPages", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PaginatorComponent.prototype, "pageClickedEvent", void 0);
    PaginatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-paginator',
            template: __webpack_require__(/*! ./paginator.component.html */ "./src/app/modules/ui/components/paginator/paginator.component.html"),
            styles: [__webpack_require__(/*! ./paginator.component.scss */ "./src/app/modules/ui/components/paginator/paginator.component.scss")]
        })
    ], PaginatorComponent);
    return PaginatorComponent;
}());



/***/ }),

/***/ "./src/app/modules/ui/components/search-input/search-input.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/ui/components/search-input/search-input.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pb-2\">\r\n  <form>\r\n    <div class=\"input-group search-input h-80\">\r\n      <input type=\"text\" disabled placeholder=\"Search under construction\" class=\"search-input form-control\" />\r\n      <div class=\"input-group-append\">\r\n        <span class=\"input-group-text\"\r\n          ><i class=\"fa fa-search\" aria-hidden=\"true\"></i\r\n        ></span>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/ui/components/search-input/search-input.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/ui/components/search-input/search-input.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  border: none;\n  height: 2px;\n  /* Set the hr color */\n  color: #333;\n  /* old IE */\n  background-color: #333;\n  /* Modern Browsers */ }\n\nhtml, body {\n  overflow-x: hidden !important;\n  width: 100vw;\n  height: 100vh; }\n\na {\n  color: gray; }\n\n.form-control {\n  height: 50px;\n  width: 220px;\n  border: 1px solid rgba(187, 187, 187, 0.5);\n  border-radius: 2px;\n  border-right: 0; }\n\n.input-group-text {\n  background-color: white;\n  border-left: 0; }\n\n.fa-search {\n  color: rgba(187, 187, 187, 0.5); }\n\n::-webkit-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: rgba(187, 187, 187, 0.5);\n  opacity: 1;\n  /* Firefox */ }\n\n::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: rgba(187, 187, 187, 0.5);\n  opacity: 1;\n  /* Firefox */ }\n\n::-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: rgba(187, 187, 187, 0.5);\n  opacity: 1;\n  /* Firefox */ }\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: rgba(187, 187, 187, 0.5);\n  opacity: 1;\n  /* Firefox */ }\n\n.search-input {\n  background-color: white;\n  opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91aS9jb21wb25lbnRzL3NlYXJjaC1pbnB1dC9DOlxcVXNlcnNcXGEucmFzaWRha2lzXFxEb2N1bWVudHNcXFRoZS1IaXN0b3J5LW9mLUZvcm11bGEtT25lXFxUaGVIaXN0b3J5T2ZGb3JtdWxhT25lL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvdWkvY29tcG9uZW50cy9zZWFyY2gtaW5wdXQvQzpcXFVzZXJzXFxhLnJhc2lkYWtpc1xcRG9jdW1lbnRzXFxUaGUtSGlzdG9yeS1vZi1Gb3JtdWxhLU9uZVxcVGhlSGlzdG9yeU9mRm9ybXVsYU9uZS9zcmNcXGFwcFxcbW9kdWxlc1xcdWlcXGNvbXBvbmVudHNcXHNlYXJjaC1pbnB1dFxcc2VhcmNoLWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxxQkFBQTtFQUNBLFdBQVc7RUFBRSxXQUFBO0VBQ2Isc0JBQXNCO0VBQUUsb0JBQUEsRUFBcUI7O0FBRy9DO0VBQ0UsNkJBQTRCO0VBQzVCLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxXQUFXLEVBQUE7O0FDeEJiO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWiwwQ0RIeUM7RUNJekMsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLCtCRGR5QyxFQUFBOztBQ2lCM0M7RUFBZ0IseUNBQUE7RUFDZCwrQkRsQnlDO0VDbUJ6QyxVQUFVO0VBQUUsWUFBQSxFQUFhOztBQUYzQjtFQUFnQix5Q0FBQTtFQUNkLCtCRGxCeUM7RUNtQnpDLFVBQVU7RUFBRSxZQUFBLEVBQWE7O0FBRjNCO0VBQWdCLHlDQUFBO0VBQ2QsK0JEbEJ5QztFQ21CekMsVUFBVTtFQUFFLFlBQUEsRUFBYTs7QUFGM0I7RUFBZ0IseUNBQUE7RUFDZCwrQkRsQnlDO0VDbUJ6QyxVQUFVO0VBQUUsWUFBQSxFQUFhOztBQUczQjtFQUNFLHVCQUF1QjtFQUN2QixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3VpL2NvbXBvbmVudHMvc2VhcmNoLWlucHV0L3NlYXJjaC1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwYWdlLXNpZGUtcGFkZGluZzogMTV2dztcclxuXHJcbiRsaWdodC1ncmF5LWNvbG9yOiByZ2JhKDE4NywgMTg3LCAxODcsIDAuNSk7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAkbGlnaHQtZ3JheS1jb2xvcjtcclxuXHJcbiRzbWFsbC10aXRsZS1mb250LXNpemU6IDIwcHg7XHJcbiRiaWctdGl0bGUtZm9udC1zaXplOiA3MHB4O1xyXG5cclxuJGxldHRlci1jb2xvcjogIzEwMTcyQztcclxuXHJcbmhyIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgLyogU2V0IHRoZSBociBjb2xvciAqL1xyXG4gIGNvbG9yOiAjMzMzOyAvKiBvbGQgSUUgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzOyAvKiBNb2Rlcm4gQnJvd3NlcnMgKi9cclxufVxyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6IGdyYXk7XHJcbn1cclxuIiwiQGltcG9ydCBcIn5zcmMvc3R5bGVzLnNjc3NcIjtcclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5mYS1zZWFyY2gge1xyXG4gIGNvbG9yOiAkbGlnaHQtZ3JheS1jb2xvcjtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xyXG4gIGNvbG9yOiAkbGlnaHQtZ3JheS1jb2xvcjtcclxuICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbn1cclxuXHJcbi5zZWFyY2gtaW5wdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/ui/components/search-input/search-input.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/ui/components/search-input/search-input.component.ts ***!
  \******************************************************************************/
/*! exports provided: SearchInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInputComponent", function() { return SearchInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchInputComponent = /** @class */ (function () {
    function SearchInputComponent() {
    }
    SearchInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-input',
            template: __webpack_require__(/*! ./search-input.component.html */ "./src/app/modules/ui/components/search-input/search-input.component.html"),
            styles: [__webpack_require__(/*! ./search-input.component.scss */ "./src/app/modules/ui/components/search-input/search-input.component.scss")]
        })
    ], SearchInputComponent);
    return SearchInputComponent;
}());



/***/ }),

/***/ "./src/app/modules/ui/components/spin-loader/spin-loader.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/ui/components/spin-loader/spin-loader.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loadingSpinnerService.spinnerVisibility$ | async\" class=\"lds-ripple\"><div></div><div></div></div>\r\n"

/***/ }),

/***/ "./src/app/modules/ui/components/spin-loader/spin-loader.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/ui/components/spin-loader/spin-loader.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  border: none;\n  height: 2px;\n  /* Set the hr color */\n  color: #333;\n  /* old IE */\n  background-color: #333;\n  /* Modern Browsers */ }\n\nhtml, body {\n  overflow-x: hidden !important;\n  width: 100vw;\n  height: 100vh; }\n\na {\n  color: gray; }\n\n.lds-ripple {\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n\n.lds-ripple div {\n  position: absolute;\n  border: 4px solid gray;\n  opacity: 1;\n  border-radius: 50%;\n  -webkit-animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n          animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite; }\n\n.lds-ripple div:nth-child(2) {\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s; }\n\n@-webkit-keyframes lds-ripple {\n  0% {\n    top: 36px;\n    left: 36px;\n    width: 0;\n    height: 0;\n    opacity: 1; }\n  100% {\n    top: 0px;\n    left: 0px;\n    width: 72px;\n    height: 72px;\n    opacity: 0; } }\n\n@keyframes lds-ripple {\n  0% {\n    top: 36px;\n    left: 36px;\n    width: 0;\n    height: 0;\n    opacity: 1; }\n  100% {\n    top: 0px;\n    left: 0px;\n    width: 72px;\n    height: 72px;\n    opacity: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91aS9jb21wb25lbnRzL3NwaW4tbG9hZGVyL0M6XFxVc2Vyc1xcYS5yYXNpZGFraXNcXERvY3VtZW50c1xcVGhlLUhpc3Rvcnktb2YtRm9ybXVsYS1PbmVcXFRoZUhpc3RvcnlPZkZvcm11bGFPbmUvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy91aS9jb21wb25lbnRzL3NwaW4tbG9hZGVyL0M6XFxVc2Vyc1xcYS5yYXNpZGFraXNcXERvY3VtZW50c1xcVGhlLUhpc3Rvcnktb2YtRm9ybXVsYS1PbmVcXFRoZUhpc3RvcnlPZkZvcm11bGFPbmUvc3JjXFxhcHBcXG1vZHVsZXNcXHVpXFxjb21wb25lbnRzXFxzcGluLWxvYWRlclxcc3Bpbi1sb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHFCQUFBO0VBQ0EsV0FBVztFQUFFLFdBQUE7RUFDYixzQkFBc0I7RUFBRSxvQkFBQSxFQUFxQjs7QUFHL0M7RUFDRSw2QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFdBQVcsRUFBQTs7QUN4QmI7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1YsY0FBYztFQUNkLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRLEVBQUE7O0FBRVY7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsc0VBQThEO1VBQTlELDhEQUE4RCxFQUFBOztBQUVoRTtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRTtJQUNFLFNBQVM7SUFDVCxVQUFVO0lBQ1YsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVLEVBQUE7RUFFWjtJQUNFLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVLEVBQUEsRUFBQTs7QUFiZDtFQUNFO0lBQ0UsU0FBUztJQUNULFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVUsRUFBQTtFQUVaO0lBQ0UsUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVUsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91aS9jb21wb25lbnRzL3NwaW4tbG9hZGVyL3NwaW4tbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHBhZ2Utc2lkZS1wYWRkaW5nOiAxNXZ3O1xyXG5cclxuJGxpZ2h0LWdyYXktY29sb3I6IHJnYmEoMTg3LCAxODcsIDE4NywgMC41KTtcclxuXHJcbiRib3JkZXItY29sb3I6ICRsaWdodC1ncmF5LWNvbG9yO1xyXG5cclxuJHNtYWxsLXRpdGxlLWZvbnQtc2l6ZTogMjBweDtcclxuJGJpZy10aXRsZS1mb250LXNpemU6IDcwcHg7XHJcblxyXG4kbGV0dGVyLWNvbG9yOiAjMTAxNzJDO1xyXG5cclxuaHIge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBoZWlnaHQ6IDJweDtcclxuICAvKiBTZXQgdGhlIGhyIGNvbG9yICovXHJcbiAgY29sb3I6ICMzMzM7IC8qIG9sZCBJRSAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7IC8qIE1vZGVybiBCcm93c2VycyAqL1xyXG59XHJcblxyXG5odG1sLCBib2R5IHtcclxuICBvdmVyZmxvdy14OiBoaWRkZW4haW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogZ3JheTtcclxufVxyXG4iLCJAaW1wb3J0IFwifnNyYy9zdHlsZXMuc2Nzc1wiO1xyXG5cclxuLmxkcy1yaXBwbGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBoZWlnaHQ6IDJlbTtcclxuICB3aWR0aDogMmVtO1xyXG4gIG92ZXJmbG93OiBzaG93O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuLmxkcy1yaXBwbGUgZGl2IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyOiA0cHggc29saWQgZ3JheTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBhbmltYXRpb246IGxkcy1yaXBwbGUgMXMgY3ViaWMtYmV6aWVyKDAsIDAuMiwgMC44LCAxKSBpbmZpbml0ZTtcclxufVxyXG4ubGRzLXJpcHBsZSBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xyXG59XHJcbkBrZXlmcmFtZXMgbGRzLXJpcHBsZSB7XHJcbiAgMCUge1xyXG4gICAgdG9wOiAzNnB4O1xyXG4gICAgbGVmdDogMzZweDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHdpZHRoOiA3MnB4O1xyXG4gICAgaGVpZ2h0OiA3MnB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/ui/components/spin-loader/spin-loader.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/ui/components/spin-loader/spin-loader.component.ts ***!
  \****************************************************************************/
/*! exports provided: SpinLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinLoaderComponent", function() { return SpinLoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_loading_spinner_service_loading_spinner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/loading-spinner-service/loading-spinner.service */ "./src/app/modules/ui/services/loading-spinner-service/loading-spinner.service.ts");



var SpinLoaderComponent = /** @class */ (function () {
    function SpinLoaderComponent(loadingSpinnerService) {
        this.loadingSpinnerService = loadingSpinnerService;
    }
    SpinLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spin-loader',
            template: __webpack_require__(/*! ./spin-loader.component.html */ "./src/app/modules/ui/components/spin-loader/spin-loader.component.html"),
            styles: [__webpack_require__(/*! ./spin-loader.component.scss */ "./src/app/modules/ui/components/spin-loader/spin-loader.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_loading_spinner_service_loading_spinner_service__WEBPACK_IMPORTED_MODULE_2__["LoadingSpinnerService"]])
    ], SpinLoaderComponent);
    return SpinLoaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/ui/components/title-component/title-component.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/ui/components/title-component/title-component.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title-container container d-flex justify-content-center\">\r\n  <div class=\"row\">\r\n    <h4 class=\"small-title title-above title col-12\">\r\n      {{titleAbove}}\r\n      <hr *ngIf=\"titleAbove\" class=\"small-hr\">\r\n    </h4>\r\n    <h2 class=\"big-title title col-12\">{{mainTitle}}</h2>\r\n    <h4 class=\"small-title title-below title col-12 pt-2 mt-2\">{{titleBelow}}</h4>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/ui/components/title-component/title-component.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/ui/components/title-component/title-component.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  border: none;\n  height: 2px;\n  /* Set the hr color */\n  color: #333;\n  /* old IE */\n  background-color: #333;\n  /* Modern Browsers */ }\n\nhtml, body {\n  overflow-x: hidden !important;\n  width: 100vw;\n  height: 100vh; }\n\na {\n  color: gray; }\n\n.title-container {\n  height: 30vh;\n  padding-top: 3%; }\n\n.title {\n  text-align: center;\n  height: 10%; }\n\n.small-title {\n  font-size: 20px;\n  font-size: 18px;\n  font-weight: lighter;\n  letter-spacing: 0px;\n  color: gray;\n  opacity: 1; }\n\n.big-title {\n  font-size: 70px;\n  font-weight: bold; }\n\n.small-hr {\n  width: 11%;\n  background-color: gray;\n  height: 1px; }\n\n@media screen and (max-width: 768px) {\n  .title {\n    font-size: 24px; }\n  .small-title {\n    font-size: 15px; }\n  .small-hr {\n    display: none; }\n  .title-container {\n    height: 10vh; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91aS9jb21wb25lbnRzL3RpdGxlLWNvbXBvbmVudC9DOlxcVXNlcnNcXGEucmFzaWRha2lzXFxEb2N1bWVudHNcXFRoZS1IaXN0b3J5LW9mLUZvcm11bGEtT25lXFxUaGVIaXN0b3J5T2ZGb3JtdWxhT25lL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvdWkvY29tcG9uZW50cy90aXRsZS1jb21wb25lbnQvQzpcXFVzZXJzXFxhLnJhc2lkYWtpc1xcRG9jdW1lbnRzXFxUaGUtSGlzdG9yeS1vZi1Gb3JtdWxhLU9uZVxcVGhlSGlzdG9yeU9mRm9ybXVsYU9uZS9zcmNcXGFwcFxcbW9kdWxlc1xcdWlcXGNvbXBvbmVudHNcXHRpdGxlLWNvbXBvbmVudFxcdGl0bGUtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxxQkFBQTtFQUNBLFdBQVc7RUFBRSxXQUFBO0VBQ2Isc0JBQXNCO0VBQUUsb0JBQUEsRUFBcUI7O0FBRy9DO0VBQ0UsNkJBQTRCO0VBQzVCLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxXQUFXLEVBQUE7O0FDdEJiO0VBQ0UsWUFBWTtFQUNaLGVBSmtCLEVBQUE7O0FBT3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGVEVDBCO0VDVTFCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxVQUFVLEVBQUE7O0FBR1o7RUFDRSxlRGpCd0I7RUNrQnhCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsV0FBVyxFQUFBOztBQUdiO0VBQ0U7SUFDRSxlQUFlLEVBQUE7RUFHakI7SUFDRSxlQUFlLEVBQUE7RUFHakI7SUFDRSxhQUFhLEVBQUE7RUFHZjtJQUNFLFlBQVksRUFBQSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91aS9jb21wb25lbnRzL3RpdGxlLWNvbXBvbmVudC90aXRsZS1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcGFnZS1zaWRlLXBhZGRpbmc6IDE1dnc7XHJcblxyXG4kbGlnaHQtZ3JheS1jb2xvcjogcmdiYSgxODcsIDE4NywgMTg3LCAwLjUpO1xyXG5cclxuJGJvcmRlci1jb2xvcjogJGxpZ2h0LWdyYXktY29sb3I7XHJcblxyXG4kc21hbGwtdGl0bGUtZm9udC1zaXplOiAyMHB4O1xyXG4kYmlnLXRpdGxlLWZvbnQtc2l6ZTogNzBweDtcclxuXHJcbiRsZXR0ZXItY29sb3I6ICMxMDE3MkM7XHJcblxyXG5ociB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIC8qIFNldCB0aGUgaHIgY29sb3IgKi9cclxuICBjb2xvcjogIzMzMzsgLyogb2xkIElFICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzsgLyogTW9kZXJuIEJyb3dzZXJzICovXHJcbn1cclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbiFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcbiIsIkBpbXBvcnQgXCJ+c3JjL3N0eWxlcy5zY3NzXCI7XHJcblxyXG4kdGl0bGUteS1wYWRkaW5nOiAzJTtcclxuXHJcbi50aXRsZS1jb250YWluZXIge1xyXG4gIGhlaWdodDogMzB2aDtcclxuICBwYWRkaW5nLXRvcDogJHRpdGxlLXktcGFkZGluZztcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbi5zbWFsbC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAkc21hbGwtdGl0bGUtZm9udC1zaXplO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5iaWctdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogJGJpZy10aXRsZS1mb250LXNpemU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zbWFsbC1ociB7XHJcbiAgd2lkdGg6IDExJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIGhlaWdodDogMXB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG5cclxuICAuc21hbGwtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLnNtYWxsLWhyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAudGl0bGUtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTB2aDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/ui/components/title-component/title-component.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/ui/components/title-component/title-component.component.ts ***!
  \************************************************************************************/
/*! exports provided: TitleComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponentComponent", function() { return TitleComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TitleComponentComponent = /** @class */ (function () {
    function TitleComponentComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TitleComponentComponent.prototype, "titleAbove", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TitleComponentComponent.prototype, "mainTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TitleComponentComponent.prototype, "titleBelow", void 0);
    TitleComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-title-component',
            template: __webpack_require__(/*! ./title-component.component.html */ "./src/app/modules/ui/components/title-component/title-component.component.html"),
            styles: [__webpack_require__(/*! ./title-component.component.scss */ "./src/app/modules/ui/components/title-component/title-component.component.scss")]
        })
    ], TitleComponentComponent);
    return TitleComponentComponent;
}());



/***/ }),

/***/ "./src/app/modules/ui/services/loading-spinner-service/loading-spinner.service.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/ui/services/loading-spinner-service/loading-spinner.service.ts ***!
  \****************************************************************************************/
/*! exports provided: LoadingSpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerService", function() { return LoadingSpinnerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LoadingSpinnerService = /** @class */ (function () {
    function LoadingSpinnerService() {
        this.spinnerVisibilitySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.spinnerVisibility$ = this.spinnerVisibilitySubject.asObservable();
    }
    LoadingSpinnerService.prototype.showSpinner = function () {
        this.spinnerVisibilitySubject.next(true);
    };
    LoadingSpinnerService.prototype.hideSpinner = function () {
        this.spinnerVisibilitySubject.next(false);
    };
    LoadingSpinnerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LoadingSpinnerService);
    return LoadingSpinnerService;
}());



/***/ }),

/***/ "./src/app/modules/ui/ui.module.ts":
/*!*****************************************!*\
  !*** ./src/app/modules/ui/ui.module.ts ***!
  \*****************************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/modules/ui/components/navbar/navbar.component.ts");
/* harmony import */ var _components_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/nav-item/nav-item.component */ "./src/app/modules/ui/components/nav-item/nav-item.component.ts");
/* harmony import */ var _components_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/search-input/search-input.component */ "./src/app/modules/ui/components/search-input/search-input.component.ts");
/* harmony import */ var _components_card_display_page_card_display_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/card-display-page/card-display-page.component */ "./src/app/modules/ui/components/card-display-page/card-display-page.component.ts");
/* harmony import */ var _components_title_component_title_component_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/title-component/title-component.component */ "./src/app/modules/ui/components/title-component/title-component.component.ts");
/* harmony import */ var _components_display_card_display_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/display-card/display-card.component */ "./src/app/modules/ui/components/display-card/display-card.component.ts");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "./src/app/modules/ui/components/home-page/home-page.component.ts");
/* harmony import */ var _components_spin_loader_spin_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/spin-loader/spin-loader.component */ "./src/app/modules/ui/components/spin-loader/spin-loader.component.ts");
/* harmony import */ var _components_item_display_page_item_display_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/item-display-page/item-display-page.component */ "./src/app/modules/ui/components/item-display-page/item-display-page.component.ts");
/* harmony import */ var _components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/paginator/paginator.component */ "./src/app/modules/ui/components/paginator/paginator.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/modules/ui/components/footer/footer.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/modules/ui/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/modules/ui/components/modal/modal.component.ts");


















var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _components_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_6__["NavItemComponent"],
                _components_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_7__["SearchInputComponent"],
                _components_card_display_page_card_display_page_component__WEBPACK_IMPORTED_MODULE_8__["CardDisplayPageComponent"],
                _components_title_component_title_component_component__WEBPACK_IMPORTED_MODULE_9__["TitleComponentComponent"],
                _components_display_card_display_card_component__WEBPACK_IMPORTED_MODULE_10__["DisplayCardComponent"],
                _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_11__["HomePageComponent"],
                _components_spin_loader_spin_loader_component__WEBPACK_IMPORTED_MODULE_12__["SpinLoaderComponent"],
                _components_item_display_page_item_display_page_component__WEBPACK_IMPORTED_MODULE_13__["ItemDisplayPageComponent"],
                _components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_14__["PaginatorComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__["PageNotFoundComponent"],
                _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_17__["ModalComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            exports: [
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _components_card_display_page_card_display_page_component__WEBPACK_IMPORTED_MODULE_8__["CardDisplayPageComponent"],
                _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_11__["HomePageComponent"],
                _components_spin_loader_spin_loader_component__WEBPACK_IMPORTED_MODULE_12__["SpinLoaderComponent"],
                _components_item_display_page_item_display_page_component__WEBPACK_IMPORTED_MODULE_13__["ItemDisplayPageComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__["PageNotFoundComponent"],
                _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_17__["ModalComponent"]
            ]
        })
    ], UiModule);
    return UiModule;
}());



/***/ }),

/***/ "./src/environments/config.ts":
/*!************************************!*\
  !*** ./src/environments/config.ts ***!
  \************************************/
/*! exports provided: CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG", function() { return CONFIG; });
var CONFIG = {
    navItems: [
        { id: 1,
            title: 'Seasons',
            link: 'seasons/'
        },
        { id: 2,
            title: 'Drivers',
            link: 'drivers/'
        },
        { id: 3,
            title: 'Constructors',
            link: 'constructors/'
        }
    ],
    paginationSize: 12
};


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\a.rasidakis\Documents\The-History-of-Formula-One\TheHistoryOfFormulaOne\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map