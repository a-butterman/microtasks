import React from 'react';

type ButtonPropsType = {
	name: string,
	collBack: () => void,
}

export const SimpleButton = (props: ButtonPropsType) => {
	return (
		<button onClick={props.collBack}>{props.name}</button>
	);
};