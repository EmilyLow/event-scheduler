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
        <ScheduleContainer settings={settings}>
            {/* <HourBar settings={settings}/>
            {days} */}

        </ScheduleContainer>
    );
}

const ScheduleContainer = styled.div`
   display: grid;
   
   grid-template-columns: repeat(${(props) => props.settings.numDays +1}, 80px);
   grid-template-rows: repeat(${(props) => props.settings.numHours * 4 + 2}, 10px);


`

export default Schedule; 