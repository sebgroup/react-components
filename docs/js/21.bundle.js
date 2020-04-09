(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1114:function(e,t,o){var a=o(61),n=o(1115);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var i={insert:"head",singleton:!1},r=(a(n,i),n.locals?n.locals:{});e.exports=r},1115:function(e,t,o){(t=o(54)(!1)).push([e.i,".form-group.custom-radio>.input-field .custom-control{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;height:100%;padding-left:0;height:44px}.form-group.custom-radio>.input-field .custom-control>.custom-control-label,.form-group.custom-radio>.input-field .custom-control>.custom-control-input{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.form-group.custom-radio>.input-field .custom-control>.custom-control-input:focus+label,.form-group.custom-radio>.input-field .custom-control>.custom-control-input:active+label{-webkit-box-shadow:inset 0 0 0 0.1rem rgba(65,176,238,0.5);-moz-box-shadow:inset 0 0 0 0.1rem rgba(65,176,238,0.5);box-shadow:inset 0 0 0 0.1rem rgba(65,176,238,0.5)}.form-group.custom-radio>.input-field .custom-control>.custom-control-input:disabled ~ .custom-control-label>.radio-description{color:#cecece}.form-group.custom-radio>.input-field .custom-control>.custom-control-input:not(:disabled){cursor:pointer}.form-group.custom-radio>.input-field .custom-control>.custom-control-input:not(:disabled) ~ .custom-control-label{cursor:pointer}.form-group.custom-radio>.input-field .custom-control>.custom-control-label{height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding-left:40px;padding-right:16px}.form-group.custom-radio>.input-field .custom-control>.custom-control-label:before,.form-group.custom-radio>.input-field .custom-control>.custom-control-label:after{left:12px;top:14px}.form-group.custom-radio>.input-field .custom-control>.custom-control-label:after{top:12px;left:10px;width:1.26rem;height:1.26rem}.form-group.custom-radio>.input-field .custom-control>.custom-control-label>.radio-description{color:#868686;display:inline-block;margin-left:8px}.form-group.custom-radio.inline{display:inline-block}.form-group.custom-radio.inline:not(:first-child)>.custom-control{margin-left:15px}.form-group.custom-radio.condensed{margin:0}\n",""]),e.exports=t},1116:function(e,t){e.exports="<hr> <p>title: Radio Button componentid: component-radiobutton variantid: default guid: &quot;radiobutton-guid-default-component-react&quot;</p> <hr> <h2 id=element-name>Element name</h2> <pre><code class=language-javascript>Name: Radio Button Component\nComponent: &quot;RadioButton&quot;\nSelector: &quot;&lt;RadioButton/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/RadioButton&quot;\nType: Form Component</code></pre> <h2 id=element-information>Element Information</h2> <p>This React component is based on SEB Bootstrap style. Supports customization and configurations. The component name is <code>RadioButton</code> and the selector is <code>&lt;RadioButton/&gt;</code>.</p> <h2 id=basic-use>Basic use</h2> <pre><code class=language-html>&lt;RadioButton group=&quot;radioGroupName&quot; radioValue=&quot;first&quot; label=&quot;Single radio - first value&quot;\nvalue={this.state.radioListSelected} onChange={(value) =&gt; { this.setState({ radioListSelected: value }) }} /&gt;</code></pre> <h2 id=properties>Properties</h2> <p>These are the current available properties:</p> <table> <thead> <tr> <th>Property</th> <th>Type</th> <th>Description</th> </tr> </thead> <tbody><tr> <td>className?</td> <td><code>string</code></td> <td>Custom class can be passed here</td> </tr> <tr> <td>condensed?</td> <td><code>boolean</code></td> <td>Condenses the element. Great for rendering them below each others</td> </tr> <tr> <td>description?</td> <td><code>string</code></td> <td>Optional extra description</td> </tr> <tr> <td>disabled?</td> <td><code>boolean</code></td> <td>Disable the radio button</td> </tr> <tr> <td>group?</td> <td><code>string</code></td> <td>The name of the group to group the radios together</td> </tr> <tr> <td>id?</td> <td><code>string</code></td> <td>The id property</td> </tr> <tr> <td>inline?</td> <td><code>boolean</code></td> <td>Display radio items inline</td> </tr> <tr> <td>label</td> <td><code>string</code></td> <td>The label</td> </tr> <tr> <td>name</td> <td><code>string</code></td> <td>The name property</td> </tr> <tr> <td>onChange</td> <td><code>(value: any, e?: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; void</code></td> <td>On change event</td> </tr> <tr> <td>radioValue</td> <td><code>any</code></td> <td>The value of the radiobtn, it can be string or number</td> </tr> <tr> <td>reference?</td> <td><code>React.RefObject&lt;any&gt;</code></td> <td>React Ref obj</td> </tr> <tr> <td>topLabel?</td> <td><code>string</code></td> <td>A label which shows on top of component</td> </tr> <tr> <td>value</td> <td><code>any</code></td> <td>Your state value, string or number</td> </tr> </tbody></table> "},191:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o(114),i=(o(1114),function(e){var t=a.useState("form-group custom-radio"),o=t[0],i=t[1],r=a.useState(""),l=r[0],d=r[1];return a.useEffect((function(){return d(e.id||Object(n.randomId)("radiobtn-"))}),[e.id]),a.useEffect((function(){var t="form-group custom-radio";t+=e.inline?" inline":"",t+=e.condensed?" condensed":"",t+=e.className?" "+e.className:"",i(t)}),[e.className,e.inline,e.condensed]),a.createElement("div",{className:o},a.createElement("div",{className:"input-field"},e.topLabel&&a.createElement("label",{htmlFor:l,className:"radio-toplabel"},e.topLabel),a.createElement("div",{className:"custom-control"},a.createElement("input",{className:"custom-control-input",type:"radio",value:e.value,name:e.name,id:l,checked:e.value===e.radioValue,disabled:e.disabled,onChange:function(t){e.onChange(e.radioValue,t)},ref:e.reference}),a.createElement("label",{className:"custom-control-label",htmlFor:l},e.label,e.description&&a.createElement("span",{className:"radio-description"},e.description)))))}),r=o(472),l=o(452),d=o.n(l),c=o(1116);t.default=function(){var e=a.useState("third"),t=e[0],o=e[1],n=a.useState(0),l=n[0],s=n[1];return a.createElement("div",{className:"route-template container"},a.createElement("div",{className:"info-holder"},a.createElement("div",{className:"info"},a.createElement("div",{className:"md-file"},a.createElement(d.a,{innerHTML:!0},c))),a.createElement("div",{className:"info"},a.createElement("h2",null,"Output"),a.createElement("p",null,"Here are sample outputs, here is selected value: ",t),a.createElement("div",{className:"result"+(2===l?" wide":"")},a.createElement(r.a,{activeTab:l,onClick:function(e){return s(e)},list:[{text:"Normal"},{text:"Condensed"},{text:"Inline"}]}),a.createElement(i,{name:"example",radioValue:"first",label:"First",value:t,onChange:function(e){return o(e)},condensed:1===l,inline:2===l}),a.createElement(i,{name:"example",radioValue:"second",label:"Second",value:t,onChange:function(e){return o(e)},condensed:1===l,inline:2===l,description:"Some description"}),a.createElement(i,{name:"example",radioValue:"third",label:"Third",value:t,onChange:function(e){return o(e)},disabled:!0,condensed:1===l,inline:2===l,description:"Disabled"})))))}},472:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var a=o(0),n=(o(473),function(e){var t=[];return a.createElement("div",{className:"custom-tabs"+(e.className?" "+e.className:""),id:e.id},a.createElement("ul",{className:"nav nav-tabs",role:"tablist","aria-label":"tabs"},e.list&&e.list.map((function(o,n){return a.createElement("li",{key:n,className:"nav-item"+(n===e.activeTab?" active":"")+(o.disabled?" disabled":"")},a.createElement("a",{className:"nav-link"+(n===e.activeTab?" active":"")+(o.disabled?" disabled":""),onClick:function(t){return function(t,o){e.onClick&&!e.list[o].disabled&&e.onClick(o)}(0,n)},onKeyDown:function(o){return function(o,a){if(e.activeTab<e.list.length&&e.activeTab>=0){var n=e.list[e.activeTab-1]&&!e.list[e.activeTab-1].disabled;if(("arrowleft"===o.key.toLowerCase()||"arrowdown"===o.key.toLowerCase())&&n&&e.onClick)(i=t[e.activeTab-1]).setAttribute("aria-selected","true"),i.setAttribute("tabIndex","0"),i.setAttribute("class","nav-link active"),i.focus(),e.onClick(e.activeTab-1);else if("arrowright"!==o.key.toLowerCase()&&"arrowup"!==o.key.toLowerCase()||e.list[e.activeTab+1].disabled||!e.onClick){if("enter"===o.key.toLowerCase()||" "===o.key||"space"===o.key.toLowerCase()){(i=t[a]).setAttribute("aria-selected","true"),i.setAttribute("tabIndex","0"),i.setAttribute("class","nav-link active"),i.focus(),e.onClick(a)}}else{var i;(i=t[e.activeTab+1]).setAttribute("aria-selected","true"),i.setAttribute("tabIndex","0"),i.setAttribute("class","nav-link active"),i.focus(),e.onClick(e.activeTab+1)}}}(o,n)},role:"tab","aria-selected":n===e.activeTab,"aria-controls":"link-"+o.text,ref:function(e){t[n]=e},tabIndex:0},o.text))}))))})},473:function(e,t,o){var a=o(61),n=o(474);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var i={insert:"head",singleton:!1},r=(a(n,i),n.locals?n.locals:{});e.exports=r},474:function(e,t,o){(t=o(54)(!1)).push([e.i,".custom-tabs .nav-tabs .nav-item:not(.active) .nav-link{color:#41B0EE;cursor:pointer}.custom-tabs .nav-tabs .nav-item.disabled .nav-link{cursor:default;color:#868686}\n",""]),e.exports=t}}]);