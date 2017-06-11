import * as React from "react";

import { Address } from "../address"

const SECONDS_IN_A_YEAR = 365.25*24*60*60*1000;


interface Props {
    name: string,
    birth: Date,
    address: Address,
    email: string,
    phone: string,
    photo: string,
    children?: any
}

export function Bio (props: Props) {
    return  <div className="bio">
                <div className="pic">
                    <img src={props.photo}/>
                </div>
                <div className="content">
                    <div className='basic-info'> 
                        <h1>{props.name}</h1>
                        {Math.floor((new Date().getTime() - props.birth.getTime())/SECONDS_IN_A_YEAR)} <br/>
                        <a href="props.email">{props.email}</a> <br/>
                        {props.phone}
                    </div>
                    <div className="description">
                        <h1>About Me</h1>
                        {props.children}
                    </div>
                </div>
            </div>
}