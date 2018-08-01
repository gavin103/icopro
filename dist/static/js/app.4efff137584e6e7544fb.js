webpackJsonp([10],{146:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(215),s=n.n(a);e.default={name:"app",components:{"v-head":s.a},data:function(){return{activeName:"second"}},methods:{handleClick:function(t,e){console.log(t,e)}}}},147:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(91);e.default={data:function(){return{users:null}},mounted:function(){console.log(this.users)},created:function(){var t=this;a.a.getUser().then(function(e){401===e.status?(t.$router.push("/login"),t.$store.dispatch("UserLogout")):t.users=e.data.result})}}},148:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(3),s=n(90),o=n.n(s),i=n(51),r=n(79),c=n.n(r),u=n(89),l=(n.n(u),n(31));a.default.use(c.a),a.default.config.productionTip=!0,new a.default({el:"#app",router:i.a,store:l.a,template:"<App/>",components:{App:o.a}})},149:function(t,e,n){"use strict";var a=n(65);e.a={UserLogin:function(t,e){(0,t.commit)(a.a,e)},UserLogout:function(t){(0,t.commit)(a.b)},UserName:function(t,e){(0,t.commit)(a.c,e)}}},150:function(t,e,n){"use strict";var a,s=n(156),o=n.n(s),i=n(65),r=(a={},o()(a,i.a,function(t,e){t.token=e,window.sessionStorage.setItem("token",e)}),o()(a,i.b,function(t){t.token=null,window.sessionStorage.removeItem("token")}),o()(a,i.c,function(t,e){t.username=e,window.sessionStorage.setItem("username",e)}),a);e.a=r},210:function(t,e){},211:function(t,e){},215:function(t,e,n){n(211);var a=n(52)(n(147),n(217),"data-v-8a7e45e2",null);t.exports=a.exports},216:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",[n("div",{staticClass:"head-wrap clearfix"},[n("h1",{staticClass:"head-title"},[n("router-link",{attrs:{to:"/",tag:"span"}},[n("span",{staticClass:"head-logoB"}),t._v(" "),n("span",{staticClass:"head-logobest"})])],1),t._v(" "),n("section",{staticClass:"head-nav"},[n("v-head")],1)])]),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},217:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"aside-nav"},[n("ul",{staticClass:"aside-nav-list"},[n("router-link",{staticClass:"aside-nav-list",attrs:{to:"/icolist",tag:"li","active-class":"active"}},[t._v("\n            ICOs\n        ")]),t._v(" "),n("router-link",{staticClass:"aside-nav-list",attrs:{to:"/news",tag:"li","active-class":"active"}},[t._v("\n            项目新闻\n        ")]),t._v(" "),n("router-link",{staticClass:"aside-nav-list",attrs:{to:"/profile",tag:"li","active-class":"active"}},[t._v("\n            个人中心\n        ")]),t._v(" "),t.users?n("li",{staticClass:"aside-nav-list"},[t._v("您好，"+t._s(t.users.username)+"}")]):n("router-link",{staticClass:"aside-nav-list",attrs:{to:"/login",tag:"li","active-class":"active"}},[t._v("\n            登录/注册\n        ")])],1)])},staticRenderFns:[]}},31:function(t,e,n){"use strict";var a=n(3),s=n(220),o=n(150),i=n(149);a.default.use(s.a);var r={token:window.sessionStorage.getItem("token"),username:""};e.a=new s.a.Store({state:r,mutations:o.a,actions:i.a})},51:function(t,e,n){"use strict";var a=n(3),s=n(31),o=n(218);a.default.use(o.a);var i=function(t){n.e(1).then(function(){t(n(104))}.bind(null,n)).catch(n.oe)},r=function(t){n.e(3).then(function(){t(n(94))}.bind(null,n)).catch(n.oe)},c=function(t){n.e(5).then(function(){t(n(101))}.bind(null,n)).catch(n.oe)},u=function(t){n.e(2).then(function(){t(n(102))}.bind(null,n)).catch(n.oe)},l=function(t){n.e(0).then(function(){t(n(103))}.bind(null,n)).catch(n.oe)},f=function(t){n.e(6).then(function(){t(n(100))}.bind(null,n)).catch(n.oe)},d=function(t){n.e(7).then(function(){t(n(99))}.bind(null,n)).catch(n.oe)},p=function(t){n.e(4).then(function(){t(n(105))}.bind(null,n)).catch(n.oe)},h=function(t){n.e(8).then(function(){t(n(98))}.bind(null,n)).catch(n.oe)},v=new o.a({mode:"history",routes:[{path:"/",name:"Home",component:u},{path:"/icolist",name:"List",component:l},{path:"/icodetail/:id",name:"Detail",component:f},{path:"/profile",name:"Hello",component:c,meta:{requiresAuth:!0}},{path:"/crm",name:"Crm",component:d},{path:"/news",name:"News",component:p},{path:"/login",name:"login",component:i},{path:"/register",name:"register",component:r},{path:"*",name:"error",component:h}]});v.beforeEach(function(t,e,n){var a=s.a.state.token;t.meta.requiresAuth?a?n():n({path:"/login",query:{redirect:t.fullPath}}):n()}),e.a=v},65:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return o});var a="LOGIN",s="LOGOUT",o="USERNAME"},89:function(t,e){},90:function(t,e,n){n(210);var a=n(52)(n(146),n(216),"data-v-23fc9dcd",null);t.exports=a.exports},91:function(t,e,n){"use strict";var a=n(153),s=n.n(a),o=n(92),i=n.n(o),r=n(31),c=n(51);i.a.defaults.timeout=5e3,i.a.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8";var u=i.a.create();u.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8",i.a.interceptors.request.use=u.interceptors.request.use,u.interceptors.request.use(function(t){return r.a.state.token&&(t.headers.Authorization="token "+r.a.state.token),t},function(t){return s.a.reject(t)}),u.interceptors.response.use(function(t){return t},function(t){if(t.response)switch(t.response.status){case 401:r.a.dispatch("UserLogout"),c.a.replace({path:"login",query:{redirect:c.a.currentRoute.fullPath}})}return s.a.reject(t.response)}),e.a={userRegister:function(t){return u.post("/api/register",t)},userLogin:function(t){return u.post("/api/login",t)},getUser:function(){return u.get("/api/user")},delUser:function(t){return u.post("/api/delUser",t)}}}},[148]);
//# sourceMappingURL=app.4efff137584e6e7544fb.js.map