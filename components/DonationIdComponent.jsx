'use client'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import {useDispatch , useSelector} from "react-redux"
import { donationClaimAsync, getDonationByIdAsync, increment } from '../redux/actions/donation/donationSlice';
const DonationIdComponent = ({donationId}) => {
const router = useRouter();
    const dispatch = useDispatch();
    const donationData = useSelector((state)=>state.donation.donationData)
    const handleClick = ()=>{
      const orgDetails = localStorage.getItem("orgDetails")
      if(!orgDetails){
        router.push("/orgLogin")
      }
      else{
        const data = {
          orgId : JSON.parse(orgDetails)?.orgId,
          id:donationId
        }
        dispatch(donationClaimAsync(data));
        router.push("/claimed")

      }
      
    }
    useEffect(()=>{
      if(donationId){
        dispatch(getDonationByIdAsync(donationId))
      }
    },[donationId,])
  return (
    <div className='text-center flex justify-center items-center text-white flex-col h-screen'>
{
  donationData ?        !donationData.isAccepted ? <div><h1>Claim your Donation</h1>
  <h2>Donation Id:{donationId}</h2>
  <p>DonationCategory: {donationData.category}</p>
  {
   donationData.catergory == "food"
   && <p>Explanation: {donationData.Explanation}</p>
   
  }
  {
   donationData.catergory == "other"
   && <p>OtherInfo: {donationData.OtherInfo}</p>
  }
  <p>Donar PhoneNo : {donationData.donarPhoneNo}</p>
  <p>Donor Address : {donationData.donarAddress}</p>
  <p>Donor City : {donationData.donarCity}</p>
  <p>Donor State : {donationData.donarState}</p>
  <button className='bg-green-500 px-6 py-3 rounded-lg' onClick={handleClick}>Claim</button></div>
  :<div>
    <div className='text-red-500 mx-4'>Sorry Its Already Claimed We request you to keep an eye on your mail for Further Donations</div>
  <div className="relative text-white rounded-lg mt-16 px-6  py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-tr hover:from-pink-500 hover:to-purple-500 w-32  flex mx-auto justify-center">
  <button className="rounded-lg" onClick={() => router.push("/")}>
    Home
  </button>
</div>
  </div>:
  <div>getting data please wait</div>
}
    </div>
  )
}

export default  DonationIdComponent