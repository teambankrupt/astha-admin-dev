(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{bN4V:function(t,e,o){"use strict";o.r(e),o.d(e,"UserPagesModule",(function(){return p}));var n=o("SVse"),i=o("s7LF"),r=o("8Y7J"),c=o("iInd"),b=o("lX9O"),a=o("EApP");function l(t,e){if(1&t){const t=r.Tb();r.Sb(0,"div",1),r.Sb(1,"div",2),r.Sb(2,"div",3),r.Sb(3,"div",4),r.Sb(4,"div",5),r.Sb(5,"h1"),r.Lc(6,"ASTHA"),r.Rb(),r.Rb(),r.Sb(7,"form",6),r.dc("ngSubmit",(function(){return r.zc(t),r.hc().onSubmit()})),r.Sb(8,"div",7),r.Nb(9,"input",8),r.Rb(),r.Sb(10,"div",7),r.Nb(11,"input",9),r.Rb(),r.Sb(12,"div",10),r.Sb(13,"button",11),r.Lc(14,"SIGN IN"),r.Rb(),r.Rb(),r.Sb(15,"div",12),r.Sb(16,"div",13),r.Sb(17,"label",14),r.Nb(18,"input",15),r.Nb(19,"i",16),r.Lc(20," Keep me signed in "),r.Rb(),r.Rb(),r.Sb(21,"a",17),r.Lc(22,"Forgot password?"),r.Rb(),r.Rb(),r.Sb(23,"div",18),r.Lc(24," Don't have an account? "),r.Sb(25,"a",19),r.dc("click",(function(){return r.zc(t),r.hc().notify()})),r.Lc(26,"Create"),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb()}if(2&t){const t=r.hc();r.zb(7),r.mc("formGroup",t.loginForm),r.zb(6),r.mc("disabled",!t.loginForm.valid)}}function s(t,e){1&t&&(r.Sb(0,"div",1),r.Sb(1,"div",2),r.Sb(2,"div",3),r.Sb(3,"div",4),r.Sb(4,"div",5),r.Nb(5,"img",6),r.Rb(),r.Sb(6,"h4"),r.Lc(7,"New here?"),r.Rb(),r.Sb(8,"h6",7),r.Lc(9,"Signing up is easy. It only takes a few steps"),r.Rb(),r.Sb(10,"form",8),r.Sb(11,"div",9),r.Nb(12,"input",10),r.Rb(),r.Sb(13,"div",9),r.Nb(14,"input",11),r.Rb(),r.Sb(15,"div",9),r.Sb(16,"select",12),r.Sb(17,"option"),r.Lc(18,"Country"),r.Rb(),r.Sb(19,"option"),r.Lc(20,"United States of America"),r.Rb(),r.Sb(21,"option"),r.Lc(22,"United Kingdom"),r.Rb(),r.Sb(23,"option"),r.Lc(24,"India"),r.Rb(),r.Sb(25,"option"),r.Lc(26,"Germany"),r.Rb(),r.Sb(27,"option"),r.Lc(28,"Argentina"),r.Rb(),r.Rb(),r.Rb(),r.Sb(29,"div",9),r.Nb(30,"input",13),r.Rb(),r.Sb(31,"div",14),r.Sb(32,"div",15),r.Sb(33,"label",16),r.Nb(34,"input",17),r.Nb(35,"i",18),r.Lc(36," I agree to all Terms & Conditions "),r.Rb(),r.Rb(),r.Rb(),r.Sb(37,"div",19),r.Sb(38,"a",20),r.Lc(39,"SIGN UP"),r.Rb(),r.Rb(),r.Sb(40,"div",21),r.Lc(41," Already have an account? "),r.Sb(42,"a",22),r.Lc(43,"Login"),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb())}const m=[{path:"",pathMatch:"full",redirectTo:"login"},{path:"login",component:(()=>{class t{constructor(t,e,o){this.router=t,this.authService=e,this.toast=o,this.loginForm=new i.g({username:new i.e("",i.v.required),password:new i.e("",i.v.required)})}ngOnInit(){this.authService.getAccessToken()&&this.router.navigate(["/products"])}onSubmit(){this.authService.login(this.loginForm.value)}isLoggedIn(){return this.authService.isLoggedIn()}notify(){this.toast.info("This feature will be added later")}}return t.\u0275fac=function(e){return new(e||t)(r.Mb(c.f),r.Mb(b.a),r.Mb(a.b))},t.\u0275cmp=r.Gb({type:t,selectors:[["app-login"]],decls:1,vars:1,consts:[["class","d-flex align-items-center auth px-0",4,"ngIf"],[1,"d-flex","align-items-center","auth","px-0"],[1,"row","w-100","mx-0"],[1,"col-lg-4","mx-auto"],[1,"auth-form-light","text-left","py-5","px-4","px-sm-5"],[1,"brand-logo","text-center"],[1,"pt-3",3,"formGroup","ngSubmit"],[1,"form-group"],["type","text","id","exampleInputEmail1","placeholder","Username","formControlName","username",1,"form-control","form-control-lg"],["type","password","id","exampleInputPassword1","placeholder","Password","formControlName","password",1,"form-control","form-control-lg"],[1,"mt-3"],["type","submit",1,"btn","btn-block","btn-primary","btn-lg","font-weight-medium","auth-form-btn",3,"disabled"],[1,"my-2","d-flex","justify-content-between","align-items-center"],[1,"form-check"],[1,"form-check-label","text-muted"],["type","checkbox",1,"form-check-input"],[1,"input-helper"],["href","javascript:(void)",1,"auth-link","text-black"],[1,"text-center","mt-4","font-weight-light"],[1,"text-primary",3,"click"]],template:function(t,e){1&t&&r.Jc(0,l,27,2,"div",0),2&t&&r.mc("ngIf",!e.isLoggedIn())},directives:[n.m,i.x,i.o,i.h,i.c,i.n,i.f],styles:[".auth[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px}"]}),t})()},{path:"register",component:(()=>{class t{constructor(t){this.authService=t}ngOnInit(){}isLoggedIn(){return this.authService.isLoggedIn()}}return t.\u0275fac=function(e){return new(e||t)(r.Mb(b.a))},t.\u0275cmp=r.Gb({type:t,selectors:[["app-register"]],decls:1,vars:1,consts:[["class","d-flex align-items-center auth px-0",4,"ngIf"],[1,"d-flex","align-items-center","auth","px-0"],[1,"row","w-100","mx-0"],[1,"col-lg-4","mx-auto"],[1,"auth-form-light","text-left","py-5","px-4","px-sm-5"],[1,"brand-logo"],["src","./assets/icon/halalfood.png","alt","logo"],[1,"font-weight-light"],[1,"pt-3"],[1,"form-group"],["type","text","id","exampleInputUsername1","placeholder","Username",1,"form-control","form-control-lg"],["type","email","id","exampleInputEmail1","placeholder","Email",1,"form-control","form-control-lg"],["id","exampleFormControlSelect2",1,"form-control","form-control-lg"],["type","password","id","exampleInputPassword1","placeholder","Password",1,"form-control","form-control-lg"],[1,"mb-4"],[1,"form-check"],[1,"form-check-label","text-muted"],["type","checkbox",1,"form-check-input"],[1,"input-helper"],[1,"mt-3"],["routerLink","/products",1,"btn","btn-block","btn-primary","btn-lg","font-weight-medium","auth-form-btn"],[1,"text-center","mt-4","font-weight-light"],["routerLink","/login",1,"text-primary"]],template:function(t,e){1&t&&r.Jc(0,s,44,0,"div",0),2&t&&r.mc("ngIf",!e.isLoggedIn())},directives:[n.m,i.x,i.o,i.p,i.r,i.w,c.i],styles:[""]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({factory:function(e){return new(e||t)},imports:[[n.c,i.j,i.t,c.j.forChild(m)]]}),t})()}}]);