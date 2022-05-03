import React, {useState} from "react";

type filterType = 'all' | 'rub' | 'usd';

export const YourselfFilter1 = () => {
	const [money, setMoney] = useState([
		{id: 1, banknots: 'Dollars', value: 100, number: ' a1234567890'},
		{id: 2, banknots: 'Dollars', value: 50, number: ' z1234567890'},
		{id: 3, banknots: 'RUBLS', value: 100, number: ' w1234567890'},
		{id: 4, banknots: 'Dollars', value: 100, number: ' e1234567890'},
		{id: 5, banknots: 'Dollars', value: 50, number: ' c1234567890'},
		{id: 6, banknots: 'RUBLS', value: 100, number: ' r1234567890'},
		{id: 7, banknots: 'Dollars', value: 50, number: ' x1234567890'},
		{id: 8, banknots: 'RUBLS', value: 50, number: ' v1234567890'},
	]);

	const [filter, setFilter] = useState<filterType>('all');

	let copyMoney = money;
	if (filter === 'rub') {
		copyMoney = copyMoney.filter(item => item.banknots === 'RUBLS')
	}
	if (filter === 'usd') {
		copyMoney = copyMoney.filter(item => item.banknots === 'Dollars');
	}


	const deleteValue = (itemId: number) => {
		console.log(itemId)
		setMoney(copyMoney.filter(item => item.id !== itemId))
	}


	return (
		<>
			<button onClick={() => setFilter('all')}>ALL</button>
			<button onClick={() => setFilter('rub')}>RUB</button>
			<button onClick={() => setFilter('usd')}>USD</button>
			<ul>
				{copyMoney.map((item) => {
					return (
						<li key={item.id}> {item.banknots} - {item.value} - {item.number}
							<button onClick={() => deleteValue(item.id)}>x</button></li>
					)
				})}
			</ul>
		</>
	);
}