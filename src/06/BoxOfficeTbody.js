import { AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";

export default function BoxOfficeTbody({List,setSelMv}) {
    // console.log(List);
    const handleMvSelect=(mv)=>{
        // console.log("handleMvSelect" ,mv)
        setSelMv(mv);

    }

    const tags = List.map(item =>  
    <tr key={item.movieCd} 
        onClick={()=>{handleMvSelect(item)}} 
        className="border-b border-neutral-200 hover:bg-neutral-100">
        <td className="whitespace-nowrap px-6 py-3 font-medium">{item.rank}</td>
        <td className="whitespace-nowrap px-6 py-3">{item.movieNm}</td>
        <td className="whitespace-nowrap px-6 py-3 text-right">{parseInt(item.salesAcc).toLocaleString()}</td>
        <td className="whitespace-nowrap px-6 py-3 text-right">{parseInt(item.audiAcc).toLocaleString()}</td>
        <td className="px-6 py-3  flex justify-center items-center">
            <span>
            {item.rankInten>0 ? <AiFillCaretUp className="text-red-600"/>: 
            item.rankInten<0 ? <AiFillCaretDown className="text-blue-600"/>:'-' }</span>
            <span>{parseInt(item.rankInten)!==0 && Math.abs(item.rankInten)}</span>
        </td>
        
    </tr>)



  return (
    
      <tbody>
           
        {tags}
        
      </tbody>
    
  )
}
