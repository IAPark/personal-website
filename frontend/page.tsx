import * as React from "react";

interface Props {
    children?: any
}

export function Page (props: Props) {
    return  <div className='page'>
                {props.children}
            </div>
}