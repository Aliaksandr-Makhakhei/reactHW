import React, { useState, useEffect } from "react";
import './style.css'

const pagesNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

const Pagination = () => {

    const [pageNumber, setPageNumber] = useState(0);
    const [posts, setPosts] = useState([])

    useEffect(async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${pageNumber}&_limit=10`)
            const data = await response.json()
            setPosts(data) 
    }, [pageNumber])

    const buttonList = pagesNumbers.map(number => {
        return <button onClick = {() => setPageNumber(number)} key = {number}>{number}</button>
    })

    const imageList = posts.map(post => {
        return <img key={post.id} src={post.url}></img>
    })

    return (
        <>
        {imageList}
        {buttonList}
        </>
    )
}

export default Pagination