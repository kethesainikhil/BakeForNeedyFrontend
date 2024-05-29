'use client'
import React, { useEffect, useState } from 'react'
import InputBox from './InputBox'
import { useForm } from "react-hook-form"
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { orgLoginAsync } from '../redux/actions/donation/donationSlice'
import { useRouter } from 'next/router'
import Link from 'next/link'
const OrgLogin = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const [loading,setLoading] = useState(false);
      const dispatch = useDispatch();
      const orgDetails = useSelector((state)=> state.donation.OrgDetails)
      const handleFormSubmit = (data) =>{
          console.log(data)
          let error = ''
          switch (true) {
            case !data.orgEmail:
              error =  "Email is required"
              break;
            case !data.orgPassword:
              error = "Password is required"
              break;
            default:
              error=""
              break;
          }
          if(error.length > 0 ){
            toast.error(error);
            return;
          }
          setLoading(true)
        dispatch(orgLoginAsync(data));
      }
      const router = useRouter();
      useEffect(()=>{
        console.log(orgDetails,"org Details")
        if(orgDetails?.msg){
          setLoading(false)
          toast.error(orgDetails.msg)
          router.push("/orgLogin")
        }
    
        if(orgDetails?.orgId){
          setLoading(false);
          localStorage.setItem("orgDetails",JSON.stringify(orgDetails))
          if(orgDetails.isVerified){
            router.push("/Verified")

          }
          if(!(orgDetails.isVerified)){

            router.push("/WaitList");
          }

        }
      },[orgDetails])
  return (
    <div>
      {
      !loading ? <div className='border-8 mx-4 flex flex-col border-purple-500 rounded-md py-10 text-gray-200 sm:mx-auto mt-4 max-w-2xl px-10'>
      <form action="" onSubmit={handleSubmit((data)=>handleFormSubmit(data))}>
      <InputBox placeholder="Enter Your Organization Email" register={register} errors = {errors.orgEmail} title="Email" htmlFor="orgEmail" type="email" />
      <InputBox placeholder="Enter Your Password" register={register} errors = {errors.orgPassword} title="Password" htmlFor="orgPassword" type="password" />


      <div className='mt-3'>
      <button className='p-2 mx-auto flex  hover:bg-gradient-to-tr hover:from-pink-500 hover:to-purple-500   bg-gradient-to-r from-purple-500 to-pink-500  rounded-md text-white' type='submit'>Login</button>
      </div>
      </form>
      <Toaster / >
      

{
      !loading &&   <div className='text-slate-400 text-center mt-2'>Don't have an account? <Link className='text-purple-500' href="/orgRegister">Signup</Link></div> 

}
  </div> : <div className='h-screen text-slate-300 text-center '>Logging in...</div>
    }

    </div>
      
    
  )
}

export default OrgLogin