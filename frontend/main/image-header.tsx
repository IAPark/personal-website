import * as React from "react";

interface Props {
    children: React.ReactChild;
}

export function ImageHeader (props: Props) {
    return <div>
                {props.children}
           </div>
}