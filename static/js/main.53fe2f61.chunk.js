(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{40:function(e,t,a){e.exports=a(71)},50:function(e,t,a){},53:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),s=a.n(c),o=a(9),l=a.n(o),i=a(12),d=a(29),u=a(30),m=a(37),p=a(36),f=a(88),h=a(93),v=a(89),E=a(90),x=a(17),g=a.n(x),y=(a(50),function(e){return console.log("abc",e),e.data.confirmed?r.a.createElement("div",{className:"container"},r.a.createElement(f.a,{container:!0,spacing:2,justify:"centre"},r.a.createElement(f.a,{item:!0,component:h.a,xs:12,md:3,className:"card infected"},r.a.createElement(v.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Confirmed"),r.a.createElement(E.a,{variant:"h5"},r.a.createElement(g.a,{start:0,end:e.data.confirmed,duration:2.5,separator:","})),r.a.createElement(E.a,{color:"textSecondary"},e.data.lastUpdatedTime),r.a.createElement(E.a,{variant:"body2"},"Number of confirmed cases"))),r.a.createElement(f.a,{item:!0,component:h.a,xs:12,md:3,className:"card deaths"},r.a.createElement(v.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(E.a,{variant:"h5"},r.a.createElement(g.a,{start:0,end:e.data.deaths,duration:2.5,separator:","})),r.a.createElement(E.a,{color:"textSecondary"},e.data.lastUpdatedTime),r.a.createElement(E.a,{variant:"body2"},"Number of deaths"))),r.a.createElement(f.a,{item:!0,component:h.a,xs:12,md:3,className:"card recovered"},r.a.createElement(v.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(E.a,{variant:"h5"},r.a.createElement(g.a,{start:0,end:e.data.recovered,duration:2.5,separator:","})),r.a.createElement(E.a,{color:"textSecondary"},e.data.lastUpdatedTime),r.a.createElement(E.a,{variant:"body2"},"Number of recoveries"))))):"Loading....."}),b=function(e){return r.a.createElement("p",null)},w=a(92),k=a(91),S=function(e){return console.log("shshshshs",e),r.a.createElement(w.a,null,r.a.createElement(k.a,{onChange:function(t){return e.handleStateChange(t.target.value)}},e.stateList.map((function(e,t){return r.a.createElement("option",{key:t,value:e.state},e.state)}))))},j=(a(53),a(35)),C=a.n(j),N=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("https://api.covid19india.org/data.json");case 3:if(!(t=e.sent)||200!==t.status||!t.data){e.next=8;break}return a=t.data,n={confirmed:a.statewise[0].confirmed,deaths:a.statewise[0].deaths,recovered:a.statewise[0].recovered,lastUpdatedTime:a.statewise[0].lastupdatedtime,states:a.statewise},e.abrupt("return",n);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),O=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:null,states:[],stateIndex:0},e.stateChange=function(){var t=Object(i.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(typeof a),a&&(n=e.state.states.findIndex((function(e){return e.state===a})),console.log(n),e.setState({stateIndex:n}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,console.log("xyz",t.states),t&&this.setState({data:t,states:t.states});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Covid 19 cases in India"),r.a.createElement(S,{stateList:this.state.states,handleStateChange:this.stateChange}),this.state.data?r.a.createElement(y,{data:this.state.states[this.state.stateIndex]}):null,r.a.createElement(b,null))}}]),a}(r.a.Component);s.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.53fe2f61.chunk.js.map