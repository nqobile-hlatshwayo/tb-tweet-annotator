(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function QE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var My={exports:{}},Gl={},Fy={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vo=Symbol.for("react.element"),YE=Symbol.for("react.portal"),XE=Symbol.for("react.fragment"),JE=Symbol.for("react.strict_mode"),ZE=Symbol.for("react.profiler"),eT=Symbol.for("react.provider"),tT=Symbol.for("react.context"),nT=Symbol.for("react.forward_ref"),rT=Symbol.for("react.suspense"),sT=Symbol.for("react.memo"),iT=Symbol.for("react.lazy"),Gp=Symbol.iterator;function oT(t){return t===null||typeof t!="object"?null:(t=Gp&&t[Gp]||t["@@iterator"],typeof t=="function"?t:null)}var jy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Uy=Object.assign,zy={};function ri(t,e,n){this.props=t,this.context=e,this.refs=zy,this.updater=n||jy}ri.prototype.isReactComponent={};ri.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ri.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $y(){}$y.prototype=ri.prototype;function sd(t,e,n){this.props=t,this.context=e,this.refs=zy,this.updater=n||jy}var id=sd.prototype=new $y;id.constructor=sd;Uy(id,ri.prototype);id.isPureReactComponent=!0;var Qp=Array.isArray,By=Object.prototype.hasOwnProperty,od={current:null},Hy={key:!0,ref:!0,__self:!0,__source:!0};function qy(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)By.call(e,r)&&!Hy.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Vo,type:t,key:i,ref:o,props:s,_owner:od.current}}function aT(t,e){return{$$typeof:Vo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ad(t){return typeof t=="object"&&t!==null&&t.$$typeof===Vo}function lT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Yp=/\/+/g;function Yu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?lT(""+t.key):e.toString(36)}function Oa(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Vo:case YE:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Yu(o,0):r,Qp(s)?(n="",t!=null&&(n=t.replace(Yp,"$&/")+"/"),Oa(s,e,n,"",function(h){return h})):s!=null&&(ad(s)&&(s=aT(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Yp,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Qp(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+Yu(i,l);o+=Oa(i,e,n,u,s)}else if(u=oT(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+Yu(i,l++),o+=Oa(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function da(t,e,n){if(t==null)return t;var r=[],s=0;return Oa(t,r,"","",function(i){return e.call(n,i,s++)}),r}function uT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mt={current:null},La={transition:null},cT={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:La,ReactCurrentOwner:od};function Wy(){throw Error("act(...) is not supported in production builds of React.")}le.Children={map:da,forEach:function(t,e,n){da(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return da(t,function(){e++}),e},toArray:function(t){return da(t,function(e){return e})||[]},only:function(t){if(!ad(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};le.Component=ri;le.Fragment=XE;le.Profiler=ZE;le.PureComponent=sd;le.StrictMode=JE;le.Suspense=rT;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cT;le.act=Wy;le.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Uy({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=od.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)By.call(e,u)&&!Hy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Vo,type:t.type,key:s,ref:i,props:r,_owner:o}};le.createContext=function(t){return t={$$typeof:tT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:eT,_context:t},t.Consumer=t};le.createElement=qy;le.createFactory=function(t){var e=qy.bind(null,t);return e.type=t,e};le.createRef=function(){return{current:null}};le.forwardRef=function(t){return{$$typeof:nT,render:t}};le.isValidElement=ad;le.lazy=function(t){return{$$typeof:iT,_payload:{_status:-1,_result:t},_init:uT}};le.memo=function(t,e){return{$$typeof:sT,type:t,compare:e===void 0?null:e}};le.startTransition=function(t){var e=La.transition;La.transition={};try{t()}finally{La.transition=e}};le.unstable_act=Wy;le.useCallback=function(t,e){return mt.current.useCallback(t,e)};le.useContext=function(t){return mt.current.useContext(t)};le.useDebugValue=function(){};le.useDeferredValue=function(t){return mt.current.useDeferredValue(t)};le.useEffect=function(t,e){return mt.current.useEffect(t,e)};le.useId=function(){return mt.current.useId()};le.useImperativeHandle=function(t,e,n){return mt.current.useImperativeHandle(t,e,n)};le.useInsertionEffect=function(t,e){return mt.current.useInsertionEffect(t,e)};le.useLayoutEffect=function(t,e){return mt.current.useLayoutEffect(t,e)};le.useMemo=function(t,e){return mt.current.useMemo(t,e)};le.useReducer=function(t,e,n){return mt.current.useReducer(t,e,n)};le.useRef=function(t){return mt.current.useRef(t)};le.useState=function(t){return mt.current.useState(t)};le.useSyncExternalStore=function(t,e,n){return mt.current.useSyncExternalStore(t,e,n)};le.useTransition=function(){return mt.current.useTransition()};le.version="18.3.1";Fy.exports=le;var J=Fy.exports;const hT=QE(J);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dT=J,fT=Symbol.for("react.element"),pT=Symbol.for("react.fragment"),mT=Object.prototype.hasOwnProperty,gT=dT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yT={key:!0,ref:!0,__self:!0,__source:!0};function Ky(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)mT.call(e,r)&&!yT.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:fT,type:t,key:i,ref:o,props:s,_owner:gT.current}}Gl.Fragment=pT;Gl.jsx=Ky;Gl.jsxs=Ky;My.exports=Gl;var v=My.exports,jc={},Gy={exports:{}},Nt={},Qy={exports:{}},Yy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,U){var H=F.length;F.push(U);e:for(;0<H;){var X=H-1>>>1,ie=F[X];if(0<s(ie,U))F[X]=U,F[H]=ie,H=X;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var U=F[0],H=F.pop();if(H!==U){F[0]=H;e:for(var X=0,ie=F.length,se=ie>>>1;X<se;){var Ce=2*(X+1)-1,Me=F[Ce],Fe=Ce+1,St=F[Fe];if(0>s(Me,H))Fe<ie&&0>s(St,Me)?(F[X]=St,F[Fe]=H,X=Fe):(F[X]=Me,F[Ce]=H,X=Ce);else if(Fe<ie&&0>s(St,H))F[X]=St,F[Fe]=H,X=Fe;else break e}}return U}function s(F,U){var H=F.sortIndex-U.sortIndex;return H!==0?H:F.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,m=3,x=!1,C=!1,N=!1,L=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(F){for(var U=n(h);U!==null;){if(U.callback===null)r(h);else if(U.startTime<=F)r(h),U.sortIndex=U.expirationTime,e(u,U);else break;U=n(h)}}function D(F){if(N=!1,R(F),!C)if(n(u)!==null)C=!0,W(V);else{var U=n(h);U!==null&&ue(D,U.startTime-F)}}function V(F,U){C=!1,N&&(N=!1,S(y),y=-1),x=!0;var H=m;try{for(R(U),p=n(u);p!==null&&(!(p.expirationTime>U)||F&&!A());){var X=p.callback;if(typeof X=="function"){p.callback=null,m=p.priorityLevel;var ie=X(p.expirationTime<=U);U=t.unstable_now(),typeof ie=="function"?p.callback=ie:p===n(u)&&r(u),R(U)}else r(u);p=n(u)}if(p!==null)var se=!0;else{var Ce=n(h);Ce!==null&&ue(D,Ce.startTime-U),se=!1}return se}finally{p=null,m=H,x=!1}}var j=!1,_=null,y=-1,E=5,I=-1;function A(){return!(t.unstable_now()-I<E)}function k(){if(_!==null){var F=t.unstable_now();I=F;var U=!0;try{U=_(!0,F)}finally{U?T():(j=!1,_=null)}}else j=!1}var T;if(typeof w=="function")T=function(){w(k)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,Y=$.port2;$.port1.onmessage=k,T=function(){Y.postMessage(null)}}else T=function(){L(k,0)};function W(F){_=F,j||(j=!0,T())}function ue(F,U){y=L(function(){F(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){C||x||(C=!0,W(V))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(F){switch(m){case 1:case 2:case 3:var U=3;break;default:U=m}var H=m;m=U;try{return F()}finally{m=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,U){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var H=m;m=F;try{return U()}finally{m=H}},t.unstable_scheduleCallback=function(F,U,H){var X=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?X+H:X):H=X,F){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=H+ie,F={id:f++,callback:U,priorityLevel:F,startTime:H,expirationTime:ie,sortIndex:-1},H>X?(F.sortIndex=H,e(h,F),n(u)===null&&F===n(h)&&(N?(S(y),y=-1):N=!0,ue(D,H-X))):(F.sortIndex=ie,e(u,F),C||x||(C=!0,W(V))),F},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(F){var U=m;return function(){var H=m;m=U;try{return F.apply(this,arguments)}finally{m=H}}}})(Yy);Qy.exports=Yy;var _T=Qy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vT=J,Pt=_T;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xy=new Set,ao={};function is(t,e){Bs(t,e),Bs(t+"Capture",e)}function Bs(t,e){for(ao[t]=e,t=0;t<e.length;t++)Xy.add(e[t])}var kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uc=Object.prototype.hasOwnProperty,wT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xp={},Jp={};function ET(t){return Uc.call(Jp,t)?!0:Uc.call(Xp,t)?!1:wT.test(t)?Jp[t]=!0:(Xp[t]=!0,!1)}function TT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function IT(t,e,n,r){if(e===null||typeof e>"u"||TT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ze[t]=new gt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ze[e]=new gt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ze[t]=new gt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ze[t]=new gt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ze[t]=new gt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ze[t]=new gt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ze[t]=new gt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ze[t]=new gt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ze[t]=new gt(t,5,!1,t.toLowerCase(),null,!1,!1)});var ld=/[\-:]([a-z])/g;function ud(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ld,ud);Ze[e]=new gt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ld,ud);Ze[e]=new gt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ld,ud);Ze[e]=new gt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ze[t]=new gt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ze[t]=new gt(t,1,!1,t.toLowerCase(),null,!0,!0)});function cd(t,e,n,r){var s=Ze.hasOwnProperty(e)?Ze[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(IT(e,n,s,r)&&(n=null),r||s===null?ET(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ln=vT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fa=Symbol.for("react.element"),_s=Symbol.for("react.portal"),vs=Symbol.for("react.fragment"),hd=Symbol.for("react.strict_mode"),zc=Symbol.for("react.profiler"),Jy=Symbol.for("react.provider"),Zy=Symbol.for("react.context"),dd=Symbol.for("react.forward_ref"),$c=Symbol.for("react.suspense"),Bc=Symbol.for("react.suspense_list"),fd=Symbol.for("react.memo"),Wn=Symbol.for("react.lazy"),e_=Symbol.for("react.offscreen"),Zp=Symbol.iterator;function ki(t){return t===null||typeof t!="object"?null:(t=Zp&&t[Zp]||t["@@iterator"],typeof t=="function"?t:null)}var xe=Object.assign,Xu;function Mi(t){if(Xu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xu=e&&e[1]||""}return`
`+Xu+t}var Ju=!1;function Zu(t,e){if(!t||Ju)return"";Ju=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Ju=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Mi(t):""}function ST(t){switch(t.tag){case 5:return Mi(t.type);case 16:return Mi("Lazy");case 13:return Mi("Suspense");case 19:return Mi("SuspenseList");case 0:case 2:case 15:return t=Zu(t.type,!1),t;case 11:return t=Zu(t.type.render,!1),t;case 1:return t=Zu(t.type,!0),t;default:return""}}function Hc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vs:return"Fragment";case _s:return"Portal";case zc:return"Profiler";case hd:return"StrictMode";case $c:return"Suspense";case Bc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Zy:return(t.displayName||"Context")+".Consumer";case Jy:return(t._context.displayName||"Context")+".Provider";case dd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fd:return e=t.displayName||null,e!==null?e:Hc(t.type)||"Memo";case Wn:e=t._payload,t=t._init;try{return Hc(t(e))}catch{}}return null}function AT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hc(e);case 8:return e===hd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function t_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xT(t){var e=t_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function pa(t){t._valueTracker||(t._valueTracker=xT(t))}function n_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=t_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function rl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qc(t,e){var n=e.checked;return xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function em(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function r_(t,e){e=e.checked,e!=null&&cd(t,"checked",e,!1)}function Wc(t,e){r_(t,e);var n=gr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Kc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Kc(t,e.type,gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function tm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Kc(t,e,n){(e!=="number"||rl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Fi=Array.isArray;function bs(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+gr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Gc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function nm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(Fi(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gr(n)}}function s_(t,e){var n=gr(e.value),r=gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function rm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function i_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?i_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ma,o_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ma=ma||document.createElement("div"),ma.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ma.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function lo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Wi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},RT=["Webkit","ms","Moz","O"];Object.keys(Wi).forEach(function(t){RT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Wi[e]=Wi[t]})});function a_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Wi.hasOwnProperty(t)&&Wi[t]?(""+e).trim():e+"px"}function l_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=a_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var kT=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yc(t,e){if(e){if(kT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function Xc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jc=null;function pd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zc=null,Ds=null,Vs=null;function sm(t){if(t=Mo(t)){if(typeof Zc!="function")throw Error(z(280));var e=t.stateNode;e&&(e=Zl(e),Zc(t.stateNode,t.type,e))}}function u_(t){Ds?Vs?Vs.push(t):Vs=[t]:Ds=t}function c_(){if(Ds){var t=Ds,e=Vs;if(Vs=Ds=null,sm(t),e)for(t=0;t<e.length;t++)sm(e[t])}}function h_(t,e){return t(e)}function d_(){}var ec=!1;function f_(t,e,n){if(ec)return t(e,n);ec=!0;try{return h_(t,e,n)}finally{ec=!1,(Ds!==null||Vs!==null)&&(d_(),c_())}}function uo(t,e){var n=t.stateNode;if(n===null)return null;var r=Zl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var eh=!1;if(kn)try{var Ci={};Object.defineProperty(Ci,"passive",{get:function(){eh=!0}}),window.addEventListener("test",Ci,Ci),window.removeEventListener("test",Ci,Ci)}catch{eh=!1}function CT(t,e,n,r,s,i,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Ki=!1,sl=null,il=!1,th=null,PT={onError:function(t){Ki=!0,sl=t}};function NT(t,e,n,r,s,i,o,l,u){Ki=!1,sl=null,CT.apply(PT,arguments)}function bT(t,e,n,r,s,i,o,l,u){if(NT.apply(this,arguments),Ki){if(Ki){var h=sl;Ki=!1,sl=null}else throw Error(z(198));il||(il=!0,th=h)}}function os(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function p_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function im(t){if(os(t)!==t)throw Error(z(188))}function DT(t){var e=t.alternate;if(!e){if(e=os(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return im(s),t;if(i===r)return im(s),e;i=i.sibling}throw Error(z(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function m_(t){return t=DT(t),t!==null?g_(t):null}function g_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=g_(t);if(e!==null)return e;t=t.sibling}return null}var y_=Pt.unstable_scheduleCallback,om=Pt.unstable_cancelCallback,VT=Pt.unstable_shouldYield,OT=Pt.unstable_requestPaint,Ne=Pt.unstable_now,LT=Pt.unstable_getCurrentPriorityLevel,md=Pt.unstable_ImmediatePriority,__=Pt.unstable_UserBlockingPriority,ol=Pt.unstable_NormalPriority,MT=Pt.unstable_LowPriority,v_=Pt.unstable_IdlePriority,Ql=null,an=null;function FT(t){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(Ql,t,void 0,(t.current.flags&128)===128)}catch{}}var Kt=Math.clz32?Math.clz32:zT,jT=Math.log,UT=Math.LN2;function zT(t){return t>>>=0,t===0?32:31-(jT(t)/UT|0)|0}var ga=64,ya=4194304;function ji(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function al(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=ji(l):(i&=o,i!==0&&(r=ji(i)))}else o=n&~s,o!==0?r=ji(o):i!==0&&(r=ji(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Kt(e),s=1<<n,r|=t[n],e&=~s;return r}function $T(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function BT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Kt(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=$T(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function nh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function w_(){var t=ga;return ga<<=1,!(ga&4194240)&&(ga=64),t}function tc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Oo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kt(e),t[e]=n}function HT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Kt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function gd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Kt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var pe=0;function E_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var T_,yd,I_,S_,A_,rh=!1,_a=[],rr=null,sr=null,ir=null,co=new Map,ho=new Map,Gn=[],qT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function am(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":co.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(e.pointerId)}}function Pi(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Mo(e),e!==null&&yd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function WT(t,e,n,r,s){switch(e){case"focusin":return rr=Pi(rr,t,e,n,r,s),!0;case"dragenter":return sr=Pi(sr,t,e,n,r,s),!0;case"mouseover":return ir=Pi(ir,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return co.set(i,Pi(co.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,ho.set(i,Pi(ho.get(i)||null,t,e,n,r,s)),!0}return!1}function x_(t){var e=Fr(t.target);if(e!==null){var n=os(e);if(n!==null){if(e=n.tag,e===13){if(e=p_(n),e!==null){t.blockedOn=e,A_(t.priority,function(){I_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ma(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=sh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Jc=r,n.target.dispatchEvent(r),Jc=null}else return e=Mo(n),e!==null&&yd(e),t.blockedOn=n,!1;e.shift()}return!0}function lm(t,e,n){Ma(t)&&n.delete(e)}function KT(){rh=!1,rr!==null&&Ma(rr)&&(rr=null),sr!==null&&Ma(sr)&&(sr=null),ir!==null&&Ma(ir)&&(ir=null),co.forEach(lm),ho.forEach(lm)}function Ni(t,e){t.blockedOn===e&&(t.blockedOn=null,rh||(rh=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,KT)))}function fo(t){function e(s){return Ni(s,t)}if(0<_a.length){Ni(_a[0],t);for(var n=1;n<_a.length;n++){var r=_a[n];r.blockedOn===t&&(r.blockedOn=null)}}for(rr!==null&&Ni(rr,t),sr!==null&&Ni(sr,t),ir!==null&&Ni(ir,t),co.forEach(e),ho.forEach(e),n=0;n<Gn.length;n++)r=Gn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Gn.length&&(n=Gn[0],n.blockedOn===null);)x_(n),n.blockedOn===null&&Gn.shift()}var Os=Ln.ReactCurrentBatchConfig,ll=!0;function GT(t,e,n,r){var s=pe,i=Os.transition;Os.transition=null;try{pe=1,_d(t,e,n,r)}finally{pe=s,Os.transition=i}}function QT(t,e,n,r){var s=pe,i=Os.transition;Os.transition=null;try{pe=4,_d(t,e,n,r)}finally{pe=s,Os.transition=i}}function _d(t,e,n,r){if(ll){var s=sh(t,e,n,r);if(s===null)hc(t,e,r,ul,n),am(t,r);else if(WT(s,t,e,n,r))r.stopPropagation();else if(am(t,r),e&4&&-1<qT.indexOf(t)){for(;s!==null;){var i=Mo(s);if(i!==null&&T_(i),i=sh(t,e,n,r),i===null&&hc(t,e,r,ul,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else hc(t,e,r,null,n)}}var ul=null;function sh(t,e,n,r){if(ul=null,t=pd(r),t=Fr(t),t!==null)if(e=os(t),e===null)t=null;else if(n=e.tag,n===13){if(t=p_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ul=t,null}function R_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(LT()){case md:return 1;case __:return 4;case ol:case MT:return 16;case v_:return 536870912;default:return 16}default:return 16}}var Zn=null,vd=null,Fa=null;function k_(){if(Fa)return Fa;var t,e=vd,n=e.length,r,s="value"in Zn?Zn.value:Zn.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Fa=s.slice(t,1<r?1-r:void 0)}function ja(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function va(){return!0}function um(){return!1}function bt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?va:um,this.isPropagationStopped=um,this}return xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=va)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=va)},persist:function(){},isPersistent:va}),e}var si={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wd=bt(si),Lo=xe({},si,{view:0,detail:0}),YT=bt(Lo),nc,rc,bi,Yl=xe({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ed,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bi&&(bi&&t.type==="mousemove"?(nc=t.screenX-bi.screenX,rc=t.screenY-bi.screenY):rc=nc=0,bi=t),nc)},movementY:function(t){return"movementY"in t?t.movementY:rc}}),cm=bt(Yl),XT=xe({},Yl,{dataTransfer:0}),JT=bt(XT),ZT=xe({},Lo,{relatedTarget:0}),sc=bt(ZT),eI=xe({},si,{animationName:0,elapsedTime:0,pseudoElement:0}),tI=bt(eI),nI=xe({},si,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rI=bt(nI),sI=xe({},si,{data:0}),hm=bt(sI),iI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=aI[t])?!!e[t]:!1}function Ed(){return lI}var uI=xe({},Lo,{key:function(t){if(t.key){var e=iI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ja(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?oI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ed,charCode:function(t){return t.type==="keypress"?ja(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ja(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cI=bt(uI),hI=xe({},Yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dm=bt(hI),dI=xe({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ed}),fI=bt(dI),pI=xe({},si,{propertyName:0,elapsedTime:0,pseudoElement:0}),mI=bt(pI),gI=xe({},Yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yI=bt(gI),_I=[9,13,27,32],Td=kn&&"CompositionEvent"in window,Gi=null;kn&&"documentMode"in document&&(Gi=document.documentMode);var vI=kn&&"TextEvent"in window&&!Gi,C_=kn&&(!Td||Gi&&8<Gi&&11>=Gi),fm=" ",pm=!1;function P_(t,e){switch(t){case"keyup":return _I.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function N_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ws=!1;function wI(t,e){switch(t){case"compositionend":return N_(e);case"keypress":return e.which!==32?null:(pm=!0,fm);case"textInput":return t=e.data,t===fm&&pm?null:t;default:return null}}function EI(t,e){if(ws)return t==="compositionend"||!Td&&P_(t,e)?(t=k_(),Fa=vd=Zn=null,ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return C_&&e.locale!=="ko"?null:e.data;default:return null}}var TI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!TI[t.type]:e==="textarea"}function b_(t,e,n,r){u_(r),e=cl(e,"onChange"),0<e.length&&(n=new wd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Qi=null,po=null;function II(t){B_(t,0)}function Xl(t){var e=Is(t);if(n_(e))return t}function SI(t,e){if(t==="change")return e}var D_=!1;if(kn){var ic;if(kn){var oc="oninput"in document;if(!oc){var gm=document.createElement("div");gm.setAttribute("oninput","return;"),oc=typeof gm.oninput=="function"}ic=oc}else ic=!1;D_=ic&&(!document.documentMode||9<document.documentMode)}function ym(){Qi&&(Qi.detachEvent("onpropertychange",V_),po=Qi=null)}function V_(t){if(t.propertyName==="value"&&Xl(po)){var e=[];b_(e,po,t,pd(t)),f_(II,e)}}function AI(t,e,n){t==="focusin"?(ym(),Qi=e,po=n,Qi.attachEvent("onpropertychange",V_)):t==="focusout"&&ym()}function xI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xl(po)}function RI(t,e){if(t==="click")return Xl(e)}function kI(t,e){if(t==="input"||t==="change")return Xl(e)}function CI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jt=typeof Object.is=="function"?Object.is:CI;function mo(t,e){if(Jt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Uc.call(e,s)||!Jt(t[s],e[s]))return!1}return!0}function _m(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vm(t,e){var n=_m(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_m(n)}}function O_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?O_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function L_(){for(var t=window,e=rl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=rl(t.document)}return e}function Id(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function PI(t){var e=L_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&O_(n.ownerDocument.documentElement,n)){if(r!==null&&Id(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=vm(n,i);var o=vm(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var NI=kn&&"documentMode"in document&&11>=document.documentMode,Es=null,ih=null,Yi=null,oh=!1;function wm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oh||Es==null||Es!==rl(r)||(r=Es,"selectionStart"in r&&Id(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yi&&mo(Yi,r)||(Yi=r,r=cl(ih,"onSelect"),0<r.length&&(e=new wd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Es)))}function wa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ts={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionend:wa("Transition","TransitionEnd")},ac={},M_={};kn&&(M_=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function Jl(t){if(ac[t])return ac[t];if(!Ts[t])return t;var e=Ts[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in M_)return ac[t]=e[n];return t}var F_=Jl("animationend"),j_=Jl("animationiteration"),U_=Jl("animationstart"),z_=Jl("transitionend"),$_=new Map,Em="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){$_.set(t,e),is(e,[t])}for(var lc=0;lc<Em.length;lc++){var uc=Em[lc],bI=uc.toLowerCase(),DI=uc[0].toUpperCase()+uc.slice(1);Ar(bI,"on"+DI)}Ar(F_,"onAnimationEnd");Ar(j_,"onAnimationIteration");Ar(U_,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(z_,"onTransitionEnd");Bs("onMouseEnter",["mouseout","mouseover"]);Bs("onMouseLeave",["mouseout","mouseover"]);Bs("onPointerEnter",["pointerout","pointerover"]);Bs("onPointerLeave",["pointerout","pointerover"]);is("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));is("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));is("onBeforeInput",["compositionend","keypress","textInput","paste"]);is("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));is("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));is("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ui));function Tm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,bT(r,e,void 0,t),t.currentTarget=null}function B_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Tm(s,l,h),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Tm(s,l,h),i=u}}}if(il)throw t=th,il=!1,th=null,t}function ve(t,e){var n=e[hh];n===void 0&&(n=e[hh]=new Set);var r=t+"__bubble";n.has(r)||(H_(e,t,2,!1),n.add(r))}function cc(t,e,n){var r=0;e&&(r|=4),H_(n,t,r,e)}var Ea="_reactListening"+Math.random().toString(36).slice(2);function go(t){if(!t[Ea]){t[Ea]=!0,Xy.forEach(function(n){n!=="selectionchange"&&(VI.has(n)||cc(n,!1,t),cc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ea]||(e[Ea]=!0,cc("selectionchange",!1,e))}}function H_(t,e,n,r){switch(R_(e)){case 1:var s=GT;break;case 4:s=QT;break;default:s=_d}n=s.bind(null,e,n,t),s=void 0,!eh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function hc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Fr(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}f_(function(){var h=i,f=pd(n),p=[];e:{var m=$_.get(t);if(m!==void 0){var x=wd,C=t;switch(t){case"keypress":if(ja(n)===0)break e;case"keydown":case"keyup":x=cI;break;case"focusin":C="focus",x=sc;break;case"focusout":C="blur",x=sc;break;case"beforeblur":case"afterblur":x=sc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=JT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=fI;break;case F_:case j_:case U_:x=tI;break;case z_:x=mI;break;case"scroll":x=YT;break;case"wheel":x=yI;break;case"copy":case"cut":case"paste":x=rI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=dm}var N=(e&4)!==0,L=!N&&t==="scroll",S=N?m!==null?m+"Capture":null:m;N=[];for(var w=h,R;w!==null;){R=w;var D=R.stateNode;if(R.tag===5&&D!==null&&(R=D,S!==null&&(D=uo(w,S),D!=null&&N.push(yo(w,D,R)))),L)break;w=w.return}0<N.length&&(m=new x(m,C,null,n,f),p.push({event:m,listeners:N}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",m&&n!==Jc&&(C=n.relatedTarget||n.fromElement)&&(Fr(C)||C[Cn]))break e;if((x||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,x?(C=n.relatedTarget||n.toElement,x=h,C=C?Fr(C):null,C!==null&&(L=os(C),C!==L||C.tag!==5&&C.tag!==6)&&(C=null)):(x=null,C=h),x!==C)){if(N=cm,D="onMouseLeave",S="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(N=dm,D="onPointerLeave",S="onPointerEnter",w="pointer"),L=x==null?m:Is(x),R=C==null?m:Is(C),m=new N(D,w+"leave",x,n,f),m.target=L,m.relatedTarget=R,D=null,Fr(f)===h&&(N=new N(S,w+"enter",C,n,f),N.target=R,N.relatedTarget=L,D=N),L=D,x&&C)t:{for(N=x,S=C,w=0,R=N;R;R=fs(R))w++;for(R=0,D=S;D;D=fs(D))R++;for(;0<w-R;)N=fs(N),w--;for(;0<R-w;)S=fs(S),R--;for(;w--;){if(N===S||S!==null&&N===S.alternate)break t;N=fs(N),S=fs(S)}N=null}else N=null;x!==null&&Im(p,m,x,N,!1),C!==null&&L!==null&&Im(p,L,C,N,!0)}}e:{if(m=h?Is(h):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var V=SI;else if(mm(m))if(D_)V=kI;else{V=xI;var j=AI}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(V=RI);if(V&&(V=V(t,h))){b_(p,V,n,f);break e}j&&j(t,m,h),t==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&Kc(m,"number",m.value)}switch(j=h?Is(h):window,t){case"focusin":(mm(j)||j.contentEditable==="true")&&(Es=j,ih=h,Yi=null);break;case"focusout":Yi=ih=Es=null;break;case"mousedown":oh=!0;break;case"contextmenu":case"mouseup":case"dragend":oh=!1,wm(p,n,f);break;case"selectionchange":if(NI)break;case"keydown":case"keyup":wm(p,n,f)}var _;if(Td)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ws?P_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(C_&&n.locale!=="ko"&&(ws||y!=="onCompositionStart"?y==="onCompositionEnd"&&ws&&(_=k_()):(Zn=f,vd="value"in Zn?Zn.value:Zn.textContent,ws=!0)),j=cl(h,y),0<j.length&&(y=new hm(y,t,null,n,f),p.push({event:y,listeners:j}),_?y.data=_:(_=N_(n),_!==null&&(y.data=_)))),(_=vI?wI(t,n):EI(t,n))&&(h=cl(h,"onBeforeInput"),0<h.length&&(f=new hm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=_))}B_(p,e)})}function yo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function cl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=uo(t,n),i!=null&&r.unshift(yo(t,i,s)),i=uo(t,e),i!=null&&r.push(yo(t,i,s))),t=t.return}return r}function fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Im(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,s?(u=uo(n,i),u!=null&&o.unshift(yo(n,u,l))):s||(u=uo(n,i),u!=null&&o.push(yo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var OI=/\r\n?/g,LI=/\u0000|\uFFFD/g;function Sm(t){return(typeof t=="string"?t:""+t).replace(OI,`
`).replace(LI,"")}function Ta(t,e,n){if(e=Sm(e),Sm(t)!==e&&n)throw Error(z(425))}function hl(){}var ah=null,lh=null;function uh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ch=typeof setTimeout=="function"?setTimeout:void 0,MI=typeof clearTimeout=="function"?clearTimeout:void 0,Am=typeof Promise=="function"?Promise:void 0,FI=typeof queueMicrotask=="function"?queueMicrotask:typeof Am<"u"?function(t){return Am.resolve(null).then(t).catch(jI)}:ch;function jI(t){setTimeout(function(){throw t})}function dc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),fo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);fo(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function xm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ii=Math.random().toString(36).slice(2),on="__reactFiber$"+ii,_o="__reactProps$"+ii,Cn="__reactContainer$"+ii,hh="__reactEvents$"+ii,UI="__reactListeners$"+ii,zI="__reactHandles$"+ii;function Fr(t){var e=t[on];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Cn]||n[on]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=xm(t);t!==null;){if(n=t[on])return n;t=xm(t)}return e}t=n,n=t.parentNode}return null}function Mo(t){return t=t[on]||t[Cn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function Zl(t){return t[_o]||null}var dh=[],Ss=-1;function xr(t){return{current:t}}function Ee(t){0>Ss||(t.current=dh[Ss],dh[Ss]=null,Ss--)}function ye(t,e){Ss++,dh[Ss]=t.current,t.current=e}var yr={},lt=xr(yr),Et=xr(!1),Gr=yr;function Hs(t,e){var n=t.type.contextTypes;if(!n)return yr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Tt(t){return t=t.childContextTypes,t!=null}function dl(){Ee(Et),Ee(lt)}function Rm(t,e,n){if(lt.current!==yr)throw Error(z(168));ye(lt,e),ye(Et,n)}function q_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(z(108,AT(t)||"Unknown",s));return xe({},n,r)}function fl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yr,Gr=lt.current,ye(lt,t),ye(Et,Et.current),!0}function km(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=q_(t,e,Gr),r.__reactInternalMemoizedMergedChildContext=t,Ee(Et),Ee(lt),ye(lt,t)):Ee(Et),ye(Et,n)}var _n=null,eu=!1,fc=!1;function W_(t){_n===null?_n=[t]:_n.push(t)}function $I(t){eu=!0,W_(t)}function Rr(){if(!fc&&_n!==null){fc=!0;var t=0,e=pe;try{var n=_n;for(pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}_n=null,eu=!1}catch(s){throw _n!==null&&(_n=_n.slice(t+1)),y_(md,Rr),s}finally{pe=e,fc=!1}}return null}var As=[],xs=0,pl=null,ml=0,Dt=[],Vt=0,Qr=null,wn=1,En="";function Or(t,e){As[xs++]=ml,As[xs++]=pl,pl=t,ml=e}function K_(t,e,n){Dt[Vt++]=wn,Dt[Vt++]=En,Dt[Vt++]=Qr,Qr=t;var r=wn;t=En;var s=32-Kt(r)-1;r&=~(1<<s),n+=1;var i=32-Kt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,wn=1<<32-Kt(e)+s|n<<s|r,En=i+t}else wn=1<<i|n<<s|r,En=t}function Sd(t){t.return!==null&&(Or(t,1),K_(t,1,0))}function Ad(t){for(;t===pl;)pl=As[--xs],As[xs]=null,ml=As[--xs],As[xs]=null;for(;t===Qr;)Qr=Dt[--Vt],Dt[Vt]=null,En=Dt[--Vt],Dt[Vt]=null,wn=Dt[--Vt],Dt[Vt]=null}var Ct=null,Rt=null,Te=!1,Ht=null;function G_(t,e){var n=Lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Cm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ct=t,Rt=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ct=t,Rt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qr!==null?{id:wn,overflow:En}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ct=t,Rt=null,!0):!1;default:return!1}}function fh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ph(t){if(Te){var e=Rt;if(e){var n=e;if(!Cm(t,e)){if(fh(t))throw Error(z(418));e=or(n.nextSibling);var r=Ct;e&&Cm(t,e)?G_(r,n):(t.flags=t.flags&-4097|2,Te=!1,Ct=t)}}else{if(fh(t))throw Error(z(418));t.flags=t.flags&-4097|2,Te=!1,Ct=t}}}function Pm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ct=t}function Ia(t){if(t!==Ct)return!1;if(!Te)return Pm(t),Te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uh(t.type,t.memoizedProps)),e&&(e=Rt)){if(fh(t))throw Q_(),Error(z(418));for(;e;)G_(t,e),e=or(e.nextSibling)}if(Pm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rt=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rt=null}}else Rt=Ct?or(t.stateNode.nextSibling):null;return!0}function Q_(){for(var t=Rt;t;)t=or(t.nextSibling)}function qs(){Rt=Ct=null,Te=!1}function xd(t){Ht===null?Ht=[t]:Ht.push(t)}var BI=Ln.ReactCurrentBatchConfig;function Di(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function Sa(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Nm(t){var e=t._init;return e(t._payload)}function Y_(t){function e(S,w){if(t){var R=S.deletions;R===null?(S.deletions=[w],S.flags|=16):R.push(w)}}function n(S,w){if(!t)return null;for(;w!==null;)e(S,w),w=w.sibling;return null}function r(S,w){for(S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function s(S,w){return S=cr(S,w),S.index=0,S.sibling=null,S}function i(S,w,R){return S.index=R,t?(R=S.alternate,R!==null?(R=R.index,R<w?(S.flags|=2,w):R):(S.flags|=2,w)):(S.flags|=1048576,w)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,w,R,D){return w===null||w.tag!==6?(w=wc(R,S.mode,D),w.return=S,w):(w=s(w,R),w.return=S,w)}function u(S,w,R,D){var V=R.type;return V===vs?f(S,w,R.props.children,D,R.key):w!==null&&(w.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Wn&&Nm(V)===w.type)?(D=s(w,R.props),D.ref=Di(S,w,R),D.return=S,D):(D=Wa(R.type,R.key,R.props,null,S.mode,D),D.ref=Di(S,w,R),D.return=S,D)}function h(S,w,R,D){return w===null||w.tag!==4||w.stateNode.containerInfo!==R.containerInfo||w.stateNode.implementation!==R.implementation?(w=Ec(R,S.mode,D),w.return=S,w):(w=s(w,R.children||[]),w.return=S,w)}function f(S,w,R,D,V){return w===null||w.tag!==7?(w=Hr(R,S.mode,D,V),w.return=S,w):(w=s(w,R),w.return=S,w)}function p(S,w,R){if(typeof w=="string"&&w!==""||typeof w=="number")return w=wc(""+w,S.mode,R),w.return=S,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case fa:return R=Wa(w.type,w.key,w.props,null,S.mode,R),R.ref=Di(S,null,w),R.return=S,R;case _s:return w=Ec(w,S.mode,R),w.return=S,w;case Wn:var D=w._init;return p(S,D(w._payload),R)}if(Fi(w)||ki(w))return w=Hr(w,S.mode,R,null),w.return=S,w;Sa(S,w)}return null}function m(S,w,R,D){var V=w!==null?w.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return V!==null?null:l(S,w,""+R,D);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case fa:return R.key===V?u(S,w,R,D):null;case _s:return R.key===V?h(S,w,R,D):null;case Wn:return V=R._init,m(S,w,V(R._payload),D)}if(Fi(R)||ki(R))return V!==null?null:f(S,w,R,D,null);Sa(S,R)}return null}function x(S,w,R,D,V){if(typeof D=="string"&&D!==""||typeof D=="number")return S=S.get(R)||null,l(w,S,""+D,V);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case fa:return S=S.get(D.key===null?R:D.key)||null,u(w,S,D,V);case _s:return S=S.get(D.key===null?R:D.key)||null,h(w,S,D,V);case Wn:var j=D._init;return x(S,w,R,j(D._payload),V)}if(Fi(D)||ki(D))return S=S.get(R)||null,f(w,S,D,V,null);Sa(w,D)}return null}function C(S,w,R,D){for(var V=null,j=null,_=w,y=w=0,E=null;_!==null&&y<R.length;y++){_.index>y?(E=_,_=null):E=_.sibling;var I=m(S,_,R[y],D);if(I===null){_===null&&(_=E);break}t&&_&&I.alternate===null&&e(S,_),w=i(I,w,y),j===null?V=I:j.sibling=I,j=I,_=E}if(y===R.length)return n(S,_),Te&&Or(S,y),V;if(_===null){for(;y<R.length;y++)_=p(S,R[y],D),_!==null&&(w=i(_,w,y),j===null?V=_:j.sibling=_,j=_);return Te&&Or(S,y),V}for(_=r(S,_);y<R.length;y++)E=x(_,S,y,R[y],D),E!==null&&(t&&E.alternate!==null&&_.delete(E.key===null?y:E.key),w=i(E,w,y),j===null?V=E:j.sibling=E,j=E);return t&&_.forEach(function(A){return e(S,A)}),Te&&Or(S,y),V}function N(S,w,R,D){var V=ki(R);if(typeof V!="function")throw Error(z(150));if(R=V.call(R),R==null)throw Error(z(151));for(var j=V=null,_=w,y=w=0,E=null,I=R.next();_!==null&&!I.done;y++,I=R.next()){_.index>y?(E=_,_=null):E=_.sibling;var A=m(S,_,I.value,D);if(A===null){_===null&&(_=E);break}t&&_&&A.alternate===null&&e(S,_),w=i(A,w,y),j===null?V=A:j.sibling=A,j=A,_=E}if(I.done)return n(S,_),Te&&Or(S,y),V;if(_===null){for(;!I.done;y++,I=R.next())I=p(S,I.value,D),I!==null&&(w=i(I,w,y),j===null?V=I:j.sibling=I,j=I);return Te&&Or(S,y),V}for(_=r(S,_);!I.done;y++,I=R.next())I=x(_,S,y,I.value,D),I!==null&&(t&&I.alternate!==null&&_.delete(I.key===null?y:I.key),w=i(I,w,y),j===null?V=I:j.sibling=I,j=I);return t&&_.forEach(function(k){return e(S,k)}),Te&&Or(S,y),V}function L(S,w,R,D){if(typeof R=="object"&&R!==null&&R.type===vs&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case fa:e:{for(var V=R.key,j=w;j!==null;){if(j.key===V){if(V=R.type,V===vs){if(j.tag===7){n(S,j.sibling),w=s(j,R.props.children),w.return=S,S=w;break e}}else if(j.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Wn&&Nm(V)===j.type){n(S,j.sibling),w=s(j,R.props),w.ref=Di(S,j,R),w.return=S,S=w;break e}n(S,j);break}else e(S,j);j=j.sibling}R.type===vs?(w=Hr(R.props.children,S.mode,D,R.key),w.return=S,S=w):(D=Wa(R.type,R.key,R.props,null,S.mode,D),D.ref=Di(S,w,R),D.return=S,S=D)}return o(S);case _s:e:{for(j=R.key;w!==null;){if(w.key===j)if(w.tag===4&&w.stateNode.containerInfo===R.containerInfo&&w.stateNode.implementation===R.implementation){n(S,w.sibling),w=s(w,R.children||[]),w.return=S,S=w;break e}else{n(S,w);break}else e(S,w);w=w.sibling}w=Ec(R,S.mode,D),w.return=S,S=w}return o(S);case Wn:return j=R._init,L(S,w,j(R._payload),D)}if(Fi(R))return C(S,w,R,D);if(ki(R))return N(S,w,R,D);Sa(S,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,w!==null&&w.tag===6?(n(S,w.sibling),w=s(w,R),w.return=S,S=w):(n(S,w),w=wc(R,S.mode,D),w.return=S,S=w),o(S)):n(S,w)}return L}var Ws=Y_(!0),X_=Y_(!1),gl=xr(null),yl=null,Rs=null,Rd=null;function kd(){Rd=Rs=yl=null}function Cd(t){var e=gl.current;Ee(gl),t._currentValue=e}function mh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ls(t,e){yl=t,Rd=Rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(wt=!0),t.firstContext=null)}function jt(t){var e=t._currentValue;if(Rd!==t)if(t={context:t,memoizedValue:e,next:null},Rs===null){if(yl===null)throw Error(z(308));Rs=t,yl.dependencies={lanes:0,firstContext:t}}else Rs=Rs.next=t;return e}var jr=null;function Pd(t){jr===null?jr=[t]:jr.push(t)}function J_(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Pd(e)):(n.next=s.next,s.next=n),e.interleaved=n,Pn(t,r)}function Pn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Kn=!1;function Nd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Z_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Pn(t,n)}return s=r.interleaved,s===null?(e.next=e,Pd(r)):(e.next=s.next,s.next=e),r.interleaved=e,Pn(t,n)}function Ua(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gd(t,n)}}function bm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _l(t,e,n,r){var s=t.updateQueue;Kn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?i=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(i!==null){var p=s.baseState;o=0,f=h=u=null,l=i;do{var m=l.lane,x=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,N=l;switch(m=e,x=n,N.tag){case 1:if(C=N.payload,typeof C=="function"){p=C.call(x,p,m);break e}p=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=N.payload,m=typeof C=="function"?C.call(x,p,m):C,m==null)break e;p=xe({},p,m);break e;case 2:Kn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=s.effects,m===null?s.effects=[l]:m.push(l))}else x={eventTime:x,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=x,u=p):f=f.next=x,o|=m;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;m=l,l=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(f===null&&(u=p),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Xr|=o,t.lanes=o,t.memoizedState=p}}function Dm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(z(191,s));s.call(r)}}}var Fo={},ln=xr(Fo),vo=xr(Fo),wo=xr(Fo);function Ur(t){if(t===Fo)throw Error(z(174));return t}function bd(t,e){switch(ye(wo,e),ye(vo,t),ye(ln,Fo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Qc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Qc(e,t)}Ee(ln),ye(ln,e)}function Ks(){Ee(ln),Ee(vo),Ee(wo)}function ev(t){Ur(wo.current);var e=Ur(ln.current),n=Qc(e,t.type);e!==n&&(ye(vo,t),ye(ln,n))}function Dd(t){vo.current===t&&(Ee(ln),Ee(vo))}var Se=xr(0);function vl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var pc=[];function Vd(){for(var t=0;t<pc.length;t++)pc[t]._workInProgressVersionPrimary=null;pc.length=0}var za=Ln.ReactCurrentDispatcher,mc=Ln.ReactCurrentBatchConfig,Yr=0,Ae=null,Ue=null,We=null,wl=!1,Xi=!1,Eo=0,HI=0;function nt(){throw Error(z(321))}function Od(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jt(t[n],e[n]))return!1;return!0}function Ld(t,e,n,r,s,i){if(Yr=i,Ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,za.current=t===null||t.memoizedState===null?GI:QI,t=n(r,s),Xi){i=0;do{if(Xi=!1,Eo=0,25<=i)throw Error(z(301));i+=1,We=Ue=null,e.updateQueue=null,za.current=YI,t=n(r,s)}while(Xi)}if(za.current=El,e=Ue!==null&&Ue.next!==null,Yr=0,We=Ue=Ae=null,wl=!1,e)throw Error(z(300));return t}function Md(){var t=Eo!==0;return Eo=0,t}function rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Ae.memoizedState=We=t:We=We.next=t,We}function Ut(){if(Ue===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var e=We===null?Ae.memoizedState:We.next;if(e!==null)We=e,Ue=t;else{if(t===null)throw Error(z(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},We===null?Ae.memoizedState=We=t:We=We.next=t}return We}function To(t,e){return typeof e=="function"?e(t):e}function gc(t){var e=Ut(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=Ue,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,h=i;do{var f=h.lane;if((Yr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Ae.lanes|=f,Xr|=f}h=h.next}while(h!==null&&h!==i);u===null?o=r:u.next=l,Jt(r,e.memoizedState)||(wt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Ae.lanes|=i,Xr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function yc(t){var e=Ut(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Jt(i,e.memoizedState)||(wt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function tv(){}function nv(t,e){var n=Ae,r=Ut(),s=e(),i=!Jt(r.memoizedState,s);if(i&&(r.memoizedState=s,wt=!0),r=r.queue,Fd(iv.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,Io(9,sv.bind(null,n,r,s,e),void 0,null),Ke===null)throw Error(z(349));Yr&30||rv(n,e,s)}return s}function rv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function sv(t,e,n,r){e.value=n,e.getSnapshot=r,ov(e)&&av(t)}function iv(t,e,n){return n(function(){ov(e)&&av(t)})}function ov(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jt(t,n)}catch{return!0}}function av(t){var e=Pn(t,1);e!==null&&Gt(e,t,1,-1)}function Vm(t){var e=rn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:t},e.queue=t,t=t.dispatch=KI.bind(null,Ae,t),[e.memoizedState,t]}function Io(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function lv(){return Ut().memoizedState}function $a(t,e,n,r){var s=rn();Ae.flags|=t,s.memoizedState=Io(1|e,n,void 0,r===void 0?null:r)}function tu(t,e,n,r){var s=Ut();r=r===void 0?null:r;var i=void 0;if(Ue!==null){var o=Ue.memoizedState;if(i=o.destroy,r!==null&&Od(r,o.deps)){s.memoizedState=Io(e,n,i,r);return}}Ae.flags|=t,s.memoizedState=Io(1|e,n,i,r)}function Om(t,e){return $a(8390656,8,t,e)}function Fd(t,e){return tu(2048,8,t,e)}function uv(t,e){return tu(4,2,t,e)}function cv(t,e){return tu(4,4,t,e)}function hv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function dv(t,e,n){return n=n!=null?n.concat([t]):null,tu(4,4,hv.bind(null,e,t),n)}function jd(){}function fv(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Od(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function pv(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Od(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function mv(t,e,n){return Yr&21?(Jt(n,e)||(n=w_(),Ae.lanes|=n,Xr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,wt=!0),t.memoizedState=n)}function qI(t,e){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var r=mc.transition;mc.transition={};try{t(!1),e()}finally{pe=n,mc.transition=r}}function gv(){return Ut().memoizedState}function WI(t,e,n){var r=ur(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},yv(t))_v(e,n);else if(n=J_(t,e,n,r),n!==null){var s=pt();Gt(n,t,r,s),vv(n,e,r)}}function KI(t,e,n){var r=ur(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(yv(t))_v(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,Jt(l,o)){var u=e.interleaved;u===null?(s.next=s,Pd(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=J_(t,e,s,r),n!==null&&(s=pt(),Gt(n,t,r,s),vv(n,e,r))}}function yv(t){var e=t.alternate;return t===Ae||e!==null&&e===Ae}function _v(t,e){Xi=wl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function vv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gd(t,n)}}var El={readContext:jt,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},GI={readContext:jt,useCallback:function(t,e){return rn().memoizedState=[t,e===void 0?null:e],t},useContext:jt,useEffect:Om,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,$a(4194308,4,hv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return $a(4194308,4,t,e)},useInsertionEffect:function(t,e){return $a(4,2,t,e)},useMemo:function(t,e){var n=rn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=rn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=WI.bind(null,Ae,t),[r.memoizedState,t]},useRef:function(t){var e=rn();return t={current:t},e.memoizedState=t},useState:Vm,useDebugValue:jd,useDeferredValue:function(t){return rn().memoizedState=t},useTransition:function(){var t=Vm(!1),e=t[0];return t=qI.bind(null,t[1]),rn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ae,s=rn();if(Te){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),Ke===null)throw Error(z(349));Yr&30||rv(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Om(iv.bind(null,r,i,t),[t]),r.flags|=2048,Io(9,sv.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=rn(),e=Ke.identifierPrefix;if(Te){var n=En,r=wn;n=(r&~(1<<32-Kt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Eo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=HI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},QI={readContext:jt,useCallback:fv,useContext:jt,useEffect:Fd,useImperativeHandle:dv,useInsertionEffect:uv,useLayoutEffect:cv,useMemo:pv,useReducer:gc,useRef:lv,useState:function(){return gc(To)},useDebugValue:jd,useDeferredValue:function(t){var e=Ut();return mv(e,Ue.memoizedState,t)},useTransition:function(){var t=gc(To)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:tv,useSyncExternalStore:nv,useId:gv,unstable_isNewReconciler:!1},YI={readContext:jt,useCallback:fv,useContext:jt,useEffect:Fd,useImperativeHandle:dv,useInsertionEffect:uv,useLayoutEffect:cv,useMemo:pv,useReducer:yc,useRef:lv,useState:function(){return yc(To)},useDebugValue:jd,useDeferredValue:function(t){var e=Ut();return Ue===null?e.memoizedState=t:mv(e,Ue.memoizedState,t)},useTransition:function(){var t=yc(To)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:tv,useSyncExternalStore:nv,useId:gv,unstable_isNewReconciler:!1};function $t(t,e){if(t&&t.defaultProps){e=xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var nu={isMounted:function(t){return(t=t._reactInternals)?os(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=pt(),s=ur(t),i=xn(r,s);i.payload=e,n!=null&&(i.callback=n),e=ar(t,i,s),e!==null&&(Gt(e,t,s,r),Ua(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=pt(),s=ur(t),i=xn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=ar(t,i,s),e!==null&&(Gt(e,t,s,r),Ua(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=pt(),r=ur(t),s=xn(n,r);s.tag=2,e!=null&&(s.callback=e),e=ar(t,s,r),e!==null&&(Gt(e,t,r,n),Ua(e,t,r))}};function Lm(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!mo(n,r)||!mo(s,i):!0}function wv(t,e,n){var r=!1,s=yr,i=e.contextType;return typeof i=="object"&&i!==null?i=jt(i):(s=Tt(e)?Gr:lt.current,r=e.contextTypes,i=(r=r!=null)?Hs(t,s):yr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=nu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Mm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&nu.enqueueReplaceState(e,e.state,null)}function yh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Nd(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=jt(i):(i=Tt(e)?Gr:lt.current,s.context=Hs(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(gh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&nu.enqueueReplaceState(s,s.state,null),_l(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Gs(t,e){try{var n="",r=e;do n+=ST(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function _c(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _h(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var XI=typeof WeakMap=="function"?WeakMap:Map;function Ev(t,e,n){n=xn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Il||(Il=!0,kh=r),_h(t,e)},n}function Tv(t,e,n){n=xn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){_h(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){_h(t,e),typeof r!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Fm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new XI;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=hS.bind(null,t,e,n),e.then(t,t))}function jm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Um(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xn(-1,1),e.tag=2,ar(n,e,1))),n.lanes|=1),t)}var JI=Ln.ReactCurrentOwner,wt=!1;function ft(t,e,n,r){e.child=t===null?X_(e,null,n,r):Ws(e,t.child,n,r)}function zm(t,e,n,r,s){n=n.render;var i=e.ref;return Ls(e,s),r=Ld(t,e,n,r,i,s),n=Md(),t!==null&&!wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Nn(t,e,s)):(Te&&n&&Sd(e),e.flags|=1,ft(t,e,r,s),e.child)}function $m(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Kd(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Iv(t,e,i,r,s)):(t=Wa(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:mo,n(o,r)&&t.ref===e.ref)return Nn(t,e,s)}return e.flags|=1,t=cr(i,r),t.ref=e.ref,t.return=e,e.child=t}function Iv(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(mo(i,r)&&t.ref===e.ref)if(wt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(wt=!0);else return e.lanes=t.lanes,Nn(t,e,s)}return vh(t,e,n,r,s)}function Sv(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(Cs,xt),xt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(Cs,xt),xt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ye(Cs,xt),xt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ye(Cs,xt),xt|=r;return ft(t,e,s,n),e.child}function Av(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vh(t,e,n,r,s){var i=Tt(n)?Gr:lt.current;return i=Hs(e,i),Ls(e,s),n=Ld(t,e,n,r,i,s),r=Md(),t!==null&&!wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Nn(t,e,s)):(Te&&r&&Sd(e),e.flags|=1,ft(t,e,n,s),e.child)}function Bm(t,e,n,r,s){if(Tt(n)){var i=!0;fl(e)}else i=!1;if(Ls(e,s),e.stateNode===null)Ba(t,e),wv(e,n,r),yh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=jt(h):(h=Tt(n)?Gr:lt.current,h=Hs(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Mm(e,o,r,h),Kn=!1;var m=e.memoizedState;o.state=m,_l(e,r,o,s),u=e.memoizedState,l!==r||m!==u||Et.current||Kn?(typeof f=="function"&&(gh(e,n,f,r),u=e.memoizedState),(l=Kn||Lm(e,n,l,r,m,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Z_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:$t(e.type,l),o.props=h,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=jt(u):(u=Tt(n)?Gr:lt.current,u=Hs(e,u));var x=n.getDerivedStateFromProps;(f=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Mm(e,o,r,u),Kn=!1,m=e.memoizedState,o.state=m,_l(e,r,o,s);var C=e.memoizedState;l!==p||m!==C||Et.current||Kn?(typeof x=="function"&&(gh(e,n,x,r),C=e.memoizedState),(h=Kn||Lm(e,n,h,r,m,C,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return wh(t,e,n,r,i,s)}function wh(t,e,n,r,s,i){Av(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&km(e,n,!1),Nn(t,e,i);r=e.stateNode,JI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ws(e,t.child,null,i),e.child=Ws(e,null,l,i)):ft(t,e,l,i),e.memoizedState=r.state,s&&km(e,n,!0),e.child}function xv(t){var e=t.stateNode;e.pendingContext?Rm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Rm(t,e.context,!1),bd(t,e.containerInfo)}function Hm(t,e,n,r,s){return qs(),xd(s),e.flags|=256,ft(t,e,n,r),e.child}var Eh={dehydrated:null,treeContext:null,retryLane:0};function Th(t){return{baseLanes:t,cachePool:null,transitions:null}}function Rv(t,e,n){var r=e.pendingProps,s=Se.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ye(Se,s&1),t===null)return ph(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=iu(o,r,0,null),t=Hr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Th(n),e.memoizedState=Eh,t):Ud(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return ZI(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=cr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=cr(l,i):(i=Hr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Th(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Eh,r}return i=t.child,t=i.sibling,r=cr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ud(t,e){return e=iu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Aa(t,e,n,r){return r!==null&&xd(r),Ws(e,t.child,null,n),t=Ud(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ZI(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=_c(Error(z(422))),Aa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=iu({mode:"visible",children:r.children},s,0,null),i=Hr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Ws(e,t.child,null,o),e.child.memoizedState=Th(o),e.memoizedState=Eh,i);if(!(e.mode&1))return Aa(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(z(419)),r=_c(i,r,void 0),Aa(t,e,o,r)}if(l=(o&t.childLanes)!==0,wt||l){if(r=Ke,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Pn(t,s),Gt(r,t,s,-1))}return Wd(),r=_c(Error(z(421))),Aa(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=dS.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Rt=or(s.nextSibling),Ct=e,Te=!0,Ht=null,t!==null&&(Dt[Vt++]=wn,Dt[Vt++]=En,Dt[Vt++]=Qr,wn=t.id,En=t.overflow,Qr=e),e=Ud(e,r.children),e.flags|=4096,e)}function qm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),mh(t.return,e,n)}function vc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function kv(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(ft(t,e,r.children,n),r=Se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qm(t,n,e);else if(t.tag===19)qm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(Se,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&vl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),vc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&vl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}vc(e,!0,n,null,i);break;case"together":vc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ba(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Nn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function eS(t,e,n){switch(e.tag){case 3:xv(e),qs();break;case 5:ev(e);break;case 1:Tt(e.type)&&fl(e);break;case 4:bd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ye(gl,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(Se,Se.current&1),e.flags|=128,null):n&e.child.childLanes?Rv(t,e,n):(ye(Se,Se.current&1),t=Nn(t,e,n),t!==null?t.sibling:null);ye(Se,Se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return kv(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ye(Se,Se.current),r)break;return null;case 22:case 23:return e.lanes=0,Sv(t,e,n)}return Nn(t,e,n)}var Cv,Ih,Pv,Nv;Cv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ih=function(){};Pv=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Ur(ln.current);var i=null;switch(n){case"input":s=qc(t,s),r=qc(t,r),i=[];break;case"select":s=xe({},s,{value:void 0}),r=xe({},r,{value:void 0}),i=[];break;case"textarea":s=Gc(t,s),r=Gc(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=hl)}Yc(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var l=s[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(ao.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(l=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(ao.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&ve("scroll",t),i||l===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};Nv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Vi(t,e){if(!Te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function tS(t,e,n){var r=e.pendingProps;switch(Ad(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(e),null;case 1:return Tt(e.type)&&dl(),rt(e),null;case 3:return r=e.stateNode,Ks(),Ee(Et),Ee(lt),Vd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ia(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ht!==null&&(Nh(Ht),Ht=null))),Ih(t,e),rt(e),null;case 5:Dd(e);var s=Ur(wo.current);if(n=e.type,t!==null&&e.stateNode!=null)Pv(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return rt(e),null}if(t=Ur(ln.current),Ia(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[on]=e,r[_o]=i,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(s=0;s<Ui.length;s++)ve(Ui[s],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":em(r,i),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ve("invalid",r);break;case"textarea":nm(r,i),ve("invalid",r)}Yc(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Ta(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Ta(r.textContent,l,t),s=["children",""+l]):ao.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":pa(r),tm(r,i,!0);break;case"textarea":pa(r),rm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=hl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=i_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[on]=e,t[_o]=r,Cv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Xc(n,r),n){case"dialog":ve("cancel",t),ve("close",t),s=r;break;case"iframe":case"object":case"embed":ve("load",t),s=r;break;case"video":case"audio":for(s=0;s<Ui.length;s++)ve(Ui[s],t);s=r;break;case"source":ve("error",t),s=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),s=r;break;case"details":ve("toggle",t),s=r;break;case"input":em(t,r),s=qc(t,r),ve("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=xe({},r,{value:void 0}),ve("invalid",t);break;case"textarea":nm(t,r),s=Gc(t,r),ve("invalid",t);break;default:s=r}Yc(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?l_(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&o_(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&lo(t,u):typeof u=="number"&&lo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ao.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ve("scroll",t):u!=null&&cd(t,i,u,o))}switch(n){case"input":pa(t),tm(t,r,!1);break;case"textarea":pa(t),rm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+gr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?bs(t,!!r.multiple,i,!1):r.defaultValue!=null&&bs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=hl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rt(e),null;case 6:if(t&&e.stateNode!=null)Nv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=Ur(wo.current),Ur(ln.current),Ia(e)){if(r=e.stateNode,n=e.memoizedProps,r[on]=e,(i=r.nodeValue!==n)&&(t=Ct,t!==null))switch(t.tag){case 3:Ta(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ta(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[on]=e,e.stateNode=r}return rt(e),null;case 13:if(Ee(Se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Te&&Rt!==null&&e.mode&1&&!(e.flags&128))Q_(),qs(),e.flags|=98560,i=!1;else if(i=Ia(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(z(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(z(317));i[on]=e}else qs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rt(e),i=!1}else Ht!==null&&(Nh(Ht),Ht=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Se.current&1?ze===0&&(ze=3):Wd())),e.updateQueue!==null&&(e.flags|=4),rt(e),null);case 4:return Ks(),Ih(t,e),t===null&&go(e.stateNode.containerInfo),rt(e),null;case 10:return Cd(e.type._context),rt(e),null;case 17:return Tt(e.type)&&dl(),rt(e),null;case 19:if(Ee(Se),i=e.memoizedState,i===null)return rt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Vi(i,!1);else{if(ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=vl(t),o!==null){for(e.flags|=128,Vi(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(Se,Se.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ne()>Qs&&(e.flags|=128,r=!0,Vi(i,!1),e.lanes=4194304)}else{if(!r)if(t=vl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Vi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Te)return rt(e),null}else 2*Ne()-i.renderingStartTime>Qs&&n!==1073741824&&(e.flags|=128,r=!0,Vi(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ne(),e.sibling=null,n=Se.current,ye(Se,r?n&1|2:n&1),e):(rt(e),null);case 22:case 23:return qd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?xt&1073741824&&(rt(e),e.subtreeFlags&6&&(e.flags|=8192)):rt(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function nS(t,e){switch(Ad(e),e.tag){case 1:return Tt(e.type)&&dl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ks(),Ee(Et),Ee(lt),Vd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Dd(e),null;case 13:if(Ee(Se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(Se),null;case 4:return Ks(),null;case 10:return Cd(e.type._context),null;case 22:case 23:return qd(),null;case 24:return null;default:return null}}var xa=!1,ot=!1,rS=typeof WeakSet=="function"?WeakSet:Set,G=null;function ks(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(t,e,r)}else n.current=null}function Sh(t,e,n){try{n()}catch(r){ke(t,e,r)}}var Wm=!1;function sS(t,e){if(ah=ll,t=L_(),Id(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,m=null;t:for(;;){for(var x;p!==n||s!==0&&p.nodeType!==3||(l=o+s),p!==i||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(x=p.firstChild)!==null;)m=p,p=x;for(;;){if(p===t)break t;if(m===n&&++h===s&&(l=o),m===i&&++f===r&&(u=o),(x=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=x}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(lh={focusedElem:t,selectionRange:n},ll=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var N=C.memoizedProps,L=C.memoizedState,S=e.stateNode,w=S.getSnapshotBeforeUpdate(e.elementType===e.type?N:$t(e.type,N),L);S.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var R=e.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(D){ke(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return C=Wm,Wm=!1,C}function Ji(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Sh(e,n,i)}s=s.next}while(s!==r)}}function ru(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ah(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function bv(t){var e=t.alternate;e!==null&&(t.alternate=null,bv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[on],delete e[_o],delete e[hh],delete e[UI],delete e[zI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Dv(t){return t.tag===5||t.tag===3||t.tag===4}function Km(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Dv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=hl));else if(r!==4&&(t=t.child,t!==null))for(xh(t,e,n),t=t.sibling;t!==null;)xh(t,e,n),t=t.sibling}function Rh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Rh(t,e,n),t=t.sibling;t!==null;)Rh(t,e,n),t=t.sibling}var Ge=null,Bt=!1;function Hn(t,e,n){for(n=n.child;n!==null;)Vv(t,e,n),n=n.sibling}function Vv(t,e,n){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(Ql,n)}catch{}switch(n.tag){case 5:ot||ks(n,e);case 6:var r=Ge,s=Bt;Ge=null,Hn(t,e,n),Ge=r,Bt=s,Ge!==null&&(Bt?(t=Ge,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(Bt?(t=Ge,n=n.stateNode,t.nodeType===8?dc(t.parentNode,n):t.nodeType===1&&dc(t,n),fo(t)):dc(Ge,n.stateNode));break;case 4:r=Ge,s=Bt,Ge=n.stateNode.containerInfo,Bt=!0,Hn(t,e,n),Ge=r,Bt=s;break;case 0:case 11:case 14:case 15:if(!ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Sh(n,e,o),s=s.next}while(s!==r)}Hn(t,e,n);break;case 1:if(!ot&&(ks(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ke(n,e,l)}Hn(t,e,n);break;case 21:Hn(t,e,n);break;case 22:n.mode&1?(ot=(r=ot)||n.memoizedState!==null,Hn(t,e,n),ot=r):Hn(t,e,n);break;default:Hn(t,e,n)}}function Gm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new rS),e.forEach(function(r){var s=fS.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function zt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ge=l.stateNode,Bt=!1;break e;case 3:Ge=l.stateNode.containerInfo,Bt=!0;break e;case 4:Ge=l.stateNode.containerInfo,Bt=!0;break e}l=l.return}if(Ge===null)throw Error(z(160));Vv(i,o,s),Ge=null,Bt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){ke(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ov(e,t),e=e.sibling}function Ov(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zt(e,t),nn(t),r&4){try{Ji(3,t,t.return),ru(3,t)}catch(N){ke(t,t.return,N)}try{Ji(5,t,t.return)}catch(N){ke(t,t.return,N)}}break;case 1:zt(e,t),nn(t),r&512&&n!==null&&ks(n,n.return);break;case 5:if(zt(e,t),nn(t),r&512&&n!==null&&ks(n,n.return),t.flags&32){var s=t.stateNode;try{lo(s,"")}catch(N){ke(t,t.return,N)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&r_(s,i),Xc(l,o);var h=Xc(l,i);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?l_(s,p):f==="dangerouslySetInnerHTML"?o_(s,p):f==="children"?lo(s,p):cd(s,f,p,h)}switch(l){case"input":Wc(s,i);break;case"textarea":s_(s,i);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?bs(s,!!i.multiple,x,!1):m!==!!i.multiple&&(i.defaultValue!=null?bs(s,!!i.multiple,i.defaultValue,!0):bs(s,!!i.multiple,i.multiple?[]:"",!1))}s[_o]=i}catch(N){ke(t,t.return,N)}}break;case 6:if(zt(e,t),nn(t),r&4){if(t.stateNode===null)throw Error(z(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(N){ke(t,t.return,N)}}break;case 3:if(zt(e,t),nn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fo(e.containerInfo)}catch(N){ke(t,t.return,N)}break;case 4:zt(e,t),nn(t);break;case 13:zt(e,t),nn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Bd=Ne())),r&4&&Gm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(ot=(h=ot)||f,zt(e,t),ot=h):zt(e,t),nn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(G=t,f=t.child;f!==null;){for(p=G=f;G!==null;){switch(m=G,x=m.child,m.tag){case 0:case 11:case 14:case 15:Ji(4,m,m.return);break;case 1:ks(m,m.return);var C=m.stateNode;if(typeof C.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(N){ke(r,n,N)}}break;case 5:ks(m,m.return);break;case 22:if(m.memoizedState!==null){Ym(p);continue}}x!==null?(x.return=m,G=x):Ym(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{s=p.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=a_("display",o))}catch(N){ke(t,t.return,N)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(N){ke(t,t.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:zt(e,t),nn(t),r&4&&Gm(t);break;case 21:break;default:zt(e,t),nn(t)}}function nn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Dv(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(lo(s,""),r.flags&=-33);var i=Km(t);Rh(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Km(t);xh(t,l,o);break;default:throw Error(z(161))}}catch(u){ke(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function iS(t,e,n){G=t,Lv(t)}function Lv(t,e,n){for(var r=(t.mode&1)!==0;G!==null;){var s=G,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||xa;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||ot;l=xa;var h=ot;if(xa=o,(ot=u)&&!h)for(G=s;G!==null;)o=G,u=o.child,o.tag===22&&o.memoizedState!==null?Xm(s):u!==null?(u.return=o,G=u):Xm(s);for(;i!==null;)G=i,Lv(i),i=i.sibling;G=s,xa=l,ot=h}Qm(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,G=i):Qm(t)}}function Qm(t){for(;G!==null;){var e=G;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ot||ru(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ot)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:$t(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Dm(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Dm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&fo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}ot||e.flags&512&&Ah(e)}catch(m){ke(e,e.return,m)}}if(e===t){G=null;break}if(n=e.sibling,n!==null){n.return=e.return,G=n;break}G=e.return}}function Ym(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var n=e.sibling;if(n!==null){n.return=e.return,G=n;break}G=e.return}}function Xm(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ru(4,e)}catch(u){ke(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){ke(e,s,u)}}var i=e.return;try{Ah(e)}catch(u){ke(e,i,u)}break;case 5:var o=e.return;try{Ah(e)}catch(u){ke(e,o,u)}}}catch(u){ke(e,e.return,u)}if(e===t){G=null;break}var l=e.sibling;if(l!==null){l.return=e.return,G=l;break}G=e.return}}var oS=Math.ceil,Tl=Ln.ReactCurrentDispatcher,zd=Ln.ReactCurrentOwner,Mt=Ln.ReactCurrentBatchConfig,de=0,Ke=null,Ve=null,Je=0,xt=0,Cs=xr(0),ze=0,So=null,Xr=0,su=0,$d=0,Zi=null,_t=null,Bd=0,Qs=1/0,yn=null,Il=!1,kh=null,lr=null,Ra=!1,er=null,Sl=0,eo=0,Ch=null,Ha=-1,qa=0;function pt(){return de&6?Ne():Ha!==-1?Ha:Ha=Ne()}function ur(t){return t.mode&1?de&2&&Je!==0?Je&-Je:BI.transition!==null?(qa===0&&(qa=w_()),qa):(t=pe,t!==0||(t=window.event,t=t===void 0?16:R_(t.type)),t):1}function Gt(t,e,n,r){if(50<eo)throw eo=0,Ch=null,Error(z(185));Oo(t,n,r),(!(de&2)||t!==Ke)&&(t===Ke&&(!(de&2)&&(su|=n),ze===4&&Qn(t,Je)),It(t,r),n===1&&de===0&&!(e.mode&1)&&(Qs=Ne()+500,eu&&Rr()))}function It(t,e){var n=t.callbackNode;BT(t,e);var r=al(t,t===Ke?Je:0);if(r===0)n!==null&&om(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&om(n),e===1)t.tag===0?$I(Jm.bind(null,t)):W_(Jm.bind(null,t)),FI(function(){!(de&6)&&Rr()}),n=null;else{switch(E_(r)){case 1:n=md;break;case 4:n=__;break;case 16:n=ol;break;case 536870912:n=v_;break;default:n=ol}n=Hv(n,Mv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Mv(t,e){if(Ha=-1,qa=0,de&6)throw Error(z(327));var n=t.callbackNode;if(Ms()&&t.callbackNode!==n)return null;var r=al(t,t===Ke?Je:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Al(t,r);else{e=r;var s=de;de|=2;var i=jv();(Ke!==t||Je!==e)&&(yn=null,Qs=Ne()+500,Br(t,e));do try{uS();break}catch(l){Fv(t,l)}while(!0);kd(),Tl.current=i,de=s,Ve!==null?e=0:(Ke=null,Je=0,e=ze)}if(e!==0){if(e===2&&(s=nh(t),s!==0&&(r=s,e=Ph(t,s))),e===1)throw n=So,Br(t,0),Qn(t,r),It(t,Ne()),n;if(e===6)Qn(t,r);else{if(s=t.current.alternate,!(r&30)&&!aS(s)&&(e=Al(t,r),e===2&&(i=nh(t),i!==0&&(r=i,e=Ph(t,i))),e===1))throw n=So,Br(t,0),Qn(t,r),It(t,Ne()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:Lr(t,_t,yn);break;case 3:if(Qn(t,r),(r&130023424)===r&&(e=Bd+500-Ne(),10<e)){if(al(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){pt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=ch(Lr.bind(null,t,_t,yn),e);break}Lr(t,_t,yn);break;case 4:if(Qn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Kt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*oS(r/1960))-r,10<r){t.timeoutHandle=ch(Lr.bind(null,t,_t,yn),r);break}Lr(t,_t,yn);break;case 5:Lr(t,_t,yn);break;default:throw Error(z(329))}}}return It(t,Ne()),t.callbackNode===n?Mv.bind(null,t):null}function Ph(t,e){var n=Zi;return t.current.memoizedState.isDehydrated&&(Br(t,e).flags|=256),t=Al(t,e),t!==2&&(e=_t,_t=n,e!==null&&Nh(e)),t}function Nh(t){_t===null?_t=t:_t.push.apply(_t,t)}function aS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Jt(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qn(t,e){for(e&=~$d,e&=~su,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kt(e),r=1<<n;t[n]=-1,e&=~r}}function Jm(t){if(de&6)throw Error(z(327));Ms();var e=al(t,0);if(!(e&1))return It(t,Ne()),null;var n=Al(t,e);if(t.tag!==0&&n===2){var r=nh(t);r!==0&&(e=r,n=Ph(t,r))}if(n===1)throw n=So,Br(t,0),Qn(t,e),It(t,Ne()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Lr(t,_t,yn),It(t,Ne()),null}function Hd(t,e){var n=de;de|=1;try{return t(e)}finally{de=n,de===0&&(Qs=Ne()+500,eu&&Rr())}}function Jr(t){er!==null&&er.tag===0&&!(de&6)&&Ms();var e=de;de|=1;var n=Mt.transition,r=pe;try{if(Mt.transition=null,pe=1,t)return t()}finally{pe=r,Mt.transition=n,de=e,!(de&6)&&Rr()}}function qd(){xt=Cs.current,Ee(Cs)}function Br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,MI(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(Ad(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&dl();break;case 3:Ks(),Ee(Et),Ee(lt),Vd();break;case 5:Dd(r);break;case 4:Ks();break;case 13:Ee(Se);break;case 19:Ee(Se);break;case 10:Cd(r.type._context);break;case 22:case 23:qd()}n=n.return}if(Ke=t,Ve=t=cr(t.current,null),Je=xt=e,ze=0,So=null,$d=su=Xr=0,_t=Zi=null,jr!==null){for(e=0;e<jr.length;e++)if(n=jr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}jr=null}return t}function Fv(t,e){do{var n=Ve;try{if(kd(),za.current=El,wl){for(var r=Ae.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}wl=!1}if(Yr=0,We=Ue=Ae=null,Xi=!1,Eo=0,zd.current=null,n===null||n.return===null){ze=1,So=e,Ve=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=Je,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var x=jm(o);if(x!==null){x.flags&=-257,Um(x,o,l,i,e),x.mode&1&&Fm(i,h,e),e=x,u=h;var C=e.updateQueue;if(C===null){var N=new Set;N.add(u),e.updateQueue=N}else C.add(u);break e}else{if(!(e&1)){Fm(i,h,e),Wd();break e}u=Error(z(426))}}else if(Te&&l.mode&1){var L=jm(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),Um(L,o,l,i,e),xd(Gs(u,l));break e}}i=u=Gs(u,l),ze!==4&&(ze=2),Zi===null?Zi=[i]:Zi.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var S=Ev(i,u,e);bm(i,S);break e;case 1:l=u;var w=i.type,R=i.stateNode;if(!(i.flags&128)&&(typeof w.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(lr===null||!lr.has(R)))){i.flags|=65536,e&=-e,i.lanes|=e;var D=Tv(i,l,e);bm(i,D);break e}}i=i.return}while(i!==null)}zv(n)}catch(V){e=V,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function jv(){var t=Tl.current;return Tl.current=El,t===null?El:t}function Wd(){(ze===0||ze===3||ze===2)&&(ze=4),Ke===null||!(Xr&268435455)&&!(su&268435455)||Qn(Ke,Je)}function Al(t,e){var n=de;de|=2;var r=jv();(Ke!==t||Je!==e)&&(yn=null,Br(t,e));do try{lS();break}catch(s){Fv(t,s)}while(!0);if(kd(),de=n,Tl.current=r,Ve!==null)throw Error(z(261));return Ke=null,Je=0,ze}function lS(){for(;Ve!==null;)Uv(Ve)}function uS(){for(;Ve!==null&&!VT();)Uv(Ve)}function Uv(t){var e=Bv(t.alternate,t,xt);t.memoizedProps=t.pendingProps,e===null?zv(t):Ve=e,zd.current=null}function zv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=nS(n,e),n!==null){n.flags&=32767,Ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ze=6,Ve=null;return}}else if(n=tS(n,e,xt),n!==null){Ve=n;return}if(e=e.sibling,e!==null){Ve=e;return}Ve=e=t}while(e!==null);ze===0&&(ze=5)}function Lr(t,e,n){var r=pe,s=Mt.transition;try{Mt.transition=null,pe=1,cS(t,e,n,r)}finally{Mt.transition=s,pe=r}return null}function cS(t,e,n,r){do Ms();while(er!==null);if(de&6)throw Error(z(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(HT(t,i),t===Ke&&(Ve=Ke=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ra||(Ra=!0,Hv(ol,function(){return Ms(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Mt.transition,Mt.transition=null;var o=pe;pe=1;var l=de;de|=4,zd.current=null,sS(t,n),Ov(n,t),PI(lh),ll=!!ah,lh=ah=null,t.current=n,iS(n),OT(),de=l,pe=o,Mt.transition=i}else t.current=n;if(Ra&&(Ra=!1,er=t,Sl=s),i=t.pendingLanes,i===0&&(lr=null),FT(n.stateNode),It(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Il)throw Il=!1,t=kh,kh=null,t;return Sl&1&&t.tag!==0&&Ms(),i=t.pendingLanes,i&1?t===Ch?eo++:(eo=0,Ch=t):eo=0,Rr(),null}function Ms(){if(er!==null){var t=E_(Sl),e=Mt.transition,n=pe;try{if(Mt.transition=null,pe=16>t?16:t,er===null)var r=!1;else{if(t=er,er=null,Sl=0,de&6)throw Error(z(331));var s=de;for(de|=4,G=t.current;G!==null;){var i=G,o=i.child;if(G.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(G=h;G!==null;){var f=G;switch(f.tag){case 0:case 11:case 15:Ji(8,f,i)}var p=f.child;if(p!==null)p.return=f,G=p;else for(;G!==null;){f=G;var m=f.sibling,x=f.return;if(bv(f),f===h){G=null;break}if(m!==null){m.return=x,G=m;break}G=x}}}var C=i.alternate;if(C!==null){var N=C.child;if(N!==null){C.child=null;do{var L=N.sibling;N.sibling=null,N=L}while(N!==null)}}G=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,G=o;else e:for(;G!==null;){if(i=G,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ji(9,i,i.return)}var S=i.sibling;if(S!==null){S.return=i.return,G=S;break e}G=i.return}}var w=t.current;for(G=w;G!==null;){o=G;var R=o.child;if(o.subtreeFlags&2064&&R!==null)R.return=o,G=R;else e:for(o=w;G!==null;){if(l=G,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ru(9,l)}}catch(V){ke(l,l.return,V)}if(l===o){G=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,G=D;break e}G=l.return}}if(de=s,Rr(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(Ql,t)}catch{}r=!0}return r}finally{pe=n,Mt.transition=e}}return!1}function Zm(t,e,n){e=Gs(n,e),e=Ev(t,e,1),t=ar(t,e,1),e=pt(),t!==null&&(Oo(t,1,e),It(t,e))}function ke(t,e,n){if(t.tag===3)Zm(t,t,n);else for(;e!==null;){if(e.tag===3){Zm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(lr===null||!lr.has(r))){t=Gs(n,t),t=Tv(e,t,1),e=ar(e,t,1),t=pt(),e!==null&&(Oo(e,1,t),It(e,t));break}}e=e.return}}function hS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=pt(),t.pingedLanes|=t.suspendedLanes&n,Ke===t&&(Je&n)===n&&(ze===4||ze===3&&(Je&130023424)===Je&&500>Ne()-Bd?Br(t,0):$d|=n),It(t,e)}function $v(t,e){e===0&&(t.mode&1?(e=ya,ya<<=1,!(ya&130023424)&&(ya=4194304)):e=1);var n=pt();t=Pn(t,e),t!==null&&(Oo(t,e,n),It(t,n))}function dS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),$v(t,n)}function fS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),$v(t,n)}var Bv;Bv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Et.current)wt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return wt=!1,eS(t,e,n);wt=!!(t.flags&131072)}else wt=!1,Te&&e.flags&1048576&&K_(e,ml,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ba(t,e),t=e.pendingProps;var s=Hs(e,lt.current);Ls(e,n),s=Ld(null,e,r,t,s,n);var i=Md();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Tt(r)?(i=!0,fl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Nd(e),s.updater=nu,e.stateNode=s,s._reactInternals=e,yh(e,r,t,n),e=wh(null,e,r,!0,i,n)):(e.tag=0,Te&&i&&Sd(e),ft(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ba(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=mS(r),t=$t(r,t),s){case 0:e=vh(null,e,r,t,n);break e;case 1:e=Bm(null,e,r,t,n);break e;case 11:e=zm(null,e,r,t,n);break e;case 14:e=$m(null,e,r,$t(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:$t(r,s),vh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:$t(r,s),Bm(t,e,r,s,n);case 3:e:{if(xv(e),t===null)throw Error(z(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Z_(t,e),_l(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Gs(Error(z(423)),e),e=Hm(t,e,r,n,s);break e}else if(r!==s){s=Gs(Error(z(424)),e),e=Hm(t,e,r,n,s);break e}else for(Rt=or(e.stateNode.containerInfo.firstChild),Ct=e,Te=!0,Ht=null,n=X_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qs(),r===s){e=Nn(t,e,n);break e}ft(t,e,r,n)}e=e.child}return e;case 5:return ev(e),t===null&&ph(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,uh(r,s)?o=null:i!==null&&uh(r,i)&&(e.flags|=32),Av(t,e),ft(t,e,o,n),e.child;case 6:return t===null&&ph(e),null;case 13:return Rv(t,e,n);case 4:return bd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ws(e,null,r,n):ft(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:$t(r,s),zm(t,e,r,s,n);case 7:return ft(t,e,e.pendingProps,n),e.child;case 8:return ft(t,e,e.pendingProps.children,n),e.child;case 12:return ft(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ye(gl,r._currentValue),r._currentValue=o,i!==null)if(Jt(i.value,o)){if(i.children===s.children&&!Et.current){e=Nn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=xn(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),mh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(z(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),mh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ft(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Ls(e,n),s=jt(s),r=r(s),e.flags|=1,ft(t,e,r,n),e.child;case 14:return r=e.type,s=$t(r,e.pendingProps),s=$t(r.type,s),$m(t,e,r,s,n);case 15:return Iv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:$t(r,s),Ba(t,e),e.tag=1,Tt(r)?(t=!0,fl(e)):t=!1,Ls(e,n),wv(e,r,s),yh(e,r,s,n),wh(null,e,r,!0,t,n);case 19:return kv(t,e,n);case 22:return Sv(t,e,n)}throw Error(z(156,e.tag))};function Hv(t,e){return y_(t,e)}function pS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(t,e,n,r){return new pS(t,e,n,r)}function Kd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function mS(t){if(typeof t=="function")return Kd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===dd)return 11;if(t===fd)return 14}return 2}function cr(t,e){var n=t.alternate;return n===null?(n=Lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Wa(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Kd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case vs:return Hr(n.children,s,i,e);case hd:o=8,s|=8;break;case zc:return t=Lt(12,n,e,s|2),t.elementType=zc,t.lanes=i,t;case $c:return t=Lt(13,n,e,s),t.elementType=$c,t.lanes=i,t;case Bc:return t=Lt(19,n,e,s),t.elementType=Bc,t.lanes=i,t;case e_:return iu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Jy:o=10;break e;case Zy:o=9;break e;case dd:o=11;break e;case fd:o=14;break e;case Wn:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=Lt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Hr(t,e,n,r){return t=Lt(7,t,r,e),t.lanes=n,t}function iu(t,e,n,r){return t=Lt(22,t,r,e),t.elementType=e_,t.lanes=n,t.stateNode={isHidden:!1},t}function wc(t,e,n){return t=Lt(6,t,null,e),t.lanes=n,t}function Ec(t,e,n){return e=Lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function gS(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tc(0),this.expirationTimes=tc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Gd(t,e,n,r,s,i,o,l,u){return t=new gS(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Lt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nd(i),t}function yS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_s,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function qv(t){if(!t)return yr;t=t._reactInternals;e:{if(os(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Tt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(Tt(n))return q_(t,n,e)}return e}function Wv(t,e,n,r,s,i,o,l,u){return t=Gd(n,r,!0,t,s,i,o,l,u),t.context=qv(null),n=t.current,r=pt(),s=ur(n),i=xn(r,s),i.callback=e??null,ar(n,i,s),t.current.lanes=s,Oo(t,s,r),It(t,r),t}function ou(t,e,n,r){var s=e.current,i=pt(),o=ur(s);return n=qv(n),e.context===null?e.context=n:e.pendingContext=n,e=xn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ar(s,e,o),t!==null&&(Gt(t,s,o,i),Ua(t,s,o)),o}function xl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function eg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qd(t,e){eg(t,e),(t=t.alternate)&&eg(t,e)}function _S(){return null}var Kv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yd(t){this._internalRoot=t}au.prototype.render=Yd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));ou(t,e,null,null)};au.prototype.unmount=Yd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Jr(function(){ou(null,t,null,null)}),e[Cn]=null}};function au(t){this._internalRoot=t}au.prototype.unstable_scheduleHydration=function(t){if(t){var e=S_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gn.length&&e!==0&&e<Gn[n].priority;n++);Gn.splice(n,0,t),n===0&&x_(t)}};function Xd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function lu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function tg(){}function vS(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=xl(o);i.call(h)}}var o=Wv(e,r,t,0,null,!1,!1,"",tg);return t._reactRootContainer=o,t[Cn]=o.current,go(t.nodeType===8?t.parentNode:t),Jr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var h=xl(u);l.call(h)}}var u=Gd(t,0,!1,null,null,!1,!1,"",tg);return t._reactRootContainer=u,t[Cn]=u.current,go(t.nodeType===8?t.parentNode:t),Jr(function(){ou(e,u,n,r)}),u}function uu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=xl(o);l.call(u)}}ou(e,o,t,s)}else o=vS(n,e,t,s,r);return xl(o)}T_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ji(e.pendingLanes);n!==0&&(gd(e,n|1),It(e,Ne()),!(de&6)&&(Qs=Ne()+500,Rr()))}break;case 13:Jr(function(){var r=Pn(t,1);if(r!==null){var s=pt();Gt(r,t,1,s)}}),Qd(t,1)}};yd=function(t){if(t.tag===13){var e=Pn(t,134217728);if(e!==null){var n=pt();Gt(e,t,134217728,n)}Qd(t,134217728)}};I_=function(t){if(t.tag===13){var e=ur(t),n=Pn(t,e);if(n!==null){var r=pt();Gt(n,t,e,r)}Qd(t,e)}};S_=function(){return pe};A_=function(t,e){var n=pe;try{return pe=t,e()}finally{pe=n}};Zc=function(t,e,n){switch(e){case"input":if(Wc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Zl(r);if(!s)throw Error(z(90));n_(r),Wc(r,s)}}}break;case"textarea":s_(t,n);break;case"select":e=n.value,e!=null&&bs(t,!!n.multiple,e,!1)}};h_=Hd;d_=Jr;var wS={usingClientEntryPoint:!1,Events:[Mo,Is,Zl,u_,c_,Hd]},Oi={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ES={bundleType:Oi.bundleType,version:Oi.version,rendererPackageName:Oi.rendererPackageName,rendererConfig:Oi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=m_(t),t===null?null:t.stateNode},findFiberByHostInstance:Oi.findFiberByHostInstance||_S,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ka.isDisabled&&ka.supportsFiber)try{Ql=ka.inject(ES),an=ka}catch{}}Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wS;Nt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xd(e))throw Error(z(200));return yS(t,e,null,n)};Nt.createRoot=function(t,e){if(!Xd(t))throw Error(z(299));var n=!1,r="",s=Kv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Gd(t,1,!1,null,null,n,!1,r,s),t[Cn]=e.current,go(t.nodeType===8?t.parentNode:t),new Yd(e)};Nt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=m_(e),t=t===null?null:t.stateNode,t};Nt.flushSync=function(t){return Jr(t)};Nt.hydrate=function(t,e,n){if(!lu(e))throw Error(z(200));return uu(null,t,e,!0,n)};Nt.hydrateRoot=function(t,e,n){if(!Xd(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Kv;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Wv(e,null,t,1,n??null,s,!1,i,o),t[Cn]=e.current,go(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new au(e)};Nt.render=function(t,e,n){if(!lu(e))throw Error(z(200));return uu(null,t,e,!1,n)};Nt.unmountComponentAtNode=function(t){if(!lu(t))throw Error(z(40));return t._reactRootContainer?(Jr(function(){uu(null,null,t,!1,function(){t._reactRootContainer=null,t[Cn]=null})}),!0):!1};Nt.unstable_batchedUpdates=Hd;Nt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!lu(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return uu(t,e,n,!1,r)};Nt.version="18.3.1-next-f1338f8080-20240426";function Gv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gv)}catch(t){console.error(t)}}Gv(),Gy.exports=Nt;var TS=Gy.exports,ng=TS;jc.createRoot=ng.createRoot,jc.hydrateRoot=ng.hydrateRoot;/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=t=>{const e=SS(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Tc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},xS=J.createContext({}),RS=()=>J.useContext(xS),kS=J.forwardRef(({color:t,size:e,strokeWidth:n,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...l},u)=>{const{size:h=24,strokeWidth:f=2,absoluteStrokeWidth:p=!1,color:m="currentColor",className:x=""}=RS()??{},C=r??p?Number(n??f)*24/Number(e??h):n??f;return J.createElement("svg",{ref:u,...Tc,width:e??h??Tc.width,height:e??h??Tc.height,stroke:t??m,strokeWidth:C,className:Qv("lucide",x,s),...!i&&!AS(l)&&{"aria-hidden":"true"},...l},[...o.map(([N,L])=>J.createElement(N,L)),...Array.isArray(i)?i:[i]])});/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=(t,e)=>{const n=J.forwardRef(({className:r,...s},i)=>J.createElement(kS,{ref:i,iconNode:e,className:Qv(`lucide-${IS(rg(t))}`,`lucide-${t}`,r),...s}));return n.displayName=rg(t),n};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],PS=ct("arrow-left",CS);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Yv=ct("chart-column",NS);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],tr=ct("circle-check",bS);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],to=ct("circle-x",DS);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],OS=ct("clock",VS);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],MS=ct("download",LS);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=[["path",{d:"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",key:"1jaruq"}]],Ic=ct("flag",FS);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],US=ct("globe",jS);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],sg=ct("info",zS);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],BS=ct("layers",$S);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Jd=ct("loader-circle",HS);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],WS=ct("log-out",qS);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],GS=ct("map-pin",KS);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],YS=ct("triangle-alert",QS);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Rl=ct("user",XS);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],ZS=ct("users",JS),e1=()=>{};var ig={};/**
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
 */const Xv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},t1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Jv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,x=h&63;u||(x=64,o||(m=64)),r.push(n[f],n[p],n[m],n[x])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):t1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new n1;const m=i<<2|l>>4;if(r.push(m),h!==64){const x=l<<4&240|h>>2;if(r.push(x),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class n1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const r1=function(t){const e=Xv(t);return Jv.encodeByteArray(e,!0)},kl=function(t){return r1(t).replace(/\./g,"")},Zv=function(t){try{return Jv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function s1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const i1=()=>s1().__FIREBASE_DEFAULTS__,o1=()=>{if(typeof process>"u"||typeof ig>"u")return;const t=ig.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},a1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Zv(t[1]);return e&&JSON.parse(e)},cu=()=>{try{return e1()||i1()||o1()||a1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},e0=t=>{var e,n;return(n=(e=cu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},l1=t=>{const e=e0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},t0=()=>{var t;return(t=cu())==null?void 0:t.config},n0=t=>{var e;return(e=cu())==null?void 0:e[`_${t}`]};/**
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
 */class u1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function c1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[kl(JSON.stringify(n)),kl(JSON.stringify(o)),""].join(".")}/**
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
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function h1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function d1(){var e;const t=(e=cu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function f1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function p1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function m1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function g1(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function y1(){return!d1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _1(){try{return typeof indexedDB=="object"}catch{return!1}}function v1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const w1="FirebaseError";class Mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=w1,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jo.prototype.create)}}class jo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?E1(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Mn(s,l,r)}}function E1(t,e){return t.replace(T1,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const T1=/\{\$([^}]+)}/g;function I1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(og(i)&&og(o)){if(!Zr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function og(t){return t!==null&&typeof t=="object"}/**
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
 */function Uo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function S1(t,e){const n=new A1(t,e);return n.subscribe.bind(n)}class A1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");x1(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Sc),s.error===void 0&&(s.error=Sc),s.complete===void 0&&(s.complete=Sc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function x1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Sc(){}/**
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
 */function Be(t){return t&&t._delegate?t._delegate:t}/**
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
 */function zo(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function r0(t){return(await fetch(t,{credentials:"include"})).ok}class es{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Mr="[DEFAULT]";/**
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
 */class R1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new u1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(C1(e))try{this.getOrInitializeService({instanceIdentifier:Mr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mr){return this.instances.has(e)}getOptions(e=Mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:k1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mr){return this.component?this.component.multipleInstances?e:Mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function k1(t){return t===Mr?void 0:t}function C1(t){return t.instantiationMode==="EAGER"}/**
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
 */class P1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new R1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const N1={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},b1=ce.INFO,D1={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},V1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=D1[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zd{constructor(e){this.name=e,this._logLevel=b1,this._logHandler=V1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?N1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const O1=(t,e)=>e.some(n=>t instanceof n);let ag,lg;function L1(){return ag||(ag=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function M1(){return lg||(lg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const s0=new WeakMap,bh=new WeakMap,i0=new WeakMap,Ac=new WeakMap,ef=new WeakMap;function F1(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(hr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&s0.set(n,t)}).catch(()=>{}),ef.set(e,t),e}function j1(t){if(bh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});bh.set(t,e)}let Dh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||i0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function U1(t){Dh=t(Dh)}function z1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(xc(this),e,...n);return i0.set(r,e.sort?e.sort():[e]),hr(r)}:M1().includes(t)?function(...e){return t.apply(xc(this),e),hr(s0.get(this))}:function(...e){return hr(t.apply(xc(this),e))}}function $1(t){return typeof t=="function"?z1(t):(t instanceof IDBTransaction&&j1(t),O1(t,L1())?new Proxy(t,Dh):t)}function hr(t){if(t instanceof IDBRequest)return F1(t);if(Ac.has(t))return Ac.get(t);const e=$1(t);return e!==t&&(Ac.set(t,e),ef.set(e,t)),e}const xc=t=>ef.get(t);function B1(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=hr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(hr(o.result),u.oldVersion,u.newVersion,hr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const H1=["get","getKey","getAll","getAllKeys","count"],q1=["put","add","delete","clear"],Rc=new Map;function ug(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rc.get(e))return Rc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=q1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||H1.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return Rc.set(e,i),i}U1(t=>({...t,get:(e,n,r)=>ug(e,n)||t.get(e,n,r),has:(e,n)=>!!ug(e,n)||t.has(e,n)}));/**
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
 */class W1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(K1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function K1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vh="@firebase/app",cg="0.14.12";/**
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
 */const bn=new Zd("@firebase/app"),G1="@firebase/app-compat",Q1="@firebase/analytics-compat",Y1="@firebase/analytics",X1="@firebase/app-check-compat",J1="@firebase/app-check",Z1="@firebase/auth",eA="@firebase/auth-compat",tA="@firebase/database",nA="@firebase/data-connect",rA="@firebase/database-compat",sA="@firebase/functions",iA="@firebase/functions-compat",oA="@firebase/installations",aA="@firebase/installations-compat",lA="@firebase/messaging",uA="@firebase/messaging-compat",cA="@firebase/performance",hA="@firebase/performance-compat",dA="@firebase/remote-config",fA="@firebase/remote-config-compat",pA="@firebase/storage",mA="@firebase/storage-compat",gA="@firebase/firestore",yA="@firebase/ai",_A="@firebase/firestore-compat",vA="firebase",wA="12.13.0";/**
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
 */const Oh="[DEFAULT]",EA={[Vh]:"fire-core",[G1]:"fire-core-compat",[Y1]:"fire-analytics",[Q1]:"fire-analytics-compat",[J1]:"fire-app-check",[X1]:"fire-app-check-compat",[Z1]:"fire-auth",[eA]:"fire-auth-compat",[tA]:"fire-rtdb",[nA]:"fire-data-connect",[rA]:"fire-rtdb-compat",[sA]:"fire-fn",[iA]:"fire-fn-compat",[oA]:"fire-iid",[aA]:"fire-iid-compat",[lA]:"fire-fcm",[uA]:"fire-fcm-compat",[cA]:"fire-perf",[hA]:"fire-perf-compat",[dA]:"fire-rc",[fA]:"fire-rc-compat",[pA]:"fire-gcs",[mA]:"fire-gcs-compat",[gA]:"fire-fst",[_A]:"fire-fst-compat",[yA]:"fire-vertex","fire-js":"fire-js",[vA]:"fire-js-all"};/**
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
 */const Cl=new Map,TA=new Map,Lh=new Map;function hg(t,e){try{t.container.addComponent(e)}catch(n){bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ys(t){const e=t.name;if(Lh.has(e))return bn.debug(`There were multiple attempts to register component ${e}.`),!1;Lh.set(e,t);for(const n of Cl.values())hg(n,t);for(const n of TA.values())hg(n,t);return!0}function tf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function qt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const IA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dr=new jo("app","Firebase",IA);/**
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
 */class SA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new es("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dr.create("app-deleted",{appName:this._name})}}/**
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
 */const oi=wA;function o0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Oh,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw dr.create("bad-app-name",{appName:String(s)});if(n||(n=t0()),!n)throw dr.create("no-options");const i=Cl.get(s);if(i){if(Zr(n,i.options)&&Zr(r,i.config))return i;throw dr.create("duplicate-app",{appName:s})}const o=new P1(s);for(const u of Lh.values())o.addComponent(u);const l=new SA(n,r,o);return Cl.set(s,l),l}function a0(t=Oh){const e=Cl.get(t);if(!e&&t===Oh&&t0())return o0();if(!e)throw dr.create("no-app",{appName:t});return e}function fr(t,e,n){let r=EA[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bn.warn(o.join(" "));return}Ys(new es(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const AA="firebase-heartbeat-database",xA=1,Ao="firebase-heartbeat-store";let kc=null;function l0(){return kc||(kc=B1(AA,xA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ao)}catch(n){console.warn(n)}}}}).catch(t=>{throw dr.create("idb-open",{originalErrorMessage:t.message})})),kc}async function RA(t){try{const n=(await l0()).transaction(Ao),r=await n.objectStore(Ao).get(u0(t));return await n.done,r}catch(e){if(e instanceof Mn)bn.warn(e.message);else{const n=dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bn.warn(n.message)}}}async function dg(t,e){try{const r=(await l0()).transaction(Ao,"readwrite");await r.objectStore(Ao).put(e,u0(t)),await r.done}catch(n){if(n instanceof Mn)bn.warn(n.message);else{const r=dr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bn.warn(r.message)}}}function u0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const kA=1024,CA=30;class PA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=fg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>CA){const o=DA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){bn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=fg(),{heartbeatsToSend:r,unsentEntries:s}=NA(this._heartbeatsCache.heartbeats),i=kl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return bn.warn(n),""}}}function fg(){return new Date().toISOString().substring(0,10)}function NA(t,e=kA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),pg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),pg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _1()?v1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await RA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return dg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return dg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function pg(t){return kl(JSON.stringify({version:2,heartbeats:t})).length}function DA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function VA(t){Ys(new es("platform-logger",e=>new W1(e),"PRIVATE")),Ys(new es("heartbeat",e=>new PA(e),"PRIVATE")),fr(Vh,cg,t),fr(Vh,cg,"esm2020"),fr("fire-js","")}VA("");var mg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pr,c0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,y){function E(){}E.prototype=y.prototype,_.F=y.prototype,_.prototype=new E,_.prototype.constructor=_,_.D=function(I,A,k){for(var T=Array(arguments.length-2),$=2;$<arguments.length;$++)T[$-2]=arguments[$];return y.prototype[A].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(_,y,E){E||(E=0);const I=Array(16);if(typeof y=="string")for(var A=0;A<16;++A)I[A]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(A=0;A<16;++A)I[A]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=_.g[0],E=_.g[1],A=_.g[2];let k=_.g[3],T;T=y+(k^E&(A^k))+I[0]+3614090360&4294967295,y=E+(T<<7&4294967295|T>>>25),T=k+(A^y&(E^A))+I[1]+3905402710&4294967295,k=y+(T<<12&4294967295|T>>>20),T=A+(E^k&(y^E))+I[2]+606105819&4294967295,A=k+(T<<17&4294967295|T>>>15),T=E+(y^A&(k^y))+I[3]+3250441966&4294967295,E=A+(T<<22&4294967295|T>>>10),T=y+(k^E&(A^k))+I[4]+4118548399&4294967295,y=E+(T<<7&4294967295|T>>>25),T=k+(A^y&(E^A))+I[5]+1200080426&4294967295,k=y+(T<<12&4294967295|T>>>20),T=A+(E^k&(y^E))+I[6]+2821735955&4294967295,A=k+(T<<17&4294967295|T>>>15),T=E+(y^A&(k^y))+I[7]+4249261313&4294967295,E=A+(T<<22&4294967295|T>>>10),T=y+(k^E&(A^k))+I[8]+1770035416&4294967295,y=E+(T<<7&4294967295|T>>>25),T=k+(A^y&(E^A))+I[9]+2336552879&4294967295,k=y+(T<<12&4294967295|T>>>20),T=A+(E^k&(y^E))+I[10]+4294925233&4294967295,A=k+(T<<17&4294967295|T>>>15),T=E+(y^A&(k^y))+I[11]+2304563134&4294967295,E=A+(T<<22&4294967295|T>>>10),T=y+(k^E&(A^k))+I[12]+1804603682&4294967295,y=E+(T<<7&4294967295|T>>>25),T=k+(A^y&(E^A))+I[13]+4254626195&4294967295,k=y+(T<<12&4294967295|T>>>20),T=A+(E^k&(y^E))+I[14]+2792965006&4294967295,A=k+(T<<17&4294967295|T>>>15),T=E+(y^A&(k^y))+I[15]+1236535329&4294967295,E=A+(T<<22&4294967295|T>>>10),T=y+(A^k&(E^A))+I[1]+4129170786&4294967295,y=E+(T<<5&4294967295|T>>>27),T=k+(E^A&(y^E))+I[6]+3225465664&4294967295,k=y+(T<<9&4294967295|T>>>23),T=A+(y^E&(k^y))+I[11]+643717713&4294967295,A=k+(T<<14&4294967295|T>>>18),T=E+(k^y&(A^k))+I[0]+3921069994&4294967295,E=A+(T<<20&4294967295|T>>>12),T=y+(A^k&(E^A))+I[5]+3593408605&4294967295,y=E+(T<<5&4294967295|T>>>27),T=k+(E^A&(y^E))+I[10]+38016083&4294967295,k=y+(T<<9&4294967295|T>>>23),T=A+(y^E&(k^y))+I[15]+3634488961&4294967295,A=k+(T<<14&4294967295|T>>>18),T=E+(k^y&(A^k))+I[4]+3889429448&4294967295,E=A+(T<<20&4294967295|T>>>12),T=y+(A^k&(E^A))+I[9]+568446438&4294967295,y=E+(T<<5&4294967295|T>>>27),T=k+(E^A&(y^E))+I[14]+3275163606&4294967295,k=y+(T<<9&4294967295|T>>>23),T=A+(y^E&(k^y))+I[3]+4107603335&4294967295,A=k+(T<<14&4294967295|T>>>18),T=E+(k^y&(A^k))+I[8]+1163531501&4294967295,E=A+(T<<20&4294967295|T>>>12),T=y+(A^k&(E^A))+I[13]+2850285829&4294967295,y=E+(T<<5&4294967295|T>>>27),T=k+(E^A&(y^E))+I[2]+4243563512&4294967295,k=y+(T<<9&4294967295|T>>>23),T=A+(y^E&(k^y))+I[7]+1735328473&4294967295,A=k+(T<<14&4294967295|T>>>18),T=E+(k^y&(A^k))+I[12]+2368359562&4294967295,E=A+(T<<20&4294967295|T>>>12),T=y+(E^A^k)+I[5]+4294588738&4294967295,y=E+(T<<4&4294967295|T>>>28),T=k+(y^E^A)+I[8]+2272392833&4294967295,k=y+(T<<11&4294967295|T>>>21),T=A+(k^y^E)+I[11]+1839030562&4294967295,A=k+(T<<16&4294967295|T>>>16),T=E+(A^k^y)+I[14]+4259657740&4294967295,E=A+(T<<23&4294967295|T>>>9),T=y+(E^A^k)+I[1]+2763975236&4294967295,y=E+(T<<4&4294967295|T>>>28),T=k+(y^E^A)+I[4]+1272893353&4294967295,k=y+(T<<11&4294967295|T>>>21),T=A+(k^y^E)+I[7]+4139469664&4294967295,A=k+(T<<16&4294967295|T>>>16),T=E+(A^k^y)+I[10]+3200236656&4294967295,E=A+(T<<23&4294967295|T>>>9),T=y+(E^A^k)+I[13]+681279174&4294967295,y=E+(T<<4&4294967295|T>>>28),T=k+(y^E^A)+I[0]+3936430074&4294967295,k=y+(T<<11&4294967295|T>>>21),T=A+(k^y^E)+I[3]+3572445317&4294967295,A=k+(T<<16&4294967295|T>>>16),T=E+(A^k^y)+I[6]+76029189&4294967295,E=A+(T<<23&4294967295|T>>>9),T=y+(E^A^k)+I[9]+3654602809&4294967295,y=E+(T<<4&4294967295|T>>>28),T=k+(y^E^A)+I[12]+3873151461&4294967295,k=y+(T<<11&4294967295|T>>>21),T=A+(k^y^E)+I[15]+530742520&4294967295,A=k+(T<<16&4294967295|T>>>16),T=E+(A^k^y)+I[2]+3299628645&4294967295,E=A+(T<<23&4294967295|T>>>9),T=y+(A^(E|~k))+I[0]+4096336452&4294967295,y=E+(T<<6&4294967295|T>>>26),T=k+(E^(y|~A))+I[7]+1126891415&4294967295,k=y+(T<<10&4294967295|T>>>22),T=A+(y^(k|~E))+I[14]+2878612391&4294967295,A=k+(T<<15&4294967295|T>>>17),T=E+(k^(A|~y))+I[5]+4237533241&4294967295,E=A+(T<<21&4294967295|T>>>11),T=y+(A^(E|~k))+I[12]+1700485571&4294967295,y=E+(T<<6&4294967295|T>>>26),T=k+(E^(y|~A))+I[3]+2399980690&4294967295,k=y+(T<<10&4294967295|T>>>22),T=A+(y^(k|~E))+I[10]+4293915773&4294967295,A=k+(T<<15&4294967295|T>>>17),T=E+(k^(A|~y))+I[1]+2240044497&4294967295,E=A+(T<<21&4294967295|T>>>11),T=y+(A^(E|~k))+I[8]+1873313359&4294967295,y=E+(T<<6&4294967295|T>>>26),T=k+(E^(y|~A))+I[15]+4264355552&4294967295,k=y+(T<<10&4294967295|T>>>22),T=A+(y^(k|~E))+I[6]+2734768916&4294967295,A=k+(T<<15&4294967295|T>>>17),T=E+(k^(A|~y))+I[13]+1309151649&4294967295,E=A+(T<<21&4294967295|T>>>11),T=y+(A^(E|~k))+I[4]+4149444226&4294967295,y=E+(T<<6&4294967295|T>>>26),T=k+(E^(y|~A))+I[11]+3174756917&4294967295,k=y+(T<<10&4294967295|T>>>22),T=A+(y^(k|~E))+I[2]+718787259&4294967295,A=k+(T<<15&4294967295|T>>>17),T=E+(k^(A|~y))+I[9]+3951481745&4294967295,_.g[0]=_.g[0]+y&4294967295,_.g[1]=_.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,_.g[2]=_.g[2]+A&4294967295,_.g[3]=_.g[3]+k&4294967295}r.prototype.v=function(_,y){y===void 0&&(y=_.length);const E=y-this.blockSize,I=this.C;let A=this.h,k=0;for(;k<y;){if(A==0)for(;k<=E;)s(this,_,k),k+=this.blockSize;if(typeof _=="string"){for(;k<y;)if(I[A++]=_.charCodeAt(k++),A==this.blockSize){s(this,I),A=0;break}}else for(;k<y;)if(I[A++]=_[k++],A==this.blockSize){s(this,I),A=0;break}}this.h=A,this.o+=y},r.prototype.A=function(){var _=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);_[0]=128;for(var y=1;y<_.length-8;++y)_[y]=0;y=this.o*8;for(var E=_.length-8;E<_.length;++E)_[E]=y&255,y/=256;for(this.v(_),_=Array(16),y=0,E=0;E<4;++E)for(let I=0;I<32;I+=8)_[y++]=this.g[E]>>>I&255;return _};function i(_,y){var E=l;return Object.prototype.hasOwnProperty.call(E,_)?E[_]:E[_]=y(_)}function o(_,y){this.h=y;const E=[];let I=!0;for(let A=_.length-1;A>=0;A--){const k=_[A]|0;I&&k==y||(E[A]=k,I=!1)}this.g=E}var l={};function u(_){return-128<=_&&_<128?i(_,function(y){return new o([y|0],y<0?-1:0)}):new o([_|0],_<0?-1:0)}function h(_){if(isNaN(_)||!isFinite(_))return p;if(_<0)return L(h(-_));const y=[];let E=1;for(let I=0;_>=E;I++)y[I]=_/E|0,E*=4294967296;return new o(y,0)}function f(_,y){if(_.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(_.charAt(0)=="-")return L(f(_.substring(1),y));if(_.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=h(Math.pow(y,8));let I=p;for(let k=0;k<_.length;k+=8){var A=Math.min(8,_.length-k);const T=parseInt(_.substring(k,k+A),y);A<8?(A=h(Math.pow(y,A)),I=I.j(A).add(h(T))):(I=I.j(E),I=I.add(h(T)))}return I}var p=u(0),m=u(1),x=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-L(this).m();let _=0,y=1;for(let E=0;E<this.g.length;E++){const I=this.i(E);_+=(I>=0?I:4294967296+I)*y,y*=4294967296}return _},t.toString=function(_){if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(C(this))return"0";if(N(this))return"-"+L(this).toString(_);const y=h(Math.pow(_,6));var E=this;let I="";for(;;){const A=D(E,y).g;E=S(E,A.j(y));let k=((E.g.length>0?E.g[0]:E.h)>>>0).toString(_);if(E=A,C(E))return k+I;for(;k.length<6;)k="0"+k;I=k+I}},t.i=function(_){return _<0?0:_<this.g.length?this.g[_]:this.h};function C(_){if(_.h!=0)return!1;for(let y=0;y<_.g.length;y++)if(_.g[y]!=0)return!1;return!0}function N(_){return _.h==-1}t.l=function(_){return _=S(this,_),N(_)?-1:C(_)?0:1};function L(_){const y=_.g.length,E=[];for(let I=0;I<y;I++)E[I]=~_.g[I];return new o(E,~_.h).add(m)}t.abs=function(){return N(this)?L(this):this},t.add=function(_){const y=Math.max(this.g.length,_.g.length),E=[];let I=0;for(let A=0;A<=y;A++){let k=I+(this.i(A)&65535)+(_.i(A)&65535),T=(k>>>16)+(this.i(A)>>>16)+(_.i(A)>>>16);I=T>>>16,k&=65535,T&=65535,E[A]=T<<16|k}return new o(E,E[E.length-1]&-2147483648?-1:0)};function S(_,y){return _.add(L(y))}t.j=function(_){if(C(this)||C(_))return p;if(N(this))return N(_)?L(this).j(L(_)):L(L(this).j(_));if(N(_))return L(this.j(L(_)));if(this.l(x)<0&&_.l(x)<0)return h(this.m()*_.m());const y=this.g.length+_.g.length,E=[];for(var I=0;I<2*y;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(let A=0;A<_.g.length;A++){const k=this.i(I)>>>16,T=this.i(I)&65535,$=_.i(A)>>>16,Y=_.i(A)&65535;E[2*I+2*A]+=T*Y,w(E,2*I+2*A),E[2*I+2*A+1]+=k*Y,w(E,2*I+2*A+1),E[2*I+2*A+1]+=T*$,w(E,2*I+2*A+1),E[2*I+2*A+2]+=k*$,w(E,2*I+2*A+2)}for(_=0;_<y;_++)E[_]=E[2*_+1]<<16|E[2*_];for(_=y;_<2*y;_++)E[_]=0;return new o(E,0)};function w(_,y){for(;(_[y]&65535)!=_[y];)_[y+1]+=_[y]>>>16,_[y]&=65535,y++}function R(_,y){this.g=_,this.h=y}function D(_,y){if(C(y))throw Error("division by zero");if(C(_))return new R(p,p);if(N(_))return y=D(L(_),y),new R(L(y.g),L(y.h));if(N(y))return y=D(_,L(y)),new R(L(y.g),y.h);if(_.g.length>30){if(N(_)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,I=y;I.l(_)<=0;)E=V(E),I=V(I);var A=j(E,1),k=j(I,1);for(I=j(I,2),E=j(E,2);!C(I);){var T=k.add(I);T.l(_)<=0&&(A=A.add(E),k=T),I=j(I,1),E=j(E,1)}return y=S(_,A.j(y)),new R(A,y)}for(A=p;_.l(y)>=0;){for(E=Math.max(1,Math.floor(_.m()/y.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),k=h(E),T=k.j(y);N(T)||T.l(_)>0;)E-=I,k=h(E),T=k.j(y);C(k)&&(k=m),A=A.add(k),_=S(_,T)}return new R(A,_)}t.B=function(_){return D(this,_).h},t.and=function(_){const y=Math.max(this.g.length,_.g.length),E=[];for(let I=0;I<y;I++)E[I]=this.i(I)&_.i(I);return new o(E,this.h&_.h)},t.or=function(_){const y=Math.max(this.g.length,_.g.length),E=[];for(let I=0;I<y;I++)E[I]=this.i(I)|_.i(I);return new o(E,this.h|_.h)},t.xor=function(_){const y=Math.max(this.g.length,_.g.length),E=[];for(let I=0;I<y;I++)E[I]=this.i(I)^_.i(I);return new o(E,this.h^_.h)};function V(_){const y=_.g.length+1,E=[];for(let I=0;I<y;I++)E[I]=_.i(I)<<1|_.i(I-1)>>>31;return new o(E,_.h)}function j(_,y){const E=y>>5;y%=32;const I=_.g.length-E,A=[];for(let k=0;k<I;k++)A[k]=y>0?_.i(k+E)>>>y|_.i(k+E+1)<<32-y:_.i(k+E);return new o(A,_.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,c0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,pr=o}).apply(typeof mg<"u"?mg:typeof self<"u"?self:typeof window<"u"?window:{});var Ca=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var h0,zi,d0,Ka,Mh,f0,p0,m0;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ca=="object"&&Ca];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in d))break e;d=d[P]}a=a[a.length-1],g=d[a],c=c(g),c!=g&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(c){var d=[],g;for(g in c)Object.prototype.hasOwnProperty.call(c,g)&&d.push([g,c[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function u(a,c,d){return a.call.apply(a.bind,arguments)}function h(a,c,d){return h=u,h.apply(null,arguments)}function f(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,c){function d(){}d.prototype=c.prototype,a.Z=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,P,b){for(var B=Array(arguments.length-2),re=2;re<arguments.length;re++)B[re-2]=arguments[re];return c.prototype[P].apply(g,B)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function x(a){const c=a.length;if(c>0){const d=Array(c);for(let g=0;g<c;g++)d[g]=a[g];return d}return[]}function C(a,c){for(let g=1;g<arguments.length;g++){const P=arguments[g];var d=typeof P;if(d=d!="object"?d:P?Array.isArray(P)?"array":d:"null",d=="array"||d=="object"&&typeof P.length=="number"){d=a.length||0;const b=P.length||0;a.length=d+b;for(let B=0;B<b;B++)a[d+B]=P[B]}else a.push(P)}}class N{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function L(a){o.setTimeout(()=>{throw a},0)}function S(){var a=_;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class w{constructor(){this.h=this.g=null}add(c,d){const g=R.get();g.set(c,d),this.h?this.h.next=g:this.g=g,this.h=g}}var R=new N(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let V,j=!1,_=new w,y=()=>{const a=Promise.resolve(void 0);V=()=>{a.then(E)}};function E(){for(var a;a=S();){try{a.h.call(a.g)}catch(d){L(d)}var c=R;c.j(a),c.h<100&&(c.h++,a.next=c.g,c.g=a)}j=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,c),o.removeEventListener("test",d,c)}catch{}return a}();function T(a){return/^[\s\xa0]*$/.test(a)}function $(a,c){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,c)}p($,A),$.prototype.init=function(a,c){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget,c||(d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement)),this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&$.Z.h.call(this)},$.prototype.h=function(){$.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Y="closure_listenable_"+(Math.random()*1e6|0),W=0;function ue(a,c,d,g,P){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!g,this.ha=P,this.key=++W,this.da=this.fa=!1}function F(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function U(a,c,d){for(const g in a)c.call(d,a[g],g,a)}function H(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function X(a){const c={};for(const d in a)c[d]=a[d];return c}const ie="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function se(a,c){let d,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(d in g)a[d]=g[d];for(let b=0;b<ie.length;b++)d=ie[b],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function Ce(a){this.src=a,this.g={},this.h=0}Ce.prototype.add=function(a,c,d,g,P){const b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);const B=Fe(a,c,g,P);return B>-1?(c=a[B],d||(c.fa=!1)):(c=new ue(c,this.src,b,!!g,P),c.fa=d,a.push(c)),c};function Me(a,c){const d=c.type;if(d in a.g){var g=a.g[d],P=Array.prototype.indexOf.call(g,c,void 0),b;(b=P>=0)&&Array.prototype.splice.call(g,P,1),b&&(F(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Fe(a,c,d,g){for(let P=0;P<a.length;++P){const b=a[P];if(!b.da&&b.listener==c&&b.capture==!!d&&b.ha==g)return P}return-1}var St="closure_lm_"+(Math.random()*1e6|0),gn={};function Yf(a,c,d,g,P){if(Array.isArray(c)){for(let b=0;b<c.length;b++)Yf(a,c[b],d,g,P);return null}return d=Zf(d),a&&a[Y]?a.J(c,d,l(g)?!!g.capture:!1,P):wE(a,c,d,!1,g,P)}function wE(a,c,d,g,P,b){if(!c)throw Error("Invalid event type");const B=l(P)?!!P.capture:!!P;let re=Nu(a);if(re||(a[St]=re=new Ce(a)),d=re.add(c,d,g,B,b),d.proxy)return d;if(g=EE(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)k||(P=B),P===void 0&&(P=!1),a.addEventListener(c.toString(),g,P);else if(a.attachEvent)a.attachEvent(Jf(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function EE(){function a(d){return c.call(a.src,a.listener,d)}const c=TE;return a}function Xf(a,c,d,g,P){if(Array.isArray(c))for(var b=0;b<c.length;b++)Xf(a,c[b],d,g,P);else g=l(g)?!!g.capture:!!g,d=Zf(d),a&&a[Y]?(a=a.i,b=String(c).toString(),b in a.g&&(c=a.g[b],d=Fe(c,d,g,P),d>-1&&(F(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete a.g[b],a.h--)))):a&&(a=Nu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Fe(c,d,g,P)),(d=a>-1?c[a]:null)&&Pu(d))}function Pu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[Y])Me(c.i,a);else{var d=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(d,g,a.capture):c.detachEvent?c.detachEvent(Jf(d),g):c.addListener&&c.removeListener&&c.removeListener(g),(d=Nu(c))?(Me(d,a),d.h==0&&(d.src=null,c[St]=null)):F(a)}}}function Jf(a){return a in gn?gn[a]:gn[a]="on"+a}function TE(a,c){if(a.da)a=!0;else{c=new $(c,this);const d=a.listener,g=a.ha||a.src;a.fa&&Pu(a),a=d.call(g,c)}return a}function Nu(a){return a=a[St],a instanceof Ce?a:null}var bu="__closure_events_fn_"+(Math.random()*1e9>>>0);function Zf(a){return typeof a=="function"?a:(a[bu]||(a[bu]=function(c){return a.handleEvent(c)}),a[bu])}function tt(){I.call(this),this.i=new Ce(this),this.M=this,this.G=null}p(tt,I),tt.prototype[Y]=!0,tt.prototype.removeEventListener=function(a,c,d,g){Xf(this,a,c,d,g)};function ht(a,c){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new A(c,a);else if(c instanceof A)c.target=c.target||a;else{var P=c;c=new A(g,a),se(c,P)}P=!0;let b,B;if(d)for(B=d.length-1;B>=0;B--)b=c.g=d[B],P=ea(b,g,!0,c)&&P;if(b=c.g=a,P=ea(b,g,!0,c)&&P,P=ea(b,g,!1,c)&&P,d)for(B=0;B<d.length;B++)b=c.g=d[B],P=ea(b,g,!1,c)&&P}tt.prototype.N=function(){if(tt.Z.N.call(this),this.i){var a=this.i;for(const c in a.g){const d=a.g[c];for(let g=0;g<d.length;g++)F(d[g]);delete a.g[c],a.h--}}this.G=null},tt.prototype.J=function(a,c,d,g){return this.i.add(String(a),c,!1,d,g)},tt.prototype.K=function(a,c,d,g){return this.i.add(String(a),c,!0,d,g)};function ea(a,c,d,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();let P=!0;for(let b=0;b<c.length;++b){const B=c[b];if(B&&!B.da&&B.capture==d){const re=B.listener,je=B.ha||B.src;B.fa&&Me(a.i,B),P=re.call(je,g)!==!1&&P}}return P&&!g.defaultPrevented}function IE(a,c){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(a,c||0)}function ep(a){a.g=IE(()=>{a.g=null,a.i&&(a.i=!1,ep(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class SE extends I{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:ep(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function di(a){I.call(this),this.h=a,this.g={}}p(di,I);var tp=[];function np(a){U(a.g,function(c,d){this.g.hasOwnProperty(d)&&Pu(c)},a),a.g={}}di.prototype.N=function(){di.Z.N.call(this),np(this)},di.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Du=o.JSON.stringify,AE=o.JSON.parse,xE=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function rp(){}function sp(){}var fi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Vu(){A.call(this,"d")}p(Vu,A);function Ou(){A.call(this,"c")}p(Ou,A);var Pr={},ip=null;function ta(){return ip=ip||new tt}Pr.Ia="serverreachability";function op(a){A.call(this,Pr.Ia,a)}p(op,A);function pi(a){const c=ta();ht(c,new op(c))}Pr.STAT_EVENT="statevent";function ap(a,c){A.call(this,Pr.STAT_EVENT,a),this.stat=c}p(ap,A);function dt(a){const c=ta();ht(c,new ap(c,a))}Pr.Ja="timingevent";function lp(a,c){A.call(this,Pr.Ja,a),this.size=c}p(lp,A);function mi(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},c)}function gi(){this.g=!0}gi.prototype.ua=function(){this.g=!1};function RE(a,c,d,g,P,b){a.info(function(){if(a.g)if(b){var B="",re=b.split("&");for(let me=0;me<re.length;me++){var je=re[me].split("=");if(je.length>1){const He=je[0];je=je[1];const tn=He.split("_");B=tn.length>=2&&tn[1]=="type"?B+(He+"="+je+"&"):B+(He+"=redacted&")}}}else B=null;else B=b;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+c+`
`+d+`
`+B})}function kE(a,c,d,g,P,b,B){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+c+`
`+d+`
`+b+" "+B})}function cs(a,c,d,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+PE(a,d)+(g?" "+g:"")})}function CE(a,c){a.info(function(){return"TIMEOUT: "+c})}gi.prototype.info=function(){};function PE(a,c){if(!a.g)return c;if(!c)return null;try{const b=JSON.parse(c);if(b){for(a=0;a<b.length;a++)if(Array.isArray(b[a])){var d=b[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var P=g[0];if(P!="noop"&&P!="stop"&&P!="close")for(let B=1;B<g.length;B++)g[B]=""}}}}return Du(b)}catch{return c}}var na={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},up={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},cp;function Lu(){}p(Lu,rp),Lu.prototype.g=function(){return new XMLHttpRequest},cp=new Lu;function yi(a){return encodeURIComponent(String(a))}function NE(a){var c=1;a=a.split(":");const d=[];for(;c>0&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function Fn(a,c,d,g){this.j=a,this.i=c,this.l=d,this.S=g||1,this.V=new di(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new hp}function hp(){this.i=null,this.g="",this.h=!1}var dp={},Mu={};function Fu(a,c,d){a.M=1,a.A=sa(en(c)),a.u=d,a.R=!0,fp(a,null)}function fp(a,c){a.F=Date.now(),ra(a),a.B=en(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),xp(d.i,"t",g),a.C=0,d=a.j.L,a.h=new hp,a.g=Hp(a.j,d?c:null,!a.u),a.P>0&&(a.O=new SE(h(a.Y,a,a.g),a.P)),c=a.V,d=a.g,g=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(tp[0]=P.toString()),P=tp);for(let b=0;b<P.length;b++){const B=Yf(d,P[b],g||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=a.J?X(a.J):{},a.u?(a.v||(a.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,c)):(a.v="GET",a.g.ea(a.B,a.v,null,c)),pi(),RE(a.i,a.v,a.B,a.l,a.S,a.u)}Fn.prototype.ba=function(a){a=a.target;const c=this.O;c&&zn(a)==3?c.j():this.Y(a)},Fn.prototype.Y=function(a){try{if(a==this.g)e:{const re=zn(this.g),je=this.g.ya(),me=this.g.ca();if(!(re<3)&&(re!=3||this.g&&(this.h.h||this.g.la()||Dp(this.g)))){this.K||re!=4||je==7||(je==8||me<=0?pi(3):pi(2)),ju(this);var c=this.g.ca();this.X=c;var d=bE(this);if(this.o=c==200,kE(this.i,this.v,this.B,this.l,this.S,re,c),this.o){if(this.U&&!this.L){t:{if(this.g){var g,P=this.g;if((g=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(g)){var b=g;break t}}b=null}if(a=b)cs(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Uu(this,a);else{this.o=!1,this.m=3,dt(12),Nr(this),_i(this);break e}}if(this.R){a=!0;let He;for(;!this.K&&this.C<d.length;)if(He=DE(this,d),He==Mu){re==4&&(this.m=4,dt(14),a=!1),cs(this.i,this.l,null,"[Incomplete Response]");break}else if(He==dp){this.m=4,dt(15),cs(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else cs(this.i,this.l,He,null),Uu(this,He);if(pp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),re!=4||d.length!=0||this.h.h||(this.m=1,dt(16),a=!1),this.o=this.o&&a,!a)cs(this.i,this.l,d,"[Invalid Chunked Response]"),Nr(this),_i(this);else if(d.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Gu(B),B.P=!0,dt(11))}}else cs(this.i,this.l,d,null),Uu(this,d);re==4&&Nr(this),this.o&&!this.K&&(re==4?Up(this.j,this):(this.o=!1,ra(this)))}else KE(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,dt(12)):(this.m=0,dt(13)),Nr(this),_i(this)}}}catch{}finally{}};function bE(a){if(!pp(a))return a.g.la();const c=Dp(a.g);if(c==="")return"";let d="";const g=c.length,P=zn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Nr(a),_i(a),"";a.h.i=new o.TextDecoder}for(let b=0;b<g;b++)a.h.h=!0,d+=a.h.i.decode(c[b],{stream:!(P&&b==g-1)});return c.length=0,a.h.g+=d,a.C=0,a.h.g}function pp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function DE(a,c){var d=a.C,g=c.indexOf(`
`,d);return g==-1?Mu:(d=Number(c.substring(d,g)),isNaN(d)?dp:(g+=1,g+d>c.length?Mu:(c=c.slice(g,g+d),a.C=g+d,c)))}Fn.prototype.cancel=function(){this.K=!0,Nr(this)};function ra(a){a.T=Date.now()+a.H,mp(a,a.H)}function mp(a,c){if(a.D!=null)throw Error("WatchDog timer not null");a.D=mi(h(a.aa,a),c)}function ju(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Fn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(CE(this.i,this.B),this.M!=2&&(pi(),dt(17)),Nr(this),this.m=2,_i(this)):mp(this,this.T-a)};function _i(a){a.j.I==0||a.K||Up(a.j,a)}function Nr(a){ju(a);var c=a.O;c&&typeof c.dispose=="function"&&c.dispose(),a.O=null,np(a.V),a.g&&(c=a.g,a.g=null,c.abort(),c.dispose())}function Uu(a,c){try{var d=a.j;if(d.I!=0&&(d.g==a||zu(d.h,a))){if(!a.L&&zu(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)ua(d),aa(d);else break e;Ku(d),dt(18)}}else d.xa=P[1],0<d.xa-d.K&&P[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=mi(h(d.Va,d),6e3));_p(d.h)<=1&&d.ta&&(d.ta=void 0)}else Dr(d,11)}else if((a.L||d.g==a)&&ua(d),!T(c))for(P=d.Ba.g.parse(c),c=0;c<P.length;c++){let me=P[c];const He=me[0];if(!(He<=d.K))if(d.K=He,me=me[1],d.I==2)if(me[0]=="c"){d.M=me[1],d.ba=me[2];const tn=me[3];tn!=null&&(d.ka=tn,d.j.info("VER="+d.ka));const Vr=me[4];Vr!=null&&(d.za=Vr,d.j.info("SVER="+d.za));const $n=me[5];$n!=null&&typeof $n=="number"&&$n>0&&(g=1.5*$n,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Bn=a.g;if(Bn){const ha=Bn.g?Bn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ha){var b=g.h;b.g||ha.indexOf("spdy")==-1&&ha.indexOf("quic")==-1&&ha.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&($u(b,b.h),b.h=null))}if(g.G){const Qu=Bn.g?Bn.g.getResponseHeader("X-HTTP-Session-Id"):null;Qu&&(g.wa=Qu,_e(g.J,g.G,Qu))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var B=a;if(g.na=Bp(g,g.L?g.ba:null,g.W),B.L){vp(g.h,B);var re=B,je=g.O;je&&(re.H=je),re.D&&(ju(re),ra(re)),g.g=B}else Fp(g);d.i.length>0&&la(d)}else me[0]!="stop"&&me[0]!="close"||Dr(d,7);else d.I==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?Dr(d,7):Wu(d):me[0]!="noop"&&d.l&&d.l.qa(me),d.A=0)}}pi(4)}catch{}}var VE=class{constructor(a,c){this.g=a,this.map=c}};function gp(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function yp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function _p(a){return a.h?1:a.g?a.g.size:0}function zu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function $u(a,c){a.g?a.g.add(c):a.h=c}function vp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}gp.prototype.cancel=function(){if(this.i=wp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function wp(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.G);return c}return x(a.i)}var Ep=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function OE(a,c){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let P,b=null;g>=0?(P=a[d].substring(0,g),b=a[d].substring(g+1)):P=a[d],c(P,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function jn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;a instanceof jn?(this.l=a.l,vi(this,a.j),this.o=a.o,this.g=a.g,wi(this,a.u),this.h=a.h,Bu(this,Rp(a.i)),this.m=a.m):a&&(c=String(a).match(Ep))?(this.l=!1,vi(this,c[1]||"",!0),this.o=Ei(c[2]||""),this.g=Ei(c[3]||"",!0),wi(this,c[4]),this.h=Ei(c[5]||"",!0),Bu(this,c[6]||"",!0),this.m=Ei(c[7]||"")):(this.l=!1,this.i=new Ii(null,this.l))}jn.prototype.toString=function(){const a=[];var c=this.j;c&&a.push(Ti(c,Tp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Ti(c,Tp,!0),"@"),a.push(yi(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ti(d,d.charAt(0)=="/"?FE:ME,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ti(d,UE)),a.join("")},jn.prototype.resolve=function(a){const c=en(this);let d=!!a.j;d?vi(c,a.j):d=!!a.o,d?c.o=a.o:d=!!a.g,d?c.g=a.g:d=a.u!=null;var g=a.h;if(d)wi(c,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var P=c.h.lastIndexOf("/");P!=-1&&(g=c.h.slice(0,P+1)+g)}if(P=g,P==".."||P==".")g="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){g=P.lastIndexOf("/",0)==0,P=P.split("/");const b=[];for(let B=0;B<P.length;){const re=P[B++];re=="."?g&&B==P.length&&b.push(""):re==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),g&&B==P.length&&b.push("")):(b.push(re),g=!0)}g=b.join("/")}else g=P}return d?c.h=g:d=a.i.toString()!=="",d?Bu(c,Rp(a.i)):d=!!a.m,d&&(c.m=a.m),c};function en(a){return new jn(a)}function vi(a,c,d){a.j=d?Ei(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function wi(a,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);a.u=c}else a.u=null}function Bu(a,c,d){c instanceof Ii?(a.i=c,zE(a.i,a.l)):(d||(c=Ti(c,jE)),a.i=new Ii(c,a.l))}function _e(a,c,d){a.i.set(c,d)}function sa(a){return _e(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ei(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ti(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,LE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function LE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Tp=/[#\/\?@]/g,ME=/[#\?:]/g,FE=/[#\?]/g,jE=/[#\?@]/g,UE=/#/g;function Ii(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function br(a){a.g||(a.g=new Map,a.h=0,a.i&&OE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Ii.prototype,t.add=function(a,c){br(this),this.i=null,a=hs(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Ip(a,c){br(a),c=hs(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Sp(a,c){return br(a),c=hs(a,c),a.g.has(c)}t.forEach=function(a,c){br(this),this.g.forEach(function(d,g){d.forEach(function(P){a.call(c,P,g,this)},this)},this)};function Ap(a,c){br(a);let d=[];if(typeof c=="string")Sp(a,c)&&(d=d.concat(a.g.get(hs(a,c))));else for(a=Array.from(a.g.values()),c=0;c<a.length;c++)d=d.concat(a[c]);return d}t.set=function(a,c){return br(this),this.i=null,a=hs(this,a),Sp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=Ap(this,a),a.length>0?String(a[0]):c):c};function xp(a,c,d){Ip(a,c),d.length>0&&(a.i=null,a.g.set(hs(a,c),x(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(let g=0;g<c.length;g++){var d=c[g];const P=yi(d);d=Ap(this,d);for(let b=0;b<d.length;b++){let B=P;d[b]!==""&&(B+="="+yi(d[b])),a.push(B)}}return this.i=a.join("&")};function Rp(a){const c=new Ii;return c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),c}function hs(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function zE(a,c){c&&!a.j&&(br(a),a.i=null,a.g.forEach(function(d,g){const P=g.toLowerCase();g!=P&&(Ip(this,g),xp(this,P,d))},a)),a.j=c}function $E(a,c){const d=new gi;if(o.Image){const g=new Image;g.onload=f(Un,d,"TestLoadImage: loaded",!0,c,g),g.onerror=f(Un,d,"TestLoadImage: error",!1,c,g),g.onabort=f(Un,d,"TestLoadImage: abort",!1,c,g),g.ontimeout=f(Un,d,"TestLoadImage: timeout",!1,c,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function BE(a,c){const d=new gi,g=new AbortController,P=setTimeout(()=>{g.abort(),Un(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(b=>{clearTimeout(P),b.ok?Un(d,"TestPingServer: ok",!0,c):Un(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),Un(d,"TestPingServer: error",!1,c)})}function Un(a,c,d,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(d)}catch{}}function HE(){this.g=new xE}function Hu(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Hu,rp),Hu.prototype.g=function(){return new ia(this.i,this.h)};function ia(a,c){tt.call(this),this.H=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(ia,tt),t=ia.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=c,this.readyState=1,Ai(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(c.body=a),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Si(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ai(this)),this.g&&(this.readyState=3,Ai(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;kp(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function kp(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Si(this):Ai(this),this.readyState==3&&kp(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Si(this))},t.Na=function(a){this.g&&(this.response=a,Si(this))},t.ga=function(){this.g&&Si(this)};function Si(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ai(a)}t.setRequestHeader=function(a,c){this.A.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function Ai(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ia.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Cp(a){let c="";return U(a,function(d,g){c+=g,c+=":",c+=d,c+=`\r
`}),c}function qu(a,c,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Cp(d),typeof a=="string"?d!=null&&yi(d):_e(a,c,d))}function Re(a){tt.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Re,tt);var qE=/^https?$/i,WE=["POST","PUT"];t=Re.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,c,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():cp.g(),this.g.onreadystatechange=m(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(b){Pp(this,b);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)d.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const b of g.keys())d.set(b,g.get(b));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(b=>b.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(WE,c,void 0)>=0)||g||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,B]of d)this.g.setRequestHeader(b,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(b){Pp(this,b)}};function Pp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.o=5,Np(a),oa(a)}function Np(a){a.A||(a.A=!0,ht(a,"complete"),ht(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,ht(this,"complete"),ht(this,"abort"),oa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),oa(this,!0)),Re.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?bp(this):this.Xa())},t.Xa=function(){bp(this)};function bp(a){if(a.h&&typeof i<"u"){if(a.v&&zn(a)==4)setTimeout(a.Ca.bind(a),0);else if(ht(a,"readystatechange"),zn(a)==4){a.h=!1;try{const b=a.ca();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var g;if(g=b===0){let B=String(a.D).match(Ep)[1]||null;!B&&o.self&&o.self.location&&(B=o.self.location.protocol.slice(0,-1)),g=!qE.test(B?B.toLowerCase():"")}d=g}if(d)ht(a,"complete"),ht(a,"success");else{a.o=6;try{var P=zn(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",Np(a)}}finally{oa(a)}}}}function oa(a,c){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,c||ht(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function zn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return zn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),AE(c)}};function Dp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function KE(a){const c={};a=(a.g&&zn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(T(a[g]))continue;var d=NE(a[g]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const b=c[P]||[];c[P]=b,b.push(d)}H(c,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function xi(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Vp(a){this.za=0,this.i=[],this.j=new gi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=xi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=xi("baseRetryDelayMs",5e3,a),this.Za=xi("retryDelaySeedMs",1e4,a),this.Ta=xi("forwardChannelMaxRetries",2,a),this.va=xi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new gp(a&&a.concurrentRequestLimit),this.Ba=new HE,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Vp.prototype,t.ka=8,t.I=1,t.connect=function(a,c,d,g){dt(0),this.W=a,this.H=c||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=Bp(this,null,this.W),la(this)};function Wu(a){if(Op(a),a.I==3){var c=a.V++,d=en(a.J);if(_e(d,"SID",a.M),_e(d,"RID",c),_e(d,"TYPE","terminate"),Ri(a,d),c=new Fn(a,a.j,c),c.M=2,c.A=sa(en(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=c.A,d=!0),d||(c.g=Hp(c.j,null),c.g.ea(c.A)),c.F=Date.now(),ra(c)}$p(a)}function aa(a){a.g&&(Gu(a),a.g.cancel(),a.g=null)}function Op(a){aa(a),a.v&&(o.clearTimeout(a.v),a.v=null),ua(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function la(a){if(!yp(a.h)&&!a.m){a.m=!0;var c=a.Ea;V||y(),j||(V(),j=!0),_.add(c,a),a.D=0}}function GE(a,c){return _p(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=c.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=mi(h(a.Ea,a,c),zp(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new Fn(this,this.j,a);let b=this.o;if(this.U&&(b?(b=X(b),se(b,this.U)):b=this.U),this.u!==null||this.R||(P.J=b,b=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Mp(this,P,c),d=en(this.J),_e(d,"RID",a),_e(d,"CVER",22),this.G&&_e(d,"X-HTTP-Session-Id",this.G),Ri(this,d),b&&(this.R?c="headers="+yi(Cp(b))+"&"+c:this.u&&qu(d,this.u,b)),$u(this.h,P),this.Ra&&_e(d,"TYPE","init"),this.S?(_e(d,"$req",c),_e(d,"SID","null"),P.U=!0,Fu(P,d,null)):Fu(P,d,c),this.I=2}}else this.I==3&&(a?Lp(this,a):this.i.length==0||yp(this.h)||Lp(this))};function Lp(a,c){var d;c?d=c.l:d=a.V++;const g=en(a.J);_e(g,"SID",a.M),_e(g,"RID",d),_e(g,"AID",a.K),Ri(a,g),a.u&&a.o&&qu(g,a.u,a.o),d=new Fn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),c&&(a.i=c.G.concat(a.i)),c=Mp(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),$u(a.h,d),Fu(d,g,c)}function Ri(a,c){a.H&&U(a.H,function(d,g){_e(c,g,d)}),a.l&&U({},function(d,g){_e(c,g,d)})}function Mp(a,c,d){d=Math.min(a.i.length,d);const g=a.l?h(a.l.Ka,a.l,a):null;e:{var P=a.i;let re=-1;for(;;){const je=["count="+d];re==-1?d>0?(re=P[0].g,je.push("ofs="+re)):re=0:je.push("ofs="+re);let me=!0;for(let He=0;He<d;He++){var b=P[He].g;const tn=P[He].map;if(b-=re,b<0)re=Math.max(0,P[He].g-100),me=!1;else try{b="req"+b+"_"||"";try{var B=tn instanceof Map?tn:Object.entries(tn);for(const[Vr,$n]of B){let Bn=$n;l($n)&&(Bn=Du($n)),je.push(b+Vr+"="+encodeURIComponent(Bn))}}catch(Vr){throw je.push(b+"type="+encodeURIComponent("_badmap")),Vr}}catch{g&&g(tn)}}if(me){B=je.join("&");break e}}B=void 0}return a=a.i.splice(0,d),c.G=a,B}function Fp(a){if(!a.g&&!a.v){a.Y=1;var c=a.Da;V||y(),j||(V(),j=!0),_.add(c,a),a.A=0}}function Ku(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=mi(h(a.Da,a),zp(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,jp(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=mi(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,dt(10),aa(this),jp(this))};function Gu(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function jp(a){a.g=new Fn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var c=en(a.na);_e(c,"RID","rpc"),_e(c,"SID",a.M),_e(c,"AID",a.K),_e(c,"CI",a.F?"0":"1"),!a.F&&a.ia&&_e(c,"TO",a.ia),_e(c,"TYPE","xmlhttp"),Ri(a,c),a.u&&a.o&&qu(c,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=sa(en(c)),d.u=null,d.R=!0,fp(d,a)}t.Va=function(){this.C!=null&&(this.C=null,aa(this),Ku(this),dt(19))};function ua(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Up(a,c){var d=null;if(a.g==c){ua(a),Gu(a),a.g=null;var g=2}else if(zu(a.h,c))d=c.G,vp(a.h,c),g=1;else return;if(a.I!=0){if(c.o)if(g==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var P=a.D;g=ta(),ht(g,new lp(g,d)),la(a)}else Fp(a);else if(P=c.m,P==3||P==0&&c.X>0||!(g==1&&GE(a,c)||g==2&&Ku(a)))switch(d&&d.length>0&&(c=a.h,c.i=c.i.concat(d)),P){case 1:Dr(a,5);break;case 4:Dr(a,10);break;case 3:Dr(a,6);break;default:Dr(a,2)}}}function zp(a,c){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*c}function Dr(a,c){if(a.j.info("Error code "+c),c==2){var d=h(a.bb,a),g=a.Ua;const P=!g;g=new jn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||vi(g,"https"),sa(g),P?$E(g.toString(),d):BE(g.toString(),d)}else dt(2);a.I=0,a.l&&a.l.pa(c),$p(a),Op(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function $p(a){if(a.I=0,a.ja=[],a.l){const c=wp(a.h);(c.length!=0||a.i.length!=0)&&(C(a.ja,c),C(a.ja,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.oa()}}function Bp(a,c,d){var g=d instanceof jn?en(d):new jn(d);if(g.g!="")c&&(g.g=c+"."+g.g),wi(g,g.u);else{var P=o.location;g=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;const b=new jn(null);g&&vi(b,g),c&&(b.g=c),P&&wi(b,P),d&&(b.h=d),g=b}return d=a.G,c=a.wa,d&&c&&_e(g,d,c),_e(g,"VER",a.ka),Ri(a,g),g}function Hp(a,c,d){if(c&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Aa&&!a.ma?new Re(new Hu({ab:d})):new Re(a.ma),c.Fa(a.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function qp(){}t=qp.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ca(){}ca.prototype.g=function(a,c){return new At(a,c)};function At(a,c){tt.call(this),this.g=new Vp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(a?a["X-WebChannel-Client-Profile"]=c.sa:a={"X-WebChannel-Client-Profile":c.sa}),this.g.U=a,(a=c&&c.Qb)&&!T(a)&&(this.g.u=a),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!T(c)&&(this.g.G=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new ds(this)}p(At,tt),At.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){Wu(this.g)},At.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Du(a),a=d);c.i.push(new VE(c.Ya++,a)),c.I==3&&la(c)},At.prototype.N=function(){this.g.l=null,delete this.j,Wu(this.g),delete this.g,At.Z.N.call(this)};function Wp(a){Vu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}p(Wp,Vu);function Kp(){Ou.call(this),this.status=1}p(Kp,Ou);function ds(a){this.g=a}p(ds,qp),ds.prototype.ra=function(){ht(this.g,"a")},ds.prototype.qa=function(a){ht(this.g,new Wp(a))},ds.prototype.pa=function(a){ht(this.g,new Kp)},ds.prototype.oa=function(){ht(this.g,"b")},ca.prototype.createWebChannel=ca.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,m0=function(){return new ca},p0=function(){return ta()},f0=Pr,Mh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},na.NO_ERROR=0,na.TIMEOUT=8,na.HTTP_ERROR=6,Ka=na,up.COMPLETE="complete",d0=up,sp.EventType=fi,fi.OPEN="a",fi.CLOSE="b",fi.ERROR="c",fi.MESSAGE="d",tt.prototype.listen=tt.prototype.J,zi=sp,Re.prototype.listenOnce=Re.prototype.K,Re.prototype.getLastError=Re.prototype.Ha,Re.prototype.getLastErrorCode=Re.prototype.ya,Re.prototype.getStatus=Re.prototype.ca,Re.prototype.getResponseJson=Re.prototype.La,Re.prototype.getResponseText=Re.prototype.la,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Fa,h0=Re}).apply(typeof Ca<"u"?Ca:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
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
 */let ai="12.13.0";function OA(t){ai=t}/**
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
 */const ts=new Zd("@firebase/firestore");function ps(){return ts.logLevel}function K(t,...e){if(ts.logLevel<=ce.DEBUG){const n=e.map(nf);ts.debug(`Firestore (${ai}): ${t}`,...n)}}function Dn(t,...e){if(ts.logLevel<=ce.ERROR){const n=e.map(nf);ts.error(`Firestore (${ai}): ${t}`,...n)}}function ns(t,...e){if(ts.logLevel<=ce.WARN){const n=e.map(nf);ts.warn(`Firestore (${ai}): ${t}`,...n)}}function nf(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Z(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,g0(t,r,n)}function g0(t,e,n){let r=`FIRESTORE (${ai}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Dn(r),new Error(r)}function fe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||g0(e,s,r)}function ne(t,e){return t}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Rn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class y0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class LA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class MA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class FA{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){fe(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Rn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Rn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Rn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string",31837,{l:r}),new y0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string",2055,{h:e}),new it(e)}}class jA{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class UA{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new jA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,qt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){fe(this.o===void 0,3512);const r=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new gg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new gg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function $A(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class rf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=$A(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function Fh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Cc(s)===Cc(i)?oe(s,i):Cc(s)?1:-1}return oe(t.length,e.length)}const BA=55296,HA=57343;function Cc(t){const e=t.charCodeAt(0);return e>=BA&&e<=HA}function Xs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const yg="__name__";class sn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Z(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return sn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof sn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=sn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return oe(e.length,n.length)}static compareSegments(e,n){const r=sn.isNumericId(e),s=sn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?sn.extractNumericId(e).compare(sn.extractNumericId(n)):Fh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return pr.fromString(e.substring(4,e.length-2))}}class ge extends sn{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const qA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends sn{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return qA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===yg}static keyField(){return new Xe([yg])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new q(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new q(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new q(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(ge.fromString(e))}static fromName(e){return new Q(ge.fromString(e).popFirst(5))}static empty(){return new Q(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new ge(e.slice()))}}/**
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
 */function _0(t,e,n){if(!n)throw new q(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function WA(t,e,n,r){if(e===!0&&r===!0)throw new q(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function _g(t){if(!Q.isDocumentKey(t))throw new q(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vg(t){if(Q.isDocumentKey(t))throw new q(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function v0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function hu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z(12329,{type:typeof t})}function Qt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hu(t);throw new q(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Le(t,e){const n={typeString:t};return e&&(n.value=e),n}function $o(t,e){if(!v0(t))throw new q(O.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new q(O.INVALID_ARGUMENT,n);return!0}/**
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
 */const wg=-62135596800,Eg=1e6;class we{static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Eg);return new we(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<wg)throw new q(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Eg}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:we._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if($o(e,we._jsonSchema))return new we(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-wg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}we._jsonSchemaVersion="firestore/timestamp/1.0",we._jsonSchema={type:Le("string",we._jsonSchemaVersion),seconds:Le("number"),nanoseconds:Le("number")};/**
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
 */class te{static fromTimestamp(e){return new te(e)}static min(){return new te(new we(0,0))}static max(){return new te(new we(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const xo=-1;function KA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=te.fromTimestamp(r===1e9?new we(n+1,0):new we(n,r));return new _r(s,Q.empty(),e)}function GA(t){return new _r(t.readTime,t.key,xo)}class _r{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new _r(te.min(),Q.empty(),xo)}static max(){return new _r(te.max(),Q.empty(),xo)}}function QA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
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
 */const YA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class XA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function li(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==YA)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function JA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ui(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class du{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}du.ce=-1;/**
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
 */const sf=-1;function fu(t){return t==null}function Pl(t){return t===0&&1/t==-1/0}function ZA(t){return typeof t=="number"&&Number.isInteger(t)&&!Pl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const w0="";function ex(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Tg(e)),e=tx(t.get(n),e);return Tg(e)}function tx(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case w0:n+="";break;default:n+=i}}return n}function Tg(t){return t+w0+""}/**
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
 */function Ig(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function kr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function E0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||Ye.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pa(this.root,e,this.comparator,!0)}}class Pa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ye.RED,this.left=s??Ye.EMPTY,this.right=i??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ye(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ye.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Z(27949);return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw Z(57766)}get value(){throw Z(16141)}get color(){throw Z(16727)}get left(){throw Z(29726)}get right(){throw Z(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ye(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class $e{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sg(this.data.getIterator())}getIteratorFrom(e){return new Sg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof $e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $e(this.comparator);return n.data=e,n}}class Sg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class kt{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new kt([])}unionWith(e){let n=new $e(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Xs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class T0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new T0("Invalid base64 string: "+i):i}}(e);return new et(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const nx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vr(t){if(fe(!!t,39018),typeof t=="string"){let e=0;const n=nx.exec(t);if(fe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function wr(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
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
 */const I0="server_timestamp",S0="__type__",A0="__previous_value__",x0="__local_write_time__";function of(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[S0])==null?void 0:r.stringValue)===I0}function pu(t){const e=t.mapValue.fields[A0];return of(e)?pu(e):e}function Ro(t){const e=vr(t.mapValue.fields[x0].timestampValue);return new we(e.seconds,e.nanos)}/**
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
 */class rx{constructor(e,n,r,s,i,o,l,u,h,f,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=p}}const Nl="(default)";class ko{constructor(e,n){this.projectId=e,this.database=n||Nl}static empty(){return new ko("","")}get isDefaultDatabase(){return this.database===Nl}isEqual(e){return e instanceof ko&&e.projectId===this.projectId&&e.database===this.database}}function sx(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new q(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ko(t.options.projectId,e)}/**
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
 */const R0="__type__",ix="__max__",Na={mapValue:{}},k0="__vector__",bl="value";function Er(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?of(t)?4:ax(t)?9007199254740991:ox(t)?10:11:Z(28295,{value:t})}function fn(t,e){if(t===e)return!0;const n=Er(t);if(n!==Er(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ro(t).isEqual(Ro(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=vr(s.timestampValue),l=vr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return wr(s.bytesValue).isEqual(wr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Pe(s.geoPointValue.latitude)===Pe(i.geoPointValue.latitude)&&Pe(s.geoPointValue.longitude)===Pe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Pe(s.integerValue)===Pe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Pe(s.doubleValue),l=Pe(i.doubleValue);return o===l?Pl(o)===Pl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Xs(t.arrayValue.values||[],e.arrayValue.values||[],fn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Ig(o)!==Ig(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!fn(o[u],l[u])))return!1;return!0}(t,e);default:return Z(52216,{left:t})}}function Co(t,e){return(t.values||[]).find(n=>fn(n,e))!==void 0}function Js(t,e){if(t===e)return 0;const n=Er(t),r=Er(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Pe(i.integerValue||i.doubleValue),u=Pe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Ag(t.timestampValue,e.timestampValue);case 4:return Ag(Ro(t),Ro(e));case 5:return Fh(t.stringValue,e.stringValue);case 6:return function(i,o){const l=wr(i),u=wr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=oe(l[h],u[h]);if(f!==0)return f}return oe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=oe(Pe(i.latitude),Pe(o.latitude));return l!==0?l:oe(Pe(i.longitude),Pe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return xg(t.arrayValue,e.arrayValue);case 10:return function(i,o){var m,x,C,N;const l=i.fields||{},u=o.fields||{},h=(m=l[bl])==null?void 0:m.arrayValue,f=(x=u[bl])==null?void 0:x.arrayValue,p=oe(((C=h==null?void 0:h.values)==null?void 0:C.length)||0,((N=f==null?void 0:f.values)==null?void 0:N.length)||0);return p!==0?p:xg(h,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Na.mapValue&&o===Na.mapValue)return 0;if(i===Na.mapValue)return 1;if(o===Na.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const m=Fh(u[p],f[p]);if(m!==0)return m;const x=Js(l[u[p]],h[f[p]]);if(x!==0)return x}return oe(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Z(23264,{he:n})}}function Ag(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=vr(t),r=vr(e),s=oe(n.seconds,r.seconds);return s!==0?s:oe(n.nanos,r.nanos)}function xg(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Js(n[s],r[s]);if(i)return i}return oe(n.length,r.length)}function Zs(t){return jh(t)}function jh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=vr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return wr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=jh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${jh(n.fields[o])}`;return s+"}"}(t.mapValue):Z(61005,{value:t})}function Ga(t){switch(Er(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=pu(t);return e?16+Ga(e):16;case 5:return 2*t.stringValue.length;case 6:return wr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ga(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return kr(r.fields,(i,o)=>{s+=i.length+Ga(o)}),s}(t.mapValue);default:throw Z(13486,{value:t})}}function Rg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Uh(t){return!!t&&"integerValue"in t}function af(t){return!!t&&"arrayValue"in t}function kg(t){return!!t&&"nullValue"in t}function Cg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Qa(t){return!!t&&"mapValue"in t}function ox(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[R0])==null?void 0:r.stringValue)===k0}function no(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return kr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=no(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=no(t.arrayValue.values[n]);return e}return{...t}}function ax(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===ix}/**
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
 */class vt{constructor(e){this.value=e}static empty(){return new vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Qa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=no(n)}setAll(e){let n=Xe.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=no(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Qa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Qa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){kr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new vt(no(this.value))}}function C0(t){const e=[];return kr(t.fields,(n,r)=>{const s=new Xe([n]);if(Qa(r)){const i=C0(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new kt(e)}/**
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
 */class at{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new at(e,0,te.min(),te.min(),te.min(),vt.empty(),0)}static newFoundDocument(e,n,r,s){return new at(e,1,n,te.min(),r,s,0)}static newNoDocument(e,n){return new at(e,2,n,te.min(),te.min(),vt.empty(),0)}static newUnknownDocument(e,n){return new at(e,3,n,te.min(),te.min(),vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof at&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Dl{constructor(e,n){this.position=e,this.inclusive=n}}function Pg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=Js(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ng(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Vl{constructor(e,n="asc"){this.field=e,this.dir=n}}function lx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class P0{}class Oe extends P0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new cx(e,n,r):n==="array-contains"?new fx(e,r):n==="in"?new px(e,r):n==="not-in"?new mx(e,r):n==="array-contains-any"?new gx(e,r):new Oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new hx(e,r):new dx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Js(n,this.value)):n!==null&&Er(this.value)===Er(n)&&this.matchesComparison(Js(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Zt extends P0{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Zt(e,n)}matches(e){return N0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function N0(t){return t.op==="and"}function b0(t){return ux(t)&&N0(t)}function ux(t){for(const e of t.filters)if(e instanceof Zt)return!1;return!0}function zh(t){if(t instanceof Oe)return t.field.canonicalString()+t.op.toString()+Zs(t.value);if(b0(t))return t.filters.map(e=>zh(e)).join(",");{const e=t.filters.map(n=>zh(n)).join(",");return`${t.op}(${e})`}}function D0(t,e){return t instanceof Oe?function(r,s){return s instanceof Oe&&r.op===s.op&&r.field.isEqual(s.field)&&fn(r.value,s.value)}(t,e):t instanceof Zt?function(r,s){return s instanceof Zt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&D0(o,s.filters[l]),!0):!1}(t,e):void Z(19439)}function V0(t){return t instanceof Oe?function(n){return`${n.field.canonicalString()} ${n.op} ${Zs(n.value)}`}(t):t instanceof Zt?function(n){return n.op.toString()+" {"+n.getFilters().map(V0).join(" ,")+"}"}(t):"Filter"}class cx extends Oe{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class hx extends Oe{constructor(e,n){super(e,"in",n),this.keys=O0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class dx extends Oe{constructor(e,n){super(e,"not-in",n),this.keys=O0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function O0(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class fx extends Oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return af(n)&&Co(n.arrayValue,this.value)}}class px extends Oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Co(this.value.arrayValue,n)}}class mx extends Oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Co(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Co(this.value.arrayValue,n)}}class gx extends Oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!af(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Co(this.value.arrayValue,r))}}/**
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
 */class yx{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function bg(t,e=null,n=[],r=[],s=null,i=null,o=null){return new yx(t,e,n,r,s,i,o)}function lf(t){const e=ne(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>zh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),fu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Zs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Zs(r)).join(",")),e.Te=n}return e.Te}function uf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!lx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!D0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ng(t.startAt,e.startAt)&&Ng(t.endAt,e.endAt)}function $h(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Bo{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function _x(t,e,n,r,s,i,o,l){return new Bo(t,e,n,r,s,i,o,l)}function mu(t){return new Bo(t)}function Dg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function vx(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function L0(t){return t.collectionGroup!==null}function ro(t){const e=ne(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new $e(Xe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Vl(i,r))}),n.has(Xe.keyField().canonicalString())||e.Ie.push(new Vl(Xe.keyField(),r))}return e.Ie}function un(t){const e=ne(t);return e.Ee||(e.Ee=wx(e,ro(t))),e.Ee}function wx(t,e){if(t.limitType==="F")return bg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Vl(s.field,i)});const n=t.endAt?new Dl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Dl(t.startAt.position,t.startAt.inclusive):null;return bg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Bh(t,e){const n=t.filters.concat([e]);return new Bo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Hh(t,e,n){return new Bo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function gu(t,e){return uf(un(t),un(e))&&t.limitType===e.limitType}function M0(t){return`${lf(un(t))}|lt:${t.limitType}`}function ms(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>V0(s)).join(", ")}]`),fu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Zs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Zs(s)).join(",")),`Target(${r})`}(un(t))}; limitType=${t.limitType})`}function yu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ro(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const h=Pg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,ro(r),s)||r.endAt&&!function(o,l,u){const h=Pg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,ro(r),s))}(t,e)}function Ex(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function F0(t){return(e,n)=>{let r=!1;for(const s of ro(t)){const i=Tx(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Tx(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?Js(u,h):Z(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z(19790,{direction:t.dir})}}/**
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
 */class as{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){kr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return E0(this.inner)}size(){return this.innerSize}}/**
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
 */const Ix=new Ie(Q.comparator);function Vn(){return Ix}const j0=new Ie(Q.comparator);function $i(...t){let e=j0;for(const n of t)e=e.insert(n.key,n);return e}function U0(t){let e=j0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function zr(){return so()}function z0(){return so()}function so(){return new as(t=>t.toString(),(t,e)=>t.isEqual(e))}const Sx=new Ie(Q.comparator),Ax=new $e(Q.comparator);function ae(...t){let e=Ax;for(const n of t)e=e.add(n);return e}const xx=new $e(oe);function Rx(){return xx}/**
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
 */function cf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pl(e)?"-0":e}}function $0(t){return{integerValue:""+t}}function kx(t,e){return ZA(e)?$0(e):cf(t,e)}/**
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
 */class _u{constructor(){this._=void 0}}function Cx(t,e,n){return t instanceof Po?function(s,i){const o={fields:{[S0]:{stringValue:I0},[x0]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&of(i)&&(i=pu(i)),i&&(o.fields[A0]=i),{mapValue:o}}(n,e):t instanceof No?H0(t,e):t instanceof bo?q0(t,e):function(s,i){const o=B0(s,i),l=Vg(o)+Vg(s.Ae);return Uh(o)&&Uh(s.Ae)?$0(l):cf(s.serializer,l)}(t,e)}function Px(t,e,n){return t instanceof No?H0(t,e):t instanceof bo?q0(t,e):n}function B0(t,e){return t instanceof Ol?function(r){return Uh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Po extends _u{}class No extends _u{constructor(e){super(),this.elements=e}}function H0(t,e){const n=W0(e);for(const r of t.elements)n.some(s=>fn(s,r))||n.push(r);return{arrayValue:{values:n}}}class bo extends _u{constructor(e){super(),this.elements=e}}function q0(t,e){let n=W0(e);for(const r of t.elements)n=n.filter(s=>!fn(s,r));return{arrayValue:{values:n}}}class Ol extends _u{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Vg(t){return Pe(t.integerValue||t.doubleValue)}function W0(t){return af(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Nx{constructor(e,n){this.field=e,this.transform=n}}function bx(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof No&&s instanceof No||r instanceof bo&&s instanceof bo?Xs(r.elements,s.elements,fn):r instanceof Ol&&s instanceof Ol?fn(r.Ae,s.Ae):r instanceof Po&&s instanceof Po}(t.transform,e.transform)}class Dx{constructor(e,n){this.version=e,this.transformResults=n}}class Ft{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ft}static exists(e){return new Ft(void 0,e)}static updateTime(e){return new Ft(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ya(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class vu{}function K0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new hf(t.key,Ft.none()):new Ho(t.key,t.data,Ft.none());{const n=t.data,r=vt.empty();let s=new $e(Xe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Cr(t.key,r,new kt(s.toArray()),Ft.none())}}function Vx(t,e,n){t instanceof Ho?function(s,i,o){const l=s.value.clone(),u=Lg(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Cr?function(s,i,o){if(!Ya(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Lg(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(G0(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function io(t,e,n,r){return t instanceof Ho?function(i,o,l,u){if(!Ya(i.precondition,o))return l;const h=i.value.clone(),f=Mg(i.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Cr?function(i,o,l,u){if(!Ya(i.precondition,o))return l;const h=Mg(i.fieldTransforms,u,o),f=o.data;return f.setAll(G0(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return Ya(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Ox(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=B0(r.transform,s||null);i!=null&&(n===null&&(n=vt.empty()),n.set(r.field,i))}return n||null}function Og(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Xs(r,s,(i,o)=>bx(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ho extends vu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Cr extends vu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function G0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Lg(t,e,n){const r=new Map;fe(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,Px(o,l,n[s]))}return r}function Mg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Cx(i,o,e))}return r}class hf extends vu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Lx extends vu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Mx{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Vx(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=io(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=io(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=z0();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=K0(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&Xs(this.mutations,e.mutations,(n,r)=>Og(n,r))&&Xs(this.baseMutations,e.baseMutations,(n,r)=>Og(n,r))}}class df{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){fe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return Sx}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new df(e,n,r,s)}}/**
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
 */class Fx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class jx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var De,he;function Ux(t){switch(t){case O.OK:return Z(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return Z(15467,{code:t})}}function Q0(t){if(t===void 0)return Dn("GRPC error has no .code"),O.UNKNOWN;switch(t){case De.OK:return O.OK;case De.CANCELLED:return O.CANCELLED;case De.UNKNOWN:return O.UNKNOWN;case De.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case De.INTERNAL:return O.INTERNAL;case De.UNAVAILABLE:return O.UNAVAILABLE;case De.UNAUTHENTICATED:return O.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case De.NOT_FOUND:return O.NOT_FOUND;case De.ALREADY_EXISTS:return O.ALREADY_EXISTS;case De.PERMISSION_DENIED:return O.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case De.ABORTED:return O.ABORTED;case De.OUT_OF_RANGE:return O.OUT_OF_RANGE;case De.UNIMPLEMENTED:return O.UNIMPLEMENTED;case De.DATA_LOSS:return O.DATA_LOSS;default:return Z(39323,{code:t})}}(he=De||(De={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function zx(){return new TextEncoder}/**
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
 */const $x=new pr([4294967295,4294967295],0);function Fg(t){const e=zx().encode(t),n=new c0;return n.update(e),new Uint8Array(n.digest())}function jg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new pr([n,r],0),new pr([s,i],0)]}class ff{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Bi(`Invalid padding: ${n}`);if(r<0)throw new Bi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Bi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Bi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=pr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(pr.fromNumber(r)));return s.compare($x)===1&&(s=new pr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Fg(e),[r,s]=jg(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ff(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Fg(e),[r,s]=jg(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Bi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class qo{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Wo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new qo(te.min(),s,new Ie(oe),Vn(),ae())}}class Wo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Wo(r,n,ae(),ae(),ae())}}/**
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
 */class Xa{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class Y0{constructor(e,n){this.targetId=e,this.Ce=n}}class X0{constructor(e,n,r=et.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ug{constructor(){this.ve=0,this.Fe=zg(),this.Me=et.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ae(),n=ae(),r=ae();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Z(38017,{changeType:i})}}),new Wo(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=zg()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,fe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Bx{constructor(e){this.Ge=e,this.ze=new Map,this.je=Vn(),this.Je=ba(),this.He=ba(),this.Ze=new Ie(oe)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Z(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if($h(i))if(r===0){const o=new Q(i.path);this.et(n,o,at.newNoDocument(o,te.min()))}else fe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=wr(r).toUint8Array()}catch(u){if(u instanceof T0)return ns("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new ff(o,s,i)}catch(u){return ns(u instanceof Bi?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&$h(l.target)){const u=new Q(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,at.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=ae();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new qo(e,n,this.Ze,this.je,r);return this.je=Vn(),this.Je=ba(),this.He=ba(),this.Ze=new Ie(oe),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Ug,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new $e(oe),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new $e(oe),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ug),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function ba(){return new Ie(Q.comparator)}function zg(){return new Ie(Q.comparator)}const Hx={asc:"ASCENDING",desc:"DESCENDING"},qx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Wx={and:"AND",or:"OR"};class Kx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function qh(t,e){return t.useProto3Json||fu(e)?e:{value:e}}function Ll(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function J0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Gx(t,e){return Ll(t,e.toTimestamp())}function cn(t){return fe(!!t,49232),te.fromTimestamp(function(n){const r=vr(n);return new we(r.seconds,r.nanos)}(t))}function pf(t,e){return Wh(t,e).canonicalString()}function Wh(t,e){const n=function(s){return new ge(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Z0(t){const e=ge.fromString(t);return fe(sw(e),10190,{key:e.toString()}),e}function Kh(t,e){return pf(t.databaseId,e.path)}function Pc(t,e){const n=Z0(e);if(n.get(1)!==t.databaseId.projectId)throw new q(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(tw(n))}function ew(t,e){return pf(t.databaseId,e)}function Qx(t){const e=Z0(t);return e.length===4?ge.emptyPath():tw(e)}function Gh(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function tw(t){return fe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function $g(t,e,n){return{name:Kh(t,e),fields:n.value.mapValue.fields}}function Yx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Z(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(fe(f===void 0||typeof f=="string",58123),et.fromBase64String(f||"")):(fe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),et.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?O.UNKNOWN:Q0(h.code);return new q(f,h.message||"")}(o);n=new X0(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Pc(t,r.document.name),i=cn(r.document.updateTime),o=r.document.createTime?cn(r.document.createTime):te.min(),l=new vt({mapValue:{fields:r.document.fields}}),u=at.newFoundDocument(s,i,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Xa(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Pc(t,r.document),i=r.readTime?cn(r.readTime):te.min(),o=at.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Xa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Pc(t,r.document),i=r.removedTargetIds||[];n=new Xa([],i,s,null)}else{if(!("filter"in e))return Z(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new jx(s,i),l=r.targetId;n=new Y0(l,o)}}return n}function Xx(t,e){let n;if(e instanceof Ho)n={update:$g(t,e.key,e.value)};else if(e instanceof hf)n={delete:Kh(t,e.key)};else if(e instanceof Cr)n={update:$g(t,e.key,e.data),updateMask:oR(e.fieldMask)};else{if(!(e instanceof Lx))return Z(16599,{dt:e.type});n={verify:Kh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Po)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof No)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof bo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ol)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Z(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Gx(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Z(27497)}(t,e.precondition)),n}function Jx(t,e){return t&&t.length>0?(fe(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?cn(s.updateTime):cn(i);return o.isEqual(te.min())&&(o=cn(i)),new Dx(o,s.transformResults||[])}(n,e))):[]}function Zx(t,e){return{documents:[ew(t,e.path)]}}function eR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ew(t,s);const i=function(h){if(h.length!==0)return rw(Zt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:gs(m.field),direction:rR(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=qh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:s}}function tR(t){let e=Qx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){fe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const m=nw(p);return m instanceof Zt&&b0(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(C){return new Vl(ys(C.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,fu(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,x=p.values||[];return new Dl(x,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,x=p.values||[];return new Dl(x,m)}(n.endAt)),_x(e,s,o,i,l,"F",u,h)}function nR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function nw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ys(n.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ys(n.unaryFilter.field);return Oe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ys(n.unaryFilter.field);return Oe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ys(n.unaryFilter.field);return Oe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Z(61313);default:return Z(60726)}}(t):t.fieldFilter!==void 0?function(n){return Oe.create(ys(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Z(58110);default:return Z(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Zt.create(n.compositeFilter.filters.map(r=>nw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Z(1026)}}(n.compositeFilter.op))}(t):Z(30097,{filter:t})}function rR(t){return Hx[t]}function sR(t){return qx[t]}function iR(t){return Wx[t]}function gs(t){return{fieldPath:t.canonicalString()}}function ys(t){return Xe.fromServerFormat(t.fieldPath)}function rw(t){return t instanceof Oe?function(n){if(n.op==="=="){if(Cg(n.value))return{unaryFilter:{field:gs(n.field),op:"IS_NAN"}};if(kg(n.value))return{unaryFilter:{field:gs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Cg(n.value))return{unaryFilter:{field:gs(n.field),op:"IS_NOT_NAN"}};if(kg(n.value))return{unaryFilter:{field:gs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gs(n.field),op:sR(n.op),value:n.value}}}(t):t instanceof Zt?function(n){const r=n.getFilters().map(s=>rw(s));return r.length===1?r[0]:{compositeFilter:{op:iR(n.op),filters:r}}}(t):Z(54877,{filter:t})}function oR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function sw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function iw(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class Tn{constructor(e,n,r,s,i=te.min(),o=te.min(),l=et.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Tn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Tn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Tn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Tn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class aR{constructor(e){this.yt=e}}function lR(t){const e=tR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Hh(e,e.limit,"L"):e}/**
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
 */class uR{constructor(){this.bn=new cR}addToCollectionParentIndex(e,n){return this.bn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(_r.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(_r.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class cR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new $e(ge.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new $e(ge.comparator)).toArray()}}/**
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
 */const Bg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ow=41943040;class yt{static withCacheSize(e){return new yt(e,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */yt.DEFAULT_COLLECTION_PERCENTILE=10,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yt.DEFAULT=new yt(ow,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yt.DISABLED=new yt(-1,0,0);/**
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
 */class Tr{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Tr(0)}static ar(){return new Tr(-1)}}/**
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
 */const Hg="LruGarbageCollector",hR=1048576;function qg([t,e],[n,r]){const s=oe(t,n);return s===0?oe(e,r):s}class dR{constructor(e){this.Pr=e,this.buffer=new $e(qg),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();qg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class fR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){K(Hg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ui(n)?K(Hg,"Ignoring IndexedDB error during garbage collection: ",n):await li(n)}await this.Ar(3e5)})}}class pR{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(du.ce);const r=new dR(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(K("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Bg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(K("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Bg):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(K("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),ps()<=ce.DEBUG&&K("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function mR(t,e){return new pR(t,e)}/**
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
 */class gR{constructor(){this.changes=new as(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class yR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class _R{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&io(r.mutation,s,kt.empty(),we.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ae()){const s=zr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=$i();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=zr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ae()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Vn();const o=so(),l=function(){return so()}();return n.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Cr)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),io(f.mutation,h,f.mutation.getFieldMask(),we.now())):o.set(h.key,kt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>l.set(h,new yR(f,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=so();let s=new Ie((o,l)=>o-l),i=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||kt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(s.get(l.batchId)||ae()).add(u);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=z0();f.forEach(m=>{if(!i.has(m)){const x=K0(n.get(m),r.get(m));x!==null&&p.set(m,x),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return vx(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):L0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(zr());let l=xo,u=i;return o.next(h=>M.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,ae())).next(f=>({batchId:l,changes:U0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let s=$i();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=$i();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,u=>{const h=function(p,m){return new Bo(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,at.newInvalidDocument(f)))});let l=$i();return o.forEach((u,h)=>{const f=i.get(u);f!==void 0&&io(f.mutation,h,kt.empty(),we.now()),yu(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class vR{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:cn(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:lR(s.bundledQuery),readTime:cn(s.readTime)}}(n)),M.resolve()}}/**
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
 */class wR{constructor(){this.overlays=new Ie(Q.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=zr();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=zr(),i=n.length+1,o=new Q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ie((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=zr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=zr(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return M.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Fx(n,r));let i=this.Lr.get(n);i===void 0&&(i=ae(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class ER{constructor(){this.sessionToken=et.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class mf{constructor(){this.kr=new $e(qe.Kr),this.qr=new $e(qe.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new qe(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new qe(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new Q(new ge([])),r=new qe(n,e),s=new qe(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new Q(new ge([])),r=new qe(n,e),s=new qe(n,e+1);let i=ae();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new qe(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class qe{constructor(e,n){this.key=e,this.Jr=n}static Kr(e,n){return Q.comparator(e.key,n.key)||oe(e.Jr,n.Jr)}static Ur(e,n){return oe(e.Jr,n.Jr)||Q.comparator(e.key,n.key)}}/**
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
 */class TR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new $e(qe.Kr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Mx(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Hr=this.Hr.add(new qe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?sf:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new qe(n,0),s=new qe(n,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],o=>{const l=this.Zr(o.Jr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new $e(oe);return n.forEach(s=>{const i=new qe(s,0),o=new qe(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],l=>{r=r.add(l.Jr)})}),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Q.isDocumentKey(i)||(i=i.child(""));const o=new qe(new Q(i),0);let l=new $e(oe);return this.Hr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.Jr)),!0)},o),M.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){fe(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return M.forEach(n.mutations,s=>{const i=new qe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new qe(n,0),s=this.Hr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class IR{constructor(e){this.ti=e,this.docs=function(){return new Ie(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():at.newInvalidDocument(n))}getEntries(e,n){let r=Vn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():at.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Vn();const o=n.path,l=new Q(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||QA(GA(f),r)<=0||(s.has(f.key)||yu(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Z(9500)}ni(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new SR(this)}getSize(e){return M.resolve(this.size)}}class SR extends gR{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class AR{constructor(e){this.persistence=e,this.ri=new as(n=>lf(n),uf),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.ii=0,this.si=new mf,this.targetCount=0,this.oi=Tr._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Tr(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
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
 */class aw{constructor(e,n){this._i={},this.overlays={},this.ai=new du(0),this.ui=!1,this.ui=!0,this.ci=new ER,this.referenceDelegate=e(this),this.li=new AR(this),this.indexManager=new uR,this.remoteDocumentCache=function(s){return new IR(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new aR(n),this.Pi=new vR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new wR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new TR(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const s=new xR(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return M.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class xR extends XA{constructor(e){super(),this.currentSequenceNumber=e}}class gf{constructor(e){this.persistence=e,this.Ri=new mf,this.Ai=null}static Vi(e){return new gf(e)}get di(){if(this.Ai)return this.Ai;throw Z(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,r=>{const s=Q.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,te.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Ml{constructor(e,n){this.persistence=e,this.fi=new as(r=>ex(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=mR(this,n)}static Vi(e,n){return new Ml(e,n)}Ti(){}Ii(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return M.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,te.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ga(e.data.value)),n}wr(e,n,r){return M.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class yf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=ae(),s=ae();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new yf(e,n.fromCache,r,s)}}/**
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
 */class RR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class kR{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return y1()?8:JA(ut())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new RR;return this.ys(e,n,o).next(l=>{if(i.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(ps()<=ce.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",ms(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(ps()<=ce.DEBUG&&K("QueryEngine","Query:",ms(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(ps()<=ce.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",ms(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,un(n))):M.resolve())}gs(e,n){if(Dg(n))return M.resolve(null);let r=un(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Hh(n,null,"F"),r=un(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ae(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ss(n,l);return this.bs(n,h,o,u.readTime)?this.gs(e,Hh(n,null,"F")):this.Ds(e,h,n,u)}))})))}ps(e,n,r,s){return Dg(n)||s.isEqual(te.min())?M.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.Ss(n,i);return this.bs(n,o,r,s)?M.resolve(null):(ps()<=ce.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ms(n)),this.Ds(e,o,n,KA(s,xo)).next(l=>l))})}Ss(e,n){let r=new $e(F0(e));return n.forEach((s,i)=>{yu(e,i)&&(r=r.add(i))}),r}bs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return ps()<=ce.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",ms(n)),this.fs.getDocumentsMatchingQuery(e,n,_r.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const _f="LocalStore",CR=3e8;class PR{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Ie(oe),this.Fs=new as(i=>lf(i),uf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _R(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function NR(t,e,n,r){return new PR(t,e,n,r)}async function lw(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=ae();for(const h of s){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:l}))})})}function bR(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,m=p.keys();let x=M.resolve();return m.forEach(C=>{x=x.next(()=>f.getEntry(u,C)).next(N=>{const L=h.docVersions.get(C);fe(L!==null,48541),N.version.compareTo(L)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),x.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ae();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function uw(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function DR(t,e){const n=ne(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];e.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;l.push(n.li.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.li.addMatchingKeys(i,f.addedDocuments,p)));let x=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?x=x.withResumeToken(et.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):f.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(f.resumeToken,r)),s=s.insert(p,x),function(N,L,S){return N.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=CR?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(m,x,f)&&l.push(n.li.updateTargetData(i,x))});let u=Vn(),h=ae();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(VR(i,o,e.documentUpdates).next(f=>{u=f.Bs,h=f.Ls})),!r.isEqual(te.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next(p=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.vs=s,i))}function VR(t,e,n){let r=ae(),s=ae();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Vn();return n.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):K(_f,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Bs:o,Ls:s}})}function OR(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=sf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function LR(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new Tn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Qh(t,e,n){const r=ne(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ui(o))throw o;K(_f,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Wg(t,e,n){const r=ne(t);let s=te.min(),i=ae();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=ne(u),m=p.Fs.get(f);return m!==void 0?M.resolve(p.vs.get(m)):p.li.getTargetData(h,f)}(r,o,un(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:te.min(),n?i:ae())).next(l=>(MR(r,Ex(e),l),{documents:l,ks:i})))}function MR(t,e,n){let r=t.Ms.get(e)||te.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class Kg{constructor(){this.activeTargetIds=Rx()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class FR{constructor(){this.vo=new Kg,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Kg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class jR{Mo(e){}shutdown(){}}/**
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
 */const Gg="ConnectivityMonitor";class Qg{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){K(Gg,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){K(Gg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Da=null;function Yh(){return Da===null?Da=function(){return 268435456+Math.round(2147483648*Math.random())}():Da++,"0x"+Da.toString(16)}/**
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
 */const Nc="RestConnection",UR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class zR{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Nl?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Yh(),l=this.Qo(e,n.toUriEncodedString());K(Nc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:h}=new URL(l),f=zo(h);return this.zo(e,l,u,r,f).then(p=>(K(Nc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw ns(Nc,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ai}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=UR[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class $R{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const st="WebChannelConnection",Li=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Fs extends zR{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Fs.c_){const e=p0();Li(e,f0.STAT_EVENT,n=>{n.stat===Mh.PROXY?K(st,"STAT_EVENT: detected buffering proxy"):n.stat===Mh.NOPROXY&&K(st,"STAT_EVENT: detected no buffering proxy")}),Fs.c_=!0}}zo(e,n,r,s,i){const o=Yh();return new Promise((l,u)=>{const h=new h0;h.setWithCredentials(!0),h.listenOnce(d0.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Ka.NO_ERROR:const p=h.getResponseJson();K(st,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Ka.TIMEOUT:K(st,`RPC '${e}' ${o} timed out`),u(new q(O.DEADLINE_EXCEEDED,"Request time out"));break;case Ka.HTTP_ERROR:const m=h.getStatus();if(K(st,`RPC '${e}' ${o} failed with status:`,m,"response text:",h.getResponseText()),m>0){let x=h.getResponseJson();Array.isArray(x)&&(x=x[0]);const C=x==null?void 0:x.error;if(C&&C.status&&C.message){const N=function(S){const w=S.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(w)>=0?w:O.UNKNOWN}(C.status);u(new q(N,C.message))}else u(new q(O.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new q(O.UNAVAILABLE,"Connection failed."));break;default:Z(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{K(st,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);K(st,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Yh(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");K(st,`Creating RPC '${e}' stream ${s}: ${h}`,l);const f=o.createWebChannel(h,l);this.I_(f);let p=!1,m=!1;const x=new $R({Jo:C=>{m?K(st,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(p||(K(st,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),K(st,`RPC '${e}' stream ${s} sending:`,C),f.send(C))},Ho:()=>f.close()});return Li(f,zi.EventType.OPEN,()=>{m||(K(st,`RPC '${e}' stream ${s} transport opened.`),x.i_())}),Li(f,zi.EventType.CLOSE,()=>{m||(m=!0,K(st,`RPC '${e}' stream ${s} transport closed`),x.o_(),this.E_(f))}),Li(f,zi.EventType.ERROR,C=>{m||(m=!0,ns(st,`RPC '${e}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),x.o_(new q(O.UNAVAILABLE,"The operation could not be completed")))}),Li(f,zi.EventType.MESSAGE,C=>{var N;if(!m){const L=C.data[0];fe(!!L,16349);const S=L,w=(S==null?void 0:S.error)||((N=S[0])==null?void 0:N.error);if(w){K(st,`RPC '${e}' stream ${s} received error:`,w);const R=w.status;let D=function(_){const y=De[_];if(y!==void 0)return Q0(y)}(R),V=w.message;R==="NOT_FOUND"&&V.includes("database")&&V.includes("does not exist")&&V.includes(this.databaseId.database)&&ns(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),D===void 0&&(D=O.INTERNAL,V="Unknown error status: "+R+" with message "+w.message),m=!0,x.o_(new q(D,V)),f.close()}else K(st,`RPC '${e}' stream ${s} received:`,L),x.__(L)}}),Fs.u_(),setTimeout(()=>{x.s_()},0),x}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return m0()}}/**
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
 */function BR(t){return new Fs(t)}function bc(){return typeof document<"u"?document:null}/**
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
 */function wu(t){return new Kx(t,!0)}/**
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
 */Fs.c_=!1;class cw{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Yg="PersistentStream";class hw{constructor(e,n,r,s,i,o,l,u){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new cw(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(Dn(n.toString()),Dn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new q(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return K(Yg,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(K(Yg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class HR extends hw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=Yx(this.serializer,e),r=function(i){if(!("targetChange"in i))return te.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?cn(o.readTime):te.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=Gh(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=$h(u)?{documents:Zx(i,u)}:{query:eR(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=J0(i,o.resumeToken);const h=qh(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(te.min())>0){l.readTime=Ll(i,o.snapshotVersion.toTimestamp());const h=qh(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=nR(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Gh(this.serializer),n.removeTarget=e,this.K_(n)}}class qR extends hw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Jx(e.writeResults,e.commitTime),r=cn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Gh(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Xx(this.serializer,r))};this.K_(n)}}/**
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
 */class WR{}class KR extends WR{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new q(O.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Wh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(O.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Wh(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(O.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function GR(t,e,n,r){return new KR(t,e,n,r)}class QR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Dn(n),this.aa=!1):K("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const pn="RemoteStore";class YR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new Tr(1e3),this.Va=new Tr(1001),this.da=new Set,this.ma=[],this.fa=i,this.fa.Mo(o=>{r.enqueueAndForget(async()=>{ls(this)&&(K(pn,"Restarting streams for network reachability change."),await async function(u){const h=ne(u);h.da.add(4),await Ko(h),h.ga.set("Unknown"),h.da.delete(4),await Eu(h)}(this))})}),this.ga=new QR(r,s)}}async function Eu(t){if(ls(t))for(const e of t.ma)await e(!0)}async function Ko(t){for(const e of t.ma)await e(!1)}function Xh(t,e){return t.Ea.get(e)||void 0}function dw(t,e){const n=ne(t),r=Xh(n,e.targetId);if(r!==void 0&&n.Ia.has(r))return;const s=function(l,u){const h=Xh(l,u);h!==void 0&&l.Ra.delete(h);const f=function(m,x){return x%2!=0?m.Va.next():m.Aa.next()}(l,u);return l.Ea.set(u,f),l.Ra.set(f,u),f}(n,e.targetId);K(pn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new Tn(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ia.set(s,i),Tf(n)?Ef(n):ci(n).O_()&&wf(n,i)}function vf(t,e){const n=ne(t),r=ci(n),s=Xh(n,e);K(pn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),n.Ia.delete(s),n.Ea.delete(e),n.Ra.delete(s),r.O_()&&fw(n,s),n.Ia.size===0&&(r.O_()?r.L_():ls(n)&&n.ga.set("Unknown"))}function wf(t,e){if(t.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.Ra.get(e.targetId);if(n===void 0)return void K(pn,"SDK target ID not found for remote ID: "+e.targetId);const r=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(r)}ci(t).Z_(e)}function fw(t,e){t.pa.$e(e),ci(t).X_(e)}function Ef(t){t.pa=new Bx({getRemoteKeysForTarget:e=>{const n=t.Ra.get(e);return n!==void 0?t.remoteSyncer.getRemoteKeysForTarget(n):ae()},At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ci(t).start(),t.ga.ua()}function Tf(t){return ls(t)&&!ci(t).x_()&&t.Ia.size>0}function ls(t){return ne(t).da.size===0}function pw(t){t.pa=void 0}async function XR(t){t.ga.set("Online")}async function JR(t){t.Ia.forEach((e,n)=>{wf(t,e)})}async function ZR(t,e){pw(t),Tf(t)?(t.ga.ha(e),Ef(t)):t.ga.set("Unknown")}async function ek(t,e,n){if(t.ga.set("Online"),e instanceof X0&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds){if(s.Ia.has(l)){const u=s.Ra.get(l);u!==void 0&&(await s.remoteSyncer.rejectListen(u,o),s.Ea.delete(u),s.Ra.delete(l)),s.Ia.delete(l)}s.pa.removeTarget(l)}}(t,e)}catch(r){K(pn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fl(t,r)}else if(e instanceof Xa?t.pa.Xe(e):e instanceof Y0?t.pa.st(e):t.pa.tt(e),!n.isEqual(te.min()))try{const r=await uw(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.pa.Tt(o);l.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const p=i.Ia.get(f);p&&i.Ia.set(f,p.withResumeToken(h.resumeToken,o))}}),l.targetMismatches.forEach((h,f)=>{const p=i.Ia.get(h);if(!p)return;i.Ia.set(h,p.withResumeToken(et.EMPTY_BYTE_STRING,p.snapshotVersion)),fw(i,h);const m=new Tn(p.target,h,f,p.sequenceNumber);wf(i,m)});const u=function(f,p){const m=new Map;p.targetChanges.forEach((C,N)=>{const L=f.Ra.get(N);L!==void 0&&m.set(L,C)});let x=new Ie(oe);return p.targetMismatches.forEach((C,N)=>{const L=f.Ra.get(C);L!==void 0&&(x=x.insert(L,N))}),new qo(p.snapshotVersion,m,x,p.documentUpdates,p.resolvedLimboDocuments)}(i,l);return i.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){K(pn,"Failed to raise snapshot:",r),await Fl(t,r)}}async function Fl(t,e,n){if(!ui(e))throw e;t.da.add(1),await Ko(t),t.ga.set("Offline"),n||(n=()=>uw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K(pn,"Retrying IndexedDB access"),await n(),t.da.delete(1),await Eu(t)})}function mw(t,e){return e().catch(n=>Fl(t,n,e))}async function Tu(t){const e=ne(t),n=Ir(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:sf;for(;tk(e);)try{const s=await OR(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,nk(e,s)}catch(s){await Fl(e,s)}gw(e)&&yw(e)}function tk(t){return ls(t)&&t.Ta.length<10}function nk(t,e){t.Ta.push(e);const n=Ir(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function gw(t){return ls(t)&&!Ir(t).x_()&&t.Ta.length>0}function yw(t){Ir(t).start()}async function rk(t){Ir(t).ra()}async function sk(t){const e=Ir(t);for(const n of t.Ta)e.ea(n.mutations)}async function ik(t,e,n){const r=t.Ta.shift(),s=df.from(r,e,n);await mw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Tu(t)}async function ok(t,e){e&&Ir(t).Y_&&await async function(r,s){if(function(o){return Ux(o)&&o!==O.ABORTED}(s.code)){const i=r.Ta.shift();Ir(r).B_(),await mw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Tu(r)}}(t,e),gw(t)&&yw(t)}async function Xg(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),K(pn,"RemoteStore received new credentials");const r=ls(n);n.da.add(3),await Ko(n),r&&n.ga.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await Eu(n)}async function ak(t,e){const n=ne(t);e?(n.da.delete(2),await Eu(n)):e||(n.da.add(2),await Ko(n),n.ga.set("Unknown"))}function ci(t){return t.ya||(t.ya=function(n,r,s){const i=ne(n);return i.sa(),new HR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:XR.bind(null,t),Yo:JR.bind(null,t),t_:ZR.bind(null,t),H_:ek.bind(null,t)}),t.ma.push(async e=>{e?(t.ya.B_(),Tf(t)?Ef(t):t.ga.set("Unknown")):(await t.ya.stop(),pw(t))})),t.ya}function Ir(t){return t.wa||(t.wa=function(n,r,s){const i=ne(n);return i.sa(),new qR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:rk.bind(null,t),t_:ok.bind(null,t),ta:sk.bind(null,t),na:ik.bind(null,t)}),t.ma.push(async e=>{e?(t.wa.B_(),await Tu(t)):(await t.wa.stop(),t.Ta.length>0&&(K(pn,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.wa}/**
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
 */class If{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Rn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new If(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sf(t,e){if(Dn("AsyncQueue",`${e}: ${t}`),ui(t))return new q(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class js{static emptySet(e){return new js(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=$i(),this.sortedSet=new Ie(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof js)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new js;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Jg{constructor(){this.Sa=new Ie(Q.comparator)}track(e){const n=e.doc.key,r=this.Sa.get(n);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(n,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(n):e.type===1&&r.type===2?this.Sa=this.Sa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):Z(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(n,e)}Da(){const e=[];return this.Sa.inorderTraversal((n,r)=>{e.push(r)}),e}}class ei{constructor(e,n,r,s,i,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ei(e,n,js.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class lk{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class uk{constructor(){this.queries=Zg(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(n,r){const s=ne(n),i=s.queries;s.queries=Zg(),i.forEach((o,l)=>{for(const u of l.va)u.onError(r)})})(this,new q(O.ABORTED,"Firestore shutting down"))}}function Zg(){return new as(t=>M0(t),gu)}async function Af(t,e){const n=ne(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Fa()&&e.Ma()&&(r=2):(i=new lk,r=e.Ma()?0:1);try{switch(r){case 0:i.Ca=await n.onListen(s,!0);break;case 1:i.Ca=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Sf(o,`Initialization of query '${ms(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.va.push(e),e.Oa(n.onlineState),i.Ca&&e.Na(i.Ca)&&Rf(n)}async function xf(t,e){const n=ne(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.va.indexOf(e);o>=0&&(i.va.splice(o,1),i.va.length===0?s=e.Ma()?0:1:!i.Fa()&&e.Ma()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function ck(t,e){const n=ne(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.va)l.Na(s)&&(r=!0);o.Ca=s}}r&&Rf(n)}function hk(t,e,n){const r=ne(t),s=r.queries.get(e);if(s)for(const i of s.va)i.onError(n);r.queries.delete(e)}function Rf(t){t.xa.forEach(e=>{e.next()})}var Jh,ey;(ey=Jh||(Jh={})).Ba="default",ey.Cache="cache";class kf{constructor(e,n,r){this.query=e,this.La=n,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ei(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ka?this.qa(e)&&(this.La.next(e),n=!0):this.Ua(e,this.onlineState)&&(this.$a(e),n=!0),this.Ka=e,n}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let n=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),n=!0),n}Ua(e,n){if(!e.fromCache||!this.Ma())return!0;const r=n!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const n=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}$a(e){e=ei.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==Jh.Cache}}/**
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
 */class _w{constructor(e){this.key=e}}class vw{constructor(e){this.key=e}}class dk{constructor(e,n){this.query=e,this.tu=n,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=ae(),this.mutatedKeys=ae(),this.iu=F0(e),this.su=new js(this.iu)}get ou(){return this.tu}_u(e,n){const r=n?n.au:new Jg,s=n?n.su:this.su;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const m=s.get(f),x=yu(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),N=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let L=!1;m&&x?m.data.isEqual(x.data)?C!==N&&(r.track({type:3,doc:x}),L=!0):this.uu(m,x)||(r.track({type:2,doc:x}),L=!0,(u&&this.iu(x,u)>0||h&&this.iu(x,h)<0)&&(l=!0)):!m&&x?(r.track({type:0,doc:x}),L=!0):m&&!x&&(r.track({type:1,doc:m}),L=!0,(u||h)&&(l=!0)),L&&(x?(o=o.add(x),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{su:o,au:r,bs:l,mutatedKeys:i}}uu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const o=e.au.Da();o.sort((f,p)=>function(x,C){const N=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z(20277,{Vt:L})}};return N(x)-N(C)}(f.type,p.type)||this.iu(f.doc,p.doc)),this.cu(r),s=s??!1;const l=n&&!s?this.lu():[],u=this.ru.size===0&&this.current&&!s?1:0,h=u!==this.nu;return this.nu=u,o.length!==0||h?{snapshot:new ei(this.query,e.su,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:l}:{hu:l}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new Jg,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(n=>this.tu=this.tu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.tu=this.tu.delete(n)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=ae(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const n=[];return e.forEach(r=>{this.ru.has(r)||n.push(new vw(r))}),this.ru.forEach(r=>{e.has(r)||n.push(new _w(r))}),n}Tu(e){this.tu=e.ks,this.ru=ae();const n=this._u(e.documents);return this.applyChanges(n,!0)}Iu(){return ei.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const Cf="SyncEngine";class fk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class pk{constructor(e){this.key=e,this.Eu=!1}}class mk{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ru={},this.Au=new as(l=>M0(l),gu),this.Vu=new Map,this.du=new Set,this.mu=new Ie(Q.comparator),this.fu=new Map,this.gu=new mf,this.pu={},this.yu=new Map,this.wu=Tr.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function gk(t,e,n=!0){const r=Aw(t);let s;const i=r.Au.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Iu()):s=await ww(r,e,n,!0),s}async function yk(t,e){const n=Aw(t);await ww(n,e,!0,!1)}async function ww(t,e,n,r){const s=await LR(t.localStore,un(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await _k(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&dw(t.remoteStore,s),l}async function _k(t,e,n,r,s){t.bu=(p,m,x)=>async function(N,L,S,w){let R=L.view._u(S);R.bs&&(R=await Wg(N.localStore,L.query,!1).then(({documents:_})=>L.view._u(_,R)));const D=w&&w.targetChanges.get(L.targetId),V=w&&w.targetMismatches.get(L.targetId)!=null,j=L.view.applyChanges(R,N.isPrimaryClient,D,V);return ny(N,L.targetId,j.hu),j.snapshot}(t,p,m,x);const i=await Wg(t.localStore,e,!0),o=new dk(e,i.ks),l=o._u(i.documents),u=Wo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,u);ny(t,n,h.hu);const f=new fk(e,n,o);return t.Au.set(e,f),t.Vu.has(n)?t.Vu.get(n).push(e):t.Vu.set(n,[e]),h.snapshot}async function vk(t,e,n){const r=ne(t),s=r.Au.get(e),i=r.Vu.get(s.targetId);if(i.length>1)return r.Vu.set(s.targetId,i.filter(o=>!gu(o,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Qh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&vf(r.remoteStore,s.targetId),Zh(r,s.targetId)}).catch(li)):(Zh(r,s.targetId),await Qh(r.localStore,s.targetId,!0))}async function wk(t,e){const n=ne(t),r=n.Au.get(e),s=n.Vu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),vf(n.remoteStore,r.targetId))}async function Ek(t,e,n){const r=kk(t);try{const s=await function(o,l){const u=ne(o),h=we.now(),f=l.reduce((x,C)=>x.add(C.key),ae());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",x=>{let C=Vn(),N=ae();return u.xs.getEntries(x,f).next(L=>{C=L,C.forEach((S,w)=>{w.isValidDocument()||(N=N.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(x,C)).next(L=>{p=L;const S=[];for(const w of l){const R=Ox(w,p.get(w.key).overlayedDocument);R!=null&&S.push(new Cr(w.key,R,C0(R.value.mapValue),Ft.exists(!0)))}return u.mutationQueue.addMutationBatch(x,h,S,l)}).next(L=>{m=L;const S=L.applyToLocalDocumentSet(p,N);return u.documentOverlayCache.saveOverlays(x,L.batchId,S)})}).then(()=>({batchId:m.batchId,changes:U0(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let h=o.pu[o.currentUser.toKey()];h||(h=new Ie(oe)),h=h.insert(l,u),o.pu[o.currentUser.toKey()]=h}(r,s.batchId,n),await Go(r,s.changes),await Tu(r.remoteStore)}catch(s){const i=Sf(s,"Failed to persist write");n.reject(i)}}async function Ew(t,e){const n=ne(t);try{const r=await DR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.fu.get(i);o&&(fe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.Eu=!0:s.modifiedDocuments.size>0?fe(o.Eu,14607):s.removedDocuments.size>0&&(fe(o.Eu,42227),o.Eu=!1))}),await Go(n,r,e)}catch(r){await li(r)}}function ty(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Au.forEach((i,o)=>{const l=o.view.Oa(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=ne(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const m of p.va)m.Oa(l)&&(h=!0)}),h&&Rf(u)}(r.eventManager,e),s.length&&r.Ru.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Tk(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.fu.get(e),i=s&&s.key;if(i){let o=new Ie(Q.comparator);o=o.insert(i,at.newNoDocument(i,te.min()));const l=ae().add(i),u=new qo(te.min(),new Map,new Ie(oe),o,l);await Ew(r,u),r.mu=r.mu.remove(i),r.fu.delete(e),Pf(r)}else await Qh(r.localStore,e,!1).then(()=>Zh(r,e,n)).catch(li)}async function Ik(t,e){const n=ne(t),r=e.batch.batchId;try{const s=await bR(n.localStore,e);Iw(n,r,null),Tw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Go(n,s)}catch(s){await li(s)}}async function Sk(t,e,n){const r=ne(t);try{const s=await function(o,l){const u=ne(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(fe(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Iw(r,e,n),Tw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Go(r,s)}catch(s){await li(s)}}function Tw(t,e){(t.yu.get(e)||[]).forEach(n=>{n.resolve()}),t.yu.delete(e)}function Iw(t,e,n){const r=ne(t);let s=r.pu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.pu[r.currentUser.toKey()]=s}}function Zh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Vu.get(e))t.Au.delete(r),n&&t.Ru.Du(r,n);t.Vu.delete(e),t.isPrimaryClient&&t.gu.Gr(e).forEach(r=>{t.gu.containsKey(r)||Sw(t,r)})}function Sw(t,e){t.du.delete(e.path.canonicalString());const n=t.mu.get(e);n!==null&&(vf(t.remoteStore,n),t.mu=t.mu.remove(e),t.fu.delete(n),Pf(t))}function ny(t,e,n){for(const r of n)r instanceof _w?(t.gu.addReference(r.key,e),Ak(t,r)):r instanceof vw?(K(Cf,"Document no longer in limbo: "+r.key),t.gu.removeReference(r.key,e),t.gu.containsKey(r.key)||Sw(t,r.key)):Z(19791,{Cu:r})}function Ak(t,e){const n=e.key,r=n.path.canonicalString();t.mu.get(n)||t.du.has(r)||(K(Cf,"New document in limbo: "+n),t.du.add(r),Pf(t))}function Pf(t){for(;t.du.size>0&&t.mu.size<t.maxConcurrentLimboResolutions;){const e=t.du.values().next().value;t.du.delete(e);const n=new Q(ge.fromString(e)),r=t.wu.next();t.fu.set(r,new pk(n)),t.mu=t.mu.insert(n,r),dw(t.remoteStore,new Tn(un(mu(n.path)),r,"TargetPurposeLimboResolution",du.ce))}}async function Go(t,e,n){const r=ne(t),s=[],i=[],o=[];r.Au.isEmpty()||(r.Au.forEach((l,u)=>{o.push(r.bu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){s.push(h);const p=yf.Es(u.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ru.H_(s),await async function(u,h){const f=ne(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,m=>M.forEach(m.Ts,x=>f.persistence.referenceDelegate.addReference(p,m.targetId,x)).next(()=>M.forEach(m.Is,x=>f.persistence.referenceDelegate.removeReference(p,m.targetId,x)))))}catch(p){if(!ui(p))throw p;K(_f,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const x=f.vs.get(m),C=x.snapshotVersion,N=x.withLastLimboFreeSnapshotVersion(C);f.vs=f.vs.insert(m,N)}}}(r.localStore,i))}async function xk(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){K(Cf,"User change. New user:",e.toKey());const r=await lw(n.localStore,e);n.currentUser=e,function(i,o){i.yu.forEach(l=>{l.forEach(u=>{u.reject(new q(O.CANCELLED,o))})}),i.yu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Go(n,r.Ns)}}function Rk(t,e){const n=ne(t),r=n.fu.get(e);if(r&&r.Eu)return ae().add(r.key);{let s=ae();const i=n.Vu.get(e);if(!i)return s;for(const o of i){const l=n.Au.get(o);s=s.unionWith(l.view.ou)}return s}}function Aw(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ew.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Rk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Tk.bind(null,e),e.Ru.H_=ck.bind(null,e.eventManager),e.Ru.Du=hk.bind(null,e.eventManager),e}function kk(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ik.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Sk.bind(null,e),e}class jl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=wu(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,n){return null}Bu(e,n){return null}Ou(e){return NR(this.persistence,new kR,e.initialUser,this.serializer)}xu(e){return new aw(gf.Vi,this.serializer)}Mu(e){return new FR}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}jl.provider={build:()=>new jl};class Ck extends jl{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,n){fe(this.persistence.referenceDelegate instanceof Ml,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new fR(r,e.asyncQueue,n)}xu(e){const n=this.cacheSizeBytes!==void 0?yt.withCacheSize(this.cacheSizeBytes):yt.DEFAULT;return new aw(r=>Ml.Vi(r,n),this.serializer)}}class ed{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ty(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xk.bind(null,this.syncEngine),await ak(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new uk}()}createDatastore(e){const n=wu(e.databaseInfo.databaseId),r=BR(e.databaseInfo);return GR(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new YR(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>ty(this.syncEngine,n,0),function(){return Qg.v()?new Qg:new jR}())}createSyncEngine(e,n){return function(s,i,o,l,u,h,f){const p=new mk(s,i,o,l,u,h);return f&&(p.Su=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ne(s);K(pn,"RemoteStore shutting down."),i.da.add(5),await Ko(i),i.fa.shutdown(),i.ga.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}ed.provider={build:()=>new ed};/**
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
 */class Nf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):Dn("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Sr="FirestoreClient";class Pk{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=it.UNAUTHENTICATED,this.clientId=rf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{K(Sr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(K(Sr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Sf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Dc(t,e){t.asyncQueue.verifyOperationInProgress(),K(Sr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await lw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ry(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Nk(t);K(Sr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Xg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Xg(e.remoteStore,s)),t._onlineComponents=e}async function Nk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K(Sr,"Using user provided OfflineComponentProvider");try{await Dc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===O.FAILED_PRECONDITION||s.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ns("Error using user provided cache. Falling back to memory cache: "+n),await Dc(t,new jl)}}else K(Sr,"Using default OfflineComponentProvider"),await Dc(t,new Ck(void 0));return t._offlineComponents}async function xw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K(Sr,"Using user provided OnlineComponentProvider"),await ry(t,t._uninitializedComponentsProvider._online)):(K(Sr,"Using default OnlineComponentProvider"),await ry(t,new ed))),t._onlineComponents}function bk(t){return xw(t).then(e=>e.syncEngine)}async function Ul(t){const e=await xw(t),n=e.eventManager;return n.onListen=gk.bind(null,e.syncEngine),n.onUnlisten=vk.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=yk.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=wk.bind(null,e.syncEngine),n}function Dk(t,e,n,r){const s=new Nf(r),i=new kf(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>Af(await Ul(t),i)),()=>{s.Ku(),t.asyncQueue.enqueueAndForget(async()=>xf(await Ul(t),i))}}function Vk(t,e,n={}){const r=new Rn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const f=new Nf({next:m=>{f.Ku(),o.enqueueAndForget(()=>xf(i,p));const x=m.docs.has(l);!x&&m.fromCache?h.reject(new q(O.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&m.fromCache&&u&&u.source==="server"?h.reject(new q(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new kf(mu(l.path),f,{includeMetadataChanges:!0,Wa:!0});return Af(i,p)}(await Ul(t),t.asyncQueue,e,n,r)),r.promise}function Ok(t,e,n={}){const r=new Rn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const f=new Nf({next:m=>{f.Ku(),o.enqueueAndForget(()=>xf(i,p)),m.fromCache&&u.source==="server"?h.reject(new q(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new kf(l,f,{includeMetadataChanges:!0,Wa:!0});return Af(i,p)}(await Ul(t),t.asyncQueue,e,n,r)),r.promise}function Lk(t,e){const n=new Rn;return t.asyncQueue.enqueueAndForget(async()=>Ek(await bk(t),e,n)),n.promise}/**
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
 */function Rw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Mk="ComponentProvider",sy=new Map;function Fk(t,e,n,r,s){return new rx(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Rw(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const kw="firestore.googleapis.com",iy=!0;class oy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new q(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=kw,this.ssl=iy}else this.host=e.host,this.ssl=e.ssl??iy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ow;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<hR)throw new q(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}WA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Rw(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new q(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new q(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new q(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Iu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new LA;switch(r.type){case"firstParty":return new UA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=sy.get(n);r&&(K(Mk,"Removing Datastore"),sy.delete(n),r.terminate())}(this),Promise.resolve()}}function jk(t,e,n,r={}){var h;t=Qt(t,Iu);const s=zo(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&r0(`https://${l}`),i.host!==kw&&i.host!==l&&ns("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!Zr(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=it.MOCK_USER;else{f=c1(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new q(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new it(m)}t._authCredentials=new MA(new y0(f,p))}}/**
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
 */class us{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new us(this.firestore,e,this._query)}}class be{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new be(this.firestore,e,this._key)}toJSON(){return{type:be._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if($o(n,be._jsonSchema))return new be(e,r||null,new Q(ge.fromString(n.referencePath)))}}be._jsonSchemaVersion="firestore/documentReference/1.0",be._jsonSchema={type:Le("string",be._jsonSchemaVersion),referencePath:Le("string")};class mr extends us{constructor(e,n,r){super(e,n,mu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new be(this.firestore,null,new Q(e))}withConverter(e){return new mr(this.firestore,e,this._path)}}function In(t,e,...n){if(t=Be(t),_0("collection","path",e),t instanceof Iu){const r=ge.fromString(e,...n);return vg(r),new mr(t,null,r)}{if(!(t instanceof be||t instanceof mr))throw new q(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return vg(r),new mr(t.firestore,null,r)}}function Ps(t,e,...n){if(t=Be(t),arguments.length===1&&(e=rf.newId()),_0("doc","path",e),t instanceof Iu){const r=ge.fromString(e,...n);return _g(r),new be(t,null,new Q(r))}{if(!(t instanceof be||t instanceof mr))throw new q(O.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return _g(r),new be(t.firestore,t instanceof mr?t.converter:null,new Q(r))}}/**
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
 */const ay="AsyncQueue";class ly{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new cw(this,"async_queue_retry"),this.lc=()=>{const r=bc();r&&K(ay,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const n=bc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const n=bc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const n=new Rn;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!ui(e))throw e;K(ay,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const n=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,Dn("INTERNAL UNHANDLED ERROR: ",uy(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.cc.indexOf(e)>-1&&(n=0);const s=If.createAndSchedule(this,e,n,r,i=>this.Ec(i));return this.oc.push(s),s}Pc(){this._c&&Z(47125,{Rc:uy(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const n of this.oc)if(n.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.oc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const n=this.oc.indexOf(e);this.oc.splice(n,1)}}function uy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class rs extends Iu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new ly,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ly(e),this._firestoreClient=void 0,await e}}}function Uk(t,e){const n=typeof t=="object"?t:a0(),r=typeof t=="string"?t:Nl,s=tf(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=l1("firestore");i&&jk(s,...i)}return s}function Qo(t){if(t._terminated)throw new q(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||zk(t),t._firestoreClient}function zk(t){var r,s,i,o;const e=t._freezeSettings(),n=Fk(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Pk(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(t._componentsProvider))}/**
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
 */class Ot{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ot(et.fromBase64String(e))}catch(n){throw new q(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ot(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ot._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if($o(e,Ot._jsonSchema))return Ot.fromBase64String(e.bytes)}}Ot._jsonSchemaVersion="firestore/bytes/1.0",Ot._jsonSchema={type:Le("string",Ot._jsonSchemaVersion),bytes:Le("string")};/**
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
 */class bf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Su{constructor(e){this._methodName=e}}/**
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
 */class hn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:hn._jsonSchemaVersion}}static fromJSON(e){if($o(e,hn._jsonSchema))return new hn(e.latitude,e.longitude)}}hn._jsonSchemaVersion="firestore/geoPoint/1.0",hn._jsonSchema={type:Le("string",hn._jsonSchemaVersion),latitude:Le("number"),longitude:Le("number")};/**
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
 */class Yt{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Yt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if($o(e,Yt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Yt(e.vectorValues);throw new q(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Yt._jsonSchemaVersion="firestore/vectorValue/1.0",Yt._jsonSchema={type:Le("string",Yt._jsonSchemaVersion),vectorValues:Le("object")};/**
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
 */const $k=/^__.*__$/;class Bk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Cr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ho(e,this.data,n,this.fieldTransforms)}}class Cw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Cr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Pw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z(40011,{dataSource:t})}}class Df{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.fc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Df({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.wc(e),r}Sc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return zl(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(Pw(this.dataSource)&&$k.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class Hk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||wu(e)}V(e,n,r,s=!1){return new Df({dataSource:e,methodName:n,targetDoc:r,path:Xe.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vf(t){const e=t._freezeSettings(),n=wu(t._databaseId);return new Hk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Nw(t,e,n,r,s,i={}){const o=t.V(i.merge||i.mergeFields?2:0,e,n,s);Lf("Data must be an object, but it was:",o,r);const l=bw(r,o);let u,h;if(i.merge)u=new kt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=ti(e,p,n);if(!o.contains(m))throw new q(O.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Ow(f,m)||f.push(m)}u=new kt(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new Bk(new vt(l),u,h)}class Au extends Su{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Au}}class Of extends Su{_toFieldTransform(e){return new Nx(e.path,new Po)}isEqual(e){return e instanceof Of}}function qk(t,e,n,r){const s=t.V(1,e,n);Lf("Data must be an object, but it was:",s,r);const i=[],o=vt.empty();kr(r,(u,h)=>{const f=Vw(e,u,n);h=Be(h);const p=s.Sc(f);if(h instanceof Au)i.push(f);else{const m=Yo(h,p);m!=null&&(i.push(f),o.set(f,m))}});const l=new kt(i);return new Cw(o,l,s.fieldTransforms)}function Wk(t,e,n,r,s,i){const o=t.V(1,e,n),l=[ti(e,r,n)],u=[s];if(i.length%2!=0)throw new q(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(ti(e,i[m])),u.push(i[m+1]);const h=[],f=vt.empty();for(let m=l.length-1;m>=0;--m)if(!Ow(h,l[m])){const x=l[m];let C=u[m];C=Be(C);const N=o.Sc(x);if(C instanceof Au)h.push(x);else{const L=Yo(C,N);L!=null&&(h.push(x),f.set(x,L))}}const p=new kt(h);return new Cw(f,p,o.fieldTransforms)}function Kk(t,e,n,r=!1){return Yo(n,t.V(r?4:3,e))}function Yo(t,e){if(Dw(t=Be(t)))return Lf("Unsupported field value:",e,t),bw(t,e);if(t instanceof Su)return function(r,s){if(!Pw(s.dataSource))throw s.Dc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Dc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Yo(l,s.bc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Be(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return kx(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=we.fromDate(r);return{timestampValue:Ll(s.serializer,i)}}if(r instanceof we){const i=new we(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ll(s.serializer,i)}}if(r instanceof hn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ot)return{bytesValue:J0(s.serializer,r._byteString)};if(r instanceof be){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Dc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:pf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Yt)return function(o,l){const u=o instanceof Yt?o.toArray():o;return{mapValue:{fields:{[R0]:{stringValue:k0},[bl]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.Dc("VectorValues must only contain numeric values.");return cf(l.serializer,f)})}}}}}}(r,s);if(iw(r))return r._toProto(s.serializer);throw s.Dc(`Unsupported field value: ${hu(r)}`)}(t,e)}function bw(t,e){const n={};return E0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):kr(t,(r,s)=>{const i=Yo(s,e.yc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Dw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof we||t instanceof hn||t instanceof Ot||t instanceof be||t instanceof Su||t instanceof Yt||iw(t))}function Lf(t,e,n){if(!Dw(n)||!v0(n)){const r=hu(n);throw r==="an object"?e.Dc(t+" a custom object"):e.Dc(t+" "+r)}}function ti(t,e,n){if((e=Be(e))instanceof bf)return e._internalPath;if(typeof e=="string")return Vw(t,e);throw zl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Gk=new RegExp("[~\\*/\\[\\]]");function Vw(t,e,n){if(e.search(Gk)>=0)throw zl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new bf(...e.split("."))._internalPath}catch{throw zl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function zl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new q(O.INVALID_ARGUMENT,l+t+u)}function Ow(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Qk{convertValue(e,n="none"){switch(Er(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(wr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Z(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return kr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[bl].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Pe(o.doubleValue));return new Yt(n)}convertGeoPoint(e){return new hn(Pe(e.latitude),Pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=pu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ro(e));default:return null}}convertTimestamp(e){const n=vr(e);return new we(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ge.fromString(e);fe(sw(r),9688,{name:e});const s=new ko(r.get(1),r.get(3)),i=new Q(r.popFirst(5));return s.isEqual(n)||Dn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class Mf extends Qk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ot(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,n)}}function Hi(){return new Of("serverTimestamp")}const cy="@firebase/firestore",hy="4.14.1";/**
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
 */function dy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}/**
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
 */class Lw{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Yk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(ti("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Yk extends Lw{data(){return super.data()}}/**
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
 */function Mw(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ff{}class Xk extends Ff{}function fy(t,e,...n){let r=[];e instanceof Ff&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof jf).length,l=i.filter(u=>u instanceof xu).length;if(o>1||o>0&&l>0)throw new q(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class xu extends Xk{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new xu(e,n,r)}_apply(e){const n=this._parse(e);return Fw(e._query,n),new us(e.firestore,e.converter,Bh(e._query,n))}_parse(e){const n=Vf(e.firestore);return function(i,o,l,u,h,f,p){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new q(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){gy(p,f);const C=[];for(const N of p)C.push(my(u,i,N));m={arrayValue:{values:C}}}else m=my(u,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||gy(p,f),m=Kk(l,o,p,f==="in"||f==="not-in");return Oe.create(h,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function py(t,e,n){const r=e,s=ti("where",t);return xu._create(s,r,n)}class jf extends Ff{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new jf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Zt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)Fw(o,u),o=Bh(o,u)}(e._query,n),new us(e.firestore,e.converter,Bh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function my(t,e,n){if(typeof(n=Be(n))=="string"){if(n==="")throw new q(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!L0(e)&&n.indexOf("/")!==-1)throw new q(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ge.fromString(n));if(!Q.isDocumentKey(r))throw new q(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Rg(t,new Q(r))}if(n instanceof be)return Rg(t,n._key);throw new q(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${hu(n)}.`)}function gy(t,e){if(!Array.isArray(t)||t.length===0)throw new q(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Fw(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function jw(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class qi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class qr extends Lw{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ja(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ti("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=qr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}qr._jsonSchemaVersion="firestore/documentSnapshot/1.0",qr._jsonSchema={type:Le("string",qr._jsonSchemaVersion),bundleSource:Le("string","DocumentSnapshot"),bundleName:Le("string"),bundle:Le("string")};class Ja extends qr{data(e={}){return super.data(e)}}class Wr{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new qi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ja(this._firestore,this._userDataWriter,r.key,r,new qi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Ja(s._firestore,s._userDataWriter,l.doc.key,l.doc,new qi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Ja(s._firestore,s._userDataWriter,l.doc.key,l.doc,new qi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:Jk(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Wr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=rf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Jk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z(61501,{type:t})}}/**
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
 */Wr._jsonSchemaVersion="firestore/querySnapshot/1.0",Wr._jsonSchema={type:Le("string",Wr._jsonSchemaVersion),bundleSource:Le("string","QuerySnapshot"),bundleName:Le("string"),bundle:Le("string")};/**
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
 */class Zk{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Vf(e)}set(e,n,r){this._verifyNotCommitted();const s=Vc(e,this._firestore),i=jw(s.converter,n,r),o=Nw(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Ft.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Vc(e,this._firestore);let o;return o=typeof(n=Be(n))=="string"||n instanceof bf?Wk(this._dataReader,"WriteBatch.update",i._key,n,r,s):qk(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Ft.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Vc(e,this._firestore);return this._mutations=this._mutations.concat(new hf(n._key,Ft.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new q(O.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Vc(t,e){if((t=Be(t)).firestore!==e)throw new q(O.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */function eC(t){t=Qt(t,be);const e=Qt(t.firestore,rs),n=Qo(e);return Vk(n,t._key).then(r=>$w(e,t,r))}function Ns(t){t=Qt(t,us);const e=Qt(t.firestore,rs),n=Qo(e),r=new Mf(e);return Mw(t._query),Ok(n,t._query).then(s=>new Wr(e,r,t,s))}function Uw(t,e,n){t=Qt(t,be);const r=Qt(t.firestore,rs),s=jw(t.converter,e,n),i=Vf(r);return zw(r,[Nw(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Ft.none())])}function Oc(t,...e){var h,f,p;t=Be(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||dy(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(dy(e[r])){const m=e[r];e[r]=(h=m.next)==null?void 0:h.bind(m),e[r+1]=(f=m.error)==null?void 0:f.bind(m),e[r+2]=(p=m.complete)==null?void 0:p.bind(m)}let i,o,l;if(t instanceof be)o=Qt(t.firestore,rs),l=mu(t._key.path),i={next:m=>{e[r]&&e[r]($w(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=Qt(t,us);o=Qt(m.firestore,rs),l=m._query;const x=new Mf(o);i={next:C=>{e[r]&&e[r](new Wr(o,x,m,C))},error:e[r+1],complete:e[r+2]},Mw(t._query)}const u=Qo(o);return Dk(u,l,s,i)}function zw(t,e){const n=Qo(t);return Lk(n,e)}function $w(t,e,n){const r=n.docs.get(e._key),s=new Mf(t);return new qr(t,s,e._key,r,new qi(n.hasPendingWrites,n.fromCache),e.converter)}function yy(t){return t=Qt(t,rs),Qo(t),new Zk(t,e=>zw(t,e))}(function(e,n=!0){OA(oi),Ys(new es("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new rs(new FA(r.getProvider("auth-internal")),new zA(o,r.getProvider("app-check-internal")),sx(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),fr(cy,hy,e),fr(cy,hy,"esm2020")})();var tC="firebase",nC="12.13.0";/**
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
 */fr(tC,nC,"app");function Bw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rC=Bw,Hw=new jo("auth","Firebase",Bw());/**
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
 */const $l=new Zd("@firebase/auth");function sC(t,...e){$l.logLevel<=ce.WARN&&$l.warn(`Auth (${oi}): ${t}`,...e)}function Za(t,...e){$l.logLevel<=ce.ERROR&&$l.error(`Auth (${oi}): ${t}`,...e)}/**
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
 */function mn(t,...e){throw zf(t,...e)}function Xt(t,...e){return zf(t,...e)}function Uf(t,e,n){const r={...rC(),[e]:n};return new jo("auth","Firebase",r).create(e,{appName:t.name})}function Kr(t){return Uf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function iC(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&mn(t,"argument-error"),Uf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Hw.create(t,...e)}function ee(t,e,...n){if(!t)throw zf(e,...n)}function Sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Za(e),new Error(e)}function On(t,e){t||Sn(e)}/**
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
 */function td(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function oC(){return _y()==="http:"||_y()==="https:"}function _y(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function aC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oC()||p1()||"connection"in navigator)?navigator.onLine:!0}function lC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Xo{constructor(e,n){this.shortDelay=e,this.longDelay=n,On(n>e,"Short delay should be less than long delay!"),this.isMobile=h1()||m1()}get(){return aC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function $f(t,e){On(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class qw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const uC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const cC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],hC=new Xo(3e4,6e4);function Bf(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function hi(t,e,n,r,s={}){return Ww(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Uo({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...i};return f1()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&zo(t.emulatorConfig.host)&&(h.credentials="include"),qw.fetch()(await Kw(t,t.config.apiHost,n,l),h)})}async function Ww(t,e,n){t._canInitEmulator=!1;const r={...uC,...e};try{const s=new fC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Va(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Va(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Va(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Va(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Uf(t,f,h);mn(t,f)}}catch(s){if(s instanceof Mn)throw s;mn(t,"network-request-failed",{message:String(s)})}}async function dC(t,e,n,r,s={}){const i=await hi(t,e,n,r,s);return"mfaPendingCredential"in i&&mn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Kw(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?$f(t.config,s):`${t.config.apiScheme}://${s}`;return cC.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class fC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xt(this.auth,"network-request-failed")),hC.get())})}}function Va(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Xt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function pC(t,e){return hi(t,"POST","/v1/accounts:delete",e)}async function Bl(t,e){return hi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function oo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mC(t,e=!1){const n=Be(t),r=await n.getIdToken(e),s=Hf(r);ee(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:oo(Lc(s.auth_time)),issuedAtTime:oo(Lc(s.iat)),expirationTime:oo(Lc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Lc(t){return Number(t)*1e3}function Hf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Za("JWT malformed, contained fewer than 3 sections"),null;try{const s=Zv(n);return s?JSON.parse(s):(Za("Failed to decode base64 JWT payload"),null)}catch(s){return Za("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function vy(t){const e=Hf(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Do(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mn&&gC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function gC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class yC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class nd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=oo(this.lastLoginAt),this.creationTime=oo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Hl(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Do(t,Bl(e,{idToken:n}));ee(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?Gw(s.providerUserInfo):[],o=vC(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new nd(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function _C(t){const e=Be(t);await Hl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Gw(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function wC(t,e){const n=await Ww(t,{},async()=>{const r=Uo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Kw(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&zo(t.emulatorConfig.host)&&(u.credentials="include"),qw.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function EC(t,e){return hi(t,"POST","/v2/accounts:revokeToken",Bf(t,e))}/**
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
 */class Us{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=vy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await wC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Us;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ee(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ee(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Us,this.toJSON())}_performRefresh(){return Sn("not implemented")}}/**
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
 */function qn(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new yC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new nd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Do(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mC(this,e)}reload(){return _C(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Wt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Hl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qt(this.auth.app))return Promise.reject(Kr(this.auth));const e=await this.getIdToken();return await Do(this,pC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:x,providerData:C,stsTokenManager:N}=n;ee(p&&N,e,"internal-error");const L=Us.fromJSON(this.name,N);ee(typeof p=="string",e,"internal-error"),qn(r,e.name),qn(s,e.name),ee(typeof m=="boolean",e,"internal-error"),ee(typeof x=="boolean",e,"internal-error"),qn(i,e.name),qn(o,e.name),qn(l,e.name),qn(u,e.name),qn(h,e.name),qn(f,e.name);const S=new Wt({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:x,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:L,createdAt:h,lastLoginAt:f});return C&&Array.isArray(C)&&(S.providerData=C.map(w=>({...w}))),u&&(S._redirectEventId=u),S}static async _fromIdTokenResponse(e,n,r=!1){const s=new Us;s.updateFromServerResponse(n);const i=new Wt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Hl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ee(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Gw(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Us;l.updateFromIdToken(r);const u=new Wt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new nd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
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
 */const wy=new Map;function An(t){On(t instanceof Function,"Expected a class definition");let e=wy.get(t);return e?(On(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,wy.set(t,e),e)}/**
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
 */class Qw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Qw.type="NONE";const Ey=Qw;/**
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
 */function el(t,e,n){return`firebase:${t}:${e}:${n}`}class zs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=el(this.userKey,s.apiKey,i),this.fullPersistenceKey=el("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Bl(this.auth,{idToken:e}).catch(()=>{});return n?Wt._fromGetAccountInfoResponse(this.auth,n,e):null}return Wt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zs(An(Ey),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||An(Ey);const o=el(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const m=await Bl(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Wt._fromGetAccountInfoResponse(e,m,f)}else p=Wt._fromJSON(e,f);h!==i&&(l=p),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new zs(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new zs(i,e,r))}}/**
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
 */function Ty(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tE(e))return"Blackberry";if(nE(e))return"Webos";if(Xw(e))return"Safari";if((e.includes("chrome/")||Jw(e))&&!e.includes("edge/"))return"Chrome";if(eE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Yw(t=ut()){return/firefox\//i.test(t)}function Xw(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jw(t=ut()){return/crios\//i.test(t)}function Zw(t=ut()){return/iemobile/i.test(t)}function eE(t=ut()){return/android/i.test(t)}function tE(t=ut()){return/blackberry/i.test(t)}function nE(t=ut()){return/webos/i.test(t)}function qf(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function TC(t=ut()){var e;return qf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function IC(){return g1()&&document.documentMode===10}function rE(t=ut()){return qf(t)||eE(t)||nE(t)||tE(t)||/windows phone/i.test(t)||Zw(t)}/**
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
 */function sE(t,e=[]){let n;switch(t){case"Browser":n=Ty(ut());break;case"Worker":n=`${Ty(ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${oi}/${r}`}/**
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
 */class SC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function AC(t,e={}){return hi(t,"GET","/v2/passwordPolicy",Bf(t,e))}/**
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
 */const xC=6;class RC{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??xC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class kC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Iy(this),this.idTokenSubscription=new Iy(this),this.beforeStateQueue=new SC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=An(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await zs.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Bl(this,{idToken:e}),r=await Wt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(qt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Hl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qt(this.app))return Promise.reject(Kr(this));const n=e?Be(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qt(this.app)?Promise.reject(Kr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qt(this.app)?Promise.reject(Kr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(An(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await AC(this),n=new RC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new jo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await EC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&An(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await zs.create(this,[An(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(qt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&sC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ru(t){return Be(t)}class Iy{constructor(e){this.auth=e,this.observer=null,this.addObserver=S1(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Wf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function CC(t){Wf=t}function PC(t){return Wf.loadJS(t)}function NC(){return Wf.gapiScript}function bC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function DC(t,e){const n=tf(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Zr(i,e??{}))return s;mn(s,"already-initialized")}return n.initialize({options:e})}function VC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(An);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function OC(t,e,n){const r=Ru(t);ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=iE(e),{host:o,port:l}=LC(e),u=l===null?"":`:${l}`,h={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ee(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ee(Zr(h,r.config.emulator)&&Zr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,zo(o)?r0(`${i}//${o}${u}`):MC()}function iE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function LC(t){const e=iE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Sy(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Sy(o)}}}function Sy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function MC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class oE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sn("not implemented")}_getIdTokenResponse(e){return Sn("not implemented")}_linkToIdToken(e,n){return Sn("not implemented")}_getReauthenticationResolver(e){return Sn("not implemented")}}/**
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
 */async function $s(t,e){return dC(t,"POST","/v1/accounts:signInWithIdp",Bf(t,e))}/**
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
 */const FC="http://localhost";class ss extends oE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ss(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):mn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new ss(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $s(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,$s(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$s(e,n)}buildRequest(){const e={requestUri:FC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Uo(n)}return e}}/**
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
 */class Kf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Jo extends Kf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yn extends Jo{constructor(){super("facebook.com")}static credential(e){return ss._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
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
 */class vn extends Jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ss._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vn.credential(n,r)}catch{return null}}}vn.GOOGLE_SIGN_IN_METHOD="google.com";vn.PROVIDER_ID="google.com";/**
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
 */class Xn extends Jo{constructor(){super("github.com")}static credential(e){return ss._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com";Xn.PROVIDER_ID="github.com";/**
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
 */class Jn extends Jo{constructor(){super("twitter.com")}static credential(e,n){return ss._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.TWITTER_SIGN_IN_METHOD="twitter.com";Jn.PROVIDER_ID="twitter.com";/**
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
 */class ni{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Wt._fromIdTokenResponse(e,r,s),o=Ay(r);return new ni({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ay(r);return new ni({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ay(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ql extends Mn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ql.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ql(e,n,r,s)}}function aE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ql._fromErrorAndOperation(t,i,e,r):i})}async function jC(t,e,n=!1){const r=await Do(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ni._forOperation(t,"link",r)}/**
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
 */async function UC(t,e,n=!1){const{auth:r}=t;if(qt(r.app))return Promise.reject(Kr(r));const s="reauthenticate";try{const i=await Do(t,aE(r,s,e,t),n);ee(i.idToken,r,"internal-error");const o=Hf(i.idToken);ee(o,r,"internal-error");const{sub:l}=o;return ee(t.uid===l,r,"user-mismatch"),ni._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&mn(r,"user-mismatch"),i}}/**
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
 */async function zC(t,e,n=!1){if(qt(t.app))return Promise.reject(Kr(t));const r="signIn",s=await aE(t,r,e),i=await ni._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function $C(t,e,n,r){return Be(t).onIdTokenChanged(e,n,r)}function BC(t,e,n){return Be(t).beforeAuthStateChanged(e,n)}function HC(t,e,n,r){return Be(t).onAuthStateChanged(e,n,r)}function xy(t){return Be(t).signOut()}const Wl="__sak";/**
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
 */class lE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wl,"1"),this.storage.removeItem(Wl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const qC=1e3,WC=10;class uE extends lE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);IC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,WC):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},qC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}uE.type="LOCAL";const KC=uE;/**
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
 */class cE extends lE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}cE.type="SESSION";const hE=cE;/**
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
 */function GC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ku{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ku(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),u=await GC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ku.receivers=[];/**
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
 */function Gf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class QC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const h=Gf("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function dn(){return window}function YC(t){dn().location.href=t}/**
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
 */function dE(){return typeof dn().WorkerGlobalScope<"u"&&typeof dn().importScripts=="function"}async function XC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function ZC(){return dE()?self:null}/**
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
 */const fE="firebaseLocalStorageDb",eP=1,Kl="firebaseLocalStorage",pE="fbase_key";class Zo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cu(t,e){return t.transaction([Kl],e?"readwrite":"readonly").objectStore(Kl)}function tP(){const t=indexedDB.deleteDatabase(fE);return new Zo(t).toPromise()}function rd(){const t=indexedDB.open(fE,eP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Kl,{keyPath:pE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Kl)?e(r):(r.close(),await tP(),e(await rd()))})})}async function Ry(t,e,n){const r=Cu(t,!0).put({[pE]:e,value:n});return new Zo(r).toPromise()}async function nP(t,e){const n=Cu(t,!1).get(e),r=await new Zo(n).toPromise();return r===void 0?null:r.value}function ky(t,e){const n=Cu(t,!0).delete(e);return new Zo(n).toPromise()}const rP=800,sP=3;class mE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>sP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ku._getInstance(ZC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await XC(),!this.activeServiceWorker)return;this.sender=new QC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rd();return await Ry(e,Wl,"1"),await ky(e,Wl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ry(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>nP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ky(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Cu(s,!1).getAll();return new Zo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mE.type="LOCAL";const iP=mE;new Xo(3e4,6e4);/**
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
 */function gE(t,e){return e?An(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Qf extends oE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $s(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $s(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $s(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function oP(t){return zC(t.auth,new Qf(t),t.bypassAuthState)}function aP(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),UC(n,new Qf(t),t.bypassAuthState)}async function lP(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),jC(n,new Qf(t),t.bypassAuthState)}/**
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
 */class yE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oP;case"linkViaPopup":case"linkViaRedirect":return lP;case"reauthViaPopup":case"reauthViaRedirect":return aP;default:mn(this.auth,"internal-error")}}resolve(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const uP=new Xo(2e3,1e4);async function cP(t,e,n){if(qt(t.app))return Promise.reject(Xt(t,"operation-not-supported-in-this-environment"));const r=Ru(t);iC(t,e,Kf);const s=gE(r,n);return new $r(r,"signInViaPopup",e,s).executeNotNull()}class $r extends yE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,$r.currentPopupAction&&$r.currentPopupAction.cancel(),$r.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){On(this.filter.length===1,"Popup operations only handle one event");const e=Gf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$r.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uP.get())};e()}}$r.currentPopupAction=null;/**
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
 */const hP="pendingRedirect",tl=new Map;class dP extends yE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=tl.get(this.auth._key());if(!e){try{const r=await fP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}tl.set(this.auth._key(),e)}return this.bypassAuthState||tl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fP(t,e){const n=gP(e),r=mP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function pP(t,e){tl.set(t._key(),e)}function mP(t){return An(t._redirectPersistence)}function gP(t){return el(hP,t.config.apiKey,t.name)}async function yP(t,e,n=!1){if(qt(t.app))return Promise.reject(Kr(t));const r=Ru(t),s=gE(r,e),o=await new dP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const _P=10*60*1e3;class vP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!_E(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Xt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_P&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cy(e))}saveEventToCache(e){this.cachedEventUids.add(Cy(e)),this.lastProcessedEventTime=Date.now()}}function Cy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _E({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _E(t);default:return!1}}/**
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
 */async function EP(t,e={}){return hi(t,"GET","/v1/projects",e)}/**
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
 */const TP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IP=/^https?/;async function SP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await EP(t);for(const n of e)try{if(AP(n))return}catch{}mn(t,"unauthorized-domain")}function AP(t){const e=td(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!IP.test(n))return!1;if(TP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const xP=new Xo(3e4,6e4);function Py(){const t=dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function RP(t){return new Promise((e,n)=>{var s,i,o;function r(){Py(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Py(),n(Xt(t,"network-request-failed"))},timeout:xP.get()})}if((i=(s=dn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=dn().gapi)!=null&&o.load)r();else{const l=bC("iframefcb");return dn()[l]=()=>{gapi.load?r():n(Xt(t,"network-request-failed"))},PC(`${NC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw nl=null,e})}let nl=null;function kP(t){return nl=nl||RP(t),nl}/**
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
 */const CP=new Xo(5e3,15e3),PP="__/auth/iframe",NP="emulator/auth/iframe",bP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VP(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$f(e,NP):`https://${t.config.authDomain}/${PP}`,r={apiKey:e.apiKey,appName:t.name,v:oi},s=DP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Uo(r).slice(1)}`}async function OP(t){const e=await kP(t),n=dn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:VP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Xt(t,"network-request-failed"),l=dn().setTimeout(()=>{i(o)},CP.get());function u(){dn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const LP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MP=500,FP=600,jP="_blank",UP="http://localhost";class Ny{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zP(t,e,n,r=MP,s=FP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...LP,width:r.toString(),height:s.toString(),top:i,left:o},h=ut().toLowerCase();n&&(l=Jw(h)?jP:n),Yw(h)&&(e=e||UP,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[x,C])=>`${m}${x}=${C},`,"");if(TC(h)&&l!=="_self")return $P(e||"",l),new Ny(null);const p=window.open(e||"",l,f);ee(p,t,"popup-blocked");try{p.focus()}catch{}return new Ny(p)}function $P(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const BP="__/auth/handler",HP="emulator/auth/handler",qP=encodeURIComponent("fac");async function by(t,e,n,r,s,i){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:oi,eventId:s};if(e instanceof Kf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",I1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Jo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${qP}=${encodeURIComponent(u)}`:"";return`${WP(t)}?${Uo(l).slice(1)}${h}`}function WP({config:t}){return t.emulator?$f(t,HP):`https://${t.authDomain}/${BP}`}/**
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
 */const Mc="webStorageSupport";class KP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hE,this._completeRedirectFn=yP,this._overrideRedirectResult=pP}async _openPopup(e,n,r,s){var o;On((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await by(e,n,r,td(),s);return zP(e,i,Gf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await by(e,n,r,td(),s);return YC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(On(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await OP(e),r=new vP(e);return n.register("authEvent",s=>(ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Mc,{type:Mc},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Mc];i!==void 0&&n(!!i),mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=SP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rE()||Xw()||qf()}}const GP=KP;var Dy="@firebase/auth",Vy="1.13.1";/**
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
 */class QP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function YP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XP(t){Ys(new es("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sE(t)},h=new kC(r,s,i,u);return VC(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ys(new es("auth-internal",e=>{const n=Ru(e.getProvider("auth").getImmediate());return(r=>new QP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fr(Dy,Vy,YP(t)),fr(Dy,Vy,"esm2020")}/**
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
 */const JP=5*60,ZP=n0("authIdTokenMaxAge")||JP;let Oy=null;const eN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ZP)return;const s=n==null?void 0:n.token;Oy!==s&&(Oy=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function tN(t=a0()){const e=tf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=DC(t,{popupRedirectResolver:GP,persistence:[iP,KC,hE]}),r=n0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=eN(i.toString());BC(n,o,()=>o(n.currentUser)),$C(n,l=>o(l))}}const s=e0("auth");return s&&OC(n,`http://${s}`),n}function nN(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}CC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Xt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",nN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XP("Browser");const rN={apiKey:"AIzaSyD-9q9fFjLiKXZT5KU23L7hIsHn1ejXcAk",authDomain:"tb-tweet-annotator.firebaseapp.com",projectId:"tb-tweet-annotator",storageBucket:"tb-tweet-annotator.firebasestorage.app",messagingSenderId:"646743575811",appId:"1:646743575811:web:e6ecf1fd4038e98cd2ed36"},vE=o0(rN),Qe=Uk(vE),nr=tN(vE),sN=new vn;function iN(t,e=["Relevant","Irrelevant","Flagged"]){const n=Object.values(t).filter(h=>e.reduce((p,m)=>p+(h[m]||0),0)>=2);if(n.length===0)return null;const r=e.reduce((h,f)=>h+(n[0][f]||0),0),s=n.length,o=n.map(h=>e.reduce((p,m)=>{const x=h[m]||0;return p+x*(x-1)},0)/(r*(r-1))).reduce((h,f)=>h+f,0)/s,u=e.map(h=>n.reduce((p,m)=>p+(m[h]||0),0)/(s*r)).reduce((h,f)=>h+f*f,0);return u===1?1:(o-u)/(1-u)}function oN(t){const e=Object.values(t).filter(f=>f.length>=2);if(e.length===0)return null;const n=[...new Set(e.flat())],r=Object.fromEntries(n.map((f,p)=>[f,p])),s=n.length,i=Array.from({length:s},()=>Array(s).fill(0));e.forEach(f=>{const p=f.length;for(let m=0;m<p;m++)for(let x=0;x<p;x++)m!==x&&(i[r[f[m]]][r[f[x]]]+=1/(p-1))});const o=i.map(f=>f.reduce((p,m)=>p+m,0)),l=o.reduce((f,p)=>f+p,0);let u=0;for(let f=0;f<s;f++)for(let p=0;p<s;p++)f!==p&&(u+=i[f][p]);u/=l;let h=0;for(let f=0;f<s;f++)for(let p=0;p<s;p++)f!==p&&(h+=o[f]*o[p]);return h/=l*(l-1),h===0?null:1-u/h}function aN(t,e){const n=Object.keys(t).filter(f=>e[f]);if(n.length===0)return null;const r=["Relevant","Irrelevant","Flagged"];let s=0;const i={},o={};r.forEach(f=>{i[f]=0,o[f]=0}),n.forEach(f=>{t[f]===e[f]&&s++,i[t[f]]++,o[e[f]]++});const l=n.length;if(l===0)return null;const u=s/l,h=r.reduce((f,p)=>f+i[p]/l*(o[p]/l),0);return h===1?1:(u-h)/(1-h)}function lN({onBack:t}){const[e,n]=J.useState({}),[r,s]=J.useState({bucketCounts:{},sharedIds:new Set}),[i,o]=J.useState([]),[l,u]=J.useState(!0);J.useEffect(()=>{let p=!1,m=!1,x=!1;const C=()=>{p&&m&&x&&u(!1)},N=Oc(In(Qe,"users"),w=>{const R={};w.forEach(D=>{const V=D.data();V.annotatorId&&(R[V.annotatorId]={email:D.id,...V})}),n(R),p=!0,C()}),L=Oc(In(Qe,"tweet_assignments"),w=>{const R={},D=new Set;w.forEach(V=>{const j=V.data().bucket;R[j]=(R[j]||0)+1,j==="Shared"&&D.add(V.id)}),s({bucketCounts:R,sharedIds:D}),m=!0,C()}),S=Oc(In(Qe,"annotations"),w=>{const R=[];w.forEach(D=>R.push(D.data())),o(R),x=!0,C()});return()=>{N(),L(),S()}},[]);const h=J.useMemo(()=>{const p=Object.keys(e).sort(),m={},x={};r.sharedIds.forEach(V=>{m[V]={Relevant:0,Irrelevant:0,Flagged:0},x[V]=[]}),i.forEach(({tweetId:V,label:j})=>{m[V]&&(m[V][j]=(m[V][j]||0)+1,x[V].push(j))});const C=iN(m),N=oN(x),L={},S={};p.forEach(V=>{L[V]={},S[V]={Relevant:0,Irrelevant:0,Flagged:0,total:0}}),i.forEach(({annotatorId:V,tweetId:j,label:_})=>{L[V]&&(L[V][j]=_,S[V][_]=(S[V][_]||0)+1,S[V].total+=1)});const w={};for(let V=0;V<p.length;V++)for(let j=V+1;j<p.length;j++){const _=p[V],y=p[j],E=Object.fromEntries(Object.entries(L[_]).filter(([A])=>r.sharedIds.has(A))),I=Object.fromEntries(Object.entries(L[y]).filter(([A])=>r.sharedIds.has(A)));w[`${_}${y}`]=aN(E,I)}const R=i.length,D=p.reduce((V,j)=>V+(S[j].Relevant||0),0);return{activeAnnotators:p,byAnnotator:L,labelCounts:S,overallFleiss:C,overallAlpha:N,kappa:w,totalLabels:R,prevalence:R>0?D/R:0,totalRelevant:D}},[e,r,i]);if(l)return v.jsxs("div",{className:"min-h-screen bg-slate-900 flex flex-col items-center justify-center p-16 text-slate-400",children:[v.jsx(Jd,{size:36,className:"animate-spin mb-4"}),v.jsx("p",{className:"font-mono text-sm",children:"Syncing live database..."})]});const f=p=>p===null?"pending":p>=.8?`κ ${p.toFixed(2)} ✓ strong`:p>=.6?`κ ${p.toFixed(2)} ✓ good`:`κ ${p.toFixed(2)} ⚠ review`;return v.jsx("div",{className:"min-h-screen bg-slate-900 font-sans p-6",children:v.jsxs("div",{className:"max-w-5xl mx-auto flex flex-col gap-6 text-slate-200",children:[v.jsxs("div",{className:"flex justify-between items-center mb-2",children:[v.jsxs("div",{children:[v.jsxs("h1",{className:"text-2xl font-semibold text-slate-100 flex items-center gap-3",children:[v.jsx("div",{className:"p-2 bg-emerald-900/50 rounded-lg border border-emerald-800/50",children:v.jsx(Yv,{className:"text-emerald-400",size:24})}),"Team Progress Dashboard"]}),v.jsxs("p",{className:"text-sm text-slate-400 font-mono mt-2 flex items-center gap-2",children:[v.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),"Live Sync Active"]})]}),t&&v.jsx("button",{onClick:t,className:"px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-md text-sm font-medium transition-colors border border-slate-700",children:"← Back to Queue"})]}),v.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:[{label:"Total Annotated",value:h.totalLabels.toLocaleString()},{label:"Relevant Rate",value:`${(h.prevalence*100).toFixed(1)}%`},{label:"Positives So Far",value:h.totalRelevant},{label:"Positives Target",value:"600 Target"}].map(({label:p,value:m})=>v.jsxs("div",{className:"bg-slate-800 rounded-xl p-5 border border-slate-700 shadow-lg",children:[v.jsx("p",{className:"text-xs text-slate-400 mb-1 tracking-wide uppercase font-semibold",children:p}),v.jsx("p",{className:"text-2xl font-bold text-slate-100",children:m})]},p))}),v.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:h.activeAnnotators.map(p=>{const m=r.bucketCounts.Shared||0,x=r.bucketCounts[`Annotator_${p}`]||0,C=m+x,N=h.labelCounts[p],L=N.total,S=C-L,w=C>0?L/C*100:0,R=e[p].email||`Annotator ${p}`;return v.jsxs("div",{className:"bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg flex flex-col",children:[v.jsxs("div",{className:"flex items-center gap-3 mb-5 border-b border-slate-700 pb-4",children:[v.jsx("div",{className:"w-10 h-10 rounded-full bg-slate-900 border border-slate-600 flex items-center justify-center flex-shrink-0",children:v.jsx(Rl,{size:20,className:"text-slate-400"})}),v.jsxs("div",{className:"overflow-hidden",children:[v.jsxs("h2",{className:"text-lg font-semibold text-slate-100 truncate",children:["Annotator ",p]}),v.jsx("p",{className:"text-xs text-slate-400 truncate",children:R})]})]}),v.jsxs("div",{className:"space-y-3 flex-grow",children:[v.jsxs("div",{className:"flex justify-between text-sm",children:[v.jsx("span",{className:"text-slate-400",children:"Total Assigned"}),v.jsx("span",{className:"font-mono text-slate-200",children:C})]}),v.jsxs("div",{className:"flex justify-between text-sm",children:[v.jsx("span",{className:"text-slate-400",children:"Annotated"}),v.jsx("span",{className:"font-mono text-emerald-400",children:L})]}),v.jsxs("div",{className:"flex justify-between text-sm",children:[v.jsx("span",{className:"text-slate-400",children:"Remaining"}),v.jsx("span",{className:"font-mono text-amber-400",children:Math.max(0,S)})]}),v.jsxs("div",{className:"pt-2",children:[v.jsx("div",{className:"w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-700",children:v.jsx("div",{className:"bg-emerald-500 h-full rounded-full transition-all duration-500",style:{width:`${Math.min(w,100)}%`}})}),v.jsxs("p",{className:"text-right text-xs text-slate-500 mt-1 font-mono",children:[w.toFixed(1),"%"]})]})]}),v.jsx("div",{className:"mt-4 pt-4 border-t border-slate-700",children:v.jsxs("div",{className:"flex flex-wrap gap-2 text-xs font-mono",children:[v.jsxs("span",{className:"px-2 py-1 bg-emerald-900/30 border border-emerald-800/50 text-emerald-400 rounded",children:["Rel: ",N.Relevant]}),v.jsxs("span",{className:"px-2 py-1 bg-red-900/30 border border-red-800/50 text-red-400 rounded",children:["Irr: ",N.Irrelevant]}),v.jsxs("span",{className:"px-2 py-1 bg-amber-900/30 border border-amber-800/50 text-amber-400 rounded",children:["Flag: ",N.Flagged]})]})})]},p)})}),v.jsxs("div",{className:"bg-slate-800 rounded-xl border border-slate-700 p-6 shadow-lg",children:[v.jsxs("div",{className:"flex justify-between items-center mb-4 border-b border-slate-700 pb-3",children:[v.jsx("h3",{className:"text-sm font-medium text-slate-300 uppercase tracking-wider",children:"Inter-rater Reliability"}),v.jsxs("span",{className:"text-xs text-slate-500 font-mono",children:["Shared Set: ",r.sharedIds.size," tweets"]})]}),v.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm",children:[Object.entries(h.kappa).map(([p,m])=>{const[x,C]=p.split("");return v.jsxs("div",{className:"flex justify-between items-center bg-slate-900/50 p-3 rounded-lg border border-slate-700/50",children:[v.jsxs("span",{className:"text-slate-300 font-medium",children:["Ann ",x," ↔ ",C]}),v.jsx("span",{className:`font-mono font-bold ${m===null?"text-slate-600":m>=.8?"text-emerald-400":m>=.6?"text-emerald-500":"text-amber-400"}`,children:f(m)})]},p)}),Object.keys(h.kappa).length===0&&v.jsx("div",{className:"text-slate-500 italic text-xs",children:"Not enough annotators registered to calculate agreement."})]})]}),v.jsxs("div",{className:"flex justify-between items-center bg-slate-900/60 p-4 rounded-lg border border-slate-700 mb-4",children:[v.jsx("span",{className:"text-slate-300 font-medium",children:"Overall (Fleiss' κ)"}),v.jsx("span",{className:"font-mono font-bold text-emerald-400",children:h.overallFleiss!==null?h.overallFleiss.toFixed(2):"pending"})]}),v.jsxs("div",{className:"flex justify-between items-center bg-slate-900/60 p-4 rounded-lg border border-slate-700 mb-4",children:[v.jsx("span",{className:"text-slate-300 font-medium",children:"Overall (Krippendorff's α)"}),v.jsx("span",{className:"font-mono font-bold text-emerald-400",children:h.overallAlpha!==null?h.overallAlpha.toFixed(2):"pending"})]})]})})}const Ly=["Relevant","Irrelevant"];function uN({onBack:t}){var k,T;const[e,n]=J.useState({}),[r,s]=J.useState({}),[i,o]=J.useState({}),[l,u]=J.useState({}),[h,f]=J.useState(!0),[p,m]=J.useState(null),[x,C]=J.useState("overview"),[N,L]=J.useState(0),[S,w]=J.useState(0);J.useEffect(()=>{async function $(){f(!0);const Y=await Ns(In(Qe,"tweet_assignments")),W={};Y.forEach(se=>{W[se.id]={...se.data(),id:se.id}});const ue=await Ns(In(Qe,"annotations")),F={};ue.forEach(se=>{const{tweetId:Ce,annotatorId:Me,label:Fe}=se.data();F[Ce]=F[Ce]||{},F[Ce][Me]=Fe});const U=await Ns(In(Qe,"flag_resolutions")),H={};U.forEach(se=>{H[se.id]=se.data()});const X=await Ns(In(Qe,"adjudications")),ie={};X.forEach(se=>{ie[se.id]=se.data()}),n(W),s(F),o(H),u(ie),f(!1)}$()},[]);const R=($,Y)=>{var F;const W=(F=r[$])==null?void 0:F[Y];if(W!=="Flagged")return W;const ue=i[`${$}_${Y}`];return ue?ue.resolvedLabel:"Flagged"},D=J.useMemo(()=>{const $={};Object.values(e).filter(W=>W.bucket==="Shared").forEach(W=>{const ue=r[W.id]||{};["A","B","D"].forEach(F=>{ue[F]||($[F]=($[F]||0)+1)})});const Y={incomplete:[],needsFlagResolution:[],readyForMajority:[],resolved:[]};return Object.values(e).filter(W=>W.bucket==="Shared").forEach(W=>{const ue=r[W.id]||{},F=Object.keys(ue);if(F.length<3){Y.incomplete.push(W.id);return}if(l[W.id]){Y.resolved.push(W.id);return}const U=F.filter(H=>R(W.id,H)==="Flagged");U.length>0?Y.needsFlagResolution.push({tweetId:W.id,pendingFlags:U}):Y.readyForMajority.push(W.id)}),{...Y,missingByAnnotator:$}},[e,r,i,l]),V=J.useMemo(()=>{const $=[];return D.needsFlagResolution.forEach(({tweetId:Y,pendingFlags:W})=>{W.forEach(ue=>$.push({tweetId:Y,annotatorId:ue}))}),$},[D]),j=J.useMemo(()=>Object.values(e).filter($=>$.bucket&&$.bucket.startsWith("Annotator_")).map($=>{var ue;const Y=$.bucket.replace("Annotator_",""),W=(ue=r[$.id])==null?void 0:ue[Y];return{tweetId:$.id,annotatorId:Y,raw:W}}).filter(({tweetId:$,annotatorId:Y,raw:W})=>W==="Flagged"&&!i[`${$}_${Y}`]&&!l[$]),[e,r,i,l]),_=async($,Y,W)=>{var F;m(`${$}_${Y}`);const ue=`${$}_${Y}`;await Uw(Ps(Qe,"flag_resolutions",ue),{tweetId:$,annotatorId:Y,originalLabel:"Flagged",resolvedLabel:W,resolvedBy:((F=nr.currentUser)==null?void 0:F.email)||"unknown",resolvedAt:Hi()}),o(U=>{var H;return{...U,[ue]:{resolvedLabel:W,resolvedBy:(H=nr.currentUser)==null?void 0:H.email}}}),m(null),L(U=>Math.max(0,Math.min(U,V.length-2)))},y=async($,Y,W)=>{var U,H;m(`${$}_${Y}`);const ue=`${$}_${Y}`,F=yy(Qe);F.set(Ps(Qe,"flag_resolutions",ue),{tweetId:$,annotatorId:Y,originalLabel:"Flagged",resolvedLabel:W,resolvedBy:((U=nr.currentUser)==null?void 0:U.email)||"unknown",resolvedAt:Hi()}),F.set(Ps(Qe,"adjudications",$),{tweetId:$,finalLabel:W,method:"flag_resolved_individual",raterLabels:{[Y]:W},hadFlags:!0,resolvedBy:((H=nr.currentUser)==null?void 0:H.email)||"unknown",resolvedAt:Hi()}),await F.commit(),o(X=>({...X,[ue]:{resolvedLabel:W}})),u(X=>({...X,[$]:{finalLabel:W,method:"flag_resolved_individual"}})),m(null),w(X=>Math.max(0,Math.min(X,j.length-2)))},E=async()=>{const $=yy(Qe);let Y=0;D.readyForMajority.forEach(W=>{const ue=r[W],F=Object.keys(ue),U={};F.forEach(se=>{U[se]=R(W,se)});const H={};Object.values(U).forEach(se=>{H[se]=(H[se]||0)+1});const X=Object.keys(H).sort((se,Ce)=>H[Ce]-H[se])[0],ie=Object.values(ue).some(se=>se==="Flagged");$.set(Ps(Qe,"adjudications",W),{tweetId:W,finalLabel:X,method:ie?"majority_after_flag_resolution":"majority",raterLabels:U,hadFlags:ie,resolvedAt:Hi()}),Y++}),Y>0&&(await $.commit(),u(W=>{const ue={...W};return D.readyForMajority.forEach(F=>{ue[F]=ue[F]||{placeholder:!0}}),ue}))};if(h)return v.jsxs("div",{className:"min-h-screen bg-slate-900 flex flex-col items-center justify-center text-slate-400 gap-4",children:[v.jsx(Jd,{size:32,className:"animate-spin"}),v.jsx("p",{className:"font-mono text-sm",children:"Loading annotation data…"})]});const I=V[N],A=j[S];return v.jsx("div",{className:"min-h-screen bg-slate-900 text-slate-200 p-6",children:v.jsxs("div",{className:"max-w-3xl mx-auto flex flex-col gap-6",children:[v.jsxs("div",{className:"flex justify-between items-center",children:[v.jsx("h1",{className:"text-2xl font-semibold text-slate-100",children:"Flag Resolution & Adjudication"}),t&&v.jsxs("button",{onClick:t,className:"flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-md text-sm border border-slate-700",children:[v.jsx(PS,{size:16})," Back"]})]}),v.jsx("div",{className:"flex gap-2",children:[["overview","Overview"],["sharedFlags",`Shared-Set Flags (${V.length})`],["individualFlags",`Individual-Bucket Flags (${j.length})`]].map(([$,Y])=>v.jsx("button",{onClick:()=>C($),className:`px-4 py-2 rounded-full text-sm font-medium transition-colors ${x===$?"bg-slate-700 text-slate-100 ring-1 ring-slate-500":"bg-slate-800/50 text-slate-400 hover:bg-slate-800"}`,children:Y},$))}),x==="overview"&&v.jsxs("div",{className:"flex flex-col gap-6",children:[v.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:[["Ready for majority",D.readyForMajority.length],["Needs flag resolution",D.needsFlagResolution.length],["Already resolved",D.resolved.length],["Incomplete (<3 raters)",D.incomplete.length]].map(([$,Y])=>v.jsxs("div",{className:"bg-slate-800 rounded-xl p-4 border border-slate-700",children:[v.jsx("p",{className:"text-xs text-slate-400 uppercase tracking-wide mb-1",children:$}),v.jsx("p",{className:"text-2xl font-bold text-slate-100",children:Y})]},$))}),v.jsxs("div",{className:"bg-slate-800 rounded-xl p-5 border border-slate-700 flex items-start gap-3",children:[v.jsx(BS,{size:18,className:"text-emerald-400 mt-0.5 flex-shrink-0"}),v.jsxs("div",{children:[v.jsxs("p",{className:"text-sm text-slate-200 font-medium mb-1",children:[D.readyForMajority.length," shared tweet",D.readyForMajority.length===1?"":"s"," can be majority-resolved right now"]}),v.jsx("p",{className:"text-xs text-slate-400 mb-3",children:"Every vote on these is binary (either originally, or after your flag resolutions) — a majority always exists once there are only 2 categories."}),v.jsxs("button",{onClick:E,disabled:D.readyForMajority.length===0,className:"px-4 py-2 bg-emerald-900/40 hover:bg-emerald-800/50 text-emerald-400 rounded-md text-sm font-medium border border-emerald-800/50 disabled:opacity-40 disabled:cursor-not-allowed",children:["Apply majority vote to ",D.readyForMajority.length," item",D.readyForMajority.length===1?"":"s"]})]})]}),D.needsFlagResolution.length>0&&v.jsxs("div",{className:"bg-amber-900/10 rounded-xl p-5 border border-amber-800/40 flex items-start gap-3",children:[v.jsx(YS,{size:18,className:"text-amber-400 mt-0.5 flex-shrink-0"}),v.jsxs("div",{children:[v.jsxs("p",{className:"text-sm text-slate-200 font-medium mb-1",children:[D.needsFlagResolution.length," shared tweet",D.needsFlagResolution.length===1?"":"s"," still blocked on a flag"]}),v.jsx("p",{className:"text-xs text-slate-400",children:`Switch to the "Shared-Set Flags" tab to resolve these — once done, they'll move into the majority-ready bucket above.`})]})]}),Object.keys(D.missingByAnnotator||{}).length>0&&v.jsxs("div",{className:"bg-slate-800 rounded-xl p-5 border border-slate-700",children:[v.jsx("p",{className:"text-sm text-slate-300 font-medium mb-3",children:"Missing from the shared set, by annotator"}),v.jsx("div",{className:"flex gap-3 text-xs font-mono",children:Object.entries(D.missingByAnnotator).map(([$,Y])=>v.jsxs("span",{className:"px-3 py-1.5 bg-slate-900 border border-slate-700 rounded",children:["Ann ",$,": ",Y," missing"]},$))})]})]}),x==="sharedFlags"&&(I?v.jsxs("div",{className:"bg-slate-800 rounded-xl p-6 border border-slate-700 flex flex-col gap-4",children:[v.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-400 font-mono",children:[v.jsx(ZS,{size:14})," Flag ",N+1," of ",V.length," · Tweet ",I.tweetId," · Annotator ",I.annotatorId]}),v.jsx("p",{className:"text-lg text-slate-100 whitespace-pre-wrap",children:(k=e[I.tweetId])==null?void 0:k.text}),v.jsx("div",{className:"flex flex-wrap gap-2 text-xs font-mono border-t border-slate-700 pt-3",children:Object.keys(r[I.tweetId]||{}).map($=>{const Y=R(I.tweetId,$),W=$===I.annotatorId;return v.jsxs("span",{className:`px-2 py-1 rounded border ${W?"bg-amber-900/30 border-amber-700/50 text-amber-300":"bg-slate-900 border-slate-700 text-slate-300"}`,children:["Ann ",$,": ",W?"Flagged (pending)":Y]},$)})}),v.jsxs("p",{className:"text-xs text-slate-500",children:["Assign the real label Annotator ",I.annotatorId," would have given — this replaces their flagged vote in the majority tally."]}),v.jsx("div",{className:"flex gap-3",children:Ly.map($=>v.jsxs("button",{onClick:()=>_(I.tweetId,I.annotatorId,$),disabled:!!p,className:`flex-1 flex flex-col items-center py-3 rounded-xl border disabled:opacity-60 ${$==="Relevant"?"bg-emerald-700 hover:bg-emerald-600 text-white border-emerald-600":"bg-red-900 hover:bg-red-800 text-white border-red-800"}`,children:[$==="Relevant"?v.jsx(tr,{size:20,className:"mb-1"}):v.jsx(to,{size:20,className:"mb-1"}),$]},$))})]}):v.jsxs("div",{className:"text-center text-slate-500 p-8 border border-dashed border-slate-700 rounded-xl",children:[v.jsx(tr,{size:40,className:"mx-auto mb-3 opacity-50"}),"No pending shared-set flags."]})),x==="individualFlags"&&(A?v.jsxs("div",{className:"bg-slate-800 rounded-xl p-6 border border-slate-700 flex flex-col gap-4",children:[v.jsxs("div",{className:"flex items-center gap-2 text-xs text-amber-400 font-mono",children:[v.jsx(Rl,{size:14})," Individual flag ",S+1," of ",j.length," · Annotator ",A.annotatorId,"'s own item"]}),v.jsx("p",{className:"text-xs text-slate-500 -mt-2",children:"No second opinion exists for this item — this decision rests on Annotator A alone."}),v.jsx("p",{className:"text-lg text-slate-100 whitespace-pre-wrap",children:(T=e[A.tweetId])==null?void 0:T.text}),v.jsx("div",{className:"flex gap-3 mt-2",children:Ly.map($=>v.jsxs("button",{onClick:()=>y(A.tweetId,A.annotatorId,$),disabled:!!p,className:`flex-1 flex flex-col items-center py-3 rounded-xl border disabled:opacity-60 ${$==="Relevant"?"bg-emerald-700 hover:bg-emerald-600 text-white border-emerald-600":"bg-red-900 hover:bg-red-800 text-white border-red-800"}`,children:[$==="Relevant"?v.jsx(tr,{size:20,className:"mb-1"}):v.jsx(to,{size:20,className:"mb-1"}),$]},$))})]}):v.jsxs("div",{className:"text-center text-slate-500 p-8 border border-dashed border-slate-700 rounded-xl",children:[v.jsx(tr,{size:40,className:"mx-auto mb-3 opacity-50"}),"No pending individual-bucket flags."]}))]})})}function Fc({label:t="Loading…"}){return v.jsxs("div",{className:"min-h-screen bg-slate-900 flex flex-col items-center justify-center gap-4 text-slate-400",children:[v.jsx(Jd,{size:36,className:"animate-spin"}),v.jsx("p",{className:"text-sm font-mono",children:t})]})}function cN(){const[t,e]=J.useState(void 0),[n,r]=J.useState(null),[s,i]=J.useState([]),[o,l]=J.useState(!1),[u,h]=J.useState(!1),[f,p]=J.useState(0),[m,x]=J.useState("Unannotated"),[C,N]=J.useState("default"),[L,S]=J.useState(null),[w,R]=J.useState(!1),[D,V]=J.useState(!1),[j,_]=J.useState(!1),[y,E]=J.useState(null),[I,A]=J.useState(!1);J.useEffect(()=>HC(nr,H=>e(H??null)),[]),J.useEffect(()=>{async function U(){if(!t){r(null),E(null),A(!1);return}try{const H=Ps(Qe,"users",t.email),X=await eC(H);if(X.exists()){const ie=X.data();r(ie.annotatorId),E(ie.role||"annotator"),A(!1)}else console.warn(`Unauthorized access attempt by: ${t.email}`),A(!0)}catch(H){console.error("Error fetching user role:",H)}}U()},[t]);const k=J.useCallback(async()=>{if(n){l(!0);try{const U=["Shared",`Annotator_${n}`],H=await Ns(fy(In(Qe,"tweet_assignments"),py("bucket","in",U))),X={};H.forEach(Me=>{X[Me.id]={...Me.data(),id:Me.id,label:null}}),(await Ns(fy(In(Qe,"annotations"),py("annotatorId","==",n)))).forEach(Me=>{const{tweetId:Fe,label:St,updatedAt:gn}=Me.data();X[Fe]&&(X[Fe].label=St,X[Fe].updatedAt=(gn==null?void 0:gn.toMillis())||0)});const se=Object.values(X).sort((Me,Fe)=>{const St=gn=>gn.bucket==="Shared"?0:1;return St(Me)-St(Fe)});i(se);const Ce=se.findIndex(Me=>!Me.label);p(Ce!==-1?Ce:0)}finally{l(!1)}}},[n]);J.useEffect(()=>{k()},[k]);const T=async U=>{if(!W||u)return;S(U),h(!0);const H=Date.now(),X=s.map(ie=>ie.id===W.id?{...ie,label:U,updatedAt:H}:ie);i(X),await Uw(Ps(Qe,"annotations",`${W.id}_${n}`),{tweetId:W.id,annotatorId:n,label:U,updatedAt:Hi()},{merge:!0}),h(!1),setTimeout(()=>{S(null),m==="All"&&f<Y.length-1&&p(ie=>ie+1)},300)},$=()=>{const U=["Tweet ID","Text","Created At","Location","Language","Label"],H=s.map(se=>`"${se.tweet_id}","${(se.text??"").replace(/"/g,'""')}","${se.createdAt??""}","${(se.location??"").replace(/"/g,'""')}","${se.language??""}","${se.label??""}"`),X=new Blob([[U.join(","),...H].join(`
`)],{type:"text/csv"});Object.assign(document.createElement("a"),{href:URL.createObjectURL(X),download:`tb_annotations_${n}_export.csv`}).click()},Y=J.useMemo(()=>{let U=s;return m==="Unannotated"?U=s.filter(H=>!H.label):m!=="All"&&(U=s.filter(H=>H.label===m)),C==="newest"?U=[...U].sort((H,X)=>(X.updatedAt||0)-(H.updatedAt||0)):C==="oldest"&&(U=[...U].sort((H,X)=>(H.updatedAt||0)-(X.updatedAt||0))),U},[s,m,C]),W=Y[f]??null,ue=s.length,F=s.filter(U=>U.label).length;return t===void 0?v.jsx(Fc,{label:"Initialising…"}):I?v.jsxs("div",{className:"min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4 text-center",children:[v.jsx(to,{size:48,className:"text-red-500 mb-4"}),v.jsx("h2",{className:"text-xl font-semibold text-slate-100 mb-2",children:"Access Denied"}),v.jsx("p",{className:"text-slate-400 max-w-md mb-6",children:"This sovereign annotation chamber is reserved for certified TB discourse, AI and natural language specialists."}),v.jsx("p",{className:"text-slate-400 font-mono text-sm",children:"Asidlali la mfowethu."}),v.jsx("p",{className:"text-slate-500 text-xs mt-6",children:"NOTE: This sacred archive remains closed to wandering souls. Should your purpose prove sincere, Grand Master Popo may grant audience. Good luck."}),v.jsx("br",{}),v.jsx("a",{href:"mailto:popovich.thelord@gmail.com",className:"px-6 py-2 bg-slate-800 text-slate-300 rounded hover:bg-slate-700 transition-colors border border-slate-700",children:"Present Your Plea"}),v.jsx("br",{}),v.jsx("br",{}),v.jsx("button",{onClick:()=>{A(!1),xy(nr)},className:"px-6 py-2 bg-slate-800 text-slate-300 rounded hover:bg-slate-700 transition-colors border border-slate-700",children:"Return to Sign In"})]}):t?n?D?v.jsx(lN,{onBack:()=>V(!1)}):j?v.jsx(uN,{onBack:()=>_(!1)}):o?v.jsx(Fc,{label:"Loading your annotation set…"}):v.jsxs("div",{className:"min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-emerald-500/30",children:[v.jsxs("header",{className:"border-b border-slate-800 bg-slate-900/50 p-4 sticky top-0 backdrop-blur-sm z-10",children:[v.jsxs("div",{className:"max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4",children:[v.jsxs("div",{children:[v.jsx("h1",{className:"text-lg font-semibold tracking-wide text-slate-100",children:"TB Discourse Classifier"}),v.jsxs("p",{className:"text-sm text-slate-400 font-mono mt-1",children:["Annotator ",n," · Progress: ",F," / ",ue,ue>0&&` (${(F/ue*100).toFixed(1)}%)`]})]}),v.jsxs("div",{className:"flex gap-3 items-center",children:[y==="admin"&&v.jsxs(v.Fragment,{children:[v.jsxs("button",{onClick:()=>V(!0),className:"flex items-center gap-2 px-3 py-2 bg-emerald-900/30 hover:bg-emerald-800/50 text-emerald-400 rounded-md text-sm font-medium transition-colors border border-emerald-800/50",children:[v.jsx(Yv,{size:16})," Dashboard"]}),v.jsxs("button",{onClick:()=>_(!0),className:"flex items-center gap-2 px-3 py-2 bg-amber-900/30 hover:bg-amber-800/50 text-amber-400 rounded-md text-sm font-medium transition-colors border border-amber-800/50",children:[v.jsx(Ic,{size:16})," Adjudication"]})]}),t.photoURL?v.jsx("img",{src:t.photoURL,alt:t.displayName||"Annotator",title:`Signed in as ${t.email}`,referrerPolicy:"no-referrer",className:"w-8 h-8 rounded-full border border-slate-600 bg-slate-800 object-cover"}):v.jsx("div",{className:"w-8 h-8 rounded-full border border-slate-600 bg-slate-800 flex items-center justify-center",title:`Signed in as ${t.email}`,children:v.jsx(Rl,{size:16,className:"text-slate-400"})}),v.jsxs("button",{onClick:()=>R(!0),className:"flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700 text-slate-300 rounded-md text-sm font-medium transition-colors border border-slate-700",children:[v.jsx(sg,{size:16})," Guidelines"]}),v.jsxs("button",{onClick:$,className:"flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-md text-sm font-medium transition-colors border border-slate-700",children:[v.jsx(MS,{size:16})," Export"]}),v.jsx("button",{onClick:()=>xy(nr),title:"Sign out",className:"flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-400 rounded-md text-sm transition-colors border border-slate-700",children:v.jsx(WS,{size:16})})]})]}),v.jsxs("div",{className:"max-w-3xl mx-auto mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 overflow-x-auto pb-1",children:[v.jsx("div",{className:"flex gap-2",children:["Unannotated","All","Relevant","Irrelevant","Flagged"].map(U=>v.jsx("button",{onClick:()=>{x(U),p(0)},className:`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${m===U?"bg-slate-700 text-slate-100 ring-1 ring-slate-500":"bg-slate-800/50 text-slate-400 hover:bg-slate-800"}`,children:U},U))}),m!=="Unannotated"&&v.jsxs("select",{value:C,onChange:U=>{N(U.target.value),p(0)},className:"px-3 py-1.5 bg-slate-800 border border-slate-700 text-slate-300 text-xs rounded-md focus:outline-none focus:border-emerald-500 transition-colors",children:[v.jsx("option",{value:"default",children:"Default Order"}),v.jsx("option",{value:"newest",children:"Newest First"}),v.jsx("option",{value:"oldest",children:"Oldest First"})]})]})]}),v.jsx("main",{className:"max-w-3xl mx-auto p-4 flex flex-col items-center justify-center min-h-[60vh] pb-36",children:W?v.jsxs("div",{className:"w-full relative",children:[W.label&&v.jsx("div",{className:"absolute -top-3 left-4 px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded bg-slate-800 border border-slate-700 z-10",children:v.jsxs("span",{className:W.label==="Relevant"?"text-emerald-400":W.label==="Flagged"?"text-amber-400":"text-slate-400",children:["Currently: ",W.label]})}),v.jsxs("div",{className:`w-full bg-slate-800 rounded-xl p-6 md:p-8 shadow-2xl border transition-all duration-200 flex flex-col gap-4 ${L==="Relevant"?"border-emerald-500/50 bg-emerald-900/20":L==="Irrelevant"?"border-red-500/50    bg-red-900/20":L==="Flagged"?"border-amber-500/50  bg-amber-900/20":"border-slate-700"}`,children:[v.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-700/50 pb-4",children:[v.jsx("div",{className:"w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0",children:v.jsx(Rl,{size:20,className:"text-slate-400"})}),v.jsxs("div",{className:"flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-300 font-mono",children:[W.createdAt&&v.jsxs("span",{className:"flex items-center gap-1.5",children:[v.jsx(OS,{size:14,className:"text-slate-400"}),new Date(W.createdAt).toLocaleString("en-ZA",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})]}),W.location&&W.location!=="Unknown"&&v.jsxs("span",{className:"flex items-center gap-1.5 truncate",children:[v.jsx(GS,{size:14,className:"text-slate-400"}),W.location]}),W.language&&W.language!=="Unknown"&&v.jsxs("span",{className:"flex items-center gap-1.5 px-2 py-0.5 bg-slate-700/50 rounded-md border border-slate-600 text-slate-300",children:[v.jsx(US,{size:12,className:"text-blue-400"}),W.language]})]})]}),v.jsx("p",{className:"text-xl md:text-2xl leading-relaxed text-slate-100 font-medium whitespace-pre-wrap mt-2",children:W.text}),v.jsxs("div",{className:"mt-4 text-xs text-slate-600 font-mono flex justify-between items-center",children:[v.jsxs("span",{children:["ID: ",W.id]}),v.jsx("span",{className:"text-slate-700",children:W.bucket})]})]}),m!=="Unannotated"&&Y.length>1&&v.jsxs("div",{className:"flex justify-between mt-4 text-sm font-mono text-slate-500",children:[v.jsx("button",{disabled:f===0,onClick:()=>p(U=>U-1),className:"hover:text-slate-300 disabled:opacity-30",children:"← Previous"}),v.jsxs("span",{children:[f+1," of ",Y.length]}),v.jsx("button",{disabled:f===Y.length-1,onClick:()=>p(U=>U+1),className:"hover:text-slate-300 disabled:opacity-30",children:"Next →"})]})]}):v.jsxs("div",{className:"text-center text-slate-500 p-8 border border-dashed border-slate-700 rounded-xl w-full",children:[v.jsx(tr,{size:48,className:"mx-auto mb-4 opacity-50"}),v.jsx("h2",{className:"text-xl font-medium text-slate-300",children:"Queue Empty"}),v.jsxs("p",{className:"mt-2 text-sm",children:['No tweets match the "',m,'" filter.']})]})}),W&&v.jsx("div",{className:"fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950 via-slate-900 to-transparent pb-8 z-10",children:v.jsxs("div",{className:"max-w-3xl mx-auto flex gap-3",children:[v.jsxs("button",{onClick:()=>T("Irrelevant"),disabled:u,className:"flex-[2] flex flex-col items-center justify-center py-4 rounded-xl bg-red-900 hover:bg-red-800 active:bg-red-950 text-white transition-colors shadow-[0_0_15px_rgba(153,27,27,0.2)] border border-red-800 disabled:opacity-60",children:[v.jsx(to,{className:"mb-1 opacity-90",size:24}),v.jsx("span",{className:"font-semibold tracking-wide",children:"Irrelevant"})]}),v.jsxs("button",{onClick:()=>T("Flagged"),disabled:u,className:"flex-1 flex flex-col items-center justify-center py-4 rounded-xl bg-amber-900/80 hover:bg-amber-800 active:bg-amber-950 text-amber-100 transition-colors border border-amber-700/50 disabled:opacity-60",children:[v.jsx(Ic,{className:"mb-1 opacity-80 text-amber-400",size:20}),v.jsx("span",{className:"text-sm font-medium tracking-wide",children:"Flag"})]}),v.jsxs("button",{onClick:()=>T("Relevant"),disabled:u,className:"flex-[2] flex flex-col items-center justify-center py-4 rounded-xl bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-800 text-white transition-colors shadow-[0_0_15px_rgba(4,120,87,0.3)] border border-emerald-600 disabled:opacity-60",children:[v.jsx(tr,{className:"mb-1 opacity-90",size:24}),v.jsx("span",{className:"font-semibold tracking-wide",children:"Relevant"})]})]})}),w&&v.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm",children:v.jsxs("div",{className:"bg-slate-800 rounded-xl max-w-lg w-full p-6 md:p-8 border border-slate-700 shadow-2xl max-h-[90vh] overflow-y-auto",children:[v.jsxs("h2",{className:"text-xl font-semibold text-slate-100 mb-4 flex items-center gap-2",children:[v.jsx(sg,{className:"text-slate-400"})," Annotation Guidelines"]}),v.jsxs("div",{className:"space-y-6 text-sm text-slate-300",children:[v.jsxs("div",{className:"bg-slate-900/50 border border-slate-700 rounded-lg p-4",children:[v.jsx("h3",{className:"font-bold text-slate-200 mb-2",children:"Target TB Symptoms (Multilingual)"}),v.jsxs("p",{className:"text-xs text-slate-400 mb-3",children:['To be marked "Relevant," the tweet must mention at least one primary symptom in a personal context.',v.jsx("span",{className:"text-emerald-400 block mt-1",children:"Note: Past-tense reports are highly relevant!"})]}),v.jsx("ul",{className:"list-none space-y-2 text-xs",children:[["Coughing (Chronic/Blood)","ukukhwehlela / ndikhohlela / ho hohlola / ukukhwehlela igazi"],["Night Sweats","ukujuluka ebusuku / ukubila ebusuku / ho fufuleloa bosiu"],["Chest Pain & Breathlessness","isifuba sibuhlungu / sefuba se bohloko / ngiphelelwa umoya"],["Weight & Appetite Loss","ngiyancipha / ho fokotsehela / angifuni ukudla / ha ke rate ho ja"],["Fever & Fatigue","umkhuhlane / ifiva / feberu / ukukhathala / ngiphelelwa amandla"]].map(([U,H])=>v.jsxs("li",{className:"flex flex-col border-b border-slate-700/50 pb-2 last:border-0",children:[v.jsx("span",{className:"font-semibold text-slate-200",children:U}),v.jsx("span",{className:"text-slate-400",children:H})]},U))})]}),v.jsxs("div",{className:"bg-emerald-900/20 border border-emerald-800/50 rounded-lg p-4",children:[v.jsxs("h3",{className:"font-bold text-emerald-400 mb-2 flex items-center gap-2",children:[v.jsx(tr,{size:16})," Relevant"]}),v.jsx("p",{className:"leading-relaxed",children:"First-person accounts expressing symptoms or direct personal concern. Includes colloquialisms and code-switching."})]}),v.jsxs("div",{className:"bg-red-900/20 border border-red-800/50 rounded-lg p-4",children:[v.jsxs("h3",{className:"font-bold text-red-400 mb-2 flex items-center gap-2",children:[v.jsx(to,{size:16})," Irrelevant"]}),v.jsx("p",{className:"leading-relaxed",children:"News, commentary, jokes, metaphors, or general illness without specific TB context."})]}),v.jsxs("div",{className:"bg-amber-900/20 border border-amber-800/50 rounded-lg p-4",children:[v.jsxs("h3",{className:"font-bold text-amber-400 mb-2 flex items-center gap-2",children:[v.jsx(Ic,{size:16})," Flag"]}),v.jsxs("p",{className:"leading-relaxed",children:["Use ",v.jsx("strong",{children:"only"}),' when you cannot understand the language/dialect well enough to make a safe clinical judgement. Pure noise is always "Irrelevant".']})]})]}),v.jsx("button",{onClick:()=>R(!1),className:"mt-8 w-full py-3 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg font-medium transition-colors border border-slate-600",children:"Resume Annotation"})]})})]}):v.jsx(Fc,{label:"Loading your role…"}):v.jsx(hN,{})}function hN(){const[t,e]=J.useState(null),n=async()=>{try{await cP(nr,sN)}catch(r){e(r.message)}};return v.jsx("div",{className:"min-h-screen bg-slate-900 flex items-center justify-center p-4",children:v.jsxs("div",{className:"bg-slate-800 border border-slate-700 rounded-2xl p-10 max-w-sm w-full text-center shadow-2xl",children:[v.jsx("div",{className:"w-14 h-14 rounded-full bg-emerald-700/20 border border-emerald-700/40 flex items-center justify-center mx-auto mb-6",children:v.jsx(tr,{size:28,className:"text-emerald-400"})}),v.jsx("h1",{className:"text-2xl font-semibold text-slate-100 mb-2",children:"TB Discourse Classifier"}),v.jsx("p",{className:"text-sm text-slate-400 mb-8",children:"Sign in with your institutional Google account to access your annotation queue."}),v.jsxs("button",{onClick:n,className:"w-full flex items-center justify-center gap-3 px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 rounded-lg font-medium transition-colors shadow-md",children:[v.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",children:[v.jsx("path",{fill:"#4285F4",d:"M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"}),v.jsx("path",{fill:"#34A853",d:"M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"}),v.jsx("path",{fill:"#FBBC05",d:"M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z"}),v.jsx("path",{fill:"#EA4335",d:"M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.962L3.964 6.294C4.672 4.167 6.656 3.58 9 3.58z"})]}),"Sign in with Google"]}),t&&v.jsx("p",{className:"mt-4 text-xs text-red-400",children:t})]})})}jc.createRoot(document.getElementById("root")).render(v.jsx(hT.StrictMode,{children:v.jsx(cN,{})}));
