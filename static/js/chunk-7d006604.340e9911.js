(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d006604"],{1462:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"d",(function(){return r})),a.d(e,"e",(function(){return s})),a.d(e,"c",(function(){return o})),a.d(e,"f",(function(){return c})),a.d(e,"g",(function(){return u})),a.d(e,"a",(function(){return l}));var n=a("b775");function i(t){return Object(n["a"])({url:"/data/dataset_info_new",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/data/show_images_new",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/data/show_images_xy_new_only",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/data/dataset_errinfo_new",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/data/show_images_new",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/data/subuser_info_new",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/data/describe",method:"post",data:t})}},1598:function(t,e,a){},"1ac6":function(t,e,a){},"27bd":function(t,e,a){"use strict";a("ee78")},4815:function(t,e,a){"use strict";a("58fe")},"58fe":function(t,e,a){},"712e":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"j",(function(){return r})),a.d(e,"f",(function(){return s})),a.d(e,"b",(function(){return o})),a.d(e,"h",(function(){return c})),a.d(e,"i",(function(){return u})),a.d(e,"c",(function(){return l})),a.d(e,"e",(function(){return d})),a.d(e,"d",(function(){return f})),a.d(e,"g",(function(){return h}));var n=a("b775");function i(t){return Object(n["a"])({url:"/data/create",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/data/label_image",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/data/distribute_images",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/data/user/create_errinfo",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/data/user/show_dataerr",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/data/user/show_dataerr_list",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/data/subuser/del_dataset",method:"post",data:t})}function d(t){return Object(n["a"])({url:"/data/distribute_images_user",method:"post",data:t})}function f(t){return Object(n["a"])({url:"/data/del_img",method:"post",data:t})}function h(t){return Object(n["a"])({url:"/data/turn_down",method:"post",data:t})}},7156:function(t,e,a){var n=a("861d"),i=a("d2bb");t.exports=function(t,e,a){var r,s;return i&&"function"==typeof(r=e.constructor)&&r!==a&&n(s=r.prototype)&&s!==a.prototype&&i(t,s),t}},"806b":function(t,e,a){"use strict";a("1598")},a9e3:function(t,e,a){"use strict";var n=a("83ab"),i=a("da84"),r=a("94ca"),s=a("6eeb"),o=a("5135"),c=a("c6b6"),u=a("7156"),l=a("c04e"),d=a("d039"),f=a("7c73"),h=a("241c").f,m=a("06cf").f,g=a("9bf2").f,b=a("58a8").trim,p="Number",v=i[p],y=v.prototype,_=c(f(y))==p,w=function(t){var e,a,n,i,r,s,o,c,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=b(u),e=u.charCodeAt(0),43===e||45===e){if(a=u.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+u}for(r=u.slice(2),s=r.length,o=0;o<s;o++)if(c=r.charCodeAt(o),c<48||c>i)return NaN;return parseInt(r,n)}return+u};if(r(p,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var C,x=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof x&&(_?d((function(){y.valueOf.call(a)})):c(a)!=p)?u(new v(w(e)),a,x):w(e)},L=n?h(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),D=0;L.length>D;D++)o(v,C=L[D])&&!o(x,C)&&g(x,C,m(v,C));x.prototype=y,y.constructor=x,s(i,p,x)}},b6af:function(t,e,a){"use strict";a("d655")},bae3:function(t,e,a){},bfc1:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"label3"},[a("div",{staticClass:"left"},[a("Silder",{ref:"Silder",on:{save:t.save,clearlabel:t.clearlabel}})],1),a("div",{staticClass:"con"},[a("div",{staticClass:"con-top"},[a("Header",{ref:"Header",attrs:{"dataset-list":t.datasetList,"img-list":t.imgList,"curr-no":t.currNo,"curr-data-set":t.currDataSet},on:{changeCurrDataSet:t.changeCurrDataSet}})],1),a("div",{staticClass:"con-center"},[a("Viewmain",{ref:"Viewmain",attrs:{"curr-no":t.currNo}})],1),a("div",{staticClass:"con-footer"},[a("Thumbnail",{ref:"Thumbnail",attrs:{"curr-no":t.currNo},on:{changeNo:t.changeno}})],1)]),a("div",{staticClass:"right"},[a("ErrTypelist",{ref:"ErrTypelist",on:{saveok:t.saveok}})],1)])},i=[],r=(a("b0c0"),a("96cf"),a("1da1")),s=a("2b0e"),o=new s["default"],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"silder"},[a("div",{staticClass:"silder-top"}),a("div",{staticClass:"silder-bottom"},[a("div",{class:0===t.sign?"btn Highlight":"btn",on:{click:function(e){return t.changesigh(0)}}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"移动",placement:"right"}},[a("i",{staticClass:"el-icon-rank"})])],1),a("div",{class:1===t.sign?"btn Highlight":"btn",on:{click:function(e){return t.changesigh(1)}}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"标记",placement:"right"}},[a("i",{staticClass:"el-icon-full-screen"})])],1),a("div",{staticClass:"btn"},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"撤销",placement:"right"}},[a("i",{staticClass:"el-icon-refresh-left"})])],1),a("div",{staticClass:"btn",on:{click:function(e){return t.save()}}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"保存",placement:"right"}},[a("i",{staticClass:"el-icon-upload"})])],1),a("div",{staticClass:"btn delete",on:{click:function(e){return t.clear()}}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"清空",placement:"right"}},[a("i",{staticClass:"el-icon-delete"})])],1)])])},u=[],l={data:function(){return{sign:1}},created:function(){this.reset()},methods:{reset:function(){var t=this;o.$on("resets",(function(e){t.changesigh(e)}))},changesigh:function(t){this.sign=t,o.$emit("myFun",this.sign)},save:function(){console.log("保存前"),this.$emit("save")},clear:function(){console.log("点击清空"),this.$emit("clearlabel")}}},d=l,f=(a("b6af"),a("2877")),h=Object(f["a"])(d,c,u,!1,null,"05e13b7e",null),m=h.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"foot"},[a("div",{staticClass:"foot-left"},[a("div",{staticClass:"left-btn btn",on:{click:t.left}},[a("i",{staticClass:"el-icon-arrow-left"})])]),a("div",{staticClass:"foot-center",attrs:{id:"foot-center"}},[0!==t.dataset.length?a("div",{attrs:{id:"scrll"}},t._l(t.dataset,(function(e,n){return a("div",{key:n,class:n===t.currNo?"imgbox highlight":"imgbox",on:{click:function(e){return t.getClickNo(n)}}},[a("el-image",{key:n,staticStyle:{height:"100%"},attrs:{src:e.image_path,fit:"contain",lazy:""}},[t._v(" 加载失败 ")]),a("div",{staticClass:"tip"},[null===e.bom_id?a("div",[t._v("未标注")]):"0"===e.bom_id?a("div",{style:"color:#ff0000"},[t._v("NG")]):"1"===e.bom_id?a("div",{staticClass:"OK",style:"color:green"},[t._v("OK")]):a("div",[t._v("未标注")])])],1)})),0):t._e()]),a("div",{staticClass:"foot-right",on:{click:t.right}},[t._m(0)])])},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"right-btn btn"},[a("i",{staticClass:"el-icon-arrow-right"})])}],p=(a("a9e3"),{props:{currNo:{type:Number,default:0}},data:function(){return{dataset:[]}},created:function(){this.bbtn()},methods:{bbtn:function(){var t=this;o.$on("gothis",(function(e){console.log("跳转",e),t.getClickNo(e)}))},receiveDataSetData:function(t){this.dataset=t,console.log(t),document.getElementById("foot-center").scrollLeft=0},getClickNo:function(t){this.linkage(t)},left:function(){this.currNo>0?this.linkage(this.currNo-1):alert("上越界")},right:function(){this.currNo<this.dataset.length-1?this.linkage(this.currNo+1):alert("下越界")},roll:function(t){for(var e=document.getElementById("foot-center").scrollLeft,a=(156*(t-2)-e)/100,n=0;n<100;n++)setTimeout((function(){document.getElementById("foot-center").scrollLeft+=a}),n)},linkage:function(t){this.$emit("changeNo",t),o.$emit("resets",1),o.$emit("changeMainImg",t),this.roll(t)},updata:function(t,e){this.dataset[t].bom_id=e}}}),v=p,y=(a("cb66"),Object(f["a"])(v,g,b,!1,null,"6d7a1b6f",null)),_=y.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"viewmain"},[a("div",{staticClass:"map",attrs:{id:"map"}})])}],x=(a("4160"),a("a434"),a("b680"),a("159b"),a("5530")),L=a("7e66"),D=a.n(L),k=a("2f62"),N=a("1462"),I={props:{currNo:{type:Number,default:0}},data:function(){return{gFeatureLayer:Object,gMap:Object,gTextLayer:Object,gMapMLayer:Object,buttonList:[],dataset:[],labelData:[],currErrType:0,state:1}},computed:Object(x["a"])({},Object(k["b"])(["name","roles"])),mounted:function(){this.defaultImg()},created:function(){this.bbtn()},methods:{defaultImg:function(){this.getshowimg("https://img0.baidu.com/it/u=3101694723,748884042&fm=26&fmt=auto&gp=0.jpg")},setupMode:function(t){0===t?this.gMap.setMode("pan",this.styleDeclaration()):this.gMap.setMode("drawRect",this.styleDeclaration())},bbtn:function(){var t=this;o.$on("myFun",(function(e){t.state=e,t.setupMode(e)})),o.$on("changeMainImg",(function(e){0===t.dataset.length?t.defaultImg():t.getshowimg(t.dataset[e].image_path)})),o.$on("currErrType",(function(e){t.currErrType=e,t.setupMode(t.state)}))},receiveDataSetData:function(t){this.dataset=t,0!==this.dataset.length?this.getshowimg(this.dataset[0].image_path):this.defaultImg()},receiveButtonData:function(t){this.buttonList=t},getshowimg:function(t){var e=this;this.labelData=[];var a=new Image;a.src=t,console.log(t),a.onload=function(n){e.show(t,a.width,a.height,Date.parse(new Date))},a.onerror=function(){e.defaultImg()}},show:function(t,e,a,n){var i=this,r=new D.a.Map("map",{zoom:e+2*a,cx:0,cy:0,zoomMax:100*a,zoomMin:a/100,autoFeatureSelect:!0}),s=new D.a.Layer.Image("img",t,{w:e,h:a},{zIndex:1});r.addLayer(s);var o=new D.a.Layer.Feature("featureLayer",{zIndex:2,transparent:!0});r.addLayer(o);var c=new D.a.Layer.Text("textLayer",{zIndex:2});r.addLayer(c),this.gFeatureLayer=o,this.gTextLayer=c,this.gMap=r,r.setMode("drawRect",this.styleDeclaration()),this.loadAnnotation(t,e,a),r.events.on("geometryDrawDone",(function(t,n){var r=i.currErrType,s=(new Date).getTime(),u=i.styleDeclaration(),l=new D.a.Feature.Rect("feature-".concat(s),n,{errType:r},u),d=new D.a.Text("feature-".concat(s),{pos:{x:n[1].x,y:n[1].y},offset:{x:0,y:0},width:100,text:i.buttonList[i.currErrType].err_list},new D.a.Style({fontColor:"#ffffff",strokeColor:"#0000FF",bgColor:i.buttonList[i.currErrType].color}));o.addFeature(l),c.addText(d),i.dataProcessing(l.id,r,l.points,e,a)})),r.events.on("geometryEditDone",(function(t,n,r){n.update({points:r}),n.show(),i.dataProcessing(n.id,n.data.errType,r,e,a)})),r.events.on("featureStatusReset",(function(){r.mLayer.removeAllMarkers()})),r.events.on("geometryEditing",(function(t,e,a){if(r.mLayer){var n=r.mLayer.getMarkerById("marker-".concat(e.id));if(n){var i=c.getTextById(e.id);i||console.log("text is null");var s=D.a.Util.getBounds(a),o=s[0],u=s[1];n.update({x:o.x,y:o.y}),i.update({pos:{x:u.x,y:u.y}})}}})),r.events.on("featureSelected",(function(t){var e=t,a=e.getBounds(),n=a[0],s=a[1],u=new D.a.Marker("marker-".concat(e.id),{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABDUlEQVQ4T6WTTW7CMBCF3yASLoGcZcItuEdZQttdaZdQqWEBS352/dm29+AWJFI3WL0ECWQqV3Ix2G6rxkt73jfPz2NCzUU19TgBbESYdmSR/gTNo6BfHfi987Ffq7pvgBIT8ADgLZFFzwXRNQxMdCPLgYIQ6CWWu0sT4mtgZXAs5FUiy6GCHPfoKZG7axPsDFELiDCrGOWXK+JFvC3vzq/mfQXDskpqmmyLe1cuXkAehVNmjJTIDO1PDjIRLAG6UUIiNMEY+yCWg1y0nhk8MAV5FMyZ6ZaANJbFxBtiJsJXABeuwky0HgG+Oj+zBskl1h11A+cgbdrNLhqN7m+jrF4HVbW2Rvm/n6r2b/wEyRV8EStP6T4AAAAASUVORK5CYII=",x:n.x,y:n.y,offset:{x:0,y:0},featureId:e.id});r.mLayer.addMarker(u);var l=c.getTextById(t.id);l.update({pos:{x:s.x,y:s.y}});var d=i;u.regEvent("click",(function(){var t=this;o.removeFeatureById(this.info.featureId),r.mLayer.removeMarkerById("marker-"+this.info.featureId),d.gTextLayer.removeTextById(this.info.featureId),console.log(d.labelData,"长度"),0!==d.labelData&&d.labelData.forEach((function(e,a){e.id===t.info.featureId&&(console.log(d.labelData),d.labelData.splice(a,1),console.log(d.labelData))}))}))}))},dataProcessing:function(t,e,a,n,i){var r=parseInt(a[0].x+n/2).toFixed(2),s=(-(a[0].y-i/2)).toFixed(2),o=(a[2].x+n/2).toFixed(2),c=(-(a[2].y-i/2)).toFixed(2);if(r<0&&(r=0),s<0&&(s=0),o<0&&(o=0),c<0&&(c=0),r>n&&(r=n),o>n&&(o=n),s>i&&(s=i),c>i&&(c=i),r>o){var u=r;r=o,o=u,console.log("交换")}if(s>c){var l=s;s=c,c=l}var d={minx:Math.round(r),miny:Math.round(s),maxx:Math.round(o),maxy:Math.round(c)},f=!0;this.labelData.forEach((function(a){a.id===t&&(console.log("修改..."),a.type=e,a.coor=d,f=!1)})),f&&(console.log("新增..."),this.labelData.push({id:t,type:e,coor:d}))},styleDeclaration:function(){return 0===this.buttonList.length?new D.a.Style({strokeColor:"#ff0000"}):new D.a.Style({strokeColor:this.buttonList[this.currErrType].color})},loadAnnotation:function(t,e,a){var n=this;console.log("加载现有标记"),Object(N["e"])({image_id:t}).then((function(i){console.log("加载到的标记数据",i,t),0!==i.data.length&&(n.labelData=[],console.log("加载到的标记数据",i.data),i.data.forEach((function(t,e){t.xmin===t.xmax||t.ymin===t.ymax?console.log("不合格数据"):n.labelData.push({id:"feature-"+e,type:t.flaw_cat,coor:{minx:parseInt(t.xmin),miny:parseInt(t.ymin),maxx:parseInt(t.xmax),maxy:parseInt(t.ymax)}})})),n.coordinateTransformation(e,a))}))},coordinateTransformation:function(t,e){var a=this;this.labelData.forEach((function(n,i){var r=n.type,s=Math.round(n.coor.minx-t/2),o=Math.round(-n.coor.miny+e/2),c=Math.round(n.coor.maxx-t/2),u=Math.round(-n.coor.maxy+e/2);if(s>c){var l=s;s=c,c=l}if(o>u){var d=o;o=u,u=d}var f=[{x:s,y:o},{x:s,y:u},{x:c,y:u},{x:c,y:o}];a.loadLabel(n.id,f,r,t,e)}))},loadLabel:function(t,e,a,n,i){var r=new D.a.Feature.Rect(t,e,{errType:a},new D.a.Style({strokeColor:this.buttonList[a].color}));this.gFeatureLayer.addFeature(r);var s=new D.a.Text(t,{pos:{x:e[1].x,y:e[1].y},offset:{x:0,y:0},width:100,text:void 0===this.buttonList[a]?"未知":this.buttonList[a].err_list},new D.a.Style({fontColor:"#ffffff",strokeColor:"#0000FF",bgColor:this.buttonList[a].color}));this.gTextLayer.addText(s)}}},E=I,T=(a("806b"),Object(f["a"])(E,w,C,!1,null,"7db43549",null)),A=T.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"errType"},[a("div",{staticClass:"top"},[t._v("顶部按钮")]),a("div",{staticClass:"con"},[0!==t.btndataList.length?a("div",[a("div",{staticClass:"con-item",on:{click:function(e){return t.saveOk()}}},[a("div",{staticClass:"ok"},[t._v(" OK ")])]),t._l(t.btndataList,(function(e,n){return a("div",{key:n,class:t.currErr===n?"con-item heightline":"con-item",on:{click:function(e){return t.changeErrType(n)}}},[a("div",{staticClass:"col",style:{background:e.color}}),a("div",[t._v(t._s(e.err_list))])])}))],2):t._e()])])},S=[],j={data:function(){return{btndataList:[],currErr:0}},methods:{receiveButtonData:function(t){this.btndataList=t},changeErrType:function(t){this.currErr=t,o.$emit("currErrType",t)},saveOk:function(){this.$emit("saveok")}}},$=j,M=(a("4815"),Object(f["a"])($,O,S,!1,null,"cd3b627a",null)),F=M.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return 0!==t.datasetList.length?a("div",{staticClass:"header"},[a("el-dropdown",{staticClass:"drp"},[a("span",{staticClass:"el-dropdown-link dropdown"},[t._v(" 当前数据集："+t._s(t.datasetList[t.currDataSet].dataset_name)+" "),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.datasetList,(function(e,n){return a("el-dropdown-item",{key:n,nativeOn:{click:function(e){return t.setCurrentSetData(n)}}},[t._v(t._s(e.dataset_name))])})),1)],1),a("div",{staticClass:"headRight"},[a("span",{staticClass:"progressBar"},[a("el-progress",{staticClass:"bar",attrs:{percentage:parseInt((t.currNo+1)/t.imgList.length*100)?parseInt((t.currNo+1)/t.imgList.length*100):0}})],1),a("span",{staticClass:"percentage"},[t._v(t._s(t.currNo+1)+" / "+t._s(t.imgList.length))]),0!==t.imgList.length?a("span",{staticClass:"imgName"},[t._v(t._s(t.imgList[t.currNo].image_name))]):t._e(),a("span",{staticClass:"statistics"},[a("b",[t._v("OK")]),t._v(":"+t._s(t.statistics.isok)+" "),a("b",[t._v("NG")]),t._v(":"+t._s(t.statistics.isNG)+" "),a("b",{on:{click:function(e){return t.gothis()}}},[t._v("未标注:"+t._s(t.statistics.isNull))])])])],1):t._e()},V=[],R={props:{datasetList:{type:Array,default:function(){return[]}},imgList:{type:Array,default:function(){return[]}},currDataSet:{type:Number,default:0},currNo:{type:Number,default:0}},data:function(){return{statistics:{isok:0,isNG:0,isNull:0,nolabel:[]}}},methods:{setCurrentSetData:function(t){this.$emit("changeCurrDataSet",t)},receiveDataSetData:function(t){var e=0,a=0,n=0,i=[];t.forEach((function(t,r){"0"===t.bom_id?a++:"1"===t.bom_id?e++:(n++,i.push(r))})),this.statistics.isok=e,this.statistics.isNG=a,this.statistics.isNull=n,this.statistics.nolabel=i},gothis:function(){0!==this.statistics.nolabel.length?o.$emit("gothis",this.statistics.nolabel[0]):console.log("提示当前已经全部标注完成了")}}},G=R,K=(a("f451"),Object(f["a"])(G,B,V,!1,null,"d33a8a0c",null)),U=K.exports,z=a("712e"),H={components:{Silder:m,Thumbnail:_,Viewmain:A,ErrTypelist:F,Header:U},data:function(){return{currNo:0,currDataSet:0,imgList:[],datasetList:[]}},created:function(){document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)},destroyed:function(){document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)},mounted:function(){this.init()},methods:{init:function(){this.getDataSetList()},getDataSetList:function(){var t=this;Object(N["b"])().then(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.datasetList=a.data,0!==a.data.length&&(t.getCurrentDatasetInfo(a.data[t.currDataSet].dataset_id),t.getButtonList(a.data[t.currDataSet].dataset_id));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},getCurrentDatasetInfo:function(t){var e=this;Object(N["d"])({dataset_id:t}).then((function(t){e.imgList=t.data,e.$refs.Viewmain.receiveDataSetData(t.data),e.$refs.Thumbnail.receiveDataSetData(t.data),e.$refs.Header.receiveDataSetData(t.data)}))},getButtonList:function(t){var e=this;Object(N["c"])({dataset_id:t}).then((function(t){e.$refs.ErrTypelist.receiveButtonData(t.data),e.$refs.Viewmain.receiveButtonData(t.data)}))},changeno:function(t){this.currNo=t},changeCurrDataSet:function(t){this.currDataSet=t,this.init(),this.currNo=0},save:function(t){"1"===this.imgList[this.currNo].bom_id?0!==this.$refs.Viewmain.labelData.length?(this.updata("0",this.$refs.Viewmain.labelData),console.log("ok改ng")):(console.log("OK"),this.updata("1",[])):0!==this.$refs.Viewmain.labelData.length?this.updata("0",this.$refs.Viewmain.labelData):this.updata("3",this.$refs.Viewmain.labelData)},saveok:function(){this.updata("1",[])},clearlabel:function(){this.updata("2",[])},updata:function(t,e){var a=this;console.log(this.imgList[this.currNo].image_path,"保存数据的id"),Object(z["j"])({bom_id:t,user_id:this.name,dataset_id:this.datasetList[this.currDataSet].dataset_id,img_id:this.imgList[this.currNo].image_path,label_info:e}).then((function(e){a.$refs.Thumbnail.updata(a.currNo,t),a.imgList[a.currNo].bom_id=t,a.$refs.Header.receiveDataSetData(a.imgList),a.$message({message:"保存成功",type:"success",duration:800}),"2"===t?(a.$refs.Viewmain.labelData=[],o.$emit("changeMainImg",a.currNo)):a.$refs.Thumbnail.right()})).catch((function(t){console.log(t)}))},handleKeyDown:function(t){},handleKeyUp:function(t){var e=window.event.keyCode?window.event.keyCode:window.event.which;13===e?this.save():39===e?this.$refs.Thumbnail.right():37===e&&this.$refs.Thumbnail.left(),t.preventDefault()},butKeyDown:function(t,e,a){t.preventDefault()}}},P=H,W=(a("27bd"),Object(f["a"])(P,n,i,!1,null,"36bc5cfc",null));e["default"]=W.exports},cb66:function(t,e,a){"use strict";a("1ac6")},d655:function(t,e,a){},ee78:function(t,e,a){},f451:function(t,e,a){"use strict";a("bae3")}}]);