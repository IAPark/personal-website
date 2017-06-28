import * as React from "react";

interface Props {
    children?: any,
    icon: string,
    href?: string,
}

export function IconLink (props: Props) {
    return  <a href={props.href} className={"icon-"+props.icon}>
                    <span>{props.children}</span>
            </a>;
}