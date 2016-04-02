System.register(['angular2/core', './visit', './http.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, visit_1, http_service_1;
    var VisitComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (visit_1_1) {
                visit_1 = visit_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            }],
        execute: function() {
            VisitComponent = (function () {
                function VisitComponent(_httpService) {
                    this._httpService = _httpService;
                }
                VisitComponent.prototype.ngOnInit = function () {
                    this.getVisits();
                    this.getPatientIds();
                    this.getStaffIds();
                };
                VisitComponent.prototype.parseVisit = function (json) {
                    var _this = this;
                    json.forEach(function (item) {
                        _this.addVisit(item.pid, item.sid, item.room, item.visit_date);
                    });
                };
                VisitComponent.prototype.addVisit = function (pid, sid, room, date) {
                    var visit = new visit_1.Visit(pid, sid, room, date);
                    this.visits.push(visit);
                };
                VisitComponent.prototype.postVisit = function (pid, sid, room, visit_date) {
                    var _this = this;
                    this._httpService.post({ pid: pid, sid: sid, room: room, visit_date: visit_date }, 'visit')
                        .subscribe(function (data) { return console.log(data); }, function (err) { return alert(err); }, function () { return _this.getVisits(); });
                };
                VisitComponent.prototype.getVisits = function () {
                    var _this = this;
                    this.visits = [];
                    this._httpService.getVQuery().subscribe(function (data) { return _this.parseVisit(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                VisitComponent.prototype.getPatientIds = function () {
                    var _this = this;
                    this.patientIds = [];
                    this._httpService.getPQuery().subscribe(function (data) { return _this.parsePatientIds(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                VisitComponent.prototype.parsePatientIds = function (json) {
                    var _this = this;
                    json.forEach(function (item) { _this.patientIds.push(item.pid); });
                };
                VisitComponent.prototype.getStaffIds = function () {
                    var _this = this;
                    this.staffIds = [];
                    this._httpService.getSQuery().subscribe(function (data) { return _this.parseStaffIds(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                VisitComponent.prototype.parseStaffIds = function (json) {
                    var _this = this;
                    json.forEach(function (item) { _this.staffIds.push(item.sid); });
                };
                VisitComponent.prototype.removeVisit = function (visit) {
                    var index = this.visits.indexOf(visit);
                    this.visits.splice(index, 1);
                };
                VisitComponent = __decorate([
                    core_1.Component({
                        selector: 'visit',
                        templateUrl: 'templates/visit.component.html',
                        providers: [http_service_1.HTTPService]
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HTTPService])
                ], VisitComponent);
                return VisitComponent;
            }());
            exports_1("VisitComponent", VisitComponent);
        }
    }
});
//# sourceMappingURL=visit.component.js.map