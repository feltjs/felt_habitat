import{n as he,v as se,b as v,s as V,k as j,f as b,g as k,d as h,c as A,L as rt,l as H,h as u,i as q,x as p,y as ae,z as ne,A as ie,m as Z,O as at,V as Te,j as re,J as Y,W as nt,M as ot,X as ye,Y as Se,Z as De,C as Ee,e as Me}from"../chunks/scheduler.34d16e1e.js";import{S as pe,i as de,a as I,g as _e,t as S,c as ce,b as ge,d as ve,m as be,e as ke}from"../chunks/index.d22a2a6f.js";import{e as fe,u as ft,d as _t}from"../chunks/each.f14f0ca5.js";import{p as it}from"../chunks/stores.f39fb53a.js";import{s as ue,b as we,e as oe,g as ct}from"../chunks/string.b6b2563a.js";import{b as ut}from"../chunks/paths.e166628c.js";const ht=(n,e,l)=>{const{name:t}=e,s=(_=>_?we(ue(we(_,".git"),"git+"),"/"):null)(e.repository?typeof e.repository=="string"?e.repository:e.repository.url:null),i=e.homepage??null,r=!e.private&&!!e.exports&&e.version!=="0.0.1",o=r?"https://www.npmjs.com/package/"+e.name:null,d=r&&s?s+"/blob/main/CHANGELOG.md":null,f=pt(t),c=s?ue(s,"https://github.com/").split("/")[0]:null;return{url:n,package_json:e,src_json:l,name:t,repo_name:f,repo_url:s,owner_name:c,homepage_url:i,npm_url:o,changelog_url:d,published:r}},pt=n=>n[0]==="@"?n.split("/")[1]:n,je=n=>ue(new URL(n).host,"www.");function Ve(n,e,l){var r,o;const t=n.slice();t[24]=e[l],t[29]=l;const a=t[16](t[11],t[24]);t[25]=a;const s=(r=t[3])==null?void 0:r[t[29]];t[26]=s;const i=t[26]&&((o=t[5])==null?void 0:o[t[26]]);return t[27]=i,t}function Ae(n,e,l){const t=n.slice();return t[15]=e[l].name,t[30]=e[l].kind,t}const dt=n=>({homepage_url:n[0]&512}),Oe=n=>({homepage_url:n[9]}),mt=n=>({npm_url:n[0]&8192}),We=n=>({npm_url:n[13]}),gt=n=>({description:n[0]&128}),Ne=n=>({description:n[7]}),vt=n=>({repo_name:n[0]&4096}),Le=n=>({repo_name:n[12]});function ze(n){let e=" ",l,t;return{c(){l=j(e),t=j(n[6])},l(a){l=H(a,e),t=H(a,n[6])},m(a,s){q(a,l,s),q(a,t,s)},p(a,s){s[0]&64&&Z(t,a[6])},d(a){a&&(h(l),h(t))}}}function bt(n){let e,l,t=n[6]&&ze(n);return{c(){e=v("div"),l=j(n[12]),t&&t.c(),this.h()},l(a){e=b(a,"DIV",{class:!0});var s=k(e);l=H(s,n[12]),t&&t.l(s),s.forEach(h),this.h()},h(){u(e,"class","repo_name svelte-1rnqnfh")},m(a,s){q(a,e,s),p(e,l),t&&t.m(e,null)},p(a,s){s[0]&4096&&Z(l,a[12]),a[6]?t?t.p(a,s):(t=ze(a),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(a){a&&h(e),t&&t.d()}}}function Fe(n){let e;const l=n[23].description,t=se(l,n,n[22],Ne),a=t||kt(n);return{c(){a&&a.c()},l(s){a&&a.l(s)},m(s,i){a&&a.m(s,i),e=!0},p(s,i){t?t.p&&(!e||i[0]&4194432)&&ae(t,l,s,s[22],e?ie(l,s[22],i,gt):ne(s[22]),Ne):a&&a.p&&(!e||i[0]&128)&&a.p(s,e?i:[-1,-1])},i(s){e||(I(a,s),e=!0)},o(s){S(a,s),e=!1},d(s){a&&a.d(s)}}}function kt(n){let e,l;return{c(){e=v("div"),l=j(n[7]),this.h()},l(t){e=b(t,"DIV",{class:!0});var a=k(e);l=H(a,n[7]),a.forEach(h),this.h()},h(){u(e,"class","spaced")},m(t,a){q(t,e,a),p(e,l)},p(t,a){a[0]&128&&Z(l,t[7])},d(t){t&&h(e)}}}function Be(n){let e;const l=n[23].npm_url,t=se(l,n,n[22],We),a=t||Et(n);return{c(){a&&a.c()},l(s){a&&a.l(s)},m(s,i){a&&a.m(s,i),e=!0},p(s,i){t?t.p&&(!e||i[0]&4202496)&&ae(t,l,s,s[22],e?ie(l,s[22],i,mt):ne(s[22]),We):a&&a.p&&(!e||i[0]&32768)&&a.p(s,e?i:[-1,-1])},i(s){e||(I(a,s),e=!0)},o(s){S(a,s),e=!1},d(s){a&&a.d(s)}}}function Et(n){let e,l,t;return{c(){e=v("blockquote"),l=j("npm i -D "),t=j(n[15]),this.h()},l(a){e=b(a,"BLOCKQUOTE",{class:!0});var s=k(e);l=H(s,"npm i -D "),t=H(s,n[15]),s.forEach(h),this.h()},h(){u(e,"class","npm_url spaced svelte-1rnqnfh")},m(a,s){q(a,e,s),p(e,l),p(e,t)},p(a,s){s[0]&32768&&Z(t,a[15])},d(a){a&&h(e)}}}function Re(n){let e;const l=n[23].homepage_url,t=se(l,n,n[22],Oe),a=t||wt(n);return{c(){a&&a.c()},l(s){a&&a.l(s)},m(s,i){a&&a.m(s,i),e=!0},p(s,i){t?t.p&&(!e||i[0]&4194816)&&ae(t,l,s,s[22],e?ie(l,s[22],i,dt):ne(s[22]),Oe):a&&a.p&&(!e||i[0]&16896)&&a.p(s,e?i:[-1,-1])},i(s){e||(I(a,s),e=!0)},o(s){S(a,s),e=!1},d(s){a&&a.d(s)}}}function wt(n){let e,l,t,a,s,i,r,o=je(n[9])+"",d;return{c(){e=v("div"),l=j(`homepage:
					`),t=v("a"),a=v("img"),r=V(),d=j(o),this.h()},l(f){e=b(f,"DIV",{class:!0});var c=k(e);l=H(c,`homepage:
					`),t=b(c,"A",{class:!0,href:!0});var _=k(t);a=b(_,"IMG",{src:!0,alt:!0}),r=A(_),d=H(_,o),_.forEach(h),c.forEach(h),this.h()},h(){Te(a.src,s=oe(n[9],"/")+"favicon.png")||u(a,"src",s),u(a,"alt",i="favicon to homepage at "+n[9]),re(a,"width","16px"),re(a,"height","16px"),re(a,"margin-right","var(--spacing_xs)"),u(t,"class","chip row svelte-1rnqnfh"),u(t,"href",n[9]),Y(t,"active",n[9]===n[14].url.href),u(e,"class","row svelte-1rnqnfh")},m(f,c){q(f,e,c),p(e,l),p(e,t),p(t,a),p(t,r),p(t,d)},p(f,c){c[0]&512&&!Te(a.src,s=oe(f[9],"/")+"favicon.png")&&u(a,"src",s),c[0]&512&&i!==(i="favicon to homepage at "+f[9])&&u(a,"alt",i),c[0]&512&&o!==(o=je(f[9])+"")&&Z(d,o),c[0]&512&&u(t,"href",f[9]),c[0]&16896&&Y(t,"active",f[9]===f[14].url.href)},d(f){f&&h(e)}}}function Pe(n){let e,l,t,a;return{c(){e=v("div"),l=j("repo: "),t=v("a"),a=j(n[12]),this.h()},l(s){e=b(s,"DIV",{class:!0});var i=k(e);l=H(i,"repo: "),t=b(i,"A",{class:!0,title:!0,href:!0});var r=k(t);a=H(r,n[12]),r.forEach(h),i.forEach(h),this.h()},h(){u(t,"class","chip svelte-1rnqnfh"),u(t,"title","repo"),u(t,"href",n[11]),u(e,"class","row svelte-1rnqnfh")},m(s,i){q(s,e,i),p(e,l),p(e,t),p(t,a)},p(s,i){i[0]&4096&&Z(a,s[12]),i[0]&2048&&u(t,"href",s[11])},d(s){s&&h(e)}}}function Ue(n){let e,l,t,a;return{c(){e=v("div"),l=j("npm: "),t=v("a"),a=j(n[15]),this.h()},l(s){e=b(s,"DIV",{class:!0});var i=k(e);l=H(i,"npm: "),t=b(i,"A",{class:!0,title:!0,href:!0});var r=k(t);a=H(r,n[15]),r.forEach(h),i.forEach(h),this.h()},h(){u(t,"class","chip svelte-1rnqnfh"),u(t,"title","npm"),u(t,"href",n[13]),u(e,"class","row svelte-1rnqnfh")},m(s,i){q(s,e,i),p(e,l),p(e,t),p(t,a)},p(s,i){i[0]&32768&&Z(a,s[15]),i[0]&8192&&u(t,"href",s[13])},d(s){s&&h(e)}}}function Ge(n){let e,l,t,a;return{c(){e=v("div"),l=j("version: "),t=v("a"),a=j(n[8]),this.h()},l(s){e=b(s,"DIV",{class:!0});var i=k(e);l=H(i,"version: "),t=b(i,"A",{class:!0,title:!0,href:!0});var r=k(t);a=H(r,n[8]),r.forEach(h),i.forEach(h),this.h()},h(){u(t,"class","chip svelte-1rnqnfh"),u(t,"title","version"),u(t,"href",n[10]),u(e,"class","row svelte-1rnqnfh")},m(s,i){q(s,e,i),p(e,l),p(e,t),p(t,a)},p(s,i){i[0]&256&&Z(a,s[8]),i[0]&1024&&u(t,"href",s[10])},d(s){s&&h(e)}}}function Je(n){let e,l,t,a;return{c(){e=v("div"),l=j("license: "),t=v("a"),a=j(n[1]),this.h()},l(s){e=b(s,"DIV",{class:!0});var i=k(e);l=H(i,"license: "),t=b(i,"A",{class:!0,title:!0,href:!0});var r=k(t);a=H(r,n[1]),r.forEach(h),i.forEach(h),this.h()},h(){u(t,"class","chip svelte-1rnqnfh"),u(t,"title","license"),u(t,"href",n[4]),u(e,"class","row svelte-1rnqnfh")},m(s,i){q(s,e,i),p(e,l),p(e,t),p(t,a)},p(s,i){i[0]&2&&Z(a,s[1]),i[0]&16&&u(t,"href",s[4])},d(s){s&&h(e)}}}function Qe(n){let e,l,t,a,s,i,r,o,d;return{c(){e=v("section"),l=j(`data:
				`),t=v("a"),a=j("package.json"),i=V(),r=v("a"),o=j("src.json"),this.h()},l(f){e=b(f,"SECTION",{class:!0});var c=k(e);l=H(c,`data:
				`),t=b(c,"A",{class:!0,title:!0,href:!0});var _=k(t);a=H(_,"package.json"),_.forEach(h),i=A(c),r=b(c,"A",{class:!0,title:!0,href:!0});var m=k(r);o=H(m,"src.json"),m.forEach(h),c.forEach(h),this.h()},h(){u(t,"class","chip svelte-1rnqnfh"),u(t,"title","data"),u(t,"href",s=oe(n[9],"/")+".well-known/package.json"),u(r,"class","chip svelte-1rnqnfh"),u(r,"title","data"),u(r,"href",d=oe(n[9],"/")+".well-known/src.json"),u(e,"class","row spaced svelte-1rnqnfh")},m(f,c){q(f,e,c),p(e,l),p(e,t),p(t,a),p(e,i),p(e,r),p(r,o)},p(f,c){c[0]&512&&s!==(s=oe(f[9],"/")+".well-known/package.json")&&u(t,"href",s),c[0]&512&&d!==(d=oe(f[9],"/")+".well-known/src.json")&&u(r,"href",d)},d(f){f&&h(e)}}}function Ye(n){let e,l,t=[],a=new Map,s=fe(n[2]);const i=r=>r[24];for(let r=0;r<s.length;r+=1){let o=Ve(n,s,r),d=i(o);a.set(d,t[r]=Xe(d,o))}return{c(){e=v("section"),l=v("menu");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=b(r,"SECTION",{class:!0});var o=k(e);l=b(o,"MENU",{});var d=k(l);for(let f=0;f<t.length;f+=1)t[f].l(d);d.forEach(h),o.forEach(h),this.h()},h(){u(e,"class","width_full spaced")},m(r,o){q(r,e,o),p(e,l);for(let d=0;d<t.length;d+=1)t[d]&&t[d].m(l,null)},p(r,o){o[0]&67628&&(s=fe(r[2]),t=ft(t,o,i,1,r,s,a,l,_t,Xe,null,Ve))},d(r){r&&h(e);for(let o=0;o<t.length;o+=1)t[o].d()}}}function Ze(n){let e,l=fe(n[27].declarations),t=[];for(let a=0;a<l.length;a+=1)t[a]=Ke(Ae(n,l,a));return{c(){e=v("ul");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=b(a,"UL",{class:!0});var s=k(e);for(let i=0;i<t.length;i+=1)t[i].l(s);s.forEach(h),this.h()},h(){u(e,"class","declarations svelte-1rnqnfh")},m(a,s){q(a,e,s);for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(e,null)},p(a,s){if(s[0]&44){l=fe(a[27].declarations);let i;for(i=0;i<l.length;i+=1){const r=Ae(a,l,i);t[i]?t[i].p(r,s):(t[i]=Ke(r),t[i].c(),t[i].m(e,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=l.length}},d(a){a&&h(e),nt(t,a)}}}function Ke(n){let e,l=n[15]+"",t,a,s;return{c(){e=v("li"),t=j(l),a=V(),this.h()},l(i){e=b(i,"LI",{class:!0});var r=k(e);t=H(r,l),a=A(r),r.forEach(h),this.h()},h(){u(e,"class",s="declaration chip "+n[30]+"_declaration svelte-1rnqnfh")},m(i,r){q(i,e,r),p(e,t),p(e,a)},p(i,r){r[0]&44&&l!==(l=i[15]+"")&&Z(t,l),r[0]&44&&s!==(s="declaration chip "+i[30]+"_declaration svelte-1rnqnfh")&&u(e,"class",s)},d(i){i&&h(e)}}}function Xe(n,e){let l,t,a,s=e[24]+"",i,r,o,d,f=e[27]&&Ze(e);return{key:n,first:null,c(){l=v("li"),t=v("div"),a=v("a"),i=j(s),o=V(),f&&f.c(),d=V(),this.h()},l(c){l=b(c,"LI",{class:!0});var _=k(l);t=b(_,"DIV",{});var m=k(t);a=b(m,"A",{class:!0,href:!0});var E=k(a);i=H(E,s),E.forEach(h),m.forEach(h),o=A(_),f&&f.l(_),d=A(_),_.forEach(h),this.h()},h(){u(a,"class","chip svelte-1rnqnfh"),u(a,"href",r=e[25]),u(l,"class","module svelte-1rnqnfh"),Y(l,"ts",e[24].endsWith(".js")),Y(l,"svelte",e[24].endsWith(".svelte")),Y(l,"css",e[24].endsWith(".css")),Y(l,"json",e[24].endsWith(".json")),this.first=l},m(c,_){q(c,l,_),p(l,t),p(t,a),p(a,i),p(l,o),f&&f.m(l,null),p(l,d)},p(c,_){e=c,_[0]&4&&s!==(s=e[24]+"")&&Z(i,s),_[0]&2052&&r!==(r=e[25])&&u(a,"href",r),e[27]?f?f.p(e,_):(f=Ze(e),f.c(),f.m(l,d)):f&&(f.d(1),f=null),_[0]&4&&Y(l,"ts",e[24].endsWith(".js")),_[0]&4&&Y(l,"svelte",e[24].endsWith(".svelte")),_[0]&4&&Y(l,"css",e[24].endsWith(".css")),_[0]&4&&Y(l,"json",e[24].endsWith(".json"))},d(c){c&&h(l),f&&f.d()}}}function jt(n){let e,l,t,a,s,i,r,o,d,f,c,_,m,E,O,T,z,$="raw data for <code>pkg: Package_Meta</code>",D,y,Q,ee=JSON.stringify(n[0],null,"	")+"",te,F;const M=n[23].repo_name,le=se(M,n,n[22],Le),C=le||bt(n),K=n[23].default,X=se(K,n,n[22],null);let W=n[7]&&Fe(n),N=n[13]&&Be(n),L=n[9]&&Re(n),B=n[11]&&Pe(n),R=n[13]&&Ue(n),P=n[10]&&Ge(n),U=n[4]&&Je(n),G=n[9]&&Qe(n),J=n[2]&&n[11]&&Ye(n);return{c(){e=v("div"),l=v("header"),C&&C.c(),t=V(),X&&X.c(),a=V(),W&&W.c(),s=V(),N&&N.c(),i=V(),r=v("section"),L&&L.c(),o=V(),B&&B.c(),d=V(),R&&R.c(),f=V(),P&&P.c(),c=V(),U&&U.c(),_=V(),G&&G.c(),m=V(),J&&J.c(),E=V(),O=v("section"),T=v("details"),z=v("summary"),z.innerHTML=$,D=V(),y=v("pre"),Q=v("code"),te=j(ee),this.h()},l(g){e=b(g,"DIV",{class:!0});var w=k(e);l=b(w,"HEADER",{class:!0});var He=k(l);C&&C.l(He),He.forEach(h),t=A(w),X&&X.l(w),a=A(w),W&&W.l(w),s=A(w),N&&N.l(w),i=A(w),r=b(w,"SECTION",{class:!0});var x=k(r);L&&L.l(x),o=A(x),B&&B.l(x),d=A(x),R&&R.l(x),f=A(x),P&&P.l(x),c=A(x),U&&U.l(x),_=A(x),G&&G.l(x),x.forEach(h),m=A(w),J&&J.l(w),E=A(w),O=b(w,"SECTION",{class:!0});var Ce=k(O);T=b(Ce,"DETAILS",{});var me=k(T);z=b(me,"SUMMARY",{"data-svelte-h":!0}),rt(z)!=="svelte-k220bw"&&(z.innerHTML=$),D=A(me),y=b(me,"PRE",{class:!0});var Ie=k(y);Q=b(Ie,"CODE",{});var qe=k(Q);te=H(qe,ee),qe.forEach(h),Ie.forEach(h),me.forEach(h),Ce.forEach(h),w.forEach(h),this.h()},h(){u(l,"class","spaced"),u(r,"class","properties width_full spaced svelte-1rnqnfh"),u(y,"class","svelte-1rnqnfh"),u(O,"class","width_full spaced"),u(e,"class","package_detail svelte-1rnqnfh")},m(g,w){q(g,e,w),p(e,l),C&&C.m(l,null),p(e,t),X&&X.m(e,null),p(e,a),W&&W.m(e,null),p(e,s),N&&N.m(e,null),p(e,i),p(e,r),L&&L.m(r,null),p(r,o),B&&B.m(r,null),p(r,d),R&&R.m(r,null),p(r,f),P&&P.m(r,null),p(r,c),U&&U.m(r,null),p(r,_),G&&G.m(r,null),p(e,m),J&&J.m(e,null),p(e,E),p(e,O),p(O,T),p(T,z),p(T,D),p(T,y),p(y,Q),p(Q,te),F=!0},p(g,w){le?le.p&&(!F||w[0]&4198400)&&ae(le,M,g,g[22],F?ie(M,g[22],w,vt):ne(g[22]),Le):C&&C.p&&(!F||w[0]&4160)&&C.p(g,F?w:[-1,-1]),X&&X.p&&(!F||w[0]&4194304)&&ae(X,K,g,g[22],F?ie(K,g[22],w,null):ne(g[22]),null),g[7]?W?(W.p(g,w),w[0]&128&&I(W,1)):(W=Fe(g),W.c(),I(W,1),W.m(e,s)):W&&(_e(),S(W,1,1,()=>{W=null}),ce()),g[13]?N?(N.p(g,w),w[0]&8192&&I(N,1)):(N=Be(g),N.c(),I(N,1),N.m(e,i)):N&&(_e(),S(N,1,1,()=>{N=null}),ce()),g[9]?L?(L.p(g,w),w[0]&512&&I(L,1)):(L=Re(g),L.c(),I(L,1),L.m(r,o)):L&&(_e(),S(L,1,1,()=>{L=null}),ce()),g[11]?B?B.p(g,w):(B=Pe(g),B.c(),B.m(r,d)):B&&(B.d(1),B=null),g[13]?R?R.p(g,w):(R=Ue(g),R.c(),R.m(r,f)):R&&(R.d(1),R=null),g[10]?P?P.p(g,w):(P=Ge(g),P.c(),P.m(r,c)):P&&(P.d(1),P=null),g[4]?U?U.p(g,w):(U=Je(g),U.c(),U.m(r,_)):U&&(U.d(1),U=null),g[9]?G?G.p(g,w):(G=Qe(g),G.c(),G.m(r,null)):G&&(G.d(1),G=null),g[2]&&g[11]?J?J.p(g,w):(J=Ye(g),J.c(),J.m(e,E)):J&&(J.d(1),J=null),(!F||w[0]&1)&&ee!==(ee=JSON.stringify(g[0],null,"	")+"")&&Z(te,ee)},i(g){F||(I(C,g),I(X,g),I(W),I(N),I(L),F=!0)},o(g){S(C,g),S(X,g),S(W),S(N),S(L),F=!1},d(g){g&&h(e),C&&C.d(g),X&&X.d(g),W&&W.d(),N&&N.d(),L&&L.d(),B&&B.d(),R&&R.d(),P&&P.d(),U&&U.d(),G&&G.d(),J&&J.d()}}}function Ht(n,e,l){let t,a,s,i,r,o,d,f,c,_,m,E,O,T,z,$,D,y,Q,ee;at(n,it,C=>l(14,ee=C));let{$$slots:te={},$$scope:F}=e,{pkg:M}=e;const le=(C,K)=>C+"/blob/main/src/lib/"+(K.endsWith(".js")?K.slice(0,-3)+".ts":K);return n.$$set=C=>{"pkg"in C&&l(0,M=C.pkg),"$$scope"in C&&l(22,F=C.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&1&&l(21,{package_json:t,src_json:a,npm_url:s,repo_name:i,repo_url:r,changelog_url:o,homepage_url:d}=M,t,(l(20,a),l(0,M)),(l(13,s),l(0,M)),(l(12,i),l(0,M)),(l(11,r),l(0,M)),(l(10,o),l(0,M)),(l(9,d),l(0,M))),n.$$.dirty[0]&2097152&&l(15,{name:f,version:c,description:_,icon:m,license:E,repository:O,exports:T}=t,f,(l(8,c),l(21,t),l(0,M)),(l(7,_),l(21,t),l(0,M)),(l(6,m),l(21,t),l(0,M)),(l(1,E),l(21,t),l(0,M)),(l(19,O),l(21,t),l(0,M)),(l(17,T),l(21,t),l(0,M))),n.$$.dirty[0]&1048576&&l(5,{modules:z}=a,z),n.$$.dirty[0]&524288&&l(18,$=O?ue(we(we(typeof O=="string"?O:O.url,".git"),"/"),"git+"):null),n.$$.dirty[0]&262146&&l(4,D=E&&$?$+"/blob/main/LICENSE":null),n.$$.dirty[0]&131072&&l(3,y=T&&Object.keys(T)),n.$$.dirty[0]&131072&&l(2,Q=T?Object.keys(T).map(C=>{const K=ue(C,"./");return K==="."?"index.js":K}):null)},[M,E,Q,y,D,z,m,_,c,d,o,r,i,s,ee,f,le,T,$,O,a,t,F,te]}class Ct extends pe{constructor(e){super(),de(this,e,Ht,jt,he,{pkg:0},null,[-1,-1])}}function It(n){let e,l,t=[{xmlns:"http://www.w3.org/2000/svg"},{"aria-label":n[2]},{viewBox:"0 0 1024 1024"},{fill:"none"},n[3]],a={};for(let s=0;s<t.length;s+=1)a=ot(a,t[s]);return{c(){e=ye("svg"),l=ye("path"),this.h()},l(s){e=Se(s,"svg",{xmlns:!0,"aria-label":!0,viewBox:!0,fill:!0});var i=k(e);l=Se(i,"path",{fill:!0,"fill-rule":!0,"clip-rule":!0,d:!0,transform:!0}),k(l).forEach(h),i.forEach(h),this.h()},h(){u(l,"fill",n[1]),u(l,"fill-rule","evenodd"),u(l,"clip-rule","evenodd"),u(l,"d",`M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02
		15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32
		12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12
		11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33
		11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74
		5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95
		7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31
		12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12
		7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01
		13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71
		14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z`),u(l,"transform","scale(64)"),De(e,a),re(e,"width",n[0]),re(e,"height",n[0])},m(s,i){q(s,e,i),p(e,l)},p(s,[i]){i&2&&u(l,"fill",s[1]),De(e,a=ct(t,[{xmlns:"http://www.w3.org/2000/svg"},i&4&&{"aria-label":s[2]},{viewBox:"0 0 1024 1024"},{fill:"none"},i&8&&s[3]])),re(e,"width",s[0]),re(e,"height",s[0])},i:Ee,o:Ee,d(s){s&&h(e)}}}function qt(n,e,l){let{size:t="var(--spacing_7, 64px)"}=e,{fill:a="var(--color, #000)"}=e,{label:s="GitHub icon"}=e,{attrs:i=void 0}=e;return n.$$set=r=>{"size"in r&&l(0,t=r.size),"fill"in r&&l(1,a=r.fill),"label"in r&&l(2,s=r.label),"attrs"in r&&l(3,i=r.attrs)},[t,a,s,i]}class Tt extends pe{constructor(e){super(),de(this,e,qt,It,he,{size:0,fill:1,label:2,attrs:3})}}const yt=n=>({}),$e=n=>({});function St(n){let e,l;return e=new Tt({}),{c(){ge(e.$$.fragment)},l(t){ve(e.$$.fragment,t)},m(t,a){be(e,t,a),l=!0},i(t){l||(I(e.$$.fragment,t),l=!0)},o(t){S(e.$$.fragment,t),l=!1},d(t){ke(e,t)}}}function xe(n){let e,l,t=je(n[0])+"",a;return{c(){e=v("div"),l=v("a"),a=j(t),this.h()},l(s){e=b(s,"DIV",{class:!0});var i=k(e);l=b(i,"A",{href:!0,rel:!0});var r=k(l);a=H(r,t),r.forEach(h),i.forEach(h),this.h()},h(){u(l,"href",n[0]),u(l,"rel","me"),u(e,"class","root_url svelte-1o3q16b")},m(s,i){q(s,e,i),p(e,l),p(l,a)},p(s,i){i&1&&t!==(t=je(s[0])+"")&&Z(a,t),i&1&&u(l,"href",s[0])},d(s){s&&h(e)}}}function Dt(n){let e,l,t,a,s,i;const r=n[4].default,o=se(r,n,n[3],null),d=n[4].logo,f=se(d,n,n[3],$e),c=f||St();let _=n[0]&&xe(n);return{c(){e=v("footer"),o&&o.c(),l=V(),t=v("div"),a=v("a"),c&&c.c(),s=V(),_&&_.c(),this.h()},l(m){e=b(m,"FOOTER",{class:!0});var E=k(e);o&&o.l(E),l=A(E),t=b(E,"DIV",{class:!0});var O=k(t);a=b(O,"A",{href:!0,rel:!0,class:!0});var T=k(a);c&&c.l(T),T.forEach(h),O.forEach(h),s=A(E),_&&_.l(E),E.forEach(h),this.h()},h(){u(a,"href",n[1]),u(a,"rel","me"),u(a,"class","svelte-1o3q16b"),u(t,"class","logo svelte-1o3q16b"),u(e,"class","panel padded_lg svelte-1o3q16b")},m(m,E){q(m,e,E),o&&o.m(e,null),p(e,l),p(e,t),p(t,a),c&&c.m(a,null),p(e,s),_&&_.m(e,null),i=!0},p(m,[E]){o&&o.p&&(!i||E&8)&&ae(o,r,m,m[3],i?ie(r,m[3],E,null):ne(m[3]),null),f&&f.p&&(!i||E&8)&&ae(f,d,m,m[3],i?ie(d,m[3],E,yt):ne(m[3]),$e),(!i||E&2)&&u(a,"href",m[1]),m[0]?_?_.p(m,E):(_=xe(m),_.c(),_.m(e,null)):_&&(_.d(1),_=null)},i(m){i||(I(o,m),I(c,m),i=!0)},o(m){S(o,m),S(c,m),i=!1},d(m){m&&h(e),o&&o.d(m),c&&c.d(m),_&&_.d()}}}function Mt(n,e,l){let t,{$$slots:a={},$$scope:s}=e,{pkg:i}=e,{root_url:r=null}=e;return n.$$set=o=>{"pkg"in o&&l(2,i=o.pkg),"root_url"in o&&l(0,r=o.root_url),"$$scope"in o&&l(3,s=o.$$scope)},n.$$.update=()=>{n.$$.dirty&4&&l(1,{repo_url:t}=i,t)},[r,t,i,s,a]}class Vt extends pe{constructor(e){super(),de(this,e,Mt,Dt,he,{pkg:2,root_url:0})}}const At=n=>n.split("/").filter(e=>e&&e!=="."&&e!==".."),Ot=n=>{const e=[],l=At(n);l.length&&e.push({type:"separator",path:"/"});let t="";for(let a=0;a<l.length;a++){const s=l[a];t+="/"+s,e.push({type:"piece",name:s,path:t}),a!==l.length-1&&e.push({type:"separator",path:t})}return e};function et(n,e,l){const t=n.slice();return t[11]=e[l],t}const Wt=n=>({}),tt=n=>({});function Nt(n){let e;return{c(){e=j("•")},l(l){e=H(l,"•")},m(l,t){q(l,e,t)},d(l){l&&h(e)}}}function Lt(n){let e,l;const t=n[10].separator,a=se(t,n,n[9],tt),s=a||Ft();return{c(){e=v("span"),s&&s.c(),this.h()},l(i){e=b(i,"SPAN",{class:!0});var r=k(e);s&&s.l(r),r.forEach(h),this.h()},h(){u(e,"class","separator svelte-g6c005")},m(i,r){q(i,e,r),s&&s.m(e,null),l=!0},p(i,r){a&&a.p&&(!l||r&512)&&ae(a,t,i,i[9],l?ie(t,i[9],r,Wt):ne(i[9]),tt)},i(i){l||(I(s,i),l=!0)},o(i){S(s,i),l=!1},d(i){i&&h(e),s&&s.d(i)}}}function zt(n){let e,l=n[11].name+"",t,a;return{c(){e=v("a"),t=j(l),this.h()},l(s){e=b(s,"A",{href:!0,class:!0});var i=k(e);t=H(i,l),i.forEach(h),this.h()},h(){u(e,"href",a=n[0]+n[11].path),u(e,"class","svelte-g6c005"),Y(e,"selected",n[11].path===n[3])},m(s,i){q(s,e,i),p(e,t)},p(s,i){i&4&&l!==(l=s[11].name+"")&&Z(t,l),i&5&&a!==(a=s[0]+s[11].path)&&u(e,"href",a),i&12&&Y(e,"selected",s[11].path===s[3])},i:Ee,o:Ee,d(s){s&&h(e)}}}function Ft(n){let e;return{c(){e=j("/")},l(l){e=H(l,"/")},m(l,t){q(l,e,t)},d(l){l&&h(e)}}}function lt(n){let e,l,t,a;const s=[zt,Lt],i=[];function r(o,d){return o[11].type==="piece"?0:1}return e=r(n),l=i[e]=s[e](n),{c(){l.c(),t=Me()},l(o){l.l(o),t=Me()},m(o,d){i[e].m(o,d),q(o,t,d),a=!0},p(o,d){let f=e;e=r(o),e===f?i[e].p(o,d):(_e(),S(i[f],1,1,()=>{i[f]=null}),ce(),l=i[e],l?l.p(o,d):(l=i[e]=s[e](o),l.c()),I(l,1),l.m(t.parentNode,t))},i(o){a||(I(l),a=!0)},o(o){S(l),a=!1},d(o){o&&h(t),i[e].d(o)}}}function Bt(n){let e,l,t;const a=n[10].default,s=se(a,n,n[9],null),i=s||Nt();let r=fe(n[2]),o=[];for(let f=0;f<r.length;f+=1)o[f]=lt(et(n,r,f));const d=f=>S(o[f],1,1,()=>{o[f]=null});return{c(){e=v("div"),l=v("a"),i&&i.c();for(let f=0;f<o.length;f+=1)o[f].c();this.h()},l(f){e=b(f,"DIV",{class:!0});var c=k(e);l=b(c,"A",{href:!0,class:!0});var _=k(l);i&&i.l(_),_.forEach(h);for(let m=0;m<o.length;m+=1)o[m].l(c);c.forEach(h),this.h()},h(){u(l,"href",n[1]),u(l,"class","svelte-g6c005"),Y(l,"selected",n[1]===n[3]),u(e,"class","breadcrumb svelte-g6c005")},m(f,c){q(f,e,c),p(e,l),i&&i.m(l,null);for(let _=0;_<o.length;_+=1)o[_]&&o[_].m(e,null);t=!0},p(f,[c]){if(s&&s.p&&(!t||c&512)&&ae(s,a,f,f[9],t?ie(a,f[9],c,null):ne(f[9]),null),(!t||c&2)&&u(l,"href",f[1]),(!t||c&10)&&Y(l,"selected",f[1]===f[3]),c&525){r=fe(f[2]);let _;for(_=0;_<r.length;_+=1){const m=et(f,r,_);o[_]?(o[_].p(m,c),I(o[_],1)):(o[_]=lt(m),o[_].c(),I(o[_],1),o[_].m(e,null))}for(_e(),_=r.length;_<o.length;_+=1)d(_);ce()}},i(f){if(!t){I(i,f);for(let c=0;c<r.length;c+=1)I(o[c]);t=!0}},o(f){S(i,f),o=o.filter(Boolean);for(let c=0;c<o.length;c+=1)S(o[c]);t=!1},d(f){f&&h(e),i&&i.d(f),nt(o,f)}}}function Rt(n,e,l){let t,a,s,i,r,o;at(n,it,E=>l(8,o=E));let{$$slots:d={},$$scope:f}=e,{path:c=void 0}=e,{selected_path:_=void 0}=e,{base_path:m=void 0}=e;return n.$$set=E=>{"path"in E&&l(4,c=E.path),"selected_path"in E&&l(5,_=E.selected_path),"base_path"in E&&l(6,m=E.base_path),"$$scope"in E&&l(9,f=E.$$scope)},n.$$.update=()=>{n.$$.dirty&272&&l(7,t=c??o.url.pathname),n.$$.dirty&160&&l(3,a=_===null?null:_===void 0?t:_),n.$$.dirty&64&&l(0,s=m??ut),n.$$.dirty&128&&l(2,i=Ot(t)),n.$$.dirty&1&&l(1,r=s||"/")},[s,r,i,a,c,_,m,t,o,f,d]}class Pt extends pe{constructor(e){super(),de(this,e,Rt,Bt,he,{path:4,selected_path:5,base_path:6})}}const st={name:"@feltjs/felt_habitat",description:"a proof-of-concept Svelte component for collaborative simulated habitats using Felt",version:"0.2.0",public:!0,icon:"🌵",license:"Unlicense",type:"module",homepage:"https://habitat.felt.dev/",repository:"https://github.com/feltjs/felt_habitat",engines:{node:">=20.7"},scripts:{start:"gro dev",dev:"gro dev",build:"gro build",test:"gro test",deploy:"gro deploy"},files:["dist"],peerDependencies:{"@grogarden/util":"*","@sveltejs/kit":"*",svelte:"*"},devDependencies:{"@changesets/changelog-git":"^0.1.14","@feltjs/eslint-config":"^0.4.1","@fuz.dev/fuz":"^0.80.0","@fuz.dev/fuz_contextmenu":"^0.6.0","@fuz.dev/fuz_dialog":"^0.5.0","@grogarden/gro":"^0.102.0","@grogarden/util":"^0.16.0","@sveltejs/adapter-static":"^2.0.3","@sveltejs/kit":"^1.27.4","@sveltejs/package":"^2.2.2","@typescript-eslint/eslint-plugin":"^6.10.0","@typescript-eslint/parser":"^6.10.0",eslint:"^8.53.0","eslint-plugin-svelte":"^2.35.0",prettier:"^3.0.3","prettier-plugin-svelte":"^3.1.0",svelte:"^4.2.3","svelte-check":"^3.6.0",tslib:"^2.6.2",typescript:"^5.2.2",uvu:"^0.5.6"},eslintConfig:{root:!0,extends:"@feltjs"},prettier:{plugins:["prettier-plugin-svelte"],useTabs:!0,printWidth:100,singleQuote:!0,bracketSpacing:!1,overrides:[{files:"package.json",options:{useTabs:!1}}]},exports:{"./Emoji_Menu.svelte":{svelte:"./dist/Emoji_Menu.svelte",default:"./dist/Emoji_Menu.svelte",types:"./dist/Emoji_Menu.svelte.d.ts"},"./Felt_Window_Tenant.svelte":{svelte:"./dist/Felt_Window_Tenant.svelte",default:"./dist/Felt_Window_Tenant.svelte",types:"./dist/Felt_Window_Tenant.svelte.d.ts"},"./grid.js":{default:"./dist/grid.js",types:"./dist/grid.d.ts"},"./Habitat_Item.svelte":{svelte:"./dist/Habitat_Item.svelte",default:"./dist/Habitat_Item.svelte",types:"./dist/Habitat_Item.svelte.d.ts"},"./Habitat_Tile.svelte":{svelte:"./dist/Habitat_Tile.svelte",default:"./dist/Habitat_Tile.svelte",types:"./dist/Habitat_Tile.svelte.d.ts"},"./Habitat_View.svelte":{svelte:"./dist/Habitat_View.svelte",default:"./dist/Habitat_View.svelte",types:"./dist/Habitat_View.svelte.d.ts"},"./Habitat.svelte":{svelte:"./dist/Habitat.svelte",default:"./dist/Habitat.svelte",types:"./dist/Habitat.svelte.d.ts"},"./habitat.js":{default:"./dist/habitat.js",types:"./dist/habitat.d.ts"},"./island.js":{default:"./dist/island.js",types:"./dist/island.d.ts"},"./package.gen.js":{default:"./dist/package.gen.js",types:"./dist/package.gen.d.ts"},"./package.js":{default:"./dist/package.js",types:"./dist/package.d.ts"}}},Ut={name:"@feltjs/felt_habitat",version:"0.2.0",modules:{"./Emoji_Menu.svelte":{path:"Emoji_Menu.svelte",declarations:[]},"./Felt_Window_Tenant.svelte":{path:"Felt_Window_Tenant.svelte",declarations:[]},"./grid.js":{path:"grid.ts",declarations:[{name:"is_bordering",kind:"function"},{name:"is_in_bounds",kind:"function"},{name:"are_neighbors",kind:"function"},{name:"is_border_tile",kind:"function"}]},"./Habitat_Item.svelte":{path:"Habitat_Item.svelte",declarations:[]},"./Habitat_Tile.svelte":{path:"Habitat_Tile.svelte",declarations:[]},"./Habitat_View.svelte":{path:"Habitat_View.svelte",declarations:[]},"./Habitat.svelte":{path:"Habitat.svelte",declarations:[]},"./habitat.js":{path:"habitat.ts",declarations:[{name:"Habitat_State",kind:"type"},{name:"Habitat_Item",kind:"type"},{name:"Habitat_Tile",kind:"type"},{name:"Create_Habitat_State",kind:"type"},{name:"Simulate_Habitat",kind:"type"},{name:"Habitat_World",kind:"class"},{name:"Habitat_Message",kind:"type"},{name:"Start_Habitat_Message",kind:"type"},{name:"Stop_Habitat_Message",kind:"type"},{name:"Reset_Habitat_Message",kind:"type"},{name:"Next_Turn_Habitat_Message",kind:"type"},{name:"Set_State_Habitat_Message",kind:"type"}]},"./island.js":{path:"island.ts",declarations:[{name:"create_island_habitat_state",kind:"variable"},{name:"simulate_island_habitat",kind:"variable"},{name:"random_habitat_item",kind:"function"}]},"./package.gen.js":{path:"package.gen.ts",declarations:[]},"./package.js":{path:"package.ts",declarations:[{name:"package_json",kind:"variable"},{name:"src_json",kind:"variable"}]}}};function Gt(n){let e;return{c(){e=j("💚")},l(l){e=H(l,"💚")},m(l,t){q(l,e,t)},d(l){l&&h(e)}}}function Jt(n){let e,l,t,a,s,i=n[0].repo_name+"",r,o,d,f,c,_,m,E,O,T,z,$;return c=new Ct({props:{pkg:n[0]}}),E=new Vt({props:{pkg:n[0]}}),z=new Pt({props:{$$slots:{default:[Gt]},$$scope:{ctx:n}}}),{c(){e=v("main"),l=v("div"),t=v("section"),a=v("header"),s=v("h1"),r=j(i),o=V(),d=v("section"),f=v("div"),ge(c.$$.fragment),_=V(),m=v("section"),ge(E.$$.fragment),O=V(),T=v("section"),ge(z.$$.fragment),this.h()},l(D){e=b(D,"MAIN",{class:!0});var y=k(e);l=b(y,"DIV",{class:!0});var Q=k(l);t=b(Q,"SECTION",{});var ee=k(t);a=b(ee,"HEADER",{});var te=k(a);s=b(te,"H1",{class:!0});var F=k(s);r=H(F,i),F.forEach(h),te.forEach(h),ee.forEach(h),Q.forEach(h),o=A(y),d=b(y,"SECTION",{class:!0});var M=k(d);f=b(M,"DIV",{class:!0});var le=k(f);ve(c.$$.fragment,le),le.forEach(h),M.forEach(h),_=A(y),m=b(y,"SECTION",{class:!0});var C=k(m);ve(E.$$.fragment,C),C.forEach(h),O=A(y),T=b(y,"SECTION",{class:!0});var K=k(T);ve(z.$$.fragment,K),K.forEach(h),y.forEach(h),this.h()},h(){u(s,"class","svelte-m017mk"),u(l,"class","prose"),u(f,"class","panel padded_md width_md"),u(d,"class","box width_full spaced"),u(m,"class","box"),u(T,"class","box"),u(e,"class","width_md svelte-m017mk")},m(D,y){q(D,e,y),p(e,l),p(l,t),p(t,a),p(a,s),p(s,r),p(e,o),p(e,d),p(d,f),be(c,f,null),p(e,_),p(e,m),be(E,m,null),p(e,O),p(e,T),be(z,T,null),$=!0},p(D,[y]){const Q={};y&2&&(Q.$$scope={dirty:y,ctx:D}),z.$set(Q)},i(D){$||(I(c.$$.fragment,D),I(E.$$.fragment,D),I(z.$$.fragment,D),$=!0)},o(D){S(c.$$.fragment,D),S(E.$$.fragment,D),S(z.$$.fragment,D),$=!1},d(D){D&&h(e),ke(c),ke(E),ke(z)}}}function Qt(n){return[ht(st.homepage,st,Ut)]}class el extends pe{constructor(e){super(),de(this,e,Qt,Jt,he,{})}}export{el as component};
