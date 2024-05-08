import { useState, useEffect } from "react"

export default function MyListItem({title, imgUrl, content}) {
  const [count, setCount] =useState(0);  //초기값 0

  const handleClick = ()=>{
    setCount(count+1);
    console.log(title, "count=" , count); 
  }
  useEffect(()=>{
    console.log(title, '생성');
  },[]); 
  //state변수가 변경되었을 때
  useEffect(()=>{
    console.log(title, "변경 count=" , count);
  },[count]); 

  useEffect(()=>{
    console.log(title, "변경 count=" , count);
  },[]); 

  return (
    <div className="flex w-full h-full justify-center items-center bg-lime-500 ">
      <div className="flex w-1/3 m-2">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="flex flex-col justify-between w-2/3 h-full m-2 p-2">
        <div>
           <h1 className="font-bold text-xl">{title}</h1>
           <p>{content}</p> 
        </div>
        <div className="flex justify-end items-center ">
           <span onClick={handleClick}>💚</span> 
           <span className="inline-flex mx-2 font-bold" >좋아요</span>
           <span className="font-bold text-xl">{count}</span>
        </div>
      </div>
    </div>

  )
}
