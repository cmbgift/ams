(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{1208:function(e,t,o){"use strict";o.r(t);var a=o(1),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"form-表单"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#form-表单","aria-hidden":"true"}},[e._v("#")]),e._v(" Form 表单")]),e._v(" "),o("h3",{attrs:{id:"基础用法"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#基础用法","aria-hidden":"true"}},[e._v("#")]),e._v(" 基础用法")]),e._v(" "),o("blockquote",[o("p",[e._v("默认的编辑状态的表单。可以通过配置 "),o("code",[e._v("props['label-width]")]),e._v(" 来设置整个 "),o("code",[e._v("form")]),e._v(" 表单的 "),o("code",[e._v("label")]),e._v(" 宽度，比如 "),o("code",[e._v("props['label-width]: '100px'")]),e._v("。")])]),e._v(" "),o("ClientOnly",[o("block-form-demo",{attrs:{blockName:"formEditAll",onlineDemo:"https://codepen.io/w3cmark/pen/WNeKaoJ"}})],1),e._v(" "),o("h3",{attrs:{id:"带操作按钮的表单"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#带操作按钮的表单","aria-hidden":"true"}},[e._v("#")]),e._v(" 带操作按钮的表单")]),e._v(" "),o("blockquote",[o("p",[e._v("在定义field时也可以通过"),o("code",[e._v("rules")]),e._v("配置该字段的校验规则，通过"),o("code",[e._v("operations")]),e._v("来配置带按钮的表单（包括提交按钮和取消按钮）")])]),e._v(" "),o("ClientOnly",[o("block-form-demo",{attrs:{blockName:"formBtton",onlineDemo:"https://codepen.io/w3cmark/pen/JjPBmEo"}})],1),e._v(" "),o("h3",{attrs:{id:"带默认值的表单"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#带默认值的表单","aria-hidden":"true"}},[e._v("#")]),e._v(" 带默认值的表单")]),e._v(" "),o("blockquote",[o("p",[e._v("通过"),o("code",[e._v("data: {fieldname: 'xxx'}")]),e._v("来配置某个field的默认值，优先级会高于在"),o("code",[e._v("resource")]),e._v("里定义field时配置的"),o("code",[e._v("default")])])]),e._v(" "),o("ClientOnly",[o("block-form-demo",{attrs:{blockName:"formData",onlineDemo:"https://codepen.io/w3cmark/pen/PoYByWK"}})],1),e._v(" "),o("h3",{attrs:{id:"把表单的某几项显示在同一行"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#把表单的某几项显示在同一行","aria-hidden":"true"}},[e._v("#")]),e._v(" 把表单的某几项显示在同一行")]),e._v(" "),o("blockquote",[o("p",[e._v("通过 "),o("code",[e._v("field.props.inline: true")]),e._v(" 来配置该field显示占位，如果两个相邻的field都配置 "),o("code",[e._v("inline: true")]),e._v("，那么这两个field就会在同一行显示。另外，还可以通过 "),o("code",[e._v("field.props.formItemWidth: '200px'")]),e._v(" 配置来控制行内field的显示宽度。")])]),e._v(" "),o("ClientOnly",[o("block-form-demo",{attrs:{blockName:"formLayout",onlineDemo:"https://codepen.io/w3cmark/pen/jONpeyp"}})],1),e._v(" "),o("h3",{attrs:{id:"行内表单"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#行内表单","aria-hidden":"true"}},[e._v("#")]),e._v(" 行内表单")]),e._v(" "),o("blockquote",[o("p",[e._v("当垂直方向空间受限且表单较简单时，可以在一行内放置表单。通过 "),o("code",[e._v("props.inline: true")]),e._v(" 配置来实现。注意：这种是整个表单显示在同一行，直到一行放不下才会换行。")])]),e._v(" "),o("ClientOnly",[o("block-form-demo",{attrs:{blockName:"formInline",onlineDemo:"https://codepen.io/w3cmark/pen/ZEzjqLP"}})],1),e._v(" "),o("h3",{attrs:{id:"展示状态表单"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#展示状态表单","aria-hidden":"true"}},[e._v("#")]),e._v(" 展示状态表单")]),e._v(" "),o("blockquote",[o("p",[e._v("通过"),o("code",[e._v("ctx: 'view'")]),e._v("来配置为纯展示的表单，通常用于只读展示。")])]),e._v(" "),o("ClientOnly",[o("block-form-demo",{attrs:{blockName:"formViewAll",onlineDemo:"https://codepen.io/w3cmark/pen/JjPBmWd"}})],1),e._v(" "),o("h3",{attrs:{id:"分组的表单"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#分组的表单","aria-hidden":"true"}},[e._v("#")]),e._v(" 分组的表单")]),e._v(" "),o("blockquote",[o("p",[e._v("如果表单太多，还可以插入block来进行分组。配置子block的"),o("code",[e._v("slot")]),e._v("为"),o("code",[e._v("field:${fieldName}")]),e._v("，可以在某行后插入任意block，如想在 "),o("code",[e._v("date")]),e._v(" 这个field后面插入"),o("code",[e._v("title block")])])]),e._v(" "),o("ClientOnly",[o("block-form-demo",{attrs:{blockName:"formSlot",onlineDemo:"https://codepen.io/w3cmark/pen/mdbjzWm"}})],1),e._v(" "),o("h3",{attrs:{id:"顶部slot-block"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#顶部slot-block","aria-hidden":"true"}},[e._v("#")]),e._v(" 顶部slot block")]),e._v(" "),o("blockquote",[o("p",[e._v("配置子block的slot为"),o("code",[e._v("top")]),e._v("，可以插入在顶部")])]),e._v(" "),o("ClientOnly",[o("block-form-demo",{attrs:{blockName:"formSlotTop",onlineDemo:"https://codepen.io/w3cmark/pen/wvwxYJy"}})],1),e._v(" "),o("h3",{attrs:{id:"在线实验室"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#在线实验室","aria-hidden":"true"}},[e._v("#")]),e._v(" 在线实验室")]),e._v(" "),o("ClientOnly",[o("ams-config",{attrs:{name:"form",type:"block"}})],1)],1)}),[],!1,null,null,null);t.default=r.exports}}]);