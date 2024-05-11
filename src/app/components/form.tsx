'use client';
import React, { ChangeEvent, useState } from 'react'
import InputWithHeading from './inputWithHeading'
import { AiFillLock } from "react-icons/ai";
import Button from './button';


type Props = {}

const LoginForm = (props: Props) => {
    const [formState, setFormState] = useState({});
    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFormState({...formState,
            [e.target.name]: e.target.value
         })
    }
    console.log({formState});
    return (
        <form action="" className='rounded px-4 my-32 max-w-3xl mx-auto space-y-6 border-t border-teal-200 py-5 shadow-lg'>
            <div>
                <div className='flex flex-row'>
                    <AiFillLock size={32}/>
                    <h1 className='text-3xl font-semibold'>Login Form</h1>
                </div>
                <p className='text-sm text-gray-500'>Type your Email and Password to Login</p>
            </div>
            <div className='grid sm:grid-cols-2 gap-4'>
                <InputWithHeading onChangeHandler={onChangeHandler} containerClass='w-3/4' heading='Email' inputType={"email"} id={"user-email"} name={"user-email"} placeholder='user@mail.com'/>
                <InputWithHeading onChangeHandler={onChangeHandler} containerClass='w-3/4' heading='Password' inputType={"password"} id={"user-password"} name={"user-password"} helpText={'Dont share your password !'} placeholder='password'/>
            </div>
            <Button text={'Login'} onClick={(e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {}} className={'bg-teal-600 hover:bg-teal-800 px-4 py-2 text-center w-1/6 rounded text-white cursor-pointer font-semibold'}/>
        </form>
    )
}

export default LoginForm