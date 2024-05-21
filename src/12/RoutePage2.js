// import { useLocation } from "react-router-dom";
// import qs from 'query-string';
import { useSearchParams , useLocation} from "react-router-dom"

export default function RoutePage2() {

  const fruits=['🍎','🍌']
  // const location = useLocation().search;
  // const item = qs.parse (location).item;

  // const loc =useLocation().search;  
  // console.log(loc)  // ?item=%F0%9F%8D%8E
  // const [sParams] = useSearchParams();
  // const item = sParams.get('item');
  

  const loc =useLocation().search;
  console.log(loc)
  const [sParams] = useSearchParams();
  let tm=[]
  sParams.forEach(item => fruits.includes(item) ? tm.push(`${item}:과일`) : tm.push(`${item}:과일아님`))
  
  return (
    <div className="w-full flex flex-col justify-center items-center">
     
      {/* <h2>{fruits.includes(item) ? `${item}과일입니다` : `${item}과일이 아닙니다`}</h2> */}
      {tm.join(',')}
    </div>
    
  )
}
