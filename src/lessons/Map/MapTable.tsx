import React from "react";

type CarsPropsType = {
    cars: Array<CarsType>
}

type CarsType = {
    manufacturer: string
    model: string
}


export const MapTable = (props: CarsPropsType) => {
    return (
        <div>
            <table>
                {props.cars.map((objectFromCarsType) => {
                    return (
                        <tr>
                            <td>
                                {objectFromCarsType.manufacturer}
                            </td>
                            <td>
                                {objectFromCarsType.model}
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}