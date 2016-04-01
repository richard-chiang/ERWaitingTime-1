System.register(['angular2/core', './http.service'], function(exports_1, context_1) {
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
    var core_1, http_service_1;
    var PatientRegisterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            }],
        execute: function() {
            PatientRegisterComponent = (function () {
                function PatientRegisterComponent(httpService) {
                    this.httpService = httpService;
                }
                PatientRegisterComponent.prototype.testPost = function (p_lname, p_fname, pid, is_male, dob) {
                    this.httpService.post({ p_lname: p_lname, p_fname: p_fname, pid: pid, is_male: is_male, dob: dob }, 'patient').subscribe(function (data) { return console.log(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                PatientRegisterComponent = __decorate([
                    core_1.Component({
                        selector: 'patientregister',
                        template: "\n<head>\n    <title>ERWaitingTime</title>\n    <link href=\"//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css\" rel=\"stylesheet\"/>\n    <script src=\"https://code.angularjs.org/2.0.0-alpha.46/http.dev.js\"></script>\n</head>\n<body>\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\" href=\"../home\">ERWaitingTime</a>\n    </div>\n</nav>\n<div class=\"container\">\n    <div class=\"page-header\" style=\"margin-top: 100px\">\n        <h1>Register Your Patient</h1>\n    </div>\n    <form method=\"post\" role=\"form\" class=\"login-form form-horizontal\">\n        <input name=\"_csrf\" type=\"hidden\"/>\n        <div class=\"form-group\">\n            <label class=\"col-sm-4\">Patient Last Name</label>\n            <div class=\"col-sm-8\">\n                <input name=\"fname\" placeholder=\"Patient Last Name\" required=\"required\" type=\"text\" class=\"form-control\" #p_lname>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-sm-4\">Patient First Name</label>\n            <div class=\"col-sm-8\">\n                <input name=\"lname\" placeholder=\"Patient First Name\" required=\"required\" type=\"text\" class=\"form-control\" #p_fname>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-sm-4\">Gender</label>\n            <div class=\"col-sm-8\">\n                <input name=\"gender\" placeholder=\"Gender\" required=\"required\" type=\"text\" class=\"form-control\" #p_gender>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-sm-4\">Patient ID</label>\n           <div class=\"col-sm-8\">\n                <input name=\"pid\" placeholder=\"Patient ID\" required=\"required\" type=\"text\" class=\"form-control\" #pid>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-sm-4\" #dob>Date of Birth</label>\n            <div class=\"col-sm-8\">\n                <div class=\"controls\">\n                    <select name=\"dob-day\" id=\"dob-day\" >\n                        <option value=\"\">Day</option>\n                        <option value=\"\">---</option>\n                        <option value=\"01\">01</option>\n                        <option value=\"02\">02</option>\n                        <option value=\"03\">03</option>\n                        <option value=\"04\">04</option>\n                        <option value=\"05\">05</option>\n                        <option value=\"06\">06</option>\n                        <option value=\"07\">07</option>\n                        <option value=\"08\">08</option>\n                        <option value=\"09\">09</option>\n                        <option value=\"10\">10</option>\n                        <option value=\"11\">11</option>\n                        <option value=\"12\">12</option>\n                        <option value=\"13\">13</option>\n                        <option value=\"14\">14</option>\n                        <option value=\"15\">15</option>\n                        <option value=\"16\">16</option>\n                        <option value=\"17\">17</option>\n                        <option value=\"18\">18</option>\n                        <option value=\"19\">19</option>\n                        <option value=\"20\">20</option>\n                        <option value=\"21\">21</option>\n                        <option value=\"22\">22</option>\n                        <option value=\"23\">23</option>\n                        <option value=\"24\">24</option>\n                        <option value=\"25\">25</option>\n                        <option value=\"26\">26</option>\n                        <option value=\"27\">27</option>\n                        <option value=\"28\">28</option>\n                        <option value=\"29\">29</option>\n                        <option value=\"30\">30</option>\n                        <option value=\"31\">31</option>\n                    </select>\n                    <select name=\"dob-month\" id=\"dob-month\">\n                        <option value=\"\">Month</option>\n                        <option value=\"\">-----</option>\n                        <option value=\"01\">January</option>\n                        <option value=\"02\">February</option>\n                        <option value=\"03\">March</option>\n                        <option value=\"04\">April</option>\n                        <option value=\"05\">May</option>\n                        <option value=\"06\">June</option>\n                        <option value=\"07\">July</option>\n                        <option value=\"08\">August</option>\n                        <option value=\"09\">September</option>\n                        <option value=\"10\">October</option>\n                        <option value=\"11\">November</option>\n                        <option value=\"12\">December</option>\n                    </select>\n                    <select name=\"dob-year\" id=\"dob-year\">\n                        <option value=\"\">Year</option>\n                        <option value=\"\">----</option>\n                        <option value=\"2012\">2012</option>\n                        <option value=\"2011\">2011</option>\n                        <option value=\"2010\">2010</option>\n                        <option value=\"2009\">2009</option>\n                        <option value=\"2008\">2008</option>\n                        <option value=\"2007\">2007</option>\n                        <option value=\"2006\">2006</option>\n                        <option value=\"2005\">2005</option>\n                        <option value=\"2004\">2004</option>\n                        <option value=\"2003\">2003</option>\n                        <option value=\"2002\">2002</option>\n                        <option value=\"2001\">2001</option>\n                        <option value=\"2000\">2000</option>\n                        <option value=\"1999\">1999</option>\n                        <option value=\"1998\">1998</option>\n                        <option value=\"1997\">1997</option>\n                        <option value=\"1996\">1996</option>\n                        <option value=\"1995\">1995</option>\n                        <option value=\"1994\">1994</option>\n                        <option value=\"1993\">1993</option>\n                        <option value=\"1992\">1992</option>\n                        <option value=\"1991\">1991</option>\n                        <option value=\"1990\">1990</option>\n                        <option value=\"1989\">1989</option>\n                        <option value=\"1988\">1988</option>\n                        <option value=\"1987\">1987</option>\n                        <option value=\"1986\">1986</option>\n                        <option value=\"1985\">1985</option>\n                        <option value=\"1984\">1984</option>\n                        <option value=\"1983\">1983</option>\n                        <option value=\"1982\">1982</option>\n                        <option value=\"1981\">1981</option>\n                        <option value=\"1980\">1980</option>\n                        <option value=\"1979\">1979</option>\n                        <option value=\"1978\">1978</option>\n                        <option value=\"1977\">1977</option>\n                        <option value=\"1976\">1976</option>\n                        <option value=\"1975\">1975</option>\n                        <option value=\"1974\">1974</option>\n                        <option value=\"1973\">1973</option>\n                        <option value=\"1972\">1972</option>\n                        <option value=\"1971\">1971</option>\n                        <option value=\"1970\">1970</option>\n                        <option value=\"1969\">1969</option>\n                        <option value=\"1968\">1968</option>\n                        <option value=\"1967\">1967</option>\n                        <option value=\"1966\">1966</option>\n                        <option value=\"1965\">1965</option>\n                        <option value=\"1964\">1964</option>\n                        <option value=\"1963\">1963</option>\n                        <option value=\"1962\">1962</option>\n                        <option value=\"1961\">1961</option>\n                        <option value=\"1960\">1960</option>\n                        <option value=\"1959\">1959</option>\n                        <option value=\"1958\">1958</option>\n                        <option value=\"1957\">1957</option>\n                        <option value=\"1956\">1956</option>\n                        <option value=\"1955\">1955</option>\n                        <option value=\"1954\">1954</option>\n                        <option value=\"1953\">1953</option>\n                        <option value=\"1952\">1952</option>\n                        <option value=\"1951\">1951</option>\n                        <option value=\"1950\">1950</option>\n                        <option value=\"1949\">1949</option>\n                        <option value=\"1948\">1948</option>\n                        <option value=\"1947\">1947</option>\n                        <option value=\"1946\">1946</option>\n                        <option value=\"1945\">1945</option>\n                        <option value=\"1944\">1944</option>\n                        <option value=\"1943\">1943</option>\n                        <option value=\"1942\">1942</option>\n                        <option value=\"1941\">1941</option>\n                        <option value=\"1940\">1940</option>\n                        <option value=\"1939\">1939</option>\n                        <option value=\"1938\">1938</option>\n                        <option value=\"1937\">1937</option>\n                        <option value=\"1936\">1936</option>\n                        <option value=\"1935\">1935</option>\n                        <option value=\"1934\">1934</option>\n                        <option value=\"1933\">1933</option>\n                        <option value=\"1932\">1932</option>\n                        <option value=\"1931\">1931</option>\n                        <option value=\"1930\">1930</option>\n                        <option value=\"1929\">1929</option>\n                        <option value=\"1928\">1928</option>\n                        <option value=\"1927\">1927</option>\n                        <option value=\"1926\">1926</option>\n                        <option value=\"1925\">1925</option>\n                        <option value=\"1924\">1924</option>\n                        <option value=\"1923\">1923</option>\n                        <option value=\"1922\">1922</option>\n                        <option value=\"1921\">1921</option>\n                        <option value=\"1920\">1920</option>\n                        <option value=\"1919\">1919</option>\n                        <option value=\"1918\">1918</option>\n                        <option value=\"1917\">1917</option>\n                        <option value=\"1916\">1916</option>\n                        <option value=\"1915\">1915</option>\n                        <option value=\"1914\">1914</option>\n                        <option value=\"1913\">1913</option>\n                        <option value=\"1912\">1912</option>\n                        <option value=\"1911\">1911</option>\n                        <option value=\"1910\">1910</option>\n                        <option value=\"1909\">1909</option>\n                        <option value=\"1908\">1908</option>\n                        <option value=\"1907\">1907</option>\n                        <option value=\"1906\">1906</option>\n                        <option value=\"1905\">1905</option>\n                        <option value=\"1904\">1904</option>\n                        <option value=\"1903\">1903</option>\n                        <option value=\"1901\">1901</option>\n                        <option value=\"1900\">1900</option>\n                    </select>\n                </div>\n            </div>\n        </div>\n    </form>\n    <div class=\"form-group\">\n        <div class=\"col-sm-offset-4 col-sm-8\">\n           <button (click)=\"testPost(p_lname.value, p_fname.value, p_dob.value, pid.value, p_gender.value, dob.value)\" class=\"btn btn-primary\"> Submit </button>\n        </div>\n    </div>\n    </div>",
                        providers: [http_service_1.HTTPService]
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HTTPService])
                ], PatientRegisterComponent);
                return PatientRegisterComponent;
            }());
            exports_1("PatientRegisterComponent", PatientRegisterComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGllbnRSZWdpc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE4T0E7Z0JBR0ksa0NBQW9CLFdBQXdCO29CQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtnQkFFNUMsQ0FBQztnQkFDRCwyQ0FBUSxHQUFSLFVBQVMsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUc7b0JBQ3hDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFDLEVBQ3pGLFNBQVMsQ0FDWixDQUFDLFNBQVMsQ0FDUCxVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLEVBQ3pCLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFWLENBQVUsRUFDakIsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQXZCLENBQXVCLENBQ2hDLENBQUM7Z0JBQ04sQ0FBQztnQkFuUEw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsaUJBQWlCO3dCQUMxQixRQUFRLEVBQ0osOHlZQThORzt3QkFDUCxTQUFTLEVBQUMsQ0FBQywwQkFBVyxDQUFDO3FCQUMxQixDQUFDOzs0Q0FBQTtnQkFpQkYsK0JBQUM7WUFBRCxDQWZBLEFBZUMsSUFBQTtZQWZELCtEQWVDLENBQUEiLCJmaWxlIjoicGF0aWVudFJlZ2lzdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB3ZW5keXdhbmcgb24gMjAxNi0wMy0yOS5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnQsSW5wdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIVFRQU2VydmljZX0gZnJvbSAnLi9odHRwLnNlcnZpY2UnO1xuaW1wb3J0IHtQYXRpZW50fSBmcm9tICcuL3BhdGllbnQnO1xuaW1wb3J0IHtlcnJvcn0gZnJvbSBcInV0aWxcIjtcbmltcG9ydCB7SGVhZGVyc30gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6J3BhdGllbnRyZWdpc3RlcicsXG4gICAgdGVtcGxhdGU6XG4gICAgICAgIGBcbjxoZWFkPlxuICAgIDx0aXRsZT5FUldhaXRpbmdUaW1lPC90aXRsZT5cbiAgICA8bGluayBocmVmPVwiLy9uZXRkbmEuYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4xLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY29kZS5hbmd1bGFyanMub3JnLzIuMC4wLWFscGhhLjQ2L2h0dHAuZGV2LmpzXCI+PC9zY3JpcHQ+XG48L2hlYWQ+XG48Ym9keT5cbjxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWludmVyc2UgbmF2YmFyLWZpeGVkLXRvcFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiLi4vaG9tZVwiPkVSV2FpdGluZ1RpbWU8L2E+XG4gICAgPC9kaXY+XG48L25hdj5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXJcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDEwMHB4XCI+XG4gICAgICAgIDxoMT5SZWdpc3RlciBZb3VyIFBhdGllbnQ8L2gxPlxuICAgIDwvZGl2PlxuICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiByb2xlPVwiZm9ybVwiIGNsYXNzPVwibG9naW4tZm9ybSBmb3JtLWhvcml6b250YWxcIj5cbiAgICAgICAgPGlucHV0IG5hbWU9XCJfY3NyZlwiIHR5cGU9XCJoaWRkZW5cIi8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtc20tNFwiPlBhdGllbnQgTGFzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiZm5hbWVcIiBwbGFjZWhvbGRlcj1cIlBhdGllbnQgTGFzdCBOYW1lXCIgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAjcF9sbmFtZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1zbS00XCI+UGF0aWVudCBGaXJzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibG5hbWVcIiBwbGFjZWhvbGRlcj1cIlBhdGllbnQgRmlyc3QgTmFtZVwiIHJlcXVpcmVkPVwicmVxdWlyZWRcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgI3BfZm5hbWU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtc20tNFwiPkdlbmRlcjwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLThcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImdlbmRlclwiIHBsYWNlaG9sZGVyPVwiR2VuZGVyXCIgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAjcF9nZW5kZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtc20tNFwiPlBhdGllbnQgSUQ8L2xhYmVsPlxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLThcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInBpZFwiIHBsYWNlaG9sZGVyPVwiUGF0aWVudCBJRFwiIHJlcXVpcmVkPVwicmVxdWlyZWRcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgI3BpZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1zbS00XCIgI2RvYj5EYXRlIG9mIEJpcnRoPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sc1wiPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJkb2ItZGF5XCIgaWQ9XCJkb2ItZGF5XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkRheTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi0tLTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjAxXCI+MDE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwMlwiPjAyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMDNcIj4wMzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjA0XCI+MDQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwNVwiPjA1PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMDZcIj4wNjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjA3XCI+MDc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwOFwiPjA4PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMDlcIj4wOTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwXCI+MTA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMVwiPjExPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTJcIj4xMjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEzXCI+MTM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxNFwiPjE0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTVcIj4xNTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE2XCI+MTY8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxN1wiPjE3PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMThcIj4xODwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5XCI+MTk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMFwiPjIwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjFcIj4yMTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIyXCI+MjI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyM1wiPjIzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjRcIj4yNDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjI1XCI+MjU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyNlwiPjI2PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjdcIj4yNzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjI4XCI+Mjg8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyOVwiPjI5PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMzBcIj4zMDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjMxXCI+MzE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImRvYi1tb250aFwiIGlkPVwiZG9iLW1vbnRoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+TW9udGg8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLS0tLTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjAxXCI+SmFudWFyeTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjAyXCI+RmVicnVhcnk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwM1wiPk1hcmNoPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMDRcIj5BcHJpbDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjA1XCI+TWF5PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMDZcIj5KdW5lPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMDdcIj5KdWx5PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMDhcIj5BdWd1c3Q8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwOVwiPlNlcHRlbWJlcjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwXCI+T2N0b2Jlcjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjExXCI+Tm92ZW1iZXI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMlwiPkRlY2VtYmVyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJkb2IteWVhclwiIGlkPVwiZG9iLXllYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5ZZWFyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LS0tLTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwMTJcIj4yMDEyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjAxMVwiPjIwMTE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDEwXCI+MjAxMDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwMDlcIj4yMDA5PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjAwOFwiPjIwMDg8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDA3XCI+MjAwNzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwMDZcIj4yMDA2PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjAwNVwiPjIwMDU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDA0XCI+MjAwNDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwMDNcIj4yMDAzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjAwMlwiPjIwMDI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDAxXCI+MjAwMTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwMDBcIj4yMDAwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTk5OVwiPjE5OTk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOTk4XCI+MTk5ODwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5OTdcIj4xOTk3PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTk5NlwiPjE5OTY8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOTk1XCI+MTk5NTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5OTRcIj4xOTk0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTk5M1wiPjE5OTM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOTkyXCI+MTk5Mjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5OTFcIj4xOTkxPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTk5MFwiPjE5OTA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOTg5XCI+MTk4OTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5ODhcIj4xOTg4PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTk4N1wiPjE5ODc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOTg2XCI+MTk4Njwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5ODVcIj4xOTg1PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTk4NFwiPjE5ODQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOTgzXCI+MTk4Mzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5ODJcIj4xOTgyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTk4MVwiPjE5ODE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOTgwXCI+MTk4MDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5NzlcIj4xOTc5PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTk3OFwiPjE5Nzg8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOTc3XCI+MTk3Nzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5NzZcIj4xOTc2PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTk3NVwiPjE5NzU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOTc0XCI+MTk3NDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5NzNcIj4xOTczPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTk3MlwiPjE5NzI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOTcxXCI+MTk3MTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5NzBcIj4xOTcwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTk2OVwiPjE5Njk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOTY4XCI+MTk2ODwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5NjdcIj4xOTY3PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTk2NlwiPjE5NjY8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOTY1XCI+MTk2NTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5NjRcIj4xOTY0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTk2M1wiPjE5NjM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOTYyXCI+MTk2Mjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5NjFcIj4xOTYxPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTk2MFwiPjE5NjA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOTU5XCI+MTk1OTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5NThcIj4xOTU4PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTk1N1wiPjE5NTc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOTU2XCI+MTk1Njwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5NTVcIj4xOTU1PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTk1NFwiPjE5NTQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOTUzXCI+MTk1Mzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5NTJcIj4xOTUyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTk1MVwiPjE5NTE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOTUwXCI+MTk1MDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5NDlcIj4xOTQ5PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTk0OFwiPjE5NDg8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOTQ3XCI+MTk0Nzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5NDZcIj4xOTQ2PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTk0NVwiPjE5NDU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOTQ0XCI+MTk0NDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5NDNcIj4xOTQzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTk0MlwiPjE5NDI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOTQxXCI+MTk0MTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5NDBcIj4xOTQwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTkzOVwiPjE5Mzk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOTM4XCI+MTkzODwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5MzdcIj4xOTM3PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTkzNlwiPjE5MzY8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOTM1XCI+MTkzNTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5MzRcIj4xOTM0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTkzM1wiPjE5MzM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOTMyXCI+MTkzMjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5MzFcIj4xOTMxPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTkzMFwiPjE5MzA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOTI5XCI+MTkyOTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5MjhcIj4xOTI4PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTkyN1wiPjE5Mjc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOTI2XCI+MTkyNjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5MjVcIj4xOTI1PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTkyNFwiPjE5MjQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOTIzXCI+MTkyMzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5MjJcIj4xOTIyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTkyMVwiPjE5MjE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOTIwXCI+MTkyMDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5MTlcIj4xOTE5PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTkxOFwiPjE5MTg8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOTE3XCI+MTkxNzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5MTZcIj4xOTE2PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTkxNVwiPjE5MTU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOTE0XCI+MTkxNDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5MTNcIj4xOTEzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTkxMlwiPjE5MTI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOTExXCI+MTkxMTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5MTBcIj4xOTEwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTkwOVwiPjE5MDk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOTA4XCI+MTkwODwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5MDdcIj4xOTA3PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTkwNlwiPjE5MDY8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOTA1XCI+MTkwNTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5MDRcIj4xOTA0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTkwM1wiPjE5MDM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOTAxXCI+MTkwMTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5MDBcIj4xOTAwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLW9mZnNldC00IGNvbC1zbS04XCI+XG4gICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInRlc3RQb3N0KHBfbG5hbWUudmFsdWUsIHBfZm5hbWUudmFsdWUsIHBfZG9iLnZhbHVlLCBwaWQudmFsdWUsIHBfZ2VuZGVyLnZhbHVlLCBkb2IudmFsdWUpXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj4gU3VibWl0IDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gLFxuICAgIHByb3ZpZGVyczpbSFRUUFNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgUGF0aWVudFJlZ2lzdGVyQ29tcG9uZW50IHtcbiAgICBwYXRpZW50OlBhdGllbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBTZXJ2aWNlOiBIVFRQU2VydmljZSkge1xuXG4gICAgfVxuICAgIHRlc3RQb3N0KHBfbG5hbWUsIHBfZm5hbWUsIHBpZCwgaXNfbWFsZSwgZG9iKXtcbiAgICAgICAgdGhpcy5odHRwU2VydmljZS5wb3N0KHtwX2xuYW1lOnBfbG5hbWUsIHBfZm5hbWU6cF9mbmFtZSwgcGlkOnBpZCwgaXNfbWFsZTogaXNfbWFsZSwgZG9iOiBkb2J9LFxuICAgICAgICAgICAgJ3BhdGllbnQnXG4gICAgICAgICkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJjb21wbGV0ZVwiKVxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
