webpackJsonp([8,97],{132:function(t,e,r){var o,n;r(337),o=r(237);var i=r(361);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(n=o=o.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,t.exports=o},237:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{canGoBack:window.history.length>1}},methods:{goBack:function(){window.history.go(-1)}}}},328:function(t,e,r){e=t.exports=r(130)(),e.push([t.i,".error-page .error-code{height:50vh;width:100%;padding-top:15vh;font-size:30vmax;color:hsla(0,0%,100%,.2);overflow:hidden}.error-page .error-card{margin-top:-25px;width:90vw;max-width:600px;padding:50px}.error-page .error-card i{font-size:5rem}",""])},337:function(t,e,r){var o=r(328);"string"==typeof o&&(o=[[t.i,o,""]]);r(131)(o,{});o.locals&&(t.exports=o.locals)},361:function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"error-page window-height window-width bg-light column items-center"},[e("div",{staticClass:"error-code bg-primary flex items-center justify-center"},[t._v("\n    404\n  ")]),t._v(" "),e("div",[e("div",{staticClass:"error-card card bg-white column items-center justify-center"},[e("i",{staticClass:"text-grey-5"},[t._v("error_outline")]),t._v(" "),e("p",{staticClass:"caption text-center"},[t._v("Oops. Nothing here...")]),t._v(" "),e("p",{staticClass:"text-center group"},[t.canGoBack?e("button",{staticClass:"grey push small",on:{click:t.goBack}},[e("i",{staticClass:"on-left"},[t._v("keyboard_arrow_left")]),t._v("\n          Go back\n        ")]):t._e(),t._v(" "),e("router-link",{attrs:{to:"/"}},[e("button",{staticClass:"grey push small"},[t._v("\n            Go home\n            "),e("i",{staticClass:"on-right"},[t._v("home")])])])],1)])])])},staticRenderFns:[]}}});