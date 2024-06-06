import React, { useState } from 'react'

const Multiplestate = () => {
    const [input, setinput] = useState({})

    let handle = (e) => {
        setinput({ ...input, [e.target.name]: e.target.value, })
    }
    let submit = () => {
        console.log(input);
    }

    return (
        <>
            <div className="container">
                <h1>usestate</h1>
                <br /><br /> <input type="text" name='firstname' onChange={handle} /><br />
                <input type="text" name='email' onChange={handle} /><br />
                <input type="text" name='password' onChange={handle} /><br />
                <button onClick={submit}>click</button>
            </div>
        </>
    )
}

export default Multiplestate
