(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1004:function(e,a,l){"use strict";l.r(a);var t=l(263),r=(l(138),l(238)),i=l.n(r),o=(l(237),l(265)),s={blocks:{echartScatterBlock:{type:"chart",style:{width:"100%",height:"500px"},data:{scatterData:[[[28604,77,17096869,"Australia",1990],[31163,77.4,27662440,"Canada",1990],[1516,68,1154605773,"China",1990],[13670,74.7,10582082,"Cuba",1990],[28599,75,4986705,"Finland",1990],[29476,77.1,56943299,"France",1990],[31476,75.4,78958237,"Germany",1990],[28666,78.1,254830,"Iceland",1990],[1777,57.7,870601776,"India",1990],[29550,79.1,122249285,"Japan",1990],[2076,67.9,20194354,"North Korea",1990],[12087,72,42972254,"South Korea",1990],[24021,75.4,3397534,"New Zealand",1990],[43296,76.8,4240375,"Norway",1990],[10088,70.8,38195258,"Poland",1990],[19349,69.6,147568552,"Russia",1990],[10670,67.3,53994605,"Turkey",1990],[26424,75.7,57110117,"United Kingdom",1990],[37062,75.4,252847810,"United States",1990]],[[44056,81.8,23968973,"Australia",2015],[43294,81.7,35939927,"Canada",2015],[13334,76.9,1376048943,"China",2015],[21291,78.5,11389562,"Cuba",2015],[38923,80.8,5503457,"Finland",2015],[37599,81.9,64395345,"France",2015],[44053,81.1,80688545,"Germany",2015],[42182,82.8,329425,"Iceland",2015],[5903,66.8,1311050527,"India",2015],[36162,83.5,126573481,"Japan",2015],[1390,71.4,25155317,"North Korea",2015],[34644,80.7,50293439,"South Korea",2015],[34186,80.6,4528526,"New Zealand",2015],[64304,81.6,5210967,"Norway",2015],[24787,77.3,38611794,"Poland",2015],[23038,73.13,143456918,"Russia",2015],[19360,76.5,78665830,"Turkey",2015],[38225,81.4,64715810,"United Kingdom",2015],[53354,79.1,321773631,"United States",2015]]],legend:["1990","2015"]},options:{BASE:"SCATTER",series:[{type:"scatter",name:"1990",data:"data.scatterData[0]",symbolSize:function(e){return Math.sqrt(e[2])/500}},{type:"scatter",name:"2015",data:"data.scatterData[1]",symbolSize:function(e){return Math.sqrt(e[2])/500}}]}}}},n={data:function(){return{init:!1}},mounted:function(){if(i.a&&i.a.blocks&&i.a.blocks["chart-scatter"])this.init=!0;else{["text","inputnumber","select"].reduce(function(e,a){return Object.assign(e,Object(t.a)({},a,o.b[a]))},{});i.a.block("chart-scatter",s),this.init=!0}}},u=l(13),b=Object(u.a)(n,function(){var e=this.$createElement,a=this._self._c||e;return this.init?a("ams-block",{staticClass:"demo",attrs:{name:"chart-scatter"}}):this._e()},[],!1,null,null,null);a.default=b.exports},237:function(e,a,l){"use strict";var t=l(0),r=(l(244),l(242)),i=l.n(r),o=l(238),s=l.n(o),n=l(250),u=l(245),b=l.n(u),c=(l(246),l(247)),p=l.n(c),d=l(248),y=l.n(d),m=l(249),g=l.n(m);t.default.use(i.a),t.default.use(s.a),console.log("ams init config"),t.default.use(p.a),t.default.use(y.a),t.default.use(g.a),"undefined"!=typeof window&&(window.Vue=t.default),t.default.use(n.a,{languages:{javascript:b.a}}),s.a.config({resource:{api:{withCredentials:!1}}})},263:function(e,a,l){"use strict";l.d(a,"a",function(){return i});var t=l(94),r=l.n(t);function i(e,a,l){return a in e?r()(e,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[a]=l,e}},265:function(e,a,l){"use strict";l.d(a,"a",function(){return t}),l.d(a,"b",function(){return r});var t={id:1,text:"双11活动",date:1539792e6,time:"11:23",datetime:1539772664e3,switch:1,password:"abcdefg",textarea:"双11活动双11活动双11活动双11活动双11活动双11活动双11活动双11活动双11活动",color:"#f00",rate:3.7,radio:"d",checkbox:"b,c",select:"a,b,c",cascader:"zujian,form,checkbox",transfer:"b,c",datetimerange:"1547568120000,1551290400000",slider:55,progress:80,number:28,union:"aaa",inputnumber:1,image:"//b.appsimg.com/upload/vivaadmin/2018/11/07/69/1541579376290922128.png",headimage:"//b.appsimg.com/upload/vivaadmin/2018/11/07/69/1541579376290922128.png",file:"http://b.appsimg.com/upload/vivaadmin/2018/11/07/69/1541579376290922128.png",video:"https://1251962819.vod2.myqcloud.com/54067453vodtransgzp125",audio:"https://a.vpimg2.com/upload/upimg2/i/9b0e909ed263b25c.mp3",simpleObject:{text:"2",date:15438528e5},multiObject:{date:15444576e5,checkbox:"1",ArrayArray:[["4","324","234"]],ArrayObject:[{text:"2342",date:15457536e5},{text:"234",date:15451488e5}]},simpleArray:["3","1","2"],ArrayArray:[["23","23"]],editor:"<h1>Editor 编辑器</h1><h2>二级标题</h2><h3>三级标题</h3><h4>四级标题</h4><p>普通段落</p>",markdown:"# Markdown 编辑器",tag:[{id:"2001",name:"aaaa.bbb"}]},r={id:{type:"text",label:"id"},text:{type:"text",label:"文本",rules:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],props:{"suffix-icon":"el-icon-service"}},date:{type:"date",label:"日期"},time:{type:"time",label:"时间"},datetime:{type:"datetime",label:"日期时间"},switch:{type:"switch",label:"开关"},password:{type:"password",label:"密码"},textarea:{type:"textarea",label:"文本框"},color:{type:"color",label:"颜色"},rate:{type:"rate",label:"评分"},radio:{type:"radio",label:"单选",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}}},checkbox:{type:"checkbox",label:"多选",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}}},select:{type:"select",label:"select多选",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}}},cascader:{type:"cascader",label:"级联选择",props:{options:[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"},{value:"xiaolv",label:"效率"},{value:"kekong",label:"可控"}]},{value:"daohang",label:"导航",children:[{value:"cexiangdaohang",label:"侧向导航"},{value:"dingbudaohang",label:"顶部导航"}]}]},{value:"zujian",label:"组件",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout 布局"},{value:"color",label:"Color 色彩"},{value:"typography",label:"Typography 字体"},{value:"icon",label:"Icon 图标"},{value:"button",label:"Button 按钮"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio 单选框"},{value:"checkbox",label:"Checkbox 多选框"},{value:"input",label:"Input 输入框"},{value:"input-number",label:"InputNumber 计数器"},{value:"select",label:"Select 选择器"},{value:"cascader",label:"Cascader 级联选择器"},{value:"switch",label:"Switch 开关"},{value:"slider",label:"Slider 滑块"},{value:"time-picker",label:"TimePicker 时间选择器"},{value:"date-picker",label:"DatePicker 日期选择器"},{value:"datetime-picker",label:"DateTimePicker 日期时间选择器"},{value:"upload",label:"Upload 上传"},{value:"rate",label:"Rate 评分"},{value:"form",label:"Form 表单"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table 表格"},{value:"tag",label:"Tag 标签"},{value:"progress",label:"Progress 进度条"},{value:"tree",label:"Tree 树形控件"},{value:"pagination",label:"Pagination 分页"},{value:"badge",label:"Badge 标记"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert 警告"},{value:"loading",label:"Loading 加载"},{value:"message",label:"Message 消息提示"},{value:"message-box",label:"MessageBox 弹框"},{value:"notification",label:"Notification 通知"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"NavMenu 导航菜单"},{value:"tabs",label:"Tabs 标签页"},{value:"breadcrumb",label:"Breadcrumb 面包屑"},{value:"dropdown",label:"Dropdown 下拉菜单"},{value:"steps",label:"Steps 步骤条"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog 对话框"},{value:"tooltip",label:"Tooltip 文字提示"},{value:"popover",label:"Popover 弹出框"},{value:"card",label:"Card 卡片"},{value:"carousel",label:"Carousel 走马灯"},{value:"collapse",label:"Collapse 折叠面板"}]}]},{value:"ziyuan",label:"资源",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"组件交互文档"}]}]}},transfer:{type:"transfer",label:"穿梭框",props:{options:[{value:"a",label:"黄金糕"},{value:"b",label:"双皮奶"},{value:"c",label:"蚵仔煎"},{value:"d",label:"龙须面"},{value:"e",label:"北京烤鸭"}]}},datetimerange:{type:"datetimerange",label:"时间范围",props:{type:"datetimerange"}},slider:{type:"slider",label:"滑块"},progress:{type:"progress",label:"进度"},inputnumber:{type:"inputnumber",label:"数字输入"},image:{type:"image",label:"图片上传",tip:"只能上传jpg/png文件，且不超过500kb",successUrlKey:"url",props:{action:"https://jsonplaceholder.typicode.com/posts/"}},headimage:{type:"headimage",label:"头像",tip:"只能上传jpg/png文件，且不超过500kb",successUrlKey:"url",props:{action:"https://jsonplaceholder.typicode.com/posts/"}},file:{type:"file",label:"文件上传",tip:"只能上传jpg/png文件，且不超过500kb",successUrlKey:"url",props:{action:"https://jsonplaceholder.typicode.com/posts/"}},video:{type:"video",label:"视频",tip:"只能上传jpg/png文件，且不超过500kb",successUrlKey:"url",props:{action:"https://jsonplaceholder.typicode.com/posts/"}},audio:{type:"audio",label:"音频",tip:"只能上传jpg/png文件，且不超过500kb",successUrlKey:"url",props:{action:"https://jsonplaceholder.typicode.com/posts/"}},editor:{type:"editor",label:"富文本"},markdown:{type:"markdown",label:"内容"},simpleObject:{type:"object",label:"simpleObject",fields:{text:{type:"text",label:"rule2",rules:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}]},date:{type:"date",label:"date"}}},multiObject:{type:"object",label:"multiObject",fields:{date:{type:"date",label:"date"},checkbox:{type:"checkbox",label:"checkbox",props:{options:{1:"黄金屋"}}},ArrayArray:{type:"array",label:"ArrayArray",field:{type:"array",label:"array",field:{type:"text",label:"text"}}},ArrayObject:{type:"array",label:"ArrayObject",field:{type:"object",label:"object",fields:{text:{type:"text",label:"text",rules:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}]},date:{type:"date",label:"date"}}}}}},simpleArray:{type:"array",label:"simpleArray",field:{type:"text",label:"text"}},ArrayArray:{type:"array",label:"ArrayArray",field:{type:"array",label:"array",field:{type:"text",label:"text"}}},union:{type:"union",label:"union",current:"text",fields:{date:{type:"timerange",label:"timerange1"},text:{type:"text",label:"text1",default:"sss"}}},tag:{type:"tag",label:"标签",props:{placeholder:"请输入标签",action:"https://www.easy-mock.com/mock/5a0023effbbb09615044cb82/tag",successCode:200,closable:!0}}}}}]);