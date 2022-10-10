import { useState } from "react";
import NavBar from '../components/NavBar'
import Seo from '../components/Seo';

export default function Counter() {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <Seo title = "Counter"/>
            <h1>This is Counter.</h1>
            <p>count: {counter}</p>
            <button onClick={() => setCounter(prev => prev + 1)}> Add </button>
        </>
    )
}