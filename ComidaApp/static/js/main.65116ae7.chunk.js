(this.webpackJsonpcomida=this.webpackJsonpcomida||[]).push([[0],{130:function(e,t,c){},133:function(e,t,c){},182:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(30),s=c.n(r),i=(c(130),c(28)),o=c(11),j=c(12),l=c.n(j),b=c(24),d=c(7),u=c(1),h=function(e){e._id;var t=e.name,c=e.price,n=(e.rate,e.imagen);return Object(u.jsxs)("div",{className:"card",style:{width:"100%",minHeight:"100%"},children:[Object(u.jsx)("img",{src:n,alt:t,className:"card-img-top "}),Object(u.jsxs)("div",{className:"card-body text-center",children:[Object(u.jsx)("h5",{className:"",children:t}),Object(u.jsxs)("label",{className:"text-success  ",children:["$",c.toLocaleString()]})]})]})},O="https://comidaapi.azurewebsites.net/";function x(e){return Object(u.jsxs)("div",{className:"p-5 m-auto text-center",children:[Object(u.jsx)("div",{className:"spinner-border",role:"status",children:Object(u.jsx)("span",{className:"visually-hidden",children:"cargando..."})}),Object(u.jsx)("p",{children:"Cargando..."})]})}var m,p=c(188),f=function(){var e=Object(n.useState)(),t=Object(d.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!0),s=Object(d.a)(r,2),i=s[0],o=s[1];return Object(n.useEffect)((function(){var e="".concat(O,"/api/platos");fetch(e).then(function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,t.json();case 3:e.t1=e.sent,(0,e.t0)(e.t1),o(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.error(e)}))}),[]),Object(u.jsxs)(p.a,{children:[Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("h1",{children:"Comidas"})}),Object(u.jsx)("div",{className:"row",children:i?Object(u.jsx)(x,{}):null===c||void 0===c?void 0:c.map((function(e){var t=e._id,c=e.name,n=e.price,a=e.rate,r=e.imagen;return Object(u.jsx)("div",{className:"col p-2 link-dark",style:{minWidth:280,textDecoration:"none",cursor:"pointer"},children:Object(u.jsx)(h,{name:c,price:n,rate:a,imagen:r,_id:t})},t)}))})]})},v=(c(133),c(134),c(105)),g=c.n(v),y=c(192),N=c(197),C=c(189),w=c(39),k=c(8),S=c(2);!function(e){e.selectOne="select-one",e.checkbox="checkbox",e.text="text"}(m||(m={}));function E(){var e=Object(o.g)().id,t=Object(n.useState)(),c=Object(d.a)(t,2),a=c[0],r=c[1],s=function(e){var t=Object(n.useState)(e),c=Object(d.a)(t,2),a=c[0],r=c[1];return{formState:a,setFormState:r,handleInputChange:function(e){var t=e.target;try{var c=t.name,n=t.value;switch(t.type){case m.text:r(Object(S.a)(Object(S.a)({},a),{},Object(k.a)({},c,n)));break;case m.selectOne:r(Object(S.a)(Object(S.a)({},a),{},Object(k.a)({},c,t.selected)));break;case m.checkbox:r(Object(S.a)(Object(S.a)({},a),{},Object(k.a)({},c,t.checked)));break;default:r(Object(S.a)(Object(S.a)({},a),{},Object(k.a)({},c,n)))}}catch(s){throw s}}}}({}),i=s.formState,j=s.setFormState,h=s.handleInputChange,f=Object(n.useState)(!0),v=Object(d.a)(f,2),E=v[0],T=v[1],L="".concat(O,"/api/platos"),_=Object(o.f)(),P=function(){var t=Object(b.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,T(!0),!e){t.next=8;break}return t.next=5,g.a.put(L+"/".concat(e),i);case 5:return t.sent&&(alert("Plato modificado exitosamente."),_.push("/platos")),t.abrupt("return");case 8:return t.next=10,g.a.post(L,i);case 10:t.sent&&(alert("Plato guardado exitosamente."),_.push("/platos")),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:return t.prev=17,T(!1),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[0,14,17,20]])})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){var t="".concat(O,"/api/category");try{fetch(t).then(function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=r,e.next=3,t.json();case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.error(e)})),e&&g.a.get("".concat(L,"/").concat(e)).then(function(){var e=Object(b.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.data;case 2:c=e.sent,j(c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.error(e)}))}catch(c){console.error(c)}finally{T(!1)}}),[]),Object(u.jsxs)(p.a,{className:"mt-3",children:[Object(u.jsx)("label",{className:"display-6",children:e?"Modificar":"Crear"}),Object(u.jsx)("h2",{children:"Platos"}),E?Object(u.jsx)(x,{}):Object(u.jsxs)(y.a,{onSubmit:function(e){e.preventDefault(),P()},children:[Object(u.jsxs)(y.a.Group,{className:"mb-3",children:[Object(u.jsx)(y.a.Label,{children:"Nombre"}),Object(u.jsx)(y.a.Control,{type:"text",name:"name",value:null===i||void 0===i?void 0:i.name,onChange:function(e){return h(e)},placeholder:"Nombre del plato",required:!0}),Object(u.jsx)(y.a.Text,{children:"Requerido"})]}),Object(u.jsxs)(y.a.Group,{className:"mb-3",children:[Object(u.jsx)(y.a.Label,{children:"Categoria"}),Object(u.jsx)(y.a.Select,{name:"category",value:null===i||void 0===i?void 0:i.category,onChange:function(e){return h(e)},children:null===a||void 0===a?void 0:a.map((function(e){return Object(u.jsx)("option",{value:e._id,children:e.name},e._id)}))}),Object(u.jsx)(y.a.Text,{children:"Requerido"})]}),(null===i||void 0===i?void 0:i.imagen)&&Object(u.jsx)(y.a.Group,{children:Object(u.jsx)(N.a,{children:Object(u.jsx)(N.a.Image,{alt:"171x180",width:500,height:500,src:null===i||void 0===i?void 0:i.imagen})})}),Object(u.jsxs)(y.a.Group,{className:"mb-3",children:[Object(u.jsx)(y.a.Label,{children:"Imagen URL"}),Object(u.jsx)(y.a.Control,{name:"imagen",value:null===i||void 0===i?void 0:i.imagen,onChange:function(e){return h(e)},type:"url",placeholder:"https://your-image.com",required:!0}),Object(u.jsx)(y.a.Text,{children:"Requerido"})]}),Object(u.jsxs)(y.a.Group,{className:"mb-3",children:[Object(u.jsx)(y.a.Label,{children:"Precio"}),Object(u.jsx)(y.a.Control,{name:"price",value:null===i||void 0===i?void 0:i.price,onChange:function(e){return h(e)},type:"number",placeholder:"20.0"}),Object(u.jsx)(y.a.Text,{className:"text-danger",children:"Requerido"})]}),Object(u.jsxs)(C.a,{type:"submit",children:[Object(u.jsx)(w.c,{style:{marginRight:2}}),"Guardar"]})]})]})}var T=c(193),L=c(190),_=c(194);function P(e){var t=e.title,c=e.message,a=e.visible,r=e.onConfirm,s=e.onClose,i=Object(n.useState)(!1),o=Object(d.a)(i,2),j=o[0],l=o[1],b=function(){l(!1),s()};return Object(n.useEffect)((function(){l(a)}),[a]),Object(u.jsxs)(_.a,{show:j,onHide:b,children:[Object(u.jsx)(_.a.Header,{closeButton:!0,children:Object(u.jsx)(_.a.Title,{children:t})}),Object(u.jsx)(_.a.Body,{children:c}),Object(u.jsxs)(_.a.Footer,{children:[Object(u.jsx)(C.a,{variant:"secondary",onClick:b,children:"Cancelar"}),Object(u.jsx)(C.a,{variant:"primary",onClick:function(){l(!1),r&&r()},children:"Confirmar"})]})]})}function B(e){var t=Object(n.useState)(),c=Object(d.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(!0),o=Object(d.a)(s,2),j=o[0],h=o[1],m=Object(n.useState)(null),f=Object(d.a)(m,2),v=f[0],g=f[1],y=Object(n.useState)({visible:!1,title:"Confirmar",message:"Segurio de eliminar esta plato?"}),N=Object(d.a)(y,2),k=N[0],E=N[1],_="".concat(O,"/api/platos");Object(n.useEffect)((function(){fetch(_).then(function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=r,e.next=3,t.json();case 3:e.t1=e.sent,(0,e.t0)(e.t1),h(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.error(e)}))}),[]);function B(){return(B=Object(b.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(_,"/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 2:e.sent,c=null===a||void 0===a?void 0:a.filter((function(e){return e._id!==t})),r(c);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.jsxs)(p.a,{children:[Object(u.jsx)(P,{visible:k.visible,title:k.title,message:k.message,onConfirm:function(){!function(e){B.apply(this,arguments)}(v)},onClose:function(){E(Object(S.a)(Object(S.a)({},k),{},{visible:!1})),g(null)}}),Object(u.jsxs)("div",{className:"d-flex flex-row",style:{alignItems:"center"},children:[Object(u.jsx)("h1",{style:{width:"20%"},children:"Platos"}),Object(u.jsx)("div",{style:{width:"60%"}}),Object(u.jsx)(i.b,{className:"btn btn-primary",style:{width:"20%"},to:"/platos/create",children:"Nuevo"})]}),Object(u.jsxs)("table",{className:" table table-hover",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Plato"}),Object(u.jsx)("th",{children:"Precio"}),Object(u.jsx)("th",{})]})}),Object(u.jsxs)("tbody",{children:[j&&Object(u.jsx)("tr",{children:Object(u.jsx)("td",{colSpan:4,children:Object(u.jsx)(x,{})})}),null===a||void 0===a?void 0:a.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsxs)("div",{className:"d-flex",children:[Object(u.jsx)("div",{className:"flex-shrink-0",children:Object(u.jsx)("img",{src:e.imagen,alt:e.name,width:"50"})}),Object(u.jsx)("div",{className:" ms-3",children:e.name})]})}),Object(u.jsxs)("td",{children:["$",e.price]}),Object(u.jsx)("td",{className:"text-end",children:Object(u.jsxs)("p",{children:[Object(u.jsx)(T.a,{overlay:Object(u.jsx)(L.a,{children:Object(u.jsx)("strong",{children:"Editar"})}),children:Object(u.jsx)(i.b,{className:"btn btn-warning",to:"/platos/edit/".concat(e._id),"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Editar",children:Object(u.jsx)(w.b,{})})}),Object(u.jsx)(T.a,{overlay:Object(u.jsx)(L.a,{children:Object(u.jsx)("strong",{children:"Eliminar"})}),children:Object(u.jsx)(C.a,{variant:"danger",onClick:function(){return t=e._id,E(Object(S.a)(Object(S.a)({},k),{},{visible:!0})),void g(t);var t},style:{marginLeft:10},children:Object(u.jsx)(w.d,{})})})]})})]},e._id)}))]})]})]})}var F=c(75);function I(e){Object(F.a)(e);var t=Object(n.useState)(),c=Object(d.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(!0),o=Object(d.a)(s,2),j=o[0],h=o[1],m=Object(n.useState)(null),p=Object(d.a)(m,2),f=p[0],v=p[1],g=Object(n.useState)({visible:!1,title:"Confirmar",message:"Segurio de eliminar esta categoria?"}),y=Object(d.a)(g,2),N=y[0],k=y[1],E="".concat(O,"/api/category");Object(n.useEffect)((function(){fetch(E).then(function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=r,e.next=3,t.json();case 3:e.t1=e.sent,(0,e.t0)(e.t1),h(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.error(e)}))}),[]);function T(){return(T=Object(b.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(E,"/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 2:e.sent,c=null===a||void 0===a?void 0:a.filter((function(e){return e._id!==t})),r(c);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.jsxs)("div",{className:"container mt-3",children:[Object(u.jsxs)("div",{className:"d-flex flex-row",style:{alignItems:"center"},children:[Object(u.jsx)(P,{visible:N.visible,title:N.title,message:N.message,onConfirm:function(){!function(e){T.apply(this,arguments)}(f)},onClose:function(){k(Object(S.a)(Object(S.a)({},N),{},{visible:!1})),v(null)}}),Object(u.jsx)("h1",{style:{width:"20%"},children:"Categorias"}),Object(u.jsx)("div",{style:{width:"60%"}}),Object(u.jsx)(i.b,{className:"btn btn-primary",style:{width:"20%"},to:"/category/create",children:"Nuevo"})]}),Object(u.jsx)("div",{className:"table-responsive",children:Object(u.jsxs)("table",{className:"table mt-2 table-hover",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Categoria"}),Object(u.jsx)("th",{className:"align-content-end"})]})}),Object(u.jsxs)("tbody",{children:[j&&Object(u.jsx)("tr",{children:Object(u.jsx)("td",{colSpan:2,children:Object(u.jsx)(x,{})})}),null===a||void 0===a?void 0:a.map((function(e,t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.name}),Object(u.jsx)("td",{children:Object(u.jsxs)("p",{className:"text-end",children:[Object(u.jsx)(i.b,{to:"/category/edit/".concat(e._id),className:"mx-2 btn btn-warning",children:Object(u.jsx)(w.b,{})}),Object(u.jsx)(C.a,{variant:"danger",onClick:function(){return t=e._id,k(Object(S.a)(Object(S.a)({},N),{},{visible:!0})),void v(t);var t},children:Object(u.jsx)(w.d,{})})]})})]},t)}))]})]})})]})}function q(e){Object(F.a)(e);var t=Object(o.g)().id,c=Object(n.useState)({_id:"",name:""}),a=Object(d.a)(c,2),r=a[0],s=a[1],j=Object(n.useState)("".concat(O,"/api/category/").concat(t||"")),h=Object(d.a)(j,2),m=h[0],p=(h[1],Object(n.useState)(!0)),f=Object(d.a)(p,2),v=f[0],g=f[1],y=Object(n.useState)(!1),N=Object(d.a)(y,2),w=N[0],k=N[1],E=Object(o.f)();function T(){return(T=Object(b.a)(l.a.mark((function e(c){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),r.name){e.next=3;break}return e.abrupt("return",k(!0));case 3:if(t){e.next=9;break}return e.next=6,fetch(m,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r.name})});case 6:return e.sent&&alert("success"),e.abrupt("return",E.push("/category"));case 9:return e.next=11,fetch(m,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 11:e.sent&&alert("success"),E.push("/category");case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){if(!t)return g(!1);fetch(m).then(function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,t.json();case 3:e.t1=e.sent,(0,e.t0)(e.t1),g(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.error(e)}))}),[]),Object(u.jsx)("div",{className:"container mt-3",children:v?Object(u.jsx)(x,{}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:t?"Modificar categoria":"Crear nueva categoria"}),Object(u.jsxs)("form",{className:"container my-4",onSubmit:function(e){return T.apply(this,arguments)},children:[Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{className:"form-label",children:"Nombre"}),Object(u.jsx)("input",{type:"text",className:"form-control "+"".concat(w&&"is-danger"),value:null===r||void 0===r?void 0:r.name,onChange:function(e){var t=e.target.value;return s(Object(S.a)(Object(S.a)({},r),{},{name:t})),k(""===t)}}),w&&Object(u.jsx)("div",{className:"form-text text-danger",children:"Este campo es requerido."})]}),Object(u.jsxs)("div",{className:"",children:[Object(u.jsx)(C.a,{type:"submit",variant:"primary",disabled:w,children:"Guardar"}),Object(u.jsx)(i.b,{to:"/category",className:"btn btn-success mx-2",children:"Volver atr\xe1s"})]})]})]})})}var D=c(195),G=c(191),R=c(196);function H(e){Object(F.a)(e);var t=Object(n.useState)(!1),c=Object(d.a)(t,2),a=c[0],r=c[1];return Object(u.jsxs)(D.a,{collapseOnSelect:!0,expand:"lg",bg:"primary",variant:"dark",className:"sticky-top",children:[Object(u.jsxs)(p.a,{children:[Object(u.jsx)(D.a.Brand,{onClick:function(){return r(!0)},children:Object(u.jsx)(w.a,{style:{cursor:"pointer"}})}),Object(u.jsx)(D.a.Brand,{href:"/",children:"Comidas"}),Object(u.jsx)(D.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(u.jsxs)(D.a.Collapse,{id:"responsive-navbar-nav",children:[Object(u.jsxs)(G.a,{className:"me-auto",children:[Object(u.jsx)(i.b,{to:"/platos",className:"nav-link",children:"Platos"}),Object(u.jsx)(i.b,{to:"/category",className:"nav-link",children:"Categorias"})]}),Object(u.jsxs)(G.a,{children:[Object(u.jsx)(G.a.Link,{href:"#deets",children:"More deets"}),Object(u.jsx)(G.a.Link,{eventKey:2,href:"#memes",children:"Dank memes"})]})]})]}),Object(u.jsxs)(R.a,{show:a,onHide:function(){return r(!1)},backdrop:!1,placement:"start",children:[Object(u.jsx)(R.a.Header,{closeButton:!0,children:Object(u.jsx)(R.a.Title,{children:"Comida"})}),Object(u.jsx)(R.a.Body,{})]})]})}var J=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(i.a,{children:[Object(u.jsx)(H,{}),Object(u.jsx)("div",{className:"pt-5",children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",component:f})," ",Object(u.jsx)(o.a,{exact:!0,path:"/platos",component:B}),Object(u.jsx)(o.a,{exact:!0,path:["/platos/create","/platos/edit/:id"],component:E}),Object(u.jsx)(o.a,{exact:!0,path:"/category",component:I})," ",Object(u.jsx)(o.a,{exact:!0,path:["/category/create","/category/edit/:id"],component:q})]})})]})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,198)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(J,{})}),document.getElementById("root")),M()}},[[182,1,2]]]);
//# sourceMappingURL=main.65116ae7.chunk.js.map