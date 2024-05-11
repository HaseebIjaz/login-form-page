import React from 'react'
import InputWithHeading from './inputWithHeading'

type Props = {}

const LoginForm = (props: Props) => {
    return (
        <div className='grid sm:grid-cols-2 gap-4 m-4'>
            <InputWithHeading heading='Email' inputType={"email"} id={"user-email"}/>
            <InputWithHeading heading='Password' inputType={"password"} id={"user-password"}/>
        </div>
    )
}

export default LoginForm