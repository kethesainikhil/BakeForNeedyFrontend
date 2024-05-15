'use client'
import React from 'react'
import InputBox from './InputBox'
import { useForm } from "react-hook-form"
import toast,{Toaster} from 'react-hot-toast'
const OrganizationRegister = () => {
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
            case (!data.orgName):
              error =  "Name is required"
              break;
            case !data.orgEmail:
              error =  "Email is required"
              break;
            case !data.orgPhone:
              error =  "Phone is required"
              break;
            case !data.orgWebsite:
              error =  "Website is required"
              break;
            case !data.orgCertificate:
              error = "Certificate is required"
              break;
            case !data.OrganizationAddress:
              error = "Address is required"
              break;
            default:
              error=""
              break;
          }
  
          if (error.length > 0) {
            toast.error(error);
            return;
          }
          console.log(errors)
          console.log(data);
          toast.success("form data successfully submitted")
      }
  return (
    <div className='border-8 flex flex-col border-blue-400 rounded-md py-10 mx-auto mt-4 max-w-2xl px-10'>
        <form action="" onSubmit={handleSubmit((data)=>handleFormSubmit(data))}>
        <InputBox placeholder="Organization Name" errors={errors.orgName} register={register} title="Name" htmlFor="orgName" type="text"  />
        <InputBox placeholder="Organization Email" errors={errors.orgEmail} register={register} pattern="^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$" title="Email" htmlFor="orgEmail" type="email" />
        <InputBox placeholder="Organization Phone" errors={errors.orgPhone} register={register} title="Phone" htmlFor="orgPhone" type="text" />
        <InputBox placeholder="Organization Website" errors={errors.orgWebsite} register={register} title="Website" htmlFor="orgWebsite" type="text" />
        <InputBox placeholder="Organization Certificate Number" errors={errors.orgCertificate} register={register} title="Certificate" htmlFor="orgCertificate" type="text" />
        <div className='flex mt-6 p-3'>
        <textarea className='p-3 border-2 border-black' name="OrganizationAddress" id="" cols="75" rows="10" {...register("OrganizationAddress")} placeholder="Enter your organization's full address"></textarea>
        </div>

        <div className='mt-3'>
        <button className='p-2 mx-auto flex  bg-blue-500 rounded-md text-white' type='submit'>Register</button>
        </div>
        <Toaster />
        </form>
        
    </div>
  )
}

export default OrganizationRegister