webpackJsonp([1,4],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_global__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.appGlobal = __WEBPACK_IMPORTED_MODULE_1__app_global__["a" /* AppGlobal */].getInstance();
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(188),
        styles: [__webpack_require__(174)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_header_header_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_footer_footer_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_index_index_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routes__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__my_service_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular_2_local_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_filter_pipe__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_about_about_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_left_left_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_right_right_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_store_store_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_staff_staff_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_customer_customer_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_license_license_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_setting_setting_component__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {ToastModule} from 'ng2-toastr/ng2-toastr';










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__pages_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_8__pages_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pages_index_index_component__["a" /* IndexComponent */],
            __WEBPACK_IMPORTED_MODULE_15__pipes_filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_16__pages_about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_17__pages_left_left_component__["a" /* LeftComponent */],
            __WEBPACK_IMPORTED_MODULE_18__pages_right_right_component__["a" /* RightComponent */],
            __WEBPACK_IMPORTED_MODULE_19__pages_store_store_component__["a" /* StoreComponent */],
            __WEBPACK_IMPORTED_MODULE_20__pages_staff_staff_component__["a" /* StaffComponent */],
            __WEBPACK_IMPORTED_MODULE_21__pages_customer_customer_component__["a" /* CustomerComponent */],
            __WEBPACK_IMPORTED_MODULE_22__pages_license_license_component__["a" /* LicenseComponent */],
            __WEBPACK_IMPORTED_MODULE_23__pages_setting_setting_component__["a" /* SettingComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_routes__["a" /* routes */], { useHash: true }),
            __WEBPACK_IMPORTED_MODULE_14_angular_2_local_storage__["LocalStorageModule"].withConfig({
                prefix: '',
                storageType: 'localStorage'
            })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__app_global__["a" /* AppGlobal */], __WEBPACK_IMPORTED_MODULE_13__my_service_service__["a" /* MyServiceService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_login_login_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_setting_setting_component__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });


var routes = [
    { path: '', redirectTo: 'setting', pathMatch: 'full' },
    { path: 'setting', component: __WEBPACK_IMPORTED_MODULE_1__pages_setting_setting_component__["a" /* SettingComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__pages_login_login_component__["a" /* LoginComponent */] }
    /*{path: '/setting/...', name: 'Home', component: HomeComponent}
    {path: '/', redirectTo: ['']},
    {path: '/user/...', name: 'User', component: UserComponent},
    {path: '/404', name: 'NotFound', component: NotFoundComponent},
    
    {path: '/*path', redirectTo: ['NotFound']}*/
    /*{ path: '', redirectTo: 'login', pathMatch: 'full' },*/
    /*  {
        path: '', ,
        component: HomeComponent
      },*/
    /*  { path: 'setting', component: SettingComponent },
      { path: 'login', component: LoginComponent },*/
    /* { path: 'about', component: AboutComponent },*/
    /*{ path: 'staff', component: StaffComponent },*/
    /*{ path: ':login', component: LoginComponent },
    { path: 'index', component: IndexComponent ,children: [
        { path: '', redirectTo: 'store', pathMatch: 'full' },
        { path: 'store', component: StoreComponent },
        { path: 'staff', component: StaffComponent},
        { path: 'customer', component:CustomerComponent},
        { path: 'license', component:LicenseComponent},
  
          
      ]},*/
    //  { path: 'home', component: HomeComponent},
    //{ path: 'about', component: AboutComponent},
    /* { path: 'dogs', component: HomeComponent}*/
];
/*
   import {ActivatedRoute} from "@angular/router";
   
   export class AboutList {
       id: Object;
       constructor(public route:ActivatedRoute) {
           this.id = {};
       }
       ngOnInit() {
           this.route.params.subscribe(params => {
               this.id = params  // {id: "xxx"}
           });
       }
   }
   
   
   直接获取id值
   this.route.snapshot.params["id"]
https://plnkr.co/edit/gsJxf6ukOXd4kNjLLVR3?p=preview 路由实例
[routerLink]="['user', user.id, 'details']"
/user/:id/details
ngOnInit() {
  this.sub = this.router.routerState.parent(this.route).params.subscribe(params => {
    this.parentRouteId = +params["id"];
  });
 // 相当于window.location.href，界面跳转
        router.navigateByUrl('home')

 ngOnInit() {
    this.route.params.subscribe((values: {id: number}) => {
      this.currentvalue = values.id;
    })
  }
{ path: '**', component: PageNotFoundComponent }
  <h1>Angular Router</h1>
  <nav>
    <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>


outlet: 'auxoutlet'{aux:'/auxRoute', name: 'AuxPath', component: SecondComponent}
import { ContactsListComponent } from './contacts-list';
import { ContactsDetailComponent } from './contacts-detail';
 callfirst() {
    this.value = 1;
    this.router.navigate(['/second', {outlets: {'secondchild': [this.value]}}]);
  }
 
callsecond() {
    this.value = 2;
    this.router.navigate(['/second', {outlets: {'secondchild': [this.value]}}]);
  }

<router-outlet name="firstchild"></router-outlet>
<router-outlet name="secondchild"></router-outlet>


 <li><a [routerLink]="['/second', {outlets: {firstchild: ['firstchildcomp'], secondchild: ['secondchildcomp']}}]">Secondscreen</a></li>
         this.router.navigate(['/second', {outlets: {'secondchild': [this.value]}}]);


export const ContactsAppRoutes = [
  { path: '', component: ContactsListComponent },
  { path: 'contacts/:id', component: ContactsDetailComponent }
];

3<button md-button
  [routerLink]="['/speakers', {outlets: {'list': ['speakersList'], 'bio': ['none']}}]">
  Speakers
</button>
4
5 {
    path: 'home',  // you can keep it empty if you do not want /home
    component: 'appComponent',
    children: [
        {
            path: '',
            component: childOneComponent,
            outlet: 'child1'
        },
        {
            path: '',
            component: childTwoComponent,
            outlet: 'child2'
        }
    ]
}
6
7<a [routerLink]="'/team/3(aux:/chat;open=true)'">Test</a>

<a [routerLink]="['/team/3', {outlets: {aux: 'chat'}}]">c</a>
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent }
];
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'speakers', component: SpeakersComponent, children: [
    { path: 'speakersList', component: SpeakersListComponent, outlet: 'list' },
    { path: ':id', component: BioComponent, outlet: 'bio' }
  ] }
];
1.this.router.navigate(['user', 1]);
以根路由为起点跳转

2.this.router.navigate(['user', 1],{relativeTo: route});
默认值为根路由，设置后相对当前路由跳转，route是ActivatedRoute的实例，使用需要导入ActivatedRoute

3.this.router.navigate(['user', 1],{ queryParams: { id: 1 } });
路由中传参数 /user/1?id=1

4.this.router.navigate(['view', 1], { preserveQueryParams: true });
默认值为false，设为true，保留之前路由中的查询参数/user?id=1 to /view?id=1

5.this.router.navigate(['user', 1],{ fragment: 'top' });
路由中锚点跳转 /user/1#top

6.this.router.navigate(['/view'], { preserveFragment: true });
默认值为false，设为true，保留之前路由中的锚点/user/1#top to /view#top

7.this.router.navigate(['/user',1], { skipLocationChange: true });
默认值为false，设为true路由跳转时浏览器中的url会保持不变，但是传入的参数依然有效

8.this.router.navigate(['/user',1], { replaceUrl: true });
未设置时默认为true，设置为false路由不会进行跳转
*/ 
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(aroute) {
        this.aroute = aroute;
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.aroute.params.subscribe(function (params) {
            console.log(params);
        });
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(189),
        styles: [__webpack_require__(175)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], AboutComponent);

var _a;
/* import {ActivatedRoute} from "@angular/router";
   
   export class AboutList {
       id: Object;
       constructor(public route:ActivatedRoute) {
           this.id = {};
       }
       ngOnInit() {
           this.route.params.subscribe(params => {
               this.id = params  // {id: "xxx"}
           });
       }
   }
   
   
   直接获取id值
   this.route.snapshot.params["id"]*/ 
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_service_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CustomerComponent = (function () {
    function CustomerComponent(myService, router) {
        this.myService = myService;
        this.router = router;
        this.appGlobal = __WEBPACK_IMPORTED_MODULE_1__app_global__["a" /* AppGlobal */].getInstance();
        this.searchData = {};
        /*    public filterQuery = "";
            public rowsOnPage = 10;
            public sortBy = "email";
            public sortOrder = "asc";*/
        //config["currentPage"]:number=1;
        this.config = {};
        this.customers = [];
        this.customer = {};
        this.searchInfo = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]();
        this.status = true;
        this.modal = false;
        this.config["total"] = 0;
        this.config["pageOnCount"] = 3;
        this.config["screenOnPage"] = 5;
        this.config["totalPages"] = [];
        this.config["currentPage"] = 1;
        this.config["startPage"] = 0;
        this.config["endPage"] = 10;
        this.config["searchData"] = {};
        this.config["searchData"]["status"] = "true";
    }
    CustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*i.currentTarget.value*/
        this.search(1);
        this.searchInfo.valueChanges
            .debounceTime(600)
            .distinctUntilChanged()
            .map(function (i) { return i; }).subscribe(function (val) {
            _this.config["searchData"]["searchInfo"] = val;
            _this.search(1);
        });
        /* this.status.valueChanges
                  .debounceTime(600)
                  .distinctUntilChanged()
                  .map(i => i).subscribe(val => {
                     this.config["searchData"]["status"]=val;
                     console.log("============");
                     console.log(val);
                     console.log("============");
                     this.search(1);
            });*/
    };
    CustomerComponent.prototype.openCustomer = function (item) {
        this.customer = JSON.parse(JSON.stringify(item));
        this.modal = true;
    };
    CustomerComponent.prototype.save = function () {
        var _this = this;
        this.myService.service("/customers/" + this.customer["_id"], "put", this.customer).subscribe(function (data) {
            if (!!data) {
                _this.search(_this.config["currentPage"]);
                _this.modal = false;
            }
        });
    };
    CustomerComponent.prototype.onChange = function (event) {
        console.log(this.config["searchData"]["searchInfo"]);
        this.search(1);
    };
    CustomerComponent.prototype.search = function (num) {
        var _this = this;
        var sign = false;
        if (!isNaN(num)) {
            this.config["currentPage"] = num;
            sign = true;
        }
        else if (num == "prev" && this.config["startPage"] > 0) {
            this.config["currentPage"] = this.config["startPage"] - 1 > 0 ? this.config["startPage"] - 1 : 1;
            sign = true;
        }
        else if (num == "next" && this.config["endPage"] < this.config["totalPages"].length) {
            this.config["currentPage"] = this.config["endPage"] + 1;
            sign = true;
        }
        if (sign) {
            if (this.config["currentPage"] >= this.config["screenOnPage"] / 2 && this.config["screenOnPage"] < this.config["totalPages"].length) {
                this.config["startPage"] = this.config["currentPage"] - this.config["screenOnPage"] / 2; //16
                this.config["endPage"] = this.config["startPage"] + this.config["screenOnPage"] < this.config["totalPages"].length ? this.config["startPage"] + this.config["screenOnPage"] : this.config["totalPages"].length;
                this.config["startPage"] = this.config["endPage"] - this.config["screenOnPage"] > 0 ? this.config["endPage"] - this.config["screenOnPage"] : this.config["startPage"];
            }
            else {
                this.config["startPage"] = 0;
                this.config["endPage"] = this.config["screenOnPage"];
            }
            this.myService.service("/customers/query", "post", this.config).subscribe(function (data) {
                if (!!data) {
                    _this.config["totalPages"] = [];
                    _this.appGlobal.toastTime = 0.5;
                    _this.config["total"] = data.total;
                    _this.customers = data.data;
                    for (var i = 1; i <= Math.ceil(_this.config["total"] / _this.config["pageOnCount"]); i++) {
                        _this.config["totalPages"].push(i);
                    }
                    _this.config["endPage"] = _this.config["totalPages"].length > _this.config["endPage"] ? _this.config["endPage"] : _this.config["totalPages"].length;
                }
            });
        }
    };
    return CustomerComponent;
}());
CustomerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-customer',
        template: __webpack_require__(190),
        styles: [__webpack_require__(176)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__my_service_service__["a" /* MyServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__my_service_service__["a" /* MyServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CustomerComponent);

var _a, _b;
//# sourceMappingURL=customer.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(191),
        styles: [__webpack_require__(177)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    function HeaderComponent(storeService, router) {
        this.storeService = storeService;
        this.router = router;
        this.appGlobal = __WEBPACK_IMPORTED_MODULE_1__app_global__["a" /* AppGlobal */].getInstance();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.exit = function () {
        this.appGlobal.userInfo = {};
        this.router.navigate([this.storeService.get("QRC")]);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(192),
        styles: [__webpack_require__(178)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
/*import { Component,Output,Directive,EventEmitter, ElementRef, Input ,ViewChild,Renderer,OnInit} from '@angular/core';
import { NavController, NavParams,Content} from 'ionic-angular';
import { AppGlobal } from '../../app/app-global';

import { MyService } from '../../providers/my-service';
import {Location} from '@angular/common';
import { LoginPage } from '../../pages/login/login';


@Component({
    
  selector: 'page-header',
  templateUrl: 'header.html',
  providers: [AppGlobal]
  
  
})
 
export class HeaderPage implements  OnInit{
@Output() parentNav:EventEmitter<string>= new EventEmitter();
appGlobal = AppGlobal.getInstance();
navFirst:string="Store";
 constructor(private nyService: MyService,private navCtrl: NavController) {}
 ngOnInit(){
   this.appGlobal.navInfo=["Store","Option","Menu","Order","Customer","Report","Permission"];
 }
navs(navName:string){
  //console.log(event.target)
 
  this.parentNav.emit(navName);
    //this.navCtrl.push(IndexPage,{})}
}
exit(){
    this.appGlobal.userInfo={};
    this.navCtrl.setRoot(LoginPage);
}
language(){
  
}
}
*/ 
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        //this.router.navigate(['index',{}] );//{ id:mobile.id }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(193),
        styles: [__webpack_require__(179)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_service_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IndexComponent = (function () {
    function IndexComponent(myService, router, storeService) {
        this.myService = myService;
        this.router = router;
        this.storeService = storeService;
        this.appGlobal = __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* AppGlobal */].getInstance();
        this.testList = [];
        this.testList = [
            { "name": "a", "age": 1 }, { "name": "a1", "age": 2 },
            { "name": "a3", "age": 1 }, { "name": "a4", "age": 2 },
            { "name": "a5", "age": 1 }, { "name": "a6", "age": 2 },
            { "name": "a7", "age": 1 }, { "name": "a8", "age": 2 }
        ];
    }
    IndexComponent.prototype.ngOnInit = function () {
        if (!this.appGlobal.userInfo["accessToken"]) {
            // this.router.navigate([this.storeService.get("QRC")]);
        }
        //console.log(this.storeService.get("QRCURL"));
        //this.router.navigate(["about",{}]);
        //this.router.navigate(['/about', {outlets: {'about'}}]);
        //  	 this.router.navigate(["about"],{relativeTo:this.aRoute});
        // this.router.navigate(['home',{}] );//{ id:mobile.id }
        //callfirst() {
        //  this.value = 1;
        // this.router.navigate(['/second', {outlets: {'secondchild': [this.value]}}]);
        //}
        //this.router.navigate(['/speakers', {outlets: {'bio': [id]}}]);
    };
    IndexComponent.prototype.linkTo = function (item) {
        console.log(item);
        this.router.navigate([item.url]);
        //,{relativeTo:this.aRoute}
        //    var json={"xx":"xx"}
        //this.router.navigate(['/index/about/2',json]);
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-index',
        template: __webpack_require__(194),
        styles: [__webpack_require__(180)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__my_service_service__["a" /* MyServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__my_service_service__["a" /* MyServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"]) === "function" && _c || Object])
], IndexComponent);

var _a, _b, _c;
//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeftComponent = (function () {
    function LeftComponent() {
    }
    LeftComponent.prototype.ngOnInit = function () {
    };
    return LeftComponent;
}());
LeftComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-left',
        template: __webpack_require__(195),
        styles: [__webpack_require__(181)]
    }),
    __metadata("design:paramtypes", [])
], LeftComponent);

//# sourceMappingURL=left.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_service_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LicenseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LicenseComponent = (function () {
    function LicenseComponent(myService, router, renderer, elementRef) {
        this.myService = myService;
        this.router = router;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.licenses = [];
        this.license = {};
        this.licenseSub = {};
        this.modal = false;
        this.keyValue = "";
    }
    LicenseComponent.prototype.initLicense = function () {
        this.license["addressInfo"] = {};
        this.licenseSub = {};
        this.licenseSub["type"] = "Normal";
    };
    LicenseComponent.prototype.ngOnInit = function () {
        this.initLicense();
        this.licensesList();
    };
    LicenseComponent.prototype.openLicense = function (item, pcKey) {
        this.initLicense();
        if (!!item) {
            this.license = JSON.parse(JSON.stringify(item));
            this.licenseSub["merchantId"] = this.license["merchantId"];
            this.licenseSub["pcKey"] = pcKey || "";
        }
        console.log(this.license);
        this.modal = true;
    };
    LicenseComponent.prototype.licensesList = function () {
        var _this = this;
        this.myService.service("/stores/licensesQuery", "post", {}).subscribe(function (data) {
            if (!!data) {
                _this.licenses = data;
            }
        });
    };
    LicenseComponent.prototype.saveLicense = function () {
        var _this = this;
        this.license["pcKey"] = this.licenseSub["pcKey"];
        this.license["licenseSub"] = this.licenseSub;
        if (!!this.license["_id"]) {
            this.myService.service("/stores/createLicensekey/" + this.license["_id"], "put", this.license).subscribe(function (data) {
                if (!!data) {
                    _this.license = data;
                    console.log(data);
                    _this.licenseSub["key"] = data["newKey"];
                    _this.licenseSub["merchantId"] = data["merchantId"];
                }
            });
        }
        else {
            this.myService.service("/stores/createLicensekey", "post", this.license).subscribe(function (data) {
                if (!!data) {
                    _this.license = data;
                    _this.licenseSub["key"] = data["newKey"];
                    _this.licenseSub["merchantId"] = data["merchantId"];
                }
            });
        }
    };
    LicenseComponent.prototype.copy = function (key) {
        var e;
        if (!!key) {
            e = this.key.nativeElement;
            e.value = key;
        }
        else {
            e = this.originKey.nativeElement;
        }
        e.select();
        document.execCommand('copy');
        //  timer.subscribe(t=> {this.keyValue=key; native.getAttribute("requestID" 
        //this.renderer.invokeElementMethod(this.key.nativeElement,'focus');
        //this.testKey="11111111111111";
        //this.renderer.invokeElementMethod(this.testKey.nativeElement,'select');
        //this.renderer.invokeElementMethod(this.testKey.nativeElement,'select');
        // })
        //this.renderer.invokeElementMethod(this.originKey.nativeElement,'focus');
        //http://plnkr.co/edit/rq50jYSeFQsliFWo7stU?p=preview
        //this.focusMe();
        //this.renderer.invokeElementMethod(this.key.nativeElement,'focus');
        // this.renderer.invokeElementMethod(this.key.nativeElement,'select');
        // var child = this.renderer.invokeElementMethod(this.elementRef.nativeElement, 'querySelector', ['div']);
        //console.log(child);
        //this.el.nativeElement.focus();
    };
    return LicenseComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('key'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], LicenseComponent.prototype, "key", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('originKey'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], LicenseComponent.prototype, "originKey", void 0);
LicenseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-license',
        template: __webpack_require__(196),
        styles: [__webpack_require__(182)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__my_service_service__["a" /* MyServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__my_service_service__["a" /* MyServiceService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _f || Object])
], LicenseComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=license.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RightComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RightComponent = (function () {
    function RightComponent() {
    }
    RightComponent.prototype.ngOnInit = function () {
    };
    return RightComponent;
}());
RightComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-right',
        template: __webpack_require__(198),
        styles: [__webpack_require__(184)]
    }),
    __metadata("design:paramtypes", [])
], RightComponent);

//# sourceMappingURL=right.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_service_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StaffComponent = (function () {
    function StaffComponent(myService, router) {
        this.myService = myService;
        this.router = router;
        this.appGlobal = __WEBPACK_IMPORTED_MODULE_1__app_global__["a" /* AppGlobal */].getInstance();
        /*@ViewChild('all') elAll; */
        this.role = {};
        this.user = {};
        this.roles = [];
        this.users = [];
        this.perms = [];
        this.copyPerms = [];
        this.isStaff = "Staff";
        this.isUser = -1;
        this.isRole = -1;
        this.allSelect = false;
        this.key = false;
        this.user["addressInfo"] = this.user["addressInfo"] || {};
        this.user["status"] = "true";
        this.role["status"] = "true";
    }
    StaffComponent.prototype.ngOnInit = function () {
        this.isStaff = "Staff";
        this.isUser = -1;
        this.isRole = -1;
        this.permsList();
        this.rolesList();
        this.usersList();
    };
    StaffComponent.prototype.openUR = function () {
        this.setPermsCheckBox(false, "ALL");
        if (this.isStaff == "Staff") {
            this.setRolesCheckBox(false, "ALL");
            this.user = {};
            this.isUser = -1;
            this.user["addressInfo"] = {};
            this.user["status"] = "true";
        }
        else {
            this.role = {};
            this.isRole = -1;
            this.role["status"] = "true";
        }
    };
    StaffComponent.prototype.saveUser = function () {
        var _this = this;
        this.user["roles"] = [];
        var permStr = "";
        for (var i = 0; i < this.roles.length; i++) {
            if (this.roles[i].key) {
                this.user["roles"].push(this.roles[i]._id);
                permStr += (this.roles[i].permissions.toString() || "");
            }
        }
        this.user["permissions"] = [];
        for (var i = 0; i < this.perms.length; i++) {
            for (var j = 0; j < this.perms[i].perms.length; j++) {
                if (permStr.indexOf(this.perms[i].perms[j].value) == -1 && this.perms[i].perms[j].key == true) {
                    this.user["permissions"].push(this.perms[i].perms[j].value);
                }
            }
        }
        if (this.user["_id"]) {
            console.log(this.user);
            this.myService.service("/admin/users/" + this.user["_id"], "put", this.user).subscribe(function (data) {
                if (!!data) {
                    _this.appGlobal.toastTime = 0.5;
                    /*this.user=data;
                    this.user["addressInfo"]=this.user["addressInfo"] || {};
                    if(data.status!="true"){
                        this.user={};
                        this.isUser=-1;
                    }*/
                    _this.usersList();
                    //this.users.push(data);
                }
            });
        }
        else {
            this.myService.service("/admin/users", "post", this.user).subscribe(function (data) {
                if (!!data) {
                    _this.appGlobal.toastTime = 0.5;
                    _this.user = data;
                    _this.isUser = _this.users.length;
                    _this.users.push(data);
                }
            });
        }
    };
    StaffComponent.prototype.saveRole = function () {
        var _this = this;
        this.role["permissions"] = [];
        for (var i = 0; i < this.perms.length; i++) {
            for (var j = 0; j < this.perms[i].perms.length; j++) {
                if (this.perms[i].perms[j].key) {
                    this.role["permissions"].push(this.perms[i].perms[j].value);
                }
            }
        }
        if (this.role["_id"]) {
            this.myService.service("/admin/roles/" + this.role["_id"], "put", this.role).subscribe(function (data) {
                if (!!data) {
                    _this.appGlobal.toastTime = 0.5;
                    _this.role = data;
                    if (data.status != "true") {
                        _this.role = {};
                        _this.isRole = -1;
                    }
                    _this.rolesList();
                }
            });
        }
        else {
            this.myService.service("/admin/roles", "post", this.role).subscribe(function (data) {
                if (!!data) {
                    _this.appGlobal.toastTime = 0.5;
                    _this.role = data;
                    _this.isRole = _this.roles.length;
                    _this.roles.push(data);
                }
            });
        }
    };
    StaffComponent.prototype.rolesList = function () {
        var _this = this;
        this.myService.service("/admin/roles", "get").subscribe(function (data) {
            if (!!data) {
                _this.appGlobal.toastTime = 0.5;
                _this.roles = data;
                for (var i = 0; i < data.length; i++) {
                    _this.roles[i]["key"] = false;
                }
            }
        });
    };
    StaffComponent.prototype.usersList = function () {
        var _this = this;
        this.myService.service("/admin/users", "get").subscribe(function (data) {
            if (!!data) {
                _this.appGlobal.toastTime = 0.5;
                _this.users = data;
                console.log(_this.users);
                //this.roles.push(data);
            }
        });
    };
    StaffComponent.prototype.permsList = function () {
        var _this = this;
        this.myService.service("/admin/permissions", "get").subscribe(function (data) {
            if (!!data) {
                _this.appGlobal.toastTime = 0.5;
                _this.perms = data;
                console.log(_this.perms);
                //this.roles.push(data);
            }
        });
    };
    StaffComponent.prototype.selectRole = function (item) {
        var _this = this;
        this.role = JSON.parse(JSON.stringify(item));
        var permStr = this.role["permissions"].toString() || "";
        var timer = __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].timer(10);
        timer.subscribe(function (t) {
            if (_this.isStaff == "Staff") {
                _this.user["permissions"] = _this.user["permissions"] || [];
                permStr = _this.user["permissions"].toString() || "";
                for (var i = 0; i < _this.roles.length; i++) {
                    if (_this.roles[i]["key"]) {
                        permStr += (_this.roles[i].permissions.toString() || "");
                    }
                }
            }
            for (var i = 0; i < _this.perms.length; i++) {
                for (var j = 0; j < _this.perms[i].perms.length; j++) {
                    if (permStr.indexOf(_this.perms[i].perms[j].value) != -1) {
                        _this.perms[i].perms[j].key = true;
                    }
                    else {
                        _this.perms[i].perms[j].key = false;
                    }
                }
            }
        });
    };
    StaffComponent.prototype.selectUser = function (item) {
        this.setPermsCheckBox(false, "ALL");
        this.user = JSON.parse(JSON.stringify(item));
        this.user["addressInfo"] = this.user["addressInfo"] || {};
        var rolesStr = this.user["roles"].toString() || "";
        var permsStr = this.user["permissions"].toString() || "";
        for (var i_1 = 0; i_1 < this.roles.length; i_1++) {
            if (rolesStr.indexOf(this.roles[i_1]._id) != -1) {
                this.roles[i_1].key = true;
                permsStr += this.roles[i_1]["permissions"].toString() || "";
            }
            else {
                this.roles[i_1].key = false;
            }
        }
        for (var i = 0; i < this.perms.length; i++) {
            for (var j = 0; j < this.perms[i].perms.length; j++) {
                if (permsStr.indexOf(this.perms[i].perms[j].value) != -1) {
                    this.perms[i].perms[j].key = true;
                }
                else {
                    this.perms[i].perms[j].key = false;
                }
            }
        }
    };
    StaffComponent.prototype.all = function (event) {
        this.setPermsCheckBox(event.target.checked, "ALL");
    };
    StaffComponent.prototype.groupAll = function (event, n) {
        this.setPermsCheckBox(event.target.checked, n);
    };
    StaffComponent.prototype.setPermsCheckBox = function (checked, n) {
        if (n == "ALL") {
            this.allSelect = checked;
            for (var i = 0; i < this.perms.length; i++) {
                this.perms[i].key = checked;
                for (var j = 0; j < this.perms[i].perms.length; j++) {
                    this.perms[i].perms[j].key = checked;
                }
            }
            console.log(this.perms);
        }
        else if (n >= 0) {
            for (var j = 0; j < this.perms[n].perms.length; j++) {
                this.perms[n].perms[j].key = checked;
            }
        }
    };
    StaffComponent.prototype.setRolesCheckBox = function (checked, n) {
        if (n == "ALL") {
            for (var i = 0; i < this.roles.length; i++) {
                this.roles[i]["key"] = checked;
            }
        }
        else if (n >= 0) {
            for (var j = 0; j < this.perms[n].perms.length; j++) {
                this.perms[n].perms[j].key = checked;
            }
        }
    };
    return StaffComponent;
}());
StaffComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-staff',
        template: __webpack_require__(200),
        styles: [__webpack_require__(186)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__my_service_service__["a" /* MyServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__my_service_service__["a" /* MyServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], StaffComponent);

var _a, _b;
//# sourceMappingURL=staff.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_service_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StoreComponent = (function () {
    function StoreComponent(myService, router, aRoute) {
        this.myService = myService;
        this.router = router;
        this.aRoute = aRoute;
        this.appGlobal = __WEBPACK_IMPORTED_MODULE_1__app_global__["a" /* AppGlobal */].getInstance();
        this.store = {};
    }
    StoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.aRoute.params.subscribe(function (params) {
            _this.store = JSON.parse(JSON.stringify(_this.appGlobal.storeInfo));
            if (!_this.store["addressInfo"])
                _this.store["addressInfo"] = {};
        });
    };
    StoreComponent.prototype.upload = function (event) {
        this.show(this.showPic, event.target.name);
    };
    StoreComponent.prototype.show = function (pic, name) {
        var _this = this;
        var file = this.uploadPic.nativeElement.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            var dataURL = reader.result;
            pic.nativeElement.src = dataURL;
        };
        reader.readAsDataURL(file);
        this.myService.upload("/uploadPic", file, name).subscribe(function (data) {
            if (!!data && !!data.key) {
                _this.store[data.key] = (data.value || "");
            }
        });
    };
    StoreComponent.prototype.uploadPicture = function () {
        this.uploadPic.nativeElement.click();
    };
    StoreComponent.prototype.save = function () {
        var _this = this;
        this.myService.service("/stores", "put", this.store).subscribe(function (data) { _this.store = (data || _this.store); _this.appGlobal.storeInfo = _this.store; });
        /*  }else{
                  this.myService.service("/stores","post",this.store).subscribe(
                     data=>{this.store=(data || this.store)},
                     err=>this.myService.toastError(err.message)
                     );
      
         }*/
    };
    return StoreComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('uploadPic'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], StoreComponent.prototype, "uploadPic", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('showPic'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], StoreComponent.prototype, "showPic", void 0);
StoreComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-store',
        template: __webpack_require__(201),
        styles: [__webpack_require__(187)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__my_service_service__["a" /* MyServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__my_service_service__["a" /* MyServiceService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object])
], StoreComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=store.component.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, args) {
        if (!value)
            return value;
        switch (args[0]) {
            case "=":
                if (typeof (args[1]) == "object") {
                    var key_1 = Object.keys(args[1])[0];
                    return value.filter(function (item) { return item[key_1] == args[1][key_1]; });
                }
                else {
                    return value.filter(function (item) { return item == args[1]; });
                }
            case "!=":
                if (typeof (args[1]) == "object") {
                    return [];
                }
                else {
                    return value.filter(function (item) { return item != args[1]; });
                }
            case "objectToArray":
                return Object.keys(value).map(function (key) { return value[key]; });
            case "objectToStr":
                return JSON.stringify(value);
        }
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filter',
        pure: false
    })
], FilterPipe);

/*
 transform(value: any, args: any[] = null): any {
    return Object.keys(value).map(key => value[key]);
  }


transform(value: any, args: any): any {
      if (filter && Array.isArray(items)) {
          let filterKeys = Object.keys(filter);
          return items.args(item =>
              filterKeys.reduce((memo, keyName) =>
                  (memo && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === "", true));
      } else {
          return items;
      }
    }
}*/
//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_finally__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_timer__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_global__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyServiceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











//import { ToastsManager } from 'ng2-toastr/ng2-toastr';
var MyServiceService = (function () {
    function MyServiceService(http) {
        this.http = http;
        this.appGlobal = __WEBPACK_IMPORTED_MODULE_10__app_global__["a" /* AppGlobal */].getInstance();
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json;charset=UTF-8' });
        this.url = "";
        // this.toastr.setRootViewContainerRef(vcr);
    }
    MyServiceService.prototype.toastr = function () {
    };
    MyServiceService.prototype.search = function (url, method, data, params, flag, error) {
        if (method === void 0) { method = "post"; }
        if (data === void 0) { data = {}; }
        if (params === void 0) { params = {}; }
        if (flag === void 0) { flag = false; }
        if (error === void 0) { error = false; }
        /* var search = new URLSearchParams()
         search.set('action', 'opensearch');
         search.set('search', term);
         search.set('format', 'json');*/
        this.url = this.appGlobal.server + url;
        return this.http
            .post(this.url, {})
            .map(function (request) { return request.json()[1]; });
    };
    MyServiceService.prototype.upload = function (url, fileToUpload, name) {
        /*constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
                 this.toastr.setRootViewContainerRef(vcr);
              }*/
        var _this = this;
        var input = new FormData();
        input.append("file", fileToUpload);
        input.append("input", name);
        this.url = this.appGlobal.server + url + "/" + this.appGlobal.userInfo["merchantId"];
        return this.http
            .post(this.url, input, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({}) })
            .map(function (res) {
            var json = res.json();
            if (!!json && !!json["message"]) {
                _this.appGlobal.error["message"] = json["message"];
                _this.appGlobal.error["type"] = "error";
                json = null;
            }
            return json;
        })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"].throw({ "code": "500", "message": "Backend Server Error" }); })
            .finally(function () { _this.appGlobal.loading = false; });
    };
    MyServiceService.prototype.service = function (url, method, data, params, flag, error) {
        var _this = this;
        if (method === void 0) { method = "post"; }
        if (data === void 0) { data = {}; }
        if (params === void 0) { params = {}; }
        if (flag === void 0) { flag = false; }
        if (error === void 0) { error = false; }
        //this.toastr.error('This is not good!', 'Oops!');
        //   this.toastr.custom('<span style="color: red">Message in red.</span>', null, {enableHTML: true});
        //  this.presentLoading();
        this.appGlobal.loading = true;
        this.url = this.appGlobal.server + url;
        if (!!this.appGlobal.userInfo && !!this.appGlobal.userInfo["accessToken"]) {
            this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json;charset=UTF-8', 'Authorization': "Bearer " + this.appGlobal.userInfo["accessToken"] });
        }
        this.appGlobal.flag = !flag || this.appGlobal.flag;
        var str = Object.keys(params).map(function (key) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
        }).join('&');
        var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */](str);
        if (this.appGlobal.flag) {
            this.appGlobal.flag = false;
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
                method: method,
                url: this.url,
                headers: this.headers,
                body: data,
                search: searchParams
            });
            return this.http.request(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Request */](options)).map(function (res) {
                var json = res.json();
                if (error) {
                    return json;
                }
                else if (!!json && !!json["message"]) {
                    _this.openMessage(json["message"]);
                    return null;
                }
                else {
                    _this.openMessage("Success !", "success");
                    return json;
                }
            })
                .catch(function (err) { _this.openMessage("Backend Server Error !"); return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"].throw({ "code": "500", "message": "Backend Server Error !" }); })
                .finally(function () {
                _this.appGlobal.loading = false;
                _this.appGlobal.flag = true;
            });
        }
    };
    MyServiceService.prototype.openMessage = function (message, type) {
        if (type === void 0) { type = "error"; }
        this.appGlobal.toastTime = 0.1;
        if (type == "error")
            this.appGlobal.toastTime = 1;
        if (this.appGlobal.toastTime > 0) {
            this.appGlobal.error["message"] = message;
            this.appGlobal.error["type"] = type;
            this.appGlobal.error["delay"] = this.appGlobal.toastTime * 1000;
            this.clossMessage();
        }
    };
    MyServiceService.prototype.clossMessage = function () {
        var _this = this;
        var timer = __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"].timer(this.appGlobal.toastTime * 1000);
        timer.subscribe(function (t) {
            _this.appGlobal.error["message"] = "";
            _this.appGlobal.error["type"] = "error";
        });
        /*  this.loading = this.loadingCtrl.create({
              content: "Please wait...",
              duration: 2000
            });
            this.loading.present();*/
    };
    return MyServiceService;
}());
MyServiceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object])
], MyServiceService);

var _a;
//http://www.cnblogs.com/keatkeat/p/5814708.html
/*
this.http.get(
    "http://localhost:58186/api/products",
    { headers: new Headers({ "Accept": "application/json" })}
).finally(() => {
    console.log("finally"); //不管 success or error 最后都会跑这个
}).subscribe(response => {
    console.log("success");
}, response => {
    console.log("fail");
}, () => {
    console.log("success final");
});
 result:Array<Object>;
http.get('friends.json')
                  .map(response => response.json())
                  .subscribe(result => this.result =result);
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class GitHubService {
    constructor(private http: Http) {
    }

    getRepos(username) {
        let repos = this.http.get(`https://api.github.com/users/${username}/repos`);
        return repos;

        ngOnInit() {
    this.getFoods();
  }
  getFoods() {
    this.http.get('/app/food.json')
      .map((res:Response) => res.json())
      .subscribe(
        data => { this.foods = data},
        err => console.error(err),
        () => console.log('done')
      );
  }
  */ 
//# sourceMappingURL=my-service.service.js.map

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "/*@import url(https://fonts.googleapis.com/css?family=Ubuntu:500);\r\n@import url(https://fonts.googleapis.com/css?family=Ubuntu+Mono);\r\n\r\nbody {\r\n  font-family: \"Ubuntu\";\r\n}*/\r\n/*//align-items:center;*/\r\n.loading{\r\n  z-index:99999;display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;position:absolute;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;\r\n  text-align: center;color:#fff;-webkit-animation:animation-loading 2.5s ease-in-out infinite;animation:animation-loading 2.5s ease-in-out infinite;\r\n  bottom:10%;\r\n}\r\n.loading img{\r\n  width:65px;\r\n  content:url('http://pngimg.com/uploads/car_logo/car_logo_PNG1667.png');\r\n}\r\n@-webkit-keyframes animation-loading {\r\n    0% {opacity: 0}\r\n    60%{opacity: 0.6}\r\n    100% {opacity: 1;}\r\n}\r\n@keyframes animation-loading {\r\n    0% {opacity: 0}\r\n    60%{opacity: 0.6}\r\n    100% {opacity: 1;}\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "\r\n\r\n.cusstomer-fieldset{\r\n  margin:20px 1%;\r\n  border-radius:6px;\r\n  position:relative;\r\n  display:-webkit-box;\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n  border:solid #888 1px;\r\n  padding:20px 0;\r\n}\r\n.cusstomer-fieldset:before{\r\n  content:\"\" attr(data-title) \"\";\r\n  position:absolute;\r\n  left:20px;\r\n  top:-12px;\r\n  font-size:20px;\r\n  font-weight: 600;\r\n   background:#fff;\r\n}\r\n\r\n\r\n.wrapTable {\r\n   line-height:2;\r\n  width: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient:horizontal;\r\n  -webkit-box-direction:normal;\r\n      -ms-flex-flow:row wrap;\r\n          flex-flow:row wrap;\r\n}\r\n.wrapTable .row {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 100%;\r\n          flex: 1 1 100%;\r\n  background: #f6f6f6;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient:horizontal;\r\n  -webkit-box-direction:normal;\r\n      -ms-flex-flow:row wrap;\r\n          flex-flow:row wrap;\r\n}\r\n.wrapTable  input {\r\n height:100%;width:100%;border:0;\r\n  background: #f6f6f6;\r\n }\r\n.wrapTable input:focus{\r\n  outline:none;\r\n}\r\n.wrapTable .row:nth-of-type(odd) {\r\n  background: #c9c9c9;\r\n}\r\n\r\n.wrapTable .row:nth-of-type(odd) input {\r\n  background: #c9c9c9;\r\n}\r\n.wrapTable .row.header {\r\n  font-weight: 600;\r\n  height:40px;line-height:40px;\r\n  color: #ffffff;\r\n  background: #5DBA9D;\r\n  text-align:center;\r\n}\r\n.wrapTable .cell {\r\n  padding: 0px 10px;\r\n }\r\n.wrapTable .row div{\r\n  -webkit-box-flex:1;\r\n      -ms-flex:1;\r\n          flex:1;border-right:solid #fff 1px;\r\n}\r\n\r\n\r\n\r\n.pagination {\r\n  list-style: none;\r\n  display: inline-block;\r\n  padding: 0;\r\n}\r\n.pagination li {\r\n  display: inline;\r\n  text-align: center;\r\n}\r\n.pagination a {\r\n  float: left;\r\n  display: block;\r\n  font-size: 14px;\r\n  text-decoration: none;\r\n  padding: 5px 12px;\r\n  color: #fff;\r\n  margin-left: -1px;\r\n  border: 1px solid transparent;\r\n  line-height: 1.5;\r\n}\r\n.pagination a.active {\r\n  cursor: default;\r\n}\r\n.pagination a:active {\r\n  outline: none;\r\n}\r\n\r\n.modal-1 li:first-child a {\r\n  border-radius: 6px 0 0 6px;\r\n}\r\n.modal-1 li:last-child a {\r\n  border-radius: 0 6px 6px 0;\r\n}\r\n.modal-1 a {\r\n  border-color: #ddd;\r\n  color: #000;\r\n  font-weight:500;\r\n  background: #fff;\r\n}\r\n.modal-1 a:hover {\r\n  background: #eee;\r\n}\r\n.modal-1 a.active, .modal-1 a:active {\r\n  border-color: #4285F4;\r\n  background: #5DBA9D;\r\n  color: #fff;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "/*.header{\r\n  display:flex;\r\n  background:#fff;margin:0;position:fixed;\r\n  flex-flow:row nowrap;width:100%;height:80px;padding:3px  10px; box-sizing: border-box;line-height:1;border-bottom:solid #ccc 1px;\r\n   min-width:1024px;flow-over:hidden;\r\n  }\r\n\r\n  input{display:none}\r\n  label:hover {color: red !important;transform:scale(1.2);font-weight:600;cursor: pointer; cursor: hand;text-decoration:none }\r\n  \r\n  \r\n   input[type=\"radio\"]:checked + label{\r\n   color: #fff !important;font-weight:600;cursor: pointer; cursor: hand;background:red;border-radius:10%;transform:scale(1)\r\n  }\r\n  label {padding:10px;text-align:center;}\r\n  label > div{\r\n  width:100%;text-align:center;font-size:20px\r\n  }*/\r\n\r\n  /*input[type=\"checkbox\"]:checked + label > img{\r\n        content:url(\"../assets/img/china.png\");\r\n  }*/\r\n  .exit{\r\n    float:right;line-height:50px;padding-right:10px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "\r\n/*.nav{\r\n\tborder-bottom:solid red 1px;\r\n}\r\n*/.nav-header{\r\nbackground-color:#5DBA9D;line-height:50px;height:50px;font-size:35px;padding:0 5px;\r\ncolor:#fff;\r\n}\r\n.nav-header i{\r\n\tfloat: right;line-height:50px;font-size:25px;\r\n}\r\n\r\n.nav-content{\r\nline-height:45px;height:45px;font-size:25px;padding:0 5px 0 10px;\r\ndisplay:block;\r\n}\r\n.nav-content:nth-of-type(odd){\r\nbackground:#eee !important;\r\n}\r\n.nav-content i{\r\n\tfloat: right;line-height:45px;\r\n}\r\n.radio-hide{\r\n\tdisplay:none;\r\n}\r\n.radio-hide:checked  + label{\r\n\tbackground:#666 !important;\r\n\tcolor:#FFFF00  !important;\r\n\tfont-weight:600;\r\n}\r\n\r\n/*.xxx{\r\n\tbackground:red;\r\n}\r\n.xxx:nth-child(odd){\r\nbackground:#eee !important;\r\n}\r\n.vv{\r\n\tbackground:red;\r\n}\r\n.vv:nth-child(odd){\r\n\tbackground:#eee !important;\r\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "\r\n/* .home{\r\n   \r\n   background-image: linear-gradient(to right, #84fab0 0%, #8fd3f4 51%, #84fab0 100%);\r\n@import url(http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300italic,700);\r\nfont-family: 'Open-Sans-Condensed', sans-serif;\r\n }*/\r\n\r\n.login{\r\nmargin:auto;\r\nmargin-top:10%;\r\ncolor:#000;\r\n\r\nmax-width:350px;\r\nbox-shadow: 10px 10px 22px -9px rgba(0,0,0,0.75);\r\nborder:solid #ddd 1px;\r\nbackground:#fff;\r\nposition: relative;\r\npadding:10px 8px 30px 8px;\r\n}\r\nimg{width:60px;right:-30px;position:absolute;top:-30px;border-radius:6px;max-height:80px}\r\nh1{position:relative;}\r\nh1:before,\r\nh1:after {\r\n  content: \"\";\r\n  height: 1px;\r\n  position: absolute;\r\n  top: 20px;\r\n  width: 28%;\r\n  }\r\n  h1:before {\r\n  background: -webkit-linear-gradient(left,  rgba(126,126,126,1) 0%,rgba(255,255,255,1) 100%);\r\n  left:0;\r\n} \r\n h1:after {\r\n  background: -webkit-linear-gradient(left,  rgba(255,255,255,1) 0%, rgba(126,126,126,1) 100%);\r\n  right:0;\r\n}\r\n.login-row{\r\n  position:relative; \r\n  margin-bottom: 40px; \r\n  margin-left:25px;\r\n  }\r\n.login-row input{\r\n  font-size:18px;\r\n  display:block;\r\n  width:90%;\r\n  border:none;\r\n  border-bottom:1px solid red;\r\n}\r\n.login-row label          {\r\n  color:#999; \r\n  font-size:14px;\r\n  font-weight:normal;\r\n  position:absolute;\r\n  pointer-events:none;\r\n  left:5px;\r\n  top:0px;\r\n  transition:0.2s ease all; \r\n\r\n}\r\n.login-row input:focus ~ label, .login-row input:valid ~ label    {\r\n  top:-20px;\r\n  font-size:14px;\r\n  color: #009688;\r\n}\r\n/*.box h1{\r\n  text-align:center;\r\n  flex: 0 0 100%;\r\n    padding-bottom:10px;\r\n    position:relative;\r\n    height:80px;line-height:80px;\r\n    \r\n }\r\n.box h1:before,\r\n.box h1:after {\r\n  content: \"\";\r\n  height: 1px;\r\n  position: absolute;\r\n  top: 40px;\r\n  width: 33%;\r\n  }\r\n.box h1:after {\r\n  background: -webkit-linear-gradient(left,  rgba(126,126,126,1) 0%,rgba(255,255,255,1) 100%);\r\n  right:0;\r\n}\r\n.box form{\r\n  width:100%;\r\n}\r\n.box h1:before {\r\n  background: -webkit-linear-gradient(right,  rgba(126,126,126,1) 0%,rgba(255,255,255,1) 100%);\r\n  left: 0;\r\n}\r\n\r\n.box .row{\r\n flex: 0 0 100%; display:flex;\r\n flex-flow:row wrap;height:60px;margin:auto;background:#fff;\r\n }\r\n\r\n.box .cell{ \r\n  position:relative; \r\n  flex: 0 0 100%;\r\n  margin:auto;\r\n  text-align:center;\r\n }\r\n.box .input{\r\n  font-size:1.8rem;\r\n  padding:5px;\r\n  display:inline-block;\r\n  width:95%; \r\n  border:none;\r\n  border-bottom:1px solid #757575;\r\n  \r\n}\r\n.box input:invalid {\r\n    border-bottom: 1px solid red;\r\n}\r\n.box label {\r\n  color:#999; \r\n  font-size:1.8rem;\r\n  font-weight:normal;\r\n  position:absolute;\r\n  pointer-events:none;\r\n  left:5px;\r\n  top:10px;\r\n  transition:0.2s ease all; \r\n  -moz-transition:0.2s ease all; \r\n  -webkit-transition:0.2s ease all;\r\n}\r\n\r\n.box ::-webkit-input-placeholder {\r\n  opacity: 0;\r\n  transition: inherit;\r\n}\r\n\r\n.box input:focus::-webkit-input-placeholder {\r\n  opacity: 0.3;\r\n}\r\n\r\n.box input:not(:placeholder-shown) + label,\r\n.box input:focus + label {\r\n  outline: none;\r\n  top:-16px;\r\n  font-size:1.4rem;\r\n  \r\n}\r\n.box input:focus {\r\n    outline:none;\r\n}\r\n*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".setting{\r\n\tbackground:#fff;height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;color:#fff;\r\n}\r\n.s-left{\r\n\t-webkit-box-flex:0;\r\n\t    -ms-flex:0 0 250px;\r\n\t        flex:0 0 250px;background:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap\r\n}\r\n.s-left > .sheader{\r\n\tbackground:#388E3C;font-size:1.5rem;text-align:center;height:40px;line-height:40px;\r\n}\r\n.s-left > .scontent{\r\n\t-webkit-box-flex:1;\r\n\t    -ms-flex:1;\r\n\t        flex:1;overflow-y:scroll;line-height:2;font-size:1.2rem;\r\n}\r\n.s-left .scontent >div{\r\n\tcolor:#000;padding:0 4px;border-bottom:solid #ccc 1px;display:-webkit-box;display:-ms-flexbox;display:flex;height:40px;line-height:40px;\r\n}\r\n.s-left .scontent > div:nth-of-type(odd){\r\n\tbackground:#ddd;\r\n}\r\n\r\n.s-right{\r\n\t-webkit-box-flex:1;\r\n\t    -ms-flex:1;\r\n\t        flex:1;border:solid #ddd 1px;color:#000;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column wrap;flex-flow:column wrap;\r\n}\r\n.s-select{\r\n\t/*border-bottom:solid #FF3D00 2px;*/background:#424242 !important;color:#FFFF00 !important;\r\n}\r\n.s-fieldset{\r\n  margin:35px 1%;\r\n  border-radius:6px;\r\n  -webkit-box-flex:0;\r\n      -ms-flex:0 1 98%;\r\n          flex:0 1 98%;\r\n  position:relative;\r\n  display:-webkit-box;\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n  border:solid #888 1px;\r\n  padding:20px 0;\r\n  -webkit-box-orient:horizontal;\r\n  -webkit-box-direction:normal;\r\n      -ms-flex-flow:row wrap;\r\n          flex-flow:row wrap;font-size:1.4rem\r\n}\r\n.s-fieldset > .sheader{\r\n \r\n  position:absolute;\r\n  left:20px;\r\n  top:-12px;\r\n  font-size:20px;\r\n  font-weight: 600;\r\n   background:#fff;\r\n}\r\n.s-submit{\r\n  margin:10px;\r\n\tmax-width:150px;\r\n\r\n\t\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n  display: none;\r\n}\r\nlabel {\r\n  cursor: pointer;\r\n}\r\ninput[type=\"checkbox\"] + label:before {\r\n  border: 1px solid #7f83a2;\r\n  content: \"\\A0\";\r\n  display: inline-block;\r\n  font: 20px/1em sans-serif;\r\n  height: 20px;\r\n  margin: 0 .5em 0 0;\r\n  padding: 0;\r\n  /*vertical-align: top;*/\r\n  width: 20px;\r\n}\r\ninput[type=\"checkbox\"]:checked + label:before {\r\n  background: #4CAF50;\r\n  color: #fff;\r\n  content: \"\\2713\";\r\n  text-align: center;\r\n}\r\ninput[type=\"checkbox\"]:checked + label:after {\r\n  font-weight: 900  ;\r\n}\r\n\r\n\r\ninput[type=\"radio\"] {\r\n  display: none;\r\n}\r\nlabel {\r\n  cursor: pointer;\r\n}\r\ninput[type=\"radio\"] + label:before {\r\n  border: 1px solid #7f83a2;\r\n  content: \"\\A0\";\r\n  display: inline-block;\r\n  font: 20px/1em sans-serif;\r\n  height: 20px;\r\n  margin: 0 .5em 0 0;\r\n  padding: 0;\r\n  border-radius:50%;\r\n  /*vertical-align: top;*/\r\n  width: 20px;\r\n}\r\ninput[type=\"radio\"]:checked + label:before {\r\n  background: #4CAF50;\r\n  color: #fff;\r\n  content: \"\\2713\";\r\n  text-align: center;\r\n}\r\ninput[type=\"radio\"]:checked + label:after {\r\n  font-weight: 900  ;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "\r\n\r\n\r\n.staff-fieldset{\r\n  margin:20px 1%;\r\n  border-radius:6px;\r\n  position:relative;\r\n  display:-webkit-box;\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n  border:solid #888 1px;\r\n  padding:20px 0;\r\n}\r\n.staff-fieldset:before{\r\n  content:\"\" attr(data-title) \"\";\r\n  position:absolute;\r\n  left:20px;\r\n  top:-12px;\r\n  font-size:20px;\r\n  font-weight: 600;\r\n   background:#fff;\r\n}\r\n.staff-header{\r\n\tbackground:#ddd;\r\n\tcolor:#888;\r\n\r\n}\r\ninput[type=radio]:checked  + label,input[type=radio]:checked  + label{\r\n\tborder-bottom:solid #FFFF00 2.5px;\r\n\tbackground:#666 !important;\r\n\tcolor:#FFFF00  !important;\r\n}\r\n\r\n.staff-submit{\r\n  max-width:200px;\r\n  position:absolute;\r\n  right:10px;\r\n  top:7px;\r\n}\r\n\r\n/*input[type=checkbox] + label span {\r\n  display: inline;\r\n  padding: 4px 8px;\r\n   background: #fff;\r\n  border: 1px solid #c9c9c9;\r\n  color:#fff;\r\n  font-weight:600;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;margin:0 10px\r\n}\r\ninput[type=checkbox]:checked + label span {\r\n\r\n \r\n  box-sizing: border-box;margin:0 10px;\r\n  background: #4CAF50 !important;\r\n  border: 1px solid #ccc  !important;\r\n}*/\r\n.staffdiv{\r\n\tline-height:45px;height:45px;font-size:25px;padding:0 5px 0 10px;\r\ndisplay:block;\r\n}\r\n.staffdiv:nth-of-type(odd){\r\nbackground:#eee;\r\n}\r\n.select{\r\n  background:#666 !important;\r\n\tcolor:#FFFF00  !important;\r\n\tfont-weight:600;\r\n}\r\n.select span{\r\n\tcolor:#fff !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "\r\n/*.input{\r\n  width:95%;\r\n  border:none;\r\n  border-bottom:1px solid red;\r\n  height:25px;line-height:25px;border:0;border-bottom:solid red 2px;\r\n  font-size:20px;\r\n}\r\nlabel          {\r\n  color:#999; \r\n  font-size:14px;\r\n  font-weight:normal;\r\n  position:absolute;\r\n  pointer-events:none;\r\n  left:5px;\r\n  top:0px;\r\n  transition:0.2s ease all; \r\n\r\n}\r\n.input:focus ~ label, .input:not(:placeholder-shown) + label {\r\n  top:-25px;\r\n  font-size:14px;\r\n  color: #009688;\r\n}\r\n*/\r\n\r\n/*.input:not(:placeholder-shown) + label,\r\ninput:focus + label {\r\n  outline: none;.input:valid ~ label,\r\n  top:-16px;\r\n  font-size:1.4rem;\r\n  \r\n}*/\r\n\r\nlabel:hover{\r\ncursor: auto !important; \r\n \r\n  \r\n}\r\n/*.logo:before{\r\n  content:\"xxx\";\r\n  position:absolute;\r\n  top:0;\r\n}*/\r\n/*label:active{\r\n  font-size:16px !important;\r\n  color: #009688;\r\n  top:5px;\r\n}\r\n*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports = "\r\n\t<div class=\"mask\" *ngIf=\"appGlobal.loading\">\r\n\t</div>\r\n\t<div class=\"loading\" *ngIf=\"appGlobal.loading\">\r\n\t\t    <div>\r\n\t\t\t  <h1>Loading...</h1>\r\n\t\t\t  <img src=\"\"/>\r\n\t\t\t</div>\r\n\t</div>\r\n\r\n<div class=\"toast flex-center toast-time{{appGlobal.error.delay}}\" *ngIf=\"appGlobal.error.message\">\r\n     <div class=\"va-center toast-{{appGlobal.error.type}}\">\r\n     <i class=\"fa fa-check va-center\" *ngIf=\"appGlobal.error.type=='success'\"  aria-hidden=\"true\"></i>\r\n\t <i class=\"fa fa-info-circle\" *ngIf=\"appGlobal.error.type=='info'\" aria-hidden=\"true\"></i>\r\n\t <i class=\"fa fa-exclamation-triangle\" *ngIf=\"appGlobal.error.type=='error'\" aria-hidden=\"true\"></i>\r\n\t <i class=\"fa fa-exclamation-triangle\" *ngIf=\"appGlobal.error.type=='warning'\" aria-hidden=\"true\"></i>    \r\n     <span class=\"va-center\">{{appGlobal.error.message}}</span>\r\n  </div>\r\n      \r\n</div>\r\n\r\n<router-outlet></router-outlet> "

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  about works!\r\n</p>\r\n"

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"flex flex-nocolumn h100\">\r\n<div  class=\"cusstomer-fieldset\"  data-title=\"Customer Search\" style=\"min-height:85px;\">\r\n\t\t\t\t<form   #f=\"ngForm\"\r\n\t\t\t          (ngSubmit)=\"search(1)\" class=\"w100 h100\">\r\n\t\t\t\t      <div class=\"form\">\r\n\t\t\t\t\t\t      \t<div style=\"flex:1;height:50px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t              <input placeholder=\" \"  AUTOCOMPLETE=\"off\"  [formControl]=\"searchInfo\"  name=\"name\" />\r\n\t\t\t\t\t                  <label>Filter by account/email/name/phone</label> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div style=\"flex:1;height:50px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row-other flex-row\" style=\"height:100%;align-items:flex-end;justify-content:center;\" >\r\n\t\t\t\t\t\t              \r\n\t\t\t\t\t                  <input type=\"checkbox\" [checked]='config[\"searchData\"][\"status\"]'  class=\"el-opacity\" id=\"RS\"\r\n\t\t\t\t\t                  [(ngModel)]='config[\"searchData\"][\"status\"]' (ngModelChange)=\"onChange($event)\" name=\"checkbox\">\r\n\t\t\t\t\t\t              <label for=\"RS\">Status</label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t </div>\r\n\t</form>     \r\n</div>\r\n\t\t<div class=\"wrapTable\" style=\"flex:0 0 45px\">\r\n\t\t\t\t\t<div class=\"row header\">\r\n\t\t\t\t\t\t      <div style=\"flex:0 0 50px;\">\r\n\t\t\t\t\t\t        &nbsp;&nbsp;#\r\n\t\t\t\t\t\t      </div>\r\n\t\t\t\t\t\t      <div class=\"cell\">\r\n\t\t\t\t\t\t        Account\r\n\t\t\t\t\t\t      </div>\r\n\t\t\t\t\t\t      <div class=\"cell\">\r\n\t\t\t\t\t\t        First Name\r\n\t\t\t\t\t\t      </div>\r\n\t\t\t\t\t\t      <div class=\"cell\">\r\n\t\t\t\t\t\t        Last Name\r\n\t\t\t\t\t\t      </div>\r\n\t\t\t\t\t\t      <div class=\"cell\">\r\n\t\t\t\t\t\t        Email\r\n\t\t\t\t\t\t      </div>\r\n\t\t\t\t\t\t      <div class=\"cell\">\r\n\t\t\t\t\t\t        Phone\r\n\t\t\t\t\t\t      </div>\r\n\t\t\t\t </div>\r\n\t\t</div>    \r\n\t\t<div  class=\"ofy\">\r\n\t\t\t\t\t   <div class=\"wrapTable\">\r\n\t\t\t\t\t\t     <div class=\"row\" *ngFor=\"let item of customers;let i=index\"  (click)=\"openCustomer(item)\">\r\n\t\t\t\t\t\t\t\t\t      <div style=\"flex:0 0 50px;text-align:center\">\r\n\t\t\t\t\t\t\t\t\t       &nbsp;&nbsp;<b>{{i+1+config[\"pageOnCount\"]*(config[\"currentPage\"]-1)}}</b>\r\n\t\t\t\t\t\t\t\t\t      </div>\r\n\t\t\t\t\t\t\t\t\t      <div class=\"cell\">\r\n\t\t\t\t\t\t\t\t\t        {{item.account}}\r\n\t\t\t\t\t\t\t\t\t      </div>\r\n\t\t\t\t\t\t\t\t\t      <div class=\"cell\">\r\n\t\t\t\t\t\t\t\t\t       {{item.firstName}}\r\n\t\t\t\t\t\t\t\t\t      </div>\r\n\t\t\t\t\t\t\t\t\t      <div class=\"cell\">\r\n\t\t\t\t\t\t\t\t\t        {{item.lastName}}\r\n\t\t\t\t\t\t\t\t\t      </div>\r\n\t\t\t\t\t\t\t\t\t      <div class=\"cell\">\r\n\t\t\t\t\t\t\t\t\t        {{item.email}}\r\n\t\t\t\t\t\t\t\t\t      </div>\r\n\t\t\t\t\t\t\t\t\t      <div class=\"cell\">\r\n\t\t\t\t\t\t\t\t\t        {{item.phoneNum1}}/{{item.phoneNum2}}\r\n\t\t\t\t\t\t\t\t\t      </div>\r\n\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\t\t           </div> \r\n\t\t </div>\r\n\t\t <div class=\"wrapTable flex-row flex-center\" style=\"flex:0 0 45px;\" >\r\n\t\t\t\t\t\t<b>Total:{{config[\"total\"]}}&nbsp;\t&nbsp;</b>\r\n\t\t\t\t\t\t\t\t\t<ul class=\"pagination modal-1\">\r\n\t\t\t\t\t\t\t\t\t  <li><a  (click)=\"search('prev')\" class=\"prev\">&laquo;</a></li>\r\n\t\t\t\t\t\t\t\t\t  <li  *ngFor=\"let item of  (config['totalPages'] ? config['totalPages'].slice(config['startPage'],config['endPage']): []);let i=index\">\r\n\t\t\t\t\t\t\t\t\t  <a  (click)=\"search(item)\"\r\n\t\t\t\t\t\t\t\t\t  [ngClass]=\"{'active':config['currentPage']==item}\" >{{item}}</a></li>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t  <li><a (click)=\"search('next')\" class=\"next\">&raquo;</a></li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\r\n\t\t </div>\r\n</div>\r\n\r\n<div class=\"mask\" *ngIf=\"!!modal\">\r\n</div>\r\n<div class=\"mask-flex flex-center\" *ngIf=\"!!modal\"> \r\n<div style=\"width:95%;height:95%;background:#fff;border-radius:8px;position:absolute;\">\r\n<i class=\"fa fa-times mask-close\"  (click)=\"modal=false\" aria-hidden=\"true\"></i>\r\n\r\n              <form   #f=\"ngForm\"\r\n\t\t\t\t          (ngSubmit)=\"save()\" class=\"w100 h100\">\r\n\t\t\t\t\t<div class=\"form\">\r\n\t\t\t\t\t<div class=\"form-header\" style=\"height:60px;font-size:30px;line-height:60px\">Customer Info</div>\r\n\t\t\t\t            <input class=\"submit small-submit\" style=\"margin-right:30px;\" type=\"submit\"  value=\"Save\" [disabled]=\"!f.valid\">\r\n\t\t\t\t            \r\n\t\t\t\t    \r\n\t\t\t\t\t\t \r\n\t\t\t\t\t\t  <div style=\"flex:0 1 25%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t              <input placeholder=\" \" [(ngModel)]=customer.account  readonly=\"\" name=\"account\" />\r\n\t\t\t\t\t                  <label>Account</label> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t <div style=\"flex:0 1 25%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t              <input placeholder=\" \" [(ngModel)]=customer.firstName  name=\"firstName\" />\r\n\t\t\t\t\t                  <label>First Name</label> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t <div style=\"flex:0 1 25%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t              <input placeholder=\" \" [(ngModel)]=customer.lastName name=\"lastName\" />\r\n\t\t\t\t\t                  <label>Last Name</label> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div style=\"flex:0 1 25%;line-height:50px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row-other flex-row\" style=\"height:100%;align-items:flex-end;justify-content:center;\" >\r\n\t\t\t\t\t\t              <input type=\"checkbox\"  id=\"RSA\" [(ngModel)]=customer.status name=\"status\">\r\n\t\t\t\t\t\t              <label for=\"RSA\">Status</label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div  class=\"fieldset\" data-title=\"Contact\">\r\n\t\t\t\t\t\t\t           \r\n\t\t\t\t\t\t\t\t\t    \t   \t<div style=\"flex:0 1 14.2%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t              <input placeholder=\" \" [(ngModel)]=customer.contact  name=\"contact\"/>\r\n\t\t\t\t\t\t\t\t\t\t                  <label>Contact</label> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"flex:0 1 14.2%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t              <input placeholder=\" \"  [(ngModel)]=customer.email name=\"email\"/>\r\n\t\t\t\t\t\t\t\t\t\t                  <label>email</label> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"flex:0 1 14.2%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t              <input placeholder=\" \"   [(ngModel)]=customer.phoneNum1 name=\"phoneNum1\"/>\r\n\t\t\t\t\t\t\t\t\t\t                  <label>phone Num1</label> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t      <div style=\"flex:0 1 14.2%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t              <input placeholder=\" \"  [(ngModel)]=customer.phoneNum2  name=\"phoneNum2\"/>\r\n\t\t\t\t\t\t\t\t\t                  <label>phone Num2</label> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t <div style=\"flex:0 1 14.2%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t              <input placeholder=\" \" [(ngModel)]=customer.fax name=\"fax\" />\r\n\t\t\t\t\t\t\t\t\t                  <label>fax</label> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t  \t<div style=\"flex:0 1 14.2%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t              <input placeholder=\" \" [(ngModel)]=customer.facebook  name=\"contact\"/>\r\n\t\t\t\t\t\t\t\t\t\t                  <label>facebook</label> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"flex:0 1 14.2%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t              <input placeholder=\" \" [(ngModel)]=customer.wechat  name=\"contact\"/>\r\n\t\t\t\t\t\t\t\t\t\t                  <label>wechat</label> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t         </div>\r\n\t\t\t\t\t\t\t <!-- \r\n\t\t\t\t\t\t\t      <div  class=\"fieldset flex-row\" data-title=\"Address\" >\r\n\t\t\t\t\t\t\t           \r\n\t\t\t\t\t\t\t\t\t    \t  <div style=\"flex:0 1 100%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t              <input placeholder=\" \" [(ngModel)]=store.addressInfo.address name=\"address\"/>\r\n\t\t\t\t\t\t\t\t\t\t                  <label>Address</label> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div style=\"flex:0 1 33.3%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t              <input placeholder=\" \" [(ngModel)]=store.addressInfo.city name=\"city\"/>\r\n\t\t\t\t\t\t\t\t\t\t                  <label>city</label> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t     <div style=\"flex:0 1 33.3%;height:60px;\" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t              <input placeholder=\" \" [(ngModel)]=store.addressInfo.state name=\"state\"/>\r\n\t\t\t\t\t\t\t\t\t                  <label>state</label> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"flex:0 1 33.3%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t              <input placeholder=\" \" [(ngModel)]=store.addressInfo.zipCode name=\"zipCode\"/>\r\n\t\t\t\t\t\t\t\t\t                  <label>Zip Code</label> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t  \t<div style=\"flex:0 1 100%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t              <input placeholder=\" \"  [(ngModel)]=store.addressInfo.description name=\"description\"/>\r\n\t\t\t\t\t\t\t\t\t\t                  <label>description</label> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t         </div>   \r\n\t\t\t\t\t\t\t -->\r\n\t\t\t\t\t\t\t   \r\n\t\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\r\n\r\n\r\n      </div>\r\n</div>\r\n  \r\n\r\n\t"

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports = " <div  class=\"foot\" onclick=\"openToast()\">foot</div>"

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports = " <div  class=\"header w100 bp0\" style=\"border-bottom:solid #ccc 1px\">\r\n          <label for=\"left\">\r\n           <i class=\"fa fa-bars fa-2x va-center\" style=\"margin-left:8px\" aria-hidden=\"true\"></i>\r\n           <i class=\"fa fa-sign-out  fa-2x va-center exit\" aria-hidden=\"true\" (click)=\"exit()\"></i>\r\n           </label> \r\n         \r\n     </div>\r\n\r\n\r\n<!-- <div class=\"header\">\r\n <div style=\"text-align:center;margin-right:10px;\">\r\n <img src=\"https://upload.wikimedia.org/wikipedia/commons/5/53/Wikimedia-logo.png\"     height=\"48\" />\r\n  <div style=\"width:100%;text-align:center;font-size:25px;\">Min System</div>\r\n  </div>\r\n\r\n<div style=\"flex:1;display:flex;justify-content: space-around\">\r\n   -->\r\n   \r\n<!-- \r\n\t<ng-container *ngFor=\"let item of appGlobal.navInfo | filter:['!=','Permission'];let i=index;\">\r\n\t   <input  id=\"radio{{i}}\" type=\"radio\"  name=\"navs\"  (click)=\"navs(item)\" value=\"{{item}}\" [(ngModel)]=\"navFirst\" />\r\n\r\n\t   <label   for=\"radio{{i}}\"  >\r\n\t      \t  <img src=\"assets/img/{{item}}.png\"     height=\"36\" />\r\n\t\t  <div>{{item}}</div>\r\n      </label >\r\n   </ng-container> -->\r\n<!-- </div>\r\n\r\n\t\t<div style=\"flex:1;display:flex;-webkit-justify-content: flex-end; \r\n\t\t  justify-content: flex-end; \">\r\n\r\n\t\t  \t\t<ng-container *ngFor=\"let item of appGlobal.navInfo | filter:['=','Permission'];let i=index\">\r\n\t\t\t          <input type=\"display:none\" id=\"radioA\" type=\"radio\"  name=\"navs\"  (click)=\"navs('permission')\" />\r\n\t\t\t         <label   for=\"radioA\">\r\n\t\t\t\t\t    <img src=\"assets/img/perm.png\"  height=\"36\" />\r\n\t\t\t\t\t  <div style=\"\">Permission</div>\r\n\t\t\t\t\t  </label>\r\n\t\t\t\t   </ng-container>\r\n\t\t          \r\n\t\t         <input type=\"display:none\"  id=\"radioB\" type=\"radio\"  name=\"navs\"  (click)=\"navs('me')\" />\r\n\t\t\t\t <label  for=\"radioB\">\r\n\t\t\t\t    <img src=\"assets/img/me.png\"    height=\"36\" />\r\n\t\t\t\t  <div>&nbsp;&nbsp;&nbsp;Me&nbsp;&nbsp;&nbsp;</div>\r\n\t\t\t\t  </label>\r\n\t\t           \r\n\t\t           <input id=\"radioZ\" type=\"checkbox\"  name=\"language\"  (click)=\"language()\" />\r\n\t\t          <label  for=\"radioZ\">\r\n\t\t\t\t    <img src=\"assets/img/united-states.png\"    height=\"36\" />\r\n\t\t\t\t  <div>中文</div>\r\n\t\t\t\t  </label>\r\n\r\n\t\t           <input type=\"display:none\" id=\"radioC\" type=\"radio\"  name=\"navs\" (click)=\"exit()\" />  \r\n\t\t\t\t   <label  for=\"radioC\">\r\n\t\t\t\t    <img src=\"assets/img/exit.png\"     height=\"36\" />\r\n\t\t\t\t     <div>Exit</div>\r\n\t\t\t\t  </label>\r\n\r\n\r\n\r\n\t\t</div>\r\n\r\n\r\n\r\n</div>\r\n -->\r\n\r\n\r\n"

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports = "xxxxxxxxxxxxxxxxx"

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

module.exports = "<div class=\"bc flex-norow h100 w100\">\r\n\t  <input  id=\"left\" type=\"checkbox\" class=\"left-bar\" />\r\n\t  <div class=\"left flex-column\" >\r\n\t  \t      <div class=\"va-center bc\" style=\"height:50px;line-height:40px;padding-right:5px;font-size:30px\">\r\n\t\t          \t<img  class=\"va-center logo\"  src=\"{{appGlobal.picUrl}}{{appGlobal.storeInfo.logo}}\" width=30 />\r\n\t\t  \t      \t<span  class=\"va-center\">{{appGlobal.storeInfo.name}}</span>\r\n\t  \t      </div>\r\n\t  \t      <div class=\"flex ofy\">\t<!--  | filter:['objectToArray'] -->\r\n\t  \t      <div *ngFor=\"let items of appGlobal.userInfo.permsList;let i=index;\" class=\"nav\">\r\n\t  \t      \t<div class=\"nav-header\">\r\n\t  \t      \t{{items.key}}   \r\n\t  \t      \t<i class=\"fa fa-bars\" aria-hidden=\"true\" style=\"float:right\"></i>\r\n\t  \t      \t</div>\r\n\t  \t      \t\t  <ng-container *ngFor=\"let item of items.value;let j=index\">\r\n\t  \t      \t\t   \r\n\t  \t      \t\t   <input type=\"radio\" id=\"{{item.subject}}\"  value=\"{{item.subject}}\" name=\"Item\" \r\n\t  \t      \t\t   [(ngModel)]=\"appGlobal.navSelect\"  checked class=\"radio-hide\" (click)=\"linkTo(item)\">\r\n\t\t  \t      \t   <label   for=\"{{item.subject}}\" class=\"nav-content\">\r\n\t\t  \t      \t\t\t\t{{item.subject}}\r\n\t\t  \t      \t\t\t\t<i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>\r\n\t\t  \t      \t\t</label>\r\n\r\n\t\t  \t      \t\t</ng-container>\r\n\r\n                 </div>\r\n\r\n\t\t  \t  </div>    \r\n </div>\r\n\r\n<div  class=\"wrap h100 flex-nocolumn bp0 w100\">\r\n      <app-header></app-header>\r\n      <div  class=\"content ofy\">\r\n      <router-outlet></router-outlet> \r\n      </div>\r\n       <!--  <app-footer></app-footer> -->\r\n</div>\r\n<!--   <input  id=\"right\" type=\"checkbox\" class=\"right-bar\" />\r\n  <div  class=\"right \">right</div> -->\r\n  \r\n</div>\r\n\r\n"

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

module.exports = " <input  id=\"left\" type=\"checkbox\" class=\"left-bar\" />\r\n\t  <div class=\"left flex-column\" >\r\n\t  \t      <div class=\"va-center bc\" style=\"height:50px;padding:0;margin:0;line-height:40px;padding-right:5px;font-size:30px\">\r\n\t\t          \t<img  class=\"va-center\"  src=\"http://pngimg.com/uploads/car_logo/car_logo_PNG1667.png\" width=30 />\r\n\t\t  \t      \t<span  class=\"va-center\">Menusifu</span>\r\n\t  \t      </div>\r\n\t  \t      <div class=\"flex ofy\">\t\r\n\r\n                    <a [routerLink]=\"['./home', {name: 'jon'}]\">Child One</a>\r\n      <a [routerLink]=\"['./about',1,{name:'json'}]\">Child Two</a>\r\n\t\t  \t      <div style=\"height:500px;\" (click)=\"test()\">\r\n\t\t  \t      ssssssssssss\r\n\t\t  \t      </div>\r\n\t\t          <div style=\"height:500px;\">\r\n\t\t  \t      ssssssssssss\r\n\t\t  \t      </div> <div style=\"height:500px;\">\r\n\t\t  \t      ssssssssssss\r\n\t\t  \t      </div> <div style=\"height:500px;\">\r\n\t\t  \t      ssssssssssss\r\n\t\t  \t      </div>\r\n\t\t  \t  </div>    \r\n      </div>\r\n"

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-column h100 ofh\">\r\n  \t<input style=\"height:50px;width:auto\" class=\"opacity\"  #key />\r\n  \t<div class=\"table-search\" data-title=\"Search License\" data-add=\"+\">\r\n          <div class=\"add\"  (click)=\"openLicense()\">+</div>\r\n          <div class=\"form\">\r\n\t\t\t\t\t<div style=\"flex:0 1 50%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\r\n\t\t\t\t\t\t              <input placeholder=\" \"  name=\"name\" />\r\n\t\t\t\t\t                  <label>Filter by account/email/name/phone</label> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t <div style=\"flex:1;\" (click)=\"copy()\">\r\n\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t</div>\r\n  </div> \r\n   <div class=\"table-header\">\r\n\t    \t<div style=\"flex:0 1 50px;\">#</div>\r\n\t  \t\t<div style=\"flex:0 1 120px;\">MerchantId</div>\r\n\t  \t\t<div style=\"flex:0 1 200px;\">Store Name</div>\r\n\t  \t\t<div style=\"flex:0 1 150px;\">Contact</div>\r\n\t        <div style=\"flex:0 1 300px;\">Email</div>\r\n\t        <div style=\"flex:0 1 200px;\">Phone</div>\r\n\t        <div style=\"flex:1\">Use</div>\r\n\t        <div style=\"flex:0 1 45px;\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></div>\r\n    </div>\r\n    <div class=\"table-flex ofy\">\r\n        <ng-container *ngFor=\"let items of licenses;let i=index;\">\r\n        <div class=\"table-body\">\r\n            <div style=\"flex:0 1 50px;\" (click)=\"items['key']=!items['key']\">{{i+1}}</div>\r\n\t        <div style=\"flex:0 1 120px;\">{{items.merchantId}}</div>\r\n\t        <div style=\"flex:0 1 200px;\">{{items.storeName}}</div>\r\n\t        <div style=\"flex:0 1 150px;\">{{items.contact}}</div>\r\n\t        <div style=\"flex:0 1 300px;\">{{items.email}}</div>\r\n\t        <div style=\"flex:0 1 200px;\">{{items.phone}}</div>\r\n\t        \r\n\t        \r\n\t        <div style=\"flex:1\">Use</div>\r\n\t        <div style=\"flex:0 1 43px;font-size:2rem\" (click)=\"openLicense(items)\">+</div>\r\n         </div>\r\n         <ng-container *ngIf=\"!!items['key']\">  \r\n\t         <div class=\"table-body-header\" *ngFor=\"let item of items.licenseKey;let j=index\">\r\n\t\t\t\t   <div  *ngIf=\"j==0\" class=\"table-body-title\">\r\n\t\t\t\t   \t    <div style=\"flex:0 1 200px;\">PC Key</div>\r\n\t\t\t\t\t    <div style=\"flex:0 1 120px;\">operator</div>\r\n\t\t\t\t        <div style=\"flex:0 1 165px;\">Create Time</div>\r\n\t\t\t\t        <div style=\"flex:0 1 80px;\">Month</div>\r\n\t\t\t\t        <div style=\"flex:0 1 80px;\">Delay</div>\r\n\t\t\t\t        <div style=\"flex:0 1 120px;\">Key</div>\r\n\t\t\t\t        <div style=\"flex:0 1 165px;\">startDate</div>\r\n\t\t\t\t        <div style=\"flex:0 1 165px;\">expires</div>\r\n\t\t\t\t        <div style=\"flex:0 1 120px;margin-right:auto\">ActiveKey</div>\r\n\t\t\t\t        <div style=\"flex:0 1 45px;\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></div>\r\n\t\t\t\t    </div>\r\n\t\t\t\t    <div [ngClass]=\"{'table-body-body':true,'table-odd':!!(j%2)}\" >\r\n\t\t\t\t            <div style=\"flex:0 1 200px;\">{{item.pcKey}}</div>\r\n\t\t\t\t\t\t    <div style=\"flex:0 1 120px;\">{{item.operator.user}}</div>\r\n\t\t\t\t\t        <div style=\"flex:0 1 165px;\">{{item.createdAt.slice(0,19)}}</div>\r\n\t\t\t\t\t        <div style=\"flex:0 1 80px;\">{{item.month}}</div>\r\n\t\t\t\t\t        <div style=\"flex:0 1 80px;\">{{item.delay}}</div>\r\n\t\t\t\t\t        <div style=\"flex:0 1 120px;\" (click)=\"copy(item.key)\">Copy</div>\r\n\t\t\t\t\t        <div style=\"flex:0 1 165px;\">{{!!item?.startDate?item?.startDate.slice(0,10):''}}</div>\r\n\t\t\t\t\t        <div style=\"flex:0 1 165px;\">{{!!item?.expires?item?.expires.slice(0,10):''}}</div>\r\n\t\t\t\t\t        <div style=\"flex:0 1 120px;\" (click)=\"copy(item.activeKey)\">Copy</div>\r\n\t\t\t\t\t        <div style=\"flex:0 1 43px;font-size:2rem\" (click)=\"openLicense(items,item.pcKey)\">+</div>\r\n\t\t\t         </div>\r\n\t\t\t        \r\n\t         </div>\r\n\t         </ng-container>  \r\n\t       </ng-container>  \r\n  </div> \r\n   <div class=\"table-header\">\r\n        <div style=\"margin-right:auto\">test</div> <div>test</div>\r\n    </div>\r\n</div> \r\n\r\n\r\n\r\n<div class=\"mask\" *ngIf=\"!!modal\">\r\n</div>\r\n<div class=\"mask-flex flex-center\" *ngIf=\"!!modal\"> \r\n<div style=\"width:95%;height:95%;background:#fff;border-radius:8px;position:absolute;\">\r\n<i class=\"fa fa-times mask-close\"  (click)=\"modal=false\" aria-hidden=\"true\"></i>\r\n\r\n              <form   #f=\"ngForm\"\r\n\t\t\t\t          (ngSubmit)=\"saveLicense()\" class=\"w100 h100\">\r\n\t\t\t\t\t<div class=\"form\">\r\n\t\t\t\t\t<div class=\"form-header\" style=\"height:60px;font-size:30px;line-height:60px\">License Info</div>\r\n\t\t\t\t            <input class=\"submit small-submit\" style=\"margin-right:30px;\" type=\"submit\"  value=\"Save\" [disabled]=\"!f.valid || !!licenseSub.key\">\r\n\t\t\t\t            \r\n\t\t\t\t     <div style=\"flex:0 1 25%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t              <input placeholder=\" \" type=\"text\" [(ngModel)]=license.storeName  required name=\"storeName\" />\r\n\t\t\t\t\t                  <label>Store Name</label> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t <div style=\"flex:0 1 25%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t              <input placeholder=\" \" type=\"text\" [(ngModel)]=license.contact  required name=\"contact\" />\r\n\t\t\t\t\t                  <label>Contact</label> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t <div style=\"flex:0 1 25%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t              <input placeholder=\" \" type=\"text\" [(ngModel)]=license.phone  required name=\"phone\" />\r\n\t\t\t\t\t                  <label>Phone</label> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div style=\"flex:0 1 25%;line-height:50px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t              <input placeholder=\" \" type=\"text\" [(ngModel)]=license.email   name=\"dmail\" />\r\n\t\t\t\t\t                  <label>Email</label> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div  class=\"fieldset\" data-title=\"Create License Info\">\r\n\t\t\t\t\t\t\t           \r\n\t\t\t\t\t\t\t\t\t    \t   \r\n\t\t\t\t\t\t\t\t\t\t\t\t  <div style=\"flex:0 1 30%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t              <input placeholder=\" \" required  type=\"text\" [(ngModel)]=licenseSub.pcKey   name=\"pcKey\"/>\r\n\t\t\t\t\t\t\t\t\t\t                  <label>PC Key</label> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t  \t<div style=\"flex:1;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t              <input placeholder=\" \" required type=\"number\" step=1 [(ngModel)]=licenseSub.month  name=\"month\"/>\r\n\t\t\t\t\t\t\t\t\t\t                  <label>Month</label> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t  \t<div style=\"flex:1;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t              <input placeholder=\" \" required type=\"number\" step=1 [(ngModel)]=licenseSub.delay  name=\"delay\"/>\r\n\t\t\t\t\t\t\t\t\t\t                  <label>Delay{{licenseSub.type}}</label> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t  \t<div style=\"flex:1;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row va-bottom\" style=\"font-size:50px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t<select style=\"font-size:1.3rem\" class=\"va-bottom\" [(ngModel)]=\"licenseSub.type\" name=\"type\" >\r\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let c of ['Normal','Trial']\">{{c}}</option>\r\n\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t             \r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\t\t\r\n\r\n\t\t\t\t\t\t\t<div  class=\"fieldset\" data-title=\"LicenseKey Info\" style=\"flex-flow:row wrap\">\r\n\t\t\t\t\t\t\t           <div style=\"flex:0 1 150px;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t              <input placeholder=\" \" \r\n\r\n\t\t\t\t\t\t\t\t\t\t\t      readonly=\"\"  type=\"text\" [(ngModel)]=\"licenseSub.merchantId\" name=\"merchantId\"  />\r\n\t\t\t\t\t\t\t\t\t\t                  <label>merchantId</label> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t         <div style=\"flex:1;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t \t\r\n\t\t\t\t\t\t\t\t\t\t\t    <input placeholder=\" \" \r\n\r\n\t\t\t\t\t\t\t\t\t\t\t      readonly=\"\"  type=\"text\" [(ngModel)]=\"licenseSub.key\"  #originKey name=\"key\"  />\r\n\t\t\t\t\t\t\t\t\t\t                  <label>OriginKey</label> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div style=\"flex:0 1 15%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t              \t<input class=\"submit small-submit\" style=\"margin-right:30px;\" type=\"button\" (click)=\"copy()\"  value=\"Copy\"/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t  \t\r\n\t\t\t\t\t\t\t</div>\t\t\t\r\n\r\n\r\n\t\t\t\t\t\t\t<div  class=\"fieldset\" data-title=\"Address\">\r\n\t\t\t\t\t\t\t           \r\n\t\t\t\t\t\t\t\t\t    \t  <!--  \t<div style=\"flex:0 1 40%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t              <input placeholder=\" \" type=\"text\" [(ngModel)]='license.addressInfo[\"address\"]'  name=\"address\"/>\r\n\t\t\t\t\t\t\t\t\t\t                  <label>Address</label> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"flex:1;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t              <input placeholder=\" \" type=\"text\"  [(ngModel)]='license.addressInfo[\"city\"]' name=\"city\"/>\r\n\t\t\t\t\t\t\t\t\t\t                  <label>City</label> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"flex:1;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t              <input placeholder=\" \" type=\"text\"   [(ngModel)]='license.addressInfo[\"state\"]' name=\"state\"/>\r\n\t\t\t\t\t\t\t\t\t\t                  <label>State</label> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t      <div style=\"flex:1;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t              <input placeholder=\" \" type=\"text\"  [(ngModel)]='license.addressInfo[\"zipcode\"]'  name=\"zipcode\"/>\r\n\t\t\t\t\t\t\t\t\t                  <label>Zip Code</label> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t         </div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\r\n\r\n\r\n      </div>\r\n</div>"

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

module.exports = " <form   #f=\"ngForm\"\r\n          (ngSubmit)=\"login()\">\r\n <div class=\"login ta-center\">\r\n    <img src=\"{{appGlobal.picUrl}}{{appGlobal.storeInfo.logo}}\"  class=\"logo\"/>\r\n       <h1>License</h1>\r\n       <div class=\"login-row\">\r\n           <input class=\"input\" type=\"text\" AUTOCOMPLETE=\"off\" [(ngModel)]=loginForm.userName  ngModel name=\"userName\" required><label>Username</label> \r\n       </div>\r\n       <div class=\"login-row\">\r\n                <input class=\"input\" type=\"text\" AUTOCOMPLETE=\"off\" [(ngModel)]=loginForm.password   name=\"password\" required> <label>Password</label>\r\n       </div>\r\n  <!--       <div class=\"row\">\r\n                <input class=\"input\" type=\"text\" AUTOCOMPLETE=\"off\" [(ngModel)]=loginForm.merchantId  name=\"merchantId\" required> <label>MerchangID</label>\r\n       </div> -->\r\n       <div>\r\n       <input type=\"submit\" class=\"submit\" value=\"Login\"  [disabled]=\"!f.valid\"/>\r\n       </div> \r\n </div> \r\n </form>\r\n"

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

module.exports = "  <input  id=\"right\" type=\"checkbox\" class=\"right-bar\" />\r\n  <div  class=\"right\">right</div>"

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

module.exports = "<div class=\"setting\">\r\n\t\t<div class=\"s-left\">\r\n\t\t\t\t<div class=\"sheader\">\r\n\t\t\t\tSetting\r\n\t\t\t\t<i class=\"fa fa-plus fl-right\"  *ngIf=\"groupIndex==1 && settingList[groupIndex]['categories'][categoryIndex]['category'] !='Station'\"\r\n\t\t\t\tstyle=\"line-height:40px;padding:0 5px\" aria-hidden=\"true\" (click)=\"add()\"></i>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"scontent ofy\">\r\n\t\t\t<div  *ngFor=\"let item of settingList[groupIndex]['categories'][categoryIndex]['items'];let i=index;\" (click)=\"itemIndex=i;selectItem(item)\"  [ngClass]=\"{'s-select':i==itemIndex}\">\r\n\r\n\t\t\t\t\t\t\t<div style=\"margin-right:auto;\">{{item.item}}</div><div><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\" style=\"line-height:40px\"></i> </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t</div>\t\t\r\n\t\t</div>\r\n\r\n\t\t<div class=\"s-right\" >\r\n\t\t<div style=\"width:100%;flex: 0 0 75px;display:flex;flex-flow:row wrap;text-align:center;background:#ddd\">\r\n\t\t\t\r\n\t\t\t<div  style=\"flex:1 1 50%;height:40px;line-height:40px\"  *ngFor=\"let item of settingList;let i=index;\"\r\n\t\t\t (click)=\"groupIndex=i;categoryIndex=0;itemIndex=0;selectItem(item['categories'][0]['items'][0])\" [ngClass]=\"{'s-select':i==groupIndex}\">\r\n\t\t\t\t{{item.group}}\r\n\t\t\t</div>\r\n\t\t\t<div  style=\"flex:1;height:35px;line-height:35px;border-right:solid #fff 1px;border-top:solid #fff 1px;\" \r\n\t\t\t   *ngFor=\"let item of settingList[groupIndex]['categories'];let i=index;\" (click)=\"categoryIndex=i;itemIndex=0;selectItem(item['items'][0])\" [ngClass]=\"{'s-select':i==categoryIndex}\">\r\n\t\t\t\t{{item.category}}\r\n\t\t\t</div> \r\n\t\t\t\r\n\t\t</div>\r\n\t\t\r\n\t\t\r\n<form   #f=\"ngForm\"\r\n          (ngSubmit)=\"save()\">\r\n           \t<div style=\"width:100%;text-align:right\">\r\n           \t<input type=\"submit\" class=\"submit\" style=\"max-width:150px;margin:5px;\" value=\"Save\"/> \r\n            <input type=\"button\" class=\"submit\"  style=\"max-width:150px;margin:5px;\" value=\"Delete\" (click)=\"delete()\"\r\n             *ngIf=\"item['_id'] && settingList[groupIndex]['categories'][categoryIndex]['items'].length>1 && settingList[groupIndex]['categories'][categoryIndex]['category'] !='Station'\" />\r\n            </div>\r\n           <div  style=\"display:flex;flex:1;flex-flow:row wrap;margin:0;padding:0;align-items:flex-start;align-content:flex-start;\">\r\n           \r\n            \r\n\t            <div class=\"row\" style=\"flex:0 0 48%;height:60px;margin:0 1%;padding:0\" *ngIf=\"groupIndex==1 && settingList[groupIndex]['categories'][categoryIndex]['category'] !='Station'\">\r\n\t\t\t\t\t\t\t\t\t\t              <input placeholder=\" \" [(ngModel)]=item.item  name=\"item\"  required/>\r\n\t\t\t\t\t\t\t\t\t                  <label>name</label> \r\n\t\t\t\t</div>\t\r\n            <ng-container  style=\"margin:0;padding:0\" *ngFor=\"let v of item['values'];let i=index;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t           \t\t\t\t\r\n          \t\t\t\t\t       \r\n\r\n\r\n\t           \t\t<div *ngIf=\"v.type=='input'; then thenBlock else elseBlock\"></div> \r\n\r\n\r\n\t           \t\t\t<ng-template #thenBlock >\r\n\t\t\t\t\t\t\t\t\t\t\t     <div class=\"row\" style=\"flex:0 0 48%;height:60px;margin:0 1%;padding:0\">\r\n\t\t\t\t\t\t\t\t\t              <input placeholder=\" \" [(ngModel)]=v.value name=\"value{{i}}\"  required/>\r\n\t\t\t\t\t\t\t\t                  <label>{{v.name}}</label> \r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t</ng-template> \r\n\t\t\t\t\t  <ng-template #elseBlock  >\r\n\t\t\t\t\t\t\t\t <div  class=\"s-fieldset\">\r\n\t\t\t\t\t\t\t\t         <div class=\"sheader\">{{v.name}}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t      \t<div style=\"flex:0 1 48%;height:60px; margin:0 1%;padding:0\" *ngFor=\"let vv of v.value;let j=index;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\" *ngIf=\"v.type=='checkbox'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t             <input  type=\"checkbox\"  id=\"a{{i}}{{j}}\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t              [(ngModel)]=vv.value \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t              name=\"a{{i}}{{j}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t                 <label for=\"a{{i}}{{j}}\" style=\"font-size:1.3rem\">{{vv.name}}\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t                        </label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t         </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        <div class=\"row\" *ngIf=\"v.type=='radio'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t            <!--  <input  type=\"radio\"  id=\"c{{i}}{{j}}\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t             [checked]=\"vv.value\"  [(ngModel)]=\"vv['key']\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t               (change)=\"vv.value=$event.target.checked\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t              name=\"bs{{item.name}}\"> -->\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t               <input type=\"radio\" id=\"c{{i}}{{j}}\" name=\"checkbox\" \r\n\t\t\t\t\t\t\t\t\t\t\t \t  value=\"{{vv['name']}}\" \t[(ngModel)]=\"v['key']\"  name=\"bs{{item.name}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t \t   (change)=\"change(v)\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t                 <label for=\"c{{i}}{{j}}\" style=\"font-size:1.3rem\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t                 {{vv.name}}\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t                        </label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t         </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\t\t\t\r\n\t\t\t\t\t\t</ng-template> \r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \r\n\r\n[checked]=\"op['key']\" \r\n\t\t\t\t\t\t\t\t\t\t  class=\"el-opacity\"  (change)=\"op['key']=$event.target.checked;onChange(item,op)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\" >\r\n\t\t\t\t\t\t\t\t\t              <input placeholder=\" \" [(ngModel)]=v.value   required/>\r\n\t\t\t\t\t\t\t\t                  <label>{{v.name}}</label> \r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #checkboxBlock *ngIf=\"v.type=='input';else checkboxBlock\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-template> -->\r\n\t\t\t\t\t  </ng-container>\r\n\t\t\t\t\t    \r\n\r\n           </div>\r\n        </form>\r\n\t\t\t\r\n\t\t\t\t\t\t\t\r\n\t\t</div>  \r\n</div>"

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

module.exports = "<div class=\"flex flex-row w100 h100\">\r\n     \r\n\t\t  <div class=\"flex-column\" style=\"flex:0 1 220px;\">\r\n\t\t  \t      <div class=\"va-center bc\" style=\"background:#2980b9;color:#fff;height:40px;line-height:35px;padding-right:5px;font-size:20px;\">\r\n\t\t\t          &nbsp;\r\n\t\t\t         <i class=\"fa fa-user-circle va-center\" aria-hidden=\"true\" *ngIf=\"isStaff=='Staff'\"></i>\t\r\n\t\t\t         <i class=\"fa fa-users va-center\" aria-hidden=\"true\" *ngIf=\"isStaff=='Role'\"></i>\r\n\t\t\t         \r\n\t\t\t  \t     <span  class=\"va-center\">{{isStaff}}</span>\r\n\t\t\t  \t     <i class=\"fa fa-plus fl-right\"  style=\"line-height:40px;padding:0 5px\" aria-hidden=\"true\" (click)=\"openUR()\"></i>\r\n\t\t  \t      </div>\r\n\t\t  \t      <div class=\"flex ofy\">\t\r\n\t\t  \t      \r\n\t\t  \t         <ng-container *ngIf=\"isStaff=='Role'\">\r\n\t\t  \t         <div  [ngClass]=\"{'staffdiv':true,'select':!!(i==isRole)}\"  *ngFor=\"let item of roles;let i=index;\"  (click)=\"isRole=i;selectRole(item)\">\r\n\t\t  \t         <span style=\"color:#2980b9\">{{i+1}}.</span>{{item.name}}\r\n\t\t  \t         </div>\r\n\t\t  \t         </ng-container>\r\n\t\t  \t      \r\n\t\t  \t       <ng-container *ngIf=\"isStaff=='Staff'\">\r\n\t\t  \t            <div *ngFor=\"let item of users;let i=index;\" [ngClass]=\"{'staffdiv':true,'select':!!(i==isUser)}\"  (click)=\"isUser=i;selectUser(item)\" >\r\n\t\t  \t         \t\t<span style=\"color:#2980b9\">{{i+1}}.</span><i class=\"fa fa-user\" style=\"font-size:16px\"  aria-hidden=\"true\"></i>&nbsp;{{item.userName}}\r\n\t\t  \t         \t</div>\r\n\t\t  \t         </ng-container>\r\n\t\t  \t   \r\n\t\t  \t\r\n\r\n\t                 </div>\r\n\t                 \r\n\t\t\t </div> \r\n\t<div class=\"flex flex-nocolumn ofy h100\">\r\n\r\n\t\t <div class=\"flex-row w100\" style=\"text-align:center;line-height:0\">\r\n\t\t \t <input type=\"radio\" class=\"dsn\" name=\"SUR\" value=\"Staff\" id=\"SU\" [(ngModel)]=\"isStaff\" (click)=\"openUR()\">\r\n\t  \t      \t\t   \r\n\t\t \t<label class=\"flex staff-header\"  for=\"SU\" ><h2>Staff</h2></label>\r\n\t\t \t\r\n\t\t \t<input type=\"radio\" class=\"dsn\" name=\"SUR\"   value=\"Role\" id=\"SR\" [(ngModel)]=\"isStaff\" (click)=\"openUR()\">\r\n\t  \t      \t\t   \r\n\t\t \t<label class=\"flex staff-header\"  for=\"SR\"><h2>Role</h2></label>\t\r\n\t\t \r\n\t\t</div>\r\n\t\t<div  class=\"staff-fieldset\"  data-title=\"New/Edit Role\" *ngIf=\"isStaff=='Role'\">\r\n\t\t\t\t<form   #f=\"ngForm\"\r\n\t\t\t          (ngSubmit)=\"saveRole()\" class=\"w100 h100\">\r\n\t\t\t\t      <div class=\"form\">\r\n\t\t\t\t\t\t      \t<div style=\"flex:1;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t              <input placeholder=\" \" [(ngModel)]=role.name  name=\"name\" required />\r\n\t\t\t\t\t                  <label>Role Name</label> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div style=\"flex:1;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t              <input placeholder=\" \" [(ngModel)]=role.description  name=\"description\" />\r\n\t\t\t\t\t                  <label>Description</label> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div style=\"flex:1;height:50px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row-other flex-row\" style=\"height:100%;align-items:flex-end;justify-content:center;\" >\r\n\t\t\t\t\t\t              \r\n\t\t\t\t\t                  <input type=\"checkbox\"  checked=\"checked\" class=\"el-opacity\" id=\"RS\" [(ngModel)]=role.status name=\"checkbox\">\r\n\t\t\t\t\t\t              <label for=\"RS\">Status</label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div style=\"flex:1;\">\r\n\t\t\t\t\t\t\t\t\t<input class=\"submit store-submit\" type=\"submit\" value=\"Save\" [disabled]=\"!f.valid\"\t>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\r\n\t\t\t\t      </div>\r\n\t\t\t </form>     \r\n\t</div>\r\n\r\n\t\t<div  class=\"staff-fieldset\"  data-title=\"Add/Edit User\" *ngIf=\"isStaff=='Staff'\">\r\n\t\t\t\t\t<form   #f=\"ngForm\"\r\n\t\t\t          (ngSubmit)=\"saveUser()\" class=\"w100 h100\">\r\n\t\t\t\t      <div class=\"form\">\r\n\t\t\t\t\t\t      \t<div style=\"flex:1 1 25%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t              <input placeholder=\" \" [(ngModel)]=user.userName  name=\"name\" required />\r\n\t\t\t\t\t                  <label>User Name</label> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div style=\"flex:1 1 25%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t              <input placeholder=\" \" [(ngModel)]=user.password  name=\"descript\" required />\r\n\t\t\t\t\t                  <label>Password</label> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<div style=\"flex:1 1 25%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t              <input placeholder=\" \" [(ngModel)]=user.description  name=\"descript\" />\r\n\t\t\t\t\t                  <label>Description</label> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div style=\"flex:1 1 25%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row-other\" style=\"line-height:60px;\">\r\n\t\t\t\t\t\t\t              <input class=\"submit store-submit\" type=\"submit\" value=\"Save\" [disabled]=\"!f.valid\"\t>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t<div style=\"flex:1 1 25%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t              <input placeholder=\" \" [(ngModel)]=user.firstName  name=\"firstName\"  />\r\n\t\t\t\t\t                  <label>First Name</label> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div style=\"flex:1 1 25%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t              <input placeholder=\" \" [(ngModel)]=user.lastName  name=\"lastName\"  />\r\n\t\t\t\t\t                  <label>Last Name</label> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<div style=\"flex:1 1 25%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t              <input placeholder=\" \" [(ngModel)]=user.email  name=\"email\"  />\r\n\t\t\t\t\t                  <label>Email</label> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  <div style=\"flex:1 1 25%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t              <input placeholder=\" \" [(ngModel)]=user.phoneNum1  name=\"phoneNum1\"  />\r\n\t\t\t\t\t                  <label>Phone </label> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div style=\"flex:1 1 40%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t              <input placeholder=\" \" [(ngModel)]='user.addressInfo[\"address\"]'  name=\"address\"  />\r\n\t\t\t\t\t                  <label>address </label> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t </div>\r\n\t\t\t\t\t\t\t\t <div style=\"flex:1;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t              <input placeholder=\" \" [(ngModel)]='user.addressInfo[\"city\"]'  name=\"city\"  />\r\n\t\t\t\t\t                  <label>city </label> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t </div>\r\n\t\t\t\t\t\t\t\t <div style=\"flex:1;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t              <input placeholder=\" \" [(ngModel)]='user.addressInfo[\"state\"]'  name=\"state\"  />\r\n\t\t\t\t\t                  <label>state </label> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t </div>\r\n\t\t\t\t\t\t\t\t <div style=\"flex:1;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t              <input placeholder=\" \" [(ngModel)]='user.addressInfo[\"zipCode\"]'  name=\"zipCode\"  />\r\n\t\t\t\t\t                  <label>zipCode </label> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t </div>\r\n\t\t\t\t\t\t\t\t<div style=\"flex:1;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row-other flex-row\" style=\"height:50px;align-items:flex-end;justify-content:center;\" >\r\n\t\t\t\t\t\t              <input type=\"checkbox\" id=\"US\" name=\"checkbox\" [(ngModel)]='user.status' class=\"el-opacity\" checked=\"checked\">\r\n\t\t\t\t\t\t              <label for=\"US\">Status</label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\t      </div>\r\n\t\t\t </form>     \r\n\t\t</div>\r\n\r\n\t\t<div  class=\"staff-fieldset\"  data-title=\"Current Role\" *ngIf=\"isStaff=='Staff'\">\r\n\t\t\t<div style=\"flex:1 1 100%\" class=\"flex-row \">\r\n\t                \t  <div style=\"flex:0 1 20%;padding-left:5px;height:35px;line-height:35px\" *ngFor=\"let item of roles;let i=index;\" >\r\n\t                \t\t <input type=\"checkbox\"  (click)=\"selectRole(item)\"  [checked]=\"item.description\"   [(ngModel)]=\"item.key\" id=\"{{item._id}}\"/><label for=\"{{item._id}}\"><b>{{item.name}}</b></label>\r\n\t                \t</div>\r\n\r\n\t                </div>\r\n\t\t</div>\r\n\t\t<div style=\"margin-left:0.5%;width:99%;font-size:22px;border-bottom:solid #888 2px;font-weight:600;margin-bottom:5px;\">\r\n\t\tPermisson\r\n\t\t<div style=\"float:right\"><label for=\"all\">All</label> <input type=\"checkbox\" id=\"all\"  [checked]=\"allSelect\"  [(ngModel)]=\"allSelect\" (click)=\"all($event)\" /><label for=\"all\"></label></div></div>\r\n\t\t<div class=\"flex flex-nocolumn ofy\">\r\n                 <div *ngFor=\"let items of perms;let i=index;\">\r\n\t\t                           <div style=\"flex:0 0 100%;height:40px;\r\n\t\t                        background:#eee;padding-left:5px;font-size:20px;line-height:40px;border-bottom:solid #888 1px;\" class=\"flex-norow\">\r\n\t\t                \t     \r\n\t\t\t\t\t                \t\t<div class=\"flex\">\r\n\t\t\t\t\t                \t\t\t\t<label for=\"A{{i}}\"><b>{{items._id}}</b></label>\r\n\t\t\t\t\t                \t\t</div>\r\n\t\t\t\t\t                \t\t<div style=\"padding-right:5px;\">\r\n\t\t\t\t\t\t\t                \t\t<input type=\"checkbox\" [checked]=\"items.key\" [(ngModel)]=\"items.key\"  (click)=\"groupAll($event,i)\" id=\"A{{i}}\"/>\r\n\r\n\t\t\t\t\t\t\t                \t\t<label for=\"A{{i}}\"></label>\t\r\n\t\t\t\t\t                \t\t</div>\r\n\t\t\t\t                    \r\n\t\t\t\t                       \t\r\n\t\t\t                        </div>\r\n\t\t\t                        <div class=\"flex flex-row\">\r\n\t\t\t\t                        <div  style=\"flex:0 1 16.4%;padding-left:5px;height:35px;line-height:35px;background:#fff\" *ngFor=\"let item of items.perms\">\r\n\t\t\t\t                        \t\t <input type=\"checkbox\"  [checked]=\"item.key\"   [(ngModel)]=\"item.key\" id=\"{{item.value}}\"/><label for=\"{{item.value}}\"><b>{{item.subject}}</b></label>\r\n\t\t\t\t                        </div>\r\n\t\t\t                        <div>\r\n\r\n\t\t                  \r\n\t\t            \r\n\t\t         \t</div>\r\n\t             \t      \r\n\r\n\t            \r\n\t\t</div>\r\n\t\t\r\n\t</div>\r\n\t<hr/>\r\n</div>"

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

module.exports = "\r\n<form   #f=\"ngForm\"\r\n          (ngSubmit)=\"save()\" class=\"w100 h100\">\r\n\t<div class=\"form\">\r\n            <input class=\"submit small-submit\" type=\"submit\" value=\"Save\" [disabled]=\"!f.valid\">\r\n            <input type=\"file\" style=\"display:none\" name=\"logo\" #uploadPic (change)=\"upload($event)\"/>\r\n     <div class=\"form-header  va-center\"\t>\r\n\t\t   \t <img class=\"img va-center\" src=\"{{appGlobal.picUrl}}{{store.logo}}\" width=\"50\" height=\"50\" (click)=\"uploadPicture()\"  #showPic  style=\"border-radius:6px;\" />\r\n\t</div>\r\n\t\t \r\n\t\t  <div style=\"flex:0 1 33.3%;height:60px;\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t              <input placeholder=\" \" [(ngModel)]=store.name  name=\"name\" required />\r\n\t                  <label>Store Name</label> \r\n\t\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t <div style=\"flex:0 1 33.3%;height:60px;\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t              <input placeholder=\" \" [(ngModel)]=store.merchantId readonly=\"\" name=\"merchantId\" />\r\n\t                  <label>MerchantId</label> \r\n\t\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t <div style=\"flex:0 1 33.3%;height:60px;\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t              <input placeholder=\" \" [(ngModel)]=store.qrcUrl readonly=\"\" name=\"qrcurl\" />\r\n\t                  <label>QRC</label> \r\n\t\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div  class=\"fieldset\" data-title=\"Contact\">\r\n\t\t\t           \r\n\t\t\t\t\t    \t   \t<div style=\"flex:0 1 20%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t              <input placeholder=\" \" [(ngModel)]=store.contact  name=\"contact\" required/>\r\n\t\t\t\t\t\t                  <label>Contact</label> \r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div style=\"flex:0 1 20%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t              <input placeholder=\" \"  [(ngModel)]=store.email name=\"email\" required/>\r\n\t\t\t\t\t\t                  <label>email</label> \r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div style=\"flex:0 1 20%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t              <input placeholder=\" \"   [(ngModel)]=store.phoneNum1 name=\"phoneNum1\" required/>\r\n\t\t\t\t\t\t                  <label>phone Num1</label> \r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t      <div style=\"flex:0 1 20%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t              <input placeholder=\" \"  [(ngModel)]=store.phoneNum2  name=\"phoneNum2\"/>\r\n\t\t\t\t\t                  <label>phone Num2</label> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t <div style=\"flex:0 1 20%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t              <input placeholder=\" \" [(ngModel)]=store.fax name=\"fax\" />\r\n\t\t\t\t\t                  <label>fax</label> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t         </div>\r\n\t\t\t \r\n\t\t\t      <div  class=\"fieldset flex-row\" data-title=\"Address\" >\r\n\t\t\t           \r\n\t\t\t\t\t    \t   \t<div style=\"flex:0 1 100%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t              <input placeholder=\" \" [(ngModel)]=store.addressInfo.address name=\"address\"/>\r\n\t\t\t\t\t\t                  <label>Address</label> \r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div style=\"flex:0 1 33.3%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t              <input placeholder=\" \" [(ngModel)]=store.addressInfo.city name=\"city\"/>\r\n\t\t\t\t\t\t                  <label>city</label> \r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t     <div style=\"flex:0 1 33.3%;height:60px;\" >\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t              <input placeholder=\" \" [(ngModel)]=store.addressInfo.state name=\"state\"/>\r\n\t\t\t\t\t                  <label>state</label> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div style=\"flex:0 1 33.3%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t              <input placeholder=\" \" [(ngModel)]=store.addressInfo.zipCode name=\"zipCode\"/>\r\n\t\t\t\t\t                  <label>Zip Code</label> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  \t<div style=\"flex:0 1 100%;height:60px;\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t              <input placeholder=\" \"  [(ngModel)]=store.addressInfo.description name=\"description\"/>\r\n\t\t\t\t\t\t                  <label>description</label> \r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t         </div>   \r\n\t\t\t\r\n\t\t\t   \r\n\t\t\r\n</div>\r\n</form>"

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(99);


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_service_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(myService, router, aRoute, storeService) {
        this.myService = myService;
        this.router = router;
        this.aRoute = aRoute;
        this.storeService = storeService;
        this.appGlobal = __WEBPACK_IMPORTED_MODULE_1__app_global__["a" /* AppGlobal */].getInstance();
        this.loginForm = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.aRoute.params.subscribe(function (params) {
            // this.id = params  // {id: "xxx"}
            _this.myService.service("/stores/qrc/" + params.login, "get").subscribe(function (data) {
                if (!!data) {
                    //this.appGlobal.userInfo=data;
                    // console.log(data)
                    _this.appGlobal.toastTime = 0;
                    _this.storeService.set("merchantId", data.merchantId);
                    _this.storeService.set("QRC", params.login);
                    _this.storeService.set("ZONEINFO", data.zoneInfo);
                    _this.appGlobal.navSelect = "Staff";
                    _this.appGlobal.storeInfo = data;
                    //  this.router.navigate(['index/home',{}] );//{ id:mobile.id }
                }
                else {
                    _this.router.navigate(['']);
                }
            });
            /*
                            if(params.login!="xian"){
            
                              this.router.navigate(['']);
                            }else{
                                console.log("======================");
            
            
                              this.storeService.set("QRCURL", params.login);
                              console.log("======================");
                            }*/
        });
    };
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        this.appGlobal.loading = true;
        this.loginForm["merchantId"] = this.storeService.get("merchantId");
        this.loginForm["zoneInfo"] = this.storeService.get("zoneInfo");
        // this.router.navigate(['index',{}] );//{ id:mobile.id }
        this.myService.service("/admin/login", "post", this.loginForm).subscribe(function (data) {
            if (!!data) {
                _this.appGlobal.toastTime = 0.5;
                _this.appGlobal.userInfo = data;
                console.log(_this.appGlobal.userInfo);
                _this.router.navigate(['index/customer']); //{ id:mobile.id }
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        providers: [__WEBPACK_IMPORTED_MODULE_3__my_service_service__["a" /* MyServiceService */], __WEBPACK_IMPORTED_MODULE_1__app_global__["a" /* AppGlobal */]],
        template: __webpack_require__(197),
        styles: [__webpack_require__(183)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__my_service_service__["a" /* MyServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__my_service_service__["a" /* MyServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_service_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingComponent = (function () {
    function SettingComponent(myService, router, aRoute, storeService) {
        this.myService = myService;
        this.router = router;
        this.aRoute = aRoute;
        this.storeService = storeService;
        this.appGlobal = __WEBPACK_IMPORTED_MODULE_1__app_global__["a" /* AppGlobal */].getInstance();
        this.settingList = [];
        this.groupIndex = 0;
        this.categoryIndex = 0;
        this.itemIndex = 0;
        this.group = {};
        this.category = {};
        this.item = {};
        this.settingJson = {};
        this.cashDrawers = [];
        this.printers = [];
        this.sessionKey = [];
        this.settingList = [{ "group": "", "categories": [{ "items": [{ "item": "", "values": [{ "name": "", "type": "", "value": [] }] }] }] }];
        this.item = { "item": "", "values": [{ "name": "", "type": "", "value": [] }] };
    }
    SettingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myService.service("/settings/merchant/id", "get").subscribe(function (data) {
            if (!!data) {
                console.log(data);
                _this.settingList = data;
                _this.selectItem(_this.settingList[0]["categories"][0]["items"][0]);
                _this.cashDrawers = _this.settingList[1]["categories"][1]["items"];
            }
        });
    };
    SettingComponent.prototype.getList = function (key, column, list) {
        if (key == "52" || key == "612") {
            var obj3 = {};
            for (var i = 0; i < this.item["values"][column].value.length; i++) {
                if (this.item["values"][column].value[i]["value"] == true) {
                    obj3[this.item["values"][column].value[i]["name"]] = true;
                }
            }
            for (var i = 0; i < list.length; i++) {
                if (obj3[list[i]["name"]]) {
                    list[i]["value"] = true;
                }
                else {
                    list[i]["value"] = false;
                }
            }
            this.item["values"][column].value = list;
        }
    };
    SettingComponent.prototype.selectItem = function (item) {
        this.item = JSON.parse(JSON.stringify(item));
        var cashDrawers = [];
        for (var i = 0; i < this.cashDrawers.length; i++) {
            var cashDrawer = {};
            cashDrawer["name"] = this.cashDrawers[i]["item"];
            cashDrawer["value"] = false;
            cashDrawers.push(cashDrawer);
        }
        var key = this.groupIndex + '' + this.categoryIndex;
        this.getList(key, 1, this.cashDrawers);
        this.getList(key + '' + this.itemIndex, 3, []);
        /*   if(this.settingJson[itemKey]){
                     let obj3 = {};
                     let k=1;
                     for(var i=0;i<this.item["values"][k].value.length;i++){
                         if(this.item["values"][k].value[i]["value"]==true){
                            obj3[this.item["values"][k].value[i]["name"]]=true;
                         }
                        
                    }
                    for(var i=0;i<cashDrawers.length;i++){
                           if(obj3[cashDrawers[i]["name"]]){
                               cashDrawers[i]["value"]=true;
                           }else{
                             cashDrawers[i]["value"]=false;
                           }
                    }
                   this.item["values"][k].value= cashDrawers;
        
           }
        
        
           let key=this.groupIndex+''+this.categoryIndex+''+this.itemIndex;
           if(this.settingJson[key] && !!this.settingJson[key][4]){
                     let obj3 = {};
                     let k=4;
                     for(var i=0;i<this.item["values"][k].value.length;i++){
                         if(this.item["values"][k].value[i]["value"]==true){
                            obj3[this.item["values"][k].value[i]["name"]]=true;
                         }
                        
                    }
                    for(var i=0;i<this.settingJson[key][k].length;i++){
                          console.log(obj3)
                           if(obj3[this.settingJson[key][k][i]["name"]]){
                               this.settingJson[key][k][i]["value"]=true;
                           }else{
                             this.settingJson[key][k][i]["value"]=false;
                           }
                    }
                   this.item["values"][k].value= this.settingJson[key][k];
           }*/
    };
    SettingComponent.prototype.settings = function (n) {
        /* let sendData= !!n?n:(this.cfSelect==0?{"type":"!Device"}:{"type":"Device"});
         if(this.cfSelect==0){
              this.settingType={"type":"Global"};
         }else{
             this.settingType={"type":"Printer"};
             
         }
            this.myService.service("/settings/merchant/id","get",{},sendData).subscribe(
                   data=> {
                       if(!!data){
                         console.log(data);
                        this.settingForm=[];
                        this.settingList=data;
                        if(this.cfSelect==0){
                            this.settingForm=this.settingList[0];
                        }else{
                           this.settingForm=this.deviceArray[0];
    
    
                        }
                       
    
                        
                      
    
                }
                     }
                    
                );*/
    };
    SettingComponent.prototype.changeList = function (data) {
        /* if(typeof(data)=="string"){
               for(var i=0;i<this.settingList.length;i++){
               if(data==this.settingList[i]["_id"]){
                 
                 this.settingList.splice(i,1);
               }
           }
         }else{
               for(var i=0;i<this.settingList.length;i++){
                   if(data["_id"]==this.settingList[i]["_id"]){
                     
                     this.settingList[i]=data;
                   }
             }
       }*/
    };
    SettingComponent.prototype.delete = function () {
        var _this = this;
        var tempItem = JSON.parse(JSON.stringify(this.item));
        this.myService.service("/settings/" + this.item["_id"], "delete").subscribe(function (data) {
            if (!!data) {
                for (var i = 0; i < _this.settingList[_this.groupIndex]["categories"][_this.categoryIndex]["items"].length; i++) {
                    if (tempItem["_id"] == _this.settingList[_this.groupIndex]["categories"][_this.categoryIndex]["items"][i]["_id"]) {
                        _this.settingList[_this.groupIndex]["categories"][_this.categoryIndex]["items"].splice(i, 1);
                        _this.add();
                    }
                }
            }
        });
    };
    SettingComponent.prototype.save = function () {
        var _this = this;
        this.item["group"] = this.settingList[this.groupIndex].group;
        this.item["category"] = this.settingList[this.groupIndex]["categories"][this.categoryIndex].category;
        if (this.item["_id"] && this.item["_id"] != this.item["item"]) {
            this.myService.service("/settings/" + this.item["_id"], "put", this.item).subscribe(function (data) {
                if (!!data) {
                    _this.settingList[_this.groupIndex]["categories"][_this.categoryIndex]["items"][_this.itemIndex].values = data.values;
                    _this.settingList[_this.groupIndex]["categories"][_this.categoryIndex]["items"][_this.itemIndex].item = data.item;
                }
            });
        }
        else {
            delete this.item["_id"];
            this.myService.service("/settings", "post", this.item).subscribe(function (data) {
                if (!!data && _this.settingList[_this.groupIndex]["categories"][_this.categoryIndex].category != "Station") {
                    _this.settingList[_this.groupIndex]["categories"][_this.categoryIndex]["items"].push(data);
                    _this.itemIndex = _this.settingList[_this.groupIndex]["categories"][_this.categoryIndex]["items"].length - 1;
                }
                else {
                    _this.settingList[_this.groupIndex]["categories"][_this.categoryIndex]["items"][_this.itemIndex].values = data.values;
                    _this.settingList[_this.groupIndex]["categories"][_this.categoryIndex]["items"][_this.itemIndex].item = data.item;
                    _this.item = data;
                }
            });
        }
    };
    SettingComponent.prototype.add = function () {
        this.itemIndex = -1;
        this.item["item"] = "";
        delete this.item["_id"];
        console.log(this.item);
        for (var i = 0; i < this.item["values"].length; i++) {
            if (this.item["values"][i]['type'] == "input") {
                this.item["values"][i].value = "";
            }
            else {
                for (var j = 0; i < this.item["values"][i].value.length; j++) {
                    this.item["values"][i].value[i]['value'] = "";
                }
            }
        }
    };
    SettingComponent.prototype.change = function (vv) {
        for (var i = 0; i < vv.value.length; i++) {
            if (vv.value[i]["name"] == vv["key"]) {
                vv.value[i]['value'] = true;
            }
            else {
                vv.value[i]['value'] = false;
                //vv.value[i].value=value;
            }
        }
    };
    return SettingComponent;
}());
SettingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-setting',
        template: __webpack_require__(199),
        styles: [__webpack_require__(185)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__my_service_service__["a" /* MyServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__my_service_service__["a" /* MyServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"]) === "function" && _d || Object])
], SettingComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=setting.component.js.map

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_finally__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_finally__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppGlobal; });


/*    constructor() {
constructor(private locationStrategy:LocationStrategy) {
  console.log(locationStrategy.prepareExternalUrl('xxx'));
}*/
var AppGlobal = (function () {
    function AppGlobal() {
        this.userInfo = {};
        this.storeInfo = {};
        this.toastTime = 0;
        this.loading = false;
        this.error = {};
        this.isStaff = "Staff";
        this.isDebug = false;
        this.server = this.isDebug ? "http://192.168.1.100:3999/api" : "http://127.0.0.1:3200/api";
        this.picUrl = this.isDebug ? "http://localhost:3999/" : "http://service520.com:3100/";
        ///apiUrl: string = "/MobileApi/api";
        this.pageSize = 10;
        this.flag = true;
        // this.server=window.location.origin+"/api"
        this.error["message"] = "";
        this.error["delay"] = 3;
        this.error["type"] = ""; //success,info,warning,error
        if (AppGlobal.instance) {
            throw new Error("error: Use AppGlobal.getInstance() replace new.");
        }
        AppGlobal.instance = this;
    }
    AppGlobal.getInstance = function () {
        return AppGlobal.instance;
    };
    return AppGlobal;
}());

AppGlobal.instance = new AppGlobal();
//# sourceMappingURL=app-global.js.map

/***/ }),

/***/ 98:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 98;


/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(119);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[250]);
//# sourceMappingURL=main.bundle.js.map