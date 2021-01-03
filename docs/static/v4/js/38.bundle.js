(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1079:function(e,t,o){var r=o(61),a=o(1080);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var d={insert:"head",singleton:!1};r(a,d);e.exports=a.locals||{}},1080:function(e,t,o){(t=o(54)(!1)).push([e.i,".form-group.text-area>.input-field>textarea.form-control{color:#333;border-color:#adadad;-webkit-transition:border 100ms;-o-transition:border 100ms;-moz-transition:border 100ms;transition:border 100ms}.form-group.text-area>.input-field>textarea.form-control:not(.resizable){resize:none}.form-group.text-area>.input-field>textarea.form-control:not(:disabled):hover{border-color:#41B0EE;background-color:#fff}.form-group.text-area>.input-field>textarea.form-control:not(:disabled):focus{border-color:#007AC7;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;background-color:#fff}.form-group.text-area>.input-field>textarea.form-control:not(:disabled):focus:active{border-color:#007AC7;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;background-color:#fff}.form-group.text-area>.input-field>.alert{opacity:0;margin:0;padding:0;background:transparent;max-height:0;border:none;-webkit-border-radius:0px;-moz-border-radius:0px;border-radius:0px;overflow:hidden;width:100%;-webkit-transition:opacity 200ms,padding 200ms,max-height 400ms;-o-transition:opacity 200ms,padding 200ms,max-height 400ms;-moz-transition:opacity 200ms,padding 200ms,max-height 400ms;transition:opacity 200ms,padding 200ms,max-height 400ms}.form-group.text-area>.input-field>.alert.alert-danger{color:#F03529}.form-group.text-area>.input-field.has-error>textarea.form-control{border-bottom:1px solid #F03529}.form-group.text-area>.input-field.has-error>textarea.form-control:hover,.form-group.text-area>.input-field.has-error>textarea.form-control:focus,.form-group.text-area>.input-field.has-error>textarea.form-control:focus:active{border-bottom:2px solid #F03529}.form-group.text-area>.input-field.has-error>.alert{opacity:1;padding-top:2px;max-height:100px}\n",""]),e.exports=t},1081:function(e,t){e.exports="<hr> <p>title: TextArea componentid: component-textarea variantid: default guid: &#39;textarea-guid-default-component-react&#39;</p> <hr> <h2 id=element-name>Element name</h2> <pre><code class=language-javascript>Name: TextArea Component\nComponent: &quot;TextArea&quot;\nSelector: &quot;&lt;TextArea/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/TextArea&quot;\nType: Form Component</code></pre> <h2 id=element-information>Element information</h2> <p>This React component is based on SEB Bootstrap style. Supports customization and configurations. The component name is <code>TextArea</code> and the selector is <code>&lt;TextArea/&gt;</code>.</p> <h2 id=basic-use>Basic use</h2> <pre><code class=language-html>&lt;TextArea\n    name=&quot;textArea&quot;\n    placeholder=&quot;Text Area Placeholder&quot;\n    value={this.state.textBoxValue}\n    cols={30}\n    rows={5}\n    onChange={(event) =&gt; { this.setState({ textBoxValue: event.target.value }); }}\n/&gt;</code></pre> <h2 id=properties>Properties</h2> <p>These are the current available properties:</p> <table> <thead> <tr> <th>Property</th> <th>Type</th> <th>Description</th> </tr> </thead> <tbody><tr> <td>className?</td> <td><code>string</code></td> <td>Custom class</td> </tr> <tr> <td>cols?</td> <td><code>number</code></td> <td>Jumber of cols</td> </tr> <tr> <td>disabled?</td> <td><code>boolean</code></td> <td>Disable textarea. (default: <code>false</code>)</td> </tr> <tr> <td>error?</td> <td><code>string</code></td> <td>Error text</td> </tr> <tr> <td>focus?</td> <td><code>boolean</code></td> <td>Enable autofocus. (default: <code>false</code>)</td> </tr> <tr> <td>id?</td> <td><code>string</code></td> <td>Element id</td> </tr> <tr> <td>label?</td> <td><code>string</code></td> <td>The small label on top of the textbox</td> </tr> <tr> <td>max?</td> <td><code>number</code></td> <td>Input max length</td> </tr> <tr> <td>name</td> <td><code>string</code></td> <td>Name string</td> </tr> <tr> <td>onBlur?</td> <td><code>(event: React.FocusEvent&lt;HTMLTextAreaElement&gt;) =&gt; void</code></td> <td>On <code>&#39;blur&#39;</code> event</td> </tr> <tr> <td>onChange</td> <td><code>(event: React.ChangeEvent&lt;HTMLTextAreaElement&gt;) =&gt; void</code></td> <td>On <code>&#39;change&#39;</code> event</td> </tr> <tr> <td>onFocus?</td> <td><code>(event: React.FocusEvent&lt;HTMLTextAreaElement&gt;) =&gt; void</code></td> <td>On <code>&#39;focus&#39;</code> event</td> </tr> <tr> <td>onKeyDown?</td> <td><code>(event: React.KeyboardEvent&lt;HTMLTextAreaElement&gt;) =&gt; void</code></td> <td>On <code>&#39;keydown&#39;</code> event</td> </tr> <tr> <td>onKeyPress?</td> <td><code>(event: React.KeyboardEvent&lt;HTMLTextAreaElement&gt;) =&gt; void</code></td> <td>On <code>&#39;keypress&#39;</code> event</td> </tr> <tr> <td>onKeyUp?</td> <td><code>(event: React.KeyboardEvent&lt;HTMLTextAreaElement&gt;) =&gt; void</code></td> <td>On <code>&#39;keyup&#39;</code> event</td> </tr> <tr> <td>placeholder?</td> <td><code>string</code></td> <td>Placeholder text</td> </tr> <tr> <td>readonly?</td> <td><code>boolean</code></td> <td>Make textatrea readonly. (default: <code>false</code>)</td> </tr> <tr> <td>reference?</td> <td><code>React.RefObject&lt;HTMLTextAreaElement&gt;</code></td> <td>React Ref obj</td> </tr> <tr> <td>resizable?</td> <td><code>boolean</code></td> <td>Disable textarea resize. (default: <code>true</code>)</td> </tr> <tr> <td>rows?</td> <td><code>number</code></td> <td>Number of rows</td> </tr> <tr> <td>value</td> <td><code>string</code></td> <td>Value string</td> </tr> </tbody></table> "},187:function(e,t,o){"use strict";o.r(t);var r=o(0),a=o(114),d=(o(1079),function(e){var t=r.useState(),o=t[0],d=t[1];return r.useEffect((function(){d(e.id?e.id:e.label?Object(a.randomId)("textarea-"):null)}),[e.id,e.label]),r.createElement("div",{className:"form-group text-area"+(e.className?" "+e.className:"")},r.createElement("div",{className:"input-field"+(e.error?" has-error":"")},e.label&&r.createElement("label",{className:"custom-label",htmlFor:o},e.label),r.createElement("textarea",{name:e.name,className:"form-control"+(e.resizable||void 0===e.resizable?" resizable":""),id:o,placeholder:e.placeholder,maxLength:e.max,autoFocus:e.focus,readOnly:e.readonly,disabled:e.disabled,cols:e.cols,rows:e.rows,onChange:e.onChange,onKeyDown:e.onKeyDown,onKeyUp:e.onKeyUp,onKeyPress:e.onKeyPress,onFocus:e.onFocus,onBlur:e.onBlur,value:e.value,ref:e.reference}),r.createElement("div",{className:"alert alert-danger"},e.error)))}),n=o(450),l=o.n(n),c=o(1081);t.default=function(){var e=r.useState(""),t=e[0],o=e[1],a=r.useState(""),n=a[0],s=a[1];return r.createElement("div",{className:"route-template container"},r.createElement("div",{className:"info-holder"},r.createElement("div",{className:"info"},r.createElement("div",{className:"md-file"},r.createElement(l.a,{innerHTML:!0},c))),r.createElement("div",{className:"info"},r.createElement("h2",null,"Output"),r.createElement("p",null,"Here is the basic bootstrap one:"),r.createElement("div",{className:"result"},r.createElement(d,{name:"textArea",label:"Textarea label",placeholder:"Text Area PlaceHolder",value:t,cols:30,rows:5,onChange:function(e){return o(e.target.value)}})),r.createElement("p",null,"Here is the input with error:"),r.createElement("div",{className:"result"},r.createElement(d,{name:"textInput",placeholder:"Text Area PlaceHolder",error:"error msg will be shown here",cols:30,rows:5,value:n,onChange:function(e){return s(e.target.value)}})))))}}}]);