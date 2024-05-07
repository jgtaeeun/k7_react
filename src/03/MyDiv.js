import MyDiv2 from "./MyDiv2";
import { useState } from "react";

export default function MyDiv() {
  //state변수
  const [n, setN] = useState(0);     //count처럼 증가하는 값은 n , setN은 n값을 바꿔 출력하는 것
                                    //리액트가 알아서 n값이 바뀔 때 setN을 알아차리고 돔을 재구성 한다.

  const dname1 = 'vdiv1';
  const dname2 = 'vdiv2';
  const dname3 = 'vdiv3';
  let count=0;

  const handleCount=()=>{
    count+=1;
    setN(n+1);
    console.log("handleCount", count);
  }

  return (
    <div className="flex flex-col justify-center items-center p-10 m-10 w-3/4 h-3/4 text-lg  text-white bg-lime-900">
    <div className="flex w-full justify-end items-center border p-5 m-5" >
     <span className="inline-flex p-2 mx-5 text-3xl" onClick={handleCount}>💚</span> 
     <span>{n}</span> 
    </div>
    
    <div className="w-full" >
      {dname1} 
    </div>
    <MyDiv2 dn1={dname1}dn2={dname2}dn3={dname3}/>
    </div>
  );


}


