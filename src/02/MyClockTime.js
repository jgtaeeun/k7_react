import './MyClockTime.css';
import style from './My.module.css';
import { useState, useEffect } from 'react';
function MyClockTime(){
   const [ctime, setCtime] =useState(new Date());
   useEffect(()=>{
      const tm = setInterval(()=>{setCtime(new Date());},1000);
      return ()=>clearInterval(tm);
   },[]);


   // const now = new Date();
   // const nowStr =now.toLocaleTimeString();
    
    
   //  const gubun= nowStr.substring(0,2);
   //  const st = {color :"yello" , fontWeight:"bold"};
   // let divStyle;
   // if (gubun=='오전') divStyle="div1";
   // else divStyle="div2";

    return (
       // <div className={divStyle}>현재시각: {nowStr}</div>
     <>
     {/*   {
        (gubun ==='오전') ?<div className='div1'>현재시각: {nowStr}</div> 
                        :<div className='div2'>현재시각: {nowStr}</div> 
       } */}

    {/*<div style={{color:"red", fontWeight: "bold"}}>*/}
    {/*<div style={st}>{nowStr}</div>*/}

     <div className={style.c1}>
     {/* {nowStr} */}
      {ctime.toLocaleTimeString()}
     </div> 

    
    </>
    );
}
export default MyClockTime;