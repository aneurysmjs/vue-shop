(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{102:function(t,n,r){"use strict";r.r(n);var e=r(103),u=r.n(e);for(var i in e)"default"!==i&&function(t){r.d(n,t,function(){return e[t]})}(i);n.default=u.a},103:function(t,n,r){"use strict";var e=r(0);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=e(r(128)).default;n.default=u},104:function(t,n,r){"use strict";r.r(n);var e=r(105),u=r.n(e);for(var i in e)"default"!==i&&function(t){r.d(n,t,function(){return e[t]})}(i);n.default=u.a},105:function(t,n,r){"use strict";var e=r(0);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=e(r(129)),i={name:"Button",props:{type:{type:String,default:"button"},primary:{type:Boolean,default:!1}},data:function(){var t=this.$props.primary;return{skins:(0,u.default)({"button--primary":t})}},methods:{handleClick:function(){this.$emit("click")}}};n.default=i},106:function(t,n,r){},119:function(t,n,r){"use strict";r.r(n);var e=r(120),u=r.n(e);for(var i in e)"default"!==i&&function(t){r.d(n,t,function(){return e[t]})}(i);n.default=u.a},120:function(t,n,r){"use strict";var e=r(0);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=e(r(181)).default;n.default=u},121:function(t,n,r){"use strict";r.r(n);var e=r(122),u=r.n(e);for(var i in e)"default"!==i&&function(t){r.d(n,t,function(){return e[t]})}(i);n.default=u.a},122:function(t,n,r){"use strict";var e=r(0);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=r(24),i=e(r(182)),o=(0,u.createNamespacedHelpers)("products"),a=o.mapState,c=o.mapActions,s={components:{ProductDescription:i.default},computed:a(["product"]),created:function(){var t=this.$route.params.id;this.fetchProduct(t)},methods:c(["fetchProduct"])};n.default=s},123:function(t,n,r){"use strict";r.r(n);var e=r(124),u=r.n(e);for(var i in e)"default"!==i&&function(t){r.d(n,t,function(){return e[t]})}(i);n.default=u.a},124:function(t,n,r){"use strict";var e=r(0);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=e(r(183)).default;n.default=u},125:function(t,n,r){"use strict";r.r(n);var e=r(126),u=r.n(e);for(var i in e)"default"!==i&&function(t){r.d(n,t,function(){return e[t]})}(i);n.default=u.a},126:function(t,n,r){"use strict";var e=r(0);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=e(r(34)),i=r(24),o=e(r(127)),a=(0,i.createNamespacedHelpers)("cart").mapActions,c={name:"ProductDescription",components:{Button:o.default},props:{product:{type:Object,default:function(){return{}}}},methods:(0,u.default)({handleAddToCart:function(){var t=this.$props.product;this.addToCart(t)}},a(["addToCart"]))};n.default=c},127:function(t,n,r){"use strict";r.r(n);var e=r(102);for(var u in e)"default"!==u&&function(t){r.d(n,t,function(){return e[t]})}(u);var i=r(1),o=Object(i.a)(e.default,void 0,void 0,!1,null,null,null);o.options.__file="src/components/base/Button/index.vue",n.default=o.exports},128:function(t,n,r){"use strict";r.r(n);var e=r(176),u=r(104);for(var i in u)"default"!==i&&function(t){r.d(n,t,function(){return u[t]})}(i);r(130);var o=r(1),a=Object(o.a)(u.default,e.a,e.b,!1,null,null,null);a.options.__file="src/components/base/Button/Button.vue",n.default=a.exports},129:function(t,n,r){var e;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var r={}.hasOwnProperty;function u(){for(var t=[],n=0;n<arguments.length;n++){var e=arguments[n];if(e){var i=typeof e;if("string"===i||"number"===i)t.push(e);else if(Array.isArray(e)&&e.length){var o=u.apply(null,e);o&&t.push(o)}else if("object"===i)for(var a in e)r.call(e,a)&&e[a]&&t.push(a)}}return t.join(" ")}t.exports?(u.default=u,t.exports=u):void 0===(e=function(){return u}.apply(n,[]))||(t.exports=e)}()},130:function(t,n,r){"use strict";var e=r(106);r.n(e).a},131:function(t,n,r){},132:function(t,n,r){},176:function(t,n,r){"use strict";var e=function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"button",class:this.skins,attrs:{type:this.type},on:{click:this.handleClick}},[this._t("default")],2)},u=[];e._withStripped=!0,r.d(n,"a",function(){return e}),r.d(n,"b",function(){return u})},181:function(t,n,r){"use strict";r.r(n);var e=r(223),u=r(121);for(var i in u)"default"!==i&&function(t){r.d(n,t,function(){return u[t]})}(i);r(185);var o=r(1),a=Object(o.a)(u.default,e.a,e.b,!1,null,null,null);a.options.__file="src/pages/Product/Product.vue",n.default=a.exports},182:function(t,n,r){"use strict";r.r(n);var e=r(123);for(var u in e)"default"!==u&&function(t){r.d(n,t,function(){return e[t]})}(u);var i=r(1),o=Object(i.a)(e.default,void 0,void 0,!1,null,null,null);o.options.__file="src/pages/Product/ProductDescription/index.vue",n.default=o.exports},183:function(t,n,r){"use strict";r.r(n);var e=r(219),u=r(125);for(var i in u)"default"!==i&&function(t){r.d(n,t,function(){return u[t]})}(i);r(184);var o=r(1),a=Object(o.a)(u.default,e.a,e.b,!1,null,null,null);a.options.__file="src/pages/Product/ProductDescription/ProductDescription.vue",n.default=a.exports},184:function(t,n,r){"use strict";var e=r(131);r.n(e).a},185:function(t,n,r){"use strict";var e=r(132);r.n(e).a},219:function(t,n,r){"use strict";var e=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("article",{staticClass:"product-description"},[r("header",[r("h2",[r("strong",[t._v(t._s(t.product.name))])])]),t._v(" "),r("h4",[t._v("\n    "+t._s(t.product.shop)+"\n  ")]),t._v(" "),r("p",{staticClass:"product-price"},[t._v("\n    "+t._s(t.product.price)+"\n  ")]),t._v(" "),r("p",{staticClass:"product-text"},[t._v("\n    "+t._s(t.product.description)+"\n  ")]),t._v(" "),r("div",[r("Button",{attrs:{primary:""},on:{click:t.handleAddToCart}},[t._v("\n      Add To Cart\n    ")])],1)])},u=[];e._withStripped=!0,r.d(n,"a",function(){return e}),r.d(n,"b",function(){return u})},223:function(t,n,r){"use strict";var e=function(){var t=this.$createElement,n=this._self._c||t;return n("aside",{staticClass:"product"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-sm-12 col-md-12 col-md-9 col-xl-9"},[n("figure",{staticClass:"product-image"},[n("img",{staticClass:"img-fluid",attrs:{src:this.product.img,alt:this.product.name}})])]),this._v(" "),n("div",{staticClass:"col-12 col-sm-12 col-md-12 col-md-3 col-xl-3"},[n("ProductDescription",{attrs:{product:this.product}})],1)])])},u=[];e._withStripped=!0,r.d(n,"a",function(){return e}),r.d(n,"b",function(){return u})},92:function(t,n,r){"use strict";r.r(n);var e=r(119);for(var u in e)"default"!==u&&function(t){r.d(n,t,function(){return e[t]})}(u);var i=r(1),o=Object(i.a)(e.default,void 0,void 0,!1,null,null,null);o.options.__file="src/pages/Product/index.vue",n.default=o.exports}}]);
//# sourceMappingURL=2.6d7f2666b186d8fa4e0e.chunk.js.map