import box from './BoxOffice.json'
import BoxOfficeTbody from './BoxOfficeTbody';
import BoxOfficeThead from './BoxOfficeThead';
import BoxOfficeInfo from './BoxOfficeInfo';
import {useState, useEffect} from "react";

export default function BoxOffice() {
    const  [dailyList , setDailyLst] =useState([]);
    const [selMv, setSelMv]=useState();

    useEffect(()=>{
      setDailyLst(box.boxOfficeResult.dailyBoxOfficeList);
    },[]);

    useEffect(()=>{
      setSelMv(dailyList[0]);
    },[dailyList]);


    return (
    
<div className="w-full h-full">
  <div className="w-full flex flex-col justify-start items-center mt-10">
   <div className="w-11/12 text-left  text-sm font-light text-surface">
    <table
          className="w-full text-left  text-sm font-light text-surface">
          <BoxOfficeThead />
          <BoxOfficeTbody List={dailyList} setSelMv={setSelMv} /> {/* //probs로 전달 */}
          
    </table>
    {selMv && <BoxOfficeInfo select={selMv}/>} 
   </div>
  </div>
</div>
  )
}

