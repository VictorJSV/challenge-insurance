import * as yup from 'yup';

export type FormValues = {
  name: string;
  email: string;
  deparment: string;
  time: number;
};

export const schema: yup.ObjectSchema<FormValues> = yup.object({
  name: yup
    .string()
    .required('Name is required'),
  email: yup
    .string()
    .required('Email is required')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email is invalid'),
  deparment: yup
    .string()
    .required('Deparment is required'),
  time: yup
    .number()
    .required('Time is required'),
});
