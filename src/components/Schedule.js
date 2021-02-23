import { useContext } from "react";
import styled from "styled-components";

import Hour from "./Hour";
import DayLabel from "./DayLabel";
import HourLabel from "./HourLabel";



function Schedule({settings}) {
  

    
    //Also should have an array of events
    //Is there a way to have an "events" component that slots in without having its own parent?
   
    let hours = [];

    for (let i = 0; i < settings.numDays; i++) {
       for (let j = 0; j < settings.numHours; j++) {
           //Note! Changing from 0 start to 1 start here.
           //Consider if this should be done elsewhere, based off how Date() works. 
           //Removing that for now
        hours.push(<Hour day={i} hour={j}/>)
     }
    }

    let dayLabels = [];
    for (let i = 0; i < settings.numDays; i++) { 
        dayLabels.push(<DayLabel day = {i}/>);
    }

    let hourLabels = [];
    for (let i = 0; i < settings.numHours; i++) { 
        hourLabels.push(<HourLabel hour = {i} startTime = {settings.startTime}/>);
    }

    

    return(
        <ScheduleContainer settings={settings}>
            {/* <HourBar settings={settings}/> */}
            {hours} 
            {dayLabels}
            {hourLabels}

        </ScheduleContainer>
    );
}

const ScheduleContainer = styled.div`
   display: grid;
   
   grid-template-columns: 40px repeat(${(props) => props.settings.numDays}, 80px);
   grid-template-rows: 40px repeat(${(props) => props.settings.numHours * 4}, 10px);


`

export default Schedule; 