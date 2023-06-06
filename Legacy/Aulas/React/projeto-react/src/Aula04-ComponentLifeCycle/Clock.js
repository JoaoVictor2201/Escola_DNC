import { useEffect, useState } from "react";

let interval;
let color = 'green';
export default function Clock() {

    const [time, setTime] = useState(new Date().toString());

    useEffect(() => {
        interval = setInterval(() => {
            setTime(new Date().toString());
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    useEffect(() => {
        if(color === 'green') {
            color = 'red'
        } else {
            color = 'green'
        }
    }, [time])

    return (
        <>
            <h3 style={{color,}}>{time}</h3>
        </>
    )

}