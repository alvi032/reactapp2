import React from "react"

function TimeOfDay(){
    const date = new Date();
    const hours = date.getHours();
    let timeOfday

    if(hours<12){
        timeOfday= "morning";
    }
    else if (hours >= 12 && hours <17){
        timeOfday = "afternoon";
    }
    else{
        timeOfday = "evening"
    }

    const style={
        color:"red",
        backgroundColor: 'orange'
    }
    return(
        <h1 style={style}>Good {timeOfday}!</h1>
    )
}

export default TimeOfDay