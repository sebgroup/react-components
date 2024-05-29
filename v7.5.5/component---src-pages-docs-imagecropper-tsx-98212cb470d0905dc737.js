"use strict";(self.webpackChunkreact_components_docs=self.webpackChunkreact_components_docs||[]).push([[3119],{27550:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var o=n(27378),a=n(2634),r=n(30808),c=n(508),i=n.n(c),l=n(76166),s=["coordinates","position","handleResize"],m=function(e){var t,n=e.coordinates,a=e.position,c=e.handleResize,l=(0,r.Z)(e,s),m={top:a.includes("bottom")?n.bottom-10:n.top,left:a.includes("right")?n.right-10:n.left};return o.createElement("div",Object.assign({},l,{className:i()("handle",(t={},t[a]=a,t)),draggable:!1,onMouseDown:c,onTouchStart:c,style:m}))},u=function(e){return o.createElement("div",{className:"image-preview",style:{width:e.size,height:e.size}},o.createElement("div",{className:"preview"},e.image?o.createElement("img",{src:e.image,width:"100%"}):d,o.createElement("button",{type:"button",className:"select",onClick:e.onSelect},e.children||"Select image"),e.image&&o.createElement("button",{type:"button",className:"reset",onClick:e.onReset},"✕")))},d=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"60",fill:"currentColor"},o.createElement("path",{fillRule:"evenodd",d:"M14.5 3h-13a.5.5 0 0 0-.5.5v9c0 .013 0 .027.002.04V12l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094L15 9.499V3.5a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm4.502 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"}));n(40205);var p={x:0,y:0};function f(e){var t=p.x,n=p.y;if(e.type.includes("touch")){var o=e;o.touches&&o.touches[0]&&(t=o.touches[0].screenX,n=o.touches[0].screenY)}else{var a=e;t=a.screenX,n=a.screenY}var r=p.x?t-p.x:0,c=p.y?n-p.y:0;return p={x:t,y:n},{movementX:r,movementY:c}}function g(e,t){var n,o=[];switch(e.type){case"mousedown":n="mousemove",o=["mouseup","mouseleave"];break;case"touchstart":n="touchmove",o=["touchend"]}function a(){document.removeEventListener(n,t),o.forEach((function(e){document["on"+e]=null,p={x:0,y:0}})),document.onkeyup=null}n&&(document.addEventListener(n,t),o.forEach((function(e){document["on"+e]=a})),document.onkeyup=function(e){"Escape"===e.key&&a()})}var h=["onChange","value","size","text"],v=o.memo(o.forwardRef((function(e,t){var n=e.onChange,a=e.value,c=e.size,s=void 0===c?200:c,d=e.text,p=(0,r.Z)(e,h),v=o.useRef(),b=o.useRef(),R=o.useState(!1),E=R[0],x=R[1],C=o.useState(),y=C[0],k=C[1],z=o.useState(a),T=z[0],I=z[1],S=o.useState({top:0,left:0,bottom:180,right:180}),w=S[0],N=S[1],M=o.useCallback((function(e){(function(e){return new Promise((function(t,n){var o=e.target;if(o.value)if(o.files&&o.files[0]){var a=new FileReader;a.onload=function(e){t(e.target.result.toString())},a.readAsDataURL(o.files[0])}else n("No files found");else n("No value detected")}))})(e).then((function(e){k(e),x(!0)})).catch(console.error)}),[]),H=o.useCallback((function(e){g(e,(function(e){!function(e,t,n){var o=f(e),a=o.movementX,r=o.movementY;(a||r)&&n((function(e){var n=e.top+r,o=e.bottom+r,c=e.left+a,i=e.right+a,l=n>-1&&o<=t.clientHeight,s=c>-1&&i<=t.clientWidth;return{top:l?n:e.top,bottom:l?o:e.bottom,left:s?c:e.left,right:s?i:e.right}}))}(e,b.current,N)}))}),[]),P=o.useCallback((function(e){var t=e.target.className.replace("handle","").trim();g(e,(function(e){!function(e,t,n,o){var a,r=f(e),c=r.movementX,i=r.movementY;switch(t){case"top-right":o((function(e){return(a=Object.assign({},e,{right:e.right+c,top:e.top-c})).right<=n.clientWidth&&a.top>=0&&a.bottom-a.top>=20&&a.right-a.left>=20?a:e}));break;case"top-left":o((function(e){return(a=Object.assign({},e,{left:e.left+c,top:e.top+c})).left>=0&&a.top>=0&&a.bottom-a.top>=20&&a.right-a.left>=20?a:e}));break;case"bottom-left":o((function(e){return(a=Object.assign({},e,{bottom:e.bottom+i,left:e.left-i})).left>=0&&a.bottom<=n.clientHeight&&a.bottom-a.top>=20&&a.right-a.left>=20?a:e}));break;case"bottom-right":o((function(e){return(a=Object.assign({},e,{bottom:e.bottom+i,right:e.right+i})).right<=n.clientWidth&&a.bottom<=n.clientHeight&&a.bottom-a.top>=20&&a.right-a.left>=20?a:e}))}}(e,t,b.current,N)}))}),[]),L=o.useCallback((function(){I(null),k(null),v.current.value=v.current.files=null,n&&n(null)}),[p.onReset]);return o.useEffect((function(){return I(a)}),[a]),o.useEffect((function(){E&&N({top:0,left:0,bottom:180,right:180})}),[E]),o.createElement("div",Object.assign({},p,{ref:t,className:i()("rc","image-cropper",p.className)}),o.createElement("input",{type:"file",accept:"image/*",ref:v,onInput:M,hidden:!0}),o.createElement(u,{image:T,size:s,onReset:L,onSelect:function(){v.current.value=v.current.files=null,v.current.click()}},null==d?void 0:d.select),o.createElement(l.u,{toggle:E,size:"lg",className:"image-cropper-modal"},o.createElement("div",{className:"modal-body"},o.createElement("div",{className:"cropping-area"},o.createElement("img",{src:y,draggable:!1,ref:b}),o.createElement("img",{className:"crop-box",src:y,style:{clip:"rect("+w.top+"px, "+w.right+"px, "+w.bottom+"px, "+w.left+"px)"},draggable:!1,onMouseDown:H,onTouchStart:H}),o.createElement(m,{position:"top-left",coordinates:w,handleResize:P}),o.createElement(m,{position:"top-right",coordinates:w,handleResize:P}),o.createElement(m,{position:"bottom-left",coordinates:w,handleResize:P}),o.createElement(m,{position:"bottom-right",coordinates:w,handleResize:P}))),o.createElement("div",{className:"modal-footer"},o.createElement("div",null,o.createElement("button",{className:"btn btn-outline-primary cancel",onClick:function(){return x(!1)},type:"button"},(null==d?void 0:d.cancel)||"Cancel"),o.createElement("button",{className:"btn btn-primary ml-3",onClick:function(){var e,t,o,a,r,c;(e=y,t=w.left,o=w.top,a=w.right-w.left,r=w.bottom-w.top,c=b.current,new Promise((function(n){var i=new Image;i.onload=function(){var e=document.createElement("canvas"),l=Math.min(c.width,c.height);e.width=e.height=l;var s=i.width/c.width,m=i.height/c.height;e.getContext("2d").drawImage(i,t*s,o*m,a*s,r*m,0,0,l,l),n(e.toDataURL())},i.src=e}))).then((function(e){x(!1),n&&n(e)}))},type:"button"},(null==d?void 0:d.crop)||"Crop")))))}))),b=n(91448),R=n(90111),E=function(){var e=o.useState(""),t=e[0],n=e[1],r=(0,b.b)([{key:"controls",items:[{key:"size",label:"Size",description:"The size of the image cropper picker in pixels",controlType:"Text",initialValue:200},{key:"selectText",label:"Select text",description:"The text used for selecting an image",controlType:"Text",initialValue:""},{key:"cropText",label:"Crop text",description:"The text used for crop action",controlType:"Text",initialValue:""},{key:"cancelText",label:"Cancel text",description:"The text used to cancel the crop",controlType:"Text",initialValue:""}]}]),c=r.renderForm,i=r.state.controls,l=i.size,s=i.selectText,m=i.cropText,u=i.cancelText;return o.createElement(a.Z,{mainFile:R,example:o.createElement("div",{className:"d-flex flex-column align-items-center mx-auto"},o.createElement(v,{value:t,onChange:n,size:parseInt(l)||200,text:{select:s,crop:m,cancel:u}})),code:"<ImageCropper value={image} onChange={setImage} />",controls:c()})}},76166:function(e,t,n){n.d(t,{u:function(){return p}});var o=n(30808),a=n(508),r=n.n(a),c=n(27378),i=n(31542),l=n(39275),s=n(40156),m=["autoFocus","centered","size","fullscreen","onEscape","onBackdropDismiss","position","toggle"],u="input:not([type='hidden']), button, a",d="undefined"!=typeof document?document:null,p=c.memo(c.forwardRef((function(e,t){var n,a,p=e.autoFocus,f=void 0===p||p,g=e.centered,h=e.size,v=e.fullscreen,b=e.onEscape,R=e.onBackdropDismiss,E=e.position,x=e.toggle,C=(0,o.Z)(e,m),y=(0,l.H)(t),k=c.useRef(),z=c.useState(!0),T=z[0],I=z[1],S=c.useCallback((function(e){switch(e.key){case s.s.Escape:b&&b(e);break;case s.s.Tab:e.preventDefault(),e.stopPropagation();var t=Array.from(y.current.querySelectorAll(u)),n=t.length;if(n>0){var o,a=t.indexOf(document.activeElement);null===(o=t[(a+(e.shiftKey?-1:1)+n)%n])||void 0===o||o.focus()}}}),[y,b]);return c.useEffect((function(){return x&&(T&&I(!1),document.body.classList.add("modal-open")),function(){var e;document.body.classList.remove("modal-open"),null===(e=k.current)||void 0===e||e.focus(),k.current=void 0}}),[T,x]),d?(0,i.createPortal)(c.createElement("div",Object.assign({},C,{className:r()("rc","modal",(n={show:x,hide:!x&&!T,"modal-centered":g,"modal-aside":E&&"default"!==E&&!v},n["modal-aside-"+[E]]=E&&"default"!==E&&!v,n["modal-fullscreen"]=v,n),C.className),role:C.role||"dialog",tabIndex:C.tabIndex||-1,"aria-modal":"true",onClick:function(e){C.onClick&&C.onClick(e);var t=e.target;R&&t.classList.contains("rc")&&t.classList.contains("modal")&&R(e)},onAnimationEnd:function(e){var t;(e.stopPropagation(),C.onAnimationEnd&&C.onAnimationEnd(e),v&&x&&f&&!y.current.contains(document.activeElement))&&(k.current=document.activeElement,null===(t=y.current.querySelector(u))||void 0===t||t.focus())},onKeyDown:S}),c.createElement("div",{ref:y,role:"document",className:r()("modal-dialog",(a={},a["modal-"+h]=h,a)),onAnimationEnd:function(e){var t;(e.stopPropagation(),x&&f&&!y.current.contains(document.activeElement))&&(k.current=document.activeElement,null===(t=y.current.querySelector(u))||void 0===t||t.focus())}},c.createElement("div",{className:"modal-content"},C.children))),d.body):null})))},39275:function(e,t,n){n.d(t,{H:function(){return o.H},b:function(){return a.b}});var o=n(74118),a=n(91448)},90111:function(e,t,n){n.r(t),t.default='import React from "react";\nimport classnames from "classnames";\nimport { Modal } from "../Modal";\nimport { ResizeHandle } from "./ResizeHandle";\nimport { ImagePicker } from "./ImagePicker";\nimport { moveHandler, readImage, resizeHandler, Position, addListener, crop } from "./utils";\nimport "./image-cropper.scss";\n\ninterface ImageCropperText {\n    select?: string;\n    cancel?: string;\n    crop?: string;\n}\n\nexport type ImageCropperProps = Omit<JSX.IntrinsicElements["div"], "onChange"> & {\n    /** The image value as string */\n    value?: string;\n    /** On change handler fired when image has been cropped or reset */\n    onChange?: (image: string) => void;\n    /** The size of the image cropper picker */\n    size?: number;\n    /** Texts used in the image cropper */\n    text?: ImageCropperText;\n};\n\nexport interface ClipRect {\n    top: number;\n    right: number;\n    bottom: number;\n    left: number;\n}\n\nexport const ImageCropper: React.FC<ImageCropperProps> = React.memo(\n    React.forwardRef(({ onChange, value, size = 200, text, ...props }: ImageCropperProps, ref: React.ForwardedRef<HTMLDivElement>) => {\n        const fileRef: React.MutableRefObject<HTMLInputElement> = React.useRef<HTMLInputElement>();\n        const imgRef: React.MutableRefObject<HTMLImageElement> = React.useRef<HTMLImageElement>();\n        const [modalToggle, setModalToggle] = React.useState<boolean>(false);\n        const [imgSrc, setImgSrc] = React.useState<string>();\n        const [croppedImgSrc, setCroppedImgSrc] = React.useState<string>(value);\n        const [pos, setPos] = React.useState<ClipRect>({ top: 0, left: 0, bottom: 180, right: 180 });\n\n        /** Handles selecting a file */\n        const handleInput = React.useCallback((event: React.FormEvent<HTMLInputElement>) => {\n            readImage(event)\n                .then((val: string) => {\n                    setImgSrc(val);\n                    setModalToggle(true);\n                })\n                .catch(console.error);\n        }, []);\n\n        /** Handles dragging the cropbox */\n        const handleMove = React.useCallback((event: React.MouseEvent | React.TouchEvent) => {\n            addListener(event, (ev) => {\n                moveHandler(ev, imgRef.current, setPos);\n            });\n        }, []);\n\n        /** Handles resizing the cropbox */\n        const handleResize = React.useCallback((event: React.MouseEvent | React.TouchEvent) => {\n            const position: Position = (event.target as HTMLElement).className.replace("handle", "").trim() as Position;\n\n            addListener(event, (e: MouseEvent | TouchEvent) => {\n                resizeHandler(e, position, imgRef.current, setPos);\n            });\n        }, []);\n\n        /** Handles cropping the image to the cropbox */\n        const handleCrop = () => {\n            crop(imgSrc, pos.left, pos.top, pos.right - pos.left, pos.bottom - pos.top, imgRef.current).then((img: string) => {\n                setModalToggle(false);\n                onChange && onChange(img);\n            });\n        };\n\n        /** Resets the image cropper */\n        const reset = React.useCallback(() => {\n            setCroppedImgSrc(null);\n            setImgSrc(null);\n            fileRef.current.value = fileRef.current.files = null;\n            onChange && onChange(null);\n        }, [props.onReset]);\n\n        React.useEffect(() => setCroppedImgSrc(value), [value]);\n\n        React.useEffect(() => {\n            modalToggle && setPos({ top: 0, left: 0, bottom: 180, right: 180 });\n        }, [modalToggle]);\n\n        return (\n            <div {...props} ref={ref} className={classnames("rc", "image-cropper", props.className)}>\n                <input type="file" accept="image/*" ref={fileRef} onInput={handleInput} hidden />\n\n                <ImagePicker\n                    image={croppedImgSrc}\n                    size={size}\n                    onReset={reset}\n                    onSelect={() => {\n                        fileRef.current.value = fileRef.current.files = null;\n                        fileRef.current.click();\n                    }}\n                >\n                    {text?.select}\n                </ImagePicker>\n\n                <Modal toggle={modalToggle} size="lg" className="image-cropper-modal">\n                    <div className="modal-body">\n                        <div className="cropping-area">\n                            <img src={imgSrc} draggable={false} ref={imgRef} />\n                            <img\n                                className="crop-box"\n                                src={imgSrc}\n                                style={{ clip: `rect(${pos.top}px, ${pos.right}px, ${pos.bottom}px, ${pos.left}px)` }}\n                                draggable={false}\n                                onMouseDown={handleMove}\n                                onTouchStart={handleMove}\n                            />\n                            <ResizeHandle position="top-left" coordinates={pos} handleResize={handleResize} />\n                            <ResizeHandle position="top-right" coordinates={pos} handleResize={handleResize} />\n                            <ResizeHandle position="bottom-left" coordinates={pos} handleResize={handleResize} />\n                            <ResizeHandle position="bottom-right" coordinates={pos} handleResize={handleResize} />\n                        </div>\n                    </div>\n                    <div className="modal-footer">\n                        <div>\n                            <button className="btn btn-outline-primary cancel" onClick={() => setModalToggle(false)} type="button">\n                                {text?.cancel || "Cancel"}\n                            </button>\n                            <button className="btn btn-primary ml-3" onClick={handleCrop} type="button">\n                                {text?.crop || "Crop"}\n                            </button>\n                        </div>\n                    </div>\n                </Modal>\n            </div>\n        );\n    })\n);\n'}}]);
//# sourceMappingURL=component---src-pages-docs-imagecropper-tsx-98212cb470d0905dc737.js.map