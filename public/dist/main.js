/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t=function(t,e,i,r){return new(i||(i=Promise))((function(o,n){function s(t){try{l(r.next(t))}catch(t){n(t)}}function a(t){try{l(r.throw(t))}catch(t){n(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((r=r.apply(t,e||[])).next())}))};const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),o=new WeakMap;class n{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}}const s=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1]),t[0]);return new n(i,t,r)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,r))(e)})(t):t;var l;const c=window,d=c.trustedTypes,h=d?d.emptyScript:"",u=c.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},f=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:f};class m extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const r=this._$Ep(i,e);void 0!==r&&(this._$Ev.set(r,i),t.push(r))})),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const o=this[t];this[e]=r,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const r=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,r)=>{i?t.adoptedStyleSheets=r.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):r.forEach((i=>{const r=document.createElement("style"),o=e.litNonce;void 0!==o&&r.setAttribute("nonce",o),r.textContent=i.cssText,t.appendChild(r)}))})(r,this.constructor.elementStyles),r}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=v){var r;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==(null===(r=i.converter)||void 0===r?void 0:r.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;const r=this.constructor,o=r._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=r.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=o,this[o]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let r=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||f)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var g;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:m}),(null!==(l=c.reactiveElementVersions)&&void 0!==l?l:c.reactiveElementVersions=[]).push("1.4.2");const y=window,$=y.trustedTypes,b=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,_=`lit$${(Math.random()+"").slice(9)}$`,A="?"+_,x=`<${A}>`,w=document,E=(t="")=>w.createComment(t),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,C=/>/g,k=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),j=/'/g,U=/"/g,H=/^(?:script|style|textarea|title)$/i,T=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),N=T(1),M=(T(2),Symbol.for("lit-noChange")),D=Symbol.for("lit-nothing"),z=new WeakMap,L=w.createTreeWalker(w,129,null,!1),I=(t,e)=>{const i=t.length-1,r=[];let o,n=2===e?"<svg>":"",s=P;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(s.lastIndex=d,l=s.exec(i),null!==l);)d=s.lastIndex,s===P?"!--"===l[1]?s=O:void 0!==l[1]?s=C:void 0!==l[2]?(H.test(l[2])&&(o=RegExp("</"+l[2],"g")),s=k):void 0!==l[3]&&(s=k):s===k?">"===l[0]?(s=null!=o?o:P,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?k:'"'===l[3]?U:j):s===U||s===j?s=k:s===O||s===C?s=P:(s=k,o=void 0);const h=s===k&&t[e+1].startsWith("/>")?" ":"";n+=s===P?i+x:c>=0?(r.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+_+h):i+_+(-2===c?(r.push(void 0),e):h)}const a=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==b?b.createHTML(a):a,r]};class B{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let o=0,n=0;const s=t.length-1,a=this.parts,[l,c]=I(t,e);if(this.el=B.createElement(l,i),L.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=L.nextNode())&&a.length<s;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(_)){const i=c[n++];if(t.push(e),void 0!==i){const t=r.getAttribute(i.toLowerCase()+"$lit$").split(_),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?K:"?"===e[1]?J:"@"===e[1]?G:q})}else a.push({type:6,index:o})}for(const e of t)r.removeAttribute(e)}if(H.test(r.tagName)){const t=r.textContent.split(_),e=t.length-1;if(e>0){r.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],E()),L.nextNode(),a.push({type:2,index:++o});r.append(t[e],E())}}}else if(8===r.nodeType)if(r.data===A)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=r.data.indexOf(_,t+1));)a.push({type:7,index:o}),t+=_.length-1}o++}}static createElement(t,e){const i=w.createElement("template");return i.innerHTML=t,i}}function F(t,e,i=t,r){var o,n,s,a;if(e===M)return e;let l=void 0!==r?null===(o=i._$Co)||void 0===o?void 0:o[r]:i._$Cl;const c=S(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,r)),void 0!==r?(null!==(s=(a=i)._$Co)&&void 0!==s?s:a._$Co=[])[r]=l:i._$Cl=l),void 0!==l&&(e=F(t,l._$AS(t,e.values),l,r)),e}class V{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:r}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:w).importNode(i,!0);L.currentNode=o;let n=L.nextNode(),s=0,a=0,l=r[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new W(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new Q(n,this,t)),this.u.push(e),l=r[++a]}s!==(null==l?void 0:l.index)&&(n=L.nextNode(),s++)}return o}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class W{constructor(t,e,i,r){var o;this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cm=null===(o=null==r?void 0:r.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=F(this,t,e),S(t)?t===D||null==t||""===t?(this._$AH!==D&&this._$AR(),this._$AH=D):t!==this._$AH&&t!==M&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==D&&S(this._$AH)?this._$AA.nextSibling.data=t:this.T(w.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:r}=t,o="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=B.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.p(i);else{const t=new V(o,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=z.get(t.strings);return void 0===e&&z.set(t.strings,e=new B(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const o of t)r===e.length?e.push(i=new W(this.O(E()),this.O(E()),this,this.options)):i=e[r],i._$AI(o),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class q{constructor(t,e,i,r,o){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=D}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,r){const o=this.strings;let n=!1;if(void 0===o)t=F(this,t,e,0),n=!S(t)||t!==this._$AH&&t!==M,n&&(this._$AH=t);else{const r=t;let s,a;for(t=o[0],s=0;s<o.length-1;s++)a=F(this,r[i+s],e,s),a===M&&(a=this._$AH[s]),n||(n=!S(a)||a!==this._$AH[s]),a===D?t=D:t!==D&&(t+=(null!=a?a:"")+o[s+1]),this._$AH[s]=a}n&&!r&&this.j(t)}j(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===D?void 0:t}}const Z=$?$.emptyScript:"";class J extends q{constructor(){super(...arguments),this.type=4}j(t){t&&t!==D?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class G extends q{constructor(t,e,i,r,o){super(t,e,i,r,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=F(this,t,e,0))&&void 0!==i?i:D)===M)return;const r=this._$AH,o=t===D&&r!==D||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==D&&(r===D||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Q{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}}const X=y.litHtmlPolyfillSupport;var Y,tt;null==X||X(B,W),(null!==(g=y.litHtmlVersions)&&void 0!==g?g:y.litHtmlVersions=[]).push("2.4.0");class et extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var r,o;const n=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:e;let s=n._$litPart$;if(void 0===s){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=s=new W(e.insertBefore(E(),t),t,void 0,null!=i?i:{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return M}}et.finalized=!0,et._$litElement$=!0,null===(Y=globalThis.litElementHydrateSupport)||void 0===Y||Y.call(globalThis,{LitElement:et});const it=globalThis.litElementPolyfillSupport;null==it||it({LitElement:et}),(null!==(tt=globalThis.litElementVersions)&&void 0!==tt?tt:globalThis.litElementVersions=[]).push("3.2.2");const rt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:r}=e;return{kind:i,elements:r,finisher(e){customElements.define(t,e)}}})(t,e),ot=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function nt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):ot(t,e)}var st;null===(st=window.HTMLSlotElement)||void 0===st||st.prototype.assignedElements;let at=class extends et{render(){return N` <div class="chip card-category"><slot></slot></div> `}};at.styles=s`
    .chip {
      display: inline-block;
      color: #292929;
      transition: background 300ms ease 0s;
      box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
      padding: 1px 4px;
      margin: 0 2px;
      height: 12px;
      font-size: 10px;
      line-height: 12px;
      text-align: center;
      border-radius: 25px;
      background-color: var(--color-chip-bg);
    }

    .chip:hover {
      background-color: var(--color-chip-bg-hover);
    }
  `,at=function(t,e,i,r){var o,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,i,s):o(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s}([rt("medium-category-chip")],at);const lt=s`
  :root {
    font-family: "Roboto Slab", serif;
  }
`;var ct=function(t,e,i,r){var o,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,i,s):o(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s};const dt=s``;let ht=class extends et{render(){return N`
      <div class="chips">
        ${this.categories.map((t=>N`<medium-category-chip>${t}</medium-category-chip>`))}
      </div>
    `}};ht.styles=[lt,dt],ct([nt()],ht.prototype,"categories",void 0),ht=ct([rt("medium-category-chips")],ht);class ut{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const pt=(ft=class extends ut{constructor(t){var e;if(super(t),1!==t.type||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const r=t[i];return null==r?e:e+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.vt){this.vt=new Set;for(const t in e)this.vt.add(t);return this.render(e)}this.vt.forEach((t=>{null==e[t]&&(this.vt.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const t in e){const r=e[t];null!=r&&(this.vt.add(t),t.includes("-")?i.setProperty(t,r):i[t]=r)}return M}},(...t)=>({_$litDirective$:ft,values:t}));var ft,vt=function(t,e,i,r){var o,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,i,s):o(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s};const mt=s`
  :host {
    max-width: 100%;
  }

  .card {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
    width: 320px;
    border-radius: 12px;
    transform: scale(0.95, 0.95);
    overflow: hidden;
    box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
  }

  .card:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1, 1);
    z-index: 2;
  }

  .card-time {
    font-size: 12px;
    color: #ad7d52;
    vertical-align: middle;
    margin-left: 5px;
  }

  .card-clock-info {
    float: right;
  }

  .card-img {
    visibility: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 235px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  .card-info-hover {
    position: absolute;
    padding: 16px;
    width: 100%;
    opacity: 0;
    top: 0;
  }

  .card-img--hover {
    transition: 0.2s all ease-out;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    position: absolute;
    height: 235px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    top: 0;
  }

  .card-info {
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 16px 24px 16px 24px;
    height: 155px;
  }

  .card-category {
    font-family: "Raleway", sans-serif;
    font-size: 10px;
    letter-spacing: 1.2px;
    font-weight: 500;
    color: #868686;
  }

  .card-title a {
    margin-top: 5px;
    margin-bottom: 10px;
    font-family: "Roboto Slab", serif;
    text-decoration: none;
    color: black;
  }

  .card-footer {
    margin-top: auto;
    font-size: 13px;
    font-family: "Raleway", sans-serif;
    font-weight: 500;
    width: 100%;
  }

  .card-author {
    font-weight: 600;
    text-decoration: none;
    color: var(--color-action);
  }

  .card-date {
    float: right;
  }

  .card:hover .card-img--hover {
    height: 100%;
    opacity: 0.3;
  }

  .card:hover .card-info {
    background-color: transparent;
    position: relative;
  }

  .card:hover .card-info-hover {
    opacity: 1;
  }

  medium-category-chips {
    margin-top: auto;
  }

  @media only screen and (max-width: 580px) {
    .card {
      width: 100%;
      transform: scale(1, 1);
      border-radius: 0;
      margin-top: 10px;
    }
    .card-img,
    .card-info,
    .card-img--hover {
      border-radius: 0 !important;
    }
  }
`;let gt=class extends et{render(){return N`
      <article class="card card--1">
        <div class="card-img"></div>
        <a href="${this.article.link}" target="_blank" class="card_link">
          <div
            class="card-img--hover"
            style=${pt({backgroundImage:`url('${this.article.thumbnail}')`})}
          ></div>
        </a>
        <div class="card-info">
          <div class="card-title">
            <a target="_blank" href="${this.article.link}"
              >${this.article.title}</a
            >
          </div>

          <medium-category-chips
            .categories="${this.article.categories}"
          ></medium-category-chips>

          <div class="card-footer">
            <span>by</span>
            <a
              target="_blank"
              href="${this.article.userLink}"
              class="card-author"
              title="author"
              >${this.article.author}</a
            >
            <span class="card-date"
              >${new Date(this.article.pubDate).toLocaleDateString()}</span
            >
          </div>
        </div>
      </article>
    `}};gt.styles=[lt,mt],vt([nt()],gt.prototype,"article",void 0),gt=vt([rt("medium-article-card")],gt);var yt=function(t,e,i,r){var o,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,i,s):o(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s};const $t=s`
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;let bt=class extends et{constructor(){super(...arguments),this.articles=[]}render(){return N`
      <section class="cards">
        ${this.articles.map((t=>N`<medium-article-card
              .article="${t}"
            ></medium-article-card>`))}
      </section>
    `}};bt.styles=$t,yt([nt()],bt.prototype,"articles",void 0),bt=yt([rt("medium-articles")],bt);var _t=function(t,e,i,r){var o,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,i,s):o(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s};const At=s`
  .avatar {
    width: 50px;
    border-radius: 50%;
    box-shadow: 0px 13px 10px -7px rgb(0 0 0 / 10%);
  }
`;let xt=class extends et{render(){return N` <img class="avatar" src="${this.image}" /> `}};xt.styles=[lt,At],_t([nt()],xt.prototype,"image",void 0),xt=_t([rt("medium-avatar")],xt);var wt=function(t,e,i,r){var o,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,i,s):o(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s};const Et=s`
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
  }
  h1 {
    font-weight: 300;
  }

  medium-avatar {
    margin-left: 15px;
  }
`;let St=class extends et{render(){return N`
      <div class="header">
        <h1>${this.title}</h1>
        <medium-avatar image=${this.image}></medium-avatar>
      </div>
    `}};St.styles=[lt,Et],wt([nt()],St.prototype,"title",void 0),wt([nt()],St.prototype,"image",void 0),St=wt([rt("medium-header")],St);var Rt=function(t,e,i,r){var o,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,i,s):o(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s},Pt=function(t,e,i,r){return new(i||(i=Promise))((function(o,n){function s(t){try{l(r.next(t))}catch(t){n(t)}}function a(t){try{l(r.throw(t))}catch(t){n(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((r=r.apply(t,e||[])).next())}))};let Ot=class extends et{get hideHeader(){return null!==this.getAttribute("hideHeader")}get mediumUsername(){var t;return null!==(t=this.getAttribute("username"))&&void 0!==t?t:""}get maxArticles(){var t;const e=null!==(t=this.getAttribute("maxArticles"))&&void 0!==t?t:10;return isNaN(+e)?10:+e}constructor(){super(),this.innerHTML+='\n<style>\n  @import url("https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700");\n  @import url("https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i");\n  :root {\n    --color-action: #e31b6d;\n    --color-bg: #d2dbdd;\n    --color-chip-bg: #f2f2f2;\n    --color-chip-bg-hover: #e6e6e6;\n  }\n\n  #medium-portfolio-app {\n    font-family: "Roboto Slab", serif;\n    background-color: var(--color-bg);\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    padding: 20px 0px;\n  }\n  </style>\n'}firstUpdated(){return Pt(this,void 0,void 0,(function*(){yield this.loadRssFeed()}))}loadRssFeed(){return Pt(this,void 0,void 0,(function*(){this.rssFeed=yield function(e="mariusbongarts11",i){return t(this,void 0,void 0,(function*(){const{feed:r,items:o,status:n}=yield function(e){return t(this,void 0,void 0,(function*(){let t=`https://medium.com/feed/@${e}`;return(yield fetch(`https://api.rss2json.com/v1/api.json?rss_url=${t}`)).json()}))}(e),s=o.filter((t=>t.thumbnail)).slice(0,i).map((t=>Object.assign(Object.assign({},t),{userLink:r.link})));if(!r||"ok"!==n)throw new Error("Pass a valid medium username.");return{feed:r,articles:s}}))}(this.mediumUsername,this.maxArticles)}))}createRenderRoot(){return this}render(){return this.rssFeed?N`
          <div id="medium-portfolio-app">
            ${this.hideHeader?"":N`<medium-header
                  title="${this.rssFeed.feed.title}"
                  image="${this.rssFeed.feed.image}"
                ></medium-header>`}

            <medium-articles
              .articles="${this.rssFeed.articles}"
            ></medium-articles>
          </div>
        `:N``}};Rt([nt()],Ot.prototype,"rssFeed",void 0),Ot=Rt([rt("medium-portfolio")],Ot);var Ct=function(t,e,i,r){return new(i||(i=Promise))((function(o,n){function s(t){try{l(r.next(t))}catch(t){n(t)}}function a(t){try{l(r.throw(t))}catch(t){n(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((r=r.apply(t,e||[])).next())}))};var kt=function(t,e,i,r){var o,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,i,s):o(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s},jt=function(t,e,i,r){return new(i||(i=Promise))((function(o,n){function s(t){try{l(r.next(t))}catch(t){n(t)}}function a(t){try{l(r.throw(t))}catch(t){n(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((r=r.apply(t,e||[])).next())}))};let Ut=class extends et{get getArticleType(){var t;return null!==(t=this.getAttribute("type"))&&void 0!==t?t:"art"}constructor(){super(),this.innerHTML+='\n<style>\n  @import url("https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700");\n  @import url("https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i");\n  :root {\n    --color-action: #e31b6d;\n    --color-bg: #d2dbdd;\n    --color-chip-bg: #f2f2f2;\n    --color-chip-bg-hover: #e6e6e6;\n  }\n\n  #medium-portfolio-app {\n    font-family: "Roboto Slab", serif;\n    background-color: var(--color-bg);\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    padding: 20px 0;\n  }\n  </style>\n'}firstUpdated(){return jt(this,void 0,void 0,(function*(){yield this.loadData()}))}loadData(){return jt(this,void 0,void 0,(function*(){console.log("load data..."),this.drupalData=yield function(t="art"){return Ct(this,void 0,void 0,(function*(){const{feed:e,items:i,status:r}=yield function(t){return Ct(this,void 0,void 0,(function*(){let e=`https://albert.ddev.site/jsonapi/node/article?filter[field_article_type]=${t}`;return(yield fetch(e)).json()}))}(t);console.log(e),console.log(i),console.log(r);const o=i.filter((t=>t.thumbnail)).map((t=>Object.assign(Object.assign({},t),{userLink:e.link})));if(!e||"ok"!==r)throw new Error("An error occured.");return{feed:e,articles:o}}))}(this.getArticleType)}))}createRenderRoot(){return this}render(){return this.drupalData?N`
          <div id="box">
              TESTING
          </div>
        `:N``}};kt([nt()],Ut.prototype,"drupalData",void 0),Ut=kt([rt("nanosmid-box")],Ut)})();