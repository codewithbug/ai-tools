(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3],{422:function(e,t,n){var content=n(426);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("40f28103",content,!0,{sourceMap:!1})},423:function(e,t,n){var content=n(428);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("e7a9ccd4",content,!0,{sourceMap:!1})},424:function(e,t,n){"use strict";(function(e){n(22),n(37),n(27),n(13),n(38),n(39);var o,r,c,l,d,f,v,m,h,x,w,C=n(70),y=n(11);n(64),n(71),n(264),n(6),n(26),n(28),n(263),n(134),n(21),n(36),n(40),n(57);function T(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,r=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw r}}}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}t.a={name:"IndexPage",data:function(){return{sendDataConfig:{headers:{"Content-Type":"application/json",Authorization:e.env.replicateApiToken}},actionTitles:{coloriseImg:"Colorise Images",coloriseVideo:"Colorise Videos",upscaleImg:"Upscale Images",scanTexts:"Scan Texts For Similarity"},operationHandlers:{},currentAction:"coloriseImg",currentSectionTitle:"",uploadSpinnerIsActive:!1,videoProgress:0,fileMimeTypes:{image:"colorised-image.png",video:"colorised-video.mp4"},scanTextData:{firstText:"",secondText:""},scanTextResult:-1,results:{imgResult:[],videoResult:[]}}},methods:{setSimilarityPercent:function(e){var t=100*Number(e);t=t.toFixed(0),this.scanTextResult=t},resetResults:function(){this.results={imgResult:[],videoResult:[],textResult:[]}},setOperationHandlers:function(){this.operationHandlers.coloriseImg=this.coloriseImgHandler,this.operationHandlers.upscaleImg=this.upscaleImgHandler,this.operationHandlers.coloriseVideo=this.coloriseVideoHandler},showErrorToast:function(){this.$toast.add({severity:"error",summary:"Error",detail:"An Error Ocurred !"})},changeToActionTitle:function(e){this.currentSectionTitle=this.actionTitles[e]},changeCurrentAction:function(e){this.currentAction=e},onActionButtonClick:function(e){this.resetResults(),this.changeToActionTitle(e),this.changeCurrentAction(e)},activateLoadingSpinner:function(){this.uploadSpinnerIsActive=!0},deactivateLoadingSpinner:function(){this.uploadSpinnerIsActive=!1},downloadFile:(w=Object(y.a)(regeneratorRuntime.mark((function e(t,n){var o,r,link;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$axios.$get(t,{responseType:"arraybuffer"});case 2:o=e.sent,console.log(this.fileMimeTypes[n]),r=window.URL.createObjectURL(new Blob([o])),(link=document.createElement("a")).href=r,link.setAttribute("download",this.fileMimeTypes[n]),document.body.appendChild(link),link.click(),document.body.removeChild(link);case 11:case"end":return e.stop()}}),e,this)}))),function(e,t){return w.apply(this,arguments)}),comvertImageToDataURL:(x=Object(y.a)(regeneratorRuntime.mark((function e(t){var n,o,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),n=[],o=T(t),e.prev=3,c=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.value,e.next=3,new Promise((function(e,o){var r=new FileReader;r.onload=function(){n.push(r.result),e()},r.readAsDataURL(t)}));case 3:case"end":return e.stop()}}),e)})),o.s();case 6:if((r=o.n()).done){e.next=10;break}return e.delegateYield(c(),"t0",8);case 8:e.next=6;break;case 10:e.next=15;break;case 12:e.prev=12,e.t1=e.catch(3),o.e(e.t1);case 15:return e.prev=15,o.f(),e.finish(15);case 18:return console.log(n),e.abrupt("return",n);case 20:case"end":return e.stop()}}),e,null,[[3,12,15,18]])}))),function(e){return x.apply(this,arguments)}),uploadHandler:function(e){console.log(e),this.operationHandlers[this.currentAction](e)},upscaleImgHandler:(h=Object(y.a)(regeneratorRuntime.mark((function e(t){var n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.activateLoadingSpinner(),e.next=3,this.comvertImageToDataURL(t.files);case 3:e.sent.forEach(function(){var e=Object(y.a)(regeneratorRuntime.mark((function e(t){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getImgUpscalePredictionData(t);case 2:o=e.sent,n.sendDataRecursive(o);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 5:case"end":return e.stop()}}),e,this)}))),function(e){return h.apply(this,arguments)}),getImgUpscalePredictionData:(m=Object(y.a)(regeneratorRuntime.mark((function e(t){var data,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data={input:{image:t,task_type:"Real-World Image Super-Resolution-Large",noise:15,jpeg:40},version:"660d922d33153019e8c263a3bba265de882e7f4f70396546b6c9c8f9d47a021a"},e.next=3,this.$axios.$post("replicateApi",JSON.stringify(data),this.sendDataConfig);case 3:return n=e.sent,o=n,e.abrupt("return",o.id);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return m.apply(this,arguments)}),coloriseImgHandler:(v=Object(y.a)(regeneratorRuntime.mark((function e(t){var n,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.activateLoadingSpinner(),e.next=3,this.comvertImageToDataURL(t.files);case 3:n=e.sent,console.log(n),n.forEach(function(){var e=Object(y.a)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.getImgColorisePredictionData(t);case 2:n=e.sent,o.sendDataRecursive(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:case"end":return e.stop()}}),e,this)}))),function(e){return v.apply(this,arguments)}),getImgColorisePredictionData:(f=Object(y.a)(regeneratorRuntime.mark((function e(t){var data,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data={input:{image:t,mode:"Real Gray Colorization"},version:"9451bfbf652b21a9bccc741e5c7046540faa5586cfa3aa45abc7dbb46151a4f7"},e.next=3,this.$axios.$post("replicateApi",JSON.stringify(data),this.sendDataConfig);case 3:return n=e.sent,o=n,e.abrupt("return",o.id);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return f.apply(this,arguments)}),resetVideoLoadingPercent:function(){this.videoProgress=0},setVideoLoadingPercent:function(e){this.videoProgress=e},getVideoProgress:function(e){var t=e.lastIndexOf("\n"),n=e.slice(t+1),o=n.lastIndexOf("|"),r=n.slice(o+2),c=r.indexOf("%"),progress=r.slice(0,c);return 0==Number(progress)||Number(progress)?Math.floor(progress):100},convertVideoToDataUrl:(d=Object(y.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var o=new FileReader;o.onload=function(){e(o.result)},o.readAsDataURL(t)})));case 1:case"end":return e.stop()}}),e)}))),function(e){return d.apply(this,arguments)}),coloriseVideoHandler:(l=Object(y.a)(regeneratorRuntime.mark((function e(t){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.activateLoadingSpinner(),e.next=3,this.convertVideoToDataUrl(t);case 3:return n=e.sent,e.next=6,this.getVideoColorisePredictionData(n);case 6:o=e.sent,this.sendDataRecursive(o);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return l.apply(this,arguments)}),getVideoColorisePredictionData:(c=Object(y.a)(regeneratorRuntime.mark((function e(t){var data,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data={input:{input_video:t,render_factor:35},version:"8f1189b476fcb54cfbe1d07d97b025c571a2ce4e9a7a9558640c78647576e16f"},e.next=3,this.$axios.$post("replicateApi",JSON.stringify(data),this.sendDataConfig);case 3:return n=e.sent,o=n,e.abrupt("return",o.id);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return c.apply(this,arguments)}),sendDataRecursive:(r=Object(y.a)(regeneratorRuntime.mark((function e(t){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="replicateApi/"+"".concat(t),e.next=4,this.$axios.$get(n,this.sendDataConfig);case 4:if(o=e.sent,"coloriseVideo"==this.currentAction&&o.logs&&(this.videoProgress=this.getVideoProgress(o.logs)),"failed"!=o.status){e.next=9;break}return this.showErrorToast(),e.abrupt("return");case 9:if("succeeded"!=o.status||"coloriseImg"!=this.currentAction){e.next=14;break}return console.log(o),this.results.imgResult=[].concat(Object(C.a)(this.results.imgResult),Object(C.a)(o.output)),this.deactivateLoadingSpinner(),e.abrupt("return");case 14:if("succeeded"!=o.status||"upscaleImg"!=this.currentAction){e.next=18;break}return this.results.imgResult=[o.output],this.deactivateLoadingSpinner(),e.abrupt("return");case 18:if("succeeded"!=o.status||"coloriseVideo"!=this.currentAction){e.next=23;break}return this.results.videoResult=[o.output],this.deactivateLoadingSpinner(),this.resetVideoLoadingPercent(),e.abrupt("return");case 23:"succeeded"!=o.status&&setTimeout(this.sendDataRecursive,1e3,t),e.next=31;break;case 26:e.prev=26,e.t0=e.catch(0),this.showErrorToast(),this.deactivateLoadingSpinner(),this.resetVideoLoadingPercent();case 31:case"end":return e.stop()}}),e,this,[[0,26]])}))),function(e){return r.apply(this,arguments)}),scanText:(o=Object(y.a)(regeneratorRuntime.mark((function t(){var n,o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{"Content-Type":"application/json",Authorization:e.env.replicateApiTokenBearer}},o={inputs:{source_sentence:this.scanTextData.firstText,sentences:[this.scanTextData.secondText,this.scanTextData.secondText]}},t.next=4,this.$axios.$post("https:/replicateApi-inference.huggingface.co/models/sentence-transformers/all-MiniLM-L6-v2",o,n);case 4:r=t.sent,this.setSimilarityPercent(r[0]);case 6:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},created:function(){this.currentSectionTitle=this.actionTitles.coloriseImg,this.setOperationHandlers()}}}).call(this,n(135))},425:function(e,t,n){"use strict";n(422)},426:function(e,t,n){var o=n(24)(!1);o.push([e.i,"[data-v-39a48085] .p-button-icon{margin-right:.5rem}[data-v-39a48085] .downloadBtn .p-button-icon{margin-right:0!important}.buttons[data-v-39a48085]{border-bottom:1px solid #d3d3d3}[data-v-39a48085] .buttons>.p-button{margin-right:.5rem}.videoInput[data-v-39a48085],[data-v-39a48085] .buttons .p-button-label{display:none}.previewRow[data-v-39a48085]{display:flex;flex-wrap:wrap;align-items:center}.videoPreviewSection[data-v-39a48085]{display:flex;min-height:226px;align-items:center}",""]),e.exports=o},427:function(e,t,n){"use strict";n(423)},428:function(e,t,n){var o=n(24)(!1);o.push([e.i,".resultImgContainer[data-v-253720e6]{border:1px solid #0a89ff}",""]),e.exports=o},429:function(e,t,n){var content=n(433);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("d9a9fe46",content,!0,{sourceMap:!1})},430:function(e,t,n){"use strict";n.r(t);n(6),n(26),n(28),n(263),n(134);var o={name:"VideoUpload",props:["spinner","progress"],data:function(){return{files:"",videoSrc:""}},methods:{reset:function(){this.files="",this.videoSrc=""},onFileSelect:function(e){this.assignFiles(e),this.setVideoSrc(e)},assignFiles:function(e){this.files=e.target.files[0]},setVideoSrc:function(e){var t=URL.createObjectURL(e.target.files[0]);this.videoSrc=t},onUploadClick:function(){this.$emit("onUploadClick",this.files),this.reset()}}},r=(n(425),n(5)),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"col-12 px-0 py-0"},[t("input",{ref:"videoInput",staticClass:"videoInput",attrs:{type:"file",accept:"video/*"},on:{input:e.onFileSelect}}),e._v(" "),t("div",{staticClass:"col-12 py-3 text-center buttons"},[t("Button",{attrs:{label:"Select",icon:"pi pi-plus pi-fw"},on:{click:function(t){return e.$refs.videoInput.click()}}}),e._v(" "),t("Button",{attrs:{disabled:e.files.length<1,label:"Upload",icon:"pi pi-upload pi-fw"},on:{click:e.onUploadClick}}),e._v(" "),t("Button",{attrs:{disabled:e.files.length<1,label:"Reset",icon:"pi pi-times pi-fw"},on:{click:e.reset}})],1),e._v(" "),t("div",{staticClass:"col-12 px-0 videoPreviewSection"},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.videoSrc,expression:"videoSrc"}],staticClass:"col-12 px-0 previewRow"},[t("div",{staticClass:"col-12"},[t("video",{staticClass:"col-12",attrs:{src:e.videoSrc,controls:""}})])]),e._v(" "),t("ProgressSpinner",{directives:[{name:"show",rawName:"v-show",value:e.spinner,expression:"spinner"}]}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.progress,expression:"progress"}],staticClass:"col-12 px-0"},[t("ProgressBar",{staticClass:"col-auto py-0 px-0",attrs:{value:e.progress}})],1)],1)])}),[],!1,null,"39a48085",null);t.default=component.exports},431:function(e,t,n){"use strict";n.r(t);var o={name:"LazyImage",props:["src"],data:function(){return{showSkeleton:!0}},methods:{hideSkeleton:function(){console.log("fully loaded"),this.showSkeleton=!1}},mounted:function(){var e=this,t=new Image,img=this.$refs.image;t.onload=function(){img.src=t.src,e.hideSkeleton(),delete t.onload},t.src=this.src}},r=(n(427),n(5)),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[t("div",{directives:[{name:"show",rawName:"v-show",value:e.showSkeleton,expression:"showSkeleton"}],staticClass:"col-12 px-0"},[t("Skeleton",{attrs:{width:"100%",height:"200px"}})],1),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.showSkeleton,expression:"!showSkeleton"}],staticClass:"col-12 px-1 py-0 resultImgContainer"},[t("img",{ref:"image",staticClass:"col-12 px-0 py-0"})])])}),[],!1,null,"253720e6",null);t.default=component.exports},432:function(e,t,n){"use strict";n(429)},433:function(e,t,n){var o=n(24)(!1);o.push([e.i,".mainText[data-v-82caead2]{font-size:20px;font-weight:700;line-height:1.8}.actions[data-v-82caead2]{display:flex;flex-wrap:wrap;align-items:center}.colorise[data-v-82caead2]{color:#ff3d00}.upscale[data-v-82caead2]{color:#0a89ff}.similarity[data-v-82caead2]{color:#00c853}.forFree[data-v-82caead2]{color:#0a89ff}.aiText[data-v-82caead2]{background-color:#0a89ff;color:#fff;padding:.1rem .7rem}.withCustomIcon[data-v-82caead2]{padding:0!important;width:3rem;height:3rem;box-shadow:0 0 5px 0 #d3d3d3}.withCustomIcon>svg[data-v-82caead2]{margin:auto!important}.withCustomIconWeb[data-v-82caead2]{box-shadow:0 0 5px 0 #d3d3d3}.mobileButtonsContainer[data-v-82caead2],.webButtonsContainer[data-v-82caead2]{flex-wrap:wrap;align-items:center;justify-content:space-evenly}.webButtonsContainer>button[data-v-82caead2]{font-weight:700;font-size:18px}.palette[data-v-82caead2]{color:#ff3d00}.brush[data-v-82caead2]{color:#651fff}.expand[data-v-82caead2]{color:#0a89ff}.copy[data-v-82caead2]{color:#00c853}.actionName[data-v-82caead2]{font-weight:700;font-size:18px}.result[data-v-82caead2],.source[data-v-82caead2]{border:1px solid #0a89ff}.result[data-v-82caead2]{overflow:auto}.source[data-v-82caead2]{align-self:flex-start}[data-v-82caead2] .p-button .p-button-icon-left{margin-right:0}[data-v-82caead2] .downloadButton .p-button-label{display:none}[data-v-82caead2] .p-fileupload-buttonbar{text-align:center!important}[data-v-82caead2] .p-fileupload .p-fileupload-row>div:first-child{padding:0}[data-v-82caead2] .p-fileupload .p-fileupload-row>div:first-child>img{width:100%}[data-v-82caead2] .p-fileupload .p-fileupload-row>div:nth-child(2),[data-v-82caead2] .p-fileupload .p-fileupload-row>div:nth-child(3){display:none!important}[data-v-82caead2] .p-fileupload .p-fileupload-row>div:nth-child(4)>button{background-color:#ff3d00;width:1.5rem;padding:.094rem 0;border-radius:100px;border:none}[data-v-82caead2] .p-fileupload .p-fileupload-row>div:nth-child(4)>button>.p-button-icon{font-size:12px}.arrowIcon[data-v-82caead2]{color:#d3d3d3;font-size:50px;transition:color .5s}.mobileButtonsContainer>.activeBtn.palette[data-v-82caead2],.webButtonsContainer>.activeBtn.palette[data-v-82caead2]{background-color:#ff3d00;color:#fff}.mobileButtonsContainer>.activeBtn.brush[data-v-82caead2],.webButtonsContainer>.activeBtn.brush[data-v-82caead2]{background-color:#651fff;color:#fff}.mobileButtonsContainer>.activeBtn.expand[data-v-82caead2],.webButtonsContainer>.activeBtn.expand[data-v-82caead2]{background-color:#0a89ff;color:#fff}.mobileButtonsContainer>.activeBtn.copy[data-v-82caead2],.webButtonsContainer>.activeBtn.copy[data-v-82caead2]{background-color:#00c853;color:#fff}.blueArrow[data-v-82caead2]{color:#0a89ff}.resultRow[data-v-82caead2]{align-items:center}.resultRow[data-v-82caead2],.textContainer[data-v-82caead2]{display:flex;flex-wrap:wrap}.textContainer[data-v-82caead2]{min-height:300px}@media screen and (min-width:300px){.result[data-v-82caead2],.source[data-v-82caead2]{min-height:300px}.arrowWeb[data-v-82caead2]{display:none}.arrowMobile[data-v-82caead2]{display:block}.mobileButtonsContainer[data-v-82caead2]{display:flex}.webButtonsContainer[data-v-82caead2]{display:none}.actions[data-v-82caead2]{justify-content:center}}@media screen and (min-width:1200px){[data-v-82caead2] .p-fileupload .p-fileupload-content{overflow:auto;height:440px}.result[data-v-82caead2],.source[data-v-82caead2]{height:525px}.arrowWeb[data-v-82caead2]{display:block}.arrowMobile[data-v-82caead2],.mobileButtonsContainer[data-v-82caead2]{display:none}.webButtonsContainer[data-v-82caead2]{display:flex}.actions[data-v-82caead2]{justify-content:space-between}.webButtonsContainer>button[data-v-82caead2]{font-size:16px}.mainText[data-v-82caead2]{font-size:22px}}@media screen and (min-width:1366px){.mainText[data-v-82caead2]{font-size:25px}.actionName[data-v-82caead2]{font-size:22px}}@media screen and (min-width:1380px){.mainText[data-v-82caead2]{font-size:32px}}@media screen and (min-width:1380px){.actionName[data-v-82caead2]{font-size:25px}}@media screen and (min-width:1807px){[data-v-82caead2] .p-fileupload .p-fileupload-row>div:nth-child(4)>button{width:2rem;padding:.344rem 0}[data-v-82caead2] .p-fileupload .p-fileupload-row>div:nth-child(4)>button>.p-button-icon{font-size:14px}.mainText[data-v-82caead2]{font-size:34px}}@media screen and (min-width:1920px){.mainText[data-v-82caead2]{font-size:36px}.webButtonsContainer>button[data-v-82caead2]{font-size:20px}}",""]),e.exports=o},440:function(e,t,n){"use strict";n.r(t);var o=n(424).a,r=(n(432),n(5)),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[e._m(0),e._v(" "),t("div",{staticClass:"col-12 webButtonsContainer"},[t("Button",{staticClass:"col-fixed py-3 p-button-text withCustomIconWeb palette",class:{activeBtn:"coloriseImg"==e.currentAction},on:{click:function(t){return e.onActionButtonClick("coloriseImg")}}},[t("font-awesome-icon",{attrs:{icon:["fas","palette"]}}),e._v(" "),t("p",{staticClass:"my-0 ml-2"},[e._v(" Colorise Images")])],1),e._v(" "),t("Button",{staticClass:"col-fixed py-3 p-button-text withCustomIconWeb expand",class:{activeBtn:"upscaleImg"==e.currentAction},on:{click:function(t){return e.onActionButtonClick("upscaleImg")}}},[t("font-awesome-icon",{attrs:{icon:["fas","up-right-and-down-left-from-center"]}}),e._v(" "),t("p",{staticClass:"my-0 ml-2"},[e._v(" Upscale Images ")])],1),e._v(" "),t("Button",{staticClass:"col-fixed py-3 p-button-text withCustomIconWeb brush",class:{activeBtn:"coloriseVideo"==e.currentAction},on:{click:function(t){return e.onActionButtonClick("coloriseVideo")}}},[t("font-awesome-icon",{attrs:{icon:["fas","brush"]}}),e._v(" "),t("p",{staticClass:"my-0 ml-2"},[e._v(" Colorise Videos ")])],1),e._v(" "),t("Button",{staticClass:"col-fixed py-3 p-button-text withCustomIconWeb copy",class:{activeBtn:"scanTexts"==e.currentAction},on:{click:function(t){return e.onActionButtonClick("scanTexts")}}},[t("font-awesome-icon",{attrs:{icon:["fas","copy"]}}),e._v(" "),t("p",{staticClass:"my-0 ml-2"},[e._v(" Scan Texts ")])],1)],1),e._v(" "),t("div",{staticClass:"col-12 mobileButtonsContainer"},[t("Button",{staticClass:"p-button-rounded p-button-text withCustomIcon palette",class:{activeBtn:"coloriseImg"==e.currentAction},on:{click:function(t){return e.onActionButtonClick("coloriseImg")}}},[t("font-awesome-icon",{attrs:{icon:["fas","palette"]}})],1),e._v(" "),t("Button",{staticClass:"p-button-rounded p-button-text withCustomIcon expand",class:{activeBtn:"upscaleImg"==e.currentAction},on:{click:function(t){return e.onActionButtonClick("upscaleImg")}}},[t("font-awesome-icon",{attrs:{icon:["fas","up-right-and-down-left-from-center"]}})],1),e._v(" "),t("Button",{staticClass:"p-button-rounded p-button-text withCustomIcon brush",class:{activeBtn:"coloriseVideo"==e.currentAction},on:{click:function(t){return e.onActionButtonClick("coloriseVideo")}}},[t("font-awesome-icon",{attrs:{icon:["fas","brush"]}})],1),e._v(" "),t("Button",{staticClass:"p-button-rounded p-button-text withCustomIcon copy",class:{activeBtn:"scanTexts"==e.currentAction},on:{click:function(t){return e.onActionButtonClick("scanTexts")}}},[t("font-awesome-icon",{attrs:{icon:["fas","copy"]}})],1)],1),e._v(" "),t("div",{staticClass:"col-12 actions"},[t("p",{staticClass:"col-12 text-center actionName"},[e._v(" "+e._s(e.currentSectionTitle))]),e._v(" "),t("div",{staticClass:"col-12 xl:col-5 py-0 px-0 source"},[t("FileUpload",{directives:[{name:"show",rawName:"v-show",value:"coloriseImg"==e.currentAction||"upscaleImg"==e.currentAction,expression:"currentAction == 'coloriseImg' || currentAction == 'upscaleImg' "}],attrs:{accept:"image/*",disabled:e.uploadSpinnerIsActive,name:"demo[]",customUpload:!0,multiple:!0,uploadLabel:" ",chooseLabel:" ",cancelLabel:" "},on:{uploader:e.uploadHandler},scopedSlots:e._u([{key:"empty",fn:function(){return[t("p",{directives:[{name:"show",rawName:"v-show",value:!e.uploadSpinnerIsActive,expression:"!uploadSpinnerIsActive"}],staticClass:"py-6"},[e._v("Drag and drop files to here to upload.")]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.uploadSpinnerIsActive,expression:"uploadSpinnerIsActive"}],staticClass:"py-6 text-center"},[t("ProgressSpinner")],1)]},proxy:!0}])}),e._v(" "),t("VideoUpload",{directives:[{name:"show",rawName:"v-show",value:"coloriseVideo"==e.currentAction,expression:"currentAction== 'coloriseVideo' "}],attrs:{progress:e.videoProgress,spinner:e.uploadSpinnerIsActive},on:{onUploadClick:e.uploadHandler}}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"scanTexts"==e.currentAction,expression:"currentAction == 'scanTexts' "}],staticClass:"py-2 px-2 textContainer"},[t("Textarea",{staticClass:"col-12",attrs:{placeholder:"Type first text....."},model:{value:e.scanTextData.firstText,callback:function(t){e.$set(e.scanTextData,"firstText",t)},expression:"scanTextData.firstText"}})],1)],1),e._v(" "),t("p",{staticClass:"text-center my-3 arrowIcon arrowMobile",class:{blueArrow:e.results.imgResult.length>0||e.results.videoResult.length>0||e.scanTextData.firstText.length>0&&e.scanTextData.secondText.length>0}},[t("font-awesome-icon",{attrs:{icon:["fas","arrow-down-long"]}})],1),e._v(" "),t("p",{staticClass:"text-center my-3 arrowIcon arrowWeb",class:{blueArrow:e.results.imgResult.length>0||e.results.videoResult.length>0||e.scanTextData.firstText.length>0&&e.scanTextData.secondText.length>0}},[t("font-awesome-icon",{attrs:{icon:["fas","arrow-right-long"]}})],1),e._v(" "),t("div",{staticClass:"col-12 xl:col-5 result"},[e._l(e.results.imgResult,(function(img,n){return t("div",{key:n,staticClass:"col-12 px-0 resultRow"},[t("div",{staticClass:"col-8 px-1 py-1"},[img.image?t("LazyImage",{attrs:{src:img.image}}):t("LazyImage",{attrs:{src:img}})],1),e._v(" "),t("div",{staticClass:"col-4 text-center downloadButton"},[img.image?t("Button",{attrs:{label:"Download",icon:"pi pi-download"},on:{click:function(t){return e.downloadFile(img.image,"image")}}}):t("Button",{attrs:{label:"Download",icon:"pi pi-download"},on:{click:function(t){return e.downloadFile(img,"image")}}})],1)])})),e._v(" "),e._l(e.results.videoResult,(function(n,o){return t("div",{key:o,staticClass:"col-12 px-0 resultRow"},[t("div",{staticClass:"col-8 px-1 py-1"},[t("video",{staticClass:"col-12",attrs:{controls:"",src:n}})]),e._v(" "),t("div",{staticClass:"col-4 text-center downloadButton"},[t("Button",{attrs:{icon:"pi pi-download",label:"Download video"},on:{click:function(t){return e.downloadFile(n,"video")}}})],1)])})),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"scanTexts"==e.currentAction,expression:"currentAction == 'scanTexts' "}],staticClass:"py-0 px-0 textContainer"},[t("Textarea",{staticClass:"col-12",attrs:{placeholder:"Type second text....."},model:{value:e.scanTextData.secondText,callback:function(t){e.$set(e.scanTextData,"secondText",t)},expression:"scanTextData.secondText"}})],1)],2),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"scanTexts"==e.currentAction,expression:"currentAction == 'scanTexts' "}],staticClass:"col-12 mt-3 text-center"},[t("Message",{directives:[{name:"show",rawName:"v-show",value:e.scanTextResult>-1,expression:"scanTextResult > -1"}],attrs:{severity:"info"}},[e._v(" Similarity "),t("b",[e._v(e._s(e.scanTextResult)+" %")])]),e._v(" "),t("Button",{staticClass:"my-5",attrs:{label:"Scan Texts"},on:{click:e.scanText}})],1)])])}),[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",{staticClass:"col-12 mt-5 pt-5 text-center mainText"},[t("span",{staticClass:"colorise"},[e._v(" Colorise ")]),e._v(" Images And Videos , "),t("span",{staticClass:"upscale"},[e._v(" Upscale ")]),e._v(" Them Or "),t("span",{staticClass:"similarity"},[e._v(" Check Similarity ")]),e._v("\n    Between Two Texts With The Help Of "),t("span",{staticClass:"px-2 aiText"},[e._v("AI.")]),e._v(" "),t("span",{staticClass:"forFree"},[e._v(" For Absolutely Free ! ")])])}],!1,null,"82caead2",null);t.default=component.exports;installComponents(component,{VideoUpload:n(430).default,LazyImage:n(431).default})}}]);