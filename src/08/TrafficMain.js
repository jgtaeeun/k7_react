import { useState,useEffect } from "react"
import ButtonA from "../UI/ButtonA";

export default function TrafficMain() {
    const [ tdata, setTdata] = useState([]);   //전체 useState   //.then(data=>tdata=data.data)
    const [c1, setC1] =useState([]);              //대분류 useState 
    const [b1, setB1] =useState();                  //대분류 버튼
    const [bb1, setBB1] =useState();                  //대분류버튼에서 선택된 버튼 
    
    const [c2, setC2] =useState([]);              //중분류 useState 
    const [m1, setM1] =useState();                  //중분류 버튼
    const [mm1, setMM1] =useState();                  //중분류버튼에서 선택된 버튼 

    const [info, setInfo]= useState();              //상세정보 

    const getFetchData=(url)=>{
        fetch(url)      
        // .then(resp => console.log(resp))   //fetch를 던지고 갔다 돌아올 때
        .then(resp => resp.json())               //response.json()은 json파일형태로 바꾸는 과정
        // .then(data=>console.log(data.data))     //json형태 파일=data에서 키값이 data인 Array만 들고 오면 된다.data.data
        .then(data=>setTdata(data.data)) 
        .catch(err=>console.log(err))
    }
    
   
    const handleClickC1=(n)=>{   //대분류버튼에서 선택된 버튼  매개변수 n /인수 item
        setBB1(n)
       
    }
    const handleClickC2=(n)=>{   //중분류버튼에서 선택된 버튼  매개변수 n /인수 item
        
        setMM1(n)
    }



    //tdata= undefined
    useEffect(()=>{   //컴포넌트 생성시 한번 실행됨 
        let url='https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9'
        // url=url+'page=1&perPage=17 &returnType=JSON &serviceKey=99Czfkf9nY8gVuFc405%2BrV4DtTMLC%2FvQU8Xqlg55%2FrzDb8IpjmDRLQ8tGbLOF9i6ocZPncn5rSoyRKNIQI09rA%3D%3D'
        url=`${url}?page=1&perPage=17&returnType=JSON&serviceKey=${process.env.REACT_APP_API_KEY}`
        
        console.log(url)
        getFetchData(url)    //사용자정의 함수
    },[]);  
    //
    useEffect(()=>{
        //tdata가 정의되지 않을 때, 빈 값일 때
        if (tdata.length===0) return;       //return은 함수종료
        
        console.log("tdata=",tdata);

        let tm = tdata.map(item => item['사고유형_대분류'])     //17개 그대로 나온다.
        tm= new Set(tm)     //중복을 없애기 위해 Set을 씀.결과는 set형태임
        tm=[...new Set(tm)] ;       //set형태를 array로
        setC1(tm)
        console.log(tm)
        
    },[tdata])
    //대분류 생성후
    useEffect(()=>{
        if (!c1)  return;
        console.log("c1",c1)
        setB1(c1.map(item=> <ButtonA key={item} caption={item} bcolor='blue' handleClick={()=>{handleClickC1(item)} }/>))
    },[c1])      
    
    useEffect(()=>{
        console.log("대분류버튼에서 선택된 버튼 1개",bb1)
        let tm = tdata.filter(item=>item['사고유형_대분류']===bb1)        //대분류버튼에서 선택된 bb1이랑 사고유형_대분류가 같은 것을 중분류로 생성
                      .map(item=>item['사고유형_중분류']);                 //필터결과는 object이다. 그곳을 돌면서 중분류만 추출해야한다.
        console.log("중분류",tm)
        setC2(tm)
    },[bb1])

    useEffect(()=>{
        if (!c2)  return;
        setM1(c2.map(item=> <ButtonA key={item} caption={item} bcolor='blue' handleClick={()=>{handleClickC2(item)} }/>))
    },[c2])


    //중분류버튼 선택하면 상세정보 보이게 한다.
    useEffect(()=>{
        console.log("대분류버튼에서 선택된 버튼 1개",bb1)
        console.log("중분류버튼에서 선택된 버튼 1개",mm1)
        if (!bb1||!mm1) return;
        // console.log(tdata.filter(item=>item['사고유형_대분류']===bb1 && item['사고유형_중분류']===mm1 ) )   Array[0]
        let tm=tdata.filter(item=>item['사고유형_대분류']===bb1 && item['사고유형_중분류']===mm1 )
        tm=tm[0];   //[[Prototype]] : Object
        console.log(tm)
        setInfo(tm['사건건수'])

    },[mm1])

    return (                                                          
    <div className="flex flex-col w-full h-full bg-blue-400">
     <div className="flex justify-between w-full h-20 bg-yellow-400">
      <span className="w-1/4 p-2 flex text-2xl bold items-center justify-center">교통사고 대분류</span>
      <div className="w-1/2 flex items-center justify-center">{b1}</div>
     </div> 
     <div className="flex justify-between w-full h-20 bg-green-400">
        <span className="w-1/4 p-2 flex text-2xl bold items-center justify-center">교통사고 중분류</span>
        <div className="w-5/8 flex items-center justify-center">{m1}</div>
     </div>
     <div className="w-full  bg-orange-400">
            사고건수 : {parseInt(info).toLocaleString()}
     </div>
     
    </div>
  )
}
