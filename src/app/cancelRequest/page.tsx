'use client'
import React, { useEffect, useState } from 'react'

type Props = {}

const page = (props: Props) => {
    const [id, setId] = useState(1);
    const handleOnClick = () => {
        setId(prev => prev+1);
    } 
    return (
    <div>
        <button onClick={handleOnClick}> Show me a different Post</button>
        <Post id={id}/>
    </div>  )
}

const Post = ({id}: {id:number}) => {
    const [text, setText] = useState("");
    const controller = new AbortController();

    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${id}`,{
            signal:controller.signal
        })
        .then((res) => res.json())
        .then((data) => setText(data.body))
      return () => {
        controller.abort();
      }
    }, [id])
    
    return<div>{text}</div>
}
export default page