import React, {useState} from 'react'
import './style.css'
import firstNames from './names.json'

const NewPeople = () => {
    const [peopleList, setPeopleList] = useState(['Sasha', 'Petya', 'Vasya'])

    const addNewPeople = () => {
        const newPeople = firstNames[Math.floor(Math.random() * 13)];
        const newArr = [...peopleList, newPeople]
        setPeopleList(newArr)
    }

    const names = peopleList.map((item, index) => {
      return <div key={index}>{item}</div>;
    }); 

    return (
        <>
        {names}
        <button onClick={addNewPeople}>Add name</button>
        </>
    )
}

export default NewPeople