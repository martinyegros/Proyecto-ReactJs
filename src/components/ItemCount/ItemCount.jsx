import { useState } from "react"

export const ItemCount = ({max}) => {
    const [counter, setCounter] = useState(1)

    const handleRestar = () => {
        counter > 1 && setCounter(counter - 1)
    }

    const handleSumar = () => {
        counter < max && setCounter(counter + 1)
    }

    return(
        <div className="btnscard">
            <button onClick={handleRestar} className="btn-dark1">-</button>
            <span className="cantc">{counter}</span>
            <button onClick={handleSumar} className="btn-dark1">+</button>
        </div>
    )
}