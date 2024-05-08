import Ball from './Ball';
import ButtonA from '../UI/ButtonA';
import { useState } from 'react';
export default function Lotto() { 
  
  const [tags , setTags]=useState();
  const handleOk=()=>{
    let arr = [] ;

    while(arr.length < 7){
      let n = Math.floor(Math.random() * 45) + 1 ;

      if (!arr.includes(n)) arr.push(n)
    }

    let tm = arr.map(item => 
                        <Ball n={item} key ={item}/> //동적배열일 때 키값 필요
    );

    //배열 중간 추가
    tm.splice(6, 0, <span key ="sp" >+</span> );           //span태그에도 키값
    // console.log(tags)

    setTags(tm);                                             //버튼 누를 때마다 공의 숫자가 바뀜
  }
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
        <div>
            {/*<Ball n={42}/> */} {tags}
        </div>
        <div>
        <ButtonA caption={'확인'} bcolor={'blue'} handleClick={handleOk}/>
        </div>
    </div>
  )
}



    

    