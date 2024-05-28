import { useEffect, useState, useRef } from "react"
import ButtonA from "../UI/ButtonA";
import { BsDatabaseExclamation } from "react-icons/bs";
export default function Test() {
  const [tdata, setTdata]=useState([]);
  const [content, setContent]=useState();
  const refTitle = useRef();
  const refPerson = useRef();
  const [isupdate, setIsupdate] =useState(false);   //버튼이 입력인지, 수정인지 정하는 방법
  const[isupdateID, setIsupdateID]=useState();          //id값을 isupdate로는 넘길 수 없어서 새로운 변수만들었다.
 
    //비동기처리를 할 때 밑의 문장은 처리하지 않는다.
    //await이 끝나야 다음 밑의 문장이 실행된다.
    //fetch가 끝날 때까지 기다렸다가 response json이 실행된다.
  const getfetchData=async (url)=>{      
    const resp=await fetch(url);
    const data=await resp.json();
    setTdata(data)
    
  }
  const jsonPost=async()=>{
   // console.log('post')
    if (refTitle.current.value === ''){
      alert('제목을 입력하세요')
      refTitle.current.focus()
      return
    }
    if (refPerson.current.value === ''){
      alert('작성자를 입력하세요')
      refPerson.current.focus()
      return
    }
  
    const postdata={ title:refTitle.current.value,
                       author:refPerson.current.value
    }
    let url = 'http://localhost:3005/posts'
    const resp=await fetch(url, {
                  method : 'POST',
                  headers : {'Content-Type':'application/json'},
                  body : JSON.stringify(postdata)
             })
  const data = await resp.json()
  console.log(data)
  setTdata([ ...tdata,data])
  refTitle.current.value='';
  refPerson.current.value='';
  setIsupdate(true)
  }
  const jsondelete=async(id)=>{
    //console.log(id)
    let url=`http://localhost:3005/posts/${id}`;
    await fetch(url , {
      method : 'DELETE',
    })
    setTdata(tdata.filter(item=>item.id !== id))
  }

  const jsonupdate=(item)=>{
      console.log(item)
      refTitle.current.value=item.title
      refPerson.current.value=item.author
      setIsupdate(true)
      setIsupdateID(item.id)
    }
  const jsonupdate2=async()=>{
    console.log("jsonupdata2", isupdateID);

    const putdata= {
      id : isupdateID ,
      title: refTitle.current.value,
      author: refPerson.current.value
    }
      
    let url = `http://localhost:3005/posts/${isupdateID}`
    const resp=await fetch(url, {
            method : 'PUT',
            headers : {'Content-Type':'application/json'},
              body : JSON.stringify(putdata)
    })
    const data = await resp.json()
    console.log(data)

    setTdata(tdata.map(item=>item.id ===isupdateID ? data : item))
    refPerson.current.value=''
    refTitle.current.value=''
    setIsupdate(false)
    setIsupdateID('')
    
   
  }

  const handleinput=()=>{
    if (isupdate)  jsonupdate2();
    else jsonPost();
  }
  
  useEffect(()=>{
    let url = 'http://localhost:3005/posts'
    getfetchData(url)
  },[])

  useEffect(()=>{
   if (!tdata) return
   console.log(tdata)
   let tm = tdata.map(item=>    <tr key={item.id} className='w-full flex justify-between items-center bg-white text-black font-bold p-3'>
        <td>{item.id}</td>
        <td >{item.title}</td>
        <td >{item.author}</td>
        <td ><a href='#' className='inline-flex  hover:bg-red-500'
                         onClick={()=>jsondelete(item.id)}>[삭제]</a></td>
        <td ><a href='#' className='inline-flex  hover:bg-red-500'
                          onClick={()=>jsonupdate(item)}>[수정]</a></td>
        </tr>
    )
   setContent(tm)
                           
                  
                     
  },[tdata])

  

  return (
    <div  className='w-full flex flex-col justify-center items-center'>
      <div className='w-full flex justify-center items-center'>
        <label className='p-2' htmlFor="">제목</label>
        <input className='p-2 bg-slate-100' id='inputdata1' type='text' ref={refTitle}></input>
        <label className='p-2' htmlFor="">작성자</label>
        <input className='p-2 bg-slate-100' id='inputdata2' type='text' ref={refPerson}></input>
        <ButtonA  caption={isupdate ? '수정':'입력'} bcolor='orange' handleClick={handleinput}/>
      </div>  
      <table  className='w-full flex flex-col justify-center items-center'>
      <thead className='w-full flex justify-between items-center'>
       <tr className='w-full flex justify-between items-center bg-black text-white font-bold  p-3'>
              <th scope="col" >id</th>
              <th scope="col" >title</th>
              <th scope="col" >author</th>   
              <th scope="col" >삭제</th>   
              <th scope="col" >편집</th>   
      </tr>
      </thead>
      <tbody  className='w-full flex flex-col justify-between items-center '>
      {content}
      </tbody>
      </table>
    </div>
  )
}
