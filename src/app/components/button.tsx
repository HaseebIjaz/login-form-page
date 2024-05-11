'use client'
import React from 'react'

type Props = {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    className?:string;
}

const Button = (props: Props) => {
    const { onClick, className } = props;
  return (
    <div onClick={onClick} className={className}>Button</div>
  )
}

export default Button