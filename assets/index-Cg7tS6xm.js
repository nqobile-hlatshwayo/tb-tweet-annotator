(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function ME(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Cy={exports:{}},Ul={},ky={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ro=Symbol.for("react.element"),FE=Symbol.for("react.portal"),UE=Symbol.for("react.fragment"),jE=Symbol.for("react.strict_mode"),zE=Symbol.for("react.profiler"),BE=Symbol.for("react.provider"),$E=Symbol.for("react.context"),HE=Symbol.for("react.forward_ref"),qE=Symbol.for("react.suspense"),WE=Symbol.for("react.memo"),KE=Symbol.for("react.lazy"),Mp=Symbol.iterator;function GE(t){return t===null||typeof t!="object"?null:(t=Mp&&t[Mp]||t["@@iterator"],typeof t=="function"?t:null)}var Py={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xy=Object.assign,Ny={};function Ys(t,e,n){this.props=t,this.context=e,this.refs=Ny,this.updater=n||Py}Ys.prototype.isReactComponent={};Ys.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ys.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Dy(){}Dy.prototype=Ys.prototype;function Yh(t,e,n){this.props=t,this.context=e,this.refs=Ny,this.updater=n||Py}var Xh=Yh.prototype=new Dy;Xh.constructor=Yh;xy(Xh,Ys.prototype);Xh.isPureReactComponent=!0;var Fp=Array.isArray,Vy=Object.prototype.hasOwnProperty,Jh={current:null},by={key:!0,ref:!0,__self:!0,__source:!0};function Oy(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Vy.call(e,r)&&!by.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Ro,type:t,key:i,ref:o,props:s,_owner:Jh.current}}function QE(t,e){return{$$typeof:Ro,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ro}function YE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Up=/\/+/g;function Bu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?YE(""+t.key):e.toString(36)}function Aa(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ro:case FE:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Bu(o,0):r,Fp(s)?(n="",t!=null&&(n=t.replace(Up,"$&/")+"/"),Aa(s,e,n,"",function(h){return h})):s!=null&&(Zh(s)&&(s=QE(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Up,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Fp(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+Bu(i,l);o+=Aa(i,e,n,u,s)}else if(u=GE(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+Bu(i,l++),o+=Aa(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function na(t,e,n){if(t==null)return t;var r=[],s=0;return Aa(t,r,"","",function(i){return e.call(n,i,s++)}),r}function XE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ct={current:null},Ra={transition:null},JE={ReactCurrentDispatcher:ct,ReactCurrentBatchConfig:Ra,ReactCurrentOwner:Jh};function Ly(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:na,forEach:function(t,e,n){na(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return na(t,function(){e++}),e},toArray:function(t){return na(t,function(e){return e})||[]},only:function(t){if(!Zh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=Ys;re.Fragment=UE;re.Profiler=zE;re.PureComponent=Yh;re.StrictMode=jE;re.Suspense=qE;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JE;re.act=Ly;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=xy({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Jh.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Vy.call(e,u)&&!by.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Ro,type:t.type,key:s,ref:i,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:$E,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:BE,_context:t},t.Consumer=t};re.createElement=Oy;re.createFactory=function(t){var e=Oy.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:HE,render:t}};re.isValidElement=Zh;re.lazy=function(t){return{$$typeof:KE,_payload:{_status:-1,_result:t},_init:XE}};re.memo=function(t,e){return{$$typeof:WE,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=Ra.transition;Ra.transition={};try{t()}finally{Ra.transition=e}};re.unstable_act=Ly;re.useCallback=function(t,e){return ct.current.useCallback(t,e)};re.useContext=function(t){return ct.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return ct.current.useDeferredValue(t)};re.useEffect=function(t,e){return ct.current.useEffect(t,e)};re.useId=function(){return ct.current.useId()};re.useImperativeHandle=function(t,e,n){return ct.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return ct.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return ct.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return ct.current.useMemo(t,e)};re.useReducer=function(t,e,n){return ct.current.useReducer(t,e,n)};re.useRef=function(t){return ct.current.useRef(t)};re.useState=function(t){return ct.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return ct.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return ct.current.useTransition()};re.version="18.3.1";ky.exports=re;var ie=ky.exports;const ZE=ME(ie);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eT=ie,tT=Symbol.for("react.element"),nT=Symbol.for("react.fragment"),rT=Object.prototype.hasOwnProperty,sT=eT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,iT={key:!0,ref:!0,__self:!0,__source:!0};function My(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)rT.call(e,r)&&!iT.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:tT,type:t,key:i,ref:o,props:s,_owner:sT.current}}Ul.Fragment=nT;Ul.jsx=My;Ul.jsxs=My;Cy.exports=Ul;var C=Cy.exports,xc={},Fy={exports:{}},St={},Uy={exports:{}},jy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,q){var K=U.length;U.push(q);e:for(;0<K;){var oe=K-1>>>1,_e=U[oe];if(0<s(_e,q))U[oe]=q,U[K]=_e,K=oe;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var q=U[0],K=U.pop();if(K!==q){U[0]=K;e:for(var oe=0,_e=U.length,rt=_e>>>1;oe<rt;){var Ke=2*(oe+1)-1,hn=U[Ke],st=Ke+1,bn=U[st];if(0>s(hn,K))st<_e&&0>s(bn,hn)?(U[oe]=bn,U[st]=K,oe=st):(U[oe]=hn,U[Ke]=K,oe=Ke);else if(st<_e&&0>s(bn,K))U[oe]=bn,U[st]=K,oe=st;else break e}}return q}function s(U,q){var K=U.sortIndex-q.sortIndex;return K!==0?K:U.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,g=3,R=!1,P=!1,N=!1,L=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(U){for(var q=n(h);q!==null;){if(q.callback===null)r(h);else if(q.startTime<=U)r(h),q.sortIndex=q.expirationTime,e(u,q);else break;q=n(h)}}function V(U){if(N=!1,S(U),!P)if(n(u)!==null)P=!0,Vn(M);else{var q=n(h);q!==null&&J(V,q.startTime-U)}}function M(U,q){P=!1,N&&(N=!1,T(y),y=-1),R=!0;var K=g;try{for(S(q),p=n(u);p!==null&&(!(p.expirationTime>q)||U&&!A());){var oe=p.callback;if(typeof oe=="function"){p.callback=null,g=p.priorityLevel;var _e=oe(p.expirationTime<=q);q=t.unstable_now(),typeof _e=="function"?p.callback=_e:p===n(u)&&r(u),S(q)}else r(u);p=n(u)}if(p!==null)var rt=!0;else{var Ke=n(h);Ke!==null&&J(V,Ke.startTime-q),rt=!1}return rt}finally{p=null,g=K,R=!1}}var j=!1,_=null,y=-1,w=5,I=-1;function A(){return!(t.unstable_now()-I<w)}function k(){if(_!==null){var U=t.unstable_now();I=U;var q=!0;try{q=_(!0,U)}finally{q?E():(j=!1,_=null)}}else j=!1}var E;if(typeof v=="function")E=function(){v(k)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,_t=ee.port2;ee.port1.onmessage=k,E=function(){_t.postMessage(null)}}else E=function(){L(k,0)};function Vn(U){_=U,j||(j=!0,E())}function J(U,q){y=L(function(){U(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){P||R||(P=!0,Vn(M))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(U){switch(g){case 1:case 2:case 3:var q=3;break;default:q=g}var K=g;g=q;try{return U()}finally{g=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,q){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var K=g;g=U;try{return q()}finally{g=K}},t.unstable_scheduleCallback=function(U,q,K){var oe=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?oe+K:oe):K=oe,U){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=K+_e,U={id:f++,callback:q,priorityLevel:U,startTime:K,expirationTime:_e,sortIndex:-1},K>oe?(U.sortIndex=K,e(h,U),n(u)===null&&U===n(h)&&(N?(T(y),y=-1):N=!0,J(V,K-oe))):(U.sortIndex=_e,e(u,U),P||R||(P=!0,Vn(M))),U},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(U){var q=g;return function(){var K=g;g=q;try{return U.apply(this,arguments)}finally{g=K}}}})(jy);Uy.exports=jy;var oT=Uy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aT=ie,It=oT;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zy=new Set,Zi={};function Jr(t,e){Ls(t,e),Ls(t+"Capture",e)}function Ls(t,e){for(Zi[t]=e,t=0;t<e.length;t++)zy.add(e[t])}var In=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nc=Object.prototype.hasOwnProperty,lT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jp={},zp={};function uT(t){return Nc.call(zp,t)?!0:Nc.call(jp,t)?!1:lT.test(t)?zp[t]=!0:(jp[t]=!0,!1)}function cT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hT(t,e,n,r){if(e===null||typeof e>"u"||cT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ht(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qe[t]=new ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qe[e]=new ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qe[t]=new ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qe[t]=new ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qe[t]=new ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qe[t]=new ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qe[t]=new ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qe[t]=new ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qe[t]=new ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var ed=/[\-:]([a-z])/g;function td(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ed,td);qe[e]=new ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ed,td);qe[e]=new ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ed,td);qe[e]=new ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qe[t]=new ht(t,1,!1,t.toLowerCase(),null,!1,!1)});qe.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qe[t]=new ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function nd(t,e,n,r){var s=qe.hasOwnProperty(e)?qe[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hT(e,n,s,r)&&(n=null),r||s===null?uT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Nn=aT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ra=Symbol.for("react.element"),fs=Symbol.for("react.portal"),ps=Symbol.for("react.fragment"),rd=Symbol.for("react.strict_mode"),Dc=Symbol.for("react.profiler"),By=Symbol.for("react.provider"),$y=Symbol.for("react.context"),sd=Symbol.for("react.forward_ref"),Vc=Symbol.for("react.suspense"),bc=Symbol.for("react.suspense_list"),id=Symbol.for("react.memo"),$n=Symbol.for("react.lazy"),Hy=Symbol.for("react.offscreen"),Bp=Symbol.iterator;function Ei(t){return t===null||typeof t!="object"?null:(t=Bp&&t[Bp]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,$u;function xi(t){if($u===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);$u=e&&e[1]||""}return`
`+$u+t}var Hu=!1;function qu(t,e){if(!t||Hu)return"";Hu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Hu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xi(t):""}function dT(t){switch(t.tag){case 5:return xi(t.type);case 16:return xi("Lazy");case 13:return xi("Suspense");case 19:return xi("SuspenseList");case 0:case 2:case 15:return t=qu(t.type,!1),t;case 11:return t=qu(t.type.render,!1),t;case 1:return t=qu(t.type,!0),t;default:return""}}function Oc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ps:return"Fragment";case fs:return"Portal";case Dc:return"Profiler";case rd:return"StrictMode";case Vc:return"Suspense";case bc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $y:return(t.displayName||"Context")+".Consumer";case By:return(t._context.displayName||"Context")+".Provider";case sd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case id:return e=t.displayName||null,e!==null?e:Oc(t.type)||"Memo";case $n:e=t._payload,t=t._init;try{return Oc(t(e))}catch{}}return null}function fT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oc(e);case 8:return e===rd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function pT(t){var e=qy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function sa(t){t._valueTracker||(t._valueTracker=pT(t))}function Wy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=qy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Qa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Lc(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function $p(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ky(t,e){e=e.checked,e!=null&&nd(t,"checked",e,!1)}function Mc(t,e){Ky(t,e);var n=hr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Fc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Fc(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Fc(t,e,n){(e!=="number"||Qa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ni=Array.isArray;function As(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Uc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function qp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Ni(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function Gy(t,e){var n=hr(e.value),r=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Wp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Qy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Qy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ia,Yy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ia=ia||document.createElement("div"),ia.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ia.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function eo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mT=["Webkit","ms","Moz","O"];Object.keys(Fi).forEach(function(t){mT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Fi[e]=Fi[t]})});function Xy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Fi.hasOwnProperty(t)&&Fi[t]?(""+e).trim():e+"px"}function Jy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Xy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var gT=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zc(t,e){if(e){if(gT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Bc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $c=null;function od(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hc=null,Rs=null,Cs=null;function Kp(t){if(t=Po(t)){if(typeof Hc!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Hl(e),Hc(t.stateNode,t.type,e))}}function Zy(t){Rs?Cs?Cs.push(t):Cs=[t]:Rs=t}function e_(){if(Rs){var t=Rs,e=Cs;if(Cs=Rs=null,Kp(t),e)for(t=0;t<e.length;t++)Kp(e[t])}}function t_(t,e){return t(e)}function n_(){}var Wu=!1;function r_(t,e,n){if(Wu)return t(e,n);Wu=!0;try{return t_(t,e,n)}finally{Wu=!1,(Rs!==null||Cs!==null)&&(n_(),e_())}}function to(t,e){var n=t.stateNode;if(n===null)return null;var r=Hl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var qc=!1;if(In)try{var Ti={};Object.defineProperty(Ti,"passive",{get:function(){qc=!0}}),window.addEventListener("test",Ti,Ti),window.removeEventListener("test",Ti,Ti)}catch{qc=!1}function yT(t,e,n,r,s,i,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Ui=!1,Ya=null,Xa=!1,Wc=null,_T={onError:function(t){Ui=!0,Ya=t}};function vT(t,e,n,r,s,i,o,l,u){Ui=!1,Ya=null,yT.apply(_T,arguments)}function wT(t,e,n,r,s,i,o,l,u){if(vT.apply(this,arguments),Ui){if(Ui){var h=Ya;Ui=!1,Ya=null}else throw Error(F(198));Xa||(Xa=!0,Wc=h)}}function Zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function s_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gp(t){if(Zr(t)!==t)throw Error(F(188))}function ET(t){var e=t.alternate;if(!e){if(e=Zr(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Gp(s),t;if(i===r)return Gp(s),e;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function i_(t){return t=ET(t),t!==null?o_(t):null}function o_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=o_(t);if(e!==null)return e;t=t.sibling}return null}var a_=It.unstable_scheduleCallback,Qp=It.unstable_cancelCallback,TT=It.unstable_shouldYield,IT=It.unstable_requestPaint,Ce=It.unstable_now,ST=It.unstable_getCurrentPriorityLevel,ad=It.unstable_ImmediatePriority,l_=It.unstable_UserBlockingPriority,Ja=It.unstable_NormalPriority,AT=It.unstable_LowPriority,u_=It.unstable_IdlePriority,jl=null,en=null;function RT(t){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(jl,t,void 0,(t.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:PT,CT=Math.log,kT=Math.LN2;function PT(t){return t>>>=0,t===0?32:31-(CT(t)/kT|0)|0}var oa=64,aa=4194304;function Di(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Za(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Di(l):(i&=o,i!==0&&(r=Di(i)))}else o=n&~s,o!==0?r=Di(o):i!==0&&(r=Di(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Bt(e),s=1<<n,r|=t[n],e&=~s;return r}function xT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function NT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Bt(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=xT(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Kc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function c_(){var t=oa;return oa<<=1,!(oa&4194240)&&(oa=64),t}function Ku(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Co(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bt(e),t[e]=n}function DT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Bt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function ld(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Bt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ce=0;function h_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var d_,ud,f_,p_,m_,Gc=!1,la=[],Jn=null,Zn=null,er=null,no=new Map,ro=new Map,qn=[],VT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yp(t,e){switch(t){case"focusin":case"focusout":Jn=null;break;case"dragenter":case"dragleave":Zn=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":no.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ro.delete(e.pointerId)}}function Ii(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Po(e),e!==null&&ud(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function bT(t,e,n,r,s){switch(e){case"focusin":return Jn=Ii(Jn,t,e,n,r,s),!0;case"dragenter":return Zn=Ii(Zn,t,e,n,r,s),!0;case"mouseover":return er=Ii(er,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return no.set(i,Ii(no.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,ro.set(i,Ii(ro.get(i)||null,t,e,n,r,s)),!0}return!1}function g_(t){var e=Nr(t.target);if(e!==null){var n=Zr(e);if(n!==null){if(e=n.tag,e===13){if(e=s_(n),e!==null){t.blockedOn=e,m_(t.priority,function(){f_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ca(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);$c=r,n.target.dispatchEvent(r),$c=null}else return e=Po(n),e!==null&&ud(e),t.blockedOn=n,!1;e.shift()}return!0}function Xp(t,e,n){Ca(t)&&n.delete(e)}function OT(){Gc=!1,Jn!==null&&Ca(Jn)&&(Jn=null),Zn!==null&&Ca(Zn)&&(Zn=null),er!==null&&Ca(er)&&(er=null),no.forEach(Xp),ro.forEach(Xp)}function Si(t,e){t.blockedOn===e&&(t.blockedOn=null,Gc||(Gc=!0,It.unstable_scheduleCallback(It.unstable_NormalPriority,OT)))}function so(t){function e(s){return Si(s,t)}if(0<la.length){Si(la[0],t);for(var n=1;n<la.length;n++){var r=la[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Jn!==null&&Si(Jn,t),Zn!==null&&Si(Zn,t),er!==null&&Si(er,t),no.forEach(e),ro.forEach(e),n=0;n<qn.length;n++)r=qn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<qn.length&&(n=qn[0],n.blockedOn===null);)g_(n),n.blockedOn===null&&qn.shift()}var ks=Nn.ReactCurrentBatchConfig,el=!0;function LT(t,e,n,r){var s=ce,i=ks.transition;ks.transition=null;try{ce=1,cd(t,e,n,r)}finally{ce=s,ks.transition=i}}function MT(t,e,n,r){var s=ce,i=ks.transition;ks.transition=null;try{ce=4,cd(t,e,n,r)}finally{ce=s,ks.transition=i}}function cd(t,e,n,r){if(el){var s=Qc(t,e,n,r);if(s===null)rc(t,e,r,tl,n),Yp(t,r);else if(bT(s,t,e,n,r))r.stopPropagation();else if(Yp(t,r),e&4&&-1<VT.indexOf(t)){for(;s!==null;){var i=Po(s);if(i!==null&&d_(i),i=Qc(t,e,n,r),i===null&&rc(t,e,r,tl,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else rc(t,e,r,null,n)}}var tl=null;function Qc(t,e,n,r){if(tl=null,t=od(r),t=Nr(t),t!==null)if(e=Zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=s_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return tl=t,null}function y_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ST()){case ad:return 1;case l_:return 4;case Ja:case AT:return 16;case u_:return 536870912;default:return 16}default:return 16}}var Yn=null,hd=null,ka=null;function __(){if(ka)return ka;var t,e=hd,n=e.length,r,s="value"in Yn?Yn.value:Yn.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return ka=s.slice(t,1<r?1-r:void 0)}function Pa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ua(){return!0}function Jp(){return!1}function At(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ua:Jp,this.isPropagationStopped=Jp,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ua)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ua)},persist:function(){},isPersistent:ua}),e}var Xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dd=At(Xs),ko=Ie({},Xs,{view:0,detail:0}),FT=At(ko),Gu,Qu,Ai,zl=Ie({},ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ai&&(Ai&&t.type==="mousemove"?(Gu=t.screenX-Ai.screenX,Qu=t.screenY-Ai.screenY):Qu=Gu=0,Ai=t),Gu)},movementY:function(t){return"movementY"in t?t.movementY:Qu}}),Zp=At(zl),UT=Ie({},zl,{dataTransfer:0}),jT=At(UT),zT=Ie({},ko,{relatedTarget:0}),Yu=At(zT),BT=Ie({},Xs,{animationName:0,elapsedTime:0,pseudoElement:0}),$T=At(BT),HT=Ie({},Xs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qT=At(HT),WT=Ie({},Xs,{data:0}),em=At(WT),KT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},QT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=QT[t])?!!e[t]:!1}function fd(){return YT}var XT=Ie({},ko,{key:function(t){if(t.key){var e=KT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?GT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fd,charCode:function(t){return t.type==="keypress"?Pa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),JT=At(XT),ZT=Ie({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tm=At(ZT),eI=Ie({},ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fd}),tI=At(eI),nI=Ie({},Xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),rI=At(nI),sI=Ie({},zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),iI=At(sI),oI=[9,13,27,32],pd=In&&"CompositionEvent"in window,ji=null;In&&"documentMode"in document&&(ji=document.documentMode);var aI=In&&"TextEvent"in window&&!ji,v_=In&&(!pd||ji&&8<ji&&11>=ji),nm=" ",rm=!1;function w_(t,e){switch(t){case"keyup":return oI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function E_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ms=!1;function lI(t,e){switch(t){case"compositionend":return E_(e);case"keypress":return e.which!==32?null:(rm=!0,nm);case"textInput":return t=e.data,t===nm&&rm?null:t;default:return null}}function uI(t,e){if(ms)return t==="compositionend"||!pd&&w_(t,e)?(t=__(),ka=hd=Yn=null,ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return v_&&e.locale!=="ko"?null:e.data;default:return null}}var cI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!cI[t.type]:e==="textarea"}function T_(t,e,n,r){Zy(r),e=nl(e,"onChange"),0<e.length&&(n=new dd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var zi=null,io=null;function hI(t){V_(t,0)}function Bl(t){var e=_s(t);if(Wy(e))return t}function dI(t,e){if(t==="change")return e}var I_=!1;if(In){var Xu;if(In){var Ju="oninput"in document;if(!Ju){var im=document.createElement("div");im.setAttribute("oninput","return;"),Ju=typeof im.oninput=="function"}Xu=Ju}else Xu=!1;I_=Xu&&(!document.documentMode||9<document.documentMode)}function om(){zi&&(zi.detachEvent("onpropertychange",S_),io=zi=null)}function S_(t){if(t.propertyName==="value"&&Bl(io)){var e=[];T_(e,io,t,od(t)),r_(hI,e)}}function fI(t,e,n){t==="focusin"?(om(),zi=e,io=n,zi.attachEvent("onpropertychange",S_)):t==="focusout"&&om()}function pI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bl(io)}function mI(t,e){if(t==="click")return Bl(e)}function gI(t,e){if(t==="input"||t==="change")return Bl(e)}function yI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wt=typeof Object.is=="function"?Object.is:yI;function oo(t,e){if(Wt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Nc.call(e,s)||!Wt(t[s],e[s]))return!1}return!0}function am(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lm(t,e){var n=am(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=am(n)}}function A_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?A_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function R_(){for(var t=window,e=Qa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Qa(t.document)}return e}function md(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _I(t){var e=R_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&A_(n.ownerDocument.documentElement,n)){if(r!==null&&md(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=lm(n,i);var o=lm(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var vI=In&&"documentMode"in document&&11>=document.documentMode,gs=null,Yc=null,Bi=null,Xc=!1;function um(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xc||gs==null||gs!==Qa(r)||(r=gs,"selectionStart"in r&&md(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bi&&oo(Bi,r)||(Bi=r,r=nl(Yc,"onSelect"),0<r.length&&(e=new dd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=gs)))}function ca(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ys={animationend:ca("Animation","AnimationEnd"),animationiteration:ca("Animation","AnimationIteration"),animationstart:ca("Animation","AnimationStart"),transitionend:ca("Transition","TransitionEnd")},Zu={},C_={};In&&(C_=document.createElement("div").style,"AnimationEvent"in window||(delete ys.animationend.animation,delete ys.animationiteration.animation,delete ys.animationstart.animation),"TransitionEvent"in window||delete ys.transitionend.transition);function $l(t){if(Zu[t])return Zu[t];if(!ys[t])return t;var e=ys[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in C_)return Zu[t]=e[n];return t}var k_=$l("animationend"),P_=$l("animationiteration"),x_=$l("animationstart"),N_=$l("transitionend"),D_=new Map,cm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(t,e){D_.set(t,e),Jr(e,[t])}for(var ec=0;ec<cm.length;ec++){var tc=cm[ec],wI=tc.toLowerCase(),EI=tc[0].toUpperCase()+tc.slice(1);wr(wI,"on"+EI)}wr(k_,"onAnimationEnd");wr(P_,"onAnimationIteration");wr(x_,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(N_,"onTransitionEnd");Ls("onMouseEnter",["mouseout","mouseover"]);Ls("onMouseLeave",["mouseout","mouseover"]);Ls("onPointerEnter",["pointerout","pointerover"]);Ls("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vi));function hm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,wT(r,e,void 0,t),t.currentTarget=null}function V_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;hm(s,l,h),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;hm(s,l,h),i=u}}}if(Xa)throw t=Wc,Xa=!1,Wc=null,t}function me(t,e){var n=e[nh];n===void 0&&(n=e[nh]=new Set);var r=t+"__bubble";n.has(r)||(b_(e,t,2,!1),n.add(r))}function nc(t,e,n){var r=0;e&&(r|=4),b_(n,t,r,e)}var ha="_reactListening"+Math.random().toString(36).slice(2);function ao(t){if(!t[ha]){t[ha]=!0,zy.forEach(function(n){n!=="selectionchange"&&(TI.has(n)||nc(n,!1,t),nc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ha]||(e[ha]=!0,nc("selectionchange",!1,e))}}function b_(t,e,n,r){switch(y_(e)){case 1:var s=LT;break;case 4:s=MT;break;default:s=cd}n=s.bind(null,e,n,t),s=void 0,!qc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function rc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Nr(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}r_(function(){var h=i,f=od(n),p=[];e:{var g=D_.get(t);if(g!==void 0){var R=dd,P=t;switch(t){case"keypress":if(Pa(n)===0)break e;case"keydown":case"keyup":R=JT;break;case"focusin":P="focus",R=Yu;break;case"focusout":P="blur",R=Yu;break;case"beforeblur":case"afterblur":R=Yu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=jT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=tI;break;case k_:case P_:case x_:R=$T;break;case N_:R=rI;break;case"scroll":R=FT;break;case"wheel":R=iI;break;case"copy":case"cut":case"paste":R=qT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=tm}var N=(e&4)!==0,L=!N&&t==="scroll",T=N?g!==null?g+"Capture":null:g;N=[];for(var v=h,S;v!==null;){S=v;var V=S.stateNode;if(S.tag===5&&V!==null&&(S=V,T!==null&&(V=to(v,T),V!=null&&N.push(lo(v,V,S)))),L)break;v=v.return}0<N.length&&(g=new R(g,P,null,n,f),p.push({event:g,listeners:N}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",g&&n!==$c&&(P=n.relatedTarget||n.fromElement)&&(Nr(P)||P[Sn]))break e;if((R||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,R?(P=n.relatedTarget||n.toElement,R=h,P=P?Nr(P):null,P!==null&&(L=Zr(P),P!==L||P.tag!==5&&P.tag!==6)&&(P=null)):(R=null,P=h),R!==P)){if(N=Zp,V="onMouseLeave",T="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(N=tm,V="onPointerLeave",T="onPointerEnter",v="pointer"),L=R==null?g:_s(R),S=P==null?g:_s(P),g=new N(V,v+"leave",R,n,f),g.target=L,g.relatedTarget=S,V=null,Nr(f)===h&&(N=new N(T,v+"enter",P,n,f),N.target=S,N.relatedTarget=L,V=N),L=V,R&&P)t:{for(N=R,T=P,v=0,S=N;S;S=ls(S))v++;for(S=0,V=T;V;V=ls(V))S++;for(;0<v-S;)N=ls(N),v--;for(;0<S-v;)T=ls(T),S--;for(;v--;){if(N===T||T!==null&&N===T.alternate)break t;N=ls(N),T=ls(T)}N=null}else N=null;R!==null&&dm(p,g,R,N,!1),P!==null&&L!==null&&dm(p,L,P,N,!0)}}e:{if(g=h?_s(h):window,R=g.nodeName&&g.nodeName.toLowerCase(),R==="select"||R==="input"&&g.type==="file")var M=dI;else if(sm(g))if(I_)M=gI;else{M=pI;var j=fI}else(R=g.nodeName)&&R.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(M=mI);if(M&&(M=M(t,h))){T_(p,M,n,f);break e}j&&j(t,g,h),t==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&Fc(g,"number",g.value)}switch(j=h?_s(h):window,t){case"focusin":(sm(j)||j.contentEditable==="true")&&(gs=j,Yc=h,Bi=null);break;case"focusout":Bi=Yc=gs=null;break;case"mousedown":Xc=!0;break;case"contextmenu":case"mouseup":case"dragend":Xc=!1,um(p,n,f);break;case"selectionchange":if(vI)break;case"keydown":case"keyup":um(p,n,f)}var _;if(pd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ms?w_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(v_&&n.locale!=="ko"&&(ms||y!=="onCompositionStart"?y==="onCompositionEnd"&&ms&&(_=__()):(Yn=f,hd="value"in Yn?Yn.value:Yn.textContent,ms=!0)),j=nl(h,y),0<j.length&&(y=new em(y,t,null,n,f),p.push({event:y,listeners:j}),_?y.data=_:(_=E_(n),_!==null&&(y.data=_)))),(_=aI?lI(t,n):uI(t,n))&&(h=nl(h,"onBeforeInput"),0<h.length&&(f=new em("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=_))}V_(p,e)})}function lo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function nl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=to(t,n),i!=null&&r.unshift(lo(t,i,s)),i=to(t,e),i!=null&&r.push(lo(t,i,s))),t=t.return}return r}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dm(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,s?(u=to(n,i),u!=null&&o.unshift(lo(n,u,l))):s||(u=to(n,i),u!=null&&o.push(lo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var II=/\r\n?/g,SI=/\u0000|\uFFFD/g;function fm(t){return(typeof t=="string"?t:""+t).replace(II,`
`).replace(SI,"")}function da(t,e,n){if(e=fm(e),fm(t)!==e&&n)throw Error(F(425))}function rl(){}var Jc=null,Zc=null;function eh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var th=typeof setTimeout=="function"?setTimeout:void 0,AI=typeof clearTimeout=="function"?clearTimeout:void 0,pm=typeof Promise=="function"?Promise:void 0,RI=typeof queueMicrotask=="function"?queueMicrotask:typeof pm<"u"?function(t){return pm.resolve(null).then(t).catch(CI)}:th;function CI(t){setTimeout(function(){throw t})}function sc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),so(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);so(e)}function tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function mm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Js=Math.random().toString(36).slice(2),Zt="__reactFiber$"+Js,uo="__reactProps$"+Js,Sn="__reactContainer$"+Js,nh="__reactEvents$"+Js,kI="__reactListeners$"+Js,PI="__reactHandles$"+Js;function Nr(t){var e=t[Zt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Sn]||n[Zt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=mm(t);t!==null;){if(n=t[Zt])return n;t=mm(t)}return e}t=n,n=t.parentNode}return null}function Po(t){return t=t[Zt]||t[Sn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _s(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Hl(t){return t[uo]||null}var rh=[],vs=-1;function Er(t){return{current:t}}function ye(t){0>vs||(t.current=rh[vs],rh[vs]=null,vs--)}function fe(t,e){vs++,rh[vs]=t.current,t.current=e}var dr={},tt=Er(dr),mt=Er(!1),Br=dr;function Ms(t,e){var n=t.type.contextTypes;if(!n)return dr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function gt(t){return t=t.childContextTypes,t!=null}function sl(){ye(mt),ye(tt)}function gm(t,e,n){if(tt.current!==dr)throw Error(F(168));fe(tt,e),fe(mt,n)}function O_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(F(108,fT(t)||"Unknown",s));return Ie({},n,r)}function il(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dr,Br=tt.current,fe(tt,t),fe(mt,mt.current),!0}function ym(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=O_(t,e,Br),r.__reactInternalMemoizedMergedChildContext=t,ye(mt),ye(tt),fe(tt,t)):ye(mt),fe(mt,n)}var fn=null,ql=!1,ic=!1;function L_(t){fn===null?fn=[t]:fn.push(t)}function xI(t){ql=!0,L_(t)}function Tr(){if(!ic&&fn!==null){ic=!0;var t=0,e=ce;try{var n=fn;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}fn=null,ql=!1}catch(s){throw fn!==null&&(fn=fn.slice(t+1)),a_(ad,Tr),s}finally{ce=e,ic=!1}}return null}var ws=[],Es=0,ol=null,al=0,Rt=[],Ct=0,$r=null,mn=1,gn="";function kr(t,e){ws[Es++]=al,ws[Es++]=ol,ol=t,al=e}function M_(t,e,n){Rt[Ct++]=mn,Rt[Ct++]=gn,Rt[Ct++]=$r,$r=t;var r=mn;t=gn;var s=32-Bt(r)-1;r&=~(1<<s),n+=1;var i=32-Bt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,mn=1<<32-Bt(e)+s|n<<s|r,gn=i+t}else mn=1<<i|n<<s|r,gn=t}function gd(t){t.return!==null&&(kr(t,1),M_(t,1,0))}function yd(t){for(;t===ol;)ol=ws[--Es],ws[Es]=null,al=ws[--Es],ws[Es]=null;for(;t===$r;)$r=Rt[--Ct],Rt[Ct]=null,gn=Rt[--Ct],Rt[Ct]=null,mn=Rt[--Ct],Rt[Ct]=null}var Tt=null,Et=null,ve=!1,Ft=null;function F_(t,e){var n=xt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function _m(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tt=t,Et=tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tt=t,Et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=$r!==null?{id:mn,overflow:gn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=xt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tt=t,Et=null,!0):!1;default:return!1}}function sh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ih(t){if(ve){var e=Et;if(e){var n=e;if(!_m(t,e)){if(sh(t))throw Error(F(418));e=tr(n.nextSibling);var r=Tt;e&&_m(t,e)?F_(r,n):(t.flags=t.flags&-4097|2,ve=!1,Tt=t)}}else{if(sh(t))throw Error(F(418));t.flags=t.flags&-4097|2,ve=!1,Tt=t}}}function vm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tt=t}function fa(t){if(t!==Tt)return!1;if(!ve)return vm(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!eh(t.type,t.memoizedProps)),e&&(e=Et)){if(sh(t))throw U_(),Error(F(418));for(;e;)F_(t,e),e=tr(e.nextSibling)}if(vm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Et=tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Et=null}}else Et=Tt?tr(t.stateNode.nextSibling):null;return!0}function U_(){for(var t=Et;t;)t=tr(t.nextSibling)}function Fs(){Et=Tt=null,ve=!1}function _d(t){Ft===null?Ft=[t]:Ft.push(t)}var NI=Nn.ReactCurrentBatchConfig;function Ri(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function pa(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wm(t){var e=t._init;return e(t._payload)}function j_(t){function e(T,v){if(t){var S=T.deletions;S===null?(T.deletions=[v],T.flags|=16):S.push(v)}}function n(T,v){if(!t)return null;for(;v!==null;)e(T,v),v=v.sibling;return null}function r(T,v){for(T=new Map;v!==null;)v.key!==null?T.set(v.key,v):T.set(v.index,v),v=v.sibling;return T}function s(T,v){return T=ir(T,v),T.index=0,T.sibling=null,T}function i(T,v,S){return T.index=S,t?(S=T.alternate,S!==null?(S=S.index,S<v?(T.flags|=2,v):S):(T.flags|=2,v)):(T.flags|=1048576,v)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,v,S,V){return v===null||v.tag!==6?(v=dc(S,T.mode,V),v.return=T,v):(v=s(v,S),v.return=T,v)}function u(T,v,S,V){var M=S.type;return M===ps?f(T,v,S.props.children,V,S.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===$n&&wm(M)===v.type)?(V=s(v,S.props),V.ref=Ri(T,v,S),V.return=T,V):(V=La(S.type,S.key,S.props,null,T.mode,V),V.ref=Ri(T,v,S),V.return=T,V)}function h(T,v,S,V){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=fc(S,T.mode,V),v.return=T,v):(v=s(v,S.children||[]),v.return=T,v)}function f(T,v,S,V,M){return v===null||v.tag!==7?(v=Fr(S,T.mode,V,M),v.return=T,v):(v=s(v,S),v.return=T,v)}function p(T,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=dc(""+v,T.mode,S),v.return=T,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ra:return S=La(v.type,v.key,v.props,null,T.mode,S),S.ref=Ri(T,null,v),S.return=T,S;case fs:return v=fc(v,T.mode,S),v.return=T,v;case $n:var V=v._init;return p(T,V(v._payload),S)}if(Ni(v)||Ei(v))return v=Fr(v,T.mode,S,null),v.return=T,v;pa(T,v)}return null}function g(T,v,S,V){var M=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return M!==null?null:l(T,v,""+S,V);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ra:return S.key===M?u(T,v,S,V):null;case fs:return S.key===M?h(T,v,S,V):null;case $n:return M=S._init,g(T,v,M(S._payload),V)}if(Ni(S)||Ei(S))return M!==null?null:f(T,v,S,V,null);pa(T,S)}return null}function R(T,v,S,V,M){if(typeof V=="string"&&V!==""||typeof V=="number")return T=T.get(S)||null,l(v,T,""+V,M);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case ra:return T=T.get(V.key===null?S:V.key)||null,u(v,T,V,M);case fs:return T=T.get(V.key===null?S:V.key)||null,h(v,T,V,M);case $n:var j=V._init;return R(T,v,S,j(V._payload),M)}if(Ni(V)||Ei(V))return T=T.get(S)||null,f(v,T,V,M,null);pa(v,V)}return null}function P(T,v,S,V){for(var M=null,j=null,_=v,y=v=0,w=null;_!==null&&y<S.length;y++){_.index>y?(w=_,_=null):w=_.sibling;var I=g(T,_,S[y],V);if(I===null){_===null&&(_=w);break}t&&_&&I.alternate===null&&e(T,_),v=i(I,v,y),j===null?M=I:j.sibling=I,j=I,_=w}if(y===S.length)return n(T,_),ve&&kr(T,y),M;if(_===null){for(;y<S.length;y++)_=p(T,S[y],V),_!==null&&(v=i(_,v,y),j===null?M=_:j.sibling=_,j=_);return ve&&kr(T,y),M}for(_=r(T,_);y<S.length;y++)w=R(_,T,y,S[y],V),w!==null&&(t&&w.alternate!==null&&_.delete(w.key===null?y:w.key),v=i(w,v,y),j===null?M=w:j.sibling=w,j=w);return t&&_.forEach(function(A){return e(T,A)}),ve&&kr(T,y),M}function N(T,v,S,V){var M=Ei(S);if(typeof M!="function")throw Error(F(150));if(S=M.call(S),S==null)throw Error(F(151));for(var j=M=null,_=v,y=v=0,w=null,I=S.next();_!==null&&!I.done;y++,I=S.next()){_.index>y?(w=_,_=null):w=_.sibling;var A=g(T,_,I.value,V);if(A===null){_===null&&(_=w);break}t&&_&&A.alternate===null&&e(T,_),v=i(A,v,y),j===null?M=A:j.sibling=A,j=A,_=w}if(I.done)return n(T,_),ve&&kr(T,y),M;if(_===null){for(;!I.done;y++,I=S.next())I=p(T,I.value,V),I!==null&&(v=i(I,v,y),j===null?M=I:j.sibling=I,j=I);return ve&&kr(T,y),M}for(_=r(T,_);!I.done;y++,I=S.next())I=R(_,T,y,I.value,V),I!==null&&(t&&I.alternate!==null&&_.delete(I.key===null?y:I.key),v=i(I,v,y),j===null?M=I:j.sibling=I,j=I);return t&&_.forEach(function(k){return e(T,k)}),ve&&kr(T,y),M}function L(T,v,S,V){if(typeof S=="object"&&S!==null&&S.type===ps&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case ra:e:{for(var M=S.key,j=v;j!==null;){if(j.key===M){if(M=S.type,M===ps){if(j.tag===7){n(T,j.sibling),v=s(j,S.props.children),v.return=T,T=v;break e}}else if(j.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===$n&&wm(M)===j.type){n(T,j.sibling),v=s(j,S.props),v.ref=Ri(T,j,S),v.return=T,T=v;break e}n(T,j);break}else e(T,j);j=j.sibling}S.type===ps?(v=Fr(S.props.children,T.mode,V,S.key),v.return=T,T=v):(V=La(S.type,S.key,S.props,null,T.mode,V),V.ref=Ri(T,v,S),V.return=T,T=V)}return o(T);case fs:e:{for(j=S.key;v!==null;){if(v.key===j)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(T,v.sibling),v=s(v,S.children||[]),v.return=T,T=v;break e}else{n(T,v);break}else e(T,v);v=v.sibling}v=fc(S,T.mode,V),v.return=T,T=v}return o(T);case $n:return j=S._init,L(T,v,j(S._payload),V)}if(Ni(S))return P(T,v,S,V);if(Ei(S))return N(T,v,S,V);pa(T,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(T,v.sibling),v=s(v,S),v.return=T,T=v):(n(T,v),v=dc(S,T.mode,V),v.return=T,T=v),o(T)):n(T,v)}return L}var Us=j_(!0),z_=j_(!1),ll=Er(null),ul=null,Ts=null,vd=null;function wd(){vd=Ts=ul=null}function Ed(t){var e=ll.current;ye(ll),t._currentValue=e}function oh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ps(t,e){ul=t,vd=Ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pt=!0),t.firstContext=null)}function Dt(t){var e=t._currentValue;if(vd!==t)if(t={context:t,memoizedValue:e,next:null},Ts===null){if(ul===null)throw Error(F(308));Ts=t,ul.dependencies={lanes:0,firstContext:t}}else Ts=Ts.next=t;return e}var Dr=null;function Td(t){Dr===null?Dr=[t]:Dr.push(t)}function B_(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Td(e)):(n.next=s.next,s.next=n),e.interleaved=n,An(t,r)}function An(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hn=!1;function Id(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function nr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,An(t,n)}return s=r.interleaved,s===null?(e.next=e,Td(r)):(e.next=s.next,s.next=e),r.interleaved=e,An(t,n)}function xa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ld(t,n)}}function Em(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function cl(t,e,n,r){var s=t.updateQueue;Hn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?i=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(i!==null){var p=s.baseState;o=0,f=h=u=null,l=i;do{var g=l.lane,R=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:R,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,N=l;switch(g=e,R=n,N.tag){case 1:if(P=N.payload,typeof P=="function"){p=P.call(R,p,g);break e}p=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=N.payload,g=typeof P=="function"?P.call(R,p,g):P,g==null)break e;p=Ie({},p,g);break e;case 2:Hn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else R={eventTime:R,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=R,u=p):f=f.next=R,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(f===null&&(u=p),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);qr|=o,t.lanes=o,t.memoizedState=p}}function Tm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(F(191,s));s.call(r)}}}var xo={},tn=Er(xo),co=Er(xo),ho=Er(xo);function Vr(t){if(t===xo)throw Error(F(174));return t}function Sd(t,e){switch(fe(ho,e),fe(co,t),fe(tn,xo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:jc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=jc(e,t)}ye(tn),fe(tn,e)}function js(){ye(tn),ye(co),ye(ho)}function H_(t){Vr(ho.current);var e=Vr(tn.current),n=jc(e,t.type);e!==n&&(fe(co,t),fe(tn,n))}function Ad(t){co.current===t&&(ye(tn),ye(co))}var Ee=Er(0);function hl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var oc=[];function Rd(){for(var t=0;t<oc.length;t++)oc[t]._workInProgressVersionPrimary=null;oc.length=0}var Na=Nn.ReactCurrentDispatcher,ac=Nn.ReactCurrentBatchConfig,Hr=0,Te=null,be=null,Ue=null,dl=!1,$i=!1,fo=0,DI=0;function Qe(){throw Error(F(321))}function Cd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wt(t[n],e[n]))return!1;return!0}function kd(t,e,n,r,s,i){if(Hr=i,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Na.current=t===null||t.memoizedState===null?LI:MI,t=n(r,s),$i){i=0;do{if($i=!1,fo=0,25<=i)throw Error(F(301));i+=1,Ue=be=null,e.updateQueue=null,Na.current=FI,t=n(r,s)}while($i)}if(Na.current=fl,e=be!==null&&be.next!==null,Hr=0,Ue=be=Te=null,dl=!1,e)throw Error(F(300));return t}function Pd(){var t=fo!==0;return fo=0,t}function Xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Te.memoizedState=Ue=t:Ue=Ue.next=t,Ue}function Vt(){if(be===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=be.next;var e=Ue===null?Te.memoizedState:Ue.next;if(e!==null)Ue=e,be=t;else{if(t===null)throw Error(F(310));be=t,t={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Ue===null?Te.memoizedState=Ue=t:Ue=Ue.next=t}return Ue}function po(t,e){return typeof e=="function"?e(t):e}function lc(t){var e=Vt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=be,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,h=i;do{var f=h.lane;if((Hr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Te.lanes|=f,qr|=f}h=h.next}while(h!==null&&h!==i);u===null?o=r:u.next=l,Wt(r,e.memoizedState)||(pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Te.lanes|=i,qr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function uc(t){var e=Vt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Wt(i,e.memoizedState)||(pt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function q_(){}function W_(t,e){var n=Te,r=Vt(),s=e(),i=!Wt(r.memoizedState,s);if(i&&(r.memoizedState=s,pt=!0),r=r.queue,xd(Q_.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,mo(9,G_.bind(null,n,r,s,e),void 0,null),je===null)throw Error(F(349));Hr&30||K_(n,e,s)}return s}function K_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function G_(t,e,n,r){e.value=n,e.getSnapshot=r,Y_(e)&&X_(t)}function Q_(t,e,n){return n(function(){Y_(e)&&X_(t)})}function Y_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wt(t,n)}catch{return!0}}function X_(t){var e=An(t,1);e!==null&&$t(e,t,1,-1)}function Im(t){var e=Xt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:po,lastRenderedState:t},e.queue=t,t=t.dispatch=OI.bind(null,Te,t),[e.memoizedState,t]}function mo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function J_(){return Vt().memoizedState}function Da(t,e,n,r){var s=Xt();Te.flags|=t,s.memoizedState=mo(1|e,n,void 0,r===void 0?null:r)}function Wl(t,e,n,r){var s=Vt();r=r===void 0?null:r;var i=void 0;if(be!==null){var o=be.memoizedState;if(i=o.destroy,r!==null&&Cd(r,o.deps)){s.memoizedState=mo(e,n,i,r);return}}Te.flags|=t,s.memoizedState=mo(1|e,n,i,r)}function Sm(t,e){return Da(8390656,8,t,e)}function xd(t,e){return Wl(2048,8,t,e)}function Z_(t,e){return Wl(4,2,t,e)}function ev(t,e){return Wl(4,4,t,e)}function tv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function nv(t,e,n){return n=n!=null?n.concat([t]):null,Wl(4,4,tv.bind(null,e,t),n)}function Nd(){}function rv(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Cd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function sv(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Cd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function iv(t,e,n){return Hr&21?(Wt(n,e)||(n=c_(),Te.lanes|=n,qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pt=!0),t.memoizedState=n)}function VI(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=ac.transition;ac.transition={};try{t(!1),e()}finally{ce=n,ac.transition=r}}function ov(){return Vt().memoizedState}function bI(t,e,n){var r=sr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},av(t))lv(e,n);else if(n=B_(t,e,n,r),n!==null){var s=lt();$t(n,t,r,s),uv(n,e,r)}}function OI(t,e,n){var r=sr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(av(t))lv(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,Wt(l,o)){var u=e.interleaved;u===null?(s.next=s,Td(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=B_(t,e,s,r),n!==null&&(s=lt(),$t(n,t,r,s),uv(n,e,r))}}function av(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function lv(t,e){$i=dl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function uv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ld(t,n)}}var fl={readContext:Dt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},LI={readContext:Dt,useCallback:function(t,e){return Xt().memoizedState=[t,e===void 0?null:e],t},useContext:Dt,useEffect:Sm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Da(4194308,4,tv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Da(4194308,4,t,e)},useInsertionEffect:function(t,e){return Da(4,2,t,e)},useMemo:function(t,e){var n=Xt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Xt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=bI.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=Xt();return t={current:t},e.memoizedState=t},useState:Im,useDebugValue:Nd,useDeferredValue:function(t){return Xt().memoizedState=t},useTransition:function(){var t=Im(!1),e=t[0];return t=VI.bind(null,t[1]),Xt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,s=Xt();if(ve){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),je===null)throw Error(F(349));Hr&30||K_(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Sm(Q_.bind(null,r,i,t),[t]),r.flags|=2048,mo(9,G_.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Xt(),e=je.identifierPrefix;if(ve){var n=gn,r=mn;n=(r&~(1<<32-Bt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=fo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=DI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},MI={readContext:Dt,useCallback:rv,useContext:Dt,useEffect:xd,useImperativeHandle:nv,useInsertionEffect:Z_,useLayoutEffect:ev,useMemo:sv,useReducer:lc,useRef:J_,useState:function(){return lc(po)},useDebugValue:Nd,useDeferredValue:function(t){var e=Vt();return iv(e,be.memoizedState,t)},useTransition:function(){var t=lc(po)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:q_,useSyncExternalStore:W_,useId:ov,unstable_isNewReconciler:!1},FI={readContext:Dt,useCallback:rv,useContext:Dt,useEffect:xd,useImperativeHandle:nv,useInsertionEffect:Z_,useLayoutEffect:ev,useMemo:sv,useReducer:uc,useRef:J_,useState:function(){return uc(po)},useDebugValue:Nd,useDeferredValue:function(t){var e=Vt();return be===null?e.memoizedState=t:iv(e,be.memoizedState,t)},useTransition:function(){var t=uc(po)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:q_,useSyncExternalStore:W_,useId:ov,unstable_isNewReconciler:!1};function Lt(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ah(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Kl={isMounted:function(t){return(t=t._reactInternals)?Zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=lt(),s=sr(t),i=wn(r,s);i.payload=e,n!=null&&(i.callback=n),e=nr(t,i,s),e!==null&&($t(e,t,s,r),xa(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=lt(),s=sr(t),i=wn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=nr(t,i,s),e!==null&&($t(e,t,s,r),xa(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=lt(),r=sr(t),s=wn(n,r);s.tag=2,e!=null&&(s.callback=e),e=nr(t,s,r),e!==null&&($t(e,t,r,n),xa(e,t,r))}};function Am(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!oo(n,r)||!oo(s,i):!0}function cv(t,e,n){var r=!1,s=dr,i=e.contextType;return typeof i=="object"&&i!==null?i=Dt(i):(s=gt(e)?Br:tt.current,r=e.contextTypes,i=(r=r!=null)?Ms(t,s):dr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Kl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Rm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Kl.enqueueReplaceState(e,e.state,null)}function lh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Id(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Dt(i):(i=gt(e)?Br:tt.current,s.context=Ms(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(ah(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Kl.enqueueReplaceState(s,s.state,null),cl(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function zs(t,e){try{var n="",r=e;do n+=dT(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function cc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function uh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var UI=typeof WeakMap=="function"?WeakMap:Map;function hv(t,e,n){n=wn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ml||(ml=!0,vh=r),uh(t,e)},n}function dv(t,e,n){n=wn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){uh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){uh(t,e),typeof r!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Cm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new UI;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=ZI.bind(null,t,e,n),e.then(t,t))}function km(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Pm(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wn(-1,1),e.tag=2,nr(n,e,1))),n.lanes|=1),t)}var jI=Nn.ReactCurrentOwner,pt=!1;function at(t,e,n,r){e.child=t===null?z_(e,null,n,r):Us(e,t.child,n,r)}function xm(t,e,n,r,s){n=n.render;var i=e.ref;return Ps(e,s),r=kd(t,e,n,r,i,s),n=Pd(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Rn(t,e,s)):(ve&&n&&gd(e),e.flags|=1,at(t,e,r,s),e.child)}function Nm(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Ud(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,fv(t,e,i,r,s)):(t=La(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:oo,n(o,r)&&t.ref===e.ref)return Rn(t,e,s)}return e.flags|=1,t=ir(i,r),t.ref=e.ref,t.return=e,e.child=t}function fv(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(oo(i,r)&&t.ref===e.ref)if(pt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(pt=!0);else return e.lanes=t.lanes,Rn(t,e,s)}return ch(t,e,n,r,s)}function pv(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(Ss,wt),wt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,fe(Ss,wt),wt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,fe(Ss,wt),wt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,fe(Ss,wt),wt|=r;return at(t,e,s,n),e.child}function mv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ch(t,e,n,r,s){var i=gt(n)?Br:tt.current;return i=Ms(e,i),Ps(e,s),n=kd(t,e,n,r,i,s),r=Pd(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Rn(t,e,s)):(ve&&r&&gd(e),e.flags|=1,at(t,e,n,s),e.child)}function Dm(t,e,n,r,s){if(gt(n)){var i=!0;il(e)}else i=!1;if(Ps(e,s),e.stateNode===null)Va(t,e),cv(e,n,r),lh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Dt(h):(h=gt(n)?Br:tt.current,h=Ms(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Rm(e,o,r,h),Hn=!1;var g=e.memoizedState;o.state=g,cl(e,r,o,s),u=e.memoizedState,l!==r||g!==u||mt.current||Hn?(typeof f=="function"&&(ah(e,n,f,r),u=e.memoizedState),(l=Hn||Am(e,n,l,r,g,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,$_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Lt(e.type,l),o.props=h,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Dt(u):(u=gt(n)?Br:tt.current,u=Ms(e,u));var R=n.getDerivedStateFromProps;(f=typeof R=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&Rm(e,o,r,u),Hn=!1,g=e.memoizedState,o.state=g,cl(e,r,o,s);var P=e.memoizedState;l!==p||g!==P||mt.current||Hn?(typeof R=="function"&&(ah(e,n,R,r),P=e.memoizedState),(h=Hn||Am(e,n,h,r,g,P,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return hh(t,e,n,r,i,s)}function hh(t,e,n,r,s,i){mv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&ym(e,n,!1),Rn(t,e,i);r=e.stateNode,jI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Us(e,t.child,null,i),e.child=Us(e,null,l,i)):at(t,e,l,i),e.memoizedState=r.state,s&&ym(e,n,!0),e.child}function gv(t){var e=t.stateNode;e.pendingContext?gm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gm(t,e.context,!1),Sd(t,e.containerInfo)}function Vm(t,e,n,r,s){return Fs(),_d(s),e.flags|=256,at(t,e,n,r),e.child}var dh={dehydrated:null,treeContext:null,retryLane:0};function fh(t){return{baseLanes:t,cachePool:null,transitions:null}}function yv(t,e,n){var r=e.pendingProps,s=Ee.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),fe(Ee,s&1),t===null)return ih(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Yl(o,r,0,null),t=Fr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=fh(n),e.memoizedState=dh,t):Dd(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return zI(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ir(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=ir(l,i):(i=Fr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?fh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=dh,r}return i=t.child,t=i.sibling,r=ir(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Dd(t,e){return e=Yl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ma(t,e,n,r){return r!==null&&_d(r),Us(e,t.child,null,n),t=Dd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function zI(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=cc(Error(F(422))),ma(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Yl({mode:"visible",children:r.children},s,0,null),i=Fr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Us(e,t.child,null,o),e.child.memoizedState=fh(o),e.memoizedState=dh,i);if(!(e.mode&1))return ma(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(F(419)),r=cc(i,r,void 0),ma(t,e,o,r)}if(l=(o&t.childLanes)!==0,pt||l){if(r=je,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,An(t,s),$t(r,t,s,-1))}return Fd(),r=cc(Error(F(421))),ma(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=eS.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Et=tr(s.nextSibling),Tt=e,ve=!0,Ft=null,t!==null&&(Rt[Ct++]=mn,Rt[Ct++]=gn,Rt[Ct++]=$r,mn=t.id,gn=t.overflow,$r=e),e=Dd(e,r.children),e.flags|=4096,e)}function bm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),oh(t.return,e,n)}function hc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function _v(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(at(t,e,r.children,n),r=Ee.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bm(t,n,e);else if(t.tag===19)bm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(fe(Ee,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&hl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),hc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&hl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}hc(e,!0,n,null,i);break;case"together":hc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Va(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Rn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function BI(t,e,n){switch(e.tag){case 3:gv(e),Fs();break;case 5:H_(e);break;case 1:gt(e.type)&&il(e);break;case 4:Sd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;fe(ll,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(fe(Ee,Ee.current&1),e.flags|=128,null):n&e.child.childLanes?yv(t,e,n):(fe(Ee,Ee.current&1),t=Rn(t,e,n),t!==null?t.sibling:null);fe(Ee,Ee.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return _v(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),fe(Ee,Ee.current),r)break;return null;case 22:case 23:return e.lanes=0,pv(t,e,n)}return Rn(t,e,n)}var vv,ph,wv,Ev;vv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ph=function(){};wv=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Vr(tn.current);var i=null;switch(n){case"input":s=Lc(t,s),r=Lc(t,r),i=[];break;case"select":s=Ie({},s,{value:void 0}),r=Ie({},r,{value:void 0}),i=[];break;case"textarea":s=Uc(t,s),r=Uc(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=rl)}zc(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var l=s[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Zi.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(l=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Zi.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&me("scroll",t),i||l===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};Ev=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ci(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ye(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function $I(t,e,n){var r=e.pendingProps;switch(yd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(e),null;case 1:return gt(e.type)&&sl(),Ye(e),null;case 3:return r=e.stateNode,js(),ye(mt),ye(tt),Rd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(fa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ft!==null&&(Th(Ft),Ft=null))),ph(t,e),Ye(e),null;case 5:Ad(e);var s=Vr(ho.current);if(n=e.type,t!==null&&e.stateNode!=null)wv(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Ye(e),null}if(t=Vr(tn.current),fa(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Zt]=e,r[uo]=i,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(s=0;s<Vi.length;s++)me(Vi[s],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":$p(r,i),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},me("invalid",r);break;case"textarea":qp(r,i),me("invalid",r)}zc(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&da(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&da(r.textContent,l,t),s=["children",""+l]):Zi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":sa(r),Hp(r,i,!0);break;case"textarea":sa(r),Wp(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=rl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Qy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Zt]=e,t[uo]=r,vv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Bc(n,r),n){case"dialog":me("cancel",t),me("close",t),s=r;break;case"iframe":case"object":case"embed":me("load",t),s=r;break;case"video":case"audio":for(s=0;s<Vi.length;s++)me(Vi[s],t);s=r;break;case"source":me("error",t),s=r;break;case"img":case"image":case"link":me("error",t),me("load",t),s=r;break;case"details":me("toggle",t),s=r;break;case"input":$p(t,r),s=Lc(t,r),me("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ie({},r,{value:void 0}),me("invalid",t);break;case"textarea":qp(t,r),s=Uc(t,r),me("invalid",t);break;default:s=r}zc(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?Jy(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Yy(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&eo(t,u):typeof u=="number"&&eo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Zi.hasOwnProperty(i)?u!=null&&i==="onScroll"&&me("scroll",t):u!=null&&nd(t,i,u,o))}switch(n){case"input":sa(t),Hp(t,r,!1);break;case"textarea":sa(t),Wp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+hr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?As(t,!!r.multiple,i,!1):r.defaultValue!=null&&As(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=rl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ye(e),null;case 6:if(t&&e.stateNode!=null)Ev(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Vr(ho.current),Vr(tn.current),fa(e)){if(r=e.stateNode,n=e.memoizedProps,r[Zt]=e,(i=r.nodeValue!==n)&&(t=Tt,t!==null))switch(t.tag){case 3:da(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&da(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Zt]=e,e.stateNode=r}return Ye(e),null;case 13:if(ye(Ee),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&Et!==null&&e.mode&1&&!(e.flags&128))U_(),Fs(),e.flags|=98560,i=!1;else if(i=fa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(F(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[Zt]=e}else Fs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ye(e),i=!1}else Ft!==null&&(Th(Ft),Ft=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ee.current&1?Oe===0&&(Oe=3):Fd())),e.updateQueue!==null&&(e.flags|=4),Ye(e),null);case 4:return js(),ph(t,e),t===null&&ao(e.stateNode.containerInfo),Ye(e),null;case 10:return Ed(e.type._context),Ye(e),null;case 17:return gt(e.type)&&sl(),Ye(e),null;case 19:if(ye(Ee),i=e.memoizedState,i===null)return Ye(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Ci(i,!1);else{if(Oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=hl(t),o!==null){for(e.flags|=128,Ci(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return fe(Ee,Ee.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ce()>Bs&&(e.flags|=128,r=!0,Ci(i,!1),e.lanes=4194304)}else{if(!r)if(t=hl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ci(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ve)return Ye(e),null}else 2*Ce()-i.renderingStartTime>Bs&&n!==1073741824&&(e.flags|=128,r=!0,Ci(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ce(),e.sibling=null,n=Ee.current,fe(Ee,r?n&1|2:n&1),e):(Ye(e),null);case 22:case 23:return Md(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?wt&1073741824&&(Ye(e),e.subtreeFlags&6&&(e.flags|=8192)):Ye(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function HI(t,e){switch(yd(e),e.tag){case 1:return gt(e.type)&&sl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return js(),ye(mt),ye(tt),Rd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ad(e),null;case 13:if(ye(Ee),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Fs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(Ee),null;case 4:return js(),null;case 10:return Ed(e.type._context),null;case 22:case 23:return Md(),null;case 24:return null;default:return null}}var ga=!1,Ze=!1,qI=typeof WeakSet=="function"?WeakSet:Set,H=null;function Is(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function mh(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var Om=!1;function WI(t,e){if(Jc=el,t=R_(),md(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,g=null;t:for(;;){for(var R;p!==n||s!==0&&p.nodeType!==3||(l=o+s),p!==i||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(R=p.firstChild)!==null;)g=p,p=R;for(;;){if(p===t)break t;if(g===n&&++h===s&&(l=o),g===i&&++f===r&&(u=o),(R=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=R}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zc={focusedElem:t,selectionRange:n},el=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var N=P.memoizedProps,L=P.memoizedState,T=e.stateNode,v=T.getSnapshotBeforeUpdate(e.elementType===e.type?N:Lt(e.type,N),L);T.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(V){Ae(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return P=Om,Om=!1,P}function Hi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&mh(e,n,i)}s=s.next}while(s!==r)}}function Gl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function gh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Tv(t){var e=t.alternate;e!==null&&(t.alternate=null,Tv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zt],delete e[uo],delete e[nh],delete e[kI],delete e[PI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Iv(t){return t.tag===5||t.tag===3||t.tag===4}function Lm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Iv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=rl));else if(r!==4&&(t=t.child,t!==null))for(yh(t,e,n),t=t.sibling;t!==null;)yh(t,e,n),t=t.sibling}function _h(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(_h(t,e,n),t=t.sibling;t!==null;)_h(t,e,n),t=t.sibling}var ze=null,Mt=!1;function zn(t,e,n){for(n=n.child;n!==null;)Sv(t,e,n),n=n.sibling}function Sv(t,e,n){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(jl,n)}catch{}switch(n.tag){case 5:Ze||Is(n,e);case 6:var r=ze,s=Mt;ze=null,zn(t,e,n),ze=r,Mt=s,ze!==null&&(Mt?(t=ze,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(Mt?(t=ze,n=n.stateNode,t.nodeType===8?sc(t.parentNode,n):t.nodeType===1&&sc(t,n),so(t)):sc(ze,n.stateNode));break;case 4:r=ze,s=Mt,ze=n.stateNode.containerInfo,Mt=!0,zn(t,e,n),ze=r,Mt=s;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&mh(n,e,o),s=s.next}while(s!==r)}zn(t,e,n);break;case 1:if(!Ze&&(Is(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ae(n,e,l)}zn(t,e,n);break;case 21:zn(t,e,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,zn(t,e,n),Ze=r):zn(t,e,n);break;default:zn(t,e,n)}}function Mm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new qI),e.forEach(function(r){var s=tS.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Ot(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ze=l.stateNode,Mt=!1;break e;case 3:ze=l.stateNode.containerInfo,Mt=!0;break e;case 4:ze=l.stateNode.containerInfo,Mt=!0;break e}l=l.return}if(ze===null)throw Error(F(160));Sv(i,o,s),ze=null,Mt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){Ae(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Av(e,t),e=e.sibling}function Av(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ot(e,t),Yt(t),r&4){try{Hi(3,t,t.return),Gl(3,t)}catch(N){Ae(t,t.return,N)}try{Hi(5,t,t.return)}catch(N){Ae(t,t.return,N)}}break;case 1:Ot(e,t),Yt(t),r&512&&n!==null&&Is(n,n.return);break;case 5:if(Ot(e,t),Yt(t),r&512&&n!==null&&Is(n,n.return),t.flags&32){var s=t.stateNode;try{eo(s,"")}catch(N){Ae(t,t.return,N)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Ky(s,i),Bc(l,o);var h=Bc(l,i);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?Jy(s,p):f==="dangerouslySetInnerHTML"?Yy(s,p):f==="children"?eo(s,p):nd(s,f,p,h)}switch(l){case"input":Mc(s,i);break;case"textarea":Gy(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var R=i.value;R!=null?As(s,!!i.multiple,R,!1):g!==!!i.multiple&&(i.defaultValue!=null?As(s,!!i.multiple,i.defaultValue,!0):As(s,!!i.multiple,i.multiple?[]:"",!1))}s[uo]=i}catch(N){Ae(t,t.return,N)}}break;case 6:if(Ot(e,t),Yt(t),r&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(N){Ae(t,t.return,N)}}break;case 3:if(Ot(e,t),Yt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{so(e.containerInfo)}catch(N){Ae(t,t.return,N)}break;case 4:Ot(e,t),Yt(t);break;case 13:Ot(e,t),Yt(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Od=Ce())),r&4&&Mm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ze=(h=Ze)||f,Ot(e,t),Ze=h):Ot(e,t),Yt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(H=t,f=t.child;f!==null;){for(p=H=f;H!==null;){switch(g=H,R=g.child,g.tag){case 0:case 11:case 14:case 15:Hi(4,g,g.return);break;case 1:Is(g,g.return);var P=g.stateNode;if(typeof P.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(N){Ae(r,n,N)}}break;case 5:Is(g,g.return);break;case 22:if(g.memoizedState!==null){Um(p);continue}}R!==null?(R.return=g,H=R):Um(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{s=p.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Xy("display",o))}catch(N){Ae(t,t.return,N)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(N){Ae(t,t.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ot(e,t),Yt(t),r&4&&Mm(t);break;case 21:break;default:Ot(e,t),Yt(t)}}function Yt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Iv(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(eo(s,""),r.flags&=-33);var i=Lm(t);_h(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Lm(t);yh(t,l,o);break;default:throw Error(F(161))}}catch(u){Ae(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function KI(t,e,n){H=t,Rv(t)}function Rv(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var s=H,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||ga;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||Ze;l=ga;var h=Ze;if(ga=o,(Ze=u)&&!h)for(H=s;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?jm(s):u!==null?(u.return=o,H=u):jm(s);for(;i!==null;)H=i,Rv(i),i=i.sibling;H=s,ga=l,Ze=h}Fm(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,H=i):Fm(t)}}function Fm(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ze||Gl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Lt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Tm(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Tm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&so(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Ze||e.flags&512&&gh(e)}catch(g){Ae(e,e.return,g)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Um(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function jm(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Gl(4,e)}catch(u){Ae(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Ae(e,s,u)}}var i=e.return;try{gh(e)}catch(u){Ae(e,i,u)}break;case 5:var o=e.return;try{gh(e)}catch(u){Ae(e,o,u)}}}catch(u){Ae(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var GI=Math.ceil,pl=Nn.ReactCurrentDispatcher,Vd=Nn.ReactCurrentOwner,Nt=Nn.ReactCurrentBatchConfig,le=0,je=null,xe=null,He=0,wt=0,Ss=Er(0),Oe=0,go=null,qr=0,Ql=0,bd=0,qi=null,ft=null,Od=0,Bs=1/0,dn=null,ml=!1,vh=null,rr=null,ya=!1,Xn=null,gl=0,Wi=0,wh=null,ba=-1,Oa=0;function lt(){return le&6?Ce():ba!==-1?ba:ba=Ce()}function sr(t){return t.mode&1?le&2&&He!==0?He&-He:NI.transition!==null?(Oa===0&&(Oa=c_()),Oa):(t=ce,t!==0||(t=window.event,t=t===void 0?16:y_(t.type)),t):1}function $t(t,e,n,r){if(50<Wi)throw Wi=0,wh=null,Error(F(185));Co(t,n,r),(!(le&2)||t!==je)&&(t===je&&(!(le&2)&&(Ql|=n),Oe===4&&Wn(t,He)),yt(t,r),n===1&&le===0&&!(e.mode&1)&&(Bs=Ce()+500,ql&&Tr()))}function yt(t,e){var n=t.callbackNode;NT(t,e);var r=Za(t,t===je?He:0);if(r===0)n!==null&&Qp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Qp(n),e===1)t.tag===0?xI(zm.bind(null,t)):L_(zm.bind(null,t)),RI(function(){!(le&6)&&Tr()}),n=null;else{switch(h_(r)){case 1:n=ad;break;case 4:n=l_;break;case 16:n=Ja;break;case 536870912:n=u_;break;default:n=Ja}n=bv(n,Cv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Cv(t,e){if(ba=-1,Oa=0,le&6)throw Error(F(327));var n=t.callbackNode;if(xs()&&t.callbackNode!==n)return null;var r=Za(t,t===je?He:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=yl(t,r);else{e=r;var s=le;le|=2;var i=Pv();(je!==t||He!==e)&&(dn=null,Bs=Ce()+500,Mr(t,e));do try{XI();break}catch(l){kv(t,l)}while(!0);wd(),pl.current=i,le=s,xe!==null?e=0:(je=null,He=0,e=Oe)}if(e!==0){if(e===2&&(s=Kc(t),s!==0&&(r=s,e=Eh(t,s))),e===1)throw n=go,Mr(t,0),Wn(t,r),yt(t,Ce()),n;if(e===6)Wn(t,r);else{if(s=t.current.alternate,!(r&30)&&!QI(s)&&(e=yl(t,r),e===2&&(i=Kc(t),i!==0&&(r=i,e=Eh(t,i))),e===1))throw n=go,Mr(t,0),Wn(t,r),yt(t,Ce()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Pr(t,ft,dn);break;case 3:if(Wn(t,r),(r&130023424)===r&&(e=Od+500-Ce(),10<e)){if(Za(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){lt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=th(Pr.bind(null,t,ft,dn),e);break}Pr(t,ft,dn);break;case 4:if(Wn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Bt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*GI(r/1960))-r,10<r){t.timeoutHandle=th(Pr.bind(null,t,ft,dn),r);break}Pr(t,ft,dn);break;case 5:Pr(t,ft,dn);break;default:throw Error(F(329))}}}return yt(t,Ce()),t.callbackNode===n?Cv.bind(null,t):null}function Eh(t,e){var n=qi;return t.current.memoizedState.isDehydrated&&(Mr(t,e).flags|=256),t=yl(t,e),t!==2&&(e=ft,ft=n,e!==null&&Th(e)),t}function Th(t){ft===null?ft=t:ft.push.apply(ft,t)}function QI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Wt(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wn(t,e){for(e&=~bd,e&=~Ql,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bt(e),r=1<<n;t[n]=-1,e&=~r}}function zm(t){if(le&6)throw Error(F(327));xs();var e=Za(t,0);if(!(e&1))return yt(t,Ce()),null;var n=yl(t,e);if(t.tag!==0&&n===2){var r=Kc(t);r!==0&&(e=r,n=Eh(t,r))}if(n===1)throw n=go,Mr(t,0),Wn(t,e),yt(t,Ce()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Pr(t,ft,dn),yt(t,Ce()),null}function Ld(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(Bs=Ce()+500,ql&&Tr())}}function Wr(t){Xn!==null&&Xn.tag===0&&!(le&6)&&xs();var e=le;le|=1;var n=Nt.transition,r=ce;try{if(Nt.transition=null,ce=1,t)return t()}finally{ce=r,Nt.transition=n,le=e,!(le&6)&&Tr()}}function Md(){wt=Ss.current,ye(Ss)}function Mr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,AI(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(yd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&sl();break;case 3:js(),ye(mt),ye(tt),Rd();break;case 5:Ad(r);break;case 4:js();break;case 13:ye(Ee);break;case 19:ye(Ee);break;case 10:Ed(r.type._context);break;case 22:case 23:Md()}n=n.return}if(je=t,xe=t=ir(t.current,null),He=wt=e,Oe=0,go=null,bd=Ql=qr=0,ft=qi=null,Dr!==null){for(e=0;e<Dr.length;e++)if(n=Dr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Dr=null}return t}function kv(t,e){do{var n=xe;try{if(wd(),Na.current=fl,dl){for(var r=Te.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}dl=!1}if(Hr=0,Ue=be=Te=null,$i=!1,fo=0,Vd.current=null,n===null||n.return===null){Oe=1,go=e,xe=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=He,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var R=km(o);if(R!==null){R.flags&=-257,Pm(R,o,l,i,e),R.mode&1&&Cm(i,h,e),e=R,u=h;var P=e.updateQueue;if(P===null){var N=new Set;N.add(u),e.updateQueue=N}else P.add(u);break e}else{if(!(e&1)){Cm(i,h,e),Fd();break e}u=Error(F(426))}}else if(ve&&l.mode&1){var L=km(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),Pm(L,o,l,i,e),_d(zs(u,l));break e}}i=u=zs(u,l),Oe!==4&&(Oe=2),qi===null?qi=[i]:qi.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var T=hv(i,u,e);Em(i,T);break e;case 1:l=u;var v=i.type,S=i.stateNode;if(!(i.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(rr===null||!rr.has(S)))){i.flags|=65536,e&=-e,i.lanes|=e;var V=dv(i,l,e);Em(i,V);break e}}i=i.return}while(i!==null)}Nv(n)}catch(M){e=M,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(!0)}function Pv(){var t=pl.current;return pl.current=fl,t===null?fl:t}function Fd(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),je===null||!(qr&268435455)&&!(Ql&268435455)||Wn(je,He)}function yl(t,e){var n=le;le|=2;var r=Pv();(je!==t||He!==e)&&(dn=null,Mr(t,e));do try{YI();break}catch(s){kv(t,s)}while(!0);if(wd(),le=n,pl.current=r,xe!==null)throw Error(F(261));return je=null,He=0,Oe}function YI(){for(;xe!==null;)xv(xe)}function XI(){for(;xe!==null&&!TT();)xv(xe)}function xv(t){var e=Vv(t.alternate,t,wt);t.memoizedProps=t.pendingProps,e===null?Nv(t):xe=e,Vd.current=null}function Nv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=HI(n,e),n!==null){n.flags&=32767,xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,xe=null;return}}else if(n=$I(n,e,wt),n!==null){xe=n;return}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);Oe===0&&(Oe=5)}function Pr(t,e,n){var r=ce,s=Nt.transition;try{Nt.transition=null,ce=1,JI(t,e,n,r)}finally{Nt.transition=s,ce=r}return null}function JI(t,e,n,r){do xs();while(Xn!==null);if(le&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(DT(t,i),t===je&&(xe=je=null,He=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ya||(ya=!0,bv(Ja,function(){return xs(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Nt.transition,Nt.transition=null;var o=ce;ce=1;var l=le;le|=4,Vd.current=null,WI(t,n),Av(n,t),_I(Zc),el=!!Jc,Zc=Jc=null,t.current=n,KI(n),IT(),le=l,ce=o,Nt.transition=i}else t.current=n;if(ya&&(ya=!1,Xn=t,gl=s),i=t.pendingLanes,i===0&&(rr=null),RT(n.stateNode),yt(t,Ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(ml)throw ml=!1,t=vh,vh=null,t;return gl&1&&t.tag!==0&&xs(),i=t.pendingLanes,i&1?t===wh?Wi++:(Wi=0,wh=t):Wi=0,Tr(),null}function xs(){if(Xn!==null){var t=h_(gl),e=Nt.transition,n=ce;try{if(Nt.transition=null,ce=16>t?16:t,Xn===null)var r=!1;else{if(t=Xn,Xn=null,gl=0,le&6)throw Error(F(331));var s=le;for(le|=4,H=t.current;H!==null;){var i=H,o=i.child;if(H.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(H=h;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:Hi(8,f,i)}var p=f.child;if(p!==null)p.return=f,H=p;else for(;H!==null;){f=H;var g=f.sibling,R=f.return;if(Tv(f),f===h){H=null;break}if(g!==null){g.return=R,H=g;break}H=R}}}var P=i.alternate;if(P!==null){var N=P.child;if(N!==null){P.child=null;do{var L=N.sibling;N.sibling=null,N=L}while(N!==null)}}H=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,H=o;else e:for(;H!==null;){if(i=H,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Hi(9,i,i.return)}var T=i.sibling;if(T!==null){T.return=i.return,H=T;break e}H=i.return}}var v=t.current;for(H=v;H!==null;){o=H;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,H=S;else e:for(o=v;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Gl(9,l)}}catch(M){Ae(l,l.return,M)}if(l===o){H=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,H=V;break e}H=l.return}}if(le=s,Tr(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(jl,t)}catch{}r=!0}return r}finally{ce=n,Nt.transition=e}}return!1}function Bm(t,e,n){e=zs(n,e),e=hv(t,e,1),t=nr(t,e,1),e=lt(),t!==null&&(Co(t,1,e),yt(t,e))}function Ae(t,e,n){if(t.tag===3)Bm(t,t,n);else for(;e!==null;){if(e.tag===3){Bm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rr===null||!rr.has(r))){t=zs(n,t),t=dv(e,t,1),e=nr(e,t,1),t=lt(),e!==null&&(Co(e,1,t),yt(e,t));break}}e=e.return}}function ZI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=lt(),t.pingedLanes|=t.suspendedLanes&n,je===t&&(He&n)===n&&(Oe===4||Oe===3&&(He&130023424)===He&&500>Ce()-Od?Mr(t,0):bd|=n),yt(t,e)}function Dv(t,e){e===0&&(t.mode&1?(e=aa,aa<<=1,!(aa&130023424)&&(aa=4194304)):e=1);var n=lt();t=An(t,e),t!==null&&(Co(t,e,n),yt(t,n))}function eS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Dv(t,n)}function tS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Dv(t,n)}var Vv;Vv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mt.current)pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pt=!1,BI(t,e,n);pt=!!(t.flags&131072)}else pt=!1,ve&&e.flags&1048576&&M_(e,al,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Va(t,e),t=e.pendingProps;var s=Ms(e,tt.current);Ps(e,n),s=kd(null,e,r,t,s,n);var i=Pd();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gt(r)?(i=!0,il(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Id(e),s.updater=Kl,e.stateNode=s,s._reactInternals=e,lh(e,r,t,n),e=hh(null,e,r,!0,i,n)):(e.tag=0,ve&&i&&gd(e),at(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Va(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=rS(r),t=Lt(r,t),s){case 0:e=ch(null,e,r,t,n);break e;case 1:e=Dm(null,e,r,t,n);break e;case 11:e=xm(null,e,r,t,n);break e;case 14:e=Nm(null,e,r,Lt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Lt(r,s),ch(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Lt(r,s),Dm(t,e,r,s,n);case 3:e:{if(gv(e),t===null)throw Error(F(387));r=e.pendingProps,i=e.memoizedState,s=i.element,$_(t,e),cl(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=zs(Error(F(423)),e),e=Vm(t,e,r,n,s);break e}else if(r!==s){s=zs(Error(F(424)),e),e=Vm(t,e,r,n,s);break e}else for(Et=tr(e.stateNode.containerInfo.firstChild),Tt=e,ve=!0,Ft=null,n=z_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fs(),r===s){e=Rn(t,e,n);break e}at(t,e,r,n)}e=e.child}return e;case 5:return H_(e),t===null&&ih(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,eh(r,s)?o=null:i!==null&&eh(r,i)&&(e.flags|=32),mv(t,e),at(t,e,o,n),e.child;case 6:return t===null&&ih(e),null;case 13:return yv(t,e,n);case 4:return Sd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Us(e,null,r,n):at(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Lt(r,s),xm(t,e,r,s,n);case 7:return at(t,e,e.pendingProps,n),e.child;case 8:return at(t,e,e.pendingProps.children,n),e.child;case 12:return at(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,fe(ll,r._currentValue),r._currentValue=o,i!==null)if(Wt(i.value,o)){if(i.children===s.children&&!mt.current){e=Rn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=wn(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),oh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),oh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}at(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Ps(e,n),s=Dt(s),r=r(s),e.flags|=1,at(t,e,r,n),e.child;case 14:return r=e.type,s=Lt(r,e.pendingProps),s=Lt(r.type,s),Nm(t,e,r,s,n);case 15:return fv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Lt(r,s),Va(t,e),e.tag=1,gt(r)?(t=!0,il(e)):t=!1,Ps(e,n),cv(e,r,s),lh(e,r,s,n),hh(null,e,r,!0,t,n);case 19:return _v(t,e,n);case 22:return pv(t,e,n)}throw Error(F(156,e.tag))};function bv(t,e){return a_(t,e)}function nS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(t,e,n,r){return new nS(t,e,n,r)}function Ud(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rS(t){if(typeof t=="function")return Ud(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sd)return 11;if(t===id)return 14}return 2}function ir(t,e){var n=t.alternate;return n===null?(n=xt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function La(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Ud(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ps:return Fr(n.children,s,i,e);case rd:o=8,s|=8;break;case Dc:return t=xt(12,n,e,s|2),t.elementType=Dc,t.lanes=i,t;case Vc:return t=xt(13,n,e,s),t.elementType=Vc,t.lanes=i,t;case bc:return t=xt(19,n,e,s),t.elementType=bc,t.lanes=i,t;case Hy:return Yl(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case By:o=10;break e;case $y:o=9;break e;case sd:o=11;break e;case id:o=14;break e;case $n:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=xt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Fr(t,e,n,r){return t=xt(7,t,r,e),t.lanes=n,t}function Yl(t,e,n,r){return t=xt(22,t,r,e),t.elementType=Hy,t.lanes=n,t.stateNode={isHidden:!1},t}function dc(t,e,n){return t=xt(6,t,null,e),t.lanes=n,t}function fc(t,e,n){return e=xt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function sS(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ku(0),this.expirationTimes=Ku(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ku(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function jd(t,e,n,r,s,i,o,l,u){return t=new sS(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=xt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Id(i),t}function iS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Ov(t){if(!t)return dr;t=t._reactInternals;e:{if(Zr(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(gt(n))return O_(t,n,e)}return e}function Lv(t,e,n,r,s,i,o,l,u){return t=jd(n,r,!0,t,s,i,o,l,u),t.context=Ov(null),n=t.current,r=lt(),s=sr(n),i=wn(r,s),i.callback=e??null,nr(n,i,s),t.current.lanes=s,Co(t,s,r),yt(t,r),t}function Xl(t,e,n,r){var s=e.current,i=lt(),o=sr(s);return n=Ov(n),e.context===null?e.context=n:e.pendingContext=n,e=wn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=nr(s,e,o),t!==null&&($t(t,s,o,i),xa(t,s,o)),o}function _l(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $m(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zd(t,e){$m(t,e),(t=t.alternate)&&$m(t,e)}function oS(){return null}var Mv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bd(t){this._internalRoot=t}Jl.prototype.render=Bd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Xl(t,e,null,null)};Jl.prototype.unmount=Bd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wr(function(){Xl(null,t,null,null)}),e[Sn]=null}};function Jl(t){this._internalRoot=t}Jl.prototype.unstable_scheduleHydration=function(t){if(t){var e=p_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qn.length&&e!==0&&e<qn[n].priority;n++);qn.splice(n,0,t),n===0&&g_(t)}};function $d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hm(){}function aS(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=_l(o);i.call(h)}}var o=Lv(e,r,t,0,null,!1,!1,"",Hm);return t._reactRootContainer=o,t[Sn]=o.current,ao(t.nodeType===8?t.parentNode:t),Wr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var h=_l(u);l.call(h)}}var u=jd(t,0,!1,null,null,!1,!1,"",Hm);return t._reactRootContainer=u,t[Sn]=u.current,ao(t.nodeType===8?t.parentNode:t),Wr(function(){Xl(e,u,n,r)}),u}function eu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=_l(o);l.call(u)}}Xl(e,o,t,s)}else o=aS(n,e,t,s,r);return _l(o)}d_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Di(e.pendingLanes);n!==0&&(ld(e,n|1),yt(e,Ce()),!(le&6)&&(Bs=Ce()+500,Tr()))}break;case 13:Wr(function(){var r=An(t,1);if(r!==null){var s=lt();$t(r,t,1,s)}}),zd(t,1)}};ud=function(t){if(t.tag===13){var e=An(t,134217728);if(e!==null){var n=lt();$t(e,t,134217728,n)}zd(t,134217728)}};f_=function(t){if(t.tag===13){var e=sr(t),n=An(t,e);if(n!==null){var r=lt();$t(n,t,e,r)}zd(t,e)}};p_=function(){return ce};m_=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};Hc=function(t,e,n){switch(e){case"input":if(Mc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Hl(r);if(!s)throw Error(F(90));Wy(r),Mc(r,s)}}}break;case"textarea":Gy(t,n);break;case"select":e=n.value,e!=null&&As(t,!!n.multiple,e,!1)}};t_=Ld;n_=Wr;var lS={usingClientEntryPoint:!1,Events:[Po,_s,Hl,Zy,e_,Ld]},ki={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uS={bundleType:ki.bundleType,version:ki.version,rendererPackageName:ki.rendererPackageName,rendererConfig:ki.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=i_(t),t===null?null:t.stateNode},findFiberByHostInstance:ki.findFiberByHostInstance||oS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_a.isDisabled&&_a.supportsFiber)try{jl=_a.inject(uS),en=_a}catch{}}St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lS;St.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$d(e))throw Error(F(200));return iS(t,e,null,n)};St.createRoot=function(t,e){if(!$d(t))throw Error(F(299));var n=!1,r="",s=Mv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=jd(t,1,!1,null,null,n,!1,r,s),t[Sn]=e.current,ao(t.nodeType===8?t.parentNode:t),new Bd(e)};St.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=i_(e),t=t===null?null:t.stateNode,t};St.flushSync=function(t){return Wr(t)};St.hydrate=function(t,e,n){if(!Zl(e))throw Error(F(200));return eu(null,t,e,!0,n)};St.hydrateRoot=function(t,e,n){if(!$d(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Mv;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Lv(e,null,t,1,n??null,s,!1,i,o),t[Sn]=e.current,ao(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Jl(e)};St.render=function(t,e,n){if(!Zl(e))throw Error(F(200));return eu(null,t,e,!1,n)};St.unmountComponentAtNode=function(t){if(!Zl(t))throw Error(F(40));return t._reactRootContainer?(Wr(function(){eu(null,null,t,!1,function(){t._reactRootContainer=null,t[Sn]=null})}),!0):!1};St.unstable_batchedUpdates=Ld;St.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Zl(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return eu(t,e,n,!1,r)};St.version="18.3.1-next-f1338f8080-20240426";function Fv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fv)}catch(t){console.error(t)}}Fv(),Fy.exports=St;var cS=Fy.exports,qm=cS;xc.createRoot=qm.createRoot,xc.hydrateRoot=qm.hydrateRoot;/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=t=>{const e=dS(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},pS=ie.createContext({}),mS=()=>ie.useContext(pS),gS=ie.forwardRef(({color:t,size:e,strokeWidth:n,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...l},u)=>{const{size:h=24,strokeWidth:f=2,absoluteStrokeWidth:p=!1,color:g="currentColor",className:R=""}=mS()??{},P=r??p?Number(n??f)*24/Number(e??h):n??f;return ie.createElement("svg",{ref:u,...pc,width:e??h??pc.width,height:e??h??pc.height,stroke:t??g,strokeWidth:P,className:Uv("lucide",R,s),...!i&&!fS(l)&&{"aria-hidden":"true"},...l},[...o.map(([N,L])=>ie.createElement(N,L)),...Array.isArray(i)?i:[i]])});/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=(t,e)=>{const n=ie.forwardRef(({className:r,...s},i)=>ie.createElement(gS,{ref:i,iconNode:e,className:Uv(`lucide-${hS(Wm(t))}`,`lucide-${t}`,r),...s}));return n.displayName=Wm(t),n};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],jv=bt("chart-column",yS);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ma=bt("circle-check",_S);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],mc=bt("circle-x",vS);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],ES=bt("clock",wS);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],IS=bt("download",TS);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=[["path",{d:"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",key:"1jaruq"}]],Km=bt("flag",SS);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],RS=bt("globe",AS);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Gm=bt("info",CS);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],zv=bt("loader-circle",kS);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],xS=bt("log-out",PS);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],DS=bt("map-pin",NS);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Ih=bt("user",VS),bS=()=>{};var Qm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},OS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},$v={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|h>>6,R=h&63;u||(R=64,o||(g=64)),r.push(n[f],n[p],n[g],n[R])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):OS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new LS;const g=i<<2|l>>4;if(r.push(g),h!==64){const R=l<<4&240|h>>2;if(r.push(R),p!==64){const P=h<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class LS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const MS=function(t){const e=Bv(t);return $v.encodeByteArray(e,!0)},vl=function(t){return MS(t).replace(/\./g,"")},Hv=function(t){try{return $v.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=()=>FS().__FIREBASE_DEFAULTS__,jS=()=>{if(typeof process>"u"||typeof Qm>"u")return;const t=Qm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hv(t[1]);return e&&JSON.parse(e)},tu=()=>{try{return bS()||US()||jS()||zS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qv=t=>{var e,n;return(n=(e=tu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},BS=t=>{const e=qv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Wv=()=>{var t;return(t=tu())==null?void 0:t.config},Kv=t=>{var e;return(e=tu())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[vl(JSON.stringify(n)),vl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function WS(){var e;const t=(e=tu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function KS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function GS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function QS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function YS(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function XS(){return!WS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function JS(){try{return typeof indexedDB=="object"}catch{return!1}}function ZS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA="FirebaseError";class Dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=eA,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,No.prototype.create)}}class No{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?tA(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Dn(s,l,r)}}function tA(t,e){return t.replace(nA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const nA=/\{\$([^}]+)}/g;function rA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Kr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ym(i)&&Ym(o)){if(!Kr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ym(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function sA(t,e){const n=new iA(t,e);return n.subscribe.bind(n)}class iA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");oA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=gc),s.error===void 0&&(s.error=gc),s.complete===void 0&&(s.complete=gc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function oA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Gv(t){return(await fetch(t,{credentials:"include"})).ok}class Gr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new $S;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uA(e))try{this.getOrInitializeService({instanceIdentifier:xr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=xr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xr){return this.instances.has(e)}getOptions(e=xr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xr){return this.component?this.component.multipleInstances?e:xr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lA(t){return t===xr?void 0:t}function uA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new aA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const hA={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},dA=se.INFO,fA={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},pA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=fA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hd{constructor(e){this.name=e,this._logLevel=dA,this._logHandler=pA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const mA=(t,e)=>e.some(n=>t instanceof n);let Xm,Jm;function gA(){return Xm||(Xm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yA(){return Jm||(Jm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qv=new WeakMap,Sh=new WeakMap,Yv=new WeakMap,yc=new WeakMap,qd=new WeakMap;function _A(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(or(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Qv.set(n,t)}).catch(()=>{}),qd.set(e,t),e}function vA(t){if(Sh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Sh.set(t,e)}let Ah={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Yv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return or(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wA(t){Ah=t(Ah)}function EA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_c(this),e,...n);return Yv.set(r,e.sort?e.sort():[e]),or(r)}:yA().includes(t)?function(...e){return t.apply(_c(this),e),or(Qv.get(this))}:function(...e){return or(t.apply(_c(this),e))}}function TA(t){return typeof t=="function"?EA(t):(t instanceof IDBTransaction&&vA(t),mA(t,gA())?new Proxy(t,Ah):t)}function or(t){if(t instanceof IDBRequest)return _A(t);if(yc.has(t))return yc.get(t);const e=TA(t);return e!==t&&(yc.set(t,e),qd.set(e,t)),e}const _c=t=>qd.get(t);function IA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=or(o);return r&&o.addEventListener("upgradeneeded",u=>{r(or(o.result),u.oldVersion,u.newVersion,or(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const SA=["get","getKey","getAll","getAllKeys","count"],AA=["put","add","delete","clear"],vc=new Map;function Zm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vc.get(e))return vc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=AA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||SA.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return vc.set(e,i),i}wA(t=>({...t,get:(e,n,r)=>Zm(e,n)||t.get(e,n,r),has:(e,n)=>!!Zm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(CA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function CA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rh="@firebase/app",eg="0.14.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new Hd("@firebase/app"),kA="@firebase/app-compat",PA="@firebase/analytics-compat",xA="@firebase/analytics",NA="@firebase/app-check-compat",DA="@firebase/app-check",VA="@firebase/auth",bA="@firebase/auth-compat",OA="@firebase/database",LA="@firebase/data-connect",MA="@firebase/database-compat",FA="@firebase/functions",UA="@firebase/functions-compat",jA="@firebase/installations",zA="@firebase/installations-compat",BA="@firebase/messaging",$A="@firebase/messaging-compat",HA="@firebase/performance",qA="@firebase/performance-compat",WA="@firebase/remote-config",KA="@firebase/remote-config-compat",GA="@firebase/storage",QA="@firebase/storage-compat",YA="@firebase/firestore",XA="@firebase/ai",JA="@firebase/firestore-compat",ZA="firebase",e1="12.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch="[DEFAULT]",t1={[Rh]:"fire-core",[kA]:"fire-core-compat",[xA]:"fire-analytics",[PA]:"fire-analytics-compat",[DA]:"fire-app-check",[NA]:"fire-app-check-compat",[VA]:"fire-auth",[bA]:"fire-auth-compat",[OA]:"fire-rtdb",[LA]:"fire-data-connect",[MA]:"fire-rtdb-compat",[FA]:"fire-fn",[UA]:"fire-fn-compat",[jA]:"fire-iid",[zA]:"fire-iid-compat",[BA]:"fire-fcm",[$A]:"fire-fcm-compat",[HA]:"fire-perf",[qA]:"fire-perf-compat",[WA]:"fire-rc",[KA]:"fire-rc-compat",[GA]:"fire-gcs",[QA]:"fire-gcs-compat",[YA]:"fire-fst",[JA]:"fire-fst-compat",[XA]:"fire-vertex","fire-js":"fire-js",[ZA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl=new Map,n1=new Map,kh=new Map;function tg(t,e){try{t.container.addComponent(e)}catch(n){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $s(t){const e=t.name;if(kh.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;kh.set(e,t);for(const n of wl.values())tg(n,t);for(const n of n1.values())tg(n,t);return!0}function Wd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ut(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ar=new No("app","Firebase",r1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Gr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ar.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=e1;function Xv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Ch,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw ar.create("bad-app-name",{appName:String(s)});if(n||(n=Wv()),!n)throw ar.create("no-options");const i=wl.get(s);if(i){if(Kr(n,i.options)&&Kr(r,i.config))return i;throw ar.create("duplicate-app",{appName:s})}const o=new cA(s);for(const u of kh.values())o.addComponent(u);const l=new s1(n,r,o);return wl.set(s,l),l}function Jv(t=Ch){const e=wl.get(t);if(!e&&t===Ch&&Wv())return Xv();if(!e)throw ar.create("no-app",{appName:t});return e}function lr(t,e,n){let r=t1[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(o.join(" "));return}$s(new Gr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1="firebase-heartbeat-database",o1=1,yo="firebase-heartbeat-store";let wc=null;function Zv(){return wc||(wc=IA(i1,o1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(yo)}catch(n){console.warn(n)}}}}).catch(t=>{throw ar.create("idb-open",{originalErrorMessage:t.message})})),wc}async function a1(t){try{const n=(await Zv()).transaction(yo),r=await n.objectStore(yo).get(e0(t));return await n.done,r}catch(e){if(e instanceof Dn)Cn.warn(e.message);else{const n=ar.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cn.warn(n.message)}}}async function ng(t,e){try{const r=(await Zv()).transaction(yo,"readwrite");await r.objectStore(yo).put(e,e0(t)),await r.done}catch(n){if(n instanceof Dn)Cn.warn(n.message);else{const r=ar.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cn.warn(r.message)}}}function e0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1=1024,u1=30;class c1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new d1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=rg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>u1){const o=f1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Cn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=rg(),{heartbeatsToSend:r,unsentEntries:s}=h1(this._heartbeatsCache.heartbeats),i=vl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Cn.warn(n),""}}}function rg(){return new Date().toISOString().substring(0,10)}function h1(t,e=l1){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),sg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),sg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class d1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return JS()?ZS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await a1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ng(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ng(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function sg(t){return vl(JSON.stringify({version:2,heartbeats:t})).length}function f1(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(t){$s(new Gr("platform-logger",e=>new RA(e),"PRIVATE")),$s(new Gr("heartbeat",e=>new c1(e),"PRIVATE")),lr(Rh,eg,t),lr(Rh,eg,"esm2020"),lr("fire-js","")}p1("");var ig=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ur,t0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,y){function w(){}w.prototype=y.prototype,_.F=y.prototype,_.prototype=new w,_.prototype.constructor=_,_.D=function(I,A,k){for(var E=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)E[ee-2]=arguments[ee];return y.prototype[A].apply(I,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(_,y,w){w||(w=0);const I=Array(16);if(typeof y=="string")for(var A=0;A<16;++A)I[A]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(A=0;A<16;++A)I[A]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=_.g[0],w=_.g[1],A=_.g[2];let k=_.g[3],E;E=y+(k^w&(A^k))+I[0]+3614090360&4294967295,y=w+(E<<7&4294967295|E>>>25),E=k+(A^y&(w^A))+I[1]+3905402710&4294967295,k=y+(E<<12&4294967295|E>>>20),E=A+(w^k&(y^w))+I[2]+606105819&4294967295,A=k+(E<<17&4294967295|E>>>15),E=w+(y^A&(k^y))+I[3]+3250441966&4294967295,w=A+(E<<22&4294967295|E>>>10),E=y+(k^w&(A^k))+I[4]+4118548399&4294967295,y=w+(E<<7&4294967295|E>>>25),E=k+(A^y&(w^A))+I[5]+1200080426&4294967295,k=y+(E<<12&4294967295|E>>>20),E=A+(w^k&(y^w))+I[6]+2821735955&4294967295,A=k+(E<<17&4294967295|E>>>15),E=w+(y^A&(k^y))+I[7]+4249261313&4294967295,w=A+(E<<22&4294967295|E>>>10),E=y+(k^w&(A^k))+I[8]+1770035416&4294967295,y=w+(E<<7&4294967295|E>>>25),E=k+(A^y&(w^A))+I[9]+2336552879&4294967295,k=y+(E<<12&4294967295|E>>>20),E=A+(w^k&(y^w))+I[10]+4294925233&4294967295,A=k+(E<<17&4294967295|E>>>15),E=w+(y^A&(k^y))+I[11]+2304563134&4294967295,w=A+(E<<22&4294967295|E>>>10),E=y+(k^w&(A^k))+I[12]+1804603682&4294967295,y=w+(E<<7&4294967295|E>>>25),E=k+(A^y&(w^A))+I[13]+4254626195&4294967295,k=y+(E<<12&4294967295|E>>>20),E=A+(w^k&(y^w))+I[14]+2792965006&4294967295,A=k+(E<<17&4294967295|E>>>15),E=w+(y^A&(k^y))+I[15]+1236535329&4294967295,w=A+(E<<22&4294967295|E>>>10),E=y+(A^k&(w^A))+I[1]+4129170786&4294967295,y=w+(E<<5&4294967295|E>>>27),E=k+(w^A&(y^w))+I[6]+3225465664&4294967295,k=y+(E<<9&4294967295|E>>>23),E=A+(y^w&(k^y))+I[11]+643717713&4294967295,A=k+(E<<14&4294967295|E>>>18),E=w+(k^y&(A^k))+I[0]+3921069994&4294967295,w=A+(E<<20&4294967295|E>>>12),E=y+(A^k&(w^A))+I[5]+3593408605&4294967295,y=w+(E<<5&4294967295|E>>>27),E=k+(w^A&(y^w))+I[10]+38016083&4294967295,k=y+(E<<9&4294967295|E>>>23),E=A+(y^w&(k^y))+I[15]+3634488961&4294967295,A=k+(E<<14&4294967295|E>>>18),E=w+(k^y&(A^k))+I[4]+3889429448&4294967295,w=A+(E<<20&4294967295|E>>>12),E=y+(A^k&(w^A))+I[9]+568446438&4294967295,y=w+(E<<5&4294967295|E>>>27),E=k+(w^A&(y^w))+I[14]+3275163606&4294967295,k=y+(E<<9&4294967295|E>>>23),E=A+(y^w&(k^y))+I[3]+4107603335&4294967295,A=k+(E<<14&4294967295|E>>>18),E=w+(k^y&(A^k))+I[8]+1163531501&4294967295,w=A+(E<<20&4294967295|E>>>12),E=y+(A^k&(w^A))+I[13]+2850285829&4294967295,y=w+(E<<5&4294967295|E>>>27),E=k+(w^A&(y^w))+I[2]+4243563512&4294967295,k=y+(E<<9&4294967295|E>>>23),E=A+(y^w&(k^y))+I[7]+1735328473&4294967295,A=k+(E<<14&4294967295|E>>>18),E=w+(k^y&(A^k))+I[12]+2368359562&4294967295,w=A+(E<<20&4294967295|E>>>12),E=y+(w^A^k)+I[5]+4294588738&4294967295,y=w+(E<<4&4294967295|E>>>28),E=k+(y^w^A)+I[8]+2272392833&4294967295,k=y+(E<<11&4294967295|E>>>21),E=A+(k^y^w)+I[11]+1839030562&4294967295,A=k+(E<<16&4294967295|E>>>16),E=w+(A^k^y)+I[14]+4259657740&4294967295,w=A+(E<<23&4294967295|E>>>9),E=y+(w^A^k)+I[1]+2763975236&4294967295,y=w+(E<<4&4294967295|E>>>28),E=k+(y^w^A)+I[4]+1272893353&4294967295,k=y+(E<<11&4294967295|E>>>21),E=A+(k^y^w)+I[7]+4139469664&4294967295,A=k+(E<<16&4294967295|E>>>16),E=w+(A^k^y)+I[10]+3200236656&4294967295,w=A+(E<<23&4294967295|E>>>9),E=y+(w^A^k)+I[13]+681279174&4294967295,y=w+(E<<4&4294967295|E>>>28),E=k+(y^w^A)+I[0]+3936430074&4294967295,k=y+(E<<11&4294967295|E>>>21),E=A+(k^y^w)+I[3]+3572445317&4294967295,A=k+(E<<16&4294967295|E>>>16),E=w+(A^k^y)+I[6]+76029189&4294967295,w=A+(E<<23&4294967295|E>>>9),E=y+(w^A^k)+I[9]+3654602809&4294967295,y=w+(E<<4&4294967295|E>>>28),E=k+(y^w^A)+I[12]+3873151461&4294967295,k=y+(E<<11&4294967295|E>>>21),E=A+(k^y^w)+I[15]+530742520&4294967295,A=k+(E<<16&4294967295|E>>>16),E=w+(A^k^y)+I[2]+3299628645&4294967295,w=A+(E<<23&4294967295|E>>>9),E=y+(A^(w|~k))+I[0]+4096336452&4294967295,y=w+(E<<6&4294967295|E>>>26),E=k+(w^(y|~A))+I[7]+1126891415&4294967295,k=y+(E<<10&4294967295|E>>>22),E=A+(y^(k|~w))+I[14]+2878612391&4294967295,A=k+(E<<15&4294967295|E>>>17),E=w+(k^(A|~y))+I[5]+4237533241&4294967295,w=A+(E<<21&4294967295|E>>>11),E=y+(A^(w|~k))+I[12]+1700485571&4294967295,y=w+(E<<6&4294967295|E>>>26),E=k+(w^(y|~A))+I[3]+2399980690&4294967295,k=y+(E<<10&4294967295|E>>>22),E=A+(y^(k|~w))+I[10]+4293915773&4294967295,A=k+(E<<15&4294967295|E>>>17),E=w+(k^(A|~y))+I[1]+2240044497&4294967295,w=A+(E<<21&4294967295|E>>>11),E=y+(A^(w|~k))+I[8]+1873313359&4294967295,y=w+(E<<6&4294967295|E>>>26),E=k+(w^(y|~A))+I[15]+4264355552&4294967295,k=y+(E<<10&4294967295|E>>>22),E=A+(y^(k|~w))+I[6]+2734768916&4294967295,A=k+(E<<15&4294967295|E>>>17),E=w+(k^(A|~y))+I[13]+1309151649&4294967295,w=A+(E<<21&4294967295|E>>>11),E=y+(A^(w|~k))+I[4]+4149444226&4294967295,y=w+(E<<6&4294967295|E>>>26),E=k+(w^(y|~A))+I[11]+3174756917&4294967295,k=y+(E<<10&4294967295|E>>>22),E=A+(y^(k|~w))+I[2]+718787259&4294967295,A=k+(E<<15&4294967295|E>>>17),E=w+(k^(A|~y))+I[9]+3951481745&4294967295,_.g[0]=_.g[0]+y&4294967295,_.g[1]=_.g[1]+(A+(E<<21&4294967295|E>>>11))&4294967295,_.g[2]=_.g[2]+A&4294967295,_.g[3]=_.g[3]+k&4294967295}r.prototype.v=function(_,y){y===void 0&&(y=_.length);const w=y-this.blockSize,I=this.C;let A=this.h,k=0;for(;k<y;){if(A==0)for(;k<=w;)s(this,_,k),k+=this.blockSize;if(typeof _=="string"){for(;k<y;)if(I[A++]=_.charCodeAt(k++),A==this.blockSize){s(this,I),A=0;break}}else for(;k<y;)if(I[A++]=_[k++],A==this.blockSize){s(this,I),A=0;break}}this.h=A,this.o+=y},r.prototype.A=function(){var _=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);_[0]=128;for(var y=1;y<_.length-8;++y)_[y]=0;y=this.o*8;for(var w=_.length-8;w<_.length;++w)_[w]=y&255,y/=256;for(this.v(_),_=Array(16),y=0,w=0;w<4;++w)for(let I=0;I<32;I+=8)_[y++]=this.g[w]>>>I&255;return _};function i(_,y){var w=l;return Object.prototype.hasOwnProperty.call(w,_)?w[_]:w[_]=y(_)}function o(_,y){this.h=y;const w=[];let I=!0;for(let A=_.length-1;A>=0;A--){const k=_[A]|0;I&&k==y||(w[A]=k,I=!1)}this.g=w}var l={};function u(_){return-128<=_&&_<128?i(_,function(y){return new o([y|0],y<0?-1:0)}):new o([_|0],_<0?-1:0)}function h(_){if(isNaN(_)||!isFinite(_))return p;if(_<0)return L(h(-_));const y=[];let w=1;for(let I=0;_>=w;I++)y[I]=_/w|0,w*=4294967296;return new o(y,0)}function f(_,y){if(_.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(_.charAt(0)=="-")return L(f(_.substring(1),y));if(_.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=h(Math.pow(y,8));let I=p;for(let k=0;k<_.length;k+=8){var A=Math.min(8,_.length-k);const E=parseInt(_.substring(k,k+A),y);A<8?(A=h(Math.pow(y,A)),I=I.j(A).add(h(E))):(I=I.j(w),I=I.add(h(E)))}return I}var p=u(0),g=u(1),R=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-L(this).m();let _=0,y=1;for(let w=0;w<this.g.length;w++){const I=this.i(w);_+=(I>=0?I:4294967296+I)*y,y*=4294967296}return _},t.toString=function(_){if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(P(this))return"0";if(N(this))return"-"+L(this).toString(_);const y=h(Math.pow(_,6));var w=this;let I="";for(;;){const A=V(w,y).g;w=T(w,A.j(y));let k=((w.g.length>0?w.g[0]:w.h)>>>0).toString(_);if(w=A,P(w))return k+I;for(;k.length<6;)k="0"+k;I=k+I}},t.i=function(_){return _<0?0:_<this.g.length?this.g[_]:this.h};function P(_){if(_.h!=0)return!1;for(let y=0;y<_.g.length;y++)if(_.g[y]!=0)return!1;return!0}function N(_){return _.h==-1}t.l=function(_){return _=T(this,_),N(_)?-1:P(_)?0:1};function L(_){const y=_.g.length,w=[];for(let I=0;I<y;I++)w[I]=~_.g[I];return new o(w,~_.h).add(g)}t.abs=function(){return N(this)?L(this):this},t.add=function(_){const y=Math.max(this.g.length,_.g.length),w=[];let I=0;for(let A=0;A<=y;A++){let k=I+(this.i(A)&65535)+(_.i(A)&65535),E=(k>>>16)+(this.i(A)>>>16)+(_.i(A)>>>16);I=E>>>16,k&=65535,E&=65535,w[A]=E<<16|k}return new o(w,w[w.length-1]&-2147483648?-1:0)};function T(_,y){return _.add(L(y))}t.j=function(_){if(P(this)||P(_))return p;if(N(this))return N(_)?L(this).j(L(_)):L(L(this).j(_));if(N(_))return L(this.j(L(_)));if(this.l(R)<0&&_.l(R)<0)return h(this.m()*_.m());const y=this.g.length+_.g.length,w=[];for(var I=0;I<2*y;I++)w[I]=0;for(I=0;I<this.g.length;I++)for(let A=0;A<_.g.length;A++){const k=this.i(I)>>>16,E=this.i(I)&65535,ee=_.i(A)>>>16,_t=_.i(A)&65535;w[2*I+2*A]+=E*_t,v(w,2*I+2*A),w[2*I+2*A+1]+=k*_t,v(w,2*I+2*A+1),w[2*I+2*A+1]+=E*ee,v(w,2*I+2*A+1),w[2*I+2*A+2]+=k*ee,v(w,2*I+2*A+2)}for(_=0;_<y;_++)w[_]=w[2*_+1]<<16|w[2*_];for(_=y;_<2*y;_++)w[_]=0;return new o(w,0)};function v(_,y){for(;(_[y]&65535)!=_[y];)_[y+1]+=_[y]>>>16,_[y]&=65535,y++}function S(_,y){this.g=_,this.h=y}function V(_,y){if(P(y))throw Error("division by zero");if(P(_))return new S(p,p);if(N(_))return y=V(L(_),y),new S(L(y.g),L(y.h));if(N(y))return y=V(_,L(y)),new S(L(y.g),y.h);if(_.g.length>30){if(N(_)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var w=g,I=y;I.l(_)<=0;)w=M(w),I=M(I);var A=j(w,1),k=j(I,1);for(I=j(I,2),w=j(w,2);!P(I);){var E=k.add(I);E.l(_)<=0&&(A=A.add(w),k=E),I=j(I,1),w=j(w,1)}return y=T(_,A.j(y)),new S(A,y)}for(A=p;_.l(y)>=0;){for(w=Math.max(1,Math.floor(_.m()/y.m())),I=Math.ceil(Math.log(w)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),k=h(w),E=k.j(y);N(E)||E.l(_)>0;)w-=I,k=h(w),E=k.j(y);P(k)&&(k=g),A=A.add(k),_=T(_,E)}return new S(A,_)}t.B=function(_){return V(this,_).h},t.and=function(_){const y=Math.max(this.g.length,_.g.length),w=[];for(let I=0;I<y;I++)w[I]=this.i(I)&_.i(I);return new o(w,this.h&_.h)},t.or=function(_){const y=Math.max(this.g.length,_.g.length),w=[];for(let I=0;I<y;I++)w[I]=this.i(I)|_.i(I);return new o(w,this.h|_.h)},t.xor=function(_){const y=Math.max(this.g.length,_.g.length),w=[];for(let I=0;I<y;I++)w[I]=this.i(I)^_.i(I);return new o(w,this.h^_.h)};function M(_){const y=_.g.length+1,w=[];for(let I=0;I<y;I++)w[I]=_.i(I)<<1|_.i(I-1)>>>31;return new o(w,_.h)}function j(_,y){const w=y>>5;y%=32;const I=_.g.length-w,A=[];for(let k=0;k<I;k++)A[k]=y>0?_.i(k+w)>>>y|_.i(k+w+1)<<32-y:_.i(k+w);return new o(A,_.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,t0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,ur=o}).apply(typeof ig<"u"?ig:typeof self<"u"?self:typeof window<"u"?window:{});var va=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var n0,bi,r0,Fa,Ph,s0,i0,o0;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof va=="object"&&va];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var x=a[m];if(!(x in d))break e;d=d[x]}a=a[a.length-1],m=d[a],c=c(m),c!=m&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(c){var d=[],m;for(m in c)Object.prototype.hasOwnProperty.call(c,m)&&d.push([m,c[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function u(a,c,d){return a.call.apply(a.bind,arguments)}function h(a,c,d){return h=u,h.apply(null,arguments)}function f(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,c){function d(){}d.prototype=c.prototype,a.Z=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(m,x,D){for(var z=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)z[Z-2]=arguments[Z];return c.prototype[x].apply(m,z)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function R(a){const c=a.length;if(c>0){const d=Array(c);for(let m=0;m<c;m++)d[m]=a[m];return d}return[]}function P(a,c){for(let m=1;m<arguments.length;m++){const x=arguments[m];var d=typeof x;if(d=d!="object"?d:x?Array.isArray(x)?"array":d:"null",d=="array"||d=="object"&&typeof x.length=="number"){d=a.length||0;const D=x.length||0;a.length=d+D;for(let z=0;z<D;z++)a[d+z]=x[z]}else a.push(x)}}class N{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function L(a){o.setTimeout(()=>{throw a},0)}function T(){var a=_;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class v{constructor(){this.h=this.g=null}add(c,d){const m=S.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var S=new N(()=>new V,a=>a.reset());class V{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let M,j=!1,_=new v,y=()=>{const a=Promise.resolve(void 0);M=()=>{a.then(w)}};function w(){for(var a;a=T();){try{a.h.call(a.g)}catch(d){L(d)}var c=S;c.j(a),c.h<100&&(c.h++,a.next=c.g,c.g=a)}j=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,c),o.removeEventListener("test",d,c)}catch{}return a}();function E(a){return/^[\s\xa0]*$/.test(a)}function ee(a,c){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,c)}p(ee,A),ee.prototype.init=function(a,c){const d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget,c||(d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement)),this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ee.Z.h.call(this)},ee.prototype.h=function(){ee.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var _t="closure_listenable_"+(Math.random()*1e6|0),Vn=0;function J(a,c,d,m,x){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=x,this.key=++Vn,this.da=this.fa=!1}function U(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function q(a,c,d){for(const m in a)c.call(d,a[m],m,a)}function K(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function oe(a){const c={};for(const d in a)c[d]=a[d];return c}const _e="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rt(a,c){let d,m;for(let x=1;x<arguments.length;x++){m=arguments[x];for(d in m)a[d]=m[d];for(let D=0;D<_e.length;D++)d=_e[D],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function Ke(a){this.src=a,this.g={},this.h=0}Ke.prototype.add=function(a,c,d,m,x){const D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);const z=st(a,c,m,x);return z>-1?(c=a[z],d||(c.fa=!1)):(c=new J(c,this.src,D,!!m,x),c.fa=d,a.push(c)),c};function hn(a,c){const d=c.type;if(d in a.g){var m=a.g[d],x=Array.prototype.indexOf.call(m,c,void 0),D;(D=x>=0)&&Array.prototype.splice.call(m,x,1),D&&(U(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function st(a,c,d,m){for(let x=0;x<a.length;++x){const D=a[x];if(!D.da&&D.listener==c&&D.capture==!!d&&D.ha==m)return x}return-1}var bn="closure_lm_"+(Math.random()*1e6|0),Eu={};function Uf(a,c,d,m,x){if(Array.isArray(c)){for(let D=0;D<c.length;D++)Uf(a,c[D],d,m,x);return null}return d=Bf(d),a&&a[_t]?a.J(c,d,l(m)?!!m.capture:!1,x):lE(a,c,d,!1,m,x)}function lE(a,c,d,m,x,D){if(!c)throw Error("Invalid event type");const z=l(x)?!!x.capture:!!x;let Z=Iu(a);if(Z||(a[bn]=Z=new Ke(a)),d=Z.add(c,d,m,z,D),d.proxy)return d;if(m=uE(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)k||(x=z),x===void 0&&(x=!1),a.addEventListener(c.toString(),m,x);else if(a.attachEvent)a.attachEvent(zf(c.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function uE(){function a(d){return c.call(a.src,a.listener,d)}const c=cE;return a}function jf(a,c,d,m,x){if(Array.isArray(c))for(var D=0;D<c.length;D++)jf(a,c[D],d,m,x);else m=l(m)?!!m.capture:!!m,d=Bf(d),a&&a[_t]?(a=a.i,D=String(c).toString(),D in a.g&&(c=a.g[D],d=st(c,d,m,x),d>-1&&(U(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete a.g[D],a.h--)))):a&&(a=Iu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=st(c,d,m,x)),(d=a>-1?c[a]:null)&&Tu(d))}function Tu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[_t])hn(c.i,a);else{var d=a.type,m=a.proxy;c.removeEventListener?c.removeEventListener(d,m,a.capture):c.detachEvent?c.detachEvent(zf(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=Iu(c))?(hn(d,a),d.h==0&&(d.src=null,c[bn]=null)):U(a)}}}function zf(a){return a in Eu?Eu[a]:Eu[a]="on"+a}function cE(a,c){if(a.da)a=!0;else{c=new ee(c,this);const d=a.listener,m=a.ha||a.src;a.fa&&Tu(a),a=d.call(m,c)}return a}function Iu(a){return a=a[bn],a instanceof Ke?a:null}var Su="__closure_events_fn_"+(Math.random()*1e9>>>0);function Bf(a){return typeof a=="function"?a:(a[Su]||(a[Su]=function(c){return a.handleEvent(c)}),a[Su])}function Ge(){I.call(this),this.i=new Ke(this),this.M=this,this.G=null}p(Ge,I),Ge.prototype[_t]=!0,Ge.prototype.removeEventListener=function(a,c,d,m){jf(this,a,c,d,m)};function it(a,c){var d,m=a.G;if(m)for(d=[];m;m=m.G)d.push(m);if(a=a.M,m=c.type||c,typeof c=="string")c=new A(c,a);else if(c instanceof A)c.target=c.target||a;else{var x=c;c=new A(m,a),rt(c,x)}x=!0;let D,z;if(d)for(z=d.length-1;z>=0;z--)D=c.g=d[z],x=Ho(D,m,!0,c)&&x;if(D=c.g=a,x=Ho(D,m,!0,c)&&x,x=Ho(D,m,!1,c)&&x,d)for(z=0;z<d.length;z++)D=c.g=d[z],x=Ho(D,m,!1,c)&&x}Ge.prototype.N=function(){if(Ge.Z.N.call(this),this.i){var a=this.i;for(const c in a.g){const d=a.g[c];for(let m=0;m<d.length;m++)U(d[m]);delete a.g[c],a.h--}}this.G=null},Ge.prototype.J=function(a,c,d,m){return this.i.add(String(a),c,!1,d,m)},Ge.prototype.K=function(a,c,d,m){return this.i.add(String(a),c,!0,d,m)};function Ho(a,c,d,m){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();let x=!0;for(let D=0;D<c.length;++D){const z=c[D];if(z&&!z.da&&z.capture==d){const Z=z.listener,Ve=z.ha||z.src;z.fa&&hn(a.i,z),x=Z.call(Ve,m)!==!1&&x}}return x&&!m.defaultPrevented}function hE(a,c){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(a,c||0)}function $f(a){a.g=hE(()=>{a.g=null,a.i&&(a.i=!1,$f(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class dE extends I{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:$f(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ii(a){I.call(this),this.h=a,this.g={}}p(ii,I);var Hf=[];function qf(a){q(a.g,function(c,d){this.g.hasOwnProperty(d)&&Tu(c)},a),a.g={}}ii.prototype.N=function(){ii.Z.N.call(this),qf(this)},ii.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Au=o.JSON.stringify,fE=o.JSON.parse,pE=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Wf(){}function Kf(){}var oi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ru(){A.call(this,"d")}p(Ru,A);function Cu(){A.call(this,"c")}p(Cu,A);var Ir={},Gf=null;function qo(){return Gf=Gf||new Ge}Ir.Ia="serverreachability";function Qf(a){A.call(this,Ir.Ia,a)}p(Qf,A);function ai(a){const c=qo();it(c,new Qf(c))}Ir.STAT_EVENT="statevent";function Yf(a,c){A.call(this,Ir.STAT_EVENT,a),this.stat=c}p(Yf,A);function ot(a){const c=qo();it(c,new Yf(c,a))}Ir.Ja="timingevent";function Xf(a,c){A.call(this,Ir.Ja,a),this.size=c}p(Xf,A);function li(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},c)}function ui(){this.g=!0}ui.prototype.ua=function(){this.g=!1};function mE(a,c,d,m,x,D){a.info(function(){if(a.g)if(D){var z="",Z=D.split("&");for(let he=0;he<Z.length;he++){var Ve=Z[he].split("=");if(Ve.length>1){const Me=Ve[0];Ve=Ve[1];const Qt=Me.split("_");z=Qt.length>=2&&Qt[1]=="type"?z+(Me+"="+Ve+"&"):z+(Me+"=redacted&")}}}else z=null;else z=D;return"XMLHTTP REQ ("+m+") [attempt "+x+"]: "+c+`
`+d+`
`+z})}function gE(a,c,d,m,x,D,z){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+x+"]: "+c+`
`+d+`
`+D+" "+z})}function is(a,c,d,m){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+_E(a,d)+(m?" "+m:"")})}function yE(a,c){a.info(function(){return"TIMEOUT: "+c})}ui.prototype.info=function(){};function _E(a,c){if(!a.g)return c;if(!c)return null;try{const D=JSON.parse(c);if(D){for(a=0;a<D.length;a++)if(Array.isArray(D[a])){var d=D[a];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var x=m[0];if(x!="noop"&&x!="stop"&&x!="close")for(let z=1;z<m.length;z++)m[z]=""}}}}return Au(D)}catch{return c}}var Wo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Jf={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Zf;function ku(){}p(ku,Wf),ku.prototype.g=function(){return new XMLHttpRequest},Zf=new ku;function ci(a){return encodeURIComponent(String(a))}function vE(a){var c=1;a=a.split(":");const d=[];for(;c>0&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function On(a,c,d,m){this.j=a,this.i=c,this.l=d,this.S=m||1,this.V=new ii(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ep}function ep(){this.i=null,this.g="",this.h=!1}var tp={},Pu={};function xu(a,c,d){a.M=1,a.A=Go(Gt(c)),a.u=d,a.R=!0,np(a,null)}function np(a,c){a.F=Date.now(),Ko(a),a.B=Gt(a.A);var d=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),mp(d.i,"t",m),a.C=0,d=a.j.L,a.h=new ep,a.g=Vp(a.j,d?c:null,!a.u),a.P>0&&(a.O=new dE(h(a.Y,a,a.g),a.P)),c=a.V,d=a.g,m=a.ba;var x="readystatechange";Array.isArray(x)||(x&&(Hf[0]=x.toString()),x=Hf);for(let D=0;D<x.length;D++){const z=Uf(d,x[D],m||c.handleEvent,!1,c.h||c);if(!z)break;c.g[z.key]=z}c=a.J?oe(a.J):{},a.u?(a.v||(a.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,c)):(a.v="GET",a.g.ea(a.B,a.v,null,c)),ai(),mE(a.i,a.v,a.B,a.l,a.S,a.u)}On.prototype.ba=function(a){a=a.target;const c=this.O;c&&Fn(a)==3?c.j():this.Y(a)},On.prototype.Y=function(a){try{if(a==this.g)e:{const Z=Fn(this.g),Ve=this.g.ya(),he=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||Tp(this.g)))){this.K||Z!=4||Ve==7||(Ve==8||he<=0?ai(3):ai(2)),Nu(this);var c=this.g.ca();this.X=c;var d=wE(this);if(this.o=c==200,gE(this.i,this.v,this.B,this.l,this.S,Z,c),this.o){if(this.U&&!this.L){t:{if(this.g){var m,x=this.g;if((m=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(m)){var D=m;break t}}D=null}if(a=D)is(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Du(this,a);else{this.o=!1,this.m=3,ot(12),Sr(this),hi(this);break e}}if(this.R){a=!0;let Me;for(;!this.K&&this.C<d.length;)if(Me=EE(this,d),Me==Pu){Z==4&&(this.m=4,ot(14),a=!1),is(this.i,this.l,null,"[Incomplete Response]");break}else if(Me==tp){this.m=4,ot(15),is(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else is(this.i,this.l,Me,null),Du(this,Me);if(rp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||d.length!=0||this.h.h||(this.m=1,ot(16),a=!1),this.o=this.o&&a,!a)is(this.i,this.l,d,"[Invalid Chunked Response]"),Sr(this),hi(this);else if(d.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),ju(z),z.P=!0,ot(11))}}else is(this.i,this.l,d,null),Du(this,d);Z==4&&Sr(this),this.o&&!this.K&&(Z==4?Pp(this.j,this):(this.o=!1,Ko(this)))}else OE(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,ot(12)):(this.m=0,ot(13)),Sr(this),hi(this)}}}catch{}finally{}};function wE(a){if(!rp(a))return a.g.la();const c=Tp(a.g);if(c==="")return"";let d="";const m=c.length,x=Fn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Sr(a),hi(a),"";a.h.i=new o.TextDecoder}for(let D=0;D<m;D++)a.h.h=!0,d+=a.h.i.decode(c[D],{stream:!(x&&D==m-1)});return c.length=0,a.h.g+=d,a.C=0,a.h.g}function rp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function EE(a,c){var d=a.C,m=c.indexOf(`
`,d);return m==-1?Pu:(d=Number(c.substring(d,m)),isNaN(d)?tp:(m+=1,m+d>c.length?Pu:(c=c.slice(m,m+d),a.C=m+d,c)))}On.prototype.cancel=function(){this.K=!0,Sr(this)};function Ko(a){a.T=Date.now()+a.H,sp(a,a.H)}function sp(a,c){if(a.D!=null)throw Error("WatchDog timer not null");a.D=li(h(a.aa,a),c)}function Nu(a){a.D&&(o.clearTimeout(a.D),a.D=null)}On.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(yE(this.i,this.B),this.M!=2&&(ai(),ot(17)),Sr(this),this.m=2,hi(this)):sp(this,this.T-a)};function hi(a){a.j.I==0||a.K||Pp(a.j,a)}function Sr(a){Nu(a);var c=a.O;c&&typeof c.dispose=="function"&&c.dispose(),a.O=null,qf(a.V),a.g&&(c=a.g,a.g=null,c.abort(),c.dispose())}function Du(a,c){try{var d=a.j;if(d.I!=0&&(d.g==a||Vu(d.h,a))){if(!a.L&&Vu(d.h,a)&&d.I==3){try{var m=d.Ba.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var x=m;if(x[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Zo(d),Xo(d);else break e;Uu(d),ot(18)}}else d.xa=x[1],0<d.xa-d.K&&x[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=li(h(d.Va,d),6e3));ap(d.h)<=1&&d.ta&&(d.ta=void 0)}else Rr(d,11)}else if((a.L||d.g==a)&&Zo(d),!E(c))for(x=d.Ba.g.parse(c),c=0;c<x.length;c++){let he=x[c];const Me=he[0];if(!(Me<=d.K))if(d.K=Me,he=he[1],d.I==2)if(he[0]=="c"){d.M=he[1],d.ba=he[2];const Qt=he[3];Qt!=null&&(d.ka=Qt,d.j.info("VER="+d.ka));const Cr=he[4];Cr!=null&&(d.za=Cr,d.j.info("SVER="+d.za));const Un=he[5];Un!=null&&typeof Un=="number"&&Un>0&&(m=1.5*Un,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const jn=a.g;if(jn){const ta=jn.g?jn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ta){var D=m.h;D.g||ta.indexOf("spdy")==-1&&ta.indexOf("quic")==-1&&ta.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(bu(D,D.h),D.h=null))}if(m.G){const zu=jn.g?jn.g.getResponseHeader("X-HTTP-Session-Id"):null;zu&&(m.wa=zu,pe(m.J,m.G,zu))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var z=a;if(m.na=Dp(m,m.L?m.ba:null,m.W),z.L){lp(m.h,z);var Z=z,Ve=m.O;Ve&&(Z.H=Ve),Z.D&&(Nu(Z),Ko(Z)),m.g=z}else Cp(m);d.i.length>0&&Jo(d)}else he[0]!="stop"&&he[0]!="close"||Rr(d,7);else d.I==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?Rr(d,7):Fu(d):he[0]!="noop"&&d.l&&d.l.qa(he),d.A=0)}}ai(4)}catch{}}var TE=class{constructor(a,c){this.g=a,this.map=c}};function ip(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function op(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ap(a){return a.h?1:a.g?a.g.size:0}function Vu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function bu(a,c){a.g?a.g.add(c):a.h=c}function lp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}ip.prototype.cancel=function(){if(this.i=up(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function up(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.G);return c}return R(a.i)}var cp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function IE(a,c){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const m=a[d].indexOf("=");let x,D=null;m>=0?(x=a[d].substring(0,m),D=a[d].substring(m+1)):x=a[d],c(x,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Ln(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;a instanceof Ln?(this.l=a.l,di(this,a.j),this.o=a.o,this.g=a.g,fi(this,a.u),this.h=a.h,Ou(this,gp(a.i)),this.m=a.m):a&&(c=String(a).match(cp))?(this.l=!1,di(this,c[1]||"",!0),this.o=pi(c[2]||""),this.g=pi(c[3]||"",!0),fi(this,c[4]),this.h=pi(c[5]||"",!0),Ou(this,c[6]||"",!0),this.m=pi(c[7]||"")):(this.l=!1,this.i=new gi(null,this.l))}Ln.prototype.toString=function(){const a=[];var c=this.j;c&&a.push(mi(c,hp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(mi(c,hp,!0),"@"),a.push(ci(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(mi(d,d.charAt(0)=="/"?RE:AE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",mi(d,kE)),a.join("")},Ln.prototype.resolve=function(a){const c=Gt(this);let d=!!a.j;d?di(c,a.j):d=!!a.o,d?c.o=a.o:d=!!a.g,d?c.g=a.g:d=a.u!=null;var m=a.h;if(d)fi(c,a.u);else if(d=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var x=c.h.lastIndexOf("/");x!=-1&&(m=c.h.slice(0,x+1)+m)}if(x=m,x==".."||x==".")m="";else if(x.indexOf("./")!=-1||x.indexOf("/.")!=-1){m=x.lastIndexOf("/",0)==0,x=x.split("/");const D=[];for(let z=0;z<x.length;){const Z=x[z++];Z=="."?m&&z==x.length&&D.push(""):Z==".."?((D.length>1||D.length==1&&D[0]!="")&&D.pop(),m&&z==x.length&&D.push("")):(D.push(Z),m=!0)}m=D.join("/")}else m=x}return d?c.h=m:d=a.i.toString()!=="",d?Ou(c,gp(a.i)):d=!!a.m,d&&(c.m=a.m),c};function Gt(a){return new Ln(a)}function di(a,c,d){a.j=d?pi(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function fi(a,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);a.u=c}else a.u=null}function Ou(a,c,d){c instanceof gi?(a.i=c,PE(a.i,a.l)):(d||(c=mi(c,CE)),a.i=new gi(c,a.l))}function pe(a,c,d){a.i.set(c,d)}function Go(a){return pe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function pi(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function mi(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,SE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function SE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var hp=/[#\/\?@]/g,AE=/[#\?:]/g,RE=/[#\?]/g,CE=/[#\?@]/g,kE=/#/g;function gi(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Ar(a){a.g||(a.g=new Map,a.h=0,a.i&&IE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=gi.prototype,t.add=function(a,c){Ar(this),this.i=null,a=os(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function dp(a,c){Ar(a),c=os(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function fp(a,c){return Ar(a),c=os(a,c),a.g.has(c)}t.forEach=function(a,c){Ar(this),this.g.forEach(function(d,m){d.forEach(function(x){a.call(c,x,m,this)},this)},this)};function pp(a,c){Ar(a);let d=[];if(typeof c=="string")fp(a,c)&&(d=d.concat(a.g.get(os(a,c))));else for(a=Array.from(a.g.values()),c=0;c<a.length;c++)d=d.concat(a[c]);return d}t.set=function(a,c){return Ar(this),this.i=null,a=os(this,a),fp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=pp(this,a),a.length>0?String(a[0]):c):c};function mp(a,c,d){dp(a,c),d.length>0&&(a.i=null,a.g.set(os(a,c),R(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(let m=0;m<c.length;m++){var d=c[m];const x=ci(d);d=pp(this,d);for(let D=0;D<d.length;D++){let z=x;d[D]!==""&&(z+="="+ci(d[D])),a.push(z)}}return this.i=a.join("&")};function gp(a){const c=new gi;return c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),c}function os(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function PE(a,c){c&&!a.j&&(Ar(a),a.i=null,a.g.forEach(function(d,m){const x=m.toLowerCase();m!=x&&(dp(this,m),mp(this,x,d))},a)),a.j=c}function xE(a,c){const d=new ui;if(o.Image){const m=new Image;m.onload=f(Mn,d,"TestLoadImage: loaded",!0,c,m),m.onerror=f(Mn,d,"TestLoadImage: error",!1,c,m),m.onabort=f(Mn,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=f(Mn,d,"TestLoadImage: timeout",!1,c,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else c(!1)}function NE(a,c){const d=new ui,m=new AbortController,x=setTimeout(()=>{m.abort(),Mn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:m.signal}).then(D=>{clearTimeout(x),D.ok?Mn(d,"TestPingServer: ok",!0,c):Mn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(x),Mn(d,"TestPingServer: error",!1,c)})}function Mn(a,c,d,m,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),m(d)}catch{}}function DE(){this.g=new pE}function Lu(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Lu,Wf),Lu.prototype.g=function(){return new Qo(this.i,this.h)};function Qo(a,c){Ge.call(this),this.H=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Qo,Ge),t=Qo.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=c,this.readyState=1,_i(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(c.body=a),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,yi(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,_i(this)),this.g&&(this.readyState=3,_i(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;yp(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function yp(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?yi(this):_i(this),this.readyState==3&&yp(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,yi(this))},t.Na=function(a){this.g&&(this.response=a,yi(this))},t.ga=function(){this.g&&yi(this)};function yi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,_i(a)}t.setRequestHeader=function(a,c){this.A.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function _i(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Qo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function _p(a){let c="";return q(a,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function Mu(a,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=_p(d),typeof a=="string"?d!=null&&ci(d):pe(a,c,d))}function Se(a){Ge.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Se,Ge);var VE=/^https?$/i,bE=["POST","PUT"];t=Se.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Zf.g(),this.g.onreadystatechange=g(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(D){vp(this,D);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var x in m)d.set(x,m[x]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const D of m.keys())d.set(D,m.get(D));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),x=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(bE,c,void 0)>=0)||m||x||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,z]of d)this.g.setRequestHeader(D,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(D){vp(this,D)}};function vp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.o=5,wp(a),Yo(a)}function wp(a){a.A||(a.A=!0,it(a,"complete"),it(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,it(this,"complete"),it(this,"abort"),Yo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Yo(this,!0)),Se.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Ep(this):this.Xa())},t.Xa=function(){Ep(this)};function Ep(a){if(a.h&&typeof i<"u"){if(a.v&&Fn(a)==4)setTimeout(a.Ca.bind(a),0);else if(it(a,"readystatechange"),Fn(a)==4){a.h=!1;try{const D=a.ca();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=D===0){let z=String(a.D).match(cp)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),m=!VE.test(z?z.toLowerCase():"")}d=m}if(d)it(a,"complete"),it(a,"success");else{a.o=6;try{var x=Fn(a)>2?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.ca()+"]",wp(a)}}finally{Yo(a)}}}}function Yo(a,c){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,c||it(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Fn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Fn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),fE(c)}};function Tp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function OE(a){const c={};a=(a.g&&Fn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(E(a[m]))continue;var d=vE(a[m]);const x=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=c[x]||[];c[x]=D,D.push(d)}K(c,function(m){return m.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function vi(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Ip(a){this.za=0,this.i=[],this.j=new ui,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=vi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=vi("baseRetryDelayMs",5e3,a),this.Za=vi("retryDelaySeedMs",1e4,a),this.Ta=vi("forwardChannelMaxRetries",2,a),this.va=vi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new ip(a&&a.concurrentRequestLimit),this.Ba=new DE,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Ip.prototype,t.ka=8,t.I=1,t.connect=function(a,c,d,m){ot(0),this.W=a,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=Dp(this,null,this.W),Jo(this)};function Fu(a){if(Sp(a),a.I==3){var c=a.V++,d=Gt(a.J);if(pe(d,"SID",a.M),pe(d,"RID",c),pe(d,"TYPE","terminate"),wi(a,d),c=new On(a,a.j,c),c.M=2,c.A=Go(Gt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=c.A,d=!0),d||(c.g=Vp(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Ko(c)}Np(a)}function Xo(a){a.g&&(ju(a),a.g.cancel(),a.g=null)}function Sp(a){Xo(a),a.v&&(o.clearTimeout(a.v),a.v=null),Zo(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Jo(a){if(!op(a.h)&&!a.m){a.m=!0;var c=a.Ea;M||y(),j||(M(),j=!0),_.add(c,a),a.D=0}}function LE(a,c){return ap(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=c.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=li(h(a.Ea,a,c),xp(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const x=new On(this,this.j,a);let D=this.o;if(this.U&&(D?(D=oe(D),rt(D,this.U)):D=this.U),this.u!==null||this.R||(x.J=D,D=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Rp(this,x,c),d=Gt(this.J),pe(d,"RID",a),pe(d,"CVER",22),this.G&&pe(d,"X-HTTP-Session-Id",this.G),wi(this,d),D&&(this.R?c="headers="+ci(_p(D))+"&"+c:this.u&&Mu(d,this.u,D)),bu(this.h,x),this.Ra&&pe(d,"TYPE","init"),this.S?(pe(d,"$req",c),pe(d,"SID","null"),x.U=!0,xu(x,d,null)):xu(x,d,c),this.I=2}}else this.I==3&&(a?Ap(this,a):this.i.length==0||op(this.h)||Ap(this))};function Ap(a,c){var d;c?d=c.l:d=a.V++;const m=Gt(a.J);pe(m,"SID",a.M),pe(m,"RID",d),pe(m,"AID",a.K),wi(a,m),a.u&&a.o&&Mu(m,a.u,a.o),d=new On(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),c&&(a.i=c.G.concat(a.i)),c=Rp(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),bu(a.h,d),xu(d,m,c)}function wi(a,c){a.H&&q(a.H,function(d,m){pe(c,m,d)}),a.l&&q({},function(d,m){pe(c,m,d)})}function Rp(a,c,d){d=Math.min(a.i.length,d);const m=a.l?h(a.l.Ka,a.l,a):null;e:{var x=a.i;let Z=-1;for(;;){const Ve=["count="+d];Z==-1?d>0?(Z=x[0].g,Ve.push("ofs="+Z)):Z=0:Ve.push("ofs="+Z);let he=!0;for(let Me=0;Me<d;Me++){var D=x[Me].g;const Qt=x[Me].map;if(D-=Z,D<0)Z=Math.max(0,x[Me].g-100),he=!1;else try{D="req"+D+"_"||"";try{var z=Qt instanceof Map?Qt:Object.entries(Qt);for(const[Cr,Un]of z){let jn=Un;l(Un)&&(jn=Au(Un)),Ve.push(D+Cr+"="+encodeURIComponent(jn))}}catch(Cr){throw Ve.push(D+"type="+encodeURIComponent("_badmap")),Cr}}catch{m&&m(Qt)}}if(he){z=Ve.join("&");break e}}z=void 0}return a=a.i.splice(0,d),c.G=a,z}function Cp(a){if(!a.g&&!a.v){a.Y=1;var c=a.Da;M||y(),j||(M(),j=!0),_.add(c,a),a.A=0}}function Uu(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=li(h(a.Da,a),xp(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,kp(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=li(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ot(10),Xo(this),kp(this))};function ju(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function kp(a){a.g=new On(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var c=Gt(a.na);pe(c,"RID","rpc"),pe(c,"SID",a.M),pe(c,"AID",a.K),pe(c,"CI",a.F?"0":"1"),!a.F&&a.ia&&pe(c,"TO",a.ia),pe(c,"TYPE","xmlhttp"),wi(a,c),a.u&&a.o&&Mu(c,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Go(Gt(c)),d.u=null,d.R=!0,np(d,a)}t.Va=function(){this.C!=null&&(this.C=null,Xo(this),Uu(this),ot(19))};function Zo(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Pp(a,c){var d=null;if(a.g==c){Zo(a),ju(a),a.g=null;var m=2}else if(Vu(a.h,c))d=c.G,lp(a.h,c),m=1;else return;if(a.I!=0){if(c.o)if(m==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var x=a.D;m=qo(),it(m,new Xf(m,d)),Jo(a)}else Cp(a);else if(x=c.m,x==3||x==0&&c.X>0||!(m==1&&LE(a,c)||m==2&&Uu(a)))switch(d&&d.length>0&&(c=a.h,c.i=c.i.concat(d)),x){case 1:Rr(a,5);break;case 4:Rr(a,10);break;case 3:Rr(a,6);break;default:Rr(a,2)}}}function xp(a,c){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*c}function Rr(a,c){if(a.j.info("Error code "+c),c==2){var d=h(a.bb,a),m=a.Ua;const x=!m;m=new Ln(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||di(m,"https"),Go(m),x?xE(m.toString(),d):NE(m.toString(),d)}else ot(2);a.I=0,a.l&&a.l.pa(c),Np(a),Sp(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function Np(a){if(a.I=0,a.ja=[],a.l){const c=up(a.h);(c.length!=0||a.i.length!=0)&&(P(a.ja,c),P(a.ja,a.i),a.h.i.length=0,R(a.i),a.i.length=0),a.l.oa()}}function Dp(a,c,d){var m=d instanceof Ln?Gt(d):new Ln(d);if(m.g!="")c&&(m.g=c+"."+m.g),fi(m,m.u);else{var x=o.location;m=x.protocol,c=c?c+"."+x.hostname:x.hostname,x=+x.port;const D=new Ln(null);m&&di(D,m),c&&(D.g=c),x&&fi(D,x),d&&(D.h=d),m=D}return d=a.G,c=a.wa,d&&c&&pe(m,d,c),pe(m,"VER",a.ka),wi(a,m),m}function Vp(a,c,d){if(c&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Aa&&!a.ma?new Se(new Lu({ab:d})):new Se(a.ma),c.Fa(a.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function bp(){}t=bp.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ea(){}ea.prototype.g=function(a,c){return new vt(a,c)};function vt(a,c){Ge.call(this),this.g=new Ip(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(a?a["X-WebChannel-Client-Profile"]=c.sa:a={"X-WebChannel-Client-Profile":c.sa}),this.g.U=a,(a=c&&c.Qb)&&!E(a)&&(this.g.u=a),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!E(c)&&(this.g.G=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new as(this)}p(vt,Ge),vt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){Fu(this.g)},vt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Au(a),a=d);c.i.push(new TE(c.Ya++,a)),c.I==3&&Jo(c)},vt.prototype.N=function(){this.g.l=null,delete this.j,Fu(this.g),delete this.g,vt.Z.N.call(this)};function Op(a){Ru.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}p(Op,Ru);function Lp(){Cu.call(this),this.status=1}p(Lp,Cu);function as(a){this.g=a}p(as,bp),as.prototype.ra=function(){it(this.g,"a")},as.prototype.qa=function(a){it(this.g,new Op(a))},as.prototype.pa=function(a){it(this.g,new Lp)},as.prototype.oa=function(){it(this.g,"b")},ea.prototype.createWebChannel=ea.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,o0=function(){return new ea},i0=function(){return qo()},s0=Ir,Ph={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Wo.NO_ERROR=0,Wo.TIMEOUT=8,Wo.HTTP_ERROR=6,Fa=Wo,Jf.COMPLETE="complete",r0=Jf,Kf.EventType=oi,oi.OPEN="a",oi.CLOSE="b",oi.ERROR="c",oi.MESSAGE="d",Ge.prototype.listen=Ge.prototype.J,bi=Kf,Se.prototype.listenOnce=Se.prototype.K,Se.prototype.getLastError=Se.prototype.Ha,Se.prototype.getLastErrorCode=Se.prototype.ya,Se.prototype.getStatus=Se.prototype.ca,Se.prototype.getResponseJson=Se.prototype.La,Se.prototype.getResponseText=Se.prototype.la,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Fa,n0=Se}).apply(typeof va<"u"?va:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ei="12.13.0";function m1(t){ei=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=new Hd("@firebase/firestore");function us(){return Qr.logLevel}function B(t,...e){if(Qr.logLevel<=se.DEBUG){const n=e.map(Kd);Qr.debug(`Firestore (${ei}): ${t}`,...n)}}function kn(t,...e){if(Qr.logLevel<=se.ERROR){const n=e.map(Kd);Qr.error(`Firestore (${ei}): ${t}`,...n)}}function Yr(t,...e){if(Qr.logLevel<=se.WARN){const n=e.map(Kd);Qr.warn(`Firestore (${ei}): ${t}`,...n)}}function Kd(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,a0(t,r,n)}function a0(t,e,n){let r=`FIRESTORE (${ei}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw kn(r),new Error(r)}function ue(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||a0(e,s,r)}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class g1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Je.UNAUTHENTICATED))}shutdown(){}}class y1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class _1{constructor(e){this.t=e,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ue(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new En;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new En,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new En)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string",31837,{l:r}),new l0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string",2055,{h:e}),new Je(e)}}class v1{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class w1{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new v1(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class og{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class E1{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ut(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ue(this.o===void 0,3512);const r=i=>{i.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new og(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ue(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new og(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=T1(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function te(t,e){return t<e?-1:t>e?1:0}function xh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Ec(s)===Ec(i)?te(s,i):Ec(s)?1:-1}return te(t.length,e.length)}const I1=55296,S1=57343;function Ec(t){const e=t.charCodeAt(0);return e>=I1&&e<=S1}function Hs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag="__name__";class Jt{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&G(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Jt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Jt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Jt.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return te(e.length,n.length)}static compareSegments(e,n){const r=Jt.isNumericId(e),s=Jt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Jt.extractNumericId(e).compare(Jt.extractNumericId(n)):xh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ur.fromString(e.substring(4,e.length-2))}}class de extends Jt{construct(e,n,r){return new de(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new de(n)}static emptyPath(){return new de([])}}const A1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends Jt{construct(e,n,r){return new $e(e,n,r)}static isValidIdentifier(e){return A1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ag}static keyField(){return new $e([ag])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new $(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new $(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new $(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(n)}static emptyPath(){return new $e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(de.fromString(e))}static fromName(e){return new W(de.fromString(e).popFirst(5))}static empty(){return new W(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&de.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return de.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new de(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(t,e,n){if(!n)throw new $(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function R1(t,e,n,r){if(e===!0&&r===!0)throw new $(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function lg(t){if(!W.isDocumentKey(t))throw new $(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ug(t){if(W.isDocumentKey(t))throw new $(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function c0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function nu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G(12329,{type:typeof t})}function nn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=nu(t);throw new $(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(t,e){const n={typeString:t};return e&&(n.value=e),n}function bo(t,e){if(!c0(t))throw new $(b.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new $(b.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=-62135596800,hg=1e6;class ge{static now(){return ge.fromMillis(Date.now())}static fromDate(e){return ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*hg);return new ge(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<cg)throw new $(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/hg}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ge._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(bo(e,ge._jsonSchema))return new ge(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-cg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ge._jsonSchemaVersion="firestore/timestamp/1.0",ge._jsonSchema={type:De("string",ge._jsonSchemaVersion),seconds:De("number"),nanoseconds:De("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new ge(0,0))}static max(){return new Y(new ge(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=-1;function C1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(r===1e9?new ge(n+1,0):new ge(n,r));return new fr(s,W.empty(),e)}function k1(t){return new fr(t.readTime,t.key,_o)}class fr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new fr(Y.min(),W.empty(),_o)}static max(){return new fr(Y.max(),W.empty(),_o)}}function P1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class N1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ti(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==x1)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(s=>s?O.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new O((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new O((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function D1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ni(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ru.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd=-1;function su(t){return t==null}function El(t){return t===0&&1/t==-1/0}function V1(t){return typeof t=="number"&&Number.isInteger(t)&&!El(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0="";function b1(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=dg(e)),e=O1(t.get(n),e);return dg(e)}function O1(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case h0:n+="";break;default:n+=i}}return n}function dg(t){return t+h0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function es(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function d0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wa(this.root,e,this.comparator,!1)}getReverseIterator(){return new wa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wa(this.root,e,this.comparator,!0)}}class wa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Be.RED,this.left=s??Be.EMPTY,this.right=i??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Be(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Be.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw G(27949);return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new pg(this.data.getIterator())}getIteratorFrom(e){return new pg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Le)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Le(this.comparator);return n.data=e,n}}class pg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new jt([])}unionWith(e){let n=new Le($e.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new f0("Invalid base64 string: "+i):i}}(e);return new We(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new We(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const L1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pr(t){if(ue(!!t,39018),typeof t=="string"){let e=0;const n=L1.exec(t);if(ue(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Re(t.seconds),nanos:Re(t.nanos)}}function Re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function mr(t){return typeof t=="string"?We.fromBase64String(t):We.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0="server_timestamp",m0="__type__",g0="__previous_value__",y0="__local_write_time__";function Yd(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[m0])==null?void 0:r.stringValue)===p0}function iu(t){const e=t.mapValue.fields[g0];return Yd(e)?iu(e):e}function vo(t){const e=pr(t.mapValue.fields[y0].timestampValue);return new ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(e,n,r,s,i,o,l,u,h,f,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=p}}const Tl="(default)";class wo{constructor(e,n){this.projectId=e,this.database=n||Tl}static empty(){return new wo("","")}get isDefaultDatabase(){return this.database===Tl}isEqual(e){return e instanceof wo&&e.projectId===this.projectId&&e.database===this.database}}function F1(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new $(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wo(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0="__type__",U1="__max__",Ea={mapValue:{}},v0="__vector__",Il="value";function gr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Yd(t)?4:z1(t)?9007199254740991:j1(t)?10:11:G(28295,{value:t})}function ln(t,e){if(t===e)return!0;const n=gr(t);if(n!==gr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vo(t).isEqual(vo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=pr(s.timestampValue),l=pr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return mr(s.bytesValue).isEqual(mr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Re(s.geoPointValue.latitude)===Re(i.geoPointValue.latitude)&&Re(s.geoPointValue.longitude)===Re(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Re(s.integerValue)===Re(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Re(s.doubleValue),l=Re(i.doubleValue);return o===l?El(o)===El(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Hs(t.arrayValue.values||[],e.arrayValue.values||[],ln);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(fg(o)!==fg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!ln(o[u],l[u])))return!1;return!0}(t,e);default:return G(52216,{left:t})}}function Eo(t,e){return(t.values||[]).find(n=>ln(n,e))!==void 0}function qs(t,e){if(t===e)return 0;const n=gr(t),r=gr(e);if(n!==r)return te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return te(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Re(i.integerValue||i.doubleValue),u=Re(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return mg(t.timestampValue,e.timestampValue);case 4:return mg(vo(t),vo(e));case 5:return xh(t.stringValue,e.stringValue);case 6:return function(i,o){const l=mr(i),u=mr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=te(l[h],u[h]);if(f!==0)return f}return te(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=te(Re(i.latitude),Re(o.latitude));return l!==0?l:te(Re(i.longitude),Re(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return gg(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,R,P,N;const l=i.fields||{},u=o.fields||{},h=(g=l[Il])==null?void 0:g.arrayValue,f=(R=u[Il])==null?void 0:R.arrayValue,p=te(((P=h==null?void 0:h.values)==null?void 0:P.length)||0,((N=f==null?void 0:f.values)==null?void 0:N.length)||0);return p!==0?p:gg(h,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ea.mapValue&&o===Ea.mapValue)return 0;if(i===Ea.mapValue)return 1;if(o===Ea.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=xh(u[p],f[p]);if(g!==0)return g;const R=qs(l[u[p]],h[f[p]]);if(R!==0)return R}return te(u.length,f.length)}(t.mapValue,e.mapValue);default:throw G(23264,{he:n})}}function mg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return te(t,e);const n=pr(t),r=pr(e),s=te(n.seconds,r.seconds);return s!==0?s:te(n.nanos,r.nanos)}function gg(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=qs(n[s],r[s]);if(i)return i}return te(n.length,r.length)}function Ws(t){return Nh(t)}function Nh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=pr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return mr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Nh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Nh(n.fields[o])}`;return s+"}"}(t.mapValue):G(61005,{value:t})}function Ua(t){switch(gr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=iu(t);return e?16+Ua(e):16;case 5:return 2*t.stringValue.length;case 6:return mr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ua(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return es(r.fields,(i,o)=>{s+=i.length+Ua(o)}),s}(t.mapValue);default:throw G(13486,{value:t})}}function yg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Dh(t){return!!t&&"integerValue"in t}function Xd(t){return!!t&&"arrayValue"in t}function _g(t){return!!t&&"nullValue"in t}function vg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ja(t){return!!t&&"mapValue"in t}function j1(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[_0])==null?void 0:r.stringValue)===v0}function Ki(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return es(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ki(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ki(t.arrayValue.values[n]);return e}return{...t}}function z1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===U1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ja(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ki(n)}setAll(e){let n=$e.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Ki(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ja(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ln(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ja(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){es(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new kt(Ki(this.value))}}function w0(t){const e=[];return es(t.fields,(n,r)=>{const s=new $e([n]);if(ja(r)){const i=w0(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new jt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new et(e,0,Y.min(),Y.min(),Y.min(),kt.empty(),0)}static newFoundDocument(e,n,r,s){return new et(e,1,n,Y.min(),r,s,0)}static newNoDocument(e,n){return new et(e,2,n,Y.min(),Y.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new et(e,3,n,Y.min(),Y.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n){this.position=e,this.inclusive=n}}function wg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=qs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Eg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ln(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,n="asc"){this.field=e,this.dir=n}}function B1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{}class Ne extends E0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new H1(e,n,r):n==="array-contains"?new K1(e,r):n==="in"?new G1(e,r):n==="not-in"?new Q1(e,r):n==="array-contains-any"?new Y1(e,r):new Ne(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new q1(e,r):new W1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(qs(n,this.value)):n!==null&&gr(this.value)===gr(n)&&this.matchesComparison(qs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kt extends E0{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Kt(e,n)}matches(e){return T0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function T0(t){return t.op==="and"}function I0(t){return $1(t)&&T0(t)}function $1(t){for(const e of t.filters)if(e instanceof Kt)return!1;return!0}function Vh(t){if(t instanceof Ne)return t.field.canonicalString()+t.op.toString()+Ws(t.value);if(I0(t))return t.filters.map(e=>Vh(e)).join(",");{const e=t.filters.map(n=>Vh(n)).join(",");return`${t.op}(${e})`}}function S0(t,e){return t instanceof Ne?function(r,s){return s instanceof Ne&&r.op===s.op&&r.field.isEqual(s.field)&&ln(r.value,s.value)}(t,e):t instanceof Kt?function(r,s){return s instanceof Kt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&S0(o,s.filters[l]),!0):!1}(t,e):void G(19439)}function A0(t){return t instanceof Ne?function(n){return`${n.field.canonicalString()} ${n.op} ${Ws(n.value)}`}(t):t instanceof Kt?function(n){return n.op.toString()+" {"+n.getFilters().map(A0).join(" ,")+"}"}(t):"Filter"}class H1 extends Ne{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class q1 extends Ne{constructor(e,n){super(e,"in",n),this.keys=R0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class W1 extends Ne{constructor(e,n){super(e,"not-in",n),this.keys=R0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function R0(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class K1 extends Ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Xd(n)&&Eo(n.arrayValue,this.value)}}class G1 extends Ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Eo(this.value.arrayValue,n)}}class Q1 extends Ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(Eo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Eo(this.value.arrayValue,n)}}class Y1 extends Ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Xd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Eo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Tg(t,e=null,n=[],r=[],s=null,i=null,o=null){return new X1(t,e,n,r,s,i,o)}function Jd(t){const e=X(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Vh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),su(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ws(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ws(r)).join(",")),e.Te=n}return e.Te}function Zd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!B1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!S0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Eg(t.startAt,e.startAt)&&Eg(t.endAt,e.endAt)}function bh(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function J1(t,e,n,r,s,i,o,l){return new Oo(t,e,n,r,s,i,o,l)}function ou(t){return new Oo(t)}function Ig(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Z1(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function C0(t){return t.collectionGroup!==null}function Gi(t){const e=X(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Le($e.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Al(i,r))}),n.has($e.keyField().canonicalString())||e.Ie.push(new Al($e.keyField(),r))}return e.Ie}function rn(t){const e=X(t);return e.Ee||(e.Ee=eR(e,Gi(t))),e.Ee}function eR(t,e){if(t.limitType==="F")return Tg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Al(s.field,i)});const n=t.endAt?new Sl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Sl(t.startAt.position,t.startAt.inclusive):null;return Tg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Oh(t,e){const n=t.filters.concat([e]);return new Oo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Lh(t,e,n){return new Oo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function au(t,e){return Zd(rn(t),rn(e))&&t.limitType===e.limitType}function k0(t){return`${Jd(rn(t))}|lt:${t.limitType}`}function cs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>A0(s)).join(", ")}]`),su(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ws(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ws(s)).join(",")),`Target(${r})`}(rn(t))}; limitType=${t.limitType})`}function lu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):W.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Gi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const h=wg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Gi(r),s)||r.endAt&&!function(o,l,u){const h=wg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Gi(r),s))}(t,e)}function tR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function P0(t){return(e,n)=>{let r=!1;for(const s of Gi(t)){const i=nR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function nR(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?qs(u,h):G(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){es(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return d0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR=new we(W.comparator);function Pn(){return rR}const x0=new we(W.comparator);function Oi(...t){let e=x0;for(const n of t)e=e.insert(n.key,n);return e}function N0(t){let e=x0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function br(){return Qi()}function D0(){return Qi()}function Qi(){return new ts(t=>t.toString(),(t,e)=>t.isEqual(e))}const sR=new we(W.comparator),iR=new Le(W.comparator);function ne(...t){let e=iR;for(const n of t)e=e.add(n);return e}const oR=new Le(te);function aR(){return oR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:El(e)?"-0":e}}function V0(t){return{integerValue:""+t}}function lR(t,e){return V1(e)?V0(e):ef(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(){this._=void 0}}function uR(t,e,n){return t instanceof To?function(s,i){const o={fields:{[m0]:{stringValue:p0},[y0]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Yd(i)&&(i=iu(i)),i&&(o.fields[g0]=i),{mapValue:o}}(n,e):t instanceof Io?O0(t,e):t instanceof So?L0(t,e):function(s,i){const o=b0(s,i),l=Sg(o)+Sg(s.Ae);return Dh(o)&&Dh(s.Ae)?V0(l):ef(s.serializer,l)}(t,e)}function cR(t,e,n){return t instanceof Io?O0(t,e):t instanceof So?L0(t,e):n}function b0(t,e){return t instanceof Rl?function(r){return Dh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class To extends uu{}class Io extends uu{constructor(e){super(),this.elements=e}}function O0(t,e){const n=M0(e);for(const r of t.elements)n.some(s=>ln(s,r))||n.push(r);return{arrayValue:{values:n}}}class So extends uu{constructor(e){super(),this.elements=e}}function L0(t,e){let n=M0(e);for(const r of t.elements)n=n.filter(s=>!ln(s,r));return{arrayValue:{values:n}}}class Rl extends uu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Sg(t){return Re(t.integerValue||t.doubleValue)}function M0(t){return Xd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e,n){this.field=e,this.transform=n}}function dR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Io&&s instanceof Io||r instanceof So&&s instanceof So?Hs(r.elements,s.elements,ln):r instanceof Rl&&s instanceof Rl?ln(r.Ae,s.Ae):r instanceof To&&s instanceof To}(t.transform,e.transform)}class fR{constructor(e,n){this.version=e,this.transformResults=n}}class Tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Tn}static exists(e){return new Tn(void 0,e)}static updateTime(e){return new Tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function za(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class cu{}function F0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new j0(t.key,Tn.none()):new Lo(t.key,t.data,Tn.none());{const n=t.data,r=kt.empty();let s=new Le($e.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ns(t.key,r,new jt(s.toArray()),Tn.none())}}function pR(t,e,n){t instanceof Lo?function(s,i,o){const l=s.value.clone(),u=Rg(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ns?function(s,i,o){if(!za(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Rg(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(U0(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Yi(t,e,n,r){return t instanceof Lo?function(i,o,l,u){if(!za(i.precondition,o))return l;const h=i.value.clone(),f=Cg(i.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof ns?function(i,o,l,u){if(!za(i.precondition,o))return l;const h=Cg(i.fieldTransforms,u,o),f=o.data;return f.setAll(U0(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return za(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function mR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=b0(r.transform,s||null);i!=null&&(n===null&&(n=kt.empty()),n.set(r.field,i))}return n||null}function Ag(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Hs(r,s,(i,o)=>dR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Lo extends cu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ns extends cu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function U0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Rg(t,e,n){const r=new Map;ue(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,cR(o,l,n[s]))}return r}function Cg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,uR(i,o,e))}return r}class j0 extends cu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gR extends cu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&pR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Yi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Yi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=D0();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=F0(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Hs(this.mutations,e.mutations,(n,r)=>Ag(n,r))&&Hs(this.baseMutations,e.baseMutations,(n,r)=>Ag(n,r))}}class tf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ue(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return sR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new tf(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe,ae;function wR(t){switch(t){case b.OK:return G(64938);case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return G(15467,{code:t})}}function z0(t){if(t===void 0)return kn("GRPC error has no .code"),b.UNKNOWN;switch(t){case Pe.OK:return b.OK;case Pe.CANCELLED:return b.CANCELLED;case Pe.UNKNOWN:return b.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return b.INTERNAL;case Pe.UNAVAILABLE:return b.UNAVAILABLE;case Pe.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Pe.NOT_FOUND:return b.NOT_FOUND;case Pe.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Pe.ABORTED:return b.ABORTED;case Pe.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Pe.DATA_LOSS:return b.DATA_LOSS;default:return G(39323,{code:t})}}(ae=Pe||(Pe={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ER(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR=new ur([4294967295,4294967295],0);function kg(t){const e=ER().encode(t),n=new t0;return n.update(e),new Uint8Array(n.digest())}function Pg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ur([n,r],0),new ur([s,i],0)]}class nf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Li(`Invalid padding: ${n}`);if(r<0)throw new Li(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Li(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Li(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ur.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(ur.fromNumber(r)));return s.compare(TR)===1&&(s=new ur([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=kg(e),[r,s]=Pg(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new nf(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=kg(e),[r,s]=Pg(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Li extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Fo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Mo(Y.min(),s,new we(te),Pn(),ne())}}class Fo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Fo(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class B0{constructor(e,n){this.targetId=e,this.Ce=n}}class $0{constructor(e,n,r=We.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class xg{constructor(){this.ve=0,this.Fe=Ng(),this.Me=We.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ne(),n=ne(),r=ne();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:G(38017,{changeType:i})}}),new Fo(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=Ng()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ue(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class IR{constructor(e){this.Ge=e,this.ze=new Map,this.je=Pn(),this.Je=Ta(),this.He=Ta(),this.Ze=new we(te)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:G(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(bh(i))if(r===0){const o=new W(i.path);this.et(n,o,et.newNoDocument(o,Y.min()))}else ue(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=mr(r).toUint8Array()}catch(u){if(u instanceof f0)return Yr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new nf(o,s,i)}catch(u){return Yr(u instanceof Li?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&bh(l.target)){const u=new W(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,et.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=ne();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Mo(e,n,this.Ze,this.je,r);return this.je=Pn(),this.Je=Ta(),this.He=Ta(),this.Ze=new we(te),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new xg,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new Le(te),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Le(te),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new xg),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ta(){return new we(W.comparator)}function Ng(){return new we(W.comparator)}const SR={asc:"ASCENDING",desc:"DESCENDING"},AR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},RR={and:"AND",or:"OR"};class CR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Mh(t,e){return t.useProto3Json||su(e)?e:{value:e}}function Cl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function H0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function kR(t,e){return Cl(t,e.toTimestamp())}function sn(t){return ue(!!t,49232),Y.fromTimestamp(function(n){const r=pr(n);return new ge(r.seconds,r.nanos)}(t))}function rf(t,e){return Fh(t,e).canonicalString()}function Fh(t,e){const n=function(s){return new de(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function q0(t){const e=de.fromString(t);return ue(Y0(e),10190,{key:e.toString()}),e}function Uh(t,e){return rf(t.databaseId,e.path)}function Tc(t,e){const n=q0(e);if(n.get(1)!==t.databaseId.projectId)throw new $(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(K0(n))}function W0(t,e){return rf(t.databaseId,e)}function PR(t){const e=q0(t);return e.length===4?de.emptyPath():K0(e)}function jh(t){return new de(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function K0(t){return ue(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Dg(t,e,n){return{name:Uh(t,e),fields:n.value.mapValue.fields}}function xR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:G(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(ue(f===void 0||typeof f=="string",58123),We.fromBase64String(f||"")):(ue(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),We.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?b.UNKNOWN:z0(h.code);return new $(f,h.message||"")}(o);n=new $0(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Tc(t,r.document.name),i=sn(r.document.updateTime),o=r.document.createTime?sn(r.document.createTime):Y.min(),l=new kt({mapValue:{fields:r.document.fields}}),u=et.newFoundDocument(s,i,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Ba(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Tc(t,r.document),i=r.readTime?sn(r.readTime):Y.min(),o=et.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ba([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Tc(t,r.document),i=r.removedTargetIds||[];n=new Ba([],i,s,null)}else{if(!("filter"in e))return G(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new vR(s,i),l=r.targetId;n=new B0(l,o)}}return n}function NR(t,e){let n;if(e instanceof Lo)n={update:Dg(t,e.key,e.value)};else if(e instanceof j0)n={delete:Uh(t,e.key)};else if(e instanceof ns)n={update:Dg(t,e.key,e.data),updateMask:jR(e.fieldMask)};else{if(!(e instanceof gR))return G(16599,{dt:e.type});n={verify:Uh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof To)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Io)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof So)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Rl)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw G(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:kR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G(27497)}(t,e.precondition)),n}function DR(t,e){return t&&t.length>0?(ue(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?sn(s.updateTime):sn(i);return o.isEqual(Y.min())&&(o=sn(i)),new fR(o,s.transformResults||[])}(n,e))):[]}function VR(t,e){return{documents:[W0(t,e.path)]}}function bR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=W0(t,s);const i=function(h){if(h.length!==0)return Q0(Kt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:hs(g.field),direction:MR(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Mh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:s}}function OR(t){let e=PR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ue(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=G0(p);return g instanceof Kt&&I0(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(P){return new Al(ds(P.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,su(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,R=p.values||[];return new Sl(R,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,R=p.values||[];return new Sl(R,g)}(n.endAt)),J1(e,s,o,i,l,"F",u,h)}function LR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function G0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ds(n.unaryFilter.field);return Ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ds(n.unaryFilter.field);return Ne.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ds(n.unaryFilter.field);return Ne.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ds(n.unaryFilter.field);return Ne.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ne.create(ds(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Kt.create(n.compositeFilter.filters.map(r=>G0(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G(1026)}}(n.compositeFilter.op))}(t):G(30097,{filter:t})}function MR(t){return SR[t]}function FR(t){return AR[t]}function UR(t){return RR[t]}function hs(t){return{fieldPath:t.canonicalString()}}function ds(t){return $e.fromServerFormat(t.fieldPath)}function Q0(t){return t instanceof Ne?function(n){if(n.op==="=="){if(vg(n.value))return{unaryFilter:{field:hs(n.field),op:"IS_NAN"}};if(_g(n.value))return{unaryFilter:{field:hs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(vg(n.value))return{unaryFilter:{field:hs(n.field),op:"IS_NOT_NAN"}};if(_g(n.value))return{unaryFilter:{field:hs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hs(n.field),op:FR(n.op),value:n.value}}}(t):t instanceof Kt?function(n){const r=n.getFilters().map(s=>Q0(s));return r.length===1?r[0]:{compositeFilter:{op:UR(n.op),filters:r}}}(t):G(54877,{filter:t})}function jR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Y0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function X0(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,n,r,s,i=Y.min(),o=Y.min(),l=We.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new yn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e){this.yt=e}}function BR(t){const e=OR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Lh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(){this.bn=new HR}addToCollectionParentIndex(e,n){return this.bn.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(fr.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(fr.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class HR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Le(de.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Le(de.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},J0=41943040;class dt{static withCacheSize(e){return new dt(e,dt.DEFAULT_COLLECTION_PERCENTILE,dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dt.DEFAULT_COLLECTION_PERCENTILE=10,dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,dt.DEFAULT=new dt(J0,dt.DEFAULT_COLLECTION_PERCENTILE,dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),dt.DISABLED=new dt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new yr(0)}static ar(){return new yr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg="LruGarbageCollector",qR=1048576;function Og([t,e],[n,r]){const s=te(t,n);return s===0?te(e,r):s}class WR{constructor(e){this.Pr=e,this.buffer=new Le(Og),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Og(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class KR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){B(bg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ni(n)?B(bg,"Ignoring IndexedDB error during garbage collection: ",n):await ti(n)}await this.Ar(3e5)})}}class GR{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(ru.ce);const r=new WR(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(Vg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Vg):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),us()<=se.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function QR(t,e){return new GR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(){this.changes=new ts(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Yi(r.mutation,s,jt.empty(),ge.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const s=br();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Oi();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=br();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Pn();const o=Qi(),l=function(){return Qi()}();return n.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof ns)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Yi(f.mutation,h,f.mutation.getFieldMask(),ge.now())):o.set(h.key,jt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>l.set(h,new XR(f,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Qi();let s=new we((o,l)=>o-l),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||jt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(s.get(l.batchId)||ne()).add(u);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=D0();f.forEach(g=>{if(!i.has(g)){const R=F0(n.get(g),r.get(g));R!==null&&p.set(g,R),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return Z1(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):C0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):O.resolve(br());let l=_o,u=i;return o.next(h=>O.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,ne())).next(f=>({batchId:l,changes:N0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let s=Oi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Oi();return this.indexManager.getCollectionParents(e,i).next(l=>O.forEach(l,u=>{const h=function(p,g){return new Oo(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,et.newInvalidDocument(f)))});let l=Oi();return o.forEach((u,h)=>{const f=i.get(u);f!==void 0&&Yi(f.mutation,h,jt.empty(),ge.now()),lu(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return O.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:sn(s.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:BR(s.bundledQuery),readTime:sn(s.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(){this.overlays=new we(W.comparator),this.Lr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=br();return O.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const s=br(),i=n.length+1,o=new W(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return O.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new we((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=br(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=br(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return O.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new _R(n,r));let i=this.Lr.get(n);i===void 0&&(i=ne(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(){this.sessionToken=We.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(){this.kr=new Le(Fe.Kr),this.qr=new Le(Fe.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Fe(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Fe(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new W(new de([])),r=new Fe(n,e),s=new Fe(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new W(new de([])),r=new Fe(n,e),s=new Fe(n,e+1);let i=ne();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Fe(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,n){this.key=e,this.Jr=n}static Kr(e,n){return W.comparator(e.key,n.key)||te(e.Jr,n.Jr)}static Ur(e,n){return te(e.Jr,n.Jr)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Le(Fe.Kr)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new yR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Hr=this.Hr.add(new Fe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?Qd:this.Yn-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Fe(n,0),s=new Fe(n,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],o=>{const l=this.Zr(o.Jr);i.push(l)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Le(te);return n.forEach(s=>{const i=new Fe(s,0),o=new Fe(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],l=>{r=r.add(l.Jr)})}),O.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;W.isDocumentKey(i)||(i=i.child(""));const o=new Fe(new W(i),0);let l=new Le(te);return this.Hr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.Jr)),!0)},o),O.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ue(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return O.forEach(n.mutations,s=>{const i=new Fe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new Fe(n,0),s=this.Hr.firstAfterOrEqual(r);return O.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e){this.ti=e,this.docs=function(){return new we(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():et.newInvalidDocument(n))}getEntries(e,n){let r=Pn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():et.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Pn();const o=n.path,l=new W(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||P1(k1(f),r)<=0||(s.has(f.key)||lu(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(e,n,r,s){G(9500)}ni(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new sC(this)}getSize(e){return O.resolve(this.size)}}class sC extends YR{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e){this.persistence=e,this.ri=new ts(n=>Jd(n),Zd),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.ii=0,this.si=new sf,this.targetCount=0,this.oi=yr._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),O.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new yr(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.lr(n),O.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e,n){this._i={},this.overlays={},this.ai=new ru(0),this.ui=!1,this.ui=!0,this.ci=new tC,this.referenceDelegate=e(this),this.li=new iC(this),this.indexManager=new $R,this.remoteDocumentCache=function(s){return new rC(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new zR(n),this.Pi=new ZR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new eC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new nC(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const s=new oC(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return O.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class oC extends N1{constructor(e){super(),this.currentSequenceNumber=e}}class of{constructor(e){this.persistence=e,this.Ri=new sf,this.Ai=null}static Vi(e){return new of(e)}get di(){if(this.Ai)return this.Ai;throw G(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.di,r=>{const s=W.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,Y.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return O.or([()=>O.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class kl{constructor(e,n){this.persistence=e,this.fi=new ts(r=>b1(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=QR(this,n)}static Vi(e,n){return new kl(e,n)}Ti(){}Ii(e){return O.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return O.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?O.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,Y.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),O.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),O.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ua(e.data.value)),n}wr(e,n,r){return O.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return O.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=ne(),s=ne();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new af(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return XS()?8:D1(nt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new aC;return this.ys(e,n,o).next(l=>{if(i.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(us()<=se.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),O.resolve()):(us()<=se.DEBUG&&B("QueryEngine","Query:",cs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(us()<=se.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rn(n))):O.resolve())}gs(e,n){if(Ig(n))return O.resolve(null);let r=rn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Lh(n,null,"F"),r=rn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ne(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ss(n,l);return this.bs(n,h,o,u.readTime)?this.gs(e,Lh(n,null,"F")):this.Ds(e,h,n,u)}))})))}ps(e,n,r,s){return Ig(n)||s.isEqual(Y.min())?O.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.Ss(n,i);return this.bs(n,o,r,s)?O.resolve(null):(us()<=se.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),cs(n)),this.Ds(e,o,n,C1(s,_o)).next(l=>l))})}Ss(e,n){let r=new Le(P0(e));return n.forEach((s,i)=>{lu(e,i)&&(r=r.add(i))}),r}bs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return us()<=se.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",cs(n)),this.fs.getDocumentsMatchingQuery(e,n,fr.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf="LocalStore",uC=3e8;class cC{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new we(te),this.Fs=new ts(i=>Jd(i),Zd),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new JR(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function hC(t,e,n,r){return new cC(t,e,n,r)}async function ew(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=ne();for(const h of s){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:l}))})})}function dC(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,g=p.keys();let R=O.resolve();return g.forEach(P=>{R=R.next(()=>f.getEntry(u,P)).next(N=>{const L=h.docVersions.get(P);ue(L!==null,48541),N.version.compareTo(L)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function tw(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function fC(t,e){const n=X(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;l.push(n.li.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.li.addMatchingKeys(i,f.addedDocuments,p)));let R=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?R=R.withResumeToken(We.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,r)),s=s.insert(p,R),function(N,L,T){return N.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=uC?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(g,R,f)&&l.push(n.li.updateTargetData(i,R))});let u=Pn(),h=ne();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(pC(i,o,e.documentUpdates).next(f=>{u=f.Bs,h=f.Ls})),!r.isEqual(Y.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next(p=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return O.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.vs=s,i))}function pC(t,e,n){let r=ne(),s=ne();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Pn();return n.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):B(lf,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Bs:o,Ls:s}})}function mC(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Qd),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function gC(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new yn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function zh(t,e,n){const r=X(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ni(o))throw o;B(lf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Lg(t,e,n){const r=X(t);let s=Y.min(),i=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=X(u),g=p.Fs.get(f);return g!==void 0?O.resolve(p.vs.get(g)):p.li.getTargetData(h,f)}(r,o,rn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:Y.min(),n?i:ne())).next(l=>(yC(r,tR(e),l),{documents:l,ks:i})))}function yC(t,e,n){let r=t.Ms.get(e)||Y.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class Mg{constructor(){this.activeTargetIds=aR()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _C{constructor(){this.vo=new Mg,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Mg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg="ConnectivityMonitor";class Ug{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){B(Fg,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){B(Fg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ia=null;function Bh(){return Ia===null?Ia=function(){return 268435456+Math.round(2147483648*Math.random())}():Ia++,"0x"+Ia.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="RestConnection",wC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class EC{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Tl?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Bh(),l=this.Qo(e,n.toUriEncodedString());B(Ic,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:h}=new URL(l),f=Vo(h);return this.zo(e,l,u,r,f).then(p=>(B(Ic,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Yr(Ic,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ei}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=wC[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="WebChannelConnection",Pi=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Ns extends EC{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Ns.c_){const e=i0();Pi(e,s0.STAT_EVENT,n=>{n.stat===Ph.PROXY?B(Xe,"STAT_EVENT: detected buffering proxy"):n.stat===Ph.NOPROXY&&B(Xe,"STAT_EVENT: detected no buffering proxy")}),Ns.c_=!0}}zo(e,n,r,s,i){const o=Bh();return new Promise((l,u)=>{const h=new n0;h.setWithCredentials(!0),h.listenOnce(r0.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Fa.NO_ERROR:const p=h.getResponseJson();B(Xe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Fa.TIMEOUT:B(Xe,`RPC '${e}' ${o} timed out`),u(new $(b.DEADLINE_EXCEEDED,"Request time out"));break;case Fa.HTTP_ERROR:const g=h.getStatus();if(B(Xe,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const P=R==null?void 0:R.error;if(P&&P.status&&P.message){const N=function(T){const v=T.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(v)>=0?v:b.UNKNOWN}(P.status);u(new $(N,P.message))}else u(new $(b.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new $(b.UNAVAILABLE,"Connection failed."));break;default:G(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{B(Xe,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);B(Xe,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Bh(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");B(Xe,`Creating RPC '${e}' stream ${s}: ${h}`,l);const f=o.createWebChannel(h,l);this.I_(f);let p=!1,g=!1;const R=new TC({Jo:P=>{g?B(Xe,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(p||(B(Xe,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),B(Xe,`RPC '${e}' stream ${s} sending:`,P),f.send(P))},Ho:()=>f.close()});return Pi(f,bi.EventType.OPEN,()=>{g||(B(Xe,`RPC '${e}' stream ${s} transport opened.`),R.i_())}),Pi(f,bi.EventType.CLOSE,()=>{g||(g=!0,B(Xe,`RPC '${e}' stream ${s} transport closed`),R.o_(),this.E_(f))}),Pi(f,bi.EventType.ERROR,P=>{g||(g=!0,Yr(Xe,`RPC '${e}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),R.o_(new $(b.UNAVAILABLE,"The operation could not be completed")))}),Pi(f,bi.EventType.MESSAGE,P=>{var N;if(!g){const L=P.data[0];ue(!!L,16349);const T=L,v=(T==null?void 0:T.error)||((N=T[0])==null?void 0:N.error);if(v){B(Xe,`RPC '${e}' stream ${s} received error:`,v);const S=v.status;let V=function(_){const y=Pe[_];if(y!==void 0)return z0(y)}(S),M=v.message;S==="NOT_FOUND"&&M.includes("database")&&M.includes("does not exist")&&M.includes(this.databaseId.database)&&Yr(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),V===void 0&&(V=b.INTERNAL,M="Unknown error status: "+S+" with message "+v.message),g=!0,R.o_(new $(V,M)),f.close()}else B(Xe,`RPC '${e}' stream ${s} received:`,L),R.__(L)}}),Ns.u_(),setTimeout(()=>{R.s_()},0),R}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return o0()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(t){return new Ns(t)}function Sc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(t){return new CR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ns.c_=!1;class nw{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&B("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg="PersistentStream";class rw{constructor(e,n,r,s,i,o,l,u){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new nw(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(kn(n.toString()),kn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new $(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return B(jg,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(B(jg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class SC extends rw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=xR(this.serializer,e),r=function(i){if(!("targetChange"in i))return Y.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?sn(o.readTime):Y.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=jh(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=bh(u)?{documents:VR(i,u)}:{query:bR(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=H0(i,o.resumeToken);const h=Mh(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=Cl(i,o.snapshotVersion.toTimestamp());const h=Mh(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=LR(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=jh(this.serializer),n.removeTarget=e,this.K_(n)}}class AC extends rw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=DR(e.writeResults,e.commitTime),r=sn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=jh(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>NR(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{}class CC extends RC{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new $(b.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Fh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(b.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Fh(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(b.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function kC(t,e,n,r){return new CC(t,e,n,r)}class PC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(kn(n),this.aa=!1):B("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un="RemoteStore";class xC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new yr(1e3),this.Va=new yr(1001),this.da=new Set,this.ma=[],this.fa=i,this.fa.Mo(o=>{r.enqueueAndForget(async()=>{rs(this)&&(B(un,"Restarting streams for network reachability change."),await async function(u){const h=X(u);h.da.add(4),await Uo(h),h.ga.set("Unknown"),h.da.delete(4),await du(h)}(this))})}),this.ga=new PC(r,s)}}async function du(t){if(rs(t))for(const e of t.ma)await e(!0)}async function Uo(t){for(const e of t.ma)await e(!1)}function $h(t,e){return t.Ea.get(e)||void 0}function sw(t,e){const n=X(t),r=$h(n,e.targetId);if(r!==void 0&&n.Ia.has(r))return;const s=function(l,u){const h=$h(l,u);h!==void 0&&l.Ra.delete(h);const f=function(g,R){return R%2!=0?g.Va.next():g.Aa.next()}(l,u);return l.Ea.set(u,f),l.Ra.set(f,u),f}(n,e.targetId);B(un,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new yn(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ia.set(s,i),df(n)?hf(n):ri(n).O_()&&cf(n,i)}function uf(t,e){const n=X(t),r=ri(n),s=$h(n,e);B(un,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),n.Ia.delete(s),n.Ea.delete(e),n.Ra.delete(s),r.O_()&&iw(n,s),n.Ia.size===0&&(r.O_()?r.L_():rs(n)&&n.ga.set("Unknown"))}function cf(t,e){if(t.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.Ra.get(e.targetId);if(n===void 0)return void B(un,"SDK target ID not found for remote ID: "+e.targetId);const r=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(r)}ri(t).Z_(e)}function iw(t,e){t.pa.$e(e),ri(t).X_(e)}function hf(t){t.pa=new IR({getRemoteKeysForTarget:e=>{const n=t.Ra.get(e);return n!==void 0?t.remoteSyncer.getRemoteKeysForTarget(n):ne()},At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ri(t).start(),t.ga.ua()}function df(t){return rs(t)&&!ri(t).x_()&&t.Ia.size>0}function rs(t){return X(t).da.size===0}function ow(t){t.pa=void 0}async function NC(t){t.ga.set("Online")}async function DC(t){t.Ia.forEach((e,n)=>{cf(t,e)})}async function VC(t,e){ow(t),df(t)?(t.ga.ha(e),hf(t)):t.ga.set("Unknown")}async function bC(t,e,n){if(t.ga.set("Online"),e instanceof $0&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds){if(s.Ia.has(l)){const u=s.Ra.get(l);u!==void 0&&(await s.remoteSyncer.rejectListen(u,o),s.Ea.delete(u),s.Ra.delete(l)),s.Ia.delete(l)}s.pa.removeTarget(l)}}(t,e)}catch(r){B(un,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Pl(t,r)}else if(e instanceof Ba?t.pa.Xe(e):e instanceof B0?t.pa.st(e):t.pa.tt(e),!n.isEqual(Y.min()))try{const r=await tw(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.pa.Tt(o);l.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const p=i.Ia.get(f);p&&i.Ia.set(f,p.withResumeToken(h.resumeToken,o))}}),l.targetMismatches.forEach((h,f)=>{const p=i.Ia.get(h);if(!p)return;i.Ia.set(h,p.withResumeToken(We.EMPTY_BYTE_STRING,p.snapshotVersion)),iw(i,h);const g=new yn(p.target,h,f,p.sequenceNumber);cf(i,g)});const u=function(f,p){const g=new Map;p.targetChanges.forEach((P,N)=>{const L=f.Ra.get(N);L!==void 0&&g.set(L,P)});let R=new we(te);return p.targetMismatches.forEach((P,N)=>{const L=f.Ra.get(P);L!==void 0&&(R=R.insert(L,N))}),new Mo(p.snapshotVersion,g,R,p.documentUpdates,p.resolvedLimboDocuments)}(i,l);return i.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){B(un,"Failed to raise snapshot:",r),await Pl(t,r)}}async function Pl(t,e,n){if(!ni(e))throw e;t.da.add(1),await Uo(t),t.ga.set("Offline"),n||(n=()=>tw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B(un,"Retrying IndexedDB access"),await n(),t.da.delete(1),await du(t)})}function aw(t,e){return e().catch(n=>Pl(t,n,e))}async function fu(t){const e=X(t),n=_r(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Qd;for(;OC(e);)try{const s=await mC(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,LC(e,s)}catch(s){await Pl(e,s)}lw(e)&&uw(e)}function OC(t){return rs(t)&&t.Ta.length<10}function LC(t,e){t.Ta.push(e);const n=_r(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function lw(t){return rs(t)&&!_r(t).x_()&&t.Ta.length>0}function uw(t){_r(t).start()}async function MC(t){_r(t).ra()}async function FC(t){const e=_r(t);for(const n of t.Ta)e.ea(n.mutations)}async function UC(t,e,n){const r=t.Ta.shift(),s=tf.from(r,e,n);await aw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await fu(t)}async function jC(t,e){e&&_r(t).Y_&&await async function(r,s){if(function(o){return wR(o)&&o!==b.ABORTED}(s.code)){const i=r.Ta.shift();_r(r).B_(),await aw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await fu(r)}}(t,e),lw(t)&&uw(t)}async function zg(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),B(un,"RemoteStore received new credentials");const r=rs(n);n.da.add(3),await Uo(n),r&&n.ga.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await du(n)}async function zC(t,e){const n=X(t);e?(n.da.delete(2),await du(n)):e||(n.da.add(2),await Uo(n),n.ga.set("Unknown"))}function ri(t){return t.ya||(t.ya=function(n,r,s){const i=X(n);return i.sa(),new SC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:NC.bind(null,t),Yo:DC.bind(null,t),t_:VC.bind(null,t),H_:bC.bind(null,t)}),t.ma.push(async e=>{e?(t.ya.B_(),df(t)?hf(t):t.ga.set("Unknown")):(await t.ya.stop(),ow(t))})),t.ya}function _r(t){return t.wa||(t.wa=function(n,r,s){const i=X(n);return i.sa(),new AC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:MC.bind(null,t),t_:jC.bind(null,t),ta:FC.bind(null,t),na:UC.bind(null,t)}),t.ma.push(async e=>{e?(t.wa.B_(),await fu(t)):(await t.wa.stop(),t.Ta.length>0&&(B(un,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new En,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new ff(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pf(t,e){if(kn("AsyncQueue",`${e}: ${t}`),ni(t))return new $(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{static emptySet(e){return new Ds(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=Oi(),this.sortedSet=new we(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ds)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ds;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(){this.Sa=new we(W.comparator)}track(e){const n=e.doc.key,r=this.Sa.get(n);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(n,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(n):e.type===1&&r.type===2?this.Sa=this.Sa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):G(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(n,e)}Da(){const e=[];return this.Sa.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ks{constructor(e,n,r,s,i,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ks(e,n,Ds.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&au(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class $C{constructor(){this.queries=$g(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(n,r){const s=X(n),i=s.queries;s.queries=$g(),i.forEach((o,l)=>{for(const u of l.va)u.onError(r)})})(this,new $(b.ABORTED,"Firestore shutting down"))}}function $g(){return new ts(t=>k0(t),au)}async function mf(t,e){const n=X(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Fa()&&e.Ma()&&(r=2):(i=new BC,r=e.Ma()?0:1);try{switch(r){case 0:i.Ca=await n.onListen(s,!0);break;case 1:i.Ca=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=pf(o,`Initialization of query '${cs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.va.push(e),e.Oa(n.onlineState),i.Ca&&e.Na(i.Ca)&&yf(n)}async function gf(t,e){const n=X(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.va.indexOf(e);o>=0&&(i.va.splice(o,1),i.va.length===0?s=e.Ma()?0:1:!i.Fa()&&e.Ma()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function HC(t,e){const n=X(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.va)l.Na(s)&&(r=!0);o.Ca=s}}r&&yf(n)}function qC(t,e,n){const r=X(t),s=r.queries.get(e);if(s)for(const i of s.va)i.onError(n);r.queries.delete(e)}function yf(t){t.xa.forEach(e=>{e.next()})}var Hh,Hg;(Hg=Hh||(Hh={})).Ba="default",Hg.Cache="cache";class _f{constructor(e,n,r){this.query=e,this.La=n,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ks(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ka?this.qa(e)&&(this.La.next(e),n=!0):this.Ua(e,this.onlineState)&&(this.$a(e),n=!0),this.Ka=e,n}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let n=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),n=!0),n}Ua(e,n){if(!e.fromCache||!this.Ma())return!0;const r=n!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const n=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}$a(e){e=Ks.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==Hh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e){this.key=e}}class hw{constructor(e){this.key=e}}class WC{constructor(e,n){this.query=e,this.tu=n,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=ne(),this.mutatedKeys=ne(),this.iu=P0(e),this.su=new Ds(this.iu)}get ou(){return this.tu}_u(e,n){const r=n?n.au:new Bg,s=n?n.su:this.su;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),R=lu(this.query,p)?p:null,P=!!g&&this.mutatedKeys.has(g.key),N=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let L=!1;g&&R?g.data.isEqual(R.data)?P!==N&&(r.track({type:3,doc:R}),L=!0):this.uu(g,R)||(r.track({type:2,doc:R}),L=!0,(u&&this.iu(R,u)>0||h&&this.iu(R,h)<0)&&(l=!0)):!g&&R?(r.track({type:0,doc:R}),L=!0):g&&!R&&(r.track({type:1,doc:g}),L=!0,(u||h)&&(l=!0)),L&&(R?(o=o.add(R),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{su:o,au:r,bs:l,mutatedKeys:i}}uu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const o=e.au.Da();o.sort((f,p)=>function(R,P){const N=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{Vt:L})}};return N(R)-N(P)}(f.type,p.type)||this.iu(f.doc,p.doc)),this.cu(r),s=s??!1;const l=n&&!s?this.lu():[],u=this.ru.size===0&&this.current&&!s?1:0,h=u!==this.nu;return this.nu=u,o.length!==0||h?{snapshot:new Ks(this.query,e.su,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:l}:{hu:l}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new Bg,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(n=>this.tu=this.tu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.tu=this.tu.delete(n)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=ne(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const n=[];return e.forEach(r=>{this.ru.has(r)||n.push(new hw(r))}),this.ru.forEach(r=>{e.has(r)||n.push(new cw(r))}),n}Tu(e){this.tu=e.ks,this.ru=ne();const n=this._u(e.documents);return this.applyChanges(n,!0)}Iu(){return Ks.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const vf="SyncEngine";class KC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class GC{constructor(e){this.key=e,this.Eu=!1}}class QC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ru={},this.Au=new ts(l=>k0(l),au),this.Vu=new Map,this.du=new Set,this.mu=new we(W.comparator),this.fu=new Map,this.gu=new sf,this.pu={},this.yu=new Map,this.wu=yr.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function YC(t,e,n=!0){const r=yw(t);let s;const i=r.Au.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Iu()):s=await dw(r,e,n,!0),s}async function XC(t,e){const n=yw(t);await dw(n,e,!0,!1)}async function dw(t,e,n,r){const s=await gC(t.localStore,rn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await JC(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&sw(t.remoteStore,s),l}async function JC(t,e,n,r,s){t.bu=(p,g,R)=>async function(N,L,T,v){let S=L.view._u(T);S.bs&&(S=await Lg(N.localStore,L.query,!1).then(({documents:_})=>L.view._u(_,S)));const V=v&&v.targetChanges.get(L.targetId),M=v&&v.targetMismatches.get(L.targetId)!=null,j=L.view.applyChanges(S,N.isPrimaryClient,V,M);return Wg(N,L.targetId,j.hu),j.snapshot}(t,p,g,R);const i=await Lg(t.localStore,e,!0),o=new WC(e,i.ks),l=o._u(i.documents),u=Fo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,u);Wg(t,n,h.hu);const f=new KC(e,n,o);return t.Au.set(e,f),t.Vu.has(n)?t.Vu.get(n).push(e):t.Vu.set(n,[e]),h.snapshot}async function ZC(t,e,n){const r=X(t),s=r.Au.get(e),i=r.Vu.get(s.targetId);if(i.length>1)return r.Vu.set(s.targetId,i.filter(o=>!au(o,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await zh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&uf(r.remoteStore,s.targetId),qh(r,s.targetId)}).catch(ti)):(qh(r,s.targetId),await zh(r.localStore,s.targetId,!0))}async function ek(t,e){const n=X(t),r=n.Au.get(e),s=n.Vu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),uf(n.remoteStore,r.targetId))}async function tk(t,e,n){const r=lk(t);try{const s=await function(o,l){const u=X(o),h=ge.now(),f=l.reduce((R,P)=>R.add(P.key),ne());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let P=Pn(),N=ne();return u.xs.getEntries(R,f).next(L=>{P=L,P.forEach((T,v)=>{v.isValidDocument()||(N=N.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,P)).next(L=>{p=L;const T=[];for(const v of l){const S=mR(v,p.get(v.key).overlayedDocument);S!=null&&T.push(new ns(v.key,S,w0(S.value.mapValue),Tn.exists(!0)))}return u.mutationQueue.addMutationBatch(R,h,T,l)}).next(L=>{g=L;const T=L.applyToLocalDocumentSet(p,N);return u.documentOverlayCache.saveOverlays(R,L.batchId,T)})}).then(()=>({batchId:g.batchId,changes:N0(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let h=o.pu[o.currentUser.toKey()];h||(h=new we(te)),h=h.insert(l,u),o.pu[o.currentUser.toKey()]=h}(r,s.batchId,n),await jo(r,s.changes),await fu(r.remoteStore)}catch(s){const i=pf(s,"Failed to persist write");n.reject(i)}}async function fw(t,e){const n=X(t);try{const r=await fC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.fu.get(i);o&&(ue(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.Eu=!0:s.modifiedDocuments.size>0?ue(o.Eu,14607):s.removedDocuments.size>0&&(ue(o.Eu,42227),o.Eu=!1))}),await jo(n,r,e)}catch(r){await ti(r)}}function qg(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Au.forEach((i,o)=>{const l=o.view.Oa(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const g of p.va)g.Oa(l)&&(h=!0)}),h&&yf(u)}(r.eventManager,e),s.length&&r.Ru.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function nk(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.fu.get(e),i=s&&s.key;if(i){let o=new we(W.comparator);o=o.insert(i,et.newNoDocument(i,Y.min()));const l=ne().add(i),u=new Mo(Y.min(),new Map,new we(te),o,l);await fw(r,u),r.mu=r.mu.remove(i),r.fu.delete(e),wf(r)}else await zh(r.localStore,e,!1).then(()=>qh(r,e,n)).catch(ti)}async function rk(t,e){const n=X(t),r=e.batch.batchId;try{const s=await dC(n.localStore,e);mw(n,r,null),pw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await jo(n,s)}catch(s){await ti(s)}}async function sk(t,e,n){const r=X(t);try{const s=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(ue(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);mw(r,e,n),pw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await jo(r,s)}catch(s){await ti(s)}}function pw(t,e){(t.yu.get(e)||[]).forEach(n=>{n.resolve()}),t.yu.delete(e)}function mw(t,e,n){const r=X(t);let s=r.pu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.pu[r.currentUser.toKey()]=s}}function qh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Vu.get(e))t.Au.delete(r),n&&t.Ru.Du(r,n);t.Vu.delete(e),t.isPrimaryClient&&t.gu.Gr(e).forEach(r=>{t.gu.containsKey(r)||gw(t,r)})}function gw(t,e){t.du.delete(e.path.canonicalString());const n=t.mu.get(e);n!==null&&(uf(t.remoteStore,n),t.mu=t.mu.remove(e),t.fu.delete(n),wf(t))}function Wg(t,e,n){for(const r of n)r instanceof cw?(t.gu.addReference(r.key,e),ik(t,r)):r instanceof hw?(B(vf,"Document no longer in limbo: "+r.key),t.gu.removeReference(r.key,e),t.gu.containsKey(r.key)||gw(t,r.key)):G(19791,{Cu:r})}function ik(t,e){const n=e.key,r=n.path.canonicalString();t.mu.get(n)||t.du.has(r)||(B(vf,"New document in limbo: "+n),t.du.add(r),wf(t))}function wf(t){for(;t.du.size>0&&t.mu.size<t.maxConcurrentLimboResolutions;){const e=t.du.values().next().value;t.du.delete(e);const n=new W(de.fromString(e)),r=t.wu.next();t.fu.set(r,new GC(n)),t.mu=t.mu.insert(n,r),sw(t.remoteStore,new yn(rn(ou(n.path)),r,"TargetPurposeLimboResolution",ru.ce))}}async function jo(t,e,n){const r=X(t),s=[],i=[],o=[];r.Au.isEmpty()||(r.Au.forEach((l,u)=>{o.push(r.bu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){s.push(h);const p=af.Es(u.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ru.H_(s),await async function(u,h){const f=X(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>O.forEach(h,g=>O.forEach(g.Ts,R=>f.persistence.referenceDelegate.addReference(p,g.targetId,R)).next(()=>O.forEach(g.Is,R=>f.persistence.referenceDelegate.removeReference(p,g.targetId,R)))))}catch(p){if(!ni(p))throw p;B(lf,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const R=f.vs.get(g),P=R.snapshotVersion,N=R.withLastLimboFreeSnapshotVersion(P);f.vs=f.vs.insert(g,N)}}}(r.localStore,i))}async function ok(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){B(vf,"User change. New user:",e.toKey());const r=await ew(n.localStore,e);n.currentUser=e,function(i,o){i.yu.forEach(l=>{l.forEach(u=>{u.reject(new $(b.CANCELLED,o))})}),i.yu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await jo(n,r.Ns)}}function ak(t,e){const n=X(t),r=n.fu.get(e);if(r&&r.Eu)return ne().add(r.key);{let s=ne();const i=n.Vu.get(e);if(!i)return s;for(const o of i){const l=n.Au.get(o);s=s.unionWith(l.view.ou)}return s}}function yw(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ak.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nk.bind(null,e),e.Ru.H_=HC.bind(null,e.eventManager),e.Ru.Du=qC.bind(null,e.eventManager),e}function lk(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sk.bind(null,e),e}class xl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=hu(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,n){return null}Bu(e,n){return null}Ou(e){return hC(this.persistence,new lC,e.initialUser,this.serializer)}xu(e){return new Z0(of.Vi,this.serializer)}Mu(e){return new _C}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}xl.provider={build:()=>new xl};class uk extends xl{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,n){ue(this.persistence.referenceDelegate instanceof kl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new KR(r,e.asyncQueue,n)}xu(e){const n=this.cacheSizeBytes!==void 0?dt.withCacheSize(this.cacheSizeBytes):dt.DEFAULT;return new Z0(r=>kl.Vi(r,n),this.serializer)}}class Wh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>qg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ok.bind(null,this.syncEngine),await zC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $C}()}createDatastore(e){const n=hu(e.databaseInfo.databaseId),r=IC(e.databaseInfo);return kC(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new xC(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>qg(this.syncEngine,n,0),function(){return Ug.v()?new Ug:new vC}())}createSyncEngine(e,n){return function(s,i,o,l,u,h,f){const p=new QC(s,i,o,l,u,h);return f&&(p.Su=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=X(s);B(un,"RemoteStore shutting down."),i.da.add(5),await Uo(i),i.fa.shutdown(),i.ga.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Wh.provider={build:()=>new Wh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):kn("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr="FirestoreClient";class ck{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=Je.UNAUTHENTICATED,this.clientId=Gd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{B(vr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(B(vr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new En;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=pf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ac(t,e){t.asyncQueue.verifyOperationInProgress(),B(vr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ew(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Kg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await hk(t);B(vr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>zg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>zg(e.remoteStore,s)),t._onlineComponents=e}async function hk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B(vr,"Using user provided OfflineComponentProvider");try{await Ac(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===b.FAILED_PRECONDITION||s.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Yr("Error using user provided cache. Falling back to memory cache: "+n),await Ac(t,new xl)}}else B(vr,"Using default OfflineComponentProvider"),await Ac(t,new uk(void 0));return t._offlineComponents}async function _w(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B(vr,"Using user provided OnlineComponentProvider"),await Kg(t,t._uninitializedComponentsProvider._online)):(B(vr,"Using default OnlineComponentProvider"),await Kg(t,new Wh))),t._onlineComponents}function dk(t){return _w(t).then(e=>e.syncEngine)}async function Nl(t){const e=await _w(t),n=e.eventManager;return n.onListen=YC.bind(null,e.syncEngine),n.onUnlisten=ZC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=XC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ek.bind(null,e.syncEngine),n}function fk(t,e,n,r){const s=new Ef(r),i=new _f(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>mf(await Nl(t),i)),()=>{s.Ku(),t.asyncQueue.enqueueAndForget(async()=>gf(await Nl(t),i))}}function pk(t,e,n={}){const r=new En;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const f=new Ef({next:g=>{f.Ku(),o.enqueueAndForget(()=>gf(i,p));const R=g.docs.has(l);!R&&g.fromCache?h.reject(new $(b.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&g.fromCache&&u&&u.source==="server"?h.reject(new $(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new _f(ou(l.path),f,{includeMetadataChanges:!0,Wa:!0});return mf(i,p)}(await Nl(t),t.asyncQueue,e,n,r)),r.promise}function mk(t,e,n={}){const r=new En;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const f=new Ef({next:g=>{f.Ku(),o.enqueueAndForget(()=>gf(i,p)),g.fromCache&&u.source==="server"?h.reject(new $(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new _f(l,f,{includeMetadataChanges:!0,Wa:!0});return mf(i,p)}(await Nl(t),t.asyncQueue,e,n,r)),r.promise}function gk(t,e){const n=new En;return t.asyncQueue.enqueueAndForget(async()=>tk(await dk(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk="ComponentProvider",Gg=new Map;function _k(t,e,n,r,s){return new M1(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,vw(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww="firestore.googleapis.com",Qg=!0;class Yg{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new $(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ww,this.ssl=Qg}else this.host=e.host,this.ssl=e.ssl??Qg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=J0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<qR)throw new $(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}R1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vw(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new $(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new $(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new $(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class pu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new g1;switch(r.type){case"firstParty":return new w1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Gg.get(n);r&&(B(yk,"Removing Datastore"),Gg.delete(n),r.terminate())}(this),Promise.resolve()}}function vk(t,e,n,r={}){var h;t=nn(t,pu);const s=Vo(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&Gv(`https://${l}`),i.host!==ww&&i.host!==l&&Yr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!Kr(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Je.MOCK_USER;else{f=HS(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new $(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Je(g)}t._authCredentials=new y1(new l0(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ss(this.firestore,e,this._query)}}class ke{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ke(this.firestore,e,this._key)}toJSON(){return{type:ke._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(bo(n,ke._jsonSchema))return new ke(e,r||null,new W(de.fromString(n.referencePath)))}}ke._jsonSchemaVersion="firestore/documentReference/1.0",ke._jsonSchema={type:De("string",ke._jsonSchemaVersion),referencePath:De("string")};class cr extends ss{constructor(e,n,r){super(e,n,ou(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ke(this.firestore,null,new W(e))}withConverter(e){return new cr(this.firestore,e,this._path)}}function Xi(t,e,...n){if(t=ut(t),u0("collection","path",e),t instanceof pu){const r=de.fromString(e,...n);return ug(r),new cr(t,null,r)}{if(!(t instanceof ke||t instanceof cr))throw new $(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return ug(r),new cr(t.firestore,null,r)}}function Xg(t,e,...n){if(t=ut(t),arguments.length===1&&(e=Gd.newId()),u0("doc","path",e),t instanceof pu){const r=de.fromString(e,...n);return lg(r),new ke(t,null,new W(r))}{if(!(t instanceof ke||t instanceof cr))throw new $(b.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return lg(r),new ke(t.firestore,t instanceof cr?t.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg="AsyncQueue";class Zg{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new nw(this,"async_queue_retry"),this.lc=()=>{const r=Sc();r&&B(Jg,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const n=Sc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const n=Sc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const n=new En;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!ni(e))throw e;B(Jg,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const n=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,kn("INTERNAL UNHANDLED ERROR: ",ey(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.cc.indexOf(e)>-1&&(n=0);const s=ff.createAndSchedule(this,e,n,r,i=>this.Ec(i));return this.oc.push(s),s}Pc(){this._c&&G(47125,{Rc:ey(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const n of this.oc)if(n.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.oc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const n=this.oc.indexOf(e);this.oc.splice(n,1)}}function ey(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Gs extends pu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Zg,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Zg(e),this._firestoreClient=void 0,await e}}}function wk(t,e){const n=typeof t=="object"?t:Jv(),r=typeof t=="string"?t:Tl,s=Wd(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=BS("firestore");i&&vk(s,...i)}return s}function mu(t){if(t._terminated)throw new $(b.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Ek(t),t._firestoreClient}function Ek(t){var r,s,i,o;const e=t._freezeSettings(),n=_k(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new ck(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pt(We.fromBase64String(e))}catch(n){throw new $(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Pt(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Pt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(bo(e,Pt._jsonSchema))return Pt.fromBase64String(e.bytes)}}Pt._jsonSchemaVersion="firestore/bytes/1.0",Pt._jsonSchema={type:De("string",Pt._jsonSchemaVersion),bytes:De("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:on._jsonSchemaVersion}}static fromJSON(e){if(bo(e,on._jsonSchema))return new on(e.latitude,e.longitude)}}on._jsonSchemaVersion="firestore/geoPoint/1.0",on._jsonSchema={type:De("string",on._jsonSchemaVersion),latitude:De("number"),longitude:De("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ht._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(bo(e,Ht._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Ht(e.vectorValues);throw new $(b.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ht._jsonSchemaVersion="firestore/vectorValue/1.0",Ht._jsonSchema={type:De("string",Ht._jsonSchemaVersion),vectorValues:De("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk=/^__.*__$/;class Ik{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ns(e,this.data,this.fieldMask,n,this.fieldTransforms):new Lo(e,this.data,n,this.fieldTransforms)}}function Tw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{dataSource:t})}}class If{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.fc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new If({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.wc(e),r}Sc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return Dl(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(Tw(this.dataSource)&&Tk.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class Sk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||hu(e)}V(e,n,r,s=!1){return new If({dataSource:e,methodName:n,targetDoc:r,path:$e.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Iw(t){const e=t._freezeSettings(),n=hu(t._databaseId);return new Sk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ak(t,e,n,r,s,i={}){const o=t.V(i.merge||i.mergeFields?2:0,e,n,s);Rw("Data must be an object, but it was:",o,r);const l=Sw(r,o);let u,h;if(i.merge)u=new jt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=gu(e,p,n);if(!o.contains(g))throw new $(b.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Pk(f,g)||f.push(g)}u=new jt(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new Ik(new kt(l),u,h)}class Sf extends Tf{_toFieldTransform(e){return new hR(e.path,new To)}isEqual(e){return e instanceof Sf}}function Rk(t,e,n,r=!1){return Af(n,t.V(r?4:3,e))}function Af(t,e){if(Aw(t=ut(t)))return Rw("Unsupported field value:",e,t),Sw(t,e);if(t instanceof Tf)return function(r,s){if(!Tw(s.dataSource))throw s.Dc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Dc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Af(l,s.bc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ut(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return lR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ge.fromDate(r);return{timestampValue:Cl(s.serializer,i)}}if(r instanceof ge){const i=new ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Cl(s.serializer,i)}}if(r instanceof on)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pt)return{bytesValue:H0(s.serializer,r._byteString)};if(r instanceof ke){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Dc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:rf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ht)return function(o,l){const u=o instanceof Ht?o.toArray():o;return{mapValue:{fields:{[_0]:{stringValue:v0},[Il]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.Dc("VectorValues must only contain numeric values.");return ef(l.serializer,f)})}}}}}}(r,s);if(X0(r))return r._toProto(s.serializer);throw s.Dc(`Unsupported field value: ${nu(r)}`)}(t,e)}function Sw(t,e){const n={};return d0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):es(t,(r,s)=>{const i=Af(s,e.yc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Aw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ge||t instanceof on||t instanceof Pt||t instanceof ke||t instanceof Tf||t instanceof Ht||X0(t))}function Rw(t,e,n){if(!Aw(n)||!c0(n)){const r=nu(n);throw r==="an object"?e.Dc(t+" a custom object"):e.Dc(t+" "+r)}}function gu(t,e,n){if((e=ut(e))instanceof Ew)return e._internalPath;if(typeof e=="string")return kk(t,e);throw Dl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ck=new RegExp("[~\\*/\\[\\]]");function kk(t,e,n){if(e.search(Ck)>=0)throw Dl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ew(...e.split("."))._internalPath}catch{throw Dl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Dl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new $(b.INVALID_ARGUMENT,l+t+u)}function Pk(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{convertValue(e,n="none"){switch(gr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(mr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return es(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Il].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Re(o.doubleValue));return new Ht(n)}convertGeoPoint(e){return new on(Re(e.latitude),Re(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=iu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(vo(e));default:return null}}convertTimestamp(e){const n=pr(e);return new ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=de.fromString(e);ue(Y0(r),9688,{name:e});const s=new wo(r.get(1),r.get(3)),i=new W(r.popFirst(5));return s.isEqual(n)||kn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf extends xk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ke(this.firestore,null,n)}}function Nk(){return new Sf("serverTimestamp")}const ty="@firebase/firestore",ny="4.14.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Dk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(gu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Dk extends Cw{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Cf{}class Vk extends Cf{}function sy(t,e,...n){let r=[];e instanceof Cf&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof kf).length,l=i.filter(u=>u instanceof yu).length;if(o>1||o>0&&l>0)throw new $(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class yu extends Vk{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new yu(e,n,r)}_apply(e){const n=this._parse(e);return Pw(e._query,n),new ss(e.firestore,e.converter,Oh(e._query,n))}_parse(e){const n=Iw(e.firestore);return function(i,o,l,u,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new $(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){ay(p,f);const P=[];for(const N of p)P.push(oy(u,i,N));g={arrayValue:{values:P}}}else g=oy(u,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||ay(p,f),g=Rk(l,o,p,f==="in"||f==="not-in");return Ne.create(h,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function iy(t,e,n){const r=e,s=gu("where",t);return yu._create(s,r,n)}class kf extends Cf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new kf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Kt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)Pw(o,u),o=Oh(o,u)}(e._query,n),new ss(e.firestore,e.converter,Oh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function oy(t,e,n){if(typeof(n=ut(n))=="string"){if(n==="")throw new $(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!C0(e)&&n.indexOf("/")!==-1)throw new $(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(de.fromString(n));if(!W.isDocumentKey(r))throw new $(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return yg(t,new W(r))}if(n instanceof ke)return yg(t,n._key);throw new $(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${nu(n)}.`)}function ay(t,e){if(!Array.isArray(t)||t.length===0)throw new $(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Pw(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function bk(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Mi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ur extends Cw{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $a(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(gu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(b.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ur._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ur._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ur._jsonSchema={type:De("string",Ur._jsonSchemaVersion),bundleSource:De("string","DocumentSnapshot"),bundleName:De("string"),bundle:De("string")};class $a extends Ur{data(e={}){return super.data(e)}}class jr{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Mi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new $a(this._firestore,this._userDataWriter,r.key,r,new Mi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new $a(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Mi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new $a(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Mi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:Ok(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(b.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=jr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Gd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Ok(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jr._jsonSchemaVersion="firestore/querySnapshot/1.0",jr._jsonSchema={type:De("string",jr._jsonSchemaVersion),bundleSource:De("string","QuerySnapshot"),bundleName:De("string"),bundle:De("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lk(t){t=nn(t,ke);const e=nn(t.firestore,Gs),n=mu(e);return pk(n,t._key).then(r=>xw(e,t,r))}function ly(t){t=nn(t,ss);const e=nn(t.firestore,Gs),n=mu(e),r=new Rf(e);return kw(t._query),mk(n,t._query).then(s=>new jr(e,r,t,s))}function Mk(t,e,n){t=nn(t,ke);const r=nn(t.firestore,Gs),s=bk(t.converter,e,n),i=Iw(r);return Fk(r,[Ak(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Tn.none())])}function Rc(t,...e){var h,f,p;t=ut(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||ry(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(ry(e[r])){const g=e[r];e[r]=(h=g.next)==null?void 0:h.bind(g),e[r+1]=(f=g.error)==null?void 0:f.bind(g),e[r+2]=(p=g.complete)==null?void 0:p.bind(g)}let i,o,l;if(t instanceof ke)o=nn(t.firestore,Gs),l=ou(t._key.path),i={next:g=>{e[r]&&e[r](xw(o,t,g))},error:e[r+1],complete:e[r+2]};else{const g=nn(t,ss);o=nn(g.firestore,Gs),l=g._query;const R=new Rf(o);i={next:P=>{e[r]&&e[r](new jr(o,R,g,P))},error:e[r+1],complete:e[r+2]},kw(t._query)}const u=mu(o);return fk(u,l,s,i)}function Fk(t,e){const n=mu(t);return gk(n,e)}function xw(t,e,n){const r=n.docs.get(e._key),s=new Rf(t);return new Ur(t,s,e._key,r,new Mi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){m1(Zs),$s(new Gr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Gs(new _1(r.getProvider("auth-internal")),new E1(o,r.getProvider("app-check-internal")),F1(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),lr(ty,ny,e),lr(ty,ny,"esm2020")})();var Uk="firebase",jk="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lr(Uk,jk,"app");function Nw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zk=Nw,Dw=new No("auth","Firebase",Nw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl=new Hd("@firebase/auth");function Bk(t,...e){Vl.logLevel<=se.WARN&&Vl.warn(`Auth (${Zs}): ${t}`,...e)}function Ha(t,...e){Vl.logLevel<=se.ERROR&&Vl.error(`Auth (${Zs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t,...e){throw xf(t,...e)}function qt(t,...e){return xf(t,...e)}function Pf(t,e,n){const r={...zk(),[e]:n};return new No("auth","Firebase",r).create(e,{appName:t.name})}function zr(t){return Pf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $k(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&cn(t,"argument-error"),Pf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Dw.create(t,...e)}function Q(t,e,...n){if(!t)throw xf(e,...n)}function _n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ha(e),new Error(e)}function xn(t,e){t||_n(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Hk(){return uy()==="http:"||uy()==="https:"}function uy(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hk()||GS()||"connection"in navigator)?navigator.onLine:!0}function Wk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n){this.shortDelay=e,this.longDelay=n,xn(n>e,"Short delay should be less than long delay!"),this.isMobile=qS()||QS()}get(){return qk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(t,e){xn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Qk=new zo(3e4,6e4);function Df(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function si(t,e,n,r,s={}){return bw(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Do({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...i};return KS()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Vo(t.emulatorConfig.host)&&(h.credentials="include"),Vw.fetch()(await Ow(t,t.config.apiHost,n,l),h)})}async function bw(t,e,n){t._canInitEmulator=!1;const r={...Kk,...e};try{const s=new Xk(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Sa(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Sa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Sa(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Pf(t,f,h);cn(t,f)}}catch(s){if(s instanceof Dn)throw s;cn(t,"network-request-failed",{message:String(s)})}}async function Yk(t,e,n,r,s={}){const i=await si(t,e,n,r,s);return"mfaPendingCredential"in i&&cn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Ow(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Nf(t.config,s):`${t.config.apiScheme}://${s}`;return Gk.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class Xk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qt(this.auth,"network-request-failed")),Qk.get())})}}function Sa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=qt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jk(t,e){return si(t,"POST","/v1/accounts:delete",e)}async function bl(t,e){return si(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Zk(t,e=!1){const n=ut(t),r=await n.getIdToken(e),s=Vf(r);Q(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ji(Cc(s.auth_time)),issuedAtTime:Ji(Cc(s.iat)),expirationTime:Ji(Cc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Cc(t){return Number(t)*1e3}function Vf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ha("JWT malformed, contained fewer than 3 sections"),null;try{const s=Hv(n);return s?JSON.parse(s):(Ha("Failed to decode base64 JWT payload"),null)}catch(s){return Ha("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function cy(t){const e=Vf(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dn&&eP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function eP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ji(this.lastLoginAt),this.creationTime=Ji(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ol(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Ao(t,bl(e,{idToken:n}));Q(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?Lw(s.providerUserInfo):[],o=rP(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Gh(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function nP(t){const e=ut(t);await Ol(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Lw(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sP(t,e){const n=await bw(t,{},async()=>{const r=Do({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Ow(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Vo(t.emulatorConfig.host)&&(u.credentials="include"),Vw.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function iP(t,e){return si(t,"POST","/v2/accounts:revokeToken",Df(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=cy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await sP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Vs;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vs,this.toJSON())}_performRefresh(){return _n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new tP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Gh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ao(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Zk(this,e)}reload(){return nP(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new zt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ol(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ut(this.auth.app))return Promise.reject(zr(this.auth));const e=await this.getIdToken();return await Ao(this,Jk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:R,providerData:P,stsTokenManager:N}=n;Q(p&&N,e,"internal-error");const L=Vs.fromJSON(this.name,N);Q(typeof p=="string",e,"internal-error"),Bn(r,e.name),Bn(s,e.name),Q(typeof g=="boolean",e,"internal-error"),Q(typeof R=="boolean",e,"internal-error"),Bn(i,e.name),Bn(o,e.name),Bn(l,e.name),Bn(u,e.name),Bn(h,e.name),Bn(f,e.name);const T=new zt({uid:p,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:R,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:L,createdAt:h,lastLoginAt:f});return P&&Array.isArray(P)&&(T.providerData=P.map(v=>({...v}))),u&&(T._redirectEventId=u),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new Vs;s.updateFromServerResponse(n);const i=new zt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ol(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Lw(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Vs;l.updateFromIdToken(r);const u=new zt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Gh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy=new Map;function vn(t){xn(t instanceof Function,"Expected a class definition");let e=hy.get(t);return e?(xn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Mw.type="NONE";const dy=Mw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(t,e,n){return`firebase:${t}:${e}:${n}`}class bs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=qa(this.userKey,s.apiKey,i),this.fullPersistenceKey=qa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await bl(this.auth,{idToken:e}).catch(()=>{});return n?zt._fromGetAccountInfoResponse(this.auth,n,e):null}return zt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new bs(vn(dy),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||vn(dy);const o=qa(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const g=await bl(e,{idToken:f}).catch(()=>{});if(!g)break;p=await zt._fromGetAccountInfoResponse(e,g,f)}else p=zt._fromJSON(e,f);h!==i&&(l=p),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new bs(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new bs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($w(e))return"Blackberry";if(Hw(e))return"Webos";if(Uw(e))return"Safari";if((e.includes("chrome/")||jw(e))&&!e.includes("edge/"))return"Chrome";if(Bw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Fw(t=nt()){return/firefox\//i.test(t)}function Uw(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jw(t=nt()){return/crios\//i.test(t)}function zw(t=nt()){return/iemobile/i.test(t)}function Bw(t=nt()){return/android/i.test(t)}function $w(t=nt()){return/blackberry/i.test(t)}function Hw(t=nt()){return/webos/i.test(t)}function bf(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function oP(t=nt()){var e;return bf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function aP(){return YS()&&document.documentMode===10}function qw(t=nt()){return bf(t)||Bw(t)||Hw(t)||$w(t)||/windows phone/i.test(t)||zw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(t,e=[]){let n;switch(t){case"Browser":n=fy(nt());break;case"Worker":n=`${fy(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uP(t,e={}){return si(t,"GET","/v2/passwordPolicy",Df(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP=6;class hP{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??cP,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new py(this),this.idTokenSubscription=new py(this),this.beforeStateQueue=new lP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=vn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await bs.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await bl(this,{idToken:e}),r=await zt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ut(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ol(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Wk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ut(this.app))return Promise.reject(zr(this));const n=e?ut(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ut(this.app)?Promise.reject(zr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ut(this.app)?Promise.reject(zr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await uP(this),n=new hP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new No("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await iP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&vn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await bs.create(this,[vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ww(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Ut(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Bk(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function _u(t){return ut(t)}class py{constructor(e){this.auth=e,this.observer=null,this.addObserver=sA(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Of={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fP(t){Of=t}function pP(t){return Of.loadJS(t)}function mP(){return Of.gapiScript}function gP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yP(t,e){const n=Wd(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Kr(i,e??{}))return s;cn(s,"already-initialized")}return n.initialize({options:e})}function _P(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vP(t,e,n){const r=_u(t);Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Kw(e),{host:o,port:l}=wP(e),u=l===null?"":`:${l}`,h={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Q(Kr(h,r.config.emulator)&&Kr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Vo(o)?Gv(`${i}//${o}${u}`):EP()}function Kw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function wP(t){const e=Kw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:my(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:my(o)}}}function my(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function EP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _n("not implemented")}_getIdTokenResponse(e){return _n("not implemented")}_linkToIdToken(e,n){return _n("not implemented")}_getReauthenticationResolver(e){return _n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Os(t,e){return Yk(t,"POST","/v1/accounts:signInWithIdp",Df(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP="http://localhost";class Xr extends Gw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Xr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Os(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Os(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Os(e,n)}buildRequest(){const e={requestUri:TP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Do(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo extends Lf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Bo{constructor(){super("facebook.com")}static credential(e){return Xr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends Bo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pn.credential(n,r)}catch{return null}}}pn.GOOGLE_SIGN_IN_METHOD="google.com";pn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Bo{constructor(){super("github.com")}static credential(e){return Xr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com";Gn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Bo{constructor(){super("twitter.com")}static credential(e,n){return Xr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await zt._fromIdTokenResponse(e,r,s),o=gy(r);return new Qs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=gy(r);return new Qs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function gy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll extends Dn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ll.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ll(e,n,r,s)}}function Qw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ll._fromErrorAndOperation(t,i,e,r):i})}async function IP(t,e,n=!1){const r=await Ao(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SP(t,e,n=!1){const{auth:r}=t;if(Ut(r.app))return Promise.reject(zr(r));const s="reauthenticate";try{const i=await Ao(t,Qw(r,s,e,t),n);Q(i.idToken,r,"internal-error");const o=Vf(i.idToken);Q(o,r,"internal-error");const{sub:l}=o;return Q(t.uid===l,r,"user-mismatch"),Qs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&cn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AP(t,e,n=!1){if(Ut(t.app))return Promise.reject(zr(t));const r="signIn",s=await Qw(t,r,e),i=await Qs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function RP(t,e,n,r){return ut(t).onIdTokenChanged(e,n,r)}function CP(t,e,n){return ut(t).beforeAuthStateChanged(e,n)}function kP(t,e,n,r){return ut(t).onAuthStateChanged(e,n,r)}function yy(t){return ut(t).signOut()}const Ml="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ml,"1"),this.storage.removeItem(Ml),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP=1e3,xP=10;class Xw extends Yw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);aP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,xP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},PP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xw.type="LOCAL";const NP=Xw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw extends Yw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Jw.type="SESSION";const Zw=Jw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new vu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),u=await DP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const h=Mf("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return window}function bP(t){an().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function OP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function MP(){return eE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE="firebaseLocalStorageDb",FP=1,Fl="firebaseLocalStorage",nE="fbase_key";class $o{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wu(t,e){return t.transaction([Fl],e?"readwrite":"readonly").objectStore(Fl)}function UP(){const t=indexedDB.deleteDatabase(tE);return new $o(t).toPromise()}function Qh(){const t=indexedDB.open(tE,FP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fl,{keyPath:nE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fl)?e(r):(r.close(),await UP(),e(await Qh()))})})}async function _y(t,e,n){const r=wu(t,!0).put({[nE]:e,value:n});return new $o(r).toPromise()}async function jP(t,e){const n=wu(t,!1).get(e),r=await new $o(n).toPromise();return r===void 0?null:r.value}function vy(t,e){const n=wu(t,!0).delete(e);return new $o(n).toPromise()}const zP=800,BP=3;class rE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>BP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return eE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vu._getInstance(MP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await OP(),!this.activeServiceWorker)return;this.sender=new VP(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||LP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qh();return await _y(e,Ml,"1"),await vy(e,Ml),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_y(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>jP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=wu(s,!1).getAll();return new $o(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rE.type="LOCAL";const $P=rE;new zo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(t,e){return e?vn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff extends Gw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Os(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Os(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Os(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function HP(t){return AP(t.auth,new Ff(t),t.bypassAuthState)}function qP(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),SP(n,new Ff(t),t.bypassAuthState)}async function WP(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),IP(n,new Ff(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return HP;case"linkViaPopup":case"linkViaRedirect":return WP;case"reauthViaPopup":case"reauthViaRedirect":return qP;default:cn(this.auth,"internal-error")}}resolve(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KP=new zo(2e3,1e4);async function GP(t,e,n){if(Ut(t.app))return Promise.reject(qt(t,"operation-not-supported-in-this-environment"));const r=_u(t);$k(t,e,Lf);const s=sE(r,n);return new Or(r,"signInViaPopup",e,s).executeNotNull()}class Or extends iE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Or.currentPopupAction&&Or.currentPopupAction.cancel(),Or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){xn(this.filter.length===1,"Popup operations only handle one event");const e=Mf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,KP.get())};e()}}Or.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QP="pendingRedirect",Wa=new Map;class YP extends iE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wa.get(this.auth._key());if(!e){try{const r=await XP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wa.set(this.auth._key(),e)}return this.bypassAuthState||Wa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function XP(t,e){const n=ex(e),r=ZP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function JP(t,e){Wa.set(t._key(),e)}function ZP(t){return vn(t._redirectPersistence)}function ex(t){return qa(QP,t.config.apiKey,t.name)}async function tx(t,e,n=!1){if(Ut(t.app))return Promise.reject(zr(t));const r=_u(t),s=sE(r,e),o=await new YP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx=10*60*1e3;class rx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!oE(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(qt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nx&&this.cachedEventUids.clear(),this.cachedEventUids.has(wy(e))}saveEventToCache(e){this.cachedEventUids.add(wy(e)),this.lastProcessedEventTime=Date.now()}}function wy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function oE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ix(t,e={}){return si(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ax=/^https?/;async function lx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ix(t);for(const n of e)try{if(ux(n))return}catch{}cn(t,"unauthorized-domain")}function ux(t){const e=Kh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ax.test(n))return!1;if(ox.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx=new zo(3e4,6e4);function Ey(){const t=an().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hx(t){return new Promise((e,n)=>{var s,i,o;function r(){Ey(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ey(),n(qt(t,"network-request-failed"))},timeout:cx.get()})}if((i=(s=an().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=an().gapi)!=null&&o.load)r();else{const l=gP("iframefcb");return an()[l]=()=>{gapi.load?r():n(qt(t,"network-request-failed"))},pP(`${mP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ka=null,e})}let Ka=null;function dx(t){return Ka=Ka||hx(t),Ka}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx=new zo(5e3,15e3),px="__/auth/iframe",mx="emulator/auth/iframe",gx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _x(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Nf(e,mx):`https://${t.config.authDomain}/${px}`,r={apiKey:e.apiKey,appName:t.name,v:Zs},s=yx.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Do(r).slice(1)}`}async function vx(t){const e=await dx(t),n=an().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:_x(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gx,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=qt(t,"network-request-failed"),l=an().setTimeout(()=>{i(o)},fx.get());function u(){an().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ex=500,Tx=600,Ix="_blank",Sx="http://localhost";class Ty{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ax(t,e,n,r=Ex,s=Tx){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...wx,width:r.toString(),height:s.toString(),top:i,left:o},h=nt().toLowerCase();n&&(l=jw(h)?Ix:n),Fw(h)&&(e=e||Sx,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[R,P])=>`${g}${R}=${P},`,"");if(oP(h)&&l!=="_self")return Rx(e||"",l),new Ty(null);const p=window.open(e||"",l,f);Q(p,t,"popup-blocked");try{p.focus()}catch{}return new Ty(p)}function Rx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cx="__/auth/handler",kx="emulator/auth/handler",Px=encodeURIComponent("fac");async function Iy(t,e,n,r,s,i){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Zs,eventId:s};if(e instanceof Lf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",rA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Bo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${Px}=${encodeURIComponent(u)}`:"";return`${xx(t)}?${Do(l).slice(1)}${h}`}function xx({config:t}){return t.emulator?Nf(t,kx):`https://${t.authDomain}/${Cx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc="webStorageSupport";class Nx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zw,this._completeRedirectFn=tx,this._overrideRedirectResult=JP}async _openPopup(e,n,r,s){var o;xn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Iy(e,n,r,Kh(),s);return Ax(e,i,Mf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Iy(e,n,r,Kh(),s);return bP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(xn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await vx(e),r=new rx(e);return n.register("authEvent",s=>(Q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(kc,{type:kc},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[kc];i!==void 0&&n(!!i),cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qw()||Uw()||bf()}}const Dx=Nx;var Sy="@firebase/auth",Ay="1.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ox(t){$s(new Gr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ww(t)},h=new dP(r,s,i,u);return _P(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$s(new Gr("auth-internal",e=>{const n=_u(e.getProvider("auth").getImmediate());return(r=>new Vx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),lr(Sy,Ay,bx(t)),lr(Sy,Ay,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lx=5*60,Mx=Kv("authIdTokenMaxAge")||Lx;let Ry=null;const Fx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Mx)return;const s=n==null?void 0:n.token;Ry!==s&&(Ry=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ux(t=Jv()){const e=Wd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=yP(t,{popupRedirectResolver:Dx,persistence:[$P,NP,Zw]}),r=Kv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Fx(i.toString());CP(n,o,()=>o(n.currentUser)),RP(n,l=>o(l))}}const s=qv("auth");return s&&vP(n,`http://${s}`),n}function jx(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}fP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=qt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",jx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ox("Browser");const zx={apiKey:"AIzaSyD-9q9fFjLiKXZT5KU23L7hIsHn1ejXcAk",authDomain:"tb-tweet-annotator.firebaseapp.com",projectId:"tb-tweet-annotator",storageBucket:"tb-tweet-annotator.firebasestorage.app",messagingSenderId:"646743575811",appId:"1:646743575811:web:e6ecf1fd4038e98cd2ed36"},aE=Xv(zx),Lr=wk(aE),Ga=Ux(aE),Bx=new pn;function $x(t,e){const n=Object.keys(t).filter(f=>e[f]);if(n.length===0)return null;const r=["Relevant","Irrelevant","Flagged"];let s=0;const i={},o={};r.forEach(f=>{i[f]=0,o[f]=0}),n.forEach(f=>{t[f]===e[f]&&s++,i[t[f]]++,o[e[f]]++});const l=n.length;if(l===0)return null;const u=s/l,h=r.reduce((f,p)=>f+i[p]/l*(o[p]/l),0);return h===1?1:(u-h)/(1-h)}function Hx({onBack:t}){const[e,n]=ie.useState({}),[r,s]=ie.useState({bucketCounts:{},sharedIds:new Set}),[i,o]=ie.useState([]),[l,u]=ie.useState(!0);ie.useEffect(()=>{let p=!1,g=!1,R=!1;const P=()=>{p&&g&&R&&u(!1)},N=Rc(Xi(Lr,"users"),v=>{const S={};v.forEach(V=>{const M=V.data();M.annotatorId&&(S[M.annotatorId]={email:V.id,...M})}),n(S),p=!0,P()}),L=Rc(Xi(Lr,"tweet_assignments"),v=>{const S={},V=new Set;v.forEach(M=>{const j=M.data().bucket;S[j]=(S[j]||0)+1,j==="Shared"&&V.add(M.id)}),s({bucketCounts:S,sharedIds:V}),g=!0,P()}),T=Rc(Xi(Lr,"annotations"),v=>{const S=[];v.forEach(V=>S.push(V.data())),o(S),R=!0,P()});return()=>{N(),L(),T()}},[]);const h=ie.useMemo(()=>{const p=Object.keys(e).sort(),g={},R={};p.forEach(T=>{g[T]={},R[T]={Relevant:0,Irrelevant:0,Flagged:0,total:0}}),i.forEach(({annotatorId:T,tweetId:v,label:S})=>{g[T]&&(g[T][v]=S,R[T][S]=(R[T][S]||0)+1,R[T].total+=1)});const P={};for(let T=0;T<p.length;T++)for(let v=T+1;v<p.length;v++){const S=p[T],V=p[v],M=Object.fromEntries(Object.entries(g[S]).filter(([_])=>r.sharedIds.has(_))),j=Object.fromEntries(Object.entries(g[V]).filter(([_])=>r.sharedIds.has(_)));P[`${S}${V}`]=$x(M,j)}const N=i.length,L=p.reduce((T,v)=>T+(R[v].Relevant||0),0);return{activeAnnotators:p,byAnnotator:g,labelCounts:R,kappa:P,totalLabels:N,prevalence:N>0?L/N:0,totalRelevant:L}},[e,r,i]);if(l)return C.jsxs("div",{className:"min-h-screen bg-slate-900 flex flex-col items-center justify-center p-16 text-slate-400",children:[C.jsx(zv,{size:36,className:"animate-spin mb-4"}),C.jsx("p",{className:"font-mono text-sm",children:"Syncing live database..."})]});const f=p=>p===null?"pending":p>=.8?`κ ${p.toFixed(2)} ✓ strong`:p>=.6?`κ ${p.toFixed(2)} ✓ good`:`κ ${p.toFixed(2)} ⚠ review`;return C.jsx("div",{className:"min-h-screen bg-slate-900 font-sans p-6",children:C.jsxs("div",{className:"max-w-5xl mx-auto flex flex-col gap-6 text-slate-200",children:[C.jsxs("div",{className:"flex justify-between items-center mb-2",children:[C.jsxs("div",{children:[C.jsxs("h1",{className:"text-2xl font-semibold text-slate-100 flex items-center gap-3",children:[C.jsx("div",{className:"p-2 bg-emerald-900/50 rounded-lg border border-emerald-800/50",children:C.jsx(jv,{className:"text-emerald-400",size:24})}),"Team Progress Dashboard"]}),C.jsxs("p",{className:"text-sm text-slate-400 font-mono mt-2 flex items-center gap-2",children:[C.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),"Live Sync Active"]})]}),t&&C.jsx("button",{onClick:t,className:"px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-md text-sm font-medium transition-colors border border-slate-700",children:"← Back to Queue"})]}),C.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:[{label:"Total Annotated",value:h.totalLabels.toLocaleString()},{label:"Relevant Rate",value:`${(h.prevalence*100).toFixed(1)}%`},{label:"Positives So Far",value:h.totalRelevant},{label:"Positives Target",value:"600 Target"}].map(({label:p,value:g})=>C.jsxs("div",{className:"bg-slate-800 rounded-xl p-5 border border-slate-700 shadow-lg",children:[C.jsx("p",{className:"text-xs text-slate-400 mb-1 tracking-wide uppercase font-semibold",children:p}),C.jsx("p",{className:"text-2xl font-bold text-slate-100",children:g})]},p))}),C.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:h.activeAnnotators.map(p=>{const g=r.bucketCounts.Shared||0,R=r.bucketCounts[`Annotator_${p}`]||0,P=g+R,N=h.labelCounts[p],L=N.total,T=P-L,v=P>0?L/P*100:0,S=e[p].email||`Annotator ${p}`;return C.jsxs("div",{className:"bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg flex flex-col",children:[C.jsxs("div",{className:"flex items-center gap-3 mb-5 border-b border-slate-700 pb-4",children:[C.jsx("div",{className:"w-10 h-10 rounded-full bg-slate-900 border border-slate-600 flex items-center justify-center flex-shrink-0",children:C.jsx(Ih,{size:20,className:"text-slate-400"})}),C.jsxs("div",{className:"overflow-hidden",children:[C.jsxs("h2",{className:"text-lg font-semibold text-slate-100 truncate",children:["Annotator ",p]}),C.jsx("p",{className:"text-xs text-slate-400 truncate",children:S})]})]}),C.jsxs("div",{className:"space-y-3 flex-grow",children:[C.jsxs("div",{className:"flex justify-between text-sm",children:[C.jsx("span",{className:"text-slate-400",children:"Total Assigned"}),C.jsx("span",{className:"font-mono text-slate-200",children:P})]}),C.jsxs("div",{className:"flex justify-between text-sm",children:[C.jsx("span",{className:"text-slate-400",children:"Annotated"}),C.jsx("span",{className:"font-mono text-emerald-400",children:L})]}),C.jsxs("div",{className:"flex justify-between text-sm",children:[C.jsx("span",{className:"text-slate-400",children:"Remaining"}),C.jsx("span",{className:"font-mono text-amber-400",children:Math.max(0,T)})]}),C.jsxs("div",{className:"pt-2",children:[C.jsx("div",{className:"w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-700",children:C.jsx("div",{className:"bg-emerald-500 h-full rounded-full transition-all duration-500",style:{width:`${Math.min(v,100)}%`}})}),C.jsxs("p",{className:"text-right text-xs text-slate-500 mt-1 font-mono",children:[v.toFixed(1),"%"]})]})]}),C.jsx("div",{className:"mt-4 pt-4 border-t border-slate-700",children:C.jsxs("div",{className:"flex flex-wrap gap-2 text-xs font-mono",children:[C.jsxs("span",{className:"px-2 py-1 bg-emerald-900/30 border border-emerald-800/50 text-emerald-400 rounded",children:["Rel: ",N.Relevant]}),C.jsxs("span",{className:"px-2 py-1 bg-red-900/30 border border-red-800/50 text-red-400 rounded",children:["Irr: ",N.Irrelevant]}),C.jsxs("span",{className:"px-2 py-1 bg-amber-900/30 border border-amber-800/50 text-amber-400 rounded",children:["Flag: ",N.Flagged]})]})})]},p)})}),C.jsxs("div",{className:"bg-slate-800 rounded-xl border border-slate-700 p-6 shadow-lg",children:[C.jsxs("div",{className:"flex justify-between items-center mb-4 border-b border-slate-700 pb-3",children:[C.jsx("h3",{className:"text-sm font-medium text-slate-300 uppercase tracking-wider",children:"Inter-rater Reliability"}),C.jsxs("span",{className:"text-xs text-slate-500 font-mono",children:["Shared Set: ",r.sharedIds.size," tweets"]})]}),C.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm",children:[Object.entries(h.kappa).map(([p,g])=>{const[R,P]=p.split("");return C.jsxs("div",{className:"flex justify-between items-center bg-slate-900/50 p-3 rounded-lg border border-slate-700/50",children:[C.jsxs("span",{className:"text-slate-300 font-medium",children:["Ann ",R," ↔ ",P]}),C.jsx("span",{className:`font-mono font-bold ${g===null?"text-slate-600":g>=.8?"text-emerald-400":g>=.6?"text-emerald-500":"text-amber-400"}`,children:f(g)})]},p)}),Object.keys(h.kappa).length===0&&C.jsx("div",{className:"text-slate-500 italic text-xs",children:"Not enough annotators registered to calculate agreement."})]})]})]})})}function Pc({label:t="Loading…"}){return C.jsxs("div",{className:"min-h-screen bg-slate-900 flex flex-col items-center justify-center gap-4 text-slate-400",children:[C.jsx(zv,{size:36,className:"animate-spin"}),C.jsx("p",{className:"text-sm font-mono",children:t})]})}function qx(){const[t,e]=ie.useState(void 0),[n,r]=ie.useState(null),[s,i]=ie.useState([]),[o,l]=ie.useState(!1),[u,h]=ie.useState(!1),[f,p]=ie.useState(0),[g,R]=ie.useState("Unannotated"),[P,N]=ie.useState("default"),[L,T]=ie.useState(null),[v,S]=ie.useState(!1),[V,M]=ie.useState(!1),[j,_]=ie.useState(null),[y,w]=ie.useState(!1);ie.useEffect(()=>kP(Ga,U=>e(U??null)),[]),ie.useEffect(()=>{async function J(){if(!t){r(null),_(null),w(!1);return}try{const U=Xg(Lr,"users",t.email),q=await Lk(U);if(q.exists()){const K=q.data();r(K.annotatorId),_(K.role||"annotator"),w(!1)}else console.warn(`Unauthorized access attempt by: ${t.email}`),w(!0)}catch(U){console.error("Error fetching user role:",U)}}J()},[t]);const I=ie.useCallback(async()=>{if(n){l(!0);try{const J=["Shared",`Annotator_${n}`],U=await ly(sy(Xi(Lr,"tweet_assignments"),iy("bucket","in",J))),q={};U.forEach(rt=>{q[rt.id]={...rt.data(),id:rt.id,label:null}}),(await ly(sy(Xi(Lr,"annotations"),iy("annotatorId","==",n)))).forEach(rt=>{const{tweetId:Ke,label:hn,updatedAt:st}=rt.data();q[Ke]&&(q[Ke].label=hn,q[Ke].updatedAt=(st==null?void 0:st.toMillis())||0)});const oe=Object.values(q);i(oe);const _e=oe.findIndex(rt=>!rt.label);p(_e!==-1?_e:0)}finally{l(!1)}}},[n]);ie.useEffect(()=>{I()},[I]);const A=async J=>{if(!ee||u)return;T(J),h(!0);const U=Date.now(),q=s.map(K=>K.id===ee.id?{...K,label:J,updatedAt:U}:K);i(q),await Mk(Xg(Lr,"annotations",`${ee.id}_${n}`),{tweetId:ee.id,annotatorId:n,label:J,updatedAt:Nk()},{merge:!0}),h(!1),setTimeout(()=>{T(null),g==="All"&&f<E.length-1&&p(K=>K+1)},300)},k=()=>{const J=["Tweet ID","Text","Created At","Location","Language","Label"],U=s.map(oe=>`"${oe.tweet_id}","${(oe.text??"").replace(/"/g,'""')}","${oe.createdAt??""}","${(oe.location??"").replace(/"/g,'""')}","${oe.language??""}","${oe.label??""}"`),q=new Blob([[J.join(","),...U].join(`
`)],{type:"text/csv"});Object.assign(document.createElement("a"),{href:URL.createObjectURL(q),download:`tb_annotations_${n}_export.csv`}).click()},E=ie.useMemo(()=>{let J=s;return g==="Unannotated"?J=s.filter(U=>!U.label):g!=="All"&&(J=s.filter(U=>U.label===g)),P==="newest"?J=[...J].sort((U,q)=>(q.updatedAt||0)-(U.updatedAt||0)):P==="oldest"&&(J=[...J].sort((U,q)=>(U.updatedAt||0)-(q.updatedAt||0))),J},[s,g,P]),ee=E[f]??null,_t=s.length,Vn=s.filter(J=>J.label).length;return t===void 0?C.jsx(Pc,{label:"Initialising…"}):y?C.jsxs("div",{className:"min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4 text-center",children:[C.jsx(mc,{size:48,className:"text-red-500 mb-4"}),C.jsx("h2",{className:"text-xl font-semibold text-slate-100 mb-2",children:"Access Denied"}),C.jsx("p",{className:"text-slate-400 max-w-md mb-6",children:"This sovereign annotation chamber is reserved for certified TB discourse, AI and natural language specialists."}),C.jsx("p",{className:"text-slate-400 font-mono text-sm",children:"Asidlali la mfowethu."}),C.jsx("p",{className:"text-slate-500 text-xs mt-6",children:"NOTE: This sacred archive remains closed to wandering souls. Should your purpose prove sincere, Grand Master Popo may grant audience. Good luck."}),C.jsx("br",{}),C.jsx("a",{href:"mailto:popovich.thelord@gmail.com",className:"px-6 py-2 bg-slate-800 text-slate-300 rounded hover:bg-slate-700 transition-colors border border-slate-700",children:"Present Your Plea"}),C.jsx("br",{}),C.jsx("br",{}),C.jsx("button",{onClick:()=>{w(!1),yy(Ga)},className:"px-6 py-2 bg-slate-800 text-slate-300 rounded hover:bg-slate-700 transition-colors border border-slate-700",children:"Return to Sign In"})]}):t?n?V?C.jsx(Hx,{onBack:()=>M(!1)}):o?C.jsx(Pc,{label:"Loading your annotation set…"}):C.jsxs("div",{className:"min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-emerald-500/30",children:[C.jsxs("header",{className:"border-b border-slate-800 bg-slate-900/50 p-4 sticky top-0 backdrop-blur-sm z-10",children:[C.jsxs("div",{className:"max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4",children:[C.jsxs("div",{children:[C.jsx("h1",{className:"text-lg font-semibold tracking-wide text-slate-100",children:"TB Discourse Classifier"}),C.jsxs("p",{className:"text-sm text-slate-400 font-mono mt-1",children:["Annotator ",n," · Progress: ",Vn," / ",_t,_t>0&&` (${(Vn/_t*100).toFixed(1)}%)`]})]}),C.jsxs("div",{className:"flex gap-3 items-center",children:[j==="admin"&&C.jsxs("button",{onClick:()=>M(!0),className:"flex items-center gap-2 px-3 py-2 bg-emerald-900/30 hover:bg-emerald-800/50 text-emerald-400 rounded-md text-sm font-medium transition-colors border border-emerald-800/50",children:[C.jsx(jv,{size:16})," Dashboard"]}),t.photoURL?C.jsx("img",{src:t.photoURL,alt:t.displayName||"Annotator",title:`Signed in as ${t.email}`,referrerPolicy:"no-referrer",className:"w-8 h-8 rounded-full border border-slate-600 bg-slate-800 object-cover"}):C.jsx("div",{className:"w-8 h-8 rounded-full border border-slate-600 bg-slate-800 flex items-center justify-center",title:`Signed in as ${t.email}`,children:C.jsx(Ih,{size:16,className:"text-slate-400"})}),C.jsxs("button",{onClick:()=>S(!0),className:"flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700 text-slate-300 rounded-md text-sm font-medium transition-colors border border-slate-700",children:[C.jsx(Gm,{size:16})," Guidelines"]}),C.jsxs("button",{onClick:k,className:"flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-md text-sm font-medium transition-colors border border-slate-700",children:[C.jsx(IS,{size:16})," Export"]}),C.jsx("button",{onClick:()=>yy(Ga),title:"Sign out",className:"flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-400 rounded-md text-sm transition-colors border border-slate-700",children:C.jsx(xS,{size:16})})]})]}),C.jsxs("div",{className:"max-w-3xl mx-auto mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 overflow-x-auto pb-1",children:[C.jsx("div",{className:"flex gap-2",children:["Unannotated","All","Relevant","Irrelevant","Flagged"].map(J=>C.jsx("button",{onClick:()=>{R(J),p(0)},className:`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${g===J?"bg-slate-700 text-slate-100 ring-1 ring-slate-500":"bg-slate-800/50 text-slate-400 hover:bg-slate-800"}`,children:J},J))}),g!=="Unannotated"&&C.jsxs("select",{value:P,onChange:J=>{N(J.target.value),p(0)},className:"px-3 py-1.5 bg-slate-800 border border-slate-700 text-slate-300 text-xs rounded-md focus:outline-none focus:border-emerald-500 transition-colors",children:[C.jsx("option",{value:"default",children:"Default Order"}),C.jsx("option",{value:"newest",children:"Newest First"}),C.jsx("option",{value:"oldest",children:"Oldest First"})]})]})]}),C.jsx("main",{className:"max-w-3xl mx-auto p-4 flex flex-col items-center justify-center min-h-[60vh] pb-36",children:ee?C.jsxs("div",{className:"w-full relative",children:[ee.label&&C.jsx("div",{className:"absolute -top-3 left-4 px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded bg-slate-800 border border-slate-700 z-10",children:C.jsxs("span",{className:ee.label==="Relevant"?"text-emerald-400":ee.label==="Flagged"?"text-amber-400":"text-slate-400",children:["Currently: ",ee.label]})}),C.jsxs("div",{className:`w-full bg-slate-800 rounded-xl p-6 md:p-8 shadow-2xl border transition-all duration-200 flex flex-col gap-4 ${L==="Relevant"?"border-emerald-500/50 bg-emerald-900/20":L==="Irrelevant"?"border-red-500/50    bg-red-900/20":L==="Flagged"?"border-amber-500/50  bg-amber-900/20":"border-slate-700"}`,children:[C.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-700/50 pb-4",children:[C.jsx("div",{className:"w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0",children:C.jsx(Ih,{size:20,className:"text-slate-400"})}),C.jsxs("div",{className:"flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-300 font-mono",children:[ee.createdAt&&C.jsxs("span",{className:"flex items-center gap-1.5",children:[C.jsx(ES,{size:14,className:"text-slate-400"}),new Date(ee.createdAt).toLocaleString("en-ZA",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})]}),ee.location&&ee.location!=="Unknown"&&C.jsxs("span",{className:"flex items-center gap-1.5 truncate",children:[C.jsx(DS,{size:14,className:"text-slate-400"}),ee.location]}),ee.language&&ee.language!=="Unknown"&&C.jsxs("span",{className:"flex items-center gap-1.5 px-2 py-0.5 bg-slate-700/50 rounded-md border border-slate-600 text-slate-300",children:[C.jsx(RS,{size:12,className:"text-blue-400"}),ee.language]})]})]}),C.jsx("p",{className:"text-xl md:text-2xl leading-relaxed text-slate-100 font-medium whitespace-pre-wrap mt-2",children:ee.text}),C.jsxs("div",{className:"mt-4 text-xs text-slate-600 font-mono flex justify-between items-center",children:[C.jsxs("span",{children:["ID: ",ee.id]}),C.jsx("span",{className:"text-slate-700",children:ee.bucket})]})]}),g!=="Unannotated"&&E.length>1&&C.jsxs("div",{className:"flex justify-between mt-4 text-sm font-mono text-slate-500",children:[C.jsx("button",{disabled:f===0,onClick:()=>p(J=>J-1),className:"hover:text-slate-300 disabled:opacity-30",children:"← Previous"}),C.jsxs("span",{children:[f+1," of ",E.length]}),C.jsx("button",{disabled:f===E.length-1,onClick:()=>p(J=>J+1),className:"hover:text-slate-300 disabled:opacity-30",children:"Next →"})]})]}):C.jsxs("div",{className:"text-center text-slate-500 p-8 border border-dashed border-slate-700 rounded-xl w-full",children:[C.jsx(Ma,{size:48,className:"mx-auto mb-4 opacity-50"}),C.jsx("h2",{className:"text-xl font-medium text-slate-300",children:"Queue Empty"}),C.jsxs("p",{className:"mt-2 text-sm",children:['No tweets match the "',g,'" filter.']})]})}),ee&&C.jsx("div",{className:"fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950 via-slate-900 to-transparent pb-8 z-10",children:C.jsxs("div",{className:"max-w-3xl mx-auto flex gap-3",children:[C.jsxs("button",{onClick:()=>A("Irrelevant"),disabled:u,className:"flex-[2] flex flex-col items-center justify-center py-4 rounded-xl bg-red-900 hover:bg-red-800 active:bg-red-950 text-white transition-colors shadow-[0_0_15px_rgba(153,27,27,0.2)] border border-red-800 disabled:opacity-60",children:[C.jsx(mc,{className:"mb-1 opacity-90",size:24}),C.jsx("span",{className:"font-semibold tracking-wide",children:"Irrelevant"})]}),C.jsxs("button",{onClick:()=>A("Flagged"),disabled:u,className:"flex-1 flex flex-col items-center justify-center py-4 rounded-xl bg-amber-900/80 hover:bg-amber-800 active:bg-amber-950 text-amber-100 transition-colors border border-amber-700/50 disabled:opacity-60",children:[C.jsx(Km,{className:"mb-1 opacity-80 text-amber-400",size:20}),C.jsx("span",{className:"text-sm font-medium tracking-wide",children:"Flag"})]}),C.jsxs("button",{onClick:()=>A("Relevant"),disabled:u,className:"flex-[2] flex flex-col items-center justify-center py-4 rounded-xl bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-800 text-white transition-colors shadow-[0_0_15px_rgba(4,120,87,0.3)] border border-emerald-600 disabled:opacity-60",children:[C.jsx(Ma,{className:"mb-1 opacity-90",size:24}),C.jsx("span",{className:"font-semibold tracking-wide",children:"Relevant"})]})]})}),v&&C.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm",children:C.jsxs("div",{className:"bg-slate-800 rounded-xl max-w-lg w-full p-6 md:p-8 border border-slate-700 shadow-2xl max-h-[90vh] overflow-y-auto",children:[C.jsxs("h2",{className:"text-xl font-semibold text-slate-100 mb-4 flex items-center gap-2",children:[C.jsx(Gm,{className:"text-slate-400"})," Annotation Guidelines"]}),C.jsxs("div",{className:"space-y-6 text-sm text-slate-300",children:[C.jsxs("div",{className:"bg-slate-900/50 border border-slate-700 rounded-lg p-4",children:[C.jsx("h3",{className:"font-bold text-slate-200 mb-2",children:"Target TB Symptoms (Multilingual)"}),C.jsxs("p",{className:"text-xs text-slate-400 mb-3",children:['To be marked "Relevant," the tweet must mention at least one primary symptom in a personal context.',C.jsx("span",{className:"text-emerald-400 block mt-1",children:"Note: Past-tense reports are highly relevant!"})]}),C.jsx("ul",{className:"list-none space-y-2 text-xs",children:[["Coughing (Chronic/Blood)","ukukhwehlela / ndikhohlela / ho hohlola / ukukhwehlela igazi"],["Night Sweats","ukujuluka ebusuku / ukubila ebusuku / ho fufuleloa bosiu"],["Chest Pain & Breathlessness","isifuba sibuhlungu / sefuba se bohloko / ngiphelelwa umoya"],["Weight & Appetite Loss","ngiyancipha / ho fokotsehela / angifuni ukudla / ha ke rate ho ja"],["Fever & Fatigue","umkhuhlane / ifiva / feberu / ukukhathala / ngiphelelwa amandla"]].map(([J,U])=>C.jsxs("li",{className:"flex flex-col border-b border-slate-700/50 pb-2 last:border-0",children:[C.jsx("span",{className:"font-semibold text-slate-200",children:J}),C.jsx("span",{className:"text-slate-400",children:U})]},J))})]}),C.jsxs("div",{className:"bg-emerald-900/20 border border-emerald-800/50 rounded-lg p-4",children:[C.jsxs("h3",{className:"font-bold text-emerald-400 mb-2 flex items-center gap-2",children:[C.jsx(Ma,{size:16})," Relevant"]}),C.jsx("p",{className:"leading-relaxed",children:"First-person accounts expressing symptoms or direct personal concern. Includes colloquialisms and code-switching."})]}),C.jsxs("div",{className:"bg-red-900/20 border border-red-800/50 rounded-lg p-4",children:[C.jsxs("h3",{className:"font-bold text-red-400 mb-2 flex items-center gap-2",children:[C.jsx(mc,{size:16})," Irrelevant"]}),C.jsx("p",{className:"leading-relaxed",children:"News, commentary, jokes, metaphors, or general illness without specific TB context."})]}),C.jsxs("div",{className:"bg-amber-900/20 border border-amber-800/50 rounded-lg p-4",children:[C.jsxs("h3",{className:"font-bold text-amber-400 mb-2 flex items-center gap-2",children:[C.jsx(Km,{size:16})," Flag"]}),C.jsxs("p",{className:"leading-relaxed",children:["Use ",C.jsx("strong",{children:"only"}),' when you cannot understand the language/dialect well enough to make a safe clinical judgement. Pure noise is always "Irrelevant".']})]})]}),C.jsx("button",{onClick:()=>S(!1),className:"mt-8 w-full py-3 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg font-medium transition-colors border border-slate-600",children:"Resume Annotation"})]})})]}):C.jsx(Pc,{label:"Loading your role…"}):C.jsx(Wx,{})}function Wx(){const[t,e]=ie.useState(null),n=async()=>{try{await GP(Ga,Bx)}catch(r){e(r.message)}};return C.jsx("div",{className:"min-h-screen bg-slate-900 flex items-center justify-center p-4",children:C.jsxs("div",{className:"bg-slate-800 border border-slate-700 rounded-2xl p-10 max-w-sm w-full text-center shadow-2xl",children:[C.jsx("div",{className:"w-14 h-14 rounded-full bg-emerald-700/20 border border-emerald-700/40 flex items-center justify-center mx-auto mb-6",children:C.jsx(Ma,{size:28,className:"text-emerald-400"})}),C.jsx("h1",{className:"text-2xl font-semibold text-slate-100 mb-2",children:"TB Discourse Classifier"}),C.jsx("p",{className:"text-sm text-slate-400 mb-8",children:"Sign in with your institutional Google account to access your annotation queue."}),C.jsxs("button",{onClick:n,className:"w-full flex items-center justify-center gap-3 px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 rounded-lg font-medium transition-colors shadow-md",children:[C.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",children:[C.jsx("path",{fill:"#4285F4",d:"M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"}),C.jsx("path",{fill:"#34A853",d:"M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"}),C.jsx("path",{fill:"#FBBC05",d:"M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z"}),C.jsx("path",{fill:"#EA4335",d:"M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.962L3.964 6.294C4.672 4.167 6.656 3.58 9 3.58z"})]}),"Sign in with Google"]}),t&&C.jsx("p",{className:"mt-4 text-xs text-red-400",children:t})]})})}xc.createRoot(document.getElementById("root")).render(C.jsx(ZE.StrictMode,{children:C.jsx(qx,{})}));
