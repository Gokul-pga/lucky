import { Typography } from "@mui/material";
import { headers } from "next/dist/client/components/headers";
import React, { useEffect, useState } from "react";

function test() {
  const [get, setGet] = useState([]);
  const allDatas=async()=>{
    await fetch("http://localhost:4000/getallUsers", {
        method: "GET"
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
  }

useEffect(() => {
    allDatas()
    
}, []);
console.log(get);

return(
    <>
    
   {get.map((item)=>{
    const {name}=item
    return 
    (<Typography >{name}</Typography> )

   })}
   
    </>
)
}
export default test;
