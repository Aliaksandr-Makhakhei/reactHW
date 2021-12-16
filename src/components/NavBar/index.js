import React from "react";
import {Link, useParams} from 'react-router-dom'
import './style.css'

const NavBar = () => {
    const params = useParams();
    const types = [1, 2];
    const typeBtn = types.map((item) => {
        return (
            <Link key={item} to={`figure/${params.item}`}>
            <button>{item}</button>
            </Link>
        )
    })

    return (
        <>
        {typeBtn} 
        </>
    )
}

export default NavBar