import React, {useState} from "react"
import './style.css'

const emojiArr = ['🛫', '🛫', '💥']

const CyclicButton = () => {
    const [checked, setIndex] = useState(emojiArr[0])
    const onButtonClick = () => {
        setIndex (
            //попробовать через .find 
            // акже у нас есть 0 элемент и можно сразу с первого на 2 
        )
    }
    return (
        <button onClick={onButtonClick}>{checked}</button>
    )
}

export default CyclicButton