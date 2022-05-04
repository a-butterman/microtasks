import React from 'react';

type ButtonPropsType = {
	name: string,
	collBack: () => void,
}



export const SimpleButton = (props: ButtonPropsType) => {

	const onClockButtonHandler = () => {
		props.collBack()
	}

	return (
		<button onClick={onClockButtonHandler}>{props.name}</button>
	);
};