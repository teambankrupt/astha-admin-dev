(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{FDqJ:function(t,e,i){"use strict";i.r(e),i.d(e,"LocationsModule",(function(){return D}));var n=i("SVse"),o=i("iInd"),c=i("8Y7J"),a=i("qof1"),l=i("mb36"),s=i("EApP"),r=i("PDDa"),b=i("tpXV"),d=i("s7LF"),h=i("G0yt"),p=i("wTG2"),u=i("a3+x");function g(t,e){if(1&t&&(c.Sb(0,"h2"),c.Lc(1),c.Rb()),2&t){const t=c.hc();c.zb(1),c.Nc("Locations for ",null==t.location_type?null:t.location_type.label,"")}}function f(t,e){if(1&t){const t=c.Tb();c.Sb(0,"div"),c.Sb(1,"ng-select",21),c.dc("keyup",(function(e){return c.zc(t),c.hc().searchLocationType(null==e.target?null:e.target.value)}))("change",(function(){return c.zc(t),c.hc().onChangeLocationType()}))("ngModelChange",(function(e){return c.zc(t),c.hc().location_type=e})),c.Rb(),c.Rb()}if(2&t){const t=c.hc();c.zb(1),c.mc("items",t.location_types)("virtualScroll",!0)("ngModel",t.location_type)}}function _(t,e){if(1&t){const t=c.Tb();c.Sb(0,"li",25),c.Sb(1,"a",28),c.dc("click",(function(){c.zc(t);const i=e.$implicit;return c.hc(2).onClickTopLabel(i)})),c.Lc(2),c.Rb(),c.Rb()}if(2&t){const t=e.$implicit;c.zb(2),c.Mc(null==t?null:t.label)}}function S(t,e){if(1&t){const t=c.Tb();c.Sb(0,"div",0),c.Sb(1,"div",22),c.Sb(2,"nav",23),c.Sb(3,"ol",24),c.Sb(4,"li",25),c.Sb(5,"a"),c.Sb(6,"i",26),c.dc("click",(function(){return c.zc(t),c.hc().resetLocation()})),c.Rb(),c.Rb(),c.Rb(),c.Jc(7,_,3,1,"li",27),c.Rb(),c.Rb(),c.Rb(),c.Rb()}if(2&t){const t=c.hc();c.zb(7),c.mc("ngForOf",t.selected_label_locations)}}function m(t,e){if(1&t){const t=c.Tb();c.Sb(0,"td",39),c.dc("click",(function(){c.zc(t);const e=c.hc().$implicit;return c.hc(2).onClickLabel(e)})),c.Lc(1),c.Rb()}if(2&t){const t=c.hc().$implicit;c.zb(1),c.Mc(null==t?null:t.label)}}function v(t,e){if(1&t&&(c.Sb(0,"td"),c.Lc(1),c.Rb()),2&t){const t=c.hc().$implicit;c.zb(1),c.Mc(null==t?null:t.label)}}const y=function(t){return["add",t]};function R(t,e){if(1&t){const t=c.Tb();c.Sb(0,"tr"),c.Sb(1,"td"),c.Nb(2,"img",33),c.Rb(),c.Jc(3,m,2,1,"td",34),c.Jc(4,v,2,1,"td",8),c.Sb(5,"td"),c.Lc(6),c.Rb(),c.Sb(7,"td"),c.Lc(8),c.Rb(),c.Sb(9,"td"),c.Lc(10),c.Rb(),c.Sb(11,"td"),c.Sb(12,"a",35),c.Sb(13,"i",36),c.Lc(14,"\ue254"),c.Rb(),c.Rb(),c.Rb(),c.Sb(15,"td",37),c.Sb(16,"button",38),c.dc("confirm",(function(){c.zc(t);const i=e.$implicit;return c.hc(2).onRemoveLocation(i)}))("cancel",(function(){return c.zc(t),c.hc(2).cancelClicked=!0})),c.Sb(17,"i",36),c.Lc(18,"\ue872"),c.Rb(),c.Rb(),c.Rb(),c.Rb()}if(2&t){const t=e.$implicit,i=c.hc(2);c.zb(2),c.nc("src",null==t?null:t.image,c.Bc),c.zb(1),c.mc("ngIf",!i.paramId),c.zb(1),c.mc("ngIf",i.paramId),c.zb(2),c.Mc(null==t?null:t.code),c.zb(2),c.Mc(null==t||null==t.location_type?null:t.location_type.label),c.zb(2),c.Mc(null==t?null:t.description),c.zb(2),c.mc("routerLink",c.qc(9,y,null==t?null:t.id)),c.zb(4),c.mc("popoverTitle",i.popoverTitle)("popoverMessage",i.popoverMessage)}}function z(t,e){if(1&t&&(c.Sb(0,"div",29),c.Sb(1,"table",30),c.Sb(2,"thead",31),c.Sb(3,"tr"),c.Sb(4,"th"),c.Lc(5," Image "),c.Rb(),c.Sb(6,"th"),c.Lc(7," Label "),c.Rb(),c.Sb(8,"th"),c.Lc(9," Code "),c.Rb(),c.Sb(10,"th"),c.Lc(11," Geo Unit "),c.Rb(),c.Sb(12,"th"),c.Lc(13," Description "),c.Rb(),c.Sb(14,"th"),c.Lc(15," Update "),c.Rb(),c.Sb(16,"th"),c.Lc(17," Delete "),c.Rb(),c.Rb(),c.Rb(),c.Sb(18,"tbody"),c.Jc(19,R,19,11,"tr",32),c.Rb(),c.Rb(),c.Rb()),2&t){const t=c.hc();c.zb(19),c.mc("ngForOf",null==t.locations?null:t.locations.content)}}function L(t,e){1&t&&(c.Sb(0,"div",0),c.Sb(1,"div",22),c.Sb(2,"div",40),c.Sb(3,"div",41),c.Sb(4,"span",42),c.Lc(5,"Loading..."),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb())}function M(t,e){1&t&&(c.Sb(0,"div",0),c.Sb(1,"div",22),c.Sb(2,"div",43),c.Nb(3,"img",44),c.Rb(),c.Rb(),c.Rb())}let k=(()=>{class t{constructor(t,e,i,n,o,c){this.locationsService=t,this.baseService=e,this.toastr=i,this.listOfTypesService=n,this.activatedRoute=o,this.createTypesService=c,this.loading=!0,this.size=10,this.page=1,this.search_key="",this.location_type=null,this.popoverTitle="Are you sure?",this.popoverMessage="Are you really sure you want to delete this?",this.cancelClicked=!1,this.paramId=null,this.parentId=null,this.selectedLocation=null,this.selected_label_locations=[]}ngOnInit(){this.paramId=this.activatedRoute.snapshot.paramMap.get("id"),this.paramId?this.get_location_types(this.page-1,100):this.get_location_list(this.page-1,this.size,this.parentId,this.search_key)}get_location_list(t,e,i,n){this.loading=!0,this.locations=null,this.locationsService.get_location_list(t,e,i,n).subscribe(t=>{this.locations=t,this.loading=!1},t=>{this.loading=!1,this.baseService.handleError(t)})}onClickLabel(t){this.selected_label_locations.push(t),this.parentId=null==t?void 0:t.id,this.get_location_list(this.page-1,this.size,this.parentId,this.search_key)}onClickTopLabel(t){let e=[];for(let i=0;i<=this.selected_label_locations.length;i++){if(this.selected_label_locations[i].id==t.id){e[i]=this.selected_label_locations[i];break}e[i]=this.selected_label_locations[i]}this.selected_label_locations=e,this.get_location_list(this.page-1,this.size,null==t?void 0:t.id,this.search_key)}resetLocation(){this.selected_label_locations=[],this.parentId=null,this.get_location_list(this.page-1,this.size,this.parentId,this.search_key)}get_locations(t,e,i,n){this.loading=!0,this.locations=null,this.locationsService.get_location(t,e,i,n).subscribe(t=>{this.locations=t,this.loading=!1},t=>{this.loading=!1,this.baseService.handleError(t)})}get_location_types(t,e){this.listOfTypesService.get_location_types(t,e).subscribe(t=>{this.location_types=t.content,this.handleDataShow()},t=>{this.baseService.handleError(t)})}handleDataShow(){this.createTypesService.location_type_details(this.paramId).subscribe(t=>{var e;this.location_type=t,this.get_locations(this.page-1,this.size,null===(e=this.location_type)||void 0===e?void 0:e.id,this.search_key)})}searchLocationType(t){""!=t?this.listOfTypesService.search_location_types(t).subscribe(t=>{this.location_types=t.content}):this.listOfTypesService.get_location_types(0,1e3).subscribe(t=>{this.location_types=t.content})}onChangeLocationType(){this.get_locations(this.page-1,this.size,this.location_type.id)}onPaginateChange(t){this.paramId?this.get_locations(this.page-1,this.size,this.location_type.id):this.get_location_list(this.page-1,this.size,this.parentId,this.search_key)}searchLocations(){this.paramId?this.get_locations(this.page-1,this.size,this.location_type.id,this.search_key):this.get_location_list(this.page-1,this.size,this.parentId,this.search_key)}onRemoveLocation(t){this.locationsService.remove_location(t.id).subscribe(t=>{this.toastr.success("Deleted Successfully!",""),this.ngOnInit()},t=>{this.baseService.handleError(t)})}}return t.\u0275fac=function(e){return new(e||t)(c.Mb(a.a),c.Mb(l.a),c.Mb(s.b),c.Mb(r.a),c.Mb(o.a),c.Mb(b.a))},t.\u0275cmp=c.Gb({type:t,selectors:[["app-locations"]],decls:27,vars:10,consts:[[1,"row"],[1,"col-lg-12","grid-margin","stretch-card","mb-0"],[1,"card"],[1,"card-body"],[1,"card-title","row"],[1,"col-md-12","text-left","pb-2"],["type","button","routerLink","add",1,"btn","btn-gradient-success","btn-rounded","btn-fw","btn-sm"],[1,"col-md-5","text-left"],[4,"ngIf"],[1,"col-md-3"],[1,"col-md-4"],[1,"form-group"],[1,"input-group"],["type","text","placeholder","search location","aria-label","location",1,"form-control",3,"ngModel","keyup.enter","ngModelChange"],[1,"input-group-append"],[1,"btn","btn-sm","btn-gradient-primary",3,"click"],["class","row",4,"ngIf"],["class","table-responsive pt-3",4,"ngIf"],[1,"col-lg-12","grid-margin","stretch-card"],[1,"card-body","pt-0"],["aria-label","Default pagination",1,"d-flex","justify-content-center",3,"collectionSize","pageSize","page","pageChange"],["bindLabel","label","placeholder","Search Country",3,"items","virtualScroll","ngModel","keyup","change","ngModelChange"],[1,"col-12"],["aria-label","breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],[1,"far","fa-window-close","mr-1",2,"font-size","17px","color","red",3,"click"],["class","breadcrumb-item",4,"ngFor","ngForOf"],[3,"click"],[1,"table-responsive","pt-3"],[1,"table","table-striped","table-bordered"],[1,"thead-dark"],[4,"ngFor","ngForOf"],["alt","no images","width","100%","height","auto",1,"img-fluid",3,"src"],["style","cursor: pointer; color: #0b7dda;",3,"click",4,"ngIf"],["title","Edit","data-toggle","tooltip",1,"edit",3,"routerLink"],[1,"material-icons"],[1,"p-0"],["mwlConfirmationPopover","","placement","left",1,"btn","delete",3,"popoverTitle","popoverMessage","confirm","cancel"],[2,"cursor","pointer","color","#0b7dda",3,"click"],[1,"d-flex","justify-content-center"],["role","status",1,"spinner-border","m-5",2,"width","3rem","height","3rem"],[1,"sr-only"],[1,"text-center"],["src","./assets/icon/nodatafound.jpg","alt","not found image",1,"rounded",2,"width","400px","height","300px"]],template:function(t,e){1&t&&(c.Sb(0,"div",0),c.Sb(1,"div",1),c.Sb(2,"div",2),c.Sb(3,"div",3),c.Sb(4,"div",4),c.Sb(5,"div",5),c.Sb(6,"button",6),c.Lc(7,"Add "),c.Rb(),c.Rb(),c.Sb(8,"div",7),c.Jc(9,g,2,1,"h2",8),c.Rb(),c.Sb(10,"div",9),c.Jc(11,f,2,3,"div",8),c.Rb(),c.Sb(12,"div",10),c.Sb(13,"div",11),c.Sb(14,"div",12),c.Sb(15,"input",13),c.dc("keyup.enter",(function(){return e.searchLocations()}))("ngModelChange",(function(t){return e.search_key=t})),c.Rb(),c.Sb(16,"div",14),c.Sb(17,"button",15),c.dc("click",(function(){return e.searchLocations()})),c.Lc(18,"Search"),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Jc(19,S,8,1,"div",16),c.Jc(20,z,20,1,"div",17),c.Jc(21,L,6,0,"div",16),c.Jc(22,M,4,0,"div",16),c.Rb(),c.Rb(),c.Rb(),c.Sb(23,"div",18),c.Sb(24,"div",2),c.Sb(25,"div",19),c.Sb(26,"ngb-pagination",20),c.dc("pageChange",(function(t){return e.page=t}))("pageChange",(function(t){return e.onPaginateChange(t)})),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb()),2&t&&(c.zb(9),c.mc("ngIf",e.paramId),c.zb(2),c.mc("ngIf",e.paramId),c.zb(4),c.mc("ngModel",e.search_key),c.zb(4),c.mc("ngIf",0!=e.selected_label_locations.length),c.zb(1),c.mc("ngIf",0==e.loading),c.zb(1),c.mc("ngIf",1==e.loading),c.zb(1),c.mc("ngIf",0==(null==e.locations?null:e.locations.totalElements)),c.zb(4),c.mc("collectionSize",null==e.locations?null:e.locations.totalElements)("pageSize",e.size)("page",e.page))},directives:[o.g,n.m,d.c,d.m,d.p,h.j,p.a,n.l,o.i,u.a],styles:[".card[_ngcontent-%COMP%]{border-radius:0}h2[_ngcontent-%COMP%]{font-size:26px;font-width:900}table.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a.edit[_ngcontent-%COMP%]{color:#ffc107;cursor:pointer}table.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button.delete[_ngcontent-%COMP%]{color:#e34724;cursor:pointer}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:18px}.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#0a8ccb;cursor:pointer}"]}),t})();var C=i("uB8i");const I=[{path:"",component:k},{path:"add",component:C.a},{path:"add/:id",component:C.a},{path:":id/add",component:C.a},{path:":id",component:k}];let w=(()=>{class t{}return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(e){return new(e||t)},imports:[[o.j.forChild(I)],o.j]}),t})();var O=i("Q6Ar"),T=i("IheW"),P=i("ienR"),J=i("pMoy"),x=i("8Qe2"),j=i("Tj54");let D=(()=>{class t{}return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(e){return new(e||t)},imports:[[n.c,w,h.k,h.h,d.j,p.b,O.b,T.b,u.b,d.s,P.c.forRoot(),P.d.forRoot(),J.b,x.b,j.b]]}),t})()}}]);