import Hour from "./Hour";
import styled from "styled-components";

function Day() {
    let hourNum = 12;
    let hours = [];

    for (let i = 0; i < hourNum; i++) {
        hours.push(<Hour/>)
     }

    return(
        <DayColumn>
            <p>Day</p>
            {hours}
        </DayColumn>
    );
}

const DayColumn = styled.div`
    width: 14%; 
    text-align: center;
    max-width: 100px;



`

export default Day;