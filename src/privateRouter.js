import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Services from './services';

export default function PriveRouter() {
    const [access,setAccess]=useState(null)
    useEffect(()=>{
        axios.get('http://localhost:5800/home')
        .then((res)=>{
          setAccess(res.data)
        })
      },[access])
  return (
    <div>
        {console.log(access)}
        {access==="we are open"?<Services />:null}
        {/* add other privet  */}
    </div>
  )
}