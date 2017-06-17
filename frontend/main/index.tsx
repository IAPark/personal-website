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
                            sometimes writer, and always curious. I'm at a point in my
                            life where I'm trying to decide what I want that life to be.
                            
                        </Bio>
                    </div>
                </div>
                <div className="content-row">
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
            </Page>
}