(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{287:function(s,n,t){"use strict";t.r(n);var r=t(38),o=Object(r.a)({},function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"运行时配置输出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行时配置输出","aria-hidden":"true"}},[s._v("#")]),s._v(" 运行时配置输出")]),s._v(" "),t("p",[s._v("系统模块化拆分之后，虽然每个模块做到了独立开发和维护，并且相互之间不会影响，但有一些信息像配置、路由这些，我们可能希望通过某种方式查看到所有的配置，所以这个目录的作用就是在应用启动之后，把一些重要的信息输出到该目录。")]),s._v(" "),t("p",[t("strong",[s._v("注意：")]),s._v(" 该目录是自动生成，只用于查看")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("run\n├── config.json\n├── controllers.json\n├── dirs.json\n├── libs.json\n├── middlewares.json\n├── routers.json\n└── services.json\n")])])]),t("p",[t("strong",[s._v("config.json")])]),s._v(" "),t("p",[s._v("模块化拆分之后，配置文件 config.default.js / config.${env}.js 是散落在各个模块的，应用启动后，首先框架加载器会加载所有这些配置文件，并且合并加载的配置，合并后的对象会缓存到内存里面，在读取配置的时候，就只需要从内存读取；然后，框架也会把这个合并后的对象保存到 run/config.json 文件上。")]),s._v(" "),t("p",[t("strong",[s._v("dirs.json")])]),s._v(" "),t("p",[s._v("一个数组，应用启动后，框架会去遍历的所有目录列表")]),s._v(" "),t("p",[t("strong",[s._v("middlewares.json")])]),s._v(" "),t("p",[s._v("一个数组，应用启动后，加载的所有中间件列表，数组顺序就代表中间件的加载顺序")]),s._v(" "),t("p",[t("strong",[s._v("routers.json")])]),s._v(" "),t("p",[s._v("一个数组，应用启动后，注册的所有路由，数组顺序就代表路由注册顺序")])])},[],!1,null,null,null);n.default=o.exports}}]);