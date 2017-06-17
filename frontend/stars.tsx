import * as React from "react";

interface StarProps {
    filled: number
}

function Star(props: StarProps) {
    let clampedFilled = Math.max(Math.min(props.filled, 1), 0);
    return  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" 
                viewBox="0 0 51 48">
                <g clipPath='clipPath="url(#star)'>
                    <rect className='filled' x="0" y="0" width={clampedFilled*100+'%'} height="100" clipPath="url(#star)"/>
                    <rect className='unfilled' x={clampedFilled*100+'%'} y="0" width={(1-clampedFilled)*100+'%'} height="100" clipPath="url(#star)"/>
                </g>
                <defs>
                    <clipPath id="star">
                        <path d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>
                    </clipPath>
                </defs>
            </svg>
}

interface StarsProps {
    stars: number,
    filled: number
}

function genStars(props: StarsProps) {
    let stars: any[] = Array.apply(null, {length: 5});
    return stars.map((v, i) => <Star key={i} filled={props.filled-i}/>)
}

export function Stars (props: StarsProps) {
    return  <div className='stars'>
                {genStars(props)}
            </div>
}