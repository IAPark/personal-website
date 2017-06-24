import * as React from "react";
import { MenuBar } from './menu-bar'
interface Props {
    children?: any
}

export function Page (props: Props) {
    return  <div className='page'>
                <MenuBar/>
                <div className='wrapper'>
                    {props.children}
                </div>
            </div>
}