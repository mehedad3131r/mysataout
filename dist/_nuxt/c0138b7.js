(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{625:function(t,e,r){"use strict";var n=r(0),o=r(5),c=r(86),f=r(360),l=r(359),_=r(4),d=RangeError,v=String,h=Math.floor,m=o(l),w=o("".slice),x=o(1..toFixed),O=function(t,e,r){return 0===e?r:e%2==1?O(t,e-1,r*t):O(t*t,e/2,r)},E=function(data,t,e){for(var r=-1,n=e;++r<6;)n+=t*data[r],data[r]=n%1e7,n=h(n/1e7)},j=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=h(r/t),r=r%t*1e7},T=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=v(data[t]);s=""===s?e:s+m("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:_((function(){return"0.000"!==x(8e-5,3)||"1"!==x(.9,0)||"1.25"!==x(1.255,2)||"1000000000000000128"!==x(0xde0b6b3a7640080,0)}))||!_((function(){x({})}))},{toFixed:function(t){var e,r,n,o,l=f(this),_=c(t),data=[0,0,0,0,0,0],h="",x="0";if(_<0||_>20)throw d("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return v(l);if(l<0&&(h="-",l=-l),l>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(l*O(2,69,1))-69)<0?l*O(2,-e,1):l/O(2,e,1),r*=4503599627370496,(e=52-e)>0){for(E(data,0,r),n=_;n>=7;)E(data,1e7,0),n-=7;for(E(data,O(10,n,1),0),n=e-1;n>=23;)j(data,1<<23),n-=23;j(data,1<<n),E(data,1,1),j(data,2),x=T(data)}else E(data,0,r),E(data,1<<-e,0),x=T(data)+m("0",_);return x=_>0?h+((o=x.length)<=_?"0."+m("0",_-o)+x:w(x,0,o-_)+"."+w(x,o-_)):h+x}})},644:function(t,e,r){"use strict";r.r(e);r(625),r(19),r(14),r(18),r(26),r(27);var n=r(94),o=r(24),c=(r(180),r(85),r(8),r(15),r(235)),f=r.n(c),l=r(117);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={components:{CoinIcon:f.a},props:{socket:{type:Object,required:!0}},computed:d(d({},Object(l.b)("crash",["bets"])),{},{betsLocal:function(){return Object(n.a)(this.bets).sort((function(b,a){return a.amount-b.amount}))},userBet:function(){var t=this;return this.bets.find((function(e){return e.user.id===t.$auth.user.id&&"await"===e.status}))}}),beforeMount:function(){var t=this;this.socket.on("game:status",(function(data){t.SET_BETS(data.bets)})).on("game:new",(function(){t.SET_BETS([])})).on("bet:new",(function(e){t.PUSH_BET(e)})).on("bet:result",(function(data){t.$auth.loggedIn&&t.userBet&&data.bets.find((function(e){return e.user.id===t.$auth.user.id}))&&t.$auth.fetchUser(),data.bets.forEach((function(e){t.UPDATE_BET(e)}))}))},methods:d({},Object(l.c)({SET_BETS:"crash/SET_BETS",PUSH_BET:"crash/PUSH_BET",UPDATE_BET:"crash/UPDATE_BET"}))},h=r(12),component=Object(h.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-12 bg-white rounded-xl"},[e("h2",{staticClass:"mb-3 font-semibold text-md"},[t._v(t._s(t.$t("room-bets")))]),t._v(" "),t.bets.length?e("div",{staticClass:"grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"},t._l(t.betsLocal,(function(r,n){return e("div",{key:"bet-".concat(n)},[e("div",{staticClass:"flex flex-wrap items-start space-x-3 font-medium"},[e("img",{staticClass:"w-10 h-10 rounded-full",attrs:{src:r.user.avatar,alt:""}}),t._v(" "),e("div",{staticClass:"flex flex-col flex-1 overflow-hidden overflow-ellipsis"},[e("div",{staticClass:"flex items-center space-x-3"},[r.user.first_name?e("p",[t._v("\n              "+t._s(r.user.first_name)+"\n            ")]):t._e(),t._v(" "),r.user.last_name?e("p",{staticClass:"overflow-hidden whitespace-nowrap overflow-ellipsis"},[t._v("\n              "+t._s(r.user.last_name)+"\n            ")]):t._e(),t._v(" "),r.user.last_name||r.user.first_name?t._e():e("p",[t._v("\n              "+t._s(r.user.username)+"\n            ")])]),t._v(" "),e("div",{staticClass:"flex flex-wrap items-center flex-1 space-x-3"},[e("span",{staticClass:"flex items-center justify-end",class:{"text-red-400":"lose"===r.status}},[t._v("\n              "+t._s(r.amount)+"\n              "),e("CoinIcon",{staticClass:"w-4 h-4 ml-2"})],1),t._v(" "),"win"===r.status?[e("span",[t._v(" x"+t._s(r.rate_final)+" ")]),t._v(" "),e("span",[t._v("=")]),t._v(" "),e("p",{staticClass:"text-green-400"},[t._v("\n                "+t._s((r.amount*r.rate_final).toFixed(2))+"\n              ")])]:t._e()],2)])])])})),0):e("p",[t._v(t._s(t.$t("no-bets")))])])}),[],!1,null,null,null);e.default=component.exports}}]);