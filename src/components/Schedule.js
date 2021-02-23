import { useContext } from "react";
import styled from "styled-components";
import Day from "./Day";
import HourBar from "./HourBar"
import Hour from "./Hour";



function Schedule({settings}) {
  


   
    let hours = [];

    for (let i = 0; i < settings.numDays; i++) {
       for (let j = 0; j < settings.numHours; j++) {
        hours.push(<Hour day={i+1} hour={j+1}/>)
     }
    }

    return(
        <ScheduleContainer settings={settings}>
            {/* <HourBar settings={settings}/> */}
            {hours} 

        </ScheduleContainer>
    );
}

const ScheduleContainer = styled.div`
   display: grid;
   
   grid-template-columns: 40px repeat(${(props) => props.settings.numDays}, 80px);
   grid-template-rows: 30px repeat(${(props) => props.settings.numHours * 4}, 10px);


`

export default Schedule; 