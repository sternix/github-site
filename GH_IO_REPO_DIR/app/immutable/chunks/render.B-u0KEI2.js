import{e as D,H as k,g as E,b as v,c as R,i as H,d as y,j as I,k as L,l as O,m as V,h as T,n as M}from"./disclose-version.B_ubonKg.js";import{d as Y,i as j,h as C,a as P,e as $,c as q,p as B,f as W,g as z,j as F}from"./runtime.DWHOt21W.js";import{r as G}from"./svelte-head.UjcRriRT.js";const J=new Set,N=new Set;function w(r){var S;var e=this,s=e.ownerDocument,c=r.type,i=((S=r.composedPath)==null?void 0:S.call(r))||[],t=i[0]||r.target,d=0,l=r.__root;if(l){var u=i.indexOf(l);if(u!==-1&&(e===document||e===window)){r.__root=e;return}var f=i.indexOf(e);if(f===-1)return;u<=f&&(d=u)}if(t=i[d]||r.target,t!==e){Y(r,"currentTarget",{configurable:!0,get(){return t||s}});try{for(var _,a=[];t!==null;){var o=t.parentNode||t.host||null;try{var n=t["__"+c];if(n!==void 0&&!t.disabled)if(j(n)){var[p,...g]=n;p.apply(t,[r,...g])}else n.call(t,r)}catch(m){_?a.push(m):_=m}if(r.cancelBubble||o===e||o===null)break;t=o}if(_){for(let m of a)queueMicrotask(()=>{throw m});throw _}}finally{r.__root=e,t=e}}}const K=["wheel","touchstart","touchmove","touchend","touchcancel"];function Q(r){return K.includes(r)}function rr(r,e){(r.__t??(r.__t=r.nodeValue))!==e&&(r.nodeValue=r.__t=e)}function U(r,e){const s=e.anchor??e.target.appendChild(D());return A(r,{...e,anchor:s})}function er(r,e){e.intro=e.intro??!1;const s=e.target,c=T,i=y;try{for(var t=s.firstChild;t&&(t.nodeType!==8||t.data!==k);)t=t.nextSibling;if(!t)throw E;v(!0),R(t),H();const d=A(r,{...e,anchor:t});if(y===null||y.nodeType!==8||y.data!==I)throw L(),E;return v(!1),d}catch(d){if(d===E)return e.recover===!1&&C(),O(),V(s),v(!1),U(r,e);throw d}finally{v(c),R(i),G()}}const h=new Map;function A(r,{target:e,anchor:s,props:c={},events:i,context:t,intro:d=!0}){O();var l=new Set,u=a=>{for(var o=0;o<a.length;o++){var n=a[o];if(!l.has(n)){l.add(n);var p=Q(n);e.addEventListener(n,w,{passive:p});var g=h.get(n);g===void 0?(document.addEventListener(n,w,{passive:p}),h.set(n,1)):h.set(n,g+1)}}};u(P(J)),N.add(u);var f=void 0,_=$(()=>(q(()=>{if(t){B({});var a=F;a.c=t}i&&(c.$$events=i),T&&M(s,null),f=r(s,c)||{},T&&(W.nodes.end=y),t&&z()}),()=>{for(var a of l){e.removeEventListener(a,w);var o=h.get(a);--o===0?(document.removeEventListener(a,w),h.delete(a)):h.set(a,o)}N.delete(u),b.delete(f)}));return b.set(f,_),f}let b=new WeakMap;function tr(r){const e=b.get(r);e==null||e()}export{er as h,U as m,rr as s,tr as u};
