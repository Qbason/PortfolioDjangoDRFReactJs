import React from "react"

function Time(){

    const [hoursMinutes,setHoursMinutes] = React.useState("00:00:00")

    function changeTime(){

        let current = new Date()
        setHoursMinutes(
                current.toLocaleTimeString(
                "pl-PL",
                {
                    hour:"2-digit",
                    minute:"2-digit",
                    second:"2-digit",
                    hour12:false
                }
            )
        )
    }

    React.useEffect(
        ()=>{
            
        const timer = setInterval(changeTime,1000)
        
        return ()=> clearTimeout(timer)

        },
    []
    )

    return(
        <>
            {hoursMinutes}
        </>
    )

}

export default Time