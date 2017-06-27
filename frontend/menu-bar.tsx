import * as React from "react";

interface Props {
    children?: any
}

export function MenuBar (props: Props) {
    return  <div className='menu-bar'>
                <a className="fa fa-github"></a>
                <a className="fa fa-linkedin"></a>
                <a className="fa fa-facebook"></a>
                <a className="fa fa-globe">
                    <span>Old Site</span>
                </a>

            </div>
}