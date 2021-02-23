import styled from "styled-components";

function DayLabel({day}) {
    

    let dayName = "";

     switch (day) {
        
        case 0:
            dayName = "SUN";
            break;
        case 1:
            dayName = "MON";
            break;
        case 2:
            dayName = "TUE";
            break;
        case 3:
            dayName = "WED";
            break;
        case 4:
            dayName = "THU";
            break;
        case 5:
            dayName = "FRI";
            break;
        case 6:
            dayName = "SAT"; 
    
      }

    return(
        <LabelBlock day={day}>
           <StyledP>{dayName}</StyledP>
        </LabelBlock>
    );
}

export default DayLabel;

/*
 grid-column: ${(props) => props.day};
    grid-row: ${(props) => props.hour + 2} / span 4;

    */
const LabelBlock = styled.div`

    grid-column-start: ${(props) => props.day + 2};
    grid-column-end: span 1;
    grid-row-start: 1;
    grid-row-end: span 1;

    // border: 1px solid grey;
    // background-color: green;
    

   


`

const StyledP = styled.p`
    text-align: center;
    
    
   

`