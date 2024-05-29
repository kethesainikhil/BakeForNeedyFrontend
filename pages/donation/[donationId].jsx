'use client'
import React from 'react'
import DonationIdComponent from '../../components/DonationIdComponent'
import { useRouter } from 'next/router'
const donationIdPage = () => {

  const router = useRouter();
  const { donationId } = router.query
  return (
    <div>
        <DonationIdComponent donationId={donationId} />
    </div>
  )
}

export default donationIdPage