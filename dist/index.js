!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).$message=e()}(this,(function(){"use strict";var t=function(e,n){var o=document.createElement(e.tag);if(e.attr&&Object.keys(e.attr).map((function(t){var n,i,r,a=null;"object"==typeof(null===(n=e.attr)||void 0===n?void 0:n[t])&&(a=JSON.stringify(null===(i=e.attr)||void 0===i?void 0:i[t])),o.setAttribute(t,a||(null===(r=e.attr)||void 0===r?void 0:r[t]))})),"string"==typeof e.children){var i=document.createTextNode(e.children);o.appendChild(i)}else e.children&&e.children.forEach((function(e){return t(e,o)}));return n?n.appendChild(o):o},e=t,n=new(function(){function t(t){this.store=[],this.pastDue=[],this.store=t}return t.prototype.push=function(t){var e=this.pastDue.length;this.pastDue.push(this.timebomb(t,e))},t.prototype.timebomb=function(t,e){var n=this,o=t.source,i=t.dom;return setTimeout((function(){var t=n.pastDue;i.className="out "+i.className,i.addEventListener("animationend",(function(){var t;null===(t=o.postEvent)||void 0===t||t.call(o),document.body.removeChild(i)}),!1),clearTimeout(t[e]),t[e]=null}),o.durationTime)},t.prototype.closeAll=function(){var t=this.pastDue;return t.map((function(t,e){clearTimeout(t),t=null})),t=[],new Promise((function(e,n){t.length?n(!1):e(!0)}))},t}())([]),o=new(function(){function t(t){this.defaultOption={type:"info",durationTime:1e3,postEvent:null,class:""},this.option={},this.seed=0,this.isContainer=!1}return t.prototype.alteration=function(t){this.option=Object.assign({},this.defaultOption,t),this.establish()},t.prototype.establish=function(){var t=this.seed,o=this.option;if(!o.content)throw'[message] If you use the object argument form, be aware!"content" is required';var i="message_"+t++;var r,a=(r=o,{dom:e({tag:"div",children:[{tag:"span",attr:{class:"iconfont nan-icon  icon-xiaoxi"}}],attr:{class:"alert-".concat(o.type," nan-alert enter ").concat(o.class," "),id:i,style:{zindex:100+t}}}),id:i,domID:"#"+i,source:r}),s=a.source,u=a.dom;s.durationTime=s.durationTime+60*t,n.push(a),document.body.appendChild(u)},t}())({}),i=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];o.alteration(t.length<2?t[0]:{type:t[0],content:t[1]})};return new Array("success","warning","info","error").map((function(t,e){i[t]=function(e){o.alteration({type:t,content:e})}})),i}));