(self.webpackChunkreact_components_docs=self.webpackChunkreact_components_docs||[]).push([[9487],{66297:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var r=n(27378),a=n(2634),o=n(30808),i=n(508),s=n.n(i),l=(n(78177),n(40156)),d=["onSort","className","disabled"],c=["isActive","isDragging","className","disabled","children","uniqueKey","index","onDragStart","onDragOver","onDragEnd","onTransitionEnd","onMouseDown","onMouseUp","onTouchEnd","onTouchStart"],u=r.createElement("svg",{width:"10px",fill:"currentColor",height:"16px",viewBox:"0 0 10 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},r.createElement("g",{id:"Symbols",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},r.createElement("g",{id:"Group",fill:"currentColor"},r.createElement("circle",{id:"Oval",cx:"2",cy:"2",r:"2"}),r.createElement("circle",{id:"Oval-Copy-2",cx:"2",cy:"8",r:"2"}),r.createElement("circle",{id:"Oval-Copy-4",cx:"2",cy:"14",r:"2"}),r.createElement("circle",{id:"Oval-Copy",cx:"8",cy:"2",r:"2"}),r.createElement("circle",{id:"Oval-Copy-3",cx:"8",cy:"8",r:"2"}),r.createElement("circle",{id:"Oval-Copy-5",cx:"8",cy:"14",r:"2"})))),m=function(e){var t=e.onSort,n=e.className,a=e.disabled,i=(0,o.Z)(e,d),c=r.useRef(),u=r.useState([]),m=u[0],p=u[1],h=r.useState(m),f=h[0],v=h[1],b=r.useState(null),I=b[0],y=b[1],E=r.useState(null),D=E[0],_=E[1],S=r.useState({x:0,y:0}),x=S[0],w=S[1],T=r.useState(null),O=T[0],C=T[1],R=r.useState(!1),L=R[0],N=R[1],M=r.useState(!1),P=M[0],H=M[1],k=r.useState(null),A=k[0],K=k[1],q=r.useState(null),B=q[0],X=q[1],W=function(e,t){var n=e.target.closest(".sortable-item-wrapper"),r=e.touches?e.touches[0]:e;w({x:r.pageX-n.getBoundingClientRect().left,y:r.pageY-n.getBoundingClientRect().top}),_(t),y(n)},U=r.useCallback((function(e){N((function(){var t=I.cloneNode(!0);return t.classList.remove("is-active"),t.classList.add("on-drag"),t.style.width=I.getBoundingClientRect().width+"px",t.style.height=I.getBoundingClientRect().height+"px",document.body.appendChild(t),e.dataTransfer.setDragImage(t,x.x,x.y),e.dataTransfer.effectAllowed="move",C(t),!0}))}),[I]),Y=r.useCallback((function(e,t){e.preventDefault(),e.dataTransfer.dropEffect="move";var n=I.getBoundingClientRect(),r=e.target.closest(".sortable-item-wrapper"),a=r.getBoundingClientRect(),o=e.clientY-x.y,i=o+n.height,s=a.top<=o,l=a.top-i;s&&(l=o-a.bottom);var d=Math.abs(l)/a.height>=.5&&!P&&-1===r.className.indexOf("on-drag");r.style.transform=null,d&&(H(!0),r.style.transform="translate3d(0, "+(s?"":"-")+r.offsetHeight+"px, 0)",X(r),K(t))}),[I,x,H,X,K]),j=r.useCallback((function(){B&&v((function(e){var t=e.slice(0);B.style.transform=null;var n=D,r=t.find((function(e,t){var r=e.uniqueKey;return n=t,r===m[D].uniqueKey}));return t[n]=t[A],t[A]=r,K(null),X(null),H(!1),t}))}),[B,A,v,K,X,H]),F=r.useCallback((function(e){N((function(){return e.preventDefault(),e.stopPropagation(),Array.from(c.current.children).forEach((function(e){e.style.transform=null})),_(null),y(null),t(f.map((function(e){return e.uniqueKey}))),p(f),null==O||O.remove(),!1}))}),[c,f,O,N,_,y,t,p]),G=r.useCallback((function(e,n,r){var a=m.slice(0),o=a[n];a[n]=a[e],a[e]=o,t(a.map((function(e){return e.uniqueKey}))),p(a),r.focus()}),[m]),Z=r.useCallback((function(e){var t,n=Number(null===(t=e.target.dataset)||void 0===t?void 0:t.index);switch(e.key){case l.s.Space:case l.s.Enter:_((function(e){return null===e?n:null}));break;case l.s.ArrowRight:case l.s.ArrowDown:e.preventDefault(),_((function(t){return null!==t&&n<m.length-1?(G(n,n+1,e.target.nextElementSibling),n):t}));break;case l.s.ArrowLeft:case l.s.ArrowUp:e.preventDefault(),_((function(t){return null!==t&&n>0?(G(n,n-1,e.target.previousElementSibling),n):t}))}}),[G,m]);return r.useEffect((function(){p((function(){var e=r.Children.toArray(i.children).filter((function(e){var t;return r.isValidElement(e)&&"SortableItem"===(null==e||null===(t=e.type)||void 0===t?void 0:t.displayName)})).map((function(e){var t=e.props;return{uniqueKey:t.uniqueKey,disabled:t.disabled}}));return 0===e.length&&console.warn("Please pass at least one SortableItem element to make SortableList works"),e}))}),[i.children]),r.useEffect((function(){v(m)}),[m]),r.createElement("div",{role:"application",className:s()("rc","sortable-list",n,{disabled:a})},r.createElement("div",Object.assign({},i,{className:"drop-container",tabIndex:0,role:"list",ref:c,onKeyDown:function(e){return Z(e)}}),(null===D?m:f).map((function(e,t){return r.createElement(g,{key:t,index:t,uniqueKey:e.uniqueKey,disabled:a||e.disabled,isActive:null!==D&&e===m[D],isDragging:L,className:"sortable-item-wrapper",onMouseDown:function(e){return W(e,t)},onTouchStart:function(e){return W(e,t)},onMouseUp:F,onTouchEnd:F,onDragStart:U,onDragOver:P?null:function(e){return Y(e,t)},onDragEnd:F,onTransitionEnd:j,"aria-grabbed":D===t},r.Children.map(i.children,(function(t){var n=t.props.uniqueKey,o=a||e.disabled;return e.uniqueKey===n&&r.isValidElement(t)?r.cloneElement(t,{disabled:o,"aria-disabled":o}):null})))}))))},g=function(e){var t=e.isActive,n=e.isDragging,a=e.className,i=e.disabled,l=e.children,d=e.uniqueKey,m=e.index,g=e.onDragStart,p=e.onDragOver,h=e.onDragEnd,f=e.onTransitionEnd,v=e.onMouseDown,b=e.onMouseUp,I=e.onTouchEnd,y=e.onTouchStart,E=(0,o.Z)(e,c);return r.createElement("div",Object.assign({},E,{tabIndex:0,role:"listitem",className:s()("rc","sortable-item-wrapper",a,{"is-active":t&&n,disabled:i}),"data-value":d,"data-index":m,onTransitionEnd:i?null:f,onDragOver:i?null:t?function(e){return e.preventDefault()}:p}),r.createElement("div",{className:"sort-item-content"},l),r.createElement("div",{className:"drag-icon",draggable:t&&!i,onMouseUp:n||i?null:b,onTouchEnd:n||i?null:I,onMouseDown:i?null:v,onTouchStart:i?null:y,onDragStart:t||!i?g:null,onDragEnd:n||!i?h:null},u))},p=["className","disabled","children","uniqueKey"],h=r.forwardRef((function(e,t){var n=e.className,a=e.disabled,i=e.children,l=(e.uniqueKey,(0,o.Z)(e,p));return r.createElement("div",Object.assign({},l,{ref:t,className:s()("rc","sortable-item",n)}),r.Children.map(i,(function(e){var t,n=a||(null===(t=e.props)||void 0===t?void 0:t.disabled);return r.isValidElement(e)?r.cloneElement(e,{disabled:n,"aria-disabled":n}):e})))}));h.displayName="SortableItem";var f=n(91448),v=n(32435),b=n(76442),I=function(){var e=r.useState(null),t=e[0],n=e[1],o=r.useState([{label:"Name",value:"1",checked:!1},{label:"Age",value:"2",checked:!1},{label:"Company",value:"3",checked:!1},{label:"Address",value:"4",checked:!1}]),i=o[0],s=o[1],l=(0,f.b)([{key:"controls",items:[{key:"disabled",label:"disabled",controlType:"Checkbox"},{key:"disabledItem",label:"disable one random item",controlType:"Checkbox"},{key:"simple",label:"simple usage",controlType:"Checkbox"}]}]),d=l.renderForm,c=l.state.controls;return r.useEffect((function(){n(c.disabledItem?Math.floor(Math.random()*(i.length-1-0+1))+0:null)}),[c.disabledItem]),r.createElement(a.Z,{mainFile:b,example:r.createElement("div",{className:"w-100 d-flex justify-content-center"},r.createElement(m,{disabled:!!c.disabled,onSort:function(e){return s((function(t){return t.sort((function(t,n){return e.indexOf(t.value)-e.indexOf(n.value)}))}))}},i.map((function(e,n){return r.createElement(h,{key:n,uniqueKey:e.value,disabled:n===t},c.simple?e.label:r.createElement(v.X,{name:"test",value:e.value,checked:e.checked,onChange:function(t){s((function(n){return n.map((function(n){return Object.assign({},n,{checked:e.value===n.value?t.target.checked:n.checked})}))}))}},e.label))})))),code:'<SortableList>\n    <SortableItem uniqueKey="item1">item 1</SortableItem>\n    <SortableItem uniqueKey="item2">item 2</SortableItem>\n    <SortableItem uniqueKey="item3" disabled>item 3</SortableItem>\n</SortableList>',controls:r.createElement(r.Fragment,null,d())})}},78177:function(e,t,n){n(40205),n(40205);var r,a="undefined"!=typeof document?document:null,o="undefined"!=typeof navigator?navigator:null;!function(e){"use strict";var t=function(){function e(){this._dropEffect="move",this._effectAllowed="all",this._data={}}return Object.defineProperty(e.prototype,"dropEffect",{get:function(){return this._dropEffect},set:function(e){this._dropEffect=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"effectAllowed",{get:function(){return this._effectAllowed},set:function(e){this._effectAllowed=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"types",{get:function(){return Object.keys(this._data)},enumerable:!0,configurable:!0}),e.prototype.clearData=function(e){null!=e?delete this._data[e.toLowerCase()]:this._data={}},e.prototype.getData=function(e){return this._data[e.toLowerCase()]||""},e.prototype.setData=function(e,t){this._data[e.toLowerCase()]=t},e.prototype.setDragImage=function(e,t,r){var a=n._instance;a._imgCustom=e,a._imgOffset={x:t,y:r}},e}();e.DataTransfer=t;var n=function(){function e(){if(this._lastClick=0,e._instance)throw"DragDropTouch instance already created.";var t=!1;if(null==a||a.addEventListener("test",(function(){}),{get passive(){return t=!0,!0}}),null!=o&&o.maxTouchPoints){var n=a,r=this._touchstart.bind(this),i=this._touchmove.bind(this),s=this._touchend.bind(this),l=!!t&&{passive:!1,capture:!1};n.addEventListener("touchstart",r,l),n.addEventListener("touchmove",i,l),n.addEventListener("touchend",s),n.addEventListener("touchcancel",s)}}return e.getInstance=function(){return e._instance},e.prototype._touchstart=function(t){var n=this;if(this._shouldHandle(t)){if(Date.now()-this._lastClick<e._DBLCLICK&&this._dispatchEvent(t,"dblclick",t.target))return t.preventDefault(),void this._reset();this._reset();var r=this._closestDraggable(t.target);r&&(this._dispatchEvent(t,"mousemove",t.target)||this._dispatchEvent(t,"mousedown",t.target)||(this._dragSource=r,this._ptDown=this._getPoint(t),this._lastTouch=t,t.preventDefault(),setTimeout((function(){n._dragSource==r&&null==n._img&&n._dispatchEvent(t,"contextmenu",r)&&n._reset()}),e._CTXMENU),e._ISPRESSHOLDMODE&&(this._pressHoldInterval=setTimeout((function(){n._isDragEnabled=!0,n._touchmove(t)}),e._PRESSHOLDAWAIT))))}},e.prototype._touchmove=function(e){if(this._shouldCancelPressHoldMove(e))this._reset();else if(this._shouldHandleMove(e)||this._shouldHandlePressHoldMove(e)){var t=this._getTarget(e);if(this._dispatchEvent(e,"mousemove",t))return this._lastTouch=e,void e.preventDefault();this._dragSource&&!this._img&&this._shouldStartDragging(e)&&(this._dispatchEvent(e,"dragstart",this._dragSource),this._createImage(e),this._dispatchEvent(e,"dragenter",t)),this._img&&(this._lastTouch=e,e.preventDefault(),this._dispatchEvent(e,"drag",this._dragSource),t!=this._lastTarget&&(this._dispatchEvent(this._lastTouch,"dragleave",this._lastTarget),this._dispatchEvent(e,"dragenter",t),this._lastTarget=t),this._moveImage(e),this._isDropZone=this._dispatchEvent(e,"dragover",t))}},e.prototype._touchend=function(e){if(this._shouldHandle(e)){if(this._dispatchEvent(this._lastTouch,"mouseup",e.target))return void e.preventDefault();this._img||(this._dragSource=null,this._dispatchEvent(this._lastTouch,"click",e.target),this._lastClick=Date.now()),this._destroyImage(),this._dragSource&&(e.type.indexOf("cancel")<0&&this._isDropZone&&this._dispatchEvent(this._lastTouch,"drop",this._lastTarget),this._dispatchEvent(this._lastTouch,"dragend",this._dragSource),this._reset())}},e.prototype._shouldHandle=function(e){return e&&!e.defaultPrevented&&e.touches&&e.touches.length<2},e.prototype._shouldHandleMove=function(t){return!e._ISPRESSHOLDMODE&&this._shouldHandle(t)},e.prototype._shouldHandlePressHoldMove=function(t){return e._ISPRESSHOLDMODE&&this._isDragEnabled&&t&&t.touches&&t.touches.length},e.prototype._shouldCancelPressHoldMove=function(t){return e._ISPRESSHOLDMODE&&!this._isDragEnabled&&this._getDelta(t)>e._PRESSHOLDMARGIN},e.prototype._shouldStartDragging=function(t){var n=this._getDelta(t);return n>e._THRESHOLD||e._ISPRESSHOLDMODE&&n>=e._PRESSHOLDTHRESHOLD},e.prototype._reset=function(){this._destroyImage(),this._dragSource=null,this._lastTouch=null,this._lastTarget=null,this._ptDown=null,this._isDragEnabled=!1,this._isDropZone=!1,this._dataTransfer=new t,clearInterval(this._pressHoldInterval)},e.prototype._getPoint=function(e,t){return e&&e.touches&&(e=e.touches[0]),{x:t?e.pageX:e.clientX,y:t?e.pageY:e.clientY}},e.prototype._getDelta=function(t){if(e._ISPRESSHOLDMODE&&!this._ptDown)return 0;var n=this._getPoint(t);return Math.abs(n.x-this._ptDown.x)+Math.abs(n.y-this._ptDown.y)},e.prototype._getTarget=function(e){for(var t=this._getPoint(e),n=null==a?void 0:a.elementFromPoint(t.x,t.y);n&&"none"==getComputedStyle(n).pointerEvents;)n=n.parentElement;return n},e.prototype._createImage=function(t){this._img&&this._destroyImage();var n=this._imgCustom||this._dragSource;if(this._img=n.cloneNode(!0),this._copyStyle(n,this._img),this._img.style.top=this._img.style.left="-9999px",!this._imgCustom){var r=n.getBoundingClientRect(),o=this._getPoint(t);this._imgOffset={x:o.x-r.left,y:o.y-r.top},this._img.style.opacity=e._OPACITY.toString()}this._moveImage(t),null==a||a.body.appendChild(this._img)},e.prototype._destroyImage=function(){this._img&&this._img.parentElement&&this._img.parentElement.removeChild(this._img),this._img=null,this._imgCustom=null},e.prototype._moveImage=function(e){var t=this;requestAnimationFrame((function(){if(t._img){var n=t._getPoint(e,!0),r=t._img.style;r.position="absolute",r.pointerEvents="none",r.zIndex="999999",r.left=Math.round(n.x-t._imgOffset.x)+"px",r.top=Math.round(n.y-t._imgOffset.y)+"px"}}))},e.prototype._copyProps=function(e,t,n){for(var r=0;r<n.length;r++){var a=n[r];e[a]=t[a]}},e.prototype._copyStyle=function(t,n){if(e._rmvAtts.forEach((function(e){n.removeAttribute(e)})),t instanceof HTMLCanvasElement){var r=t,a=n;a.width=r.width,a.height=r.height,a.getContext("2d").drawImage(r,0,0)}for(var o=getComputedStyle(t),i=0;i<o.length;i++){var s=o[i];s.indexOf("transition")<0&&(n.style[s]=o[s])}n.style.pointerEvents="none";for(i=0;i<t.children.length;i++)this._copyStyle(t.children[i],n.children[i])},e.prototype._dispatchEvent=function(t,n,r){if(t&&r){var o=null==a?void 0:a.createEvent("Event"),i=t.touches?t.touches[0]:t;return o.initEvent(n,!0,!0),o.button=0,o.which=o.buttons=1,this._copyProps(o,t,e._kbdProps),this._copyProps(o,i,e._ptProps),o.dataTransfer=this._dataTransfer,r.dispatchEvent(o),o.defaultPrevented}return!1},e.prototype._closestDraggable=function(e){for(;e;e=e.parentElement)if(e.hasAttribute("draggable")&&e.draggable)return e;return null},e}();n._instance=new n,n._THRESHOLD=5,n._OPACITY=.5,n._DBLCLICK=500,n._CTXMENU=900,n._ISPRESSHOLDMODE=!1,n._PRESSHOLDAWAIT=400,n._PRESSHOLDMARGIN=25,n._PRESSHOLDTHRESHOLD=0,n._rmvAtts="id,class,style,draggable".split(","),n._kbdProps="altKey,ctrlKey,metaKey,shiftKey".split(","),n._ptProps="pageX,pageY,clientX,clientY,screenX,screenY,offsetX,offsetY".split(","),e.DragDropTouch=n}(r||(r={}))},76442:function(e,t,n){"use strict";n.r(t),t.default='import React from "react";\nimport classnames from "classnames";\nimport { SortableItemProps } from "./SortableItem";\nimport "./dragtouch.polyfills";\nimport "./sortable-list.scss";\nimport { Key } from "../utils";\n\nconst dragAndDropIcon: JSX.Element = (\n    <svg width="10px" fill="currentColor" height="16px" viewBox="0 0 10 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">\n        <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">\n            <g id="Group" fill="currentColor">\n                <circle id="Oval" cx="2" cy="2" r="2" />\n                <circle id="Oval-Copy-2" cx="2" cy="8" r="2" />\n                <circle id="Oval-Copy-4" cx="2" cy="14" r="2" />\n                <circle id="Oval-Copy" cx="8" cy="2" r="2" />\n                <circle id="Oval-Copy-3" cx="8" cy="8" r="2" />\n                <circle id="Oval-Copy-5" cx="8" cy="14" r="2" />\n            </g>\n        </g>\n    </svg>\n);\n\nexport type SortableListProps = JSX.IntrinsicElements["div"] & {\n    /** on sort callback */\n    onSort: (list: Array<string>) => void;\n    /** disable sorting */\n    disabled?: boolean;\n};\n\ntype PositionDelta = {\n    x: number;\n    y: number;\n};\n\ntype OrderItem = Pick<SortableItemWrapperProps, "disabled" | "uniqueKey">;\n\n/** The component allows for sorting list by drag and drop. */\nexport const SortableList: React.FC<SortableListProps> = ({ onSort, className, disabled, ...props }: React.PropsWithChildren<SortableListProps>) => {\n    const dragContainerRef = React.useRef<HTMLDivElement>();\n    const [defaultOrders, setDefaultOrders] = React.useState<OrderItem[]>([]);\n    const [draggingOrders, setDraggingOrders] = React.useState<OrderItem[]>(defaultOrders);\n    const [currentItemNode, setCurrentItemNode] = React.useState<HTMLDivElement>(null);\n    const [currentItemIndex, setCurrentItemIndex] = React.useState<number>(null);\n    const [delta, setDelta] = React.useState<PositionDelta>({ x: 0, y: 0 });\n    const [dragNode, setDragNode] = React.useState<HTMLElement>(null);\n    const [isDragging, setIsDragging] = React.useState<boolean>(false);\n    const [isTranslating, setIsTranslating] = React.useState<boolean>(false);\n    const [affectedIndex, setAffectedIndex] = React.useState<number>(null);\n    const [affectedNode, setAffectedNode] = React.useState<HTMLDivElement>(null);\n\n    /**\n     * when user clicks on sortable item, set initial delta and selected item\n     * @param event mouse event\n     * @param index selected index\n     */\n    const onMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>, index: number) => {\n        const itemParentNode: HTMLDivElement = (event.target as HTMLDivElement).closest(".sortable-item-wrapper");\n        const position: React.MouseEvent = ((event as React.TouchEvent).touches ? (event as React.TouchEvent).touches[0] : event) as React.MouseEvent;\n        setDelta({\n            x: position.pageX - itemParentNode.getBoundingClientRect().left,\n            y: position.pageY - itemParentNode.getBoundingClientRect().top,\n        });\n        setCurrentItemIndex(index);\n        setCurrentItemNode(itemParentNode);\n    };\n\n    /**\n     * on drag initiated, set the ghost item\n     * @param event drag event\n     */\n    const onDragStart = React.useCallback(\n        (event: React.DragEvent<HTMLDivElement>) => {\n            setIsDragging(() => {\n                const clonedNode: HTMLElement = currentItemNode.cloneNode(true) as HTMLElement;\n                clonedNode.classList.remove("is-active");\n                clonedNode.classList.add("on-drag");\n                clonedNode.style.width = `${currentItemNode.getBoundingClientRect().width}px`;\n                clonedNode.style.height = `${currentItemNode.getBoundingClientRect().height}px`;\n                document.body.appendChild(clonedNode);\n                event.dataTransfer.setDragImage(clonedNode, delta.x, delta.y);\n                event.dataTransfer.effectAllowed = "move";\n                setDragNode(clonedNode);\n                return true;\n            });\n        },\n        [currentItemNode]\n    );\n\n    /**\n     * when the dragged item is dragged over another sortable item, check if the overlapped element fulfills criteria to be swapped\n     * @param event drag event\n     * @param index overlapped index\n     */\n    const onDragOver = React.useCallback(\n        (event: React.DragEvent<HTMLDivElement>, index: number) => {\n            event.preventDefault(); // to prevent ghost image for reverting to original position\n            event.dataTransfer.dropEffect = "move";\n            const activeNodeRect: DOMRect = currentItemNode.getBoundingClientRect();\n            const itemParentNode: HTMLDivElement = (event.target as HTMLDivElement).closest(".sortable-item-wrapper");\n            const nodeRect: DOMRect = itemParentNode.getBoundingClientRect();\n            const ghostImagePositionTop: number = event.clientY - delta.y;\n            const ghostImagePositionBottom: number = ghostImagePositionTop + activeNodeRect.height; // get ghost image\'s actual position\n            const isAboveGhostImage: boolean = nodeRect.top <= ghostImagePositionTop;\n            let positionDifference: number = nodeRect.top - ghostImagePositionBottom;\n            if (isAboveGhostImage) {\n                positionDifference = ghostImagePositionTop - nodeRect.bottom;\n            }\n            const isHalfCoverage: boolean = Math.abs(positionDifference) / nodeRect.height >= 0.5; // only trigger swapping when overlapped coverage is more than 50%\n            const isOverlapped: boolean = isHalfCoverage && !isTranslating && itemParentNode.className.indexOf("on-drag") === -1;\n            itemParentNode.style.transform = null;\n            if (isOverlapped) {\n                // if the overlapped item fulfills criteria, initiate animation\n                setIsTranslating(true);\n                itemParentNode.style.transform = `translate3d(0, ${isAboveGhostImage ? "" : "-"}${itemParentNode.offsetHeight}px, 0)`;\n                setAffectedNode(itemParentNode);\n                setAffectedIndex(index);\n            }\n        },\n        [currentItemNode, delta, setIsTranslating, setAffectedNode, setAffectedIndex]\n    );\n\n    /** sort dragging order on transition end */\n    const onTransitionEnd = React.useCallback(() => {\n        if (affectedNode) {\n            setDraggingOrders((oldOrders: OrderItem[]) => {\n                const newList: OrderItem[] = oldOrders.slice(0);\n                affectedNode.style.transform = null;\n                let itemIndex: number = currentItemIndex;\n                const originalItem: OrderItem = newList.find(({ uniqueKey }: OrderItem, index: number) => {\n                    itemIndex = index;\n                    return uniqueKey === defaultOrders[currentItemIndex].uniqueKey;\n                });\n                newList[itemIndex] = newList[affectedIndex]; // swap overlapped\n                newList[affectedIndex] = originalItem;\n                setAffectedIndex(null);\n                setAffectedNode(null);\n                setIsTranslating(false);\n                return newList;\n            });\n        }\n    }, [affectedNode, affectedIndex, setDraggingOrders, setAffectedIndex, setAffectedNode, setIsTranslating]);\n\n    /**\n     * on drag end, remove appended ghost image and style, fire on sort callback\n     * @param event drag event\n     */\n    const onDragEnd = React.useCallback(\n        (event: React.DragEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {\n            setIsDragging(() => {\n                event.preventDefault(); // to prevent ghost image for reverting to original position\n                event.stopPropagation();\n                Array.from(dragContainerRef.current.children).forEach((element: HTMLElement) => {\n                    element.style.transform = null;\n                });\n                setCurrentItemIndex(null);\n                setCurrentItemNode(null);\n                onSort(draggingOrders.map(({ uniqueKey }: OrderItem) => uniqueKey));\n                setDefaultOrders(draggingOrders);\n                dragNode?.remove();\n                return false;\n            });\n        },\n        [dragContainerRef, draggingOrders, dragNode, setIsDragging, setCurrentItemIndex, setCurrentItemNode, onSort, setDefaultOrders]\n    );\n\n    const onItemSwap = React.useCallback(\n        (currentIndex: number, swapIndex: number, focusTarget: HTMLDivElement) => {\n            const newList: OrderItem[] = defaultOrders.slice(0);\n            const swapItem = newList[swapIndex];\n            newList[swapIndex] = newList[currentIndex]; // swap overlapped\n            newList[currentIndex] = swapItem;\n            onSort(newList.map(({ uniqueKey }: OrderItem) => uniqueKey));\n            setDefaultOrders(newList);\n            focusTarget.focus();\n        },\n        [defaultOrders]\n    );\n\n    const onKeyDown = React.useCallback(\n        (event: React.KeyboardEvent<HTMLDivElement>) => {\n            const selectedItemIndex: number = Number((event.target as HTMLDivElement).dataset?.index);\n            switch (event.key) {\n                case Key.Space:\n                case Key.Enter:\n                    setCurrentItemIndex((oldItemIndex: number) => (oldItemIndex === null ? selectedItemIndex : null));\n                    break;\n                case Key.ArrowRight:\n                case Key.ArrowDown:\n                    event.preventDefault();\n                    setCurrentItemIndex((oldItemIndex: number) => {\n                        if (oldItemIndex !== null && selectedItemIndex < defaultOrders.length - 1) {\n                            onItemSwap(selectedItemIndex, selectedItemIndex + 1, (event.target as HTMLDivElement).nextElementSibling as HTMLDivElement);\n                            return selectedItemIndex;\n                        }\n                        return oldItemIndex;\n                    });\n                    break;\n                case Key.ArrowLeft:\n                case Key.ArrowUp:\n                    event.preventDefault();\n                    setCurrentItemIndex((oldItemIndex: number) => {\n                        if (oldItemIndex !== null && selectedItemIndex > 0) {\n                            onItemSwap(selectedItemIndex, selectedItemIndex - 1, (event.target as HTMLDivElement).previousElementSibling as HTMLDivElement);\n                            return selectedItemIndex;\n                        }\n                        return oldItemIndex;\n                    });\n                    break;\n            }\n        },\n        [onItemSwap, defaultOrders]\n    );\n\n    React.useEffect(() => {\n        setDefaultOrders(() => {\n            const newOrderList: OrderItem[] = React.Children.toArray(props.children)\n                .filter((item: React.ReactChild) => React.isValidElement<React.FC<SortableItemProps>>(item) && (item?.type as any)?.displayName === "SortableItem")\n                .map(({ props }: React.ReactElement<SortableItemProps>) => ({ uniqueKey: props.uniqueKey, disabled: props.disabled }));\n            if (newOrderList.length === 0) {\n                console.warn("Please pass at least one SortableItem element to make SortableList works");\n            }\n            return newOrderList;\n        });\n    }, [props.children]);\n\n    React.useEffect(() => {\n        setDraggingOrders(defaultOrders);\n    }, [defaultOrders]);\n\n    return (\n        <div role="application" className={classnames("rc", "sortable-list", className, { disabled })}>\n            <div {...props} className="drop-container" tabIndex={0} role="list" ref={dragContainerRef} onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => onKeyDown(event)}>\n                {(currentItemIndex === null ? defaultOrders : draggingOrders).map((item: OrderItem, index: number) => (\n                    <SortableItemWrapper\n                        key={index}\n                        index={index}\n                        uniqueKey={item.uniqueKey}\n                        disabled={disabled || item.disabled}\n                        isActive={currentItemIndex !== null && item === defaultOrders[currentItemIndex]}\n                        isDragging={isDragging}\n                        className="sortable-item-wrapper"\n                        onMouseDown={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => onMouseDown(event, index)}\n                        onTouchStart={(event: React.TouchEvent<HTMLDivElement>) => onMouseDown(event, index)}\n                        onMouseUp={onDragEnd}\n                        onTouchEnd={onDragEnd}\n                        onDragStart={onDragStart}\n                        onDragOver={isTranslating ? null : (event: React.DragEvent<HTMLDivElement>) => onDragOver(event, index)}\n                        onDragEnd={onDragEnd}\n                        onTransitionEnd={onTransitionEnd}\n                        aria-grabbed={currentItemIndex === index}\n                    >\n                        {React.Children.map(props.children, (Child: React.ReactElement<SortableItemProps>) => {\n                            const { uniqueKey }: SortableItemProps = Child.props;\n                            const isDisabled: boolean = disabled || item.disabled;\n                            return item.uniqueKey === uniqueKey && React.isValidElement<React.FC<SortableItemProps>>(Child)\n                                ? React.cloneElement(Child, {\n                                      disabled: isDisabled,\n                                      "aria-disabled": isDisabled,\n                                  })\n                                : null;\n                        })}\n                    </SortableItemWrapper>\n                ))}\n            </div>\n        </div>\n    );\n};\n\ntype SortableItemWrapperProps = SortableItemProps &\n    JSX.IntrinsicElements["div"] & {\n        isActive?: boolean;\n        disabled?: boolean;\n        isDragging?: boolean;\n        index: number;\n    };\n\nconst SortableItemWrapper: React.FC<SortableItemWrapperProps> = ({\n    isActive,\n    isDragging,\n    className,\n    disabled,\n    children,\n    uniqueKey,\n    index,\n    onDragStart,\n    onDragOver,\n    onDragEnd,\n    onTransitionEnd,\n    onMouseDown,\n    onMouseUp,\n    onTouchEnd,\n    onTouchStart,\n    ...props\n}: React.PropsWithChildren<SortableItemWrapperProps>) => {\n    return (\n        <div\n            {...props}\n            tabIndex={0}\n            role="listitem"\n            className={classnames("rc", "sortable-item-wrapper", className, { "is-active": isActive && isDragging, disabled })}\n            data-value={uniqueKey}\n            data-index={index}\n            onTransitionEnd={disabled ? null : onTransitionEnd}\n            onDragOver={disabled ? null : isActive ? (event: React.DragEvent) => event.preventDefault() : onDragOver}\n        >\n            <div className="sort-item-content">{children}</div>\n            <div\n                className="drag-icon"\n                draggable={isActive && !disabled}\n                onMouseUp={isDragging || disabled ? null : onMouseUp}\n                onTouchEnd={isDragging || disabled ? null : onTouchEnd}\n                onMouseDown={disabled ? null : onMouseDown}\n                onTouchStart={disabled ? null : onTouchStart}\n                onDragStart={isActive || !disabled ? onDragStart : null}\n                onDragEnd={isDragging || !disabled ? onDragEnd : null}\n            >\n                {dragAndDropIcon}\n            </div>\n        </div>\n    );\n};\n'}}]);
//# sourceMappingURL=component---src-pages-docs-sortable-list-tsx-8b647577d5c41a90dda6.js.map