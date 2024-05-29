'use client'
import React, { useState } from 'react'
import InputBox from './InputBox'
import { useForm } from "react-hook-form"
import toast,{Toaster} from 'react-hot-toast'
import { useRouter } from 'next/router'
import {useDispatch} from "react-redux"
import { addDonationAsync } from '../redux/actions/donation/donationSlice'
const Donar = () => {
  const[isShowAdressBar,setIsShowAdressBar] = useState(true);
  const dispatch = useDispatch()

  const [imageUrl, setImageUrl] = useState(null);
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const [pickUpPoint,setPickUpPoint] = useState("")
      const handleChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
        console.log(imageUrl)
    };
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
              error =  "Address is mandtory"
              break;
              case !data.selfDelivery && data.State.length == 0 :
              error =  "State is required"
              break;
              case !data.selfDelivery && data.City.length == 0 :
              error =  "City is required"
              break;
              case !data.phoneNo   :
              error =  "Phone Number is required"
              break;
              case data.phoneNo.length < 10 || data.phoneNo.length > 10 :
                error = "Phone number must be 10 digits"
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
          dispatch(addDonationAsync(data));
          toast.success("form data successfully submitted")
          setTimeout(() => {

            router.push('/successpage')
          }, 1000);
      }
  return (
    <div className='border-8  mx-2 my-4 flex flex-col  border-gray-500 text-white  rounded-md py-10 sm:mx-auto max-w-2xl px-10'>
        <form action="" onSubmit={handleSubmit((data)=>handleFormSubmit(data))}>
            <div className='flex flex-col sm:flex-row lg:flex-row xl:flex-row md:flex-row sm:justify-center sm:items-center'>
                <label className='sm:w-1/4'  htmlFor="category">Category</label>
            <select {...register("Category")} className=' rounded-md w-full px-4 py-2 drop-shadow-lg border-2 border-gray-600 bg-black text-white' name="Category" id="category">
                <option value="food">Food</option>
                <option value="clothes">Clothes</option>
                <option value="books">Books</option>
                <option value="toys">Toys</option>
                <option value="other">Other</option>
            </select>
            </div>
            <InputBox placeholder="If Other please specify" errors={errors.OtherInfo} register={register} title="OtherInfo" htmlFor="otherInfo" type="text" />
            <InputBox placeholder="If Food Explain dish & Expiry in Hours" errors={errors.Explaination} register={register} title="Explaination" htmlFor="Explaination" type="text" />
        <InputBox placeholder="Enter Your Phone Number "  errors={errors.phoneNo} register={register} title="Phone No." htmlFor="phoneNo" type="number" /> 

            <div className='pt-6  text-center flex gap-10 sm:gap-20'>
        <input type="checkbox" onClick={()=>setIsShowAdressBar(!isShowAdressBar)} {...register("selfDelivery")} className='h-10 w-10 ' /> 
        <p className='text-lg text-gray-400 font-bold gradient-text'>Opt to Deliver  By MySelf</p>
        </div>
<div className={`${!isShowAdressBar ? "hidden" : "block"}`}>
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
            
        <InputBox placeholder="Enter Your Complete Address " errors={errors.pickUpPoint} register={register} title="Address" htmlFor="pickUpPoint" type="text" /> 
       
</div>

        <div className='mt-3'>
        <button className='p-2 mx-auto flex  hover:bg-gradient-to-tr hover:from-pink-500 hover:to-purple-500   bg-gradient-to-r from-purple-500 to-pink-500  rounded-md text-white' type='submit'>Register</button>
        </div>
        <Toaster />
        </form>
        
    </div>
  )
}

export default Donar