import { useEffect, useState } from "react"

export default function Test() {
  const [tdata, setTdata]=useState();
 
    //비동기처리를 할 때 밑의 문장은 처리하지 않는다.
    //await이 끝나야 다음 밑의 문장이 실행된다.
    //fetch가 끝날 때까지 기다렸다가 response json이 실행된다.
  const getfetchData=async (url)=>{      
    const resp=await fetch(url);
    const data=await resp.json();
    setTdata(data)
    
  }
  
  
  useEffect(()=>{
    let url = 'http://localhost:3005/posts'
    getfetchData(url)
  },[])

  useEffect(()=>{
   if (!tdata) return
   
   console.log(tdata)
   let tags=tdata.map(item=>
                           item['title'])
                          
  },[tdata])

  

  return (
    <div>
      jsonserver test
      {tags}
    </div>
  )
}
