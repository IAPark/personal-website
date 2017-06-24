import * as React from "react";

import { Address } from "../address"
import { Stars } from "../stars"

import { BasicInfoLine } from "./basic-info-line"

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
                <div className='basic-info'>
                    <h1>Basic</h1>
                    <BasicInfoLine name='Name'>
                        {props.name}
                    </BasicInfoLine>
                    <BasicInfoLine name='Email'>
                        <a href={'mailto:'+props.email}>{props.email}</a>
                    </BasicInfoLine>
                    <BasicInfoLine name='Phone'>
                        <a href={'tell:'+props.phone}>{props.phone}</a>
                    </BasicInfoLine>
                    <h1>Languages</h1>
                    <BasicInfoLine name='Typescript'>
                        <Stars stars={5} filled={4}/>
                    </BasicInfoLine>
                    <BasicInfoLine name='Python'>
                        <Stars stars={5} filled={4}/>
                    </BasicInfoLine>
                    <BasicInfoLine name='C++'>
                        <Stars stars={5} filled={3.5}/>
                    </BasicInfoLine>
                    <BasicInfoLine name='Java'>
                        <Stars stars={5} filled={3}/>
                    </BasicInfoLine>
                    <h1>Frameworks</h1>
                    <BasicInfoLine name='React'>
                        <Stars stars={5} filled={4}/>
                    </BasicInfoLine>
                    <BasicInfoLine name='Flask'>
                        <Stars stars={5} filled={4}/>
                    </BasicInfoLine>
                    <BasicInfoLine name='Express'>
                        <Stars stars={5} filled={2}/>
                    </BasicInfoLine>
                </div>

                
                <div className="description">
                    <div className="pic">
                        <img src={props.photo}/>
                    </div>
                    <h1>About Me</h1>
                    {props.children}
                </div>
            </div>
}