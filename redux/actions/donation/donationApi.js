export async function addDonationApi (data){
 

  return fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/donation`,{
    method:"POST",
    headers:{   
      "Content-Type":"application/json"
    },
    body:JSON.stringify(
      data
    )
  }).then((res)=>{
    
    return res.json()
  }).then((data)=>{ 
    return data
  })
}
export async function orgRegistrationApi (data){
 

  return fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/OrgRegister`,{
    method:"POST",
    headers:{   
      "Content-Type":"application/json"
    },
    body:JSON.stringify(
      data
    )
  }).then((res)=>{
    
    return res.json()
  }).then((data)=>{ 
    return data
  }).catch((err)=>{
    return err
  })
}
export async function orgLoginApi (data){
 

  return fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/OrgLogin`,{
    method:"POST",
    headers:{   
      "Content-Type":"application/json"
    },
    body:JSON.stringify(
      data
    )
  }).then((res)=>{
    
    return res.json()
  }).then((data)=>{ 
    return data
  }).catch((err)=>{
    return err
  })
}
export async function claimDonationApi (data){
  const{id,orgId} = data;
  return fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/updateDonation/${id}`,{
    method:"PATCH",
    headers:{   
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      claimedBy: orgId
    })
  }).then((res)=>{
    
    return res.json()
  }).then((data)=>{ 
    return data
  })
}
export async function getDonationByIdApi (id){
  return fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/getDonationById/${id}`,{
    method:"GET",
    headers:{   
      "Content-Type":"application/json"
    }
  }).then((res)=>{
    
    
    return res.json()
  }).then((data)=>{ 
    return data
  })
}
