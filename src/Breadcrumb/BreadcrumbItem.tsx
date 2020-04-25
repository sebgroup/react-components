import React from "react";
import classnames from "classnames";

export type BreadcrumbItemProps = React.PropsWithChildren<
    React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> & {
        /**
         * The link to where it navigates to. This is used to enable openning the link in new tab.
         * Additionally, you can access it in the event passed with the onNavigate callback
         */
        href?: string;
        /** Event handler triggered when the links is clicked */
        onNavigate?: React.MouseEventHandler<HTMLAnchorElement>;
        /** Active state. (Managed by Breadcrumb) */
        active?: boolean;
    }
>;

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = React.memo(({ href, onNavigate, active, ...props }: BreadcrumbItemProps) => {
    const [className, setClassName] = React.useState<string>("breadcrumb-item");

    React.useEffect(() => setClassName(classnames(["breadcrumb-item", { active }, props.className])), [active, props.className]);

    return (
        <li {...props} className={className} aria-current={active ? props["aria-current"] || "page" : null}>
            <a title={props.title} href={active ? null : href || "#"} data-index-number={props["data-index-number"]} onClick={!active ? onNavigate : null}>
                {props.children}
            </a>
        </li>
    );
});
