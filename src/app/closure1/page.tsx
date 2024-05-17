'use client'
import React, { useEffect, useState } from 'react'

type Props = {}

const Closure1Page = (props: Props) => {
    const [first, setFirst] = useState(0);
    useEffect(() => {
        const i = setInterval(() => {
            setFirst(first + 1);
        },1000)
      return () => {
        clearInterval(i);
    }
    }, [first])
    
  return (
    <div>{first}</div>
  )
}

export default Closure1Page