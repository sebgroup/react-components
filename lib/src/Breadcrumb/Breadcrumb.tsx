import React from "react";
import classnames from "classnames";
import { BreadcrumbItemProps } from "./BreadcrumbItem";

export type BreadcrumbProps = JSX.IntrinsicElements["nav"] & {
    /** Event handler triggered when one of the breadcrumb links is clicked */
    onNavigate?: React.MouseEventHandler<HTMLAnchorElement>;
    /** Enables the light version of the Breadcrumb */
    light?: boolean;
};

/** A breadcrumb is a secondary navigation showing the website hierarchy. */
export const Breadcrumb: React.FC<BreadcrumbProps> = React.memo(
    React.forwardRef(({ onNavigate, light, ...props }: BreadcrumbProps, ref: React.ForwardedRef<HTMLElement>) => {
        return (
            <nav {...props} ref={ref} aria-label="breadcrumb">
                <ol className={classnames("breadcrumb", { "breadcrumb-light": light })}>
                    {React.Children.map(props.children, (Child: React.ReactElement<BreadcrumbItemProps>, i: number) => {
                        return React.isValidElement<BreadcrumbItemProps>(Child)
                            ? React.cloneElement<any>(Child, {
                                  onNavigate: onNavigate,
                                  defaultChecked: i === React.Children.toArray(props.children).length - 1,
                                  "data-index-number": i,
                              })
                            : Child;
                    })}
                </ol>
            </nav>
        );
    })
);
