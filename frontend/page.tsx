import * as React from "react";

interface Props {
    children?: any
}

export function Page (props: Props) {
    return  <div className='page'>
                {React.Children.map(props.children, child => <div>{child}</div>)}
            </div>
}