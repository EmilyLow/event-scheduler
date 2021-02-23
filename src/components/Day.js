import Hour from "./Hour";
import styled from "styled-components";

//!!! Not needed for Grid Version

function Day({settings}) {
    let hourNum = 12;
    let hours = [];

    for (let i = 0; i < settings.numHours; i++) {
        hours.push(<Hour/>)
     }

     let width = 100/settings.numDays;

    return(
        <DayColumn width={width}>
            <p>Day</p>
            {hours}
        </DayColumn>
    );
}

//width: 14%;
// width: ${(props) => props.width}%;
//text-align: center;

const DayColumn = styled.div`



`

export default Day;