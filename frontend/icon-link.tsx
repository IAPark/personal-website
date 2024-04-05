import * as React from "react";

interface Props {
  children?: any;
  icon: string;
  alt: string;
  href?: string;
}

export function IconLink(props: Props) {
  return (
    <a
      href={props.href}
      className={"icon-" + props.icon}
      aria-label={props.alt}
    >
      <span>{props.children}</span>
    </a>
  );
}
