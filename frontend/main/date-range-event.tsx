import * as React from "react";
import { MonthDate } from '../month-date'
interface Props {
    children?: React.ReactChild,
    start: Date,
    end: Date,
    mainTitle: string,
    subTitle: string,
    website?: string
}

export function DateRangeEvent (props: Props) {
    return <div className='event'>
                <div className='date-range'>
                    <MonthDate date={props.start}/>&nbsp;-&nbsp;<MonthDate date={props.end}/>
                </div>
                <div className='content'>
                    <h1>{props.mainTitle}</h1>
                    <h1>{props.subTitle}</h1>
                    <div className="content">
                    {props.children}
                    </div>
                    {props.website?<a>{props.website}</a>:null}
                </div>
           </div>
}