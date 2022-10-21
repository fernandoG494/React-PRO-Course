import { useState } from "react"

const CounterReducer = () => {
    const [counter, setCounter] = useState(0);
    
    const handleClick = () => {
        setCounter(prev => prev + 1);
    };

    return (
        <>
            <h1>Counter Reducer: { counter }</h1>
            <button onClick={handleClick}>
                +1
            </button>
        </>
    )
}

export default CounterReducer;
