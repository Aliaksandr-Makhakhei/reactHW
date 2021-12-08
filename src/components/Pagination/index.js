import React, { useState, useEffect } from "react";
import './style.css'

const pagesNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

const Pagination = () => {

    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/photos?_page=${pageNumber}&_limit=10`)
            .then(response => response.json())
            .then(response => console.log(response))
    }, [pageNumber])

    const buttonList = pagesNumbers.map(number => {
        return <button onClick = {setPageNumber(number)} key = {number}>{number}</button>
    })

    return (
        <>
        {buttonList}
        </>
    )
}

export default Pagination