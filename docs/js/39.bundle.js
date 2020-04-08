(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1238:function(e,t,i){var r=i(64),a=i(1239);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var n={insert:"head",singleton:!1},o=(r(a,n),a.locals?a.locals:{});e.exports=o},1239:function(e,t,i){(t=i(56)(!1)).push([e.i,'.custom-timepicker{display:inline-block}.custom-timepicker>[class*="timepicker-"]{display:inline-block;position:relative;text-align:center;margin:0 2px}.custom-timepicker>[class*="timepicker-"] .timepicker-input{width:40px;display:inline-block;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;border:1px solid #fff;text-align:center;-webkit-appearance:none;appearance:none;-moz-appearance:textfield}.custom-timepicker>[class*="timepicker-"] .timepicker-input:active{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.custom-timepicker>[class*="timepicker-"] .timepicker-input::-webkit-inner-spin-button,.custom-timepicker>[class*="timepicker-"] .timepicker-input::-webkit-textfield-decoration-container{-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-timepicker>[class*="timepicker-"]>[class*="triangle-"]{cursor:pointer;border:1px solid #fff;position:relative;-webkit-transition:background-color 200ms, border 200ms;-o-transition:background-color 200ms, border 200ms;-moz-transition:background-color 200ms, border 200ms;transition:background-color 200ms, border 200ms}.custom-timepicker>[class*="timepicker-"]>[class*="triangle-"] svg{fill:#41B0EE;position:relative;width:30px;height:30px;-webkit-transition:color 200ms;-o-transition:color 200ms;-moz-transition:color 200ms;transition:color 200ms}.custom-timepicker>[class*="timepicker-"]>[class*="triangle-"] svg:hover{color:#007AC7}.custom-timepicker>[class*="timepicker-"]>[class*="triangle-"]:hover{background-color:#41B0EE;border:1px solid #41B0EE}.custom-timepicker>[class*="timepicker-"]>[class*="triangle-"]:hover svg{fill:#fff}.custom-timepicker>[class*="timepicker-"]>[class*="triangle-"]:active{background-color:#0092E1}.custom-timepicker>[class*="timepicker-"] .triangle-after svg{top:3px}.custom-timepicker>[class*="timepicker-"]:hover{outline:1px solid #41B0EE}.custom-timepicker>[class*="timepicker-"]:last-child .timepicker-input{background-color:#fff;color:#000;cursor:default}\n',""]),e.exports=t},1240:function(e,t){e.exports="<hr> <p>title: Timepicker componentid: component-timepicker variantid: default guid: &quot;timepicker-guid-default-component-react&quot;</p> <hr> <h2 id=element-name>Element name</h2> <pre><code class=language-javascript>Name: Timepicker Component\nComponent: &quot;Timepicker&quot;\nSelector: &quot;&lt;Timepicker/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/Timepicker&quot;\nType: Form Component</code></pre> <h2 id=element-information>Element information</h2> <p>This React component supports customization and configurations. The component name is <code>Timepicker</code> and the selector is <code>&lt;Timepicker/&gt;</code>.</p> <h2 id=basic-use>Basic use</h2> <pre><code class=language-html>&lt;Timepicker name=&quot;myTimepicker&quot; value={timerpickerValueObj} onChange={(newValue: TimepickerValue) =&gt; { this.setState({\ntimerpickerValue: { ...newValue } }); }} /&gt;</code></pre> <h2 id=properties>Properties</h2> <p>These are the current available properties:</p> <table> <thead> <tr> <th>Property</th> <th>Type</th> <th>Description</th> </tr> </thead> <tbody><tr> <td>className?</td> <td><code>string</code></td> <td>Custom class</td> </tr> <tr> <td>id?</td> <td><code>string</code></td> <td>Element id</td> </tr> <tr> <td>name</td> <td><code>string</code></td> <td>Element name</td> </tr> <tr> <td>onChange</td> <td><code>(value: TimepickerValue) =&gt; void</code></td> <td>Timepicker change event</td> </tr> <tr> <td>value</td> <td><code>TimepickerValue</code><sup>1</sup></td> <td>The value of the timepicker</td> </tr> </tbody></table> <h2 id=footnote>Footnote</h2> <ol> <li><code>value</code> has an exported interface named <code>TimepickerValue</code>:</li> </ol> <pre><code class=language-typescript>interface TimepickerValue {\n    hours: number;\n    minutes: number;\n    dayperiod: TimepickerDayperiodTypes;\n}</code></pre> <pre><code class=language-typescript>enum TimepickerDayperiodTypes {\n    AM = &quot;AM&quot;,\n    PM = &quot;PM&quot;,\n}</code></pre> "},201:function(e,t,i){"use strict";i.r(t);var r=i(0),a=i(65),n=(i(1238),r.createElement("svg",{name:"angle-up",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 512"},r.createElement("path",{d:"M136.5 185.1l116 117.8c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L128 224.7 27.6 326.9c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17l116-117.8c4.7-4.6 12.3-4.6 17 .1z"}))),o=r.createElement("svg",{name:"angle-down",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 512"},r.createElement("path",{d:"M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"})),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(a.b)(t,e),t.prototype.handleClick=function(e,t,i){var r=Object(a.a)({},i);switch(e){case"HOURS":var n=i.hours;switch(t){case"INCREMENT":n=12===n?1:n+1;break;case"DECREMENT":n=1===n?12:n-1}r.hours=n;break;case"MINUTES":var o=i.minutes;switch(t){case"INCREMENT":o=59===o?0:o+1;break;case"DECREMENT":o=0===o?59:o-1}r.minutes=o;break;case"DAYPERIOD":var c=i.dayperiod;switch(c){case"AM":c="PM";break;case"PM":c="AM"}r.dayperiod=c}return r},t.prototype.handleChange=function(e,t,i){var r=Object(a.a)({},i);if("number"==typeof t){switch(e){case"HOURS":var n=void 0;n=t>12?12:t<1?1:t,r.hours=n;break;case"MINUTES":var o=void 0;o=t>59?59:t<0?0:t,r.minutes=o}return r}return null},t.prototype.render=function(){var e=this;return r.createElement("div",{className:"custom-timepicker"+(this.props.className?" "+this.props.className:""),id:this.props.id},r.createElement("div",{className:"timepicker-hours"},r.createElement("div",{className:"triangle-before",onClick:function(){e.props.onChange(e.handleClick("HOURS","INCREMENT",e.props.value))}},n),r.createElement("input",{type:"number",name:this.props.name+"-hours",className:"timepicker-input",value:this.props.value.hours<10?"0"+this.props.value.hours:String(this.props.value.hours),onChange:function(t){e.props.onChange(e.handleChange("HOURS",Number(t.target.value),e.props.value))}}),r.createElement("div",{className:"triangle-after",onClick:function(){e.props.onChange(e.handleClick("HOURS","DECREMENT",e.props.value))}},o)),r.createElement("div",{className:"timepicker-minutes"},r.createElement("div",{className:"triangle-before",onClick:function(){e.props.onChange(e.handleClick("MINUTES","INCREMENT",e.props.value))}},n),r.createElement("input",{type:"number",name:this.props.name+"-minutes",className:"timepicker-input",value:this.props.value.minutes<10?"0"+this.props.value.minutes:String(this.props.value.minutes),onChange:function(t){e.props.onChange(e.handleChange("MINUTES",Number(t.target.value),e.props.value))}}),r.createElement("div",{className:"triangle-after",onClick:function(){e.props.onChange(e.handleClick("MINUTES","DECREMENT",e.props.value))}},o)),r.createElement("div",{className:"timepicker-dayperiod"},r.createElement("div",{className:"triangle-before",onClick:function(){e.props.onChange(e.handleClick("DAYPERIOD","INCREMENT",e.props.value))}},n),r.createElement("input",{type:"text",name:this.props.name+"-dayperiod",className:"timepicker-input",readOnly:!0,disabled:!0,value:this.props.value.dayperiod}),r.createElement("div",{className:"triangle-after",onClick:function(){e.props.onChange(e.handleClick("DAYPERIOD","DECREMENT",e.props.value))}},o)))},t}(r.Component),s=i(461),p=i.n(s),l=i(1240);t.default=function(){var e=r.useState({hours:10,minutes:0,dayperiod:"AM"}),t=e[0],i=e[1];return r.createElement("div",{className:"route-template container"},r.createElement("div",{className:"info-holder"},r.createElement("div",{className:"info"},r.createElement("div",{className:"md-file"},r.createElement(p.a,{innerHTML:!0},l))),r.createElement("div",{className:"info"},r.createElement("h2",null,"Output"),r.createElement("p",null,"Here are sample outputs"),r.createElement("div",{className:"result"},r.createElement(c,{value:t,onChange:function(e){return i(e)},name:"myTimepicker"})))))}}}]);