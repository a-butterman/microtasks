import React from "react";

type ButtonHardPropsType = {
    name: string
    callBack: ()=>void
}

export const ButtonHard = (props: ButtonHardPropsType) => {
    return (
        <button onClick={props.callBack}>{props.name}</button>
    )
}