(function(t){function e(e){for(var s,o,r=e[0],c=e[1],u=e[2],d=0,h=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&h.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(h.length)h.shift()();return a.push.apply(a,u||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],s=!0,r=1;r<i.length;r++){var c=i[r];0!==n[c]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=i[0]))}return t}var s={},n={app:0},a=[];function o(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=s,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(i,s,function(e){return t[e]}.bind(null,s));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-mall-app/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"093a":function(t,e,i){"use strict";i("c44e")},2646:function(t,e,i){"use strict";i("7fc8")},"2dfe":function(t,e,i){"use strict";i("93a8")},3636:function(t,e,i){},"37a8":function(t,e,i){},"56a4":function(t,e,i){"use strict";i("6108")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),n=i("2241"),a=i("d399"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("transition",{attrs:{name:t.transitionName,mode:t.$router.back?"out-in":"in-out"}},[i("router-view",{staticClass:"view"})],1)],1)},r=[],c=(i("b0c0"),{name:"app",created:function(){var t=JSON.parse(localStorage.getItem("goods"))||{};this.$store.commit("setCounterMap",t)},data:function(){return{transitionName:"slide-left"}},watch:{$route:function(t,e){"classify"===t.name&&"search"===e.name&&(this.$router.back=!0),this.$router.back?this.transitionName="slide-right":this.transitionName="slide-left",this.$router.back=!1}}}),u=c,l=(i("034f"),i("2877")),d=Object(l["a"])(u,o,r,!1,null,null,null),h=d.exports,p=i("8c4f"),f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"classify-wrapper"},[i("router-link",{staticClass:"search-btn",attrs:{to:"/search",tag:"div"}},[i("van-icon",{attrs:{name:"search"}}),i("div",{staticClass:"search-value"},[t._v(t._s(t.place))])],1),i("Tabs",{on:{handlerChange:t.getSide}}),t.show?i("div",{staticClass:"classify-content"},[i("side-bar",{ref:"nb",attrs:{menuList:t.sideList}}),t.listShow?i("List",{on:{turnNext:t.nextSibling}}):t._e()],1):i("van-loading",{staticClass:"center",attrs:{size:"1.3rem",color:"pink"}})],1)},g=[],m=i("5530"),v=i("1da1"),b=(i("96cf"),i("2f62")),y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"scroll",staticClass:"tab-wrapper",on:{touchend:t.scrollTo,touchstart:function(e){t.move=!1},touchmove:function(e){t.move=!0}}},t._l(t.menuList,(function(e,s){return i("div",{key:e.title,staticClass:"tab-item",class:{active:s==t.index},attrs:{"data-id":s}},[i("div",{staticClass:"img-box"},[i("img",{attrs:{src:e.imgURL}})]),i("div",{staticClass:"title-box"},[t._v(t._s(e.title))])])})),0)},L=[],j={data:function(){return{index:0,move:!1,menuList:[{title:"时令水果",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg"},{title:"酒水冲调",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/酒水冲调.jpg"},{title:"安心乳品",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/安心乳品.jpg"},{title:"休闲零食",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/休闲零食.jpg"},{title:"肉蛋食材",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/肉蛋食材.jpg"},{title:"新鲜蔬菜",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/新鲜食材.jpg"},{title:"熟食餐饮",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/熟食餐饮.jpg"},{title:"海鲜水产",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/海鲜水产.jpg"},{title:"粮油调味",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/粮油调味.jpg"},{title:"某手美食",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/某手美食.jpg"},{title:"纸杯清洁",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/纸品清洁.jpg"},{title:"个人护理",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/个人护理.jpg"},{title:"美妆护肤",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/美妆护肤.jpg"},{title:"家居收纳",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/家居收纳.jpg"},{title:"家用电器",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/家用电器.jpg"},{title:"3C数码",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/3C数码.jpg"},{title:"母婴用品",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/母婴用品.jpg"},{title:"鲜花绿植",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/鲜花绿植.jpg"},{title:"宠物用品",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/宠物用品.jpg"},{title:"图书玩具",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/图书文具.jpg"},{title:"手表配饰",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg"}]}},methods:{scrollTo:function(t){if(!this.move){this.$store.commit("resetGoodsList"),t.target.dataset.id?this.index=t.target.dataset.id:t.target.parentElement.dataset.id?this.index=t.target.parentElement.dataset.id:this.index=t.target.parentElement.parentElement.dataset.id,this.$emit("handlerChange",this.menuList[this.index].title);var e=t.target.getBoundingClientRect().left,i=t.target.offsetWidth,s=this.$refs.scroll.clientWidth,n=e-s/2+i/2;this.moveScroll(this.$refs.scroll.scrollLeft,n)}},moveScroll:function(t,e){var i=this,s=0,n=5;e<0&&(n*=-1);var a=setInterval((function(){s+=n,i.$refs.scroll.scrollLeft=t+s,Math.abs(s)>=Math.abs(e)&&(i.$refs.scroll.scrollLeft=t+e,clearInterval(a))}),2)}}},k=j,O=(i("790d"),Object(l["a"])(k,y,L,!1,null,"6c4179a3",null)),w=O.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"side",staticClass:"side-bar-wrapper",on:{touchstart:function(e){t.move=!1},touchmove:function(e){t.move=!0},touchend:t.scrollTo}},t._l(t.list,(function(e,s){return i("div",{key:e,class:{active:t.value==e},attrs:{"data-item":e},on:{touchend:function(i){return t.getValue(e)}}},[t._v(" "+t._s(0==s?"全部":e)+" ")])})),0)},_=[],C=i("3835"),$={data:function(){return{move:!1,value:"",nextSibling:null,list:[],over:!1}},props:{menuList:{type:Array,default:function(){return[]}}},methods:Object(m["a"])(Object(m["a"])(Object(m["a"])({},Object(b["c"])(["resetGoodsList","changeOver"])),Object(b["b"])(["getGoodsList"])),{},{scrollTo:function(t){if(!this.move){this.resetGoodsList(),this.nextSibling=t.target.nextElementSibling;var e=t.target.getBoundingClientRect().top,i=this.$refs.side.offsetTop,s=this.$refs.side.offsetHeight/2;this.moveScroll(this.$refs.side.scrollTop,s-(e-i))}},getValue:function(t){this.move||(this.value=t,this.getGoodsList({type:t,page:1}))},moveScroll:function(t,e){var i=this;if(this.move)this.move=!1;else{var s=0,n=5;e>0&&(n*=-1);var a=setInterval((function(){s+=n,i.$refs.side.scrollTop=t+s,Math.abs(s)>=Math.abs(e)&&(i.$refs.side.scrollTop=t-e,clearInterval(a))}),2)}},nb:function(){var t=null;if(this.nextSibling)t=this.nextSibling;else if(!1===this.over){var e=Object(C["a"])(this.$refs.side.children,2);t=e[1],this.over=!0}if(t){var i=t.dataset.item;this.getValue(i),this.scrollTo({target:t})}}}),created:function(){this.list=this.menuList;var t=Object(C["a"])(this.list,1);this.value=t[0]},watch:{menuList:function(){this.list=this.menuList;var t=Object(C["a"])(this.menuList,1);this.value=t[0]},nextSibling:function(){null===this.nextSibling?this.changeOver(!0):this.changeOver(!1)}}},S=$,T=(i("9a64"),Object(l["a"])(S,x,_,!1,null,"3b6d1736",null)),M=T.exports,R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list-wrapper",on:{touchstart:function(e){t.disB=0},touchmove:t.up,touchend:t.end}},[i("div",{staticClass:"list-header"},[i("div",{class:{active:"all"===t.type},on:{touchend:function(e){return t.changeType("all")}}},[t._v("综合")]),i("div",{class:{active:"sale"===t.type},on:{touchend:function(e){return t.changeType("sale")}}},[t._v("销量")]),i("div",{staticClass:"price",class:{"price-up":"price-up"===t.type,"price-down":"price-down"===t.type},on:{touchend:function(e){return t.changeType("price")}}},[t._v(" 价格 ")])]),t.showLoading?i("van-loading",{staticClass:"center",attrs:{size:"1rem",vertical:"",color:"pink"}}):i("div",{ref:"list",staticClass:"list-content",style:{transform:"translateY(-"+this.disB+"px)"}},[i("van-pull-refresh",{attrs:{"head-height":"80"},on:{refresh:t.onRefresh},model:{value:t.isLoad,callback:function(e){t.isLoad=e},expression:"isLoad"}},[i("van-list",{attrs:{finished:t.finished,"finished-text":t.msg},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(e,s){return i("Card",{key:s,attrs:{id:e.id,title:e.title,desc:e.desc,priceOff:e.priceOff,price:e.price,thumb:e.images[0],num:t.counterMap[e.id],tags:e.tags,fly:!0,sellOut:e.sellOut},on:{changeHandler:t.addCounter}})})),1)],1)],1)],1)},G=[],B=(i("4e82"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card van-hairline--bottom"},[i("div",{staticClass:"card-img"},[i("img",{ref:"img",attrs:{src:t.thumb}})]),i("div",{staticClass:"card-content"},[i("div",{staticClass:"overflow-hidden title"},[t._v(t._s(t.title))]),i("div",{staticClass:"overflow-hidden desc"},[t._v(t._s(t.desc))]),i("div",{staticClass:"overflow-hidden tags"},t._l(t.tags,(function(e){return i("div",{key:e},[t._v(t._s(e))])})),0),i("div",{staticClass:"overflow-hidden prices"},[i("div",{staticClass:"price-off"},[t._v("￥"+t._s(t.priceOff||t.price))]),t.priceOff?i("div",{staticClass:"price"},[t._v("￥"+t._s(t.price))]):t._e()]),t.sellOut?i("div",{staticClass:"smaller"},[t._v("找相似")]):i("div",{staticClass:"counter"},[t.num?i("div",{on:{click:function(e){return t.$emit("changeHandler",t.id,-1)}}},[i("img",{attrs:{src:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/rec.png"}})]):t._e(),t.num?i("div",{staticClass:"num"},[t._v(t._s(t.num))]):t._e(),i("div",{on:{click:t.add}},[i("img",{attrs:{src:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/add.png"}})])])])])}),U=[],E=i("2909"),I=(i("99af"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.exist?i("div",{staticClass:"item",style:{transform:"translate("+t.moveX+"px,"+t.moveY+"px) scale("+t.sx+","+t.sy+")",opacity:t.opacity,width:t.width,height:t.height}},[i("img",{attrs:{src:t.src}})]):t._e()}),P=[],Y={},H=Y,N=(i("609a"),Object(l["a"])(H,I,P,!1,null,"b23a3f7a",null)),D=N.exports,z=s["a"].extend(D);function A(t){var e=t.startX,i=t.startY,s=t.endX,n=t.endY,a=t.src,o=t.width,r=t.height,c=new z({el:document.createElement("div"),data:function(){return{moveX:e,moveY:i,sx:1,sy:1,opacity:1,exist:!0,src:a,width:o,height:r}}});document.body.appendChild(c.$el),setTimeout((function(){c.moveX=s,c.moveY=n,c.sx=.1,c.sy=.1,c.opacity=0}),0),setTimeout((function(){c.exist=!1}),1e3)}var X={data:function(){return{showMoveDot:[],elLeft:0,elTop:0,x:0,y:0}},props:["price","priceOff","title","tags","desc","num","thumb","id","fly","sellOut"],methods:{add:function(){this.fly&&(this.showMoveDot=[].concat(Object(E["a"])(this.showMoveDot),[!0])),this.$emit("changeHandler",this.id,1);var t=this.$refs.img.getBoundingClientRect(),e=t.top,i=t.left,s=document.getElementById("shop-car").getBoundingClientRect(),n=s.left,a=s.top,o=getComputedStyle(this.$refs.img,null),r=o.width,c=o.height;A({startX:i,startY:e,endX:n,endY:a,src:this.$refs.img.src,width:r,height:c})}}},J=X,V=(i("ec15"),Object(l["a"])(J,B,U,!1,null,"56375c6a",null)),W=V.exports,K={components:{Card:W},data:function(){return{showLoading:!1,type:"all",isLoad:!1,finished:!1,loading:!1,disB:0,pageY:0,msg:"上拉查看下一分类",nowPage:1,moveX:2,moveY:1}},methods:Object(m["a"])(Object(m["a"])(Object(m["a"])({},Object(b["b"])(["getGoodsList"])),Object(b["c"])(["resetList","sortGoodsList","storageChange"])),{},{addCounter:function(t,e){this.storageChange({id:t,value:e})},onLoad:function(){var t=this;this.finished||(this.nowPage+=1,this.getGoodsList({type:this.goodsType,page:this.nowPage}).then((function(){t.loading=!1,t.showLoading=!1,t.list.length>=t.total&&(t.finished=!0)})))},changeType:function(t){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return"price"===t?"price-up"===e.type?e.type="price-down":e.type="price-up":e.type=t,e.sortGoodsList(e.type),e.resetList(),e.showLoading=!0,e.nowPage=1,i.next=7,e.getGoodsList({type:e.goodsType,page:e.nowPage});case 7:e.finished=!1,e.isloading=!1,e.list.sort(),e.isLoad=!1,e.showLoading=!1;case 12:case"end":return i.stop()}}),i)})))()},onRefresh:function(){var t=this;this.nowPage=0,this.showLoading=!0,this.resetList(),setTimeout((function(){t.finished=!1,t.isloading=!1,t.isLoad=!1,t.onLoad()}),300)},up:function(t){if(!this.over){var e=this.$refs.wrapper,i=5;parseInt(e.scrollHeight-e.scrollTop,10)<=e.clientHeight&&(i=t.touches[0].pageY>this.pageY?-5:5,this.pageY=t.touches[0].pageY,this.disB+=i,this.disB>=150&&(this.disB=150),this.disB>=90?this.msg="释放查看下一分类":this.msg="上拉查看下一分类",this.disB<=0&&(this.disB=0))}},end:function(){if(!this.over){var t=this.$refs.list;t&&(this.disB>100&&this.$emit("turnNext"),this.disB=0,this.msg="上拉查看下一分类")}}}),computed:Object(m["a"])({},Object(b["d"])({counterMap:function(t){return t.counterMap},list:function(t){return t.goodsList},total:function(t){return t.goodsTotal},goodsType:function(t){return t.goodsType},over:function(t){return t.over}})),watch:{goodsType:function(){this.finished=!1,this.nowPage=1},over:function(){this.over?this.msg="没有了":this.msg="上拉查看下一分类"}}},q=K,F=(i("2646"),Object(l["a"])(q,R,G,!1,null,"cb06243a",null)),Q=F.exports,Z={created:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.resetList(),e.next=3,t.getSideList(t.value);case 3:t.listShow=!0;case 4:case"end":return e.stop()}}),e)})))()},data:function(){return{value:"时令水果",listShow:!1,show:!0,place:"荔枝水果9.99",activeKey:""}},computed:Object(m["a"])({},Object(b["d"])({sideList:function(t){return t.sideList}})),components:{Tabs:w,sideBar:M,List:Q},methods:Object(m["a"])(Object(m["a"])(Object(m["a"])({},Object(b["b"])(["getSideList"])),Object(b["c"])(["resetList"])),{},{getSide:function(t){var e=this;this.show=!1,this.getSideList(t).then((function(){setTimeout((function(){e.show=!0}),500)}))},nextSibling:function(){this.$refs.nb.nb()}}),mounted:function(){}},tt=Z,et=(i("093a"),Object(l["a"])(tt,f,g,!1,null,"a5eb44ee",null)),it=et.exports,st=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search-wrapper"},[i("div",{staticClass:"search-head"},[i("van-icon",{staticClass:"arr-left",attrs:{name:"arrow-left"},on:{click:function(e){return t.$router.goBack()}}}),i("van-search",{staticClass:"search-content",attrs:{"show-action":"",placeholder:t.place,autofocus:""},on:{search:t.onSearch,input:t.input,focus:t.focus},scopedSlots:t._u([t.showList?{key:"action",fn:function(){return[i("div",{on:{click:function(e){return t.onSearch(t.value)}}},[t._v("搜索")])]},proxy:!0}:{key:"action",fn:function(){return[i("router-link",{staticClass:"shop-car",attrs:{tag:"div",id:"shop-car",to:"/home/shopping"}},[i("van-icon",{attrs:{name:"shopping-cart-o",badge:t.badge}})],1)]},proxy:!0}],null,!0),model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),t.likeList.length&&t.showList?i("div",{staticClass:"like-search"},[i("van-list",t._l(t.likeList,(function(e){return i("van-cell",{key:e,attrs:{title:e},on:{click:function(i){return t.onSearch(e)}},scopedSlots:t._u([{key:"title",fn:function(){return[i("span",{staticClass:"custom-title",domProps:{innerHTML:t._s(t.formatHTML(e))}})]},proxy:!0}],null,!0)})})),1)],1):t._e(),t.showList?t._e():i("div",{staticClass:"goods-card"},[i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(e,s){return i("Card",{key:s,attrs:{id:e.id,title:e.title,desc:e.desc,priceOff:e.priceOff,price:e.price,thumb:e.images[0],num:t.counterMap[e.id],tags:e.tags},on:{changeHandler:t.addCounter}})})),1)],1),t.likeList.length<=0&&t.showList?i("div",{staticClass:"history"},[i("History",{attrs:{searchList:t.searchList},on:{search:t.onSearch}})],1):t._e()])},nt=[],at=(i("7db0"),i("4d63"),i("ac1f"),i("25f0"),i("5319"),i("9767"),i("07ac"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"history"},[i("h4",[t._v("历史记录：")]),t._l(t.searchList,(function(e){return i("div",{key:e.time,staticClass:"his-item",on:{click:function(i){return t.search(e.value)}}},[t._v(" "+t._s(e.value)+" ")])}))],2)}),ot=[],rt={props:{searchList:{default:function(){return[]}}},methods:{search:function(t){this.$emit("search",t)}}},ct=rt,ut=(i("2dfe"),Object(l["a"])(ct,at,ot,!1,null,"26e5ab2b",null)),lt=ut.exports,dt={components:{Card:W,History:lt},data:function(){return{timer:null,searchList:[],loading:!1,finished:!1,value:"",length:0,place:"芒果10块2斤",likeList:[],showList:!0,list:[],page:1,size:7}},methods:Object(m["a"])(Object(m["a"])({},Object(b["c"])(["storageChange"])),{},{addCounter:function(t,e){this.storageChange({id:t,value:e})},onSearch:function(t){var e=this;t&&(this.value=t),this.finished=!1,this.likeList=[],""===this.value&&(this.value=this.place);var i=this.searchList.find((function(t){return t.value===e.value}));i?(i.time=(new Date).getTime(),this.searchList.sort((function(t,e){return e.time-t.time}))):(this.searchList.unshift({value:this.value,time:(new Date).getTime()}),this.searchList.length>=11&&this.searchList.pop()),localStorage.setItem("searchList",JSON.stringify(this.searchList)),this.list=[],this.page=1,this.$api.Search(this.value,this.page,this.size).then((function(t){e.length=t.data.total,e.list=[].concat(Object(E["a"])(e.list),Object(E["a"])(t.data.list)),e.showList=!1}))},onLoad:function(){var t=this;this.page+=1,this.$api.Search(this.value,this.page,this.size).then((function(e){t.length=e.data.total,t.list=[].concat(Object(E["a"])(t.list),Object(E["a"])(e.data.list)),t.loading=!1,t.list.length>=t.length&&(t.finished=!0)}))},input:function(){var t=this;if(""===this.value)return this.likeList=[],clearInterval(this.timer),void(this.timer=null);this.timer?(clearInterval(this.timer),this.timer=null):this.timer=setTimeout((function(){t.$api.likeSearch(t.value).then((function(e){t.likeList=e.data.result,clearInterval(t.timer),t.timer=null}))}),300)},formatHTML:function(t){var e=new RegExp(this.value,"g");return t.replace(e,this.value.fontcolor("red"))},focus:function(){this.showList=!0}}),computed:Object(m["a"])(Object(m["a"])({},Object(b["d"])({counterMap:function(t){return t.counterMap}})),{},{badge:function(){var t=Object.values(this.counterMap).reduce((function(t,e){return t+e}),0);return t>99?"99+":t}}),created:function(){this.searchList=JSON.parse(localStorage.getItem("searchList"))||[]}},ht=dt,pt=(i("9ed0"),Object(l["a"])(ht,st,nt,!1,null,null,null)),ft=pt.exports,gt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home-wrapper"},[i("router-view"),i("tab-bar")],1)},mt=[],vt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("van-tabbar",{attrs:{route:"",fixed:""}},[i("van-tabbar-item",{attrs:{name:"home",icon:"home-o",to:"/"}},[t._v("首页")]),i("van-tabbar-item",{attrs:{name:"search",icon:"apps-o",to:"/home/classify"}},[t._v("分类")]),i("van-tabbar-item",{attrs:{name:"friends",icon:"cart-o",to:"/home/shopping",id:"shop-car",badge:t.badge}},[t._v("购物车")]),i("van-tabbar-item",{attrs:{name:"setting",icon:"user-circle-o",to:"/other"}},[t._v("我的")])],1)},bt=[],yt={data:function(){return{active:"home"}},computed:Object(m["a"])(Object(m["a"])({},Object(b["d"])({counterMap:function(t){return t.counterMap}})),{},{badge:function(){var t=Object.values(this.counterMap).reduce((function(t,e){return t+e}),0);return t>99?"99+":t}})},Lt=yt,jt=Object(l["a"])(Lt,vt,bt,!1,null,"660c8dce",null),kt=jt.exports,Ot={components:{tabBar:kt}},wt=Ot,xt=Object(l["a"])(wt,gt,mt,!1,null,null,null),_t=xt.exports,Ct=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shopping"},[i("div",{staticClass:"top-nav"},[i("van-nav-bar",{attrs:{title:"购物车","right-text":"删除"},on:{"click-right":t.del}})],1),0!==this.list.length?i("div",{staticClass:"card-list"},[i("van-checkbox-group",{ref:"checkboxGroup",model:{value:t.result,callback:function(e){t.result=e},expression:"result"}},t._l(t.list,(function(e){return i("div",{key:e.id,staticClass:"card-box"},[i("van-checkbox",{staticClass:"check",attrs:{name:e.id}}),i("Card",{attrs:{id:e.id,title:e.title,desc:e.desc,priceOff:e.priceOff,price:e.price,thumb:e.images[0],num:t.counterMap[e.id],tags:e.tags},on:{changeHandler:t.addCounter}})],1)})),0)],1):i("div",{staticClass:"card-none"},[i("img",{attrs:{src:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/shopping_bg.jpg",alt:""}})]),i("van-submit-bar",{attrs:{price:t.allMoney,"button-text":"去结算("+t.totalNum+")"},on:{submit:t.onSubmit}},[i("van-checkbox",{on:{click:t.checkAll},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("全选")])],1)],1)},$t=[],St=(i("4de4"),i("159b"),i("c740"),i("a434"),i("b64b"),i("a15b"),i("caad"),i("2532"),{data:function(){return{checked:!1,result:[],list:[]}},components:{Card:W},methods:Object(m["a"])(Object(m["a"])({},Object(b["c"])(["storageChange"])),{},{checkAll:function(){if(!this.$refs.checkboxGroup)return this.$Toast("购物车没有任何有效商品"),void(this.checked=!1);this.checked?this.$refs.checkboxGroup.toggleAll(!0):this.$refs.checkboxGroup.toggleAll(!1)},addCounter:function(t,e){var i=this;return Object(v["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(s.prev=0,1!==i.counterMap[t]||-1!==e){s.next=5;break}return s.next=4,i.$Dialog.confirm({message:"您是否要删除已选中商品"});case 4:i.list=i.list.filter((function(e){return e.id!==t}));case 5:i.storageChange({id:t,value:e}),s.next=10;break;case 8:s.prev=8,s.t0=s["catch"](0);case 10:case"end":return s.stop()}}),s,null,[[0,8]])})))()},del:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0!==t.result.length){e.next=3;break}return t.$Toast("你没有选中商品"),e.abrupt("return");case 3:return e.prev=3,e.next=6,t.$Dialog.confirm({message:"您是否要删除已选中商品"});case 6:t.result.forEach((function(e){t.storageChange({id:e,value:-1})})),t.list=t.list.filter((function(e){var i=t.result.findIndex((function(t){return t===e.id}));return-1===i||(t.result.splice(i,1),!1)})),0===t.list.length&&(t.checked=!1),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](3),t.$Toast("用户点击了取消");case 14:case"end":return e.stop()}}),e,null,[[3,11]])})))()},onSubmit:function(){},getAllData:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){var i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=Object.keys(t.counterMap),e.next=3,t.$api.getGoodsByIds(i.join());case 3:s=e.sent,t.list=s.data.list,t.$nextTick((function(){t.$refs.checkboxGroup&&t.$refs.checkboxGroup.toggleAll(!0)}));case 6:case"end":return e.stop()}}),e)})))()}}),watch:{counterMap:function(){},result:function(){this.result.length===this.list.length?this.checked=!0:this.checked=!1}},computed:Object(m["a"])(Object(m["a"])({},Object(b["d"])({counterMap:function(t){return t.counterMap}})),{},{totalNum:function(){var t=this,e=this.list.filter((function(e){return t.result.includes(e.id)})),i=e.reduce((function(e,i){return e+(t.counterMap[i.id]||0)}),0);return i},allMoney:function(){var t=this,e=this.list.filter((function(e){return t.result.includes(e.id)}));return e.reduce((function(e,i){var s=t.counterMap[i.id]||0;return Math.round(s*i.price*100)+e}),0)}}),created:function(){this.getAllData()}}),Tt=St,Mt=(i("56a4"),i("7aec"),Object(l["a"])(Tt,Ct,$t,!1,null,"df9765f2",null)),Rt=Mt.exports;p["a"].prototype.back=!1,p["a"].prototype.goBack=function(){this.back=!0,this.go(-1)},s["a"].use(p["a"]);var Gt=[{path:"*",redirect:"/home/classify"},{path:"/search",name:"search",component:ft},{path:"/home",component:_t,children:[{path:"classify",name:"classify",component:it},{path:"shopping",name:"shopping",component:Rt}]}],Bt=new p["a"]({mode:"hash",base:"/vue-mall-app/",routes:Gt}),Ut=Bt,Et=(i("841c"),i("bc3a")),It=i.n(Et),Pt={likeSearch:"/likeSearch",getSide:"/getsidebar",getGoodsList:"/getGoodsList",search:"/search",getGoodsByIds:"/getGoodsByIds"},Yt="https://mallapi.duyiedu.com/goods/",Ht=Yt,Nt="dd_1597654682810",Dt=It.a.create({baseURL:Ht,params:{appkey:Nt}}),zt=function(t){return Dt.get(Pt.likeSearch,{params:{likeValue:t}})},At=function(t){return Dt.get(Pt.getSide,{params:{type:t}})},Xt=function(t,e,i){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"all";return Dt.get(Pt.getGoodsList,{params:{type:t,page:e,size:i,sort:s}})},Jt=function(t,e,i){return Dt.get(Pt.search,{params:{type:t,page:e,size:i}})},Vt=function(t){return Dt.get(Pt.getGoodsByIds,{params:{value:t}})},Wt={likeSearch:zt,getSideList:At,getGoodsList:Xt,Search:Jt,getGoodsByIds:Vt};s["a"].use(b["a"]);var Kt=new b["a"].Store({state:{sideList:[],goodsList:[],goodsTotal:0,goodsType:"",counterMap:{},size:7,sortType:"all",over:!1},mutations:{changeOver:function(t,e){t.over=e},sortGoodsList:function(t,e){t.sortType=e},setCounterMap:function(t,e){t.counterMap=e},setSideList:function(t,e){t.sideList=e},setGoodsList:function(t,e){t.goodsList=[].concat(Object(E["a"])(t.goodsList),Object(E["a"])(e.list)),t.goodsTotal=e.total},resetGoodsList:function(t){t.goodsList=[]},setGoodsType:function(t,e){t.goodsType=e},resetList:function(t){t.goodsList=[]},storageChange:function(t,e){var i=e.id,n=e.value;t.counterMap[i]?1===t.counterMap[i]&&-1===n?s["a"].delete(t.counterMap,i):s["a"].set(t.counterMap,i,t.counterMap[i]+n):s["a"].set(t.counterMap,i,1),localStorage.setItem("goods",JSON.stringify(t.counterMap))}},actions:{getSideList:function(t,e){var i=t.commit,s=t.dispatch;return Wt.getSideList(e).then((function(t){i("setSideList",t.data),i("setGoodsType",t.data[0]),s("getGoodsList",{type:t.data[0],page:1})}))},getGoodsList:function(t,e){var i=t.commit,s=t.state,n=e.type||s.goodsType,a=e.page;return Wt.getGoodsList(n,a,s.size,s.sortType).then((function(t){i("setGoodsList",t.data),i("setGoodsType",n)}))}},modules:{}}),qt=(i("499a"),i("b970"));i("157a");s["a"].use(qt["a"]),s["a"].prototype.$api=Wt,s["a"].prototype.$Dialog=n["a"],s["a"].prototype.$Toast=a["a"],s["a"].prototype.$animate=A,s["a"].config.productionTip=!1,new s["a"]({router:Ut,store:Kt,render:function(t){return t(h)}}).$mount("#app")},"609a":function(t,e,i){"use strict";i("37a8")},6108:function(t,e,i){},"66b7":function(t,e,i){},"790d":function(t,e,i){"use strict";i("ba42")},"7aec":function(t,e,i){"use strict";i("3636")},"7fc8":function(t,e,i){},"85ec":function(t,e,i){},"93a8":function(t,e,i){},"9a64":function(t,e,i){"use strict";i("66b7")},"9ed0":function(t,e,i){"use strict";i("c6f7")},b752:function(t,e,i){},ba42:function(t,e,i){},c44e:function(t,e,i){},c6f7:function(t,e,i){},ec15:function(t,e,i){"use strict";i("b752")}});
//# sourceMappingURL=app.95e51181.js.map