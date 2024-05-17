import BoxOfficeTbody from './BoxOfficeTbody';
import BoxOfficeThead from './BoxOfficeThead';
import BoxOfficeInfo from './BoxOfficeInfo';
import {useState, useEffect, useRef} from "react";

export default function BoxOffice() {
    const  [dailyList , setDailyLst] =useState([]);
    const [selMv, setSelMv]=useState();
    const seldate=useRef()

    const getCatchData=(i)=>{
      fetch(i)
      .then (resp=>resp.json())
      .then (data=> setDailyLst(data.boxOfficeResult.dailyBoxOfficeList))
      .catch(err=>console.log(err))
    }
    //날짜가 선택되었을 때
    const handleSelect=(e)=>{
      e.preventDefault();   
      // console.log(seldate.current.value)
      // console.log(e.target.value) ref변수 안 쓰고 날짜선택되었을 때 콘솔에 날짜 출력

      /*http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101
      */
      let url=`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
      url = url+`key=${process.env.REACT_APP_MV_KEY}`;
      url = url+`&targetDt=${seldate.current.value.replaceAll('-' ,'')}`;   //2024-05-17에서 -를 제거한다. 

      console.log(url)

      getCatchData(url)
    }

    useEffect(()=>{
      setSelMv(dailyList[0]);
    },[dailyList]);


    return (
    
<div className="w-full h-full">
  <div className="w-full flex flex-col justify-start items-center mt-10">
   <div className="w-11/12 text-left  text-sm font-light text-surface">
    <form className="w-full">
      <div className="w-full mb-3 flex justify-end items-center">
       <label htmlFor='dateId' className='mx-5'>
        날짜선택
       </label>
       <input type='date' id='dateId' ref={seldate} onChange={handleSelect}/>
       
      </div>
    </form>
    <table
          className="w-full text-left  text-sm font-light text-surface">
          <BoxOfficeThead />
          <BoxOfficeTbody List={dailyList} setSelMv={setSelMv} />  
          
    </table>
    {selMv && <BoxOfficeInfo select={selMv}/>} 
   </div>
  </div>
</div>
  )
}

