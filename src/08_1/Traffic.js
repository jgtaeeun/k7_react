import TrafficMenu from "./TrafficMenu";
import { useState,useEffect } from "react"

export default function Traffic() {
    const [tdata, setTdata]=useState(); 
    const [c1, setC1] =useState();           //대분류 데이터
    const [selC1, setSelC1] = useState();      //선택된 대분류

    const [c2, setC2] =useState();           //중분류 데이터
    const [selC2, setSelC2] = useState();      //선택된 중분류

    const [info, setInfo] = useState();            //상세정보

    const getFetchData=(url)=>{
        fetch(url)
        .then(resp=>resp.json())      //fetch로 받아온 데이터를 resp변수에 저장하고 json파일로 받는다.
        .then(data=>setTdata(data.data))   //json파일로 받은 데이터를 data변수에 저장함.Object 타입의 data에서 필요한 부분은 키값이 data인 부분이다. 그래서 data.data로 추출한다.
        .catch(err=>console.log(err));
    }


    //컴포넌트 첫 실행시
    useEffect(()=>{   //컴포넌트 생성시 한번 실행됨 
        let url='https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9'
        // url=url+'page=1&perPage=17 &returnType=JSON &serviceKey=99Czfkf9nY8gVuFc405%2BrV4DtTMLC%2FvQU8Xqlg55%2FrzDb8IpjmDRLQ8tGbLOF9i6ocZPncn5rSoyRKNIQI09rA%3D%3D'
        url=`${url}?page=1&perPage=17&returnType=JSON&serviceKey=${process.env.REACT_APP_API_KEY}`
        
        console.log(url)
        getFetchData(url)    //사용자정의 함수
    },[]);  
   


    // //tdata가 변경될 때
    useEffect(()=>{
        if (!tdata) return;    //tdata가 false라면 함수종료
        let tm=tdata.map(item=>item['사고유형_대분류'])
        tm=[...new Set(tm)]
        setC1(tm)
        // console.log(tm)
    },[tdata])
    
    //대분류가 생성이 되면 
    useEffect(()=>{
        if (!c1 || !tdata) return;
        console.log("c1 생성",c1)
    },[c1])

    //대분류 버튼이 선택되면 c2를 만들 수 있다.
    useEffect(()=>{
        if(!tdata || !c1 ||!selC1) return;
        let tm=tdata.filter(item=>item['사고유형_대분류']===selC1)
                    .map(item=>item['사고유형_중분류'])
        setC2(tm)
        console.log(tm)
        setInfo('')
    },[selC1])
    
    //중분류가 선택되면
    useEffect(()=>{
        console.log("대분류",selC1)
        console.log("중분류",selC2)
        if (!tdata || !c1 || !selC1 || !c2 ||!selC2) return;
        let tm= tdata.filter(item=>item['사고유형_대분류']===selC1 &&
                                item['사고유형_중분류']===selC2)
        tm=tm[0]
        console.log(tm)
        // setInfo(tm['사고건수'])
        const infokey=['사고건수','사망자수','중상자수','경상자수','부상신고자수']
        tm=infokey.map(item=> <div key={item} className="flex flex-col">
                                <div className="h-10 flex items-center justify-center bg-lime-400 bold text-xl text-white">
                                    {item}
                                </div>
                                <div  className="h-10 flex items-center justify-center text-xl">
                                    {/* {tm[item]} */}
                                     {parseInt(tm[item]).toLocaleString()} {/* 숫자로 변환되어 1000단위로 콤마 찍힌다.  */}
                                </div>
                                </div>)
        setInfo(tm)

    },[selC2])



    return (
    <div className="w-full h-full flex flex-col justify-start items-center">
     
        <div className="w-full flex justify-start items-center">  
            {c1 && <TrafficMenu title="대분류" c={c1} sel={selC1} setSel={setSelC1}/>}
        </div> 
        <div className="w-full flex justify-start items-center">  
            {c2 && <TrafficMenu title="중분류" c={c2} sel={selC2} setSel={setSelC2}/>}
        </div> 
        <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
         {info}
        </div>
    </div>
    )
}
