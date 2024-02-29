import { useState } from "react"


export const Counter = () => {
    const [counter, setCounter] = useState(0)

    const addCounter = () => setCounter(counter + 1)
    return (
        <>
            <button className="btn btn-primary" onClick={addCounter}>
                counter react {counter}
            </button>
        </>
    )
}
