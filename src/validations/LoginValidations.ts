import {object, string, number, date, InferType} from 'yup';

export const loginValidation = object().shape({
    "user-email":string().email().required("Email is required !").min(3),
    "user-password": string().required("Password is required!").min(8)
})