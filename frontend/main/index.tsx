import * as React from "react";

import { Page } from "../page"

import { DateRangeEvent } from "./date-range-event"
import { Bio } from "./bio"
export function MainPage () {
    return  <Page>
                <div className="bio-block">
                    <div className="content-row">
                        <Bio
                            name="Isaac Park"
                            birth={new Date("10/17/1996")}
                            address={{
                                city: "Kent",
                                state: "Ohio",
                                zip: "44240",
                                streatAddress: "1515 Lake Martin Dr"
                            }}
                            photo="public/isaac.jpg"
                            email="me@isaacpark.me"
                            phone="330-474-9654">
                            I'm a developer, engineer, student, rock climber, reader,
                            sometimes writer, and always curious. I'm working hard to
                            contribute something of meaning in this short time I have
                        </Bio>
                    </div>
                </div>
                <div className="education-block">
                    <div className="content-row">
                        <h1>Education</h1>
                        <DateRangeEvent start={new Date("August 2013")}
                                        end={new Date("May 2017")} 
                                        mainTitle="Kent State University" 
                                        subTitle="Bachelor's in Computer Science">
                            Graduated summa cum laude with a 3.907 GPA. 
                        </DateRangeEvent>
                        <DateRangeEvent start={new Date("August 2017")}
                                        end={new Date("May 2019")} 
                                        mainTitle="Kent State University" 
                                        subTitle="Bachelor's in Biotechnology">
                            After graduating from Kent I plan to continue my education hoping to position myself
                            to go into the field of synthetic biology with a main focus still being on CS
                        </DateRangeEvent>
                    </div>
                </div>
                <div className="experience-block">
                    <div className="content-row">
                        <h1>Experience</h1>
                        <DateRangeEvent start={new Date("August 2016")}
                                        end={new Date("May 2017")} 
                                        mainTitle="Kent State Deans Office" 
                                        subTitle="Student developer">
                            Working on projects to help Kent's board of trustees better interact with quarterly board books.
                            React.js, 
                        </DateRangeEvent>
                        <DateRangeEvent start={new Date("August 2014")}
                                        end={new Date("May 2017")} 
                                        mainTitle="Kent State University Libraries" 
                                        subTitle="Student worker">
                            Though my primary rule was support developed a program to montitor
                            which public machines were in use.
                        </DateRangeEvent>

                        <DateRangeEvent start={new Date("May 17 2017")}
                                        end={new Date("August 2017")} 
                                        mainTitle="Comercial Time Share Inc" 
                                        subTitle="Development Intern">
                            Updated an Android app to support costum scan hardware.
                            Bug fix in house html to pdf render. Working on security
                            for a PHP for a new project.
                        </DateRangeEvent>
                    </div>
                </div>
            </Page>
}