(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aa5536e0"],{"7fc1":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.orders,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(t._f("date")(e.create_at)))]),a("td",[t._v(t._s(e.user.email))]),a("td",{staticClass:"text-center"},[a("ul",{staticClass:"list-unstyled"},t._l(e.products,(function(e,n){return a("li",{key:n},[t._v(" "+t._s(e.product.title)+" "+t._s(e.qty)+" "+t._s(e.product.unit)+" ")])})),0)]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.total)))]),a("td",{staticClass:"text-center"},[e.is_paid?a("span",{staticClass:"text-success"},[t._v("已付款")]):a("span",[t._v("尚未付款")])])])})),0)]),a("Pagination",{attrs:{pages:t.pagination},on:{pageChange:t.getOrders}})],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("th",{attrs:{width:"120"}},[t._v("購買時間")]),a("th",{attrs:{width:"200"}},[t._v("Email")]),a("th",{staticClass:"text-center",attrs:{width:"150"}},[t._v("購買款項")]),a("th",{attrs:{width:"60"}},[t._v("應付金額")]),a("th",{staticClass:"text-center",attrs:{width:"60"}},[t._v("是否付款")])])}],s=(a("99af"),a("e20e")),i={components:{Pagination:s["a"]},data:function(){return{orders:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},methods:{getOrders:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this,a="".concat(Object({NODE_ENV:"production",BASE_URL:"/cli3keyboard/"}).VUE_APP_APIPATH,"/api/").concat(Object({NODE_ENV:"production",BASE_URL:"/cli3keyboard/"}).VUE_APP_CUSTOMPATH,"/admin/orders?page=").concat(t);e.isLoading=!0,e.$http.get(a).then((function(t){e.isLoading=!1,e.orders=t.data.orders,e.pagination=t.data.pagination}))}},created:function(){this.getOrders()}},c=i,o=a("2877"),l=Object(o["a"])(c,n,r,!1,null,null,null);e["default"]=l.exports},8418:function(t,e,a){"use strict";var n=a("c04e"),r=a("9bf2"),s=a("5c6c");t.exports=function(t,e,a){var i=n(e);i in t?r.f(t,i,s(0,a)):t[i]=a}},"99af":function(t,e,a){"use strict";var n=a("23e7"),r=a("d039"),s=a("e8b5"),i=a("861d"),c=a("7b0b"),o=a("50c4"),l=a("8418"),u=a("65f0"),d=a("1dde"),p=a("b622"),g=a("2d00"),_=p("isConcatSpreadable"),f=9007199254740991,h="Maximum allowed index exceeded",v=g>=51||!r((function(){var t=[];return t[_]=!1,t.concat()[0]!==t})),m=d("concat"),b=function(t){if(!i(t))return!1;var e=t[_];return void 0!==e?!!e:s(t)},C=!v||!m;n({target:"Array",proto:!0,forced:C},{concat:function(t){var e,a,n,r,s,i=c(this),d=u(i,0),p=0;for(e=-1,n=arguments.length;e<n;e++)if(s=-1===e?i:arguments[e],b(s)){if(r=o(s.length),p+r>f)throw TypeError(h);for(a=0;a<r;a++,p++)a in s&&l(d,p,s[a])}else{if(p>=f)throw TypeError(h);l(d,p++,s)}return d.length=p,d}})},e20e:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_pre},on:{click:function(e){return e.preventDefault(),t.changePage(t.pages.current_page-1)}}},[t._m(0)]),t._l(t.pages.total_pages,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pages.current_page===e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.changePage(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disable:!t.pages.has_next},on:{click:function(e){return e.preventDefault(),t.changePage(t.pages.current_page+1)}}},[t._m(1)])],2)])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])}],s={props:["pages"],methods:{changePage:function(t){this.$emit("pageChange",t)}}},i=s,c=a("2877"),o=Object(c["a"])(i,n,r,!1,null,null,null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-aa5536e0.59cfefa6.js.map