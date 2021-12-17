import React, {useState, useEffect} from "react";
import './style.css'
import {useParams} from 'react-router-dom'

const Figure = () => {

    const [figureClass, setFigureClass] = useState('')
    const [figureColor, setFigureColor] = useState('')
    const params = useParams();

    useEffect(() => {
        if(params.type === '1') {
            setFigureClass('square')
        } else if(params.type === '2'){
            setFigureClass('circle')
        }
      }, [params.type]);

      useEffect(() => {
        setFigureColor(params.color)
      }, [params.color]);

console.log(params.color);

    return (
        <>
        <div className={figureClass, figureColor}>123</div>
        </>
    )
}

export default Figure