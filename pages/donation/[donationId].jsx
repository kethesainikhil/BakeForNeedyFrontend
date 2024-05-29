'use client'
import React from 'react'
import DonationIdComponent from '../../components/DonationIdComponent'
const donationIdPage = ({donationId}) => {

    
  return (
    <div>
        <DonationIdComponent donationId={donationId} />
    </div>
  )
}
export async function getServerSideProps(context) {
    const { params } = context;
    const { donationId } = params; // Get the id from the dynamic route
  
    // Fetch data based on the id
    // Example: const data = await fetchData(id);
  
    return {
      props: {
        donationId,
      },
    };
  }

export default donationIdPage