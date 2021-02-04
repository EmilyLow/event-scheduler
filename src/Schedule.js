import styled from "styled-components";
import Day from "./Day";

function Schedule() {

    let numDays = 7;
    let days = [];

    for (let i = 0; i < numDays; i++) {
       days.push(<Day/>)
    }

    return(
        <ScheduleContainer>

       {days}

        </ScheduleContainer>
    );
}

const ScheduleContainer = styled.div`
   display: flex;
   max-width: 700px;


`

export default Schedule; 