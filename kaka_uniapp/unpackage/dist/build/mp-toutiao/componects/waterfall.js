(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["componects/waterfall"],{"13d1":function(t,u,a){"use strict";a.r(u);var n=a("de34"),i=a("a342");for(var e in i)["default"].indexOf(e)<0&&function(t){a.d(u,t,(function(){return i[t]}))}(e);a("457f");var o=a("828b"),f=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"4de93121",null,!1,n["a"],void 0);u["default"]=f.exports},"42e6":function(t,u,a){},"457f":function(t,u,a){"use strict";var n=a("42e6"),i=a.n(n);i.a},"9d57":function(t,u,a){"use strict";var n=a("47a9");Object.defineProperty(u,"__esModule",{value:!0}),u.default=void 0;var i=n(a("7eb4")),e=n(a("ee10")),o={data:function(){return{list:[],list1:[],list2:[]}},created:function(){var t=this;return(0,e.default)(i.default.mark((function u(){var a,n;return i.default.wrap((function(u){while(1)switch(u.prev=u.next){case 0:return u.next=2,t.getData();case 2:a=u.sent,n=a.data,console.log(n),t.list=n;case 6:case"end":return u.stop()}}),u)})))()},methods:{changeList:function(t){this[t.name].push(t.value)},getData:function(){var t=this;return console.log(11),new Promise((function(u){var a=["https://img2.baidu.com/it/u=3412909306,1442259109&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500","https://img1.baidu.com/it/u=3849409103,1180457666&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500","https://img2.baidu.com/it/u=918835821,3340688162&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1082","https://img2.baidu.com/it/u=1955395411,639086901&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500","https://img1.baidu.com/it/u=2119313609,766967026&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500","https://img2.baidu.com/it/u=3082804013,660672339&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500","https://img0.baidu.com/it/u=2670794157,1132550665&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889","https://img0.baidu.com/it/u=1925646985,257133815&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500","https://img0.baidu.com/it/u=2989421989,3819802583&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500","https://img1.baidu.com/it/u=2825332760,3336729467&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500","https://img0.baidu.com/it/u=979887732,3636171879&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500","https://img1.baidu.com/it/u=3784852545,2548785503&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500","https://img2.baidu.com/it/u=1242120849,2077793669&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=505","https://img1.baidu.com/it/u=151556987,1690211059&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"],n=[],i=function(u){var n=Math.floor(10*Math.random());return{id:1,image:a[n],title:"(".concat(t.list.length+u+1,u%2==0?")体验uv-ui框架":")uv-ui支持多平台"),desc:u%2==0?"(".concat(t.list.length+u+1,")欢迎使用uv-ui，uni-app生态专用的UI框架"):"(".concat(t.list.length+u,")开发者编写一套代码， 可发布到iOS、Android、H5、以及各种小程序")}};setTimeout((function(){for(var t=0;t<20;t++)n.push(i(t));u({data:n})}),200)}))}}};u.default=o},a342:function(t,u,a){"use strict";a.r(u);var n=a("9d57"),i=a.n(n);for(var e in n)["default"].indexOf(e)<0&&function(t){a.d(u,t,(function(){return n[t]}))}(e);u["default"]=i.a},de34:function(t,u,a){"use strict";a.d(u,"b",(function(){return i})),a.d(u,"c",(function(){return e})),a.d(u,"a",(function(){return n}));var n={uvWaterfall:function(){return Promise.all([a.e("common/vendor"),a.e("uni_modules/uv-waterfall/components/uv-waterfall/uv-waterfall")]).then(a.bind(null,"b7e6"))},uvIcon:function(){return Promise.all([a.e("common/vendor"),a.e("uni_modules/uv-icon/components/uv-icon/uv-icon")]).then(a.bind(null,"d340"))},uvAvatar:function(){return Promise.all([a.e("common/vendor"),a.e("uni_modules/uv-avatar/components/uv-avatar/uv-avatar")]).then(a.bind(null,"8723"))}},i=function(){var t=this.$createElement;this._self._c},e=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'componects/waterfall-create-component',
    {
        'componects/waterfall-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('a261')['createComponent'](__webpack_require__("13d1"))
        })
    },
    [['componects/waterfall-create-component']]
]);
