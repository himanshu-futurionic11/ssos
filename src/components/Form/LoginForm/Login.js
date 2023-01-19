import { Button } from 'flowbite-react'
import { Field, Formik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { adminLoginActions } from '../../../Store/Admin-slice'
import {  loginActions } from '../../../Store/Auth-Slice'
import { data } from './const'

const Login = () => {
  const {  userInfo, userId } = useSelector(
    (state) => state.auth
  );
    const dispatch=useDispatch()
    const naviagte=useNavigate()
    const handleSubmit=(values)=>{
        console.log(values);
        if(values.userName==="admin" && values.password==="admin"){
            dispatch(loginActions.login())
            dispatch(adminLoginActions.login())
            naviagte('/dashboard', { replace: true });
        }
        if (values.userName===userInfo && values.password==="1c4Rit27%") {
          dispatch(loginActions.login())
          naviagte('/dashboard', { replace: true });
        }
        if (values.userName===userInfo ) {
          dispatch(loginActions.login())
          naviagte('/dashboard', { replace: true });
        }
        // if (values.userName===userInfo && values.password==="%") {
        //   dispatch(loginActions.login())
        //   naviagte('/dashboard', { replace: true });
        // }
        // if (values.userName===userInfo && values.password==="%") {
        //   dispatch(loginActions.login())
        //   naviagte('/dashboard', { replace: true });
        // }
        // if (values.userName===userInfo && values.password==="%") {
        //   dispatch(loginActions.login())
        //   naviagte('/dashboard', { replace: true });
        // }
        // if (values.userName===userInfo && values.password==="%") {
        //   dispatch(loginActions.login())
        //   naviagte('/dashboard', { replace: true });
        // }
        // if (values.userName===userInfo && values.password==="%") {
        //   dispatch(loginActions.login())
        //   naviagte('/dashboard', { replace: true });
        // }
        
       
      }
  return (
    <Formik
      initialValues={data}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, isSubmitting }) => (
        
      <div className='flex items-center justify-center  '>
          <div className="max-w-2xl mt-40 bg-gray-50 dark:bg-gray-900">
          <div className=" h-full  mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <div className=" overflow-y-auto md:flex-row">
              <main className="sm:py-5">
                <form
                  className="w-full"
                  autoComplete="off"
                  onSubmit={handleSubmit}   
                >
                    <div style={{backgroundImage:'url(https://www.aaawindows4less.com/wp-content/uploads/2016/11/stormy-windows-wide.jpg)'}}
                    className='h-40 flex items-center justify-center'
                    >
                        <h1   className="mb-4 text-xl text-center font-semibold text-white dark:text-gray-200 ">
                           <span className='text-green-400'>Sign In For</span>  Compliance Data
                        </h1>
                    </div>
                    <div className=''>
                        <label>
                        <Field
                            type="text"
                            className="mt-4  w-full focus:outline-none focus:ring-0  peer"
                            placeholder="ENTER_USERNAME"
                            name="userName"
                        />
                        </label>
                        <label>
                        <Field
                            type="password"
                            className="mt-4  w-full focus:outline-none focus:ring-0  peer"
                            placeholder="ENTER_PASSWORD"
                            name="password"
                        />
                        </label>
                        <Button
                            className="mt-4"
                            type="submit"
                            disabled={isSubmitting}
                        >
                        LOGIN
                        </Button>
                    </div>
                </form>
              </main>
            </div>
          </div>
        </div>
      </div>
      )}
    </Formik>
  )
}

export default Login