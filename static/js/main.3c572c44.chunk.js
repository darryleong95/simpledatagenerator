(this.webpackJsonpsimpledatagenerator=this.webpackJsonpsimpledatagenerator||[]).push([[0],{84:function(e,t,a){e.exports=a(94)},89:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),l=a.n(i),o=(a(89),a(50)),c=a(60),s=a(119),u=a(129),d=a(121),m=a(131),f=a(130),p=a(135),g=a(127),h=a(64),v=a(11),y=a(128),b=a(53),x=a.n(b),w=Object(s.a)({root:{height:"100vh",width:"100vw",backgroundColor:"#f6f6f6",display:"flex",alignItems:"center",justifyContent:"center"},content:{padding:50,width:"60%",height:"60%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",backgroundColor:"#fff"},header:{height:"10%",display:"flex",justifyContent:"center",alignItems:"center"},headerText:{fontSize:25,fontWeight:"bold",color:"#2d2d2d"},numFields:{height:"10%",width:"100%"},fieldWrapper:{marginTop:10,paddingTop:10,paddingBottom:10,height:"65%",display:"flex",width:"100%",alignItems:"center",justifyContent:"flex-start",flexDirection:"column",overflowY:"scroll"},field:Object(c.a)({width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",flexDirection:"row",marginBottom:10},"display","flex"),buttonWrapper:{height:"10%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row"},button:{width:"100%",height:"80%"}}),E=function(e){var t=e.setDate,a=e.min,n=e.max,i=e.index;return r.a.createElement(v.a,{utils:h.a},r.a.createElement(y.a,{style:{marginRight:20},margin:"none",id:"date-picker-dialog",label:"Date picker dialog",format:"MM/dd/yyyy",value:a,onChange:function(e){return t(e,i,"min")},KeyboardButtonProps:{"aria-label":"change date"}}),r.a.createElement(y.a,{margin:"none",id:"date-picker-dialog",label:"Date picker dialog",format:"MM/dd/yyyy",value:n,onChange:function(e){return t(e,i,"max")},KeyboardButtonProps:{"aria-label":"change date"}}))},O=function(){var e=w(),t=Object(n.useState)(1),a=Object(o.a)(t,2),i=a[0],l=a[1],c=Object(n.useState)([{value:"",type:"text",constraint:"",min:"",max:""}]),s=Object(o.a)(c,2),h=s[0],v=s[1],y=Object(n.useState)(10),b=Object(o.a)(y,2),O=b[0],N=b[1],C=function(e){if(window.navigator&&window.navigator.msSaveOrOpenBlob){var t=new Blob([decodeURIComponent(encodeURI(JSON.stringify(e)))],{type:"application/json;charset=utf-8;"});navigator.msSaveOrOpenBlob(t,"data.json")}else{var a=document.createElement("a");a.download="data.json",a.href="data:application/json;charset=utf-8;,"+encodeURIComponent(JSON.stringify(e)),a.target="_blank",document.body.appendChild(a),a.click(),document.body.removeChild(a)}},S=function(e,t){return Math.floor(e+Math.random()*(t+1-e))},j=function(e,t){return(e+Math.random()*(t+1-e)).toFixed(2)},I=function(e,t){for(var a=S(e,t),n="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",i=r.length,l=0;l<a;l++)n+=r.charAt(Math.floor(Math.random()*i));return n},D=function(e,t,a){var n=JSON.parse(JSON.stringify(h));"min"==a?n[t].min=e:n[t].max=e,v(n)};return r.a.createElement(u.a,{className:e.root},r.a.createElement(u.a,{className:e.content},r.a.createElement(u.a,{className:e.header},r.a.createElement(d.a,{className:e.headerText},"Simple Data Generator")),r.a.createElement(m.a,{fullWidth:!0,variant:"outlined",className:e.numFields,label:"Number of Fields",type:"number",value:i,onChange:function(e){var t=e.target.value;if(t>i){for(var a=h,n=i;n<t;n++)a.push({value:"",type:"text",constraint:""});v(a)}else{for(var r=h,o=t;o<i;o++)r.pop();v(r)}l(t)}}),r.a.createElement(u.a,{className:e.fieldWrapper},h.map((function(t,a){return r.a.createElement(u.a,{className:e.field},r.a.createElement(m.a,{fullWidth:!0,label:"Field Name",variant:"outlined",value:t.value,onChange:function(e){return function(e,t){var a=JSON.parse(JSON.stringify(h));a[t].value=e.target.value,v(a)}(e,a)},style:{marginRight:10,flex:2}}),r.a.createElement(f.a,{style:{marginRight:10,flex:1,width:100},variant:"outlined",value:t.type,onChange:function(e){return function(e,t){var a=JSON.parse(JSON.stringify(h));a[t].type=e.target.value,"date"==e.target.value&&(a[t].min=new Date,a[t].max=new Date),v(a)}(e,a)}},r.a.createElement(p.a,{value:"text"},"String"),r.a.createElement(p.a,{value:"int"},"Int"),r.a.createElement(p.a,{value:"float"},"Float"),r.a.createElement(p.a,{value:"boolean"},"Boolean"),r.a.createElement(p.a,{value:"date"},"Date")),"date"==t.type?r.a.createElement(u.a,{style:{display:"flex",flexDirection:"row",flex:2}},r.a.createElement(E,{min:t.min,max:t.max,setDate:D,index:a})):r.a.createElement(u.a,{style:{display:"flex",flexDirection:"row",flex:2}},r.a.createElement(m.a,{disabled:"boolean"==t.type,type:"number",label:"min",style:{marginRight:10},fullWidth:!0,variant:"outlined",value:t.min,onChange:function(e){return function(e,t){var a=JSON.parse(JSON.stringify(h));a[t].min=e.target.value,v(a)}(e,a)}}),r.a.createElement(m.a,{disabled:"boolean"==t.type,type:"number",label:"max",fullWidth:!0,variant:"outlined",value:t.max,onChange:function(e){return function(e,t){var a=JSON.parse(JSON.stringify(h));a[t].max=e.target.value,v(a)}(e,a)}})))}))),r.a.createElement(u.a,{className:e.buttonWrapper},r.a.createElement(m.a,{fullWidth:!0,variant:"outlined",label:"Rows",type:"number",value:O,onChange:function(e){return N(e.target.value)},style:{marginRight:10}}),r.a.createElement(g.a,{className:e.button,variant:"contained",color:"primary",onClick:function(){for(var e=[],t=0;t<O;t++){for(var a={},n=0;n<i;n++){var r=h[n],l=r.min,o=r.max,c=r.value,s=r.type,u=void 0;if("text"==s)u=I(parseInt(l),parseInt(o));else if("int"==s)u=S(parseInt(l),parseInt(o));else if("float"==s)u=parseFloat(j(parseInt(l),parseInt(o)));else if("boolean"==s){u=[!0,!1][Math.round(Math.random())]}else u=S(x()(l).valueOf(),x()(o).valueOf());a[c]=u}e.push(a)}e=e.sort((function(e,t){return e-t})),C(e)},style:{fontWeight:500}},"Generate"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[84,1,2]]]);
//# sourceMappingURL=main.3c572c44.chunk.js.map