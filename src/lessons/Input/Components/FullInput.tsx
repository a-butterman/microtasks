import React, {ChangeEvent, useState} from "react";

type FullInputPropsType = {
	addMessage: (title: string) => void,
};

export const FullInput = (props: FullInputPropsType) => {
	let [title, setTitle] = useState('');
	console.log(title);





	let onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setTitle(event.currentTarget.value);
	};

	let onClickButtonHandler = () => {
		props.addMessage(title);
		setTitle('')
	};


	return(
		<>
			<input value={title} onChange={onChangeInputHandler}/>
			<button onClick={onClickButtonHandler}>+</button>
		</>
	);
}







// type FullInputPropsType= {
// 	addMessage: (newMessage: string) => void,
// }
//
// export const FullInput = (props: FullInputPropsType) => {
// 	const [title, setTitle] = useState('')
// 	console.log(title)
//
// 	const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
// 		setTitle(event.currentTarget.value)
// 	}
//
// 	const onClickButtonHandler = () => {
// 		props.addMessage(title);
// 		setTitle('')
// 	}
//
// 	return (
// 		<div>
// 			<input value={title} onChange={onChangeInputHandler} type="text"/>
// 			<button onClick={onClickButtonHandler}>+</button>
// 		</div>
// 	);
// }