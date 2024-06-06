import React, { useRef } from 'react'

const Useref = () => {
    const name = useRef()
    let email = useRef()

    let submit = () => {
        let data = {
            name: name.current.value,
            email: email.current.value,
        }
        console.log(data);
    }

    return (
        <div>
            <br /><br />
            <h1>useref</h1>
            <input type="text" ref={name} /><br />
            <input type="text" ref={email} /><br />
            <button onClick={submit}>submit</button>
        </div>
    )
}

export default Useref
