import {useState} from "react";
import './style.css'

const SAUCES = [
    {
      image: "https://app.pzzby.com/uploads/photos/jZIGfgJfBy.jpg",
      name: "Пармеджано",
      price: 0.80,
      id: 0,
    },
    {
      image: "https://app.pzzby.com/uploads/photos/LNO0Qbtn7F.jpg",
      name: "Чесночный",
      price: 0.50,
      id: 1,
    },
    {
      image: "https://app.pzzby.com/uploads/photos/7GvxxQcWms.jpg",
      name: "Терияки",
      price: 0.76,
      id: 2,
    },
    {
      image: "https://app.pzzby.com/uploads/photos/qH6e61tx6q.jpg",
      name: "Кисло-сладкий",
      price: 0.99,
      id: 3,
    },
  ]

const Sauces = () => {
    const [total, setTotal] = useState(0)

   const  onChangeSaucesCounter = (count) => {
       
    setTotal(total + count)
   }

    return (
        <div className="wrapper">
        <h2>Итого {total.toFixed(2)} руб</h2>
        <div>Выберите соус</div>
        <div className="list">
            {SAUCES.map(sauce => {
                return (
                    <Sauce 
                    image={sauce.image}
                    name={sauce.name}
                    price={sauce.price}
                    key={sauce.id}
                    onChangeSaucesCounter = {onChangeSaucesCounter}
                    />
                )
            })}
        </div>
        <button onClick={() => console.log((total))}>OK</button>
        </div>
    )
}

export default Sauces

const Sauce = ({image, name = "нет названия", price, onChangeSaucesCounter}) => {
    const [count, setCount] = useState(0)

    const onPlus = () => {
        const newCount = count + 1
        setCount(newCount)
        onChangeSaucesCounter(price)
    }

    const onMinus = () => {
        if(!count) {
            return
        }
        const newCount = count - 1
        setCount(newCount)
        onChangeSaucesCounter(-price)
    }

    return (
        <div className="sauce">
            <img src={image} alt='' />
            <h4>Соус {name}</h4>
            <h5>{price}руб</h5>
        <div>
            <button onClick={() => onMinus(-1)}> - </button>
            <strong>{count}</strong>
            <button onClick={() => onPlus(+1)}> + </button>
            </div>
        </div>
    )
}