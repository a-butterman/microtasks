import React from "react";

type MapPropsType = {
    students:Array<StudentType>
}

type StudentType = {
    id: number
    name: string
    age: number
}

export const Map = (props: MapPropsType) => {
    return (
        <div>
            <h1>Список студентов</h1>
            <ol>
                {props.students.map((objectFromStudentArray) => {
                    return (
                        <li key={objectFromStudentArray.id}>{objectFromStudentArray.name}, возраст: {objectFromStudentArray.age}.</li>
                    )
                })}
            </ol>
        </div>
    );
}