"use strict";(self.webpackChunkeditor_admin=self.webpackChunkeditor_admin||[]).push([[453],{5919:function(e,n,t){t.d(n,{r:function(){return o}});var r=t(885),a=t(2791),i=t(184),o=function(e){var n=e.show,t=e.children,o=e.animateIn,s=void 0===o?"fadeIn":o,u=e.animateOut,l=void 0===u?"fadeOut":u,c=(0,a.useState)(!1),d=(0,r.Z)(c,2),f=d[0],v=d[1];(0,a.useEffect)((function(){n&&v(n)}),[n]);return(0,i.jsx)(i.Fragment,{children:f&&(0,i.jsx)("div",{className:n?s:l,onAnimationEnd:function(){!n&&v(!1)},children:t})})}},8430:function(e,n,t){t.d(n,{z:function(){return o}});var r=t(1413),a=(t(2791),t(3463)),i=t(184),o=function(e){var n=e.isOpen,t=e.content,o=e.title,s=e.footerButtons,u=e.toggle,l=e.size,c=void 0===l?"md":l,d=e.centered,f=void 0!==d&&d;return(0,i.jsx)("div",{children:(0,i.jsxs)(a.u_,{isOpen:n,toggle:u,size:c,centered:f,keyboard:!0,unmountOnClose:!0,children:[o&&(0,i.jsx)(a.xB,{toggle:u,children:o}),(0,i.jsx)(a.fe,{children:t}),s&&(0,i.jsx)(a.mz,{children:null===s||void 0===s?void 0:s.map((function(e){return(0,i.jsx)(a.zx,(0,r.Z)((0,r.Z)({},e),{},{children:e.text}))}))})]})})}},2225:function(e,n,t){t.d(n,{a:function(){return d}});t(2791);var r=t(3463),a=t(1413),i=t(184),o=function(e){var n=e.data,t=e.columns,r=e.templates;return(0,i.jsx)("tbody",{children:n.map((function(e,n){var o=t.map((function(e){return e.accessor}));return(0,i.jsx)("tr",{className:"border-top",children:o.map((function(o,s){var u;return(0,i.jsx)("td",{className:"align-middle",style:(0,a.Z)({width:t[s].width,minWidth:t[s].minWidth||"auto",maxWidth:t[s].maxWidth||"auto",textAlign:t[s].align||"left"},t[s].grow?{flexGrow:1}:{}),children:e[o]||null!==r&&void 0!==r&&r[o]?(null===r||void 0===r||null===(u=r[o])||void 0===u?void 0:u.call(r,(0,a.Z)((0,a.Z)({},e),{},{index:n})))||e[o]:null},"".concat(s,"-").concat(o))}))},n)}))})},s=function(e){var n=e.columns;return(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:n.map((function(e,n){return(0,i.jsx)("th",{style:(0,a.Z)({width:e.width||"auto",textAlign:e.align||"left"},e.grow?{flexGrow:1}:{}),className:"border-0 font-medium",children:e.Header},"".concat(n,"-").concat(e.accessor))}))})})},u=function(e){var n=e.title,t=e.subtitle;return(0,i.jsxs)(i.Fragment,{children:[n&&(0,i.jsx)(r.ll,{tag:"h5",children:n}),t&&(0,i.jsx)(r._R,{className:"mb-2 text-muted",style:{fontSize:"0.9rem"},tag:"p",children:t})]})},l=function(){return(0,i.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,i.jsx)(r.$j,{color:"secondary"})})},c=function(e){var n=e.message;return(0,i.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,i.jsx)("h5",{children:n})})},d=function(e){var n=e.columns,t=e.data,a=e.templates,d=e.configs,f=e.loading,v=e.rowHover,m=void 0===v||v,h=(null===d||void 0===d?void 0:d.title)||(null===d||void 0===d?void 0:d.subtitle);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Zb,{children:(0,i.jsxs)(r.eW,{children:[(0,i.jsx)(u,{title:(null===d||void 0===d?void 0:d.title)||"",subtitle:(null===d||void 0===d?void 0:d.subtitle)||""}),(0,i.jsx)(r.iA,{className:"no-wrap ".concat(h?"mt-3":"mb-0"," align-middle"),responsive:!0,borderless:!0,hover:m,children:f?(0,i.jsx)(l,{}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{columns:n}),(null===t||void 0===t?void 0:t.length)>0&&(0,i.jsx)(o,{data:t,columns:n,templates:a,loading:f})]})})]})}),0===t.length&&!f&&(0,i.jsx)(c,{message:null===d||void 0===d?void 0:d.noDataMessage})]})}},6881:function(e,n,t){t.d(n,{D:function(){return r}});var r=function(e){return"".concat("https://easy-polo-shirt-slug.cyclic.app").concat(e)}},3294:function(e,n,t){t.d(n,{Z:function(){return r}});var r={all_questions:"All Questions",confirm:"Confirm",create_question:"Create Question",create_new_question:"Create New Question",no_questions:"No Questions",submitted_code:"Submitted Code",question_created:"Question created"}},2453:function(e,n,t){t.r(n),t.d(n,{Questions:function(){return Q},default:function(){return G}});var r=t(4165),a=t(5861),i=t(885),o=t(2791),s=t(3463),u=t(6881),l=t(1508).X,c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,u.D)(l.getQuestions),e.next=3,fetch(n);case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,i,o,s,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.question,a=n.description,i=n.dueDate,o=n.language,s=(0,u.D)(l.createQuestion),e.next=4,fetch(s,{method:"POST",body:JSON.stringify({question:t,description:a,dueDate:i,language:o})});case 4:return c=e.sent,e.abrupt("return",c.json());case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,u.D)(l.deleteQuestion),e.next=3,fetch("".concat(t,"?id=").concat(n),{method:"DELETE"});case 3:return a=e.sent,e.abrupt("return",a.json());case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=JSON.parse('{"r":{"noDataMessage":"No questions found"},"z":[{"Header":"ID","accessor":"_id","width":230,"grow":true},{"Header":"Question","accessor":"question","grow":true},{"Header":"Due Date","accessor":"dueDate","width":120,"grow":true},{"Header":"Language","accessor":"language","width":250,"grow":true},{"Header":"Actions","accessor":"actions","align":"center"}]}'),m=JSON.parse('[{"id":null,"name":"Select Language","label":"Select Language","value":""},{"id":63,"name":"JavaScript (Node.js 12.14.0)","label":"JavaScript (Node.js 12.14.0)","value":"javascript"},{"id":75,"name":"C (Clang 7.0.1)","label":"C (Clang 7.0.1)","value":"c"},{"id":76,"name":"C++ (Clang 7.0.1)","label":"C++ (Clang 7.0.1)","value":"cpp"},{"id":48,"name":"C (GCC 7.4.0)","label":"C (GCC 7.4.0)","value":"c"},{"id":52,"name":"C++ (GCC 7.4.0)","label":"C++ (GCC 7.4.0)","value":"cpp"},{"id":49,"name":"C (GCC 8.3.0)","label":"C (GCC 8.3.0)","value":"c"},{"id":53,"name":"C++ (GCC 8.3.0)","label":"C++ (GCC 8.3.0)","value":"cpp"},{"id":50,"name":"C (GCC 9.2.0)","label":"C (GCC 9.2.0)","value":"c"},{"id":54,"name":"C++ (GCC 9.2.0)","label":"C++ (GCC 9.2.0)","value":"cpp"},{"id":62,"name":"Java (OpenJDK 13.0.1)","label":"Java (OpenJDK 13.0.1)","value":"java"},{"id":68,"name":"PHP (7.4.1)","label":"PHP (7.4.1)","value":"php"},{"id":43,"label":"Plain Text","name":"Plain Text","value":"text"},{"id":70,"name":"Python (2.7.17)","label":"Python (2.7.17)","value":"python"},{"id":71,"name":"Python (3.8.1)","label":"Python (3.8.1)","value":"python"},{"id":73,"name":"Rust (1.40.0)","label":"Rust (1.40.0)","value":"rust"},{"id":90,"name":"Solidity (^0.8.17)","label":"Solidity (^0.8.17)","value":"sol"},{"id":74,"name":"TypeScript (3.7.4)","label":"TypeScript (3.7.4)","value":"typescript"}]'),h=t(5919),p=t(184),g=t(1413),x=t(5987),j=t(5290),C=["label","name","type"],b=["ref","onChange"],Z=(0,o.forwardRef)((function(e,n){var t=e.configs,r=e.validationSchemas,a=e.defaultValues,i=e.onInputChange,u=e.onValidationChange,l=t.fields,c=t.id,d=a||l.reduce((function(e,n){return e[n.name]="",e}),{}),f=(0,j.cI)({mode:"onChange",defaultValues:d}),v=f.formState,m=v.errors,h=v.isValid,Z=f.control,y=f.getValues,w=f.handleSubmit,S=f.reset;return(0,o.useImperativeHandle)(n,(function(){return{getValues:y,handleSubmit:function(e){return w(e)()},reset:S}}),[y,w]),(0,o.useEffect)((function(){null===u||void 0===u||u(h)}),[h]),(0,p.jsx)("div",{id:c,children:l.map((function(e){var n,t,a=e.label,o=e.name,u=e.type,l=(0,x.Z)(e,C);return(0,p.jsxs)(s.cw,{children:[(0,p.jsxs)(s.__,{for:o,children:[a," ",null!==(n=r[o])&&void 0!==n&&n.required?(0,p.jsx)("span",{className:"text-danger fw-bold",children:"*"}):""]}),(0,p.jsx)(j.Qr,{name:o,control:Z,rules:r[o],render:function(e){var n,t=e.field,r=t.ref,a=t.onChange,c=(0,x.Z)(t,b);return(0,p.jsx)(s.II,(0,g.Z)((0,g.Z)((0,g.Z)({id:o,innerRef:r,type:u||"text",invalid:!!m[o],valid:!!y()[o]&&!m[o],onChange:function(e){a(e),null===i||void 0===i||i(e)}},l),c),{},{children:"select"===u?null===(n=l.options)||void 0===n?void 0:n.map((function(e){return(0,p.jsx)("option",{value:"".concat(e.id),children:e.label},e.id)})):null}))}}),(0,p.jsx)(s.AG,{children:"".concat(null===(t=m[o])||void 0===t?void 0:t.message)})]},o)}))})})),y=t(8430),w=t(2225),S=t(3294),N=t(2546),D={question:{required:"You forgot to add a question"},description:{},dueDate:{required:"You forgot to add a due date"},language:{required:"You forgot to add a default language"}},q=JSON.parse('{"id":"CreateQuestion","fields":[{"type":"string","name":"question","label":"Question","placeholder":"Enter your question here"},{"type":"textarea","name":"description","label":"Description","placeholder":"Enter your question here"},{"type":"date","name":"dueDate","label":"Due Date"},{"type":"select","name":"language","label":"Default Language","placeholder":"Select a language"}]}'),_=function(e){var n=e.onCreate,t=(0,o.useState)(!1),u=(0,i.Z)(t,2),l=u[0],c=u[1],f=(0,o.useState)(!1),v=(0,i.Z)(f,2),h=v[0],g=v[1],x=(0,o.useState)(""),j=(0,i.Z)(x,2),C=j[0],b=j[1],y=(0,o.useRef)(null),w=(0,N.ZP)(q,(function(e){e.fields.map((function(e){return"language"===e.name&&(e.options=m),e}))}));return(0,p.jsxs)("div",{className:"p-3",children:[C&&(0,p.jsx)(s.bZ,{color:"success",children:"".concat(S.Z.question_created," :\n            ").concat("http://navnish09.github.io/code-editor","/").concat(C)}),(0,p.jsx)(Z,{configs:w,validationSchemas:D,ref:y,onValidationChange:c}),(0,p.jsx)("div",{className:"d-flex justify-content-end mt-5",children:(0,p.jsx)(s.zx,{disabled:!l||h,color:l?"success":"secondary",onClick:function(){var e;g(!0),null===(e=y.current)||void 0===e||e.handleSubmit(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var a,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d(t);case 3:i=e.sent,b(i._id),null===(a=y.current)||void 0===a||a.reset(),n(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:return e.prev=12,g(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(n){return e.apply(this,arguments)}}())},children:h?"Creating...":"Create"})})]})},k=function(e){var n=e.row,t=e.onDelete,s=o.useState(!1),u=(0,i.Z)(s,2),l=u[0],c=u[1],d=o.useState(!1),v=(0,i.Z)(d,2),m=v[0],h=v[1],g=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,h(!0),e.t0=n._id,!e.t0){e.next=6;break}return e.next=6,f(n._id);case 6:t(),c(!1),e.next=13;break;case 10:e.prev=10,e.t1=e.catch(0),console.log(e.t1);case 13:return e.prev=13,h(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}(),x=[{text:"Cancel",color:"secondary",disabled:m,onClick:function(){return c(!1)}},{text:m?"Deleting...":"Delete",color:"danger",disabled:m,onClick:g}];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(y.z,{isOpen:l,size:"md",centered:!0,title:S.Z.confirm,toggle:function(){return c((function(e){return!e}))},content:(0,p.jsx)(p.Fragment,{children:"Are you sure you want to delete this question?"}),footerButtons:x}),(0,p.jsx)("div",{className:"d-flex align-items-center justify-content-center",children:(0,p.jsx)("span",{className:"text-danger delete-Icon",onClick:function(){return c(!0)},children:(0,p.jsx)("i",{className:"bi bi-trash3-fill"})})})]})},Q=function(){var e=v.z,n=v.r,t=(0,o.useState)([]),u=(0,i.Z)(t,2),l=u[0],d=u[1],f=(0,o.useState)(!1),g=(0,i.Z)(f,2),x=g[0],j=g[1],C=(0,o.useState)(!1),b=(0,i.Z)(C,2),Z=b[0],N=b[1],D=(0,o.useState)(!1),q=(0,i.Z)(D,2),Q=q[0],G=q[1],O={actions:function(e){return(0,p.jsx)(k,{row:e,onDelete:function(){return N((function(e){return!e}))}})},language:function(e){var n;return null===(n=m.find((function(n){return n.id===+e.language})))||void 0===n?void 0:n.label}};return(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,c();case 3:n=e.sent,d(n),j(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[Z]),(0,p.jsxs)(h.r,{show:!0,children:[(0,p.jsx)(y.z,{isOpen:Q,size:"lg",toggle:function(){return G((function(e){return!e}))},title:S.Z.create_new_question,content:(0,p.jsx)(_,{onCreate:function(){return N((function(e){return!e}))}})}),(0,p.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-center mb-3",children:[(0,p.jsx)("h5",{children:S.Z.all_questions}),(0,p.jsxs)(s.zx,{color:"primary",prefix:"sas",onClick:function(){return G(!0)},children:[(0,p.jsx)("i",{className:"bi bi-plus"})," ",S.Z.create_question]})]}),(0,p.jsx)(w.a,{columns:e,configs:n,data:l,templates:O,loading:x})]})},G=Q},1508:function(e){e.exports=JSON.parse('{"H":{"getSubmissions":"/getSubmissions"},"X":{"getQuestions":"/getQuestions","createQuestion":"/createQuestion","deleteQuestion":"/deleteQuestion"}}')}}]);
//# sourceMappingURL=453.1d04526c.chunk.js.map