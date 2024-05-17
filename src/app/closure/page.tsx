'use client'
import React, { useEffect, useState } from 'react'

type Props = {}

const ClosurePage = (props: Props) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("effect");

        const id = setInterval(()=>{
            console.log("interval: ",count);
            setCount(prev => prev+1)
        },5000)
        return () => {
            clearInterval(id);
        }
    }, [])
    
    return (
    <div>
        <p>Count: {count}</p>
    </div>
  )
}

export default ClosurePage