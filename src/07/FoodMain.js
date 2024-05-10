import fooddata from './fooddata.json';
import ButtonA from '../UI/ButtonA';
import FoodCard from './FoodCard';
import { useState } from 'react';


export default function FoodMain() {
    let c1 = fooddata.map(item =>  item['운영주체 분류'] )   //공백이 있는 경우, item.'운영주체 분류'가 아닌 배열 형태로
    
    c1 = new Set(c1);   //중복제거, Prototype: Set
    c1 = [...c1];     //[...]은 set을 배열로 풀어쓰는 것이다.

    const handleFood=(c)=>{
        // console.log(c)
        let tm=fooddata.filter(item=>item["운영주체 분류"]==c)
                        .map(item=> <FoodCard key={item["사업자명"]} data={item} />)
        // console.log(tm)   tm배열만 FoodCard만들면 된다.
        setC1List(tm)
    }

    const [c1List, setC1List]=useState([]);

   
    
    const foodbts= c1.map(item=> <ButtonA key={item} caption={item} 
                                         bcolor={'blue'}
                                         handleClick={()=>handleFood(item)} />)

    //let c1List=fooddata.map(item=><FoodCard key={item} data={item} />)

    return (
    <div className='flex flex-col items-center w-full h-full'>
      <div className='w-11/12 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-4 justify-items-stretch  bg-blue-200 '>
      {foodbts}
      </div>
      <div className='w-11/12 grid md:grid-cols-2 gap-4'>
             {c1List}  {/*c1List가 state여야지 버튼클릭할 때마다 foodcard달라진다. */}
      </div>
    </div>
  )
}
