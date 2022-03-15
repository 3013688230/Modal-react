import React, { useState, useEffect } from "react";


const LifeCycle = () => {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);

    useEffect(() => {
        console.log('useEffect []')
    }, [])

    useEffect(() => {
        console.log('useEffect no dependency')
    })

    useEffect(() => {
        console.log('useEffect [counter]');
    }, [counter])

    return (
        <div>
            <h1>Click1: {counter}</h1>
            <h1>Click2: {counter2}</h1>
            <button onClick={() => setCounter(counter + 1)}>
                Increment c1
            </button>
            <button onClick={() => setCounter2(counter + 2)}>
                Increment c2
            </button>
        </div>
    );
}

export default LifeCycle;