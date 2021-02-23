import styled from "styled-components";

function HourLabel({hour, startTime}) {
   

    return(
        <LabelBlock hour={hour}>
           <StyledP>{hour + startTime}</StyledP>
        </LabelBlock>
    );
}

export default HourLabel;

/*
 grid-column: ${(props) => props.day};
    grid-row: ${(props) => props.hour + 2} / span 4;

    */
const LabelBlock = styled.div`

    grid-column-start: 1;
    grid-column-end: span 1;
    grid-row-start: ${(props) => props.hour *4 + 2};
    grid-row-end: span 4;

    // border: 1px solid grey;
    display: flex;
    justify-content: center;
    align-items: center;


`
const StyledP = styled.p`
    // text-align: center;
    // margin: 5px 0;

`