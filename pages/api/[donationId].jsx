import { useRouter } from 'next/router';
import React from 'react'

const donationId = () => {
    const router = useRouter();
    let { donationId } = router.query;
    donationId = parseInt(donationId);
    
  return (
    <div>Donation id page</div>
  )
}

export default donationId