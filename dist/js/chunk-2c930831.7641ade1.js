(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c930831"],{"064a":function(t,e,n){"use strict";n("663a")},"0693":function(t,e,n){"use strict";n("cdf1")},1388:function(t,e,n){},"28ac":function(t,e,n){t.exports=n.p+"img/recom3.4b4ab39b.png"},"33e1":function(t,e,n){"use strict";n("974f")},"373e":function(t,e,n){t.exports=n.p+"img/recom1.609f246a.png"},"4e7c":function(t,e,n){"use strict";n("99bb")},"5cbe":function(t,e,n){t.exports=n.p+"img/recommend_bg.794b6628.jpg"},"663a":function(t,e,n){},"684a":function(t,e,n){t.exports=n.p+"img/top.faefff2d.png"},"6d71":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goods"},t._l(t.goods,(function(t,e){return n("goods-list-item",{key:e,attrs:{goodsItem:t}})})),1)},i=[],r=n("9977"),o={components:{GoodsListItem:r["a"]},props:{goods:{type:Array,default(){return[]}}}},a=o,c=(n("8a4a"),n("2877")),l=Object(c["a"])(a,s,i,!1,null,null,null);e["a"]=l.exports},"80f4":function(t,e,n){"use strict";n("1388")},8758:function(t,e,n){"use strict";n("d894")},"8a4a":function(t,e,n){"use strict";n("adf1")},"90b9":function(t,e,n){"use strict";function s(t,e){let n=null;return function(...s){n&&clearTimeout(n),n=setTimeout(()=>{t.apply(this,s)},e)}}function i(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));let n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(let s in n)if(new RegExp(`(${s})`).test(e)){let t=n[s]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?t:r(t))}return e}function r(t){return("00"+t).substr(t.length)}n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return i}))},"974f":function(t,e,n){},"99bb":function(t,e,n){},"9bd0":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-control"},t._l(t.titles,(function(e,s){return n("div",{key:s,staticClass:"tab-control-item",class:{active:s===t.currentIndex},on:{click:function(e){return t.itemClick(s)}}},[n("span",[t._v(t._s(e))])])})),0)},i=[],r={props:{titles:{type:Array,default(){return[]}}},data(){return{currentIndex:0}},methods:{itemClick(t){this.currentIndex=t,this.$emit("tabIndex",t)}}},o=r,a=(n("4e7c"),n("2877")),c=Object(a["a"])(o,s,i,!1,null,null,null);e["a"]=c.exports},a2ab:function(t,e,n){t.exports=n.p+"img/recom0.d2a9c076.png"},adf1:function(t,e,n){},b3d7:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("nav-bar",{staticClass:"home-nav"},[n("div",{attrs:{slot:"center"},slot:"center"},[t._v("美丽街")])]),n("tab-control",{directives:[{name:"show",rawName:"v-show",value:t.isTabFixed,expression:"isTabFixed"}],ref:"tabControls",staticClass:"tab-control",attrs:{titles:["流行","新款","精选"]},on:{tabIndex:t.tabIndex}}),n("scroll",{ref:"thisscroll",staticClass:"content",attrs:{"pull-up-load":!0},on:{scroll:t.contentScroll,pullingUp:t.loadMore}},[n("home-swiper",{attrs:{banner:t.banner},on:{"~swiperLoad":function(e){return t.swiperLoad.apply(null,arguments)}}}),n("recommend-view",{attrs:{recommend:t.recommend}}),n("feature-view"),n("tab-control",{ref:"tabControl",attrs:{titles:["流行","新款","精选"]},on:{tabIndex:t.tabIndex}}),n("goods-list",{attrs:{goods:t.showGoods}})],1),n("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],nativeOn:{click:function(e){return t.backClick.apply(null,arguments)}}})],1)},i=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("swiper",[t.banner[0]?s("swiper-item",[s("a",{attrs:{href:t.banner[0].link}},[s("img",{attrs:{src:n("d464"),alt:""},on:{load:t.imageLoad}})])]):t._e(),t.banner[1]?s("swiper-item",[s("a",{attrs:{href:t.banner[1].link}},[s("img",{attrs:{src:t.banner[1].image,alt:""},on:{load:t.imageLoad}})])]):t._e(),t.banner[2]?s("swiper-item",[s("a",{attrs:{href:t.banner[2].link}},[s("img",{attrs:{src:t.banner[2].image,alt:""},on:{load:t.imageLoad}})])]):t._e(),t.banner[3]?s("swiper-item",[s("a",{attrs:{href:t.banner[3].link}},[s("img",{attrs:{src:t.banner[3].image,alt:""},on:{load:t.imageLoad}})])]):t._e()],1)},o=[],a=n("dc2c"),c={name:"HomeSwiper",props:{banner:{type:Array,default(){return[]}}},components:{Swiper:a["a"],SwiperItem:a["b"]},methods:{imageLoad(){this.$emit("swiperLoad")}}},l=c,u=n("2877"),d=Object(u["a"])(l,r,o,!1,null,"6b19dc0c",null),h=d.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"recommend"},[t.recommend[0]?s("div",{staticClass:"recommend-item"},[s("a",{attrs:{href:t.recommend[0].link}},[s("img",{attrs:{src:n("a2ab"),alt:""}}),s("div",[t._v(t._s(t.recommend[0].title))])])]):t._e(),t.recommend[1]?s("div",{staticClass:"recommend-item"},[s("a",{attrs:{href:t.recommend[1].link}},[s("img",{attrs:{src:n("373e"),alt:""}}),s("div",[t._v(t._s(t.recommend[1].title))])])]):t._e(),t.recommend[2]?s("div",{staticClass:"recommend-item"},[s("a",{attrs:{href:t.recommend[2].link}},[s("img",{attrs:{src:n("d139"),alt:""}}),s("div",[t._v(t._s(t.recommend[2].title))])])]):t._e(),t.recommend[3]?s("div",{staticClass:"recommend-item"},[s("a",{attrs:{href:t.recommend[3].link}},[s("img",{attrs:{src:n("28ac"),alt:""}}),s("div",[t._v(t._s(t.recommend[3].title))])])]):t._e()])},f=[],p={props:{recommend:{type:Array,default(){return[]}}},data(){return{img:[""],index:0}}},b=p,g=(n("80f4"),Object(u["a"])(b,m,f,!1,null,null,null)),v=g.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"feature"},[s("a",{attrs:{href:"https://act.mogujie.com/zzlx67"}},[s("img",{attrs:{src:n("5cbe"),alt:""}})])])}],_={},C=_,y=(n("064a"),Object(u["a"])(C,x,w,!1,null,null,null)),I=y.exports,T=n("a7ac"),$=n("9bd0"),k=n("6d71"),S=n("5d17"),E=n("f8c8"),L=n("1bab");function j(){return Object(L["a"])({url:"/home/multidata"})}function O(t,e){return Object(L["a"])({url:"/home/data",params:{type:t,page:e}})}n("90b9");var W=n("eecb"),H={components:{NavBar:T["a"],HomeSwiper:h,RecommendView:v,FeatureView:I,TabControl:$["a"],GoodsList:k["a"],Scroll:S["a"],BackTop:E["a"]},mixins:[W["b"]],data(){return{banner:[],recommend:[],goods:{pop:{page:0,list:[]},new:{page:0,list:[]},sell:{page:0,list:[]}},currentType:"pop",isShow:!1,tabTop:0,isTabFixed:!1,saveY:0}},computed:{showGoods(){return this.goods[this.currentType].list}},activated(){this.$refs.thisscroll.scroll.scrollTo(0,this.saveY,1),this.$refs.thisscroll.scroll.refresh()},deactivated(){this.saveY=this.$refs.thisscroll.scroll.y,this.$bus.$off("goodsImageLoad",this.imgListener)},created(){this.getHomeMultidata(),this.getHomeGoods("pop"),this.getHomeGoods("new"),this.getHomeGoods("sell")},methods:{tabIndex(t){const e=["pop","new","sell"];this.currentType=e[t],this.$refs.tabControls.currentIndex=t,this.$refs.tabControl.currentIndex=t},backClick(){this.$refs.thisscroll.scroll.scrollTo(0,0,500)},contentScroll(t){this.isShow=t.y<-1e3,this.isTabFixed=t.y<-this.tabTop},loadMore(){this.getHomeGoods(this.currentType)},swiperLoad(){this.tabTop=this.$refs.tabControl.$el.offsetTop},getHomeMultidata(){j().then(t=>{this.banner=t.data.banner.list,this.recommend=t.data.recommend.list})},getHomeGoods(t){const e=this.goods[t].page+1;O(t,e).then(e=>{this.goods[t].list.push(...e.data.list),this.goods[t].page+=1})}}},M=H,G=(n("8758"),Object(u["a"])(M,s,i,!1,null,"f4fc7cb0",null));e["default"]=G.exports},cdf1:function(t,e,n){},d139:function(t,e,n){t.exports=n.p+"img/recom2.e04dea4f.png"},d464:function(t,e,n){t.exports=n.p+"img/banner0.971fa03b.jpg"},d69d:function(t,e,n){},d894:function(t,e,n){},dc2c:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return p}));var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"hy-swiper"}},[n("div",{staticClass:"swiper",on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[t._t("default")],2),t._t("indicator"),n("div",{staticClass:"indicator"},[t.showIndicator&&t.slideCount>1?t._t("indicator",(function(){return t._l(t.slideCount,(function(e,s){return n("div",{key:s,staticClass:"indi-item",class:{active:s===t.currentIndex-1}})}))})):t._e()],2)],2)},i=[],r={name:"Swiper",props:{interval:{type:Number,default:3e3},animDuration:{type:Number,default:300},moveRatio:{type:Number,default:.25},showIndicator:{type:Boolean,default:!0}},data:function(){return{slideCount:0,totalWidth:0,swiperStyle:{},currentIndex:1,scrolling:!1}},mounted:function(){setTimeout(()=>{this.handleDom(),this.startTimer()},500)},methods:{startTimer:function(){this.playTimer=window.setInterval(()=>{this.currentIndex++,this.scrollContent(-this.currentIndex*this.totalWidth)},this.interval)},stopTimer:function(){window.clearInterval(this.playTimer)},scrollContent:function(t){this.scrolling=!0,this.swiperStyle.transition="transform "+this.animDuration+"ms",this.setTransform(t),this.checkPosition(),this.scrolling=!1},checkPosition:function(){window.setTimeout(()=>{this.swiperStyle.transition="0ms",this.currentIndex>=this.slideCount+1?(this.currentIndex=1,this.setTransform(-this.currentIndex*this.totalWidth)):this.currentIndex<=0&&(this.currentIndex=this.slideCount,this.setTransform(-this.currentIndex*this.totalWidth)),this.$emit("transitionEnd",this.currentIndex-1)},this.animDuration)},setTransform:function(t){this.swiperStyle.transform=`translate3d(${t}px, 0, 0)`,this.swiperStyle["-webkit-transform"]=`translate3d(${t}px), 0, 0`,this.swiperStyle["-ms-transform"]=`translate3d(${t}px), 0, 0`},handleDom:function(){let t=document.querySelector(".swiper"),e=t.getElementsByClassName("slide");if(this.slideCount=e.length,this.slideCount>1){let n=e[0].cloneNode(!0),s=e[this.slideCount-1].cloneNode(!0);t.insertBefore(s,e[0]),t.appendChild(n),this.totalWidth=t.offsetWidth,this.swiperStyle=t.style}this.setTransform(-this.totalWidth)},touchStart:function(t){this.scrolling||(this.stopTimer(),this.startX=t.touches[0].pageX)},touchMove:function(t){this.currentX=t.touches[0].pageX,this.distance=this.currentX-this.startX;let e=-this.currentIndex*this.totalWidth,n=this.distance+e;this.setTransform(n)},touchEnd:function(t){let e=Math.abs(this.distance);0!==this.distance&&(this.distance>0&&e>this.totalWidth*this.moveRatio?this.currentIndex--:this.distance<0&&e>this.totalWidth*this.moveRatio&&this.currentIndex++,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer())},previous:function(){this.changeItem(-1)},next:function(){this.changeItem(1)},changeItem:function(t){this.stopTimer(),this.currentIndex+=t,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer()}}},o=r,a=(n("33e1"),n("2877")),c=Object(a["a"])(o,s,i,!1,null,"a6cea182",null),l=c.exports,u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slide"},[t._t("default")],2)},d=[],h={name:"Slide"},m=h,f=(n("0693"),Object(a["a"])(m,u,d,!1,null,"376fae32",null)),p=f.exports},eecb:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));var s=n("90b9"),i=n("f8c8");const r={data(){return{imgListener:null}},mounted(){const t=Object(s["a"])(this.$refs.thisscroll.refresh,10);this.imgListener=()=>{t()},this.$bus.$on("goodsImageLoad",()=>{t()})}},o={components:{BackTop:i["a"]},data(){return{backTopShow:!1}},methods:{backClick(){this.$refs.thisscroll.scroll.scrollTo(0,0,500)}}}},f8c8:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"back-top"},[s("img",{attrs:{src:n("684a"),alt:""}})])}],r={},o=r,a=(n("f9cd"),n("2877")),c=Object(a["a"])(o,s,i,!1,null,null,null);e["a"]=c.exports},f9cd:function(t,e,n){"use strict";n("d69d")}}]);
//# sourceMappingURL=chunk-2c930831.7641ade1.js.map