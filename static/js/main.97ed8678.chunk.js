(this["webpackJsonpbayanihan-dir"]=this["webpackJsonpbayanihan-dir"]||[]).push([[0],{119:function(n,e,t){},121:function(n,e,t){"use strict";t.r(e);var i,c,a,o,r,s,l=t(1),d=t.n(l),u=t(16),j=t.n(u),b=t(7),p=t(86),h=t(22),x=t.n(h),g=new x.a.Icon({iconUrl:"/images/pin.svg",iconSize:new x.a.Point(30,30)}),f=[12.8797,121.774],m=t(12),v=t(10),O=t(19),w=t(32),y="@media only screen and (max-width: 768px)",k={sm:"5px",md:"12px",lg:"18px",xl:"35px"},C={sm:"2px",md:"5px",lg:"12px",xl:"20px",xxl:"35px"},S={primary:"#2E3434",transparent:"rgba(0,0,0,0)",white:"#ffffff",black:"#000000",dark:"#212121",dark10:"#474747",dark20:"#3b3b3b",dark30:"#2e2e2e",grey91:"#e8e8e8",link:"#2a9df4"},z=function(n){return"number"===typeof n?"".concat(n,"px"):C[n]},A=function(n){return S[n]},$=t(5),B=t(4),E=t(9),F=(B.a.div(i||(i=Object($.a)([""]))),B.a.button((function(n){var e=n.textAlign,t=n.block,i=n.color,c=n.textColor,a=n.cta,o=n.size,r=n.marginB,s=void 0===r?0:r,l=n.marginT,d=void 0===l?0:l,u=n.marginL,j=void 0===u?0:u,b=n.marginR,p=void 0===b?0:b,h=n.iconPos,x=n.uppercase,g=void 0!==x&&x,f=n.loading,m=n.disabled,v=n.center,O=i?A(i):S.primary;return"\n  cursor: pointer;\n  position: relative;\n  ".concat(t?"display: block; width: 100%;":"width: fit-content;",";\n  border-radius: 5px;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  border: 0;\n  overflow: hidden;\n  transition: all 0.2s ease;\n  \n  svg {\n    width: 20px;\n    height: 20px;\n    margin-").concat("left"===h?"right":"left",": 10px;\n  }\n  \n  margin-bottom: ").concat(z(s),";\n  margin-top: ").concat(z(d),";\n  margin-left: ").concat(v?"auto":z(j),";\n  margin-right: ").concat(v?"auto":z(p),";\n\n  transition: all 0.1s ease-in;\n\n\n  ").concat(g?"\n         text-transform: uppercase;\n         letter-spacing: 2px;\n  ":"","\n\n  ").concat("center"===e?"\n          justify-content: center;\n  ":"","\n\n\n  ").concat("left"===e?"\n          justify-content: flex-start;\n  ":"","\n\n\n  ").concat("right"===e?"\n          justify-content: flex-end;\n  ":"","\n\n  ").concat("sm"===o?"\n          height: 25px;\n          font-size: 10px;\n          padding: ".concat(k.lg,";\n        "):"","\n  ").concat("normal"===o?"\n          height: 35px;\n          font-size: 14px;\n          padding: 0 ".concat(k.lg,";\n        "):"","\n  ").concat("md"===o?"\n          height: 40px;\n          font-size: 15px;\n          padding: 0 ".concat(k.lg,";\n        "):"","\n  ").concat("lg"===o?"\n          height: 50px;\n          padding: 0 ".concat(k.xl,";\n        "):"","\n\n  ").concat("primary"===a?"\n          background: ".concat(m?Object(E.b)(.2,O):O,";\n          color: ").concat(c||S.white,";\n\n          ").concat(f?"":"\n            &:hover{\n              background: ".concat(Object(E.a)(.1,O),";\n            }\n            &:active{\n              background: ").concat(Object(E.a)(.15,O),";\n            }\n          "),"\n        "):"","\n\n  ").concat("ghost"===a?"\n          background: ".concat(S.white,";\n          color: ").concat(c||O,";\n        "):"","\n\n   ").concat("bordered"===a?"\n          background: ".concat(m?Object(E.c)(0,0,0,.005):Object(E.c)(0,0,0,0),"; \n          -webkit-box-shadow:inset 0px 0px 0px 2px ").concat(m?Object(E.b)(.4,O):O,";\n          -moz-box-shadow:inset 0px 0px 0px 2px ").concat(m?Object(E.b)(.4,O):O,";\n          box-shadow:inset 0px 0px 0px 2px ").concat(m?Object(E.b)(.4,O):O,";\n          color: ").concat(m?Object(E.b)(.4,O):O,";\n\n          ").concat(f?"":"\n            &:hover {\n              background: ".concat(Object(E.c)(O,.1),";\n              -webkit-box-shadow:inset 0px 0px 0px 2px ").concat(Object(E.a)(.1,O),";\n              -moz-box-shadow:inset 0px 0px 0px 2px ").concat(Object(E.a)(.1,O),";\n              box-shadow:inset 0px 0px 0px 2px ").concat(Object(E.a)(.1,O),";\n            }\n            &:active {\n              background: ").concat(Object(E.c)(O,.15),";\n              -webkit-box-shadow:inset 0px 0px 0px 2px ").concat(Object(E.a)(.15,O),";\n              -moz-box-shadow:inset 0px 0px 0px 2px ").concat(Object(E.a)(.15,O),";\n              box-shadow:inset 0px 0px 0px 2px ").concat(Object(E.a)(.15,O),";\n            }\n          "),"\n        "):"","\n")}))),P=B.a.div((function(n){var e=n.cta,t=n.color,i=t?A(t):S.primary;return"\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: scale(1.01);\n\n  svg{\n    margin: 0;\n  }\n\n\n  ".concat("bordered"===e?"\n      background: rgba(255,255,255,0.8);\n      .loading{\n        background-color: ".concat(i,";\n      }\n  "):"","\n\n    ").concat("primary"===e?"\n      background: ".concat(Object(E.d)(.4,Object(E.a)(.3,i)),";\n      .loading{\n        background-color: ").concat(S.white,";\n      }\n  "):"","\n\n    ").concat("ghost"===e?"\n      background: rgba(255, 255, 255,0.8);\n      .loading{\n        background-color: ".concat(i,";\n      }\n  "):"","\n")})),L=t(2),M=function(n){var e=n.icon,t=n.text,i=n.color,c=void 0===i?"primary":i,a=n.loadingColor,o=void 0===a?"primary":a,r=n.cta,s=void 0===r?"primary":r,l=n.size,d=void 0===l?"normal":l,u=n.textAlign,j=void 0===u?"center":u,b=n.iconPos,p=void 0===b?"left":b,h=n.loading,x=n.disabled,g=n.type,f=void 0===g?"button":g,m=Object(O.a)(n,["icon","text","color","loadingColor","cta","size","textAlign","iconPos","loading","disabled","type"]),y=A(o),k=Object(L.jsx)(L.Fragment,{children:Boolean(null===e||void 0===e?void 0:e.length)&&function(){var n=w[[e][0]];return Object(L.jsx)(n,{})}()});return Object(L.jsxs)(F,Object(v.a)(Object(v.a)({iconPos:p,textAlign:j,cta:s,size:d,loading:h,disabled:h||x,type:f,color:c},m),{},{children:["left"===p?k:"",t,"right"===p?k:"",h&&Object(L.jsx)(P,{color:c,cta:s,children:Object(L.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.0",width:"256px",height:"64px",viewBox:"0 0 128 32",children:[Object(L.jsx)("circle",{fill:y,cx:"0",cy:"0",r:"11",transform:"translate(16 16)",children:Object(L.jsx)("animateTransform",{attributeName:"transform",type:"scale",additive:"sum",values:"1;1.42;1;1;1;1;1;1;1;1",dur:"750ms",repeatCount:"indefinite"})}),Object(L.jsx)("circle",{fill:y,cx:"0",cy:"0",r:"11",transform:"translate(64 16)",children:Object(L.jsx)("animateTransform",{attributeName:"transform",type:"scale",additive:"sum",values:"1;1;1;1;1.42;1;1;1;1;1",dur:"750ms",repeatCount:"indefinite"})}),Object(L.jsx)("circle",{fill:y,cx:"0",cy:"0",r:"11",transform:"translate(112 16)",children:Object(L.jsx)("animateTransform",{attributeName:"transform",type:"scale",additive:"sum",values:"1;1;1;1;1;1;1;1.42;1;1",dur:"750ms",repeatCount:"indefinite"})})]})})]}))},N=B.a.div(c||(c=Object($.a)(["\n  width: 100%;\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 30px;\n\n  "," {\n    padding: 0 20px;\n  }\n"])),y),R=B.a.div((function(n){var e=n.withBG;return"\n  transition: all 0.2s ease;\n  background: ".concat(e?Object(E.c)(S.primary,.9):"none",";\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 60px;\n  z-index: 999;\n  display: flex;\n  align-items: center;\n")})),T=B.a.img(a||(a=Object($.a)(["\n  cursor: pointer;\n  height: 25px;\n  color: ",";\n"])),S.white),D=Object(B.a)(N)(o||(o=Object($.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),I=B.a.div(r||(r=Object($.a)(["\n  display: flex;\n  align-items: center;\n"]))),_=B.a.div(s||(s=Object($.a)(["\n  a {\n    color: ",";\n    margin-right: 40px;\n  }\n\n  "," {\n    display: none;\n  }\n"])),S.white,y),U=[{name:"Home",route:"/"},{name:"Map",route:"/map"}],W=function(n){var e=n.headerBg,t=Object(b.f)().push,i=Object(l.useState)(0),c=Object(m.a)(i,2),a=c[0],o=c[1],r=e||a>70;return Object(l.useEffect)((function(){var n=function(){o(window.pageYOffset)};return window.addEventListener("scroll",n),function(){return window.removeEventListener("scroll",n)}})),Object(L.jsx)(R,{withBG:r,children:Object(L.jsxs)(D,{children:[Object(L.jsx)(T,{src:"/images/logo".concat(r?"":"-simple",".svg"),onClick:function(){return t("/")}}),Object(L.jsxs)(I,{children:[Object(L.jsx)(_,{children:U.map((function(n){var e=n.route,i=n.name;return Object(L.jsx)("a",{onClick:function(){return t(e)},children:i},e)}))}),Object(L.jsx)(M,{onClick:function(){return t("/add-pantry")},color:"white",cta:"bordered",icon:"AiFillHeart",text:"Add community pantry"})]})]})})},q=function(n){var e=n.children,t=n.title,i=n.headerBg;return Object(l.useEffect)((function(){document.title="".concat("Bayanihandir"," - ").concat(t)})),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(W,{headerBg:i}),e]})},J=function(n){return Object(L.jsx)("svg",Object(v.a)(Object(v.a)({viewBox:"0 0 1440 120"},n),{},{children:Object(L.jsx)("path",{d:"M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z"})}))};function G(n,e){var t=Object(l.useState)((function(){try{var t=window.localStorage.getItem(n);return t?JSON.parse(t):e}catch(i){return console.log(i),e}})),i=Object(m.a)(t,2),c=i[0],a=i[1];return[c,function(e){try{var t=e instanceof Function?e(c):e;a(t),window.localStorage.setItem(n,JSON.stringify(t))}catch(i){console.log(i)}}]}var Z,H,V,Y,Q,X,K,nn,en,tn,cn,an,on,rn,sn,ln,dn,un,jn,bn,pn,hn,xn,gn,fn,mn,vn,On,wn,yn,kn,Cn,Sn,zn,An=function(n){return Object(L.jsx)("svg",Object(v.a)(Object(v.a)({width:"23",height:"23",viewBox:"0 0 23 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),{},{children:Object(L.jsx)("path",{d:"M22.9821 21.8315L16.8368 15.6862C18.3135 13.9133 19.05 11.6393 18.8928 9.3373C18.7357 7.03529 17.6971 4.88248 15.9931 3.32672C14.2892 1.77096 12.051 0.932021 9.74421 0.984436C7.43744 1.03685 5.23968 1.97658 3.60813 3.60813C1.97658 5.23968 1.03685 7.43744 0.984437 9.74421C0.932022 12.051 1.77096 14.2892 3.32672 15.9931C4.88248 17.6971 7.03529 18.7357 9.3373 18.8928C11.6393 19.05 13.9133 18.3135 15.6862 16.8368L21.8315 22.9821L22.9821 21.8315ZM2.63869 9.96233C2.63869 8.51385 3.06822 7.0979 3.87295 5.89353C4.67768 4.68917 5.82148 3.75048 7.15969 3.19617C8.49791 2.64186 9.97045 2.49683 11.3911 2.77941C12.8117 3.062 14.1167 3.75951 15.1409 4.78374C16.1651 5.80796 16.8627 7.11291 17.1452 8.53356C17.4278 9.9542 17.2828 11.4267 16.7285 12.765C16.1742 14.1032 15.2355 15.247 14.0311 16.0517C12.8268 16.8564 11.4108 17.286 9.96233 17.286C8.02064 17.2838 6.1591 16.5115 4.78612 15.1385C3.41313 13.7656 2.64085 11.904 2.63869 9.96233Z",fill:"black"})}))},$n=B.a.div(Z||(Z=Object($.a)(["\n  width: 100%;\n  height: 50px;\n  background: ",";\n  border-radius: 5px;\n  overflow: hidden;\n  display: grid;\n  grid-template-columns: 1fr 50px;\n"])),S.white),Bn=B.a.input(H||(H=Object($.a)(["\n  border: 0;\n  width: 100%;\n  height: 100%;\n  padding: 0 20px;\n"]))),En=B.a.div((function(n){var e=n.onClick;return"\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n\n  ".concat(e?"\n  &:hover {\n    background: rgba(0, 0, 0, 0.05);\n  }":"","\n\n  svg {\n    width: 20px;\n    height: 20px;\n  }\n")})),Fn=function(n){n.value,n.onReset,n.simple;var e=n.onClick,t=n.placeholder,i=n.onSearchClick,c=Object(O.a)(n,["value","onReset","simple","onClick","placeholder","onSearchClick"]);return Object(L.jsxs)($n,{onClick:e,children:[Object(L.jsx)(Bn,Object(v.a)({placeholder:t||"Search community pantry"},c)),Object(L.jsx)(En,{onClick:i,children:Object(L.jsx)(An,{})})]})},Pn=t(25),Ln=t(73),Mn=t.n(Ln),Nn=function(n,e){return n.filter((function(n){return JSON.stringify(n).toLocaleLowerCase().includes(e)}))},Rn=function(n){for(var e,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=3735928559^t,c=1103547991^t,a=0;a<n.length;a++)e=n.charCodeAt(a),i=Math.imul(i^e,2654435761),c=Math.imul(c^e,1597334677);return i=Math.imul(i^i>>>16,2246822507)^Math.imul(c^c>>>13,3266489909),4294967296*(2097151&(c=Math.imul(c^c>>>16,2246822507)^Math.imul(i^i>>>13,3266489909)))+(i>>>0)},Tn=function(n){return n.filter((function(n,e,t){return t.indexOf(n)===e}))},Dn={pantries:[],loadingPantries:!1,favorites:[],recentSearches:[],addFavorite:function(n){},removeFavorite:function(n){},addRecentSearches:function(n){},clearRecentSearches:function(){}},In=Object(l.createContext)(Dn),_n=function(n){var e=n.children,t=Object(l.useState)([]),i=Object(m.a)(t,2),c=i[0],a=i[1],o=Object(l.useState)(!1),r=Object(m.a)(o,2),s=r[0],d=r[1],u=G("favorites",[]),j=Object(m.a)(u,2),b=j[0],p=j[1],h=G("recentSearches",[]),x=Object(m.a)(h,2),g=x[0],f=x[1];return Object(l.useEffect)((function(){c&&s||(d(!0),Mn.a.get("https://spreadsheets.google.com/feeds/list/1fahZsfqpqeVyq5GBYtoUBUJ3ECjbjNDbcPcCIbg5IEg/1/public/full?alt=json").then((function(n){var e=n.data.feed.entry;a(function(n){return n.map((function(n,e){var t,i,c,a,o,r,s,l,d,u,j,b,p,h,x,g,f,m,v,O,w,y,k,C,S,z,A,$,B,E=null!==(t=null===n||void 0===n||null===(i=n.gsx$street_address)||void 0===i?void 0:i.$t)&&void 0!==t?t:"",F=null!==(c=null===n||void 0===n||null===(a=n.gsx$region)||void 0===a?void 0:a.$t)&&void 0!==c?c:"",P=null!==(o=null===n||void 0===n||null===(r=n.gsx$barangay)||void 0===r?void 0:r.$t)&&void 0!==o?o:"",L=null!==(s=null===n||void 0===n||null===(l=n.gsx$province)||void 0===l?void 0:l.$t)&&void 0!==s?s:"",M=null!==(d=null===n||void 0===n||null===(u=n.gsx$municipalitycity)||void 0===u?void 0:u.$t)&&void 0!==d?d:"",N=null!==(j=null===n||void 0===n||null===(b=n.gsx$coordinates)||void 0===b?void 0:b.$t)&&void 0!==j?j:"";return{id:"".concat(Rn("".concat(e,"-").concat(null===n||void 0===n||null===(p=n.id)||void 0===p?void 0:p.$t))),name:null!==(h=null===n||void 0===n||null===(x=n.gsx$pantryname)||void 0===x?void 0:x.$t)&&void 0!==h?h:"",desc:null!==(g=null===n||void 0===n||null===(f=n.gsx$description)||void 0===f?void 0:f.$t)&&void 0!==g?g:"",loc:"".concat(P," ").concat(M," ").concat(L,", ").concat(F),supplies:null!==(m=null===n||void 0===n||null===(v=n.gsx$supplies)||void 0===v?void 0:v.$t)&&void 0!==m?m:"",coords:{long:null!==(O=null===(w=N.split(","))||void 0===w?void 0:w[0])&&void 0!==O?O:"",lat:null!==(y=null===(k=N.split(","))||void 0===k?void 0:k[1])&&void 0!==y?y:""},sched:null!==(C=null===n||void 0===n||null===(S=n.gsx$schedule)||void 0===S?void 0:S.$t)&&void 0!==C?C:"",contact:{name:null!==(z=null===n||void 0===n||null===(A=n.gsx$contact)||void 0===A?void 0:A.$t)&&void 0!==z?z:"",phone:null!==($=null===n||void 0===n||null===(B=n.gsx$number)||void 0===B?void 0:B.$t)&&void 0!==$?$:""},city:M,street:E,region:F,barangay:P,province:L}}))}(e))})).finally((function(){d(!1)})))}),[c]),Object(L.jsx)(In.Provider,{value:{pantries:c,loadingPantries:s,favorites:b,recentSearches:g,addFavorite:function(n){return p(Tn([].concat(Object(Pn.a)(b),[n])))},removeFavorite:function(n){return p(b.filter((function(e){return e!==n})))},addRecentSearches:function(n){f(Tn([n].concat(Object(Pn.a)(g))).slice(0,5))},clearRecentSearches:function(){return f([])}},children:e})},Un=B.a.div(V||(V=Object($.a)(["\n  position: relative;\n  margin-top: ",";\n"])),C.lg),Wn=B.a.div(Y||(Y=Object($.a)(["\n  background: ",";\n  position: absolute;\n  top: 55px;\n  left: 0;\n  width: 100%;\n  border-radius: 10px;\n  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.05);\n  overflow: auto;\n  max-height: 200px;\n"])),S.white),qn=B.a.div(Q||(Q=Object($.a)(["\n  padding: ",";\n  flex-direction: column;\n\n  p {\n    display: flex;\n    align-items: center;\n\n    svg {\n      margin-left: ",";\n      opacity: 0.6;\n      cursor: pointer;\n    }\n\n    svg:hover {\n      opacity: 1;\n    }\n  }\n\n  button {\n    margin: 2px;\n  }\n\n  & > div {\n    flex-wrap: wrap;\n  }\n\n  &,\n  div {\n    display: flex;\n  }\n"])),k.lg,C.md),Jn=B.a.div(X||(X=Object($.a)(["\n  padding: "," ",";\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n  width: 100%;\n\n  &:hover {\n    background: rgba(0, 0, 0, 0.05);\n  }\n"])),k.md,k.lg),Gn=function(){var n=Object(l.useContext)(In),e=n.pantries,t=n.recentSearches,i=n.addRecentSearches,c=n.clearRecentSearches,a=Object(b.f)().push,o=Object(l.useState)(!1),r=Object(m.a)(o,2),s=r[0],d=r[1],u=Object(l.useState)(""),j=Object(m.a)(u,2),p=j[0],h=j[1],x=Object(l.useRef)(null),g=Nn(e,p);!function(n,e){Object(l.useEffect)((function(){var t=function(t){var i=null===n||void 0===n?void 0:n.current;i&&!i.contains(t.target)&&e(t)};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),function(){document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}}),[n,e])}(x,(function(){return d(!1)}));var f=t.map((function(n){var t,i=e.find((function(e){return e.id===n}));return{id:n,name:null!==(t=null===i||void 0===i?void 0:i.name)&&void 0!==t?t:""}})),v=p.length>0,O=f.length>0&&!v;return Object(L.jsxs)(Un,{ref:x,children:[Object(L.jsx)(Fn,{value:p,onChange:function(n){return h(n.target.value)},onFocus:function(){return d(!0)},placeholder:"Find community pantry nearby"}),s&&Object(L.jsxs)(Wn,{children:[O&&Object(L.jsxs)(qn,{children:[Object(L.jsxs)("p",{children:["Recent searches"," ",Object(L.jsx)(w.AiFillCloseCircle,{onClick:function(){return c()}})]}),Object(L.jsx)("div",{children:f.map((function(n){var e=n.name,t=n.id;return Object(L.jsx)(M,{marginR:"sm",size:"sm",text:e,icon:"AiOutlineSearch",onClick:function(){return a("/map/".concat(t))}},t)}))})]}),v&&Object(L.jsx)(L.Fragment,{children:g.map((function(n){var e=n.id,t=n.name,c=n.loc;return Object(L.jsxs)(Jn,{onClick:function(){i(e),a("/map/".concat(e))},children:[Object(L.jsx)("strong",{children:t}),Object(L.jsx)("span",{children:c})]},"suggestion-".concat(e))}))})]})]})},Zn=B.a.div(K||(K=Object($.a)(["\n  position: relative;\n  overflow: hidden;\n  height: 95vh;\n\n  .wave {\n    fill: #f4f5f7;\n    width: 100%;\n  }\n"]))),Hn=B.a.div(nn||(nn=Object($.a)(["\n  width: 100%;\n  height: 100%;\n  background: ",";\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 60;\n  display: grid;\n  grid-template-rows: 1fr auto;\n"])),Object(E.c)(Object(E.a)(.5,S.primary),.5)),Vn=Object(B.a)(N)(en||(en=Object($.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Yn=B.a.div(tn||(tn=Object($.a)(["\n  max-width: 600px;\n  display: flex;\n  flex-direction: column;\n\n  & > p {\n    margin-top: ",";\n    display: flex;\n    align-items: center;\n\n    img {\n      height: 30px;\n    }\n  }\n\n  & > a,\n  & > h1,\n  & > p {\n    color: ",";\n  }\n\n  "," {\n    h1 {\n      font-size: 22px;\n    }\n    .logo {\n      margin-left: 10px;\n      height: 30px;\n    }\n  }\n"])),C.lg,S.white,y),Qn=B.a.video(cn||(cn=Object($.a)(["\n  width: 100% !important;\n  height: 100% !important;\n  position: absolute;\n  border: 0;\n  z-index: 20;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  position: absolute;\n  left: 0;\n  right: 0;\n  object-fit: cover;\n"]))),Xn=function(){return Object(L.jsxs)(Zn,{children:[Object(L.jsxs)(Hn,{children:[Object(L.jsx)(Vn,{children:Object(L.jsxs)(Yn,{children:[Object(L.jsx)("h1",{children:"Looking for a community pantry near you to get involved in?"}),Object(L.jsx)(Gn,{}),Object(L.jsxs)("p",{children:["Data is live from"," ",Object(L.jsx)("a",{target:"_blank",href:"https://docs.google.com/spreadsheets/d/1fahZsfqpqeVyq5GBYtoUBUJ3ECjbjNDbcPcCIbg5IEg/edit#gid=0",children:Object(L.jsx)("img",{src:"/images/google-sheet.svg"})}),"."]})]})}),Object(L.jsx)(J,{className:"wave"})]}),Object(L.jsx)(Qn,{loop:!0,autoPlay:!0,muted:!0,src:"/videos/bayanihan.mp4"})]})},Kn=t(126),ne=t(55),ee={"1:1":"100%","16:9":"56.25%","9:16":"177.78%","4:3":"75%","3:4":"133.33%"},te=B.a.div((function(n){var e=n.type;return'\n    position: relative;\n    &::before {\n        content: "";\n        width: 1px;\n        margin-left: -1px;\n        float: left;\n        height: 0;\n        padding-top: '.concat(ee[e],';\n    }\n    &::after { \n        content: "";\n        display: table;\n        clear: both;\n    }')})),ie=B.a.div(an||(an=Object($.a)(["\n  padding: ",";\n  display: flex;\n  align-items: flex-end;\n  background: rgb(255, 255, 255);\n  background: linear-gradient(\n    180deg,\n    rgba(255, 255, 255, 0) 0%,\n    rgba(0, 0, 0, 0.2) 100%\n  );\n\n  span {\n    -webkit-line-clamp: 1;\n    color: ",";\n    font-size: 12px;\n  }\n"])),k.md,S.white),ce=B.a.div(on||(on=Object($.a)(["\n  background: linear-gradient(\n    165deg,\n    rgba(0, 0, 0, 0.3) 0%,\n    rgba(0, 0, 0, 0.5) 100%\n  );\n  opacity: 0;\n  transition: all 0.2s ease;\n  padding: ",";\n"])),k.md),ae=B.a.div(rn||(rn=Object($.a)(["\n  display: grid;\n  grid-template-columns: 20px 1fr;\n  grid-gap: ",";\n  align-items: center;\n"])),C.md),oe=Object(B.a)(ne.b)(sn||(sn=Object($.a)(["\n  color: ",";\n  margin-right: 10px;\n  width: 20px;\n  height: 20px;\n"])),S.white),re=Object(B.a)(ne.a)((function(n){var e=n.active;return"\n  width: 30px;\n  height: 30px;\n  fill: none;\n  stroke-width: 50px;\n  stroke: ".concat(S.white,";\n  transition: all 0.2s ease;\n  ").concat(e?"fill: ".concat(S.white,";"):"","\n\n  &:hover {\n    fill: ").concat(Object(E.c)(e?S.black:S.white,.6),";\n  }\n")})),se=B.a.div(ln||(ln=Object($.a)(["\n  background: ",";\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.05);\n  cursor: pointer;\n  transition: all 0.2s ease;\n\n  ",", ",", img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n\n  p,\n  span {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n  }\n\n  &:hover "," {\n    opacity: 1;\n  }\n\n  &:hover {\n    box-shadow: 1px 1px 15px 0px rgba(0, 0, 0, 0.1);\n  }\n"])),S.white,ie,ce,ce),le=Object(B.a)(te)(dn||(dn=Object($.a)(["\n  position: relative;\n\n  img {\n    object-fit: cover;\n  }\n"]))),de=B.a.div(un||(un=Object($.a)(["\n  padding: ",";\n\n  p {\n    -webkit-line-clamp: 2;\n  }\n\n  span {\n    font-weight: bold;\n    -webkit-line-clamp: 2;\n  }\n"])),k.lg),ue=function(n){var e=n.id,t=n.name,i=n.desc,c=n.coords,a=n.loc,o=Object(b.f)().push,r=Object(l.useContext)(In),s=r.favorites,d=r.addFavorite,u=r.removeFavorite,j=s.includes(e);return Object(L.jsxs)(se,{onClick:function(){return o("/map/".concat(e))},children:[Object(L.jsxs)(le,{type:"4:3",children:[Object(L.jsx)("img",{src:"https://static-maps.yandex.ru/1.x/?lang=en-US&ll=".concat(c.long,",").concat(c.lat,"&z=13&l=map&size=600,300"),loading:"lazy"}),Object(L.jsx)(ie,{children:a&&Object(L.jsxs)(ae,{children:[Object(L.jsx)(oe,{}),Object(L.jsx)("span",{children:a})]})}),Object(L.jsx)(ce,{children:Object(L.jsx)(Kn.a,{title:j?"Remove":"Add to favorites",children:Object(L.jsx)(re,{active:j,onClick:function(n){n.stopPropagation(),j?u(e):d(e)}})})})]}),Object(L.jsxs)(de,{children:[Object(L.jsx)("span",{children:t}),Object(L.jsx)("p",{children:i})]})]})},je=B.a.section(jn||(jn=Object($.a)(["\n  width: 100%;\n  padding: "," 0;\n\n  "," {\n    padding: "," 0;\n  }\n"])),k.xl,y,k.lg),be=function(n){var e=n.color,t=Object(O.a)(n,["color"]),i=e||S.primary;return Object(L.jsxs)("svg",Object(v.a)(Object(v.a)({xmlns:"http://www.w3.org/2000/svg",version:"1.0",width:"256px",height:"64px",viewBox:"0 0 128 32"},t),{},{children:[Object(L.jsx)("circle",{fill:i,cx:"0",cy:"0",r:"11",transform:"translate(16 16)",children:Object(L.jsx)("animateTransform",{attributeName:"transform",type:"scale",additive:"sum",values:"1;1.42;1;1;1;1;1;1;1;1",dur:"750ms",repeatCount:"indefinite"})}),Object(L.jsx)("circle",{fill:i,cx:"0",cy:"0",r:"11",transform:"translate(64 16)",children:Object(L.jsx)("animateTransform",{attributeName:"transform",type:"scale",additive:"sum",values:"1;1;1;1;1.42;1;1;1;1;1",dur:"750ms",repeatCount:"indefinite"})}),Object(L.jsx)("circle",{fill:i,cx:"0",cy:"0",r:"11",transform:"translate(112 16)",children:Object(L.jsx)("animateTransform",{attributeName:"transform",type:"scale",additive:"sum",values:"1;1;1;1;1;1;1;1.42;1;1",dur:"750ms",repeatCount:"indefinite"})})]}))},pe=B.a.div(bn||(bn=Object($.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: ",";\n\n  "," {\n    grid-template-columns: 1fr 1fr;\n  }\n"])),C.xl,y),he=B.a.div(pn||(pn=Object($.a)(["\n  margin: "," 0;\n"])),C.lg),xe=B.a.div(hn||(hn=Object($.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: "," 0;\n"])),k.lg),ge=Object(B.a)(be)(xn||(xn=Object($.a)(["\n  width: 100px;\n  margin: auto;\n  display: block;\n"]))),fe=B.a.div(gn||(gn=Object($.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  margin-bottom: ",";\n"])),C.lg),me=B.a.div((function(n){var e=n.active;return"\n  width: 100%;\n  padding: ".concat(k.md,";\n  text-align: center;\n  border-bottom: ").concat(Object(E.c)(S.primary,e?1:.1)," 3px solid;\n  cursor: pointer;\n\n  &:hover{\n    background: ").concat(Object(E.c)(S.primary,.05),";\n  }\n")})),ve=function(){var n=Object(l.useContext)(In),e=n.pantries,t=n.loadingPantries,i=n.favorites,c=Object(l.useState)(""),a=Object(m.a)(c,2),o=a[0],r=a[1],s=Object(l.useState)(10),d=Object(m.a)(s,2),u=d[0],j=d[1],b=Object(l.useState)("all"),p=Object(m.a)(b,2),h=p[0],x=p[1],g="all"===h?e:e.filter((function(n){return i.includes(n.id)})),f=(g=o?Nn(e,o):g).length,O=g.slice(0,u);return Object(L.jsx)(je,{children:t?Object(L.jsx)(ge,{}):Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)(he,{children:[Object(L.jsxs)("h2",{children:["Community Pantries (",e.length,")"]}),Object(L.jsx)(Fn,{onChange:function(n){return r(n.target.value)}})]}),Object(L.jsxs)(fe,{children:[Object(L.jsx)(me,{onClick:function(){return x("all")},active:"all"===h,children:"All"}),Object(L.jsx)(me,{onClick:function(){return x("favorites")},active:"favorites"===h,children:"Favorites"})]}),f>0?Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(pe,{children:O.map((function(n){return Object(L.jsx)(ue,Object(v.a)({},n),n.id)}))}),u<f&&Object(L.jsx)(xe,{children:Object(L.jsx)(M,{iconPos:"right",text:"Show more",onClick:function(){return j(u+10)}})})]}):Object(L.jsx)("p",{children:"No pantries found."})]})})},Oe=(B.a.div(fn||(fn=Object($.a)([""]))),B.a.div(mn||(mn=Object($.a)(["\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n\n  img {\n    height: 400px;\n  }\n\n  "," {\n    grid-template-columns: 1fr;\n\n    img {\n      width: 80%;\n      margin: auto;\n      display: block;\n    }\n\n    & > div {\n      order: 2;\n    }\n  }\n"])),y)),we=function(){var n=Object(b.f)().push;return Object(L.jsx)(je,{children:Object(L.jsxs)(Oe,{children:[Object(L.jsxs)("div",{children:[Object(L.jsx)("h1",{children:'"Donate what you can. Take what you need."'}),Object(L.jsxs)("p",{children:["The"," ",Object(L.jsx)("strong",{children:Object(L.jsx)("a",{href:"https://international.thenewslens.com/article/149976",target:"_blank",children:"community pantry"})})," ","craze that has spread nationwide undoubtedly showcases the Filipino"," ",Object(L.jsx)("strong",{children:Object(L.jsx)("a",{href:"https://www.shopcambio.co/blogs/news/the-bayanihan-spirit-7-filipino-social-enterprises-changing-communities#:~:text=Bayanihan%20(buy%2Duh%2Dnee,to%20achieve%20a%20common%20goal.",target:"_blank",children:"\u201cbayanihan\u201d"})})," ","trait at its finest. From condiments to fresh food items to medical supplies, the pantries have it all."]}),Object(L.jsxs)("p",{children:[Object(L.jsx)("strong",{children:"Bayanihandir"})," is a platform to find community pantries in different places around the Philippines. Whether you want to donate, volunteer to help, find where to get some goods, or even create another pantry, we are here to help you!"]}),Object(L.jsx)(M,{onClick:function(){return n("/map")},text:"Explore map",size:"lg",icon:"AiOutlineAim"})]}),Object(L.jsx)("img",{src:"/images/giving.svg"})]})})},ye=B.a.div(vn||(vn=Object($.a)(["\n  padding: 50px 0;\n  text-align: center;\n  font-size: 12px;\n\n  p {\n    padding: "," 0;\n  }\n\n  span {\n    font-size: 14px;\n  }\n"])),k.md),ke=function(){return Object(L.jsxs)(ye,{children:[Object(L.jsxs)("p",{children:["Want to help on updating google form data? Shoot me an email at"," ",Object(L.jsx)("a",{href:"mailto:chcepe@gmail.com",children:"chcepe@gmail.com"})]}),Object(L.jsxs)("span",{children:["Made in \ud83c\udde8\ud83c\uddff with \u2764\ufe0f by"," ",Object(L.jsx)("a",{href:"https://chcepe.github.io",target:"_blank",children:"chcepe"})]}),Object(L.jsx)("p",{children:Object(L.jsx)("a",{href:"https://github.com/chcepe/bayanihan-dir",target:"_blank",children:"source code"})})]})},Ce=B.a.div(On||(On=Object($.a)([""]))),Se=function(){return Object(L.jsxs)(Ce,{children:[Object(L.jsx)(Xn,{}),Object(L.jsxs)(N,{children:[Object(L.jsx)(we,{}),Object(L.jsx)(ve,{}),Object(L.jsx)(ke,{})]})]})},ze=function(){return Object(L.jsx)(q,{title:"Search",children:Object(L.jsx)(Se,{})})},Ae=t(123),$e=t(127),Be=t(128),Ee=t(124),Fe=t(125),Pe=t(58),Le=t(85),Me=B.a.div(wn||(wn=Object($.a)([""]))),Ne=B.a.div(yn||(yn=Object($.a)(["\n  background: ",";\n  width: 100%;\n  padding: ",";\n  border-radius: 10px;\n  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.05);\n  width: 100%;\n  margin-bottom: 100px;\n"])),S.white,k.xl),Re=B.a.div(kn||(kn=Object($.a)(["\n  width: 100%;\n  margin-top: -30px;\n  position: absolute;\n  top: 50vh;\n  z-index: 999;\n"]))),Te=B.a.div(Cn||(Cn=Object($.a)(["\n  display: grid;\n  grid-template-columns: 50px 1fr;\n  padding-bottom: ",";\n  align-items: flex-start;\n\n  svg {\n    width: 20px;\n    height: 20px;\n  }\n"])),k.lg),De=function(){var n=Object(l.useContext)(In).pantries,e=Object(b.g)().id,t=Object(b.f)().push,i=null,c=n.find((function(n){return n.id===e})),a=c?[null===c||void 0===c?void 0:c.coords.lat,null===c||void 0===c?void 0:c.coords.long]:f;if(Object(l.useEffect)((function(){var n;e&&i&&(c&&(null===(n=i)||void 0===n||n.setView([null===c||void 0===c?void 0:c.coords.lat,null===c||void 0===c?void 0:c.coords.long],20)))}),[e,n,i]),!c)return Object(L.jsx)(L.Fragment,{});var o=c.loc,r=c.sched,s=c.supplies,d=c.contact,u=c.desc,j=c.coords,p=[];return o&&(p=[].concat(Object(Pn.a)(p),[{id:"loc",icon:Object(L.jsx)(Pe.a,{}),value:Object(L.jsx)("a",{target:"_blank",href:"http://maps.google.com/maps?q=".concat(j.lat,",").concat(j.long),children:o})}])),r&&(p=[].concat(Object(Pn.a)(p),[{id:"sched",icon:Object(L.jsx)(w.AiFillCalendar,{}),value:r}])),s&&(p=[].concat(Object(Pn.a)(p),[{id:"supplies",icon:Object(L.jsx)(Le.a,{}),value:s}])),(d.name||d.phone)&&(p=[].concat(Object(Pn.a)(p),[{id:"contact",icon:Object(L.jsx)(w.AiFillPhone,{}),value:"".concat(d.name," / ").concat(d.phone)}])),u.length&&(p=[].concat(Object(Pn.a)(p),[{id:"details",icon:Object(L.jsx)(Pe.b,{}),value:u}])),Object(L.jsxs)(Me,{children:[Object(L.jsx)("div",{style:{height:"50vh"},children:Object(L.jsx)(Ae.a,{zoomControl:!1,zoomAnimation:!0,style:{height:"100%"},center:a,zoom:c?20:6,scrollWheelZoom:!0,children:Object(L.jsx)($e.a,{children:function(e){return i=e,Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(Be.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),n.map((function(n){var e=[n.coords.lat,n.coords.long];return Object(L.jsx)(Ee.a,{icon:g,position:e,eventHandlers:{click:function(e){t("/map/".concat(n.id))}},children:Object(L.jsx)(Fe.a,{children:n.name})},n.id)}))]})}})})}),Object(L.jsx)(Re,{children:Object(L.jsx)(N,{children:Object(L.jsxs)(Ne,{children:[Object(L.jsx)("h1",{children:c.name}),p.map((function(n){return Object(L.jsxs)(Te,{children:[n.icon,Object(L.jsx)("span",{children:n.value})]},n.id)})),Object(L.jsx)("br",{}),Object(L.jsx)("p",{children:"Want to update/edit this pantry?"}),Object(L.jsx)(M,{onClick:function(){return t("/edit-pantry")},text:"Request a change"})]})})})]})},Ie=function(){return Object(L.jsx)(q,{headerBg:!0,title:"Pantry",children:Object(L.jsx)(De,{})})},_e=B.a.div(Sn||(Sn=Object($.a)([""]))),Ue=function(){var n=Object(l.useContext)(In).pantries,e=Object(b.f)().push,t=f;return Object(L.jsx)(_e,{children:Object(L.jsx)("div",{style:{height:"100vh"},children:Object(L.jsxs)(Ae.a,{zoomControl:!1,zoomAnimation:!0,style:{height:"100%"},center:t,zoom:6,scrollWheelZoom:!0,children:[Object(L.jsx)(Be.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),n.map((function(n){var t=[n.coords.lat,n.coords.long];return Object(L.jsx)(Ee.a,{icon:g,position:t,children:Object(L.jsxs)(Fe.a,{children:[n.name,Object(L.jsx)(M,{marginT:"md",block:!0,onClick:function(){return e("/map/".concat(n.id))},text:"View Details"})]})},n.id)}))]})})})},We=function(){return Object(L.jsx)(q,{headerBg:!0,title:"Map",children:Object(L.jsx)(Ue,{})})},qe=B.a.iframe(zn||(zn=Object($.a)(["\n  margin-top: 60px;\n  width: 100%;\n  height: 100vh;\n  border: none;\n"]))),Je={HOME:{path:"/",component:ze,exact:!0},MAP:{path:"/map",component:We,exact:!0},MAP_ID:{path:"/map/:id",component:Ie,exact:!1},ADD_PANTRY:{path:"/add-pantry",component:function(){return Object(L.jsx)(q,{headerBg:!0,title:"Add pantry",children:Object(L.jsx)(qe,{src:"https://docs.google.com/forms/d/e/1FAIpQLScLkBDOsXdldlwGiUTabMhss9Lt79tn-1dNsHYCGwLfkebksg/viewform?embedded=true"})})},exact:!0},EDIT_PANTRY:{path:"/edit-pantry",component:function(){return Object(L.jsx)(q,{headerBg:!0,title:"Edit pantry",children:Object(L.jsx)(qe,{src:"https://docs.google.com/forms/d/e/1FAIpQLSf-o5VEIcVOqO_3tGDA2gXUw6eN9cXJRKUuEP2XwHrkCP7MNQ/viewform?embedded=true"})})},exact:!0}},Ge=Object.keys(Je).map((function(n){var e=Je[n],t=e.path,i=e.component,c=e.exact;return Object(L.jsx)(b.a,{path:t,component:i,exact:c},t)})),Ze=function(){return Object(L.jsx)(p.a,{children:Object(L.jsx)(b.c,{children:Ge})})},He=(t(118),t(119),t(120),function(){return Object(L.jsx)(_n,{children:Object(L.jsx)(Ze,{})})}),Ve=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ye(n){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var e=n.installing;e&&(e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}j.a.render(Object(L.jsx)(d.a.StrictMode,{children:Object(L.jsx)(He,{})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/bayanihan-dir",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/bayanihan-dir","/service-worker.js");Ve?(!function(n){fetch(n).then((function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):Ye(n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):Ye(n)}))}}()}},[[121,1,2]]]);