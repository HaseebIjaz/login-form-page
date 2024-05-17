"use client"
import React, { useState } from 'react'

type Props = {}

const SyncStatePage = (props: Props) => {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
    }
  return (
    <div>
        <button onClick={handleCount}>Increase Count by 4</button>
        <p>count : {count}</p>
    </div>
  )
}

export default SyncStatePage