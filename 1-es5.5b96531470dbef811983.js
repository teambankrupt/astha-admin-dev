!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"2uy1":function(e,i,r){"use strict";r.d(i,"a",(function(){return z}));var s=r("8Y7J"),a=r("SVse"),f=r("XNiG"),c=r("VRyK"),u=r("xgIS"),h=r("LRne"),l=r("eNwd");function p(t,e){if(1!==t.nodeType)return[];var n=t.ownerDocument.defaultView.getComputedStyle(t,null);return e?n[e]:n}function m(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function d(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=p(t),n=e.overflow,o=e.overflowX,i=e.overflowY;return/(auto|scroll|overlay)/.test(String(n)+String(i)+String(o))?t:d(m(t))}var g="undefined"!=typeof window&&"undefined"!=typeof document,v=g&&!(!window.MSInputMethodContext||!document.documentMode),b=g&&!(!window.MSInputMethodContext||!/MSIE 10/.test(navigator.userAgent));function w(t){return 11===t?v:10===t?b:v||b}function _(t){if(!t)return document.documentElement;for(var e,n=w(10)?document.body:null,o=t.offsetParent||null;o===n&&t.nextElementSibling&&e!==t.nextElementSibling;)o=(e=t.nextElementSibling).offsetParent;var i=o&&o.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TH","TD","TABLE"].indexOf(o.nodeName)&&"static"===p(o,"position")?_(o):o:e?e.ownerDocument.documentElement:document.documentElement}function y(t){return null!==t.parentNode?y(t.parentNode):t}function R(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement;var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,o=n?t:e,i=n?e:t,r=document.createRange();r.setStart(o,0),r.setEnd(i,0);var s,a,f=r.commonAncestorContainer;if(t!==f&&e!==f||o.contains(i))return"BODY"===(a=(s=f).nodeName)||"HTML"!==a&&_(s.firstElementChild)!==s?_(f):f;var c=y(t);return c.host?R(c.host,e):R(t,y(e).host)}function E(t,e){var n="x"===e?"Left":"Top",o="Left"===n?"Right":"Bottom";return parseFloat(t["border".concat(n,"Width")])+parseFloat(t["border".concat(o,"Width")])}function O(t,e,n,o){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],w(10)?parseInt(n["offset"+t],10)+parseInt(o["margin"+("Height"===t?"Top":"Left")],10)+parseInt(o["margin"+("Height"===t?"Bottom":"Right")],10):0)}function k(t){var e=t.body,n=t.documentElement,o=w(10)&&getComputedStyle(n);return{height:O("Height",e,n,o),width:O("Width",e,n,o)}}function N(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===e?"scrollTop":"scrollLeft",o=t.nodeName;if("BODY"===o||"HTML"===o){var i=t.ownerDocument.documentElement;return(t.ownerDocument.scrollingElement||i)[n]}return t[n]}function M(t){return Object.assign(Object.assign({},t),{right:t.left+t.width,bottom:t.top+t.height})}function S(t){var e={};try{if(w(10)){e=t.getBoundingClientRect();var n=N(t,"top"),o=N(t,"left");e.top+=n,e.left+=o,e.bottom+=n,e.right+=o}else e=t.getBoundingClientRect()}catch(c){return}var i={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},r="HTML"===t.nodeName?k(t.ownerDocument):{},s=t.offsetWidth-(r.width||t.clientWidth||i.right-i.left),a=t.offsetHeight-(r.height||t.clientHeight||i.bottom-i.top);if(s||a){var f=p(t);s-=E(f,"x"),a-=E(f,"y"),i.width-=s,i.height-=a}return M(i)}function C(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=w(10),i="HTML"===e.nodeName,r=S(t),s=S(e),a=d(t),f=p(e),c=parseFloat(f.borderTopWidth),u=parseFloat(f.borderLeftWidth);n&&i&&(s.top=Math.max(s.top,0),s.left=Math.max(s.left,0));var h=M({top:r.top-s.top-c,left:r.left-s.left-u,width:r.width,height:r.height});if(h.marginTop=0,h.marginLeft=0,!o&&i){var l=parseFloat(f.marginTop),m=parseFloat(f.marginLeft);h.top-=c-l,h.bottom-=c-l,h.left-=u-m,h.right-=u-m,h.marginTop=l,h.marginLeft=m}return(o&&!n?e.contains(a):e===a&&"BODY"!==a.nodeName)&&(h=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=N(e,"top"),i=N(e,"left"),r=n?-1:1;return t.top+=o*r,t.bottom+=o*r,t.left+=i*r,t.right+=i*r,t}(h,e)),h}function x(t){if(!t||!t.parentElement||w())return document.documentElement;for(var e=t.parentElement;e&&"none"===p(e,"transform");)e=e.parentElement;return e||document.documentElement}function L(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3?arguments[3]:void 0,i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r={top:0,left:0},s=i?x(t):R(t,e);if("viewport"===o)r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.ownerDocument.documentElement,o=C(t,n),i=Math.max(n.clientWidth,window.innerWidth||0),r=Math.max(n.clientHeight,window.innerHeight||0),s=e?0:N(n),a=e?0:N(n,"left");return M({top:s-Number(o.top)+Number(o.marginTop),left:a-Number(o.left)+Number(o.marginLeft),width:i,height:r})}(s,i);else{var a;"scrollParent"===o?"BODY"===(a=d(m(e))).nodeName&&(a=t.ownerDocument.documentElement):a="window"===o?t.ownerDocument.documentElement:o;var f=C(a,s,i);if("HTML"!==a.nodeName||function t(e){var n=e.nodeName;return"BODY"!==n&&"HTML"!==n&&("fixed"===p(e,"position")||t(m(e)))}(s))r=f;else{var c=k(t.ownerDocument),u=c.height,h=c.width;r.top+=f.top-f.marginTop,r.bottom=Number(u)+Number(f.top),r.left+=f.left-f.marginLeft,r.right=Number(h)+Number(f.left)}}return r.left+=n,r.top+=n,r.right-=n,r.bottom-=n,r}function F(t){return t.width*t.height}function T(t,e,n,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:["top","bottom","right","left"],r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"viewport",s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;if(-1===t.indexOf("auto"))return t;var a=L(n,o,s,r),f={top:{width:a.width,height:e.top-a.top},right:{width:a.right-e.right,height:a.height},bottom:{width:a.width,height:a.bottom-e.bottom},left:{width:e.left-a.left,height:a.height}},c=Object.keys(f).map((function(t){return Object.assign(Object.assign({key:t},f[t]),{area:F(f[t])})})).sort((function(t,e){return e.area-t.area})),u=c.filter((function(t){var e=t.width,o=t.height;return e>=n.clientWidth&&o>=n.clientHeight})),h=(u=u.filter((function(t){return i.some((function(e){return e===t.key}))}))).length>0?u[0].key:c[0].key,l=t.split(" ")[1];return n.className=n.className.replace(/bs-tooltip-auto/g,"bs-tooltip-"+h),h+(l?"-"+l:"")}function j(t){var e=t.ownerDocument.defaultView.getComputedStyle(t),n=parseFloat(e.marginTop||0)+parseFloat(e.marginBottom||0),o=parseFloat(e.marginLeft||0)+parseFloat(e.marginRight||0);return{width:Number(t.offsetWidth)+o,height:Number(t.offsetHeight)+n}}function D(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return C(e,n?x(t):R(t,e),n)}function H(t,e,n){var o=n.split(" ")[0],i=j(t),r={width:i.width,height:i.height},s=-1!==["right","left"].indexOf(o),a=s?"top":"left",f=s?"left":"top",c=s?"height":"width",u=s?"width":"height";return r[a]=e[a]+e[c]/2-i[c]/2,r[f]=o===f?e[f]-i[u]:e[function(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,(function(t){return e[t]}))}(f)],r}function B(t,e){return t&&t.modifiers&&t.modifiers[e]&&t.modifiers[e].enabled}function P(t,e,n){Object.keys(e).forEach((function(o){var i,r="";-1!==["width","height","top","right","bottom","left"].indexOf(o)&&""!==(i=e[o])&&!isNaN(parseFloat(i))&&isFinite(i)&&(r="px"),n?n.setStyle(t,o,"".concat(String(e[o])).concat(r)):t.style[o]=String(e[o])+r}))}function V(t){var e,n=t.offsets.target,i=t.instance.target.querySelector(".arrow");if(!i)return t;var r=-1!==["left","right"].indexOf(t.placement.split(" ")[0]),s=r?"height":"width",a=r?"Top":"Left",f=a.toLowerCase(),c=r?"left":"top",u=r?"bottom":"right",h=j(i)[s],l=t.placement.split(" ")[1];t.offsets.host[u]-h<n[f]&&(n[f]-=n[f]-(t.offsets.host[u]-h)),Number(t.offsets.host[f])+Number(h)>n[u]&&(n[f]+=Number(t.offsets.host[f])+Number(h)-Number(n[u])),n=M(n);var m,d=p(t.instance.target),g=parseFloat(d["margin"+a]),v=parseFloat(d["border".concat(a,"Width")]);if(l){var b=parseFloat(d.borderRadius),w=Number(g+v+b);m=f===l?Number(t.offsets.host[f])+w:Number(t.offsets.host[f])+Number(t.offsets.host[s]-w)}else m=Number(t.offsets.host[f])+Number(t.offsets.host[s]/2-h/2);var _=m-n[f]-g-v;return _=Math.max(Math.min(n[s]-h,_),0),t.offsets.arrow=(o(e={},f,Math.round(_)),o(e,c,""),e),t.instance.arrow=i,t}function I(t){if(t.offsets.target=M(t.offsets.target),!B(t.options,"flip"))return t.offsets.target=Object.assign(Object.assign({},t.offsets.target),H(t.instance.target,t.offsets.host,t.placement)),t;var e=L(t.instance.target,t.instance.host,0,"viewport",!1),n=t.placement.split(" ")[0],o=t.placement.split(" ")[1]||"",i=T("auto",t.offsets.host,t.instance.target,t.instance.host,t.options.allowedPositions),r=[n,i];return r.forEach((function(i,s){if(n!==i||r.length===s+1)return t;var a="left"===(n=t.placement.split(" ")[0])&&Math.floor(t.offsets.target.right)>Math.floor(t.offsets.host.left)||"right"===n&&Math.floor(t.offsets.target.left)<Math.floor(t.offsets.host.right)||"top"===n&&Math.floor(t.offsets.target.bottom)>Math.floor(t.offsets.host.top)||"bottom"===n&&Math.floor(t.offsets.target.top)<Math.floor(t.offsets.host.bottom),f=Math.floor(t.offsets.target.left)<Math.floor(e.left),c=Math.floor(t.offsets.target.right)>Math.floor(e.right),u=Math.floor(t.offsets.target.top)<Math.floor(e.top),h=Math.floor(t.offsets.target.bottom)>Math.floor(e.bottom),l="left"===n&&f||"right"===n&&c||"top"===n&&u||"bottom"===n&&h,p=-1!==["top","bottom"].indexOf(n),m=p&&"left"===o&&f||p&&"right"===o&&c||!p&&"left"===o&&u||!p&&"right"===o&&h;(a||l||m)&&((a||l)&&(n=r[s+1]),m&&(o=function(t){return"right"===t?"left":"left"===t?"right":t}(o)),t.placement=n+(o?" "+o:""),t.offsets.target=Object.assign(Object.assign({},t.offsets.target),H(t.instance.target,t.offsets.host,t.placement)))})),t}function W(t){if(!B(t.options,"preventOverflow"))return t;var e=t.instance.target.style,n=e.top,i=e.left,r=e.transform;e.top="",e.left="",e.transform="";var s=L(t.instance.target,t.instance.host,0,"scrollParent",!1);e.top=n,e.left=i,e.transform=r;var a,f={primary:function(e){var n=t.offsets.target[e];return t.offsets.target[e]<s[e]&&(n=Math.max(t.offsets.target[e],s[e])),o({},e,n)},secondary:function(e){var n="right"===e?"left":"top",i=t.offsets.target[n];return t.offsets.target[e]>s[e]&&(i=Math.min(t.offsets.target[n],s[e]-("right"===e?t.offsets.target.width:t.offsets.target.height))),o({},n,i)}};return["left","right","top","bottom"].forEach((function(e){a=-1!==["left","top"].indexOf(e)?"primary":"secondary",t.offsets.target=Object.assign(Object.assign({},t.offsets.target),f[a](e))})),t}function $(t){var e=t.placement,n=e.split(" ")[0],i=e.split(" ")[1];if(i){var r=t.offsets,s=r.host,a=r.target,f=-1!==["bottom","top"].indexOf(n),c=f?"left":"top",u=f?"width":"height",h={start:o({},c,s[c]),end:o({},c,s[c]+s[u]-a[u])};t.offsets.target=Object.assign(Object.assign({},a),o({},c,c===i?h.start[c]:h.end[c]))}return t}var Y=new(function(){function e(){t(this,e)}return n(e,[{key:"position",value:function(t,e){return this.offset(t,e,!1)}},{key:"offset",value:function(t,e){return D(e,t)}},{key:"positionElements",value:function(t,e,n,o,i){return[I,$,W,V].reduce((function(t,e){return e(t)}),function(t,e,n,o){var i=D(t,e);n.match(/^(auto)*\s*(left|right|top|bottom)*$/)||n.match(/^(left|right|top|bottom)*(?: (left|right|top|bottom))?\s*(start|end)*$/)||(n="auto");var r=!!n.match(/auto/g),s=n.match(/auto\s(left|right|top|bottom)/)?n.split(" ")[1]||"auto":n,a=s.match(/^(left|right|top|bottom)* ?(?!\1)(left|right|top|bottom)?/);return a&&(s=a[1]+(a[2]?" "+a[2]:"")),-1!==["left right","right left","top bottom","bottom top"].indexOf(s)&&(s="auto"),{options:o,instance:{target:t,host:e,arrow:null},offsets:{target:H(t,i,s),host:i,arrow:null},positionFixed:!1,placement:s=T(s,i,t,e,o?o.allowedPositions:void 0),placementAuto:r}}(e,t,n,i))}}]),e}()),z=function(){var e=function(){function e(n,o,i){var r=this;t(this,e),this.update$$=new f.a,this.positionElements=new Map,this.isDisabled=!1,Object(a.A)(i)&&n.runOutsideAngular((function(){r.triggerEvent$=Object(c.a)(Object(u.a)(window,"scroll",{passive:!0}),Object(u.a)(window,"resize",{passive:!0}),Object(h.a)(0,l.a),r.update$$),r.triggerEvent$.subscribe((function(){r.isDisabled||r.positionElements.forEach((function(t){var e,n,i,s,a,f,c,u;e=A(t.target),n=A(t.element),i=t.attachment,s=t.appendToBody,a=r.options,f=o.createRenderer(null,null),c=Y.positionElements(e,n,i,s,a),u=function(t){return{width:t.offsets.target.width,height:t.offsets.target.height,left:Math.floor(t.offsets.target.left),top:Math.round(t.offsets.target.top),bottom:Math.round(t.offsets.target.bottom),right:Math.floor(t.offsets.target.right)}}(c),P(n,{"will-change":"transform",top:"0px",left:"0px",transform:"translate3d(".concat(u.left,"px, ").concat(u.top,"px, 0px)")},f),c.instance.arrow&&P(c.instance.arrow,c.offsets.arrow,f),function(t,e){var n=t.instance.target,o=n.className;t.placementAuto&&(-1!==(o=(o=(o=o.replace(/bs-popover-auto/g,"bs-popover-"+t.placement)).replace(/bs-tooltip-auto/g,"bs-tooltip-"+t.placement)).replace(/\sauto/g," "+t.placement)).indexOf("popover")&&-1===o.indexOf("popover-auto")&&(o+=" popover-auto"),-1!==o.indexOf("tooltip")&&-1===o.indexOf("tooltip-auto")&&(o+=" tooltip-auto")),o=o.replace(/left|right|top|bottom/g,""+t.placement.split(" ")[0]),e?e.setAttribute(n,"class",o):n.className=o}(c,f)}))}))}))}return n(e,[{key:"position",value:function(t){this.addPositionElement(t)}},{key:"disable",value:function(){this.isDisabled=!0}},{key:"enable",value:function(){this.isDisabled=!1}},{key:"addPositionElement",value:function(t){this.positionElements.set(A(t.element),t)}},{key:"calcPosition",value:function(){this.update$$.next()}},{key:"deletePositionElement",value:function(t){this.positionElements.delete(A(t))}},{key:"setOptions",value:function(t){this.options=t}},{key:"event$",get:function(){return this.triggerEvent$}}]),e}();return e.\u0275fac=function(t){return new(t||e)(s.ac(s.z),s.ac(s.F),s.ac(s.B))},e.\u0275prov=s.Ib({token:e,factory:e.\u0275fac}),e}();function A(t){return"string"==typeof t?document.querySelector(t):t instanceof s.l?t.nativeElement:t}},hpHm:function(e,o,i){"use strict";i.d(o,"a",(function(){return g})),i.d(o,"b",(function(){return v})),i.d(o,"c",(function(){return m})),i.d(o,"d",(function(){return d})),i.d(o,"e",(function(){return c})),i.d(o,"f",(function(){return f})),i.d(o,"g",(function(){return h})),i.d(o,"h",(function(){return u})),i.d(o,"i",(function(){return _})),i.d(o,"j",(function(){return p}));var r=i("8Y7J"),s=function(){function e(n,o){t(this,e),this.open=n,this.close=o||n}return n(e,[{key:"isManual",value:function(){return"manual"===this.open||"manual"===this.close}}]),e}(),a={hover:["mouseover","mouseout"],focus:["focusin","focusout"]};function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,n=(t||"").trim();if(0===n.length)return[];var o=n.split(/\s+/).map((function(t){return t.split(":")})).map((function(t){var n=e[t[0]]||t;return new s(n[0],n[1])})),i=o.filter((function(t){return t.isManual()}));if(i.length>1)throw new Error("Triggers parse error: only one manual trigger is allowed");if(1===i.length&&o.length>1)throw new Error("Triggers parse error: manual trigger can't be mixed with other triggers");return o}function c(t,e){var n=f(e.triggers),o=e.target;if(1===n.length&&n[0].isManual())return Function.prototype;var i=[],r=[],s=function(){r.forEach((function(t){return i.push(t())})),r.length=0};return n.forEach((function(n){var a=n.open===n.close,f=a?e.toggle:e.show;a||r.push((function(){return t.listen(o,n.close,e.hide)})),i.push(t.listen(o,n.open,(function(){return f(s)})))})),function(){i.forEach((function(t){return t()}))}}function u(t,e){return e.outsideClick?t.listen("document","click",(function(t){e.target&&e.target.contains(t.target)||e.targets&&e.targets.some((function(e){return e.contains(t.target)}))||e.hide()})):Function.prototype}function h(t,e){return e.outsideEsc?t.listen("document","keyup.esc",(function(t){e.target&&e.target.contains(t.target)||e.targets&&e.targets.some((function(e){return e.contains(t.target)}))||e.hide()})):Function.prototype}var l,p="undefined"!=typeof window&&window||{},m=p.document;function d(){return void 0===p||(void 0===p.__theme?(l||(l=function(){if("undefined"==typeof document)return null;var t=document.createElement("span");t.innerText="test bs version",document.body.appendChild(t),t.classList.add("d-none");var e=t.getBoundingClientRect();return document.body.removeChild(t),e&&0===e.top?"bs4":"bs3"}()),"bs3"===l):"bs4"!==p.__theme)}function g(t){return function(t,e){var n=" __".concat(e,"Value");Object.defineProperty(t,e,{get:function(){return this[n]},set:function(t){var o=this[n];this[n]=t,o!==t&&this[e+"Change"]&&this[e+"Change"].emit(t)}})}}var v=function(){function e(){t(this,e)}return n(e,null,[{key:"reflow",value:function(t){}},{key:"getStyles",value:function(t){var e=t.ownerDocument.defaultView;return e&&e.opener||(e=p),e.getComputedStyle(t)}}]),e}(),b={},w="undefined"==typeof console||!("warn"in console);function _(t){!Object(r.V)()||w||t in b||(b[t]=!0,console.warn(t))}},"z/SZ":function(e,o,i){"use strict";i.d(o,"a",(function(){return u}));var r=i("8Y7J"),s=i("hpHm"),a=i("2uy1"),f=function e(n,o,i){t(this,e),this.nodes=n,this.viewRef=o,this.componentRef=i},c=function(){function e(n,o,i,s,a,f,c,u){t(this,e),this._viewContainerRef=n,this._renderer=o,this._elementRef=i,this._injector=s,this._componentFactoryResolver=a,this._ngZone=f,this._applicationRef=c,this._posService=u,this.onBeforeShow=new r.n,this.onShown=new r.n,this.onBeforeHide=new r.n,this.onHidden=new r.n,this._providers=[],this._isHiding=!1,this.containerDefaultSelector="body",this._listenOpts={},this._globalListener=Function.prototype}return n(e,[{key:"attach",value:function(t){return this._componentFactory=this._componentFactoryResolver.resolveComponentFactory(t),this}},{key:"to",value:function(t){return this.container=t||this.container,this}},{key:"position",value:function(t){return this.attachment=t.attachment||this.attachment,this._elementRef=t.target||this._elementRef,this}},{key:"provide",value:function(t){return this._providers.push(t),this}},{key:"show",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this._subscribePositioning(),this._innerComponent=null,!this._componentRef){this.onBeforeShow.emit(),this._contentRef=this._getContentRef(t.content,t.context,t.initialState);var e=r.r.create({providers:this._providers,parent:this._injector});this._componentRef=this._componentFactory.create(e,this._contentRef.nodes),this._applicationRef.attachView(this._componentRef.hostView),this.instance=this._componentRef.instance,Object.assign(this._componentRef.instance,t),this.container instanceof r.l&&this.container.nativeElement.appendChild(this._componentRef.location.nativeElement),"string"==typeof this.container&&"undefined"!=typeof document&&(document.querySelector(this.container)||document.querySelector(this.containerDefaultSelector)).appendChild(this._componentRef.location.nativeElement),!this.container&&this._elementRef&&this._elementRef.nativeElement.parentElement&&this._elementRef.nativeElement.parentElement.appendChild(this._componentRef.location.nativeElement),this._contentRef.componentRef&&(this._innerComponent=this._contentRef.componentRef.instance,this._contentRef.componentRef.changeDetectorRef.markForCheck(),this._contentRef.componentRef.changeDetectorRef.detectChanges()),this._componentRef.changeDetectorRef.markForCheck(),this._componentRef.changeDetectorRef.detectChanges(),this.onShown.emit(t.id?{id:t.id}:this._componentRef.instance)}return this._registerOutsideClick(),this._componentRef}},{key:"hide",value:function(t){if(!this._componentRef)return this;this._posService.deletePositionElement(this._componentRef.location),this.onBeforeHide.emit(this._componentRef.instance);var e=this._componentRef.location.nativeElement;return e.parentNode.removeChild(e),this._contentRef.componentRef&&this._contentRef.componentRef.destroy(),this._viewContainerRef&&this._contentRef.viewRef&&this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef)),this._contentRef.viewRef&&this._contentRef.viewRef.destroy(),this._contentRef=null,this._componentRef=null,this._removeGlobalListener(),this.onHidden.emit(t?{id:t}:null),this}},{key:"toggle",value:function(){this.isShown?this.hide():this.show()}},{key:"dispose",value:function(){this.isShown&&this.hide(),this._unsubscribePositioning(),this._unregisterListenersFn&&this._unregisterListenersFn()}},{key:"listen",value:function(t){var e=this;this.triggers=t.triggers||this.triggers,this._listenOpts.outsideClick=t.outsideClick,this._listenOpts.outsideEsc=t.outsideEsc,t.target=t.target||this._elementRef.nativeElement;var n=this._listenOpts.hide=function(){return t.hide?t.hide():void e.hide()},o=this._listenOpts.show=function(n){t.show?t.show(n):e.show(n),n()};return this._unregisterListenersFn=Object(s.e)(this._renderer,{target:t.target,triggers:t.triggers,show:o,hide:n,toggle:function(t){e.isShown?n():o(t)}}),this}},{key:"_removeGlobalListener",value:function(){this._globalListener&&(this._globalListener(),this._globalListener=null)}},{key:"attachInline",value:function(t,e){return this._inlineViewRef=t.createEmbeddedView(e),this}},{key:"_registerOutsideClick",value:function(){var t=this;if(this._componentRef&&this._componentRef.location){if(this._listenOpts.outsideClick){var e=this._componentRef.location.nativeElement;setTimeout((function(){t._globalListener=Object(s.h)(t._renderer,{targets:[e,t._elementRef.nativeElement],outsideClick:t._listenOpts.outsideClick,hide:function(){return t._listenOpts.hide()}})}))}if(this._listenOpts.outsideEsc){var n=this._componentRef.location.nativeElement;this._globalListener=Object(s.g)(this._renderer,{targets:[n,this._elementRef.nativeElement],outsideEsc:this._listenOpts.outsideEsc,hide:function(){return t._listenOpts.hide()}})}}}},{key:"getInnerComponent",value:function(){return this._innerComponent}},{key:"_subscribePositioning",value:function(){var t=this;!this._zoneSubscription&&this.attachment&&(this.onShown.subscribe((function(){t._posService.position({element:t._componentRef.location,target:t._elementRef,attachment:t.attachment,appendToBody:"body"===t.container})})),this._zoneSubscription=this._ngZone.onStable.subscribe((function(){t._componentRef&&t._posService.calcPosition()})))}},{key:"_unsubscribePositioning",value:function(){this._zoneSubscription&&(this._zoneSubscription.unsubscribe(),this._zoneSubscription=null)}},{key:"_getContentRef",value:function(t,e,n){if(!t)return new f([]);if(t instanceof r.L){if(this._viewContainerRef){var o=this._viewContainerRef.createEmbeddedView(t,e);return o.markForCheck(),new f([o.rootNodes],o)}var i=t.createEmbeddedView({});return this._applicationRef.attachView(i),new f([i.rootNodes],i)}if("function"==typeof t){var s=this._componentFactoryResolver.resolveComponentFactory(t),a=r.r.create({providers:this._providers,parent:this._injector}),c=s.create(a);return Object.assign(c.instance,n),this._applicationRef.attachView(c.hostView),new f([[c.location.nativeElement]],c.hostView,c)}return new f([[this._renderer.createText(""+t)]])}},{key:"isShown",get:function(){return!this._isHiding&&!!this._componentRef}}]),e}(),u=function(){var e=function(){function e(n,o,i,r,s){t(this,e),this._componentFactoryResolver=n,this._ngZone=o,this._injector=i,this._posService=r,this._applicationRef=s}return n(e,[{key:"createLoader",value:function(t,e,n){return new c(e,n,t,this._injector,this._componentFactoryResolver,this._ngZone,this._applicationRef,this._posService)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r.ac(r.j),r.ac(r.z),r.ac(r.r),r.ac(a.a),r.ac(r.g))},e.\u0275prov=r.Ib({token:e,factory:e.\u0275fac}),e}()}}])}();