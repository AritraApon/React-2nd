import { useState } from "react"

export default function Click() {

    const [add, setAdd] = useState(0);

    const addOne = () => {
        setAdd(add + 1)
    }

    const removeOne = () => {
        setAdd(add - 1)
    }

    const restNum = () => {
        setAdd(0)
    }


    return (
        <div className="card">
            <h1 >Count:  {add}</h1>
            <button className='btn' onClick={addOne}> +1</button>
            <button className='btn' onClick={removeOne}> -1</button>
            <button className='btn' onClick={restNum}>Reset</button>
        </div>
    )
}