import React from "react";
import {Link, useHistory} from 'react-router-dom'
import './style.css'

const NavBar = () => {
    
    const history = useHistory()



    const types = [1, 2];
    const colors = ['red', 'gray', 'blue', 'cyan', 'yellow', 'orange']

    const typeBtn = types.map((type) => {
        return (
                <button  key={type} onClick = {() => {history.push(`/figure/${type}/`)}} className="choose__figure">{type}</button>
        )
    })
   

    const figureColor = colors.map((color) => {
        return (
            <button key={color} onClick = {() => {history.push(`/figure/type/${color}`)}} className="choose__color">{color}</button>
        )
    })

    return (
        <>
        {typeBtn} 
        {figureColor} 
        </>
    )
}

export default NavBar