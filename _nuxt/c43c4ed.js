(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{423:function(e,o,t){var content=t(428);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(25).default)("e7a9ccd4",content,!0,{sourceMap:!1})},427:function(e,o,t){"use strict";t(423)},428:function(e,o,t){var n=t(24)(!1);n.push([e.i,".resultImgContainer[data-v-253720e6]{border:1px solid #0a89ff}",""]),e.exports=n},431:function(e,o,t){"use strict";t.r(o);var n={name:"LazyImage",props:["src"],data:function(){return{showSkeleton:!0}},methods:{hideSkeleton:function(){console.log("fully loaded"),this.showSkeleton=!1}},mounted:function(){var e=this,o=new Image,img=this.$refs.image;o.onload=function(){img.src=o.src,e.hideSkeleton(),delete o.onload},o.src=this.src}},l=(t(427),t(5)),component=Object(l.a)(n,(function(){var e=this,o=e._self._c;e._self._setupProxy;return o("div",[o("div",{directives:[{name:"show",rawName:"v-show",value:e.showSkeleton,expression:"showSkeleton"}],staticClass:"col-12 px-0"},[o("Skeleton",{attrs:{width:"100%",height:"200px"}})],1),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!e.showSkeleton,expression:"!showSkeleton"}],staticClass:"col-12 px-1 py-0 resultImgContainer"},[o("img",{ref:"image",staticClass:"col-12 px-0 py-0"})])])}),[],!1,null,"253720e6",null);o.default=component.exports}}]);