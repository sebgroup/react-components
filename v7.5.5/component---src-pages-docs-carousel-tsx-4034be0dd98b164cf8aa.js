"use strict";(self.webpackChunkreact_components_docs=self.webpackChunkreact_components_docs||[]).push([[1351],{80018:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var a=t(27378),o=t(2634),i=t(87296),r=t(30808),s=t(75418),l=t(508),c=t.n(l),u=t(39275),d=t(4769),m=["active","size","parentId","onIndicatorClicked"],v=a.memo(a.forwardRef((function(e,n){var t=e.active,o=e.size,i=e.parentId,s=e.onIndicatorClicked,l=(0,r.Z)(e,m);return a.createElement("ol",Object.assign({},l,{ref:n,className:c()("carousel-indicators",l.className)}),(0,d.Z)(Array(o)).map((function(e,n){var o=t===n;return a.createElement("li",{key:n,className:c()({active:o}),"data-slide-to":n,"data-target":i?"#"+i:null,onClick:o?null:s},o&&a.createElement("span",{className:"sr-only"},"(Current)"))})))}))),p=a.memo((function(e){return a.createElement("ul",{className:"carousel-navs"},a.createElement("li",null,a.createElement("a",{className:"carousel-control-prev",href:"#"+e.parentId,role:"button",draggable:!1,"data-slide":"prev",onClick:e.onNavigate,onKeyUp:e.onNavigate},a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true","data-slide":"prev"}),a.createElement("span",{className:"sr-only"},e.previousText||"Previous"))),a.createElement("li",null,a.createElement("a",{className:"carousel-control-next",href:"#"+e.parentId,role:"button",draggable:!1,"data-slide":"next",onClick:e.onNavigate,onKeyUp:e.onNavigate},a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true","data-slide":"next"}),a.createElement("span",{className:"sr-only"},e.nextText||"Next"))))})),f=["afterChange","transitionDuration","transitionStyle","infinite","showIndicators","autoplay","autoplaySpeed"],h=a.forwardRef((function(e,n){var t=e.afterChange,o=e.transitionDuration,i=void 0===o?600:o,l=e.transitionStyle,d=void 0===l?"slide":l,m=e.infinite,h=void 0===m||m,g=e.showIndicators,b=e.autoplay,E=void 0!==b&&b,y=e.autoplaySpeed,w=void 0===y?5e3:y,T=(0,r.Z)(e,f),N=a.useState(0),C=N[0],S=N[1],k=a.useState("next"),M=k[0],R=k[1],I=a.useState("carousel"),x=I[0],D=I[1],L=a.useState(),A=L[0],H=L[1],P=(0,u.H)(n),j=a.useMemo((function(){return T.id||(0,s.k)("carousel-")}),[T.id]),V=a.useRef(!1),X=a.useRef(),z=a.Children.toArray(T.children).length,O=a.useCallback((function(e){var n=h||void 0===h;switch(e){case"prev":return 0===C?n?z-1:void 0:C-1;case"next":return C===z-1?n?0:void 0:C+1}}),[h,C,z]),F=a.useCallback((function(e,n){var t,a;e.cancelable&&e.preventDefault();var o=e.target;if(["mousedown","touchstart"].some((function(n){return n===e.type})))t=O(a=n);else{if("click"===e.type)a="LI"===o.tagName?Number(o.dataset.slideTo)>C?"next":"prev":o.dataset.slide;else switch(e.key.toLowerCase()){case"arrowleft":a="prev";break;case"arrowright":a="next";break;case"space":case" ":a=o.dataset.slide}t="LI"===o.tagName?Number(o.dataset.slideTo):O(a)}[a,t].every((function(e){return void 0!==e}))&&(a!==M&&R(a),t!==C&&S(t))}),[C,h,M,O]),Z=function(){E&&!V.current&&(X.current&&clearTimeout(X.current),X.current=setTimeout((function(){V.current||F(new MouseEvent("mousedown",{bubbles:!0}),"next")}),w))},W=a.useCallback((function(e){Z(),t&&t(e)}),[t,Z]),K=a.useCallback((function(e){e.persist();var n,t="touchstart"===e.type,a=t?e.touches.item(0).clientX:e.clientX,o=e.currentTarget.clientWidth,i=function(e){(n=t?e.touches.item(0).clientX:e.clientX)!==A&&H(n-a)};document.body.addEventListener(t?"touchmove":"mousemove",i),document.body.addEventListener(t?"touchend":"mouseup",(function r(){Math.abs(n-a)>o/4&&F(e,n-a<0?"next":"prev"),H(void 0),document.body.removeEventListener(t?"touchmove":"mousemove",i),document.body.removeEventListener(t?"touchend":"mouseup",r)})),t?T.onTouchStart&&T.onTouchStart(e):T.onMouseDown&&T.onMouseDown(e)}),[A,T.onTouchStart,T.onMouseDown,F,H]),_=function(e){switch(e.type){case"mouseenter":V.current=!0,T.onMouseEnter&&T.onMouseEnter(e);break;case"mouseleave":V.current=!1,Z(),T.onMouseLeave&&T.onMouseLeave(e)}};return a.useEffect((function(){return S(T.defaultValue||0)}),[T.defaultValue]),a.useEffect((function(){return D(c()("rc","carousel",{"carousel-fade":"fade"===d},T.className))}),[T.className,d]),a.useEffect((function(){return Z()}),[E]),a.useEffect((function(){return function(){X.current&&clearTimeout(X.current)}}),[]),a.createElement("section",Object.assign({},T,{ref:P,id:j,className:x,"aria-roledescription":"carousel","data-ride":"carousel",onMouseDown:K,onTouchStart:K,onMouseEnter:_,onMouseLeave:_}),a.createElement("ul",{className:"carousel-inner"},a.Children.map(T.children,(function(e,n){return a.isValidElement(e)?a.cloneElement(e,{"data-index-number":n,defaultChecked:C===n,nav:M,transitionDuration:i,afterTransition:W,translateX:"slide"===d&&C===n?A:void 0}):e}))),a.createElement(p,{onNavigate:F,parentId:j}),g&&a.createElement(v,{active:C,size:z,parentId:j,onIndicatorClicked:F}))})),g=["nav","transitionDuration","afterTransition","translateX"],b=a.memo(a.forwardRef((function(e,n){var t=e.nav,o=e.transitionDuration,i=e.afterTransition,s=e.translateX,l=(0,r.Z)(e,g),u=a.useState("carousel-item"),d=u[0],m=u[1],v=a.useState({}),p=v[0],f=v[1],h=a.useCallback((function(e){m(c()("carousel-item",{active:l.defaultChecked},l.className)),l.defaultChecked&&i&&(e.persist(),i(e)),"transitionend"===e.type?l.onTransitionEnd&&l.onTransitionEnd(e):l.onAnimationEnd&&l.onAnimationEnd(e)}),[l.defaultChecked,l.className,i,l.onTransitionEnd,l.onAnimationEnd]);return a.useEffect((function(){var e,n="next"===t?"left":"right";m(c()("carousel-item","carousel-item-"+n,((e={})["carousel-item-"+t]=l.defaultChecked,e),{active:!l.defaultChecked},l.className))}),[t,l.defaultChecked,l.className]),a.useEffect((function(){return m(c()("carousel-item",{active:l.defaultChecked},l.className))}),[]),a.useEffect((function(){var e=(o||600)+"ms",n=s&&l.defaultChecked?"translate3d("+s+"px, 0, 0)":null;f({transitionDuration:n?"0s":e,animationDuration:e,transform:n})}),[o,l.defaultChecked,s]),a.createElement("li",Object.assign({},l,{ref:n,className:d,style:p,role:"group","aria-roledescription":"slide",onTransitionEnd:h,onAnimationEnd:h}),l.children)}))),E=t(76045),y=t(91448),w=["/images/painting-1.jpg","/images/painting-2.jpg","/images/painting-3.jpg","/images/painting-4.jpg"],T=t(67839),N=[{key:"slide",label:"slide",value:"slide",additionalProps:{wrapperProps:{className:"d-inline-block"}}},{key:"fade",label:"fade",value:"fade",additionalProps:{wrapperProps:{className:"d-inline-block"}}}],C=function(){var e=(0,y.b)([{key:"controls",items:[{key:"autoplaySpeed",label:"autoplaySpeed",controlType:"Text",initialValue:2e3},{key:"transitionDuration",label:"transitionDuration",controlType:"Text",initialValue:500},{key:"infinite",label:"infinite",controlType:"Checkbox",initialValue:!1},{key:"autoplay",label:"autoplay",controlType:"Checkbox",initialValue:!1},{key:"showIndicators",label:"showIndicators",controlType:"Checkbox"},{key:"transitionStyle",label:"transitionStyle",controlType:"Radio",options:N,initialValue:N[0].value}]}]),n=e.renderForm,t=e.state.controls;return a.createElement(o.Z,{mainFile:T,example:a.createElement("div",{className:"w-100 d-flex justify-content-center"},a.createElement(h,{autoplaySpeed:t.autoplaySpeed,transitionDuration:t.transitionDuration,showIndicators:t.showIndicators,autoplay:t.autoplay,infinite:t.infinite,transitionStyle:t.transitionStyle,"aria-label":"Image gallery","aria-level":2},w.map((function(e,n){return a.createElement(b,{key:n,"aria-label":"image canvas "+(n+1),"aria-level":3},a.createElement(E.E,{src:(0,i.withPrefix)(e),responsive:!0,width:"100%",alt:"image "+(n+1)}))})))),code:'<Carousel>\n    <CarouselItem><Img type="div" src="first.jpg" /></CarouselItem>\n    <CarouselItem><Img type="div" src="second.jpg" /></CarouselItem>\n</Carousel>',controls:n()})}},76045:function(e,n,t){t.d(n,{E:function(){return l}});var a=t(30808),o=t(27378),i=t(508),r=t.n(i),s=["type","responsive","rounded","thumbnail","bgFixed","src","width","height","children"],l=o.memo(o.forwardRef((function(e,n){var t,i,l,c=e.type,u=e.responsive,d=e.rounded,m=e.thumbnail,v=e.bgFixed,p=e.src,f=e.width,h=e.height,g=e.children,b=(0,a.Z)(e,s),E=o.useState(),y=E[0],w=E[1],T=o.useState(),N=T[0],C=T[1],S=o.useCallback((function(e){if("div"===c&&e){var n=new Image;n.onload=function(e){var n=e.currentTarget;w(n.naturalWidth),C(n.naturalHeight),b.onLoad&&b.onLoad(e)},n.onerror=b.onError,n.src=e}}),[c,b.onLoad,b.onError]);return o.useEffect((function(){"div"===c&&S(p)}),[c,p]),"div"===c?o.createElement("div",Object.assign({role:"img"},b,{ref:n,className:r()("rc","img",{"img-fluid":u,"img-rounded":d,"img-thumbnail":m,"img-fixed":v},b.className),style:Object.assign({},b.style,{width:f||(null===(t=b.style)||void 0===t?void 0:t.width)||y,height:h||null!==(i=b.style)&&void 0!==i&&i.height||o.Children.toArray(g).length?"auto":u||m?"100%":N,backgroundImage:(null===(l=b.style)||void 0===l?void 0:l.backgroundImage)||"url("+p+")"})}),g):o.createElement("img",Object.assign({src:p,ref:n,width:f,height:h},b,{className:r()("rc","img",{"img-fluid":u,"img-rounded":d,"img-thumbnail":m},b.className)}))})))},39275:function(e,n,t){t.d(n,{H:function(){return a.H},b:function(){return o.b}});var a=t(74118),o=t(91448)},67839:function(e,n,t){t.r(n),n.default='import { randomId } from "@sebgroup/frontend-tools/randomId";\nimport classnames from "classnames";\nimport React from "react";\nimport { useCombinedRefs } from "../hooks";\nimport "./carousel.scss";\nimport { CarouselIndicators } from "./CarouselIndicators";\nimport { AfterSlideEvent, CarouselItemProps } from "./CarouselItem";\nimport { CarouselNavs } from "./CarouselNavs";\n\nexport type CarouselProps = JSX.IntrinsicElements["div"] & {\n    /** Event handler triggered after change have happened to the carousel returning the index of the new active carousel slide */\n    afterChange?: (e: AfterSlideEvent) => void;\n    /** The duration (in milliseconds) it takes to transition from one slide to another. Default is `600` */\n    transitionDuration?: number;\n    /** Transition style. Supported styles: `slide` and `fade` */\n    transitionStyle?: "slide" | "fade";\n    /** Enables infinite scrolling */\n    infinite?: boolean;\n    /** Shows clickable indicators at the bottom */\n    showIndicators?: boolean;\n    /** The index of default active slide */\n    defaultValue?: number;\n    /** Enables autoplay slides */\n    autoplay?: boolean;\n    /** Autoplay speed in milliseconds. Default is `5000` */\n    autoplaySpeed?: number;\n};\n\nexport const defaultTransitionDuration: number = 600;\nexport const defaultAutoplaySpeed: number = 5000;\nexport type NavigationDirection = "next" | "prev";\ntype NavigateTrigger = React.MouseEvent<HTMLLIElement | HTMLAnchorElement | HTMLElement> | React.TouchEvent<HTMLElement> | React.KeyboardEvent<HTMLAnchorElement>;\ntype SwipeEvent = React.TouchEvent<HTMLElement> | React.MouseEvent<HTMLElement>;\n\nexport const Carousel: React.FC<CarouselProps> = React.forwardRef(\n    (\n        {\n            afterChange,\n            transitionDuration = defaultTransitionDuration,\n            transitionStyle = "slide",\n            infinite = true,\n            showIndicators,\n            autoplay = false,\n            autoplaySpeed = defaultAutoplaySpeed,\n            ...props\n        }: CarouselProps,\n        ref: React.ForwardedRef<HTMLDivElement>\n    ) => {\n        const [active, setActive] = React.useState<number>(0);\n        const [nav, setNav] = React.useState<NavigationDirection>("next");\n        const [className, setClassName] = React.useState<string>("carousel");\n        const [swipePos, setSwipePos] = React.useState<number>();\n        const carouselRef = useCombinedRefs<HTMLDivElement>(ref);\n        const id: string = React.useMemo(() => props.id || randomId("carousel-"), [props.id]);\n        const interrupted: React.MutableRefObject<boolean> = React.useRef<boolean>(false);\n        const timer: React.MutableRefObject<NodeJS.Timeout | number> = React.useRef<NodeJS.Timeout | number>();\n\n        const size: number = React.Children.toArray(props.children).length;\n\n        /** ----- Utilities ----- */\n\n        const findNewActive = React.useCallback(\n            (newNav: NavigationDirection): number => {\n                const isInfinite: boolean = infinite || infinite === undefined;\n                switch (newNav) {\n                    case "prev":\n                        return active === 0 ? (isInfinite ? size - 1 : undefined) : active - 1;\n                    case "next":\n                        return active === size - 1 ? (isInfinite ? 0 : undefined) : active + 1;\n                }\n            },\n            [infinite, active, size]\n        );\n\n        /**\n         * Handles navigating to a slide\n         * @param {NavigateTrigger} e Navigation trigger event\n         */\n        const goToSlide = React.useCallback(\n            (e: NavigateTrigger, slideTo?: NavigationDirection): void => {\n                e.cancelable && e.preventDefault();\n                let newActive: number;\n                let newNav: NavigationDirection;\n                const target: EventTarget & HTMLElement = e.target as any;\n                if (["mousedown", "touchstart"].some((val: string) => val === e.type)) {\n                    /** Swipe gesture */\n                    newNav = slideTo;\n                    newActive = findNewActive(newNav);\n                } else {\n                    if (e.type === "click") {\n                        newNav = target.tagName === "LI" ? (Number(target.dataset.slideTo) > active ? "next" : "prev") : (target.dataset.slide as NavigationDirection);\n                    } else {\n                        switch ((e as React.KeyboardEvent<HTMLAnchorElement>).key.toLowerCase()) {\n                            case "arrowleft":\n                                newNav = "prev";\n                                break;\n                            case "arrowright":\n                                newNav = "next";\n                                break;\n                            case "space":\n                            case " ":\n                                newNav = target.dataset.slide as NavigationDirection;\n                        }\n                    }\n                    newActive = target.tagName === "LI" ? Number(target.dataset.slideTo) : findNewActive(newNav);\n                }\n                if ([newNav, newActive].every((val) => val !== undefined)) {\n                    newNav !== nav && setNav(newNav);\n                    newActive !== active && setActive(newActive);\n                }\n            },\n            [active, infinite, nav, findNewActive]\n        );\n\n        const triggerAutoplay = (): void => {\n            if (autoplay && !interrupted.current) {\n                timer.current && clearTimeout(timer.current as number);\n\n                timer.current = setTimeout(() => {\n                    if (!interrupted.current) {\n                        goToSlide(new MouseEvent("mousedown", { bubbles: true }) as any, "next");\n                    }\n                }, autoplaySpeed);\n            }\n        };\n\n        /** ----- Event handlers ----- */\n        /** An event handler triggered after a transition has ended */\n        const afterTransition = React.useCallback(\n            (e: AfterSlideEvent): void => {\n                triggerAutoplay();\n                afterChange && afterChange(e);\n            },\n            [afterChange, triggerAutoplay]\n        );\n\n        /**\n         * Handles swipe events\n         * @param e Touch or mouse event\n         */\n        const handleSwipe = React.useCallback(\n            (e: SwipeEvent): void => {\n                e.persist();\n                const isTouch: boolean = e.type === "touchstart";\n                const startingPos: number = isTouch ? (e as React.TouchEvent).touches.item(0).clientX : (e as React.MouseEvent).clientX;\n                const parentWidth: number = e.currentTarget.clientWidth;\n                let xMovement: number;\n\n                const movementHandler: (ev: TouchEvent | MouseEvent) => void = (ev: TouchEvent | MouseEvent) => {\n                    xMovement = isTouch ? (ev as TouchEvent).touches.item(0).clientX : (ev as MouseEvent).clientX;\n                    if (xMovement !== swipePos) {\n                        setSwipePos(xMovement - startingPos);\n                    }\n                };\n\n                const endingHandler: VoidFunction = () => {\n                    if (Math.abs(xMovement - startingPos) > parentWidth / 4) {\n                        goToSlide(e, xMovement - startingPos < 0 ? "next" : "prev");\n                    }\n                    setSwipePos(undefined);\n                    document.body.removeEventListener(isTouch ? "touchmove" : "mousemove", movementHandler);\n                    document.body.removeEventListener(isTouch ? "touchend" : "mouseup", endingHandler);\n                };\n\n                document.body.addEventListener(isTouch ? "touchmove" : "mousemove", movementHandler);\n                document.body.addEventListener(isTouch ? "touchend" : "mouseup", endingHandler);\n                isTouch ? props.onTouchStart && props.onTouchStart(e as React.TouchEvent<HTMLDivElement>) : props.onMouseDown && props.onMouseDown(e as React.MouseEvent<HTMLDivElement>);\n            },\n            [swipePos, props.onTouchStart, props.onMouseDown, goToSlide, setSwipePos]\n        );\n\n        const interruptionHandler = (e: React.MouseEvent<HTMLDivElement>): void => {\n            switch (e.type as keyof HTMLElementEventMap) {\n                case "mouseenter":\n                    interrupted.current = true;\n                    props.onMouseEnter && props.onMouseEnter(e);\n                    break;\n                case "mouseleave":\n                    interrupted.current = false;\n                    triggerAutoplay();\n                    props.onMouseLeave && props.onMouseLeave(e);\n                    break;\n            }\n        };\n\n        /** ----- Effects ----- */\n        /** Sets the default value, if any. Otherwise default to the first item */\n        React.useEffect(() => setActive(props.defaultValue || 0), [props.defaultValue]);\n        /** Set class names */\n        React.useEffect(() => setClassName(classnames("rc", "carousel", { "carousel-fade": transitionStyle === "fade" }, props.className)), [props.className, transitionStyle]);\n        /** Triggers autoplay if enabled */\n        React.useEffect(() => triggerAutoplay(), [autoplay]);\n        /** Clearing timeout */\n        React.useEffect(() => {\n            return () => {\n                timer.current && clearTimeout(timer.current as number);\n            };\n        }, []);\n\n        return (\n            <section\n                {...props}\n                ref={carouselRef}\n                id={id}\n                className={className}\n                aria-roledescription="carousel"\n                data-ride="carousel"\n                onMouseDown={handleSwipe}\n                onTouchStart={handleSwipe}\n                onMouseEnter={interruptionHandler}\n                onMouseLeave={interruptionHandler}\n            >\n                <ul className="carousel-inner">\n                    {React.Children.map(props.children, (Child: React.ReactElement<CarouselItemProps>, i: number) =>\n                        React.isValidElement<CarouselItemProps>(Child)\n                            ? React.cloneElement<any>(Child, {\n                                  "data-index-number": i,\n                                  defaultChecked: active === i,\n                                  nav,\n                                  transitionDuration,\n                                  afterTransition,\n                                  translateX: transitionStyle === "slide" && active === i ? swipePos : undefined,\n                              })\n                            : Child\n                    )}\n                </ul>\n                <CarouselNavs onNavigate={goToSlide} parentId={id} />\n                {showIndicators && <CarouselIndicators active={active} size={size} parentId={id} onIndicatorClicked={goToSlide} />}\n            </section>\n        );\n    }\n);\n'}}]);
//# sourceMappingURL=component---src-pages-docs-carousel-tsx-4034be0dd98b164cf8aa.js.map