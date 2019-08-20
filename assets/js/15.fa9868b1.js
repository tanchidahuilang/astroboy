(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{284:function(a,t,e){"use strict";e.r(t);var _=e(38),r=Object(_.a)({},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置")]),a._v(" "),e("h3",{attrs:{id:"_1-配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 配置文件")]),a._v(" "),e("p",[a._v("配置文件分三种类型：普通配置、插件配置、中间件配置，每种类型配置又都区分默认配置和根据环境变量加载的配置。")]),a._v(" "),e("p",[a._v("常见的 NODE_ENV 环境变量：")]),a._v(" "),e("ul",[e("li",[a._v("development 开发环境")]),a._v(" "),e("li",[a._v("daily Daily 环境")]),a._v(" "),e("li",[a._v("qa QA 环境")]),a._v(" "),e("li",[a._v("pre 预发环境")]),a._v(" "),e("li",[a._v("perf 性能压测环境")]),a._v(" "),e("li",[a._v("prod 生产环境")])]),a._v(" "),e("h3",{attrs:{id:"_2-普通配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-普通配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 普通配置")]),a._v(" "),e("p",[a._v("普通配置分两种类型：")]),a._v(" "),e("ul",[e("li",[a._v("默认配置文件 config.default.js")]),a._v(" "),e("li",[a._v("跟 env 环境相关的配置文件 config.${NODE_ENV}.js")])]),a._v(" "),e("h3",{attrs:{id:"_3-中间件配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-中间件配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 3. 中间件配置")]),a._v(" "),e("p",[a._v("中间件配置分两种类型：")]),a._v(" "),e("ul",[e("li",[a._v("默认中间件配置文件 middleware.default.js")]),a._v(" "),e("li",[a._v("根据环境区分的配置文件 middleware.${env}.js")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("const path = require('path');\n\nmodule.exports = {\n  'astroboy-static': {\n    priority: 3,\n    enable: true,\n    options: {\n      root: path.resolve('/tmp/static')\n    }\n  }\n}\n")])])]),e("p",[a._v("配置参数说明：")]),a._v(" "),e("ul",[e("li",[a._v("priority {Number} 中间件加载顺序权重，1 ~ 99 内核框架级中间件，100 ~ 199 自定义框架级中间件，200 ~ 299 项目级中间件")]),a._v(" "),e("li",[a._v("enable {Boolean} 是否开启中间件")]),a._v(" "),e("li",[a._v("options {Object} 中间件配置信息，应用启动加载中间件的时候会将该参数传递给中间件。")]),a._v(" "),e("li",[a._v("match {String/RegExp/Function/Array} 设置只有符合某些规则的请求才会经过这个中间件")]),a._v(" "),e("li",[a._v("ignore {String/RegExp/Function/Array} 设置符合某些规则的请求不经过这个中间件")])]),a._v(" "),e("p",[e("strong",[a._v("注意")]),a._v("：match 和 ignore 支持的参数都一样，只是作用完全相反，match 和 ignore 不允许同时配置。")]),a._v(" "),e("p",[a._v("match 和 ignore 支持的配置方式：")]),a._v(" "),e("ul",[e("li",[a._v("字符串：当参数为字符串类型时，配置的是一个 URL 的路径前缀，所有以配置的字符串作为前缀的 URL都会匹配上。")]),a._v(" "),e("li",[a._v("正则表达式：当参数为正则时，直接匹配满足正则验证的 URL的路径；")]),a._v(" "),e("li",[a._v("函数：当参数为一个函数时，会将请求上下文 ctx 传递给这个函数，最终取函数返回的结果（true / false）来判断是否匹配。")]),a._v(" "),e("li",[a._v("数组，每个元素可以是上面三种类型。")])]),a._v(" "),e("h3",{attrs:{id:"_4-插件配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-插件配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 4. 插件配置")]),a._v(" "),e("p",[a._v("插件配置分两种类型：")]),a._v(" "),e("ul",[e("li",[a._v("默认配置文件 plugin.default.js")]),a._v(" "),e("li",[a._v("根据环境区分的配置文件 plugin.${env}.js")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("const path = require('path');\n\nmodule.exports = {\n  'astroboy-body': {\n    enable: true,\n    path: path.resolve(__dirname, '../plugins/astroboy-body')\n  },\n\n  'astroboy-meta': {\n    enable: true,\n    package: 'astroboy-meta'\n  }\n};\n")])])]),e("p",[a._v("配置参数说明：")]),a._v(" "),e("ul",[e("li",[a._v("enable {Boolean} 是否开启插件")]),a._v(" "),e("li",[a._v("package {String} npm 包名称，通过 npm 包的形式引入插件")]),a._v(" "),e("li",[a._v("path {String} 插件绝对路径，跟 package 配置互斥")])]),a._v(" "),e("p",[e("strong",[a._v("注意：")]),a._v(" package 和 path 配置互斥，如果两个都配置了，则以 path 配置为准。")])])},[],!1,null,null,null);t.default=r.exports}}]);