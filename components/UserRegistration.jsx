'use client'
import React from 'react'
import InputBox from './InputBox'
import { useForm } from "react-hook-form"
import toast, { Toaster } from 'react-hot-toast'
const UserRegistration = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const handleFormSubmit = (data) =>{
          console.log(data)
          let error = ''
          switch (true) {
            case (!data.userName):
              error =  "Name is required"
              break;
            case !data.userEmail:
              error =  "Email is required"
              break;
            case !data.userPhone:
              error =  "Phone is required"
              break;
            case !data.userOccupation:
              error =  "Occupation is required"
              break;
            default:
              error=""
              break;
          }
          if(error.length > 0 ){
            toast.error(error);
            return;
          }
          toast.success("form data successfully submitted")
      }
  return (
    <div className='border-8 flex flex-col border-blue-400 rounded-md py-10 mx-auto mt-4 max-w-2xl px-10'>
        <form action="" onSubmit={handleSubmit((data)=>handleFormSubmit(data))}>
        <InputBox placeholder="User Name" register={register} errors = {errors.userName} title="Name" htmlFor="userName" type="text" />
        <InputBox placeholder="User Email" register={register} errors = {errors.userEmail} title="Email" htmlFor="userEmail" type="email" />
        <InputBox placeholder="User Phone" register={register} errors = {errors.userPhone} title="Phone" htmlFor="userPhone" type="text" />
        <InputBox placeholder="User Occupation" register={register} errors = {errors.userOccupation} title="Occupation" htmlFor="userOccupation" type="text" />

        <div className='mt-3'>
        <button className='p-2 mx-auto flex  bg-blue-500 rounded-md text-white' type='submit'>Register</button>
        </div>
        </form>
        <Toaster / >
        
    </div>
  )
}

export default UserRegistration