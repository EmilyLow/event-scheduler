import styled from "styled-components";

function HourLabel({hour, startTime}) {
   

    return(
        <LabelBlock hour={hour}>
           <StyledP>{hour + startTime}</StyledP>
        </LabelBlock>
    );
}

export default HourLabel;


const LabelBlock = styled.div`

    grid-column-start: 1;
    grid-column-end: span 1;
    grid-row-start: ${(props) => props.hour *4 + 2};
    grid-row-end: span 4;

    // border: 1px solid grey;
    display: flex;
    justify-content: center;
    align-items: center;

 
    

    background: 
    linear-gradient(grey, grey) top right / 50% 1px ;
   background-repeat:no-repeat;


`
const StyledP = styled.p`
    // text-align: center;
    // margin: 5px 0;

`