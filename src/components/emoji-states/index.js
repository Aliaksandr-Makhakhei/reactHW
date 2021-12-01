import React, {useState} from "react"
import './style.css'
const CheckBox = () => {
    const [checked, setChecked] = useState("🙉")
    const onCheckboxClick = () => {
        setChecked (checked === "🙈" ? "🙉" : "🙈")
    }
    return (
        <button onClick={onCheckboxClick}>{checked}</button>
    )
}

export default CheckBox