import ButtonA from "../UI/ButtonA";
import { useState,useEffect,useRef } from "react";

export default function MyRef() { 
  let cVal=0;                              //화면에 카운팅이 보이지 않는다.
  const [sVal, setSVal]=useState(0);       //랜더링 될 때마다
  const rVal =useRef(0);                   //누적된 값을 state가 바뀔 때, 랜더링이 다시 될 때
  const x1=useRef();
  const x2=useRef();
  const x3=useRef();

  const hanleClickComp=()=>{
    cVal++;
    console.log(cVal)
  }
  const hanleClickState=()=>{
    setSVal(sVal+1);
  }
  const hanleClickRef=()=>{
    rVal.current=rVal.current+1;
    console.log("rVal", rVal)
  }
  const refValPlus=()=>{
    if (!x1.current.value) {
        alert('값을 입력하세요.') ;
        x1.current.focus();
        return;
      }
  
      if (!x2.current.value) {
        alert('값을 입력하세요.') ;
        x2.current.focus();
        return;
      }

    console.log("x1", x1.current.value);
    console.log("x2", x2.current.value);

    x3.current.value= parseInt(x1.current.value) + parseInt(x2.current.value);
  }
    


  useEffect(()=>{
    console.log("sVal", sVal)
  },[sVal])

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-slate-400">
        <div className="w-full h-30 flex justify-center items-center bg-slate-200">
            <span className="p-5">컴포넌트 변수:{cVal}</span>
            <span className="p-5">state 변수:{sVal}</span>
            <span className="p-5">ref 변수:{rVal.current}</span>
        </div>
        <div className="w-full h-30 flex justify-center items-center bg-slate-300">
            <ButtonA caption='컴포넌트 변수' bcolor='blue' handleClick={hanleClickComp}/>
            <ButtonA caption='state 변수' bcolor='blue' handleClick={hanleClickState}/>
            <ButtonA caption='ref 변수' bcolor='blue' handleClick={hanleClickRef}/>
        </div>   
        <div className="w-full grid grid-cols-5 gap-2  bg-slate-100">
            <input type='number' id='text1' ref={x1} className="text-gray-800 bg-slate-200 "></input>
            <span className="inline-flex justify-center items-center">+</span>
            <input type='number' id='text2'  ref={x2}className="text-gray-800 bg-slate-200 "></input>
            <ButtonA caption='=' bcolor='orange' handleClick={refValPlus}></ButtonA>
            <input type='number' id='text3'  ref={x3}className="text-gray-800 bg-slate-200 " readOnly/>
        </div>
        
      
    </div>
  )                       //ref변수는 폼태그에 주로 쓰고, 속성을 쓸 때, ref={ref변수명으로 }
}
