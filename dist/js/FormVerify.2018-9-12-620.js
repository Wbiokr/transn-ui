webpackJsonp([4],{"26cW":function(t,e,s){"use strict";var n={props:{isFirst:{default:!1}},data:function(){return{isCode:!1}},methods:{copy:function(){var t=event.target.parentNode.nextSibling,e=document.createRange();e.selectNode(t);var n=window.getSelection();0<n.rangeCount&&n.removeAllRanges(),n.addRange(e),document.execCommand("copy"),this.$toast({msg:"恭喜，您已复制成功！"})}}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"com-demo p-r",class:{coding:e.isCode}},[n("h4",{staticClass:"p-a f-5"},[e._v("灰色边框以内为组件预览部分,右侧箭头可以切换代码与预览"),n("img",{staticClass:"f-r c-p",attrs:{src:s("Vura"),title:"点击切换图片查看代码"},on:{click:function(t){e.isCode=!e.isCode}}})]),e.isCode?n("div",{staticClass:"code clearfix"},[n("pre",{staticClass:"f-l"},[n("h4",[e._v(" "),e._t("t-t",[n("span",{staticClass:"f-l"},[e._v("template部分 ")])]),n("img",{staticClass:"f-l c-p",attrs:{src:s("tT22")},on:{click:e.copy}})],2),n("code",[e._t("tem")],2)]),n("pre",{staticClass:"f-l"},[n("h4",[e._v(" "),e._t("s-t",[n("span",{staticClass:"f-l"},[e._v("script部分")])]),n("img",{staticClass:"f-l c-p",attrs:{src:s("tT22")},on:{click:function(t){e.copy("#demo-scr")}}})],2),n("code",{attrs:{id:"demo-scr"}},[e._t("scr")],2)])]):n("div",{staticClass:"component"},[e._t("com")],2)])},staticRenderFns:[]};var i=s("vSla")(n,r,!1,function(t){s("vM5I")},"data-v-2b915906",null);e.a=i.exports},"9Ogy":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("4YfN"),r=n.n(s),i=n("wHgX"),a=n("26cW"),o=n("ABj6"),c=n("aqWv"),l=n.n(c),u={components:{vDetail:i.a,vWrapper:a.a,vTabel:o.a},data:function(){return{tem:"\n          <p>\n            <input \n              v-model='msg'\n              placeholder='请输入身份证号码(区号、生日、权重)' \n            />\n          </p>\n          <p>\n            <button\n              (@click='\n                verify(msg)\n                ?$toast({msg:\"验证通过\"})\n                :$toast({msg:\"验证失败\"})'\n            > 密码验证</button>\n          </p>\n          ",scr:"\n          import verify from 'transn/Verify/'\n          methods:{\n            ...{verify},\n          }\n          ",msg:""}},mounted:function(){console.log(this)},methods:r()({verify:l.a})},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"p-pop-toast"},[n("vDetail",[n("div",{attrs:{slot:"t"},slot:"t"},[e._v("验证身份证")]),n("div",{attrs:{slot:"s"},slot:"s"},[e._v("派出所规则验证身份证号码")]),n("div",{attrs:{slot:"s-code"},slot:"s-code"},[n("vWrapper",[n("div",{staticClass:"t-com",attrs:{slot:"com"},slot:"com"},[n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.msg,expression:"msg"}],attrs:{placeholder:"请输入身份证号码(区号、生日、权重)"},domProps:{value:e.msg},on:{input:function(t){t.target.composing||(e.msg=t.target.value)}}})]),n("p",[n("button",{staticClass:"c-p",on:{click:function(t){e.verify(e.msg)?e.$toast({msg:"验证通过"}):e.$toast({msg:"验证失败"})}}},[e._v("验证")])])]),n("div",{attrs:{slot:"tem"},slot:"tem"},[e._v(e._s(e.tem))]),n("div",{attrs:{slot:"scr"},slot:"scr"},[e._v(e._s(e.scr))])])],1),n("div",{attrs:{slot:"s-api"},slot:"s-api"},[n("p",[e._v("verify方法，接收身份证号参数，进行区号、生日、权重判断；"),n("br"),n("strong",[e._v("verify(id)")])])])])],1)},staticRenderFns:[]};var f=n("vSla")(u,d,!1,function(t){n("h2hc")},"data-v-2591486a",null);e.default=f.exports},ABj6:function(t,e,n){"use strict";var s={props:{list:{type:[Object,Array],default:function(){return[]}},titles:{type:[Array],default:function(){return["属性","说明","可选值","默认值","类型"]}}}},r={render:function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("table",[s("thead",[s("tr",n._l(n.titles,function(t,e){return s("td",{key:e},[n._v(n._s(t))])}))]),s("tbody",n._l(n.list,function(t,e){return s("tr",{key:e},[s("td",[n._v(n._s(t.name))]),2<=n.titles.length?s("td",[n._v(n._s(t.content))]):n._e(),3<=n.titles.length?s("td",[n._v(n._s(t.allV||"任意符合类型内容"))]):n._e(),4<=n.titles.length?s("td",[n._v(n._s(t.defaultV||"默认为空"))]):n._e(),5<=n.titles.length?s("td",[n._v(n._s(n._f("changeType")(t.type)))]):n._e()])}))])},staticRenderFns:[]};var i=n("vSla")(s,r,!1,function(t){n("vlqd")},"data-v-1f2ebce8",null);e.a=i.exports},Vura:function(t,e){t.exports="/transn-ui/dist/img/icon_toggle.png"},aqWv:function(t,e,n){var s;"undefined"!=typeof self&&self,s=function(){return function(n){function s(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,s),e.l=!0,e.exports}var r={};return s.m=n,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/dist/",s(s.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=["11","12","13","14","15","21","22","23","31","32","33","34","35","36","37","41","42","43","44","45","46","50","51","52","53","54","61","62","63","64","65","71","81","82","91"],r=["1","0","X","9","8","7","6","5","4","3","2"],i=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];e.default=function(t){if(null==t||null==t)return!1;var e,n=t.length;return(15==n||18==n)&&(e=t.substring(0,2),!!s.includes(e)&&!!function(t){var e=15===t.length?"19"+t.substring(6,12):t.substring(6,14),n=Number(e.substr(0,4)),s=Number(e.substr(4,2)),r=Number(e.substr(6,2));if(!(1900<n))return!1;if(!(1<=s<=12))return!1;if(r<1||isNaN(r))return!1;if(2==s){if(n%4==0){if(29<r)return!1}else if(28<=r)return!1}else if(4==s||6==s||9==s||11==s){if(30<=r)return!1}else if(31<=r)return!1;return!0}(t)&&(15==n||function(t){for(var e=t.toUpperCase().split(""),n=0,s=0;s<e.length&&(s!=e.length-1||"X"!=e[s]);s++){if(!/^[0-9]$/.test(Number(e[s])))return!1;s<e.length-1&&(n+=(e[s]-"0")*i[s])}return r[n%11]==e[e.length-1]}(t)))}}])},t.exports=s()},h2hc:function(t,e){},j6BZ:function(t,e){},tT22:function(t,e){t.exports="/transn-ui/dist/img/icon_copy.png"},vM5I:function(t,e){},vlqd:function(t,e){},wHgX:function(t,e,n){"use strict";var s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"com-detail"},[n("section",{staticClass:"d-t"},[n("h3",[t._t("t",[t._v("组件")])],2),n("div",[t._t("s")],2)]),n("section",{staticClass:"d-t-code"},[n("h3",[t._t("t-code",[t._v("代码演示")])],2),n("div",[t._t("s-code")],2)]),n("section",{staticClass:"d-t-api"},[n("h3",[t._t("t-api",[t._v("API")])],2),n("div",[t._t("s-api")],2)])])},staticRenderFns:[]};var r=n("vSla")(null,s,!1,function(t){n("j6BZ")},"data-v-51edae90",null);e.a=r.exports}});