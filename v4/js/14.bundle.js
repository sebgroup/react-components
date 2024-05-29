(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1012:function(t,e){t.exports="<hr> <p>title: Chip componentid: component-chip variantid: default guid: &quot;chip-guid-default-component-react&quot;</p> <hr> <h2 id=element-name>Element name</h2> <pre><code class=language-javascript>Name: Datepicker Component\nComponent: &quot;Chip&quot;\nSelector: &quot;&lt;Chip/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/Chip&quot;\nType: UI Component</code></pre> <h2 id=basic-use>Basic use</h2> <pre><code class=language-html>&lt;Chip onClose=&quot;{closeHandler}&quot;&gt;\n    Say Something\n&lt;/Chip&gt;</code></pre> <h2 id=properties>Properties</h2> <p>These are the current available properties:</p> <table> <thead> <tr> <th>Property</th> <th>Type</th> <th>Description</th> </tr> </thead> <tbody><tr> <td>className?</td> <td><code>string</code></td> <td>Element class name</td> </tr> <tr> <td>id?</td> <td><code>string</code></td> <td>Element id</td> </tr> <tr> <td>onClose</td> <td><code>(e: React.MouseEvent&lt;HTMLDivElement&gt;) =&gt; void</code></td> <td>On close event</td> </tr> </tbody></table> "},166:function(t,e,n){"use strict";n.r(e);var o=n(62),i=n(0),l=n.n(i),a=n(628),r=n(450),s=n.n(r),b=n(452),c=n(668),d=n(1012),u=function(){return Object(c.loremIpsum)({units:"words",count:1})};e.default=function(){var t=l.a.useState([u()]),e=t[0],n=t[1],i=l.a.useCallback((function(t){var i=Object(o.f)(e);i.splice(t,1),n(i)}),[e,n]),r=l.a.useCallback((function(){n(Object(o.f)(e,[u()]))}),[e,n]);return l.a.createElement("div",{className:"route-template container"},l.a.createElement("div",{className:"info-holder"},l.a.createElement("div",{className:"info"},l.a.createElement("div",{className:"md-file"},l.a.createElement(s.a,{innerHTML:!0},d))),l.a.createElement("div",{className:"info"},l.a.createElement("h2",null,"Output"),l.a.createElement("div",{className:"result wide"},e.map((function(t,e){return l.a.createElement(a.a,{key:e,className:"m-2",onClose:function(){return i(e)}},t)}))),l.a.createElement("p",null,"Options"),l.a.createElement("div",{className:"row no-gutters"},l.a.createElement(b.a,{label:"Insert Chip",onClick:r})))))}},452:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n(0),i=(n(453),o.memo((function(t){var e=o.useState("btn"),n=e[0],i=e[1];return o.useEffect((function(){var e="btn";e+=t.size?" btn-"+t.size:"",e+=" btn-"+function(){switch(t.theme){case"anchor":return console.warn("WARNING: 'anchor' is deprecated and will be removed in future versions. Use 'link' instead."),"link";case"outline-primary":case"secondary":case"ghost-dark":case"ghost-light":case"danger":case"link":return t.theme;default:return"primary"}}(),t.icon&&(e+=t.iconPosition?" icon-"+t.iconPosition:" icon-left"),e+=t.className?" "+t.className:"",i(e)}),[t.theme,t.className,t.size,t.icon,t.iconPosition,t.size]),o.createElement("button",{id:t.id,name:t.name,type:t.type||"button",disabled:t.disabled,className:n,title:t.title,onClick:t.onClick},o.createElement("div",{className:"button-content"},"left"===t.iconPosition&&t.children,o.createElement("div",{className:"button-label"},t.label),t.icon&&o.createElement("div",{className:"svg-holder"},t.icon),("right"===t.iconPosition||!t.icon)&&t.children))})))},453:function(t,e,n){var o=n(61),i=n(454);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var l={insert:"head",singleton:!1};o(i,l);t.exports=i.locals||{}},454:function(t,e,n){(e=n(54)(!1)).push([t.i,"button.btn{position:relative;-webkit-transition:color 200ms linear, background 200ms linear;-o-transition:color 200ms linear, background 200ms linear;-moz-transition:color 200ms linear, background 200ms linear;transition:color 200ms linear, background 200ms linear;padding-top:0;padding-bottom:0}button.btn .button-content{position:relative;padding-top:0;padding-bottom:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}button.btn .button-content>.button-label{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}button.btn .button-content>.svg-holder{display:inline-block;width:18px;height:18px;overflow:hidden;line-height:0}button.btn .button-content>.svg-holder svg{width:100%;height:100%;-webkit-transition:fill 200ms linear;-o-transition:fill 200ms linear;-moz-transition:fill 200ms linear;transition:fill 200ms linear}button.btn:not(.btn-lg):not(.btn-sm){min-width:120px;min-height:42px}button.btn.btn-sm{min-width:75px;min-height:33px}button.btn.btn-sm>.button-content>.svg-holder{width:15px;height:15px}button.btn.btn-lg{min-width:140px;min-height:60px}button.btn.btn-lg>.button-content>.svg-holder{width:20px;height:20px}button.btn.btn-primary>.button-content>.svg-holder svg{fill:#fff}button.btn.btn-ghost-light{background-color:transparent}button.btn.btn-ghost-light:not(:disabled){color:#fff;border-color:#fff}button.btn.btn-ghost-light:not(:disabled)>.button-content>.svg-holder svg{fill:#fff}button.btn.btn-ghost-light:not(:disabled):hover,button.btn.btn-ghost-light:not(:disabled):active{color:#333;background-color:#fff}button.btn.btn-ghost-light:not(:disabled):hover>.button-content>.svg-holder svg,button.btn.btn-ghost-light:not(:disabled):active>.button-content>.svg-holder svg{fill:#333}button.btn.btn-ghost-light:disabled{border-color:rgba(255,255,255,0.35);color:rgba(255,255,255,0.35)}button.btn.btn-ghost-light:disabled>.button-content>.svg-holder svg{fill:rgba(255,255,255,0.35)}button.btn.btn-ghost-dark{background-color:transparent}button.btn.btn-ghost-dark:not(:disabled){color:#000;border-color:#000}button.btn.btn-ghost-dark:not(:disabled)>.button-content>.svg-holder svg{fill:#000}button.btn.btn-ghost-dark:not(:disabled):hover,button.btn.btn-ghost-dark:not(:disabled):active{color:#fff;background-color:#333}button.btn.btn-ghost-dark:not(:disabled):hover>.button-content>.svg-holder svg,button.btn.btn-ghost-dark:not(:disabled):active>.button-content>.svg-holder svg{fill:#fff}button.btn.btn-ghost-dark:disabled{border-color:rgba(0,0,0,0.35);color:rgba(0,0,0,0.35)}button.btn.btn-ghost-dark:disabled>.button-content>.svg-holder svg{fill:rgba(0,0,0,0.35)}button.btn.btn-outline-primary:not(:disabled)>.button-content>.svg-holder svg,button.btn.btn-secondary:not(:disabled)>.button-content>.svg-holder svg{fill:#007AC7}button.btn.btn-outline-primary:not(:disabled):hover>.button-content>.svg-holder svg,button.btn.btn-secondary:not(:disabled):hover>.button-content>.svg-holder svg{fill:#fff}button.btn.btn-outline-primary:disabled>.button-content>.svg-holder svg,button.btn.btn-secondary:disabled>.button-content>.svg-holder svg{fill:#adadad}button.btn.btn-danger:not(:disabled)>.button-content>.svg-holder svg{fill:#fff}button.btn.btn-danger:disabled>.button-content>.svg-holder svg{fill:#fff}button.btn.icon-left>.button-content{-ms-flex-direction:row-reverse;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;-moz-box-orient:horizontal;-moz-box-direction:reverse;flex-direction:row-reverse}button.btn.icon-left>.button-content>.svg-holder{margin-right:5px}button.btn.icon-right>.button-content>.svg-holder{margin-left:5px}\n",""]),t.exports=e},628:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n(0),i=n.n(o),l=(n(629),function(t){return i.a.createElement("div",{className:"custom-chip"+(t.className?" "+t.className:""),id:t.id},i.a.createElement("div",{className:"content"},t.children),i.a.createElement("div",{className:"chip-close",onClick:t.onClose},"×"))})},629:function(t,e,n){var o=n(61),i=n(630);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var l={insert:"head",singleton:!1};o(i,l);t.exports=i.locals||{}},630:function(t,e,n){(e=n(54)(!1)).push([t.i,".custom-chip{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background-color:#e9e9e9;height:32px;padding:0 8px;font-size:1rem}.custom-chip:hover{background-color:#f8f8f8}.custom-chip:hover>.chip-close{color:#F03529}.custom-chip>.chip-close{cursor:pointer;margin-left:8px;font-size:26px;display:inline-block;padding:0;line-height:0.9;position:relative;top:-3px}\n",""]),t.exports=e}}]);