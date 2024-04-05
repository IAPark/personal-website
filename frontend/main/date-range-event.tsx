import * as React from "react";
import { MonthDate } from "../month-date";
interface Props {
  children?: React.ReactChild;
  start: Date;
  end?: Date;
  mainTitle: string;
  subTitle: string;
  technologies?: string[];
  website?: string;
}

export function DateRangeEvent(props: Props) {
  let technologies = props.technologies ? props.technologies : [];
  return (
    <div className="event">
      <div className="date-range">
        <MonthDate date={props.start} />
        <span>-</span>
        {props.end ? <MonthDate date={props.end} /> : <span>Present</span>}
      </div>
      <div className="content">
        <h1>{props.mainTitle}</h1>
        <h1>{props.subTitle}</h1>
        {technologies.map((n, i) => (
          <span key={i}>
            {i > 0 ? " " : ""}
            <span className="tech">{n}</span>
          </span>
        ))}
        <div className="content">{props.children}</div>
        {props.website ? <a>{props.website}</a> : null}
      </div>
    </div>
  );
}
