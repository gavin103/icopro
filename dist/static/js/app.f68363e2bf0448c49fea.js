webpackJsonp([12],{112:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(168),o=e.n(a);n.default={name:"app",components:{"v-head":o.a},data:function(){return{activeName:"second"}},methods:{handleClick:function(t,n){console.log(t,n)}}}},113:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){},mounted:function(){},created:function(){}}},114:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(2),o=e(69),i=e.n(o),c=e(48),s=e(59),u=e.n(s),r=e(68),l=(e.n(r),e(28));a.default.use(u.a),a.default.config.productionTip=!0,new a.default({el:"#app",router:c.a,store:l.a,template:"<App/>",components:{App:i.a}})},115:function(t,n,e){"use strict";var a=e(51);n.a={UserLogin:function(t,n){(0,t.commit)(a.a,n)},UserLogout:function(t){(0,t.commit)(a.b)},UserName:function(t,n){(0,t.commit)(a.c,n)}}},116:function(t,n,e){"use strict";var a,o=e(121),i=e.n(o),c=e(51),s=(a={},i()(a,c.a,function(t,n){t.token=n,window.sessionStorage.setItem("token",n)}),i()(a,c.b,function(t){t.token=null,window.sessionStorage.removeItem("token")}),i()(a,c.c,function(t,n){t.username=n,window.sessionStorage.setItem("username",n)}),a);n.a=s},164:function(t,n){},165:function(t,n){},168:function(t,n,e){e(165);var a=e(45)(e(113),e(170),"data-v-8a7e45e2",null);t.exports=a.exports},169:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("header",[e("div",{staticClass:"head-wrap clearfix"},[e("h1",{staticClass:"head-title"},[e("router-link",{attrs:{to:"/",tag:"span"}},[e("span",{staticClass:"head-logoB"}),t._v(" "),e("span",{staticClass:"head-logobest"})])],1),t._v(" "),e("section",{staticClass:"head-nav"},[e("v-head")],1)])]),t._v(" "),e("router-view")],1)},staticRenderFns:[]}},170:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",{staticClass:"aside-nav"},[e("ul",{staticClass:"aside-nav-list"},[e("router-link",{staticClass:"aside-nav-list",attrs:{to:"/icolist",tag:"li","active-class":"active"}},[t._v("\n            ICOs\n        ")]),t._v(" "),e("router-link",{staticClass:"aside-nav-list",attrs:{to:"/news",tag:"li","active-class":"active"}},[t._v("\n            项目新闻\n        ")]),t._v(" "),e("router-link",{staticClass:"aside-nav-list",attrs:{to:"/profile",tag:"li","active-class":"active"}},[t._v("\n            个人中心\n        ")]),t._v(" "),e("router-link",{staticClass:"aside-nav-list",attrs:{to:"/login",tag:"li","active-class":"active"}},[t._v("\n            登录/注册\n        ")])],1)])},staticRenderFns:[]}},28:function(t,n,e){"use strict";var a=e(2),o=e(173),i=e(116),c=e(115);a.default.use(o.a);var s={token:window.sessionStorage.getItem("token"),username:""};n.a=new o.a.Store({state:s,mutations:i.a,actions:c.a})},48:function(t,n,e){"use strict";var a=e(2),o=e(28),i=e(171);a.default.use(i.a);var c=function(t){e.e(0).then(function(){t(e(85))}.bind(null,e)).catch(e.oe)},s=function(t){e.e(3).then(function(){t(e(78))}.bind(null,e)).catch(e.oe)},u=function(t){e.e(4).then(function(){t(e(82))}.bind(null,e)).catch(e.oe)},r=function(t){e.e(1).then(function(){t(e(83))}.bind(null,e)).catch(e.oe)},l=function(t){e.e(2).then(function(){t(e(84))}.bind(null,e)).catch(e.oe)},f=function(t){e.e(8).then(function(){t(e(81))}.bind(null,e)).catch(e.oe)},d=function(t){e.e(9).then(function(){t(e(80))}.bind(null,e)).catch(e.oe)},p=function(t){e.e(5).then(function(){t(e(86))}.bind(null,e)).catch(e.oe)},m=function(t){e.e(7).then(function(){t(e(87))}.bind(null,e)).catch(e.oe)},h=function(t){e.e(6).then(function(){t(e(88))}.bind(null,e)).catch(e.oe)},v=function(t){e.e(10).then(function(){t(e(79))}.bind(null,e)).catch(e.oe)},g=new i.a({mode:"history",routes:[{path:"/",name:"Home",component:r},{path:"/icolist",name:"List",component:l},{path:"/icodetail/:id",name:"Detail",component:f},{path:"/profile",name:"Hello",component:u,meta:{requiresAuth:!0}},{path:"/crm",name:"Crm",component:d},{path:"/news",name:"News",component:p},{path:"/news/:id",name:"NewsDetail",component:m},{path:"/newseditor",name:"NewsEditor",component:h},{path:"/login",name:"login",component:c},{path:"/register",name:"register",component:s},{path:"*",name:"error",component:v}]});g.beforeEach(function(t,n,e){var a=o.a.state.token;t.meta.requiresAuth?a?e():e({path:"/login",query:{redirect:t.fullPath}}):e()}),n.a=g},51:function(t,n,e){"use strict";e.d(n,"a",function(){return a}),e.d(n,"b",function(){return o}),e.d(n,"c",function(){return i});var a="LOGIN",o="LOGOUT",i="USERNAME"},68:function(t,n){},69:function(t,n,e){e(164);var a=e(45)(e(112),e(169),"data-v-23fc9dcd",null);t.exports=a.exports}},[114]);
//# sourceMappingURL=app.f68363e2bf0448c49fea.js.map