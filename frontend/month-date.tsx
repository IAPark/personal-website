import * as React from "react";

interface Props {
    date: Date,
}


const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
]

export function MonthDate (props: Props) {
    return <span>{`${MONTHS[props.date.getMonth()]} ${props.date.getFullYear()}`}</span>;
}