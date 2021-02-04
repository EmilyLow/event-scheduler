import Hour from "./Hour";

function Day() {
    let hourNum = 12;
    let hours = [];

    for (let i = 0; i < hourNum; i++) {
        hours.push(<Hour/>)
     }

    return(
        <div>
            <p>Day</p>
            {hours}
        </div>
    );
}

export default Day;