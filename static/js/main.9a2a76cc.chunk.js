(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{101:function(e,t,c){},105:function(e,t,c){},106:function(e,t,c){},204:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(0),s=c.n(a),r=c(7),o=c.n(r),i=(c(99),c(23)),l=c.n(i),u=c(38),d=c(11),j=(c(101),c(240)),f=c(241),h=c(242),b=c(231),p=c(235),v=c(13),O=c(236);c(66);var x=function(e){var t=e.title,c=e.isRed,a=e.isGrey,s=e.active,r=e.cases,o=e.total,i=Object(v.a)(e,["title","isRed","isGrey","active","cases","total"]);return Object(n.jsx)(b.a,{onClick:i.onClick,className:"infoBox ".concat(s&&"infoBox--selected"," ").concat(c&&"infoBox--red"," ").concat(a&&"infoBox--grey"),children:Object(n.jsxs)(p.a,{children:[Object(n.jsx)(O.a,{className:"infoBox__title",color:"textSecondary",children:t}),Object(n.jsx)("h2",{className:"infoBox__cases ".concat(!c&&"infoBox__cases--green"," ").concat(a&&"infoBox__cases--grey"),children:i.isloading?Object(n.jsx)("i",{className:"fa fa-cog fa-spin fa-fw"}):r}),Object(n.jsxs)(O.a,{className:"infoBox__total",color:"textSecondary",children:[o," Total"]})]})})},m=c(238),y=c(239),g=c(244),_=(c(105),c(87)),C=c(14),N=c.n(C),w=c(243),k=c(237),S={cases:{hex:"#CC1034",mulitiplier:800},recovered:{hex:"#7DD71D",mulitiplier:1200},deaths:{hex:"#C0C0C0",mulitiplier:2e3}},B=function(e){var t=Object(_.a)(e);return t.sort((function(e,t){return t.cases-e.cases})),t},T=function(e){return e?"+".concat(N()(e).format("0.0a")):"+0"},D=function(e,t){return e.map((function(e){return Object(n.jsx)(w.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,pathOptions:{color:S[t].hex,fillColor:S[t].hex},radius:Math.sqrt(e[t]/10)*S[t].mulitiplier,children:Object(n.jsx)(k.a,{children:Object(n.jsxs)("div",{className:"info-container",children:[Object(n.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(n.jsx)("div",{className:"info-name",children:e.country}),Object(n.jsxs)("div",{className:"info-confirmed",children:["Cases: ",N()(e.cases).format("0,0")]}),Object(n.jsxs)("div",{className:"info-recovered",children:["Recovered: ",N()(e.recovered).format("0,0")]}),Object(n.jsxs)("div",{className:"info-deaths",children:["Deaths: ",N()(e.deaths).format("0,0")]})]})})})}))};var I=function(e){var t=e.countries,c=e.casesType,a=e.center,s=e.zoom;function r(e){var t=e.center,c=e.zoom;return Object(m.a)().setView(t,c),null}return Object(n.jsxs)(y.a,{casesType:c,className:"map",center:a,zoom:s,scrollWheelZoom:!1,children:[Object(n.jsx)(r,{center:a,zoom:s}),Object(n.jsx)(g.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),D(t,c)]})};c(106);var R=function(e){var t=e.countries;return Object(n.jsx)("div",{className:"table",children:t.map((function(e){var t=e.country,c=e.cases;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t}),Object(n.jsx)("td",{children:Object(n.jsx)("strong",{children:N()(c).format("000,000")})})]})}))})},z=c(86),F={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return N()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,c){return N()(e).format("0a")}}}]}},L=function(e,t){var c,n=[];for(var a in e.cases){if(c){var s={x:a,y:e[t][a]-c};n.push(s)}c=e[t][a]}return n};var M=function(e){var t=e.casesType,c=Object(v.a)(e,["casesType"]),s=Object(a.useState)({}),r=Object(d.a)(s,2),o=r[0],i=r[1];return Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var c=L(e,t);i(c),console.log(c)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(n.jsx)("div",{className:c.className,children:(null===o||void 0===o?void 0:o.length)>0&&Object(n.jsx)(z.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:o}]},options:F})})};c(203);var E=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)("worldwide"),o=Object(d.a)(r,2),i=o[0],v=o[1],O=Object(a.useState)({}),m=Object(d.a)(O,2),y=m[0],g=m[1],_=Object(a.useState)([]),C=Object(d.a)(_,2),N=C[0],w=C[1],k=Object(a.useState)([34.80746,-40.4796]),S=Object(d.a)(k,2),D=S[0],z=S[1],F=Object(a.useState)(3),L=Object(d.a)(F,2),E=L[0],W=L[1],A=Object(a.useState)([]),G=Object(d.a)(A,2),J=G[0],P=G[1],Y=Object(a.useState)("cases"),q=Object(d.a)(Y,2),V=q[0],Z=q[1],H=Object(a.useState)(!1),K=Object(d.a)(H,2),Q=K[0],U=K[1];Object(a.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){g(e)}))}),[]),Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),c=B(e);w(c),P(e),s(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var X=function(){var e=Object(u.a)(l.a.mark((function e(t){var c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(!0),c=t.target.value,v(c),n="worldwide"===c?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(c),e.next=6,fetch(n).then((function(e){return e.json()})).then((function(e){v(c),g(e),U(!1),z("worldwide"===c?[34.80746,-40.4796]:[e.countryInfo.lat,e.countryInfo.long]),W(4)}));case 6:console.log(y);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsxs)("div",{className:"app__left",children:[Object(n.jsxs)("div",{className:"app__header",children:[Object(n.jsx)("h1",{children:"Covid-19 tracker"}),Object(n.jsx)(j.a,{className:"app__dropdown",children:Object(n.jsxs)(f.a,{variant:"outlined",onChange:X,value:i,children:[Object(n.jsx)(h.a,{value:"worldwide",children:"Worldwide"}),c.map((function(e){return Object(n.jsx)(h.a,{value:e.value,children:e.name})}))]})})]}),Object(n.jsxs)("div",{className:"app__stats",children:[Object(n.jsx)(x,{isRed:!0,active:"cases"===V,className:"infoBox__cases",onClick:function(e){return Z("cases")},title:"Coronavirus Cases",total:T(y.cases),cases:T(y.todayCases),isloading:Q}),Object(n.jsx)(x,{active:"recovered"===V,className:"infoBox__recovered",onClick:function(e){return Z("recovered")},title:"Recovered",total:T(y.recovered),cases:T(y.todayRecovered),isloading:Q}),Object(n.jsx)(x,{isGrey:!0,active:"deaths"===V,className:"infoBox__deaths",onClick:function(e){return Z("deaths")},title:"Deaths",total:T(y.deaths),cases:T(y.todayDeaths),isloading:Q})]}),Object(n.jsx)(I,{countries:J,center:D,zoom:E,casesType:V})]}),Object(n.jsx)(b.a,{className:"app__right",children:Object(n.jsxs)(p.a,{children:[Object(n.jsx)("h3",{children:"Live Cases by Country"}),Object(n.jsx)(R,{countries:N}),Object(n.jsxs)("h3",{className:"app__graphTitle",children:["WorldWide new ",V]}),Object(n.jsx)(M,{className:"app__graph",casesType:V})]})})]})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,246)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(E,{})}),document.getElementById("root")),W()},66:function(e,t,c){},99:function(e,t,c){}},[[204,1,2]]]);
//# sourceMappingURL=main.9a2a76cc.chunk.js.map