import React from "react";
import {Link, useParams} from 'react-router-dom'
import './style.css'

const NavBar = () => {
    const params = useParams();
    const types = [1, 2];
    const colors = ['red', 'gray', 'blue', 'cyan', 'yellow', 'orange'];

    const typeBtn = types.map((type) => {
        return (
            <Link key={type} to={`figure/${type}`}>
                <button className="choose__figure">{type}</button>
            </Link>
        )
    })

    const figureColors = colors.map((color) => {
        return (
            <Link key={color} to={`${color}`}>
            <button className="choose_color">{color}</button>
            </Link>
        )
    })

    return (
        <>
        {typeBtn} 
        {figureColors}
        </>
    )
}

export default NavBar