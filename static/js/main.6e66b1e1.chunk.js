(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{100:function(e,t,a){e.exports={container:"Chart_container__1K2lJ"}},101:function(e,t,a){e.exports={formControl:"countrypicker_formControl__1d6yU"}},102:function(e,t,a){e.exports={container:"App_container__3PoHD",image:"App_image__3rYSg"}},20:function(e,t,a){e.exports={container:"Cards_container__3Nl48",card:"Cards_card__2MvLW",infected:"Cards_infected__2vc-W",recovered:"Cards_recovered__1EHZ9",deaths:"Cards_deaths__3c6-z"}},241:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(92),o=a.n(c),s=a(10),i=a.n(s),u=a(16),d=a(3),l=a(4),j=a(7),f=a(6),p=a(259),b=a(263),h=a(260),v=a(261),x=a(44),O=a.n(x),m=a(20),y=a.n(m),g=a(45),C=a.n(g),_=a(2),w=function(e){var t=e.data,a=t.confirmed,r=t.recovered,n=t.deaths,c=t.lastUpdate;return a?Object(_.jsx)("div",{className:y.a.container,children:Object(_.jsxs)(p.a,{container:!0,spacing:3,justify:"center",children:[Object(_.jsx)(p.a,{item:!0,component:b.a,xs:12,md:3,className:C()(y.a.card,y.a.infected),children:Object(_.jsxs)(h.a,{children:[Object(_.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:"Infected"}),Object(_.jsx)(v.a,{variant:"h5",children:Object(_.jsx)(O.a,{start:0,end:a.value,duration:2.5,separator:","})}),Object(_.jsx)(v.a,{color:"textSecondary",children:new Date(c).toDateString}),Object(_.jsx)(v.a,{variant:"body2",children:"Number of active cases of COVID-19"})]})}),Object(_.jsx)(p.a,{item:!0,component:b.a,xs:12,md:3,className:C()(y.a.card,y.a.recovered),children:Object(_.jsxs)(h.a,{children:[Object(_.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:"Recovered"}),Object(_.jsxs)(v.a,{variant:"h5",children:["   ",Object(_.jsx)(O.a,{start:0,end:r.value,duration:2.5,separator:","})]}),Object(_.jsx)(v.a,{color:"textSecondary",children:new Date(c).toDateString}),Object(_.jsx)(v.a,{variant:"body2",children:" Number of recoveries from COVID-19"})]})}),Object(_.jsx)(p.a,{item:!0,component:b.a,xs:12,md:3,className:C()(y.a.card,y.a.deaths),children:Object(_.jsxs)(h.a,{children:[Object(_.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:"Deaths"}),Object(_.jsx)(v.a,{variant:"h5",children:Object(_.jsx)(O.a,{start:0,end:n.value,duration:2.5,separator:","})}),Object(_.jsx)(v.a,{color:"textSecondary",children:new Date(c).toDateString}),Object(_.jsx)(v.a,{variant:"body2",children:" Number of deaths caused by COVID-19"})]})})]})}):"Loading..."},D=a(43),k=a(63),S=a(46),N=a.n(S),I="https://covid19.mathdro.id/api",A=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,r,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=I,t&&(a="".concat(I,"/countries/").concat(t)),e.prev=2,e.next=5,N.a.get(a);case 5:return r=e.sent,n=r.data,c={confirmed:n.confirmed,recovered:n.recovered,deaths:n.deaths,lastUpdate:n.lastUpdate},e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(2);case 13:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(I,"/daily"));case 3:return t=e.sent,a=t.data,r=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(I,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),J=a(100),R=a.n(J),V=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=e.country,s=Object(r.useState)({}),d=Object(D.a)(s,2),l=d[0],j=d[1];Object(r.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t=e.sent,j(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=a?Object(_.jsx)(k.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,n.value,c.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(o)}}}):null,p=l[0]?Object(_.jsx)(k.b,{data:{labels:l.map((function(e){var t=e.date;return new Date(t).toLocaleDateString()})),datasets:[{data:l.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:l.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0},{data:l.map((function(e){return e.recovered})),label:"Recovered",borderColor:"green",backgroundColor:"rgba(0, 255, 0, 0.5)",fill:!0}]}}):null;return Object(_.jsx)("div",{className:R.a.container,children:o?f:p})},L=a(264),U=a(262),M=a(101),H=a.n(M),K=function(e){var t=e.handleCountryChange,a=Object(r.useState)([]),n=Object(D.a)(a,2),c=n[0],o=n[1];return Object(r.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]),Object(_.jsx)(L.a,{className:H.a.formControl,children:Object(_.jsxs)(U.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},children:[Object(_.jsx)("option",{value:"",children:"Global"}),c.map((function(e,t){return Object(_.jsx)("option",{value:e,children:e},t)}))]})})},P=a(102),W=a.n(P),Y=function(e){Object(j.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(d.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(u.a)(i.a.mark((function t(a){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A(a);case 2:r=t.sent,e.setState({data:r,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return Object(_.jsxs)("div",{className:W.a.container,children:[Object(_.jsx)("h1",{children:"COVID-19 TRACKER"}),Object(_.jsx)("p",{children:"MADE BY JALAJ"}),Object(_.jsx)(w,{data:t}),Object(_.jsx)(K,{handleCountryChange:this.handleCountryChange}),Object(_.jsx)(V,{data:t,country:a})]})}}]),a}(n.a.Component);o.a.render(Object(_.jsx)(Y,{}),document.getElementById("root"))}},[[241,1,2]]]);
//# sourceMappingURL=main.6e66b1e1.chunk.js.map