import React, {ChangeEvent} from 'react';

type SimpleInputPropsType = {
	title: string,
	setTitle: (title: string) => void,
}


export const SimpleInput = (props: SimpleInputPropsType) => {

	const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
		props.setTitle(event.currentTarget.value)
	}

	return (
		<input value={props.title} onChange={onChangeInputHandler}/>
	);
};