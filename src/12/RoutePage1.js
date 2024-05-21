import { useParams } from "react-router-dom"
export default function RoutePage1() {
  const item=useParams().item1;
  const fruits=['🍎','🍌']
  
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {/* RoutePage1.{item} */}
      <h2>{fruits.includes(item) ? `${item}과일입니다` : `${item}과일이 아닙니다`}</h2>
    </div>
  )
}
