"use client"

import { sign } from "crypto"
import { getProviders, signIn } from "next-auth/react"
import { useState,useEffect } from "react"


type Provider = {
  id:string,
  name:string,
  type:string,
  signinUrl:string,
  callbackUrl: string,
  signinUrlParams?:Record<string,string>|null,
}

type Providers = Record<string,Provider>



const Authproviders = () => {
  const[providers,setProviders] = useState<Providers|null>(null)
  useEffect(() => {
    const fetchProviders = async () => {
      const providers = await getProviders()
      console.log(providers)
      setProviders(providers)
    }
    fetchProviders()
  },[])


  if (providers) {
     return (
    <div>
         {Object.values(providers).map((provider: Provider,i) => (
        <button key={i} > {provider.id}  </button>
        
      ))}
    </div>
  )
  }
 
}

export default Authproviders
