import bank from './img/bank.png';
import busan from './img/busan.png';
import market from './img/market.png';
import { useState } from 'react';

export default function FoodCard({data}) {
   
    const [isShow, setIsShow]=useState(false); //회색p태그가 클릭될 때 연락처가 보여지는 것을 만들자.

    const handleShow=()=>{
        setIsShow(!isShow);
    } //setIsShow을 실행되도록 한다.
    

    return (
    <div className='flex w-full h-full border'>
      
      <div className='flex justify-center items-center w-1/4'>
            <img className='w-2/3 h-2/3' src={data["구분"]==="광역지원센터" ? busan :
                                            data["구분"]==="기초푸드뱅크" ? bank : market}/>
      </div>
      <div className='w-3/4 flex flex-col justify-between p-3'>
        <h1 className=' text-2xl font-bold text-black-700 '>{data["사업장명"]}</h1>
        <p className=' text-lg font-bold text-gray-700 '>{data["운영주체명"]}</p>
        <p className=' text-gray-500 '>{data["사업장 소재지"]}</p>
        
        <div className='h-8 p-1 bg-gray-800 text-white' onClick={handleShow}>
          {isShow && <p> {data["연락처(대표번호)"]}</p>}
        </div>

      </div>
    </div>
  )
}
