import{n as x,b as d,k as _,s as S,f,g,l as h,d as l,c as C,i as m,x as v,m as $,C as E,O as k}from"../chunks/scheduler.05062a41.js";import{S as q,i as y}from"../chunks/index.0b9e8d1c.js";import{d as H}from"../chunks/singletons.19d1162f.js";const O=()=>{const s=H;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},P={subscribe(s){return O().page.subscribe(s)}};function j(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",u;return{c(){t=d("h1"),o=_(r),n=S(),i=d("p"),u=_(c)},l(e){t=f(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(l),n=C(e),i=f(e,"P",{});var p=g(i);u=h(p,c),p.forEach(l)},m(e,a){m(e,t,a),v(t,o),m(e,n,a),m(e,i,a),v(i,u)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&$(u,c)},i:E,o:E,d(e){e&&(l(t),l(n),l(i))}}}function w(s,t,r){let o;return k(s,P,n=>r(0,o=n)),[o]}let D=class extends q{constructor(t){super(),y(this,t,w,j,x,{})}};export{D as component};
