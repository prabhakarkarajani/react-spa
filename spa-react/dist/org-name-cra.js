/*! For license information please see org-name-cra.js.LICENSE.txt */
System.register(["react","react-dom"],(function(e,n){var t={},r={};return Object.defineProperty(t,"__esModule",{value:!0}),{setters:[function(e){Object.keys(e).forEach((function(n){t[n]=e[n]}))},function(e){r.default=e.default}],execute:function(){e(function(){var e={418:function(e){"use strict";var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var i,c,s=o(e),u=1;u<arguments.length;u++){for(var l in i=Object(arguments[u]))t.call(i,l)&&(s[l]=i[l]);if(n){c=n(i);for(var p=0;p<c.length;p++)r.call(i,c[p])&&(s[c[p]]=i[c[p]])}}return s}},251:function(e,n,t){"use strict";t(418);var r=t(954),o=60103;if("function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),a("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,t){var r,a={},u=null,l=null;for(r in void 0!==t&&(u=""+t),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,r)&&!s.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===a[r]&&(a[r]=n[r]);return{$$typeof:o,type:e,key:u,ref:l,props:a,_owner:i.current}}n.jsx=u,n.jsxs=u},893:function(e,n,t){"use strict";e.exports=t(251)},722:function(e,n,t){const r=t(905).R;n.s=function(e){if(e||(e=1),!t.y.meta||!t.y.meta.url)throw console.error("__system_context__",t.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");t.p=r(t.y.meta.url,e)}},905:function(e,n,t){n.R=function(e,n){var t=document.createElement("a");t.href=e;for(var r="/"===t.pathname[0]?t.pathname:"/"+t.pathname,o=0,a=r.length;o!==n&&a>=0;)"/"===r[--a]&&o++;if(o!==n)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+n+") is greater than the number of directories ("+o+") in the URL path "+e);var i=r.slice(0,a+1);return t.protocol+"//"+t.host+i};Number.isInteger},444:function(e,n,t){"use strict";var r=t(658),o=t.n(r),a=t(118),i=t.n(a)()(o());i.push([e.id,".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n","",{version:3,sources:["webpack://./src/App.css"],names:[],mappings:"AAAA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE;IACE,4CAA4C;EAC9C;AACF;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF",sourcesContent:[".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n"],sourceRoot:""}]),n.Z=i},830:function(e,n,t){"use strict";var r=t(658),o=t.n(r),a=t(118),i=t.n(a)()(o());i.push([e.id,"body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n","",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"AAAA;EACE,SAAS;EACT;;cAEY;EACZ,mCAAmC;EACnC,kCAAkC;AACpC;;AAEA;EACE;aACW;AACb",sourcesContent:["body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n"],sourceRoot:""}]),n.Z=i},118:function(e){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},658:function(e){"use strict";function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}e.exports=function(e){var t,r,o=(r=4,function(e){if(Array.isArray(e))return e}(t=e)||function(e,n){var t=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=t){var r,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],i=o[3];if(!i)return a;if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),u="/*# ".concat(s," */"),l=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[a].concat(l).concat([u]).join("\n")}return[a].join("\n")}},918:function(e){"use strict";var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],l=a[u]||0,p="".concat(u," ").concat(l);a[u]=l+1;var f=t(p),m={css:s[1],media:s[2],sourceMap:s[3]};-1!==f?(n[f].references++,n[f].updater(m)):n.push({identifier:p,updater:o(m,r),references:1}),i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),u=0;u<a.length;u++){var l=t(a[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},152:function(e){"use strict";var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},66:function(e){"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},227:function(e,n,t){"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},258:function(e){"use strict";e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},548:function(e){"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},100:function(e,n,t){"use strict";e.exports=t.p+"6ce24c58023cc2f8fd88.svg"},954:function(e){"use strict";e.exports=t},493:function(e){"use strict";e.exports=r}},o={};function a(n){var t=o[n];if(void 0!==t)return t.exports;var r=o[n]={id:n,exports:{}};return e[n](r,r.exports,a),r.exports}a.y=n,a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,{a:n}),n},a.d=function(e,n){for(var t in n)a.o(n,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="";var i={};return(0,a(722).s)(1),function(){"use strict";a.r(i),a.d(i,{bootstrap:function(){return D},mount:function(){return I},unmount:function(){return F}});var e=a(954),n=a(493);function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var s=null;try{s=require("react").createContext()}catch(t){}var u={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,renderType:null,errorBoundary:null,errorBoundaryClass:null,domElementGetter:null,parcelCanUpdate:!0,suppressComponentDidCatchWarning:!1,domElements:{},renderResults:{},updateResolves:{}};function l(e,n){return e.rootComponent?Promise.resolve():e.loadRootComponent(n).then((function(n){e.rootComponent=n}))}function p(e,n){return new Promise((function(t,r){e.suppressComponentDidCatchWarning||!function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var n=e.version.slice(0,e.version.indexOf("."));try{return Number(n)>=16}catch(e){return!1}}(e.React)||e.errorBoundary||(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(n.name||n.appName||n.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(n.name||n.appName||n.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var o=y(e,n);if("function"!=typeof o)throw new Error("single-spa-react: the domElementGetter for react application '".concat(n.appName||n.name,"' is not a function"));var a=h(e,n,(function(){t(this)})),i=d(o,n),c=function(e){var n=e.opts,t=e.elementToRender,r=e.domElement;if(["createRoot","unstable_createRoot","createBlockingRoot","unstable_createBlockingRoot"].indexOf(n.renderType)>=0){var o=n.ReactDOM[n.renderType](r);return o.render(t),o}return"hydrate"===n.renderType?n.ReactDOM.hydrate(t,r):n.ReactDOM.render(t,r),null}({elementToRender:a,domElement:i,opts:e});e.domElements[n.name]=i,e.renderResults[n.name]=c}))}function f(e,n){return new Promise((function(t){e.unmountFinished=t;var r=e.renderResults[n.name];r&&r.unmount?r.unmount():e.ReactDOM.unmountComponentAtNode(e.domElements[n.name]),delete e.domElements[n.name],delete e.renderResults[n.name]}))}function m(e,n){return new Promise((function(t){e.updateResolves[n.name]||(e.updateResolves[n.name]=[]),e.updateResolves[n.name].push(t);var r=h(e,n,null),o=e.renderResults[n.name];if(o&&o.render)o.render(r);else{var a=d(y(e,n),n);e.ReactDOM.render(r,a)}}))}function d(e,n){var t=e(n);if(!t)throw new Error("single-spa-react: domElementGetter function for application '".concat(n.appName||n.name,"' did not return a valid dom element. Please pass a valid domElement or domElementGetter via opts or props"));return t}function y(e,n){return n.domElement?function(){return n.domElement}:n.domElementGetter?n.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var n=e.appName||e.name;if(!n)throw Error("single-spa-react was not given an application name as a prop, so it can't make a unique dom element container for the react application");var t="single-spa-application:".concat(n);return function(){var e=document.getElementById(t);return e||((e=document.createElement("div")).id=t,document.body.appendChild(e)),e}}(n)}function h(e,n,t){var r=e.React.createElement(e.rootComponent,n),o=s?e.React.createElement(s.Provider,{value:n},r):r;function a(e){a.displayName="SingleSpaRoot(".concat(e.name,")")}return(e.errorBoundary||n.errorBoundary||e.errorBoundaryClass||n.errorBoundaryClass)&&(e.errorBoundaryClass=e.errorBoundaryClass||n.errorBoundaryClass||function(e,n){function t(n){e.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},t.displayName="SingleSpaReactErrorBoundary(".concat(n.name,")")}return t.prototype=Object.create(e.React.Component.prototype),t.prototype.render=function(){return this.state.caughtError?(e.errorBoundary||n.errorBoundary)(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},t.prototype.componentDidCatch=function(e,n){this.setState({caughtError:e,caughtErrorInfo:n})},t}(e,n),o=e.React.createElement(e.errorBoundaryClass,n,o)),o=e.React.createElement(a,c(c({},n),{},{mountFinished:t,updateFinished:function(){e.updateResolves[n.name]&&(e.updateResolves[n.name].forEach((function(e){return e()})),delete e.updateResolves[n.name])},unmountFinished:function(){setTimeout(e.unmountFinished)}}),o),a.prototype=Object.create(e.React.Component.prototype),a.prototype.componentDidMount=function(){setTimeout(this.props.mountFinished)},a.prototype.componentWillUnmount=function(){setTimeout(this.props.unmountFinished)},a.prototype.render=function(){return setTimeout(this.props.updateFinished),this.props.children},o}var A=a(918),v=a.n(A),b=a(258),g=a.n(b),E=a(152),C=a.n(E),O=a(227),R=a.n(O),w=a(66),j=a.n(w),B=a(548),S=a.n(B),x=a(830),k={};k.styleTagTransform=S(),k.setAttributes=R(),k.insert=C().bind(null,"head"),k.domAPI=g(),k.insertStyleElement=j(),v()(x.Z,k),x.Z&&x.Z.locals&&x.Z.locals;var P=a(100),_=a(444),N={};N.styleTagTransform=S(),N.setAttributes=R(),N.insert=C().bind(null,"head"),N.domAPI=g(),N.insertStyleElement=j(),v()(_.Z,N),_.Z&&_.Z.locals&&_.Z.locals;var T=a(893),M=function(e){if("object"!==t(e))throw new Error("single-spa-react requires a configuration object");var n=c(c({},u),e);if(!n.React)throw new Error("single-spa-react must be passed opts.React");if(!n.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!n.rootComponent&&!n.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(n.errorBoundary&&"function"!=typeof n.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!s&&n.React.createContext&&(s=n.React.createContext());var r={bootstrap:l.bind(null,n),mount:p.bind(null,n),unmount:f.bind(null,n)};return n.parcelCanUpdate&&(r.update=m.bind(null,n)),r}({React:e.default,ReactDOM:n.default,rootComponent:function(){return(0,T.jsx)("div",{className:"App",children:(0,T.jsxs)("header",{className:"App-header",children:[(0,T.jsx)("img",{src:P,className:"App-logo",alt:"logo"}),(0,T.jsxs)("p",{children:["Edit ",(0,T.jsx)("code",{children:"src/App.js"})," and save to reload."]}),(0,T.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},errorBoundary:function(e,n,t){return null}}),D=M.bootstrap,I=M.mount,F=M.unmount}(),i}())}}}));
//# sourceMappingURL=org-name-cra.js.map