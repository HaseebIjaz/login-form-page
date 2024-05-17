import { ValidationError } from "yup";

export const getYupInnerErrors = (error:ValidationError) => {
    return (error?.inner || []).reduce((acc,currentErr) => {
        if(currentErr.path) {
            acc[currentErr.path] = currentErr.message;
        }
        return acc;
    },{} as Record<string,string>)
}