System.register(['angular2/core', './Staff', './http.service', "angular2/router"], function(exports_1, context_1) {
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
    var core_1, Staff_1, http_service_1, router_1;
    var StaffRegisterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Staff_1_1) {
                Staff_1 = Staff_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            StaffRegisterComponent = (function () {
                function StaffRegisterComponent(httpService) {
                    this.httpService = httpService;
                    this.preprocessStaffForm();
                }
                StaffRegisterComponent.prototype.testSsPost = function (s_lname, s_fname, specialization, experience_in_years) {
                    this.httpService.post({
                        sid: this.nexts_id,
                        s_lname: s_lname,
                        s_fname: s_fname,
                        specialization: specialization,
                        isDoctor: this.isD,
                        experience_in_years: experience_in_years
                    }, 'staff').subscribe(function (data) { return console.log(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                StaffRegisterComponent.prototype.preprocessStaffForm = function () {
                    var _this = this;
                    this.httpService.getSQuery().subscribe(function (data) { return _this.parseStaffPreprocess(data); }, function (err) { return alert(err); }, function () { return console.log("GET patient data preprocessing complete"); });
                };
                StaffRegisterComponent.prototype.parseStaff = function (json) {
                    var _this = this;
                    json.forEach(function (item) {
                        _this.addStaff(item.sid, item.s_lname, item.s_fname, item.specialization, item.isDoctor, item.experience_in_years);
                    });
                };
                StaffRegisterComponent.prototype.addStaff = function (s_id, s_lname, s_fname, specialization, isDoctor, experience_in_years) {
                    var staff = new Staff_1.Staff(s_id, s_lname, s_fname, specialization, isDoctor, experience_in_years);
                    this.staffs.push(staff);
                };
                StaffRegisterComponent.prototype.parseStaffPreprocess = function (json) {
                    var staff_ids = [];
                    var next_id = 0;
                    json.forEach(function (item) {
                        staff_ids.push(item.sid);
                    });
                    for (var i = 0; i < staff_ids.length; i += 1) {
                        if (staff_ids[i] > next_id)
                            next_id = staff_ids[i];
                    }
                    console.log(next_id + 1);
                    this.nexts_id = next_id + 1;
                };
                StaffRegisterComponent.prototype.removeStaff = function (staff) {
                    var index = this.staffs.indexOf(staff);
                    this.staffs.splice(index, 1);
                };
                StaffRegisterComponent = __decorate([
                    core_1.Component({
                        selector: 'staff',
                        templateUrl: '/templates/staff-regisiter.component.html',
                        providers: [http_service_1.HTTPService, router_1.RouterLink],
                        directives: [router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HTTPService])
                ], StaffRegisterComponent);
                return StaffRegisterComponent;
            }());
            exports_1("StaffRegisterComponent", StaffRegisterComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWZmLXJlZ2lzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBO2dCQUtJLGdDQUFvQixXQUF3QjtvQkFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7b0JBQ3hDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2dCQUMvQixDQUFDO2dCQUNELDJDQUFVLEdBQVYsVUFBVyxPQUFPLEVBQUMsT0FBTyxFQUFDLGNBQWMsRUFBQyxtQkFBbUI7b0JBQ3pELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUNqQjt3QkFDSSxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVE7d0JBQ2xCLE9BQU8sRUFBQyxPQUFPO3dCQUNmLE9BQU8sRUFBQyxPQUFPO3dCQUNmLGNBQWMsRUFBQyxjQUFjO3dCQUM3QixRQUFRLEVBQUMsSUFBSSxDQUFDLEdBQUc7d0JBQ2pCLG1CQUFtQixFQUFDLG1CQUFtQjtxQkFDMUMsRUFDRCxPQUFPLENBQ1YsQ0FBQyxTQUFTLENBQ1AsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFqQixDQUFpQixFQUN6QixVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBVixDQUFVLEVBQ2pCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUF2QixDQUF1QixDQUNoQyxDQUFDO2dCQUNOLENBQUM7Z0JBQ0Qsb0RBQW1CLEdBQW5CO29CQUFBLGlCQU1DO29CQUxHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUNsQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFBL0IsQ0FBK0IsRUFDdkMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQVYsQ0FBVSxFQUNqQixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxFQUF0RCxDQUFzRCxDQUMvRCxDQUFDO2dCQUNOLENBQUM7Z0JBRUQsMkNBQVUsR0FBVixVQUFXLElBQUk7b0JBQWYsaUJBU0M7b0JBUkcsSUFBSSxDQUFDLE9BQU8sQ0FBRSxVQUFBLElBQUk7d0JBQ2QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUNsQixJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLGNBQWMsRUFDbkIsSUFBSSxDQUFDLFFBQVEsRUFDYixJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztvQkFDbEMsQ0FBQyxDQUFDLENBQUE7Z0JBQ04sQ0FBQztnQkFFRCx5Q0FBUSxHQUFSLFVBQVMsSUFBWSxFQUNaLE9BQWUsRUFDZixPQUFjLEVBQ2QsY0FBcUIsRUFDckIsUUFBZ0IsRUFDaEIsbUJBQTJCO29CQUNoQyxJQUFJLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxjQUFjLEVBQUMsUUFBUSxFQUFDLG1CQUFtQixDQUFDLENBQUM7b0JBQ3hGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQUVELHFEQUFvQixHQUFwQixVQUFxQixJQUFJO29CQUNyQixJQUFJLFNBQVMsR0FBYSxFQUFFLENBQUM7b0JBQzdCLElBQUksT0FBTyxHQUFXLENBQUMsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBRSxVQUFBLElBQUk7d0JBQ2QsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzdCLENBQUMsQ0FBQyxDQUFDO29CQUNILEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7d0JBQzNDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7NEJBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFDdEQsQ0FBQztvQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQyxDQUFDO2dCQUdELDRDQUFXLEdBQVgsVUFBWSxLQUFXO29CQUNuQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxDQUFDO2dCQTdFTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBQyxPQUFPO3dCQUNoQixXQUFXLEVBQUMsMkNBQTJDO3dCQUN2RCxTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFDLG1CQUFVLENBQUM7d0JBQ25DLFVBQVUsRUFBRSxDQUFDLG1CQUFVLENBQUM7cUJBQzNCLENBQUM7OzBDQUFBO2dCQTBFRiw2QkFBQztZQUFELENBekVBLEFBeUVDLElBQUE7WUF6RUQsMkRBeUVDLENBQUEiLCJmaWxlIjoic3RhZmYtcmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEpveSBvbiAyMDE2LTA0LTAxLlxuICovXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1N0YWZmfSBmcm9tICcuL1N0YWZmJztcbmltcG9ydCB7SFRUUFNlcnZpY2V9IGZyb20gJy4vaHR0cC5zZXJ2aWNlJztcbmltcG9ydCB7Um91dGVyTGlua30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3Rvcjonc3RhZmYnLFxuICAgIHRlbXBsYXRlVXJsOicvdGVtcGxhdGVzL3N0YWZmLXJlZ2lzaXRlci5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbSFRUUFNlcnZpY2UsUm91dGVyTGlua10sXG4gICAgZGlyZWN0aXZlczogW1JvdXRlckxpbmtdXG59KVxuZXhwb3J0IGNsYXNzIFN0YWZmUmVnaXN0ZXJDb21wb25lbnR7XG4gICAgc3RhZmZzOkFycmF5PFN0YWZmPjtcbiAgICBuZXh0c19pZDogbnVtYmVyO1xuICAgIGlzRDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwU2VydmljZTogSFRUUFNlcnZpY2Upe1xuICAgICAgICB0aGlzLnByZXByb2Nlc3NTdGFmZkZvcm0oKTtcbiAgICB9XG4gICAgdGVzdFNzUG9zdChzX2xuYW1lLHNfZm5hbWUsc3BlY2lhbGl6YXRpb24sZXhwZXJpZW5jZV9pbl95ZWFycyl7XG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UucG9zdChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzaWQ6IHRoaXMubmV4dHNfaWQsXG4gICAgICAgICAgICAgICAgc19sbmFtZTpzX2xuYW1lLFxuICAgICAgICAgICAgICAgIHNfZm5hbWU6c19mbmFtZSxcbiAgICAgICAgICAgICAgICBzcGVjaWFsaXphdGlvbjpzcGVjaWFsaXphdGlvbixcbiAgICAgICAgICAgICAgICBpc0RvY3Rvcjp0aGlzLmlzRCxcbiAgICAgICAgICAgICAgICBleHBlcmllbmNlX2luX3llYXJzOmV4cGVyaWVuY2VfaW5feWVhcnNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnc3RhZmYnXG4gICAgICAgICkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJjb21wbGV0ZVwiKVxuICAgICAgICApO1xuICAgIH1cbiAgICBwcmVwcm9jZXNzU3RhZmZGb3JtKCkge1xuICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlLmdldFNRdWVyeSgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5wYXJzZVN0YWZmUHJlcHJvY2VzcyhkYXRhKSxcbiAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJHRVQgcGF0aWVudCBkYXRhIHByZXByb2Nlc3NpbmcgY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwYXJzZVN0YWZmKGpzb24pe1xuICAgICAgICBqc29uLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRTdGFmZihpdGVtLnNpZCxcbiAgICAgICAgICAgICAgICBpdGVtLnNfbG5hbWUsXG4gICAgICAgICAgICAgICAgaXRlbS5zX2ZuYW1lLFxuICAgICAgICAgICAgICAgIGl0ZW0uc3BlY2lhbGl6YXRpb24sXG4gICAgICAgICAgICAgICAgaXRlbS5pc0RvY3RvcixcbiAgICAgICAgICAgICAgICBpdGVtLmV4cGVyaWVuY2VfaW5feWVhcnMpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZFN0YWZmKHNfaWQ6IG51bWJlcixcbiAgICAgICAgICAgICBzX2xuYW1lOiBzdHJpbmcsXG4gICAgICAgICAgICAgc19mbmFtZTpzdHJpbmcsXG4gICAgICAgICAgICAgc3BlY2lhbGl6YXRpb246c3RyaW5nLFxuICAgICAgICAgICAgIGlzRG9jdG9yOmJvb2xlYW4sXG4gICAgICAgICAgICAgZXhwZXJpZW5jZV9pbl95ZWFyczogbnVtYmVyKXtcbiAgICAgICAgbGV0IHN0YWZmID0gbmV3IFN0YWZmKHNfaWQsc19sbmFtZSxzX2ZuYW1lLHNwZWNpYWxpemF0aW9uLGlzRG9jdG9yLGV4cGVyaWVuY2VfaW5feWVhcnMpO1xuICAgICAgICB0aGlzLnN0YWZmcy5wdXNoKHN0YWZmKTtcbiAgICB9XG5cbiAgICBwYXJzZVN0YWZmUHJlcHJvY2Vzcyhqc29uKXtcbiAgICAgICAgbGV0IHN0YWZmX2lkczogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgbGV0IG5leHRfaWQ6IG51bWJlciA9IDA7XG4gICAgICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICBzdGFmZl9pZHMucHVzaChpdGVtLnNpZCk7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YWZmX2lkcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKHN0YWZmX2lkc1tpXSA+IG5leHRfaWQpIG5leHRfaWQgPSBzdGFmZl9pZHNbaV1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhuZXh0X2lkICsgMSk7XG4gICAgICAgIHRoaXMubmV4dHNfaWQgPSBuZXh0X2lkICsgMTtcbiAgICB9XG5cblxuICAgIHJlbW92ZVN0YWZmKHN0YWZmOlN0YWZmKXtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5zdGFmZnMuaW5kZXhPZihzdGFmZik7XG4gICAgICAgIHRoaXMuc3RhZmZzLnNwbGljZShpbmRleCwxKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
