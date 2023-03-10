import React, {useState, useEffect} from "react";

const Timer = () => {

    const [timer, setTimer] = useState(0);
    const [isTimerRun, setIsTimerRun] = useState(false);


    useEffect(() => {

        if(!isTimerRun) {
            return
        }

        const time = setInterval(() => {
            setTimer(prev => prev + 1)
        }, 1000)

        return (() => clearInterval(time))

    }, [isTimerRun])



    return (
        <div>
            <h5>timer</h5>
            <span>{timer}</span>
            <button onClick={() => setIsTimerRun(true)}>Start</button>
            <button onClick={() => setIsTimerRun(false)}>Stop</button>

        </div>
    )
}

export default Timer;