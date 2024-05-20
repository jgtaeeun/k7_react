import GelleryCard from './GelleryCard';
import { useState, useEffect,useRef } from 'react';
import ButtonA from '../UI/ButtonA'
export default function Gellery() {

  
//   const imgurl1="https://res.cloudinary.com/practicaldev/image/fetch/s--Is1BG4-B--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jir3csift2d3h44mginl.jpg"
//   const title1 = "Cards"
//   const content1="Examples of building card components with Tailwind CSS."
//   const htag1="#photography, #travel, #winter" 
//   const imgurl1="https://v1.tailwindcss.com/img/card-top.jpg"
//   const title1 = "태종대유원지"
//   const content1=" 부산광역시 영도구 동삼동"
//   const htag1="태종대유원지, 부산광역시 영도구, 명승 제17호, 태종사, 절, 사찰, 종교, 불교" 
  
  const [tourdata, setTourdata]=useState();
  const [cards, setCards]=useState();
  const place= useRef();


  const getCatchData=(i)=>{   
    fetch(i)
    .then(resp=>resp.json())
    .then(data=>setTourdata(data.response.body.items.item))
    .catch(err=>console.log(err))
  }
  // form으로 감쌌을 때는 e.preventdefault()
  const handleok=(e)=>{
    //컴포넌트 생성될 때
   e.preventDefault();
   if (place.current.value==='')
    { alert('키워드를 입력하세요')
      place.current.focus()
      return
    } 
   let i=encodeURI(place.current.value)
   let url=`https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=99Czfkf9nY8gVuFc405%2BrV4DtTMLC%2FvQU8Xqlg55%2FrzDb8IpjmDRLQ8tGbLOF9i6ocZPncn5rSoyRKNIQI09rA%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${i}&_type=json`
   console.log(url)
   getCatchData(url)
  }

  const handlecancel=(e)=>{
    e.preventDefault();
    place.current.value=' '
    setCards('')
    setTourdata('')
    place.current.focus()
    
  }


  // //컴포넌트 생성될 때
  // useEffect(()=>{
  //   let url='https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=99Czfkf9nY8gVuFc405%2BrV4DtTMLC%2FvQU8Xqlg55%2FrzDb8IpjmDRLQ8tGbLOF9i6ocZPncn5rSoyRKNIQI09rA%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ED%83%9C%EC%A2%85%EB%8C%80&_type=json'
  //   // let url=`https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=99Czfkf9nY8gVuFc405%2BrV4DtTMLC%2FvQU8Xqlg55%2FrzDb8IpjmDRLQ8tGbLOF9i6ocZPncn5rSoyRKNIQI09rA%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${place.current}&_type=json`
   
  //   console.log(url)
  //   getCatchData(url)

  // },[])
  useEffect(()=>{
    
  }, []);
  useEffect(()=>{
    if(!tourdata) return;
    let tm = tourdata.map(item=><GelleryCard key={item.galTitle} imgurl={item.galWebImageUrl} title={item.galTitle} 
                                content={item.galPhotographyLocation} htag={item.galSearchKeyword}/>)
    setCards(tm)                            
  },[tourdata])
  

  return (
    <div className='w-full h-full flex flex-col justify-start items-start'>
      <div className='w-full h-1/10 flex flex-col justify-start items-start bg-slate-300'>
         <span className='w-full h-1/3 flex justify-center items-center text-2xl bold text-black ' >한국관광공사_관광사진 정보</span>
         <div className='w-full h-2/3 flex justify-center items-center bg-slate-200' >
            <input type='text' id='txt1' ref={place}/>
            <div className='mx-2'/>
            <ButtonA caption='확인' bcolor={'blue'} handleClick={handleok}/>
            <ButtonA caption='취소' bcolor={'blue'} handleClick={handlecancel}/>
         </div>  
      </div>  
      <div className='w-full h-9/10 grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gaps-2 bg-slate-100'>
            {cards} 
      </div>
    </div>
    
  )
}


