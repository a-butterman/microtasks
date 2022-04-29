import React from "react";
import {ButtonHard} from "./Components/ButtonHard";

export const Button = () => {

    const onClickName = (name: string) => {
        console.log(name);
    }

// for 1 & 2 button
    const for1 = () => {
        console.log("Ничего не передаем");
    }

    const for2 = (num: number) => {
        console.log(num);
    }

    // for Button HARD 1 & 2
    const buttonHard1 = (subscriber: string, age: number) => {
        console.log(subscriber, age);
    }
    const buttonHard2 = (subscriber: string, age: number) => {
        console.log(subscriber, age);
    }
    const buttonEasy = () => {
        console.log("I am stupid button :)")
    }


    return (
        <>
            <button onClick={(event) => {
                console.log('Hello World!')
            }}>1 Button
            </button>
            <button onClick={(event) => onClickName('Arthur')}>2 Button</button>
            <button onClick={(event) => onClickName("Misha")}>3 Button</button>
            <br/>
            <button onClick={for1}>1</button>
            <button onClick={(event) => (for2(100500))}>2</button>
            <br/>
            <ButtonHard name={"Button HARD 1"} callBack={()=>buttonHard1('Hello Artur', 28)}/>
            <ButtonHard name={"Button HARD 2"} callBack={()=>buttonHard2("Hello Misha", 27)}/>
            <ButtonHard name={'Button EASY'} callBack={buttonEasy}/>
        </>
    );
}