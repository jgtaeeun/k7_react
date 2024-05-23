import { useSearchParams } from "react-router-dom" ;
import { useState, useEffect, useRef } from "react";
import TailSelect from "../UI/TailSelect";
import getcode from './getcode.json' ;

export default function FrcstList() {
 //url 전달 값 
  const [sParms] = useSearchParams() ;
  const gubun = sParms.get('gubun') ;
  const x = sParms.get('x') ;
  const y = sParms.get('y') ;
  const dt = sParms.get('dt') ;
  const area = sParms.get('area') ;
  // console.log(gubun, x, y, dt, area) ;
 
 //state 변수
  const [tdata, setTdata] = useState();       //예보 정보
  const [ops, setOps] = useState([]) ;
  const[selcode, setSelcode] = useState() ; //선택한 항목에 대한 코드정보
  const[finalinfo, setFinalinfo]=useState()
 //ref 변수
  const selRef = useRef() ;
  //코드변수

  const sky={'1':'맑음🌞', '3':'구름많음','4':'흐림⛅'}
  const pty={'0':'없음','1':'비☔','2':'비/눈☔⛄','3':'눈','4':'소나기','5':'빗방울💧','6':'빗방울눈날림','7':'눈날림'}

 //항목선택
// data fetch
  const getFetchData = (url) => {
   fetch(url)
     .then(resp => resp.json())
     .then(data => {
       console.log("fetch", data)
       setTdata(data.response.body.items.item)
     })
     ;
  }
  const handleSelect = () => {
   console.log(selRef.current.value)
   let tm= getcode.filter(item=> (gubun === '단기' ? item["예보구분"] === "단기예보": item["예보구분"] === "초단기예보" )&&
                                  item['항목명']===selRef.current.value)

  setSelcode(tm[0])  //배열을 object로 저장
  }
 //컴포넌트 생성시
  useEffect(() => {
   //항목 select 
   
   let tm = getcode.filter( item => gubun === '단기' 
                                     ? item["예보구분"] === "단기예보"
                                     : item["예보구분"] === "초단기예보")
                   .map( item => item["항목명"])

  //  console.log(tm)
   setOps(tm) ;

   let url ;

   if ( gubun === '초단기') {
     url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?`;
     url = url + `serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=900&pageNo=1&dataType=json&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}` ;
   }
   else {
     url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?`;
     url = url + `serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=900&pageNo=1&dataType=json&base_date=${dt}&base_time=0500&nx=${x}&ny=${y}` ; 
   }
   console.log(url)
   getFetchData(url) ;
   } , [gubun,x,y,dt]);

  useEffect(() => {
   console.log(tdata)
  } , [tdata]);
  
  useEffect(()=>{
      console.log(selcode)
      if (!tdata || !selcode) return
      let tm=tdata.filter(item=>item['category']===selcode["항목값"])
                  .map(item=>
        <tr key={`${item['fcstDate']}${item['fcstTime']}`} className='w-full flex justify-between items-center bg-white text-black font-bold '>
          <td className="whitespace-nowrap px-6 py-3 text-right">{selcode["항목명"]}({item['category']})</td>
          <td className="whitespace-nowrap px-6 py-3 ">
          {`${item["fcstDate"].substring(0, 4)}-${item["fcstDate"].substring(4, 6)}-${item["fcstDate"].substring(6, 8)}`}
            </td>
          <td className="whitespace-nowrap px-6 py-3 ">
            {`${item['fcstTime'].substring(0, 2)}:${item['fcstTime'].substring(2, 4)}`}
            </td>
          <td className="whitespace-nowrap px-6 py-3 text-right">
            {
            item['category']==='SKY' ? sky[item['fcstValue']]: 
            item['category']==='PTY' ? pty[item['fcstValue']]: 
             `${item['fcstValue']}${selcode['단위']}`
            }
          </td>
        </tr>
          )
      console.log(tm)   
      setFinalinfo(tm)    
  },[selcode])

  

  return (
    <div className="w-full max-h-full felx felx-col justify-start items-center bg-white">
 
     <div className="w-full h-20 text-xl font-bold flex justify-between items-center p-5  mt-3 bg-slate-50">
        <p>🌈기상청예보</p> 
        <p className='text-2xl'>⭐</p>
     </div>
     <div className="w-full  text-xl font-bold flex  justify-center items-center p-2 mt-3 max-h-full  bg-green-200">
         <div className="w-1/2 flex  justify-start items-center bg-yellow-100 p-3">
            {gubun}예보({dt}, {area})
         </div>
         <div className="w-1/2 flex  justify-center items-center bg-green-100 p-3">
            <div className="w-full">    
                <TailSelect ops={ops} selRef={selRef} initText='항목선택'
                 handleChange={handleSelect} id='selList2'/>
            </div>
         </div>
     </div>
     <div className="w-full  text-xl font-bold flex  flex-col justify-center items-center p-2 mt-3 max-h-full  bg-orange-200">
      <table className="w-full text-left text-sm font-light text-surface">
        <thead
            className=" w-full flex justify-center items-center border-b border-neutral-200 font-medium">
            <tr className='w-full flex justify-between items-center bg-white text-black font-bold  '>
              <th scope="col" className="px-6 py-3">항목명</th>
              <th scope="col" className="px-6 py-3">예측일자</th>
              <th scope="col" className="px-6 py-3">예측시간</th>
              <th scope="col" className="px-6 py-3">예보값</th>
              
            </tr>
        </thead>
      
        <tbody
          className=" w-full flex flex-col justify-center items-center border-b border-neutral-200 font-medium">
        
          {finalinfo}
        </tbody>
      </table>
     </div>
    </div>
  )
}
