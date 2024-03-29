import React from "react";
import { createPortal } from "react-dom";
import classnames from "classnames";
import "./notification.scss";

type CommonProps = JSX.IntrinsicElements["div"] & {
    /** Automatic dismissal timeout in milliseconds (default: `5000`) */
    dismissTimeout?: number;
    /** Callback when notification is dismissed */
    onDismiss?: (e: React.MouseEvent<HTMLButtonElement> | Event) => void;
    /** Persist notification until dismissed (default: `false`) */
    persist?: boolean;
    /** Notification theme */
    theme?: "purple" | "primary" | "danger" | "success" | "warning" | "inverted";
    /** Property sets whether the notification is toggled */
    toggle?: boolean;
    /** content wrapper props */
    contentWrapperProps?: JSX.IntrinsicElements["div"];
};

interface SlideNotification extends CommonProps {
    /** Notification type: `slide` */
    type?: "slide";
    /** Notification position: `bottom-left` | `bottom-right` | `top-left` | `top-right` */
    position?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
}

interface BarNotification extends CommonProps {
    /** Notification type: `bar` */
    type?: "bar";
    /** Notification position: `top` | `bottom` */
    position?: "top" | "bottom";
}

export type NotificationProps = SlideNotification | BarNotification;

// This solution is meant to fix Gatsby build which complains that document doesn't exist in server-side rendering
const safeDocument: Document | null = typeof document !== "undefined" ? document : null;

/** An alert which pops up on the page to inform the user of an event which occured and optionally provide actions to perform. */
export const Notification: React.FC<NotificationProps> = React.forwardRef(
    (
        { toggle, type = "slide", theme = "purple", position = "bottom-left", onDismiss, dismissTimeout = 5000, persist, contentWrapperProps = {}, ...props }: NotificationProps,
        ref: React.ForwardedRef<HTMLDivElement>
    ) => {
        const timerRef: React.MutableRefObject<any> = React.useRef();
        const [isAnimationEnded, setIsAnimationEnded] = React.useState<boolean>(false);
        const [disableAnimation, setDisableAnimation] = React.useState<boolean>(true);

        React.useEffect(() => {
            if (toggle) {
                disableAnimation && setDisableAnimation(false);
                if (!persist) {
                    timerRef.current = setTimeout(() => {
                        timerRef.current && onDismiss && onDismiss(new Event("dismiss"));
                        clearTimeout(timerRef.current);
                    }, dismissTimeout);
                }
            } else {
                clearTimeout(timerRef.current);
                setIsAnimationEnded(false);
            }
        }, [toggle]);

        React.useEffect(() => {
            persist && clearTimeout(timerRef.current);
        }, [persist]);

        return !safeDocument
            ? null
            : createPortal(
                  <div
                      {...props}
                      ref={ref}
                      className={classnames(
                          "rc",
                          "notification",
                          {
                              show: toggle,
                              hide: !toggle && !disableAnimation,
                              [`theme-${theme}`]: theme,
                              [`type-${type}`]: type,
                          },
                          position,
                          props.className
                      )}
                      onAnimationEnd={(e) => {
                          props.onAnimationEnd && props.onAnimationEnd(e);
                          !toggle && setDisableAnimation(true);
                          setIsAnimationEnded(toggle);
                      }}
                  >
                      <div {...contentWrapperProps} className={classnames(`content-wrapper`, { clickable: props.onClick, visible: isAnimationEnded })}>
                          {props.children}
                          <button className="close" onClick={onDismiss}></button>
                      </div>
                  </div>,
                  safeDocument.body
              );
    }
) as React.ForwardRefExoticComponent<React.PropsWithoutRef<SlideNotification & BarNotification> & React.RefAttributes<HTMLDivElement>>;
