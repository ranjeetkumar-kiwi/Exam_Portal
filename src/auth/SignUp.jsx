import React from 'react'
import { useDispatch } from 'react-redux'
import { signUpUser } from '../redux/authSlice'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { customerSignupSchema } from '../constants/ValidationSchema'

const SignUp = () => {
  const dispatch = useDispatch()
  const handleSignUp = (values) => {
    console.log(values)
    dispatch(signUpUser(values))
  }
  return (
    <div className="font-sans antialiased bg-grey-lightest">
      {/* Top Nav */}
      <div className="w-full bg-grey-lightest" style={{ paddingTop: '4rem' }}>
        <div className="container mx-auto py-8">
          <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
            <div className=" items-center py-4 px-8 text-black text-xl border-b border-grey-lighter">Register Now</div>
            <div className="py-4 px-8">
              <Formik initialValues={{ email: '', password: '' }} validationSchema={customerSignupSchema} onSubmit={handleSignUp}>
                {({ touched, errors, values, isValid }) => (
                  <Form className="mt-6" noValidate>
                    <div className="flex mb-4">
                      <div className="w-1/2 mr-1">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="first_name">
                          First Name
                        </label>
                        <Field
                          type="text"
                          name="first_name"
                          placeholder="Enter First Name"
                          autoComplete="off"
                          className={`appearance-none border rounded w-full py-2 px-3 text-grey-darker ${
                            touched.first_name && errors.first_name ? 'is-invalid' : ''
                          }`}
                        />
                        <ErrorMessage component="div" name="first_name" className="text-red-600" />
                      </div>
                      <div className="mb-2">
                        <label htmlFor="last_name" className="block text-grey-darker text-sm font-bold mb-2">
                          Last Name
                        </label>
                        <Field
                          type="text"
                          name="last_name"
                          placeholder="Enter Last Name"
                          autoComplete="off"
                          className={`appearance-none border rounded w-full py-2 px-3 text-grey-darker ${
                            touched.last_name && errors.last_name ? 'is-invalid' : ''
                          }`}
                        />
                        <ErrorMessage component="div" name="last_name" className="text-red-600" />
                      </div>
                    </div>
                    <div className="mb-2">
                      <label htmlFor="email" className="block text-grey-darker text-sm font-bold mb-2">
                        Email
                      </label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        autoComplete="off"
                        className={`appearance-none border rounded w-full py-2 px-3 text-grey-darker ${
                          touched.email && errors.email ? 'is-invalid' : ''
                        }`}
                      />
                      <ErrorMessage component="div" name="email" className="text-red-600" />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="password" className="  ">
                        Password
                      </label>
                      <Field
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        autoComplete="off"
                        className={`appearance-none border rounded w-full py-2 px-3 text-grey-darker${
                          touched.password && errors.password ? 'is-invalid' : ''
                        }`}
                      />
                      <ErrorMessage component="div" name="password" className="text-red-600" />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="password" className="  ">
                        Phone
                      </label>
                      <Field
                        type="number"
                        name="phone"
                        placeholder="Enter Phone Number"
                        autoComplete="off"
                        className={`appearance-none border rounded w-full py-2 px-3 text-grey-darker${
                          touched.phone && errors.phone ? 'is-invalid' : ''
                        }`}
                      />
                      <ErrorMessage component="div" name="phone" className="text-red-600" />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                      Sign Up
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <p className="text-center my-4">
            <Link to={'/login'} className="text-grey-dark text-sm no-underline hover:text-grey-darker">
              I already have an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp
