(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uv-icon/components/uv-icon/uv-icon"],{"01d5":function(t,i,n){"use strict";var e=n("1007"),s=n.n(e);s.a},1007:function(t,i,n){},3617:function(t,i,n){"use strict";n.r(i);var e=n("5f91"),s=n.n(e);for(var u in e)["default"].indexOf(u)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(u);i["default"]=s.a},"5f91":function(t,i,n){"use strict";var e=n("47a9");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=e(n("f97e")),u=e(n("2be4")),o=e(n("d03f")),a=e(n("64ce")),l={name:"uv-icon",emits:["click"],mixins:[s.default,u.default,a.default],data:function(){return{colorType:["primary","success","info","error","warning"]}},computed:{uClasses:function(){var t=[];return t.push(this.customPrefix),t.push(this.customPrefix+"-"+this.name),this.color&&this.colorType.includes(this.color)&&t.push("uv-icon__icon--"+this.color),t},iconStyle:function(){var t={};return t={fontSize:this.$uv.addUnit(this.size),lineHeight:this.$uv.addUnit(this.size),fontWeight:this.bold?"bold":"normal",top:this.$uv.addUnit(this.top)},this.color&&!this.colorType.includes(this.color)&&(t.color=this.color),t},isImg:function(){var t=this.name.indexOf("data:")>-1&&this.name.indexOf("base64")>-1;return-1!==this.name.indexOf("/")||t},imgStyle:function(){var t={};return t.width=this.width?this.$uv.addUnit(this.width):this.$uv.addUnit(this.size),t.height=this.height?this.$uv.addUnit(this.height):this.$uv.addUnit(this.size),t},icon:function(){var t=o.default["uvicon-"+this.name];return t?unescape("%u".concat(t)):["uvicon"].indexOf(this.customPrefix)>-1?this.name:""}},methods:{clickHandler:function(t){this.$emit("click",this.index),this.stop&&this.preventEvent(t)}}};i.default=l},d340:function(t,i,n){"use strict";n.r(i);var e=n("db02"),s=n("3617");for(var u in s)["default"].indexOf(u)<0&&function(t){n.d(i,t,(function(){return s[t]}))}(u);n("01d5");var o=n("828b"),a=Object(o["a"])(s["default"],e["b"],e["c"],!1,null,"d8667afa",null,!1,e["a"],void 0);i["default"]=a.exports},db02:function(t,i,n){"use strict";n.d(i,"b",(function(){return e})),n.d(i,"c",(function(){return s})),n.d(i,"a",(function(){}));var e=function(){var t=this,i=t.$createElement,n=(t._self._c,t.isImg?t.__get_style([t.imgStyle,t.$uv.addStyle(t.customStyle)]):null),e=t.isImg?null:t.__get_style([t.iconStyle,t.$uv.addStyle(t.customStyle)]),s=""!==t.label?t.$uv.addUnit(t.labelSize):null,u=""!==t.label&&"right"==t.labelPos?t.$uv.addUnit(t.space):null,o=""!==t.label&&"bottom"==t.labelPos?t.$uv.addUnit(t.space):null,a=""!==t.label&&"left"==t.labelPos?t.$uv.addUnit(t.space):null,l=""!==t.label&&"top"==t.labelPos?t.$uv.addUnit(t.space):null;t.$mp.data=Object.assign({},{$root:{s0:n,s1:e,g0:s,g1:u,g2:o,g3:a,g4:l}})},s=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uv-icon/components/uv-icon/uv-icon-create-component',
    {
        'uni_modules/uv-icon/components/uv-icon/uv-icon-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('4884')['createComponent'](__webpack_require__("d340"))
        })
    },
    [['uni_modules/uv-icon/components/uv-icon/uv-icon-create-component']]
]);
