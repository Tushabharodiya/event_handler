import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const [count, setcount] = useState(0)

    useEffect(() => {
        setInterval(() => {
            if (count <= 10) {
                setcount(count + 1)
            }
        }, 1000)
    },[])
    return (
        <>
        <br /><br />
        <h1>useeffect</h1>
            {count}
        </>
    )
}

export default Useeffect
