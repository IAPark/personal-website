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
            I'm a senior software engineer with a passion for building quality
            products. I've worked across the stack from front-end to back-end
            along with some devops, data science, and machine learning. I'm
            always looking to learn new things and improve my skills.
          </Bio>
        </div>
      </div>
      <div className="experience-block">
        <div className="content-row">
          <h1>Experience</h1>
          <DateRangeEvent
            start={new Date("June 11 2022")}
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
          >
            <ul>
              <li>
                Built embedding based paper recommendations resulting in 240x
                calculation time improvement and +20% lift in CTR
              </li>
              <li>
                Wrote a context-free LaTeX grammar to improve document
                conversion success rate
              </li>
              <li>
                Used logistic regression to predict email open rate and improved
                our email profitability by $60k per month
              </li>
              <li>
                Organized a cross-disciplinary team to triage and address
                security issues
              </li>
              <li>
                Prototyped LLM based projects to better understand their
                business implications
              </li>
              <li>
                Organized monthly dev all-hands meetings with presentations from
                across the org
              </li>
              <li>Implemented AMI baking to improve EC2 startup time</li>
            </ul>
          </DateRangeEvent>
          <DateRangeEvent
            start={new Date("June 11 2018")}
            end={new Date("June 11 2022")}
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
          >
            <ul>
              <li>
                Productionized system to identify similar papers across the site
                eventually used inside almost every feature on the site
              </li>
              <li>
                Implemented a system for generating zip archives in JavaScript
                as a MVP of what quickly became our second most profitable
                product offering
              </li>
              <li>
                Automated migration of 200+ files from Sprocket to Webpack
                through custom Babel AST transforms
              </li>
              <li>
                Implemented direct S3 uploads of documents, reducing errors for
                large uploads and powering thousands of uploads per day
              </li>
              <li>
                Designed self-healing system for choosing recommendation emails
                + content for 10 million users a day using Redis, Sidekiq, and
                Postgres
              </li>
            </ul>
          </DateRangeEvent>
          <DateRangeEvent
            start={new Date("May 17 2017")}
            end={new Date("May 11 2018")}
            mainTitle="Commercial Time Share Inc"
            subTitle="Development Intern"
            technologies={["PHP", "Android", "SQL", "C++", "PDF"]}
          >
            Updated an Android app to support physical scan hardware. Bug fix
            for an in house HTML to PDF render. Created architecture for tire
            tracking system. Built framework to aid in development of PHP + Soap
            web app to meet technical requirements.
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
            start={new Date("August 2014")}
            end={new Date("May 2017")}
            mainTitle="Kent State University Libraries"
            subTitle="Student worker"
            technologies={["React.js", "Flask", "C++", "NGINX"]}
          >
            Though my primary rule was support, developed a program to monitor
            which public machines were in use.
          </DateRangeEvent>
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
            For a year I thought about getting a second degree in biology. While
            I continue to find biology interesting and courses like cell biology
            were some of the most interesting I took in college I decided to
            focus on Software Engineering.
          </DateRangeEvent>
        </div>
      </div>
    </Page>
  );
}
