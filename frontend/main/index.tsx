import * as React from "react";

import { Page } from "../page";

import { DateRangeEvent } from "./date-range-event";
import { Bio } from "./bio";
export function MainPage() {
  return (
    <Page>
      <div className="bio-block">
        <div className="content-row">
          <Bio
            name="Izzy Park"
            birth={new Date("10/17/1996")}
            address={{
              city: "San Francisco",
              state: "California",
              zip: "94117",
              streetAddress: "309 Scott St Apt A",
            }}
            photo="public/face.jpg"
            email="me@ipark.dev"
            phone="330-474-9654"
          >
            I'm a developer, engineer, student, rock climber, reader, sometimes
            writer, and always curious. I'm working hard to contribute something
            of meaning in this short time I have
          </Bio>
        </div>
      </div>
      <div className="education-block">
        <div className="content-row">
          <h1>Education</h1>
          <DateRangeEvent
            start={new Date("August 2013")}
            end={new Date("May 2017")}
            mainTitle="Kent State University"
            subTitle="Bachelor's in Computer Science"
          >
            Graduated summa cum laude with a 3.907 GPA.
          </DateRangeEvent>
          <DateRangeEvent
            start={new Date("August 2017")}
            end={new Date("May 2019")}
            mainTitle="Kent State University"
            subTitle="Bachelor's in Biotechnology"
          >
            I briefly thought about getting a second degree in biotechnology.
            While I continue to find biology interesting and courses like cell
            biology were some of the most interesting I took in college I
            decided to focus on Software Engineering.
          </DateRangeEvent>
        </div>
      </div>
      <div className="experience-block">
        <div className="content-row">
          <h1>Experience</h1>
          <DateRangeEvent
            start={new Date("August 2014")}
            end={new Date("May 2017")}
            mainTitle="Kent State University Libraries"
            subTitle="Student worker"
            technologies={["React.js", "Flask", "C++", "ngnix"]}
          >
            Though my primary rule was support developed a program to monitor
            which public machines were in use.
          </DateRangeEvent>

          <DateRangeEvent
            start={new Date("August 2016")}
            end={new Date("May 2017")}
            mainTitle="Kent State Deans Office"
            subTitle="Student developer"
            technologies={["React.js", "Flask", "Peewee", "PDF.js"]}
          >
            Working on projects to help Kent's board of trustees better interact
            with quarterly board books.
          </DateRangeEvent>

          <DateRangeEvent
            start={new Date("May 17 2017")}
            end={new Date("May 11 2018")}
            mainTitle="Commercial Time Share Inc"
            subTitle="Development Intern"
            technologies={["PHP", "Android", "SQL", "C++", "PDF"]}
          >
            Updated an Android app to support physical scan hardware. Bug fix
            for an in house html to pdf render. Created architecture for tire
            tracking system. Built framework to aid in development of PHP + Soap
            web app to meet imposed requirements.
          </DateRangeEvent>

          <DateRangeEvent
            start={new Date("June 11 2018")}
            end={new Date("June 11 2020")}
            mainTitle="Academia Inc"
            subTitle="Full-Stack Software Engineer"
            technologies={[
              "Ruby",
              "Typescript",
              "React.js",
              "Rails",
              "Postgres",
              "AWS",
              "RedShift",
            ]}
          ></DateRangeEvent>

          <DateRangeEvent
            start={new Date("June 11 2020")}
            mainTitle="Academia Inc"
            subTitle="Senior Full-Stack Software Engineer"
            technologies={[
              "Ruby",
              "Typescript",
              "React.js",
              "Rails",
              "Postgres",
              "AWS",
              "RedShift",
            ]}
          ></DateRangeEvent>
        </div>
      </div>
    </Page>
  );
}
