import { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <h1>Valor: {counter}</h1>
            <button onClick={ () => {setCounter(counter - 1)} }>-1</button>
            <button onClick={ () => {setCounter(counter + 1)} }>+1</button>
        </>
    )
}