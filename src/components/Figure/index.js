import React, {useState, useEffect} from "react";
import './style.css'
import {useParams} from 'react-router-dom'

const Figure = () => {

    const [figureClass, setFigureClass] = useState('')
    const params = useParams();

    useEffect(() => {
        if(params.type === '1') {
            setFigureClass('square')
        } else if(params.type === '2'){
            setFigureClass('circle')
        }
      }, [params.type]);

    return (
        <div className="wrapper"> 
        <div className={figureClass} style={{backgroundColor: params.color}}>{figureClass}</div>
        </div>
    )
}

export default Figure