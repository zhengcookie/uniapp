(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uv-link/components/uv-link/uv-link"],{"2c57":function(t,n,i){},"41a7":function(t,n,i){"use strict";(function(t){var e=i("47a9");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=e(i("f97e")),a=e(i("2be4")),c=e(i("dada")),o={name:"uv-link",emits:["click"],mixins:[u.default,a.default,c.default],computed:{linkStyle:function(){var t={color:this.color,fontSize:this.$uv.addUnit(this.fontSize),lineHeight:this.$uv.addUnit(this.$uv.getPx(this.fontSize)+2),textDecoration:this.underLine?"underline":"none"};return t}},methods:{openLink:function(){var n=this;t.setClipboardData({data:this.href,success:function(){t.hideToast(),n.$nextTick((function(){toast(n.mpTips)}))}}),this.$emit("click")}}};n.default=o}).call(this,i("4884")["default"])},"4d13":function(t,n,i){"use strict";i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return u})),i.d(n,"a",(function(){}));var e=function(){var t=this.$createElement,n=(this._self._c,this.__get_style([this.linkStyle,this.$uv.addStyle(this.customStyle)]));this.$mp.data=Object.assign({},{$root:{s0:n}})},u=[]},"64af":function(t,n,i){"use strict";var e=i("2c57"),u=i.n(e);u.a},"94c0":function(t,n,i){"use strict";i.r(n);var e=i("4d13"),u=i("eb8c");for(var a in u)["default"].indexOf(a)<0&&function(t){i.d(n,t,(function(){return u[t]}))}(a);i("64af");var c=i("828b"),o=Object(c["a"])(u["default"],e["b"],e["c"],!1,null,"23f034da",null,!1,e["a"],void 0);n["default"]=o.exports},eb8c:function(t,n,i){"use strict";i.r(n);var e=i("41a7"),u=i.n(e);for(var a in e)["default"].indexOf(a)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(a);n["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uv-link/components/uv-link/uv-link-create-component',
    {
        'uni_modules/uv-link/components/uv-link/uv-link-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('4884')['createComponent'](__webpack_require__("94c0"))
        })
    },
    [['uni_modules/uv-link/components/uv-link/uv-link-create-component']]
]);
