(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{322:function(t,a,s){"use strict";s.r(a);var e=s(10),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指南"}},[t._v("#")]),t._v(" 指南")]),t._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("gogeo前端应用开发介绍")]),t._v(" "),a("h2",{attrs:{id:"基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),a("p",[t._v("脚手架由两部分组成：baseApp和appkit")]),t._v(" "),a("p",[t._v("baseApp包含登录、权限、基础配置等平台信息，并暴露UI组件、http、lodash、turf等给appkit使用。\nappkit开发业务页面，并以组件的形式暴露出来，baseApp根据权限系统返回的菜单权限，动态分配该组件到相应的路由上。")]),t._v(" "),a("h2",{attrs:{id:"初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[t._v("#")]),t._v(" 初始化")]),t._v(" "),a("h4",{attrs:{id:"baseapp初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#baseapp初始化"}},[t._v("#")]),t._v(" baseApp初始化")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone http://10.1.1.2:30004/XA-RD-center/prodsite/promap-web.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#切换node版本")]),t._v("\nnvm use "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14.15")]),t._v(".0\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#安装依赖")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#清空npm缓存")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm cache clean --force")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#启动")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n")])])]),a("h4",{attrs:{id:"appkit初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#appkit初始化"}},[t._v("#")]),t._v(" appkit初始化")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone http://10.1.1.2:30004/XA-RD-center/prodsite/gogeo-app-samples-web.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#切换node版本")]),t._v("\nnvm use "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14.15")]),t._v(".0\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#安装依赖")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#清空npm缓存")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm cache clean --force")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#启动")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n")])])]),a("p",[a("a",{attrs:{id:"appkitconfig"}})]),t._v(" "),a("h2",{attrs:{id:"appkit配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#appkit配置"}},[t._v("#")]),t._v(" appkit配置")]),t._v(" "),a("h4",{attrs:{id:"_1、appkit配置包名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、appkit配置包名"}},[t._v("#")]),t._v(" 1、appkit配置包名")]),t._v(" "),a("p",[t._v("此处包名为发布后在nginx的文件夹名称")]),t._v(" "),a("p",[t._v("文件目录："),a("code",[t._v("appkit/package.json")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myFirstAppkitName"')]),t._v(",\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("a",{attrs:{id:"appkitpageconfig"}})]),t._v(" "),a("h4",{attrs:{id:"_2、appkit暴露页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、appkit暴露页面"}},[t._v("#")]),t._v(" 2、appkit暴露页面")]),t._v(" "),a("p",[t._v("文件目录："),a("code",[t._v("appkit/vue.config.js")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("  module.exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    configureWebpack:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      plugins:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        new ModuleFederationPlugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          exposes: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./appkitPage1'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/views/appkitPage1/index.vue'")]),t._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./appkitPage2'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/views/appkitPage2/index.vue'")]),t._v(",\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"baseapp配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#baseapp配置"}},[t._v("#")]),t._v(" baseApp配置")]),t._v(" "),a("p",[t._v("baseApp无须在代码上配置，只需确认：")]),t._v(" "),a("h4",{attrs:{id:"_1、appkit前端服务端口为9500-开发阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、appkit前端服务端口为9500-开发阶段"}},[t._v("#")]),t._v(" 1、appkit前端服务端口为9500（开发阶段）")]),t._v(" "),a("h4",{attrs:{id:"_2、菜单接口返回的应用菜单如下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、菜单接口返回的应用菜单如下"}},[t._v("#")]),t._v(" 2、菜单接口返回的应用菜单如下：")]),t._v(" "),a("p",[t._v("该应用中文名为"),a("code",[t._v("我的应用")]),t._v(" ，一级路由为"),a("code",[t._v("myAppName")]),t._v(" ，由 "),a("code",[t._v("2")]),t._v(" 个子页面组成，二级路由分别为 "),a("code",[t._v("appkitPage1")]),t._v(" 和 "),a("code",[t._v("appkitPage2")]),t._v("，其中：")]),t._v(" "),a("p",[t._v("页面 "),a("code",[t._v("appkitPage1")]),t._v(" 由包名为 "),a("code",[t._v("myFirstAppkitName")]),t._v(" 的appkit提供")]),t._v(" "),a("p",[t._v("页面 "),a("code",[t._v("appkitPage2")]),t._v(" 由包名为 "),a("code",[t._v("mySecAppkitName")]),t._v(" 的appkit提供")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".,\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      path: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/myAppName'")]),t._v(",\n      name: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'我的应用'")]),t._v(",\n      isApp: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(",\n      children: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          path: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'appkitPage1'")]),t._v(",\n          name: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'appkitPage1'")]),t._v(",\n          appKit: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myFirstAppkitName'")]),t._v(",\n          isApp: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          path: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'appkitPage2'")]),t._v(",\n          name: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'appkitPage2'")]),t._v(",\n          appKit: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mySecAppkitName'")]),t._v(",\n          isApp: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h4",{attrs:{id:"路由说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由说明"}},[t._v("#")]),t._v(" 路由说明")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("path: '/myAppName'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("应用名称，会作为一级路由")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("系统内唯一")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("name: '我的应用',")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("应用中文名称，会作为首页菜单名称")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("isApp: 1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("该菜单是否为appkit菜单")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1是0否")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("children")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("应用子页面集合")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),a("h4",{attrs:{id:"路由children说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由children说明"}},[t._v("#")]),t._v(" 路由children说明")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("appKit: 'myFirstAppkitName'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("该页面由包名为 "),a("a",{attrs:{href:"#appkitconfig"}},[t._v("myFirstAppkitName")]),t._v(" 的appkit提供")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("系统内唯一")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("path: 'appkitPage1'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("该页面引用 "),a("code",[t._v("myFirstAppkitName")]),t._v(" 暴露的  "),a("a",{attrs:{href:"#appkitpageconfig"}},[t._v("appkitPage1")]),t._v("页面")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("所属appkit内唯一")])])])]),t._v(" "),a("h2",{attrs:{id:"启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[t._v("#")]),t._v(" 启动")]),t._v(" "),a("h4",{attrs:{id:"开发第一个页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发第一个页面"}},[t._v("#")]),t._v(" 开发第一个页面")]),t._v(" "),a("p",[t._v("同时启动appBase和appkit项目")]),t._v(" "),a("p",[t._v("打开baseApp页面，登录，点击菜单进入应用页面")])])}),[],!1,null,null,null);a.default=n.exports}}]);