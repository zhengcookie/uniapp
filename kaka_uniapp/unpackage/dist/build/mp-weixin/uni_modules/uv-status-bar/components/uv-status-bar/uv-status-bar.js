(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uv-status-bar/components/uv-status-bar/uv-status-bar"],{"2e5a":function(t,e,a){"use strict";a.r(e);var n=a("9eed"),u=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=u.a},"36c5":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return u})),a.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=(this._self._c,this.__get_style([this.style]));this.$mp.data=Object.assign({},{$root:{s0:e}})},u=[]},"98d9":function(t,e,a){"use strict";a.r(e);var n=a("36c5"),u=a("2e5a");for(var s in u)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return u[t]}))}(s);a("d40b");var i=a("828b"),r=Object(i["a"])(u["default"],n["b"],n["c"],!1,null,"c36c36f4",null,!1,n["a"],void 0);e["default"]=r.exports},"9eed":function(t,e,a){"use strict";var n=a("47a9");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=n(a("f97e")),s=n(a("2be4")),i=n(a("bb73")),r={name:"uv-status-bar",mixins:[u.default,s.default,i.default],data:function(){return{}},computed:{style:function(){var t={};return t.height=this.$uv.addUnit(this.$uv.sys().statusBarHeight,"px"),this.bgColor&&(this.bgColor.indexOf("gradient")>-1?t.backgroundImage=this.bgColor:t.background=this.bgColor),this.$uv.deepMerge(t,this.$uv.addStyle(this.customStyle))}}};e.default=r},aac1:function(t,e,a){},d40b:function(t,e,a){"use strict";var n=a("aac1"),u=a.n(n);u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uv-status-bar/components/uv-status-bar/uv-status-bar-create-component',
    {
        'uni_modules/uv-status-bar/components/uv-status-bar/uv-status-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("98d9"))
        })
    },
    [['uni_modules/uv-status-bar/components/uv-status-bar/uv-status-bar-create-component']]
]);
