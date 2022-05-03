import React, {useState} from "react";
import {YourselfFilter} from "./yourselfFilter";
import {YourselfFilter1} from "./yourselfFilter1";
import {YourselfFilter2} from "./yourselfFilter2";

type FilterType = 'all' | 'dollars' | 'rubles'

export const Filter = () => {

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


    const [filter, setFilter] = useState<FilterType>('all');

    let currentMoney = money;
    if (filter === 'dollars') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'Dollars')
    }
    if (filter === 'rubles') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'RUBLS')
    }

    const onClickFilterHandler = (name: FilterType) => {
        setFilter(name)
    }

    return (
        <>
            {/*<YourselfFilter/>*/}
            {/*<YourselfFilter1/>*/}
            <YourselfFilter2/>
            {/*<div style={{margin: '20px 0 0 40px'}}>*/}
            {/*    <button onClick={() => onClickFilterHandler('all')}>All</button>*/}
            {/*    <button onClick={() => onClickFilterHandler('dollars')}>Dollars</button>*/}
            {/*    <button onClick={() => onClickFilterHandler('rubles')}>Rubles</button>*/}
            {/*</div>*/}
            {/*<ul>*/}
            {/*    {currentMoney.map((objectForMoneyArray, index) => {*/}
            {/*        return (*/}
            {/*            <li key={index}>*/}
            {/*                <span>{objectForMoneyArray.banknots} = </span>*/}
            {/*                <span>{objectForMoneyArray.value} - </span>*/}
            {/*                <span>{objectForMoneyArray.number}</span>*/}
            {/*            </li>*/}
            {/*        )*/}
            {/*    })}*/}


            {/*</ul>*/}
        </>
    );
}