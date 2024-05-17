"use client";
import React, { ChangeEvent, useState } from "react";
import InputWithHeading from "./inputWithHeading";
import { AiFillLock } from "react-icons/ai";
import Button from "./button";
import { loginValidation } from "@/validations/LoginValidations";
import { ValidationError } from "yup";
import { getYupInnerErrors } from "@/utils";

type Props = {};

const LoginForm = (props: Props) => {
  const [formState, setFormState] = useState({});
  const [errorsState, setErrorsState] = useState<Record<string, string>>({});
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form
      action=""
      className="rounded px-4 my-32 max-w-3xl mx-auto space-y-6 border-t border-teal-200 py-5 shadow-lg"
      onSubmit={(e) => {
        e.preventDefault();
        try {
          loginValidation.validateSync(formState, { abortEarly: false });
        } catch (error) {
          if (error instanceof ValidationError) {
            setErrorsState(getYupInnerErrors(error));
          }
        }
      }}
    >
      <div>
        <div className="flex flex-row">
          <AiFillLock size={32} />
          <h1 className="text-3xl font-semibold">Login Form</h1>
        </div>
        <p className="text-sm text-gray-500">
          Type your Email and Password to Login
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <InputWithHeading
          isDisabled={false}
          onChangeHandler={onChangeHandler}
          containerClass="w-3/4"
          heading="Email"
          inputType={"email"}
          id={"user-email"}
          name={"user-email"}
          placeholder="user@mail.com"
          errorMessage={errorsState["user-email"]}
          
        />
        <InputWithHeading
          isDisabled={false}
          onChangeHandler={onChangeHandler}
          containerClass="w-3/4"
          heading="Password"
          inputType={"password"}
          id={"user-password"}
          name={"user-password"}
          helpText={"Dont share your password !"}
          placeholder="password"
          errorMessage={errorsState["user-password"]}
        />
      </div>
      <button
        type="submit"
        disabled={
          Object.keys(errorsState).length > 0 ||
          Object.keys(formState).length < 2
        }
        className={
          "bg-teal-600 hover:bg-teal-800 px-4 py-2 text-center w-1/6 rounded text-white cursor-pointer font-semibold disabled:opacity-55 disabled:pointer-events-none"
        }
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
