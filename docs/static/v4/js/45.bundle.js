(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1093:function(t,e){t.exports="<hr> <p>title: Timer componentid: component-timer variantid: default guid: &quot;timer-guid-default-component-react&quot;</p> <hr> <h2 id=element-name>Element name</h2> <pre><code class=language-javascript>Name: Timer Component\nComponent: &quot;Timer&quot;\nSelector: &quot;&lt;Timer/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/Timer&quot;\nType: Other Component</code></pre> <h2 id=element-information>Element information</h2> <p>The component name is <code>Timer</code> and the selector is <code>&lt;Timer/&gt;</code>, it will support count down for hrs, mins and seconds.</p> <h2 id=basic-use>Basic use</h2> <pre><code class=language-html>&lt;Timer duration={90000} callback={() =&gt; { console.log(&quot;TIMER ENDED callback&quot;); }} /&gt;</code></pre> <h2 id=properties>Properties</h2> <p>These are the current available properties:</p> <table> <thead> <tr> <th>Property</th> <th>Type</th> <th>Description</th> </tr> </thead> <tbody><tr> <td>callback</td> <td><code>() =&gt; void</code></td> <td>This method will be triggered when timer reached ended</td> </tr> <tr> <td>className?</td> <td><code>string</code></td> <td>Custom class</td> </tr> <tr> <td>duration</td> <td><code>number</code></td> <td>Duration of timer in <code>Millisecond</code></td> </tr> <tr> <td>id?</td> <td><code>string</code></td> <td>Element id</td> </tr> </tbody></table> "},183:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(62),i=function(t){function e(e){var n=t.call(this,e)||this;return n.state={timer:"00:00"},n}return Object(r.c)(e,t),e.prototype.startInterval=function(t){var e=this;this.setState({timer:this.convertMStoTime(t)},(function(){e.clearInterval(),e.innerInterval=setInterval((function(){t>0&&(t-=1e3,e.setState({timer:e.convertMStoTime(t)},(function(){0===t&&(e.props.callback(),e.clearInterval())})))}),1e3)}))},e.prototype.clearInterval=function(){this.innerInterval&&(clearTimeout(this.innerInterval),this.innerInterval=null)},e.prototype.convertMStoTime=function(t){var e=new Date(t);return(e.getUTCHours()>0?e.getUTCHours()+":":"")+(e.getUTCMinutes()<10?"0"+e.getUTCMinutes():e.getUTCMinutes())+":"+(e.getUTCSeconds()<10?"0"+e.getUTCSeconds():e.getUTCSeconds())},e.prototype.componentDidMount=function(){null!==this.props.duration&&void 0!==this.props.duration&&this.startInterval(this.props.duration)},e.prototype.componentWillUnmount=function(){this.clearInterval()},e.prototype.componentDidUpdate=function(t){t.duration!==this.props.duration&&null!==this.props.duration&&void 0!==this.props.duration&&this.startInterval(this.props.duration)},e.prototype.render=function(){return o.createElement("div",{className:"custom-timer"+(this.props.className?" "+this.props.className:""),id:this.props.id},this.state.timer)},e}(o.Component),a=n(450),s=n.n(a),c=n(1093);e.default=function(){return o.createElement("div",{className:"route-template container"},o.createElement("div",{className:"info-holder"},o.createElement("div",{className:"info"},o.createElement("div",{className:"md-file"},o.createElement(s.a,{innerHTML:!0},c))),o.createElement("div",{className:"info"},o.createElement("h2",null,"Output"),o.createElement("p",null,"Here are sample outputs"),o.createElement("div",{className:"result"},o.createElement(i,{duration:9e5,callback:function(){console.log("TIMER ENDED callback")}})))))}}}]);