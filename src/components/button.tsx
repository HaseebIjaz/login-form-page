'use client'
import React from 'react'

type Props = {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    className?:string;
    text:string
}

const Button = (props: Props) => {
    const { onClick, className, text } = props;
  return (
    <div onClick={onClick} className={className}>{text}</div>
  )
}

export default Button