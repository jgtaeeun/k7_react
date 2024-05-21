import ButtonA from "../UI/ButtonA"
import { useNavigate } from "react-router-dom"

export default function RouteNav() {
  const navigate= useNavigate()
  return (
    <div className="w-full grid grid-cols-3">
      <ButtonA caption='Home' bcolor='blue' handleClick={()=>{navigate('/')}}/>
      <ButtonA caption='Page1' bcolor='blue' handleClick={()=>{navigate('/p1/1')}}/>
      <ButtonA caption='Page2' bcolor='blue' handleClick={()=>{navigate('/p2')}}/>

      
    </div>
  )
}
