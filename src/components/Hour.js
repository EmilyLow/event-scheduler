import styled from "styled-components";

function Hour({day, hour}) {
    console.log("Day ", day, "hour ", hour);

    return(
        <HourBlock day={day} hour={hour}>
          
        </HourBlock>
    );
}

export default Hour;

/*
 grid-column: ${(props) => props.day};
    grid-row: ${(props) => props.hour + 2} / span 4;

    */
const HourBlock = styled.div`

    grid-column-start: ${(props) => props.day + 2};
    grid-column-end: span 1;
    grid-row-start: ${(props) => props.hour *4 + 2};
    grid-row-end: span 4;

    outline: 1px solid gray;
    margin-top: 1px;
    margin-left: 1px;
    // background-color: blue;


`

