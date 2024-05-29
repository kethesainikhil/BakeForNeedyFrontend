export async function addDonationApi (data){
  console.log(data,"data in api")

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
  console.log(data,"data in api")

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
  console.log(data,"data in api")

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
    console.log(res,"first res")
    return res.json()
  }).then((data)=>{ 
    console.log(data,"second res dksldjflka")
    return data
  })
}
export async function sendEmailApi (data){
  const {sellerId,buyerId,propertyId} = data
  return fetch(`${import.meta.env.VITE_NEXT_PUBLIC_BACKEND_URL}/property/sendEmail`,{
    method:"POST",
    headers:{   
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      sellerId,
      buyerId,
      propertyId
    })
  }).then((res)=>{
    
    return res.json()
  }).then((data)=>{ 
    return data
  })
}
export async function getPropertyApi (id){
  return fetch(`${import.meta.env.VITE_NEXT_PUBLIC_BACKEND_URL}/property/getProperties/${id}`,{
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
export async function getDonationByIdApi (id){
  return fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/getDonationById/${id}`,{
    method:"GET",
    headers:{   
      "Content-Type":"application/json"
    }
  }).then((res)=>{
    
    console.log(res,"first res")
    return res.json()
  }).then((data)=>{ 
    console.log(data,"second res")
    return data
  })
}
export async function getAllPropertiesApi (){
  return fetch(`${import.meta.env.VITE_NEXT_PUBLIC_BACKEND_URL}/property/getAllProperties`,{
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

export async function updatePropertyApi (data){
  const{id} = data;
  delete data.id
  return fetch(`${import.meta.env.VITE_NEXT_PUBLIC_BACKEND_URL}/property/updateProperty/${id}`,{
    method:"PATCH",
    headers:{   
      "Content-Type":"application/json"
    },
    body: JSON.stringify(
      data
    )
  }).then((res)=>{
    
    return res.json()
  }).then((data)=>{ 
    
    return data
  })
}
