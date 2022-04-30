import React from 'react';
import './App.css';
import {Map} from './lessons/Map/Map';
import {MapTable} from './lessons/Map/MapTable';
import {Button} from "./lessons/Button/Button";
import {UseState} from "./lessons/UseState/UseState";
import {Filter} from "./lessons/Filter/Filter";

const students = [
    {id: 1, name: "James", age: 8},
    {id: 2, name: "Robert", age: 18},
    {id: 3, name: "John", age: 28},
    {id: 4, name: "Michael", age: 38},
    {id: 5, name: "William", age: 48},
    {id: 6, name: "David", age: 58},
    {id: 7, name: "Richard", age: 68},
    {id: 8, name: "Joseph", age: 78},
    {id: 9, name: "Thomas", age: 88},
    {id: 10, name: "Charles", age: 98},
    {id: 11, name: "Christopher", age: 100},
    {id: 12, name: "Arthur", age: 28},
    {id: 13, name: "Misha", age: 27},
]
const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

const App = () => {
    return (
        <>
            {/*<Map students={students}/>*/}
            {/*<MapTable cars={topCars}/>*/}
            {/*<Button/>*/}
            {/*<UseState/>*/}
            <Filter/>
        </>
    );
}

export default App;