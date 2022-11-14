import * as Yup from 'yup'
import { validationConst } from './AppConstant'
import { validationMsg } from './StringConstant'

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address format').required('Email is required'),
  password: Yup.string().min(3, 'Password must be 3 characters at minimum').required('Password is required')
})

export const customerSignupSchema = Yup.object().shape({
  first_name: Yup.string().trim().required(validationMsg.firstNameRequired),
  last_name: Yup.string().trim().required(validationMsg.lastNameRequired),
  email: Yup.string().trim().email(validationMsg.emailPattern).required(validationMsg.email),
  password: Yup.string().trim().required(validationMsg.passwordRequired).matches(validationConst.passwordRegex, validationMsg.passwordPattern),
  phone: Yup.string()
    .trim()
    .required(validationMsg.mobileNumberRequired)
    .matches(validationConst.numberRegex, validationMsg.numberMatch)
    .min(10)
    .max(10)
})
