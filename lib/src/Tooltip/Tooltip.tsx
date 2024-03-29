import { randomId } from "@sebgroup/frontend-tools/randomId";
import classnames from "classnames";
import React from "react";
import { Overlay } from "./Overlay";
import "./tooltip.scss";
import { ElementPosition } from "./useOverlay";

const InfoCircleIcon: JSX.Element = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm16 400c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V80c0-8.822 7.178-16 16-16h352c8.822 0 16 7.178 16 16v352zm-192-92c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28zm7.67-24h-16c-6.627 0-12-5.373-12-12v-.381c0-70.343 77.44-63.619 77.44-107.408 0-20.016-17.761-40.211-57.44-40.211-29.144 0-44.265 9.649-59.211 28.692-3.908 4.98-11.054 5.995-16.248 2.376l-13.134-9.15c-5.625-3.919-6.86-11.771-2.645-17.177C153.658 133.514 178.842 116 223.67 116c52.32 0 97.44 29.751 97.44 80.211 0 67.414-77.44 63.849-77.44 107.408V304c0 6.627-5.373 12-12 12z" />
    </svg>
);

export type TooltipTrigger = "hover" | "click" | "focus";
export type TooltipTheme = "default" | "light" | "primary" | "warning" | "success" | "danger" | "purple";
export type TooltipPosition = ElementPosition;

export type TooltipProps = Omit<JSX.IntrinsicElements["div"], "ref"> & {
    /** Css style positions: top/bottom/left/right */
    position?: TooltipPosition;
    /** Based on SEB predefined colors */
    theme?: TooltipTheme;
    /** Tooltip content */
    content?: string | React.ReactNode;
    /** Tooltip trigger mode */
    trigger?: TooltipTrigger;
    /** Force tooltip to be at certain position */
    disableAutoPosition?: boolean;
    /** Force show tooltip */
    forceShow?: boolean;
    /** callback on tooltip visibility status change */
    onVisibleChange?: (event: React.MouseEvent<HTMLDivElement> | React.FocusEvent<HTMLElement> | React.TouchEvent<HTMLDivElement>, visible: boolean) => void;
    /** tooltip content wrapper props */
    tooltipWrapperProps?: JSX.IntrinsicElements["div"];
};

// This solution is meant to fix Gatsby build which complains that document and window doesn't exist in server-side rendering
const safeWindow: Window | null = typeof window !== "undefined" ? window : null;

const isMobile: boolean = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(safeWindow?.navigator?.userAgent);

export const Tooltip: React.FC<TooltipProps> = ({
    className,
    position,
    theme,
    content,
    trigger = "click",
    disableAutoPosition,
    forceShow,
    onVisibleChange,
    tooltipWrapperProps,
    id,
    ...props
}: TooltipProps) => {
    const containerRef: React.RefObject<HTMLDivElement> = React.useRef();
    const contentRef: React.RefObject<HTMLDivElement> = React.useRef();
    const [tooltipId, setTooltipId] = React.useState<string>(id);
    const [show, setShow] = React.useState<boolean>(false);

    /**
     * toggle tooltip
     * @param toggle boolean
     * @param e event triggering the changes
     */
    const onTooltipToggle = (e?: React.MouseEvent<HTMLDivElement> | React.FocusEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>, toggle?: boolean): void => {
        const isVisible: boolean = toggle !== undefined ? toggle : !show;
        setShow(isVisible);
        onVisibleChange && onVisibleChange(e, isVisible);
    };

    const onTouch = (e: React.TouchEvent<HTMLDivElement>, toggleOn: boolean) => {
        onTooltipToggle(e, toggleOn);
    };

    const onHover = (e: React.MouseEvent<HTMLDivElement>, toggleOn: boolean) => {
        onTooltipToggle(e, toggleOn);
    };

    const onMouseEnterEvent = (e: React.MouseEvent<HTMLDivElement>) => onHover(e, true);
    const onMouseLeaveEvent = (e: React.MouseEvent<HTMLDivElement>) => onHover(e, false);
    const onTouchStartEvent = (e: React.TouchEvent<HTMLDivElement>) => onTouch(e, true);
    const onTouchEndEvent = (e: React.TouchEvent<HTMLDivElement>) => onTouch(e, false);
    const onFocusEvent = (e: React.FocusEvent<HTMLDivElement>) => onTooltipToggle(e, true);
    const onBlurEvent = (e: React.FocusEvent<HTMLDivElement>) => onTooltipToggle(e, false);

    React.useEffect(() => {
        setTooltipId(id || randomId("rc-tooltip-"));
    }, [id]);

    return (
        <div {...props} className={classnames("tooltip-container", className)} id={tooltipId}>
            <div
                ref={containerRef}
                className={classnames("tooltip-reference", { cursor: trigger === "click" })}
                tabIndex={-1}
                onClick={trigger === "click" ? onTooltipToggle : null}
                onPointerOver={trigger === "hover" && !isMobile ? onMouseEnterEvent : null}
                onPointerOut={trigger === "hover" && !isMobile ? onMouseLeaveEvent : null}
                onTouchStart={trigger === "hover" && isMobile ? onTouchStartEvent : null}
                onTouchEnd={trigger === "hover" && isMobile ? onTouchEndEvent : null}
                onFocus={trigger === "focus" ? onFocusEvent : null}
                onBlur={trigger === "focus" ? onBlurEvent : null}
            >
                {props.children ? (
                    React.Children.count(props.children) === 1 ? (
                        React.Children.map(props.children, (Child: React.ReactElement) => {
                            return Object(Child) !== Child ? (
                                <span className="text-help" aria-describedby={tooltipId}>
                                    {Child}
                                </span>
                            ) : (
                                Child
                            );
                        })
                    ) : (
                        props.children
                    )
                ) : (
                    <div className="default-content" aria-describedby={tooltipId}>
                        {InfoCircleIcon}
                    </div>
                )}
            </div>
            <TooltipContentContainer
                {...tooltipWrapperProps}
                position={position}
                theme={theme}
                content={content}
                disableAutoPosition={disableAutoPosition}
                ref={contentRef}
                onContentBlur={(event: React.FocusEvent<HTMLDivElement>) => {
                    setShow(false);
                    onVisibleChange && onVisibleChange(event, false);
                }}
                show={show || forceShow}
                tooltipReference={() => containerRef.current}
            />
        </div>
    );
};

type TooltipContentContainerProps = JSX.IntrinsicElements["div"] &
    Pick<TooltipProps, "theme" | "position" | "content" | "disableAutoPosition"> & {
        show: boolean;
        tooltipReference: () => HTMLDivElement;
        onContentBlur: (event: React.FocusEvent<HTMLDivElement>) => void;
    };
const TooltipContentContainer: React.FC<TooltipContentContainerProps> = React.forwardRef(
    ({ show, tooltipReference, theme = "default", position, content, disableAutoPosition, onContentBlur, ...props }: TooltipContentContainerProps, forwardedRef: React.RefObject<HTMLDivElement>) => {
        return (
            <Overlay ref={forwardedRef} show={show} onBlur={onContentBlur} position={position} disableAutoPosition={disableAutoPosition} overlayReference={tooltipReference}>
                <div className={classnames(`tooltip`, theme, { show: show }, props.className)} role="tooltip" {...props}>
                    <div className="tooltip-arrow" />
                    <div className="tooltip-inner">{content}</div>
                </div>
            </Overlay>
        );
    }
);
