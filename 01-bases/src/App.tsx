import Counter from "./bases/Counter";
import CounterBy from "./bases/CounterBy";
import CounterEffect from "./bases/CounterEffect";
import { CounterHook } from "./bases/CounterHook";
// import CounterReducer from "./bases/CounterReducer";
import CounterReducer from './reducers/CounterReducer';

function App() {
    return (
        <>
            <Counter initialValue={2} />
            <hr/>
            <CounterBy />
            <hr/>
            <CounterEffect />
            <hr/>
            <CounterHook />
            <hr/>
            <CounterReducer />
            <hr />
        </>
    );
}

export default App;
