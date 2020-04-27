(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["card-display-page-card-display-page-module"],{

/***/ "./src/app/modules/data-fetching/services/season-standings-fetching-service/season-standings-fetching.service.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/data-fetching/services/season-standings-fetching-service/season-standings-fetching.service.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: SeasonStandingsFetchingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeasonStandingsFetchingService", function() { return SeasonStandingsFetchingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_fetching_base_service_data_fetching_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-fetching-base-service/data-fetching.service */ "./src/app/modules/data-fetching/services/data-fetching-base-service/data-fetching.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var SeasonStandingsFetchingService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SeasonStandingsFetchingService, _super);
    function SeasonStandingsFetchingService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    SeasonStandingsFetchingService.prototype.getData = function (year, limit, offset) {
        return this.http.get("http://ergast.com/api/f1/" + year.toString() + "/driverStandings.json?limit=" + limit + "&offset=" + offset);
    };
    SeasonStandingsFetchingService.prototype.getTransformedData = function (parameter, limit, offset) {
        var _this = this;
        return this.getData(parameter, limit, offset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return _this.mapToCardGenericData(data); }));
    };
    SeasonStandingsFetchingService.prototype.mapToCardGenericData = function (standingsResponse) {
        var cardGenericData = [];
        var titleAbove = standingsResponse.MRData.StandingsTable.season;
        var totalData = +standingsResponse.MRData.total;
        standingsResponse.MRData.StandingsTable.StandingsLists[0].DriverStandings.forEach(function (driver) {
            cardGenericData.push({
                label: '#' + driver.position + ' ' + driver.Driver.givenName + ' ' + driver.Driver.familyName,
                description: 'Points: ' + driver.points,
                moreInfoLink: '/drivers/' + driver.Driver.driverId
            });
        });
        return { cards: cardGenericData, title: 'Season Standings', aboveTitle: titleAbove, totalData: totalData };
    };
    SeasonStandingsFetchingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], SeasonStandingsFetchingService);
    return SeasonStandingsFetchingService;
}(_data_fetching_base_service_data_fetching_service__WEBPACK_IMPORTED_MODULE_2__["DataFetchingService"]));



/***/ }),

/***/ "./src/app/modules/pages/card-display-page/card-display-page-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/pages/card-display-page/card-display-page-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: CardDisplayPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDisplayPageRoutingModule", function() { return CardDisplayPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _data_fetching_services_season_standings_fetching_service_season_standings_fetching_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../data-fetching/services/season-standings-fetching-service/season-standings-fetching.service */ "./src/app/modules/data-fetching/services/season-standings-fetching-service/season-standings-fetching.service.ts");
/* harmony import */ var _ui_components_card_display_page_card_display_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../ui/components/card-display-page/card-display-page.component */ "./src/app/modules/ui/components/card-display-page/card-display-page.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SEASONS_SERVICE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]("SeasonsStandingsService");
var routes = [
    {
        path: '',
        component: _ui_components_card_display_page_card_display_page_component__WEBPACK_IMPORTED_MODULE_2__["CardDisplayPageComponent"]
    },
    {
        path: 'season-standings/:id',
        data: {
            requiredServiceToken: SEASONS_SERVICE_TOKEN
        },
        loadChildren: '../card-display-page/card-display-page.module#CardDisplayPageModule'
    },
];
var CardDisplayPageRoutingModule = /** @class */ (function () {
    function CardDisplayPageRoutingModule() {
    }
    CardDisplayPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            providers: [
                {
                    provide: SEASONS_SERVICE_TOKEN,
                    useClass: _data_fetching_services_season_standings_fetching_service_season_standings_fetching_service__WEBPACK_IMPORTED_MODULE_1__["SeasonStandingsFetchingService"]
                }
            ]
        })
    ], CardDisplayPageRoutingModule);
    return CardDisplayPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/pages/card-display-page/card-display-page.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/pages/card-display-page/card-display-page.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CardDisplayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDisplayPageModule", function() { return CardDisplayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../ui/ui.module */ "./src/app/modules/ui/ui.module.ts");
/* harmony import */ var _card_display_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-display-page-routing.module */ "./src/app/modules/pages/card-display-page/card-display-page-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var CardDisplayPageModule = /** @class */ (function () {
    function CardDisplayPageModule() {
    }
    CardDisplayPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _card_display_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["CardDisplayPageRoutingModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_1__["UiModule"]
            ]
        })
    ], CardDisplayPageModule);
    return CardDisplayPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=card-display-page-card-display-page-module.js.map