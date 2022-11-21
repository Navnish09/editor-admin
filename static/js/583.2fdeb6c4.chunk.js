"use strict";(self.webpackChunkeditor_admin=self.webpackChunkeditor_admin||[]).push([[583],{1583:function(e,n,s){s.r(n),s.d(n,{default:function(){return H}});var t=s(2791),r=s(3463),i=s(4165),c=s(5861),a=s(885),l=s(1413),o=s(184),d=function(e){var n=e.data,s=e.columns,t=e.templates;return(0,o.jsx)("tbody",{children:n.map((function(e,n){var r=s.map((function(e){return e.accessor}));return(0,o.jsx)("tr",{className:"border-top",children:r.map((function(r,i){var c;return(0,o.jsx)("td",{className:"align-middle",style:(0,l.Z)({width:s[i].width},s[i].grow?{flexGrow:1}:{}),children:e[r]||null!==t&&void 0!==t&&t[r]?(null===t||void 0===t||null===(c=t[r])||void 0===c?void 0:c.call(t,(0,l.Z)((0,l.Z)({},e),{},{index:n})))||e[r]:null},"".concat(i,"-").concat(r))}))},n)}))})},u=function(e){var n=e.columns;return(0,o.jsx)("thead",{children:(0,o.jsx)("tr",{children:n.map((function(e,n){return(0,o.jsx)("th",{style:(0,l.Z)({width:e.width||"auto"},e.grow?{flexGrow:1}:{}),className:"border-0 text-uppercase font-medium",children:e.Header},"".concat(n,"-").concat(e.accessor))}))})})},m=function(e){var n=e.title,s=e.subtitle;return(0,o.jsxs)(o.Fragment,{children:[n&&(0,o.jsx)(r.ll,{tag:"h5",children:n}),s&&(0,o.jsx)(r._R,{className:"mb-2 text-muted",style:{fontSize:"0.9rem"},tag:"p",children:s})]})},x=function(){return(0,o.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,o.jsx)(r.$j,{color:"secondary"})})},h=function(e){var n=e.columns,s=e.data,t=e.templates,i=e.configs,c=e.loading,a=(null===i||void 0===i?void 0:i.title)||(null===i||void 0===i?void 0:i.subtitle);return(0,o.jsx)(r.Zb,{children:(0,o.jsxs)(r.eW,{children:[(0,o.jsx)(m,{title:(null===i||void 0===i?void 0:i.title)||"",subtitle:(null===i||void 0===i?void 0:i.subtitle)||""}),(0,o.jsx)(r.iA,{className:"no-wrap ".concat(a?"mt-3":"mb-0"," align-middle"),responsive:!0,borderless:!0,hover:!0,children:c?(0,o.jsx)(x,{}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u,{columns:n}),(0,o.jsx)(d,{data:s,columns:n,templates:t,loading:c})]})})]})})},j=JSON.parse('{"H":{"getSubmissions":"/getSubmissions"}}').H,f=function(){var e=(0,c.Z)((0,i.Z)().mark((function e(){var n,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=j.getSubmissions,n="".concat("https://easy-polo-shirt-slug.cyclic.app").concat(t),e.next=3,fetch(n);case 3:return s=e.sent,e.next=6,s.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}var t}),e)})));return function(){return e.apply(this,arguments)}}(),v=JSON.parse('{"r":{"title":"Submissions","subtitle":"Code submissions by students"},"z":[{"Header":"ID","accessor":"_id","width":300,"grow":true},{"Header":"Name","accessor":"name","width":200,"grow":true},{"Header":"Email","accessor":"email","width":250,"grow":true},{"Header":"Code","accessor":"code","width":100,"grow":true},{"Header":"Actions","accessor":"actions","width":95}]}'),p=function(e){var n=e.isOpen,s=e.content,t=e.title,i=e.footerButtons,c=e.toggleModal,a=e.size,l=void 0===a?"md":a;return(0,o.jsx)("div",{children:(0,o.jsxs)(r.u_,{isOpen:n,toggle:c,size:l,keyboard:!0,unmountOnClose:!0,children:[t&&(0,o.jsx)(r.xB,{toggle:c,children:t}),(0,o.jsx)(r.fe,{children:s}),i&&(0,o.jsx)(r.mz,{children:null===i||void 0===i?void 0:i.map((function(e){return(0,o.jsx)(r.zx,{color:e.type,onClick:e.onClick,children:e.text})}))})]})})},g=s(599),b=s(777),w=function(e){var n=e.code;return(0,o.jsx)("div",{style:{maxHeight:"80vh"},children:(0,o.jsx)(g.Z,{language:"solidity",style:b.Z,wrapLongLines:!0,children:n})})},N=function(){var e=(0,t.useState)([]),n=(0,a.Z)(e,2),s=n[0],l=n[1],d=(0,t.useState)(),u=(0,a.Z)(d,2),m=u[0],x=u[1],j=(0,t.useState)(!1),g=(0,a.Z)(j,2),b=g[0],N=g[1],k=(0,t.useState)(!1),y=(0,a.Z)(k,2),Z=y[0],S=y[1],z=v.r,C=v.z,H={code:function(e){return(0,o.jsx)(r.zx,{outline:!0,size:"sm",onClick:function(){return function(e){N(!0),x(e)}(e)},children:"View"})},actions:function(){return"- - - - - - -"}};return(0,t.useEffect)((function(){S(!0),(0,c.Z)((0,i.Z)().mark((function e(){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f();case 3:n=e.sent,l(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:return e.prev=10,S(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))()}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p,{isOpen:b,size:"lg",content:(0,o.jsx)(w,{code:(null===m||void 0===m?void 0:m.code)||""}),title:"Submitted code",toggleModal:function(){return N(!1)}}),(0,o.jsx)(r.X2,{children:(0,o.jsx)(r.JX,{lg:"12",children:(0,o.jsx)(h,{configs:z,columns:C,data:s,templates:H,loading:Z})})})]})},k=s(7689),y=s(1087),Z=function(){return(0,o.jsx)(o.Fragment,{})},S=[{title:"Dashboard",href:"/",icon:"bi bi-bar-chart-steps"}],z=function(){var e=(0,k.TH)();return(0,o.jsxs)("div",{className:"p-3",children:[(0,o.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[(0,o.jsx)(Z,{}),(0,o.jsx)("div",{className:"ms-auto d-lg-none",children:(0,o.jsx)(r.zx,{close:!0,size:"sm",onClick:function(){return function(){var e;null===(e=document.getElementById("sidebarArea"))||void 0===e||e.classList.toggle("showSidebar")}()}})})]}),(0,o.jsx)("div",{className:"",children:(0,o.jsx)(r.JL,{vertical:!0,className:"sidebarNav",children:S.map((function(n,s){return(0,o.jsx)(r.LY,{className:"sidenav-bg",children:(0,o.jsxs)(y.rU,{to:n.href,className:e.pathname===n.href?"text-secondary nav-link py-3":"nav-link text-secondary py-3",children:[(0,o.jsx)("i",{className:n.icon}),(0,o.jsx)("span",{className:"ms-3 d-inline-block",children:n.title})]})},s)}))})})]})},C=function(){var e=t.useState(!1),n=(0,a.Z)(e,2),s=n[0],i=n[1],c=t.useState(!1),l=(0,a.Z)(c,2),d=l[0],u=l[1];return(0,o.jsxs)(r.wp,{color:"dark",dark:!0,expand:"md",children:[(0,o.jsx)("div",{className:"d-flex align-items-center",children:(0,o.jsx)(r.zx,{color:"dark",className:"d-md-none",onClick:function(){return function(){var e;null===(e=document.getElementById("sidebarArea"))||void 0===e||e.classList.toggle("showSidebar")}()},children:(0,o.jsx)("i",{className:"bi bi-list"})})}),(0,o.jsx)("div",{className:"hstack gap-2",children:(0,o.jsx)(r.zx,{color:"dark",size:"sm",className:"d-sm-block d-md-none",onClick:function(){i(!s)},children:s?(0,o.jsx)("i",{className:"bi bi-x"}):(0,o.jsx)("i",{className:"bi bi-three-dots-vertical"})})}),(0,o.jsx)(r.UO,{navbar:!0,isOpen:s,className:"justify-content-end",children:(0,o.jsxs)(r.Lt,{isOpen:d,toggle:function(){return u((function(e){return!e}))},children:[(0,o.jsx)(r.Z_,{color:"dark",children:(0,o.jsx)("img",{src:"".concat("/editor-admin","/users/user5.jpg"),alt:"profile",className:"rounded-circle",width:"30"})}),(0,o.jsx)(r.h_,{children:(0,o.jsx)(r.hP,{children:"Logout"})})]})})]})},H=function(){return(0,o.jsx)("main",{children:(0,o.jsxs)("div",{className:"pageWrapper d-lg-flex",children:[(0,o.jsx)("aside",{className:"sidebarArea shadow",id:"sidebarArea",children:(0,o.jsx)(z,{})}),(0,o.jsxs)("div",{className:"contentArea",children:[(0,o.jsx)(C,{}),(0,o.jsx)(r.W2,{className:"p-4 wrapper",fluid:!0,children:(0,o.jsx)(N,{})})]})]})})}}}]);
//# sourceMappingURL=583.2fdeb6c4.chunk.js.map