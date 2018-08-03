import { ValidationError } from "../../node_modules/@types/yup";

export const formatYupError = (err: ValidationError) => {
    const errors: Array<{path: string; message: string}> = [];
    err.inner.forEach(e => {
        errors.push(
            {
                path: e.path,
                message: e.message
            },
        )
    });
    return errors;
}