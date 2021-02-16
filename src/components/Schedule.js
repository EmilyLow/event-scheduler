import { useContext } from "react";
import styled from "styled-components";
import Day from "./Day";
import HourBar from "./HourBar"



function Schedule({settings}) {
  


    let days = [];

    for (let i = 0; i < settings.numDays; i++) {
       days.push(<Day settings={settings}/> );
    }

    return(
        <ScheduleContainer>
            <HourBar settings={settings}/>
            {days}

        </ScheduleContainer>
    );
}

const ScheduleContainer = styled.div`
   display: flex;
   max-width: 700px;


`

export default Schedule; 