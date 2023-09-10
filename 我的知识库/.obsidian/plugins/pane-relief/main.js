var le=Object.defineProperty;var De=Object.getOwnPropertyDescriptor;var Fe=Object.getOwnPropertyNames;var Oe=Object.prototype.hasOwnProperty;var Ve=(n,r)=>{for(var e in r)le(n,e,{get:r[e],enumerable:!0})},ze=(n,r,e,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of Fe(r))!Oe.call(n,o)&&o!==e&&le(n,o,{get:()=>r[o],enumerable:!(t=De(r,o))||t.enumerable});return n};var $e=n=>ze(le({},"__esModule",{value:!0}),n);var Ge={};Ve(Ge,{default:()=>ce,leafName:()=>k,splitName:()=>se});module.exports=$e(Ge);var E=require("obsidian");var R=require("obsidian");var pe=Symbol.for("v1.to-use.peak-dev.org"),fe=Symbol.for("v1.factory.to-use.peak-dev.org"),V,B,w=function(){return Object.defineProperties(n(),{this:{get(){if(V)return V;throw new TypeError("No current context")}},me:{value:pe},factory:{value:fe}});function n(o){let i=new Map;i.prev=o;let a=Object.assign(o?s=>{let l=i.get(s);if(!l){for(let g=i.prev;g;g=g.prev)if(l=g.get(s)){l=Object.assign(Object.assign({},l),{s:l.s||1});break}l=l||{s:2,v:e},i.set(s,l)}let u,m,d;for(;;)switch(l.s){case 0:return V===a&&B&&B.push(s),l.v;case 1:if(u=l.d,!u||c(()=>u.k.every(g=>a(g)===u.c(g)))){l.s=0;break}l.v=u.f;case 2:l.s=4;try{r(i,s,0,c(m=l.v,s,d=[])),d.length&&(l.d={c:a,f:m,k:d});break}catch(g){l.s=3,l.v=g,l.d=null}case 3:throw l.v;case 4:throw new Error(`Factory ${String(l.v)} didn't resolve ${String(s)}`)}}:s=>w.this(s),{def(s,l){return r(i,s,2,l),a},set(s,l){return r(i,s,1,l),a},fork(s){let l=n(i);return s!=null?l(s):l}});return o?a.use=a:a;function c(s,l,u){let m=V,d=B;try{return V=a,B=u,s(l)}finally{V=m,B=d}}}function r(o,i,a,c){if(o.has(i)){let s=o.get(i);if(!s.s)throw new Error(`Already read: ${String(i)}`);s.s=a,s.v=c,s.d=null}else o.set(i,{s:a,v:c})}function e(o){if(typeof o[pe]=="function")return o[pe](o);if(t(o))return typeof o.prototype[fe]=="function"?o.prototype[fe]():new o;throw new ReferenceError(`No config for ${String(o)}`)}function t(o){return typeof o=="function"&&o.prototype!==void 0&&(Object.getPrototypeOf(o.prototype)!==Object.prototype||Object.getOwnPropertyNames(o.prototype).length>1||o.toString().startsWith("class"))}}();var ke,b=(ke=window.queueMicrotask)!=null?ke:(n=>r=>n.then(r))(Promise.resolve());w.def(R.Plugin,()=>{throw new Error("Plugin not created yet")});var v=class extends R.Component{constructor(){super(...arguments);this.use=w.service(this)}};w.service=function(n){return w(G).addChild(n),w.this};w.plugin=function(n){let r=w.fork().set(R.Plugin,n).set(n.constructor,n);return n.addChild(r.use(G)),r};var G=class extends R.Component{constructor(){super(...arguments);this.children=new Set([this])}onload(){this.loaded=!0}onunload(){this.loaded=!1,this.children.clear()}addChild(e){return this.children.has(e)||(this.children.add(e),this.loaded?b(()=>super.addChild(e)):super.addChild(e)),e}};function X(n,r){n._loaded&&n.removeChild(r)}function be(n,r){let e=new R.Component;e.onload=()=>{X(n,e),r()},n.addChild(e)}function f(n,r){let e=Object.keys(r).map(t=>qe(n,t,r[t]));return e.length===1?e[0]:function(){e.forEach(t=>t())}}function qe(n,r,e){let t=n[r],o=n.hasOwnProperty(r),i=e(t);return t&&Object.setPrototypeOf(i,t),Object.setPrototypeOf(a,i),n[r]=a,c;function a(...s){return i===t&&n[r]===a&&c(),i.apply(this,s)}function c(){n[r]===a&&(o?n[r]=t:delete n[r]),i!==t&&(i=t,Object.setPrototypeOf(a,t||Function))}}function Y(n,r,e){return t[n]=n,t;function t(...o){return(r[n]===n?r:e).apply(this,o)}}var J=require("obsidian");var Z=require("obsidian");function Q(n){let r=app.workspace;switch(n==null?void 0:n.getRoot()){case r.rootSplit:case r.floatingSplit:case r.leftSplit:case r.rightSplit:return!0;default:return!1}}function D(n,r){if(!n)return!1;if(typeof n=="function"&&(r=n,n=app.workspace),r(n))return!0;if(n instanceof Z.Workspace)return D(n.rootSplit,r)||D(n.floatingSplit,r)||D(n.leftSplit,r)||D(n.rightSplit,r);if(n instanceof Z.WorkspaceParent){for(let e of n.children)if(D(e,r))return!0}return!1}function ue(n){return n&&typeof n=="object"?JSON.parse(JSON.stringify(n)):n}var P=class{constructor(r,e,t,o){this.key=e;this.defaultValue=t;this.owner=o;this.store=r.use(U)}of(r){return new P(this.store,this.key,this.defaultValue,r)}get(r=this.owner){return this.store.get(this.requires(r),this.key,this.defaultValue)}set(r,e=this.owner){this.store.set(this.requires(e),this.key,r)}unset(r=this.owner){this.store.unset(this.requires(r),this.key)}requires(r){if(r&&(r instanceof J.Workspace||r instanceof J.WorkspaceItem))return r;throw new TypeError("Setting method requires a workspace or workspace item")}onSet(r,e){return this.owner?this.store.onSet(this.key,(t,o,i)=>{t===this.owner&&r.call(e,o,i)}):this.store.onSet(this.key,r,e)}onLoadWorkspace(r,e){return this.store.onLoadWorkspace(r,e)}offref(r){this.store.offref(r)}},U=class extends v{constructor(){super(...arguments);this.loading=!1}get(e,t,o){var i,a;return(a=(i=e==null?void 0:e[x])==null?void 0:i[t])!=null?a:o}set(e,t,o){let i=e[x]||(e[x]={}),a=i[t];i[t]=o,!this.loading&&a!==o&&(app.workspace.trigger(Le+t,e,o,a),app.workspace.requestSaveLayout())}unset(e,t){let o=e[x];o!=null&&o.hasOwnProperty(t)&&(delete o[t],this.loading||app.workspace.requestSaveLayout())}onSet(e,t,o){return app.workspace.on(Le+e,t,o)}onLoadItem(e,t){return!this.loading&&app.workspace.layoutReady&&b(()=>{D(o=>{try{e.call(t)}catch(i){console.error(i)}})}),app.workspace.on(F,e,t)}onSaveItem(e,t){return app.workspace.on(xe,e,t)}onLoadWorkspace(e,t){return!this.loading&&app.workspace.layoutReady&&b(()=>{try{e.call(t)}catch(o){console.error(o)}}),app.workspace.on(F+":workspace",e,t)}offref(e){app.workspace.offref(e)}onload(){let e=app.workspace;this.registerEvent(e.on(F+":start",()=>this.loading=!0)),this.registerEvent(e.on(F+":workspace",()=>this.loading=!1)),this.register(f(J.WorkspaceItem.prototype,{serialize:Se})),this.register(f(app.workspace,{getLayout:Se,setLayout(t){return Y(he,t,async function(i,...a){e.trigger(F+":start");try{return Ee(this,i),await t.call(this,i,...a)}finally{e.trigger(F+":workspace")}})},deserializeLayout(t){return Y(he,t,async function(i,...a){let c=await t.call(this,i,...a);return Ee(c,i),c})}}))}},de=2,he=Symbol.for(`v${de}.layout-storage-events.ophidian.peak-dev.org`),x="ophidian:layout-settings",F=`ophidian-layout-storage:v${de}:item-load`,xe=`ophidian-layout-storage:v${de}:item-save`,Le="ophidian-layout-storage:set:";function Se(n){return Y(he,n,function(){let e=n.call(this);return app.workspace.trigger(xe,this,e),this[x]&&(e[x]=ue(this[x])),e})}function Ee(n,r){if(!n)return;let e=r==null?void 0:r[x];e&&(n[x]=ue(e)),app.workspace.trigger(F,n,r)}var je=require("obsidian");var Ce=require("obsidian");var z=class extends Ce.Component{constructor(e,t){super();this.use=e;this.container=t;this.win=this.container.win}[w.factory](){return new _(this.constructor)}static onload(e){}static onunload(e){}},_=class extends v{constructor(e){super();this.factory=e;this.instances=new Map;this.watching=!1;this.layoutReadyCallbacks=[]}onload(){var e,t;this.registerEvent(app.workspace.on("layout-change",()=>{app.workspace.layoutReady&&this.layoutReadyCallbacks.length&&(this.layoutReadyCallbacks.forEach(b),this.layoutReadyCallbacks=[])})),(t=(e=this.factory).onload)==null||t.call(e,this.use)}onLeafChange(e,t){return this.onLayoutReady(()=>e.call(t,app.workspace.activeLeaf)),app.workspace.on("active-leaf-change",o=>{app.workspace.layoutReady&&e.call(t,o)})}onLayoutReady(e){app.workspace.layoutReady?b(e):this.layoutReadyCallbacks.push(e)}onunload(){var e,t;(t=(e=this.factory).onunload)==null||t.call(e,this.use)}watch(){if(!this._loaded)be(this,()=>this.watch());else if(!this.watching){let{workspace:e}=app,t=this;this.watching=!0,this.registerEvent(e.on("window-open",o=>{this.onLayoutReady(()=>this.forContainer(o))})),this.register(f(e,{clearLayout(o){return async function(){try{return await o.call(this)}finally{t.onLayoutReady(()=>t.forAll())}}}})),this.onLayoutReady(()=>this.forAll())}return this}forWindow(e=(o=>(o=window.activeWindow)!=null?o:window)(),t=!0){let i=Be(e);if(i)return this.forContainer(i,t)}forContainer(e,t=!0){e=e.getContainer();let o=this.instances.get(e);return!o&&t&&(o=new this.factory(this.use,e),o&&(this.instances.set(e,o),this.addChild(o),e.component.addChild(o),o.register(()=>{X(this,o),X(e.component,o),this.instances.delete(e)}))),o}forDom(e,t=!0){return this.forWindow(Ke(e),t)}forLeaf(e=app.workspace.activeLeaf,t=!0){if(Q(e))return this.forContainer(e.getContainer(),t)}forView(e,t=!0){return this.forLeaf(e.leaf,t)}forAll(e=!0){return We().map(t=>this.forContainer(t,e)).filter(t=>t)}};function We(){return[app.workspace.rootSplit].concat(app.workspace.floatingSplit.children)}function me(){return We().map(n=>n.win)}function L(){var n,r;return 1+((r=(n=app.workspace.floatingSplit)==null?void 0:n.children.length)!=null?r:0)}function Pe(n){for(let r of me())if(r.event&&n(r,r.event))return r.event}function Ke(n){return n.win||(n.ownerDocument||n).defaultView||window}function Be(n){if(n===window)return app.workspace.rootSplit;let{floatingSplit:r}=app.workspace;if(r){for(let e of r.children)if(n===e.win)return e}}var Te=require("obsidian"),ee=class extends v{onload(){let r=this,e=this.use(Te.Plugin);this.register(f(e,{loadCSS(t){return async function(){await t.call(this),r.triggerReparse(),this.register(()=>r.triggerReparse())}}}))}triggerReparse(){app.workspace.layoutReady&&app.workspace.trigger("parse-style-settings")}};function T(n,r,e){let t=n.classList.contains(r);return e=e!=null?e:!t,e!==t&&(e?n.classList.add(r):n.classList.remove(r)),e}var Me={};function He(n,r,e=[],t={}){typeof e=="string"&&(e=[e]),typeof e=="object"&&e.key&&(e=[e]);let o=e.map(function(a){if(typeof a=="object")return a;let c=a.split("+");return{modifiers:c,key:c.pop()||"+"}});Object.assign(t,{id:n,name:r,hotkeys:o});let i=Symbol("cmd:"+n);return Me[i]=t,i}function Ae(n,r=n.constructor.prototype){Object.getOwnPropertySymbols(r).forEach(e=>{let t=Me[e],o=r[e];t&&n.addCommand(Object.assign({},t,{checkCallback(i){let a=o.call(n);return i||typeof a!="function"?!!a:(a(),!0)}}))})}var Ue=require("obsidian");var Ie={};function p(n,r,e=[],t={}){typeof e=="string"&&(e=[e]),typeof e=="object"&&e.key&&(e=[e]);let o=e.map(function(a){if(typeof a=="object")return a;let c=a.split("+");return{modifiers:c,key:c.pop()||"+"}});Object.assign(t,{id:n,name:r,hotkeys:o});let i=Symbol("cmd:"+n);return Ie[i]=t,i}function te(n,r=n.constructor.prototype){Object.getOwnPropertySymbols(r).forEach(e=>{let t=Ie[e],o=r[e];t&&n.addCommand(Object.assign({},t,{checkCallback(i){let a=o.call(n);return i||typeof a!="function"?!!a:(a(),!0)}}))})}var I=require("obsidian");var y=require("obsidian");var S=require("obsidian");var oe="pane-relief:history-v1",ge="pane-relief:history-v1",M=(0,S.requireApiVersion)("0.16.3"),we=new WeakMap,$=class{constructor(r){this.setState(r)}static fromNative(r){return new this({...r,state:JSON.stringify(r.state),eState:JSON.stringify(r.eState)})}get asNative(){let r={...this.raw,state:this.viewState,eState:this.eState};if(!r.title||!r.icon){let e=ie(this);r.title||(r.title=e.title||""),r.icon||(r.icon=e.icon||"")}return r}get viewState(){return JSON.parse(this.raw.state||"{}")}setState(r){var e;this.raw=r,this.eState=JSON.parse(r.eState||"null"),this.path=(e=this.viewState.state)==null?void 0:e.file}onRename(r,e){if(this.path===e){let t=this.viewState;this.path=t.state.file=r.path,this.raw.state=JSON.stringify(t)}}go(r){let{viewState:e,path:t,eState:o}=this,i=t&&(app==null?void 0:app.vault.getAbstractFileByPath(t));t&&!i&&(new S.Notice("Missing file: "+t),e={type:"empty",state:{}},o=void 0),r.setViewState({...e,active:!0,popstate:!0},o)}isEmpty(){return JSON.parse(this.raw.state||"{}").type==="empty"}replaceState(r){var e;if(r.state!==this.raw.state){let t=JSON.parse(r.state||"{}");if(t.type==="empty")return!0;if(this.path&&this.path!==((e=t==null?void 0:t.state)==null?void 0:e.file))return!1;if(t.type==="media-view"){let o=JSON.stringify(this.viewState.state.info),i=JSON.stringify(t.state.info);if(o!==i)return!1}}return this.setState(r),!0}},h=class{constructor(r,{pos:e,stack:t}={pos:0,stack:[]}){this.leaf=r;this.hadTabs=M;r&&(r[oe]=this),this.leaf=r,this.pos=e,this.stack=t.map(o=>new $(o))}static current(){return this.forLeaf(app.workspace.activeLeaf)||new this}static forLeaf(r){if(r&&we.set(r.containerEl,r),r){let e=r[oe];if(e instanceof this)return e;if(e&&!e.hadTabs){let t=(e==null?void 0:e.serialize())||void 0;return new this(r,t).saveToNative()}return new this(r).loadFromNative()}}saveToNative(){var t;let r=(t=this.leaf)==null?void 0:t.history;if(!r||!M)return this;let e=this.stack.map(o=>o.asNative);return r.deserialize({backHistory:e.slice(this.pos+1).reverse(),forwardHistory:e.slice(0,this.pos)}),this}loadFromNative(){var t;let r=(t=this.leaf)==null?void 0:t.history;if(!r||!M)return this;let e=[].concat(r.forwardHistory.slice().filter(o=>o),{state:{},eState:{}},r.backHistory.slice().filter(o=>o).reverse());return this.stack=e.map(o=>$.fromNative(o)),this.pos=r.forwardHistory.length,this}cloneTo(r){return new h(r,this.serialize()).saveToNative()}onRename(r,e){for(let t of this.stack)t.onRename(r,e)}serialize(){return{pos:this.pos,stack:this.stack.map(r=>r.raw)}}get state(){var r;return((r=this.stack[this.pos])==null?void 0:r.raw)||null}get length(){return this.stack.length}back(){this.go(-1)}forward(){this.go(1)}lookAhead(){return this.stack.slice(0,this.pos).reverse()}lookBehind(){return this.stack.slice(this.pos+1)}announce(){var r;(r=app==null?void 0:app.workspace)==null||r.trigger("pane-relief:update-history",this.leaf,this)}goto(r){var e;if(!!this.leaf){if(this.leaf.pinned)return new S.Notice(`Pinned ${k}: unpin before going forward or back`),void 0;if(this.leaf.working)return new S.Notice("Pane is busy: please wait before navigating further"),void 0;r=this.pos=Math.max(0,Math.min(r,this.stack.length-1)),(e=this.stack[r])==null||e.go(this.leaf),this.announce()}}go(r,e){if(!this.leaf||!r)return;let t=Math.max(0,Math.min(this.pos-r,this.stack.length-1));e||t!==this.pos?this.leaf.history&&M?(this.pos=t,this.leaf.history.go(r)):this.goto(t):new S.Notice(`No more ${r<0?"back":"forward"} history for ${k}`)}replaceState(r,e,t){let o=this.stack[this.pos];o?o.replaceState(r)||this.pushState(r,e,t):this.stack[this.pos]=new $(r)}pushState(r,e,t){let o=this.stack[this.pos];if(o&&o.isEmpty())return this.replaceState(r,e,t);for(this.stack.splice(0,this.pos,new $(r)),this.pos=0;this.stack.length>20;)this.stack.pop();this.announce()}},re=class extends v{onload(){let r=this.use(U);if(this.registerEvent(r.onSaveItem((o,i)=>{o instanceof S.WorkspaceLeaf&&o[oe]&&(i[ge]=o[oe].serialize())})),this.registerEvent(r.onLoadItem((o,i)=>{o instanceof S.WorkspaceLeaf&&i[ge]&&new h(o,i[ge]).saveToNative()})),M){this.register(f(S.WorkspaceLeaf.prototype,{trigger(o){return function(a,...c){if(a==="history-change"){let s=h.forLeaf(this);s.loadFromNative(),app.workspace.trigger("pane-relief:update-history",this,s)}return o.call(this,a,...c)}}})),app.workspace.layoutReady&&app.workspace.iterateAllLeaves(o=>{h.forLeaf(o)});return}this.register(f(S.WorkspaceLeaf.prototype,{setViewState(o){return function(a,c){var s;return a.popstate&&((s=window.event)==null?void 0:s.type)==="popstate"?Promise.resolve():o.call(this,a,c)}}})),this.register(f(app.workspace,{setActiveLeaf(o){return function(a,...c){let s=f(this,{recordHistory(l){return function(u,m,...d){return l.call(this,u,!1,...d)}}});try{return o.call(this,a,...c)}finally{s()}}}}));function e(o){return!!Pe((i,a)=>{if(a.type==="mousedown"&&a.button===o)return a.preventDefault(),a.stopImmediatePropagation(),!0})}let t=window.history;this.register(()=>window.history=t),Object.defineProperty(window,"history",{enumerable:!0,configurable:!0,writable:!0,value:{get state(){return h.current().state},get length(){return h.current().length},back(){e(3)||this.go(-1)},forward(){e(4)||this.go(1)},go(o){h.current().go(o)},replaceState(o,i,a){h.current().replaceState(o,i,a)},pushState(o,i,a){h.current().pushState(o,i,a)},get scrollRestoration(){return t.scrollRestoration},set scrollRestoration(o){t.scrollRestoration=o}}})}};var Je={markdown:"document",image:"image-file",audio:"audio-file",video:"audio-file",pdf:"pdf-file",localgraph:"dot-network",outline:"bullet-list",backlink:"link",kanban:"blocks",excalidraw:"excalidraw-icon","media-view":"audio-file"},Ne={graph:["dot-network","Graph View"],"file-explorer":["folder","File Explorer"],starred:["star","Starred Files"],tag:["tag","Tags View"],"recent-files":["clock","Recent Files"],calendar:["calendar-with-checkmark","Calendar"],empty:["cross","No file"]},q=class extends z{constructor(){super(...arguments);this.historyIsOpen=!1}display(e=this.latestLeaf()){if(!this.historyIsOpen){if(!this._loaded){this.load();return}this.win.requestAnimationFrame(()=>{let t=e?h.forLeaf(e):new h;this.back.setHistory(t),this.forward.setHistory(t),e&&this.updateLeaf(e,t)})}}leaves(){var i;let e=new Set,t=a=>{e.add(a)};app.workspace.iterateLeaves(t,this.container);let o=(i=app.plugins.plugins["obsidian-hover-editor"])==null?void 0:i.activePopovers;if(o)for(let a of o)a.hoverEl.ownerDocument.defaultView===this.win&&(a.rootSplit?app.workspace.iterateLeaves(t,a.rootSplit):a.leaf&&t(a.leaf));return[...e.values()]}latestLeaf(){let e=app.workspace.activeLeaf;return e&&this.use(q).forLeaf(e)===this?e:this.leaves().reduce((t,o)=>!t||t.activeTime<o.activeTime?o:t,null)}onload(){let{document:e}=this.win;(0,y.requireApiVersion)("0.16.0")&&e.body.addClass("obsidian-themepocalypse"),this.win.addEventListener("pointerup",o,!0),this.win.addEventListener("pointerdown",o,!0),this.register(()=>{this.win.removeEventListener("pointerup",o,!0),this.win.removeEventListener("pointerdown",o,!0)});let t=this;function o(i){if(i.button!==3&&i.button!==4)return;i.preventDefault(),i.stopImmediatePropagation();let a=i.target.matchParent(".workspace-leaf, .workspace-tab-header");if(a&&i.type==="pointerup"){let c=we.get(a);if(c||app.workspace.iterateLeaves(s=>c=s.containerEl===a||s.tabHeaderEl===a?s:c,t.container),!c)return!1;i.button==3&&h.forLeaf(c).back(),i.button==4&&h.forLeaf(c).forward()}return!1}app.workspace.onLayoutReady(()=>{this.addChild(this.back=new H(this,"back",-1)),this.addChild(this.forward=new H(this,"forward",1)),this.display(),this.numberPanes(),this.registerEvent(app.workspace.on("layout-change",this.numberPanes,this))})}onunload(){this.unNumberPanes(),this.win.document.body.findAll(".workspace-leaf").forEach(e=>{let t=e.find(".view-header > .view-actions"),o=t==null?void 0:t.find('.view-action[class*=" app:go-forward"]'),i=t==null?void 0:t.find('.view-action[class*=" app:go-back"]');o&&j(o,this.forward.oldLabel),i&&j(o,this.back.oldLabel)})}unNumberPanes(e=".workspace-leaf"){this.win.document.body.findAll(e).forEach(t=>{t.style.removeProperty("--pane-relief-label"),t.toggleClass("has-pane-relief-label",!1),t.style.removeProperty("--pane-relief-forward-count"),t.style.removeProperty("--pane-relief-backward-count")})}updateLeaf(e,t=h.forLeaf(e)){e.containerEl.style.setProperty("--pane-relief-forward-count",'"'+(t.lookAhead().length||"")+'"'),e.containerEl.style.setProperty("--pane-relief-backward-count",'"'+(t.lookBehind().length||"")+'"');let o=e.containerEl.find(".view-header > .view-actions"),i=o==null?void 0:o.find('.view-action[class*=" app:go-forward"]'),a=o==null?void 0:o.find('.view-action[class*=" app:go-back"]');if(i&&this.forward.updateDisplay(t,i),a&&this.back.updateDisplay(t,a),M){let c=e.containerEl.find(".view-header > .view-header-nav-buttons"),s=c==null?void 0:c.find("button:last-child"),l=c==null?void 0:c.find("button:first-child");s&&this.forward.updateDisplay(t,s),l&&this.back.updateDisplay(t,l)}}numberPanes(){this.win.requestAnimationFrame(()=>{let e=new Map;this.win===window&&this.unNumberPanes(".workspace > .workspace-split:not(.mod-root) .workspace-tabs > .workspace-leaf");let t=0,o=null;this.leaves().forEach(i=>{i.containerEl.style.setProperty("--pane-relief-label",++t<9?""+t:""),i.containerEl.toggleClass("has-pane-relief-label",t<9),o=i,this.updateLeaf(i),i.parentSplit instanceof y.WorkspaceTabs&&e.set(i.parentSplit,1+(e.get(i.parentSplit)||0))}),t>8&&(o==null||o.containerEl.style.setProperty("--pane-relief-label","9"),o==null||o.containerEl.toggleClass("has-pane-relief-label",!0));for(let[i,a]of e.entries())i.containerEl.style.setProperty("--pane-relief-tab-count",""+a)})}onUpdateHistory(e,t){this.win.requestAnimationFrame(()=>{this.updateLeaf(e),t===this.forward.history&&this.forward.setHistory(t),t===this.back.history&&this.back.setHistory(t)})}},ye=class extends y.Component{constructor(e,t,o){super();this.owner=e;this.kind=t;this.dir=o;this.history=null}onload(){this.containerEl=this.owner.win.document.body.find(`.titlebar .titlebar-button-container.mod-left .titlebar-button.mod-${this.kind}`)||this.owner.win.createDiv(),this.count=this.containerEl.createSpan({prepend:this.kind==="back",cls:"history-counter"}),this.history=null,this.oldLabel=this.containerEl.getAttribute("aria-label")||i18next.t(this.dir<0?"commands.navigate-back":"commands.navigate-forward"),this.registerDomEvent(this.containerEl,"contextmenu",this.openMenu.bind(this));let e=t=>{var o;t.preventDefault(),t.stopImmediatePropagation(),(o=this.history)==null||o[this.kind]()};this.register(()=>this.containerEl.removeEventListener("click",e,!0)),this.containerEl.addEventListener("click",e,!0),this.register(_e(this.owner.win.document.body,"contextmenu",`.view-header > .view-actions > .view-action[class*="app:go-${this.kind}"],
                 .view-header > .view-header-nav-buttons > button:${this.dir<0?"first":"last"}-child`,(t,o)=>{let i=o.matchParent(".workspace-leaf"),a=this.owner.leaves().filter(c=>c.containerEl===i).pop();!a||(t.preventDefault(),t.stopImmediatePropagation(),this.openMenu(t,h.forLeaf(a)))},{capture:!0}))}onunload(){j(this.containerEl,this.oldLabel),this.count.detach(),this.containerEl.toggleClass("mod-active",!1)}setCount(e){this.count.textContent=""+(e||"")}setHistory(e=h.current()){this.updateDisplay(this.history=e)}updateDisplay(e,t=this.containerEl){let o=e[this.dir<0?"lookBehind":"lookAhead"]();t===this.containerEl&&this.setCount(o.length),j(t,o.length?this.oldLabel+`
`+ie(o[0]).title:`No ${this.kind} history`),t.toggleClass("mod-active",o.length>0)}openMenu(e,t=this.history){var a;let o=t[this.dir<0?"lookBehind":"lookAhead"]();if(!o.length)return;let i=new y.Menu;(a=i.setUseNativeMenu)==null||a.call(i,!1),i.dom.addClass("pane-relief-history-menu"),i.dom.on("mousedown",".menu-item",c=>{c.stopPropagation()},!0),o.map(ie).forEach((c,s)=>this.menuItem(c,s,i,t)),i.showAtPosition({x:e.clientX,y:e.clientY+20}),i.register(f(app.workspace,{setActiveLeaf(c){return function(s,l,u){if(!s.containerEl.matchParent(".hover-editor"))return c.call(this,s,l,u)}}})),this.owner.historyIsOpen=!0,i.onHide(()=>{this.owner.historyIsOpen=!1,this.owner.display()})}menuItem(e,t,o,i){let{dir:a,kind:c}=this;o.addItem(u=>{s(u),e.file&&l(u.dom)});return;function s(u,m=""){u.setIcon(e.icon).setTitle(m+e.title).onClick(d=>{if(y.Keymap.isModEvent(d))if(M&&i.leaf){app.workspace.duplicateLeaf(i.leaf,y.Keymap.isModEvent(d)).then(g=>{h.forLeaf(g).go((t+1)*a,!0)});return}else i=i.cloneTo(app.workspace.getLeaf(y.Keymap.isModEvent(d)));i.go((t+1)*a,!0)})}function l(u){u.addEventListener("mouseover",m=>{app.workspace.trigger("hover-link",{event:m,source:ye.hoverSource,hoverParent:o.dom,targetEl:u,linktext:e.file.path})}),u.setAttr("draggable","true"),u.addEventListener("dragstart",m=>{let d=app.dragManager,g=d.dragFile(m,e.file);d.onDragStart(m,g)}),u.addEventListener("dragend",m=>o.hide()),u.addEventListener("contextmenu",m=>{let d=new y.Menu;d.addItem(g=>s(g,`Go ${c} to `)).addSeparator(),app.workspace.trigger("file-menu",d,e.file,"link-context-menu"),d.showAtPosition({x:m.clientX,y:m.clientY}),m.stopPropagation()},!0)}}},H=ye;H.hoverSource="pane-relief:history-menu";function ie(n){var c,s,l;let{viewState:{type:r,state:e},eState:t,path:o}=n,i=o&&app.vault.getAbstractFileByPath(o),a={icon:"",title:"",file:i,type:r,state:e,eState:t};return Ne[r]?[a.icon,a.title]=Ne[r]:o&&!i?[a.icon,a.title]=["trash","Missing file "+o]:i instanceof y.TFile&&(a.icon=(c=Je[r])!=null?c:"document",r==="markdown"&&e.mode==="preview"&&(a.icon="lines-of-text"),a.title=i?i.basename+(i.extension!=="md"?"."+i.extension:""):"No file",r==="media-view"&&!i&&(a.title=(l=(s=e.info)==null?void 0:s.filename)!=null?l:a.title)),app.workspace.trigger("pane-relief:format-history-item",a),a}function _e(n,r,e,t,o){return n.on(r,e,t,o),()=>n.off(r,e,t,o)}function j(n,r){r?n.setAttribute("aria-label",r||void 0):n.removeAttribute("aria-label")}var ne=class extends v{constructor(){super(...arguments);this.setting=new P(this,"pane-relief:focus-lock").of(app.workspace);this.plugin=this.use(I.Plugin);this.statusEl=this.plugin.addStatusBarItem();this.iconEl=this.statusEl.createSpan("pane-relief-focus-lock icon",e=>{e.setAttribute("aria-label-position","top")});this.isLocked=null;this.installed=!1}onload(){this.registerDomEvent(this.iconEl,"click",()=>this.toggle()),te(this.plugin,{[p("focus-lock","Toggle focus lock (Enable/disable sidebar focusing)")]:()=>()=>this.toggle()}),this.registerEvent(this.setting.onLoadWorkspace(this.onChange,this))}install(){this.installed=!0;let e=this;this.register(f(app.workspace,{setActiveLeaf(t){return function(o,i,a){if(!e.isLocked||A(o))return t.call(this,o,i,a);if(!this.activeLeaf||!Q(this.activeLeaf))return t.call(this,this.getLeaf(),i,a)}},revealLeaf(t){return function(o){let i=o.getContainer();if(!e.isLocked||A(o)||!i)return t.call(this,o);let a=f(i,{focus(){return function(){}}});try{return t.call(this,o)}finally{a()}}}})),this.register(f(I.WorkspaceLeaf.prototype,{canNavigate(t){return function(){return t.call(this)&&(!e.isLocked||A(this))}}})),this.register(f(app.internalPlugins.plugins["file-explorer"].instance,{init(t){return function(...i){try{return t.apply(this,i)}finally{e.blockFileExplorerReveal()}}}})),this.blockFileExplorerReveal()}blockFileExplorerReveal(){let e=this,t=app.commands.commands["file-explorer:reveal-active-file"];t&&this.register(f(t,{checkCallback(o){return function(...i){var a;if(e.isLocked){for(let c of app.workspace.getLeavesOfType("file-explorer"))if(!A(c)){let s=(a=c.view.dom)==null?void 0:a.navFileContainerEl;s&&b(f(s,{focus(l){return function(){}}}))}}return o==null?void 0:o.apply(this,i)}}}))}toggle(){this.setting.set(!this.setting.get()),this.onChange()}onChange(){let e=this.setting.get();e&&!this.installed&&this.install(),this.isLocked!==e&&(this.isLocked!=null&&document.body.appendChild(new I.Notice(e?"Sidebar focusing disabled":"Sidebar focusing enabled").noticeEl.parentElement),this.isLocked=e,(0,I.setIcon)(this.iconEl,e?"lucide-lock":"lucide-unlock",13),j(this.iconEl,e?"Sidebar focus disabled: click to enable":"Sidebar focus enabled: click to disable"),e&&!A(app.workspace.activeLeaf)&&app.workspace.layoutReady&&app.workspace.setActiveLeaf(app.workspace.getUnpinnedLeaf(),!1,!0))}};function A(n){let r=n==null?void 0:n.getRoot();return!!(r&&r!==app.workspace.leftSplit&&r!==app.workspace.rightSplit)}var O=require("obsidian");var ae=class extends v{constructor(){super(...arguments);this.changing=!1;this.fixSlidingPanes=(0,O.debounce)(()=>{let e=app.workspace.activeLeaf.parentSplit;(0,O.requireApiVersion)("0.16.2")&&e instanceof O.WorkspaceTabs&&e.isStacked?e.containerEl.win.requestAnimationFrame(()=>{let t=f(e.tabsContainerEl,{scrollTo(o){return function(i,a){return typeof i=="object"?(delete i.behavior,o.call(this,i)):o.call(this,i,a)}}});try{e.scrollIntoView(e.currentTab)}finally{t(),this.changing=!1}}):(app.workspace.requestActiveLeafEvents(),this.changing=!1)},1,!0)}onload(){this.registerEvent(app.workspace.on("layout-change",()=>{for(let t of this.parents())this.refresh(t)}));let e=this;this.register(f(app.workspace,{setActiveLeaf(t){return function(i,a,c){let s=e.parentForLeaf(i),l=e.parentForLeaf(app.workspace.activeLeaf);return s&&l&&s!==l&&l.matchParent(".hover-popover.is-active.snap-to-viewport")&&s.ownerDocument===l.ownerDocument&&!s.matchParent(".hover-popover")&&app.commands.executeCommandById("obsidian-hover-editor:restore-active-popover"),A(i)&&s&&e.refresh(s,s.hasClass("should-maximize")?i.containerEl:null),t.call(this,i,a,c)}}})),this.register(f(O.WorkspaceTabs.prototype,{onContainerScroll(t){return function(){if(!e.changing&&this.containerEl.isShown())return t.call(this)}}})),app.workspace.onLayoutReady(()=>{let t=app.workspace.rightSidebarToggleButtonEl.cloneNode(!0);t.id="pr-maximize-sb-toggle",t.addEventListener("click",()=>app.workspace.rightSplit.toggle()),t.ariaLabel=i18next.t(app.workspace.rightSplit.collapsed?"interface.sidebar-expand":"interface.sidebar-collapse"),app.workspace.containerEl.parentElement.appendChild(t),this.register(()=>t.detach()),this.register(f(app.workspace.rightSplit.constructor.prototype,{expand(o){return function(){return t.ariaLabel=i18next.t("interface.sidebar-collapse"),o.call(this)}},collapse(o){return function(){return t.ariaLabel=i18next.t("interface.sidebar-expand"),o.call(this)}}}))})}onunload(){for(let e of this.parents())this.refresh(e,null)}toggleMaximize(e=app.workspace.activeLeaf){(!e||!A(e))&&(e=app.workspace.getMostRecentLeaf(app.workspace.rootSplit));let t=this.parentForLeaf(e);if(!t)return;let o=t.matchParent(".hover-popover");if(o&&app.plugins.plugins["obsidian-hover-editor"]&&o.findAll(".workspace-leaf").length===1){app.commands.executeCommandById("obsidian-hover-editor:"+(o.hasClass("snap-to-viewport")?"restore-active-popover":"snap-active-popover-to-viewport"));return}t&&this.refresh(t,T(t,"should-maximize")?e.containerEl:null)}lastMaximized(e){return e.find(".workspace-leaf.is-maximized")||app.workspace.getMostRecentLeaf().containerEl}refresh(e,t=e.hasClass("should-maximize")?this.lastMaximized(e):null){this.changing=!0;let o=e.hasClass("has-maximized");if(e.findAllSelf(".workspace-split, .workspace-tabs").forEach(i=>{(i===e||this.parentFor(i)===e)&&T(i,"has-maximized",t?i.contains(t):!1)}),e.findAll(".workspace-leaf").forEach(i=>{this.parentFor(i)===e&&T(i,"is-maximized",i===t)}),(!t||!e.contains(t))&&(T(e,"should-maximize",!1),o))return this.fixSlidingPanes();this.changing=!1}parents(){var o,i,a;let e=[app.workspace.rootSplit.containerEl];e.concat(((i=(o=app.workspace.floatingSplit)==null?void 0:o.children)!=null?i:[]).map(c=>c.containerEl));let t=(a=app.plugins.plugins["obsidian-hover-editor"])==null?void 0:a.activePopovers;if(t)for(let c of t)c.rootSplit&&e.push(c.rootSplit.containerEl);return e.map(c=>this.parentFor(c))}parentForLeaf(e){return this.parentFor(e==null?void 0:e.containerEl)}parentFor(e){return e==null?void 0:e.matchParent(".workspace, .hover-popover > .popover-content > .workspace-split")}};var N=require("obsidian"),K=class extends z{constructor(){super(...arguments);this.manager=this.use(K)}[w.factory](){return new ve(this.constructor)}onload(){this.onSet()}onunload(){this.update(!1)}get options(){return this.manager.options.get(this.container)}set options(e){this.manager.options.set(e,this.container)}onSet(e=this.options){this.update(e.active)}update(e){T(this.container.containerEl,"is-sliding",e);let t=this.container.containerEl.matchParent(".workspace");t?T(t,"is-sliding",e):this.register(this.container.containerEl.onNodeInserted(()=>this.update(this.options.active),!0))}activate(e){var o;let{options:t}=this;!this.win.document.hasFocus()&&me().some(i=>i.document.hasFocus())&&this.container.focus(),t.active&&((o=e.containerEl.matchParent(".workspace-tabs"))!=null?o:e.containerEl).scrollIntoView({behavior:"smooth"}),this.manager.options.defaultValue=t}toggleSliding(){let{options:e}=this;this.options={...e,active:!e.active}}},ve=class extends _{constructor(){super(...arguments);this.options=new P(this,"pane-relief:sliding-panes",{active:!1});this.overlay=app.workspace.containerEl.parentElement.createDiv("prsp-tb-overlay");this.requestOverlayUpdate=(0,N.debounce)(()=>{var e;if(!app.workspace.leftSplit.collapsed){let t=(e=app.workspace.leftSplit.containerEl.find(".workspace-tabs.mod-top-left-space .workspace-tab-header-spacer"))==null?void 0:e.getBoundingClientRect();t&&this.overlay.style.setProperty("--pr-overlay-width",`${t.width}px`),t&&this.overlay.style.setProperty("--pr-overlay-left",`${t.left}px`)}},100,!0)}onunload(){super.onunload(),this.overlay.detach()}onload(){super.onload(),window.CodeMirror.getMode({},"XXX");let e=this;Ae(this.use(N.Plugin),{[He("toggle-sliding","Toggle sliding panes (for current window)")](){return()=>e.forLeaf(app.workspace.activeLeaf).toggleSliding()}}),this.registerEvent(this.options.onSet(this.onChange,this)),this.registerEvent(this.options.store.onLoadItem(this.onChange,this)),this.registerEvent(this.onLeafChange(t=>this.forLeaf(t).activate(t))),app.workspace.onLayoutReady(()=>{this.registerEvent(app.workspace.on("layout-change",this.requestOverlayUpdate)),this.registerEvent(app.workspace.on("resize",this.requestOverlayUpdate));let t=this;this.register(f(app.workspace.leftSplit.constructor.prototype,{expand(o){return function(){return t.requestOverlayUpdate(),o.call(this)}}})),this.requestOverlayUpdate()})}onChange(e){(e instanceof N.WorkspaceRoot||e instanceof N.WorkspaceWindow)&&this.forContainer(e).onSet(this.options.get(e))}};var k=(0,E.requireApiVersion)("0.16")?"tab":"pane",se=(0,E.requireApiVersion)("0.16")?"group":"split";function C(n){return`Jump to ${n} ${k} in window`}function W(n){return`Place as ${n} ${k} in ${se}`}var ce=class extends E.Plugin{constructor(){super(...arguments);this.use=w.plugin(this);this.nav=this.use(q).watch();this.max=this.use(ae);this.sliding=this.use(K).watch()}onload(){this.use(re).load(),this.register(f(E.Workspace.prototype,{getFocusedContainer(e){return function(){let o=e.call(this);return o===this.rootSplit&&window!==activeWindow?null:o}}})),this.app.workspace.registerHoverLinkSource(H.hoverSource,{display:"History dropdowns",defaultMod:!0}),this.app.workspace.onLayoutReady(()=>{this.registerEvent(this.app.vault.on("rename",(e,t)=>{e instanceof E.TFile&&this.app.workspace.iterateAllLeaves(o=>h.forLeaf(o).onRename(e,t))})),this.registerEvent(app.workspace.on("active-leaf-change",e=>this.nav.forLeaf(e).display(e))),this.registerEvent(app.workspace.on("pane-relief:update-history",(e,t)=>this.nav.forLeaf(e).onUpdateHistory(e,t)))}),te(this),(0,E.requireApiVersion)("0.15.6")&&this.use(ne),this.use(ee)}[p("swap-prev",`Swap ${k} with previous in ${se}`,"Mod+Shift+PageUp")](){return this.leafPlacer(-1)}[p("swap-next",`Swap ${k} with next in ${se}`,"Mod+Shift+PageDown")](){return this.leafPlacer(1)}[p("go-prev",`Cycle to previous ${k} in this window`,"Mod+PageUp")](){return()=>this.gotoNthLeaf(-1,!0)}[p("go-next",`Cycle to next ${k} in this window`,"Mod+PageDown")](){return()=>this.gotoNthLeaf(1,!0)}[p("win-prev","Cycle to previous window",[])](){if(L()>1)return()=>this.gotoNthWindow(-1,!0)}[p("win-next","Cycle to next window",[])](){if(L()>1)return()=>this.gotoNthWindow(1,!0)}[p("go-1st",C("1st"),"Alt+1")](){return()=>this.gotoNthLeaf(0)}[p("go-2nd",C("2nd"),"Alt+2")](){return()=>this.gotoNthLeaf(1)}[p("go-3rd",C("3rd"),"Alt+3")](){return()=>this.gotoNthLeaf(2)}[p("go-4th",C("4th"),"Alt+4")](){return()=>this.gotoNthLeaf(3)}[p("go-5th",C("5th"),"Alt+5")](){return()=>this.gotoNthLeaf(4)}[p("go-6th",C("6th"),"Alt+6")](){return()=>this.gotoNthLeaf(5)}[p("go-7th",C("7th"),"Alt+7")](){return()=>this.gotoNthLeaf(6)}[p("go-8th",C("8th"),"Alt+8")](){return()=>this.gotoNthLeaf(7)}[p("go-last",C("last"),"Alt+9")](){return()=>this.gotoNthLeaf(99999999)}[p("win-1st","Switch to 1st window",[])](){if(L()>1)return()=>this.gotoNthWindow(0)}[p("win-2nd","Switch to 2nd window",[])](){if(L()>1)return()=>this.gotoNthWindow(1)}[p("win-3rd","Switch to 3rd window",[])](){if(L()>2)return()=>this.gotoNthWindow(2)}[p("win-4th","Switch to 4th window",[])](){if(L()>3)return()=>this.gotoNthWindow(3)}[p("win-5th","Switch to 5th window",[])](){if(L()>4)return()=>this.gotoNthWindow(4)}[p("win-6th","Switch to 6th window",[])](){if(L()>5)return()=>this.gotoNthWindow(5)}[p("win-7th","Switch to 7th window",[])](){if(L()>6)return()=>this.gotoNthWindow(6)}[p("win-8th","Switch to 8th window",[])](){if(L()>7)return()=>this.gotoNthWindow(7)}[p("win-last","Switch to last window",[])](){if(L()>1)return()=>this.gotoNthWindow(99999999)}[p("put-1st",W("1st"),"Mod+Alt+1")](){return()=>this.placeLeaf(0,!1)}[p("put-2nd",W("2nd"),"Mod+Alt+2")](){return()=>this.placeLeaf(1,!1)}[p("put-3rd",W("3rd"),"Mod+Alt+3")](){return()=>this.placeLeaf(2,!1)}[p("put-4th",W("4th"),"Mod+Alt+4")](){return()=>this.placeLeaf(3,!1)}[p("put-5th",W("5th"),"Mod+Alt+5")](){return()=>this.placeLeaf(4,!1)}[p("put-6th",W("6th"),"Mod+Alt+6")](){return()=>this.placeLeaf(5,!1)}[p("put-7th",W("7th"),"Mod+Alt+7")](){return()=>this.placeLeaf(6,!1)}[p("put-8th",W("8th"),"Mod+Alt+8")](){return()=>this.placeLeaf(7,!1)}[p("put-last",W("last"),"Mod+Alt+9")](){return()=>this.placeLeaf(99999999,!1)}[p("maximize",`Maximize active ${k} (Toggle)`,[])](){if(this.max.parentForLeaf(app.workspace.activeLeaf))return()=>this.max.toggleMaximize()}[p("ordered-close",`Close ${k} and go to adjacent ${k}`)](){return()=>{let e=app.workspace.activeLeaf,t=this.nav.forLeaf(e).leaves(),o=t.indexOf(e),i;o>-1&&(t.length>o+1?i=t[o+1]:o>0&&(i=t[o-1])),i&&app.workspace.setActiveLeaf(i,!1,!0),e.detach()}}[p("open-new-window","Open new window")](){return()=>app.workspace.openPopoutLeaf()}onunload(){this.app.workspace.unregisterHoverLinkSource(H.hoverSource)}gotoNthLeaf(e,t){let o=app.workspace.activeLeaf,i=o.getRoot();(i===app.workspace.leftSplit||i===app.workspace.rightSplit)&&(o=app.workspace.getMostRecentLeaf(app.workspace.rootSplit));let a=this.nav.forLeaf(o);o=Re(a.leaves(),o,e,t),!o||this.app.workspace.setActiveLeaf(o,!0,!0)}gotoNthWindow(e,t){var a,c,s,l,u;let o=Re(this.nav.forAll(),this.nav.forLeaf(app.workspace.activeLeaf),e,t),i=o==null?void 0:o.latestLeaf();i&&app.workspace.setActiveLeaf(i,!0,!0),(u=(l=(s=(c=(a=o==null?void 0:o.win).require)==null?void 0:c.call(a,"electron"))==null?void 0:s.remote)==null?void 0:l.getCurrentWindow())==null||u.focus()}placeLeaf(e,t=!0){let o=this.leafPlacer(e,t);o&&o()}leafPlacer(e,t=!0){let o=this.app.workspace.activeLeaf;if(!o)return!1;let i=o.parentSplit,a=i.children,c=a.indexOf(o);if(c==-1)return!1;if(a.length===1){let s=o.containerEl.matchParent(".hover-popover");if(s&&t&&Math.abs(e)===1){let l=s;for(;l&&(l===s||!l.matches(".hover-popover"));)l=e<0?l.previousElementSibling:l.nextElementSibling;if(l)return()=>{e<0?l.parentElement.insertBefore(s,l):l.parentElement.insertBefore(l,s),app.workspace.onLayoutChange()}}}if(t){if(e+=c,e<0||e>=a.length)return!1}else e>=a.length&&(e=a.length-1),e<0&&(e=0);return c==e?!1:()=>{let s=a[e];a.splice(c,1),a.splice(e,0,o),i.selectTab?i.selectTab(o):(s.containerEl.insertAdjacentElement(c>e?"beforebegin":"afterend",o.containerEl),i.recomputeChildrenDimensions(),o.onResize(),this.app.workspace.onLayoutChange(),this.app.workspace.activeLeaf=null,this.app.workspace.setActiveLeaf(o,!1,!0))}}};function Re(n,r,e,t){return t&&(e+=n.indexOf(r),e=(e+n.length)%n.length),n[e>=n.length?n.length-1:e]}
