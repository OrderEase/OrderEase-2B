webpackJsonp([8],{1040:function(t,n,e){var a=e(1041);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(32)("674945a4",a,!1)},1041:function(t,n,e){n=t.exports=e(31)(!1),n.push([t.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-top-30 {\n  margin-top: 30px;\n}\n.margin-top-40 {\n  margin-top: 40px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-15 {\n  margin-bottom: 15px;\n}\n.margin-bottom-20 {\n  margin-bottom: 20px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.padding-bottom-10 {\n  padding-bottom: 10px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-150px {\n  height: 150px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-460px {\n  height: 460px;\n}\n.height-492px {\n  height: 492px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.bottom-line {\n  border-bottom: 1px solid #e9eaec;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[v-cloak] {\n  display: none;\n}\n.demo-spin-icon-load {\n  -webkit-animation: ani-demo-spin 1s linear infinite;\n          animation: ani-demo-spin 1s linear infinite;\n}\n@-webkit-keyframes ani-demo-spin {\nfrom {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n50% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n}\nto {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes ani-demo-spin {\nfrom {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n50% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n}\nto {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n.summary-date-range {\n  width: 200px;\n}\n.summary-export-data-btn {\n  float: right;\n}\n",""])},1042:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"summary"},[t.spinShow?e("Spin",{attrs:{fix:""}},[e("Icon",{staticClass:"demo-spin-icon-load",attrs:{type:"load-c",size:"18"}}),t._v(" "),e("div",[t._v("加载中...")])],1):t._e(),t._v(" "),e("Row",[e("i-col",{attrs:{span:"24"}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"ios-analytics"}}),t._v("\n                    查看营业数据\n                ")],1),t._v(" "),e("Row",[e("DatePicker",{staticClass:"summary-date-range",attrs:{format:"yyyy/MM/dd",type:"daterange","split-panels":"",placeholder:"请选择日期范围"},on:{"on-change":t.filterSummary},model:{value:t.dateRange,callback:function(n){t.dateRange=n},expression:"dateRange"}}),t._v(" "),e("Button",{staticClass:"summary-export-data-btn",attrs:{type:"primary"},on:{click:t.exportData}},[t._v("导出表格")])],1),t._v(" "),e("Row",{staticClass:"margin-top-30"},[e("i-col",{attrs:{span:"24"}},[e("Table",{ref:"table",attrs:{columns:t.columns,data:t.pageData,stripe:""}})],1)],1),t._v(" "),e("Row",{staticClass:"margin-top-30"},[e("Page",{attrs:{current:t.page,total:t.filtedData.length,"page-size":t.pageOptions["page-size"],"show-total":""},on:{"update:current":function(n){t.page=n},"on-change":t.handlePage}})],1)],1)],1)],1)],1)},i=[];a._withStripped=!0;var r={render:a,staticRenderFns:i};n.default=r},429:function(t,n,e){"use strict";function a(t){l||e(1040)}Object.defineProperty(n,"__esModule",{value:!0});var i=e(636),r=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);var s=e(1042),d=e.n(s),l=!1,u=e(11),p=a,c=u(r.a,d.a,!1,p,null,null);c.options.__file="src/views/analytics/analytics.vue",n.default=c.exports},456:function(t,n,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var i=e(12),r=a(i),o=e(24),s=a(o),d={};d.getCountCard=function(){return new r.default(function(t,n){s.default.get("/analytics/count/card").then(function(n){t(n.data)}).catch(function(t){n(t.response?t.response.message:t)})})},d.getCountOrders=function(){return new r.default(function(t,n){s.default.get("/analytics/count/orders").then(function(n){t(n.data)}).catch(function(t){n(t.response?t.response.message:t)})})},d.getCountPayWay=function(){return new r.default(function(t,n){s.default.get("/analytics/count/payway").then(function(n){t(n.data)}).catch(function(t){n(t.response?t.response.message:t)})})},d.getCountFinishTime=function(){return new r.default(function(t,n){s.default.get("/analytics/count/finishtime").then(function(n){t(n.data)}).catch(function(t){n(t.response?t.response.message:t)})})},d.getRankLikes=function(){return new r.default(function(t,n){s.default.get("/analytics/rank/likes").then(function(n){t(n.data)}).catch(function(t){n(t.response?t.response.message:t)})})},d.getRankSales=function(){return new r.default(function(t,n){s.default.get("/analytics/rank/sales").then(function(n){t(n.data)}).catch(function(t){n(t.response?t.response.message:t)})})},d.getTurnover=function(t){return new r.default(function(n,e){s.default.get("/analytics/turnover?days="+t).then(function(t){n(t.data)}).catch(function(t){e(t.response?t.response.message:t)})})},d.getSummary=function(){return new r.default(function(t,n){s.default.get("/analytics/summary").then(function(n){t(n.data)}).catch(function(t){n(t.response?t.response.message:t)})})},n.default=d},636:function(t,n,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var i=e(21),r=a(i),o=e(22),s=a(o),d=e(456),l=a(d);n.default={name:"analytics_index",data:function(){return{spinShow:!1,page:1,pageOptions:{"page-size":10},dateRange:[],filtedData:[],pageData:[],summaryData:[],columns:[{type:"index",width:50,align:"center"},{title:"日期",key:"date",width:150},{title:"优惠营业额",key:"dayDue",sortable:!0},{title:"总营业额",key:"dayTotal",sortable:!0},{title:"订单数",key:"dayOrder",sortable:!0},{title:"菜品数",key:"dayDish",sortable:!0},{title:"平均订单完成时间",key:"dayAvgOrderFinishTime",sortable:!0,width:150},{title:"平均菜品完成时间",key:"dayAvgDishFinishTime",sortable:!0,width:150}]}},created:function(){this.spinShow=!0,this.getSummary()},methods:{getSummary:function(){function t(){return n.apply(this,arguments)}var n=(0,s.default)(r.default.mark(function t(){return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.default.getSummary();case 2:this.summaryData=t.sent,this.filtedData=this.summaryData,this.handlePage(1),this.spinShow=!1;case 6:case"end":return t.stop()}},t,this)}));return t}(),filterSummary:function(t){if(""===t[0])this.filtedData=this.summaryData;else{var n=new Date(t[0]),e=new Date(t[1]);e.setDate(e.getDate()+1),this.filtedData=this.summaryData.filter(function(t){var a=new Date(t.date);return a>=n&&a<=e})}this.handlePage(1)},handlePage:function(t){var n=(t-1)*this.pageOptions["page-size"],e=Math.min(n+this.pageOptions["page-size"],this.filtedData.length);this.pageData=this.filtedData.slice(n,e)},exportData:function(){this.$refs.table.exportCsv({filename:"营业数据概览",original:!1})}}}}});