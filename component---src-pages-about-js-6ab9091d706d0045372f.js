(self.webpackChunkstephenhwang_me=self.webpackChunkstephenhwang_me||[]).push([[682],{7360:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#585858","images":{"fallback":{"src":"/static/f87535bdbe60b7a8d9c169229a83d4a1/224fd/me.jpg","srcSet":"/static/f87535bdbe60b7a8d9c169229a83d4a1/26644/me.jpg 1368w,\\n/static/f87535bdbe60b7a8d9c169229a83d4a1/d0a5a/me.jpg 2736w,\\n/static/f87535bdbe60b7a8d9c169229a83d4a1/224fd/me.jpg 5472w","sizes":"(min-width: 5472px) 5472px, 100vw"},"sources":[{"srcSet":"/static/f87535bdbe60b7a8d9c169229a83d4a1/4061d/me.webp 1368w,\\n/static/f87535bdbe60b7a8d9c169229a83d4a1/0fe32/me.webp 2736w,\\n/static/f87535bdbe60b7a8d9c169229a83d4a1/34b1a/me.webp 5472w","type":"image/webp","sizes":"(min-width: 5472px) 5472px, 100vw"}]},"width":5472,"height":3648}')},642:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return r.Z},createChainedFunction:function(){return o.Z},createSvgIcon:function(){return m},debounce:function(){return f},deprecatedPropType:function(){return p},isMuiElement:function(){return h},ownerDocument:function(){return g.Z},ownerWindow:function(){return b.Z},requirePropFactory:function(){return v},setRef:function(){return w.Z},unstable_useId:function(){return Z},unsupportedProp:function(){return y},useControlled:function(){return x},useEventCallback:function(){return E.Z},useForkRef:function(){return S.Z},useIsFocusVisible:function(){return R}});var r=n(1664),o=n(8231),a=n(2122),i=n(7294),c=n(1253),l=n(5505),u=n(3511),d=i.forwardRef((function(e,t){var n=e.children,o=e.classes,u=e.className,d=e.color,s=void 0===d?"inherit":d,m=e.component,f=void 0===m?"svg":m,p=e.fontSize,h=void 0===p?"default":p,g=e.htmlColor,b=e.titleAccess,v=e.viewBox,w=void 0===v?"0 0 24 24":v,y=(0,c.Z)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return i.createElement(f,(0,a.Z)({className:(0,l.Z)(o.root,u,"inherit"!==s&&o["color".concat((0,r.Z)(s))],"default"!==h&&o["fontSize".concat((0,r.Z)(h))]),focusable:"false",viewBox:w,color:g,"aria-hidden":!b||void 0,role:b?"img":void 0,ref:t},y),n,b?i.createElement("title",null,b):null)}));d.muiName="SvgIcon";var s=(0,u.Z)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(d);function m(e,t){var n=function(t,n){return i.createElement(s,(0,a.Z)({ref:n},t),e)};return n.muiName=s.muiName,i.memo(i.forwardRef(n))}function f(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];var i=this,c=function(){e.apply(i,o)};clearTimeout(t),t=setTimeout(c,n)}return r.clear=function(){clearTimeout(t)},r}function p(e,t){return function(){return null}}function h(e,t){return i.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}var g=n(703),b=n(7811);function v(e){return function(){return null}}var w=n(1474);function y(e,t,n,r,o){return null}function x(e){var t=e.controlled,n=e.default,r=(e.name,e.state,i.useRef(void 0!==t).current),o=i.useState(n),a=o[0],c=o[1];return[r?t:a,i.useCallback((function(e){r||c(e)}),[])]}var E=n(7544),S=n(1291);function Z(e){var t=i.useState(e),n=t[0],r=t[1],o=e||n;return i.useEffect((function(){null==n&&r("mui-".concat(Math.round(1e5*Math.random())))}),[n]),o}var C=n(3935),k=!0,_=!1,I=null,N={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function z(e){e.metaKey||e.altKey||e.ctrlKey||(k=!0)}function P(){k=!1}function T(){"hidden"===this.visibilityState&&_&&(k=!0)}function A(e){var t,n,r,o=e.target;try{return o.matches(":focus-visible")}catch(a){}return k||(n=(t=o).type,!("INPUT"!==(r=t.tagName)||!N[n]||t.readOnly)||"TEXTAREA"===r&&!t.readOnly||!!t.isContentEditable)}function L(){_=!0,window.clearTimeout(I),I=window.setTimeout((function(){_=!1}),100)}function R(){return{isFocusVisible:A,onBlurVisible:L,ref:i.useCallback((function(e){var t,n=C.findDOMNode(e);null!=n&&((t=n.ownerDocument).addEventListener("keydown",z,!0),t.addEventListener("mousedown",P,!0),t.addEventListener("pointerdown",P,!0),t.addEventListener("touchstart",P,!0),t.addEventListener("visibilitychange",T,!0))}),[])}}},2171:function(e,t,n){"use strict";var r=n(5318),o=n(862);t.Z=void 0;var a=o(n(7294)),i=(0,r(n(8786)).default)(a.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.Z=i},8786:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(642)},8201:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7294),o=n(9),a=n(5444),i=n(2171),c=o.ZP.nav.withConfig({displayName:"topnav__Nav",componentId:"p45n22-0"})(["position:absolute;top:20px;left:20px;width:50px;height:50px;"]),l=(0,o.ZP)(a.rU).withConfig({displayName:"topnav__LinkSVG",componentId:"p45n22-1"})(["width:100%;height:100%;display:block"]);function u(){return r.createElement(c,null,r.createElement(l,{from:"*",to:"/"},r.createElement(i.Z,{style:{fontSize:40,color:"black"}})))}},5518:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(7294),o=n(8201),a=n(9),i=n(9285),c=n(3751),l=a.ZP.main.withConfig({displayName:"about__Layout",componentId:"r5ghgc-0"})(["display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:200px 1fr;max-width:1100px;margin:auto;align-items:center;padding:50px 20px;gap:20px;@media (max-width:768px){grid-template-columns:repeat(2,1fr);grid-auto-rows:150px 1fr 1fr;}"]),u=a.ZP.div.withConfig({displayName:"about__HeadingContainer",componentId:"r5ghgc-1"})(["grid-column:span 3;@media (max-width:768px){grid-column:span 2;}"]),d=a.ZP.div.withConfig({displayName:"about__ImageWrapper",componentId:"r5ghgc-2"})(["@media (max-width:768px){grid-column:span 2;}"]),s=a.ZP.div.withConfig({displayName:"about__TextContainer",componentId:"r5ghgc-3"})(["grid-column:span 2;"]),m=a.ZP.p.withConfig({displayName:"about__Text",componentId:"r5ghgc-4"})(["font-size:1.8rem;line-height:2.8rem;overflow:auto;"]);function f(){return r.createElement(r.Fragment,null,r.createElement(c.Z,{title:"About",keywords:["about","information"]}),r.createElement(o.Z,null),r.createElement(l,null,r.createElement(u,null,r.createElement("h1",null,"About Me")),r.createElement(d,null,r.createElement(i.S,{src:"../images/about/me.JPG",alt:"Picture of Stephen Hwang",__imageData:n(7360)})),r.createElement(s,null,r.createElement(m,null,"Hello, I am a 4th year Computer Science student at the University of Waterloo ",r.createElement("strong",null,"currently looking for a 2021 fall Internship"),". As a developer I love to do all things coding, from fullstack development to machine learning!",r.createElement("br",null),r.createElement("br",null),"Besides software, I enjoy all forms of food-tainment, from Kitchen Nightmares to YouTube cooking channels. Unsurprisingly, my two favourite movies are Ratatouille and Chef!"))))}}}]);
//# sourceMappingURL=component---src-pages-about-js-6ab9091d706d0045372f.js.map