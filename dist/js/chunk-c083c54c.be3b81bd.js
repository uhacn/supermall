(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c083c54c"],{"0601":function(t,s,e){"use strict";e("a633")},"0693":function(t,s,e){"use strict";e("cdf1")},"08ea":function(t,s,e){"use strict";e("48bb")},1667:function(t,s,e){},"28b2":function(t,s,e){},"2d6c":function(t,s,e){"use strict";e("de8c")},"2e03":function(t,s,e){"use strict";e("28b2")},3011:function(t,s,e){"use strict";e("c8b4")},"33e1":function(t,s,e){"use strict";e("974f")},"3bbc":function(t,s,e){"use strict";e("1667")},"48bb":function(t,s,e){},"600f":function(t,s,e){},"684a":function(t,s,e){t.exports=e.p+"img/top.faefff2d.png"},"6ab7":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"detail"}},[e("detail-nav-bar",{ref:"nav",staticClass:"detail-nav",attrs:{"current-index":t.currentIndex},on:{titleClick:t.titleClick}}),e("scroll",{ref:"thisscroll",staticClass:"content",on:{scroll:t.scroll}},[e("detail-swiper",{attrs:{"top-images":t.topImages}}),e("detail-base-info",{attrs:{goods:t.goods}}),e("detail-shop-info",{attrs:{shop:t.shop}}),e("detail-goods-info",{staticClass:"goods-info",attrs:{"detail-info":t.detailInfo},on:{imageLoad:t.imageLoad}}),e("detail-param-info",{ref:"params",attrs:{"param-info":t.paramInfo}}),e("detail-comment-info",{ref:"comment",attrs:{"comment-info":t.commentInfo}}),e("detail-recommend",{ref:"recommend",attrs:{"recommend-info":t.recommendList}})],1),e("detail-bottom-bar",{staticClass:"bottom-bar",on:{addToCart:t.addToCart}}),e("back-top",{directives:[{name:"show",rawName:"v-show",value:t.backTopShow,expression:"backTopShow"}],nativeOn:{click:function(s){return t.backClick.apply(null,arguments)}}}),e("toast",{attrs:{message:t.message,"is-show":t.isShow}})],1)},n=[],a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("nav-bar",[i("div",{staticClass:"back",attrs:{slot:"left"},on:{click:t.backClick},slot:"left"},[i("img",{attrs:{src:e("7a74"),alt:""}})]),i("div",{staticClass:"title",attrs:{slot:"center"},slot:"center"},t._l(t.titles,(function(s,e){return i("div",{key:e,staticClass:"title-item",class:{active:e===t.currentIndex},on:{click:function(s){return t.titleItemClick(e)}}},[t._v(" "+t._s(s)+" ")])})),0)])],1)},o=[],r=e("a7ac"),c={components:{NavBar:r["a"]},data(){return{titles:["商品","参数","评论","推荐"],currentIndex:0}},methods:{titleItemClick(t){this.currentIndex=t,this.$emit("titleClick",t)},backClick(){this.$router.back()}}},l=c,d=(e("0601"),e("2877")),u=Object(d["a"])(l,a,o,!1,null,"744879d4",null),h=u.exports,f=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("swiper",{staticClass:"detail-swiper"},t._l(t.topImages,(function(t,s){return e("swiper-item",{key:s},[e("img",{attrs:{src:t,alt:""}})])})),1)},m=[],p=e("dc2c"),v={props:{topImages:{type:Array,default(){return[]}}},components:{Swiper:p["a"],SwiperItem:p["b"]},data(){return{}}},g=v,_=(e("3bbc"),Object(d["a"])(g,f,m,!1,null,"41e53926",null)),b=_.exports,C=function(){var t=this,s=t.$createElement,e=t._self._c||s;return 0!==Object.keys(t.goods).length?e("div",{staticClass:"base-info"},[e("div",{staticClass:"info-title"},[t._v(t._s(t.goods.title))]),e("div",{staticClass:"info-price"},[e("span",{staticClass:"n-price"},[t._v(t._s(t.goods.newPrice))]),e("span",{staticClass:"o-price"},[t._v(t._s(t.goods.oldPrice))]),t.goods.discount?e("span",{staticClass:"discount"},[t._v(t._s(t.goods.discount))]):t._e()]),e("div",{staticClass:"info-other"},[e("span",[t._v(t._s(t.goods.columns[0]))]),e("span",[t._v(t._s(t.goods.columns[1]))]),e("span",[t._v(t._s(t.goods.services[t.goods.services.length-1].name))])]),e("div",{staticClass:"info-service"},t._l(t.goods.services.length-1,(function(s){return e("span",{key:s,staticClass:"info-service-item"},[e("img",{attrs:{src:t.goods.services[s-1].icon}}),e("span",[t._v(t._s(t.goods.services[s-1].name))])])})),0)]):t._e()},I=[],x={name:"DetailBaseInfo",props:{goods:{type:Object,default(){return{}}}}},y=x,w=(e("3011"),Object(d["a"])(y,C,I,!1,null,"1d10f3cc",null)),k=w.exports,$=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shop-info"},[e("div",{staticClass:"shop-top"},[e("img",{attrs:{src:t.shop.logo}}),e("span",{staticClass:"title"},[t._v(t._s(t.shop.name))])]),e("div",{staticClass:"shop-middle"},[e("div",{staticClass:"shop-middle-item shop-middle-left"},[e("div",{staticClass:"info-sells"},[e("div",{staticClass:"sells-count"},[t._v(" "+t._s(t._f("sellCountFilter")(t.shop.sells))+" ")]),e("div",{staticClass:"sells-text"},[t._v("总销量")])]),e("div",{staticClass:"info-goods"},[e("div",{staticClass:"goods-count"},[t._v(" "+t._s(t.shop.goodsCount)+" ")]),e("div",{staticClass:"goods-text"},[t._v("全部宝贝")])])]),e("div",{staticClass:"shop-middle-item shop-middle-right"},[e("table",t._l(t.shop.score,(function(s,i){return e("tr",{key:i},[e("td",[t._v(t._s(s.name))]),e("td",{staticClass:"score",class:{"score-better":s.isBetter}},[t._v(t._s(s.score))]),e("td",{staticClass:"better",class:{"better-more":s.isBetter}},[e("span",[t._v(t._s(s.isBetter?"高":"低"))])])])})),0)])]),t._m(0)])},T=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shop-bottom"},[e("div",{staticClass:"enter-shop"},[t._v("进店逛逛")])])}],O={name:"DetailShopInfo",props:{shop:{type:Object,default(){return{}}}},filters:{sellCountFilter:function(t){return t<1e4?t:(t/1e4).toFixed(1)+"万"}}},j=O,E=(e("2d6c"),Object(d["a"])(j,$,T,!1,null,"b7d52aea",null)),S=E.exports,D=function(){var t=this,s=t.$createElement,e=t._self._c||s;return 0!==Object.keys(t.detailInfo).length?e("div",{staticClass:"goods-info"},[e("div",{staticClass:"info-desc clear-fix"},[e("div",{staticClass:"start"}),e("div",{staticClass:"desc"},[t._v(t._s(t.detailInfo.desc))]),e("div",{staticClass:"end"})]),e("div",{staticClass:"info-key"},[t._v(t._s(t.detailInfo.detailImage[0].key))]),e("div",{staticClass:"info-list"},t._l(t.detailInfo.detailImage[0].list,(function(s,i){return e("img",{key:i,attrs:{src:s,alt:""},on:{load:t.imgLoad}})})),0)]):t._e()},L=[],P={name:"DetailGoodsInfo",props:{detailInfo:{type:Object}},data(){return{counter:0,imagesLength:0}},methods:{imgLoad(){++this.counter===this.imagesLength&&this.$emit("imageLoad")}},watch:{detailInfo(){this.imagesLength=this.detailInfo.detailImage[0].list.length}}},B=P,W=(e("79b8"),Object(d["a"])(B,D,L,!1,null,"667fd9cb",null)),N=W.exports,R=function(){var t=this,s=t.$createElement,e=t._self._c||s;return 0!==Object.keys(t.paramInfo).length?e("div",{staticClass:"param-info"},[t._l(t.paramInfo.sizes,(function(s,i){return e("table",{key:i,staticClass:"info-size"},t._l(s,(function(s,i){return e("tr",{key:i},t._l(s,(function(s,i){return e("td",{key:i},[t._v(t._s(s))])})),0)})),0)})),e("table",{staticClass:"info-param"},t._l(t.paramInfo.infos,(function(s,i){return e("tr",{key:i},[e("td",{staticClass:"info-param-key"},[t._v(t._s(s.key))]),e("td",{staticClass:"param-value"},[t._v(t._s(s.value))])])})),0),0!==t.paramInfo.image.length?e("div",{staticClass:"info-img"},[e("img",{attrs:{src:t.paramInfo.image,alt:""}})]):t._e()],2):t._e()},M=[],X={name:"DetailParamInfo",props:{paramInfo:{type:Object,default(){return{}}}}},A=X,F=(e("fbde"),Object(d["a"])(A,R,M,!1,null,"39072db8",null)),G=F.exports,z=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[0!==Object.keys(t.commentInfo).length?e("div",{staticClass:"comment-info"},[t._m(0),e("div",{staticClass:"info-user"},[e("img",{attrs:{src:t.commentInfo.user.avatar,alt:""}}),e("span",[t._v(t._s(t.commentInfo.user.uname))])]),e("div",{staticClass:"info-detail"},[e("p",[t._v(t._s(t.commentInfo.content))]),e("div",{staticClass:"info-other"},[e("span",{staticClass:"date"},[t._v(t._s(t._f("showDate")(t.commentInfo.created)))]),e("span",[t._v(t._s(t.commentInfo.style))])]),e("div",{staticClass:"info-imgs"},t._l(t.commentInfo.images,(function(t,s){return e("img",{key:s,attrs:{src:t}})})),0)])]):t._e()])},J=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"info-header"},[e("div",{staticClass:"header-title"},[t._v("用户评价")]),e("div",{staticClass:"header-more"},[t._v(" 更多 "),e("i",{staticClass:"arrow-right"})])])}],U=e("90b9"),q={name:"DetailCommentInfo",props:{commentInfo:{type:Object}},filters:{showDate:function(t){let s=new Date(1e3*t);return Object(U["b"])(s,"yyyy-MM-dd")}}},H=q,V=(e("08ea"),Object(d["a"])(H,z,J,!1,null,"46dfb924",null)),Y=V.exports,K=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"recommend-info"},[e("div",{staticClass:"info-header"},[t._v("热门推荐")]),e("goods-list",{attrs:{goods:t.recommendInfo}})],1)},Q=[],Z=e("6d71"),tt={props:{recommendInfo:{type:Array}},components:{GoodsList:Z["a"]}},st=tt,et=(e("2e03"),Object(d["a"])(st,K,Q,!1,null,null,null)),it=et.exports,nt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"bottom-bar"},[t._m(0),e("div",{staticClass:"bar-item bar-right"},[e("div",{staticClass:"cart",on:{click:t.addToCart}},[t._v("加入购物车")]),e("div",{staticClass:"buy"},[t._v("购买")])])])},at=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"bar-item bar-left"},[e("div",[e("i",{staticClass:"icon service"}),e("span",{staticClass:"text"},[t._v("客服")])]),e("div",[e("i",{staticClass:"icon shop"}),e("span",{staticClass:"text"},[t._v("店铺")])]),e("div",[e("i",{staticClass:"icon select"}),e("span",{staticClass:"text"},[t._v("收藏")])])])}],ot={methods:{addToCart(){this.$emit("addToCart")}}},rt=ot,ct=(e("7cdc"),Object(d["a"])(rt,nt,at,!1,null,null,null)),lt=ct.exports,dt=e("5d17"),ut=e("4897"),ht=e("eecb"),ft=e("1bab");function mt(t){return Object(ft["a"])({url:"/detail",params:{iid:t}})}function pt(){return Object(ft["a"])({url:"/recommend"})}class vt{constructor(t,s,e){this.title=t.title,this.desc=t.desc,this.newPrice=t.price,this.oldPrice=t.oldPrice,this.discount=t.discountDesc,this.columns=s,this.services=e,this.realPrice=t.lowNowPrice}}class gt{constructor(t){this.logo=t.shopLogo,this.name=t.name,this.fans=t.cFans,this.sells=t.cSells,this.score=t.score,this.goodsCount=t.cGoods}}class _t{constructor(t,s){this.image=t.images?t.images[0]:"",this.infos=t.set,this.sizes=s.tables}}var bt=e("2f62"),Ct={name:"Detail",components:{DetailNavBar:h,DetailSwiper:b,DetailBaseInfo:k,DetailShopInfo:S,DetailGoodsInfo:N,DetailParamInfo:G,DetailCommentInfo:Y,DetailRecommend:it,DetailBottomBar:lt,Scroll:dt["a"],Toast:ut["a"]},mixins:[ht["b"],ht["a"]],data(){return{iid:null,topImages:[],goods:{},shop:{},detailInfo:{},paramInfo:{},commentInfo:{},recommendList:[],themeTops:[],currentIndex:0,message:"",isShow:!1}},created(){this.iid=this.$route.params.iid,mt(this.iid).then(t=>{const s=t.result;this.topImages=s.itemInfo.topImages,this.goods=new vt(s.itemInfo,s.columns,s.shopInfo.services),this.shop=new gt(s.shopInfo),this.detailInfo=s.detailInfo,this.paramInfo=new _t(s.itemParams.info,s.itemParams.rule),s.rate.list&&(this.commentInfo=s.rate.list[0])}),pt().then(t=>{this.recommendList=t.data.list})},deactivated(){this.$bus.$off("goodsImageLoad",this.imgListener)},methods:{...Object(bt["b"])(["addCart"]),imageLoad(){this.$refs.thisscroll.refresh(),this.themeTops=[],this.themeTops.push(0),this.themeTops.push(this.$refs.params.$el.offsetTop),this.themeTops.push(this.$refs.comment.$el.offsetTop),this.themeTops.push(this.$refs.recommend.$el.offsetTop),this.themeTops.push(Number.MAX_VALUE)},titleClick(t){this.$refs.thisscroll.scroll.scrollTo(0,-this.themeTops[t],300)},scroll(t){const s=-t.y;for(let e=0;e<this.themeTops.length-1;e++)s>=this.themeTops[e]&&s<this.themeTops[e+1]&&(this.currentIndex=e,this.$refs.nav.currentIndex=this.currentIndex);this.backTopShow=t.y<-1e3},addToCart(){const t={};t.iid=this.iid,t.imgURL=this.topImages[0],t.title=this.goods.title,t.desc=this.goods.desc,t.newPrice=this.goods.realPrice,this.addCart(t).then(t=>{this.$toast.show(t,1500)})}}},It=Ct,xt=(e("efba"),Object(d["a"])(It,i,n,!1,null,"363bc16c",null));s["default"]=xt.exports},"6d71":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},t._l(t.goods,(function(t,s){return e("goods-list-item",{key:s,attrs:{goodsItem:t}})})),1)},n=[],a=e("9977"),o={components:{GoodsListItem:a["a"]},props:{goods:{type:Array,default(){return[]}}}},r=o,c=(e("8a4a"),e("2877")),l=Object(c["a"])(r,i,n,!1,null,null,null);s["a"]=l.exports},"79b8":function(t,s,e){"use strict";e("600f")},"7a74":function(t,s,e){t.exports=e.p+"img/back.26df9036.svg"},"7cdc":function(t,s,e){"use strict";e("d054")},"8a4a":function(t,s,e){"use strict";e("adf1")},"90b9":function(t,s,e){"use strict";function i(t,s){let e=null;return function(...i){e&&clearTimeout(e),e=setTimeout(()=>{t.apply(this,i)},s)}}function n(t,s){/(y+)/.test(s)&&(s=s.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));let e={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(let i in e)if(new RegExp(`(${i})`).test(s)){let t=e[i]+"";s=s.replace(RegExp.$1,1===RegExp.$1.length?t:a(t))}return s}function a(t){return("00"+t).substr(t.length)}e.d(s,"a",(function(){return i})),e.d(s,"b",(function(){return n}))},"974f":function(t,s,e){},a633:function(t,s,e){},adf1:function(t,s,e){},c8b4:function(t,s,e){},cdf1:function(t,s,e){},d054:function(t,s,e){},d69d:function(t,s,e){},dc2c:function(t,s,e){"use strict";e.d(s,"a",(function(){return l})),e.d(s,"b",(function(){return p}));var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"hy-swiper"}},[e("div",{staticClass:"swiper",on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[t._t("default")],2),t._t("indicator"),e("div",{staticClass:"indicator"},[t.showIndicator&&t.slideCount>1?t._t("indicator",(function(){return t._l(t.slideCount,(function(s,i){return e("div",{key:i,staticClass:"indi-item",class:{active:i===t.currentIndex-1}})}))})):t._e()],2)],2)},n=[],a={name:"Swiper",props:{interval:{type:Number,default:3e3},animDuration:{type:Number,default:300},moveRatio:{type:Number,default:.25},showIndicator:{type:Boolean,default:!0}},data:function(){return{slideCount:0,totalWidth:0,swiperStyle:{},currentIndex:1,scrolling:!1}},mounted:function(){setTimeout(()=>{this.handleDom(),this.startTimer()},500)},methods:{startTimer:function(){this.playTimer=window.setInterval(()=>{this.currentIndex++,this.scrollContent(-this.currentIndex*this.totalWidth)},this.interval)},stopTimer:function(){window.clearInterval(this.playTimer)},scrollContent:function(t){this.scrolling=!0,this.swiperStyle.transition="transform "+this.animDuration+"ms",this.setTransform(t),this.checkPosition(),this.scrolling=!1},checkPosition:function(){window.setTimeout(()=>{this.swiperStyle.transition="0ms",this.currentIndex>=this.slideCount+1?(this.currentIndex=1,this.setTransform(-this.currentIndex*this.totalWidth)):this.currentIndex<=0&&(this.currentIndex=this.slideCount,this.setTransform(-this.currentIndex*this.totalWidth)),this.$emit("transitionEnd",this.currentIndex-1)},this.animDuration)},setTransform:function(t){this.swiperStyle.transform=`translate3d(${t}px, 0, 0)`,this.swiperStyle["-webkit-transform"]=`translate3d(${t}px), 0, 0`,this.swiperStyle["-ms-transform"]=`translate3d(${t}px), 0, 0`},handleDom:function(){let t=document.querySelector(".swiper"),s=t.getElementsByClassName("slide");if(this.slideCount=s.length,this.slideCount>1){let e=s[0].cloneNode(!0),i=s[this.slideCount-1].cloneNode(!0);t.insertBefore(i,s[0]),t.appendChild(e),this.totalWidth=t.offsetWidth,this.swiperStyle=t.style}this.setTransform(-this.totalWidth)},touchStart:function(t){this.scrolling||(this.stopTimer(),this.startX=t.touches[0].pageX)},touchMove:function(t){this.currentX=t.touches[0].pageX,this.distance=this.currentX-this.startX;let s=-this.currentIndex*this.totalWidth,e=this.distance+s;this.setTransform(e)},touchEnd:function(t){let s=Math.abs(this.distance);0!==this.distance&&(this.distance>0&&s>this.totalWidth*this.moveRatio?this.currentIndex--:this.distance<0&&s>this.totalWidth*this.moveRatio&&this.currentIndex++,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer())},previous:function(){this.changeItem(-1)},next:function(){this.changeItem(1)},changeItem:function(t){this.stopTimer(),this.currentIndex+=t,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer()}}},o=a,r=(e("33e1"),e("2877")),c=Object(r["a"])(o,i,n,!1,null,"a6cea182",null),l=c.exports,d=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"slide"},[t._t("default")],2)},u=[],h={name:"Slide"},f=h,m=(e("0693"),Object(r["a"])(f,d,u,!1,null,"376fae32",null)),p=m.exports},de8c:function(t,s,e){},eecb:function(t,s,e){"use strict";e.d(s,"b",(function(){return a})),e.d(s,"a",(function(){return o}));var i=e("90b9"),n=e("f8c8");const a={data(){return{imgListener:null}},mounted(){const t=Object(i["a"])(this.$refs.thisscroll.refresh,10);this.imgListener=()=>{t()},this.$bus.$on("goodsImageLoad",()=>{t()})}},o={components:{BackTop:n["a"]},data(){return{backTopShow:!1}},methods:{backClick(){this.$refs.thisscroll.scroll.scrollTo(0,0,500)}}}},efba:function(t,s,e){"use strict";e("f079")},f079:function(t,s,e){},f7c8:function(t,s,e){},f8c8:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"back-top"},[i("img",{attrs:{src:e("684a"),alt:""}})])}],a={},o=a,r=(e("f9cd"),e("2877")),c=Object(r["a"])(o,i,n,!1,null,null,null);s["a"]=c.exports},f9cd:function(t,s,e){"use strict";e("d69d")},fbde:function(t,s,e){"use strict";e("f7c8")}}]);
//# sourceMappingURL=chunk-c083c54c.be3b81bd.js.map