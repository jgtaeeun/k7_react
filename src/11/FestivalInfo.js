import { useState, useEffect, useRef } from "react"
import TailSelect from "../UI/TailSelect"
import GelleryCard from "../10/GelleryCard"

export default function FestivalInfo() {

  const[festivaldata, setFestivaldata]=useState()
  const refselect = useRef()
  const [ops, setOps]=useState()
  const[selcard, setSelcard]=useState()

  const handleGuselect =()=>{
    console.log(refselect.current.value)
   
    let tags=festivaldata.filter(item=>item.GUGUN_NM===refselect.current.value)
                        .map(item=><GelleryCard key={item.MAIN_TITLE} imgurl={item.MAIN_IMG_NORMAL} title={item.MAIN_TITLE} 
                           content={item.TITLE} htag={item.ITEMCNTNTS}/>)                  
    setSelcard(tags)
  }

  const getCatchdata=(item)=>{
    fetch(item)
    .then (resp=>resp.json())
    .then (data=> setFestivaldata(data.getFestivalKr.item))
    .then (err =>console.log(err))
  }

  useEffect(()=>{
    let url=`https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`
    url=url +`serviceKey=${process.env.REACT_APP_FES_KEY}&pageNo=1&numOfRows=37&resultType=json`
    getCatchdata(url)
    
  },[])

  useEffect(()=>{
    if (!festivaldata) return
    let tm= festivaldata.map(item=>item['GUGUN_NM'])
    tm=[...new Set(tm)]
    tm.sort()
    setOps(tm)
   
    
  },[festivaldata])

  
  return (
    <div className='w-full h-full flex flex-col justify-start items-start'>
      <form className="w-full flex justify-center items-center">
        <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 my-5">
          <label htmlFor="op" 
                 className="text-xl font-bold inline-flex justify-center items-center mr-5
                           text-gray-900 dark:text-white">
                 부산축제정보
          </label>

          {ops && <TailSelect ops={ops} selRef={refselect} initText='--지역선택--' handleChange={handleGuselect} id='op'/>}
          


        </div>
      </form> 
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {selcard}        
      </div>
    </div>
  )
}


