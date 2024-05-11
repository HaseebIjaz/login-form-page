import React from 'react'

type Props = {
  heading: string;
  inputType: React.HTMLInputTypeAttribute;
  id: string;
  name: string;
  helpText?: string;
  containerClass?: string;
  placeholder?: string;
}

const InputWithHeading = (props: Props) => {
  const { heading, inputType, id, name, helpText, containerClass = "",placeholder } = props;
  return (
    <div className={`${containerClass}`}>
      <label htmlFor={id}>{heading}</label>
      <input type={inputType} id={id} className='w-full block border border-gray-400 py-2 px-4 rounded focus:outline-none focus:border-gray-700' name={name} placeholder={placeholder} />
      {helpText && <p className='text-sm text-gray-500'>{helpText}</p>}
    </div>
  )
}

export default InputWithHeading