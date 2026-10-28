var _d=Object.defineProperty;var lu=n=>{throw TypeError(n)};var gd=(n,t,e)=>t in n?_d(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Dt=(n,t,e)=>gd(n,typeof t!="symbol"?t+"":t,e),Wo=(n,t,e)=>t.has(n)||lu("Cannot "+e);var O=(n,t,e)=>(Wo(n,t,"read from private field"),e?e.call(n):t.get(n)),Jt=(n,t,e)=>t.has(n)?lu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e),Kt=(n,t,e,i)=>(Wo(n,t,"write to private field"),i?i.call(n,e):t.set(n,e),e),ue=(n,t,e)=>(Wo(n,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const Oh=!1;var Bc=Array.isArray,vd=Array.prototype.indexOf,go=Array.prototype.includes,No=Array.from,xd=Object.defineProperty,Zs=Object.getOwnPropertyDescriptor,Bh=Object.getOwnPropertyDescriptors,Md=Object.prototype,Sd=Array.prototype,kc=Object.getPrototypeOf,cu=Object.isExtensible;const kh=()=>{};function yd(n){return n()}function Cl(n){for(var t=0;t<n.length;t++)n[t]()}function zh(){var n,t,e=new Promise((i,r)=>{n=i,t=r});return{promise:e,resolve:n,reject:t}}function Hh(n,t){if(Array.isArray(n))return n;if(!(Symbol.iterator in n))return Array.from(n);const e=[];for(const i of n)if(e.push(i),e.length===t)break;return e}const $e=2,gs=4,fa=8,Gh=1<<24,$n=16,ni=32,$i=64,Pl=128,kn=512,He=1024,je=2048,hi=4096,on=8192,zn=16384,ws=32768,Dl=1<<25,vs=65536,vo=1<<17,Ed=1<<18,Rs=1<<19,Vh=1<<20,li=1<<25,Cr=65536,xo=1<<21,as=1<<22,Yi=1<<23,qi=Symbol("$state"),bd=Symbol(""),no=Symbol("attributes"),Ll=Symbol("class"),Ul=Symbol("style"),Vs=Symbol("text"),io=Symbol("form reset"),Fo=new class extends Error{constructor(){super(...arguments);Dt(this,"name","StaleReactionError");Dt(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};function Td(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Ad(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function wd(n,t,e){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Rd(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Cd(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Pd(n){throw new Error("https://svelte.dev/e/effect_orphan")}function Dd(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Ld(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ud(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Id(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Nd(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Fd=1,Od=2,Wh=4,Bd=8,kd=16,zd=1,Hd=2,ke=Symbol("uninitialized"),Gd="http://www.w3.org/1999/xhtml";function Vd(){console.warn("https://svelte.dev/e/derived_inert")}function Wd(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Xd(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Xh(n){return n===this.v}function Yd(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function Yh(n){return!Yd(n,this.v)}let da=!1,qd=!1;function jd(){da=!0}let Te=null;function xs(n){Te=n}function er(n,t=!1,e){Te={p:Te,i:!1,c:null,e:null,s:n,x:null,r:se,l:da&&!t?{s:null,u:null,$:[]}:null}}function nr(n){var t=Te,e=t.e;if(e!==null){t.e=null;for(var i of e)pf(i)}return t.i=!0,Te=t.p,{}}function Cs(){return!da||Te!==null&&Te.l===null}let mr=[];function qh(){var n=mr;mr=[],Cl(n)}function ji(n){if(mr.length===0&&!Js){var t=mr;queueMicrotask(()=>{t===mr&&qh()})}mr.push(n)}function Kd(){for(;mr.length>0;)qh()}function jh(n){var t=se;if(t===null)return ie.f|=Yi,n;if((t.f&ws)===0&&(t.f&gs)===0)throw n;Wi(n,t)}function Wi(n,t){if(!(t!==null&&(t.f&zn)!==0)){for(;t!==null;){if((t.f&Pl)!==0){if((t.f&ws)===0)throw n;try{t.b.error(n);return}catch(e){n=e}}t=t.parent}throw n}}const Zd=-7169;function Pe(n,t){n.f=n.f&Zd|t}function zc(n){(n.f&kn)!==0||n.deps===null?Pe(n,He):Pe(n,hi)}function Kh(n){if(n!==null)for(const t of n)(t.f&$e)===0||(t.f&Cr)===0||(t.f^=Cr,Kh(t.deps))}function Zh(n,t,e){(n.f&je)!==0?t.add(n):(n.f&hi)!==0&&e.add(n),Kh(n.deps),Pe(n,He)}function $d(n){let t=0,e=Ji(0),i;return()=>{Xc()&&(W(e),ko(()=>(t===0&&(i=Ir(()=>n(()=>Qs(e)))),t+=1,()=>{ji(()=>{t-=1,t===0&&(i==null||i(),i=void 0,Qs(e))})})))}}var Jd=vs|Rs;function Qd(n,t,e,i){new tp(n,t,e,i)}var In,Oc,Nn,Mr,fn,Fn,rn,An,Ei,Sr,Gi,us,oa,la,bi,Lo,Re,ep,np,ip,Il,ro,so,Nl,Fl;class tp{constructor(t,e,i,r){Jt(this,Re);Dt(this,"parent");Dt(this,"is_pending",!1);Dt(this,"transform_error");Jt(this,In);Jt(this,Oc,null);Jt(this,Nn);Jt(this,Mr);Jt(this,fn);Jt(this,Fn,null);Jt(this,rn,null);Jt(this,An,null);Jt(this,Ei,null);Jt(this,Sr,0);Jt(this,Gi,0);Jt(this,us,!1);Jt(this,oa,new Set);Jt(this,la,new Set);Jt(this,bi,null);Jt(this,Lo,$d(()=>(Kt(this,bi,Ji(O(this,Sr))),()=>{Kt(this,bi,null)})));var s;Kt(this,In,t),Kt(this,Nn,e),Kt(this,Mr,a=>{var o=se;o.b=this,o.f|=Pl,i(a)}),this.parent=se.b,this.transform_error=r??((s=this.parent)==null?void 0:s.transform_error)??(a=>a),Kt(this,fn,zo(()=>{ue(this,Re,Il).call(this)},Jd))}defer_effect(t){Zh(t,O(this,oa),O(this,la))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!O(this,Nn).pending}update_pending_count(t,e){ue(this,Re,Nl).call(this,t,e),Kt(this,Sr,O(this,Sr)+t),!(!O(this,bi)||O(this,us))&&(Kt(this,us,!0),ji(()=>{Kt(this,us,!1),O(this,bi)&&Ms(O(this,bi),O(this,Sr))}))}get_effect_pending(){return O(this,Lo).call(this),W(O(this,bi))}error(t){if(!O(this,Nn).onerror&&!O(this,Nn).failed)throw t;Lt!=null&&Lt.is_fork?(O(this,Fn)&&Lt.skip_effect(O(this,Fn)),O(this,rn)&&Lt.skip_effect(O(this,rn)),O(this,An)&&Lt.skip_effect(O(this,An)),Lt.oncommit(()=>{ue(this,Re,Fl).call(this,t)})):ue(this,Re,Fl).call(this,t)}}In=new WeakMap,Oc=new WeakMap,Nn=new WeakMap,Mr=new WeakMap,fn=new WeakMap,Fn=new WeakMap,rn=new WeakMap,An=new WeakMap,Ei=new WeakMap,Sr=new WeakMap,Gi=new WeakMap,us=new WeakMap,oa=new WeakMap,la=new WeakMap,bi=new WeakMap,Lo=new WeakMap,Re=new WeakSet,ep=function(){try{Kt(this,Fn,On(()=>O(this,Mr).call(this,O(this,In))))}catch(t){this.error(t)}},np=function(t){const e=O(this,Nn).failed;e&&Kt(this,An,On(()=>{e(O(this,In),()=>t,()=>()=>{})}))},ip=function(){const t=O(this,Nn).pending;t&&(this.is_pending=!0,Kt(this,rn,On(()=>t(O(this,In)))),ji(()=>{var e=Kt(this,Ei,document.createDocumentFragment()),i=Ci();e.append(i),Kt(this,Fn,ue(this,Re,so).call(this,()=>On(()=>O(this,Mr).call(this,i)))),O(this,Gi)===0&&(O(this,In).before(e),Kt(this,Ei,null),Ar(O(this,rn),()=>{Kt(this,rn,null)}),ue(this,Re,ro).call(this,Lt))}))},Il=function(){try{if(this.is_pending=this.has_pending_snippet(),Kt(this,Gi,0),Kt(this,Sr,0),Kt(this,Fn,On(()=>{O(this,Mr).call(this,O(this,In))})),O(this,Gi)>0){var t=Kt(this,Ei,document.createDocumentFragment());jc(O(this,Fn),t);const e=O(this,Nn).pending;Kt(this,rn,On(()=>e(O(this,In))))}else ue(this,Re,ro).call(this,Lt)}catch(e){this.error(e)}},ro=function(t){this.is_pending=!1,t.transfer_effects(O(this,oa),O(this,la))},so=function(t){var e=se,i=ie,r=Te;fi(O(this,fn)),Gn(O(this,fn)),xs(O(this,fn).ctx);try{return Pr.ensure(),t()}catch(s){return jh(s),null}finally{fi(e),Gn(i),xs(r)}},Nl=function(t,e){var i;if(!this.has_pending_snippet()){this.parent&&ue(i=this.parent,Re,Nl).call(i,t,e);return}Kt(this,Gi,O(this,Gi)+t),O(this,Gi)===0&&(ue(this,Re,ro).call(this,e),O(this,rn)&&Ar(O(this,rn),()=>{Kt(this,rn,null)}),O(this,Ei)&&(O(this,In).before(O(this,Ei)),Kt(this,Ei,null)))},Fl=function(t){O(this,Fn)&&(_n(O(this,Fn)),Kt(this,Fn,null)),O(this,rn)&&(_n(O(this,rn)),Kt(this,rn,null)),O(this,An)&&(_n(O(this,An)),Kt(this,An,null));var e=O(this,Nn).onerror;let i=O(this,Nn).failed;var r=!1,s=!1;const a=()=>{if(r){Xd();return}r=!0,s&&Nd(),O(this,An)!==null&&Ar(O(this,An),()=>{Kt(this,An,null)}),ue(this,Re,so).call(this,()=>{ue(this,Re,Il).call(this)})},o=l=>{try{s=!0,e==null||e(l,a),s=!1}catch(u){Wi(u,O(this,fn)&&O(this,fn).parent)}i&&Kt(this,An,ue(this,Re,so).call(this,()=>{try{return On(()=>{var u=se;u.b=this,u.f|=Pl,i(O(this,In),()=>l,()=>a)})}catch(u){return Wi(u,O(this,fn).parent),null}}))};ji(()=>{var l;try{l=this.transform_error(t)}catch(u){Wi(u,O(this,fn)&&O(this,fn).parent);return}l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(o,u=>Wi(u,O(this,fn)&&O(this,fn).parent)):o(l)})};function rp(n,t,e,i){const r=Cs()?Oo:Jh;var s=n.filter(p=>!p.settled),a=t.map(r);if(e.length===0&&s.length===0){i(a);return}var o=se,l=sp(),u=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(p=>p.promise)):null;function c(p){if((o.f&zn)===0){l();try{i([...a,...p])}catch(_){Wi(_,o)}Mo()}}var f=$h();if(e.length===0){u.then(()=>c([])).finally(f);return}function h(){Promise.all(e.map(p=>ap(p))).then(c).catch(p=>Wi(p,o)).finally(f)}u?u.then(()=>{l(),h(),Mo()}):h()}function sp(){var n=se,t=ie,e=Te,i=Lt;return function(s=!0){fi(n),Gn(t),xs(e),s&&(n.f&zn)===0&&(i==null||i.activate(),i==null||i.apply())}}function Mo(n=!0){fi(null),Gn(null),xs(null),n&&(Lt==null||Lt.deactivate())}function $h(){var n=se,t=n.b,e=Lt,i=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,e),e.increment(i,n),()=>{t==null||t.update_pending_count(-1,e),e.decrement(i,n)}}function Oo(n){var t=$e|je;return se!==null&&(se.f|=Rs),{ctx:Te,deps:null,effects:null,equals:Xh,f:t,fn:n,reactions:null,rv:0,v:ke,wv:0,parent:se,ac:null}}const Ws=Symbol("obsolete");function ap(n,t,e){let i=se;i===null&&Ad();var r=void 0,s=Ji(ke),a=!ie,o=new Set;return Ep(()=>{var p,_;var l=se,u=zh();r=u.promise;try{Promise.resolve(n()).then(u.resolve,g=>{g!==Fo&&u.reject(g)}).finally(Mo)}catch(g){u.reject(g),Mo()}var c=Lt;if(a){if((l.f&ws)!==0)var f=$h();if((p=i.b)!=null&&p.is_rendered())(_=c.async_deriveds.get(l))==null||_.reject(Ws);else for(const g of o.values())g.reject(Ws);o.add(u),c.async_deriveds.set(l,u)}const h=(g,m=void 0)=>{f==null||f(),o.delete(u),m!==Ws&&(c.activate(),m?(s.f|=Yi,Ms(s,m)):((s.f&Yi)!==0&&(s.f^=Yi),Ms(s,g)),c.deactivate())};u.promise.then(h,g=>h(null,g||"unknown"))}),Yc(()=>{for(const l of o)l.reject(Ws)}),new Promise(l=>{function u(c){function f(){c===r?l(s):u(r)}c.then(f,f)}u(r)})}function Fe(n){const t=Oo(n);return Mf(t),t}function Jh(n){const t=Oo(n);return t.equals=Yh,t}function op(n){var t=n.effects;if(t!==null){n.effects=null;for(var e=0;e<t.length;e+=1)_n(t[e])}}function Hc(n){var t,e=se,i=n.parent;if(!Qi&&i!==null&&n.v!==ke&&(i.f&(zn|on))!==0)return Vd(),n.v;fi(i);try{n.f&=~Cr,op(n),t=bf(n)}finally{fi(e)}return t}function Qh(n){var t=Hc(n);if(!n.equals(t)&&(n.wv=yf(),(!(Lt!=null&&Lt.is_fork)||n.deps===null)&&(Lt!==null?(Lt.capture(n,t,!0),$s==null||$s.capture(n,t,!0)):n.v=t,n.deps===null))){Pe(n,He);return}Qi||(Ze!==null?(Xc()||Lt!=null&&Lt.is_fork)&&Ze.set(n,t):zc(n))}function lp(n){var t,e;if(n.effects!==null)for(const i of n.effects)(i.teardown||i.ac)&&((t=i.teardown)==null||t.call(i),(e=i.ac)==null||e.abort(Fo),i.fn!==null&&(i.teardown=kh),i.ac=null,ea(i,0),qc(i))}function tf(n){if(n.effects!==null)for(const t of n.effects)t.teardown&&t.fn!==null&&Ss(t)}let Xo=null,zr=null,Lt=null,$s=null,Ze=null,Ol=null,Js=!1,Yo=!1,is=null,ao=null;var uu=0;let cp=1;var hs,Vi,yr,fs,ds,ps,Ti,ms,dn,ca,Ai,jn,ri,_s,Er,ge,Bl,Xs,kl,ef,nf,ns,up,Ys;const Uo=class Uo{constructor(){Jt(this,ge);Dt(this,"id",cp++);Jt(this,hs,!1);Dt(this,"linked",!0);Jt(this,Vi,null);Jt(this,yr,null);Dt(this,"async_deriveds",new Map);Dt(this,"current",new Map);Dt(this,"previous",new Map);Jt(this,fs,new Set);Jt(this,ds,new Set);Jt(this,ps,0);Jt(this,Ti,new Map);Jt(this,ms,null);Jt(this,dn,[]);Jt(this,ca,[]);Jt(this,Ai,new Set);Jt(this,jn,new Set);Jt(this,ri,new Map);Jt(this,_s,new Set);Dt(this,"is_fork",!1);Jt(this,Er,!1);zr===null?Xo=zr=this:(Kt(zr,yr,this),Kt(this,Vi,zr)),zr=this}skip_effect(t){O(this,ri).has(t)||O(this,ri).set(t,{d:[],m:[]}),O(this,_s).delete(t)}unskip_effect(t,e=i=>this.schedule(i)){var i=O(this,ri).get(t);if(i){O(this,ri).delete(t);for(var r of i.d)Pe(r,je),e(r);for(r of i.m)Pe(r,hi),e(r)}O(this,_s).add(t)}capture(t,e,i=!1){t.v!==ke&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Yi)===0&&(this.current.set(t,[e,i]),Ze==null||Ze.set(t,e)),this.is_fork||(t.v=e)}activate(){Lt=this}deactivate(){Lt=null,Ze=null}flush(){try{Yo=!0,Lt=this,ue(this,ge,Xs).call(this)}finally{uu=0,Ol=null,is=null,ao=null,Yo=!1,Lt=null,Ze=null,Tr.clear()}}discard(){var t;for(const e of O(this,ds))e(this);O(this,ds).clear();for(const e of this.async_deriveds.values())e.reject(Ws);ue(this,ge,Ys).call(this),(t=O(this,ms))==null||t.resolve()}register_created_effect(t){O(this,ca).push(t)}increment(t,e){if(Kt(this,ps,O(this,ps)+1),t){let i=O(this,Ti).get(e)??0;O(this,Ti).set(e,i+1)}}decrement(t,e){if(Kt(this,ps,O(this,ps)-1),t){let i=O(this,Ti).get(e)??0;i===1?O(this,Ti).delete(e):O(this,Ti).set(e,i-1)}O(this,Er)||(Kt(this,Er,!0),ji(()=>{Kt(this,Er,!1),this.linked&&this.flush()}))}transfer_effects(t,e){for(const i of t)O(this,Ai).add(i);for(const i of e)O(this,jn).add(i);t.clear(),e.clear()}oncommit(t){O(this,fs).add(t)}ondiscard(t){O(this,ds).add(t)}settled(){return(O(this,ms)??Kt(this,ms,zh())).promise}static ensure(){if(Lt===null){const t=Lt=new Uo;!Yo&&!Js&&ji(()=>{O(t,hs)||t.flush()})}return Lt}apply(){{Ze=null;return}}schedule(t){var r;if(Ol=t,(r=t.b)!=null&&r.is_pending&&(t.f&(gs|fa|Gh))!==0&&(t.f&ws)===0){t.b.defer_effect(t);return}for(var e=t;e.parent!==null;){e=e.parent;var i=e.f;if(is!==null&&e===se&&(ie===null||(ie.f&$e)===0))return;if((i&($i|ni))!==0){if((i&He)===0)return;e.f^=He}}O(this,dn).push(e)}};hs=new WeakMap,Vi=new WeakMap,yr=new WeakMap,fs=new WeakMap,ds=new WeakMap,ps=new WeakMap,Ti=new WeakMap,ms=new WeakMap,dn=new WeakMap,ca=new WeakMap,Ai=new WeakMap,jn=new WeakMap,ri=new WeakMap,_s=new WeakMap,Er=new WeakMap,ge=new WeakSet,Bl=function(){if(this.is_fork)return!0;for(const i of O(this,Ti).keys()){for(var t=i,e=!1;t.parent!==null;){if(O(this,ri).has(t)){e=!0;break}t=t.parent}if(!e)return!0}return!1},Xs=function(){var l,u,c,f;Kt(this,hs,!0),uu++>1e3&&(ue(this,ge,Ys).call(this),fp());for(const h of O(this,Ai))O(this,jn).delete(h),Pe(h,je),this.schedule(h);for(const h of O(this,jn))Pe(h,hi),this.schedule(h);const t=O(this,dn);Kt(this,dn,[]),this.apply();var e=is=[],i=[],r=ao=[];for(const h of t)try{ue(this,ge,kl).call(this,h,e,i)}catch(p){throw af(h),ue(this,ge,Bl).call(this)||this.discard(),p}if(Lt=null,r.length>0){var s=Uo.ensure();for(const h of r)s.schedule(h)}if(is=null,ao=null,ue(this,ge,Bl).call(this)){ue(this,ge,ns).call(this,i),ue(this,ge,ns).call(this,e);for(const[h,p]of O(this,ri))sf(h,p);r.length>0&&ue(l=Lt,ge,Xs).call(l);return}const a=ue(this,ge,ef).call(this);if(a){ue(this,ge,ns).call(this,i),ue(this,ge,ns).call(this,e),ue(u=a,ge,nf).call(u,this);return}O(this,Ai).clear(),O(this,jn).clear();for(const h of O(this,fs))h(this);O(this,fs).clear(),$s=this,hu(i),hu(e),$s=null,(c=O(this,ms))==null||c.resolve();var o=Lt;if(O(this,ps)===0&&(O(this,dn).length===0||o!==null)&&ue(this,ge,Ys).call(this),O(this,dn).length>0)if(o!==null){const h=o;O(h,dn).push(...O(this,dn).filter(p=>!O(h,dn).includes(p)))}else o=this;o!==null&&ue(f=o,ge,Xs).call(f)},kl=function(t,e,i){t.f^=He;for(var r=t.first;r!==null;){var s=r.f,a=(s&(ni|$i))!==0,o=a&&(s&He)!==0,l=o||(s&on)!==0||O(this,ri).has(r);if(!l&&r.fn!==null){a?r.f^=He:(s&gs)!==0?e.push(r):_a(r)&&((s&$n)!==0&&O(this,jn).add(r),Ss(r));var u=r.first;if(u!==null){r=u;continue}}for(;r!==null;){var c=r.next;if(c!==null){r=c;break}r=r.parent}}},ef=function(){for(var t=O(this,Vi);t!==null;){if(!t.is_fork){for(const[e,[,i]]of this.current)if(t.current.has(e)&&!i)return t}t=O(t,Vi)}return null},nf=function(t){var i;for(const[r,s]of t.current)!this.previous.has(r)&&t.previous.has(r)&&this.previous.set(r,t.previous.get(r)),this.current.set(r,s);for(const[r,s]of t.async_deriveds){const a=this.async_deriveds.get(r);a&&s.promise.then(a.resolve).catch(a.reject)}t.async_deriveds.clear(),this.transfer_effects(O(t,Ai),O(t,jn));const e=r=>{var s=r.reactions;if(s!==null)for(const l of s){var a=l.f;if((a&$e)!==0)e(l);else{var o=l;a&(as|$n)&&!this.async_deriveds.has(o)&&(O(this,jn).delete(o),Pe(o,je),this.schedule(o))}}};for(const r of this.current.keys())e(r);this.oncommit(()=>t.discard()),ue(i=t,ge,Ys).call(i),Lt=this,ue(this,ge,Xs).call(this)},ns=function(t){for(var e=0;e<t.length;e+=1)Zh(t[e],O(this,Ai),O(this,jn))},up=function(){var f;for(let h=Xo;h!==null;h=O(h,yr)){var t=h.id<this.id,e=[];for(const[p,[_,g]]of this.current){if(h.current.has(p)){var i=h.current.get(p)[0];if(t&&_!==i)h.current.set(p,[_,g]);else continue}e.push(p)}if(t)for(const[p,_]of this.async_deriveds){const g=h.async_deriveds.get(p);g&&_.promise.then(g.resolve).catch(g.reject)}var r=[...h.current.keys()].filter(p=>!h.current.get(p)[1]);if(!(!O(h,hs)||r.length===0)){var s=r.filter(p=>!this.current.has(p));if(s.length===0)t&&h.discard();else if(e.length>0){if(t)for(const p of O(this,_s))h.unskip_effect(p,_=>{var g;(_.f&($n|as))!==0?h.schedule(_):ue(g=h,ge,ns).call(g,[_])});h.activate();var a=new Set,o=new Map;for(var l of e)rf(l,s,a,o);o=new Map;var u=[...h.current].filter(([p,_])=>{const g=this.current.get(p);return g?g[0]!==_[0]||g[1]!==_[1]:!0}).map(([p])=>p);if(u.length>0)for(const p of O(this,ca))(p.f&(zn|on|vo))===0&&Gc(p,u,o)&&((p.f&(as|$n))!==0?(Pe(p,je),h.schedule(p)):O(h,Ai).add(p));if(O(h,dn).length>0&&!O(h,Er)){h.apply();for(var c of O(h,dn))ue(f=h,ge,kl).call(f,c,[],[]);Kt(h,dn,[])}h.deactivate()}}}},Ys=function(){if(this.linked){var t=O(this,Vi),e=O(this,yr);t===null?Xo=e:Kt(t,yr,e),e===null?zr=t:Kt(e,Vi,t),this.linked=!1}};let Pr=Uo;function hp(n){var t=Js;Js=!0;try{for(var e;;){if(Kd(),Lt===null)return e;Lt.flush()}}finally{Js=t}}function fp(){try{Dd()}catch(n){Wi(n,Ol)}}let qn=null;function hu(n){var t=n.length;if(t!==0){for(var e=0;e<t;){var i=n[e++];if((i.f&(zn|on))===0&&_a(i)&&(qn=new Set,Ss(i),i.deps===null&&i.first===null&&i.nodes===null&&i.teardown===null&&i.ac===null&&gf(i),(qn==null?void 0:qn.size)>0)){Tr.clear();for(const r of qn){if((r.f&(zn|on))!==0)continue;const s=[r];let a=r.parent;for(;a!==null;)qn.has(a)&&(qn.delete(a),s.push(a)),a=a.parent;for(let o=s.length-1;o>=0;o--){const l=s[o];(l.f&(zn|on))===0&&Ss(l)}}qn.clear()}}qn=null}}function rf(n,t,e,i){if(!e.has(n)&&(e.add(n),n.reactions!==null))for(const r of n.reactions){const s=r.f;(s&$e)!==0?rf(r,t,e,i):(s&(as|$n))!==0&&(s&je)===0&&Gc(r,t,i)&&(Pe(r,je),Vc(r))}}function Gc(n,t,e){const i=e.get(n);if(i!==void 0)return i;if(n.deps!==null)for(const r of n.deps){if(go.call(t,r))return!0;if((r.f&$e)!==0&&Gc(r,t,e))return e.set(r,!0),!0}return e.set(n,!1),!1}function Vc(n){Lt.schedule(n)}function sf(n,t){if(!((n.f&ni)!==0&&(n.f&He)!==0)){(n.f&je)!==0?t.d.push(n):(n.f&hi)!==0&&t.m.push(n),Pe(n,He);for(var e=n.first;e!==null;)sf(e,t),e=e.next}}function af(n){Pe(n,He);for(var t=n.first;t!==null;)af(t),t=t.next}let So=new Set;const Tr=new Map;let of=!1;function Ji(n,t){var e={f:0,v:n,reactions:null,equals:Xh,rv:0,wv:0};return e}function qe(n,t){const e=Ji(n);return Mf(e),e}function dp(n,t=!1,e=!0){var r;const i=Ji(n);return t||(i.equals=Yh),da&&e&&Te!==null&&Te.l!==null&&((r=Te.l).s??(r.s=[])).push(i),i}function Ne(n,t,e=!1){ie!==null&&(!Jn||(ie.f&vo)!==0)&&Cs()&&(ie.f&($e|$n|as|vo))!==0&&(ui===null||!ui.has(n))&&Id();let i=e?Xi(t):t;return Ms(n,i,ao)}function Ms(n,t,e=null){if(!n.equals(t)){Tr.set(n,Qi?t:n.v);var i=Pr.ensure();if(i.capture(n,t),(n.f&$e)!==0){const r=n;(n.f&je)!==0&&Hc(r),Ze===null&&zc(r)}n.wv=yf(),lf(n,je,e),Cs()&&se!==null&&(se.f&He)!==0&&(se.f&(ni|$i))===0&&(Un===null?Ap([n]):Un.push(n)),!i.is_fork&&So.size>0&&!of&&pp()}return t}function pp(){of=!1;for(const n of So){(n.f&He)!==0&&Pe(n,hi);let t;try{t=_a(n)}catch{t=!0}t&&Ss(n)}So.clear()}function Qs(n){Ne(n,n.v+1)}function lf(n,t,e){var i=n.reactions;if(i!==null)for(var r=Cs(),s=i.length,a=0;a<s;a++){var o=i[a],l=o.f;if(!(!r&&o===se)){var u=(l&je)===0;if(u&&Pe(o,t),(l&vo)!==0)So.add(o);else if((l&$e)!==0){var c=o;Ze==null||Ze.delete(c),(l&Cr)===0&&(l&kn&&(se===null||(se.f&xo)===0)&&(o.f|=Cr),lf(c,hi,e))}else if(u){var f=o;(l&$n)!==0&&qn!==null&&qn.add(f),e!==null?e.push(f):Vc(f)}}}}function Xi(n){if(typeof n!="object"||n===null||qi in n)return n;const t=kc(n);if(t!==Md&&t!==Sd)return n;var e=new Map,i=Bc(n),r=qe(0),s=wr,a=o=>{if(wr===s)return o();var l=ie,u=wr;Gn(null),_u(s);var c=o();return Gn(l),_u(u),c};return i&&e.set("length",qe(n.length)),new Proxy(n,{defineProperty(o,l,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&Ld();var c=e.get(l);return c===void 0?a(()=>{var f=qe(u.value);return e.set(l,f),f}):Ne(c,u.value,!0),!0},deleteProperty(o,l){var u=e.get(l);if(u===void 0){if(l in o){const c=a(()=>qe(ke));e.set(l,c),Qs(r)}}else Ne(u,ke),Qs(r);return!0},get(o,l,u){var p;if(l===qi)return n;var c=e.get(l),f=l in o;if(c===void 0&&(!f||(p=Zs(o,l))!=null&&p.writable)&&(c=a(()=>{var _=Xi(f?o[l]:ke),g=qe(_);return g}),e.set(l,c)),c!==void 0){var h=W(c);return h===ke?void 0:h}return Reflect.get(o,l,u)},getOwnPropertyDescriptor(o,l){var u=Reflect.getOwnPropertyDescriptor(o,l);if(u&&"value"in u){var c=e.get(l);c&&(u.value=W(c))}else if(u===void 0){var f=e.get(l),h=f==null?void 0:f.v;if(f!==void 0&&h!==ke)return{enumerable:!0,configurable:!0,value:h,writable:!0}}return u},has(o,l){var h;if(l===qi)return!0;var u=e.get(l),c=u!==void 0&&u.v!==ke||Reflect.has(o,l);if(u!==void 0||se!==null&&(!c||(h=Zs(o,l))!=null&&h.writable)){u===void 0&&(u=a(()=>{var p=c?Xi(o[l]):ke,_=qe(p);return _}),e.set(l,u));var f=W(u);if(f===ke)return!1}return c},set(o,l,u,c){var E;var f=e.get(l),h=l in o;if(i&&l==="length")for(var p=u;p<f.v;p+=1){var _=e.get(p+"");_!==void 0?Ne(_,ke):p in o&&(_=a(()=>qe(ke)),e.set(p+"",_))}if(f===void 0)(!h||(E=Zs(o,l))!=null&&E.writable)&&(f=a(()=>qe(void 0)),Ne(f,Xi(u)),e.set(l,f));else{h=f.v!==ke;var g=a(()=>Xi(u));Ne(f,g)}var m=Reflect.getOwnPropertyDescriptor(o,l);if(m!=null&&m.set&&m.set.call(c,u),!h){if(i&&typeof l=="string"){var d=e.get("length"),A=Number(l);Number.isInteger(A)&&A>=d.v&&Ne(d,A+1)}Qs(r)}return!0},ownKeys(o){W(r);var l=Reflect.ownKeys(o).filter(f=>{var h=e.get(f);return h===void 0||h.v!==ke});for(var[u,c]of e)c.v!==ke&&!(u in o)&&l.push(u);return l},setPrototypeOf(){Ud()}})}function fu(n){try{if(n!==null&&typeof n=="object"&&qi in n)return n[qi]}catch{}return n}function mp(n,t){return Object.is(fu(n),fu(t))}var du,cf,uf,hf;function _p(){if(du===void 0){du=window,cf=/Firefox/.test(navigator.userAgent);var n=Element.prototype,t=Node.prototype,e=Text.prototype;uf=Zs(t,"firstChild").get,hf=Zs(t,"nextSibling").get,cu(n)&&(n[Ll]=void 0,n[no]=null,n[Ul]=void 0,n.__e=void 0),cu(e)&&(e[Vs]=void 0)}}function Ci(n=""){return document.createTextNode(n)}function yo(n){return uf.call(n)}function pa(n){return hf.call(n)}function at(n,t){return yo(n)}function ma(n,t=!1){{var e=yo(n);return e instanceof Comment&&e.data===""?pa(e):e}}function nt(n,t=1,e=!1){let i=n;for(;t--;)i=pa(i);return i}function gp(n){n.textContent=""}function ff(){return!1}function vp(n,t,e){return e?document.createElement(n,{is:e}):document.createElement(n)}let pu=!1;function xp(){pu||(pu=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{var t;if(!n.defaultPrevented)for(const e of n.target.elements)(t=e[io])==null||t.call(e)})},{capture:!0}))}function Bo(n){var t=ie,e=se;Gn(null),fi(null);try{return n()}finally{Gn(t),fi(e)}}function Wc(n,t,e,i=e){n.addEventListener(t,()=>Bo(e));const r=n[io];r?n[io]=()=>{r(),i(!0)}:n[io]=()=>i(!0),xp()}function df(n){se===null&&(ie===null&&Pd(),Cd()),Qi&&Rd()}function Mp(n,t){var e=t.last;e===null?t.last=t.first=n:(e.next=n,n.prev=e,t.last=n)}function pi(n,t){var e=se;e!==null&&(e.f&on)!==0&&(n|=on);var i={ctx:Te,deps:null,nodes:null,f:n|je|kn,first:null,fn:t,last:null,next:null,parent:e,b:e&&e.b,prev:null,teardown:null,wv:0,ac:null};Lt==null||Lt.register_created_effect(i);var r=i;if((n&gs)!==0)is!==null?is.push(i):Pr.ensure().schedule(i);else if(t!==null){try{Ss(i)}catch(a){throw _n(i),a}r.deps===null&&r.teardown===null&&r.nodes===null&&r.first===r.last&&(r.f&Rs)===0&&(r=r.first,(n&$n)!==0&&(n&vs)!==0&&r!==null&&(r.f|=vs))}if(r!==null&&(r.parent=e,e!==null&&Mp(r,e),ie!==null&&(ie.f&$e)!==0&&(n&$i)===0)){var s=ie;(s.effects??(s.effects=[])).push(r)}return i}function Xc(){return ie!==null&&!Jn}function Yc(n){const t=pi(fa,null);return Pe(t,He),t.teardown=n,t}function Tn(n){df();var t=se.f,e=!ie&&(t&ni)!==0&&Te!==null&&!Te.i;if(e){var i=Te;(i.e??(i.e=[])).push(n)}else return pf(n)}function pf(n){return pi(gs|Vh,n)}function Sp(n){return df(),pi(fa|Vh,n)}function yp(n){Pr.ensure();const t=pi($i|Rs,n);return(e={})=>new Promise(i=>{e.outro?Ar(t,()=>{_n(t),i(void 0)}):(_n(t),i(void 0))})}function mf(n){return pi(gs,n)}function Ep(n){return pi(as|Rs,n)}function ko(n,t=0){return pi(fa|t,n)}function _e(n,t=[],e=[],i=[]){rp(i,t,e,r=>{pi(fa,()=>{n(...r.map(W))})})}function zo(n,t=0){var e=pi($n|t,n);return e}function On(n){return pi(ni|Rs,n)}function _f(n){var t=n.teardown;if(t!==null){const e=Qi,i=ie;mu(!0),Gn(null);try{t.call(null)}finally{mu(e),Gn(i)}}}function qc(n,t=!1){var e=n.first;for(n.first=n.last=null;e!==null;){const r=e.ac;r!==null&&Bo(()=>{r.abort(Fo)});var i=e.next;(e.f&$i)!==0?e.parent=null:_n(e,t),e=i}}function bp(n){for(var t=n.first;t!==null;){var e=t.next;(t.f&ni)===0&&_n(t),t=e}}function _n(n,t=!0){var e=!1;(t||(n.f&Ed)!==0)&&n.nodes!==null&&n.nodes.end!==null&&(Tp(n.nodes.start,n.nodes.end),e=!0),n.f|=Dl,qc(n,t&&!e),ea(n,0);var i=n.nodes&&n.nodes.t;if(i!==null)for(const s of i)s.stop();_f(n),n.f^=Dl,n.f|=zn;var r=n.parent;r!==null&&r.first!==null&&gf(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=n.b=null}function Tp(n,t){for(;n!==null;){var e=n===t?null:pa(n);n.remove(),n=e}}function gf(n){var t=n.parent,e=n.prev,i=n.next;e!==null&&(e.next=i),i!==null&&(i.prev=e),t!==null&&(t.first===n&&(t.first=i),t.last===n&&(t.last=e))}function Ar(n,t,e=!0){var i=[];vf(n,i,!0);var r=()=>{e&&_n(n),t&&t()},s=i.length;if(s>0){var a=()=>--s||r();for(var o of i)o.out(a)}else r()}function vf(n,t,e){if((n.f&on)===0){n.f^=on;var i=n.nodes&&n.nodes.t;if(i!==null)for(const o of i)(o.is_global||e)&&t.push(o);for(var r=n.first;r!==null;){var s=r.next;if((r.f&$i)===0){var a=(r.f&vs)!==0||(r.f&ni)!==0&&(n.f&$n)!==0;vf(r,t,a?e:!1)}r=s}}}function Eo(n){xf(n,!0)}function xf(n,t){if((n.f&on)!==0){n.f^=on,(n.f&He)===0&&(Pe(n,je),Pr.ensure().schedule(n));for(var e=n.first;e!==null;){var i=e.next,r=(e.f&vs)!==0||(e.f&ni)!==0;xf(e,r?t:!1),e=i}var s=n.nodes&&n.nodes.t;if(s!==null)for(const a of s)(a.is_global||t)&&a.in()}}function jc(n,t){if(n.nodes)for(var e=n.nodes.start,i=n.nodes.end;e!==null;){var r=e===i?null:pa(e);t.append(e),e=r}}let oo=!1,Qi=!1;function mu(n){Qi=n}let ie=null,Jn=!1;function Gn(n){ie=n}let se=null;function fi(n){se=n}let ui=null;function Mf(n){ie!==null&&(ui??(ui=new Set)).add(n)}let pn=null,bn=0,Un=null;function Ap(n){Un=n}let Sf=1,_r=0,wr=_r;function _u(n){wr=n}function yf(){return++Sf}function _a(n){var t=n.f;if((t&je)!==0)return!0;if(t&$e&&(n.f&=~Cr),(t&hi)!==0){for(var e=n.deps,i=e.length,r=0;r<i;r++){var s=e[r];if(_a(s)&&Qh(s),s.wv>n.wv)return!0}(t&kn)!==0&&Ze===null&&Pe(n,He)}return!1}function Ef(n,t,e=!0){var i=n.reactions;if(i!==null&&!(ui!==null&&ui.has(n)))for(var r=0;r<i.length;r++){var s=i[r];(s.f&$e)!==0?Ef(s,t,!1):t===s&&(e?Pe(s,je):(s.f&He)!==0&&Pe(s,hi),Vc(s))}}function bf(n){var g;var t=pn,e=bn,i=Un,r=ie,s=ui,a=Te,o=Jn,l=wr,u=n.f;pn=null,bn=0,Un=null,ie=(u&(ni|$i))===0?n:null,ui=null,xs(n.ctx),Jn=!1,wr=++_r,n.ac!==null&&(Bo(()=>{n.ac.abort(Fo)}),n.ac=null);try{n.f|=xo;var c=n.fn,f=c();n.f|=ws;var h=n.deps,p=Lt==null?void 0:Lt.is_fork;if(pn!==null){var _;if(p||ea(n,bn),h!==null&&bn>0)for(h.length=bn+pn.length,_=0;_<pn.length;_++)h[bn+_]=pn[_];else n.deps=h=pn;if(Xc()&&(n.f&kn)!==0)for(_=bn;_<h.length;_++)((g=h[_]).reactions??(g.reactions=[])).push(n)}else!p&&h!==null&&bn<h.length&&(ea(n,bn),h.length=bn);if(Cs()&&Un!==null&&!Jn&&h!==null&&(n.f&($e|hi|je))===0)for(_=0;_<Un.length;_++)Ef(Un[_],n);if(r!==null&&r!==n){if(_r++,r.deps!==null)for(let m=0;m<e;m+=1)r.deps[m].rv=_r;if(t!==null)for(const m of t)m.rv=_r;Un!==null&&(i===null?i=Un:i.push(...Un))}return(n.f&Yi)!==0&&(n.f^=Yi),f}catch(m){return jh(m)}finally{n.f^=xo,pn=t,bn=e,Un=i,ie=r,ui=s,xs(a),Jn=o,wr=l}}function wp(n,t){let e=t.reactions;if(e!==null){var i=vd.call(e,n);if(i!==-1){var r=e.length-1;r===0?e=t.reactions=null:(e[i]=e[r],e.pop())}}if(e===null&&(t.f&$e)!==0&&(pn===null||!go.call(pn,t))){var s=t;(s.f&kn)!==0&&(s.f^=kn,s.f&=~Cr),s.v!==ke&&zc(s),lp(s),ea(s,0)}}function ea(n,t){var e=n.deps;if(e!==null)for(var i=t;i<e.length;i++)wp(n,e[i])}function Ss(n){var t=n.f;if((t&zn)===0){Pe(n,He);var e=se,i=oo;se=n,oo=!0;try{(t&($n|Gh))!==0?bp(n):qc(n),_f(n);var r=bf(n);n.teardown=typeof r=="function"?r:null,n.wv=Sf;var s;Oh&&qd&&(n.f&je)!==0&&n.deps}finally{oo=i,se=e}}}async function Rp(){await Promise.resolve(),hp()}function W(n){var t=n.f,e=(t&$e)!==0;if(ie!==null&&!Jn){var i=se!==null&&(se.f&zn)!==0;if(!i&&(ui===null||!ui.has(n))){var r=ie.deps;if((ie.f&xo)!==0)n.rv<_r&&(n.rv=_r,pn===null&&r!==null&&r[bn]===n?bn++:pn===null?pn=[n]:pn.push(n));else{ie.deps??(ie.deps=[]),go.call(ie.deps,n)||ie.deps.push(n);var s=n.reactions;s===null?n.reactions=[ie]:go.call(s,ie)||s.push(ie)}}}if(Qi&&Tr.has(n))return Tr.get(n);if(e){var a=n;if(Qi){var o=a.v;return((a.f&He)===0&&a.reactions!==null||Af(a))&&(o=Hc(a)),Tr.set(a,o),o}var l=(a.f&kn)===0&&!Jn&&ie!==null&&(oo||(ie.f&kn)!==0),u=(a.f&ws)===0;_a(a)&&(l&&(a.f|=kn),Qh(a)),l&&!u&&(tf(a),Tf(a))}if(Ze!=null&&Ze.has(n))return Ze.get(n);if((n.f&Yi)!==0)throw n.v;return n.v}function Tf(n){if(n.f|=kn,n.deps!==null)for(const t of n.deps)(t.reactions??(t.reactions=[])).push(n),(t.f&$e)!==0&&(t.f&kn)===0&&(tf(t),Tf(t))}function Af(n){if(n.v===ke)return!0;if(n.deps===null)return!1;for(const t of n.deps)if(Tr.has(t)||(t.f&$e)!==0&&Af(t))return!0;return!1}function Ir(n){var t=Jn;try{return Jn=!0,n()}finally{Jn=t}}function Cp(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(qi in n)zl(n);else if(!Array.isArray(n))for(let t in n){const e=n[t];typeof e=="object"&&e&&qi in e&&zl(e)}}}function zl(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let i in n)try{zl(n[i],t)}catch{}const e=kc(n);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const i=Bh(e);for(let r in i){const s=i[r].get;if(s)try{s.call(n)}catch{}}}}}const Pp=["touchstart","touchmove"];function Dp(n){return Pp.includes(n)}const gr=Symbol("events"),wf=new Set,Hl=new Set;function Lp(n,t,e,i={}){function r(s){if(i.capture||Gl.call(t,s),!s.cancelBubble)return Bo(()=>e==null?void 0:e.call(this,s))}return ji(()=>{t.addEventListener(n,r,i)}),r}function Up(n,t,e,i,r){var s={capture:i,passive:r},a=Lp(n,t,e,s);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Yc(()=>{t.removeEventListener(n,a,s)})}function Ye(n,t,e){(t[gr]??(t[gr]={}))[n]=e}function Nr(n){for(var t=0;t<n.length;t++)wf.add(n[t]);for(var e of Hl)e(n)}let gu=null;function Gl(n){var g,m;var t=this,e=t.ownerDocument,i=n.type,r=((g=n.composedPath)==null?void 0:g.call(n))||[],s=r[0]||n.target;gu=n;var a=0,o=gu===n&&n[gr];if(o){var l=r.indexOf(o);if(l!==-1&&(t===document||t===window)){n[gr]=t;return}var u=r.indexOf(t);if(u===-1)return;l<=u&&(a=l)}if(s=r[a]||n.target,s!==t){xd(n,"currentTarget",{configurable:!0,get(){return s||e}});var c=ie,f=se;Gn(null),fi(null);try{for(var h,p=[];s!==null&&s!==t;){try{var _=(m=s[gr])==null?void 0:m[i];_!=null&&(!s.disabled||n.target===s)&&_.call(s,n)}catch(d){h?p.push(d):h=d}if(n.cancelBubble)break;a++,s=a<r.length?r[a]:null}if(h){for(let d of p)queueMicrotask(()=>{throw d});throw h}}finally{n[gr]=t,delete n.currentTarget,Gn(c),fi(f)}}}var Nh;const qo=((Nh=globalThis==null?void 0:globalThis.window)==null?void 0:Nh.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:n=>n});function Ip(n){return(qo==null?void 0:qo.createHTML(n))??n}function Np(n){var t=vp("template");return t.innerHTML=Ip(n.replaceAll("<!>","<!---->")),t.content}function bo(n,t){var e=se;e.nodes===null&&(e.nodes={start:n,end:t,a:null,t:null})}function $t(n,t){var e=(t&zd)!==0,i=(t&Hd)!==0,r,s=!n.startsWith("<!>");return()=>{r===void 0&&(r=Np(s?n:"<!>"+n),e||(r=yo(r)));var a=i||cf?document.importNode(r,!0):r.cloneNode(!0);if(e){var o=yo(a),l=a.lastChild;bo(o,l)}else bo(a,a);return a}}function vu(n=""){{var t=Ci(n+"");return bo(t,t),t}}function Rf(){var n=document.createDocumentFragment(),t=document.createComment(""),e=Ci();return n.append(t,e),bo(t,e),n}function Bt(n,t){n!==null&&n.before(t)}function Yt(n,t){var e=t==null?"":typeof t=="object"?`${t}`:t;e!==(n[Vs]??(n[Vs]=n.nodeValue))&&(n[Vs]=e,n.nodeValue=`${e}`)}function Fp(n,t){return Op(n,t)}const wa=new Map;function Op(n,{target:t,anchor:e,props:i={},events:r,context:s,intro:a=!0,transformError:o}){_p();var l=void 0,u=yp(()=>{var c=e??t.appendChild(Ci());Qd(c,{pending:()=>{}},p=>{er({});var _=Te;s&&(_.c=s),r&&(i.$$events=r),l=n(p,i)||{},nr()},o);var f=new Set,h=p=>{for(var _=0;_<p.length;_++){var g=p[_];if(!f.has(g)){f.add(g);var m=Dp(g);for(const E of[t,document]){var d=wa.get(E);d===void 0&&(d=new Map,wa.set(E,d));var A=d.get(g);A===void 0?(E.addEventListener(g,Gl,{passive:m}),d.set(g,1)):d.set(g,A+1)}}}};return h(No(wf)),Hl.add(h),()=>{var m;for(var p of f)for(const d of[t,document]){var _=wa.get(d),g=_.get(p);--g==0?(d.removeEventListener(p,Gl),_.delete(p),_.size===0&&wa.delete(d)):_.set(p,g)}Hl.delete(h),c!==e&&((m=c.parentNode)==null||m.removeChild(c))}});return Bp.set(l,u),l}let Bp=new WeakMap;var Kn,si,wn,br,ua,ha,Io;class Cf{constructor(t,e=!0){Dt(this,"anchor");Jt(this,Kn,new Map);Jt(this,si,new Map);Jt(this,wn,new Map);Jt(this,br,new Set);Jt(this,ua,!0);Jt(this,ha,t=>{if(O(this,Kn).has(t)){var e=O(this,Kn).get(t),i=O(this,si).get(e);if(i)Eo(i),O(this,br).delete(e);else{var r=O(this,wn).get(e);r&&(Eo(r.effect),O(this,si).set(e,r.effect),O(this,wn).delete(e),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),i=r.effect)}for(const[s,a]of O(this,Kn)){if(O(this,Kn).delete(s),s===t)break;const o=O(this,wn).get(a);o&&(_n(o.effect),O(this,wn).delete(a))}for(const[s,a]of O(this,si)){if(s===e||O(this,br).has(s))continue;const o=()=>{if(Array.from(O(this,Kn).values()).includes(s)){var u=document.createDocumentFragment();jc(a,u),u.append(Ci()),O(this,wn).set(s,{effect:a,fragment:u})}else _n(a);O(this,br).delete(s),O(this,si).delete(s)};O(this,ua)||!i?(O(this,br).add(s),Ar(a,o,!1)):o()}}});Jt(this,Io,t=>{O(this,Kn).delete(t);const e=Array.from(O(this,Kn).values());for(const[i,r]of O(this,wn))e.includes(i)||(_n(r.effect),O(this,wn).delete(i))});this.anchor=t,Kt(this,ua,e)}ensure(t,e){var i=Lt,r=ff();if(e&&!O(this,si).has(t)&&!O(this,wn).has(t))if(r){var s=document.createDocumentFragment(),a=Ci();s.append(a),O(this,wn).set(t,{effect:On(()=>e(a)),fragment:s})}else O(this,si).set(t,On(()=>e(this.anchor)));if(O(this,Kn).set(i,t),r){for(const[o,l]of O(this,si))o===t?i.unskip_effect(l):i.skip_effect(l);for(const[o,l]of O(this,wn))o===t?i.unskip_effect(l.effect):i.skip_effect(l.effect);i.oncommit(O(this,ha)),i.ondiscard(O(this,Io))}else O(this,ha).call(this,i)}}Kn=new WeakMap,si=new WeakMap,wn=new WeakMap,br=new WeakMap,ua=new WeakMap,ha=new WeakMap,Io=new WeakMap;function Ce(n,t,e=!1){var i=new Cf(n),r=e?vs:0;function s(a,o){i.ensure(a,o)}zo(()=>{var a=!1;t((o,l=0)=>{a=!0,s(l,o)}),a||s(-1,null)},r)}const kp=Symbol("NaN");function xu(n,t,e){var i=new Cf(n),r=!Cs();zo(()=>{var s=t();s!==s&&(s=kp),r&&s!==null&&typeof s=="object"&&(s={}),i.ensure(s,e)})}function sn(n,t){return t}function zp(n,t,e){for(var i=[],r=t.length,s,a=t.length,o=0;o<r;o++){let f=t[o];Ar(f,()=>{if(s){if(s.pending.delete(f),s.done.add(f),s.pending.size===0){var h=n.outrogroups;Vl(n,No(s.done)),h.delete(s),h.size===0&&(n.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=i.length===0&&e!==null;if(l){var u=e,c=u.parentNode;gp(c),c.append(u),n.items.clear()}Vl(n,t,!l)}else s={pending:new Set(t),done:new Set},(n.outrogroups??(n.outrogroups=new Set)).add(s)}function Vl(n,t,e=!0){var i;if(n.pending.size>0){i=new Set;for(const a of n.pending.values())for(const o of a)i.add(n.items.get(o).e)}for(var r=0;r<t.length;r++){var s=t[r];if(i!=null&&i.has(s)){s.f|=li;const a=document.createDocumentFragment();jc(s,a)}else _n(t[r],e)}}var Mu;function an(n,t,e,i,r,s=null){var a=n,o=new Map,l=(t&Wh)!==0;if(l){var u=n;a=u.appendChild(Ci())}var c=null,f=Jh(()=>{var E=e();return Bc(E)?E:E==null?[]:No(E)}),h,p=new Map,_=!0;function g(E){(A.effect.f&zn)===0&&(A.pending.delete(E),A.fallback=c,Hp(A,h,a,t,i),c!==null&&(h.length===0?(c.f&li)===0?Eo(c):(c.f^=li,qs(c,null,a)):Ar(c,()=>{c=null})))}function m(E){A.pending.delete(E)}var d=zo(()=>{h=W(f);for(var E=h.length,M=new Set,R=Lt,w=ff(),T=0;T<E;T+=1){var P=h[T],y=i(P,T),x=_?null:o.get(y);x?(x.v&&Ms(x.v,P),x.i&&Ms(x.i,T),w&&R.unskip_effect(x.e)):(x=Gp(o,_?a:Mu??(Mu=Ci()),P,y,T,r,t,e),_||(x.e.f|=li),o.set(y,x)),M.add(y)}if(E===0&&s&&!c&&(_?c=On(()=>s(a)):(c=On(()=>s(Mu??(Mu=Ci()))),c.f|=li)),E>M.size&&wd(),!_)if(p.set(R,M),w){for(const[D,j]of o)M.has(D)||R.skip_effect(j.e);R.oncommit(g),R.ondiscard(m)}else g(R);W(f)}),A={effect:d,items:o,pending:p,outrogroups:null,fallback:c};_=!1}function Ns(n){for(;n!==null&&(n.f&ni)===0;)n=n.next;return n}function Hp(n,t,e,i,r){var x,D,j,V,J,Q,X,Z,G;var s=(i&Bd)!==0,a=t.length,o=n.items,l=Ns(n.effect.first),u,c=null,f,h=[],p=[],_,g,m,d;if(s)for(d=0;d<a;d+=1)_=t[d],g=r(_,d),m=o.get(g).e,(m.f&li)===0&&((D=(x=m.nodes)==null?void 0:x.a)==null||D.measure(),(f??(f=new Set)).add(m));for(d=0;d<a;d+=1){if(_=t[d],g=r(_,d),m=o.get(g).e,n.outrogroups!==null)for(const st of n.outrogroups)st.pending.delete(m),st.done.delete(m);if((m.f&on)!==0&&(Eo(m),s&&((V=(j=m.nodes)==null?void 0:j.a)==null||V.unfix(),(f??(f=new Set)).delete(m))),(m.f&li)!==0)if(m.f^=li,m===l)qs(m,null,e);else{var A=c?c.next:l;m===n.effect.last&&(n.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),Ui(n,c,m),Ui(n,m,A),qs(m,A,e),c=m,h=[],p=[],l=Ns(c.next);continue}if(m!==l){if(u!==void 0&&u.has(m)){if(h.length<p.length){var E=p[0],M;c=E.prev;var R=h[0],w=h[h.length-1];for(M=0;M<h.length;M+=1)qs(h[M],E,e);for(M=0;M<p.length;M+=1)u.delete(p[M]);Ui(n,R.prev,w.next),Ui(n,c,R),Ui(n,w,E),l=E,c=w,d-=1,h=[],p=[]}else u.delete(m),qs(m,l,e),Ui(n,m.prev,m.next),Ui(n,m,c===null?n.effect.first:c.next),Ui(n,c,m),c=m;continue}for(h=[],p=[];l!==null&&l!==m;)(u??(u=new Set)).add(l),p.push(l),l=Ns(l.next);if(l===null)continue}(m.f&li)===0&&h.push(m),c=m,l=Ns(m.next)}if(n.outrogroups!==null){for(const st of n.outrogroups)st.pending.size===0&&(Vl(n,No(st.done)),(J=n.outrogroups)==null||J.delete(st));n.outrogroups.size===0&&(n.outrogroups=null)}if(l!==null||u!==void 0){var T=[];if(u!==void 0)for(m of u)(m.f&on)===0&&T.push(m);for(;l!==null;)(l.f&on)===0&&l!==n.fallback&&T.push(l),l=Ns(l.next);var P=T.length;if(P>0){var y=(i&Wh)!==0&&a===0?e:null;if(s){for(d=0;d<P;d+=1)(X=(Q=T[d].nodes)==null?void 0:Q.a)==null||X.measure();for(d=0;d<P;d+=1)(G=(Z=T[d].nodes)==null?void 0:Z.a)==null||G.fix()}zp(n,T,y)}}s&&ji(()=>{var st,ft;if(f!==void 0)for(m of f)(ft=(st=m.nodes)==null?void 0:st.a)==null||ft.apply()})}function Gp(n,t,e,i,r,s,a,o){var l=(a&Fd)!==0?(a&kd)===0?dp(e,!1,!1):Ji(e):null,u=(a&Od)!==0?Ji(r):null;return{v:l,i:u,e:On(()=>(s(t,l??e,u??r,o),()=>{n.delete(i)}))}}function qs(n,t,e){if(n.nodes)for(var i=n.nodes.start,r=n.nodes.end,s=t&&(t.f&li)===0?t.nodes.start:e;i!==null;){var a=pa(i);if(s.before(i),i===r)return;i=a}}function Ui(n,t,e){t===null?n.effect.first=e:t.next=e,e===null?n.effect.last=t:e.prev=t}function Vp(n,t,e){var i=n==null?"":""+n;return i===""?null:i}function Wp(n,t){return n==null?null:String(n)}function na(n,t,e,i,r,s){var a=n[Ll];if(a!==e||a===void 0){var o=Vp(e);o==null?n.removeAttribute("class"):n.className=o,n[Ll]=e}return s}function os(n,t,e,i){var r=n[Ul];if(r!==t){var s=Wp(t);s==null?n.removeAttribute("style"):n.style.cssText=s,n[Ul]=t}return i}function Kc(n,t,e=!1){if(n.multiple){if(t==null)return;if(!Bc(t))return Wd();for(var i of n.options)i.selected=t.includes(ta(i));return}for(i of n.options){var r=ta(i);if(mp(r,t)){i.selected=!0;return}}(!e||t!==void 0)&&(n.selectedIndex=-1)}function Pf(n){var t=new MutationObserver(()=>{Kc(n,n.__value)});t.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Yc(()=>{t.disconnect()})}function Xp(n,t,e=t){var i=new WeakSet,r=!0;Wc(n,"change",s=>{var a=s?"[selected]":":checked",o;if(n.multiple)o=[].map.call(n.querySelectorAll(a),ta);else{var l=n.querySelector(a)??n.querySelector("option:not([disabled])");o=l&&ta(l)}e(o),n.__value=o,Lt!==null&&i.add(Lt)}),mf(()=>{var s=t();if(n===document.activeElement){var a=Lt;if(i.has(a))return}if(Kc(n,s,r),r&&s===void 0){var o=n.querySelector(":checked");o!==null&&(s=ta(o),e(s))}n.__value=s,r=!1}),Pf(n)}function ta(n){return"__value"in n?n.__value:n.value}const Yp=Symbol("is custom element"),qp=Symbol("is html");function js(n,t,e,i){var r=jp(n);r[t]!==(r[t]=e)&&(t==="loading"&&(n[bd]=e),e==null?n.removeAttribute(t):typeof e!="string"&&Kp(n).includes(t)?n[t]=e:n.setAttribute(t,e))}function jp(n){return n[no]??(n[no]={[Yp]:n.nodeName.includes("-"),[qp]:n.namespaceURI===Gd})}var Su=new Map;function Kp(n){var t=n.getAttribute("is")||n.nodeName,e=Su.get(t);if(e)return e;Su.set(t,e=[]);for(var i,r=n,s=Element.prototype;s!==r;){i=Bh(r);for(var a in i)i[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&e.push(a);r=kc(r)}return e}function en(n,t,e=t){var i=new WeakSet;Wc(n,"input",async r=>{var s=r?n.defaultValue:n.value;if(s=jo(n)?Ko(s):s,e(s),Lt!==null&&i.add(Lt),await Rp(),s!==(s=t())){var a=n.selectionStart,o=n.selectionEnd,l=n.value.length;if(n.value=s??"",o!==null){var u=n.value.length;a===o&&o===l&&u>l?(n.selectionStart=u,n.selectionEnd=u):(n.selectionStart=a,n.selectionEnd=Math.min(o,u))}}}),Ir(t)==null&&n.value&&(e(jo(n)?Ko(n.value):n.value),Lt!==null&&i.add(Lt)),ko(()=>{var r=t();if(n===document.activeElement){var s=Lt;if(i.has(s))return}jo(n)&&r===Ko(n.value)||n.type==="date"&&!r&&!n.value||r!==n.value&&(n.value=r??"")})}function sr(n,t,e=t){Wc(n,"change",i=>{var r=i?n.defaultChecked:n.checked;e(r)}),Ir(t)==null&&e(n.checked),ko(()=>{var i=t();n.checked=!!i})}function jo(n){var t=n.type;return t==="number"||t==="range"}function Ko(n){return n===""?null:+n}function Zo(n,t){return n===t||(n==null?void 0:n[qi])===t}function Ra(n={},t,e,i){var r=Te.r,s=se;return mf(()=>{var a,o;return ko(()=>{a=o,o=[],Ir(()=>{Zo(e(...o),n)||(t(n,...o),a&&Zo(e(...a),n)&&t(null,...a))})}),()=>{let l=s;for(;l!==r&&l.parent!==null&&l.parent.f&Dl;)l=l.parent;const u=()=>{o&&Zo(e(...o),n)&&t(null,...o)},c=l.teardown;l.teardown=()=>{u(),c==null||c()}}}),n}function Zp(n=!1){const t=Te,e=t.l.u;if(!e)return;let i=()=>Cp(t.s);if(n){let r=0,s={};const a=Oo(()=>{let o=!1;const l=t.s;for(const u in l)l[u]!==s[u]&&(s[u]=l[u],o=!0);return o&&r++,r});i=()=>W(a)}e.b.length&&Sp(()=>{yu(t,i),Cl(e.b)}),Tn(()=>{const r=Ir(()=>e.m.map(yd));return()=>{for(const s of r)typeof s=="function"&&s()}}),e.a.length&&Tn(()=>{yu(t,i),Cl(e.a)})}function yu(n,t){if(n.l.s)for(const e of n.l.s)W(e);t()}function $p(n){var t=Ji(0);return function(){return arguments.length===1?(Ne(t,W(t)+1),arguments[0]):(W(t),n())}}function Jp(n){Te===null&&Td(),da&&Te.l!==null?Qp(Te).m.push(n):Tn(()=>{const t=Ir(n);if(typeof t=="function")return t})}function Qp(n){var t=n.l;return t.u??(t.u={a:[],b:[],m:[]})}const tm="5";var Fh;typeof window<"u"&&((Fh=window.__svelte??(window.__svelte={})).v??(Fh.v=new Set)).add(tm);const em={Asia:"AF AM AZ BH BD BT BN KH CN CY GE HK IN ID IR IQ IL JP JO KZ KW KG LA LB MO MY MV MN MM NP KP OM PK PS PH QA SA SG KR LK SY TW TJ TH TL TR TM AE UZ VN YE",Europe:"AL AD AT BY BE BA BG HR CZ DK EE FO FI FR DE GI GR GG HU IS IE IM IT JE XK LV LI LT LU MT MD MC ME NL MK NO PL PT RO RU SM RS SK SI ES SJ SE CH UA GB VA AX","North America":"AG AI AW BS BB BZ BM CA KY CR CU CW DM DO SV GD GL GP GT HT HN JM MQ MX MS NI PA PR BL KN LC MF PM VC TT TC US VG VI","South America":"AR BO BR CL CO EC FK GF GY PY PE SR UY VE",Africa:"DZ AO BJ BW BF BI CV CM CF TD KM CG CD CI DJ EG GQ ER SZ ET GA GM GH GN GW KE LS LR LY MG MW ML MR MU YT MA MZ NA NE NG RE RW ST SN SC SL SO ZA SS SD TZ TG TN UG EH ZM ZW",Oceania:"AS AU CK FJ PF GU KI MH FM NR NC NZ NU NF MP PW PG PN WS SB TK TO TV VU WF"},Df=new Map,Lf=["Asia","Europe","North America","South America","Africa","Oceania","Other"];for(const[n,t]of Object.entries(em)){const e=Lf.indexOf(n);for(const i of t.split(" "))Df.set(i,e)}function Uf(n){return Df.get(n)??6}const nm=Lf;async function _i(n,t){const e=await fetch(`${n}${t}`);if(!e.ok)throw new Error(`failed to load ${t}`);return e.arrayBuffer()}async function im(n){const t=await fetch(`${n}index.json`);return t.ok?t.json():[{id:"yearly",label:"yearly"}]}function rm(n,t){const e=new Uint32Array(t);for(const s of n)e[s]++;const i=Array.from({length:t},(s,a)=>a).sort((s,a)=>e[a]-e[s]),r=new Uint16Array(t);for(let s=0;s<t;s++)r[i[s]]=s;return r}async function sm(n,t){const e=`${n}${t}/`,i=await(await fetch(`${e}manifest.json`)).json(),r=await(await fetch(`${e}names.json`)).json(),[s,a,o,l,u,c,f,h,p]=await Promise.all([_i(e,"positions.bin"),_i(e,"positions_single.bin"),_i(e,"reliability.bin"),_i(e,"rho.bin"),_i(e,"speed.bin"),_i(e,"exposure.bin"),_i(e,"neighbours.bin"),_i(e,"neighbour_sims.bin").catch(()=>new ArrayBuffer(0)),_i(e,"country_index.bin")]),_=new Uint8Array(p),g=i.countries,m=new Uint8Array(_.length);for(let E=0;E<_.length;E++)m[E]=Uf(g[_[E]]);const d=new Uint16Array(f),A=h.byteLength>0?new Uint8Array(h):new Uint8Array(d.length).fill(255);return{n:i.n,windows:i.windows,stepYears:i.step_years??3,components:i.components??3,neighbourCount:i.neighbours,varianceExplained:i.variance_explained,names:r,countries:g,countryIndex:_,countryRank:rm(_,g.length),continentIndex:m,positions:new Float32Array(s),positionsSingle:new Float32Array(a),reliability:new Float32Array(o),rho:new Float32Array(l),speed:new Float32Array(u),exposure:new Float32Array(c),neighbours:d,neighbourSims:A,level:"institution"}}const am=new Intl.DisplayNames(["en"],{type:"region"});function If(n){if(n==="??")return"Unknown";try{return am.of(n)??n}catch{return n}}function om(n){const t=n.windows.length,e=n.components,i=[],r=new Map;for(let M=0;M<n.n;M++){const R=n.countryIndex[M];r.has(R)||(r.set(R,i.length),i.push(R))}const s=i.length,a=new Float32Array(s*t*e),o=new Float32Array(s*t*e),l=new Float32Array(s*t),u=new Float32Array(s*t),c=new Float32Array(s*(t-1)),f=new Float32Array(s),h=new Float32Array(s*t),p=new Float32Array(s);for(let M=0;M<n.n;M++){const R=r.get(n.countryIndex[M]);for(let T=0;T<t;T++){const P=2**n.exposure[M*t+T],y=R*t+T;h[y]+=P,l[y]+=P*n.reliability[M*t+T];for(let x=0;x<e;x++)a[y*e+x]+=P*n.positions[(M*t+T)*e+x],o[y*e+x]+=P*n.positionsSingle[(M*t+T)*e+x]}const w=2**n.exposure[M*t];f[R]+=w*n.speed[M],p[R]+=w;for(let T=0;T<t-1;T++)c[R*(t-1)+T]+=w*n.rho[M*(t-1)+T]}for(let M=0;M<s;M++){for(let w=0;w<t;w++){const T=M*t+w,P=Math.max(h[T],1e-9);l[T]/=P,u[T]=Math.log2(Math.max(P,1));for(let y=0;y<e;y++)a[T*e+y]/=P,o[T*e+y]/=P}const R=Math.max(p[M],1e-9);f[M]/=R;for(let w=0;w<t-1;w++)c[M*(t-1)+w]/=R}const _=Math.min(10,s-1),g=new Uint16Array(s*t*_),m=new Uint8Array(s*t*_);for(let M=0;M<t;M++)for(let R=0;R<s;R++){const w=[];for(let P=0;P<s;P++){if(P===R)continue;let y=0;for(let x=0;x<e;x++){const D=a[(R*t+M)*e+x]-a[(P*t+M)*e+x];y+=D*D}w.push({j:P,d:Math.sqrt(y)})}w.sort((P,y)=>P.d-y.d);const T=w[Math.min(_*3,w.length-1)].d||1;for(let P=0;P<_;P++){g[(R*t+M)*_+P]=w[P].j;const y=Math.max(0,1-w[P].d/T);m[(R*t+M)*_+P]=Math.round(127+y*128)}}const d=new Uint8Array(s),A=new Uint8Array(s),E=[];for(let M=0;M<s;M++)d[M]=i[M],A[M]=Uf(n.countries[i[M]]),E.push(If(n.countries[i[M]]));return{n:s,windows:n.windows,stepYears:n.stepYears,components:e,neighbourCount:_,varianceExplained:n.varianceExplained,names:E,countries:n.countries,countryIndex:d,countryRank:n.countryRank,continentIndex:A,positions:a,positionsSingle:o,reliability:l,rho:c,speed:f,exposure:u,neighbours:g,neighbourSims:m,level:"country"}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zc="175",ls={ROTATE:0,DOLLY:1,PAN:2},rs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lm=0,Eu=1,cm=2,Nf=1,um=2,yi=3,tr=0,gn=1,oi=2,Ki=0,Rr=1,To=2,bu=3,Tu=4,hm=5,dr=100,fm=101,dm=102,pm=103,mm=104,_m=200,gm=201,vm=202,xm=203,Wl=204,Xl=205,Mm=206,Sm=207,ym=208,Em=209,bm=210,Tm=211,Am=212,wm=213,Rm=214,Yl=0,ql=1,jl=2,ys=3,Kl=4,Zl=5,$l=6,Jl=7,Ff=0,Cm=1,Pm=2,Zi=0,Dm=1,Lm=2,Um=3,Im=4,Nm=5,Fm=6,Om=7,Of=300,Es=301,bs=302,Ql=303,tc=304,Ho=306,ec=1e3,vr=1001,nc=1002,ei=1003,Bm=1004,Ca=1005,ci=1006,$o=1007,xr=1008,Di=1009,Bf=1010,kf=1011,ia=1012,$c=1013,Dr=1014,wi=1015,ga=1016,Jc=1017,Qc=1018,ra=1020,zf=35902,Hf=1021,Gf=1022,Qn=1023,Vf=1024,Wf=1025,sa=1026,aa=1027,Xf=1028,tu=1029,Yf=1030,eu=1031,nu=1033,lo=33776,co=33777,uo=33778,ho=33779,ic=35840,rc=35841,sc=35842,ac=35843,oc=36196,lc=37492,cc=37496,uc=37808,hc=37809,fc=37810,dc=37811,pc=37812,mc=37813,_c=37814,gc=37815,vc=37816,xc=37817,Mc=37818,Sc=37819,yc=37820,Ec=37821,fo=36492,bc=36494,Tc=36495,qf=36283,Ac=36284,wc=36285,Rc=36286,km=3200,zm=3201,Hm=0,Gm=1,Hi="",Bn="srgb",Ts="srgb-linear",Ao="linear",Me="srgb",Hr=7680,Au=519,Vm=512,Wm=513,Xm=514,jf=515,Ym=516,qm=517,jm=518,Km=519,wu=35044,Ru="300 es",Ri=2e3,wo=2001;class Fr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],po=Math.PI/180,Cc=180/Math.PI;function va(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]).toLowerCase()}function re(n,t,e){return Math.max(t,Math.min(e,n))}function Zm(n,t){return(n%t+t)%t}function Jo(n,t,e){return(1-e)*n+e*t}function Fs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function un(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const $m={DEG2RAD:po};class ee{constructor(t=0,e=0){ee.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(t,e,i,r,s,a,o,l,u){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,u)}set(t,e,i,r,s,a,o,l,u){const c=this.elements;return c[0]=t,c[1]=r,c[2]=o,c[3]=e,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],_=i[8],g=r[0],m=r[3],d=r[6],A=r[1],E=r[4],M=r[7],R=r[2],w=r[5],T=r[8];return s[0]=a*g+o*A+l*R,s[3]=a*m+o*E+l*w,s[6]=a*d+o*M+l*T,s[1]=u*g+c*A+f*R,s[4]=u*m+c*E+f*w,s[7]=u*d+c*M+f*T,s[2]=h*g+p*A+_*R,s[5]=h*m+p*E+_*w,s[8]=h*d+p*M+_*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],u=t[7],c=t[8];return e*a*c-e*o*u-i*s*c+i*o*l+r*s*u-r*a*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],u=t[7],c=t[8],f=c*a-o*u,h=o*l-c*s,p=u*s-a*l,_=e*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=f*g,t[1]=(r*u-c*i)*g,t[2]=(o*i-r*a)*g,t[3]=h*g,t[4]=(c*e-r*l)*g,t[5]=(r*s-o*e)*g,t[6]=p*g,t[7]=(i*l-u*e)*g,t[8]=(a*e-i*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+t,-r*u,r*l,-r*(-u*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Qo.makeScale(t,e)),this}rotate(t){return this.premultiply(Qo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qo=new Qt;function Kf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ro(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Jm(){const n=Ro("canvas");return n.style.display="block",n}const Cu={};function mo(n){n in Cu||(Cu[n]=!0,console.warn(n))}function Qm(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function t_(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function e_(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Pu=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Du=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function n_(){const n={enabled:!0,workingColorSpace:Ts,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Me&&(r.r=Pi(r.r),r.g=Pi(r.g),r.b=Pi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Me&&(r.r=cs(r.r),r.g=cs(r.g),r.b=cs(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Hi?Ao:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ts]:{primaries:t,whitePoint:i,transfer:Ao,toXYZ:Pu,fromXYZ:Du,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Bn},outputColorSpaceConfig:{drawingBufferColorSpace:Bn}},[Bn]:{primaries:t,whitePoint:i,transfer:Me,toXYZ:Pu,fromXYZ:Du,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Bn}}}),n}const he=n_();function Pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function cs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Gr;class i_{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Gr===void 0&&(Gr=Ro("canvas")),Gr.width=t.width,Gr.height=t.height;const r=Gr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Gr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ro("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Pi(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Pi(e[i]/255)*255):e[i]=Pi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let r_=0;class iu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=va(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(tl(r[a].image)):s.push(tl(r[a]))}else s=tl(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function tl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?i_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let s_=0;class vn extends Fr{constructor(t=vn.DEFAULT_IMAGE,e=vn.DEFAULT_MAPPING,i=vr,r=vr,s=ci,a=xr,o=Qn,l=Di,u=vn.DEFAULT_ANISOTROPY,c=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=va(),this.name="",this.source=new iu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Of)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ec:t.x=t.x-Math.floor(t.x);break;case vr:t.x=t.x<0?0:1;break;case nc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ec:t.y=t.y-Math.floor(t.y);break;case vr:t.y=t.y<0?0:1;break;case nc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Of;vn.DEFAULT_ANISOTROPY=1;class De{constructor(t=0,e=0,i=0,r=1){De.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],_=l[9],g=l[2],m=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(u+1)/2,M=(p+1)/2,R=(d+1)/2,w=(c+h)/4,T=(f+g)/4,P=(_+m)/4;return E>M&&E>R?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=w/i,s=T/i):M>R?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=w/r,s=P/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=T/s,r=P/s),this.set(i,r,s,e),this}let A=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(h-c)*(h-c));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(f-g)/A,this.z=(h-c)/A,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class a_ extends Fr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new vn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new iu(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lr extends a_{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Zf extends vn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ei,this.minFilter=ei,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class o_ extends vn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ei,this.minFilter=ei,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ur{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[a+0],p=s[a+1],_=s[a+2],g=s[a+3];if(o===0){t[e+0]=l,t[e+1]=u,t[e+2]=c,t[e+3]=f;return}if(o===1){t[e+0]=h,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(f!==g||l!==h||u!==p||c!==_){let m=1-o;const d=l*h+u*p+c*_+f*g,A=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){const R=Math.sqrt(E),w=Math.atan2(R,d*A);m=Math.sin(m*w)/R,o=Math.sin(o*w)/R}const M=o*A;if(l=l*m+h*M,u=u*m+p*M,c=c*m+_*M,f=f*m+g*M,m===1-o){const R=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=R,u*=R,c*=R,f*=R}}t[e]=l,t[e+1]=u,t[e+2]=c,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[a],h=s[a+1],p=s[a+2],_=s[a+3];return t[e]=o*_+c*f+l*p-u*h,t[e+1]=l*_+c*h+u*f-o*p,t[e+2]=u*_+c*p+o*h-l*f,t[e+3]=c*_-o*f-l*h-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),f=o(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*c*f+u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f-h*p*_;break;case"YXZ":this._x=h*c*f+u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f+h*p*_;break;case"ZXY":this._x=h*c*f-u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f-h*p*_;break;case"ZYX":this._x=h*c*f-u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f+h*p*_;break;case"YZX":this._x=h*c*f+u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f-h*p*_;break;case"XZY":this._x=h*c*f-u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],u=e[2],c=e[6],f=e[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,u=e._z,c=e._w;return this._x=i*c+a*o+r*u-s*l,this._y=r*c+a*l+s*o-i*u,this._z=s*c+a*u+i*l-r*o,this._w=a*c-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,o),f=Math.sin((1-e)*c)/u,h=Math.sin(e*c)/u;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,i=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,u=2*(a*r-o*i),c=2*(o*e-s*r),f=2*(s*i-a*e);return this.x=e+l*u+a*f-o*c,this.y=i+l*c+o*u-s*f,this.z=r+l*f+s*c-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return el.copy(this).projectOnVector(t),this.sub(el)}reflect(t){return this.sub(el.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const el=new B,Lu=new Ur;class xa{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Wn):Wn.fromBufferAttribute(s,a),Wn.applyMatrix4(t.matrixWorld),this.expandByPoint(Wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pa.copy(i.boundingBox)),Pa.applyMatrix4(t.matrixWorld),this.union(Pa)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wn),Wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Os),Da.subVectors(this.max,Os),Vr.subVectors(t.a,Os),Wr.subVectors(t.b,Os),Xr.subVectors(t.c,Os),Ii.subVectors(Wr,Vr),Ni.subVectors(Xr,Wr),ar.subVectors(Vr,Xr);let e=[0,-Ii.z,Ii.y,0,-Ni.z,Ni.y,0,-ar.z,ar.y,Ii.z,0,-Ii.x,Ni.z,0,-Ni.x,ar.z,0,-ar.x,-Ii.y,Ii.x,0,-Ni.y,Ni.x,0,-ar.y,ar.x,0];return!nl(e,Vr,Wr,Xr,Da)||(e=[1,0,0,0,1,0,0,0,1],!nl(e,Vr,Wr,Xr,Da))?!1:(La.crossVectors(Ii,Ni),e=[La.x,La.y,La.z],nl(e,Vr,Wr,Xr,Da))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const gi=[new B,new B,new B,new B,new B,new B,new B,new B],Wn=new B,Pa=new xa,Vr=new B,Wr=new B,Xr=new B,Ii=new B,Ni=new B,ar=new B,Os=new B,Da=new B,La=new B,or=new B;function nl(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){or.fromArray(n,s);const o=r.x*Math.abs(or.x)+r.y*Math.abs(or.y)+r.z*Math.abs(or.z),l=t.dot(or),u=e.dot(or),c=i.dot(or);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const l_=new xa,Bs=new B,il=new B;class Ma{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):l_.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bs.subVectors(t,this.center);const e=Bs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Bs,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(il.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bs.copy(t.center).add(il)),this.expandByPoint(Bs.copy(t.center).sub(il))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vi=new B,rl=new B,Ua=new B,Fi=new B,sl=new B,Ia=new B,al=new B;class Sa{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vi.copy(this.origin).addScaledVector(this.direction,e),vi.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){rl.copy(t).add(e).multiplyScalar(.5),Ua.copy(e).sub(t).normalize(),Fi.copy(this.origin).sub(rl);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Ua),o=Fi.dot(this.direction),l=-Fi.dot(Ua),u=Fi.lengthSq(),c=Math.abs(1-a*a);let f,h,p,_;if(c>0)if(f=a*l-o,h=a*o-l,_=s*c,f>=0)if(h>=-_)if(h<=_){const g=1/c;f*=g,h*=g,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+u}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+u;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(rl).addScaledVector(Ua,h),p}intersectSphere(t,e){vi.subVectors(t.center,this.origin);const i=vi.dot(this.direction),r=vi.dot(vi)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(t.min.x-h.x)*u,r=(t.max.x-h.x)*u):(i=(t.max.x-h.x)*u,r=(t.min.x-h.x)*u),c>=0?(s=(t.min.y-h.y)*c,a=(t.max.y-h.y)*c):(s=(t.max.y-h.y)*c,a=(t.min.y-h.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,vi)!==null}intersectTriangle(t,e,i,r,s){sl.subVectors(e,t),Ia.subVectors(i,t),al.crossVectors(sl,Ia);let a=this.direction.dot(al),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fi.subVectors(this.origin,t);const l=o*this.direction.dot(Ia.crossVectors(Fi,Ia));if(l<0)return null;const u=o*this.direction.dot(sl.cross(Fi));if(u<0||l+u>a)return null;const c=-o*Fi.dot(al);return c<0?null:this.at(c/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(t,e,i,r,s,a,o,l,u,c,f,h,p,_,g,m){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,u,c,f,h,p,_,g,m)}set(t,e,i,r,s,a,o,l,u,c,f,h,p,_,g,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Yr.setFromMatrixColumn(t,0).length(),s=1/Yr.setFromMatrixColumn(t,1).length(),a=1/Yr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=a*c,p=a*f,_=o*c,g=o*f;e[0]=l*c,e[4]=-l*f,e[8]=u,e[1]=p+_*u,e[5]=h-g*u,e[9]=-o*l,e[2]=g-h*u,e[6]=_+p*u,e[10]=a*l}else if(t.order==="YXZ"){const h=l*c,p=l*f,_=u*c,g=u*f;e[0]=h+g*o,e[4]=_*o-p,e[8]=a*u,e[1]=a*f,e[5]=a*c,e[9]=-o,e[2]=p*o-_,e[6]=g+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*c,p=l*f,_=u*c,g=u*f;e[0]=h-g*o,e[4]=-a*f,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*c,e[9]=g-h*o,e[2]=-a*u,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*c,p=a*f,_=o*c,g=o*f;e[0]=l*c,e[4]=_*u-p,e[8]=h*u+g,e[1]=l*f,e[5]=g*u+h,e[9]=p*u-_,e[2]=-u,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,p=a*u,_=o*l,g=o*u;e[0]=l*c,e[4]=g-h*f,e[8]=_*f+p,e[1]=f,e[5]=a*c,e[9]=-o*c,e[2]=-u*c,e[6]=p*f+_,e[10]=h-g*f}else if(t.order==="XZY"){const h=a*l,p=a*u,_=o*l,g=o*u;e[0]=l*c,e[4]=-f,e[8]=u*c,e[1]=h*f+g,e[5]=a*c,e[9]=p*f-_,e[2]=_*f-p,e[6]=o*c,e[10]=g*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(c_,t,u_)}lookAt(t,e,i){const r=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Oi.crossVectors(i,yn),Oi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Oi.crossVectors(i,yn)),Oi.normalize(),Na.crossVectors(yn,Oi),r[0]=Oi.x,r[4]=Na.x,r[8]=yn.x,r[1]=Oi.y,r[5]=Na.y,r[9]=yn.y,r[2]=Oi.z,r[6]=Na.z,r[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],_=i[2],g=i[6],m=i[10],d=i[14],A=i[3],E=i[7],M=i[11],R=i[15],w=r[0],T=r[4],P=r[8],y=r[12],x=r[1],D=r[5],j=r[9],V=r[13],J=r[2],Q=r[6],X=r[10],Z=r[14],G=r[3],st=r[7],ft=r[11],Ct=r[15];return s[0]=a*w+o*x+l*J+u*G,s[4]=a*T+o*D+l*Q+u*st,s[8]=a*P+o*j+l*X+u*ft,s[12]=a*y+o*V+l*Z+u*Ct,s[1]=c*w+f*x+h*J+p*G,s[5]=c*T+f*D+h*Q+p*st,s[9]=c*P+f*j+h*X+p*ft,s[13]=c*y+f*V+h*Z+p*Ct,s[2]=_*w+g*x+m*J+d*G,s[6]=_*T+g*D+m*Q+d*st,s[10]=_*P+g*j+m*X+d*ft,s[14]=_*y+g*V+m*Z+d*Ct,s[3]=A*w+E*x+M*J+R*G,s[7]=A*T+E*D+M*Q+R*st,s[11]=A*P+E*j+M*X+R*ft,s[15]=A*y+E*V+M*Z+R*Ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],u=t[13],c=t[2],f=t[6],h=t[10],p=t[14],_=t[3],g=t[7],m=t[11],d=t[15];return _*(+s*l*f-r*u*f-s*o*h+i*u*h+r*o*p-i*l*p)+g*(+e*l*p-e*u*h+s*a*h-r*a*p+r*u*c-s*l*c)+m*(+e*u*f-e*o*p-s*a*f+i*a*p+s*o*c-i*u*c)+d*(-r*o*c-e*l*f+e*o*h+r*a*f-i*a*h+i*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],u=t[7],c=t[8],f=t[9],h=t[10],p=t[11],_=t[12],g=t[13],m=t[14],d=t[15],A=f*m*u-g*h*u+g*l*p-o*m*p-f*l*d+o*h*d,E=_*h*u-c*m*u-_*l*p+a*m*p+c*l*d-a*h*d,M=c*g*u-_*f*u+_*o*p-a*g*p-c*o*d+a*f*d,R=_*f*l-c*g*l-_*o*h+a*g*h+c*o*m-a*f*m,w=e*A+i*E+r*M+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return t[0]=A*T,t[1]=(g*h*s-f*m*s-g*r*p+i*m*p+f*r*d-i*h*d)*T,t[2]=(o*m*s-g*l*s+g*r*u-i*m*u-o*r*d+i*l*d)*T,t[3]=(f*l*s-o*h*s-f*r*u+i*h*u+o*r*p-i*l*p)*T,t[4]=E*T,t[5]=(c*m*s-_*h*s+_*r*p-e*m*p-c*r*d+e*h*d)*T,t[6]=(_*l*s-a*m*s-_*r*u+e*m*u+a*r*d-e*l*d)*T,t[7]=(a*h*s-c*l*s+c*r*u-e*h*u-a*r*p+e*l*p)*T,t[8]=M*T,t[9]=(_*f*s-c*g*s-_*i*p+e*g*p+c*i*d-e*f*d)*T,t[10]=(a*g*s-_*o*s+_*i*u-e*g*u-a*i*d+e*o*d)*T,t[11]=(c*o*s-a*f*s-c*i*u+e*f*u+a*i*p-e*o*p)*T,t[12]=R*T,t[13]=(c*g*r-_*f*r+_*i*h-e*g*h-c*i*m+e*f*m)*T,t[14]=(_*o*r-a*g*r-_*i*l+e*g*l+a*i*m-e*o*m)*T,t[15]=(a*f*r-c*o*r+c*i*l-e*f*l-a*i*h+e*o*h)*T,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,u=s*a,c=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*a,0,u*l-r*o,c*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,u=s+s,c=a+a,f=o+o,h=s*u,p=s*c,_=s*f,g=a*c,m=a*f,d=o*f,A=l*u,E=l*c,M=l*f,R=i.x,w=i.y,T=i.z;return r[0]=(1-(g+d))*R,r[1]=(p+M)*R,r[2]=(_-E)*R,r[3]=0,r[4]=(p-M)*w,r[5]=(1-(h+d))*w,r[6]=(m+A)*w,r[7]=0,r[8]=(_+E)*T,r[9]=(m-A)*T,r[10]=(1-(h+g))*T,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Yr.set(r[0],r[1],r[2]).length();const a=Yr.set(r[4],r[5],r[6]).length(),o=Yr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Xn.copy(this);const u=1/s,c=1/a,f=1/o;return Xn.elements[0]*=u,Xn.elements[1]*=u,Xn.elements[2]*=u,Xn.elements[4]*=c,Xn.elements[5]*=c,Xn.elements[6]*=c,Xn.elements[8]*=f,Xn.elements[9]*=f,Xn.elements[10]*=f,e.setFromRotationMatrix(Xn),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=Ri){const l=this.elements,u=2*s/(e-t),c=2*s/(i-r),f=(e+t)/(e-t),h=(i+r)/(i-r);let p,_;if(o===Ri)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===wo)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=Ri){const l=this.elements,u=1/(e-t),c=1/(i-r),f=1/(a-s),h=(e+t)*u,p=(i+r)*c;let _,g;if(o===Ri)_=(a+s)*f,g=-2*f;else if(o===wo)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Yr=new B,Xn=new Ae,c_=new B(0,0,0),u_=new B(1,1,1),Oi=new B,Na=new B,yn=new B,Uu=new Ae,Iu=new Ur;class Li{constructor(t=0,e=0,i=0,r=Li.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-re(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-re(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Uu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Iu.setFromEuler(this),this.setFromQuaternion(Iu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Li.DEFAULT_ORDER="XYZ";class ru{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let h_=0;const Nu=new B,qr=new Ur,xi=new Ae,Fa=new B,ks=new B,f_=new B,d_=new Ur,Fu=new B(1,0,0),Ou=new B(0,1,0),Bu=new B(0,0,1),ku={type:"added"},p_={type:"removed"},jr={type:"childadded",child:null},ol={type:"childremoved",child:null};class ln extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const t=new B,e=new Li,i=new Ur,r=new B(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ae},normalMatrix:{value:new Qt}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ru,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qr.setFromAxisAngle(t,e),this.quaternion.multiply(qr),this}rotateOnWorldAxis(t,e){return qr.setFromAxisAngle(t,e),this.quaternion.premultiply(qr),this}rotateX(t){return this.rotateOnAxis(Fu,t)}rotateY(t){return this.rotateOnAxis(Ou,t)}rotateZ(t){return this.rotateOnAxis(Bu,t)}translateOnAxis(t,e){return Nu.copy(t).applyQuaternion(this.quaternion),this.position.add(Nu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fu,t)}translateY(t){return this.translateOnAxis(Ou,t)}translateZ(t){return this.translateOnAxis(Bu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Fa.copy(t):Fa.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(ks,Fa,this.up):xi.lookAt(Fa,ks,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),qr.setFromRotationMatrix(xi),this.quaternion.premultiply(qr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ku),jr.child=t,this.dispatchEvent(jr),jr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(p_),ol.child=t,this.dispatchEvent(ol),ol.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ku),jr.child=t,this.dispatchEvent(jr),jr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,t,f_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,d_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),u=a(t.textures),c=a(t.images),f=a(t.shapes),h=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}ln.DEFAULT_UP=new B(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new B,Mi=new B,ll=new B,Si=new B,Kr=new B,Zr=new B,zu=new B,cl=new B,ul=new B,hl=new B,fl=new De,dl=new De,pl=new De;class Zn{constructor(t=new B,e=new B,i=new B){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Yn.subVectors(t,e),r.cross(Yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Yn.subVectors(r,e),Mi.subVectors(i,e),ll.subVectors(t,e);const a=Yn.dot(Yn),o=Yn.dot(Mi),l=Yn.dot(ll),u=Mi.dot(Mi),c=Mi.dot(ll),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(u*l-o*c)*h,_=(a*c-o*l)*h;return s.set(1-p-_,_,p)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(t,e,i,r,s,a,o,l){return this.getBarycoord(t,e,i,r,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Si.x),l.addScaledVector(a,Si.y),l.addScaledVector(o,Si.z),l)}static getInterpolatedAttribute(t,e,i,r,s,a){return fl.setScalar(0),dl.setScalar(0),pl.setScalar(0),fl.fromBufferAttribute(t,e),dl.fromBufferAttribute(t,i),pl.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(fl,s.x),a.addScaledVector(dl,s.y),a.addScaledVector(pl,s.z),a}static isFrontFacing(t,e,i,r){return Yn.subVectors(i,e),Mi.subVectors(t,e),Yn.cross(Mi).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Yn.cross(Mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Zn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Zn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Zn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Zn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Zn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;Kr.subVectors(r,i),Zr.subVectors(s,i),cl.subVectors(t,i);const l=Kr.dot(cl),u=Zr.dot(cl);if(l<=0&&u<=0)return e.copy(i);ul.subVectors(t,r);const c=Kr.dot(ul),f=Zr.dot(ul);if(c>=0&&f<=c)return e.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return a=l/(l-c),e.copy(i).addScaledVector(Kr,a);hl.subVectors(t,s);const p=Kr.dot(hl),_=Zr.dot(hl);if(_>=0&&p<=_)return e.copy(s);const g=p*u-l*_;if(g<=0&&u>=0&&_<=0)return o=u/(u-_),e.copy(i).addScaledVector(Zr,o);const m=c*_-p*f;if(m<=0&&f-c>=0&&p-_>=0)return zu.subVectors(s,r),o=(f-c)/(f-c+(p-_)),e.copy(r).addScaledVector(zu,o);const d=1/(m+g+h);return a=g*d,o=h*d,e.copy(i).addScaledVector(Kr,a).addScaledVector(Zr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Oa={h:0,s:0,l:0};function ml(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class fe{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Bn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=he.workingColorSpace){return this.r=t,this.g=e,this.b=i,he.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=he.workingColorSpace){if(t=Zm(t,1),e=re(e,0,1),i=re(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=ml(a,s,t+1/3),this.g=ml(a,s,t),this.b=ml(a,s,t-1/3)}return he.toWorkingColorSpace(this,r),this}setStyle(t,e=Bn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Bn){const i=$f[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}copyLinearToSRGB(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Bn){return he.fromWorkingColorSpace(Qe.copy(this),t),Math.round(re(Qe.r*255,0,255))*65536+Math.round(re(Qe.g*255,0,255))*256+Math.round(re(Qe.b*255,0,255))}getHexString(t=Bn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(Qe.copy(this),e);const i=Qe.r,r=Qe.g,s=Qe.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const f=a-o;switch(u=c<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return t.h=l,t.s=u,t.l=c,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=Bn){he.fromWorkingColorSpace(Qe.copy(this),t);const e=Qe.r,i=Qe.g,r=Qe.b;return t!==Bn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Bi),this.setHSL(Bi.h+t,Bi.s+e,Bi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Bi),t.getHSL(Oa);const i=Jo(Bi.h,Oa.h,e),r=Jo(Bi.s,Oa.s,e),s=Jo(Bi.l,Oa.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qe=new fe;fe.NAMES=$f;let m_=0;class Ps extends Fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=va(),this.name="",this.type="Material",this.blending=Rr,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wl,this.blendDst=Xl,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(i.blending=this.blending),this.side!==tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wl&&(i.blendSrc=this.blendSrc),this.blendDst!==Xl&&(i.blendDst=this.blendDst),this.blendEquation!==dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Au&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Co extends Ps{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=Ff,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ie=new B,Ba=new ee;let __=0;class ze{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:__++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=wu,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ba.fromBufferAttribute(this,e),Ba.applyMatrix3(t),this.setXY(e,Ba.x,Ba.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Fs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=un(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fs(e,this.array)),e}setX(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fs(e,this.array)),e}setY(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fs(e,this.array)),e}setW(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),i=un(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),i=un(i,this.array),r=un(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),i=un(i,this.array),r=un(r,this.array),s=un(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wu&&(t.usage=this.usage),t}}class Jf extends ze{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Qf extends ze{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Hn extends ze{constructor(t,e,i){super(new Float32Array(t),e,i)}}let g_=0;const Ln=new Ae,_l=new ln,$r=new B,En=new xa,zs=new xa,Xe=new B;class mn extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=va(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kf(t)?Qf:Jf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Qt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ln.makeRotationFromQuaternion(t),this.applyMatrix4(Ln),this}rotateX(t){return Ln.makeRotationX(t),this.applyMatrix4(Ln),this}rotateY(t){return Ln.makeRotationY(t),this.applyMatrix4(Ln),this}rotateZ(t){return Ln.makeRotationZ(t),this.applyMatrix4(Ln),this}translate(t,e,i){return Ln.makeTranslation(t,e,i),this.applyMatrix4(Ln),this}scale(t,e,i){return Ln.makeScale(t,e,i),this.applyMatrix4(Ln),this}lookAt(t){return _l.lookAt(t),_l.updateMatrix(),this.applyMatrix4(_l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Hn(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ma);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];zs.setFromBufferAttribute(o),this.morphTargetsRelative?(Xe.addVectors(En.min,zs.min),En.expandByPoint(Xe),Xe.addVectors(En.max,zs.max),En.expandByPoint(Xe)):(En.expandByPoint(zs.min),En.expandByPoint(zs.max))}En.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)Xe.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Xe));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)Xe.fromBufferAttribute(o,u),l&&($r.fromBufferAttribute(t,u),Xe.add($r)),r=Math.max(r,i.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new B,l[P]=new B;const u=new B,c=new B,f=new B,h=new ee,p=new ee,_=new ee,g=new B,m=new B;function d(P,y,x){u.fromBufferAttribute(i,P),c.fromBufferAttribute(i,y),f.fromBufferAttribute(i,x),h.fromBufferAttribute(s,P),p.fromBufferAttribute(s,y),_.fromBufferAttribute(s,x),c.sub(u),f.sub(u),p.sub(h),_.sub(h);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(g.copy(c).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(D),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(D),o[P].add(g),o[y].add(g),o[x].add(g),l[P].add(m),l[y].add(m),l[x].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let P=0,y=A.length;P<y;++P){const x=A[P],D=x.start,j=x.count;for(let V=D,J=D+j;V<J;V+=3)d(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const E=new B,M=new B,R=new B,w=new B;function T(P){R.fromBufferAttribute(r,P),w.copy(R);const y=o[P];E.copy(y),E.sub(R.multiplyScalar(R.dot(y))).normalize(),M.crossVectors(w,y);const D=M.dot(l[P])<0?-1:1;a.setXYZW(P,E.x,E.y,E.z,D)}for(let P=0,y=A.length;P<y;++P){const x=A[P],D=x.start,j=x.count;for(let V=D,J=D+j;V<J;V+=3)T(t.getX(V+0)),T(t.getX(V+1)),T(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new B,s=new B,a=new B,o=new B,l=new B,u=new B,c=new B,f=new B;if(t)for(let h=0,p=t.count;h<p;h+=3){const _=t.getX(h+0),g=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,m),o.add(c),l.add(c),u.add(c),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=e.count;h<p;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(o,l){const u=o.array,c=o.itemSize,f=o.normalized,h=new u.constructor(l.length*c);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*c;for(let d=0;d<c;d++)h[_++]=u[p++]}return new ze(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new mn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=t(l,i);e.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=t(h,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const u=i[l];t.data.attributes[l]=u.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(t.data))}c.length>0&&(r[l]=c,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(e))}const s=t.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(e));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,c=a.length;u<c;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hu=new Ae,lr=new Sa,ka=new Ma,Gu=new B,za=new B,Ha=new B,Ga=new B,gl=new B,Va=new B,Vu=new B,Wa=new B;class ti extends ln{constructor(t=new mn,e=new Co){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Va.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=o[l],f=s[l];c!==0&&(gl.fromBufferAttribute(f,t),a?Va.addScaledVector(gl,c):Va.addScaledVector(gl.sub(e),c))}e.add(Va)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(s),lr.copy(t.ray).recast(t.near),!(ka.containsPoint(lr.origin)===!1&&(lr.intersectSphere(ka,Gu)===null||lr.origin.distanceToSquared(Gu)>(t.far-t.near)**2))&&(Hu.copy(s).invert(),lr.copy(t.ray).applyMatrix4(Hu),!(i.boundingBox!==null&&lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,lr)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const m=h[_],d=a[m.materialIndex],A=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=A,R=E;M<R;M+=3){const w=o.getX(M),T=o.getX(M+1),P=o.getX(M+2);r=Xa(this,d,t,i,u,c,f,w,T,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){const A=o.getX(m),E=o.getX(m+1),M=o.getX(m+2);r=Xa(this,a,t,i,u,c,f,A,E,M),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const m=h[_],d=a[m.materialIndex],A=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=A,R=E;M<R;M+=3){const w=M,T=M+1,P=M+2;r=Xa(this,d,t,i,u,c,f,w,T,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){const A=m,E=m+1,M=m+2;r=Xa(this,a,t,i,u,c,f,A,E,M),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function v_(n,t,e,i,r,s,a,o){let l;if(t.side===gn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===tr,o),l===null)return null;Wa.copy(o),Wa.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(Wa);return u<e.near||u>e.far?null:{distance:u,point:Wa.clone(),object:n}}function Xa(n,t,e,i,r,s,a,o,l,u){n.getVertexPosition(o,za),n.getVertexPosition(l,Ha),n.getVertexPosition(u,Ga);const c=v_(n,t,e,i,za,Ha,Ga,Vu);if(c){const f=new B;Zn.getBarycoord(Vu,za,Ha,Ga,f),r&&(c.uv=Zn.getInterpolatedAttribute(r,o,l,u,f,new ee)),s&&(c.uv1=Zn.getInterpolatedAttribute(s,o,l,u,f,new ee)),a&&(c.normal=Zn.getInterpolatedAttribute(a,o,l,u,f,new B),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a:o,b:l,c:u,normal:new B,materialIndex:0};Zn.getNormal(za,Ha,Ga,h.normal),c.face=h,c.barycoord=f}return c}class ya extends mn{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,e,t,a,s,0),_("z","y","x",1,-1,i,e,-t,a,s,1),_("x","z","y",1,1,t,i,e,r,a,2),_("x","z","y",1,-1,t,i,-e,r,a,3),_("x","y","z",1,-1,t,e,i,r,s,4),_("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Hn(u,3)),this.setAttribute("normal",new Hn(c,3)),this.setAttribute("uv",new Hn(f,2));function _(g,m,d,A,E,M,R,w,T,P,y){const x=M/T,D=R/P,j=M/2,V=R/2,J=w/2,Q=T+1,X=P+1;let Z=0,G=0;const st=new B;for(let ft=0;ft<X;ft++){const Ct=ft*D-V;for(let Vt=0;Vt<Q;Vt++){const $=Vt*x-j;st[g]=$*A,st[m]=Ct*E,st[d]=J,u.push(st.x,st.y,st.z),st[g]=0,st[m]=0,st[d]=w>0?1:-1,c.push(st.x,st.y,st.z),f.push(Vt/T),f.push(1-ft/P),Z+=1}}for(let ft=0;ft<P;ft++)for(let Ct=0;Ct<T;Ct++){const Vt=h+Ct+Q*ft,$=h+Ct+Q*(ft+1),k=h+(Ct+1)+Q*(ft+1),Y=h+(Ct+1)+Q*ft;l.push(Vt,$,Y),l.push($,k,Y),G+=6}o.addGroup(p,G,y),p+=G,h+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ya(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function As(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function nn(n){const t={};for(let e=0;e<n.length;e++){const i=As(n[e]);for(const r in i)t[r]=i[r]}return t}function x_(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function td(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const M_={clone:As,merge:nn};var S_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,y_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends Ps{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=S_,this.fragmentShader=y_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=As(t.uniforms),this.uniformsGroups=x_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class ed extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=Ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ki=new B,Wu=new ee,Xu=new ee;class Rn extends ed{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Cc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cc*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ki.x,ki.y).multiplyScalar(-t/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-t/ki.z)}getViewSize(t,e){return this.getViewBounds(t,Wu,Xu),e.subVectors(Xu,Wu)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(po*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Jr=-90,Qr=1;class E_ extends ln{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rn(Jr,Qr,t,e);r.layers=this.layers,this.add(r);const s=new Rn(Jr,Qr,t,e);s.layers=this.layers,this.add(s);const a=new Rn(Jr,Qr,t,e);a.layers=this.layers,this.add(a);const o=new Rn(Jr,Qr,t,e);o.layers=this.layers,this.add(o);const l=new Rn(Jr,Qr,t,e);l.layers=this.layers,this.add(l);const u=new Rn(Jr,Qr,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,l]=e;for(const u of e)this.remove(u);if(t===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===wo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,c]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,u),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,r),t.render(e,c),t.setRenderTarget(f,h,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class nd extends vn{constructor(t=[],e=Es,i,r,s,a,o,l,u,c){super(t,e,i,r,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class b_ extends Lr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new nd(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ci}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ya(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:As(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:Ki});s.uniforms.tEquirect.value=e;const a=new ti(r,s),o=e.minFilter;return e.minFilter===xr&&(e.minFilter=ci),new E_(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}class Ya extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const T_={type:"move"};class vl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ya,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ya,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ya,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,i),d=this._getHandJoint(u,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&h>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&h<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(T_)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ya;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Yu extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const xl=new B,A_=new B,w_=new Qt;class zi{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=xl.subVectors(i,e).cross(A_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(xl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||w_.getNormalMatrix(t),r=this.coplanarPoint(xl).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cr=new Ma,qa=new B;class id{constructor(t=new zi,e=new zi,i=new zi,r=new zi,s=new zi,a=new zi){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ri){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],p=r[8],_=r[9],g=r[10],m=r[11],d=r[12],A=r[13],E=r[14],M=r[15];if(i[0].setComponents(l-s,h-u,m-p,M-d).normalize(),i[1].setComponents(l+s,h+u,m+p,M+d).normalize(),i[2].setComponents(l+a,h+c,m+_,M+A).normalize(),i[3].setComponents(l-a,h-c,m-_,M-A).normalize(),i[4].setComponents(l-o,h-f,m-g,M-E).normalize(),e===Ri)i[5].setComponents(l+o,h+f,m+g,M+E).normalize();else if(e===wo)i[5].setComponents(o,f,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(t){return cr.center.set(0,0,0),cr.radius=.7071067811865476,cr.applyMatrix4(t.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(qa.x=r.normal.x>0?t.max.x:t.min.x,qa.y=r.normal.y>0?t.max.y:t.min.y,qa.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(qa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pc extends Ps{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Po=new B,Do=new B,qu=new Ae,Hs=new Sa,ja=new Ma,Ml=new B,ju=new B;class rd extends ln{constructor(t=new mn,e=new Pc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Po.fromBufferAttribute(e,r-1),Do.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Po.distanceTo(Do);t.setAttribute("lineDistance",new Hn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ja.copy(i.boundingSphere),ja.applyMatrix4(r),ja.radius+=s,t.ray.intersectsSphere(ja)===!1)return;qu.copy(r).invert(),Hs.copy(t.ray).applyMatrix4(qu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=this.isLineSegments?2:1,c=i.index,h=i.attributes.position;if(c!==null){const p=Math.max(0,a.start),_=Math.min(c.count,a.start+a.count);for(let g=p,m=_-1;g<m;g+=u){const d=c.getX(g),A=c.getX(g+1),E=Ka(this,t,Hs,l,d,A,g);E&&e.push(E)}if(this.isLineLoop){const g=c.getX(_-1),m=c.getX(p),d=Ka(this,t,Hs,l,g,m,_-1);d&&e.push(d)}}else{const p=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=p,m=_-1;g<m;g+=u){const d=Ka(this,t,Hs,l,g,g+1,g);d&&e.push(d)}if(this.isLineLoop){const g=Ka(this,t,Hs,l,_-1,p,_-1);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ka(n,t,e,i,r,s,a){const o=n.geometry.attributes.position;if(Po.fromBufferAttribute(o,r),Do.fromBufferAttribute(o,s),e.distanceSqToSegment(Po,Do,Ml,ju)>i)return;Ml.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Ml);if(!(u<t.near||u>t.far))return{distance:u,point:ju.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Ku=new B,Zu=new B;class $u extends rd{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)Ku.fromBufferAttribute(e,r),Zu.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ku.distanceTo(Zu);t.setAttribute("lineDistance",new Hn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class R_ extends Ps{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ju=new Ae,Dc=new Sa,Za=new Ma,$a=new B;class Qu extends ln{constructor(t=new mn,e=new R_){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Za.copy(i.boundingSphere),Za.applyMatrix4(r),Za.radius+=s,t.ray.intersectsSphere(Za)===!1)return;Ju.copy(r).invert(),Dc.copy(t.ray).applyMatrix4(Ju);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=h,g=p;_<g;_++){const m=u.getX(_);$a.fromBufferAttribute(f,m),th($a,m,l,r,t,e,this)}}else{const h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=h,g=p;_<g;_++)$a.fromBufferAttribute(f,_),th($a,_,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function th(n,t,e,i,r,s,a){const o=Dc.distanceSqToPoint(n);if(o<e){const l=new B;Dc.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class sd extends vn{constructor(t,e,i=Dr,r,s,a,o=ei,l=ei,u,c=sa){if(c!==sa&&c!==aa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,a,o,l,c,i,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new iu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ea extends mn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,f=t/o,h=e/l,p=[],_=[],g=[],m=[];for(let d=0;d<c;d++){const A=d*h-a;for(let E=0;E<u;E++){const M=E*f-s;_.push(M,-A,0),g.push(0,0,1),m.push(E/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<o;A++){const E=A+u*d,M=A+u*(d+1),R=A+1+u*(d+1),w=A+1+u*d;p.push(E,M,w),p.push(M,R,w)}this.setIndex(p),this.setAttribute("position",new Hn(_,3)),this.setAttribute("normal",new Hn(g,3)),this.setAttribute("uv",new Hn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ea(t.width,t.height,t.widthSegments,t.heightSegments)}}class su extends mn{constructor(t=.5,e=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],u=[],c=[];let f=t;const h=(e-t)/r,p=new B,_=new ee;for(let g=0;g<=r;g++){for(let m=0;m<=i;m++){const d=s+m/i*a;p.x=f*Math.cos(d),p.y=f*Math.sin(d),l.push(p.x,p.y,p.z),u.push(0,0,1),_.x=(p.x/e+1)/2,_.y=(p.y/e+1)/2,c.push(_.x,_.y)}f+=h}for(let g=0;g<r;g++){const m=g*(i+1);for(let d=0;d<i;d++){const A=d+m,E=A,M=A+i+1,R=A+i+2,w=A+1;o.push(E,M,w),o.push(M,R,w)}}this.setIndex(o),this.setAttribute("position",new Hn(l,3)),this.setAttribute("normal",new Hn(u,3)),this.setAttribute("uv",new Hn(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new su(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class C_ extends Ps{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=km,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class P_ extends Ps{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Lc extends ed{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class D_ extends Rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}const eh=new Ae;class L_{constructor(t,e,i=0,r=1/0){this.ray=new Sa(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new ru,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return eh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(eh),this}intersectObject(t,e=!0,i=[]){return Uc(t,this,i,e),i.sort(nh),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)Uc(t[r],this,i,e);return i.sort(nh),i}}function nh(n,t){return n.distance-t.distance}function Uc(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)Uc(s[a],t,e,!0)}}class ih{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=re(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(re(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}let U_=class extends Fr{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function rh(n,t,e,i){const r=I_(i);switch(e){case Hf:return n*t;case Vf:return n*t;case Wf:return n*t*2;case Xf:return n*t/r.components*r.byteLength;case tu:return n*t/r.components*r.byteLength;case Yf:return n*t*2/r.components*r.byteLength;case eu:return n*t*2/r.components*r.byteLength;case Gf:return n*t*3/r.components*r.byteLength;case Qn:return n*t*4/r.components*r.byteLength;case nu:return n*t*4/r.components*r.byteLength;case lo:case co:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case uo:case ho:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case rc:case ac:return Math.max(n,16)*Math.max(t,8)/4;case ic:case sc:return Math.max(n,8)*Math.max(t,8)/2;case oc:case lc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case cc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case uc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case hc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case fc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case dc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case pc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case mc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case _c:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case gc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case vc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case xc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Sc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case yc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ec:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case fo:case bc:case Tc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case qf:case Ac:return Math.ceil(n/4)*Math.ceil(t/4)*8;case wc:case Rc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function I_(n){switch(n){case Di:case Bf:return{byteLength:1,components:1};case ia:case kf:case ga:return{byteLength:2,components:1};case Jc:case Qc:return{byteLength:2,components:4};case Dr:case $c:case wi:return{byteLength:4,components:1};case zf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ad(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function N_(n){const t=new WeakMap;function e(o,l){const u=o.array,c=o.usage,f=u.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,c),o.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,o),f.length===0)n.bufferSubData(u,0,c);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],g=f[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,f[h]=g)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const g=f[p];n.bufferSubData(u,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=t.get(o);if(u===void 0)t.set(o,e(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var F_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,O_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,B_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,k_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,H_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,G_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,V_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,W_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,X_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Y_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,q_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,j_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,K_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Z_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,J_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Q_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ng=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ig=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,sg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ag=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,og=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ug=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fg="gl_FragColor = linearToOutputTexel( gl_FragColor );",dg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,mg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_g=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Eg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ag=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Rg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Cg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ug=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ig=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ng=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Og=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$g=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Jg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,av=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ov=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_v=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,vv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Mv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ev=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Tv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Av=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Pv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Iv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Vv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Wv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$v=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,t0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,n0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,i0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,a0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,u0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,d0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,p0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:F_,alphahash_pars_fragment:O_,alphamap_fragment:B_,alphamap_pars_fragment:k_,alphatest_fragment:z_,alphatest_pars_fragment:H_,aomap_fragment:G_,aomap_pars_fragment:V_,batching_pars_vertex:W_,batching_vertex:X_,begin_vertex:Y_,beginnormal_vertex:q_,bsdfs:j_,iridescence_fragment:K_,bumpmap_pars_fragment:Z_,clipping_planes_fragment:$_,clipping_planes_pars_fragment:J_,clipping_planes_pars_vertex:Q_,clipping_planes_vertex:tg,color_fragment:eg,color_pars_fragment:ng,color_pars_vertex:ig,color_vertex:rg,common:sg,cube_uv_reflection_fragment:ag,defaultnormal_vertex:og,displacementmap_pars_vertex:lg,displacementmap_vertex:cg,emissivemap_fragment:ug,emissivemap_pars_fragment:hg,colorspace_fragment:fg,colorspace_pars_fragment:dg,envmap_fragment:pg,envmap_common_pars_fragment:mg,envmap_pars_fragment:_g,envmap_pars_vertex:gg,envmap_physical_pars_fragment:Rg,envmap_vertex:vg,fog_vertex:xg,fog_pars_vertex:Mg,fog_fragment:Sg,fog_pars_fragment:yg,gradientmap_pars_fragment:Eg,lightmap_pars_fragment:bg,lights_lambert_fragment:Tg,lights_lambert_pars_fragment:Ag,lights_pars_begin:wg,lights_toon_fragment:Cg,lights_toon_pars_fragment:Pg,lights_phong_fragment:Dg,lights_phong_pars_fragment:Lg,lights_physical_fragment:Ug,lights_physical_pars_fragment:Ig,lights_fragment_begin:Ng,lights_fragment_maps:Fg,lights_fragment_end:Og,logdepthbuf_fragment:Bg,logdepthbuf_pars_fragment:kg,logdepthbuf_pars_vertex:zg,logdepthbuf_vertex:Hg,map_fragment:Gg,map_pars_fragment:Vg,map_particle_fragment:Wg,map_particle_pars_fragment:Xg,metalnessmap_fragment:Yg,metalnessmap_pars_fragment:qg,morphinstance_vertex:jg,morphcolor_vertex:Kg,morphnormal_vertex:Zg,morphtarget_pars_vertex:$g,morphtarget_vertex:Jg,normal_fragment_begin:Qg,normal_fragment_maps:tv,normal_pars_fragment:ev,normal_pars_vertex:nv,normal_vertex:iv,normalmap_pars_fragment:rv,clearcoat_normal_fragment_begin:sv,clearcoat_normal_fragment_maps:av,clearcoat_pars_fragment:ov,iridescence_pars_fragment:lv,opaque_fragment:cv,packing:uv,premultiplied_alpha_fragment:hv,project_vertex:fv,dithering_fragment:dv,dithering_pars_fragment:pv,roughnessmap_fragment:mv,roughnessmap_pars_fragment:_v,shadowmap_pars_fragment:gv,shadowmap_pars_vertex:vv,shadowmap_vertex:xv,shadowmask_pars_fragment:Mv,skinbase_vertex:Sv,skinning_pars_vertex:yv,skinning_vertex:Ev,skinnormal_vertex:bv,specularmap_fragment:Tv,specularmap_pars_fragment:Av,tonemapping_fragment:wv,tonemapping_pars_fragment:Rv,transmission_fragment:Cv,transmission_pars_fragment:Pv,uv_pars_fragment:Dv,uv_pars_vertex:Lv,uv_vertex:Uv,worldpos_vertex:Iv,background_vert:Nv,background_frag:Fv,backgroundCube_vert:Ov,backgroundCube_frag:Bv,cube_vert:kv,cube_frag:zv,depth_vert:Hv,depth_frag:Gv,distanceRGBA_vert:Vv,distanceRGBA_frag:Wv,equirect_vert:Xv,equirect_frag:Yv,linedashed_vert:qv,linedashed_frag:jv,meshbasic_vert:Kv,meshbasic_frag:Zv,meshlambert_vert:$v,meshlambert_frag:Jv,meshmatcap_vert:Qv,meshmatcap_frag:t0,meshnormal_vert:e0,meshnormal_frag:n0,meshphong_vert:i0,meshphong_frag:r0,meshphysical_vert:s0,meshphysical_frag:a0,meshtoon_vert:o0,meshtoon_frag:l0,points_vert:c0,points_frag:u0,shadow_vert:h0,shadow_frag:f0,sprite_vert:d0,sprite_frag:p0},mt={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},ai={basic:{uniforms:nn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:nn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new fe(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:nn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:nn([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:nn([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new fe(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:nn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:nn([mt.points,mt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:nn([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:nn([mt.common,mt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:nn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:nn([mt.sprite,mt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:nn([mt.common,mt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:nn([mt.lights,mt.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};ai.physical={uniforms:nn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const Ja={r:0,b:0,g:0},ur=new Li,m0=new Ae;function _0(n,t,e,i,r,s,a){const o=new fe(0);let l=s===!0?0:1,u,c,f=null,h=0,p=null;function _(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?e:t).get(M)),M}function g(E){let M=!1;const R=_(E);R===null?d(o,l):R&&R.isColor&&(d(R,1),M=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,M){const R=_(M);R&&(R.isCubeTexture||R.mapping===Ho)?(c===void 0&&(c=new ti(new ya(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:As(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),ur.copy(M.backgroundRotation),ur.x*=-1,ur.y*=-1,ur.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),c.material.uniforms.envMap.value=R,c.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(m0.makeRotationFromEuler(ur)),c.material.toneMapped=he.getTransfer(R.colorSpace)!==Me,(f!==R||h!==R.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=R,h=R.version,p=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):R&&R.isTexture&&(u===void 0&&(u=new ti(new Ea(2,2),new di({name:"BackgroundMaterial",uniforms:As(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=R,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.toneMapped=he.getTransfer(R.colorSpace)!==Me,R.matrixAutoUpdate===!0&&R.updateMatrix(),u.material.uniforms.uvTransform.value.copy(R.matrix),(f!==R||h!==R.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=R,h=R.version,p=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null))}function d(E,M){E.getRGB(Ja,td(n)),i.buffers.color.setClear(Ja.r,Ja.g,Ja.b,M,a)}function A(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,M=1){o.set(E),l=M,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(o,l)},render:g,addToRenderList:m,dispose:A}}function g0(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(x,D,j,V,J){let Q=!1;const X=f(V,j,D);s!==X&&(s=X,u(s.object)),Q=p(x,V,j,J),Q&&_(x,V,j,J),J!==null&&t.update(J,n.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,M(x,D,j,V),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return n.createVertexArray()}function u(x){return n.bindVertexArray(x)}function c(x){return n.deleteVertexArray(x)}function f(x,D,j){const V=j.wireframe===!0;let J=i[x.id];J===void 0&&(J={},i[x.id]=J);let Q=J[D.id];Q===void 0&&(Q={},J[D.id]=Q);let X=Q[V];return X===void 0&&(X=h(l()),Q[V]=X),X}function h(x){const D=[],j=[],V=[];for(let J=0;J<e;J++)D[J]=0,j[J]=0,V[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:j,attributeDivisors:V,object:x,attributes:{},index:null}}function p(x,D,j,V){const J=s.attributes,Q=D.attributes;let X=0;const Z=j.getAttributes();for(const G in Z)if(Z[G].location>=0){const ft=J[G];let Ct=Q[G];if(Ct===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(Ct=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(Ct=x.instanceColor)),ft===void 0||ft.attribute!==Ct||Ct&&ft.data!==Ct.data)return!0;X++}return s.attributesNum!==X||s.index!==V}function _(x,D,j,V){const J={},Q=D.attributes;let X=0;const Z=j.getAttributes();for(const G in Z)if(Z[G].location>=0){let ft=Q[G];ft===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(ft=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(ft=x.instanceColor));const Ct={};Ct.attribute=ft,ft&&ft.data&&(Ct.data=ft.data),J[G]=Ct,X++}s.attributes=J,s.attributesNum=X,s.index=V}function g(){const x=s.newAttributes;for(let D=0,j=x.length;D<j;D++)x[D]=0}function m(x){d(x,0)}function d(x,D){const j=s.newAttributes,V=s.enabledAttributes,J=s.attributeDivisors;j[x]=1,V[x]===0&&(n.enableVertexAttribArray(x),V[x]=1),J[x]!==D&&(n.vertexAttribDivisor(x,D),J[x]=D)}function A(){const x=s.newAttributes,D=s.enabledAttributes;for(let j=0,V=D.length;j<V;j++)D[j]!==x[j]&&(n.disableVertexAttribArray(j),D[j]=0)}function E(x,D,j,V,J,Q,X){X===!0?n.vertexAttribIPointer(x,D,j,J,Q):n.vertexAttribPointer(x,D,j,V,J,Q)}function M(x,D,j,V){g();const J=V.attributes,Q=j.getAttributes(),X=D.defaultAttributeValues;for(const Z in Q){const G=Q[Z];if(G.location>=0){let st=J[Z];if(st===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(st=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(st=x.instanceColor)),st!==void 0){const ft=st.normalized,Ct=st.itemSize,Vt=t.get(st);if(Vt===void 0)continue;const $=Vt.buffer,k=Vt.type,Y=Vt.bytesPerElement,lt=k===n.INT||k===n.UNSIGNED_INT||st.gpuType===$c;if(st.isInterleavedBufferAttribute){const rt=st.data,pt=rt.stride,Pt=st.offset;if(rt.isInstancedInterleavedBuffer){for(let ht=0;ht<G.locationSize;ht++)d(G.location+ht,rt.meshPerAttribute);x.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ht=0;ht<G.locationSize;ht++)m(G.location+ht);n.bindBuffer(n.ARRAY_BUFFER,$);for(let ht=0;ht<G.locationSize;ht++)E(G.location+ht,Ct/G.locationSize,k,ft,pt*Y,(Pt+Ct/G.locationSize*ht)*Y,lt)}else{if(st.isInstancedBufferAttribute){for(let rt=0;rt<G.locationSize;rt++)d(G.location+rt,st.meshPerAttribute);x.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<G.locationSize;rt++)m(G.location+rt);n.bindBuffer(n.ARRAY_BUFFER,$);for(let rt=0;rt<G.locationSize;rt++)E(G.location+rt,Ct/G.locationSize,k,ft,Ct*Y,Ct/G.locationSize*rt*Y,lt)}}else if(X!==void 0){const ft=X[Z];if(ft!==void 0)switch(ft.length){case 2:n.vertexAttrib2fv(G.location,ft);break;case 3:n.vertexAttrib3fv(G.location,ft);break;case 4:n.vertexAttrib4fv(G.location,ft);break;default:n.vertexAttrib1fv(G.location,ft)}}}}A()}function R(){P();for(const x in i){const D=i[x];for(const j in D){const V=D[j];for(const J in V)c(V[J].object),delete V[J];delete D[j]}delete i[x]}}function w(x){if(i[x.id]===void 0)return;const D=i[x.id];for(const j in D){const V=D[j];for(const J in V)c(V[J].object),delete V[J];delete D[j]}delete i[x.id]}function T(x){for(const D in i){const j=i[D];if(j[x.id]===void 0)continue;const V=j[x.id];for(const J in V)c(V[J].object),delete V[J];delete j[x.id]}}function P(){y(),a=!0,s!==r&&(s=r,u(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:y,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:A}}function v0(n,t,e){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),e.update(c,i,1)}function a(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),e.update(c,i,f))}function o(u,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let p=0;for(let _=0;_<f;_++)p+=c[_];e.update(p,i,1)}function l(u,c,f,h){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)a(u[_],c[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let _=0;for(let g=0;g<f;g++)_+=c[g]*h[g];e.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function x0(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==Qn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const P=T===ga&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Di&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==wi&&!P)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:R,maxSamples:w}}function M0(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new zi,o=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=c(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const A=s?0:i,E=A*4;let M=d.clippingState||null;l.value=M,M=c(_,h,E,p);for(let R=0;R!==E;++R)M[R]=e[R];d.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=A}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(f,h,p,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const d=p+g*4,A=h.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,M=p;E!==g;++E,M+=4)a.copy(f[E]).applyMatrix4(A,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function S0(n){let t=new WeakMap;function e(a,o){return o===Ql?a.mapping=Es:o===tc&&(a.mapping=bs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ql||o===tc)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new b_(l.height);return u.fromEquirectangularTexture(n,a),t.set(a,u),a.addEventListener("dispose",r),e(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const ss=4,sh=[.125,.215,.35,.446,.526,.582],pr=20,Sl=new Lc,ah=new fe;let yl=null,El=0,bl=0,Tl=!1;const fr=(1+Math.sqrt(5))/2,ts=1/fr,oh=[new B(-fr,ts,0),new B(fr,ts,0),new B(-ts,0,fr),new B(ts,0,fr),new B(0,fr,-ts),new B(0,fr,ts),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],y0=new B;class lh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,s={}){const{size:a=256,position:o=y0}=s;yl=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),Tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(yl,El,bl),this._renderer.xr.enabled=Tl,t.scissorTest=!1,Qa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Es||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yl=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),Tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:ga,format:Qn,colorSpace:Ts,depthBuffer:!1},r=ch(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ch(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=E0(s)),this._blurMaterial=b0(s,t,e)}return r}_compileMaterial(t){const e=new ti(this._lodPlanes[0],t);this._renderer.compile(e,Sl)}_sceneToCubeUV(t,e,i,r,s){const l=new Rn(90,1,e,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(ah),f.toneMapping=Zi,f.autoClear=!1;const _=new Co({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),g=new ti(new ya,_);let m=!1;const d=t.background;d?d.isColor&&(_.color.copy(d),t.background=null,m=!0):(_.color.copy(ah),m=!0);for(let A=0;A<6;A++){const E=A%3;E===0?(l.up.set(0,u[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[A],s.y,s.z)):E===1?(l.up.set(0,0,u[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[A],s.z)):(l.up.set(0,u[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[A]));const M=this._cubeSize;Qa(r,E*M,A>2?M:0,M,M),f.setRenderTarget(r),m&&f.render(g,l),f.render(t,l)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=p,f.autoClear=h,t.background=d}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Es||t.mapping===bs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ti(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Qa(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Sl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=oh[(r-s-1)%oh.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new ti(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*pr-1),g=s/_,m=isFinite(s)?1+Math.floor(c*g):pr;m>pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${pr}`);const d=[];let A=0;for(let T=0;T<pr;++T){const P=T/g,y=Math.exp(-P*P/2);d.push(y),T===0?A+=y:T<m&&(A+=2*y)}for(let T=0;T<d.length;T++)d[T]=d[T]/A;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:E}=this;h.dTheta.value=_,h.mipInt.value=E-i;const M=this._sizeLods[r],R=3*M*(r>E-ss?r-E+ss:0),w=4*(this._cubeSize-M);Qa(e,R,w,3*M,2*M),l.setRenderTarget(e),l.render(f,Sl)}}function E0(n){const t=[],e=[],i=[];let r=n;const s=n-ss+1+sh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-ss?l=sh[a-n+ss-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,_=6,g=3,m=2,d=1,A=new Float32Array(g*_*p),E=new Float32Array(m*_*p),M=new Float32Array(d*_*p);for(let w=0;w<p;w++){const T=w%3*2/3-1,P=w>2?0:-1,y=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];A.set(y,g*_*w),E.set(h,m*_*w);const x=[w,w,w,w,w,w];M.set(x,d*_*w)}const R=new mn;R.setAttribute("position",new ze(A,g)),R.setAttribute("uv",new ze(E,m)),R.setAttribute("faceIndex",new ze(M,d)),t.push(R),r>ss&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function ch(n,t,e){const i=new Lr(n,t,e);return i.texture.mapping=Ho,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qa(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function b0(n,t,e){const i=new Float32Array(pr),r=new B(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function uh(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function hh(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function au(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function T0(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===Ql||l===tc,c=l===Es||l===bs;if(u||c){let f=t.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return e===null&&(e=new lh(n)),f=u?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return u&&p&&p.height>0||c&&p&&r(p)?(e===null&&(e=new lh(n)),f=u?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function A0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&mo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function w0(n,t,e,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(t.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)t.update(h[p],n.ARRAY_BUFFER)}function u(f){const h=[],p=f.index,_=f.attributes.position;let g=0;if(p!==null){const A=p.array;g=p.version;for(let E=0,M=A.length;E<M;E+=3){const R=A[E+0],w=A[E+1],T=A[E+2];h.push(R,w,w,T,T,R)}}else if(_!==void 0){const A=_.array;g=_.version;for(let E=0,M=A.length/3-1;E<M;E+=3){const R=E+0,w=E+1,T=E+2;h.push(R,w,w,T,T,R)}}else return;const m=new(Kf(h)?Qf:Jf)(h,1);m.version=g;const d=s.get(f);d&&t.remove(d),s.set(f,m)}function c(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:c}}function R0(n,t,e){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*a),e.update(p,i,1)}function u(h,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,h*a,_),e.update(p,i,_))}function c(h,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];e.update(m,i,1)}function f(h,p,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)u(h[d]/a,p[d],g[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,g,0,_);let d=0;for(let A=0;A<_;A++)d+=p[A]*g[A];e.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function C0(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function P0(n,t,e){const i=new WeakMap,r=new De;function s(a,o,l){const u=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let x=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",x)};var p=x;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),g===!0&&(M=2),m===!0&&(M=3);let R=o.attributes.position.count*M,w=1;R>t.maxTextureSize&&(w=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const T=new Float32Array(R*w*4*f),P=new Zf(T,R,w,f);P.type=wi,P.needsUpdate=!0;const y=M*4;for(let D=0;D<f;D++){const j=d[D],V=A[D],J=E[D],Q=R*w*4*D;for(let X=0;X<j.count;X++){const Z=X*y;_===!0&&(r.fromBufferAttribute(j,X),T[Q+Z+0]=r.x,T[Q+Z+1]=r.y,T[Q+Z+2]=r.z,T[Q+Z+3]=0),g===!0&&(r.fromBufferAttribute(V,X),T[Q+Z+4]=r.x,T[Q+Z+5]=r.y,T[Q+Z+6]=r.z,T[Q+Z+7]=0),m===!0&&(r.fromBufferAttribute(J,X),T[Q+Z+8]=r.x,T[Q+Z+9]=r.y,T[Q+Z+10]=r.z,T[Q+Z+11]=J.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new ee(R,w)},i.set(o,h),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function D0(n,t,e,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=t.get(l,c);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:a}}const od=new vn,fh=new sd(1,1),ld=new Zf,cd=new o_,ud=new nd,dh=[],ph=[],mh=new Float32Array(16),_h=new Float32Array(9),gh=new Float32Array(4);function Ds(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=dh[r];if(s===void 0&&(s=new Float32Array(r),dh[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function Ge(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ve(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Go(n,t){let e=ph[t];e===void 0&&(e=new Int32Array(t),ph[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function L0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function U0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;n.uniform2fv(this.addr,t),Ve(e,t)}}function I0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;n.uniform3fv(this.addr,t),Ve(e,t)}}function N0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;n.uniform4fv(this.addr,t),Ve(e,t)}}function F0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(Ge(e,i))return;gh.set(i),n.uniformMatrix2fv(this.addr,!1,gh),Ve(e,i)}}function O0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(Ge(e,i))return;_h.set(i),n.uniformMatrix3fv(this.addr,!1,_h),Ve(e,i)}}function B0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(Ge(e,i))return;mh.set(i),n.uniformMatrix4fv(this.addr,!1,mh),Ve(e,i)}}function k0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function z0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;n.uniform2iv(this.addr,t),Ve(e,t)}}function H0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;n.uniform3iv(this.addr,t),Ve(e,t)}}function G0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;n.uniform4iv(this.addr,t),Ve(e,t)}}function V0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function W0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;n.uniform2uiv(this.addr,t),Ve(e,t)}}function X0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;n.uniform3uiv(this.addr,t),Ve(e,t)}}function Y0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;n.uniform4uiv(this.addr,t),Ve(e,t)}}function q0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(fh.compareFunction=jf,s=fh):s=od,e.setTexture2D(t||s,r)}function j0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||cd,r)}function K0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||ud,r)}function Z0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||ld,r)}function $0(n){switch(n){case 5126:return L0;case 35664:return U0;case 35665:return I0;case 35666:return N0;case 35674:return F0;case 35675:return O0;case 35676:return B0;case 5124:case 35670:return k0;case 35667:case 35671:return z0;case 35668:case 35672:return H0;case 35669:case 35673:return G0;case 5125:return V0;case 36294:return W0;case 36295:return X0;case 36296:return Y0;case 35678:case 36198:case 36298:case 36306:case 35682:return q0;case 35679:case 36299:case 36307:return j0;case 35680:case 36300:case 36308:case 36293:return K0;case 36289:case 36303:case 36311:case 36292:return Z0}}function J0(n,t){n.uniform1fv(this.addr,t)}function Q0(n,t){const e=Ds(t,this.size,2);n.uniform2fv(this.addr,e)}function tx(n,t){const e=Ds(t,this.size,3);n.uniform3fv(this.addr,e)}function ex(n,t){const e=Ds(t,this.size,4);n.uniform4fv(this.addr,e)}function nx(n,t){const e=Ds(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function ix(n,t){const e=Ds(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function rx(n,t){const e=Ds(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function sx(n,t){n.uniform1iv(this.addr,t)}function ax(n,t){n.uniform2iv(this.addr,t)}function ox(n,t){n.uniform3iv(this.addr,t)}function lx(n,t){n.uniform4iv(this.addr,t)}function cx(n,t){n.uniform1uiv(this.addr,t)}function ux(n,t){n.uniform2uiv(this.addr,t)}function hx(n,t){n.uniform3uiv(this.addr,t)}function fx(n,t){n.uniform4uiv(this.addr,t)}function dx(n,t,e){const i=this.cache,r=t.length,s=Go(e,r);Ge(i,s)||(n.uniform1iv(this.addr,s),Ve(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||od,s[a])}function px(n,t,e){const i=this.cache,r=t.length,s=Go(e,r);Ge(i,s)||(n.uniform1iv(this.addr,s),Ve(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||cd,s[a])}function mx(n,t,e){const i=this.cache,r=t.length,s=Go(e,r);Ge(i,s)||(n.uniform1iv(this.addr,s),Ve(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||ud,s[a])}function _x(n,t,e){const i=this.cache,r=t.length,s=Go(e,r);Ge(i,s)||(n.uniform1iv(this.addr,s),Ve(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||ld,s[a])}function gx(n){switch(n){case 5126:return J0;case 35664:return Q0;case 35665:return tx;case 35666:return ex;case 35674:return nx;case 35675:return ix;case 35676:return rx;case 5124:case 35670:return sx;case 35667:case 35671:return ax;case 35668:case 35672:return ox;case 35669:case 35673:return lx;case 5125:return cx;case 36294:return ux;case 36295:return hx;case 36296:return fx;case 35678:case 36198:case 36298:case 36306:case 35682:return dx;case 35679:case 36299:case 36307:return px;case 35680:case 36300:case 36308:case 36293:return mx;case 36289:case 36303:case 36311:case 36292:return _x}}class vx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=$0(e.type)}}class xx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gx(e.type)}}class Mx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const Al=/(\w+)(\])?(\[|\.)?/g;function vh(n,t){n.seq.push(t),n.map[t.id]=t}function Sx(n,t,e){const i=n.name,r=i.length;for(Al.lastIndex=0;;){const s=Al.exec(i),a=Al.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){vh(e,u===void 0?new vx(o,n,t):new xx(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new Mx(o),vh(e,f)),e=f}}}class _o{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);Sx(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function xh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const yx=37297;let Ex=0;function bx(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Mh=new Qt;function Tx(n){he._getMatrix(Mh,he.workingColorSpace,n);const t=`mat3( ${Mh.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(n)){case Ao:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Sh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+bx(n.getShaderSource(t),a)}else return r}function Ax(n,t){const e=Tx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function wx(n,t){let e;switch(t){case Dm:e="Linear";break;case Lm:e="Reinhard";break;case Um:e="Cineon";break;case Im:e="ACESFilmic";break;case Fm:e="AgX";break;case Om:e="Neutral";break;case Nm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const to=new B;function Rx(){he.getLuminanceCoefficients(to);const n=to.x.toFixed(4),t=to.y.toFixed(4),e=to.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function Px(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Dx(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Ks(n){return n!==""}function yh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Eh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Lx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(n){return n.replace(Lx,Ix)}const Ux=new Map;function Ix(n,t){let e=te[t];if(e===void 0){const i=Ux.get(t);if(i!==void 0)e=te[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ic(e)}const Nx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bh(n){return n.replace(Nx,Fx)}function Fx(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Th(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ox(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Nf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===um?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===yi&&(t="SHADOWMAP_TYPE_VSM"),t}function Bx(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Es:case bs:t="ENVMAP_TYPE_CUBE";break;case Ho:t="ENVMAP_TYPE_CUBE_UV";break}return t}function kx(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case bs:t="ENVMAP_MODE_REFRACTION";break}return t}function zx(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ff:t="ENVMAP_BLENDING_MULTIPLY";break;case Cm:t="ENVMAP_BLENDING_MIX";break;case Pm:t="ENVMAP_BLENDING_ADD";break}return t}function Hx(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Gx(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Ox(e),u=Bx(e),c=kx(e),f=zx(e),h=Hx(e),p=Cx(e),_=Px(s),g=r.createProgram();let m,d,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ks).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ks).join(`
`),d.length>0&&(d+=`
`)):(m=[Th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),d=[Th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zi?"#define TONE_MAPPING":"",e.toneMapping!==Zi?te.tonemapping_pars_fragment:"",e.toneMapping!==Zi?wx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,Ax("linearToOutputTexel",e.outputColorSpace),Rx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ks).join(`
`)),a=Ic(a),a=yh(a,e),a=Eh(a,e),o=Ic(o),o=yh(o,e),o=Eh(o,e),a=bh(a),o=bh(o),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=A+m+a,M=A+d+o,R=xh(r,r.VERTEX_SHADER,E),w=xh(r,r.FRAGMENT_SHADER,M);r.attachShader(g,R),r.attachShader(g,w),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function T(D){if(n.debug.checkShaderErrors){const j=r.getProgramInfoLog(g).trim(),V=r.getShaderInfoLog(R).trim(),J=r.getShaderInfoLog(w).trim();let Q=!0,X=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,R,w);else{const Z=Sh(r,R,"vertex"),G=Sh(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+j+`
`+Z+`
`+G)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(V===""||J==="")&&(X=!1);X&&(D.diagnostics={runnable:Q,programLog:j,vertexShader:{log:V,prefix:m},fragmentShader:{log:J,prefix:d}})}r.deleteShader(R),r.deleteShader(w),P=new _o(r,g),y=Dx(r,g)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(g,yx)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ex++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=w,this}let Vx=0;class Wx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Xx(t),e.set(t,i)),i}}class Xx{constructor(t){this.id=Vx++,this.code=t,this.usedTimes=0}}function Yx(n,t,e,i,r,s,a){const o=new ru,l=new Wx,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return u.add(y),y===0?"uv":`uv${y}`}function m(y,x,D,j,V){const J=j.fog,Q=V.geometry,X=y.isMeshStandardMaterial?j.environment:null,Z=(y.isMeshStandardMaterial?e:t).get(y.envMap||X),G=Z&&Z.mapping===Ho?Z.image.height:null,st=_[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const ft=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ct=ft!==void 0?ft.length:0;let Vt=0;Q.morphAttributes.position!==void 0&&(Vt=1),Q.morphAttributes.normal!==void 0&&(Vt=2),Q.morphAttributes.color!==void 0&&(Vt=3);let $,k,Y,lt;if(st){const le=ai[st];$=le.vertexShader,k=le.fragmentShader}else $=y.vertexShader,k=y.fragmentShader,l.update(y),Y=l.getVertexShaderID(y),lt=l.getFragmentShaderID(y);const rt=n.getRenderTarget(),pt=n.state.buffers.depth.getReversed(),Pt=V.isInstancedMesh===!0,ht=V.isBatchedMesh===!0,Ft=!!y.map,Wt=!!y.matcap,Zt=!!Z,C=!!y.aoMap,We=!!y.lightMap,bt=!!y.bumpMap,kt=!!y.normalMap,wt=!!y.displacementMap,de=!!y.emissiveMap,Tt=!!y.metalnessMap,b=!!y.roughnessMap,v=y.anisotropy>0,F=y.clearcoat>0,tt=y.dispersion>0,it=y.iridescence>0,K=y.sheen>0,Rt=y.transmission>0,dt=v&&!!y.anisotropyMap,Mt=F&&!!y.clearcoatMap,ae=F&&!!y.clearcoatNormalMap,ct=F&&!!y.clearcoatRoughnessMap,St=it&&!!y.iridescenceMap,Nt=it&&!!y.iridescenceThicknessMap,Ot=K&&!!y.sheenColorMap,yt=K&&!!y.sheenRoughnessMap,ne=!!y.specularMap,qt=!!y.specularColorMap,ve=!!y.specularIntensityMap,U=Rt&&!!y.transmissionMap,_t=Rt&&!!y.thicknessMap,q=!!y.gradientMap,et=!!y.alphaMap,vt=y.alphaTest>0,gt=!!y.alphaHash,Xt=!!y.extensions;let Ee=Zi;y.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Ee=n.toneMapping);const Oe={shaderID:st,shaderType:y.type,shaderName:y.name,vertexShader:$,fragmentShader:k,defines:y.defines,customVertexShaderID:Y,customFragmentShaderID:lt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:ht,batchingColor:ht&&V._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&V.instanceColor!==null,instancingMorph:Pt&&V.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:rt===null?n.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Ts,alphaToCoverage:!!y.alphaToCoverage,map:Ft,matcap:Wt,envMap:Zt,envMapMode:Zt&&Z.mapping,envMapCubeUVHeight:G,aoMap:C,lightMap:We,bumpMap:bt,normalMap:kt,displacementMap:h&&wt,emissiveMap:de,normalMapObjectSpace:kt&&y.normalMapType===Gm,normalMapTangentSpace:kt&&y.normalMapType===Hm,metalnessMap:Tt,roughnessMap:b,anisotropy:v,anisotropyMap:dt,clearcoat:F,clearcoatMap:Mt,clearcoatNormalMap:ae,clearcoatRoughnessMap:ct,dispersion:tt,iridescence:it,iridescenceMap:St,iridescenceThicknessMap:Nt,sheen:K,sheenColorMap:Ot,sheenRoughnessMap:yt,specularMap:ne,specularColorMap:qt,specularIntensityMap:ve,transmission:Rt,transmissionMap:U,thicknessMap:_t,gradientMap:q,opaque:y.transparent===!1&&y.blending===Rr&&y.alphaToCoverage===!1,alphaMap:et,alphaTest:vt,alphaHash:gt,combine:y.combine,mapUv:Ft&&g(y.map.channel),aoMapUv:C&&g(y.aoMap.channel),lightMapUv:We&&g(y.lightMap.channel),bumpMapUv:bt&&g(y.bumpMap.channel),normalMapUv:kt&&g(y.normalMap.channel),displacementMapUv:wt&&g(y.displacementMap.channel),emissiveMapUv:de&&g(y.emissiveMap.channel),metalnessMapUv:Tt&&g(y.metalnessMap.channel),roughnessMapUv:b&&g(y.roughnessMap.channel),anisotropyMapUv:dt&&g(y.anisotropyMap.channel),clearcoatMapUv:Mt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:yt&&g(y.sheenRoughnessMap.channel),specularMapUv:ne&&g(y.specularMap.channel),specularColorMapUv:qt&&g(y.specularColorMap.channel),specularIntensityMapUv:ve&&g(y.specularIntensityMap.channel),transmissionMapUv:U&&g(y.transmissionMap.channel),thicknessMapUv:_t&&g(y.thicknessMap.channel),alphaMapUv:et&&g(y.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(kt||v),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Q.attributes.uv&&(Ft||et),fog:!!J,useFog:y.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:pt,skinning:V.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Vt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Ft&&y.map.isVideoTexture===!0&&he.getTransfer(y.map.colorSpace)===Me,decodeVideoTextureEmissive:de&&y.emissiveMap.isVideoTexture===!0&&he.getTransfer(y.emissiveMap.colorSpace)===Me,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===oi,flipSided:y.side===gn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Xt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&y.extensions.multiDraw===!0||ht)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Oe.vertexUv1s=u.has(1),Oe.vertexUv2s=u.has(2),Oe.vertexUv3s=u.has(3),u.clear(),Oe}function d(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)x.push(D),x.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(A(x,y),E(x,y),x.push(n.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function A(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function E(y,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),y.push(o.mask)}function M(y){const x=_[y.type];let D;if(x){const j=ai[x];D=M_.clone(j.uniforms)}else D=y.uniforms;return D}function R(y,x){let D;for(let j=0,V=c.length;j<V;j++){const J=c[j];if(J.cacheKey===x){D=J,++D.usedTimes;break}}return D===void 0&&(D=new Gx(n,x,y,s),c.push(D)),D}function w(y){if(--y.usedTimes===0){const x=c.indexOf(y);c[x]=c[c.length-1],c.pop(),y.destroy()}}function T(y){l.remove(y)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:R,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:P}}function qx(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function jx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Ah(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function wh(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(f,h,p,_,g,m){let d=n[t];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},n[t]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=g,d.group=m),t++,d}function o(f,h,p,_,g,m){const d=a(f,h,p,_,g,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):e.push(d)}function l(f,h,p,_,g,m){const d=a(f,h,p,_,g,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):e.unshift(d)}function u(f,h){e.length>1&&e.sort(f||jx),i.length>1&&i.sort(h||Ah),r.length>1&&r.sort(h||Ah)}function c(){for(let f=t,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:c,sort:u}}function Kx(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new wh,n.set(i,[a])):r>=s.length?(a=new wh,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Zx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new fe};break;case"SpotLight":e={position:new B,direction:new B,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new fe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":e={color:new fe,position:new B,halfWidth:new B,halfHeight:new B};break}return n[t.id]=e,e}}}function $x(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Jx=0;function Qx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function tM(n){const t=new Zx,e=$x(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new B);const r=new B,s=new Ae,a=new Ae;function o(u){let c=0,f=0,h=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,_=0,g=0,m=0,d=0,A=0,E=0,M=0,R=0,w=0,T=0;u.sort(Qx);for(let y=0,x=u.length;y<x;y++){const D=u[y],j=D.color,V=D.intensity,J=D.distance,Q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)c+=j.r*V,f+=j.g*V,h+=j.b*V;else if(D.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],V);T++}else if(D.isDirectionalLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,G=e.get(D);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=D.shadow.matrix,A++}i.directional[p]=X,p++}else if(D.isSpotLight){const X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(j).multiplyScalar(V),X.distance=J,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[g]=X;const Z=D.shadow;if(D.map&&(i.spotLightMap[R]=D.map,R++,Z.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[g]=Z.matrix,D.castShadow){const G=e.get(D);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,i.spotShadow[g]=G,i.spotShadowMap[g]=Q,M++}g++}else if(D.isRectAreaLight){const X=t.get(D);X.color.copy(j).multiplyScalar(V),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=X,m++}else if(D.isPointLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const Z=D.shadow,G=e.get(D);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,i.pointShadow[_]=G,i.pointShadowMap[_]=Q,i.pointShadowMatrix[_]=D.shadow.matrix,E++}i.point[_]=X,_++}else if(D.isHemisphereLight){const X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(V),X.groundColor.copy(D.groundColor).multiplyScalar(V),i.hemi[d]=X,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==p||P.pointLength!==_||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==d||P.numDirectionalShadows!==A||P.numPointShadows!==E||P.numSpotShadows!==M||P.numSpotMaps!==R||P.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=M+R-w,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=T,P.directionalLength=p,P.pointLength=_,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=d,P.numDirectionalShadows=A,P.numPointShadows=E,P.numSpotShadows=M,P.numSpotMaps=R,P.numLightProbes=T,i.version=Jx++)}function l(u,c){let f=0,h=0,p=0,_=0,g=0;const m=c.matrixWorldInverse;for(let d=0,A=u.length;d<A;d++){const E=u[d];if(E.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(E.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const M=i.hemi[g];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function Rh(n){const t=new tM(n),e=[],i=[];function r(c){u.camera=c,e.length=0,i.length=0}function s(c){e.push(c)}function a(c){i.push(c)}function o(){t.setup(e)}function l(c){t.setupView(e,c)}const u={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function eM(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Rh(n),t.set(r,[o])):s>=a.length?(o=new Rh(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const nM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rM(n,t,e){let i=new id;const r=new ee,s=new ee,a=new De,o=new C_({depthPacking:zm}),l=new P_,u={},c=e.maxTextureSize,f={[tr]:gn,[gn]:tr,[oi]:oi},h=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:nM,fragmentShader:iM}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new mn;_.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ti(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nf;let d=this.type;this.render=function(w,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const y=n.getRenderTarget(),x=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),j=n.state;j.setBlending(Ki),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const V=d!==yi&&this.type===yi,J=d===yi&&this.type!==yi;for(let Q=0,X=w.length;Q<X;Q++){const Z=w[Q],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const st=G.getFrameExtents();if(r.multiply(st),s.copy(G.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/st.x),r.x=s.x*st.x,G.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/st.y),r.y=s.y*st.y,G.mapSize.y=s.y)),G.map===null||V===!0||J===!0){const Ct=this.type!==yi?{minFilter:ei,magFilter:ei}:{};G.map!==null&&G.map.dispose(),G.map=new Lr(r.x,r.y,Ct),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const ft=G.getViewportCount();for(let Ct=0;Ct<ft;Ct++){const Vt=G.getViewport(Ct);a.set(s.x*Vt.x,s.y*Vt.y,s.x*Vt.z,s.y*Vt.w),j.viewport(a),G.updateMatrices(Z,Ct),i=G.getFrustum(),M(T,P,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===yi&&A(G,P),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(y,x,D)};function A(w,T){const P=t.update(g);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Lr(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(T,null,P,h,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(T,null,P,p,g,null)}function E(w,T,P,y){let x=null;const D=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)x=D;else if(x=P.isPointLight===!0?l:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const j=x.uuid,V=T.uuid;let J=u[j];J===void 0&&(J={},u[j]=J);let Q=J[V];Q===void 0&&(Q=x.clone(),J[V]=Q,T.addEventListener("dispose",R)),x=Q}if(x.visible=T.visible,x.wireframe=T.wireframe,y===yi?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:f[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const j=n.properties.get(x);j.light=P}return x}function M(w,T,P,y,x){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===yi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const V=t.update(w),J=w.material;if(Array.isArray(J)){const Q=V.groups;for(let X=0,Z=Q.length;X<Z;X++){const G=Q[X],st=J[G.materialIndex];if(st&&st.visible){const ft=E(w,st,y,x);w.onBeforeShadow(n,w,T,P,V,ft,G),n.renderBufferDirect(P,null,V,ft,w,G),w.onAfterShadow(n,w,T,P,V,ft,G)}}}else if(J.visible){const Q=E(w,J,y,x);w.onBeforeShadow(n,w,T,P,V,Q,null),n.renderBufferDirect(P,null,V,Q,w,null),w.onAfterShadow(n,w,T,P,V,Q,null)}}const j=w.children;for(let V=0,J=j.length;V<J;V++)M(j[V],T,P,y,x)}function R(w){w.target.removeEventListener("dispose",R);for(const P in u){const y=u[P],x=w.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const sM={[Yl]:ql,[jl]:$l,[Kl]:Jl,[ys]:Zl,[ql]:Yl,[$l]:jl,[Jl]:Kl,[Zl]:ys};function aM(n,t){function e(){let U=!1;const _t=new De;let q=null;const et=new De(0,0,0,0);return{setMask:function(vt){q!==vt&&!U&&(n.colorMask(vt,vt,vt,vt),q=vt)},setLocked:function(vt){U=vt},setClear:function(vt,gt,Xt,Ee,Oe){Oe===!0&&(vt*=Ee,gt*=Ee,Xt*=Ee),_t.set(vt,gt,Xt,Ee),et.equals(_t)===!1&&(n.clearColor(vt,gt,Xt,Ee),et.copy(_t))},reset:function(){U=!1,q=null,et.set(-1,0,0,0)}}}function i(){let U=!1,_t=!1,q=null,et=null,vt=null;return{setReversed:function(gt){if(_t!==gt){const Xt=t.get("EXT_clip_control");gt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),_t=gt;const Ee=vt;vt=null,this.setClear(Ee)}},getReversed:function(){return _t},setTest:function(gt){gt?rt(n.DEPTH_TEST):pt(n.DEPTH_TEST)},setMask:function(gt){q!==gt&&!U&&(n.depthMask(gt),q=gt)},setFunc:function(gt){if(_t&&(gt=sM[gt]),et!==gt){switch(gt){case Yl:n.depthFunc(n.NEVER);break;case ql:n.depthFunc(n.ALWAYS);break;case jl:n.depthFunc(n.LESS);break;case ys:n.depthFunc(n.LEQUAL);break;case Kl:n.depthFunc(n.EQUAL);break;case Zl:n.depthFunc(n.GEQUAL);break;case $l:n.depthFunc(n.GREATER);break;case Jl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}et=gt}},setLocked:function(gt){U=gt},setClear:function(gt){vt!==gt&&(_t&&(gt=1-gt),n.clearDepth(gt),vt=gt)},reset:function(){U=!1,q=null,et=null,vt=null,_t=!1}}}function r(){let U=!1,_t=null,q=null,et=null,vt=null,gt=null,Xt=null,Ee=null,Oe=null;return{setTest:function(le){U||(le?rt(n.STENCIL_TEST):pt(n.STENCIL_TEST))},setMask:function(le){_t!==le&&!U&&(n.stencilMask(le),_t=le)},setFunc:function(le,xn,Cn){(q!==le||et!==xn||vt!==Cn)&&(n.stencilFunc(le,xn,Cn),q=le,et=xn,vt=Cn)},setOp:function(le,xn,Cn){(gt!==le||Xt!==xn||Ee!==Cn)&&(n.stencilOp(le,xn,Cn),gt=le,Xt=xn,Ee=Cn)},setLocked:function(le){U=le},setClear:function(le){Oe!==le&&(n.clearStencil(le),Oe=le)},reset:function(){U=!1,_t=null,q=null,et=null,vt=null,gt=null,Xt=null,Ee=null,Oe=null}}}const s=new e,a=new i,o=new r,l=new WeakMap,u=new WeakMap;let c={},f={},h=new WeakMap,p=[],_=null,g=!1,m=null,d=null,A=null,E=null,M=null,R=null,w=null,T=new fe(0,0,0),P=0,y=!1,x=null,D=null,j=null,V=null,J=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Z=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=Z>=2);let st=null,ft={};const Ct=n.getParameter(n.SCISSOR_BOX),Vt=n.getParameter(n.VIEWPORT),$=new De().fromArray(Ct),k=new De().fromArray(Vt);function Y(U,_t,q,et){const vt=new Uint8Array(4),gt=n.createTexture();n.bindTexture(U,gt),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xt=0;Xt<q;Xt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(_t,0,n.RGBA,1,1,et,0,n.RGBA,n.UNSIGNED_BYTE,vt):n.texImage2D(_t+Xt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,vt);return gt}const lt={};lt[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),lt[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),lt[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(n.DEPTH_TEST),a.setFunc(ys),bt(!1),kt(Eu),rt(n.CULL_FACE),C(Ki);function rt(U){c[U]!==!0&&(n.enable(U),c[U]=!0)}function pt(U){c[U]!==!1&&(n.disable(U),c[U]=!1)}function Pt(U,_t){return f[U]!==_t?(n.bindFramebuffer(U,_t),f[U]=_t,U===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=_t),U===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=_t),!0):!1}function ht(U,_t){let q=p,et=!1;if(U){q=h.get(_t),q===void 0&&(q=[],h.set(_t,q));const vt=U.textures;if(q.length!==vt.length||q[0]!==n.COLOR_ATTACHMENT0){for(let gt=0,Xt=vt.length;gt<Xt;gt++)q[gt]=n.COLOR_ATTACHMENT0+gt;q.length=vt.length,et=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,et=!0);et&&n.drawBuffers(q)}function Ft(U){return _!==U?(n.useProgram(U),_=U,!0):!1}const Wt={[dr]:n.FUNC_ADD,[fm]:n.FUNC_SUBTRACT,[dm]:n.FUNC_REVERSE_SUBTRACT};Wt[pm]=n.MIN,Wt[mm]=n.MAX;const Zt={[_m]:n.ZERO,[gm]:n.ONE,[vm]:n.SRC_COLOR,[Wl]:n.SRC_ALPHA,[bm]:n.SRC_ALPHA_SATURATE,[ym]:n.DST_COLOR,[Mm]:n.DST_ALPHA,[xm]:n.ONE_MINUS_SRC_COLOR,[Xl]:n.ONE_MINUS_SRC_ALPHA,[Em]:n.ONE_MINUS_DST_COLOR,[Sm]:n.ONE_MINUS_DST_ALPHA,[Tm]:n.CONSTANT_COLOR,[Am]:n.ONE_MINUS_CONSTANT_COLOR,[wm]:n.CONSTANT_ALPHA,[Rm]:n.ONE_MINUS_CONSTANT_ALPHA};function C(U,_t,q,et,vt,gt,Xt,Ee,Oe,le){if(U===Ki){g===!0&&(pt(n.BLEND),g=!1);return}if(g===!1&&(rt(n.BLEND),g=!0),U!==hm){if(U!==m||le!==y){if((d!==dr||M!==dr)&&(n.blendEquation(n.FUNC_ADD),d=dr,M=dr),le)switch(U){case Rr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case To:n.blendFunc(n.ONE,n.ONE);break;case bu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Tu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Rr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case To:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case bu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Tu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}A=null,E=null,R=null,w=null,T.set(0,0,0),P=0,m=U,y=le}return}vt=vt||_t,gt=gt||q,Xt=Xt||et,(_t!==d||vt!==M)&&(n.blendEquationSeparate(Wt[_t],Wt[vt]),d=_t,M=vt),(q!==A||et!==E||gt!==R||Xt!==w)&&(n.blendFuncSeparate(Zt[q],Zt[et],Zt[gt],Zt[Xt]),A=q,E=et,R=gt,w=Xt),(Ee.equals(T)===!1||Oe!==P)&&(n.blendColor(Ee.r,Ee.g,Ee.b,Oe),T.copy(Ee),P=Oe),m=U,y=!1}function We(U,_t){U.side===oi?pt(n.CULL_FACE):rt(n.CULL_FACE);let q=U.side===gn;_t&&(q=!q),bt(q),U.blending===Rr&&U.transparent===!1?C(Ki):C(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const et=U.stencilWrite;o.setTest(et),et&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),de(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?rt(n.SAMPLE_ALPHA_TO_COVERAGE):pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function bt(U){x!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),x=U)}function kt(U){U!==lm?(rt(n.CULL_FACE),U!==D&&(U===Eu?n.cullFace(n.BACK):U===cm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pt(n.CULL_FACE),D=U}function wt(U){U!==j&&(X&&n.lineWidth(U),j=U)}function de(U,_t,q){U?(rt(n.POLYGON_OFFSET_FILL),(V!==_t||J!==q)&&(n.polygonOffset(_t,q),V=_t,J=q)):pt(n.POLYGON_OFFSET_FILL)}function Tt(U){U?rt(n.SCISSOR_TEST):pt(n.SCISSOR_TEST)}function b(U){U===void 0&&(U=n.TEXTURE0+Q-1),st!==U&&(n.activeTexture(U),st=U)}function v(U,_t,q){q===void 0&&(st===null?q=n.TEXTURE0+Q-1:q=st);let et=ft[q];et===void 0&&(et={type:void 0,texture:void 0},ft[q]=et),(et.type!==U||et.texture!==_t)&&(st!==q&&(n.activeTexture(q),st=q),n.bindTexture(U,_t||lt[U]),et.type=U,et.texture=_t)}function F(){const U=ft[st];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function tt(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Rt(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ct(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Nt(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ot(U){$.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),$.copy(U))}function yt(U){k.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),k.copy(U))}function ne(U,_t){let q=u.get(_t);q===void 0&&(q=new WeakMap,u.set(_t,q));let et=q.get(U);et===void 0&&(et=n.getUniformBlockIndex(_t,U.name),q.set(U,et))}function qt(U,_t){const et=u.get(_t).get(U);l.get(_t)!==et&&(n.uniformBlockBinding(_t,et,U.__bindingPointIndex),l.set(_t,et))}function ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},st=null,ft={},f={},h=new WeakMap,p=[],_=null,g=!1,m=null,d=null,A=null,E=null,M=null,R=null,w=null,T=new fe(0,0,0),P=0,y=!1,x=null,D=null,j=null,V=null,J=null,$.set(0,0,n.canvas.width,n.canvas.height),k.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:rt,disable:pt,bindFramebuffer:Pt,drawBuffers:ht,useProgram:Ft,setBlending:C,setMaterial:We,setFlipSided:bt,setCullFace:kt,setLineWidth:wt,setPolygonOffset:de,setScissorTest:Tt,activeTexture:b,bindTexture:v,unbindTexture:F,compressedTexImage2D:tt,compressedTexImage3D:it,texImage2D:St,texImage3D:Nt,updateUBOMapping:ne,uniformBlockBinding:qt,texStorage2D:ae,texStorage3D:ct,texSubImage2D:K,texSubImage3D:Rt,compressedTexSubImage2D:dt,compressedTexSubImage3D:Mt,scissor:Ot,viewport:yt,reset:ve}}function oM(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ee,c=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,v){return p?new OffscreenCanvas(b,v):Ro("canvas")}function g(b,v,F){let tt=1;const it=Tt(b);if((it.width>F||it.height>F)&&(tt=F/Math.max(it.width,it.height)),tt<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const K=Math.floor(tt*it.width),Rt=Math.floor(tt*it.height);f===void 0&&(f=_(K,Rt));const dt=v?_(K,Rt):f;return dt.width=K,dt.height=Rt,dt.getContext("2d").drawImage(b,0,0,K,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+K+"x"+Rt+")."),dt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),b;return b}function m(b){return b.generateMipmaps}function d(b){n.generateMipmap(b)}function A(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(b,v,F,tt,it=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let K=v;if(v===n.RED&&(F===n.FLOAT&&(K=n.R32F),F===n.HALF_FLOAT&&(K=n.R16F),F===n.UNSIGNED_BYTE&&(K=n.R8)),v===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.R8UI),F===n.UNSIGNED_SHORT&&(K=n.R16UI),F===n.UNSIGNED_INT&&(K=n.R32UI),F===n.BYTE&&(K=n.R8I),F===n.SHORT&&(K=n.R16I),F===n.INT&&(K=n.R32I)),v===n.RG&&(F===n.FLOAT&&(K=n.RG32F),F===n.HALF_FLOAT&&(K=n.RG16F),F===n.UNSIGNED_BYTE&&(K=n.RG8)),v===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.RG8UI),F===n.UNSIGNED_SHORT&&(K=n.RG16UI),F===n.UNSIGNED_INT&&(K=n.RG32UI),F===n.BYTE&&(K=n.RG8I),F===n.SHORT&&(K=n.RG16I),F===n.INT&&(K=n.RG32I)),v===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.RGB8UI),F===n.UNSIGNED_SHORT&&(K=n.RGB16UI),F===n.UNSIGNED_INT&&(K=n.RGB32UI),F===n.BYTE&&(K=n.RGB8I),F===n.SHORT&&(K=n.RGB16I),F===n.INT&&(K=n.RGB32I)),v===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),F===n.UNSIGNED_INT&&(K=n.RGBA32UI),F===n.BYTE&&(K=n.RGBA8I),F===n.SHORT&&(K=n.RGBA16I),F===n.INT&&(K=n.RGBA32I)),v===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),v===n.RGBA){const Rt=it?Ao:he.getTransfer(tt);F===n.FLOAT&&(K=n.RGBA32F),F===n.HALF_FLOAT&&(K=n.RGBA16F),F===n.UNSIGNED_BYTE&&(K=Rt===Me?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function M(b,v){let F;return b?v===null||v===Dr||v===ra?F=n.DEPTH24_STENCIL8:v===wi?F=n.DEPTH32F_STENCIL8:v===ia&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Dr||v===ra?F=n.DEPTH_COMPONENT24:v===wi?F=n.DEPTH_COMPONENT32F:v===ia&&(F=n.DEPTH_COMPONENT16),F}function R(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==ei&&b.minFilter!==ci?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function w(b){const v=b.target;v.removeEventListener("dispose",w),P(v),v.isVideoTexture&&c.delete(v)}function T(b){const v=b.target;v.removeEventListener("dispose",T),x(v)}function P(b){const v=i.get(b);if(v.__webglInit===void 0)return;const F=b.source,tt=h.get(F);if(tt){const it=tt[v.__cacheKey];it.usedTimes--,it.usedTimes===0&&y(b),Object.keys(tt).length===0&&h.delete(F)}i.remove(b)}function y(b){const v=i.get(b);n.deleteTexture(v.__webglTexture);const F=b.source,tt=h.get(F);delete tt[v.__cacheKey],a.memory.textures--}function x(b){const v=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(v.__webglFramebuffer[tt]))for(let it=0;it<v.__webglFramebuffer[tt].length;it++)n.deleteFramebuffer(v.__webglFramebuffer[tt][it]);else n.deleteFramebuffer(v.__webglFramebuffer[tt]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[tt])}else{if(Array.isArray(v.__webglFramebuffer))for(let tt=0;tt<v.__webglFramebuffer.length;tt++)n.deleteFramebuffer(v.__webglFramebuffer[tt]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let tt=0;tt<v.__webglColorRenderbuffer.length;tt++)v.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[tt]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=b.textures;for(let tt=0,it=F.length;tt<it;tt++){const K=i.get(F[tt]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),a.memory.textures--),i.remove(F[tt])}i.remove(b)}let D=0;function j(){D=0}function V(){const b=D;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),D+=1,b}function J(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function Q(b,v){const F=i.get(b);if(b.isVideoTexture&&wt(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const tt=b.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(F,b,v);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+v)}function X(b,v){const F=i.get(b);if(b.version>0&&F.__version!==b.version){k(F,b,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+v)}function Z(b,v){const F=i.get(b);if(b.version>0&&F.__version!==b.version){k(F,b,v);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+v)}function G(b,v){const F=i.get(b);if(b.version>0&&F.__version!==b.version){Y(F,b,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+v)}const st={[ec]:n.REPEAT,[vr]:n.CLAMP_TO_EDGE,[nc]:n.MIRRORED_REPEAT},ft={[ei]:n.NEAREST,[Bm]:n.NEAREST_MIPMAP_NEAREST,[Ca]:n.NEAREST_MIPMAP_LINEAR,[ci]:n.LINEAR,[$o]:n.LINEAR_MIPMAP_NEAREST,[xr]:n.LINEAR_MIPMAP_LINEAR},Ct={[Vm]:n.NEVER,[Km]:n.ALWAYS,[Wm]:n.LESS,[jf]:n.LEQUAL,[Xm]:n.EQUAL,[jm]:n.GEQUAL,[Ym]:n.GREATER,[qm]:n.NOTEQUAL};function Vt(b,v){if(v.type===wi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ci||v.magFilter===$o||v.magFilter===Ca||v.magFilter===xr||v.minFilter===ci||v.minFilter===$o||v.minFilter===Ca||v.minFilter===xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,st[v.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,st[v.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,st[v.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,ft[v.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,ft[v.minFilter]),v.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Ct[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ei||v.minFilter!==Ca&&v.minFilter!==xr||v.type===wi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function $(b,v){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",w));const tt=v.source;let it=h.get(tt);it===void 0&&(it={},h.set(tt,it));const K=J(v);if(K!==b.__cacheKey){it[K]===void 0&&(it[K]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),it[K].usedTimes++;const Rt=it[b.__cacheKey];Rt!==void 0&&(it[b.__cacheKey].usedTimes--,Rt.usedTimes===0&&y(v)),b.__cacheKey=K,b.__webglTexture=it[K].texture}return F}function k(b,v,F){let tt=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(tt=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(tt=n.TEXTURE_3D);const it=$(b,v),K=v.source;e.bindTexture(tt,b.__webglTexture,n.TEXTURE0+F);const Rt=i.get(K);if(K.version!==Rt.__version||it===!0){e.activeTexture(n.TEXTURE0+F);const dt=he.getPrimaries(he.workingColorSpace),Mt=v.colorSpace===Hi?null:he.getPrimaries(v.colorSpace),ae=v.colorSpace===Hi||dt===Mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let ct=g(v.image,!1,r.maxTextureSize);ct=de(v,ct);const St=s.convert(v.format,v.colorSpace),Nt=s.convert(v.type);let Ot=E(v.internalFormat,St,Nt,v.colorSpace,v.isVideoTexture);Vt(tt,v);let yt;const ne=v.mipmaps,qt=v.isVideoTexture!==!0,ve=Rt.__version===void 0||it===!0,U=K.dataReady,_t=R(v,ct);if(v.isDepthTexture)Ot=M(v.format===aa,v.type),ve&&(qt?e.texStorage2D(n.TEXTURE_2D,1,Ot,ct.width,ct.height):e.texImage2D(n.TEXTURE_2D,0,Ot,ct.width,ct.height,0,St,Nt,null));else if(v.isDataTexture)if(ne.length>0){qt&&ve&&e.texStorage2D(n.TEXTURE_2D,_t,Ot,ne[0].width,ne[0].height);for(let q=0,et=ne.length;q<et;q++)yt=ne[q],qt?U&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,yt.width,yt.height,St,Nt,yt.data):e.texImage2D(n.TEXTURE_2D,q,Ot,yt.width,yt.height,0,St,Nt,yt.data);v.generateMipmaps=!1}else qt?(ve&&e.texStorage2D(n.TEXTURE_2D,_t,Ot,ct.width,ct.height),U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ct.width,ct.height,St,Nt,ct.data)):e.texImage2D(n.TEXTURE_2D,0,Ot,ct.width,ct.height,0,St,Nt,ct.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){qt&&ve&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_t,Ot,ne[0].width,ne[0].height,ct.depth);for(let q=0,et=ne.length;q<et;q++)if(yt=ne[q],v.format!==Qn)if(St!==null)if(qt){if(U)if(v.layerUpdates.size>0){const vt=rh(yt.width,yt.height,v.format,v.type);for(const gt of v.layerUpdates){const Xt=yt.data.subarray(gt*vt/yt.data.BYTES_PER_ELEMENT,(gt+1)*vt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,gt,yt.width,yt.height,1,St,Xt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,yt.width,yt.height,ct.depth,St,yt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Ot,yt.width,yt.height,ct.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,yt.width,yt.height,ct.depth,St,Nt,yt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,q,Ot,yt.width,yt.height,ct.depth,0,St,Nt,yt.data)}else{qt&&ve&&e.texStorage2D(n.TEXTURE_2D,_t,Ot,ne[0].width,ne[0].height);for(let q=0,et=ne.length;q<et;q++)yt=ne[q],v.format!==Qn?St!==null?qt?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,yt.width,yt.height,St,yt.data):e.compressedTexImage2D(n.TEXTURE_2D,q,Ot,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?U&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,yt.width,yt.height,St,Nt,yt.data):e.texImage2D(n.TEXTURE_2D,q,Ot,yt.width,yt.height,0,St,Nt,yt.data)}else if(v.isDataArrayTexture)if(qt){if(ve&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_t,Ot,ct.width,ct.height,ct.depth),U)if(v.layerUpdates.size>0){const q=rh(ct.width,ct.height,v.format,v.type);for(const et of v.layerUpdates){const vt=ct.data.subarray(et*q/ct.data.BYTES_PER_ELEMENT,(et+1)*q/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,et,ct.width,ct.height,1,St,Nt,vt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,St,Nt,ct.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ot,ct.width,ct.height,ct.depth,0,St,Nt,ct.data);else if(v.isData3DTexture)qt?(ve&&e.texStorage3D(n.TEXTURE_3D,_t,Ot,ct.width,ct.height,ct.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,St,Nt,ct.data)):e.texImage3D(n.TEXTURE_3D,0,Ot,ct.width,ct.height,ct.depth,0,St,Nt,ct.data);else if(v.isFramebufferTexture){if(ve)if(qt)e.texStorage2D(n.TEXTURE_2D,_t,Ot,ct.width,ct.height);else{let q=ct.width,et=ct.height;for(let vt=0;vt<_t;vt++)e.texImage2D(n.TEXTURE_2D,vt,Ot,q,et,0,St,Nt,null),q>>=1,et>>=1}}else if(ne.length>0){if(qt&&ve){const q=Tt(ne[0]);e.texStorage2D(n.TEXTURE_2D,_t,Ot,q.width,q.height)}for(let q=0,et=ne.length;q<et;q++)yt=ne[q],qt?U&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,St,Nt,yt):e.texImage2D(n.TEXTURE_2D,q,Ot,St,Nt,yt);v.generateMipmaps=!1}else if(qt){if(ve){const q=Tt(ct);e.texStorage2D(n.TEXTURE_2D,_t,Ot,q.width,q.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,St,Nt,ct)}else e.texImage2D(n.TEXTURE_2D,0,Ot,St,Nt,ct);m(v)&&d(tt),Rt.__version=K.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function Y(b,v,F){if(v.image.length!==6)return;const tt=$(b,v),it=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+F);const K=i.get(it);if(it.version!==K.__version||tt===!0){e.activeTexture(n.TEXTURE0+F);const Rt=he.getPrimaries(he.workingColorSpace),dt=v.colorSpace===Hi?null:he.getPrimaries(v.colorSpace),Mt=v.colorSpace===Hi||Rt===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const ae=v.isCompressedTexture||v.image[0].isCompressedTexture,ct=v.image[0]&&v.image[0].isDataTexture,St=[];for(let et=0;et<6;et++)!ae&&!ct?St[et]=g(v.image[et],!0,r.maxCubemapSize):St[et]=ct?v.image[et].image:v.image[et],St[et]=de(v,St[et]);const Nt=St[0],Ot=s.convert(v.format,v.colorSpace),yt=s.convert(v.type),ne=E(v.internalFormat,Ot,yt,v.colorSpace),qt=v.isVideoTexture!==!0,ve=K.__version===void 0||tt===!0,U=it.dataReady;let _t=R(v,Nt);Vt(n.TEXTURE_CUBE_MAP,v);let q;if(ae){qt&&ve&&e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,ne,Nt.width,Nt.height);for(let et=0;et<6;et++){q=St[et].mipmaps;for(let vt=0;vt<q.length;vt++){const gt=q[vt];v.format!==Qn?Ot!==null?qt?U&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt,0,0,gt.width,gt.height,Ot,gt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt,ne,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt,0,0,gt.width,gt.height,Ot,yt,gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt,ne,gt.width,gt.height,0,Ot,yt,gt.data)}}}else{if(q=v.mipmaps,qt&&ve){q.length>0&&_t++;const et=Tt(St[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,ne,et.width,et.height)}for(let et=0;et<6;et++)if(ct){qt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,St[et].width,St[et].height,Ot,yt,St[et].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ne,St[et].width,St[et].height,0,Ot,yt,St[et].data);for(let vt=0;vt<q.length;vt++){const Xt=q[vt].image[et].image;qt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt+1,0,0,Xt.width,Xt.height,Ot,yt,Xt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt+1,ne,Xt.width,Xt.height,0,Ot,yt,Xt.data)}}else{qt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Ot,yt,St[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ne,Ot,yt,St[et]);for(let vt=0;vt<q.length;vt++){const gt=q[vt];qt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt+1,0,0,Ot,yt,gt.image[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt+1,ne,Ot,yt,gt.image[et])}}}m(v)&&d(n.TEXTURE_CUBE_MAP),K.__version=it.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function lt(b,v,F,tt,it,K){const Rt=s.convert(F.format,F.colorSpace),dt=s.convert(F.type),Mt=E(F.internalFormat,Rt,dt,F.colorSpace),ae=i.get(v),ct=i.get(F);if(ct.__renderTarget=v,!ae.__hasExternalTextures){const St=Math.max(1,v.width>>K),Nt=Math.max(1,v.height>>K);it===n.TEXTURE_3D||it===n.TEXTURE_2D_ARRAY?e.texImage3D(it,K,Mt,St,Nt,v.depth,0,Rt,dt,null):e.texImage2D(it,K,Mt,St,Nt,0,Rt,dt,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),kt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,it,ct.__webglTexture,0,bt(v)):(it===n.TEXTURE_2D||it>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,tt,it,ct.__webglTexture,K),e.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(b,v,F){if(n.bindRenderbuffer(n.RENDERBUFFER,b),v.depthBuffer){const tt=v.depthTexture,it=tt&&tt.isDepthTexture?tt.type:null,K=M(v.stencilBuffer,it),Rt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=bt(v);kt(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt,K,v.width,v.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,K,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,K,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Rt,n.RENDERBUFFER,b)}else{const tt=v.textures;for(let it=0;it<tt.length;it++){const K=tt[it],Rt=s.convert(K.format,K.colorSpace),dt=s.convert(K.type),Mt=E(K.internalFormat,Rt,dt,K.colorSpace),ae=bt(v);F&&kt(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,Mt,v.width,v.height):kt(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,Mt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Mt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pt(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=i.get(v.depthTexture);tt.__renderTarget=v,(!tt.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Q(v.depthTexture,0);const it=tt.__webglTexture,K=bt(v);if(v.depthTexture.format===sa)kt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0);else if(v.depthTexture.format===aa)kt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Pt(b){const v=i.get(b),F=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const tt=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),tt){const it=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,tt.removeEventListener("dispose",it)};tt.addEventListener("dispose",it),v.__depthDisposeCallback=it}v.__boundDepthTexture=tt}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");pt(v.__webglFramebuffer,b)}else if(F){v.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[tt]),v.__webglDepthbuffer[tt]===void 0)v.__webglDepthbuffer[tt]=n.createRenderbuffer(),rt(v.__webglDepthbuffer[tt],b,!1);else{const it=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer[tt];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,K)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),rt(v.__webglDepthbuffer,b,!1);else{const tt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,it),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,it)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ht(b,v,F){const tt=i.get(b);v!==void 0&&lt(tt.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Pt(b)}function Ft(b){const v=b.texture,F=i.get(b),tt=i.get(v);b.addEventListener("dispose",T);const it=b.textures,K=b.isWebGLCubeRenderTarget===!0,Rt=it.length>1;if(Rt||(tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture()),tt.__version=v.version,a.memory.textures++),K){F.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[dt]=[];for(let Mt=0;Mt<v.mipmaps.length;Mt++)F.__webglFramebuffer[dt][Mt]=n.createFramebuffer()}else F.__webglFramebuffer[dt]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let dt=0;dt<v.mipmaps.length;dt++)F.__webglFramebuffer[dt]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Rt)for(let dt=0,Mt=it.length;dt<Mt;dt++){const ae=i.get(it[dt]);ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture(),a.memory.textures++)}if(b.samples>0&&kt(b)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let dt=0;dt<it.length;dt++){const Mt=it[dt];F.__webglColorRenderbuffer[dt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[dt]);const ae=s.convert(Mt.format,Mt.colorSpace),ct=s.convert(Mt.type),St=E(Mt.internalFormat,ae,ct,Mt.colorSpace,b.isXRRenderTarget===!0),Nt=bt(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt,St,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,F.__webglColorRenderbuffer[dt])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),rt(F.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),Vt(n.TEXTURE_CUBE_MAP,v);for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0)for(let Mt=0;Mt<v.mipmaps.length;Mt++)lt(F.__webglFramebuffer[dt][Mt],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Mt);else lt(F.__webglFramebuffer[dt],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(v)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let dt=0,Mt=it.length;dt<Mt;dt++){const ae=it[dt],ct=i.get(ae);e.bindTexture(n.TEXTURE_2D,ct.__webglTexture),Vt(n.TEXTURE_2D,ae),lt(F.__webglFramebuffer,b,ae,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,0),m(ae)&&d(n.TEXTURE_2D)}e.unbindTexture()}else{let dt=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(dt=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(dt,tt.__webglTexture),Vt(dt,v),v.mipmaps&&v.mipmaps.length>0)for(let Mt=0;Mt<v.mipmaps.length;Mt++)lt(F.__webglFramebuffer[Mt],b,v,n.COLOR_ATTACHMENT0,dt,Mt);else lt(F.__webglFramebuffer,b,v,n.COLOR_ATTACHMENT0,dt,0);m(v)&&d(dt),e.unbindTexture()}b.depthBuffer&&Pt(b)}function Wt(b){const v=b.textures;for(let F=0,tt=v.length;F<tt;F++){const it=v[F];if(m(it)){const K=A(b),Rt=i.get(it).__webglTexture;e.bindTexture(K,Rt),d(K),e.unbindTexture()}}}const Zt=[],C=[];function We(b){if(b.samples>0){if(kt(b)===!1){const v=b.textures,F=b.width,tt=b.height;let it=n.COLOR_BUFFER_BIT;const K=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Rt=i.get(b),dt=v.length>1;if(dt)for(let Mt=0;Mt<v.length;Mt++)e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Mt=0;Mt<v.length;Mt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(it|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(it|=n.STENCIL_BUFFER_BIT)),dt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Rt.__webglColorRenderbuffer[Mt]);const ae=i.get(v[Mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ae,0)}n.blitFramebuffer(0,0,F,tt,0,0,F,tt,it,n.NEAREST),l===!0&&(Zt.length=0,C.length=0,Zt.push(n.COLOR_ATTACHMENT0+Mt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Zt.push(K),C.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,C)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Zt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),dt)for(let Mt=0;Mt<v.length;Mt++){e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,Rt.__webglColorRenderbuffer[Mt]);const ae=i.get(v[Mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,ae,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const v=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function bt(b){return Math.min(r.maxSamples,b.samples)}function kt(b){const v=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function wt(b){const v=a.render.frame;c.get(b)!==v&&(c.set(b,v),b.update())}function de(b,v){const F=b.colorSpace,tt=b.format,it=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==Ts&&F!==Hi&&(he.getTransfer(F)===Me?(tt!==Qn||it!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function Tt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=V,this.resetTextureUnits=j,this.setTexture2D=Q,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=G,this.rebindTextures=ht,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=kt}function lM(n,t){function e(i,r=Hi){let s;const a=he.getTransfer(r);if(i===Di)return n.UNSIGNED_BYTE;if(i===Jc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Qc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===zf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Bf)return n.BYTE;if(i===kf)return n.SHORT;if(i===ia)return n.UNSIGNED_SHORT;if(i===$c)return n.INT;if(i===Dr)return n.UNSIGNED_INT;if(i===wi)return n.FLOAT;if(i===ga)return n.HALF_FLOAT;if(i===Hf)return n.ALPHA;if(i===Gf)return n.RGB;if(i===Qn)return n.RGBA;if(i===Vf)return n.LUMINANCE;if(i===Wf)return n.LUMINANCE_ALPHA;if(i===sa)return n.DEPTH_COMPONENT;if(i===aa)return n.DEPTH_STENCIL;if(i===Xf)return n.RED;if(i===tu)return n.RED_INTEGER;if(i===Yf)return n.RG;if(i===eu)return n.RG_INTEGER;if(i===nu)return n.RGBA_INTEGER;if(i===lo||i===co||i===uo||i===ho)if(a===Me)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===lo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===lo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===co)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===uo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ho)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ic||i===rc||i===sc||i===ac)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ic)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===rc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ac)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===oc||i===lc||i===cc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===oc||i===lc)return a===Me?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===cc)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===uc||i===hc||i===fc||i===dc||i===pc||i===mc||i===_c||i===gc||i===vc||i===xc||i===Mc||i===Sc||i===yc||i===Ec)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===uc)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hc)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fc)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dc)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pc)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mc)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_c)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gc)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vc)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xc)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mc)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sc)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yc)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ec)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fo||i===bc||i===Tc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===fo)return a===Me?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qf||i===Ac||i===wc||i===Rc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===fo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ac)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ra?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const cM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class hM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new vn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new di({vertexShader:cM,fragmentShader:uM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ti(new Ea(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fM extends Fr{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,_=null;const g=new hM,m=e.getContextAttributes();let d=null,A=null;const E=[],M=[],R=new ee;let w=null;const T=new Rn;T.viewport=new De;const P=new Rn;P.viewport=new De;const y=[T,P],x=new D_;let D=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Y=E[k];return Y===void 0&&(Y=new vl,E[k]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(k){let Y=E[k];return Y===void 0&&(Y=new vl,E[k]=Y),Y.getGripSpace()},this.getHand=function(k){let Y=E[k];return Y===void 0&&(Y=new vl,E[k]=Y),Y.getHandSpace()};function V(k){const Y=M.indexOf(k.inputSource);if(Y===-1)return;const lt=E[Y];lt!==void 0&&(lt.update(k.inputSource,k.frame,u||a),lt.dispatchEvent({type:k.type,data:k.inputSource}))}function J(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",Q);for(let k=0;k<E.length;k++){const Y=M[k];Y!==null&&(M[k]=null,E[k].disconnect(Y))}D=null,j=null,g.reset(),t.setRenderTarget(d),p=null,h=null,f=null,r=null,A=null,$.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(k){u=k},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(d=t.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",J),r.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(R),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,rt=null,pt=null;m.depth&&(pt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=m.stencil?aa:sa,rt=m.stencil?ra:Dr);const Pt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:s};f=new XRWebGLBinding(r,e),h=f.createProjectionLayer(Pt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),A=new Lr(h.textureWidth,h.textureHeight,{format:Qn,type:Di,depthTexture:new sd(h.textureWidth,h.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const lt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,lt),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new Lr(p.framebufferWidth,p.framebufferHeight,{format:Qn,type:Di,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),$.setContext(r),$.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Q(k){for(let Y=0;Y<k.removed.length;Y++){const lt=k.removed[Y],rt=M.indexOf(lt);rt>=0&&(M[rt]=null,E[rt].disconnect(lt))}for(let Y=0;Y<k.added.length;Y++){const lt=k.added[Y];let rt=M.indexOf(lt);if(rt===-1){for(let Pt=0;Pt<E.length;Pt++)if(Pt>=M.length){M.push(lt),rt=Pt;break}else if(M[Pt]===null){M[Pt]=lt,rt=Pt;break}if(rt===-1)break}const pt=E[rt];pt&&pt.connect(lt)}}const X=new B,Z=new B;function G(k,Y,lt){X.setFromMatrixPosition(Y.matrixWorld),Z.setFromMatrixPosition(lt.matrixWorld);const rt=X.distanceTo(Z),pt=Y.projectionMatrix.elements,Pt=lt.projectionMatrix.elements,ht=pt[14]/(pt[10]-1),Ft=pt[14]/(pt[10]+1),Wt=(pt[9]+1)/pt[5],Zt=(pt[9]-1)/pt[5],C=(pt[8]-1)/pt[0],We=(Pt[8]+1)/Pt[0],bt=ht*C,kt=ht*We,wt=rt/(-C+We),de=wt*-C;if(Y.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(de),k.translateZ(wt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),pt[10]===-1)k.projectionMatrix.copy(Y.projectionMatrix),k.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const Tt=ht+wt,b=Ft+wt,v=bt-de,F=kt+(rt-de),tt=Wt*Ft/b*Tt,it=Zt*Ft/b*Tt;k.projectionMatrix.makePerspective(v,F,tt,it,Tt,b),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function st(k,Y){Y===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Y.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;let Y=k.near,lt=k.far;g.texture!==null&&(g.depthNear>0&&(Y=g.depthNear),g.depthFar>0&&(lt=g.depthFar)),x.near=P.near=T.near=Y,x.far=P.far=T.far=lt,(D!==x.near||j!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),D=x.near,j=x.far),T.layers.mask=k.layers.mask|2,P.layers.mask=k.layers.mask|4,x.layers.mask=T.layers.mask|P.layers.mask;const rt=k.parent,pt=x.cameras;st(x,rt);for(let Pt=0;Pt<pt.length;Pt++)st(pt[Pt],rt);pt.length===2?G(x,T,P):x.projectionMatrix.copy(T.projectionMatrix),ft(k,x,rt)};function ft(k,Y,lt){lt===null?k.matrix.copy(Y.matrixWorld):(k.matrix.copy(lt.matrixWorld),k.matrix.invert(),k.matrix.multiply(Y.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(Y.projectionMatrix),k.projectionMatrixInverse.copy(Y.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Cc*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(k){l=k,h!==null&&(h.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let Ct=null;function Vt(k,Y){if(c=Y.getViewerPose(u||a),_=Y,c!==null){const lt=c.views;p!==null&&(t.setRenderTargetFramebuffer(A,p.framebuffer),t.setRenderTarget(A));let rt=!1;lt.length!==x.cameras.length&&(x.cameras.length=0,rt=!0);for(let ht=0;ht<lt.length;ht++){const Ft=lt[ht];let Wt=null;if(p!==null)Wt=p.getViewport(Ft);else{const C=f.getViewSubImage(h,Ft);Wt=C.viewport,ht===0&&(t.setRenderTargetTextures(A,C.colorTexture,C.depthStencilTexture),t.setRenderTarget(A))}let Zt=y[ht];Zt===void 0&&(Zt=new Rn,Zt.layers.enable(ht),Zt.viewport=new De,y[ht]=Zt),Zt.matrix.fromArray(Ft.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(Ft.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),ht===0&&(x.matrix.copy(Zt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),rt===!0&&x.cameras.push(Zt)}const pt=r.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const ht=f.getDepthInformation(lt[0]);ht&&ht.isValid&&ht.texture&&g.init(t,ht,r.renderState)}}for(let lt=0;lt<E.length;lt++){const rt=M[lt],pt=E[lt];rt!==null&&pt!==void 0&&pt.update(rt,Y,u||a)}Ct&&Ct(k,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),_=null}const $=new ad;$.setAnimationLoop(Vt),this.setAnimationLoop=function(k){Ct=k},this.dispose=function(){}}}const hr=new Li,dM=new Ae;function pM(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,td(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,A,E,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),g(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,A,E):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===gn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===gn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const A=t.get(d),E=A.envMap,M=A.envMapRotation;E&&(m.envMap.value=E,hr.copy(M),hr.x*=-1,hr.y*=-1,hr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),m.envMapRotation.value.setFromMatrix4(dM.makeRotationFromEuler(hr)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,A,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=E*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===gn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){const A=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function mM(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,E){const M=E.program;i.uniformBlockBinding(A,M)}function u(A,E){let M=r[A.id];M===void 0&&(_(A),M=c(A),r[A.id]=M,A.addEventListener("dispose",m));const R=E.program;i.updateUBOMapping(A,R);const w=t.render.frame;s[A.id]!==w&&(h(A),s[A.id]=w)}function c(A){const E=f();A.__bindingPointIndex=E;const M=n.createBuffer(),R=A.__size,w=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,R,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,M),M}function f(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const E=r[A.id],M=A.uniforms,R=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let w=0,T=M.length;w<T;w++){const P=Array.isArray(M[w])?M[w]:[M[w]];for(let y=0,x=P.length;y<x;y++){const D=P[y];if(p(D,w,y,R)===!0){const j=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let J=0;for(let Q=0;Q<V.length;Q++){const X=V[Q],Z=g(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,j+J,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,J),J+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,j,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(A,E,M,R){const w=A.value,T=E+"_"+M;if(R[T]===void 0)return typeof w=="number"||typeof w=="boolean"?R[T]=w:R[T]=w.clone(),!0;{const P=R[T];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return R[T]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function _(A){const E=A.uniforms;let M=0;const R=16;for(let T=0,P=E.length;T<P;T++){const y=Array.isArray(E[T])?E[T]:[E[T]];for(let x=0,D=y.length;x<D;x++){const j=y[x],V=Array.isArray(j.value)?j.value:[j.value];for(let J=0,Q=V.length;J<Q;J++){const X=V[J],Z=g(X),G=M%R,st=G%Z.boundary,ft=G+st;M+=st,ft!==0&&R-ft<Z.storage&&(M+=R-ft),j.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=M,M+=Z.storage}}}const w=M%R;return w>0&&(M+=R-w),A.__size=M,A.__cache={},this}function g(A){const E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function m(A){const E=A.target;E.removeEventListener("dispose",m);const M=a.indexOf(E.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function d(){for(const A in r)n.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:l,update:u,dispose:d}}class _M{constructor(t={}){const{canvas:e=Jm(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,d=null;const A=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let R=!1;this._outputColorSpace=Bn;let w=0,T=0,P=null,y=-1,x=null;const D=new De,j=new De;let V=null;const J=new fe(0);let Q=0,X=e.width,Z=e.height,G=1,st=null,ft=null;const Ct=new De(0,0,X,Z),Vt=new De(0,0,X,Z);let $=!1;const k=new id;let Y=!1,lt=!1;const rt=new Ae,pt=new Ae,Pt=new B,ht=new De,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function Zt(){return P===null?G:1}let C=i;function We(S,I){return e.getContext(S,I)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Zc}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),C===null){const I="webgl2";if(C=We(I,S),C===null)throw We(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let bt,kt,wt,de,Tt,b,v,F,tt,it,K,Rt,dt,Mt,ae,ct,St,Nt,Ot,yt,ne,qt,ve,U;function _t(){bt=new A0(C),bt.init(),qt=new lM(C,bt),kt=new x0(C,bt,t,qt),wt=new aM(C,bt),kt.reverseDepthBuffer&&h&&wt.buffers.depth.setReversed(!0),de=new C0(C),Tt=new qx,b=new oM(C,bt,wt,Tt,kt,qt,de),v=new S0(M),F=new T0(M),tt=new N_(C),ve=new g0(C,tt),it=new w0(C,tt,de,ve),K=new D0(C,it,tt,de),Ot=new P0(C,kt,b),ct=new M0(Tt),Rt=new Yx(M,v,F,bt,kt,ve,ct),dt=new pM(M,Tt),Mt=new Kx,ae=new eM(bt),Nt=new _0(M,v,F,wt,K,p,l),St=new rM(M,K,kt),U=new mM(C,de,kt,wt),yt=new v0(C,bt,de),ne=new R0(C,bt,de),de.programs=Rt.programs,M.capabilities=kt,M.extensions=bt,M.properties=Tt,M.renderLists=Mt,M.shadowMap=St,M.state=wt,M.info=de}_t();const q=new fM(M,C);this.xr=q,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const S=bt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=bt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(S){S!==void 0&&(G=S,this.setSize(X,Z,!1))},this.getSize=function(S){return S.set(X,Z)},this.setSize=function(S,I,H=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=S,Z=I,e.width=Math.floor(S*G),e.height=Math.floor(I*G),H===!0&&(e.style.width=S+"px",e.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(X*G,Z*G).floor()},this.setDrawingBufferSize=function(S,I,H){X=S,Z=I,G=H,e.width=Math.floor(S*H),e.height=Math.floor(I*H),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(D)},this.getViewport=function(S){return S.copy(Ct)},this.setViewport=function(S,I,H,z){S.isVector4?Ct.set(S.x,S.y,S.z,S.w):Ct.set(S,I,H,z),wt.viewport(D.copy(Ct).multiplyScalar(G).round())},this.getScissor=function(S){return S.copy(Vt)},this.setScissor=function(S,I,H,z){S.isVector4?Vt.set(S.x,S.y,S.z,S.w):Vt.set(S,I,H,z),wt.scissor(j.copy(Vt).multiplyScalar(G).round())},this.getScissorTest=function(){return $},this.setScissorTest=function(S){wt.setScissorTest($=S)},this.setOpaqueSort=function(S){st=S},this.setTransparentSort=function(S){ft=S},this.getClearColor=function(S){return S.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(S=!0,I=!0,H=!0){let z=0;if(S){let N=!1;if(P!==null){const ot=P.texture.format;N=ot===nu||ot===eu||ot===tu}if(N){const ot=P.texture.type,xt=ot===Di||ot===Dr||ot===ia||ot===ra||ot===Jc||ot===Qc,Et=Nt.getClearColor(),At=Nt.getClearAlpha(),Gt=Et.r,Ht=Et.g,Ut=Et.b;xt?(_[0]=Gt,_[1]=Ht,_[2]=Ut,_[3]=At,C.clearBufferuiv(C.COLOR,0,_)):(g[0]=Gt,g[1]=Ht,g[2]=Ut,g[3]=At,C.clearBufferiv(C.COLOR,0,g))}else z|=C.COLOR_BUFFER_BIT}I&&(z|=C.DEPTH_BUFFER_BIT),H&&(z|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),Nt.dispose(),Mt.dispose(),ae.dispose(),Tt.dispose(),v.dispose(),F.dispose(),K.dispose(),ve.dispose(),U.dispose(),Rt.dispose(),q.dispose(),q.removeEventListener("sessionstart",ba),q.removeEventListener("sessionend",Ls),mi.stop()};function et(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const S=de.autoReset,I=St.enabled,H=St.autoUpdate,z=St.needsUpdate,N=St.type;_t(),de.autoReset=S,St.enabled=I,St.autoUpdate=H,St.needsUpdate=z,St.type=N}function gt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Xt(S){const I=S.target;I.removeEventListener("dispose",Xt),Ee(I)}function Ee(S){Oe(S),Tt.remove(S)}function Oe(S){const I=Tt.get(S).programs;I!==void 0&&(I.forEach(function(H){Rt.releaseProgram(H)}),S.isShaderMaterial&&Rt.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,H,z,N,ot){I===null&&(I=Ft);const xt=N.isMesh&&N.matrixWorld.determinant()<0,Et=xe(S,I,H,z,N);wt.setMaterial(z,xt);let At=H.index,Gt=1;if(z.wireframe===!0){if(At=it.getWireframeAttribute(H),At===void 0)return;Gt=2}const Ht=H.drawRange,Ut=H.attributes.position;let oe=Ht.start*Gt,pe=(Ht.start+Ht.count)*Gt;ot!==null&&(oe=Math.max(oe,ot.start*Gt),pe=Math.min(pe,(ot.start+ot.count)*Gt)),At!==null?(oe=Math.max(oe,0),pe=Math.min(pe,At.count)):Ut!=null&&(oe=Math.max(oe,0),pe=Math.min(pe,Ut.count));const Ue=pe-oe;if(Ue<0||Ue===1/0)return;ve.setup(N,z,Et,H,At);let we,ce=yt;if(At!==null&&(we=tt.get(At),ce=ne,ce.setIndex(we)),N.isMesh)z.wireframe===!0?(wt.setLineWidth(z.wireframeLinewidth*Zt()),ce.setMode(C.LINES)):ce.setMode(C.TRIANGLES);else if(N.isLine){let It=z.linewidth;It===void 0&&(It=1),wt.setLineWidth(It*Zt()),N.isLineSegments?ce.setMode(C.LINES):N.isLineLoop?ce.setMode(C.LINE_LOOP):ce.setMode(C.LINE_STRIP)}else N.isPoints?ce.setMode(C.POINTS):N.isSprite&&ce.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)mo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ce.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(bt.get("WEBGL_multi_draw"))ce.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const It=N._multiDrawStarts,Ke=N._multiDrawCounts,me=N._multiDrawCount,Vn=At?tt.get(At).bytesPerElement:1,kr=Tt.get(z).currentProgram.getUniforms();for(let Sn=0;Sn<me;Sn++)kr.setValue(C,"_gl_DrawID",Sn),ce.render(It[Sn]/Vn,Ke[Sn])}else if(N.isInstancedMesh)ce.renderInstances(oe,Ue,N.count);else if(H.isInstancedBufferGeometry){const It=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ke=Math.min(H.instanceCount,It);ce.renderInstances(oe,Ue,Ke)}else ce.render(oe,Ue)};function le(S,I,H){S.transparent===!0&&S.side===oi&&S.forceSinglePass===!1?(S.side=gn,S.needsUpdate=!0,ut(S,I,H),S.side=tr,S.needsUpdate=!0,ut(S,I,H),S.side=oi):ut(S,I,H)}this.compile=function(S,I,H=null){H===null&&(H=S),d=ae.get(H),d.init(I),E.push(d),H.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),S!==H&&S.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();const z=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ot=N.material;if(ot)if(Array.isArray(ot))for(let xt=0;xt<ot.length;xt++){const Et=ot[xt];le(Et,H,N),z.add(Et)}else le(ot,H,N),z.add(ot)}),d=E.pop(),z},this.compileAsync=function(S,I,H=null){const z=this.compile(S,I,H);return new Promise(N=>{function ot(){if(z.forEach(function(xt){Tt.get(xt).currentProgram.isReady()&&z.delete(xt)}),z.size===0){N(S);return}setTimeout(ot,10)}bt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let xn=null;function Cn(S){xn&&xn(S)}function ba(){mi.stop()}function Ls(){mi.start()}const mi=new ad;mi.setAnimationLoop(Cn),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(S){xn=S,q.setAnimationLoop(S),S===null?mi.stop():mi.start()},q.addEventListener("sessionstart",ba),q.addEventListener("sessionend",Ls),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(I),I=q.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,I,P),d=ae.get(S,E.length),d.init(I),E.push(d),pt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),k.setFromProjectionMatrix(pt),lt=this.localClippingEnabled,Y=ct.init(this.clippingPlanes,lt),m=Mt.get(S,A.length),m.init(),A.push(m),q.enabled===!0&&q.isPresenting===!0){const ot=M.xr.getDepthSensingMesh();ot!==null&&Or(ot,I,-1/0,M.sortObjects)}Or(S,I,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(st,ft),Wt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Wt&&Nt.addToRenderList(m,S),this.info.render.frame++,Y===!0&&ct.beginShadows();const H=d.state.shadowsArray;St.render(H,S,I),Y===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,N=m.transmissive;if(d.setupLights(),I.isArrayCamera){const ot=I.cameras;if(N.length>0)for(let xt=0,Et=ot.length;xt<Et;xt++){const At=ot[xt];Us(z,N,S,At)}Wt&&Nt.render(S);for(let xt=0,Et=ot.length;xt<Et;xt++){const At=ot[xt];Ta(m,S,At,At.viewport)}}else N.length>0&&Us(z,N,S,I),Wt&&Nt.render(S),Ta(m,S,I);P!==null&&T===0&&(b.updateMultisampleRenderTarget(P),b.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(M,S,I),ve.resetDefaultState(),y=-1,x=null,E.pop(),E.length>0?(d=E[E.length-1],Y===!0&&ct.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Or(S,I,H,z){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||k.intersectsSprite(S)){z&&ht.setFromMatrixPosition(S.matrixWorld).applyMatrix4(pt);const xt=K.update(S),Et=S.material;Et.visible&&m.push(S,xt,Et,H,ht.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||k.intersectsObject(S))){const xt=K.update(S),Et=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ht.copy(S.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),ht.copy(xt.boundingSphere.center)),ht.applyMatrix4(S.matrixWorld).applyMatrix4(pt)),Array.isArray(Et)){const At=xt.groups;for(let Gt=0,Ht=At.length;Gt<Ht;Gt++){const Ut=At[Gt],oe=Et[Ut.materialIndex];oe&&oe.visible&&m.push(S,xt,oe,H,ht.z,Ut)}}else Et.visible&&m.push(S,xt,Et,H,ht.z,null)}}const ot=S.children;for(let xt=0,Et=ot.length;xt<Et;xt++)Or(ot[xt],I,H,z)}function Ta(S,I,H,z){const N=S.opaque,ot=S.transmissive,xt=S.transparent;d.setupLightsView(H),Y===!0&&ct.setGlobalState(M.clippingPlanes,H),z&&wt.viewport(D.copy(z)),N.length>0&&Br(N,I,H),ot.length>0&&Br(ot,I,H),xt.length>0&&Br(xt,I,H),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function Us(S,I,H,z){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[z.id]===void 0&&(d.state.transmissionRenderTarget[z.id]=new Lr(1,1,{generateMipmaps:!0,type:bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float")?ga:Di,minFilter:xr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const ot=d.state.transmissionRenderTarget[z.id],xt=z.viewport||D;ot.setSize(xt.z*M.transmissionResolutionScale,xt.w*M.transmissionResolutionScale);const Et=M.getRenderTarget();M.setRenderTarget(ot),M.getClearColor(J),Q=M.getClearAlpha(),Q<1&&M.setClearColor(16777215,.5),M.clear(),Wt&&Nt.render(H);const At=M.toneMapping;M.toneMapping=Zi;const Gt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),d.setupLightsView(z),Y===!0&&ct.setGlobalState(M.clippingPlanes,z),Br(S,H,z),b.updateMultisampleRenderTarget(ot),b.updateRenderTargetMipmap(ot),bt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Ut=0,oe=I.length;Ut<oe;Ut++){const pe=I[Ut],Ue=pe.object,we=pe.geometry,ce=pe.material,It=pe.group;if(ce.side===oi&&Ue.layers.test(z.layers)){const Ke=ce.side;ce.side=gn,ce.needsUpdate=!0,Aa(Ue,H,z,we,ce,It),ce.side=Ke,ce.needsUpdate=!0,Ht=!0}}Ht===!0&&(b.updateMultisampleRenderTarget(ot),b.updateRenderTargetMipmap(ot))}M.setRenderTarget(Et),M.setClearColor(J,Q),Gt!==void 0&&(z.viewport=Gt),M.toneMapping=At}function Br(S,I,H){const z=I.isScene===!0?I.overrideMaterial:null;for(let N=0,ot=S.length;N<ot;N++){const xt=S[N],Et=xt.object,At=xt.geometry,Gt=xt.group;let Ht=xt.material;Ht.allowOverride===!0&&z!==null&&(Ht=z),Et.layers.test(H.layers)&&Aa(Et,I,H,At,Ht,Gt)}}function Aa(S,I,H,z,N,ot){S.onBeforeRender(M,I,H,z,N,ot),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(M,I,H,z,S,ot),N.transparent===!0&&N.side===oi&&N.forceSinglePass===!1?(N.side=gn,N.needsUpdate=!0,M.renderBufferDirect(H,I,z,N,S,ot),N.side=tr,N.needsUpdate=!0,M.renderBufferDirect(H,I,z,N,S,ot),N.side=oi):M.renderBufferDirect(H,I,z,N,S,ot),S.onAfterRender(M,I,H,z,N,ot)}function ut(S,I,H){I.isScene!==!0&&(I=Ft);const z=Tt.get(S),N=d.state.lights,ot=d.state.shadowsArray,xt=N.state.version,Et=Rt.getParameters(S,N.state,ot,I,H),At=Rt.getProgramCacheKey(Et);let Gt=z.programs;z.environment=S.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(S.isMeshStandardMaterial?F:v).get(S.envMap||z.environment),z.envMapRotation=z.environment!==null&&S.envMap===null?I.environmentRotation:S.envMapRotation,Gt===void 0&&(S.addEventListener("dispose",Xt),Gt=new Map,z.programs=Gt);let Ht=Gt.get(At);if(Ht!==void 0){if(z.currentProgram===Ht&&z.lightsStateVersion===xt)return jt(S,Et),Ht}else Et.uniforms=Rt.getUniforms(S),S.onBeforeCompile(Et,M),Ht=Rt.acquireProgram(Et,At),Gt.set(At,Ht),z.uniforms=Et.uniforms;const Ut=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ut.clippingPlanes=ct.uniform),jt(S,Et),z.needsLights=ye(S),z.lightsStateVersion=xt,z.needsLights&&(Ut.ambientLightColor.value=N.state.ambient,Ut.lightProbe.value=N.state.probe,Ut.directionalLights.value=N.state.directional,Ut.directionalLightShadows.value=N.state.directionalShadow,Ut.spotLights.value=N.state.spot,Ut.spotLightShadows.value=N.state.spotShadow,Ut.rectAreaLights.value=N.state.rectArea,Ut.ltc_1.value=N.state.rectAreaLTC1,Ut.ltc_2.value=N.state.rectAreaLTC2,Ut.pointLights.value=N.state.point,Ut.pointLightShadows.value=N.state.pointShadow,Ut.hemisphereLights.value=N.state.hemi,Ut.directionalShadowMap.value=N.state.directionalShadowMap,Ut.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ut.spotShadowMap.value=N.state.spotShadowMap,Ut.spotLightMatrix.value=N.state.spotLightMatrix,Ut.spotLightMap.value=N.state.spotLightMap,Ut.pointShadowMap.value=N.state.pointShadowMap,Ut.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Ht,z.uniformsList=null,Ht}function zt(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=_o.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function jt(S,I){const H=Tt.get(S);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.batchingColor=I.batchingColor,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function xe(S,I,H,z,N){I.isScene!==!0&&(I=Ft),b.resetTextureUnits();const ot=I.fog,xt=z.isMeshStandardMaterial?I.environment:null,Et=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ts,At=(z.isMeshStandardMaterial?F:v).get(z.envMap||xt),Gt=z.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ht=!!H.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ut=!!H.morphAttributes.position,oe=!!H.morphAttributes.normal,pe=!!H.morphAttributes.color;let Ue=Zi;z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ue=M.toneMapping);const we=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ce=we!==void 0?we.length:0,It=Tt.get(z),Ke=d.state.lights;if(Y===!0&&(lt===!0||S!==x)){const tn=S===x&&z.id===y;ct.setState(z,S,tn)}let me=!1;z.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Ke.state.version||It.outputColorSpace!==Et||N.isBatchedMesh&&It.batching===!1||!N.isBatchedMesh&&It.batching===!0||N.isBatchedMesh&&It.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&It.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&It.instancing===!1||!N.isInstancedMesh&&It.instancing===!0||N.isSkinnedMesh&&It.skinning===!1||!N.isSkinnedMesh&&It.skinning===!0||N.isInstancedMesh&&It.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&It.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&It.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&It.instancingMorph===!1&&N.morphTexture!==null||It.envMap!==At||z.fog===!0&&It.fog!==ot||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==ct.numPlanes||It.numIntersection!==ct.numIntersection)||It.vertexAlphas!==Gt||It.vertexTangents!==Ht||It.morphTargets!==Ut||It.morphNormals!==oe||It.morphColors!==pe||It.toneMapping!==Ue||It.morphTargetsCount!==ce)&&(me=!0):(me=!0,It.__version=z.version);let Vn=It.currentProgram;me===!0&&(Vn=ut(z,I,N));let kr=!1,Sn=!1,Is=!1;const be=Vn.getUniforms(),Pn=It.uniforms;if(wt.useProgram(Vn.program)&&(kr=!0,Sn=!0,Is=!0),z.id!==y&&(y=z.id,Sn=!0),kr||x!==S){wt.buffers.depth.getReversed()?(rt.copy(S.projectionMatrix),t_(rt),e_(rt),be.setValue(C,"projectionMatrix",rt)):be.setValue(C,"projectionMatrix",S.projectionMatrix),be.setValue(C,"viewMatrix",S.matrixWorldInverse);const cn=be.map.cameraPosition;cn!==void 0&&cn.setValue(C,Pt.setFromMatrixPosition(S.matrixWorld)),kt.logarithmicDepthBuffer&&be.setValue(C,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&be.setValue(C,"isOrthographic",S.isOrthographicCamera===!0),x!==S&&(x=S,Sn=!0,Is=!0)}if(N.isSkinnedMesh){be.setOptional(C,N,"bindMatrix"),be.setOptional(C,N,"bindMatrixInverse");const tn=N.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),be.setValue(C,"boneTexture",tn.boneTexture,b))}N.isBatchedMesh&&(be.setOptional(C,N,"batchingTexture"),be.setValue(C,"batchingTexture",N._matricesTexture,b),be.setOptional(C,N,"batchingIdTexture"),be.setValue(C,"batchingIdTexture",N._indirectTexture,b),be.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&be.setValue(C,"batchingColorTexture",N._colorsTexture,b));const Dn=H.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&Ot.update(N,H,Vn),(Sn||It.receiveShadow!==N.receiveShadow)&&(It.receiveShadow=N.receiveShadow,be.setValue(C,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Pn.envMap.value=At,Pn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&I.environment!==null&&(Pn.envMapIntensity.value=I.environmentIntensity),Sn&&(be.setValue(C,"toneMappingExposure",M.toneMappingExposure),It.needsLights&&Le(Pn,Is),ot&&z.fog===!0&&dt.refreshFogUniforms(Pn,ot),dt.refreshMaterialUniforms(Pn,z,G,Z,d.state.transmissionRenderTarget[S.id]),_o.upload(C,zt(It),Pn,b)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(_o.upload(C,zt(It),Pn,b),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&be.setValue(C,"center",N.center),be.setValue(C,"modelViewMatrix",N.modelViewMatrix),be.setValue(C,"normalMatrix",N.normalMatrix),be.setValue(C,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const tn=z.uniformsGroups;for(let cn=0,Vo=tn.length;cn<Vo;cn++){const rr=tn[cn];U.update(rr,Vn),U.bind(rr,Vn)}}return Vn}function Le(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function ye(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,I,H){const z=Tt.get(S);z.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Tt.get(S.texture).__webglTexture=I,Tt.get(S.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:H,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,I){const H=Tt.get(S);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0};const Mn=C.createFramebuffer();this.setRenderTarget=function(S,I=0,H=0){P=S,w=I,T=H;let z=!0,N=null,ot=!1,xt=!1;if(S){const At=Tt.get(S);if(At.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(C.FRAMEBUFFER,null),z=!1;else if(At.__webglFramebuffer===void 0)b.setupRenderTarget(S);else if(At.__hasExternalTextures)b.rebindTextures(S,Tt.get(S.texture).__webglTexture,Tt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ut=S.depthTexture;if(At.__boundDepthTexture!==Ut){if(Ut!==null&&Tt.has(Ut)&&(S.width!==Ut.image.width||S.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(S)}}const Gt=S.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(xt=!0);const Ht=Tt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ht[I])?N=Ht[I][H]:N=Ht[I],ot=!0):S.samples>0&&b.useMultisampledRTT(S)===!1?N=Tt.get(S).__webglMultisampledFramebuffer:Array.isArray(Ht)?N=Ht[H]:N=Ht,D.copy(S.viewport),j.copy(S.scissor),V=S.scissorTest}else D.copy(Ct).multiplyScalar(G).floor(),j.copy(Vt).multiplyScalar(G).floor(),V=$;if(H!==0&&(N=Mn),wt.bindFramebuffer(C.FRAMEBUFFER,N)&&z&&wt.drawBuffers(S,N),wt.viewport(D),wt.scissor(j),wt.setScissorTest(V),ot){const At=Tt.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+I,At.__webglTexture,H)}else if(xt){const At=Tt.get(S.texture),Gt=I;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,At.__webglTexture,H,Gt)}else if(S!==null&&H!==0){const At=Tt.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,At.__webglTexture,H)}y=-1},this.readRenderTargetPixels=function(S,I,H,z,N,ot,xt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Tt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xt!==void 0&&(Et=Et[xt]),Et){wt.bindFramebuffer(C.FRAMEBUFFER,Et);try{const At=S.texture,Gt=At.format,Ht=At.type;if(!kt.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-z&&H>=0&&H<=S.height-N&&C.readPixels(I,H,z,N,qt.convert(Gt),qt.convert(Ht),ot)}finally{const At=P!==null?Tt.get(P).__webglFramebuffer:null;wt.bindFramebuffer(C.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(S,I,H,z,N,ot,xt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Tt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xt!==void 0&&(Et=Et[xt]),Et)if(I>=0&&I<=S.width-z&&H>=0&&H<=S.height-N){wt.bindFramebuffer(C.FRAMEBUFFER,Et);const At=S.texture,Gt=At.format,Ht=At.type;if(!kt.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ut=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ut),C.bufferData(C.PIXEL_PACK_BUFFER,ot.byteLength,C.STREAM_READ),C.readPixels(I,H,z,N,qt.convert(Gt),qt.convert(Ht),0);const oe=P!==null?Tt.get(P).__webglFramebuffer:null;wt.bindFramebuffer(C.FRAMEBUFFER,oe);const pe=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Qm(C,pe,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ut),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ot),C.deleteBuffer(Ut),C.deleteSync(pe),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,I=null,H=0){const z=Math.pow(2,-H),N=Math.floor(S.image.width*z),ot=Math.floor(S.image.height*z),xt=I!==null?I.x:0,Et=I!==null?I.y:0;b.setTexture2D(S,0),C.copyTexSubImage2D(C.TEXTURE_2D,H,0,0,xt,Et,N,ot),wt.unbindTexture()};const ii=C.createFramebuffer(),ir=C.createFramebuffer();this.copyTextureToTexture=function(S,I,H=null,z=null,N=0,ot=null){ot===null&&(N!==0?(mo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ot=N,N=0):ot=0);let xt,Et,At,Gt,Ht,Ut,oe,pe,Ue;const we=S.isCompressedTexture?S.mipmaps[ot]:S.image;if(H!==null)xt=H.max.x-H.min.x,Et=H.max.y-H.min.y,At=H.isBox3?H.max.z-H.min.z:1,Gt=H.min.x,Ht=H.min.y,Ut=H.isBox3?H.min.z:0;else{const Dn=Math.pow(2,-N);xt=Math.floor(we.width*Dn),Et=Math.floor(we.height*Dn),S.isDataArrayTexture?At=we.depth:S.isData3DTexture?At=Math.floor(we.depth*Dn):At=1,Gt=0,Ht=0,Ut=0}z!==null?(oe=z.x,pe=z.y,Ue=z.z):(oe=0,pe=0,Ue=0);const ce=qt.convert(I.format),It=qt.convert(I.type);let Ke;I.isData3DTexture?(b.setTexture3D(I,0),Ke=C.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(b.setTexture2DArray(I,0),Ke=C.TEXTURE_2D_ARRAY):(b.setTexture2D(I,0),Ke=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,I.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,I.unpackAlignment);const me=C.getParameter(C.UNPACK_ROW_LENGTH),Vn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),kr=C.getParameter(C.UNPACK_SKIP_PIXELS),Sn=C.getParameter(C.UNPACK_SKIP_ROWS),Is=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,we.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,we.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Gt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ht),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ut);const be=S.isDataArrayTexture||S.isData3DTexture,Pn=I.isDataArrayTexture||I.isData3DTexture;if(S.isDepthTexture){const Dn=Tt.get(S),tn=Tt.get(I),cn=Tt.get(Dn.__renderTarget),Vo=Tt.get(tn.__renderTarget);wt.bindFramebuffer(C.READ_FRAMEBUFFER,cn.__webglFramebuffer),wt.bindFramebuffer(C.DRAW_FRAMEBUFFER,Vo.__webglFramebuffer);for(let rr=0;rr<At;rr++)be&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Tt.get(S).__webglTexture,N,Ut+rr),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Tt.get(I).__webglTexture,ot,Ue+rr)),C.blitFramebuffer(Gt,Ht,xt,Et,oe,pe,xt,Et,C.DEPTH_BUFFER_BIT,C.NEAREST);wt.bindFramebuffer(C.READ_FRAMEBUFFER,null),wt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(N!==0||S.isRenderTargetTexture||Tt.has(S)){const Dn=Tt.get(S),tn=Tt.get(I);wt.bindFramebuffer(C.READ_FRAMEBUFFER,ii),wt.bindFramebuffer(C.DRAW_FRAMEBUFFER,ir);for(let cn=0;cn<At;cn++)be?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Dn.__webglTexture,N,Ut+cn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Dn.__webglTexture,N),Pn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,tn.__webglTexture,ot,Ue+cn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,tn.__webglTexture,ot),N!==0?C.blitFramebuffer(Gt,Ht,xt,Et,oe,pe,xt,Et,C.COLOR_BUFFER_BIT,C.NEAREST):Pn?C.copyTexSubImage3D(Ke,ot,oe,pe,Ue+cn,Gt,Ht,xt,Et):C.copyTexSubImage2D(Ke,ot,oe,pe,Gt,Ht,xt,Et);wt.bindFramebuffer(C.READ_FRAMEBUFFER,null),wt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Pn?S.isDataTexture||S.isData3DTexture?C.texSubImage3D(Ke,ot,oe,pe,Ue,xt,Et,At,ce,It,we.data):I.isCompressedArrayTexture?C.compressedTexSubImage3D(Ke,ot,oe,pe,Ue,xt,Et,At,ce,we.data):C.texSubImage3D(Ke,ot,oe,pe,Ue,xt,Et,At,ce,It,we):S.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ot,oe,pe,xt,Et,ce,It,we.data):S.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ot,oe,pe,we.width,we.height,ce,we.data):C.texSubImage2D(C.TEXTURE_2D,ot,oe,pe,xt,Et,ce,It,we);C.pixelStorei(C.UNPACK_ROW_LENGTH,me),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Vn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,kr),C.pixelStorei(C.UNPACK_SKIP_ROWS,Sn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Is),ot===0&&I.generateMipmaps&&C.generateMipmap(Ke),wt.unbindTexture()},this.copyTextureToTexture3D=function(S,I,H=null,z=null,N=0){return mo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,I,H,z,N)},this.initRenderTarget=function(S){Tt.get(S).__webglFramebuffer===void 0&&b.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?b.setTextureCube(S,0):S.isData3DTexture?b.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?b.setTexture2DArray(S,0):b.setTexture2D(S,0),wt.unbindTexture()},this.resetState=function(){w=0,T=0,P=null,wt.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}const Ch={type:"change"},ou={type:"start"},hd={type:"end"},eo=new Sa,Ph=new zi,gM=Math.cos(70*$m.DEG2RAD),Be=new B,hn=2*Math.PI,Se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},wl=1e-6;class vM extends U_{constructor(t,e=null){super(t,e),this.state=Se.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ls.ROTATE,MIDDLE:ls.DOLLY,RIGHT:ls.PAN},this.touches={ONE:rs.ROTATE,TWO:rs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new Ur,this._lastTargetPosition=new B,this._quat=new Ur().setFromUnitVectors(t.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ih,this._sphericalDelta=new ih,this._scale=1,this._panOffset=new B,this._rotateStart=new ee,this._rotateEnd=new ee,this._rotateDelta=new ee,this._panStart=new ee,this._panEnd=new ee,this._panDelta=new ee,this._dollyStart=new ee,this._dollyEnd=new ee,this._dollyDelta=new ee,this._dollyDirection=new B,this._mouse=new ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=MM.bind(this),this._onPointerDown=xM.bind(this),this._onPointerUp=SM.bind(this),this._onContextMenu=RM.bind(this),this._onMouseWheel=bM.bind(this),this._onKeyDown=TM.bind(this),this._onTouchStart=AM.bind(this),this._onTouchMove=wM.bind(this),this._onMouseDown=yM.bind(this),this._onMouseMove=EM.bind(this),this._interceptControlDown=CM.bind(this),this._interceptControlUp=PM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ch),this.update(),this.state=Se.NONE}update(t=null){const e=this.object.position;Be.copy(e).sub(this.target),Be.applyQuaternion(this._quat),this._spherical.setFromVector3(Be),this.autoRotate&&this.state===Se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=hn:i>Math.PI&&(i-=hn),r<-Math.PI?r+=hn:r>Math.PI&&(r-=hn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Be.setFromSpherical(this._spherical),Be.applyQuaternion(this._quatInverse),e.copy(this.target).add(Be),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Be.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new B(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const u=new B(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(o),this.object.updateMatrixWorld(),a=Be.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(eo.origin.copy(this.object.position),eo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(eo.direction))<gM?this.object.lookAt(this.target):(Ph.setFromNormalAndCoplanarPoint(this.object.up,this.target),eo.intersectPlane(Ph,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>wl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>wl||this._lastTargetPosition.distanceToSquared(this.target)>wl?(this.dispatchEvent(Ch),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?hn/60*this.autoRotateSpeed*t:hn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Be.setFromMatrixColumn(e,0),Be.multiplyScalar(-t),this._panOffset.add(Be)}_panUp(t,e){this.screenSpacePanning===!0?Be.setFromMatrixColumn(e,1):(Be.setFromMatrixColumn(e,0),Be.crossVectors(this.object.up,Be)),Be.multiplyScalar(t),this._panOffset.add(Be)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Be.copy(r).sub(this.target);let s=Be.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/e.clientHeight),this._rotateUp(hn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/e.clientHeight),this._rotateUp(hn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ee,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function xM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function MM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function SM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(hd),this.state=Se.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function yM(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ls.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Se.DOLLY;break;case ls.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Se.ROTATE}break;case ls.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Se.PAN}break;default:this.state=Se.NONE}this.state!==Se.NONE&&this.dispatchEvent(ou)}function EM(n){switch(this.state){case Se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function bM(n){this.enabled===!1||this.enableZoom===!1||this.state!==Se.NONE||(n.preventDefault(),this.dispatchEvent(ou),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(hd))}function TM(n){this.enabled!==!1&&this._handleKeyDown(n)}function AM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case rs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Se.TOUCH_ROTATE;break;case rs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Se.TOUCH_PAN;break;default:this.state=Se.NONE}break;case 2:switch(this.touches.TWO){case rs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Se.TOUCH_DOLLY_PAN;break;case rs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Se.TOUCH_DOLLY_ROTATE;break;default:this.state=Se.NONE}break;default:this.state=Se.NONE}this.state!==Se.NONE&&this.dispatchEvent(ou)}function wM(n){switch(this._trackPointer(n),this.state){case Se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Se.NONE}}function RM(n){this.enabled!==!1&&n.preventDefault()}function CM(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function PM(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const fd={Asia:"#3987e5",Europe:"#199e70","North America":"#c98500","South America":"#9085e9",Africa:"#e66767",Oceania:"#d55181",Other:"#706e64"},Nc=["#104281","#1c5cab","#2a78d6","#3987e5","#6da7ec","#9ec5f4","#cde2fb"];function Dh(n,t){const e=Math.min(Math.max(t,0),1)*(n.length-1),i=Math.min(Math.floor(e),n.length-2),r=e-i,s=Fc(n[i]),a=Fc(n[i+1]);return[s[0]+(a[0]-s[0])*r,s[1]+(a[1]-s[1])*r,s[2]+(a[2]-s[2])*r]}function Fc(n){const t=parseInt(n.slice(1),16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}function DM(n,t,e){const i=t*Math.min(e,1-e),r=s=>{const a=(s+n/30)%12;return e-i*Math.max(-1,Math.min(a-3,9-a,1))};return[r(0),r(8),r(4)]}function dd(n){const t=n*137.508%360,e=.52+.14*(n*.618034%1);return DM(t,.65,e)}function LM(n){return`rgb(${n.map(t=>Math.round(t*255)).join(",")})`}const pd=`
uniform float uSpread;
uniform float uRadius;
vec3 spreadPos(vec3 p) {
  float r = length(p);
  if (r < 1e-6) return p;
  return p * pow(r / uRadius, uSpread - 1.0);
}
`,UM=`
attribute vec3 pA; attribute vec3 pB;
attribute vec3 qA; attribute vec3 qB;
attribute float relA; attribute float relB;
attribute vec3 aColor;
attribute float aSize;
attribute float aVisible;
attribute float aDim;
uniform float uF;
uniform float uSingle;
uniform float uFlat;
uniform float uScale;
uniform float uHaloPass;
uniform float uHaloScale;
uniform float uPixelRatio;
uniform float uCoreAlpha;
${pd}
varying vec3 vColor;
varying float vAlpha;

void main() {
  float s = smoothstep(0.0, 1.0, uF);
  vec3 pos = spreadPos(mix(mix(pA, pB, s), mix(qA, qB, s), uSingle));
  if (uFlat > 0.5) pos.z = 0.0;
  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  float rel = clamp(mix(relA, relB, uF), 0.0, 1.0);
  float uncertainty = 1.0 - rel;
  float core = aSize * uScale;
  float halo = core * (1.8 + 7.0 * uncertainty * uHaloScale);
  float size = mix(core, halo, uHaloPass);
  gl_PointSize = min(size * uPixelRatio * 2.0 / -mv.z, 192.0);
  gl_Position = projectionMatrix * mv;
  vColor = aColor;
  float haloAlpha = 0.45 * uCoreAlpha * uncertainty * aDim;
  vAlpha = mix(uCoreAlpha, haloAlpha, uHaloPass) * aVisible * aDim;
}
`,IM=`
precision highp float;
varying vec3 vColor;
varying float vAlpha;
uniform float uHaloPass;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c) * 2.0;
  if (d > 1.0) discard;
  float soft = uHaloPass > 0.5 ? (1.0 - d) * (1.0 - d) : smoothstep(1.0, 0.72, d);
  float alpha = vAlpha * soft;
  if (alpha < 0.004) discard;
  gl_FragColor = vec4(vColor, alpha);
}
`,NM=`
attribute vec3 pA; attribute vec3 pB;
attribute vec3 aColor;
uniform float uF;
uniform float uFlat;
${pd}
varying vec3 vColor;
void main() {
  float s = smoothstep(0.0, 1.0, uF);
  vec3 pos = spreadPos(mix(pA, pB, s));
  if (uFlat > 0.5) pos.z = 0.0;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  vColor = aColor;
}
`,FM=`
precision highp float;
varying vec3 vColor;
uniform float uOpacity;
void main() {
  gl_FragColor = vec4(vColor, uOpacity);
}
`;class Lh{constructor(t,e){Dt(this,"renderer");Dt(this,"scene",new Yu);Dt(this,"camera");Dt(this,"controls");Dt(this,"geometry",new mn);Dt(this,"core");Dt(this,"haloLayer");Dt(this,"uniformsCore");Dt(this,"uniformsHalo");Dt(this,"edgeGeometry",null);Dt(this,"edgeLines",null);Dt(this,"edgeUniforms",null);Dt(this,"selEdges");Dt(this,"marker");Dt(this,"trail");Dt(this,"fadeScene",new Yu);Dt(this,"fadeCamera",new Lc(-1,1,1,-1,0,1));Dt(this,"fadeMaterial");Dt(this,"trailAmount",0);Dt(this,"data");Dt(this,"flat");Dt(this,"radius",1);Dt(this,"raycaster",new L_);Dt(this,"canvas");Dt(this,"observer");Dt(this,"W");Dt(this,"C");Dt(this,"axes",[0,1,2]);Dt(this,"spread",1);Dt(this,"segment",-1);Dt(this,"edgeWindow",-1);Dt(this,"linkK",0);Dt(this,"linkSim",0);Dt(this,"linkMutual",!1);Dt(this,"edgeOpacity",.06);Dt(this,"baseEdgeOpacity",.06);Dt(this,"dimActive",!1);Dt(this,"edgeSingle",!1);Dt(this,"colorMode","continent");Dt(this,"minExposureLog",3);Dt(this,"exposureNorm");Dt(this,"speedRank",null);Dt(this,"exposureRank",null);Dt(this,"disposed",!1);Dt(this,"downX",0);Dt(this,"downY",0);this.canvas=t,this.data=e.data,this.flat=e.flat,this.W=e.data.windows.length,this.C=e.data.components;const{n:i}=e.data;if(this.renderer=new _M({canvas:t,antialias:!0,alpha:!1}),this.renderer.setClearColor(new fe("#0d0d0d"),1),this.computeRadius(),e.flat){const c=this.radius*1.3;this.camera=new Lc(-c,c,c,-c,.01,10),this.camera.position.set(0,0,2)}else this.camera=new Rn(45,1,.01,20),this.camera.position.set(1.55*this.radius,1.2*this.radius,1.95*this.radius);this.controls=new vM(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.autoRotateSpeed=.5,e.flat&&(this.controls.enableRotate=!1,this.controls.enablePan=!0);for(const c of["pA","pB","qA","qB"])this.geometry.setAttribute(c,new ze(new Float32Array(i*3),3));for(const c of["relA","relB"])this.geometry.setAttribute(c,new ze(new Float32Array(i),1));this.geometry.setAttribute("aColor",new ze(new Float32Array(i*3),3)),this.exposureNorm=new Float32Array(i);let r=1/0,s=-1/0;for(let c=0;c<i;c++){let f=0;for(let h=0;h<this.W;h++)f=Math.max(f,this.data.exposure[c*this.W+h]);this.exposureNorm[c]=f,r=Math.min(r,f),s=Math.max(s,f)}const a=Math.max(s-r,1e-6);for(let c=0;c<i;c++)this.exposureNorm[c]=(this.exposureNorm[c]-r)/a;this.geometry.setAttribute("aSize",new ze(new Float32Array(i),1)),this.setSizes(.8),this.geometry.setAttribute("aVisible",new ze(new Float32Array(i).fill(1),1)),this.geometry.setAttribute("aDim",new ze(new Float32Array(i).fill(1),1)),this.geometry.setAttribute("position",this.geometry.getAttribute("pA")),this.geometry.computeBoundingSphere();const o=c=>({uF:{value:0},uSingle:{value:0},uFlat:{value:e.flat?1:0},uScale:{value:1},uHaloPass:{value:c},uHaloScale:{value:1},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uCoreAlpha:{value:.85},uSpread:{value:1},uRadius:{value:this.radius}});this.uniformsCore=o(0),this.uniformsHalo=o(1);const l=(c,f)=>new di({uniforms:c,vertexShader:UM,fragmentShader:IM,transparent:!0,depthWrite:!1,blending:f});this.haloLayer=new Qu(this.geometry,l(this.uniformsHalo,To)),this.core=new Qu(this.geometry,l(this.uniformsCore,Rr)),this.haloLayer.renderOrder=1,this.core.renderOrder=2,this.haloLayer.frustumCulled=!1,this.core.frustumCulled=!1,this.scene.add(this.haloLayer),this.scene.add(this.core),this.selEdges=new $u(new mn().setAttribute("position",new ze(new Float32Array(this.data.neighbourCount*2*3),3)),new Pc({color:"#ffffff",transparent:!0,opacity:.55})),this.selEdges.visible=!1,this.selEdges.frustumCulled=!1,this.selEdges.renderOrder=3,this.scene.add(this.selEdges),this.marker=new ti(new su(.014*this.radius,.02*this.radius,32),new Co({color:"#ffffff",side:oi,transparent:!0,opacity:.9})),this.marker.visible=!1,this.marker.renderOrder=4,this.scene.add(this.marker),this.trail=new rd(new mn().setAttribute("position",new ze(new Float32Array(this.W*3),3)),new Pc({color:"#ffffff",transparent:!0,opacity:.8})),this.trail.visible=!1,this.trail.frustumCulled=!1,this.scene.add(this.trail),this.fadeMaterial=new Co({color:"#0d0d0d",transparent:!0,opacity:1,depthTest:!1,depthWrite:!1});const u=new ti(new Ea(2,2),this.fadeMaterial);if(u.frustumCulled=!1,this.fadeScene.add(u),t.addEventListener("click",c=>{var h;if(this.dragDistance(c)>6)return;const f=this.pick(c.clientX,c.clientY);(h=e.onPick)==null||h.call(e,f)}),t.addEventListener("pointerdown",c=>{this.downX=c.clientX,this.downY=c.clientY}),e.onHover&&!e.flat){let c=!1;t.addEventListener("pointermove",f=>{c||(c=!0,requestAnimationFrame(()=>{if(c=!1,this.disposed)return;const h=this.pick(f.clientX,f.clientY);e.onHover(h,f.clientX,f.clientY)}))}),t.addEventListener("pointerleave",()=>e.onHover(-1,0,0))}this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(t),this.resize(),this.setSegment(0)}dragDistance(t){return Math.hypot(t.clientX-this.downX,t.clientY-this.downY)}computeRadius(){const t=this.data,e=new Float32Array(t.n);for(let i=0;i<t.n;i++){let r=0;for(let s=0;s<this.W;s++)for(const a of this.axes)r=Math.max(r,Math.abs(t.positions[(i*this.W+s)*this.C+a]));e[i]=r}e.sort(),this.radius=Math.max(e[Math.floor(t.n*.95)],.05)}setAxes(t){this.axes=t,this.computeRadius();for(const e of[this.uniformsCore,this.uniformsHalo])e.uRadius.value=this.radius;this.edgeUniforms&&(this.edgeUniforms.uRadius.value=this.radius),this.segment>=0&&this.setSegment(this.segment),this.edgeWindow=-1,this.resize()}setSegment(t){this.segment=t;const{n:e,positions:i,positionsSingle:r,reliability:s}=this.data,a=this.W,o=this.C,l=t,u=Math.min(t+1,a-1),c=this.geometry.getAttribute("pA"),f=this.geometry.getAttribute("pB"),h=this.geometry.getAttribute("qA"),p=this.geometry.getAttribute("qB"),_=this.geometry.getAttribute("relA"),g=this.geometry.getAttribute("relB"),m=c.array,d=f.array,A=h.array,E=p.array,M=_.array,R=g.array;for(let w=0;w<e;w++){const T=(w*a+l)*o,P=(w*a+u)*o,y=w*3;for(let x=0;x<3;x++)m[y+x]=i[T+this.axes[x]],d[y+x]=i[P+this.axes[x]],A[y+x]=r[T+this.axes[x]],E[y+x]=r[P+this.axes[x]];M[w]=s[w*a+l],R[w]=s[w*a+u]}for(const w of[c,f,h,p,_,g])w.needsUpdate=!0}positionAt(t,e,i){const r=i?this.data.positionsSingle:this.data.positions,s=this.W,a=this.C,o=Math.min(Math.max(Math.floor(e),0),s-2),l=e-o,u=l*l*(3-2*l),c=new B;for(let f=0;f<3;f++){const h=r[(t*s+o)*a+this.axes[f]],p=r[(t*s+o+1)*a+this.axes[f]];c.setComponent(f,h+(p-h)*u)}if(this.spread!==1){const f=c.length();f>1e-9&&c.multiplyScalar(Math.pow(f/this.radius,this.spread-1))}return this.flat&&(c.z=0),c}scaleOf(t){const e=Float32Array.from(t).sort(),i=e[Math.floor((e.length-1)*.95)]||1,r=new Float32Array(t.length);for(let s=0;s<t.length;s++)r[s]=Math.min(Math.max(t[s]/i,0),1);return r}setColors(t){this.colorMode=t;const e=this.data,i=this.geometry.getAttribute("aColor"),r=i.array;t==="speed"&&!this.speedRank&&(this.speedRank=this.scaleOf(e.speed)),t==="exposure"&&!this.exposureRank&&(this.exposureRank=this.scaleOf(this.exposureNorm));for(let s=0;s<e.n;s++){let a;t==="continent"?a=Fc(fd[nm[e.continentIndex[s]]]):t==="country"?a=dd(e.countryRank[e.countryIndex[s]]):t==="speed"?a=Dh(Nc,this.speedRank[s]):a=Dh(Nc,this.exposureRank[s]),r[s*3]=a[0],r[s*3+1]=a[1],r[s*3+2]=a[2]}i.needsUpdate=!0,this.edgeWindow=-1}setVisibility(t){this.minExposureLog=t;const e=this.data,i=this.geometry.getAttribute("aVisible"),r=i.array;for(let s=0;s<e.n;s++){let a=0;for(let o=0;o<this.W;o++)a=Math.max(a,e.exposure[s*this.W+o]);r[s]=a>=t?1:0}i.needsUpdate=!0,this.edgeWindow=-1}setDim(t){const e=this.geometry.getAttribute("aDim"),i=e.array;if(!t)i.fill(1);else for(let r=0;r<this.data.n;r++)i[r]=t.has(r)?1:.08;e.needsUpdate=!0,this.dimActive=!!t,this.applyEdgeOpacity()}setSizes(t){const e=this.geometry.getAttribute("aSize"),i=e.array;for(let r=0;r<this.data.n;r++)i[r]=1.4+10*t*Math.pow(this.exposureNorm[r],1.3);e.needsUpdate=!0}setPointOpacity(t){this.uniformsCore.uCoreAlpha.value=t,this.uniformsHalo.uCoreAlpha.value=t}setSpread(t){this.spread=t;for(const e of[this.uniformsCore,this.uniformsHalo])e.uSpread.value=t;this.edgeUniforms&&(this.edgeUniforms.uSpread.value=t)}setLinkOpacity(t){this.baseEdgeOpacity=t,this.applyEdgeOpacity()}applyEdgeOpacity(){this.edgeOpacity=this.baseEdgeOpacity*(this.dimActive?.2:1),this.edgeUniforms&&(this.edgeUniforms.uOpacity.value=this.edgeOpacity)}setCameraPosition(t,e,i){this.camera.position.set(t,e,i)}resetView(){this.controls.target.set(0,0,0),this.flat?(this.camera.position.set(0,0,2),this.camera.zoom=1,this.camera.updateProjectionMatrix()):this.camera.position.set(1.55*this.radius,1.2*this.radius,1.95*this.radius)}setLinkOptions(t,e,i){this.linkK=t,this.linkSim=e,this.linkMutual=i,this.edgeWindow=-1}isNeighbour(t,e,i,r){const s=this.data.neighbourCount,a=(t*this.W+i)*s;for(let o=0;o<r;o++)if(this.data.neighbours[a+o]===e)return!0;return!1}rebuildEdges(t){var M;this.edgeWindow=t;const e=Math.min(this.linkK,this.data.neighbourCount);if(e<=0){this.edgeLines&&(this.edgeLines.visible=!1);return}const i=this.data,r=this.W,s=this.C,a=i.neighbourCount,o=i.n*e*2;if(!this.edgeGeometry||this.edgeGeometry.getAttribute("pA").array.length<o*3){(M=this.edgeGeometry)==null||M.dispose(),this.edgeGeometry=new mn;for(const w of["pA","pB","aColor"])this.edgeGeometry.setAttribute(w,new ze(new Float32Array(o*3),3));this.edgeGeometry.setAttribute("position",this.edgeGeometry.getAttribute("pA")),this.edgeUniforms={uF:{value:0},uFlat:{value:this.flat?1:0},uOpacity:{value:this.edgeOpacity},uSpread:{value:this.spread},uRadius:{value:this.radius}};const R=new di({uniforms:this.edgeUniforms,vertexShader:NM,fragmentShader:FM,transparent:!0,depthWrite:!1,blending:To});this.edgeLines&&this.scene.remove(this.edgeLines),this.edgeLines=new $u(this.edgeGeometry,R),this.edgeLines.frustumCulled=!1,this.edgeLines.renderOrder=0,this.scene.add(this.edgeLines)}const l=this.geometry.getAttribute("aVisible").array,u=this.geometry.getAttribute("aColor").array,c=this.edgeGeometry.getAttribute("pA"),f=this.edgeGeometry.getAttribute("pB"),h=this.edgeGeometry.getAttribute("aColor"),p=c.array,_=f.array,g=h.array,m=this.edgeSingle?i.positionsSingle:i.positions,d=this.segment,A=Math.min(this.segment+1,r-1);let E=0;for(let R=0;R<i.n;R++){if(l[R]<.5)continue;let w=0;for(let T=0;T<a&&w<e;T++){const P=(R*r+t)*a+T,y=i.neighbours[P];if(!(l[y]<.5)&&!(i.neighbourSims[P]<this.linkSim)&&!(this.linkMutual&&!this.isNeighbour(y,R,t,a))){for(const[x,D]of[[R,E],[y,E+1]]){const j=(x*r+d)*s,V=(x*r+A)*s,J=D*3;for(let Q=0;Q<3;Q++)p[J+Q]=m[j+this.axes[Q]],_[J+Q]=m[V+this.axes[Q]];g[J]=u[R*3],g[J+1]=u[R*3+1],g[J+2]=u[R*3+2]}E+=2,w++}}}this.edgeGeometry.setDrawRange(0,E);for(const R of[c,f,h])R.needsUpdate=!0;this.edgeLines.visible=!0}updateSelection(t,e,i){if(t<0){this.marker.visible=!1,this.trail.visible=!1,this.selEdges.visible=!1;return}const r=this.positionAt(t,e,i);this.marker.position.copy(r),this.marker.visible=!0,this.flat||this.marker.lookAt(this.camera.position);const s=this.trail.geometry.getAttribute("position");for(let u=0;u<this.W;u++){const c=this.positionAt(t,u,i);s.setXYZ(u,c.x,c.y,c.z)}s.needsUpdate=!0,this.trail.geometry.setDrawRange(0,this.W),this.trail.visible=!0;const a=Math.min(Math.round(e),this.W-1),o=this.selEdges.geometry.getAttribute("position"),l=this.data.neighbourCount;for(let u=0;u<l;u++){const c=this.data.neighbours[(t*this.W+a)*l+u],f=this.positionAt(c,e,i);o.setXYZ(u*2,r.x,r.y,r.z),o.setXYZ(u*2+1,f.x,f.y,f.z)}o.needsUpdate=!0,this.selEdges.visible=!0}pick(t,e){const i=this.canvas.getBoundingClientRect(),r=new ee((t-i.left)/i.width*2-1,-((e-i.top)/i.height)*2+1);this.raycaster.setFromCamera(r,this.camera);const s=(this.flat?.02:.018)*this.radius,a=this.uniformsCore.uF.value+this.segment,o=this.uniformsCore.uSingle.value>.5,l=this.geometry.getAttribute("aVisible").array;let u=-1,c=1/0;const f=this.raycaster.ray;for(let h=0;h<this.data.n;h++){if(l[h]<.5)continue;const p=this.positionAt(h,a,o),_=f.distanceToPoint(p);_<s&&_<c&&(c=_,u=h)}return u}focusOn(t){const e=this.positionAt(t,this.uniformsCore.uF.value+this.segment,!1);this.controls.target.copy(e)}project(t,e,i){const r=this.positionAt(t,e,i);return r.project(this.camera),{x:(r.x+1)/2*this.canvas.clientWidth,y:(1-r.y)/2*this.canvas.clientHeight,behind:r.z>1}}apply(t,e,i,r,s,a){const o=this.W,l=Math.min(Math.max(Math.floor(t),0),o-2);l!==this.segment&&(this.setSegment(l),this.edgeWindow=-1);const u=t-l;for(const c of[this.uniformsCore,this.uniformsHalo])c.uF.value=u,c.uSingle.value=e?1:0,c.uScale.value=s,c.uHaloScale.value=r;if(this.edgeUniforms&&(this.edgeUniforms.uF.value=u),this.haloLayer.visible=i,this.controls.autoRotate=a&&!this.flat,e!==this.edgeSingle&&(this.edgeSingle=e,this.edgeWindow=-1),this.linkK>0){const c=u<.5?l:l+1;c!==this.edgeWindow&&this.rebuildEdges(c)}else this.edgeLines&&this.edgeLines.visible&&(this.edgeLines.visible=!1,this.edgeWindow=-1)}resize(){const t=this.canvas.clientWidth,e=this.canvas.clientHeight;if(!(t===0||e===0)){if(this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(t,e,!1),this.camera instanceof Rn)this.camera.aspect=t/e;else{const i=t/e,r=this.radius*1.3;this.camera.left=-r*i,this.camera.right=r*i,this.camera.top=r,this.camera.bottom=-r}this.camera.updateProjectionMatrix()}}setTrail(t){this.trailAmount=t}render(){this.controls.update(),this.trailAmount>0?(this.renderer.autoClear=!1,this.fadeMaterial.opacity=1-this.trailAmount,this.renderer.render(this.fadeScene,this.fadeCamera),this.renderer.render(this.scene,this.camera)):(this.renderer.autoClear=!0,this.renderer.render(this.scene,this.camera))}dispose(){var t;this.disposed=!0,this.observer.disconnect(),this.controls.dispose(),this.geometry.dispose(),(t=this.edgeGeometry)==null||t.dispose(),this.selEdges.geometry.dispose(),this.trail.geometry.dispose(),this.marker.geometry.dispose(),this.renderer.dispose()}}const md={playing:!0,playSpeed:.35,colorBy:"country",minExposureLog:3,halo:!0,haloScale:1,singleRun:!1,view2d:!0,pointScale:.9,pointOpacity:.85,trail:.5,spread:.85,sizeContrast:1.2,axisX:0,axisY:1,axisZ:2,linkK:2,linkOpacity:.05,linkMinSim:-1,linkMutual:!1,labelCount:30,moversOpen:!1,dimOnSelect:!0,autoRotate:!0},L=Xi({...md,t:0,level:"institution",datasetId:"",countryFilter:-1,selected:-1,hovered:-1,hoverX:0,hoverY:0,camLive:"",loaded:!1,aboutOpen:!1});function Rl(){Object.assign(L,md),L.countryFilter=-1}const es=(n,t=kh)=>{var e=OM(),i=at(e);_e(()=>Yt(i,t())),Bt(n,e)};var OM=$t('<div class="text-[10px] uppercase tracking-widest text-[#898781] border-b border-white/5 pb-0.5"> </div>'),BM=$t("<span> </span>"),Uh=$t("<button> </button>"),Ih=$t("<option> </option>"),kM=$t('<select class="bg-black/40 border border-white/10 rounded px-1.5 py-1 text-xs"></select>'),zM=$t('<input type="text" title="scroll to nudge (shift = fine), type and press enter to set" class="w-16 bg-black/40 border border-white/10 rounded px-1.5 py-0.5 text-xs tabular-nums"/>'),HM=$t('<label class="flex items-center gap-1"> <select class="bg-black/40 border border-white/10 rounded px-1 py-0.5 text-xs"></select></label>'),GM=$t(`<label class="block">link opacity <span class="text-white tabular-nums"> </span> <input type="range" min="0.005" max="1" step="0.005" class="w-full accent-[#3987e5]"/></label> <label class="block" title="hide links whose profile similarity is below this">min link similarity <span class="text-white tabular-nums"> </span> <input type="range" min="-1" max="0.98" step="0.02" class="w-full accent-[#3987e5]"/></label> <label class="flex items-center justify-between" title="keep only pairs that are each other's nearest neighbours — the structural backbone"><span>mutual links only</span> <input type="checkbox" class="accent-[#3987e5]"/></label>`,1),VM=$t('<label class="block">halo scale <span class="text-white tabular-nums"> </span> <input type="range" min="0" max="6" step="0.1" class="w-full accent-[#3987e5]"/></label>'),WM=$t('<section class="flex flex-col gap-2.5 text-xs text-[#c3c2b7]"><!> <div><div class="flex items-center justify-between mb-1"><span class="tabular-nums text-white"> </span> <span class="text-[#898781]"> </span></div> <div class="flex items-center gap-2"><button class="w-8 h-8 rounded bg-white/10 hover:bg-white/20 grid place-items-center text-sm shrink-0"> </button> <input type="range" min="0" step="0.001" class="flex-1 accent-[#3987e5]"/></div> <div class="flex justify-between text-[10px] text-[#898781] mt-0.5"></div> <label class="block mt-1">playback speed <input type="range" min="0.02" max="4" step="0.02" class="w-full accent-[#3987e5]"/></label></div> <!> <div class="flex items-center gap-2 flex-wrap"><!> <!></div> <div class="flex items-center gap-3 flex-wrap"><label class="flex items-center gap-1.5"><input type="checkbox" class="accent-[#3987e5]"/> 2D top view</label> <label class="flex items-center gap-1.5"><input type="checkbox" class="accent-[#3987e5]"/> auto-rotate</label> <button class="px-2 py-0.5 rounded border border-white/10 hover:bg-white/5">reset view</button> <button class="px-2 py-0.5 rounded border border-white/10 hover:bg-white/5" title="restore every slider and toggle to its default">reset settings</button></div> <div title="camera position in data units — type coordinates and press enter, or copy the current ones"><div class="flex items-center justify-between mb-0.5"><span>camera</span> <button class="text-[#898781] hover:text-white underline">copy current: <span class="tabular-nums"> </span></button></div> <div class="flex items-center gap-1"></div></div> <div class="flex items-center gap-2" title="which principal component of the similarity profile is shown on each axis — scroll to cycle"></div> <label class="block" title="radial exaggeration — below 1 expands the crowded centre, above 1 compresses it">spread <span class="text-white tabular-nums"> </span> <input type="range" min="0.15" max="3" step="0.05" class="w-full accent-[#3987e5]"/></label> <!> <div class="flex gap-1 flex-wrap"></div> <label class="block" title="0 = equal dots, 3 = size strongly proportional to how often an institution is seen">size contrast <span class="text-white tabular-nums"> </span> <input type="range" min="0" max="8" step="0.1" class="w-full accent-[#3987e5]"/></label> <label class="block">point size <span class="text-white tabular-nums"> </span> <input type="range" min="0.1" max="6" step="0.05" class="w-full accent-[#3987e5]"/></label> <label class="block" title="lower to see through dense regions">point opacity <span class="text-white tabular-nums"> </span> <input type="range" min="0.05" max="1" step="0.05" class="w-full accent-[#3987e5]"/></label> <label class="block" title="motion streaks during playback — still points stay sharp, moving points smear">motion trail <span class="text-white tabular-nums"> </span> <input type="range" min="0" max="0.99" step="0.01" class="w-full accent-[#3987e5]"/></label> <!> <label class="block" title="draw a line from each institution to its k most similar peers">neighbour links <span class="text-white tabular-nums"> </span> <input type="range" min="0" step="1" class="w-full accent-[#3987e5]"/></label> <!> <label class="block" title="labels adapt to zoom — zoom into a region to reveal its institutions">name labels <span class="text-white tabular-nums"> </span> <input type="range" min="0" max="400" step="5" class="w-full accent-[#3987e5]"/></label> <label class="flex items-center justify-between"><span>fastest-movers list</span> <input type="checkbox" class="accent-[#3987e5]"/></label> <label class="flex items-center justify-between" title="fade everything except the selection and its neighbours"><span>dim others on select</span> <input type="checkbox" class="accent-[#3987e5]"/></label> <!> <label class="flex items-center justify-between"><span>uncertainty halo</span> <input type="checkbox" class="accent-[#3987e5]"/></label> <!> <label class="flex items-center justify-between" title="Show positions from a single training run instead of the multi-run average — this is what an uncorrected map looks like."><span>single run <span class="text-[#898781]">(raw, noisy)</span></span> <input type="checkbox" class="accent-[#e66767]"/></label> <!> <label class="block">min appearances <span class="text-white tabular-nums"> </span> <input type="range" min="3" max="16" step="1" class="w-full accent-[#3987e5]"/></label></section>');function XM(n,t){er(t,!0);let e=qe(Xi(["","",""]));const i=()=>{const ut=W(e).map(Number);ut.some(zt=>Number.isNaN(zt))||t.onCamera(ut[0],ut[1],ut[2])},r=()=>{Ne(e,L.camLive.split(",").map(ut=>ut.trim()),!0)},s=(ut,zt)=>{zt.preventDefault();let jt=W(e).map(Number);if(jt.some(ye=>Number.isNaN(ye))||W(e).some(ye=>ye==="")){const ye=L.camLive.split(",").map(Mn=>Number(Mn.trim()));if(ye.length!==3||ye.some(Mn=>Number.isNaN(Mn)))return;jt=ye}const xe=Math.max(Math.abs(jt[ut]),.2),Le=(zt.deltaY>0?-1:1)*(zt.shiftKey?.01:.05)*xe;jt[ut]=Math.round((jt[ut]+Le)*1e3)/1e3,Ne(e,jt.map(ye=>String(ye)),!0),t.onCamera(jt[0],jt[1],jt[2])},a=[{id:"continent",label:"continent"},{id:"country",label:"country"},{id:"speed",label:"drift speed"},{id:"exposure",label:"exposure"}],o=[{id:"institution",label:"institutions"},{id:"country",label:"countries"}],l=Fe(()=>t.data.windows.length-1),u=Fe(()=>t.data.windows[Math.min(Math.round(L.t),W(l))]),c=Fe(()=>t.data.varianceExplained.map((ut,zt)=>({value:zt,label:`PC${zt+1} · ${(ut*100).toFixed(0)}%`}))),f=Fe(()=>{const ut=t.data.windows;return ut.length<=5?ut.map(zt=>zt.slice(0,4)):[ut[0].slice(0,4),ut[Math.floor(ut.length/2)].slice(0,4),ut[ut.length-1].slice(0,4)]});var h=WM(),p=at(h);es(p,()=>"time");var _=nt(p,2),g=at(_),m=at(g),d=at(m),A=nt(m,2),E=at(A),M=nt(g,2),R=at(M),w=at(R),T=nt(R,2),P=nt(M,2);an(P,21,()=>W(f),sn,(ut,zt)=>{var jt=BM(),xe=at(jt);_e(()=>Yt(xe,W(zt))),Bt(ut,jt)});var y=nt(P,2),x=nt(at(y)),D=nt(_,2);es(D,()=>"view");var j=nt(D,2),V=at(j);an(V,17,()=>o,sn,(ut,zt)=>{var jt=Uh(),xe=at(jt);_e(()=>{na(jt,1,`px-2 py-1 rounded text-xs border ${L.level===W(zt).id?"bg-white/15 border-white/30 text-white":"border-white/10 hover:bg-white/5"}`),Yt(xe,W(zt).label)}),Ye("click",jt,()=>{L.level=W(zt).id,L.selected=-1,L.hovered=-1}),Bt(ut,jt)});var J=nt(V,2);{var Q=ut=>{var zt=kM();an(zt,21,()=>t.datasets,sn,(xe,Le)=>{var ye=Ih(),Mn=at(ye),ii={};_e(()=>{Yt(Mn,W(Le).label),ii!==(ii=W(Le).id)&&(ye.value=(ye.__value=W(Le).id)??"")}),Bt(xe,ye)});var jt;Pf(zt),_e(()=>{jt!==(jt=L.datasetId)&&(zt.value=(zt.__value=L.datasetId)??"",Kc(zt,L.datasetId))}),Ye("change",zt,xe=>t.onDataset(xe.target.value)),Bt(ut,zt)};Ce(J,ut=>{t.datasets.length>1&&ut(Q)})}var X=nt(j,2),Z=at(X),G=at(Z),st=nt(Z,2),ft=at(st),Ct=nt(st,2),Vt=nt(Ct,2),$=nt(X,2),k=at($),Y=nt(at(k),2),lt=nt(at(Y)),rt=at(lt),pt=nt(k,2);an(pt,20,()=>["x","y","z"],sn,(ut,zt,jt)=>{var xe=zM();_e(()=>js(xe,"placeholder",zt)),Ye("change",xe,i),Up("wheel",xe,Le=>s(jt,Le)),en(xe,()=>W(e)[jt],Le=>W(e)[jt]=Le),Bt(ut,xe)});var Pt=nt($,2);an(Pt,20,()=>[["x","axisX"],["y","axisY"],["z","axisZ"]],sn,(ut,zt)=>{var jt=Fe(()=>Hh(zt,2));let xe=()=>W(jt)[0],Le=()=>W(jt)[1];var ye=HM(),Mn=at(ye),ii=nt(Mn);an(ii,21,()=>W(c),sn,(ir,S)=>{var I=Ih(),H=at(I),z={};_e(()=>{Yt(H,W(S).label),z!==(z=W(S).value)&&(I.value=(I.__value=W(S).value)??"")}),Bt(ir,I)}),_e(()=>Yt(Mn,`${xe()??""} `)),Xp(ii,()=>L[Le()],ir=>L[Le()]=ir),Bt(ut,ye)});var ht=nt(Pt,2),Ft=nt(at(ht)),Wt=at(Ft),Zt=nt(Ft,2),C=nt(ht,2);es(C,()=>"colour & size");var We=nt(C,2);an(We,21,()=>a,sn,(ut,zt)=>{var jt=Uh(),xe=at(jt);_e(()=>{na(jt,1,`px-2 py-1 rounded text-xs border ${L.colorBy===W(zt).id?"bg-white/15 border-white/30 text-white":"border-white/10 hover:bg-white/5"}`),Yt(xe,W(zt).label)}),Ye("click",jt,()=>L.colorBy=W(zt).id),Bt(ut,jt)});var bt=nt(We,2),kt=nt(at(bt)),wt=at(kt),de=nt(kt,2),Tt=nt(bt,2),b=nt(at(Tt)),v=at(b),F=nt(b,2),tt=nt(Tt,2),it=nt(at(tt)),K=at(it),Rt=nt(it,2),dt=nt(tt,2),Mt=nt(at(dt)),ae=at(Mt),ct=nt(Mt,2),St=nt(dt,2);es(St,()=>"links & labels");var Nt=nt(St,2),Ot=nt(at(Nt)),yt=at(Ot),ne=nt(Ot,2),qt=nt(Nt,2);{var ve=ut=>{var zt=GM(),jt=ma(zt),xe=nt(at(jt)),Le=at(xe),ye=nt(xe,2),Mn=nt(jt,2),ii=nt(at(Mn)),ir=at(ii),S=nt(ii,2),I=nt(Mn,2),H=nt(at(I),2);_e((z,N)=>{Yt(Le,z),Yt(ir,N)},[()=>L.linkOpacity.toFixed(2),()=>L.linkMinSim.toFixed(2)]),en(ye,()=>L.linkOpacity,z=>L.linkOpacity=z),en(S,()=>L.linkMinSim,z=>L.linkMinSim=z),sr(H,()=>L.linkMutual,z=>L.linkMutual=z),Bt(ut,zt)};Ce(qt,ut=>{L.linkK>0&&ut(ve)})}var U=nt(qt,2),_t=nt(at(U)),q=at(_t),et=nt(_t,2),vt=nt(U,2),gt=nt(at(vt),2),Xt=nt(vt,2),Ee=nt(at(Xt),2),Oe=nt(Xt,2);es(Oe,()=>"uncertainty");var le=nt(Oe,2),xn=nt(at(le),2),Cn=nt(le,2);{var ba=ut=>{var zt=VM(),jt=nt(at(zt)),xe=at(jt),Le=nt(jt,2);_e(ye=>Yt(xe,`${ye??""}×`),[()=>L.haloScale.toFixed(1)]),en(Le,()=>L.haloScale,ye=>L.haloScale=ye),Bt(ut,zt)};Ce(Cn,ut=>{L.halo&&ut(ba)})}var Ls=nt(Cn,2),mi=nt(at(Ls),2),Or=nt(Ls,2);es(Or,()=>"filter");var Ta=nt(Or,2),Us=nt(at(Ta)),Br=at(Us),Aa=nt(Us,2);_e((ut,zt,jt,xe,Le,ye)=>{Yt(d,W(u)),Yt(E,`${t.data.windows.length??""} windows`),js(R,"aria-label",L.playing?"pause":"play"),Yt(w,L.playing?"⏸":"▶"),js(T,"max",W(l)),Yt(rt,L.camLive),Yt(Wt,ut),Yt(wt,zt),Yt(v,`${jt??""}×`),Yt(K,xe),Yt(ae,Le),Yt(yt,L.linkK===0?"off":`k=${L.linkK}`),js(ne,"max",t.data.neighbourCount),Yt(q,L.labelCount===0?"off":L.labelCount),Yt(Br,ye)},[()=>L.spread.toFixed(2),()=>L.sizeContrast.toFixed(1),()=>L.pointScale.toFixed(1),()=>L.pointOpacity.toFixed(2),()=>L.trail===0?"off":L.trail.toFixed(2),()=>Math.round(2**L.minExposureLog).toLocaleString()]),Ye("click",R,()=>L.playing=!L.playing),Ye("input",T,()=>L.playing=!1),en(T,()=>L.t,ut=>L.t=ut),en(x,()=>L.playSpeed,ut=>L.playSpeed=ut),sr(G,()=>L.view2d,ut=>L.view2d=ut),sr(ft,()=>L.autoRotate,ut=>L.autoRotate=ut),Ye("click",Ct,function(...ut){var zt;(zt=t.onReset)==null||zt.apply(this,ut)}),Ye("click",Vt,function(...ut){Rl==null||Rl.apply(this,ut)}),Ye("click",Y,r),en(Zt,()=>L.spread,ut=>L.spread=ut),en(de,()=>L.sizeContrast,ut=>L.sizeContrast=ut),en(F,()=>L.pointScale,ut=>L.pointScale=ut),en(Rt,()=>L.pointOpacity,ut=>L.pointOpacity=ut),en(ct,()=>L.trail,ut=>L.trail=ut),en(ne,()=>L.linkK,ut=>L.linkK=ut),en(et,()=>L.labelCount,ut=>L.labelCount=ut),sr(gt,()=>L.moversOpen,ut=>L.moversOpen=ut),sr(Ee,()=>L.dimOnSelect,ut=>L.dimOnSelect=ut),sr(xn,()=>L.halo,ut=>L.halo=ut),sr(mi,()=>L.singleRun,ut=>L.singleRun=ut),en(Aa,()=>L.minExposureLog,ut=>L.minExposureLog=ut),Bt(n,h),nr()}Nr(["click","input","change"]);var YM=$t('<span class="text-[#898781]"> </span>'),qM=$t('<li><button class="w-full text-left px-3 py-1.5 text-xs hover:bg-white/10"> <!></button></li>'),jM=$t('<ul class="mt-1 rounded border border-white/10 divide-y divide-white/5 overflow-hidden"></ul>'),KM=$t('<section><input type="search" class="w-full rounded bg-black/40 border border-white/10 px-3 py-2 text-sm placeholder-[#898781] focus:outline-none focus:border-[#3987e5]"/> <!></section>');function ZM(n,t){er(t,!0);let e=qe("");const i=Fe(()=>{const l=W(e).trim().toLowerCase();if(l.length<2)return[];const u=[];for(let c=t.data.n-1;c>=0&&u.length<8;c--)t.data.names[c].toLowerCase().includes(l)&&u.push(c);return u});var r=KM(),s=at(r),a=nt(s,2);{var o=l=>{var u=jM();an(u,21,()=>W(i),sn,(c,f)=>{var h=qM(),p=at(h),_=at(p),g=nt(_);{var m=d=>{var A=YM(),E=at(A);_e(()=>Yt(E,`· ${t.data.countries[t.data.countryIndex[W(f)]]??""}`)),Bt(d,A)};Ce(g,d=>{t.data.level==="institution"&&d(m)})}_e(()=>Yt(_,`${t.data.names[W(f)]??""} `)),Ye("click",p,()=>{L.selected=W(f),Ne(e,"")}),Bt(c,h)}),Bt(l,u)};Ce(a,l=>{W(i).length>0&&l(o)})}_e(()=>js(s,"placeholder",t.data.level==="country"?"search countries…":"search institutions…")),en(s,()=>W(e),l=>Ne(e,l)),Bt(n,r),nr()}Nr(["click"]);var $M=$t('<div><div class="text-[9px] text-[#898781]"> </div> <div class="tabular-nums text-[11px]"> </div> <div class="text-[9px] text-[#898781]"> </div></div>'),JM=$t('<span class="rounded bg-black/30 px-1.5 py-0.5 tabular-nums"> </span>'),QM=$t('<li><button class="text-left hover:text-[#3987e5]"> </button></li>'),tS=$t('<div class="text-[9px] text-[#898781] mt-1">drag the time slider — for rarely-seen institutions this list churns.</div>'),eS=$t('<section class="rounded border border-white/10 p-3 text-xs flex flex-col gap-2"><div class="flex items-start justify-between gap-2"><div><div class="text-sm font-medium leading-snug"> </div> <div class="text-[#898781]"><!></div></div> <button class="text-[#898781] hover:text-white" aria-label="close">✕</button></div> <div class="grid gap-1 text-center"></div> <div><div class="text-[#898781] mb-0.5">retention ρ per step (1 = no motion beyond noise)</div> <div class="flex gap-1 flex-wrap"></div></div> <div><div class="text-[#898781] mb-0.5"> </div> <ul class="flex flex-col gap-0.5"></ul> <!></div></section>');function nS(n,t){er(t,!0);const e=Fe(()=>L.selected),i=Fe(()=>t.data.windows.length),r=Fe(()=>Math.min(Math.round(L.t),W(i)-1)),s=Fe(()=>{if(W(e)<0)return[];const h=[];for(let p=0;p<t.data.neighbourCount;p++)h.push(t.data.neighbours[(W(e)*W(i)+W(r))*t.data.neighbourCount+p]);return h}),a=Fe(()=>{if(W(e)<0||t.data.level!=="country"||!t.instData)return 0;const h=t.data.countryIndex[W(e)];let p=0;for(let _=0;_<t.instData.n;_++)t.instData.countryIndex[_]===h&&p++;return p}),o=Fe(()=>{if(W(e)<0)return[];const h=[];for(let p=0;p<W(i)-1;p++)h.push(t.data.rho[W(e)*(W(i)-1)+p]);return h}),l=(h,p=2)=>Number.isFinite(h)?h.toFixed(p):"–";var u=Rf(),c=ma(u);{var f=h=>{var p=eS(),_=at(p),g=at(_),m=at(g),d=at(m),A=nt(m,2),E=at(A);{var M=X=>{var Z=vu();_e(G=>Yt(Z,`${G??""} institutions`),[()=>W(a).toLocaleString()]),Bt(X,Z)},R=X=>{var Z=vu();_e(()=>Yt(Z,t.data.countries[t.data.countryIndex[W(e)]])),Bt(X,Z)};Ce(E,X=>{t.data.level==="country"?X(M):X(R,-1)})}var w=nt(g,2),T=nt(_,2);an(T,21,()=>t.data.windows,sn,(X,Z,G)=>{var st=$M(),ft=at(st),Ct=at(ft),Vt=nt(ft,2),$=at(Vt),k=nt(Vt,2),Y=at(k);_e((lt,rt,pt)=>{na(st,1,`rounded bg-black/30 py-1 ${G===W(r)?"ring-1 ring-[#3987e5]":""}`),Yt(Ct,`${lt??""}${W(Z).length>4?"·":""}`),Yt($,rt),Yt(Y,`rel ${pt??""}`)},[()=>W(Z).slice(0,4),()=>Math.round(2**t.data.exposure[W(e)*W(i)+G]).toLocaleString(),()=>l(t.data.reliability[W(e)*W(i)+G])]),Bt(X,st)});var P=nt(T,2),y=nt(at(P),2);an(y,21,()=>W(o),sn,(X,Z)=>{var G=JM(),st=at(G);_e(ft=>Yt(st,ft),[()=>l(W(Z))]),Bt(X,G)});var x=nt(P,2),D=at(x),j=at(D),V=nt(D,2);an(V,21,()=>W(s),sn,(X,Z)=>{var G=QM(),st=at(G),ft=at(st);_e(()=>Yt(ft,t.data.names[W(Z)])),Ye("click",st,()=>L.selected=W(Z)),Bt(X,G)});var J=nt(V,2);{var Q=X=>{var Z=tS();Bt(X,Z)};Ce(J,X=>{t.data.level==="institution"&&X(Q)})}_e(X=>{Yt(d,t.data.names[W(e)]),os(T,`grid-template-columns: repeat(${X??""}, minmax(0, 1fr))`),Yt(j,`nearest neighbours in ${t.data.windows[W(r)]??""}`)},[()=>Math.min(W(i),5)]),Ye("click",w,()=>L.selected=-1),Bt(h,p)};Ce(c,h=>{W(e)>=0&&h(f)})}Bt(n,u),nr()}Nr(["click"]);var iS=$t('<li class="flex items-center gap-2"><button> </button> <span class="inline-block h-1.5 rounded bg-[#6da7ec]"></span></li>'),rS=$t('<section class="rounded border border-white/10 p-3 text-xs"><div class="text-[10px] uppercase tracking-widest text-[#898781] mb-1.5">fastest movers</div> <ul class="flex flex-col gap-1"></ul></section>');function sS(n,t){er(t,!0);const e=Fe(()=>{const a=t.data.windows.length,o=t.data.level==="country"?5:9,l=[];for(let u=0;u<t.data.n;u++){let c=0;for(let f=0;f<a;f++)c=Math.max(c,t.data.exposure[u*a+f]);c>=o&&l.push({index:u,speed:t.data.speed[u]})}return l.sort((u,c)=>c.speed-u.speed),l.slice(0,12)}),i=Fe(()=>W(e).length?W(e)[0].speed:1);var r=rS(),s=nt(at(r),2);an(s,21,()=>W(e),sn,(a,o)=>{var l=iS(),u=at(l),c=at(u),f=nt(u,2);_e(h=>{na(u,1,`flex-1 text-left truncate hover:text-[#3987e5] ${L.selected===W(o).index?"text-[#3987e5]":""}`),Yt(c,t.data.names[W(o).index]),os(f,`width: ${h??""}px`)},[()=>Math.max(4,W(o).speed/W(i)*48)]),Ye("click",u,()=>L.selected=W(o).index),Bt(a,l)}),Bt(n,r),nr()}Nr(["click"]);var aS=$t('<div class="flex items-center gap-2"><span class="inline-block w-2.5 h-2.5 rounded-full"></span> <span class="text-[#c3c2b7]"> </span></div>'),oS=$t('<div class="flex flex-col gap-1 pointer-events-none"></div>'),lS=$t('<button><span class="inline-block w-2.5 h-2.5 rounded-full shrink-0"></span> <span class="text-[#c3c2b7] truncate flex-1"> </span> <span class="text-[#898781] tabular-nums"> </span></button>'),cS=$t('<div class="flex flex-col gap-0.5 max-h-[38vh] overflow-y-auto pr-1"></div>'),uS=$t('<div class="text-[#898781] mt-1 pointer-events-none">mean noise-corrected motion per step</div>'),hS=$t('<div class="flex items-center gap-2 pointer-events-none"><span class="text-[#c3c2b7]"> </span> <span class="inline-block h-2 w-24 rounded"></span> <span class="text-[#c3c2b7]"> </span></div> <!>',1),fS=$t("<div>size = how often seen in the data</div>"),dS=$t("<div>halo = measured uncertainty</div>"),pS=$t('<div class="hidden sm:block absolute bottom-4 right-4 rounded bg-[#1a1a19]/90 border border-white/10 px-3 py-2 text-[11px] select-none max-w-[230px]"><!> <div class="mt-1.5 pt-1.5 border-t border-white/10 text-[#898781] pointer-events-none"><!> <!></div></div>');function mS(n,t){er(t,!0);const e=Fe(()=>{if(!t.data||L.colorBy!=="country")return[];const p=new Map;for(let _=0;_<t.data.n;_++)p.set(t.data.countryIndex[_],(p.get(t.data.countryIndex[_])??0)+1);return[...p.entries()].sort((_,g)=>g[1]-_[1]).map(([_,g])=>({cc:_,name:If(t.data.countries[_]),count:g,rank:t.data.countryRank[_]}))});var i=pS(),r=at(i);{var s=p=>{var _=oS();an(_,21,()=>Object.entries(fd),sn,(g,m)=>{var d=Fe(()=>Hh(W(m),2));let A=()=>W(d)[0],E=()=>W(d)[1];var M=aS(),R=at(M),w=nt(R,2),T=at(w);_e(()=>{os(R,`background:${E()??""}`),Yt(T,A())}),Bt(g,M)}),Bt(p,_)},a=p=>{var _=cS();an(_,21,()=>W(e),sn,(g,m)=>{var d=lS(),A=at(d),E=nt(A,2),M=at(E),R=nt(E,2),w=at(R);_e(T=>{na(d,1,`flex items-center gap-2 text-left rounded px-0.5 hover:bg-white/10 ${L.countryFilter===W(m).cc?"bg-white/15":""}`),os(A,`background:${T??""}`),Yt(M,W(m).name),Yt(w,W(m).count)},[()=>LM(dd(W(m).rank))]),Ye("click",d,()=>L.countryFilter=L.countryFilter===W(m).cc?-1:W(m).cc),Bt(g,d)}),Bt(p,_)},o=p=>{var _=hS(),g=ma(_),m=at(g),d=at(m),A=nt(m,2),E=nt(A,2),M=at(E),R=nt(g,2);{var w=T=>{var P=uS();Bt(T,P)};Ce(R,T=>{L.colorBy==="speed"&&T(w)})}_e(T=>{Yt(d,L.colorBy==="speed"?"slow":"low"),os(A,`background:linear-gradient(90deg, ${T??""})`),Yt(M,L.colorBy==="speed"?"fast":"high")},[()=>Nc.join(",")]),Bt(p,_)};Ce(r,p=>{L.colorBy==="continent"?p(s):L.colorBy==="country"?p(a,1):p(o,-1)})}var l=nt(r,2),u=at(l);{var c=p=>{var _=fS();Bt(p,_)};Ce(u,p=>{L.sizeContrast>0&&p(c)})}var f=nt(u,2);{var h=p=>{var _=dS();Bt(p,_)};Ce(f,p=>{L.halo&&p(h)})}Bt(n,i),nr()}Nr(["click"]);jd();var Gs=$p(()=>L),_S=$t(`<div class="fixed inset-0 z-50 grid place-items-center bg-black/70 p-6" role="presentation"><div class="max-w-xl rounded-lg bg-[#1a1a19] border border-white/10 p-6 text-sm leading-relaxed" role="presentation"><h2 class="text-base font-semibold mb-2">About this map</h2> <p class="text-[#c3c2b7]">Each point is a research institution, placed by skip-gram embeddings of researcher career
        trajectories from OpenAlex, one map for each year from 2008 to 2025: institutions that exchange
        researchers sit close together. Every year is embedded on its own, so the motion between years is
        measured rather than modelled, and the same institutions appear in every year. The country level
        shows the exposure-weighted centre of each country's institutions.</p> <p class="text-[#c3c2b7] mt-2">Every year is trained on two disjoint halves of the researchers, twice each. The halo around a
        point is how far those runs disagree, so the blur is part of the data. The <em>single run</em> switch shows one run on its own: much of the apparent motion of small institutions is training
        noise.</p> <p class="text-[#c3c2b7] mt-2">Positions are principal components of each institution's cosine similarities to 512 anchors, the
        institutions most present in every year, in one frame shared by all years. Neighbours are the
        institutions with the most similar profiles in the same year.</p> <p class="text-[#898781] mt-3 text-xs">clareLab · <a class="underline hover:text-white" href="https://clarelab.moe">clarelab.moe</a></p> <button class="mt-4 px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-xs">close</button></div></div>`);function gS(n,t){er(t,!1),Zp();var e=Rf(),i=ma(e);{var r=s=>{var a=_S(),o=at(a),l=nt(at(o),10);Ye("click",a,()=>Gs(Gs().aboutOpen=!1)),Ye("click",o,u=>u.stopPropagation()),Ye("click",l,()=>Gs(Gs().aboutOpen=!1)),Bt(s,a)};Ce(i,s=>{Gs().aboutOpen&&s(r)})}Bt(n,e),nr()}Nr(["click"]);var vS=$t('<canvas class="h-full w-full block cursor-crosshair"></canvas>'),xS=$t('<div style="opacity: 0" class="absolute top-0 left-0"></div>'),MS=$t('<canvas class="h-full w-full block"></canvas>'),SS=$t('<div class="hidden sm:block absolute bottom-4 left-4 w-[300px] h-[240px] rounded-lg overflow-hidden border border-white/10 bg-[#0d0d0d]/80"><div class="absolute top-1.5 left-2 z-10 text-[10px] uppercase tracking-wider text-[#898781]"> </div> <!></div>'),yS=$t('<span class="text-[#898781]"> </span>'),ES=$t('<div class="fixed z-40 pointer-events-none rounded bg-[#1a1a19]/95 border border-white/15 px-2 py-1 text-xs"> <!></div>'),bS=$t('<div class="absolute inset-0 grid place-items-center text-[#898781] text-sm">loading the map…</div>'),TS=$t('<div class="absolute inset-0 grid place-items-center text-red-400 text-sm"> </div>'),AS=$t('<div class="absolute top-4 left-4 pointer-events-none select-none"><h1 class="text-lg font-semibold tracking-tight">A Moving Map of Science</h1> <p class="text-xs text-[#c3c2b7] max-w-[360px] mt-1"> </p></div> <!>',1),wS=$t('<aside class="w-[340px] shrink-0 h-full overflow-y-auto bg-[#1a1a19] border-l border-white/10 p-4 flex flex-col gap-4"><!> <!> <!> <!> <div class="mt-auto pt-3 border-t border-white/10 text-[11px] text-[#898781] leading-relaxed"><button class="underline hover:text-white">about this map</button> <div class="mt-1">clareLab · <a class="hover:text-white" href="https://clarelab.moe">clarelab.moe</a></div></div></aside>'),RS=$t('<div class="h-screen w-screen bg-[#0d0d0d] text-white flex overflow-hidden font-sans"><div class="relative flex-1 min-w-0"><!> <div class="absolute inset-0 pointer-events-none overflow-hidden"></div> <div class="absolute bottom-4 left-1/2 -translate-x-1/2 text-4xl font-semibold tabular-nums text-white/25 pointer-events-none select-none"></div> <!> <!> <!> <!> <!></div> <!> <!></div>');function CS(n,t){er(t,!0);let e=qe(null),i=qe(null),r=qe(null),s=qe(null),a=qe(Xi([])),o=qe(null),l=qe(null),u=qe(""),c=null,f="",h=null;const p=Fe(()=>L.level==="country"?W(l):W(o)),_=Fe(()=>`${L.datasetId}:${L.level}`),g=Fe(()=>{const $=W(p);if(!$)return[];const k=$.windows.length,Y=[];for(let pt=0;pt<$.n;pt++){if(L.countryFilter>=0&&$.countryIndex[pt]!==L.countryFilter)continue;let Pt=0;for(let ht=0;ht<k;ht++)Pt=Math.max(Pt,$.exposure[pt*k+ht]);Pt>=L.minExposureLog&&Y.push({index:pt,score:Pt})}Y.sort((pt,Pt)=>Pt.score-pt.score);const lt=Math.floor(Y.length*.12),rt=Y.length?Y[Math.min(lt,Y.length-1)].score:0;return Y.map(({index:pt,score:Pt})=>({index:pt,name:$.names[pt],tier:Pt>=rt?0:1}))}),m=$=>{L.selected=$},d=($,k,Y)=>{L.hovered=$,L.hoverX=k,L.hoverY=Y};async function A($){try{const Y=await sm("./data/",$);Ne(o,Y,!0),Ne(l,om(Y),!0),L.datasetId=$,L.selected=-1,L.hovered=-1,L.t=Math.min(L.t,Y.windows.length-1),L.loaded=!0}catch(k){Ne(u,String(k),!0)}}Jp(()=>{let $=0,k=performance.now(),Y=1,lt=0;const rt=new URLSearchParams(window.location.search);for(const ht of["colorBy","level","datasetId"]){const Ft=rt.get(ht);Ft&&(L[ht]=Ft)}for(const ht of["playSpeed","sizeContrast","linkOpacity","linkMinSim","haloScale","pointScale","pointOpacity","trail","spread"]){const Ft=rt.get(ht);Ft!==null&&!Number.isNaN(Number(Ft))&&(L[ht]=Number(Ft))}for(const ht of["linkK","labelCount","minExposureLog","axisX","axisY","axisZ","countryFilter"]){const Ft=rt.get(ht);Ft!==null&&!Number.isNaN(Number(Ft))&&(L[ht]=Math.round(Number(Ft)))}for(const ht of["singleRun","halo","autoRotate","playing","view2d","linkMutual","moversOpen","dimOnSelect"]){const Ft=rt.get(ht);Ft!==null&&(L[ht]=Ft==="1"||Ft==="true")}(async()=>{Ne(a,await im("./data/"),!0);const ht=rt.get("datasetId");await A(ht&&W(a).some(Zt=>Zt.id===ht)?ht:W(a)[0].id);const Ft=Number(rt.get("selected"));rt.get("selected")!==null&&!Number.isNaN(Ft)&&(L.selected=Math.round(Ft));const Wt=Number(rt.get("t"));rt.get("t")!==null&&!Number.isNaN(Wt)&&(L.t=Wt)})();const pt=ht=>{ht.key==="Escape"&&(L.selected=-1,L.countryFilter=-1)};window.addEventListener("keydown",pt);const Pt=ht=>{const Ft=Math.min((ht-k)/1e3,.1);k=ht;const Wt=W(p);if(Wt&&c){const Zt=Wt.windows.length-1;if(L.playing){let bt=L.t+Y*Ft*L.playSpeed;bt>Zt&&(bt=Zt,Y=-1),bt<0&&(bt=0,Y=1),L.t=bt}const C=Math.min(Math.round(L.t),Zt),We=`${W(_)}:${L.selected}:${C}:${L.dimOnSelect}:${L.countryFilter}`;if(We!==f){f=We;let bt=null;if(L.selected>=0&&L.dimOnSelect){bt=new Set([L.selected]);const kt=Wt.neighbourCount;for(let wt=0;wt<kt;wt++)bt.add(Wt.neighbours[(L.selected*Wt.windows.length+C)*kt+wt]);h=bt}else if(h=null,L.countryFilter>=0){bt=new Set;for(let kt=0;kt<Wt.n;kt++)Wt.countryIndex[kt]===L.countryFilter&&bt.add(kt)}c.s3.setDim(bt),c.s2.setDim(bt)}for(const bt of[c.s3,c.s2])bt.apply(L.t,L.singleRun,L.halo,L.haloScale,L.pointScale,L.autoRotate),bt.updateSelection(L.selected,L.t,L.singleRun),bt.render();if(W(s)&&(W(s).textContent=Wt.stepYears===1?String(Math.round(parseInt(Wt.windows[0])+L.t)):Wt.windows[C]),lt=(lt+1)%20,lt===0){const bt=c.s3.camera.position;L.camLive=`${bt.x.toFixed(2)}, ${bt.y.toFixed(2)}, ${bt.z.toFixed(2)}`}if(W(r)){const bt=W(r).children,kt=c.s3.canvas.clientWidth,wt=c.s3.canvas.clientHeight,de=[];let Tt=0;const b=h?[...h].map(v=>({index:v,name:Wt.names[v],tier:v===L.selected?0:1})):W(g);for(const v of b){if(Tt>=bt.length)break;const F=c.s3.project(v.index,L.t,L.singleRun);if(F.behind||F.x<0||F.y<12||F.x>kt-30||F.y>wt-12)continue;const tt=10+v.name.length*5.4,it={x1:F.x-4,y1:F.y-8,x2:F.x+tt,y2:F.y+8};if(!h){let Rt=!1;for(const dt of de)if(it.x1<dt.x2&&it.x2>dt.x1&&it.y1<dt.y2&&it.y2>dt.y1){Rt=!0;break}if(Rt)continue}de.push(it);const K=bt[Tt++];K.dataset.index!==String(v.index)&&(K.dataset.index=String(v.index),K.textContent=v.name),K.className=v.tier===0?"absolute top-0 left-0 whitespace-nowrap pl-1.5 -translate-y-1/2 text-[11px] text-white/85 font-medium":"absolute top-0 left-0 whitespace-nowrap pl-1.5 -translate-y-1/2 text-[9.5px] text-white/55",K.style.textShadow="0 1px 3px #000",K.style.opacity="",K.style.transform=`translate(${F.x.toFixed(1)}px, ${F.y.toFixed(1)}px)`}for(;Tt<bt.length;Tt++)bt[Tt].style.opacity="0"}}$=requestAnimationFrame(Pt)};return $=requestAnimationFrame(Pt),()=>{cancelAnimationFrame($),window.removeEventListener("keydown",pt),c==null||c.s3.dispose(),c==null||c.s2.dispose(),c=null}}),Tn(()=>{const $=W(p),k=W(e),Y=W(i);!$||!k||!Y||Ir(()=>{c==null||c.s3.dispose(),c==null||c.s2.dispose(),c={s3:new Lh(k,{flat:!1,data:$,onPick:m,onHover:d}),s2:new Lh(Y,{flat:!0,data:$,onPick:m})},f="",h=null;for(const lt of[c.s3,c.s2])lt.setAxes([L.axisX,L.axisY,L.axisZ]),lt.setColors(L.colorBy),lt.setVisibility(L.minExposureLog),lt.setLinkOptions(L.linkK,Math.round((L.linkMinSim+1)/2*255),L.linkMutual),lt.setLinkOpacity(L.linkOpacity),lt.setSizes(L.sizeContrast),lt.setPointOpacity(L.pointOpacity),lt.setSpread(L.spread),lt.setTrail(L.trail)})}),Tn(()=>{if(!L.loaded)return;const $=L.colorBy;c==null||c.s3.setColors($),c==null||c.s2.setColors($)}),Tn(()=>{if(!L.loaded)return;const $=L.minExposureLog;c==null||c.s3.setVisibility($),c==null||c.s2.setVisibility($)}),Tn(()=>{if(!L.loaded)return;const $=L.linkK,k=Math.round((L.linkMinSim+1)/2*255),Y=L.linkMutual;c==null||c.s3.setLinkOptions($,k,Y),c==null||c.s2.setLinkOptions($,k,Y)}),Tn(()=>{if(!L.loaded)return;const $=[L.axisX,L.axisY,L.axisZ];c==null||c.s3.setAxes($),c==null||c.s2.setAxes($)}),Tn(()=>{if(!L.loaded)return;const $=L.spread;c==null||c.s3.setSpread($),c==null||c.s2.setSpread($)}),Tn(()=>{if(!L.loaded)return;const $=L.sizeContrast;c==null||c.s3.setSizes($),c==null||c.s2.setSizes($)}),Tn(()=>{if(!L.loaded)return;const $=L.linkOpacity;c==null||c.s3.setLinkOpacity($),c==null||c.s2.setLinkOpacity($)}),Tn(()=>{if(!L.loaded)return;const $=L.pointOpacity;c==null||c.s3.setPointOpacity($),c==null||c.s2.setPointOpacity($)}),Tn(()=>{if(!L.loaded)return;const $=L.trail;c==null||c.s3.setTrail($),c==null||c.s2.setTrail($)});const E=()=>{c==null||c.s3.resetView(),c==null||c.s2.resetView()},M=($,k,Y)=>{c==null||c.s3.setCameraPosition($,k,Y)};var R=RS(),w=at(R),T=at(w);xu(T,()=>W(_),$=>{var k=vS();Ra(k,Y=>Ne(e,Y),()=>W(e)),Bt($,k)});var P=nt(T,2);an(P,21,()=>{var $;return Array(Math.max(L.labelCount,L.selected>=0?((($=W(p))==null?void 0:$.neighbourCount)??5)+1:0))},sn,($,k)=>{var Y=xS();Bt($,Y)}),Ra(P,$=>Ne(r,$),()=>W(r));var y=nt(P,2);Ra(y,$=>Ne(s,$),()=>W(s));var x=nt(y,2);{var D=$=>{var k=SS(),Y=at(k),lt=at(Y),rt=nt(Y,2);xu(rt,()=>W(_),pt=>{var Pt=MS();Ra(Pt,ht=>Ne(i,ht),()=>W(i)),Bt(pt,Pt)}),_e(()=>Yt(lt,`top view · PC${L.axisX+1} × PC${L.axisY+1}`)),Bt($,k)};Ce(x,$=>{L.view2d&&$(D)})}var j=nt(x,2);{var V=$=>{var k=ES(),Y=at(k),lt=nt(Y);{var rt=pt=>{var Pt=yS(),ht=at(Pt);_e(()=>Yt(ht,`· ${W(p).countries[W(p).countryIndex[L.hovered]]??""}`)),Bt(pt,Pt)};Ce(lt,pt=>{W(p).level==="institution"&&pt(rt)})}_e(()=>{os(k,`left: ${L.hoverX+14}px; top: ${L.hoverY+10}px`),Yt(Y,`${W(p).names[L.hovered]??""} `)}),Bt($,k)};Ce(j,$=>{L.hovered>=0&&W(p)&&$(V)})}var J=nt(j,2);{var Q=$=>{var k=bS();Bt($,k)};Ce(J,$=>{!L.loaded&&!W(u)&&$(Q)})}var X=nt(J,2);{var Z=$=>{var k=TS(),Y=at(k);_e(()=>Yt(Y,W(u))),Bt($,k)};Ce(X,$=>{W(u)&&$(Z)})}var G=nt(X,2);{var st=$=>{var k=AS(),Y=ma(k),lt=nt(at(Y),2),rt=at(lt),pt=nt(Y,2);{let Pt=Fe(()=>W(p)??W(o));mS(pt,{get data(){return W(Pt)}})}_e((Pt,ht,Ft)=>Yt(rt,`${Pt??""} research institutions placed by who exchanges researchers
          with whom, ${ht??""}–${Ft??""}.
          Blur is measured uncertainty, not style.`),[()=>W(o).n.toLocaleString(),()=>W(o).windows[0].slice(0,4),()=>W(o).windows[W(o).windows.length-1].slice(-4)]),Bt($,k)};Ce(G,$=>{W(o)&&$(st)})}var ft=nt(w,2);{var Ct=$=>{var k=wS(),Y=at(k);ZM(Y,{get data(){return W(p)}});var lt=nt(Y,2);nS(lt,{get data(){return W(p)},get instData(){return W(o)}});var rt=nt(lt,2);{var pt=Wt=>{sS(Wt,{get data(){return W(p)}})};Ce(rt,Wt=>{L.moversOpen&&Wt(pt)})}var Pt=nt(rt,2);XM(Pt,{get data(){return W(p)},get datasets(){return W(a)},onDataset:A,onReset:E,onCamera:M});var ht=nt(Pt,2),Ft=at(ht);Ye("click",Ft,()=>L.aboutOpen=!0),Bt($,k)};Ce(ft,$=>{W(p)&&$(Ct)})}var Vt=nt(ft,2);gS(Vt,{}),Bt(n,R),nr()}Nr(["click"]);Fp(CS,{target:document.getElementById("app")});
