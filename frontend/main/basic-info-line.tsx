import * as React from "react";

interface Props {
  name: string;
  children?: any;
}

export function BasicInfoLine(props: Props) {
  return (
    <div className="basic-info-line">
      <span className="name">{props.name}</span>

      <span className="value">{props.children}</span>
    </div>
  );
}
