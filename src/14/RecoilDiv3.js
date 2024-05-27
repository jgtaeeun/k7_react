import ButtonA from "../UI/ButtonA";
import { Atoms } from "./Atoms";
import {useRecoilState} from "recoil";

export default function RecoilDiv3() {
  const [n, setN]= useRecoilState(Atoms);
  const handleUp=()=>{
    setN(n+1)
  }
  const handleDown=()=>{
    setN(n-1)
  }
  const handleSave=()=>{
    localStorage.setItem('n', n);}
  const handleDelete=()=>{
    localStorage.removeItem('n')
    setN(0)
  }

  return (
    <div className="flex flex-col justify-center items-center
    text-2xl font-bold">
    <div>
        RecoilDiv3 : n={n}  
    </div>
    <div>
        <ButtonA caption='증가' bcolor='orange' handleClick={handleUp}/>
        <ButtonA caption='감소' bcolor='orange' handleClick={handleDown}/>
        <ButtonA caption='Local Storage 저장' bcolor='orange' handleClick={handleSave}/>
        <ButtonA caption='Local Storage 삭제' bcolor='orange' handleClick={handleDelete}/>
    </div>
    </div>
  )
}
