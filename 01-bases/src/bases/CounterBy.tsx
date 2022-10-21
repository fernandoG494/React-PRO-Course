import { useState } from "react"

interface Props {
    initialValue?: number
};

const CounterBy = ({ initialValue = 5 }: Props) => {
    const [counterState, setCounterState] = useState({
        counter: initialValue,
        clicks: 0
    });
    
    const handleClick = (increment: number) => {
        setCounterState(prev => ({
            counter: prev.counter + increment,
            clicks: prev.clicks + 1
        }));
    };

    const { counter, clicks } = counterState;

    return (
        <>
            <h1>CounterBy: { counter }</h1>
            <h1>Clicks: { clicks }</h1>

            <button onClick={() => handleClick(1)}>+1</button>
            <button onClick={() => handleClick(5)}>+5</button>
        </>
    )
}

export default CounterBy;
