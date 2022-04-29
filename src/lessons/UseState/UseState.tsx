import React, {useState} from "react";



export const UseState = () => {
    let [a, setA] = useState(0)

    const numberUp = () => {
        setA(++a);
        console.log(a)
    }
    const numberDown = () => {
        setA(--a);
        console.log(a)
    }

    const numberNull = () => {
        setA(a=0);
        console.log('Сброс на 0')
    }

    return (
        <>
            <h1>{a}</h1>
            <button onClick={numberUp}> + </button>
            <button onClick={numberDown}> - </button>
            <button onClick={numberNull}> Reset </button>
        </>
    );
};