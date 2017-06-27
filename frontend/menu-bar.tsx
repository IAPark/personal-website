import * as React from "react";
import {IconLink} from "./icon-link";

interface Props {
    children?: any
}

export function MenuBar (props: Props) {
    return  <div className='menu-bar'>
                <IconLink icon='github'/>
                <IconLink icon='linkedin'/>
                <IconLink icon='facebook'/>
                <IconLink icon='globe'>
                    Old Site
                </IconLink>

            </div>
}