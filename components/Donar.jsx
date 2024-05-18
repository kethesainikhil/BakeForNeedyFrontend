'use client'
import React, { useState } from 'react'
import InputBox from './InputBox'
import { useForm } from "react-hook-form"
import toast,{Toaster} from 'react-hot-toast'
const Donar = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const [pickUpPoint,setPickUpPoint] = useState("")
      const handleGetCurrentLocation = (e) => {
        e.preventDefault();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    // Use coordinates for further processing or display
                    setPickUpPoint(`Latitude: ${latitude}, Longitude: ${longitude}`);
                },
                (error) => {
                    let errorMessage = 'Error getting current location. Please try again.';
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            errorMessage = 'User denied the request for Geolocation.';
                            break;
                        case error.POSITION_UNAVAILABLE:
                            errorMessage = 'Location information is unavailable.';
                            break;
                        case error.TIMEOUT:
                            errorMessage = 'The request to get user location timed out.';
                            break;
                        case error.UNKNOWN_ERROR:
                            errorMessage = 'An unknown error occurred.';
                            break;
                    }
                    console.error('Geolocation error:', errorMessage);
                },
                { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
            );
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    };
    
      const handleFormSubmit = (data) =>{
          console.log(data)
          let error = ''
          switch (true) {
            case (!data.Category):
              error =  "Categor is required"
              break;
            case (data.Category == "Other" && !data.otherInfo):
                error =  "OtherInfo is required"
                break;
            case (data.Category == "Food" &&  !data.Explaination):
              error =  "Explanation is required"
              break;
            case !data.selfDelivery && pickUpPoint.length == 0 && !data.pickUpPoint:
              error =  "pickuppoint is required"
              break;
            default:
              error=""
              break;
          }
  
          if (error.length > 0) {
            toast.error(error);
            return;
          }
          data.coordinates = pickUpPoint
          console.log(errors)
          console.log(data);
          toast.success("form data successfully submitted")
      }
  return (
    <div className='border-8 mx-2 my-4 flex flex-col  border-purple-500 text-white  rounded-md py-10 sm:mx-auto max-w-2xl px-10'>
        <form action="" onSubmit={handleSubmit((data)=>handleFormSubmit(data))}>
            <div className='flex flex-col sm:flex-row lg:flex-row xl:flex-row md:flex-row sm:justify-center sm:items-center'>
                <label className='sm:w-1/4'  htmlFor="category">Category</label>
            <select {...register("Category")} className=' rounded-md w-full px-4 py-2 drop-shadow-lg border-2 border-gray-600 bg-black text-white' name="Category" id="category">
                <option value="Food">Food</option>
                <option value="Clothes">Clothes</option>
                <option value="Books">Books</option>
                <option value="Toys">Toys</option>
                <option value="Other">Other</option>
            </select>
            </div>
            <InputBox placeholder="If Other please specify" errors={errors.OtherInfo} register={register} title="OtherInfo" htmlFor="otherInfo" type="text" />
            <InputBox placeholder="If Food Explain dish & Expiry in Hours" errors={errors.Explaination} register={register} title="Explaination" htmlFor="Explaination" type="text" />
            <div className='pt-6  text-center flex gap-10 sm:gap-20'>
        <input type="checkbox" {...register("selfDelivery")} className='h-10 w-10 ' /> 
        <p className='text-lg text-gray-400 font-bold gradient-text'>Opt to Deliver  By MySelf</p>
        </div>
        <InputBox placeholder="PickUp point" errors={errors.pickUpPoint} register={register} title="pickUpPoint" htmlFor="pickUpPoint" type="text" /> 
        
        <button className='p-2 mt-3  flex mx-auto sm:mx-0 md:mx-0 lg:mx-0 xl:mx-0 bg-blue-500 rounded-md text-white' onClick={(e)=>handleGetCurrentLocation(e)}>Select Current Location</button>
        <div className='mt-3'>
        <button className='p-2 mx-auto flex  hover:bg-gradient-to-tr hover:from-pink-500 hover:to-purple-500   bg-gradient-to-r from-purple-500 to-pink-500  rounded-md text-white' type='submit'>Register</button>
        </div>
        <Toaster />
        </form>
        
    </div>
  )
}

export default Donar