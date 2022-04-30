import React, {useState} from "react";

type FilterNameButtonType = 'All' | 'Rubles' | 'Dollars';

export const YourselfFilter = () => {
	const [money, setMoney] = useState([
		{banknots: 'Dollars', value: 100, number: ' a1234567890'},
		{banknots: 'Dollars', value: 50, number: ' z1234567890'},
		{banknots: 'RUBLS', value: 100, number: ' w1234567890'},
		{banknots: 'Dollars', value: 100, number: ' e1234567890'},
		{banknots: 'Dollars', value: 50, number: ' c1234567890'},
		{banknots: 'RUBLS', value: 100, number: ' r1234567890'},
		{banknots: 'Dollars', value: 50, number: ' x1234567890'},
		{banknots: 'RUBLS', value: 50, number: ' v1234567890'},
	]);


	// const onClickFilter = (name: FilterNameButtonType) => {
	// 	setFilter(name);
	// }
	//
	// let [filter, setFilter] = useState<FilterNameButtonType>('All')
	// let currentMoney = money;
	// if (filter === 'Dollars') {
	// 	currentMoney = money.filter(filteredMoney => filteredMoney.banknots === "Dollars")
	// }
	// if (filter === 'Rubles') {
	// 	currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'RUBLS')
	// }
	//

	const onClickFilter = (name: FilterNameButtonType) => {
		setFilter(name)
	}

	let currentMoney = money;

	const [filter, setFilter] = useState('All');
	if (filter === 'Dollars') {
		currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'Dollars');
	}
	if (filter === 'Rubles') {
		currentMoney = money.filter(filteredMoney => filteredMoney.banknots === "RUBLS");
	}

	return (
		<>
			<div style={{margin:'20px 0 0 40px'}}>
				<button onClick={() => onClickFilter('All')} style={{marginRight:'10px'}}>ALL</button>
				<button onClick={() => onClickFilter('Rubles')} style={{marginRight:'10px'}}>RUB</button>
				<button onClick={() => onClickFilter('Dollars')} style={{marginRight:'10px'}}>USD</button>
			</div>
			<ul>
				{currentMoney.map((objectForMoneyArr, index)=>{
					return (
						<li key={index}>
							<span>{objectForMoneyArr.banknots} = </span>
							<span>{objectForMoneyArr.value} - </span>
							<span>[{objectForMoneyArr.number} ]</span>
						</li>
					);
				})}
			</ul>
		</>
	);
}