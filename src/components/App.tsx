
import React, { useState } from 'react'

type Props = {
    value?: number
}
const MyCounter71 = ({ value = 0 }: Props) => {
    const [counter71, setCounter71] = useState(value);

    const onMinus = () => {
        setCounter71((prev) => prev - 1)
    };

    const onPlus = () => {
        setCounter71((prev) => prev + 1)
    };

    return (
        <div>
            <h1>Counter71: {counter71}</h1>
            <button onClick={onMinus}>-</button>
            <button onClick={onPlus}>+</button>
        </div>
    )
}

export default MyCounter71