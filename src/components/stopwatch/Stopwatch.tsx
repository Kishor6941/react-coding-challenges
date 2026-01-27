import { useState, useEffect, useRef } from "react"


const Stopwatch = () => {
    const [time,setTime] = useState(0)
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

const startWatch = () => {
    if(intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1)
    }, 1000)
}
const stopWatch = () => {
    if(intervalRef.current !== null) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
    }
}
const resetWatch = () => {
    stopWatch()
    setTime(0)
}

const formatTime = (time: number) => {
    const getHours = String(Math.floor(time / 3600)).padStart(2, '0')
    const getMinutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0')
    const getSeconds = String(time % 60).padStart(2, '0')
    return `${getHours} : ${getMinutes} : ${getSeconds}`
}
  return (
    <div className="mx-auto mt-4 col-md-4">
        <div className="text-center border p-4">
        <h2>StopWatch</h2>
            <h3>{formatTime(time)}</h3>
            <button className="btn btn-primary m-2" onClick={startWatch}>Start</button>
            <button className="btn btn-danger m-2" onClick={stopWatch}>Stop</button>
            <button className="btn btn-secondary m-2" onClick={resetWatch}>Reset</button>
        </div>
    </div>
  )
}

export default Stopwatch
