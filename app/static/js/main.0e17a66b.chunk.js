(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{244:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(15),i=n.n(l),r=(n(96),n(17)),s=n(18),o=n(20),u=n(19),d=n(21),m=n(90),h=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("header",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-2"},c.a.createElement("h4",null,"Soilsense"))))}}]),t}(c.a.Component),b=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("footer",{style:{padding:"30px",textAlign:"center"}},"Soilsense")}}]),t}(c.a.Component),f=n(33),p=n(52),v=n.n(p),E=n(53),w=n.n(E),j=n(88),O=n.n(j),k=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={ssid:"",psk:""},e.handlePsk=e.handlePsk.bind(Object(f.a)(e)),e.handleSsid=e.handleSsid.bind(Object(f.a)(e)),e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handlePsk",value:function(e){}},{key:"handleSsid",value:function(e){this.setState({ssid:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,n=t.ssid,a=t.psk;fetch("127.0.0.1/cgi-bin/connect.cgi?ssid="+n+"&psk="+a).then(function(){window.location.replace("https://soilsense.no/register")}).catch(function(){window.location.replace("https://soilsense.no/register")})}},{key:"render",value:function(){var e=this,t=this.state,n=t.ssid,a=t.psk;return c.a.createElement("div",{className:"container",style:{marginTop:"60px"}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6 offset-3"},c.a.createElement("h1",null,"Connect your device to Wifi"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6 offset-3"},c.a.createElement(v.a,null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},c.a.createElement(w.a,{style:{width:"100%"},label:"SSID",value:n,onChange:function(t){return e.handleSsid(t)}})),c.a.createElement("div",{className:"col-6"},c.a.createElement(w.a,{style:{width:"100%"},label:"Password",value:a,onChange:function(t){return e.handlePsk(t)}})),c.a.createElement("div",{className:"col-12",style:{textAlign:"right",marginTop:"15px"}},c.a.createElement(O.a,{variant:"contained",type:"submit",onClick:function(t){return e.handleSubmit(t)}},"Connect")))))))}}]),t}(c.a.Component),y=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(m.a,null,c.a.createElement(h,null),c.a.createElement(k,null),c.a.createElement(b,null))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},91:function(e,t,n){e.exports=n(244)},96:function(e,t,n){}},[[91,1,2]]]);
//# sourceMappingURL=main.0e17a66b.chunk.js.map