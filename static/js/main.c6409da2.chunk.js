(this["webpackJsonpchat-app2"]=this["webpackJsonpchat-app2"]||[]).push([[0],{32:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),s=a(26),r=a.n(s),i=(a(32),a(11)),o=a(22),l=(a(33),a(15)),u=a(23),j=a(19),b=(a(34),a(41),{apiKey:"AIzaSyCCp-qwLGq9MugKd0g3rzLJBiL2bRW-tmY",authDomain:"chat-app-11b84.firebaseapp.com",databaseURL:"https://chat-app-11b84-default-rtdb.europe-west1.firebasedatabase.app",projectId:"chat-app-11b84",storageBucket:"chat-app-11b84.appspot.com",messagingSenderId:"561002742526",appId:"1:561002742526:web:1ea255108f7778f356dbaf",measurementId:"G-T5Y24K7FG6"});j.a.apps.length||j.a.initializeApp(b);var p=a(1),m=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)([]),r=Object(i.a)(s,2),b=r[0],m=r[1],d=Object(c.useState)(null),h=Object(i.a)(d,2),O=h[0],f=h[1],x=Object(c.useState)(null),g=Object(i.a)(x,2),v=g[0],y=g[1],S=j.a.firestore();b.length>0&&S.collection("texts").doc("DwcucDim2waadle0CLOF").update({array:j.a.firestore.FieldValue.arrayUnion({name:b.slice(-1)[0].name,message:b.slice(-1)[0].inputValue})});return null===v?Object(p.jsxs)(l.a,{onSubmit:function(e){e.preventDefault(),y(O)},children:[Object(p.jsx)(l.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:Object(p.jsx)(l.a.Control,{onChange:function(e){f(e.target.value)},type:"text",placeholder:"write your user name to join chat"})}),Object(p.jsx)(u.a,{title:"getUserName",variant:"primary",type:"submit",children:"Submit"})]}):Object(p.jsxs)(l.a,{onKeyPress:function(e){13!==e.charCode||e.shiftKey||(m([].concat(Object(o.a)(b),[a])),e.target.value="")},onSubmit:function(e){e.preventDefault(),m([].concat(Object(o.a)(b),[a])),e.target.reset()},children:[Object(p.jsx)(l.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:Object(p.jsx)(l.a.Control,{className:"textArea",onChange:function(e){n({inputValue:e.target.value,name:v})},as:"textarea",rows:3})}),Object(p.jsx)(u.a,{title:"messageForm",variant:"primary",type:"submit",children:"Submit"})]})},d=(a(39),a(27)),h=a.n(d),O=function(e){var t=e.state,a=Object(c.useRef)(null);return Object(c.useEffect)((function(){a.current.scrollIntoView({behavior:"smooth"})}),[t]),Object(p.jsxs)("div",{children:[t[0].array.slice(Math.max(t[0].array.length-50,0)).map((function(e){return Object(p.jsxs)("div",{className:"messages",children:[Object(p.jsxs)("div",{className:"flexing",children:[Object(p.jsx)("p",{className:"itemName",children:e.name}),Object(p.jsxs)("p",{className:"itemDate",children:[(new Date).toString()," "]})]}),Object(p.jsx)("p",{className:"itemMessage",children:e.message})]},h()())})),Object(p.jsx)("div",{ref:a})]})};var f=function(){var e=j.a.firestore().collection("texts"),t=Object(c.useState)([{array:[{name:"",message:""}]}]),a=Object(i.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(!1),o=Object(i.a)(r,2),l=o[0],u=o[1];return Object(c.useEffect)((function(){u(!0),e.onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),s(t),u(!1)}))}),[]),l?Object(p.jsx)("h1",{children:"Loading..."}):Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("div",{className:"display",children:Object(p.jsx)(O,{state:n})}),Object(p.jsx)("div",{className:"inputField",children:Object(p.jsx)(m,{})})]})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,42)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(f,{})}),document.getElementById("root")),x()}},[[40,1,2]]]);
//# sourceMappingURL=main.c6409da2.chunk.js.map