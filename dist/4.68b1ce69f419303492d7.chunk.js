(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{127:function(t,n,e){"use strict";e.r(n);var r=e(128),a=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,function(){return r[t]})}(i);n.default=a.a},128:function(t,n,e){"use strict";var r=e(0);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={components:{Sidebar:r(e(170)).default},data:function(){return{links:[{path:"/admin",text:"Admin"},{path:"/admin/products",text:"Products"},{path:"/admin/users",text:"Users"}]}}};n.default=a},129:function(t,n,e){"use strict";e.r(n);var r=e(130),a=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,function(){return r[t]})}(i);n.default=a.a},130:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={props:{title:{type:String,default:"Sidebar"},links:{type:Array,default:function(){return[{path:"/admin",text:"Admin"}]}}},data:function(){return{username:{type:String,default:"Jero"}}}};n.default=r},131:function(t,n,e){},132:function(t,n,e){},170:function(t,n,e){"use strict";e.r(n);var r=e(192),a=e(129);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e(171);var u=e(1),s=Object(u.a)(a.default,r.a,r.b,!1,null,null,null);n.default=s.exports},171:function(t,n,e){"use strict";var r=e(131);e.n(r).a},172:function(t,n,e){"use strict";var r=e(132);e.n(r).a},192:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("aside",{staticClass:"sidebar"},[e("header",[e("h4",{staticClass:"text-center"},[t._v("\n      "+t._s(t.title)+"\n    ")])]),t._v(" "),e("nav",{staticClass:"sidebar__links"},t._l(t.links,function(n){return e("router-link",{key:n.path,staticClass:"btn btn-link",attrs:{to:n.path,tag:"button"},on:{click:function(e){return t.handleClick(n)}}},[t._v("\n      "+t._s(n.text)+"\n    ")])}),1)])},a=[];e.d(n,"a",function(){return r}),e.d(n,"b",function(){return a})},199:function(t,n,e){"use strict";var r=function(){var t=this.$createElement,n=this._self._c||t;return n("section",{staticClass:"container-fluid admin"},[n("div",{staticClass:"admin__wrapper"},[n("Sidebar",{attrs:{title:"Dashboard",links:this.links}}),this._v(" "),n("div",{staticClass:"admin__content"},[n("router-view")],1)],1)])},a=[];e.d(n,"a",function(){return r}),e.d(n,"b",function(){return a})},93:function(t,n,e){"use strict";e.r(n);var r=e(199),a=e(127);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e(172);var u=e(1),s=Object(u.a)(a.default,r.a,r.b,!1,null,null,null);n.default=s.exports}}]);
//# sourceMappingURL=4.68b1ce69f419303492d7.chunk.js.map