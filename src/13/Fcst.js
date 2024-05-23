import ButtonA from "../UI/ButtonA";
import TailSelect from "../UI/TailSelect";

import getxy from "./getxy.json";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function Frcst() {
  const navigate = useNavigate();
  const [ops, setOps] = useState([]);
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [area, setArea] = useState();

  const inRef = useRef();
  const selRef = useRef();

  const handleArea = () => {
    let tm = getxy.filter(item => item["1단계"] === selRef.current.value)  ;
    tm = tm[0] ;
    console.log(tm)  
    setX(tm["격자 X"]) ;
    setY(tm["격자 Y"])
    setArea(selRef.current.value) ;
  }

  const handleUrl = (gubun) => {
    if (!x || !y || !inRef.current.value ) {
      alert('날짜와 지역을 선택하세요.') ;
      return;
    }

    navigate(`/FcstList?gubun=${gubun}&x=${x}&y=${y}&dt=${inRef.current.value.replaceAll('-','')}&area=${area}`)
  }


  //컴포넌트 생성시
  useEffect(() => {
    let tm = getxy.map(item => item["1단계"]) ;
    // console.log(tm)
    setOps(tm);
  } , []) ;

  useEffect(() => {
    console.log('x=', x, 'y=', y, 'area=', area, 'dt=', inRef.current.value)
  })
  return (
    <div className="w-full max-h-full felx felx-col justify-start items-center bg-white">
 {/* <Link to='/FcstList'>단기예보</Link> */}
     <div className="w-full h-20 text-xl font-bold flex justify-between items-center p-5  mt-3 bg-slate-50">
        <p>🌈기상청예보</p> 
        <p className='text-2xl'>⭐</p>
     </div>
     <div className="w-full  text-xl font-bold flex flex-col justify-center items-center p-2 mt-3 max-h-full  bg-green-200">
       <div className="w-full  text-lg  flex  justify-start items-center p-5 bg-slate-100">
         단기예보 입력정보
       </div>
       <div className="w-full  text-lg  flex  justify-between items-center p-5 mt-2 bg-slate-100">
         <div className="w-1/2 flex  justify-center items-center bg-yellow-100 p-3">
            <input className='w-full' type='date' id='day' ref={inRef}/>
         </div>
         <div className="w-1/2 flex  justify-center items-center bg-green-100 p-3">
            <div className="w-full">    
                <TailSelect ops={ops} selRef={selRef} initText='항목선택'
                 handleChange={handleArea} id='selList'/>
            </div>
         </div>
       </div>
       <div className="w-full text-lg  flex  justify-between  items-center p-5 mt-2 bg-slate-100">
         <div className="w-1/2 flex  justify-center items-center bg-yellow-100 p-3">
            <div className="w-full">
                <ButtonA caption='초단기예보' bcolor='blue' handleClick={()=>{handleUrl('초단기')}}/>
            </div>
         </div>
         <div className="w-1/2 flex  justify-center items-center bg-green-100 p-3">
            <div className="w-full">
                <ButtonA caption='단기예보' bcolor='blue' handleClick={()=>{handleUrl('단기')}}/>
            </div>
         </div>
       </div>
     </div>
    </div>
  )
}
