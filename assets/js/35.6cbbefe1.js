(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1114:function(e,t,i){"use strict";i.r(t);var o=i(127),n={imagelist1:{type:"imagelist",ctx:"view",resource:{api:{prefix:"http://rap2api.taobao.org/app/mock/231578/ams/mock/",list:"imagelist"},fields:{id:{type:"text"}}},operations:{id:{slot:"searchs",type:"field",label:"文本"},search:{slot:"searchs",type:"button",props:{type:"primary"},label:"搜索",event:"list:1"},rejectedItem:{type:"text",props:{type:"danger",size:"mini"},label:"驳回"},rejectedItem1:{type:"text",props:{size:"mini"},label:"通过(设计)"},rejectedItem2:{type:"text",props:{size:"mini"},label:"通过(协助)"},deleteItem:{type:"button",props:{type:"text",size:"mini",icon:"el-icon-delete"}},editItem:{type:"icon",label:"编辑",icon:"el-icon-edit"}},pageSize:10,props:{},events:{init:"@list"},actions:{rejectedItem:function(){alert("点击了驳回")},rejectedItem1:function(){alert("通过(设计)")},clickImageItem:function(e){console.log(e),alert("点击图片")},editItem:function(){alert("点击了编辑")}},options:{title:{field:"title","prefix-tag":{type:"info",label:function(e){return e.status}}},subtitle:{field:"content"},info:{field:"info"}}},imagelist2:{type:"imagelist",ctx:"view",resource:{api:{prefix:"http://rap2api.taobao.org/app/mock/231578/ams/mock/",list:"imagelist2"},fields:{id:{type:"text"}}},operations:{id:{slot:"searchs",type:"field",label:"文本"},search:{slot:"searchs",type:"button",props:{type:"primary"},label:"搜索",event:"list:1"},rejectedItem:{type:"text",props:{type:"danger",size:"mini"},label:"驳回"},rejectedItem1:{type:"text",props:{size:"mini"},label:"通过(设计)"},rejectedItem2:{type:"text",props:{size:"mini"},label:"通过(协助)"},deleteItem:{type:"button",props:{type:"text",size:"mini",icon:"el-icon-delete"}},editItem:{type:"icon",label:"编辑",icon:"el-icon-edit"}},pageSize:10,props:{subtitle:"always"},events:{init:"@list"},actions:{rejectedItem:function(){alert("点击了驳回")},rejectedItem1:function(){alert("通过(设计)")},clickImageItem:function(e){console.log(e),alert("点击图片")},editItem:function(){alert("点击了编辑")}},options:{title:{field:"title","prefix-tag":{type:"info",label:function(e){return e.status}}},subtitle:{field:"content"},info:{field:"info"}}}},s=i(138),a=i.n(s),l=i(137),c=i.n(l),r={mixins:[o.a],mounted:function(){var e=a()(n[this.blockName]);this.configCode=c()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block(this.blockName,n[this.blockName]),this.init=!0)}},p=i(1),d=Object(p.a)(r,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?i("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),i("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[i("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),i("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[i("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?i("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);t.default=d.exports},125:function(e,t,i){"use strict";var o=i(0),n=(i(131),i(130)),s=i.n(n),a=i(128),l=i(136),c=i(132),r=i.n(c),p=(i(133),i(134)),d=i.n(p),m=i(135),f=i.n(m);o.default.use(s.a),o.default.use(a.default),console.log("ams init config"),o.default.use(d.a),o.default.use(f.a),"undefined"!=typeof window&&(window.Vue=o.default),o.default.use(l.a,{languages:{javascript:r.a}}),a.default.config({resource:{api:{withCredentials:!1}}})},127:function(e,t,i){"use strict";i(125);t.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}}}]);