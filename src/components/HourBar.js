import styled from "styled-components";

function HourBar({settings}) {

    let hourMarks = [];

    hourMarks[0] = <HourBlock><p>Hour</p></HourBlock>
   
    let hour = settings.startTime;
    let i;
    for (i = 0; i < settings.numHours; i++) {
      
        hourMarks.push(
            <HourBlock> 
                <StyledP>{hour}</StyledP>
            </HourBlock>
        );
        hour++;
    }


    return(
      <DayColumn>
          {hourMarks}
      </DayColumn>
    );
}

export default HourBar;

const HourBlock = styled.div`
    // background-color: pink;
    height: 30px;
    // border: 1px solid blue;
  

`
const DayColumn = styled.div`
    // background-color: red;
    
    text-align: center;

`

const StyledP = styled.p`
    margin: 0px;


`;