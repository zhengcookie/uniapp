(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uv-loading-icon/components/uv-loading-icon/uv-loading-icon"],{"09cd":function(e,n,t){"use strict";t.r(n);var i=t("7dc7"),o=t.n(i);for(var u in i)["default"].indexOf(u)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(u);n["default"]=o.a},1915:function(e,n,t){"use strict";var i=t("2ede"),o=t.n(i);o.a},"2ede":function(e,n,t){},"7dc7":function(e,n,t){"use strict";var i=t("47a9");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t("f0ab"),u=i(t("f97e")),a=i(t("2be4")),d=i(t("b60b")),r={name:"uv-loading-icon",mixins:[u.default,a.default,d.default],data:function(){return{array12:Array.from({length:12}),aniAngel:360,webviewHide:!1,loading:!1}},computed:{otherBorderColor:function(){var e=(0,o.colorGradient)(this.color,"#ffffff",100)[80];return"circle"===this.mode?this.inactiveColor?this.inactiveColor:e:"transparent"}},watch:{show:function(e){}},mounted:function(){this.init()},methods:{init:function(){setTimeout((function(){}),20)},addEventListenerToWebview:function(){var e=this,n=getCurrentPages(),t=n[n.length-1],i=t.$getAppWebview();i.addEventListener("hide",(function(){e.webviewHide=!0})),i.addEventListener("show",(function(){e.webviewHide=!1}))}}};n.default=r},c73e:function(e,n,t){"use strict";t.r(n);var i=t("d1f3"),o=t("09cd");for(var u in o)["default"].indexOf(u)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(u);t("1915");var a=t("828b"),d=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"360bd0aa",null,!1,i["a"],void 0);n["default"]=d.exports},d1f3:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){}));var i=function(){var e=this,n=e.$createElement,t=(e._self._c,e.show?e.__get_style([e.$uv.addStyle(e.customStyle)]):null),i=e.show&&!e.webviewHide?e.$uv.addUnit(e.size):null,o=e.show&&!e.webviewHide?e.$uv.addUnit(e.size):null,u=e.show&&e.text?e.$uv.addUnit(e.textSize):null;e.$mp.data=Object.assign({},{$root:{s0:t,g0:i,g1:o,g2:u}})},o=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uv-loading-icon/components/uv-loading-icon/uv-loading-icon-create-component',
    {
        'uni_modules/uv-loading-icon/components/uv-loading-icon/uv-loading-icon-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('a261')['createComponent'](__webpack_require__("c73e"))
        })
    },
    [['uni_modules/uv-loading-icon/components/uv-loading-icon/uv-loading-icon-create-component']]
]);
