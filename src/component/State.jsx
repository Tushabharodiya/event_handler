import React, { useState } from 'react'

const State = () => {
    let [count, setCount] = useState(0)


    let submit = () => {
        count += 1;
        console.log(count);
    }

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <h1>{count}</h1>
            <button onClick={() => setCount(count - 1)}>-</button>
            <br /><br />
            <button onClick={submit}>submit</button>
        </div>
    )
}

export default State
