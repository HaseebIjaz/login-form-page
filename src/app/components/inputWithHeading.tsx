import React from 'react'

type Props = {
  heading:string;
  inputType:React.HTMLInputTypeAttribute;
  id: string;
}

const InputWithHeading = (props: Props) => {
  const {heading, inputType, id} = props;
  return (
    <div className='grid sm:grid-cols-2 gap-1 mx-20'>
      <label htmlFor={id}>{heading}</label>
      <input type={inputType} id={id}/>
    </div>

  )
}

export default InputWithHeading