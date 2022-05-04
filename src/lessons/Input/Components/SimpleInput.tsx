import React from 'react';

type SimpleInputPropsType = {
	collBack: () => void,
}

export const SimpleInput = (props: SimpleInputPropsType) => {

	const onChangeInputHandler = () => {
		props.collBack()
	}

	return (
		<input onChange={onChangeInputHandler}/>
	);
};