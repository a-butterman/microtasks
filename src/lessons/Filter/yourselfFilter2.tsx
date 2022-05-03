import React, {useState} from "react";

type FilterPropsType = 'all' | 'rub' | 'usd';

export const YourselfFilter2 = () => {
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

	let copyMoney = money;
	const [filter, setFilter] = useState<FilterPropsType>("all")
	if (filter === "rub") {
		copyMoney = copyMoney.filter(it => it.banknots === 'RUBLS');
	}
	if (filter === "usd") {
		copyMoney = copyMoney.filter(it => it.banknots === 'Dollars')
	}

	const deleteIt = (id: number) => {
		setMoney(money.filter(idMoney => idMoney.id !== id))
	}

	return (
		<>
			<div style={{margin: '20px 0 0 40px'}}>
				<button onClick={() => setFilter('all')} style={{marginRight: '15px'}}>ALL</button>
				<button onClick={() => setFilter('rub')} style={{marginRight: '15px'}}>RUB</button>
				<button onClick={() => setFilter('usd')} style={{marginRight: '15px'}}>USD</button>
			</div>
			<ul>
				{copyMoney.map((el) => {
					return (
						<li>
							<button onClick={() => deleteIt(el.id)} style={{marginRight: '15px'}}>x</button>
							<span>{el.banknots} - </span>
							<span>{el.value} - </span>
							<span>{el.number}</span>
						</li>
					)
				})}
			</ul>
		</>
	);
}