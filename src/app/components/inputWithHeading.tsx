import React from 'react'

type Props = {
  heading:string;
  inputType:React.HTMLInputTypeAttribute;
  id: string;
}

const InputWithHeading = (props: Props) => {
  const {heading, inputType, id} = props;
  return (
    <div>
      <label htmlFor={id}>{heading}</label>
      <input type={inputType} id={id}/>
    </div>

  )
}

export default InputWithHeading