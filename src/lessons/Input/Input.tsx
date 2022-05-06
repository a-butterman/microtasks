import React, {useState} from "react";
import {FullInput} from "./Components/FullInput";
import {SimpleInput} from "./Components/SimpleInput";
import {SimpleButton} from "./Components/SimpleButton";

export const Input = () => {
	let [message, setMessage] = useState([
		{message: 'Potato'},
		{message: 'Milk'},
		{message: 'Broad'},
	])

	// =========== SimpleInput && SimpleButton ============
	let [title, setTitle] = useState('');

	const collBackSimpleButtonHandler = () => {
		let newMessage = {message: title};
		setMessage([newMessage, ...message]);
		setTitle('');
	}
	// ====================================================




	// ================== FullInput ======================
	// const addMessage = (newMessage: string) => {
	// 	let newMessages = {message: newMessage};
	// 	setMessage([newMessages, ...message])
	// }
	// ==================================================



	return (
		<div>

			<div style={{margin: '20px 0 0 40px'}}>
				{/*<FullInput addMessage={addMessage}/>*/}
				<SimpleInput title={title} setTitle={setTitle} />
				<SimpleButton collBack={collBackSimpleButtonHandler} name={'+'} />
			</div>

			{message.map((el, index) => {
				return (
					<div key={index} style={{marginLeft: '40px'}}> {el.message} </div>
				);
			})}
		</div>
	);
}