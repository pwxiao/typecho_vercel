function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/assets-Ce8NW_Nw.css","assets/chunk-D4ocOI96.js","assets/chuck-B9an3Pim.js","assets/chunk-C6SIkxmN.js","assets/assets-DotgmXPO.css","assets/assets-ptgOEhFh.css","assets/assets-BhlSvmND.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{s as N,_ as L,t as M,a as I,b as z,i as ye,c as ge,n as k,d as B,w as ve,M as be,e as Se,g as Y,f as q,h as W,j as O,x as P,k as Ce,l as xe,m as Le,o as Ee,p as A,q as Te}from"./chuck-B9an3Pim.js";import"./chunk-C21z0OWp.js";import"./chunk-C6SIkxmN.js";let $=class extends I{render(){return z('<path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>')}};$.styles=N;$=L([M("mdui-icon-clear")],$);const _e=ye`:host{--shape-corner:var(--mdui-shape-corner-extra-small);--z-index:2400;position:fixed;z-index:var(--z-index);display:none;align-items:center;flex-wrap:wrap;border-radius:var(--shape-corner);min-width:20rem;max-width:36rem;padding:.25rem 0;box-shadow:var(--mdui-elevation-level3);background-color:rgb(var(--mdui-color-inverse-surface));color:rgb(var(--mdui-color-inverse-on-surface));font-size:var(--mdui-typescale-body-medium-size);font-weight:var(--mdui-typescale-body-medium-weight);letter-spacing:var(--mdui-typescale-body-medium-tracking);line-height:var(--mdui-typescale-body-medium-line-height)}:host([placement^=top]){transform-origin:top;top:1rem}:host([placement^=bottom]){transform-origin:bottom;bottom:1rem}:host([placement=bottom-start]),:host([placement=top-start]){left:1rem}:host([placement=bottom-end]),:host([placement=top-end]){right:1rem}.message{display:block;margin:.625rem 1rem}:host([message-line='1']) .message{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host([message-line='2']) .message{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:2}.action-group{display:flex;align-items:center;margin-left:auto;padding-right:.5rem}.action,.close-button{display:inline-flex;align-items:center;justify-content:center}.action{color:rgb(var(--mdui-color-inverse-primary));font-size:var(--mdui-typescale-label-large-size);font-weight:var(--mdui-typescale-label-large-weight);letter-spacing:var(--mdui-typescale-label-large-tracking)}.action mdui-button,::slotted(mdui-button[slot=action][variant=outlined]),::slotted(mdui-button[slot=action][variant=text]){color:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit;--mdui-comp-ripple-state-layer-color:var(--mdui-color-inverse-primary)}.action mdui-button::part(button){padding:0 .5rem}.close-button{margin:0 -.25rem 0 .25rem;font-size:1.5rem;color:rgb(var(--mdui-color-inverse-on-surface))}.close-button mdui-button-icon,::slotted(mdui-button-icon[slot=close-button][variant=outlined]),::slotted(mdui-button-icon[slot=close-button][variant=standard]){font-size:inherit;color:inherit;--mdui-comp-ripple-state-layer-color:var(--mdui-color-inverse-on-surface)}.close-button .i,::slotted([slot=close-icon]){font-size:inherit}`;let E=class extends be{constructor(){super(),this.open=!1,this.placement="bottom",this.actionLoading=!1,this.closeable=!1,this.autoCloseDelay=5e3,this.closeOnOutsideClick=!1,this.onDocumentClick=this.onDocumentClick.bind(this)}async onOpenChange(){const n=Se().down("sm"),g=["top","bottom"].includes(this.placement),h=Y(this,"linear"),p=Y(this,"emphasized-decelerate"),o=Array.from(this.renderRoot.querySelectorAll(".message, .action-group")),a=n?{left:"1rem",right:"1rem",minWidth:0}:g?{left:"50%"}:{};if(this.open){const e=this.hasUpdated;if(e||await this.updateComplete,e&&!this.emit("open",{cancelable:!0}))return;window.clearTimeout(this.closeTimeout),this.autoCloseDelay&&(this.closeTimeout=window.setTimeout(()=>{this.open=!1},this.autoCloseDelay)),this.style.display="flex",await Promise.all([q(this),...o.map(l=>q(l))]);const s=W(this,"medium4"),c=l=>{const S=`scaleY(${l==="start"?0:1})`;return n?{transform:S}:{transform:[S,g?"translateX(-50%)":""].filter(f=>f).join(" ")}};await Promise.all([O(this,[{...c("start"),...a},{...c("end"),...a}],{duration:e?s:0,easing:p,fill:"forwards"}),O(this,[{opacity:0},{opacity:1,offset:.5},{opacity:1}],{duration:e?s:0,easing:h,fill:"forwards"}),...o.map(l=>O(l,[{opacity:0},{opacity:0,offset:.2},{opacity:1,offset:.8},{opacity:1}],{duration:e?s:0,easing:h}))]),e&&this.emit("opened");return}if(!this.open&&this.hasUpdated){if(!this.emit("close",{cancelable:!0}))return;window.clearTimeout(this.closeTimeout),await Promise.all([q(this),...o.map(l=>q(l))]);const s=W(this,"short4"),c=l=>{const f={opacity:l==="start"?1:0};return!n&&g&&Object.assign(f,{transform:"translateX(-50%)"}),f};await Promise.all([O(this,[{...c("start"),...a},{...c("end"),...a}],{duration:s,easing:h,fill:"forwards"}),...o.map(l=>O(l,[{opacity:1},{opacity:0,offset:.75},{opacity:0}],{duration:s,easing:h}))]),this.style.display="none",this.emit("closed");return}}connectedCallback(){super.connectedCallback(),document.addEventListener("pointerdown",this.onDocumentClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("pointerdown",this.onDocumentClick)}render(){return P`<slot part="message" class="message"></slot><div class="action-group"><slot name="action" part="action" class="action" @click="${this.onActionClick}">${this.action?P`<mdui-button variant="text" loading="${this.actionLoading}">${this.action}</mdui-button>`:Ce}</slot>${xe(this.closeable,()=>P`<slot name="close-button" part="close-button" class="close-button" @click="${this.onCloseClick}"><mdui-button-icon><slot name="close-icon" part="close-icon">${this.closeIcon?P`<mdui-icon name="${this.closeIcon}" class="i"></mdui-icon>`:P`<mdui-icon-clear class="i"></mdui-icon-clear>`}</slot></mdui-button-icon></slot>`)}</div>`}onDocumentClick(n){if(!this.open||!this.closeOnOutsideClick)return;const g=n.target;!this.contains(g)&&this!==g&&(this.open=!1)}onActionClick(n){n.stopPropagation(),this.emit("action-click")}onCloseClick(){this.open=!1}};E.styles=[ge,_e];L([k({type:Boolean,reflect:!0,converter:B})],E.prototype,"open",void 0);L([k({reflect:!0})],E.prototype,"placement",void 0);L([k({reflect:!0,attribute:"action"})],E.prototype,"action",void 0);L([k({type:Boolean,reflect:!0,converter:B,attribute:"action-loading"})],E.prototype,"actionLoading",void 0);L([k({type:Boolean,reflect:!0,converter:B})],E.prototype,"closeable",void 0);L([k({reflect:!0,attribute:"close-icon"})],E.prototype,"closeIcon",void 0);L([k({type:Number,reflect:!0,attribute:"message-line"})],E.prototype,"messageLine",void 0);L([k({type:Number,reflect:!0,attribute:"auto-close-delay"})],E.prototype,"autoCloseDelay",void 0);L([k({type:Boolean,reflect:!0,attribute:"close-on-outside-click",converter:B})],E.prototype,"closeOnOutsideClick",void 0);L([ve("open")],E.prototype,"onOpenChange",null);E=L([M("mdui-snackbar")],E);let G=class extends I{render(){return z('<path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"/>')}};G.styles=N;G=L([M("mdui-icon-label--outlined")],G);let Q=class extends I{render(){return z('<path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>')}};Q.styles=N;Q=L([M("mdui-icon-lock")],Q);const Z={none:"Plain text",plain:"Plain text",plaintext:"Plain text",text:"Plain text",txt:"Plain text",html:"HTML",xml:"XML",svg:"SVG",mathml:"MathML",ssml:"SSML",rss:"RSS",css:"CSS",clike:"C-like",js:"JavaScript",abap:"ABAP",abnf:"ABNF",al:"AL",antlr4:"ANTLR4",g4:"ANTLR4",apacheconf:"Apache Configuration",apl:"APL",aql:"AQL",ino:"Arduino",arff:"ARFF",armasm:"ARM Assembly","arm-asm":"ARM Assembly",art:"Arturo",asciidoc:"AsciiDoc",adoc:"AsciiDoc",aspnet:"ASP.NET (C#)",asm6502:"6502 Assembly",asmatmel:"Atmel AVR Assembly",autohotkey:"AutoHotkey",autoit:"AutoIt",avisynth:"AviSynth",avs:"AviSynth","avro-idl":"Avro IDL",avdl:"Avro IDL",awk:"AWK",gawk:"GAWK",sh:"Shell",basic:"BASIC",bbcode:"BBcode",bbj:"BBj",bnf:"BNF",rbnf:"RBNF",bqn:"BQN",bsl:"BSL (1C:Enterprise)",oscript:"OneScript",csharp:"C#",cs:"C#",dotnet:"C#",cpp:"C++",cfscript:"CFScript",cfc:"CFScript",cil:"CIL",c:"C",cilkc:"Cilk/C","cilk-c":"Cilk/C",cilkcpp:"Cilk/C++","cilk-cpp":"Cilk/C++",cilk:"Cilk/C++",cmake:"CMake",cobol:"COBOL",coffee:"CoffeeScript",conc:"Concurnas",csp:"Content-Security-Policy","css-extras":"CSS Extras",csv:"CSV",cue:"CUE",dataweave:"DataWeave",dax:"DAX",django:"Django/Jinja2",jinja2:"Django/Jinja2","dns-zone-file":"DNS zone file","dns-zone":"DNS zone file",dockerfile:"Docker",dot:"DOT (Graphviz)",gv:"DOT (Graphviz)",ebnf:"EBNF",editorconfig:"EditorConfig",ejs:"EJS",etlua:"Embedded Lua templating",erb:"ERB","excel-formula":"Excel Formula",xlsx:"Excel Formula",xls:"Excel Formula",fsharp:"F#","firestore-security-rules":"Firestore security rules",ftl:"FreeMarker Template Language",gml:"GameMaker Language",gamemakerlanguage:"GameMaker Language",gap:"GAP (CAS)",gcode:"G-code",gdscript:"GDScript",gedcom:"GEDCOM",gettext:"gettext",po:"gettext",glsl:"GLSL",gn:"GN",gni:"GN","linker-script":"GNU Linker Script",ld:"GNU Linker Script","go-module":"Go module","go-mod":"Go module",graphql:"GraphQL",hbs:"Handlebars",hs:"Haskell",hcl:"HCL",hlsl:"HLSL",http:"HTTP",hpkp:"HTTP Public-Key-Pins",hsts:"HTTP Strict-Transport-Security",ichigojam:"IchigoJam","icu-message-format":"ICU Message Format",idr:"Idris",ignore:".ignore",gitignore:".gitignore",hgignore:".hgignore",npmignore:".npmignore",inform7:"Inform 7",javadoc:"JavaDoc",javadoclike:"JavaDoc-like",javastacktrace:"Java stack trace",jq:"JQ",jsdoc:"JSDoc","js-extras":"JS Extras",json:"JSON",webmanifest:"Web App Manifest",json5:"JSON5",jsonp:"JSONP",jsstacktrace:"JS stack trace","js-templates":"JS Templates",keepalived:"Keepalived Configure",kts:"Kotlin Script",kt:"Kotlin",kumir:"KuMir (КуМир)",kum:"KuMir (КуМир)",latex:"LaTeX",tex:"TeX",context:"ConTeXt",lilypond:"LilyPond",ly:"LilyPond",emacs:"Lisp",elisp:"Lisp","emacs-lisp":"Lisp",llvm:"LLVM IR",log:"Log file",lolcode:"LOLCODE",magma:"Magma (CAS)",md:"Markdown","markup-templating":"Markup templating",matlab:"MATLAB",maxscript:"MAXScript",mel:"MEL",metafont:"METAFONT",mongodb:"MongoDB",moon:"MoonScript",n1ql:"N1QL",n4js:"N4JS",n4jsd:"N4JS","nand2tetris-hdl":"Nand To Tetris HDL",naniscript:"Naninovel Script",nani:"Naninovel Script",nasm:"NASM",neon:"NEON",nginx:"nginx",nsis:"NSIS",objectivec:"Objective-C",objc:"Objective-C",ocaml:"OCaml",opencl:"OpenCL",openqasm:"OpenQasm",qasm:"OpenQasm",parigp:"PARI/GP",objectpascal:"Object Pascal",psl:"PATROL Scripting Language",pcaxis:"PC-Axis",px:"PC-Axis",peoplecode:"PeopleCode",pcode:"PeopleCode",php:"PHP",phpdoc:"PHPDoc","php-extras":"PHP Extras","plant-uml":"PlantUML",plantuml:"PlantUML",plsql:"PL/SQL",powerquery:"PowerQuery",pq:"PowerQuery",mscript:"PowerQuery",powershell:"PowerShell",promql:"PromQL",properties:".properties",protobuf:"Protocol Buffers",purebasic:"PureBasic",pbfasm:"PureBasic",purs:"PureScript",py:"Python",qsharp:"Q#",qs:"Q#",q:"Q (kdb+ database)",qml:"QML",rkt:"Racket",cshtml:"Razor C#",razor:"Razor C#",jsx:"React JSX",tsx:"React TSX",renpy:"Ren'py",rpy:"Ren'py",res:"ReScript",rest:"reST (reStructuredText)",robotframework:"Robot Framework",robot:"Robot Framework",rb:"Ruby",sas:"SAS",sass:"Sass (Sass)",scss:"Sass (SCSS)","shell-session":"Shell session","sh-session":"Shell session",shellsession:"Shell session",sml:"SML",smlnj:"SML/NJ",solidity:"Solidity (Ethereum)",sol:"Solidity (Ethereum)","solution-file":"Solution file",sln:"Solution file",soy:"Soy (Closure Template)",sparql:"SPARQL",rq:"SPARQL","splunk-spl":"Splunk SPL",sqf:"SQF: Status Quo Function (Arma 3)",sql:"SQL",stata:"Stata Ado",iecst:"Structured Text (IEC 61131-3)",supercollider:"SuperCollider",sclang:"SuperCollider",systemd:"Systemd configuration file","t4-templating":"T4 templating","t4-cs":"T4 Text Templates (C#)",t4:"T4 Text Templates (C#)","t4-vb":"T4 Text Templates (VB)",tap:"TAP",tt2:"Template Toolkit 2",toml:"TOML",trickle:"trickle",troy:"troy",trig:"TriG",ts:"TypeScript",tsconfig:"TSConfig",uscript:"UnrealScript",uc:"UnrealScript",uorazor:"UO Razor Script",uri:"URI",url:"URL",vbnet:"VB.Net",vhdl:"VHDL",vim:"vim","visual-basic":"Visual Basic",vba:"VBA",vb:"Visual Basic",vue:"Vue SFC",wasm:"WebAssembly","web-idl":"Web IDL",webidl:"Web IDL",wgsl:"WGSL",wiki:"Wiki markup",wolfram:"Wolfram language",nb:"Mathematica Notebook",wl:"Wolfram language",xeoracube:"XeoraCube","xml-doc":"XML doc (.net)",xojo:"Xojo (REALbasic)",xquery:"XQuery",yaml:"YAML",yml:"YAML",yang:"YANG"};function ke(t){function n(g,h,p){const o=t.languages[p!=null?p:h];return{[g+"-"+h]:{pattern:RegExp(`(<${g}[^>]*lang="${h}"[^>]*>)([\\s\\S])*?(?=<\\/${g}>)`,"i"),lookbehind:!0,greedy:!0,inside:{["language-"+h]:{pattern:/[\s\S]+/,inside:o}}}}}t.languages.vue=t.languages.extend("markup",{}),t.languages.ts&&t.languages.insertBefore("vue","script",n("script","ts","typescript")),t.languages.less&&t.languages.insertBefore("vue","style",n("style","less")),t.languages.scss&&t.languages.insertBefore("vue","style",n("style","scss")),t.languages.sass&&t.languages.insertBefore("vue","style",n("style","sass")),t.languages.vue.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:(v-|@|:)[^=]*)"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":{pattern:/^[^\s=]+/,inside:{punctuation:[/(:|@)/]}},"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:["reset-color"],inside:t.languages.javascript},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}}),t.languages.insertBefore("vue","tag",{"text-interpolation":{pattern:RegExp("{{([\\s\\S])*?}}","i"),inside:{"language-js":{pattern:/({{)([\s\S])*?(?=}})/i,lookbehind:!0,inside:t.languages.javascript},punctuation:[/({{|}})/]}}})}var ne={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(t,n){(function(h,p){t.exports=p()})(Le,function(){return function(){var g={686:function(o,a,e){e.d(a,{default:function(){return he}});var s=e(279),c=e.n(s),l=e(370),S=e.n(l),f=e(817),x=e.n(f);function b(m){try{return document.execCommand(m)}catch(r){return!1}}var C=function(r){var i=x()(r);return b("cut"),i},v=C;function T(m){var r=document.documentElement.getAttribute("dir")==="rtl",i=document.createElement("textarea");i.style.fontSize="12pt",i.style.border="0",i.style.padding="0",i.style.margin="0",i.style.position="absolute",i.style[r?"right":"left"]="-9999px";var u=window.pageYOffset||document.documentElement.scrollTop;return i.style.top="".concat(u,"px"),i.setAttribute("readonly",""),i.value=m,i}var X=function(r,i){var u=T(r);i.container.appendChild(u);var d=x()(u);return b("copy"),u.remove(),d},ie=function(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},u="";return typeof r=="string"?u=X(r,i):r instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(r==null?void 0:r.type)?u=X(r.value,i):(u=x()(r),b("copy")),u},F=ie;function j(m){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?j=function(i){return typeof i}:j=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},j(m)}var re=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=r.action,u=i===void 0?"copy":i,d=r.container,y=r.target,_=r.text;if(u!=="copy"&&u!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(y!==void 0)if(y&&j(y)==="object"&&y.nodeType===1){if(u==="copy"&&y.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(u==="cut"&&(y.hasAttribute("readonly")||y.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(_)return F(_,{container:d});if(y)return u==="cut"?v(y):F(y,{container:d})},ae=re;function w(m){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?w=function(i){return typeof i}:w=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},w(m)}function se(m,r){if(!(m instanceof r))throw new TypeError("Cannot call a class as a function")}function K(m,r){for(var i=0;i<r.length;i++){var u=r[i];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(m,u.key,u)}}function ce(m,r,i){return r&&K(m.prototype,r),i&&K(m,i),m}function le(m,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");m.prototype=Object.create(r&&r.prototype,{constructor:{value:m,writable:!0,configurable:!0}}),r&&H(m,r)}function H(m,r){return H=Object.setPrototypeOf||function(u,d){return u.__proto__=d,u},H(m,r)}function ue(m){var r=pe();return function(){var u=R(m),d;if(r){var y=R(this).constructor;d=Reflect.construct(u,arguments,y)}else d=u.apply(this,arguments);return de(this,d)}}function de(m,r){return r&&(w(r)==="object"||typeof r=="function")?r:me(m)}function me(m){if(m===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m}function pe(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(m){return!1}}function R(m){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)},R(m)}function V(m,r){var i="data-clipboard-".concat(m);if(r.hasAttribute(i))return r.getAttribute(i)}var fe=function(m){le(i,m);var r=ue(i);function i(u,d){var y;return se(this,i),y=r.call(this),y.resolveOptions(d),y.listenClick(u),y}return ce(i,[{key:"resolveOptions",value:function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof d.action=="function"?d.action:this.defaultAction,this.target=typeof d.target=="function"?d.target:this.defaultTarget,this.text=typeof d.text=="function"?d.text:this.defaultText,this.container=w(d.container)==="object"?d.container:document.body}},{key:"listenClick",value:function(d){var y=this;this.listener=S()(d,"click",function(_){return y.onClick(_)})}},{key:"onClick",value:function(d){var y=d.delegateTarget||d.currentTarget,_=this.action(y)||"copy",D=ae({action:_,container:this.container,target:this.target(y),text:this.text(y)});this.emit(D?"success":"error",{action:_,text:D,trigger:y,clearSelection:function(){y&&y.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(d){return V("action",d)}},{key:"defaultTarget",value:function(d){var y=V("target",d);if(y)return document.querySelector(y)}},{key:"defaultText",value:function(d){return V("text",d)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(d){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return F(d,y)}},{key:"cut",value:function(d){return v(d)}},{key:"isSupported",value:function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],y=typeof d=="string"?[d]:d,_=!!document.queryCommandSupported;return y.forEach(function(D){_=_&&!!document.queryCommandSupported(D)}),_}}]),i}(c()),he=fe},828:function(o){var a=9;if(typeof Element!="undefined"&&!Element.prototype.matches){var e=Element.prototype;e.matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}function s(c,l){for(;c&&c.nodeType!==a;){if(typeof c.matches=="function"&&c.matches(l))return c;c=c.parentNode}}o.exports=s},438:function(o,a,e){var s=e(828);function c(f,x,b,C,v){var T=S.apply(this,arguments);return f.addEventListener(b,T,v),{destroy:function(){f.removeEventListener(b,T,v)}}}function l(f,x,b,C,v){return typeof f.addEventListener=="function"?c.apply(null,arguments):typeof b=="function"?c.bind(null,document).apply(null,arguments):(typeof f=="string"&&(f=document.querySelectorAll(f)),Array.prototype.map.call(f,function(T){return c(T,x,b,C,v)}))}function S(f,x,b,C){return function(v){v.delegateTarget=s(v.target,x),v.delegateTarget&&C.call(f,v)}}o.exports=l},879:function(o,a){a.node=function(e){return e!==void 0&&e instanceof HTMLElement&&e.nodeType===1},a.nodeList=function(e){var s=Object.prototype.toString.call(e);return e!==void 0&&(s==="[object NodeList]"||s==="[object HTMLCollection]")&&"length"in e&&(e.length===0||a.node(e[0]))},a.string=function(e){return typeof e=="string"||e instanceof String},a.fn=function(e){var s=Object.prototype.toString.call(e);return s==="[object Function]"}},370:function(o,a,e){var s=e(879),c=e(438);function l(b,C,v){if(!b&&!C&&!v)throw new Error("Missing required arguments");if(!s.string(C))throw new TypeError("Second argument must be a String");if(!s.fn(v))throw new TypeError("Third argument must be a Function");if(s.node(b))return S(b,C,v);if(s.nodeList(b))return f(b,C,v);if(s.string(b))return x(b,C,v);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function S(b,C,v){return b.addEventListener(C,v),{destroy:function(){b.removeEventListener(C,v)}}}function f(b,C,v){return Array.prototype.forEach.call(b,function(T){T.addEventListener(C,v)}),{destroy:function(){Array.prototype.forEach.call(b,function(T){T.removeEventListener(C,v)})}}}function x(b,C,v){return c(document.body,b,C,v)}o.exports=l},817:function(o){function a(e){var s;if(e.nodeName==="SELECT")e.focus(),s=e.value;else if(e.nodeName==="INPUT"||e.nodeName==="TEXTAREA"){var c=e.hasAttribute("readonly");c||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),c||e.removeAttribute("readonly"),s=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var l=window.getSelection(),S=document.createRange();S.selectNodeContents(e),l.removeAllRanges(),l.addRange(S),s=l.toString()}return s}o.exports=a},279:function(o){function a(){}a.prototype={on:function(e,s,c){var l=this.e||(this.e={});return(l[e]||(l[e]=[])).push({fn:s,ctx:c}),this},once:function(e,s,c){var l=this;function S(){l.off(e,S),s.apply(c,arguments)}return S._=s,this.on(e,S,c)},emit:function(e){var s=[].slice.call(arguments,1),c=((this.e||(this.e={}))[e]||[]).slice(),l=0,S=c.length;for(l;l<S;l++)c[l].fn.apply(c[l].ctx,s);return this},off:function(e,s){var c=this.e||(this.e={}),l=c[e],S=[];if(l&&s)for(var f=0,x=l.length;f<x;f++)l[f].fn!==s&&l[f].fn._!==s&&S.push(l[f]);return S.length?c[e]=S:delete c[e],this}},o.exports=a,o.exports.TinyEmitter=a}},h={};function p(o){if(h[o])return h[o].exports;var a=h[o]={exports:{}};return g[o](a,a.exports,p),a.exports}return function(){p.n=function(o){var a=o&&o.__esModule?function(){return o.default}:function(){return o};return p.d(a,{a}),a}}(),function(){p.d=function(o,a){for(var e in a)p.o(a,e)&&!p.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:a[e]})}}(),function(){p.o=function(o,a){return Object.prototype.hasOwnProperty.call(o,a)}}(),p(686)}().default})})(ne);var Ae=ne.exports;const we=Ee(Ae);let J=class extends I{render(){return z('<path d="M18 2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H9V4h9v12zM3 15v-2h2v2H3zm0-5.5h2v2H3v-2zM10 20h2v2h-2v-2zm-7-1.5v-2h2v2H3zM5 22c-1.1 0-2-.9-2-2h2v2zm3.5 0h-2v-2h2v2zm5 0v-2h2c0 1.1-.9 2-2 2zM5 6v2H3c0-1.1.9-2 2-2z"/>')}};J.styles=N;J=L([M("mdui-icon-copy-all")],J);function U(t){const n=new E;n.textContent=t,document.body.appendChild(n),n.placement="bottom-end",n.addEventListener("closed",()=>{n.remove()},{once:!0}),setTimeout(()=>{n.open=!0})}function Oe(){var n;const t=(n=document.querySelector(".matecho-comment-form__main"))==null?void 0:n.cloneNode(!0);if(!t)throw new Error("Main comment form not found.");return t.classList.remove("matecho-comment-form__main"),t.querySelector("[name=text]").value="",t.removeAttribute("id"),oe(t),t}function Pe(t){const n=document.querySelector(".matecho-comment-form__main").getBoundingClientRect().height;t.style.setProperty("--m-height",n+"px"),t.addEventListener("animationend",()=>{t.classList.remove("matecho-comment-form__in")}),t.classList.add("matecho-comment-form__in")}function ee(t){const n=t.getBoundingClientRect().height;t.style.setProperty("--m-height",n+"px"),t.addEventListener("animationend",()=>{t.remove()}),t.classList.add("matecho-comment-form__out")}function oe(t){const n=t.querySelector("form"),g=t.querySelector(".matecho-comment-submit-btn"),h=t.querySelector(".matecho-comment-cancel-btn");n.addEventListener("submit",p=>p.preventDefault()),g.addEventListener("click",async()=>{var e,s;const p=document.querySelector("#matecho-comment-list"),o=window.__MATECHO_ANTI_SPAM__;if(!o||!n.reportValidity())return;const a=new FormData(n);a.set("_",o),t.classList.add("matecho-form__loading");try{const c=await fetch(n.action,{body:a,method:"POST",credentials:"same-origin"}),l=await c.text(),S=Object.assign(document.createElement("html"),{innerHTML:l});if(c.status===200){if(!p)return location.reload();if(S.querySelectorAll("#matecho-comment-list .matecho-comment-wrapper").forEach(f=>{var x,b;if(!p.querySelector("#"+f.id))if(f.classList.contains("matecho-comment-child")){const C=((b=(x=f.parentElement)==null?void 0:x.parentElement)==null?void 0:b.id)||"",v=document.getElementById(C);if(!v)return location.reload();const T=v.querySelector(".matecho-comment-children-list");T?T.appendChild(f):v.lastElementChild.before(f.parentElement)}else p.appendChild(f)}),t.classList.contains("matecho-comment-form__reply"))ee(t);else{const f=t.querySelector("[name=text]");f.required=!1,f.value="",setTimeout(()=>{f.required=!0})}(e=p.querySelector("#matecho-no-comment-placeholder"))==null||e.remove()}else{const f=(s=S.querySelector(".container"))==null?void 0:s.innerText;U(f||"无法发送评论, 请检查网络连接.")}}catch(c){U("无法发送评论, 请检查网络连接.")}finally{t.classList.remove("matecho-form__loading")}}),h.addEventListener("click",()=>{ee(t)})}function Me(t){const n=t.querySelector("#matecho-comment-list");if(!n)return;const g=t.querySelector(".matecho-comment-form");oe(g),n.addEventListener("click",h=>{var c;const p=h.target,o=(c=p.getAttribute)==null?void 0:c.call(p,"data-to-comment");if(typeof o!="string"||document.querySelector("#reply-to-"+o))return;const a=Oe(),e=a.querySelector("form"),s=a.querySelector(".matecho-comment-form-title");s.innerText="回复 ",s.appendChild(Object.assign(document.createElement("a"),{href:"#comment-"+o,innerText:"#"+o})),e.appendChild(Object.assign(document.createElement("input"),{name:"parent",value:o,type:"hidden"})),a.classList.add("matecho-comment-form__reply"),a.id="reply-to-"+o,h.target.parentElement.parentElement.after(a),Pe(a)})}function je(t){A(()=>Promise.resolve({}),__vite__mapDeps([0])),A(()=>import("./chunk-D4ocOI96.js"),__vite__mapDeps([1,2,3,4])).then(({default:n})=>{ke(n),n.highlightAllUnder(t)})}function Re(t){A(()=>Promise.resolve({}),__vite__mapDeps([5])),Promise.all([A(()=>import("./chunk-IfOx4G_s.js"),[]),A(()=>import("./chunk-huiiZTW_.js"),[])]).then(([{Fancybox:n},{zh_CN:g}])=>{t.querySelectorAll("img").forEach(h=>{var p,o;h.setAttribute("data-fancybox","article"),((p=h.alt)!=null?p:h.title)&&h.setAttribute("data-caption",(o=h.alt)!=null?o:h.title)}),n.bind("[data-fancybox]",{l10n:g})})}function De(t){A(()=>Promise.resolve({}),__vite__mapDeps([6])),A(()=>import("./chunk-CmLRFwiq.js"),[]).then(({default:n})=>{n(t,{delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1}]})})}function te(t){let n=-1,g=-2;for(;g!=-1;n++,g=t.indexOf("$",g+1));return n}function qe(t){const n=t.querySelector("mdui-text-field"),g=t.querySelector("mdui-button[type=submit]");t.addEventListener("submit",h=>h.preventDefault()),g.addEventListener("click",()=>{if(n.setCustomValidity(""),!t.reportValidity())return;const h=new FormData(t);t.classList.add("matecho-form__loading"),fetch(t.action,{body:h,method:"POST",credentials:"same-origin"}).then(async p=>{if(p.status===200){const o=Te.pjax;o.handleResponse(await p.text(),new XMLHttpRequest,window.location.href,{...o.options,history:!1})}else n.setCustomValidity("密码错误")}).finally(()=>{t.classList.remove("matecho-form__loading")})}),setTimeout(()=>{n.focus()})}function Ne(t){t.querySelectorAll("pre").forEach(n=>{var a;const g=n.querySelector("code");if(!g)return;const h=Object.assign(document.createElement("div"),{className:"matecho-code-action-wrapper"}),p=Array.from(g.classList).filter(e=>e.startsWith("lang-"))[0];if(p){const e=(a=Z[p.substring(5)])!=null?a:Z.none;h.appendChild(Object.assign(document.createElement("div"),{innerText:e,className:"matecho-code-lang"}))}const o=document.createElement("mdui-button-icon");o.addEventListener("click",()=>{we.copy(g.innerText),U("已复制到剪切板")}),o.appendChild(document.createElement("mdui-icon-copy-all")),h.appendChild(o),n.appendChild(h)})}function Je(t){Me(t);const n=t.querySelector("article.mdui-prose"),{Prism:g,FancyBox:h,KaTeX:p}=window.__MATECHO_OPTIONS__;if(n&&(Ne(n),g&&n.querySelector("pre > code[class*=lang-]")&&je(n),h&&n.querySelector("img")&&Re(n),p)){const a=te(n.innerText);if(n.innerText.includes("$")){const e=Array.from(n.querySelectorAll("script, noscript, style, textarea, pre, code, option")).map(c=>c.innerText).join("");te(e)<a&&De(n)}}const o=document.querySelector("form#matecho-password-form");o&&qe(o)}export{Je as init};