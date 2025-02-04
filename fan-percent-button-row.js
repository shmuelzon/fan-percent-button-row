/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=window,e$2=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$3=new WeakMap;let o$3 = class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$3.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$3.set(s,t));}return t}toString(){return this.cssText}};const r$2=t=>new o$3("string"==typeof t?t:t+"",void 0,s$3),i$1=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$3(n,t,s$3)},S$1=(s,n)=>{e$2?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$1.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$2;const e$1=window,r$1=e$1.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$2=e$1.reactiveElementPolyfillSupport,n$2={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:n$2,reflect:!1,hasChanged:a$1};let d$1 = class d extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$2){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$2).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$2;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}};d$1.finalized=!0,d$1.elementProperties=new Map,d$1.elementStyles=[],d$1.shadowRootOptions={mode:"open"},null==o$2||o$2({ReactiveElement:d$1}),(null!==(s$2=e$1.reactiveElementVersions)&&void 0!==s$2?s$2:e$1.reactiveElementVersions=[]).push("1.6.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t;const i=window,s$1=i.trustedTypes,e=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$1="$lit$",n$1=`lit$${(Math.random()+"").slice(9)}$`,l$1="?"+n$1,h=`<${l$1}>`,r=document,d=()=>r.createComment(""),u=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1),P=(t,i)=>{const s=t.length-1,l=[];let r,d=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let e,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(r=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=r?r:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,e=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,r=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";d+=u===f?s+h:v>=0?(l.push(e),s.slice(0,v)+o$1+s.slice(v)+n$1+w):s+n$1+(-2===v?(l.push(void 0),i):w);}const c=d+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==e?e.createHTML(c):c,l]};class V{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,u=0;const c=t.length-1,v=this.parts,[a,f]=P(t,i);if(this.el=V.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$1)||i.startsWith(n$1)){const s=f[u++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$1).split(n$1),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?k:"?"===i[1]?I:"@"===i[1]?L:R});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$1),i=t.length-1;if(i>0){h.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],d()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],d());}}}else if(8===h.nodeType)if(h.data===l$1)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$1,t+1));)v.push({type:7,index:r}),t+=n$1.length-1;}r++;}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const d=u(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==d&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===d?r=void 0:(r=new d(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=N(t,r._$AS(t,i.values),r,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,d=e[0];for(;void 0!==d;){if(l===d.index){let i;2===d.type?i=new M(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new z(n,this,t)),this._$AV.push(i),d=e[++h];}l!==(null==d?void 0:d.index)&&(n=C.nextNode(),l++);}return o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class M{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),u(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&u(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=V.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new S(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new V(t)),i}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new M(this.k(d()),this.k(d()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class R{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=N(this,t,i,0),n=!u(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=N(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!u(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class k extends R{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const H=s$1?s$1.emptyScript:"";class I extends R{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,H):this.element.removeAttribute(this.name);}}class L extends R{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=N(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t);}}const j=i.litHtmlPolyfillSupport;null==j||j(V,M),(null!==(t=i.litHtmlVersions)&&void 0!==t?t:i.litHtmlVersions=[]).push("2.7.3");const B=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new M(i.insertBefore(d(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l,o;class s extends d$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=B(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n=globalThis.litElementPolyfillSupport;null==n||n({LitElement:s});(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.3.2");

window.customCards = window.customCards || [];
window.customCards.push({
  type: "fan-percent-button-row",
  name: "fan percent button row",
  description: "A plugin to display your fan controls in a button row.",
  preview: false
});
class CustomFanPercentRow extends s {
  static get styles() {
    return i$1`
      :host {
        line-height: inherit;
      }
      .percentage {
        margin-left: 2px;
        margin-right: 2px;
        background-color: #759aaa;
        border: 1px solid lightgrey;
        border-radius: 4px;
        font-size: 10px !important;
        color: inherit;
        text-align: center;
        float: right !important;
        padding: 1px;
        cursor: pointer;
      }
    `;
  }
  render() {
    this.hassChanged();
    return x`
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        <div class='horizontal justified layout'>
          <button
            class='percentage'
            style='${this._leftColor};min-width:${this._width};max-width:${this._width};height:${this._height};${this._hideLeft}'
            toggles name="${this._leftName}"
            @click=${this.setPercentage}
            .disabled=${this._leftState}>${this._leftText}</button>
          <button
            class='percentage'
            style='${this._midLeftColor};min-width:${this._width};max-width:${this._width};height:${this._height};${this._hideMidLeft}'
            toggles name="${this._midLeftName}"
            @click=${this.setPercentage}
            .disabled=${this._midLeftState}>${this._midLeftText}</button>
          <button
            class='percentage'
            style='${this._midRightColor};min-width:${this._width};max-width:${this._width};height:${this._height};${this._hideMidRight}'
            toggles name="${this._midRightName}"
            @click=${this.setPercentage}
            .disabled=${this._midRightState}>${this._midRightText}</button>
          <button
            class='percentage'
            style='${this._rightColor};min-width:${this._width};max-width:${this._width};height:${this._height};${this._hideRight}'
            toggles name="${this._rightName}"
            @click=${this.setPercentage}
            .disabled=${this._rightState}>${this._rightText}</button>
        </div>
      </hui-generic-entity-row>
    `;
  }
  static get properties() {
    return {
      hass: {
        type: Object,
        observer: 'hassChanged'
      },
      _config: Object,
      _stateObj: Object,
      _offSP: Number,
      _lowSP: Number,
      _medSP: Number,
      _highSP: Number,
      _width: String,
      _height: String,
      _leftColor: String,
      _midLeftColor: String,
      _midRightColor: String,
      _rightColor: String,
      _leftText: String,
      _midLeftText: String,
      _midRightText: String,
      _rightText: String,
      _leftName: String,
      _midLeftName: String,
      _midRightName: String,
      _rightName: String,
      _hideLeft: String,
      _hideMidLeft: String,
      _hideMidRight: String,
      _hideRight: String,
      _leftState: Boolean,
      _midLeftState: Boolean,
      _midRightState: Boolean,
      _rightState: Boolean
    };
  }
  setConfig(config) {
    this._config = config;
    this._config = {
      customTheme: false,
      customSetpoints: false,
      reverseButtons: false,
      isTwoSpeedFan: false,
      hideOff: false,
      sendStateWithSpeed: false,
      allowDisablingButtons: true,
      offPercentage: 0,
      lowPercentage: 33,
      medPercentage: 66,
      hiPercentage: 100,
      width: '30px',
      height: '30px',
      isOffColor: '#f44c09',
      isOnLowColor: '#43A047',
      isOnMedColor: '#43A047',
      isOnHiColor: '#43A047',
      buttonInactiveColor: '#759aaa',
      customOffText: 'OFF',
      customLowText: 'LOW',
      customMedText: 'MED',
      customHiText: 'HIGH',
      ...config
    };
  }
  hassChanged() {
    const config = this._config;
    const stateObj = this.hass.states[config.entity];
    const custTheme = config.customTheme;
    const custSetpoint = config.customSetpoints;
    const revButtons = config.reverseButtons;
    const twoSpdFan = config.isTwoSpeedFan;
    const hide_Off = config.hideOff;
    config.sendStateWithSpeed;
    const allowDisable = config.allowDisablingButtons;
    const buttonWidth = config.width;
    const buttonHeight = config.height;
    const OnLowClr = config.isOnLowColor;
    const OnMedClr = config.isOnMedColor;
    const OnHiClr = config.isOnHiColor;
    const OffClr = config.isOffColor;
    const buttonOffClr = config.buttonInactiveColor;
    const OffSetpoint = config.offPercentage;
    const LowSetpoint = config.lowPercentage;
    const MedSetpoint = config.medPercentage;
    const HiSetpoint = config.hiPercentage;
    const custOffTxt = config.customOffText;
    const custLowTxt = config.customLowText;
    const custMedTxt = config.customMedText;
    const custHiTxt = config.customHiText;
    let offSetpoint;
    let lowSetpoint;
    let medSetpoint;
    let hiSetpoint;
    let low;
    let med;
    let high;
    let offstate;
    if (custSetpoint) {
      offSetpoint = parseInt(OffSetpoint);
      medSetpoint = parseInt(MedSetpoint);
      if (parseInt(LowSetpoint) < 1) {
        lowSetpoint = 1;
      } else {
        lowSetpoint = parseInt(LowSetpoint);
      }
      if (parseInt(HiSetpoint) > 100) {
        hiSetpoint = 100;
      } else {
        hiSetpoint = parseInt(HiSetpoint);
      }
      if (stateObj && stateObj.attributes) {
        if (stateObj.state == 'on' && stateObj.attributes.percentage > offSetpoint && stateObj.attributes.percentage <= (medSetpoint + lowSetpoint) / 2) {
          low = 'on';
        } else if (stateObj.state == 'on' && stateObj.attributes.percentage > (medSetpoint + lowSetpoint) / 2 && stateObj.attributes.percentage <= (hiSetpoint + medSetpoint) / 2) {
          med = 'on';
        } else if (stateObj.state == 'on' && stateObj.attributes.percentage > (hiSetpoint + medSetpoint) / 2 && stateObj.attributes.percentage <= 100) {
          high = 'on';
        } else {
          offstate = 'on';
        }
      }
    } else {
      offSetpoint = 0; //parseInt(OffSetpoint);
      lowSetpoint = 33; //parseInt(LowSetpoint);
      medSetpoint = 66; //parseInt(MedSetpoint);
      hiSetpoint = 100; //parseInt(HiSetpoint);
      if (stateObj && stateObj.attributes) {
        if (stateObj.state == 'on' && stateObj.attributes.percentage >= 17 && stateObj.attributes.percentage <= 50) {
          low = 'on';
        } else if (stateObj.state == 'on' && stateObj.attributes.percentage >= 51 && stateObj.attributes.percentage <= 75) {
          med = 'on';
        } else if (stateObj.state == 'on' && stateObj.attributes.percentage >= 76 && stateObj.attributes.percentage <= 100) {
          high = 'on';
        } else {
          offstate = 'on';
        }
      }
    }
    let lowcolor;
    let medcolor;
    let hicolor;
    let offcolor;
    if (custTheme) {
      if (low == 'on') {
        lowcolor = 'background-color:' + OnLowClr;
      } else {
        lowcolor = 'background-color:' + buttonOffClr;
      }
      if (med == 'on') {
        medcolor = 'background-color:' + OnMedClr;
      } else {
        medcolor = 'background-color:' + buttonOffClr;
      }
      if (high == 'on') {
        hicolor = 'background-color:' + OnHiClr;
      } else {
        hicolor = 'background-color:' + buttonOffClr;
      }
      if (offstate == 'on') {
        offcolor = 'background-color:' + OffClr;
      } else {
        offcolor = 'background-color:' + buttonOffClr;
      }
    } else {
      if (low == 'on') {
        lowcolor = 'background-color: var(--switch-checked-color)';
      } else {
        lowcolor = 'background-color: var(--switch-unchecked-color)';
      }
      if (med == 'on') {
        medcolor = 'background-color: var(--switch-checked-color)';
      } else {
        medcolor = 'background-color: var(--switch-unchecked-color)';
      }
      if (high == 'on') {
        hicolor = 'background-color: var(--switch-checked-color)';
      } else {
        hicolor = 'background-color: var(--switch-unchecked-color)';
      }
      if (offstate == 'on') {
        offcolor = 'background-color: var(--switch-checked-color)';
      } else {
        offcolor = 'background-color: var(--switch-unchecked-color)';
      }
    }
    let offtext = custOffTxt;
    let lowtext = custLowTxt;
    let medtext = custMedTxt;
    let hitext = custHiTxt;
    let buttonwidth = buttonWidth;
    let buttonheight = buttonHeight;
    let offname = 'off';
    let lowname = 'low';
    let medname = 'medium';
    let hiname = 'high';
    let hideoff = 'display:block';
    let hidemedium = 'display:block';
    let nohide = 'display:block';
    if (twoSpdFan) {
      hidemedium = 'display:none';
    } else {
      hidemedium = 'display:block';
    }
    if (hide_Off) {
      hideoff = 'display:none';
    } else {
      hideoff = 'display:block';
    }
    if (revButtons) {
      this._stateObj = stateObj;
      this._leftState = offstate == 'on' && allowDisable;
      this._midLeftState = low === 'on' && allowDisable;
      this._midRightState = med === 'on' && allowDisable;
      this._rightState = high === 'on' && allowDisable;
      this._width = buttonwidth;
      this._height = buttonheight;
      this._leftColor = offcolor;
      this._midLeftColor = lowcolor;
      this._midRightColor = medcolor;
      this._rightColor = hicolor;
      this._offSP = offSetpoint;
      this._lowSP = lowSetpoint;
      this._medSP = medSetpoint;
      this._highSP = hiSetpoint;
      this._leftText = offtext;
      this._midLeftText = lowtext;
      this._midRightText = medtext;
      this._rightText = hitext;
      this._leftName = offname;
      this._midLeftName = lowname;
      this._midRightName = medname;
      this._rightName = hiname;
      this._hideLeft = hideoff;
      this._hideMidLeft = nohide;
      this._hideMidRight = hidemedium;
      this._hideRight = nohide;
    } else {
      this._stateObj = stateObj;
      this._leftState = high == 'on' && allowDisable;
      this._midLeftState = med === 'on' && allowDisable;
      this._midRightState = low === 'on' && allowDisable;
      this._rightState = offstate === 'on' && allowDisable;
      this._width = buttonwidth;
      this._height = buttonheight;
      this._leftColor = hicolor;
      this._midLeftColor = medcolor;
      this._midRightColor = lowcolor;
      this._rightColor = offcolor;
      this._offSP = offSetpoint;
      this._lowSP = lowSetpoint;
      this._medSP = medSetpoint;
      this._highSP = hiSetpoint;
      this._leftText = hitext;
      this._midLeftText = medtext;
      this._midRightText = lowtext;
      this._rightText = offtext;
      this._leftName = hiname;
      this._midLeftName = medname;
      this._midRightName = lowname;
      this._rightName = offname;
      this._hideRight = hideoff;
      this._hideMidRight = nohide;
      this._hideMidLeft = hidemedium;
      this._hideLeft = nohide;
    }
  }
  setPercentage(e) {
    e.stopPropagation();
    const level = e.currentTarget.getAttribute('name');
    const param = {
      entity_id: this._config.entity
    };
    if (level == 'off') {
      this.hass.callService('fan', 'turn_off', param);
    } else if (level == 'low') {
      if (this._config.sendStateWithSpeed) {
        this.hass.callService('fan', 'turn_on', {
          entity_id: this._config.entity,
          percentage: this._lowSP
        });
      } else {
        param.percentage = this._lowSP;
        this.hass.callService('fan', 'set_percentage', param);
      }
    } else if (level == 'medium') {
      if (this._config.sendStateWithSpeed) {
        this.hass.callService('fan', 'turn_on', {
          entity_id: this._config.entity,
          percentage: this._medSP
        });
      } else {
        param.percentage = this._medSP;
        this.hass.callService('fan', 'set_percentage', param);
      }
    } else if (level == 'high') {
      if (this._config.sendStateWithSpeed) {
        this.hass.callService('fan', 'turn_on', {
          entity_id: this._config.entity,
          percentage: this._highSP
        });
      } else {
        param.percentage = this._highSP;
        this.hass.callService('fan', 'set_percentage', param);
      }
    }
  }
}
customElements.define('fan-percent-button-row', CustomFanPercentRow);
