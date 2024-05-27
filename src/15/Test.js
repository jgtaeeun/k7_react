import { useEffect, useState } from "react"

export default function Test() {
  const [tdata, setTdata]=useState();
  const [content, setContent]=useState();
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
   let tm = tdata.map(item=>    <tr key={item.title} className='w-1/2 flex justify-between items-center bg-white text-black font-bold '>
        <td className="whitespace-nowrap px-6 py-3 text-right">{item.id}</td>
        <td className="whitespace-nowrap px-6 py-3 text-right">{item.title}</td>
        <td className="whitespace-nowrap px-6 py-3 text-right">{item.author}</td>
        </tr>
    )
   setContent(tm)
                           
                  
                     
  },[tdata])

  

  return (
    <div  className='w-full flex flex-col justify-center items-center'>
       <tr className='w-1/2 flex justify-between items-center bg-white text-black font-bold  '>
              <th scope="col" className="px-6 py-3">id</th>
              <th scope="col" className="px-6 py-3">title</th>
              <th scope="col" className="px-6 py-3">author</th>   
      </tr>
      {content}
    </div>
  )
}
