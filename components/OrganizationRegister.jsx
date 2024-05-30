'use client'
import React, { useEffect, useState } from 'react'
import InputBox from './InputBox'
import { useForm } from "react-hook-form"
import toast,{Toaster} from 'react-hot-toast'
import {useDispatch, useSelector} from "react-redux"
import { orgRegistrationAsync } from '../redux/actions/donation/donationSlice'
import { useRouter } from 'next/router'
import Link from 'next/link'
const OrganizationRegister = () => {
  const [loading,setLoading] = useState(true)
  const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const orgDetails = useSelector((state)=>state.donation.OrgDetails)
      const dispatch = useDispatch();
      const handleFormSubmit = (data) =>{
          let error = ''
          switch (true) {
            case (!data.orgName):
              error =  "Name is required"
              break;
            case !data.orgEmail:
              error =  "Email is required"
              break;
            case !data.orgPassword:
              error = "Password is required"
              break;
              case data.orgPassword.length < 8:
                error = "Password Length should be more than 7 characters"
                break;
            case !data.orgPhone:
              error =  "Phone is required"
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
          dispatch(orgRegistrationAsync(data))
          setLoading(false);
      }
      useEffect(()=>{
        if(orgDetails?.orgId){
          localStorage.setItem("orgDetails",JSON.stringify(orgDetails))
          setLoading(true);
          toast.success("Registration success!!!")
          if(orgDetails.isVerified){
            router.push("/Verified")
          }
          if(!orgDetails.isVerified){
            router.push("/WaitList")
          }
        }
      },[orgDetails])
  return (
    <div>
      <div className='border-8 my-4 mx-2  border-gray-500  flex flex-col text-white bg-black  rounded-md py-10  sm:mx-auto max-w-2xl px-10'>
       {
        loading ? <div> <form action="" onSubmit={handleSubmit((data)=>handleFormSubmit(data))}>
        <InputBox placeholder="Organization Name" errors={errors.orgName} register={register} title="Name" htmlFor="orgName" type="text"  />
        <InputBox placeholder="Organization Email" errors={errors.orgEmail} register={register} pattern="^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$" title="Email" htmlFor="orgEmail" type="email" />
        <InputBox placeholder="Enter Your Password" register={register} errors = {errors.orgPassword} title="Password" htmlFor="orgPassword" type="password" />

        <InputBox placeholder="Organization Phone" errors={errors.orgPhone} register={register} title="Phone" htmlFor="orgPhone" type="text" />
        <InputBox placeholder="Organization Website (Optional)" errors={errors.orgWebsite} register={register} title="Website" htmlFor="orgWebsite" type="text" />
        <InputBox placeholder="Organization Certificate Number" errors={errors.orgCertificate} register={register} title="Certificate" htmlFor="orgCertificate" type="text" />
        
<div className='flex flex-col sm:flex-row sm:gap-10 gap-4  sm:mt-4 mt-2'>
            <div className='flex sm:w-1/2 flex-col sm:flex-row lg:flex-row xl:flex-row md:flex-row sm:justify-center sm:items-center'>
                <label className='sm:w-1/4'  htmlFor="State">State</label>
            <select {...register("State")} className=' rounded-md w-full px-4 py-2 drop-shadow-lg border-2 border-gray-600 bg-black text-white' name="State" id="State">
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Tamilnadu">Tamilnadu</option>
                <option value="Telangana">Telangana</option>
            </select>
            </div>
            <div className='flex sm:w-1/2 flex-col sm:flex-row lg:flex-row xl:flex-row md:flex-row sm:justify-center sm:items-center'>
                <label className='sm:w-1/4'  htmlFor="City">City</label>
            <select {...register("City")} className=' rounded-md w-full px-4 py-2 drop-shadow-lg border-2 border-gray-600 bg-black text-white' name="City" id="City">
                <option value="Anantapur">Anantapur</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Chennai">Chennai</option>
  
            </select>
            </div>
            </div>
        <div className='flex mt-6 p-3'>
        <textarea className='p-3 bg-black border-2 border-gray-600' name="OrganizationAddress" id="" cols="75" rows="5" {...register("OrganizationAddress")} placeholder="Enter your organization's full address"></textarea>
        </div>

        <div className='mt-3'>
        <button className='p-2 mx-auto flex hover:bg-gradient-to-tr hover:from-pink-500 hover:to-purple-500   bg-gradient-to-r from-purple-500 to-pink-500  rounded-md text-white' type='submit'>Register</button>
        </div>
        <Toaster />
        </form>
        {
          loading && <div className='text-slate-400 text-center mt-2'>Already have an account? <Link className='text-purple-500' href="/orgLogin">Login</Link></div>
        }
        </div>
        : <h1>Loading...</h1>
       }
        
    </div>

    </div>
    
  )
}

export default OrganizationRegister