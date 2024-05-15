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
        e.preventDefault()
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;
              // You can use any geocoding service to convert coordinates to human-readable address
              // For this example, let's just set it as coordinates
              setPickUpPoint(`Latitude: ${latitude}, Longitude: ${longitude}`);
            },
            (error) => {
              console.error('Error getting current location:', error);
              alert('Error getting current location. Please try again.');
            }
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
            case pickUpPoint.length == 0 && !data.pickUpPoint:
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
    <div className='border-8 flex flex-col border-blue-400 rounded-md py-10 mx-auto mt-4 max-w-2xl px-10'>
        <form action="" onSubmit={handleSubmit((data)=>handleFormSubmit(data))}>
            <div className='flex justify-center items-center'>
                <label className='w-1/4'  htmlFor="category">Category</label>
            <select {...register("Category")} className=' rounded-md w-full px-4 py-2 drop-shadow-lg border-2 border-black' name="Category" id="category">
                <option value="Food">Food</option>
                <option value="Clothes">Clothes</option>
                <option value="Books">Books</option>
                <option value="Toys">Toys</option>
                <option value="Other">Other</option>
            </select>
            </div>
            <InputBox placeholder="If Other please specify" errors={errors.OtherInfo} register={register} title="OtherInfo" htmlFor="otherInfo" type="text" />
            <InputBox placeholder="If Food Explain dish & Expiry in Hours" errors={errors.Explaination} register={register} title="Explaination" htmlFor="Explaination" type="text" />
        <InputBox placeholder="PickUp point" errors={errors.pickUpPoint} register={register} title="pickUpPoint" htmlFor="pickUpPoint" type="text" /> 
        <button className='p-2 mt-3 flex  bg-black rounded-md text-white' onClick={(e)=>handleGetCurrentLocation(e)}>Select Current Location</button>
        <div className='mt-3'>
        <button className='p-2 mx-auto flex  bg-blue-500 rounded-md text-white' type='submit'>Register</button>
        </div>
        <Toaster />
        </form>
        
    </div>
  )
}

export default Donar